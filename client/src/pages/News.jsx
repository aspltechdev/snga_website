

// import { useEffect, useMemo, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaTimes,
//   FaNewspaper,
//   FaTag,
//   FaCalendarAlt,
//   FaEye,
//   FaHeart,
//   FaShare,
//   FaClock,
//   FaUsers,
//   FaSchool,
//   FaTrophy,
//   FaStar,
//   FaAward,
//   FaHands,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaQuoteLeft,
//   FaPenFancy,
//   FaPlay,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaBookOpen,
//   FaUser,
// } from "react-icons/fa";
// import newsService from "../services/news.service";
// import "./News.css";

// import heroBg from "../assets/school.JPG";
// import heroCircle from "../assets/about.png";
// import ctaBg from "../assets/engaging.jpg";
// import community from "../assets/about-school.jpg";
// import achievement from "../assets/achievement.jpg";
// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   community: community,
//   achievements: achievement,
// };

// const News = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [error, setError] = useState("");

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const directoryRef = useRef(null);
//   const communityRef = useRef(null);
//   const achievementsRef = useRef(null);
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
//       { ref: heroRef, className: "sn-hero--visible" },
//       { ref: introRef, className: "sn-intro--visible" },
//       { ref: directoryRef, className: "sn-directory--visible" },
//       { ref: communityRef, className: "sn-community--visible" },
//       { ref: achievementsRef, className: "sn-achievements--visible" },
//       { ref: galleryRef, className: "sn-gallery--visible" },
//       { ref: ctaRef, className: "sn-cta--visible" },
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
//   // FETCH NEWS - Using getNews() public method
//   // =====================================================

//   useEffect(() => {
//     const loadNews = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // ✅ Use the public getNews() method
//         const response = await newsService.getNews();

//         // Handle different response structures
//         // The response might be { success: true, data: [...] } or just [...]
//         const items = Array.isArray(response)
//           ? response
//           : response?.data || response?.news || [];

//         setNews(items);
//       } catch (err) {
//         console.error("Failed to load news:", err);
//         setError("Unable to load the latest news. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadNews();
//   }, []);

//   // =====================================================
//   // COMPUTED VALUES
//   // =====================================================

//   const categories = useMemo(() => {
//     const values = news.map((item) => item.category).filter(Boolean);
//     return ["All", ...new Set(values)];
//   }, [news]);

//   const filteredNews = useMemo(() => {
//     if (activeCategory === "All") {
//       return news;
//     }
//     return news.filter((item) => item.category === activeCategory);
//   }, [news, activeCategory]);

//   const featuredNews = filteredNews[0];
//   const remainingNews = filteredNews.slice(1);

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

//   const getReadingTime = (content) => {
//     if (!content) return "3 min read";
//     const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
//     const minutes = Math.ceil(words / 200);
//     return `${minutes} min read`;
//   };

//   // =====================================================
//   // DATA
//   // =====================================================

//   const stats = [
//     { number: news.length || "50+", label: "Stories Published", icon: <FaNewspaper /> },
//     { number: "25+", label: "Events Covered", icon: <FaCalendarAlt /> },
//     { number: "10+", label: "Awards Won", icon: <FaTrophy /> },
//     { number: "1000+", label: "Community Members", icon: <FaUsers /> },
//   ];

//   const categoriesData = [
//     { name: "School Events", icon: <FaCalendarAlt />, color: "#4A90D9" },
//     { name: "Student Achievements", icon: <FaTrophy />, color: "#27AE60" },
//     { name: "Community Stories", icon: <FaUsers />, color: "#E67E22" },
//     { name: "School Updates", icon: <FaNewspaper />, color: "#E74C3C" },
//     { name: "Celebrations", icon: <FaStar />, color: "#9B59B6" },
//   ];

//   return (
//     <main className="sn-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sn-topbar">
//         <div className="sn-container">
//           <div className="sn-topbar__content">
//             <span className="sn-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sn-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sn-hero">
//         <div className="sn-hero__bg-wrapper">
//           <div 
//             className="sn-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sn-hero__bg-overlay" />
//           <div className="sn-hero__bg-gradient" />
//         </div>

