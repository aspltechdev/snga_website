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

// ==========================================
// ROUTES
// ==========================================

const authRoutes = require("./routes/auth.routes");
const newsRoutes = require("./routes/news.routes");
const achievementRoutes = require(
  "./routes/achievement.routes"
);
const blogRoutes = require("./routes/blog.routes");
const admissionRoutes = require(
  "./routes/admission.routes"
);
const testimonialRoutes = require(
  "./routes/testimonial.routes"
);
const uploadRoutes = require("./routes/upload.routes");
const contactRoutes = require("./routes/contact.routes");
const galleryRoutes = require("./routes/gallery.routes");
const socialPostRoutes = require(
  "./routes/socialPostRoutes"
);
const heroRoutes = require("./routes/hero.routes");

// ==========================================
// ERROR MIDDLEWARE
// ==========================================

const {
  notFound,
  errorHandler,
} = require("./middleware/error.middleware");

const app = express();

// ==========================================
// CORS
// ==========================================

const allowedOrigins = [
  "http://localhost:5173",

  // Old Netlify deployment
  "https://snga.netlify.app",

  // New Netlify deployment
  "https://sngacbse.netlify.app",

  // Environment variable
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Requests without an origin include Postman,
      // mobile apps and server-to-server requests.
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error("CORS blocked origin:", origin);

      return callback(
        new Error(`CORS blocked origin: ${origin}`)
      );
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

// ==========================================
// SECURITY
// ==========================================

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  })
);

// ==========================================
// REQUEST LOGGER
// ==========================================

app.use(morgan("dev"));

// ==========================================
// BODY PARSERS
// ==========================================

app.use(
  express.json({
    limit: "1mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  })
);

// The old /uploads static directory has been removed.
// Images are now uploaded to and served by Vercel Blob.

// ==========================================
// ROOT ROUTE
// ==========================================

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "SNGA API is running",
  });
});

// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "SNGA API healthy",
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
  "/api/social-posts",
  socialPostRoutes
);

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

app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/api/upload",
  uploadRoutes
);

// ==========================================
// ERROR HANDLERS
// THESE MUST ALWAYS BE LAST
// ==========================================

app.use(notFound);

app.use(errorHandler);

module.exports = app;