const express = require("express");

const {
  getAllBlogs,
  getPublishedBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC ROUTES
// ==========================================

// GET /api/blogs/published
router.get(
  "/published",
  getPublishedBlogs
);

// GET /api/blogs/:slug
router.get(
  "/:slug",
  getBlogBySlug
);

// ==========================================
// ADMIN ROUTES
// ==========================================

// GET /api/blogs
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllBlogs
);

// POST /api/blogs
router.post(
  "/",
  authMiddleware,
  requireAdmin,
  createBlog
);

// PUT /api/blogs/:id
router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  updateBlog
);

// DELETE /api/blogs/:id
router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteBlog
);

module.exports = router;