//         <div className="sn-container">
//           <div className="sn-hero__inner">
//             <div className="sn-hero__content">
//               <div className="sn-hero__badge">
//                 <FaNewspaper />
//                 NEWS & EVENTS
//               </div>

//               <h1 className="sn-hero__title">
//                 Life at SNGA,
//                 <br />
//                 <span className="sn-hero__highlight">In Motion.</span>
//               </h1>

//               <p className="sn-hero__desc">
//                 Discover the latest stories, events, achievements and moments
//                 from the Shifan Noor Global Academy community.
//               </p>

//               {/* <div className="sn-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sn-hero__stat">
//                     <span className="sn-hero__stat-icon">{stat.icon}</span>
//                     <span className="sn-hero__stat-number">{stat.number}</span>
//                     <span className="sn-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div> */}

//               <div className="sn-hero__actions">
//                 <button 
//                   className="sn-hero__btn-primary"
//                   onClick={() => {
//                     directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                 >
//                   <span>Read Stories</span>
//                   <FaArrowRight />
//                 </button>
//                 {/* <button className="sn-hero__btn-secondary">
//                   <FaPlay />
//                   <span>Watch Highlights</span>
//                 </button> */}
//               </div>
//             </div>

//             <div className="sn-hero__image-wrapper">
//               <div className="sn-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA School" 
//                   className="sn-hero__image-img"
//                 />
//                 <div className="sn-hero__image-ring" />
//                 {/* <div className="sn-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sn-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sn-intro">
//         <div className="sn-container">
//           <div className="sn-intro__inner">
//             <div className="sn-intro__header">
//               <span className="sn-intro__label">SCHOOL LIFE</span>
//               <h2 className="sn-intro__title">
//                 Every Day Brings
//                 <span className="sn-intro__highlight">Something New.</span>
//               </h2>
//             </div>

//             <div className="sn-intro__content">
//               <p>
//                 School life is made up of learning, activities, achievements,
//                 celebrations and the everyday experiences that students share
//                 together.
//               </p>
//               <p>
//                 Follow the latest updates from SNGA and stay connected with
//                 what's happening across our school community.
//               </p>
//             </div>

//             <div className="sn-intro__categories">
//               {categoriesData.map((cat, index) => (
//                 <div 
//                   key={index} 
//                   className="sn-intro__category"
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
//           DIRECTORY - News Grid
//       ================================================= */}
//       <section ref={directoryRef} className="sn-directory">
//         <div className="sn-container">
//           <div className="sn-directory__header">
//             <div>
//               <span className="sn-directory__label">LATEST UPDATES</span>
//               <h2 className="sn-directory__title">
//                 What's Happening
//                 <span className="sn-directory__highlight">At SNGA.</span>
//               </h2>
//             </div>
//             <p className="sn-directory__desc">
//               Explore the latest school news, events, announcements and
//               community stories.
//             </p>
//           </div>

//           {/* Filters */}
//           {!loading && categories.length > 1 && (
//             <div className="sn-directory__filters">
//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={`sn-directory__filter ${
//                     activeCategory === category ? "sn-directory__filter--active" : ""
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
//             <div className="sn-directory__state">
//               <div className="sn-directory__loader">
//                 <span />
//                 <span />
//                 <span />
//               </div>
//               <span>Loading stories...</span>
//             </div>
//           )}

//           {!loading && error && (
//             <div className="sn-directory__state sn-directory__state--error">
//               <span>{error}</span>
//             </div>
//           )}

//           {!loading && !error && filteredNews.length === 0 && (
//             <div className="sn-directory__state sn-directory__state--empty">
//               <div className="sn-directory__empty-icon">
//                 <FaNewspaper />
//               </div>
//               <h3>No Stories Yet</h3>
//               <p>New updates will appear here. School news and events can be published from the administration panel.</p>
//             </div>
//           )}

//           {/* Featured News */}
//           {!loading && !error && featuredNews && (
//             <div className="sn-directory__featured">
//               <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-image">
//                 {featuredNews.featuredImage ? (
//                   <img
//                     src={getImageUrl(featuredNews.featuredImage)}
//                     alt={featuredNews.title}
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="sn-directory__featured-placeholder">
//                     <FaNewspaper />
//                   </div>
//                 )}
//                 <div className="sn-directory__featured-overlay">
//                   <span className="sn-directory__featured-badge">Featured</span>
//                 </div>
//                 <span className="sn-directory__featured-number">01</span>
//               </Link>

