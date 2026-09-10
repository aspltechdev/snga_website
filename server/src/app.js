// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const authRoutes = require("./routes/auth.routes");
// const newsRoutes = require("./routes/news.routes");
// const achievementRoutes = require("./routes/achievement.routes");
// const blogRoutes = require("./routes/blog.routes");
// const admissionRoutes = require("./routes/admission.routes");
// const testimonialRoutes = require("./routes/testimonial.routes");
// const uploadRoutes = require("./routes/upload.routes");
// const contactRoutes = require("./routes/contact.routes");
// const {
//   notFound,
//   errorHandler,
// } = require("./middleware/error.middleware");
// const app = express();
// const path = require("path");

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "http://localhost:5173",
//     credentials: true,
//   })
// );
// app.use(
//   "/uploads",
//   express.static(
//     path.join(process.cwd(), "uploads")
//   )
// );

// app.use(helmet());
// app.use(morgan("dev"));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "SNGA API is running",
//   });
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/news", newsRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/achievements", achievementRoutes);
// app.use("/api/admissions", admissionRoutes);
// app.use("/api/testimonials", testimonialRoutes);

// app.use("/api/contact", contactRoutes);

// app.use("/api/upload", uploadRoutes);

// app.use(notFound);
// app.use(errorHandler);

// app.get("/api/health", (req, res) => {
//   res.json({
//     success: true,
//     message: "SNGA API healthy",
//   });
// });

// module.exports = app;


const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

// Routes
const authRoutes = require("./routes/auth.routes");
const newsRoutes = require("./routes/news.routes");
const achievementRoutes = require("./routes/achievement.routes");
const blogRoutes = require("./routes/blog.routes");
const admissionRoutes = require("./routes/admission.routes");
const testimonialRoutes = require("./routes/testimonial.routes");
const uploadRoutes = require("./routes/upload.routes");
const contactRoutes = require("./routes/contact.routes");
const galleryRoutes = require("./routes/gallery.routes");
const heroRoutes = require("./routes/hero.routes");

// Error middleware
const {
  notFound,
  errorHandler,
} = require("./middleware/error.middleware");

const app = express();

// Allow local React and deployed Netlify frontend
const allowedOrigins = [
  "http://localhost:5173",
  "https://snga.netlify.app",
  process.env.CLIENT_URL,
].filter(Boolean);

// CORS
app.use(
  cors({
    origin(origin, callback) {
      // Requests such as Postman and direct browser navigation may not have Origin
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true,
  })
);

// Security headers
app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  })
);

// Request logger
app.use(morgan("dev"));

// Body parsers
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Local uploaded files
// This works locally, but Vercel cannot store uploaded files permanently.
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SNGA API is running",
  });
});

// Health-check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SNGA API healthy",
  });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/upload", uploadRoutes);

// Error handlers must remain last
app.use(notFound);
app.use(errorHandler);

module.exports = app;