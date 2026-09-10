
// import { useEffect, useMemo, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaTimes,
//   FaBookOpen,
//   FaTag,
//   FaCalendarAlt,
//   FaUser,
//   FaClock,
//   FaEye,
//   FaHeart,
//   FaShare,
//   FaSchool,
//   FaUsers,
//   FaTrophy,
//   FaStar,
//   FaAward,
//   FaHands,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaQuoteLeft,
//   FaPenFancy,
//   FaNewspaper,
//   FaPlay,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";
// import blogService from "../services/blog.service";
// import "./Blogs.css";

// import heroBg from "../assets/school.JPG";
// import heroCircle from "../assets/about.png";
// import ctaBg from "../assets/engaging.jpg";
// import featured from "../assets/camp.jpg";
// import editorial from "../assets/beyond.jpg";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   featured: featured,
//   blog1: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
//   blog2: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//   blog3: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
//   editorial: editorial,
// };

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [error, setError] = useState("");

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const directoryRef = useRef(null);
//   const editorialRef = useRef(null);
//   const newsRef = useRef(null);
//   const galleryRef = useRef(null);
//   const ctaRef = useRef(null);

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const sections = [
//       { ref: heroRef, className: "sb-hero--visible" },
//       { ref: introRef, className: "sb-intro--visible" },
//       { ref: directoryRef, className: "sb-directory--visible" },
//       { ref: editorialRef, className: "sb-editorial--visible" },
//       { ref: newsRef, className: "sb-news--visible" },
//       { ref: galleryRef, className: "sb-gallery--visible" },
//       { ref: ctaRef, className: "sb-cta--visible" },
//     ];

//     const observers = {};

//     sections.forEach(({ ref, className }) => {
//       if (!ref.current) return;

//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(className);
//             observer.unobserve(entry.target);
//           }
//         });
//       }, observerOptions);

//       observer.observe(ref.current);
//       observers[className] = observer;
//     });

//     return () => {
//       Object.values(observers).forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   // =====================================================
//   // FETCH BLOGS
//   // =====================================================

//   useEffect(() => {
//     const loadBlogs = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await blogService.getPublishedBlogs();

//         const items = Array.isArray(response)
//           ? response
//           : response?.data || response?.blogs || response?.news || [];

//         setBlogs(items);
//       } catch (err) {
//         console.error("Failed to load blogs:", err);
//         setError("Unable to load articles. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadBlogs();
//   }, []);

//   // =====================================================
//   // COMPUTED VALUES
//   // =====================================================

//   const categories = useMemo(() => {
//     const values = blogs.map((blog) => blog.category).filter(Boolean);
//     return ["All", ...new Set(values)];
//   }, [blogs]);

//   const filteredBlogs = useMemo(() => {
//     if (activeCategory === "All") {
//       return blogs;
//     }
//     return blogs.filter((blog) => blog.category === activeCategory);
//   }, [blogs, activeCategory]);

//   const featuredBlog = filteredBlogs[0];
//   const remainingBlogs = filteredBlogs.slice(1);

//   // =====================================================
//   // HELPERS
//   // =====================================================

//   const getImageUrl = (image) => {
//     if (!image) return "";

//     if (image.startsWith("http://") || image.startsWith("https://")) {
//       return image;
//     }

//     const API_URL =
//       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//       "http://localhost:5000";

//     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
//   };

//   const formatDate = (date) => {
//     if (!date) return "";

//     const parsedDate = new Date(date);

//     if (Number.isNaN(parsedDate.getTime())) {
//       return "";
//     }

//     return new Intl.DateTimeFormat("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     }).format(parsedDate);
//   };

//   // ✅ Helper to safely create slug URL
//   const getBlogUrl = (slug) => {
//     if (!slug) return "#";
//     // Encode the slug to handle special characters
//     return `/blogs/${encodeURIComponent(slug)}`;
//   };

//   // =====================================================
//   // DATA
//   // =====================================================

//   const stats = [
//     { number: blogs.length || "100+", label: "Articles", icon: <FaBookOpen /> },
//     { number: categories.length - 1 || "20+", label: "Categories", icon: <FaTag /> },
//     { number: "5000+", label: "Readers", icon: <FaUsers /> },
//     { number: "50+", label: "Authors", icon: <FaPenFancy /> },
//   ];

//   const categoriesData = [
//     { name: "Academics", icon: <FaGraduationCap />, color: "#4A90D9" },
//     { name: "Sports", icon: <FaTrophy />, color: "#27AE60" },
//     { name: "Arts", icon: <FaStar />, color: "#E67E22" },
//     { name: "Values", icon: <FaHands />, color: "#E74C3C" },
//     { name: "Community", icon: <FaUsers />, color: "#9B59B6" },
//     { name: "Events", icon: <FaCalendarAlt />, color: "#2ECC71" },
//   ];

//   return (
//     <main className="sb-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sb-topbar">
//         <div className="sb-container">
//           <div className="sb-topbar__content">
//             <span className="sb-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sb-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sb-hero">
//         <div className="sb-hero__bg-wrapper">
//           <div 
//             className="sb-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sb-hero__bg-overlay" />
//           <div className="sb-hero__bg-gradient" />
//         </div>

//         <div className="sb-container">
//           <div className="sb-hero__inner">
//             <div className="sb-hero__content">
//               <div className="sb-hero__badge">
//                 <FaBookOpen />
//                 SNGA STORIES
//               </div>

//               <h1 className="sb-hero__title">
//                 Ideas Worth
//                 <br />
//                 <span className="sb-hero__highlight">Sharing.</span>
//               </h1>

//               <p className="sb-hero__desc">
//                 Perspectives, insights and stories from the learning community
//                 at Shifan Noor Global Academy.
//               </p>

//               {/* <div className="sb-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sb-hero__stat">
//                     <span className="sb-hero__stat-icon">{stat.icon}</span>
//                     <span className="sb-hero__stat-number">{stat.number}</span>
//                     <span className="sb-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div> */}

//               <div className="sb-hero__actions">
//                 <button 
//                   className="sb-hero__btn-primary"
//                   onClick={() => {
//                     directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                 >
//                   <span>Read Articles</span>
//                   <FaArrowRight />
//                 </button>
//                 {/* <button className="sb-hero__btn-secondary">
//                   <FaPlay />
//                   <span>Watch Story</span>
//                 </button> */}
//               </div>
//             </div>

//             <div className="sb-hero__image-wrapper">
//               <div className="sb-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA School" 
//                   className="sb-hero__image-img"
//                 />
//                 <div className="sb-hero__image-ring" />
//                 {/* <div className="sb-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sb-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sb-intro">
//         <div className="sb-container">
//           <div className="sb-intro__inner">
//             <div className="sb-intro__header">
//               <span className="sb-intro__label">THE SNGA JOURNAL</span>
//               <h2 className="sb-intro__title">
//                 Stories That
//                 <span className="sb-intro__highlight">Extend the Classroom.</span>
//               </h2>
//             </div>

//             <div className="sb-intro__content">
//               <p>
//                 Learning doesn't stop when the classroom ends. Ideas, experiences
//                 and conversations can inspire students, parents and the wider
//                 school community.
//               </p>
//               <p>
//                 Explore articles and stories that reflect the educational journey,
//                 values and experiences of the SNGA community.
//               </p>
//             </div>

//             <div className="sb-intro__categories">
//               {categoriesData.map((cat, index) => (
//                 <div 
//                   key={index} 
//                   className="sb-intro__category"
//                   style={{ borderColor: cat.color }}
//                   onClick={() => setActiveCategory(cat.name)}
//                 >
//                   <span style={{ color: cat.color }}>{cat.icon}</span>
//                   <span>{cat.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           DIRECTORY - Blog Grid
//       ================================================= */}
//       <section ref={directoryRef} className="sb-directory">
//         <div className="sb-container">
//           <div className="sb-directory__header">
//             <div>
//               <span className="sb-directory__label">LATEST ARTICLES</span>
//               <h2 className="sb-directory__title">
//                 Read, <span className="sb-directory__highlight">Explore & Discover.</span>
//               </h2>
//             </div>
//             <p className="sb-directory__desc">
//               Browse the latest articles published by Shifan Noor Global Academy.
//             </p>
//           </div>

//           {/* Filters */}
//           {!loading && categories.length > 1 && (
//             <div className="sb-directory__filters">
//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={`sb-directory__filter ${
//                     activeCategory === category ? "sb-directory__filter--active" : ""
//                   }`}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* States */}
//           {loading && (
//             <div className="sb-directory__state">
//               <div className="sb-directory__loader">
//                 <span />
//                 <span />
//                 <span />
//               </div>
//               <span>Loading articles...</span>
//             </div>
//           )}

//           {!loading && error && (
//             <div className="sb-directory__state sb-directory__state--error">
//               <span>{error}</span>
//             </div>
//           )}

//           {!loading && !error && filteredBlogs.length === 0 && (
//             <div className="sb-directory__state sb-directory__state--empty">
//               <div className="sb-directory__empty-icon">
//                 <FaBookOpen />
//               </div>
//               <h3>No Articles Yet</h3>
//               <p>New stories will appear here. Articles can be published from the administration panel.</p>
//             </div>
//           )}

//           {/* Featured Blog */}
//           {!loading && !error && featuredBlog && (
//             <div className="sb-directory__featured">
//               <Link 
//                 to={getBlogUrl(featuredBlog.slug)} 
//                 className="sb-directory__featured-image"
//               >
//                 {featuredBlog.featuredImage ? (
//                   <img
//                     src={getImageUrl(featuredBlog.featuredImage)}
//                     alt={featuredBlog.title}
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="sb-directory__featured-placeholder">
//                     <FaBookOpen />
//                   </div>
//                 )}
//                 <div className="sb-directory__featured-overlay">
//                   <span className="sb-directory__featured-badge">Featured</span>
//                 </div>
//                 <span className="sb-directory__featured-number">01</span>
//               </Link>

//               <div className="sb-directory__featured-content">
//                 <div className="sb-directory__featured-meta">
//                   {featuredBlog.category && (
//                     <span className="sb-directory__featured-category">
//                       <FaTag />
//                       {featuredBlog.category}
//                     </span>
//                   )}
//                   {featuredBlog.publishedAt && (
//                     <time className="sb-directory__featured-date">
//                       <FaCalendarAlt />
//                       {formatDate(featuredBlog.publishedAt)}
//                     </time>
//                   )}
//                 </div>

//                 <h3 className="sb-directory__featured-title">{featuredBlog.title}</h3>

//                 {featuredBlog.excerpt && (
//                   <p className="sb-directory__featured-desc">{featuredBlog.excerpt}</p>
//                 )}

//                 <div className="sb-directory__featured-footer">
//                   {featuredBlog.authorName && (
//                     <div className="sb-directory__featured-author">
//                       <FaUser />
//                       By {featuredBlog.authorName}
//                     </div>
//                   )}
//                   <Link 
//                     to={getBlogUrl(featuredBlog.slug)} 
//                     className="sb-directory__featured-link"
//                   >
//                     <span>Read Article</span>
//                     <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Blog Grid */}
//           {!loading && !error && remainingBlogs.length > 0 && (
//             <div className="sb-directory__grid">
//               {remainingBlogs.map((blog, index) => {
//                 const blogId = blog.id || blog._id;
//                 return (
//                   <div key={blogId} className="sb-directory__card">
//                     <Link 
//                       to={getBlogUrl(blog.slug)} 
//                       className="sb-directory__card-image"
//                     >
//                       {blog.featuredImage ? (
//                         <img
//                           src={getImageUrl(blog.featuredImage)}
//                           alt={blog.title}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="sb-directory__card-placeholder">
//                           <FaBookOpen />
//                         </div>
//                       )}
//                       <div className="sb-directory__card-overlay">
//                         <span className="sb-directory__card-read-time">
//                           <FaClock /> 5 min read
//                         </span>
//                       </div>
//                       <span className="sb-directory__card-number">
//                         {String(index + 2).padStart(2, "0")}
//                       </span>
//                     </Link>

//                     <div className="sb-directory__card-content">
//                       <div className="sb-directory__card-meta">
//                         {blog.category && (
//                           <span className="sb-directory__card-category">
//                             {blog.category}
//                           </span>
//                         )}
//                         {blog.publishedAt && (
//                           <time className="sb-directory__card-date">
//                             <FaCalendarAlt />
//                             {formatDate(blog.publishedAt)}
//                           </time>
//                         )}
//                       </div>

//                       <h3 className="sb-directory__card-title">{blog.title}</h3>

//                       {blog.excerpt && (
//                         <p className="sb-directory__card-desc">{blog.excerpt}</p>
//                       )}

//                       <div className="sb-directory__card-footer">
//                         {blog.authorName && (
//                           <div className="sb-directory__card-author">
//                             <FaUser />
//                             {blog.authorName}
//                           </div>
//                         )}
//                         <Link 
//                           to={getBlogUrl(blog.slug)} 
//                           className="sb-directory__card-link"
//                         >
//                           <span>Read</span>
//                           <FaArrowRight />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =================================================
//           EDITORIAL SECTION - With Background Image
//       ================================================= */}
//       <section ref={editorialRef} className="sb-editorial">
//         <div className="sb-editorial__bg-wrapper">
//           <div 
//             className="sb-editorial__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.editorial})` }}
//           />
//           <div className="sb-editorial__bg-overlay" />
//         </div>

//         <div className="sb-container">
//           <div className="sb-editorial__inner">
//             <div className="sb-editorial__content">
//               <span className="sb-editorial__label">LEARNING NEVER STOPS</span>
//               <h2 className="sb-editorial__title">
//                 Curiosity Creates
//                 <br />
//                 <span className="sb-editorial__highlight">Better Questions.</span>
//               </h2>
//             </div>

//             <div className="sb-editorial__right">
//               <div className="sb-editorial__quote">
//                 <FaQuoteLeft />
//               </div>
//               <p className="sb-editorial__desc">
//                 A strong learning culture encourages students to look beyond
//                 what they already know and develop the confidence to ask questions.
//               </p>
//               <p className="sb-editorial__desc">
//                 Our stories and articles are an extension of that culture —
//                 creating another space for ideas, experiences and perspectives.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           NEWS SECTION
//       ================================================= */}
//       <section ref={newsRef} className="sb-news">
//         <div className="sb-news__bg" />

//         <div className="sb-container">
//           <div className="sb-news__inner">
//             <div className="sb-news__content">
//               <span className="sb-news__label">SCHOOL UPDATES</span>
//               <h2 className="sb-news__title">
//                 Looking for
//                 <br />
//                 <span className="sb-news__highlight">What's Happening Now?</span>
//               </h2>
//               <p className="sb-news__desc">
//                 Visit our News & Events section for the latest school announcements,
//                 activities, celebrations and community updates.
//               </p>
//               <Link to="/news" className="sb-news__link">
//                 <span>View School News</span>
//                 <FaArrowRight />
//               </Link>
//             </div>

//             <div className="sb-news__features">
//               <div className="sb-news__feature">
//                 <FaNewspaper />
//                 <span>Daily Updates</span>
//               </div>
//               <div className="sb-news__feature">
//                 <FaCalendarAlt />
//                 <span>Events Calendar</span>
//               </div>
//               <div className="sb-news__feature">
//                 <FaUsers />
//                 <span>Community Stories</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           GALLERY SECTION
//       ================================================= */}
//       <section ref={galleryRef} className="sb-gallery">
//         <div className="sb-container">
//           <div className="sb-gallery__inner">
//             <div className="sb-gallery__content">
//               <span className="sb-gallery__label">STORIES IN PICTURES</span>
//               <h2 className="sb-gallery__title">
//                 Some Moments
//                 <br />
//                 <span className="sb-gallery__highlight">Don't Need Words.</span>
//               </h2>
//             </div>

//             <div className="sb-gallery__right">
//               <p className="sb-gallery__desc">
//                 Explore the people, activities and experiences that make school
//                 life memorable.
//               </p>
//               <Link to="/gallery" className="sb-gallery__link">
//                 <span>View Gallery</span>
//                 <FaArrowRight />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sb-cta">
//         <div className="sb-cta__bg-wrapper">
//           <div 
//             className="sb-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sb-cta__bg-overlay" />
//           <div className="sb-cta__bg-gradient" />
//         </div>

//         <div className="sb-container">
//           <div className="sb-cta__content">
//             <div className="sb-cta__badge">
//               <FaSchool />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>
//             <h2 className="sb-cta__title">
//               There's Always
//               <br />
//               <span className="sb-cta__highlight">More to Discover.</span>
//             </h2>
//             <p className="sb-cta__desc">
//               Explore academics, campus life and the experiences that shape
//               the SNGA journey.
//             </p>

//             <div className="sb-cta__actions">
//               <Link to="/academics" className="sb-cta__btn sb-cta__btn--primary">
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/about" className="sb-cta__btn sb-cta__btn--secondary">
//                 About SNGA
//               </Link>
//             </div>

//             <div className="sb-cta__footer">
//               <span>
//                 <FaMapMarkerAlt /> Bangalore, India
//               </span>
//               <span>
//                 <FaPhone /> +91 98765 43210
//               </span>
//               <span>
//                 <FaEnvelope /> info@snga.edu.in
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Blogs;



import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import blogService from "../services/blog.service";
import "./Blogs.css";

import schoolImage from "../assets/school.JPG";
import campusImage from "../assets/camp.jpg";
import engagingImage from "../assets/engaging.jpg";
import beyondImage from "../assets/beyond.jpg";
import teachingImage from "../assets/teaching.jpg";
import sportsImage from "../assets/sports.JPG";
import artsImage from "../assets/arts.jpg";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const FALLBACK_IMAGES = [
  campusImage,
  teachingImage,
  sportsImage,
  artsImage,
  engagingImage,
  schoolImage,
  beyondImage,
];

const getImageUrl = (image) => {
  if (!image) return "";

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:")
  ) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};

