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

const {
  notFound,
  errorHandler,
} = require("./middleware/error.middleware");

const app = express();

// ==========================================
// CORS
// ==========================================

app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:5173",
    credentials: true,
  })
);

// ==========================================
// SECURITY
// ==========================================

// app.use(helmet());

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  })
);
// ==========================================
// LOGGER
// ==========================================

app.use(morgan("dev"));

// ==========================================
// BODY PARSER
// ==========================================

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// ==========================================
// STATIC UPLOADS
// ==========================================

app.use(
  "/uploads",
  express.static(
    path.join(process.cwd(), "uploads")
  )
);

// ==========================================
// ROOT
// ==========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SNGA API is running",
  });
});

// ==========================================
// API ROUTES
// ==========================================

app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);

app.use("/api/hero", heroRoutes);

app.use("/api/blogs", blogRoutes);

app.use("/api/gallery", galleryRoutes);
app.use(
  "/api/achievements",
  achievementRoutes
);
app.use(
  "/api/admissions",
  admissionRoutes
);
app.use(
  "/api/testimonials",
  testimonialRoutes
);
app.use("/api/contact", contactRoutes);
app.use("/api/upload", uploadRoutes);

// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "SNGA API healthy",
  });
});

// ==========================================
// ERROR HANDLING
// MUST BE LAST
// ==========================================

app.use(notFound);
app.use(errorHandler);

module.exports = app;