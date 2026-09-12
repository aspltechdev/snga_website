const express = require("express");

const upload = require(
  "../middleware/upload.middleware"
);

const {
  uploadImage,
  deleteImage,
} = require(
  "../controllers/upload.controller"
);

const {
  authMiddleware,
  requireAdmin,
} = require(
  "../middleware/auth.middleware"
);

const router = express.Router();

// ==========================================
// UPLOAD IMAGE
// POST /api/upload/image
// ==========================================

router.post(
  "/image",
  authMiddleware,
  requireAdmin,
  upload.single("image"),
  uploadImage
);

// ==========================================
// DELETE IMAGE
// DELETE /api/upload/image/:filename
// ==========================================

router.delete(
  "/image/:filename",
  authMiddleware,
  requireAdmin,
  deleteImage
);

module.exports = router;