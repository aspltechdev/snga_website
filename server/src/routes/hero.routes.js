const express = require("express");

const {
  getHero,
  getAdminHero,
  createHero,
  updateHero,
  deleteHero,
} = require("../controllers/hero.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// PUBLIC
router.get("/", getHero);

// ADMIN
router.get(
  "/admin",
  authMiddleware,
  requireAdmin,
  getAdminHero
);

router.post(
  "/",
  authMiddleware,
  requireAdmin,
  createHero
);

router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  updateHero
);

router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteHero
);

module.exports = router;