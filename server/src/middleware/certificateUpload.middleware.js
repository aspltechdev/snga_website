
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(
  process.cwd(),
  "uploads",
  "certificates"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const uniqueName = `certificate-${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname).toLowerCase()}`;

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();

  if (extension !== ".pdf" || file.mimetype !== "application/pdf") {
    return cb(new Error("Please upload a valid PDF file."));
  }

  cb(null, true);
};

const uploadCertificate = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

module.exports = uploadCertificate;