//               <div className="sn-directory__featured-content">
//                 <div className="sn-directory__featured-meta">
//                   {featuredNews.category && (
//                     <span className="sn-directory__featured-category">
//                       <FaTag />
//                       {featuredNews.category}
//                     </span>
//                   )}
//                   {featuredNews.publishedAt && (
//                     <time className="sn-directory__featured-date">
//                       <FaCalendarAlt />
//                       {formatDate(featuredNews.publishedAt)}
//                     </time>
//                   )}
//                   <span className="sn-directory__featured-read-time">
//                     <FaClock />
//                     {getReadingTime(featuredNews.content)}
//                   </span>
//                 </div>

//                 <h3 className="sn-directory__featured-title">{featuredNews.title}</h3>

//                 {featuredNews.excerpt && (
//                   <p className="sn-directory__featured-desc">{featuredNews.excerpt}</p>
//                 )}

//                 <div className="sn-directory__featured-footer">
//                   {featuredNews.authorName && (
//                     <div className="sn-directory__featured-author">
//                       <FaUser />
//                       By {featuredNews.authorName}
//                     </div>
//                   )}
//                   <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-link">
//                     <span>Read Story</span>
//                     <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* News Grid */}
//           {!loading && !error && remainingNews.length > 0 && (
//             <div className="sn-directory__grid">
//               {remainingNews.map((item, index) => {
//                 const itemId = item.id || item._id;
//                 return (
//                   <div key={itemId} className="sn-directory__card">
//                     <Link to={`/news/${item.slug}`} className="sn-directory__card-image">
//                       {item.featuredImage ? (
//                         <img
//                           src={getImageUrl(item.featuredImage)}
//                           alt={item.title}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="sn-directory__card-placeholder">
//                           <FaNewspaper />
//                         </div>
//                       )}
//                       <div className="sn-directory__card-overlay">
//                         <span className="sn-directory__card-read-time">
//                           <FaClock />
//                           {getReadingTime(item.content)}
//                         </span>
//                       </div>
//                       <span className="sn-directory__card-number">
//                         {String(index + 2).padStart(2, "0")}
//                       </span>
//                     </Link>

//                     <div className="sn-directory__card-content">
//                       <div className="sn-directory__card-meta">
//                         {item.category && (
//                           <span className="sn-directory__card-category">
//                             {item.category}
//                           </span>
//                         )}
//                         {item.publishedAt && (
//                           <time className="sn-directory__card-date">
//                             <FaCalendarAlt />
//                             {formatDate(item.publishedAt)}
//                           </time>
//                         )}
//                       </div>

//                       <h3 className="sn-directory__card-title">{item.title}</h3>

//                       {item.excerpt && (
//                         <p className="sn-directory__card-desc">{item.excerpt}</p>
//                       )}

//                       <div className="sn-directory__card-footer">
//                         {item.authorName && (
//                           <div className="sn-directory__card-author">
//                             <FaUser />
//                             {item.authorName}
//                           </div>
//                         )}
//                         <Link to={`/news/${item.slug}`} className="sn-directory__card-link">
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
//           COMMUNITY SECTION - With Background Image
//       ================================================= */}
//       <section ref={communityRef} className="sn-community">
//         <div className="sn-community__bg-wrapper">
//           <div 
//             className="sn-community__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.community})` }}
//           />
//           <div className="sn-community__bg-overlay" />
//         </div>

//         <div className="sn-container">
//           <div className="sn-community__inner">
//             <div className="sn-community__content">
//               <span className="sn-community__label">THE SNGA COMMUNITY</span>
//               <h2 className="sn-community__title">
//                 More Than
//                 <br />
//                 <span className="sn-community__highlight">School News.</span>
//               </h2>
//             </div>

