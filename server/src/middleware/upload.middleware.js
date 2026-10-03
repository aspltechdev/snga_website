const multer = require("multer");

// Keep the uploaded image in memory until it is
// transferred to Vercel Blob.
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    return cb(null, true);
  }

  return cb(
    new Error(
      "Only JPG, JPEG, PNG and WEBP images are allowed"
    ),
    false
  );
};

const upload = multer({
  storage,

  fileFilter,

  limits: {
    // Vercel Functions have a 4.5 MB request limit.
    fileSize: 4 * 1024 * 1024,
  },
});

module.exports = upload;