const getBlogUrl = (slug) => {
  if (!slug) return "#";
  return `/blogs/${encodeURIComponent(slug)}`;
};

const getReadingTime = (content) => {
  if (!content) return "";

  const text = String(content).replace(/<[^>]*>/g, " ").trim();

  if (!text) return "";

  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState("");

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featuredRef = useRef(null);
  const archiveRef = useRef(null);
  const editorialRef = useRef(null);
  const ctaRef = useRef(null);

  /* =====================================================
     LOAD BLOGS
  ===================================================== */

  useEffect(() => {
    let mounted = true;

    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await blogService.getPublishedBlogs();

        const data = Array.isArray(response)
          ? response
          : response?.data ||
            response?.blogs ||
            response?.news ||
            [];

        if (mounted) {
          setBlogs(
            Array.isArray(data)
              ? data.filter(
                  (blog) =>
                    blog?.isPublished !== false
                )
              : []
          );
        }
      } catch (err) {
        console.error(
          "Failed to load blogs:",
          err
        );

        if (mounted) {
          setError(
            "The journal could not be loaded right now."
          );

          setBlogs([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadBlogs();

    return () => {
      mounted = false;
    };
  }, []);

  /* =====================================================
     SCROLL REVEALS
  ===================================================== */

  useEffect(() => {
    const refs = [
      heroRef,
      introRef,
      featuredRef,
      archiveRef,
      editorialRef,
      ctaRef,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "blogs-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = useMemo(() => {
    const values = blogs
      .map((blog) => blog?.category)
      .filter(Boolean)
      .map((category) => String(category).trim())
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return blogs;
    }

    return blogs.filter(
      (blog) =>
        String(blog?.category || "").trim() ===
        activeCategory
    );
  }, [blogs, activeCategory]);

  const featuredBlog = filteredBlogs[0] || null;

  const archiveBlogs = filteredBlogs.slice(
    featuredBlog ? 1 : 0
  );

  /* =====================================================
     IMAGE
  ===================================================== */

  const getBlogImage = (blog, index = 0) => {
    if (!blog?.featuredImage) {
      return FALLBACK_IMAGES[
        index % FALLBACK_IMAGES.length
      ];
    }

    return getImageUrl(blog.featuredImage);
  };

  return (
    <main className="blogs-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section
        ref={heroRef}
        className="blogs-hero"
      >
        <div className="blogs-hero-image">
          <img
            src={schoolImage}
            alt="Shifan Noor Global Academy"
          />
        </div>

        <div className="blogs-hero-overlay" />

        <div className="blogs-container blogs-hero-inner">

          <div className="blogs-hero-top">
            <span>
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <span>
              VENKULAM · RAMANATHAPURAM
            </span>
          </div>

          <div className="blogs-hero-content">

            <span className="blogs-eyebrow">
              THE SNGA JOURNAL
            </span>

            <h1>
              Ideas worth
              <br />
              <em>sharing.</em>
            </h1>

            <p>
              Stories, perspectives and ideas from
              the learning community at Shifan Noor
              Global Academy.
            </p>

          </div>

          <div className="blogs-hero-bottom">
            <span>01</span>

            <div />

            <span>
              SCROLL TO READ
            </span>
          </div>

        </div>
      </section>

      {/* =================================================
          INTRO
      ================================================= */}

      <section
        ref={introRef}
        className="blogs-intro"
      >
        <div className="blogs-container">

          <div className="blogs-intro-grid">

            <div>
              <span className="blogs-section-label">
                THE JOURNAL
              </span>

              <h2>
                Where school
                <br />
                life becomes
                <br />
                <em>a story.</em>
              </h2>
            </div>

            <div className="blogs-intro-copy">

              <p className="blogs-intro-lead">
                Learning does not end when the lesson
                ends.
              </p>

              <p>
                The SNGA Journal creates another space
                for ideas, experiences and conversations
                that extend beyond the classroom.
              </p>

              <p>
                Explore stories from the academic
                journey, campus life, student
                experiences, community and the values
                that shape our approach to education.
              </p>

              <div className="blogs-intro-rule" />

              <div className="blogs-intro-meta">
                <span>
                  LEARNING
                </span>

                <span>
                  EXPERIENCE
                </span>

                <span>
                  COMMUNITY
                </span>

                <span>
                  PERSPECTIVE
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =================================================
          FEATURED STORY
      ================================================= */}

      {!loading &&
        !error &&
        featuredBlog && (
          <section
            ref={featuredRef}
            className="blogs-featured"
          >
            <div className="blogs-container">

              <div className="blogs-featured-heading">

                <div>
                  <span className="blogs-section-label">
                    FROM THE JOURNAL
                  </span>

                  <h2>
                    One story.
                    <br />
                    <em>Worth your time.</em>
                  </h2>
                </div>

                <span className="blogs-section-number">
                  02
                </span>

              </div>

              <article className="blogs-featured-grid">

                <Link
                  to={getBlogUrl(
                    featuredBlog.slug
                  )}
                  className="blogs-featured-image"
                >
                  <img
                    src={getBlogImage(
                      featuredBlog,
                      0
                    )}
                    alt={
                      featuredBlog.title ||
                      "SNGA journal"
                    }
                    onError={(event) => {
                      event.currentTarget.onerror =
                        null;

                      event.currentTarget.src =
                        campusImage;
                    }}
                  />

                  <span>
                    READ STORY
                  </span>
                </Link>

                <div className="blogs-featured-content">

                  <div className="blogs-featured-meta">

                    <span>
                      {featuredBlog.category ||
                        "JOURNAL"}
                    </span>

                    {featuredBlog.publishedAt && (
                      <time>
                        {formatDate(
                          featuredBlog.publishedAt
                        )}
                      </time>
                    )}

                  </div>

                  <h3>
                    {featuredBlog.title}
                  </h3>

                  {featuredBlog.excerpt && (
                    <p>
                      {featuredBlog.excerpt}
                    </p>
                  )}

                  {featuredBlog.authorName && (
                    <div className="blogs-featured-author">

                      <span>
                        WRITTEN BY
                      </span>

                      <strong>
                        {featuredBlog.authorName}
                      </strong>

                    </div>
                  )}

                  <div className="blogs-featured-footer">

                    {featuredBlog.content && (
                      <span>
                        {getReadingTime(
                          featuredBlog.content
                        )}
                      </span>
                    )}

                    <Link
                      to={getBlogUrl(
                        featuredBlog.slug
                      )}
                      className="blogs-read-link"
                    >
                      <span>
                        Read the article
                      </span>

                      <strong>
                        →
                      </strong>
                    </Link>

                  </div>

                </div>

              </article>

            </div>
          </section>
        )}

      {/* =================================================
          ARCHIVE
      ================================================= */}

      <section
        ref={archiveRef}
        className="blogs-archive"
      >
        <div className="blogs-container">

          <div className="blogs-archive-heading">

            <div>
              <span className="blogs-section-label">
                JOURNAL ARCHIVE
              </span>

              <h2>
                Read. Think.
                <br />
                <em>Discover.</em>
              </h2>
            </div>

            <div className="blogs-archive-count">

              <strong>
                {String(
                  filteredBlogs.length
                ).padStart(2, "0")}
              </strong>

              <span>
                published
                <br />
                stories
              </span>

            </div>

          </div>

          {/* CATEGORY INDEX */}

          {!loading &&
            categories.length > 1 && (
              <div className="blogs-category-index">

                {categories.map(
                  (category, index) => (
                    <button
                      type="button"
                      key={category}
                      className={
                        activeCategory ===
                        category
                          ? "blogs-category blogs-category-active"
                          : "blogs-category"
                      }
                      onClick={() =>
                        setActiveCategory(
                          category
                        )
                      }
                    >
                      <span>
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      {category}
                    </button>
                  )
                )}

              </div>
            )}

          {/* LOADING */}

          {loading && (
            <div className="blogs-state">

              <div className="blogs-loader" />

              <p>
                Opening the journal...
              </p>

            </div>
          )}

          {/* ERROR */}

          {!loading && error && (
            <div className="blogs-state blogs-state-error">

              <span>
                JOURNAL NOTICE
              </span>

              <h3>
                The journal is temporarily
                unavailable.
              </h3>

              <p>
                {error}
              </p>

            </div>
          )}

          {/* EMPTY */}

          {!loading &&
            !error &&
            filteredBlogs.length === 0 && (
              <div className="blogs-state blogs-state-empty">

                <span>
                  THE JOURNAL
                </span>

                <h3>
                  New stories are on their way.
                </h3>

                <p>
                  Published articles will appear
                  here once they are added through
                  the administration panel.
                </p>

              </div>
            )}

          {/* ARTICLE LIST */}

          {!loading &&
            !error &&
            archiveBlogs.length > 0 && (
              <div className="blogs-archive-list">

                {archiveBlogs.map(
                  (blog, index) => (
                    <article
                      key={
                        blog.id ||
                        blog._id ||
                        index
                      }
                      className="blogs-archive-row"
                    >

                      <div className="blogs-row-number">
                        {String(
                          index + 2
                        ).padStart(2, "0")}
                      </div>

                      <Link
                        to={getBlogUrl(
                          blog.slug
                        )}
                        className="blogs-row-image"
                      >
                        <img
                          src={getBlogImage(
                            blog,
                            index + 1
                          )}
                          alt={
                            blog.title ||
                            "SNGA article"
                          }
                          loading="lazy"
                          onError={(
                            event
                          ) => {
                            event.currentTarget.onerror =
                              null;

                            event.currentTarget.src =
                              FALLBACK_IMAGES[
                                (index + 1) %
                                  FALLBACK_IMAGES.length
                              ];
                          }}
                        />
                      </Link>

                      <div className="blogs-row-content">

                        <div className="blogs-row-meta">

                          <span>
                            {blog.category ||
                              "JOURNAL"}
                          </span>

                          {blog.publishedAt && (
                            <time>
                              {formatDate(
                                blog.publishedAt
                              )}
                            </time>
                          )}

                        </div>

                        <h3>
                          {blog.title}
                        </h3>

                        {blog.excerpt && (
                          <p>
                            {blog.excerpt}
                          </p>
                        )}

                        <div className="blogs-row-bottom">

                          {blog.authorName && (
                            <span>
                              {blog.authorName}
                            </span>
                          )}

                          {blog.content && (
                            <span>
                              {getReadingTime(
                                blog.content
                              )}
                            </span>
                          )}

                        </div>

                      </div>

                      <Link
                        to={getBlogUrl(
                          blog.slug
                        )}
                        className="blogs-row-arrow"
                        aria-label={`Read ${blog.title}`}
                      >
                        →
                      </Link>

                    </article>
                  )
                )}

              </div>
            )}

        </div>
      </section>

      {/* =================================================
          EDITORIAL PHILOSOPHY
      ================================================= */}

      <section
        ref={editorialRef}
        className="blogs-editorial"
      >

        <div className="blogs-editorial-image">

          <img
            src={beyondImage}
            alt="Learning beyond the classroom"
            loading="lazy"
          />

        </div>

        <div className="blogs-editorial-content">

          <span className="blogs-section-label">
            BEYOND THE CLASSROOM
          </span>

          <h2>
            Curiosity creates
            <br />
            <em>better questions.</em>
          </h2>

          <div className="blogs-editorial-rule" />

          <p>
            Education is not simply about collecting
            answers. It is about developing the
            confidence to question, explore,
            understand and discover.
          </p>

          <p>
            That spirit continues through the stories
            and ideas shared by the SNGA community.
          </p>

          <div className="blogs-editorial-signature">
            <span>
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <strong>
              LEARN · GROW · LEAD
            </strong>
          </div>

        </div>

      </section>

      {/* =================================================
          JOURNAL CATEGORIES
      ================================================= */}

      <section className="blogs-topics">

        <div className="blogs-container">

          <div className="blogs-topics-heading">

            <span className="blogs-section-label">
              WHAT WE WRITE ABOUT
            </span>

            <h2>
              Many subjects.
              <br />
              <em>One learning journey.</em>
            </h2>

          </div>

          <div className="blogs-topics-grid">

            <article>
              <span>
                01
              </span>

              <h3>
                Academics
              </h3>

              <p>
                Ideas and experiences around
                teaching, learning and academic
                growth.
              </p>
            </article>

            <article>
              <span>
                02
              </span>

              <h3>
                Student Life
              </h3>

              <p>
                The experiences, activities and
                relationships that shape school life.
              </p>
            </article>

            <article>
              <span>
                03
              </span>

              <h3>
                Sport & Activity
              </h3>

              <p>
                Participation, discipline,
                teamwork and healthy competition.
              </p>
            </article>

            <article>
              <span>
                04
              </span>

              <h3>
                Community
              </h3>

              <p>
                Stories that connect students,
                teachers, families and the wider
                school community.
              </p>
            </article>

          </div>

        </div>

      </section>

      {/* =================================================
          CROSS NAVIGATION
      ================================================= */}

      <section className="blogs-crossnav">

        <div className="blogs-container">

          <div className="blogs-crossnav-grid">

            <Link
              to="/news"
              className="blogs-crossnav-item blogs-crossnav-news"
            >
              <div>
                <span>
                  SCHOOL UPDATES
                </span>

                <h3>
                  The latest
                  <br />
                  <em>from campus.</em>
                </h3>
              </div>

              <strong>
                →
              </strong>
            </Link>

            <Link
              to="/gallery"
              className="blogs-crossnav-item blogs-crossnav-gallery"
            >
              <div>
                <span>
                  VISUAL ARCHIVE
                </span>

                <h3>
                  Life at SNGA,
                  <br />
                  <em>in frames.</em>
                </h3>
              </div>

              <strong>
                →
              </strong>
            </Link>

          </div>

        </div>

      </section>

      {/* =================================================
          CTA
      ================================================= */}

      <section
        ref={ctaRef}
        className="blogs-cta"
      >

        <div className="blogs-cta-image">

          <img
            src={engagingImage}
            alt="Students at Shifan Noor Global Academy"
            loading="lazy"
          />

        </div>

        <div className="blogs-cta-overlay" />

        <div className="blogs-container blogs-cta-container">

          <div className="blogs-cta-content">

            <span className="blogs-eyebrow">
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <h2>
              There is always
              <br />
              <em>more to discover.</em>
            </h2>

            <p>
              Explore the school, understand our
              approach to learning and discover the
              environment in which students grow.
            </p>

            <div className="blogs-cta-actions">

              <Link
                to="/academics"
                className="blogs-cta-primary"
              >
                Explore Academics
              </Link>

              <Link
                to="/about"
                className="blogs-cta-secondary"
              >
                About SNGA
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Blogs;