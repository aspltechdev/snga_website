const fs = require("fs");
const path = require("path");

// ==========================================
// UPLOAD SINGLE IMAGE
// POST /api/upload/image
// ADMIN
// ==========================================

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select an image",
      });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        size: req.file.size,
        url: imageUrl,
      },
    });
  } catch (error) {
    console.error("Upload image error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to upload image",
    });
  }
};

// ==========================================
// DELETE IMAGE
// DELETE /api/upload/image/:filename
// ADMIN
// ==========================================

const deleteImage = async (req, res) => {
  try {
    const { filename } = req.params;

    // Prevent path traversal
    const safeFilename = path.basename(filename);

    const filePath = path.join(
      process.cwd(),
      "uploads",
      safeFilename
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    fs.unlinkSync(filePath);

    return res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error("Delete image error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete image",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  uploadImage,
  deleteImage,
}; 