
const prisma = require("../config/db");
const fs = require("fs/promises");
const path = require("path");

const UPLOAD_DIRECTORY = path.resolve(
  process.cwd(),
  "uploads",
  "certificates"
);

// =====================================================
// HELPERS
// =====================================================

const parseBoolean = (value, fallback = true) => {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  if (typeof value === "boolean") return value;

  return String(value).toLowerCase() === "true";
};

const parseSortOrder = (value, fallback = 0) => {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  const number = Number(value);

  return Number.isInteger(number) && number >= 0
    ? number
    : null;
};

const parseIssueDate = (value) => {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date;
};

const getPdfUrl = (file) => {
  if (!file) return null;

  return `/uploads/certificates/${file.filename}`;
};

// Safely delete a PDF from the certificates directory.
const deletePdfFile = async (pdfUrl) => {
  if (!pdfUrl) return;

  try {
    const filename = path.basename(pdfUrl);

    if (!filename || filename === "." || filename === "..") {
      return;
    }

    const filePath = path.join(UPLOAD_DIRECTORY, filename);

    await fs.unlink(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Certificate PDF deletion error:", error);
    }
  }
};

// Delete newly uploaded file if a database operation fails.
const cleanupUploadedFile = async (file) => {
  if (!file?.filename) return;

  await deletePdfFile(getPdfUrl(file));
};

// =====================================================
// GET ALL CERTIFICATES — ADMIN
// GET /api/certificates
// =====================================================

const getAllCertificates = async (req, res) => {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: [
        { sortOrder: "asc" },
        { createdAt: "desc" },
      ],
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      count: certificates.length,
      data: certificates,
    });
  } catch (error) {
    console.error("Get all certificates error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch certificates.",
    });
  }
};

// =====================================================
// GET PUBLISHED CERTIFICATES — PUBLIC
// GET /api/certificates/published
// =====================================================

const getPublishedCertificates = async (req, res) => {
  try {
    const limit = Math.min(
      Math.max(parseInt(req.query.limit, 10) || 100, 1),
      200
    );

    const certificates = await prisma.certificate.findMany({
      where: {
        isPublished: true,
      },
      orderBy: [
        { sortOrder: "asc" },
        { issueDate: "desc" },
        { createdAt: "desc" },
      ],
      take: limit,
      select: {
        id: true,
        title: true,
        issuer: true,
        description: true,
        category: true,
        issueDate: true,
        pdfUrl: true,
        sortOrder: true,
        createdAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      count: certificates.length,
      data: certificates,
    });
  } catch (error) {
    console.error("Get published certificates error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch published certificates.",
    });
  }
};

// =====================================================
// GET CERTIFICATE BY ID — ADMIN
// GET /api/certificates/:id
// =====================================================

const getCertificateById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid certificate ID.",
      });
    }

    const certificate = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: certificate,
    });
  } catch (error) {
    console.error("Get certificate error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch certificate.",
    });
  }
};

// =====================================================
// CREATE CERTIFICATE
// POST /api/certificates
// =====================================================

const createCertificate = async (req, res) => {
  try {
    const {
      title,
      issuer,
      description,
      category,
      issueDate,
      isPublished,
      sortOrder,
    } = req.body;

    if (!title || !String(title).trim()) {
      await cleanupUploadedFile(req.file);

      return res.status(400).json({
        success: false,
        message: "Certificate title is required.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a certificate PDF.",
      });
    }

    const parsedDate = parseIssueDate(issueDate);
    const parsedOrder = parseSortOrder(sortOrder, 0);

    if (parsedDate === undefined) {
      await cleanupUploadedFile(req.file);

      return res.status(400).json({
        success: false,
        message: "Invalid certificate issue date.",
      });
    }

    if (parsedOrder === null) {
      await cleanupUploadedFile(req.file);

      return res.status(400).json({
        success: false,
        message: "Display order must be a non-negative integer.",
      });
    }

    const certificate = await prisma.certificate.create({
      data: {
        title: String(title).trim(),
        issuer: issuer?.trim() || null,
        description: description?.trim() || null,
        category: category?.trim() || null,
        issueDate: parsedDate,
        pdfUrl: getPdfUrl(req.file),
        isPublished: parseBoolean(isPublished, true),
        sortOrder: parsedOrder,
        createdById: req.user.id,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Certificate created successfully.",
      data: certificate,
    });
  } catch (error) {
    await cleanupUploadedFile(req.file);

    console.error("Create certificate error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create certificate.",
    });
  }
};

// =====================================================
// UPDATE CERTIFICATE
// PUT /api/certificates/:id
// =====================================================

