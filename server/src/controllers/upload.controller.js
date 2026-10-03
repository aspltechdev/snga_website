// @vercel/blob is loaded dynamically because this backend uses CommonJS.
const getBlobSdk = () => import("@vercel/blob");

const createSafeFilename = (originalName = "image.jpg") => {
  const cleaned = originalName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-");

  return cleaned || "image.jpg";
};

// ==========================================
// UPLOAD IMAGE
// POST /api/upload/image
// ==========================================

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select an image",
      });
    }

    const { put } = await getBlobSdk();

    const safeFilename = createSafeFilename(
      req.file.originalname
    );

    const blob = await put(
      safeFilename,
      req.file.buffer,
      {
        access: "public",
        addRandomSuffix: true,
        contentType: req.file.mimetype,
      }
    );

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully",

      data: {
        filename: blob.pathname,
        pathname: blob.pathname,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        size: req.file.size,
        url: blob.url,
        downloadUrl:
          blob.downloadUrl || blob.url,
      },
    });
  } catch (error) {
    console.error(
      "Vercel Blob upload error:",
      error
    );

    return res.status(500).json({
      success: false,

      message:
        process.env.NODE_ENV === "production"
          ? "Failed to upload image"
          : error.message,
    });
  }
};

// ==========================================
// DELETE IMAGE
// DELETE /api/upload/image/:filename
// ==========================================

const deleteImage = async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      req.params.filename || ""
    ).trim();

    if (!pathname) {
      return res.status(400).json({
        success: false,
        message: "Image pathname is required",
      });
    }

    const { del } = await getBlobSdk();

    await del(pathname);

    return res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error(
      "Vercel Blob delete error:",
      error
    );

    return res.status(500).json({
      success: false,

      message:
        process.env.NODE_ENV === "production"
          ? "Failed to delete image"
          : error.message,
    });
  }
};

module.exports = {
  uploadImage,
  deleteImage,
};