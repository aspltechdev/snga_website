// // // import { useEffect, useMemo, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { FaArrowRight } from "react-icons/fa";

// // // import newsService from "../services/news.service";
// // // import "./Blogs.css";

// // // const Blogs = () => {
// // //   const [blogs, setBlogs] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeCategory, setActiveCategory] = useState("All");
// // //   const [error, setError] = useState("");

// // //   useEffect(() => {
// // //     const loadBlogs = async () => {
// // //       try {
// // //         setLoading(true);
// // //         setError("");

// // //         const response = await newsService.getNews();

// // //         const items = Array.isArray(response)
// // //           ? response
// // //           : response?.data || response?.blogs || response?.news || [];

// // //         setBlogs(items);
// // //       } catch (err) {
// // //         console.error("Failed to load blogs:", err);
// // //         setError("Unable to load articles.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     loadBlogs();
// // //   }, []);

// // //   const categories = useMemo(() => {
// // //     const values = blogs
// // //       .map((blog) => blog.category)
// // //       .filter(Boolean);

// // //     return ["All", ...new Set(values)];
// // //   }, [blogs]);

// // //   const filteredBlogs = useMemo(() => {
// // //     if (activeCategory === "All") {
// // //       return blogs;
// // //     }

// // //     return blogs.filter(
// // //       (blog) => blog.category === activeCategory
// // //     );
// // //   }, [blogs, activeCategory]);

// // //   const featuredBlog = filteredBlogs[0];
// // //   const remainingBlogs = filteredBlogs.slice(1);

// // //   const getImageUrl = (image) => {
// // //     if (!image) return "";

// // //     if (
// // //       image.startsWith("http://") ||
// // //       image.startsWith("https://")
// // //     ) {
// // //       return image;
// // //     }

// // //     const API_URL =
// // //       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// // //       "http://localhost:5000";

// // //     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // //   };

// // //   const formatDate = (date) => {
// // //     if (!date) return "";

// // //     const parsedDate = new Date(date);

// // //     if (Number.isNaN(parsedDate.getTime())) {
// // //       return "";
// // //     }

// // //     return new Intl.DateTimeFormat("en-IN", {
// // //       day: "2-digit",
// // //       month: "short",
// // //       year: "numeric",
// // //     }).format(parsedDate);
// // //   };

// // //   return (
// // //     <main className="blogs-page">

// // //       {/* HERO */}
// // //       <section className="blogs-hero">
// // //         <div className="blogs-container">

// // //           <div className="blogs-hero-content">

// // //             <div className="blogs-eyebrow">
// // //               <span />
// // //               SNGA STORIES
// // //             </div>

// // //             <h1>
// // //               Ideas worth
// // //               <br />
// // //               <em>sharing.</em>
// // //             </h1>

// // //             <p>
// // //               Perspectives, insights and stories from the
// // //               learning community at Shifan Noor Global Academy.
// // //             </p>

// // //           </div>

// // //           <div className="blogs-hero-side">
// // //             <span>LEARN</span>
// // //             <span>THINK</span>
// // //             <span>EXPLORE</span>
// // //             <span>SHARE</span>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* INTRO */}
// // //       <section className="blogs-intro">
// // //         <div className="blogs-container">

// // //           <div className="blogs-intro-label">
// // //             THE SNGA JOURNAL
// // //           </div>

// // //           <div className="blogs-intro-grid">

// // //             <h2>
// // //               Stories that
// // //               <br />
// // //               extend the <em>classroom.</em>
// // //             </h2>

// // //             <div className="blogs-intro-copy">

// // //               <p>
// // //                 Learning doesn't stop when the classroom
// // //                 ends. Ideas, experiences and conversations
// // //                 can inspire students, parents and the wider
// // //                 school community.
// // //               </p>

// // //               <p>
// // //                 Explore articles and stories that reflect
// // //                 the educational journey, values and
// // //                 experiences of the SNGA community.
// // //               </p>

// // //             </div>

// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* BLOG DIRECTORY */}
// // //       <section className="blogs-directory">

// // //         <div className="blogs-container">

// // //           <div className="blogs-directory-header">

// // //             <div>

// // //               <div className="blogs-eyebrow dark">
// // //                 LATEST ARTICLES
// // //               </div>

// // //               <h2>
// // //                 Read,
// // //                 <br />
// // //                 <em>explore & discover.</em>
// // //               </h2>

// // //             </div>

// // //             <p>
// // //               Browse the latest articles published by
// // //               Shifan Noor Global Academy.
// // //             </p>

// // //           </div>

// // //           {/* CATEGORY FILTER */}
// // //           {!loading && categories.length > 1 && (
// // //             <div className="blogs-filters">

// // //               {categories.map((category) => (
// // //                 <button
// // //                   type="button"
// // //                   key={category}
// // //                   className={
// // //                     activeCategory === category
// // //                       ? "active"
// // //                       : ""
// // //                   }
// // //                   onClick={() =>
// // //                     setActiveCategory(category)
// // //                   }
// // //                 >
// // //                   {category}
// // //                 </button>
// // //               ))}

// // //             </div>
// // //           )}

// // //           {/* LOADING */}
// // //           {loading && (
// // //             <div className="blogs-state">
// // //               <span>LOADING ARTICLES</span>
// // //             </div>
// // //           )}

// // //           {/* ERROR */}
// // //           {!loading && error && (
// // //             <div className="blogs-state blogs-error">
// // //               <span>{error}</span>
// // //             </div>
// // //           )}

// // //           {/* EMPTY */}
// // //           {!loading &&
// // //             !error &&
// // //             filteredBlogs.length === 0 && (
// // //               <div className="blogs-state">

// // //                 <span>
// // //                   NO ARTICLES YET
// // //                 </span>

// // //                 <h3>
// // //                   New stories will appear here.
// // //                 </h3>

