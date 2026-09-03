const express = require("express");

const {
  getAllAchievements,
  getPublishedAchievements,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} = require("../controllers/achievement.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC
// ==========================================

// GET /api/achievements/published
router.get(
  "/published",
  getPublishedAchievements
);

// GET /api/achievements/:id
router.get(
  "/:id",
  getAchievementById
);

// ==========================================
// ADMIN
// ==========================================

// GET /api/achievements
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllAchievements
);

// POST /api/achievements
router.post(
  "/",
  authMiddleware,
  requireAdmin,
  createAchievement
);

// PUT /api/achievements/:id
router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  updateAchievement
);

// DELETE /api/achievements/:id
router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteAchievement
);

module.exports = router;