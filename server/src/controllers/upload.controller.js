// // @vercel/blob is loaded dynamically because this backend uses CommonJS.
// const getBlobSdk = () => import("@vercel/blob");

// const createSafeFilename = (originalName = "image.jpg") => {
//   const cleaned = originalName
//     .trim()
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^a-z0-9._-]/g, "-")
//     .replace(/-+/g, "-");

//   return cleaned || "image.jpg";
// };

// // ==========================================
// // UPLOAD IMAGE
// // POST /api/upload/image
// // ==========================================

// const uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Please select an image",
//       });
//     }

//     const { put } = await getBlobSdk();

//     const safeFilename = createSafeFilename(
//       req.file.originalname
//     );

//     const blob = await put(
//       safeFilename,
//       req.file.buffer,
//       {
//         access: "public",
//         addRandomSuffix: true,
//         contentType: req.file.mimetype,
//       }
//     );

//     return res.status(201).json({
//       success: true,
//       message: "Image uploaded successfully",

//       data: {
//         filename: blob.pathname,
//         pathname: blob.pathname,
//         originalName: req.file.originalname,
//         mimeType: req.file.mimetype,
//         size: req.file.size,
//         url: blob.url,
//         downloadUrl:
//           blob.downloadUrl || blob.url,
//       },
//     });
//   } catch (error) {
//     console.error(
//       "Vercel Blob upload error:",
//       error
//     );

//     return res.status(500).json({
//       success: false,

//       message:
//         process.env.NODE_ENV === "production"
//           ? "Failed to upload image"
//           : error.message,
//     });
//   }
// };

// // ==========================================
// // DELETE IMAGE
// // DELETE /api/upload/image/:filename
// // ==========================================

// const deleteImage = async (req, res) => {
//   try {
//     const pathname = decodeURIComponent(
//       req.params.filename || ""
//     ).trim();

//     if (!pathname) {
//       return res.status(400).json({
//         success: false,
//         message: "Image pathname is required",
//       });
//     }

//     const { del } = await getBlobSdk();

//     await del(pathname);

//     return res.status(200).json({
//       success: true,
//       message: "Image deleted successfully",
//     });
//   } catch (error) {
//     console.error(
//       "Vercel Blob delete error:",
//       error
//     );

//     return res.status(500).json({
//       success: false,

//       message:
//         process.env.NODE_ENV === "production"
//           ? "Failed to delete image"
//           : error.message,
//     });
//   }
// };

// module.exports = {
//   uploadImage,
//   deleteImage,
// };


const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Local VPS storage directory
const UPLOAD_DIR = path.join(
  process.cwd(),
  "uploads",
  "images"
);

// Allowed image MIME types
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
];

// Generate a unique, safe filename
const createSafeFilename = (originalName = "image.jpg") => {
  const extension = path.extname(originalName).toLowerCase();

  const allowedExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".svg",
  ];

  const safeExtension = allowedExtensions.includes(extension)
    ? extension
    : ".jpg";

  return `${Date.now()}-${crypto.randomUUID()}${safeExtension}`;
};

// ==========================================
// UPLOAD IMAGE
// POST /api/upload/image
// ==========================================

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select an image",
      });
    }

    // Validate MIME type
    if (!ALLOWED_MIME_TYPES.includes(req.file.mimetype)) {
      return res.status(400).json({
        success: false,
        message: "Unsupported image format",
      });
    }

    if (!req.file.buffer) {
      return res.status(400).json({
        success: false,
        message: "Image buffer is missing",
      });
    }

    // Create upload directory
    await fs.promises.mkdir(UPLOAD_DIR, {
      recursive: true,
    });

    // Generate unique filename
    const filename = createSafeFilename(
      req.file.originalname
    );

    const filePath = path.join(
      UPLOAD_DIR,
      filename
    );

    // Save image locally
    await fs.promises.writeFile(
      filePath,
      req.file.buffer,
      { flag: "wx" }
    );

    // Public image URL
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/images/${filename}`;

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: {
        filename,
        pathname: `images/${filename}`,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        size: req.file.size,
        url: imageUrl,
        downloadUrl: imageUrl,
      },
    });

  } catch (error) {
    console.error("Local image upload error:", error);

    return res.status(500).json({
      success: false,
      message:
        process.env.NODE_ENV === "production"
          ? "Failed to upload image"
          : error.message,
    });
  }
};

// ==========================================
// DELETE IMAGE
// DELETE /api/upload/image/:filename
// ==========================================

const deleteImage = async (req, res) => {
  try {
    const filename = path.basename(
      decodeURIComponent(req.params.filename || "")
    );

    if (
      !filename ||
      filename === "." ||
      filename === ".."
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid image filename is required",
      });
    }

    const filePath = path.join(
      UPLOAD_DIR,
      filename
    );

    try {
      await fs.promises.unlink(filePath);
    } catch (error) {
      if (error.code === "ENOENT") {
        return res.status(404).json({
          success: false,
          message: "Image not found",
        });
      }

      throw error;
    }

    return res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });

  } catch (error) {
    console.error("Local image delete error:", error);

    return res.status(500).json({
      success: false,
      message:
        process.env.NODE_ENV === "production"
          ? "Failed to delete image"
          : error.message,
    });
  }
};

module.exports = {
  uploadImage,
  deleteImage,
};
