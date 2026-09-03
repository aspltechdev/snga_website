const express = require("express");

const {
  getAllTestimonials,
  getPublishedTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonial.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC
// ==========================================

// GET /api/testimonials/published
router.get(
  "/published",
  getPublishedTestimonials
);

// GET /api/testimonials/:id
router.get(
  "/:id",
  getTestimonialById
);

// ==========================================
// ADMIN
// ==========================================

// GET /api/testimonials
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllTestimonials
);

// POST /api/testimonials
router.post(
  "/",
  authMiddleware,
  requireAdmin,
  createTestimonial
);

// PUT /api/testimonials/:id
router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  updateTestimonial
);

// DELETE /api/testimonials/:id
router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteTestimonial
);

module.exports = router;