// const express = require("express");

// const {
//   createContact,
//   getAllContacts,
//   getContactById,
//   updateContact,
//   deleteContact,
// } = require("../controllers/contact.controller");

// const {
//   authMiddleware,
//   requireAdmin,
// } = require("../middleware/auth.middleware");

// const router = express.Router();

// // ==========================================
// // PUBLIC
// // ==========================================

// // POST /api/contact
// router.post(
//   "/",
//   createContact
// );

// // ==========================================
// // ADMIN
// // ==========================================

// // GET /api/contact
// router.get(
//   "/",
//   authMiddleware,
//   requireAdmin,
//   getAllContacts
// );

// // GET /api/contact/:id
// router.get(
//   "/:id",
//   authMiddleware,
//   requireAdmin,
//   getContactById
// );

// // PUT /api/contact/:id
// router.put(
//   "/:id",
//   authMiddleware,
//   requireAdmin,
//   updateContact
// );

// // DELETE /api/contact/:id
// router.delete(
//   "/:id",
//   authMiddleware,
//   requireAdmin,
//   deleteContact
// );

// module.exports = router;

const express = require("express");

const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  markAsRead,
  markAsUnread,
  deleteContact,
} = require("../controllers/contact.controller");

const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

// ==========================================
// PUBLIC
// ==========================================

// POST /api/contact
router.post(
  "/",
  createContact
);

// ==========================================
// ADMIN
// ==========================================

// GET /api/contact
router.get(
  "/",
  authMiddleware,
  requireAdmin,
  getAllContacts
);

// GET /api/contact/:id
router.get(
  "/:id",
  authMiddleware,
  requireAdmin,
  getContactById
);

// ==========================================
// MARK AS READ
// PUT /api/contact/:id/read
// ==========================================

router.put(
  "/:id/read",
  authMiddleware,
  requireAdmin,
  markAsRead
);

// ==========================================
// MARK AS UNREAD
// PUT /api/contact/:id/unread
// ==========================================

router.put(
  "/:id/unread",
  authMiddleware,
  requireAdmin,
  markAsUnread
);

// ==========================================
// UPDATE CONTACT
// PUT /api/contact/:id
// ADMIN
// ==========================================

router.put(
  "/:id",
  authMiddleware,
  requireAdmin,
  updateContact
);

// ==========================================
// DELETE CONTACT
// DELETE /api/contact/:id
// ADMIN
// ==========================================

router.delete(
  "/:id",
  authMiddleware,
  requireAdmin,
  deleteContact
);

module.exports = router;