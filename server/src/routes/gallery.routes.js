const express = require("express");

const {
  getAllAlbums,
  getPublishedAlbums,
  getAlbumBySlug,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  addImage,
  updateImage,
  deleteImage,
} = require("../controllers/gallery.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC ROUTES
// ==========================================

// GET /api/gallery/published
router.get(
  "/published",
  getPublishedAlbums
);

// GET /api/gallery/:slug
router.get(
  "/:slug",
  getAlbumBySlug
);

// ==========================================
// ADMIN - ALBUMS
// ==========================================

// GET /api/gallery
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllAlbums
);

// POST /api/gallery/albums
router.post(
  "/albums",
  authMiddleware,
  requireAdmin,
  createAlbum
);

// PUT /api/gallery/albums/:id
router.put(
  "/albums/:id",
  authMiddleware,
  requireAdmin,
  updateAlbum
);

// DELETE /api/gallery/albums/:id
router.delete(
  "/albums/:id",
  authMiddleware,
  requireAdmin,
  deleteAlbum
);

// ==========================================
// ADMIN - IMAGES
// ==========================================

// POST /api/gallery/albums/:albumId/images
router.post(
  "/albums/:albumId/images",
  authMiddleware,
  requireAdmin,
  addImage
);

// PUT /api/gallery/images/:id
router.put(
  "/images/:id",
  authMiddleware,
  requireAdmin,
  updateImage
);

// DELETE /api/gallery/images/:id
router.delete(
  "/images/:id",
  authMiddleware,
  requireAdmin,
  deleteImage
);

module.exports = router;