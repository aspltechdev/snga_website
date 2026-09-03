// const express = require("express");

// const {
//   login,
//   getMe,
//   logout,
// } = require("../controllers/auth.controller");

// const authMiddleware = require("../middleware/auth.middleware");

// const router = express.Router();

// // Public
// router.post("/login", login);

// // Protected
// router.get("/me", authMiddleware, getMe);

// // Logout
// router.post("/logout", authMiddleware, logout);

// module.exports = router;

const express = require("express");

const {
  login,
  getMe,
  logout,
} = require("../controllers/auth.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC
// ==========================================

// POST /api/auth/login
router.post("/login", login);

// ==========================================
// PROTECTED
// ==========================================

// GET /api/auth/me
router.get("/me", authMiddleware, getMe);

// POST /api/auth/logout
router.post("/logout", authMiddleware, logout);

// ==========================================
// ADMIN ONLY
// ==========================================

// GET /api/auth/admin-check
router.get(
  "/admin-check",
  authMiddleware,
  requireAdmin,
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Admin authentication successful",
      user: req.user,
    });
  }
);

module.exports = router;