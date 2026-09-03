const express = require("express");

const {
  createAdmission,
  getAllAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission,
} = require("../controllers/admission.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC
// ==========================================

// POST /api/admissions
router.post(
  "/",
  createAdmission
);

// ==========================================
// ADMIN
// ==========================================

// GET /api/admissions
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllAdmissions
);

// GET /api/admissions/:id
router.get(
  "/:id",
  authMiddleware,
  requireAdmin,
  getAdmissionById
);

// PUT /api/admissions/:id
router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  updateAdmission
);

// DELETE /api/admissions/:id
router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteAdmission
);

module.exports = router;