//             <div className="sn-community__right">
//               <div className="sn-community__quote">
//                 <FaQuoteLeft />
//               </div>
//               <p className="sn-community__desc">
//                 The stories of a school are found in its classrooms, activities,
//                 competitions, celebrations and the achievements of its students.
//               </p>
//               <p className="sn-community__desc">
//                 Our news section brings these moments together so families and
//                 the wider community can stay connected with life at SNGA.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           ACHIEVEMENTS SECTION - With Background Image
//       ================================================= */}
//       <section ref={achievementsRef} className="sn-achievements">
//         <div className="sn-achievements__bg-wrapper">
//           <div 
//             className="sn-achievements__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.achievements})` }}
//           />
//           <div className="sn-achievements__bg-overlay" />
//         </div>

//         <div className="sn-container">
//           <div className="sn-achievements__inner">
//             <div className="sn-achievements__content">
//               <span className="sn-achievements__label">STUDENT ACHIEVEMENTS</span>
//               <h2 className="sn-achievements__title">
//                 Celebrate Every
//                 <br />
//                 <span className="sn-achievements__highlight">Milestone.</span>
//               </h2>
//               <p className="sn-achievements__desc">
//                 From academic accomplishments to sports and other achievements,
//                 every milestone represents effort, growth and determination.
//               </p>
//               <Link to="/achievements" className="sn-achievements__link">
//                 <span>View All Achievements</span>
//                 <FaArrowRight />
//               </Link>
//             </div>

//             <div className="sn-achievements__stats">
//               {stats.map((stat, index) => (
//                 <div key={index} className="sn-achievements__stat">
//                   <span className="sn-achievements__stat-icon">{stat.icon}</span>
//                   <span className="sn-achievements__stat-number">{stat.number}</span>
//                   <span className="sn-achievements__stat-label">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           GALLERY SECTION
//       ================================================= */}
//       <section ref={galleryRef} className="sn-gallery">
//         <div className="sn-container">
//           <div className="sn-gallery__inner">
//             <div className="sn-gallery__content">
//               <span className="sn-gallery__label">MOMENTS</span>
//               <h2 className="sn-gallery__title">
//                 See School Life
//                 <br />
//                 <span className="sn-gallery__highlight">In Pictures.</span>
//               </h2>
//             </div>

//             <div className="sn-gallery__right">
//               <p className="sn-gallery__desc">
//                 Explore the people, activities and experiences that make
//                 everyday life at SNGA memorable.
//               </p>
//               <Link to="/gallery" className="sn-gallery__link">
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
//       <section ref={ctaRef} className="sn-cta">
//         <div className="sn-cta__bg-wrapper">
//           <div 
//             className="sn-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sn-cta__bg-overlay" />
//           <div className="sn-cta__bg-gradient" />
//         </div>

//         <div className="sn-container">
//           <div className="sn-cta__content">
//             <div className="sn-cta__badge">
//               <FaSchool />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>
//             <h2 className="sn-cta__title">
//               Keep Up With
//               <br />
//               <span className="sn-cta__highlight">SNGA.</span>
//             </h2>
//             <p className="sn-cta__desc">
//               Explore our latest stories and discover what's happening across
//               the school community.
//             </p>

//             <div className="sn-cta__actions">
//               <Link to="/gallery" className="sn-cta__btn sn-cta__btn--primary">
//                 <span>Explore Gallery</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/contact" className="sn-cta__btn sn-cta__btn--secondary">
//                 Contact School
//               </Link>
//             </div>

//             <div className="sn-cta__footer">
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

// export default News;


import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import newsService from "../services/news.service";
import "./News.css";

import schoolImage from "../assets/school.JPG";
import aboutImage from "../assets/about-school.jpg";
import achievementImage from "../assets/achievement.jpg";
import engagingImage from "../assets/engaging.jpg";

