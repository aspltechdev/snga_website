const express = require("express");

const {
  getAllSocialPosts,
  getPublishedSocialPosts,
  getSocialPostById,
  createSocialPost,
  updateSocialPost,
  deleteSocialPost,
  togglePublishSocialPost,
  reorderSocialPosts,
} = require("../controllers/socialPostController");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC
// ==========================================

// GET /api/social-posts/published
//
// Optional:
// GET /api/social-posts/published?limit=6

router.get(
  "/published",
  getPublishedSocialPosts
);

// ==========================================
// ADMIN
// ==========================================

// GET /api/social-posts
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllSocialPosts
);

// ==========================================
// REORDER
// IMPORTANT:
// Must come BEFORE /:id
// ==========================================

// PATCH /api/social-posts/reorder
router.patch(
  "/reorder",
  authMiddleware,
  requireAdmin,
  reorderSocialPosts
);

// ==========================================
// GET SINGLE
// ==========================================

// GET /api/social-posts/:id
router.get(
  "/:id",
  authMiddleware,
  requireAdmin,
  getSocialPostById
);

// ==========================================
// CREATE
// ==========================================

// POST /api/social-posts
router.post(
  "/",
  authMiddleware,
  requireAdmin,
  createSocialPost
);

// ==========================================
// UPDATE
// ==========================================

// PUT /api/social-posts/:id
router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  updateSocialPost
);

// ==========================================
// DELETE
// ==========================================

// DELETE /api/social-posts/:id
router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteSocialPost
);

// ==========================================
// PUBLISH / UNPUBLISH
// ==========================================

// PATCH /api/social-posts/:id/publish
router.patch(
  "/:id/publish",
  authMiddleware,
  requireAdmin,
  togglePublishSocialPost
);

module.exports = router;