// // //                 <p>
// // //                   Articles can be published from the
// // //                   administration panel.
// // //                 </p>

// // //               </div>
// // //             )}

// // //           {/* FEATURED BLOG */}
// // //           {!loading &&
// // //             !error &&
// // //             featuredBlog && (
// // //               <article className="blogs-featured">

// // //                 <Link
// // //                   to={`/blogs/${featuredBlog.slug}`}
// // //                   className="blogs-featured-image"
// // //                 >

// // //                   {featuredBlog.featuredImage ? (
// // //                     <img
// // //                       src={getImageUrl(
// // //                         featuredBlog.featuredImage
// // //                       )}
// // //                       alt={featuredBlog.title}
// // //                     />
// // //                   ) : (
// // //                     <div className="blogs-image-placeholder">
// // //                       SNGA
// // //                     </div>
// // //                   )}

// // //                   <div className="blogs-featured-number">
// // //                     01
// // //                   </div>

// // //                 </Link>

// // //                 <div className="blogs-featured-content">

// // //                   <div className="blogs-meta">

// // //                     {featuredBlog.category && (
// // //                       <span>
// // //                         {featuredBlog.category}
// // //                       </span>
// // //                     )}

// // //                     {featuredBlog.publishedAt && (
// // //                       <time>
// // //                         {formatDate(
// // //                           featuredBlog.publishedAt
// // //                         )}
// // //                       </time>
// // //                     )}

// // //                   </div>

// // //                   <h3>
// // //                     {featuredBlog.title}
// // //                   </h3>

// // //                   {featuredBlog.excerpt && (
// // //                     <p>
// // //                       {featuredBlog.excerpt}
// // //                     </p>
// // //                   )}

// // //                   {featuredBlog.authorName && (
// // //                     <div className="blogs-author">
// // //                       By {featuredBlog.authorName}
// // //                     </div>
// // //                   )}

// // //                   <Link
// // //                     to={`/blogs/${featuredBlog.slug}`}
// // //                     className="blogs-read-link"
// // //                   >
// // //                     <span>Read Article</span>
// // //                     <FaArrowRight />
// // //                   </Link>

// // //                 </div>

// // //               </article>
// // //             )}

// // //           {/* BLOG GRID */}
// // //           {!loading &&
// // //             !error &&
// // //             remainingBlogs.length > 0 && (
// // //               <div className="blogs-grid">

// // //                 {remainingBlogs.map((blog, index) => (
// // //                   <article
// // //                     className="blogs-card"
// // //                     key={blog.id}
// // //                   >

// // //                     <Link
// // //                       to={`/blogs/${blog.slug}`}
// // //                       className="blogs-card-image"
// // //                     >

// // //                       {blog.featuredImage ? (
// // //                         <img
// // //                           src={getImageUrl(
// // //                             blog.featuredImage
// // //                           )}
// // //                           alt={blog.title}
// // //                         />
// // //                       ) : (
// // //                         <div className="blogs-image-placeholder">
// // //                           SNGA
// // //                         </div>
// // //                       )}

// // //                       <span>
// // //                         {String(index + 2).padStart(2, "0")}
// // //                       </span>

// // //                     </Link>

// // //                     <div className="blogs-card-content">

// // //                       <div className="blogs-meta">

// // //                         {blog.category && (
// // //                           <span>
// // //                             {blog.category}
// // //                           </span>
// // //                         )}

// // //                         {blog.publishedAt && (
// // //                           <time>
// // //                             {formatDate(
// // //                               blog.publishedAt
// // //                             )}
// // //                           </time>
// // //                         )}

// // //                       </div>

// // //                       <h3>
// // //                         {blog.title}
// // //                       </h3>

// // //                       {blog.excerpt && (
// // //                         <p>
// // //                           {blog.excerpt}
// // //                         </p>
// // //                       )}

// // //                       {blog.authorName && (
// // //                         <div className="blogs-author">
// // //                           By {blog.authorName}
// // //                         </div>
// // //                       )}

// // //                       <Link
// // //                         to={`/blogs/${blog.slug}`}
// // //                         className="blogs-card-link"
// // //                       >
// // //                         Read Article
// // //                         <FaArrowRight />
// // //                       </Link>

// // //                     </div>

// // //                   </article>
// // //                 ))}

// // //               </div>
// // //             )}

// // //         </div>

// // //       </section>

// // //       {/* EDITORIAL STATEMENT */}
// // //       <section className="blogs-editorial">

// // //         <div className="blogs-container">

// // //           <div className="blogs-editorial-grid">

// // //             <div className="blogs-editorial-heading">

// // //               <div className="blogs-eyebrow">
// // //                 LEARNING NEVER STOPS
// // //               </div>

// // //               <h2>
// // //                 Curiosity creates
// // //                 <br />
// // //                 <em>better questions.</em>
// // //               </h2>

// // //             </div>

// // //             <div className="blogs-editorial-copy">

// // //               <p>
// // //                 A strong learning culture encourages students
// // //                 to look beyond what they already know and
// // //                 develop the confidence to ask questions.
// // //               </p>

// // //               <p>
// // //                 Our stories and articles are an extension
// // //                 of that culture — creating another space
// // //                 for ideas, experiences and perspectives.
// // //               </p>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </section>

// // //       {/* NEWS CONNECTION */}
// // //       <section className="blogs-news">

// // //         <div className="blogs-container">

// // //           <div className="blogs-news-grid">

// // //             <div className="blogs-news-content">

// // //               <div className="blogs-eyebrow dark">
// // //                 SCHOOL UPDATES
// // //               </div>

// // //               <h2>
// // //                 Looking for
// // //                 <br />
// // //                 what's happening <em>now?</em>
// // //               </h2>

// // //               <p>
// // //                 Visit our News & Events section for the
// // //                 latest school announcements, activities,
// // //                 celebrations and community updates.
// // //               </p>

