// ==========================================
// NOT FOUND HANDLER
// ==========================================

const notFound = (req, res, next) => {
  const error = new Error(
    `Route not found: ${req.method} ${req.originalUrl}`
  );

  res.status(404);

  next(error);
};

// ==========================================
// GLOBAL ERROR HANDLER
// ==========================================

const errorHandler = (err, req, res, next) => {
  console.error("==========================================");
  console.error("SERVER ERROR");
  console.error("==========================================");
  console.error("Method:", req.method);
  console.error("URL:", req.originalUrl);
  console.error("Message:", err.message);
  console.error("Stack:", err.stack);
  console.error("==========================================");

  const statusCode =
    res.statusCode && res.statusCode !== 200
      ? res.statusCode
      : 500;

  return res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? "Internal server error"
        : err.message,
  });
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  notFound,
  errorHandler,
};