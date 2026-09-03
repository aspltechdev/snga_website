const express = require("express");

const {
  getAllNews,
  getPublishedNews,
  getNewsBySlug,
  createNews,
  updateNews,
  deleteNews,
} = require("../controllers/news.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC ROUTES
// ==========================================

// GET /api/news/published
router.get("/published", getPublishedNews);

// GET /api/news/:slug
router.get("/:slug", getNewsBySlug);

// ==========================================
// ADMIN ROUTES
// ==========================================

// GET /api/news
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllNews
);

// POST /api/news
router.post(
  "/",
  authMiddleware,
  requireAdmin,
  createNews
);

// PUT /api/news/:id
router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  updateNews
);

// DELETE /api/news/:id
router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteNews
);

module.exports = router;