const updateCertificate = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      await cleanupUploadedFile(req.file);

      return res.status(400).json({
        success: false,
        message: "Invalid certificate ID.",
      });
    }

    const existing = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!existing) {
      await cleanupUploadedFile(req.file);

      return res.status(404).json({
        success: false,
        message: "Certificate not found.",
      });
    }

    const {
      title,
      issuer,
      description,
      category,
      issueDate,
      isPublished,
      sortOrder,
    } = req.body;

    if (
      title !== undefined &&
      !String(title).trim()
    ) {
      await cleanupUploadedFile(req.file);

      return res.status(400).json({
        success: false,
        message: "Certificate title cannot be empty.",
      });
    }

    const parsedDate = parseIssueDate(issueDate);
    const parsedOrder = parseSortOrder(
      sortOrder,
      existing.sortOrder
    );

    if (issueDate !== undefined && parsedDate === undefined) {
      await cleanupUploadedFile(req.file);

      return res.status(400).json({
        success: false,
        message: "Invalid certificate issue date.",
      });
    }

    if (parsedOrder === null) {
      await cleanupUploadedFile(req.file);

      return res.status(400).json({
        success: false,
        message: "Display order must be a non-negative integer.",
      });
    }

    const updateData = {
      ...(title !== undefined && {
        title: String(title).trim(),
      }),

      ...(issuer !== undefined && {
        issuer: issuer.trim() || null,
      }),

      ...(description !== undefined && {
        description: description.trim() || null,
      }),

      ...(category !== undefined && {
        category: category.trim() || null,
      }),

      ...(issueDate !== undefined && {
        issueDate: parsedDate,
      }),

      ...(isPublished !== undefined && {
        isPublished: parseBoolean(isPublished),
      }),

      ...(sortOrder !== undefined && {
        sortOrder: parsedOrder,
      }),

      ...(req.file && {
        pdfUrl: getPdfUrl(req.file),
      }),
    };

    const updatedCertificate = await prisma.certificate.update({
      where: { id },
      data: updateData,
    });

    // Remove old PDF only after successful database update.
    if (req.file && existing.pdfUrl) {
      await deletePdfFile(existing.pdfUrl);
    }

    return res.status(200).json({
      success: true,
      message: "Certificate updated successfully.",
      data: updatedCertificate,
    });
  } catch (error) {
    await cleanupUploadedFile(req.file);

    console.error("Update certificate error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update certificate.",
    });
  }
};

// =====================================================
// DELETE CERTIFICATE
// DELETE /api/certificates/:id
// =====================================================

const deleteCertificate = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid certificate ID.",
      });
    }

    const certificate = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found.",
      });
    }

    await prisma.certificate.delete({
      where: { id },
    });

    await deletePdfFile(certificate.pdfUrl);

    return res.status(200).json({
      success: true,
      message: "Certificate deleted successfully.",
    });
  } catch (error) {
    console.error("Delete certificate error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete certificate.",
    });
  }
};

// =====================================================
// TOGGLE PUBLISH STATUS
// PATCH /api/certificates/:id/publish
// =====================================================

const togglePublishCertificate = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid certificate ID.",
      });
    }

    const certificate = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found.",
      });
    }

    const updatedCertificate = await prisma.certificate.update({
      where: { id },
      data: {
        isPublished: !certificate.isPublished,
      },
    });

    return res.status(200).json({
      success: true,
      message: updatedCertificate.isPublished
        ? "Certificate published successfully."
        : "Certificate unpublished successfully.",
      data: updatedCertificate,
    });
  } catch (error) {
    console.error("Toggle certificate publish error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update certificate status.",
    });
  }
};

// =====================================================
// REORDER CERTIFICATES
// PATCH /api/certificates/reorder
// =====================================================

const reorderCertificates = async (req, res) => {
  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide certificate ordering items.",
      });
    }

    const normalizedItems = items.map((item) => ({
      id: Number(item.id),
      sortOrder: Number(item.sortOrder),
    }));

    const hasInvalidItem = normalizedItems.some(
      (item) =>
        !Number.isInteger(item.id) ||
        item.id <= 0 ||
        !Number.isInteger(item.sortOrder) ||
        item.sortOrder < 0
    );

    const ids = normalizedItems.map((item) => item.id);

    if (hasInvalidItem || new Set(ids).size !== ids.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid certificate ordering data.",
      });
    }

    const existingCertificates = await prisma.certificate.findMany({
      where: {
        id: { in: ids },
      },
      select: { id: true },
    });

    if (existingCertificates.length !== ids.length) {
      return res.status(404).json({
        success: false,
        message: "One or more certificates were not found.",
      });
    }

    await prisma.$transaction(
      normalizedItems.map((item) =>
        prisma.certificate.update({
          where: { id: item.id },
          data: { sortOrder: item.sortOrder },
        })
      )
    );

    const certificates = await prisma.certificate.findMany({
      orderBy: [
        { sortOrder: "asc" },
        { createdAt: "desc" },
      ],
    });

    return res.status(200).json({
      success: true,
      message: "Certificate order updated successfully.",
      data: certificates,
    });
  } catch (error) {
    console.error("Reorder certificates error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to reorder certificates.",
    });
  }
};

// =====================================================
// EXPORTS
// =====================================================

module.exports = {
  getAllCertificates,
  getPublishedCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate,
  togglePublishCertificate,
  reorderCertificates,
};