// // //               <Link
// // //                 to="/news"
// // //                 className="blogs-link"
// // //               >
// // //                 <span>View School News</span>
// // //                 <FaArrowRight />
// // //               </Link>

// // //             </div>

// // //             <div className="blogs-news-mark">

// // //               <span>
// // //                 NEWS
// // //               </span>

// // //               <strong>
// // //                 & EVENTS
// // //               </strong>

// // //               <small>
// // //                 STAY CONNECTED
// // //               </small>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </section>

// // //       {/* GALLERY */}
// // //       <section className="blogs-gallery">

// // //         <div className="blogs-container">

// // //           <div className="blogs-gallery-grid">

// // //             <div>

// // //               <div className="blogs-eyebrow dark">
// // //                 STORIES IN PICTURES
// // //               </div>

// // //               <h2>
// // //                 Some moments
// // //                 <br />
// // //                 don't need <em>words.</em>
// // //               </h2>

// // //             </div>

// // //             <div className="blogs-gallery-copy">

// // //               <p>
// // //                 Explore the people, activities and
// // //                 experiences that make school life
// // //                 memorable.
// // //               </p>

// // //               <Link
// // //                 to="/gallery"
// // //                 className="blogs-link"
// // //               >
// // //                 <span>View Gallery</span>
// // //                 <FaArrowRight />
// // //               </Link>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </section>

// // //       {/* CTA */}
// // //       <section className="blogs-cta">

// // //         <div className="blogs-container">

// // //           <div className="blogs-cta-content">

// // //             <div className="blogs-eyebrow dark">
// // //               EXPLORE SNGA
// // //             </div>

// // //             <h2>
// // //               There's always
// // //               <br />
// // //               more to <em>discover.</em>
// // //             </h2>

// // //             <p>
// // //               Explore academics, campus life and the
// // //               experiences that shape the SNGA journey.
// // //             </p>

// // //             <div className="blogs-actions">

// // //               <Link
// // //                 to="/academics"
// // //                 className="blogs-button"
// // //               >
// // //                 <span>Explore Academics</span>
// // //                 <FaArrowRight />
// // //               </Link>

// // //               <Link
// // //                 to="/about"
// // //                 className="blogs-secondary"
// // //               >
// // //                 About SNGA
// // //               </Link>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </section>

// // //     </main>
// // //   );
// // // };

// // // export default Blogs;

// // import { useEffect, useMemo, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FaArrowRight,
// //   FaBookOpen,
// //   FaTag,
// //   FaCalendarAlt,
// //   FaUser,
// //   FaClock,
// //   FaEye,
// //   FaHeart,
// //   FaShare,
// // } from "react-icons/fa";
// // import newsService from "../services/news.service";
// // import "./Blogs.css";

// // const Blogs = () => {
// //   const [blogs, setBlogs] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [error, setError] = useState("");

// //   const heroRef = useRef(null);
// //   const introRef = useRef(null);
// //   const directoryRef = useRef(null);
// //   const editorialRef = useRef(null);
// //   const newsRef = useRef(null);
// //   const galleryRef = useRef(null);
// //   const ctaRef = useRef(null);

// //   // =====================================================
// //   // SCROLL TRIGGERED ANIMATIONS
// //   // =====================================================

// //   useEffect(() => {
// //     const observerOptions = {
// //       threshold: 0.1,
// //       rootMargin: "0px 0px -50px 0px",
// //     };

// //     const sections = [
// //       { ref: heroRef, className: "sb-hero--visible" },
// //       { ref: introRef, className: "sb-intro--visible" },
// //       { ref: directoryRef, className: "sb-directory--visible" },
// //       { ref: editorialRef, className: "sb-editorial--visible" },
// //       { ref: newsRef, className: "sb-news--visible" },
// //       { ref: galleryRef, className: "sb-gallery--visible" },
// //       { ref: ctaRef, className: "sb-cta--visible" },
// //     ];

// //     const observers = {};

// //     sections.forEach(({ ref, className }) => {
// //       if (!ref.current) return;

// //       const observer = new IntersectionObserver((entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add(className);
// //             observer.unobserve(entry.target);
// //           }
// //         });
// //       }, observerOptions);

// //       observer.observe(ref.current);
// //       observers[className] = observer;
// //     });

// //     return () => {
// //       Object.values(observers).forEach((observer) => observer.disconnect());
// //     };
// //   }, []);

// //   // =====================================================
// //   // FETCH BLOGS
// //   // =====================================================

// //   useEffect(() => {
// //     const loadBlogs = async () => {
// //       try {
// //         setLoading(true);
// //         setError("");

// //         const response = await newsService.getNews();

// //         const items = Array.isArray(response)
// //           ? response
// //           : response?.data || response?.blogs || response?.news || [];

// //         setBlogs(items);
// //       } catch (err) {
// //         console.error("Failed to load blogs:", err);
// //         setError("Unable to load articles.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadBlogs();
// //   }, []);

// //   // =====================================================
// //   // COMPUTED VALUES
// //   // =====================================================

// //   const categories = useMemo(() => {
// //     const values = blogs.map((blog) => blog.category).filter(Boolean);
// //     return ["All", ...new Set(values)];
// //   }, [blogs]);

// //   const filteredBlogs = useMemo(() => {
// //     if (activeCategory === "All") {
// //       return blogs;
// //     }
// //     return blogs.filter((blog) => blog.category === activeCategory);
// //   }, [blogs, activeCategory]);

// //   const featuredBlog = filteredBlogs[0];
// //   const remainingBlogs = filteredBlogs.slice(1);

// //   // =====================================================
// //   // HELPERS
// //   // =====================================================

// //   const getImageUrl = (image) => {
// //     if (!image) return "";

// //     if (image.startsWith("http://") || image.startsWith("https://")) {
// //       return image;
// //     }