const IMAGES = {
  hero: schoolImage,
  community: aboutImage,
  achievement: achievementImage,
  cta: engagingImage,
};

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState("");

  /* =====================================================
     FETCH NEWS
  ===================================================== */

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await newsService.getNews();

        const items = Array.isArray(response)
          ? response
          : response?.data ||
            response?.news ||
            [];

        setNews(Array.isArray(items) ? items : []);
      } catch (err) {
        console.error("Failed to load news:", err);
        setError(
          "Unable to load the latest stories right now."
        );
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = useMemo(() => {
    const values = news
      .map((item) => item.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [news]);

  /* =====================================================
     FILTER
  ===================================================== */

  const filteredNews = useMemo(() => {
    if (activeCategory === "All") {
      return news;
    }

    return news.filter(
      (item) => item.category === activeCategory
    );
  }, [news, activeCategory]);

  const featuredNews = filteredNews[0];
  const archiveNews = filteredNews.slice(1);

  /* =====================================================
     IMAGE
  ===================================================== */

  const getImageUrl = (image) => {
    if (!image) return "";

    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    const API_URL =
      import.meta.env.VITE_API_URL?.replace(
        /\/api\/?$/,
        ""
      ) || "http://localhost:5000";

    return `${API_URL}${
      image.startsWith("/") ? image : `/${image}`
    }`;
  };

  /* =====================================================
     DATE
  ===================================================== */

  const formatDate = (date) => {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(parsedDate);
  };

  /* =====================================================
     READING TIME
  ===================================================== */

  const getReadingTime = (content) => {
    if (!content) return "1 min read";

    const plainText = content
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const words = plainText
      ? plainText.split(" ").length
      : 0;

    return `${Math.max(
      1,
      Math.ceil(words / 200)
    )} min read`;
  };

  /* =====================================================
     SCROLL
  ===================================================== */

  const scrollToStories = () => {
    document
      .getElementById("news-archive")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className="sn-page">

      {/* =================================================
          JOURNAL BAR
      ================================================= */}

      <header className="sn-journal-bar">
        <div className="sn-container">
          <div className="sn-journal-bar__inner">

            <Link
              to="/"
              className="sn-journal-bar__back"
            >
              <span aria-hidden="true">←</span>
              SNGA
            </Link>

            <div className="sn-journal-bar__brand">
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <div className="sn-journal-bar__section">
              THE CHRONICLE
            </div>

          </div>
        </div>
      </header>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="sn-hero">

        <div className="sn-container">

          <div className="sn-hero__intro">

            <div className="sn-hero__eyebrow">
              <span>NEWS & EVENTS</span>
              <i />
              <span>RAMANATHAPURAM</span>
            </div>

            <h1 className="sn-hero__title">
              Life at SNGA,
              <br />
              <em>in motion.</em>
            </h1>

            <p className="sn-hero__description">
              Stories from classrooms, activities,
              celebrations, achievements and the
              everyday moments that shape our
              school community.
            </p>

            <button
              type="button"
              className="sn-hero__button"
              onClick={scrollToStories}
            >
              <span>Explore the Chronicle</span>
              <strong aria-hidden="true">
                ↓
              </strong>
            </button>

          </div>

          <div className="sn-hero__image">

            <img
              src={IMAGES.hero}
              alt="Shifan Noor Global Academy campus"
            />

            <div className="sn-hero__image-caption">
              <span>
                SHIFAN NOOR GLOBAL ACADEMY
              </span>

              <span>
                VENKULAM · RAMANATHAPURAM
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="sn-intro">

        <div className="sn-container">

          <div className="sn-intro__grid">

            <div className="sn-intro__label">
              <span>01</span>
              THE SCHOOL CHRONICLE
            </div>

            <div className="sn-intro__content">

              <h2>
                Every day has
                <br />
                <em>a story.</em>
              </h2>

              <div className="sn-intro__copy">

                <p>
                  A school is never still. There is
                  always something being learned,
                  created, celebrated or achieved.
                </p>

                <p>
                  The Chronicle brings these moments
                  together — keeping students,
                  families and the wider community
                  connected with life at SNGA.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          FEATURED STORY
      ================================================= */}

      <section
        id="news-archive"
        className="sn-featured"
      >

        <div className="sn-container">

          <div className="sn-section-heading">

            <div>
              <span className="sn-eyebrow">
                LATEST STORY
              </span>

              <h2>
                From the
                <br />
                <em>school.</em>
              </h2>
            </div>

            <span className="sn-section-index">
              02 / CHRONICLE
            </span>

          </div>

          {!loading &&
            !error &&
            featuredNews && (

              <article className="sn-featured__article">

                <Link
                  to={`/news/${featuredNews.slug}`}
                  className="sn-featured__image"
                >

                  {featuredNews.featuredImage ? (
                    <img
                      src={getImageUrl(
                        featuredNews.featuredImage
                      )}
                      alt={featuredNews.title}
                    />
                  ) : (
                    <img
                      src={IMAGES.hero}
                      alt=""
                    />
                  )}

                  <span className="sn-featured__number">
                    01
                  </span>

                </Link>

                <div className="sn-featured__content">

                  <div className="sn-story-meta">

                    <span>
                      {featuredNews.category ||
                        "SCHOOL LIFE"}
                    </span>

                    <i />

                    <time>
                      {formatDate(
                        featuredNews.publishedAt ||
                          featuredNews.createdAt
                      )}
                    </time>

                  </div>

                  <h3>
                    {featuredNews.title}
                  </h3>

                  {featuredNews.excerpt && (
                    <p>
                      {featuredNews.excerpt}
                    </p>
                  )}

                  <div className="sn-featured__bottom">

                    <span>
                      {getReadingTime(
                        featuredNews.content
                      )}
                    </span>

                    <Link
                      to={`/news/${featuredNews.slug}`}
                      className="sn-read-link"
                    >
                      Read story
                      <span aria-hidden="true">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </article>
            )}

          {loading && (
            <div className="sn-state">
              <div className="sn-state__line" />
              <span>
                Loading the latest stories
              </span>
            </div>
          )}

          {!loading && error && (
            <div className="sn-state sn-state--error">
              <span>{error}</span>
            </div>
          )}

          {!loading &&
            !error &&
            !featuredNews && (

              <div className="sn-state sn-state--empty">

                <span className="sn-state__number">
                  00
                </span>

                <h3>
                  The Chronicle is
                  <br />
                  <em>waiting for its next story.</em>
                </h3>

                <p>
                  New school updates and events
                  will appear here once published.
                </p>

              </div>
            )}

        </div>

      </section>

      {/* =================================================
          ARCHIVE
      ================================================= */}

      {!loading &&
        !error &&
        news.length > 0 && (

          <section className="sn-archive">

            <div className="sn-container">

              <div className="sn-archive__top">

                <div>
                  <span className="sn-eyebrow">
                    THE ARCHIVE
                  </span>

                  <h2>
                    School life,
                    <br />
                    <em>recorded.</em>
                  </h2>
                </div>

                <div className="sn-archive__intro">
                  <p>
                    Browse recent stories from
                    across the SNGA community.
                  </p>
                </div>

              </div>

              {/* FILTERS */}

              {categories.length > 1 && (
                <div className="sn-filters">

                  {categories.map(
                    (category) => (
                      <button
                        type="button"
                        key={category}
                        className={
                          activeCategory === category
                            ? "sn-filter sn-filter--active"
                            : "sn-filter"
                        }
                        onClick={() =>
                          setActiveCategory(
                            category
                          )
                        }
                      >
                        {category}
                      </button>
                    )
                  )}

                </div>
              )}

              {/* ARCHIVE LIST */}

              <div className="sn-archive__list">

                {archiveNews.map(
                  (item, index) => (

                    <Link
                      key={
                        item.id ||
                        item._id ||
                        item.slug
                      }
                      to={`/news/${item.slug}`}
                      className="sn-archive__item"
                    >

                      <div className="sn-archive__number">
                        {String(
                          index + 2
                        ).padStart(2, "0")}
                      </div>

                      <div className="sn-archive__image">

                        {item.featuredImage ? (
                          <img
                            src={getImageUrl(
                              item.featuredImage
                            )}
                            alt={item.title}
                            loading="lazy"
                          />
                        ) : (
                          <img
                            src={IMAGES.hero}
                            alt=""
                            loading="lazy"
                          />
                        )}

                      </div>

                      <div className="sn-archive__content">

                        <div className="sn-story-meta">

                          <span>
                            {item.category ||
                              "SCHOOL LIFE"}
                          </span>

                          <i />

                          <time>
                            {formatDate(
                              item.publishedAt ||
                                item.createdAt
                            )}
                          </time>

                        </div>

                        <h3>
                          {item.title}
                        </h3>

                        {item.excerpt && (
                          <p>
                            {item.excerpt}
                          </p>
                        )}

                      </div>

                      <div className="sn-archive__arrow">
                        →
                      </div>

                    </Link>
                  )
                )}

                {archiveNews.length === 0 && (
                  <div className="sn-archive__no-results">
                    No other stories are available
                    in this category.
                  </div>
                )}

              </div>

            </div>

          </section>
        )}

      {/* =================================================
          COMMUNITY STORY
      ================================================= */}

      <section className="sn-community">

        <div className="sn-community__image">

          <img
            src={IMAGES.community}
            alt="SNGA school community"
            loading="lazy"
          />

        </div>

        <div className="sn-community__content">

          <span className="sn-eyebrow">
            BEYOND THE HEADLINES
          </span>

          <h2>
            The story is
            <br />
            <em>the community.</em>
          </h2>

          <p>
            News is more than announcements.
            It is the record of students learning,
            teachers guiding, teams competing,
            families participating and a community
            growing together.
          </p>

          <Link
            to="/gallery"
            className="sn-editorial-link"
          >
            Explore school life
            <span aria-hidden="true">
              →
            </span>
          </Link>

        </div>

      </section>

      {/* =================================================
          ACHIEVEMENTS
      ================================================= */}

      <section className="sn-achievements">

        <div className="sn-container">

          <div className="sn-achievements__grid">

            <div className="sn-achievements__image">

              <img
                src={IMAGES.achievement}
                alt="SNGA student achievement"
                loading="lazy"
              />

              <span>
                03
              </span>

            </div>

            <div className="sn-achievements__content">

              <span className="sn-eyebrow">
                ACHIEVEMENTS
              </span>

              <h2>
                Effort becomes
                <br />
                <em>achievement.</em>
              </h2>

              <p>
                Every accomplishment carries a
                story of preparation, persistence
                and the confidence to keep trying.
              </p>

              <Link
                to="/achievements"
                className="sn-editorial-link"
              >
                View achievements
                <span aria-hidden="true">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          JOURNAL / BLOG CROSS NAV
      ================================================= */}

      <section className="sn-journal">

        <div className="sn-container">

          <div className="sn-journal__inner">

            <div>
              <span className="sn-eyebrow">
                KEEP READING
              </span>

              <h2>
                Stories,
                <br />
                <em>ideas & perspectives.</em>
              </h2>
            </div>

            <div className="sn-journal__right">

              <p>
                Go beyond the latest updates and
                discover longer stories from the
                SNGA community.
              </p>

              <Link
                to="/blogs"
                className="sn-editorial-link"
              >
                Visit the SNGA Journal
                <span aria-hidden="true">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="sn-cta">

        <div className="sn-cta__image">

          <img
            src={IMAGES.cta}
            alt=""
            aria-hidden="true"
          />

        </div>

        <div className="sn-cta__overlay" />

        <div className="sn-container">

          <div className="sn-cta__inner">

            <div className="sn-cta__copy">

              <span className="sn-eyebrow">
                SHIFAN NOOR GLOBAL ACADEMY
              </span>

              <h2>
                There is always
                <br />
                <em>more to discover.</em>
              </h2>

              <p>
                Explore our campus, academics,
                achievements and the experiences
                that shape life at SNGA.
              </p>

            </div>

            <div className="sn-cta__actions">

              <Link
                to="/gallery"
                className="sn-cta__button sn-cta__button--light"
              >
                Gallery
                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                to="/admissions"
                className="sn-cta__button sn-cta__button--outline"
              >
                Admissions
                <span aria-hidden="true">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          CONTACT STRIP
      ================================================= */}

      <section className="sn-contact">

        <div className="sn-container">

          <div className="sn-contact__grid">

            <div>
              <span>
                SHIFAN NOOR GLOBAL ACADEMY
              </span>

              <p>
                Venkulam, Devipattinam Road
                <br />
                Ramanathapuram – 623503
                <br />
                Tamil Nadu, India
              </p>
            </div>

            <div>
              <span>
                CONTACT
              </span>

              <a href="tel:+919788914441">
                +91 97889 14441
              </a>

              <a href="tel:+919600234555">
                +91 96002 34555
              </a>

              <a href="mailto:info@sngacbse.com">
                info@sngacbse.com
              </a>
            </div>

            <div className="sn-contact__location">
              THE CHRONICLE
              <br />
              SNGA · 2026
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default News;