
const express = require("express");

const {
  getAllCertificates,
  getPublishedCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate,
  togglePublishCertificate,
  reorderCertificates,
} = require("../controllers/certificateController");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const uploadCertificate = require("../middleware/certificateUpload.middleware");

const router = express.Router();

// =====================================================
// PUBLIC ROUTES
// =====================================================

// Get published certificates
router.get("/published", getPublishedCertificates);

// =====================================================
// ADMIN ROUTES
// =====================================================

// Get all certificates
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllCertificates
);

// Reorder certificates
// Keep this before /:id
router.patch(
  "/reorder",
  authMiddleware,
  requireAdmin,
  reorderCertificates
);

// Get certificate by ID
router.get(
  "/:id",
  authMiddleware,
  requireAdmin,
  getCertificateById
);

// Create certificate with PDF upload
router.post(
  "/",
  authMiddleware,
  requireAdmin,
  uploadCertificate.single("pdf"),
  createCertificate
);

// Update certificate and optionally replace PDF
router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  uploadCertificate.single("pdf"),
  updateCertificate
);

// Delete certificate
router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteCertificate
);

// Toggle publish status
router.patch(
  "/:id/publish",
  authMiddleware,
  requireAdmin,
  togglePublishCertificate
);

module.exports = router;