// //     const API_URL =
// //       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// //       "http://localhost:5000";

// //     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// //   };

// //   const formatDate = (date) => {
// //     if (!date) return "";

// //     const parsedDate = new Date(date);

// //     if (Number.isNaN(parsedDate.getTime())) {
// //       return "";
// //     }

// //     return new Intl.DateTimeFormat("en-IN", {
// //       day: "2-digit",
// //       month: "short",
// //       year: "numeric",
// //     }).format(parsedDate);
// //   };

// //   // =====================================================
// //   // DATA
// //   // =====================================================

// //   const lifeItems = [
// //     {
// //       number: "01",
// //       title: "Academics",
// //       description: "Classroom experiences and opportunities to discover new ideas.",
// //       icon: <FaBookOpen />,
// //     },
// //     {
// //       number: "02",
// //       title: "Sports",
// //       description: "Participation, teamwork and achievement through sporting activities.",
// //       icon: <FaBookOpen />,
// //     },
// //     {
// //       number: "03",
// //       title: "Activities",
// //       description: "Creative, cultural and co-curricular experiences that encourage participation.",
// //       icon: <FaBookOpen />,
// //     },
// //   ];

// //   return (
// //     <main className="sb-page">
// //       {/* =================================================
// //           HERO SECTION
// //       ================================================= */}
// //       <section ref={heroRef} className="sb-hero">
// //         <div className="sb-hero__bg" />
// //         <div className="sb-hero__gradient" />

// //         <div className="sb-container">
// //           <div className="sb-hero__content">
// //             <span className="sb-hero__badge">
// //               <FaBookOpen />
// //               SNGA STORIES
// //             </span>

// //             <h1 className="sb-hero__title">
// //               Ideas Worth
// //               <br />
// //               <span className="sb-hero__highlight">Sharing.</span>
// //             </h1>

// //             <p className="sb-hero__desc">
// //               Perspectives, insights and stories from the learning community
// //               at Shifan Noor Global Academy.
// //             </p>
// //           </div>

// //           <div className="sb-hero__tags">
// //             <span>LEARN</span>
// //             <span>THINK</span>
// //             <span>EXPLORE</span>
// //             <span>SHARE</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           INTRO SECTION
// //       ================================================= */}
// //       <section ref={introRef} className="sb-intro">
// //         <div className="sb-container">
// //           <div className="sb-intro__inner">
// //             <span className="sb-intro__label">THE SNGA JOURNAL</span>

// //             <div className="sb-intro__grid">
// //               <h2 className="sb-intro__title">
// //                 Stories That
// //                 <br />
// //                 <span className="sb-intro__highlight">Extend the Classroom.</span>
// //               </h2>

// //               <div className="sb-intro__text">
// //                 <p>
// //                   Learning doesn't stop when the classroom ends. Ideas, experiences
// //                   and conversations can inspire students, parents and the wider
// //                   school community.
// //                 </p>
// //                 <p>
// //                   Explore articles and stories that reflect the educational journey,
// //                   values and experiences of the SNGA community.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           DIRECTORY SECTION
// //       ================================================= */}
// //       <section ref={directoryRef} className="sb-directory">
// //         <div className="sb-container">
// //           <div className="sb-directory__header">
// //             <div>
// //               <span className="sb-directory__label">LATEST ARTICLES</span>
// //               <h2 className="sb-directory__title">
// //                 Read,
// //                 <br />
// //                 <span className="sb-directory__highlight">Explore & Discover.</span>
// //               </h2>
// //             </div>
// //             <p className="sb-directory__desc">
// //               Browse the latest articles published by Shifan Noor Global Academy.
// //             </p>
// //           </div>

// //           {/* Filters */}
// //           {!loading && categories.length > 1 && (
// //             <div className="sb-directory__filters">
// //               {categories.map((category) => (
// //                 <button
// //                   type="button"
// //                   key={category}
// //                   className={`sb-directory__filter ${
// //                     activeCategory === category ? "sb-directory__filter--active" : ""
// //                   }`}
// //                   onClick={() => setActiveCategory(category)}
// //                 >
// //                   {category}
// //                 </button>
// //               ))}
// //             </div>
// //           )}

// //           {/* States */}
// //           {loading && (
// //             <div className="sb-directory__state">
// //               <div className="sb-directory__loader">
// //                 <span />
// //                 <span />
// //                 <span />
// //               </div>
// //               <span>LOADING ARTICLES</span>
// //             </div>
// //           )}

// //           {!loading && error && (
// //             <div className="sb-directory__state sb-directory__state--error">
// //               <span>{error}</span>
// //             </div>
// //           )}

// //           {!loading && !error && filteredBlogs.length === 0 && (
// //             <div className="sb-directory__state sb-directory__state--empty">
// //               <div className="sb-directory__empty-icon">
// //                 <FaBookOpen />
// //               </div>
// //               <h3>No Articles Yet</h3>
// //               <p>New stories will appear here. Articles can be published from the administration panel.</p>
// //             </div>
// //           )}

// //           {/* Featured Blog */}
// //           {!loading && !error && featuredBlog && (
// //             <div className="sb-directory__featured">
// //               <Link to={`/blogs/${featuredBlog.slug}`} className="sb-directory__featured-image">
// //                 {featuredBlog.featuredImage ? (
// //                   <img
// //                     src={getImageUrl(featuredBlog.featuredImage)}
// //                     alt={featuredBlog.title}
// //                     loading="lazy"
// //                   />
// //                 ) : (
// //                   <div className="sb-directory__featured-placeholder">
// //                     <FaBookOpen />
// //                   </div>
// //                 )}
// //                 <div className="sb-directory__featured-overlay" />
// //                 <span className="sb-directory__featured-number">01</span>
// //               </Link>

// //               <div className="sb-directory__featured-content">
// //                 <div className="sb-directory__featured-meta">
// //                   {featuredBlog.category && (
// //                     <span className="sb-directory__featured-category">
// //                       <FaTag />
// //                       {featuredBlog.category}
// //                     </span>
// //                   )}
// //                   {featuredBlog.publishedAt && (
// //                     <time className="sb-directory__featured-date">
// //                       <FaCalendarAlt />
// //                       {formatDate(featuredBlog.publishedAt)}
// //                     </time>
// //                   )}
// //                 </div>

// //                 <h3 className="sb-directory__featured-title">{featuredBlog.title}</h3>

// //                 {featuredBlog.excerpt && (
// //                   <p className="sb-directory__featured-desc">{featuredBlog.excerpt}</p>
// //                 )}

// //                 {featuredBlog.authorName && (
// //                   <div className="sb-directory__featured-author">
// //                     <FaUser />
// //                     By {featuredBlog.authorName}
// //                   </div>
// //                 )}

// //                 <Link to={`/blogs/${featuredBlog.slug}`} className="sb-directory__featured-link">
// //                   <span>Read Article</span>
// //                   <FaArrowRight />
// //                 </Link>
// //               </div>
// //             </div>
// //           )}

// //           {/* Blog Grid */}
// //           {!loading && !error && remainingBlogs.length > 0 && (
// //             <div className="sb-directory__grid">
// //               {remainingBlogs.map((blog, index) => (
// //                 <div key={blog.id} className="sb-directory__card">
// //                   <Link to={`/blogs/${blog.slug}`} className="sb-directory__card-image">
// //                     {blog.featuredImage ? (
// //                       <img
// //                         src={getImageUrl(blog.featuredImage)}
// //                         alt={blog.title}
// //                         loading="lazy"
// //                       />
// //                     ) : (
// //                       <div className="sb-directory__card-placeholder">
// //                         <FaBookOpen />
// //                       </div>
// //                     )}
// //                     <div className="sb-directory__card-overlay" />
// //                     <span className="sb-directory__card-number">
// //                       {String(index + 2).padStart(2, "0")}
// //                     </span>
// //                   </Link>

// //                   <div className="sb-directory__card-content">
// //                     <div className="sb-directory__card-meta">
// //                       {blog.category && (
// //                         <span className="sb-directory__card-category">
// //                           <FaTag />
// //                           {blog.category}
// //                         </span>
// //                       )}
// //                       {blog.publishedAt && (
// //                         <time className="sb-directory__card-date">
// //                           <FaCalendarAlt />
// //                           {formatDate(blog.publishedAt)}
// //                         </time>
// //                       )}
// //                     </div>

// //                     <h3 className="sb-directory__card-title">{blog.title}</h3>

// //                     {blog.excerpt && (
// //                       <p className="sb-directory__card-desc">{blog.excerpt}</p>
// //                     )}

// //                     {blog.authorName && (
// //                       <div className="sb-directory__card-author">
// //                         <FaUser />
// //                         By {blog.authorName}
// //                       </div>
// //                     )}

// //                     <Link to={`/blogs/${blog.slug}`} className="sb-directory__card-link">
// //                       <span>Read Article</span>
// //                       <FaArrowRight />
// //                     </Link>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* =================================================
// //           EDITORIAL SECTION
// //       ================================================= */}
// //       <section ref={editorialRef} className="sb-editorial">
// //         <div className="sb-editorial__bg" />

// //         <div className="sb-container">
// //           <div className="sb-editorial__inner">
// //             <div className="sb-editorial__content">
// //               <span className="sb-editorial__label">LEARNING NEVER STOPS</span>
// //               <h2 className="sb-editorial__title">
// //                 Curiosity Creates
// //                 <br />
// //                 <span className="sb-editorial__highlight">Better Questions.</span>
// //               </h2>
// //             </div>

// //             <div className="sb-editorial__right">
// //               <p className="sb-editorial__desc">
// //                 A strong learning culture encourages students to look beyond
// //                 what they already know and develop the confidence to ask questions.
// //               </p>
// //               <p className="sb-editorial__desc">
// //                 Our stories and articles are an extension of that culture —
// //                 creating another space for ideas, experiences and perspectives.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           NEWS SECTION
// //       ================================================= */}
// //       <section ref={newsRef} className="sb-news">
// //         <div className="sb-news__bg" />

// //         <div className="sb-container">
// //           <div className="sb-news__inner">
// //             <div className="sb-news__content">
// //               <span className="sb-news__label">SCHOOL UPDATES</span>
// //               <h2 className="sb-news__title">
// //                 Looking for
// //                 <br />
// //                 <span className="sb-news__highlight">What's Happening Now?</span>
// //               </h2>
// //               <p className="sb-news__desc">
// //                 Visit our News & Events section for the latest school announcements,
// //                 activities, celebrations and community updates.
// //               </p>
// //               <Link to="/news" className="sb-news__link">
// //                 <span>View School News</span>
// //                 <FaArrowRight />
// //               </Link>
// //             </div>

// //             <div className="sb-news__badge">
// //               <span>NEWS</span>
// //               <strong>& EVENTS</strong>
// //               <small>STAY CONNECTED</small>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           GALLERY SECTION
// //       ================================================= */}
// //       <section ref={galleryRef} className="sb-gallery">
// //         <div className="sb-container">
// //           <div className="sb-gallery__inner">
// //             <div className="sb-gallery__content">
// //               <span className="sb-gallery__label">STORIES IN PICTURES</span>
// //               <h2 className="sb-gallery__title">
// //                 Some Moments
// //                 <br />
// //                 <span className="sb-gallery__highlight">Don't Need Words.</span>
// //               </h2>
// //             </div>

// //             <div className="sb-gallery__right">
// //               <p className="sb-gallery__desc">
// //                 Explore the people, activities and experiences that make school
// //                 life memorable.
// //               </p>
// //               <Link to="/gallery" className="sb-gallery__link">
// //                 <span>View Gallery</span>
// //                 <FaArrowRight />
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           FINAL CTA
// //       ================================================= */}
// //       <section ref={ctaRef} className="sb-cta">
// //         <div className="sb-container">
// //           <div className="sb-cta__content">
// //             <span className="sb-cta__label">EXPLORE SNGA</span>
// //             <h2 className="sb-cta__title">
// //               There's Always
// //               <br />
// //               <span className="sb-cta__highlight">More to Discover.</span>
// //             </h2>
// //             <p className="sb-cta__desc">
// //               Explore academics, campus life and the experiences that shape
// //               the SNGA journey.
// //             </p>

// //             <div className="sb-cta__actions">
// //               <Link to="/academics" className="sb-cta__btn sb-cta__btn--primary">
// //                 <span>Explore Academics</span>
// //                 <FaArrowRight />
// //               </Link>
// //               <Link to="/about" className="sb-cta__btn sb-cta__btn--secondary">
// //                 About SNGA
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Blogs;


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
// import blogService from "../services/blog.service"; // ✅ Changed from newsService to blogService
// import "./Blogs.css";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80",
//   heroCircle: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&q=80",
//   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   featured: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
//   blog1: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
//   blog2: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//   blog3: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
//   editorial: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
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
//   // FETCH BLOGS - ✅ FIXED: Using getPublishedBlogs
//   // =====================================================

//   useEffect(() => {
//     const loadBlogs = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // ✅ FIXED: Use getPublishedBlogs instead of getNews
//         const response = await blogService.getPublishedBlogs();

//         // Handle different response structures
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

//               <div className="sb-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sb-hero__stat">
//                     <span className="sb-hero__stat-icon">{stat.icon}</span>
//                     <span className="sb-hero__stat-number">{stat.number}</span>
//                     <span className="sb-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>

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
//                 <button className="sb-hero__btn-secondary">
//                   <FaPlay />
//                   <span>Watch Story</span>
//                 </button>
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
//                 <div className="sb-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div>
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
//               <Link to={`/blogs/${featuredBlog.slug}`} className="sb-directory__featured-image">
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
//                   <Link to={`/blogs/${featuredBlog.slug}`} className="sb-directory__featured-link">
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
//                 // Get the correct ID field
//                 const blogId = blog.id || blog._id;
//                 return (
//                   <div key={blogId} className="sb-directory__card">
//                     <Link to={`/blogs/${blog.slug}`} className="sb-directory__card-image">
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
//                         <Link to={`/blogs/${blog.slug}`} className="sb-directory__card-link">
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
import {
  FaArrowRight,
  FaTimes,
  FaBookOpen,
  FaTag,
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaEye,
  FaHeart,
  FaShare,
  FaSchool,
  FaUsers,
  FaTrophy,
  FaStar,
  FaAward,
  FaHands,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaQuoteLeft,
  FaPenFancy,
  FaNewspaper,
  FaPlay,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import blogService from "../services/blog.service";
import "./Blogs.css";

import heroBg from "../assets/school.JPG";
import heroCircle from "../assets/about.png";
import ctaBg from "../assets/engaging.jpg";
import featured from "../assets/camp.jpg";
import editorial from "../assets/beyond.jpg";

// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  featured: featured,
  blog1: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
  blog2: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  blog3: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  editorial: editorial,
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState("");

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const directoryRef = useRef(null);
  const editorialRef = useRef(null);
  const newsRef = useRef(null);
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);

  // =====================================================
  // SCROLL TRIGGERED ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const sections = [
      { ref: heroRef, className: "sb-hero--visible" },
      { ref: introRef, className: "sb-intro--visible" },
      { ref: directoryRef, className: "sb-directory--visible" },
      { ref: editorialRef, className: "sb-editorial--visible" },
      { ref: newsRef, className: "sb-news--visible" },
      { ref: galleryRef, className: "sb-gallery--visible" },
      { ref: ctaRef, className: "sb-cta--visible" },
    ];

    const observers = {};

    sections.forEach(({ ref, className }) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observer.observe(ref.current);
      observers[className] = observer;
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  // =====================================================
  // FETCH BLOGS
  // =====================================================

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await blogService.getPublishedBlogs();

        const items = Array.isArray(response)
          ? response
          : response?.data || response?.blogs || response?.news || [];

        setBlogs(items);
      } catch (err) {
        console.error("Failed to load blogs:", err);
        setError("Unable to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  // =====================================================
  // COMPUTED VALUES
  // =====================================================

  const categories = useMemo(() => {
    const values = blogs.map((blog) => blog.category).filter(Boolean);
    return ["All", ...new Set(values)];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return blogs;
    }
    return blogs.filter((blog) => blog.category === activeCategory);
  }, [blogs, activeCategory]);

  const featuredBlog = filteredBlogs[0];
  const remainingBlogs = filteredBlogs.slice(1);

  // =====================================================
  // HELPERS
  // =====================================================

  const getImageUrl = (image) => {
    if (!image) return "";

    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    const API_URL =
      import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
      "http://localhost:5000";

    return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
  };

  const formatDate = (date) => {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(parsedDate);
  };

  // ✅ Helper to safely create slug URL
  const getBlogUrl = (slug) => {
    if (!slug) return "#";
    // Encode the slug to handle special characters
    return `/blogs/${encodeURIComponent(slug)}`;
  };

  // =====================================================
  // DATA
  // =====================================================

  const stats = [
    { number: blogs.length || "100+", label: "Articles", icon: <FaBookOpen /> },
    { number: categories.length - 1 || "20+", label: "Categories", icon: <FaTag /> },
    { number: "5000+", label: "Readers", icon: <FaUsers /> },
    { number: "50+", label: "Authors", icon: <FaPenFancy /> },
  ];

  const categoriesData = [
    { name: "Academics", icon: <FaGraduationCap />, color: "#4A90D9" },
    { name: "Sports", icon: <FaTrophy />, color: "#27AE60" },
    { name: "Arts", icon: <FaStar />, color: "#E67E22" },
    { name: "Values", icon: <FaHands />, color: "#E74C3C" },
    { name: "Community", icon: <FaUsers />, color: "#9B59B6" },
    { name: "Events", icon: <FaCalendarAlt />, color: "#2ECC71" },
  ];

  return (
    <main className="sb-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sb-topbar">
        <div className="sb-container">
          <div className="sb-topbar__content">
            <span className="sb-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sb-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sb-hero">
        <div className="sb-hero__bg-wrapper">
          <div 
            className="sb-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sb-hero__bg-overlay" />
          <div className="sb-hero__bg-gradient" />
        </div>

        <div className="sb-container">
          <div className="sb-hero__inner">
            <div className="sb-hero__content">
              <div className="sb-hero__badge">
                <FaBookOpen />
                SNGA STORIES
              </div>

              <h1 className="sb-hero__title">
                Ideas Worth
                <br />
                <span className="sb-hero__highlight">Sharing.</span>
              </h1>

              <p className="sb-hero__desc">
                Perspectives, insights and stories from the learning community
                at Shifan Noor Global Academy.
              </p>

              {/* <div className="sb-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sb-hero__stat">
                    <span className="sb-hero__stat-icon">{stat.icon}</span>
                    <span className="sb-hero__stat-number">{stat.number}</span>
                    <span className="sb-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}

              <div className="sb-hero__actions">
                <button 
                  className="sb-hero__btn-primary"
                  onClick={() => {
                    directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Read Articles</span>
                  <FaArrowRight />
                </button>
                {/* <button className="sb-hero__btn-secondary">
                  <FaPlay />
                  <span>Watch Story</span>
                </button> */}
              </div>
            </div>

            <div className="sb-hero__image-wrapper">
              <div className="sb-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA School" 
                  className="sb-hero__image-img"
                />
                <div className="sb-hero__image-ring" />
                <div className="sb-hero__image-badge">
                  <span>Since 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sb-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sb-intro">
        <div className="sb-container">
          <div className="sb-intro__inner">
            <div className="sb-intro__header">
              <span className="sb-intro__label">THE SNGA JOURNAL</span>
              <h2 className="sb-intro__title">
                Stories That
                <span className="sb-intro__highlight">Extend the Classroom.</span>
              </h2>
            </div>

            <div className="sb-intro__content">
              <p>
                Learning doesn't stop when the classroom ends. Ideas, experiences
                and conversations can inspire students, parents and the wider
                school community.
              </p>
              <p>
                Explore articles and stories that reflect the educational journey,
                values and experiences of the SNGA community.
              </p>
            </div>

            <div className="sb-intro__categories">
              {categoriesData.map((cat, index) => (
                <div 
                  key={index} 
                  className="sb-intro__category"
                  style={{ borderColor: cat.color }}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                  <span>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          DIRECTORY - Blog Grid
      ================================================= */}
      <section ref={directoryRef} className="sb-directory">
        <div className="sb-container">
          <div className="sb-directory__header">
            <div>
              <span className="sb-directory__label">LATEST ARTICLES</span>
              <h2 className="sb-directory__title">
                Read, <span className="sb-directory__highlight">Explore & Discover.</span>
              </h2>
            </div>
            <p className="sb-directory__desc">
              Browse the latest articles published by Shifan Noor Global Academy.
            </p>
          </div>

          {/* Filters */}
          {!loading && categories.length > 1 && (
            <div className="sb-directory__filters">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`sb-directory__filter ${
                    activeCategory === category ? "sb-directory__filter--active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* States */}
          {loading && (
            <div className="sb-directory__state">
              <div className="sb-directory__loader">
                <span />
                <span />
                <span />
              </div>
              <span>Loading articles...</span>
            </div>
          )}

          {!loading && error && (
            <div className="sb-directory__state sb-directory__state--error">
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && filteredBlogs.length === 0 && (
            <div className="sb-directory__state sb-directory__state--empty">
              <div className="sb-directory__empty-icon">
                <FaBookOpen />
              </div>
              <h3>No Articles Yet</h3>
              <p>New stories will appear here. Articles can be published from the administration panel.</p>
            </div>
          )}

          {/* Featured Blog */}
          {!loading && !error && featuredBlog && (
            <div className="sb-directory__featured">
              <Link 
                to={getBlogUrl(featuredBlog.slug)} 
                className="sb-directory__featured-image"
              >
                {featuredBlog.featuredImage ? (
                  <img
                    src={getImageUrl(featuredBlog.featuredImage)}
                    alt={featuredBlog.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="sb-directory__featured-placeholder">
                    <FaBookOpen />
                  </div>
                )}
                <div className="sb-directory__featured-overlay">
                  <span className="sb-directory__featured-badge">Featured</span>
                </div>
                <span className="sb-directory__featured-number">01</span>
              </Link>

              <div className="sb-directory__featured-content">
                <div className="sb-directory__featured-meta">
                  {featuredBlog.category && (
                    <span className="sb-directory__featured-category">
                      <FaTag />
                      {featuredBlog.category}
                    </span>
                  )}
                  {featuredBlog.publishedAt && (
                    <time className="sb-directory__featured-date">
                      <FaCalendarAlt />
                      {formatDate(featuredBlog.publishedAt)}
                    </time>
                  )}
                </div>

                <h3 className="sb-directory__featured-title">{featuredBlog.title}</h3>

                {featuredBlog.excerpt && (
                  <p className="sb-directory__featured-desc">{featuredBlog.excerpt}</p>
                )}

                <div className="sb-directory__featured-footer">
                  {featuredBlog.authorName && (
                    <div className="sb-directory__featured-author">
                      <FaUser />
                      By {featuredBlog.authorName}
                    </div>
                  )}
                  <Link 
                    to={getBlogUrl(featuredBlog.slug)} 
                    className="sb-directory__featured-link"
                  >
                    <span>Read Article</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && !error && remainingBlogs.length > 0 && (
            <div className="sb-directory__grid">
              {remainingBlogs.map((blog, index) => {
                const blogId = blog.id || blog._id;
                return (
                  <div key={blogId} className="sb-directory__card">
                    <Link 
                      to={getBlogUrl(blog.slug)} 
                      className="sb-directory__card-image"
                    >
                      {blog.featuredImage ? (
                        <img
                          src={getImageUrl(blog.featuredImage)}
                          alt={blog.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="sb-directory__card-placeholder">
                          <FaBookOpen />
                        </div>
                      )}
                      <div className="sb-directory__card-overlay">
                        <span className="sb-directory__card-read-time">
                          <FaClock /> 5 min read
                        </span>
                      </div>
                      <span className="sb-directory__card-number">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </Link>

                    <div className="sb-directory__card-content">
                      <div className="sb-directory__card-meta">
                        {blog.category && (
                          <span className="sb-directory__card-category">
                            {blog.category}
                          </span>
                        )}
                        {blog.publishedAt && (
                          <time className="sb-directory__card-date">
                            <FaCalendarAlt />
                            {formatDate(blog.publishedAt)}
                          </time>
                        )}
                      </div>

                      <h3 className="sb-directory__card-title">{blog.title}</h3>

                      {blog.excerpt && (
                        <p className="sb-directory__card-desc">{blog.excerpt}</p>
                      )}

                      <div className="sb-directory__card-footer">
                        {blog.authorName && (
                          <div className="sb-directory__card-author">
                            <FaUser />
                            {blog.authorName}
                          </div>
                        )}
                        <Link 
                          to={getBlogUrl(blog.slug)} 
                          className="sb-directory__card-link"
                        >
                          <span>Read</span>
                          <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          EDITORIAL SECTION - With Background Image
      ================================================= */}
      <section ref={editorialRef} className="sb-editorial">
        <div className="sb-editorial__bg-wrapper">
          <div 
            className="sb-editorial__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.editorial})` }}
          />
          <div className="sb-editorial__bg-overlay" />
        </div>

        <div className="sb-container">
          <div className="sb-editorial__inner">
            <div className="sb-editorial__content">
              <span className="sb-editorial__label">LEARNING NEVER STOPS</span>
              <h2 className="sb-editorial__title">
                Curiosity Creates
                <br />
                <span className="sb-editorial__highlight">Better Questions.</span>
              </h2>
            </div>

            <div className="sb-editorial__right">
              <div className="sb-editorial__quote">
                <FaQuoteLeft />
              </div>
              <p className="sb-editorial__desc">
                A strong learning culture encourages students to look beyond
                what they already know and develop the confidence to ask questions.
              </p>
              <p className="sb-editorial__desc">
                Our stories and articles are an extension of that culture —
                creating another space for ideas, experiences and perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          NEWS SECTION
      ================================================= */}
      <section ref={newsRef} className="sb-news">
        <div className="sb-news__bg" />

        <div className="sb-container">
          <div className="sb-news__inner">
            <div className="sb-news__content">
              <span className="sb-news__label">SCHOOL UPDATES</span>
              <h2 className="sb-news__title">
                Looking for
                <br />
                <span className="sb-news__highlight">What's Happening Now?</span>
              </h2>
              <p className="sb-news__desc">
                Visit our News & Events section for the latest school announcements,
                activities, celebrations and community updates.
              </p>
              <Link to="/news" className="sb-news__link">
                <span>View School News</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sb-news__features">
              <div className="sb-news__feature">
                <FaNewspaper />
                <span>Daily Updates</span>
              </div>
              <div className="sb-news__feature">
                <FaCalendarAlt />
                <span>Events Calendar</span>
              </div>
              <div className="sb-news__feature">
                <FaUsers />
                <span>Community Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          GALLERY SECTION
      ================================================= */}
      <section ref={galleryRef} className="sb-gallery">
        <div className="sb-container">
          <div className="sb-gallery__inner">
            <div className="sb-gallery__content">
              <span className="sb-gallery__label">STORIES IN PICTURES</span>
              <h2 className="sb-gallery__title">
                Some Moments
                <br />
                <span className="sb-gallery__highlight">Don't Need Words.</span>
              </h2>
            </div>

            <div className="sb-gallery__right">
              <p className="sb-gallery__desc">
                Explore the people, activities and experiences that make school
                life memorable.
              </p>
              <Link to="/gallery" className="sb-gallery__link">
                <span>View Gallery</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="sb-cta">
        <div className="sb-cta__bg-wrapper">
          <div 
            className="sb-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sb-cta__bg-overlay" />
          <div className="sb-cta__bg-gradient" />
        </div>

        <div className="sb-container">
          <div className="sb-cta__content">
            <div className="sb-cta__badge">
              <FaSchool />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>
            <h2 className="sb-cta__title">
              There's Always
              <br />
              <span className="sb-cta__highlight">More to Discover.</span>
            </h2>
            <p className="sb-cta__desc">
              Explore academics, campus life and the experiences that shape
              the SNGA journey.
            </p>

            <div className="sb-cta__actions">
              <Link to="/academics" className="sb-cta__btn sb-cta__btn--primary">
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>
              <Link to="/about" className="sb-cta__btn sb-cta__btn--secondary">
                About SNGA
              </Link>
            </div>

            <div className="sb-cta__footer">
              <span>
                <FaMapMarkerAlt /> Bangalore, India
              </span>
              <span>
                <FaPhone /> +91 98765 43210
              </span>
              <span>
                <FaEnvelope /> info@snga.edu.in
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;