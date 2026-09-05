

// // // import { useEffect, useMemo, useRef, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   FaArrowRight,
// // //   FaNewspaper,
// // //   FaTag,
// // //   FaCalendarAlt,
// // //   FaEye,
// // //   FaHeart,
// // //   FaShare,
// // //   FaClock,
// // //   FaUsers,
// // // } from "react-icons/fa";
// // // import newsService from "../services/news.service";
// // // import "./News.css";

// // // const News = () => {
// // //   const [news, setNews] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeCategory, setActiveCategory] = useState("All");
// // //   const [error, setError] = useState("");

// // //   const heroRef = useRef(null);
// // //   const introRef = useRef(null);
// // //   const directoryRef = useRef(null);
// // //   const communityRef = useRef(null);
// // //   const achievementsRef = useRef(null);
// // //   const galleryRef = useRef(null);
// // //   const ctaRef = useRef(null);

// // //   // =====================================================
// // //   // SCROLL TRIGGERED ANIMATIONS
// // //   // =====================================================

// // //   useEffect(() => {
// // //     const observerOptions = {
// // //       threshold: 0.1,
// // //       rootMargin: "0px 0px -50px 0px",
// // //     };

// // //     const sections = [
// // //       { ref: heroRef, className: "sn-hero--visible" },
// // //       { ref: introRef, className: "sn-intro--visible" },
// // //       { ref: directoryRef, className: "sn-directory--visible" },
// // //       { ref: communityRef, className: "sn-community--visible" },
// // //       { ref: achievementsRef, className: "sn-achievements--visible" },
// // //       { ref: galleryRef, className: "sn-gallery--visible" },
// // //       { ref: ctaRef, className: "sn-cta--visible" },
// // //     ];

// // //     const observers = {};

// // //     sections.forEach(({ ref, className }) => {
// // //       if (!ref.current) return;

// // //       const observer = new IntersectionObserver((entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add(className);
// // //             observer.unobserve(entry.target);
// // //           }
// // //         });
// // //       }, observerOptions);

// // //       observer.observe(ref.current);
// // //       observers[className] = observer;
// // //     });

// // //     return () => {
// // //       Object.values(observers).forEach((observer) => observer.disconnect());
// // //     };
// // //   }, []);

// // //   // =====================================================
// // //   // FETCH NEWS
// // //   // =====================================================

// // //   useEffect(() => {
// // //     const loadNews = async () => {
// // //       try {
// // //         setLoading(true);
// // //         setError("");

// // //         const response = await newsService.getNews();

// // //         const items = Array.isArray(response)
// // //           ? response
// // //           : response?.data || response?.news || [];

// // //         setNews(items);
// // //       } catch (err) {
// // //         console.error("Failed to load news:", err);
// // //         setError("Unable to load the latest news.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     loadNews();
// // //   }, []);

// // //   // =====================================================
// // //   // COMPUTED VALUES
// // //   // =====================================================

// // //   const categories = useMemo(() => {
// // //     const values = news.map((item) => item.category).filter(Boolean);
// // //     return ["All", ...new Set(values)];
// // //   }, [news]);

// // //   const filteredNews = useMemo(() => {
// // //     if (activeCategory === "All") {
// // //       return news;
// // //     }
// // //     return news.filter((item) => item.category === activeCategory);
// // //   }, [news, activeCategory]);

// // //   const featuredNews = filteredNews[0];
// // //   const remainingNews = filteredNews.slice(1);

// // //   // =====================================================
// // //   // HELPERS
// // //   // =====================================================

// // //   const getImageUrl = (image) => {
// // //     if (!image) return "";

// // //     if (image.startsWith("http://") || image.startsWith("https://")) {
// // //       return image;
// // //     }

// // //     const API_URL =
// // //       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// // //       "http://localhost:5000";

// // //     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // //   };

// // //   const formatDate = (date) => {
// // //     if (!date) return "";

// // //     return new Intl.DateTimeFormat("en-IN", {
// // //       day: "2-digit",
// // //       month: "short",
// // //       year: "numeric",
// // //     }).format(new Date(date));
// // //   };

// // //   // =====================================================
// // //   // DATA
// // //   // =====================================================

// // //   const stats = [
// // //     { number: "50+", label: "Stories Published" },
// // //     { number: "25+", label: "Events Covered" },
// // //     { number: "10+", label: "Awards Won" },
// // //     { number: "1000+", label: "Community Members" },
// // //   ];

// // //   return (
// // //     <main className="sn-page">
// // //       {/* =================================================
// // //           HERO SECTION
// // //       ================================================= */}
// // //       <section ref={heroRef} className="sn-hero">
// // //         <div className="sn-hero__bg" />
// // //         <div className="sn-hero__gradient" />

// // //         <div className="sn-container">
// // //           <div className="sn-hero__content">
// // //             <span className="sn-hero__badge">
// // //               <FaNewspaper />
// // //               NEWS & EVENTS
// // //             </span>

// // //             <h1 className="sn-hero__title">
// // //               Life at SNGA,
// // //               <br />
// // //               <span className="sn-hero__highlight">In Motion.</span>
// // //             </h1>

// // //             <p className="sn-hero__desc">
// // //               Discover the latest stories, events, achievements and moments
// // //               from the Shifan Noor Global Academy community.
// // //             </p>
// // //           </div>

// // //           <div className="sn-hero__tags">
// // //             <span>LEARN</span>
// // //             <span>PARTICIPATE</span>
// // //             <span>ACHIEVE</span>
// // //             <span>CELEBRATE</span>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           INTRO SECTION
// // //       ================================================= */}
// // //       <section ref={introRef} className="sn-intro">
// // //         <div className="sn-container">
// // //           <div className="sn-intro__inner">
// // //             <span className="sn-intro__label">SCHOOL LIFE</span>

// // //             <div className="sn-intro__grid">
// // //               <h2 className="sn-intro__title">
// // //                 Every Day Brings
// // //                 <br />
// // //                 <span className="sn-intro__highlight">Something New.</span>
// // //               </h2>

// // //               <div className="sn-intro__text">
// // //                 <p>
// // //                   School life is made up of learning, activities, achievements,
// // //                   celebrations and the everyday experiences that students share
// // //                   together.
// // //                 </p>
// // //                 <p>
// // //                   Follow the latest updates from SNGA and stay connected with
// // //                   what's happening across our school community.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           DIRECTORY SECTION
// // //       ================================================= */}
// // //       <section ref={directoryRef} className="sn-directory">
// // //         <div className="sn-container">
// // //           <div className="sn-directory__header">
// // //             <div>
// // //               <span className="sn-directory__label">LATEST UPDATES</span>
// // //               <h2 className="sn-directory__title">
// // //                 What's Happening
// // //                 <br />
// // //                 <span className="sn-directory__highlight">At SNGA.</span>
// // //               </h2>
// // //             </div>
// // //             <p className="sn-directory__desc">
// // //               Explore the latest school news, events, announcements and
// // //               community stories.
// // //             </p>
// // //           </div>

// // //           {/* Filters */}
// // //           {!loading && categories.length > 1 && (
// // //             <div className="sn-directory__filters">
// // //               {categories.map((category) => (
// // //                 <button
// // //                   type="button"
// // //                   key={category}
// // //                   className={`sn-directory__filter ${
// // //                     activeCategory === category ? "sn-directory__filter--active" : ""
// // //                   }`}
// // //                   onClick={() => setActiveCategory(category)}
// // //                 >
// // //                   {category}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           )}

// // //           {/* States */}
// // //           {loading && (
// // //             <div className="sn-directory__state">
// // //               <div className="sn-directory__loader">
// // //                 <span />
// // //                 <span />
// // //                 <span />
// // //               </div>
// // //               <span>LOADING STORIES</span>
// // //             </div>
// // //           )}

// // //           {!loading && error && (
// // //             <div className="sn-directory__state sn-directory__state--error">
// // //               <span>{error}</span>
// // //             </div>
// // //           )}

// // //           {!loading && !error && filteredNews.length === 0 && (
// // //             <div className="sn-directory__state sn-directory__state--empty">
// // //               <div className="sn-directory__empty-icon">
// // //                 <FaNewspaper />
// // //               </div>
// // //               <h3>No Stories Yet</h3>
// // //               <p>New updates will appear here. School news and events can be published from the administration panel.</p>
// // //             </div>
// // //           )}

// // //           {/* Featured News */}
// // //           {!loading && !error && featuredNews && (
// // //             <div className="sn-directory__featured">
// // //               <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-image">
// // //                 {featuredNews.featuredImage ? (
// // //                   <img
// // //                     src={getImageUrl(featuredNews.featuredImage)}
// // //                     alt={featuredNews.title}
// // //                     loading="lazy"
// // //                   />
// // //                 ) : (
// // //                   <div className="sn-directory__featured-placeholder">
// // //                     <FaNewspaper />
// // //                   </div>
// // //                 )}
// // //                 <div className="sn-directory__featured-overlay" />
// // //                 <span className="sn-directory__featured-number">01</span>
// // //               </Link>

// // //               <div className="sn-directory__featured-content">
// // //                 <div className="sn-directory__featured-meta">
// // //                   {featuredNews.category && (
// // //                     <span className="sn-directory__featured-category">
// // //                       <FaTag />
// // //                       {featuredNews.category}
// // //                     </span>
// // //                   )}
// // //                   {featuredNews.publishedAt && (
// // //                     <time className="sn-directory__featured-date">
// // //                       <FaCalendarAlt />
// // //                       {formatDate(featuredNews.publishedAt)}
// // //                     </time>
// // //                   )}
// // //                 </div>

// // //                 <h3 className="sn-directory__featured-title">{featuredNews.title}</h3>

// // //                 {featuredNews.excerpt && (
// // //                   <p className="sn-directory__featured-desc">{featuredNews.excerpt}</p>
// // //                 )}

// // //                 <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-link">
// // //                   <span>Read Story</span>
// // //                   <FaArrowRight />
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* News Grid */}
// // //           {!loading && !error && remainingNews.length > 0 && (
// // //             <div className="sn-directory__grid">
// // //               {remainingNews.map((item, index) => (
// // //                 <div key={item.id} className="sn-directory__card">
// // //                   <Link to={`/news/${item.slug}`} className="sn-directory__card-image">
// // //                     {item.featuredImage ? (
// // //                       <img
// // //                         src={getImageUrl(item.featuredImage)}
// // //                         alt={item.title}
// // //                         loading="lazy"
// // //                       />
// // //                     ) : (
// // //                       <div className="sn-directory__card-placeholder">
// // //                         <FaNewspaper />
// // //                       </div>
// // //                     )}
// // //                     <div className="sn-directory__card-overlay" />
// // //                     <span className="sn-directory__card-number">
// // //                       {String(index + 2).padStart(2, "0")}
// // //                     </span>
// // //                   </Link>

// // //                   <div className="sn-directory__card-content">
// // //                     <div className="sn-directory__card-meta">
// // //                       {item.category && (
// // //                         <span className="sn-directory__card-category">
// // //                           <FaTag />
// // //                           {item.category}
// // //                         </span>
// // //                       )}
// // //                       {item.publishedAt && (
// // //                         <time className="sn-directory__card-date">
// // //                           <FaCalendarAlt />
// // //                           {formatDate(item.publishedAt)}
// // //                         </time>
// // //                       )}
// // //                     </div>

// // //                     <h3 className="sn-directory__card-title">{item.title}</h3>

// // //                     {item.excerpt && (
// // //                       <p className="sn-directory__card-desc">{item.excerpt}</p>
// // //                     )}

// // //                     <Link to={`/news/${item.slug}`} className="sn-directory__card-link">
// // //                       <span>Read Story</span>
// // //                       <FaArrowRight />
// // //                     </Link>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           COMMUNITY SECTION
// // //       ================================================= */}
// // //       <section ref={communityRef} className="sn-community">
// // //         <div className="sn-community__bg" />

// // //         <div className="sn-container">
// // //           <div className="sn-community__inner">
// // //             <div className="sn-community__content">
// // //               <span className="sn-community__label">THE SNGA COMMUNITY</span>
// // //               <h2 className="sn-community__title">
// // //                 More Than
// // //                 <br />
// // //                 <span className="sn-community__highlight">School News.</span>
// // //               </h2>
// // //             </div>

// // //             <div className="sn-community__right">
// // //               <p className="sn-community__desc">
// // //                 The stories of a school are found in its classrooms, activities,
// // //                 competitions, celebrations and the achievements of its students.
// // //               </p>
// // //               <p className="sn-community__desc">
// // //                 Our news section brings these moments together so families and
// // //                 the wider community can stay connected with life at SNGA.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           ACHIEVEMENTS SECTION
// // //       ================================================= */}
// // //       <section ref={achievementsRef} className="sn-achievements">
// // //         <div className="sn-achievements__bg" />

// // //         <div className="sn-container">
// // //           <div className="sn-achievements__inner">
// // //             <div className="sn-achievements__content">
// // //               <span className="sn-achievements__label">STUDENT ACHIEVEMENTS</span>
// // //               <h2 className="sn-achievements__title">
// // //                 Celebrate Every
// // //                 <br />
// // //                 <span className="sn-achievements__highlight">Milestone.</span>
// // //               </h2>
// // //               <p className="sn-achievements__desc">
// // //                 From academic accomplishments to sports and other achievements,
// // //                 every milestone represents effort, growth and determination.
// // //               </p>
// // //               <Link to="/achievements" className="sn-achievements__link">
// // //                 <span>View Achievements</span>
// // //                 <FaArrowRight />
// // //               </Link>
// // //             </div>

// // //             <div className="sn-achievements__stats">
// // //               {stats.map((stat, index) => (
// // //                 <div key={index} className="sn-achievements__stat">
// // //                   <span className="sn-achievements__stat-number">{stat.number}</span>
// // //                   <span className="sn-achievements__stat-label">{stat.label}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           GALLERY SECTION
// // //       ================================================= */}
// // //       <section ref={galleryRef} className="sn-gallery">
// // //         <div className="sn-container">
// // //           <div className="sn-gallery__inner">
// // //             <div className="sn-gallery__content">
// // //               <span className="sn-gallery__label">MOMENTS</span>
// // //               <h2 className="sn-gallery__title">
// // //                 See School Life
// // //                 <br />
// // //                 <span className="sn-gallery__highlight">In Pictures.</span>
// // //               </h2>
// // //             </div>

// // //             <div className="sn-gallery__right">
// // //               <p className="sn-gallery__desc">
// // //                 Explore the people, activities and experiences that make
// // //                 everyday life at SNGA memorable.
// // //               </p>
// // //               <Link to="/gallery" className="sn-gallery__link">
// // //                 <span>View Gallery</span>
// // //                 <FaArrowRight />
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           FINAL CTA
// // //       ================================================= */}
// // //       <section ref={ctaRef} className="sn-cta">
// // //         <div className="sn-container">
// // //           <div className="sn-cta__content">
// // //             <span className="sn-cta__label">STAY CONNECTED</span>
// // //             <h2 className="sn-cta__title">
// // //               Keep Up With
// // //               <br />
// // //               <span className="sn-cta__highlight">SNGA.</span>
// // //             </h2>
// // //             <p className="sn-cta__desc">
// // //               Explore our latest stories and discover what's happening across
// // //               the school community.
// // //             </p>

// // //             <div className="sn-cta__actions">
// // //               <Link to="/gallery" className="sn-cta__btn sn-cta__btn--primary">
// // //                 <span>Explore Gallery</span>
// // //                 <FaArrowRight />
// // //               </Link>
// // //               <Link to="/contact" className="sn-cta__btn sn-cta__btn--secondary">
// // //                 Contact School
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // };

// // // export default News;



// // import { useEffect, useMemo, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FaArrowRight,
// //   FaTimes,
// //   FaNewspaper,
// //   FaTag,
// //   FaCalendarAlt,
// //   FaEye,
// //   FaHeart,
// //   FaShare,
// //   FaClock,
// //   FaUsers,
// //   FaSchool,
// //   FaTrophy,
// //   FaStar,
// //   FaAward,
// //   FaHands,
// //   FaGraduationCap,
// //   FaChalkboardTeacher,
// //   FaQuoteLeft,
// //   FaPenFancy,
// //   FaPlay,
// //   FaMapMarkerAlt,
// //   FaPhone,
// //   FaEnvelope,
// //   FaBookOpen,
// //   FaUser,
// // } from "react-icons/fa";
// // import newsService from "../services/news.service";
// // import "./News.css";

// // // =====================================================
// // // ONLINE IMAGES (Replace with local imports later)
// // // =====================================================
// // const IMAGES = {
// //   heroBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
// //   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
// //   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
// //   community: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1600&q=80",
// //   achievements: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=1600&q=80",
// // };

// // const News = () => {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [error, setError] = useState("");

// //   const heroRef = useRef(null);
// //   const introRef = useRef(null);
// //   const directoryRef = useRef(null);
// //   const communityRef = useRef(null);
// //   const achievementsRef = useRef(null);
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
// //       { ref: heroRef, className: "sn-hero--visible" },
// //       { ref: introRef, className: "sn-intro--visible" },
// //       { ref: directoryRef, className: "sn-directory--visible" },
// //       { ref: communityRef, className: "sn-community--visible" },
// //       { ref: achievementsRef, className: "sn-achievements--visible" },
// //       { ref: galleryRef, className: "sn-gallery--visible" },
// //       { ref: ctaRef, className: "sn-cta--visible" },
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
// //   // FETCH NEWS
// //   // =====================================================

// //   useEffect(() => {
// //     const loadNews = async () => {
// //       try {
// //         setLoading(true);
// //         setError("");

// //         const response = await newsService.getNews();

// //         const items = Array.isArray(response)
// //           ? response
// //           : response?.data || response?.news || [];

// //         setNews(items);
// //       } catch (err) {
// //         console.error("Failed to load news:", err);
// //         setError("Unable to load the latest news.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadNews();
// //   }, []);

// //   // =====================================================
// //   // COMPUTED VALUES
// //   // =====================================================

// //   const categories = useMemo(() => {
// //     const values = news.map((item) => item.category).filter(Boolean);
// //     return ["All", ...new Set(values)];
// //   }, [news]);

// //   const filteredNews = useMemo(() => {
// //     if (activeCategory === "All") {
// //       return news;
// //     }
// //     return news.filter((item) => item.category === activeCategory);
// //   }, [news, activeCategory]);

// //   const featuredNews = filteredNews[0];
// //   const remainingNews = filteredNews.slice(1);

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

// //   const getReadingTime = (content) => {
// //     if (!content) return "3 min read";
// //     const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
// //     const minutes = Math.ceil(words / 200);
// //     return `${minutes} min read`;
// //   };

// //   // =====================================================
// //   // DATA
// //   // =====================================================

// //   const stats = [
// //     { number: news.length || "50+", label: "Stories Published", icon: <FaNewspaper /> },
// //     { number: "25+", label: "Events Covered", icon: <FaCalendarAlt /> },
// //     { number: "10+", label: "Awards Won", icon: <FaTrophy /> },
// //     { number: "1000+", label: "Community Members", icon: <FaUsers /> },
// //   ];

// //   const categoriesData = [
// //     { name: "School Events", icon: <FaCalendarAlt />, color: "#4A90D9" },
// //     { name: "Student Achievements", icon: <FaTrophy />, color: "#27AE60" },
// //     { name: "Community Stories", icon: <FaUsers />, color: "#E67E22" },
// //     { name: "School Updates", icon: <FaNewspaper />, color: "#E74C3C" },
// //     { name: "Celebrations", icon: <FaStar />, color: "#9B59B6" },
// //   ];

// //   return (
// //     <main className="sn-page">
// //       {/* =================================================
// //           TOP BAR - School Identity
// //       ================================================= */}
// //       <div className="sn-topbar">
// //         <div className="sn-container">
// //           <div className="sn-topbar__content">
// //             <span className="sn-topbar__motto">
// //               <FaSchool />
// //               Shifan Noor Global Academy - Where Values Meet Excellence
// //             </span>
// //             <span className="sn-topbar__affiliation">Affiliated to CBSE</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =================================================
// //           HERO - With Background Image & Circular Image
// //       ================================================= */}
// //       <section ref={heroRef} className="sn-hero">
// //         <div className="sn-hero__bg-wrapper">
// //           <div 
// //             className="sn-hero__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
// //           />
// //           <div className="sn-hero__bg-overlay" />
// //           <div className="sn-hero__bg-gradient" />
// //         </div>

// //         <div className="sn-container">
// //           <div className="sn-hero__inner">
// //             <div className="sn-hero__content">
// //               <div className="sn-hero__badge">
// //                 <FaNewspaper />
// //                 NEWS & EVENTS
// //               </div>

// //               <h1 className="sn-hero__title">
// //                 Life at SNGA,
// //                 <br />
// //                 <span className="sn-hero__highlight">In Motion.</span>
// //               </h1>

// //               <p className="sn-hero__desc">
// //                 Discover the latest stories, events, achievements and moments
// //                 from the Shifan Noor Global Academy community.
// //               </p>

// //               <div className="sn-hero__stats">
// //                 {stats.map((stat, index) => (
// //                   <div key={index} className="sn-hero__stat">
// //                     <span className="sn-hero__stat-icon">{stat.icon}</span>
// //                     <span className="sn-hero__stat-number">{stat.number}</span>
// //                     <span className="sn-hero__stat-label">{stat.label}</span>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="sn-hero__actions">
// //                 <button 
// //                   className="sn-hero__btn-primary"
// //                   onClick={() => {
// //                     directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
// //                   }}
// //                 >
// //                   <span>Read Stories</span>
// //                   <FaArrowRight />
// //                 </button>
// //                 <button className="sn-hero__btn-secondary">
// //                   <FaPlay />
// //                   <span>Watch Highlights</span>
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="sn-hero__image-wrapper">
// //               <div className="sn-hero__image-circle">
// //                 <img 
// //                   src={IMAGES.heroCircle} 
// //                   alt="SNGA School" 
// //                   className="sn-hero__image-img"
// //                 />
// //                 <div className="sn-hero__image-ring" />
// //                 <div className="sn-hero__image-badge">
// //                   <span>Since 2015</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="sn-hero__wave">
// //           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
// //             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
// //           </svg>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           INTRO - Welcome Message
// //       ================================================= */}
// //       <section ref={introRef} className="sn-intro">
// //         <div className="sn-container">
// //           <div className="sn-intro__inner">
// //             <div className="sn-intro__header">
// //               <span className="sn-intro__label">SCHOOL LIFE</span>
// //               <h2 className="sn-intro__title">
// //                 Every Day Brings
// //                 <span className="sn-intro__highlight">Something New.</span>
// //               </h2>
// //             </div>

// //             <div className="sn-intro__content">
// //               <p>
// //                 School life is made up of learning, activities, achievements,
// //                 celebrations and the everyday experiences that students share
// //                 together.
// //               </p>
// //               <p>
// //                 Follow the latest updates from SNGA and stay connected with
// //                 what's happening across our school community.
// //               </p>
// //             </div>

// //             <div className="sn-intro__categories">
// //               {categoriesData.map((cat, index) => (
// //                 <div 
// //                   key={index} 
// //                   className="sn-intro__category"
// //                   style={{ borderColor: cat.color }}
// //                   onClick={() => setActiveCategory(cat.name)}
// //                 >
// //                   <span style={{ color: cat.color }}>{cat.icon}</span>
// //                   <span>{cat.name}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           DIRECTORY - News Grid
// //       ================================================= */}
// //       <section ref={directoryRef} className="sn-directory">
// //         <div className="sn-container">
// //           <div className="sn-directory__header">
// //             <div>
// //               <span className="sn-directory__label">LATEST UPDATES</span>
// //               <h2 className="sn-directory__title">
// //                 What's Happening
// //                 <span className="sn-directory__highlight">At SNGA.</span>
// //               </h2>
// //             </div>
// //             <p className="sn-directory__desc">
// //               Explore the latest school news, events, announcements and
// //               community stories.
// //             </p>
// //           </div>

// //           {/* Filters */}
// //           {!loading && categories.length > 1 && (
// //             <div className="sn-directory__filters">
// //               {categories.map((category) => (
// //                 <button
// //                   type="button"
// //                   key={category}
// //                   className={`sn-directory__filter ${
// //                     activeCategory === category ? "sn-directory__filter--active" : ""
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
// //             <div className="sn-directory__state">
// //               <div className="sn-directory__loader">
// //                 <span />
// //                 <span />
// //                 <span />
// //               </div>
// //               <span>Loading stories...</span>
// //             </div>
// //           )}

// //           {!loading && error && (
// //             <div className="sn-directory__state sn-directory__state--error">
// //               <span>{error}</span>
// //             </div>
// //           )}

// //           {!loading && !error && filteredNews.length === 0 && (
// //             <div className="sn-directory__state sn-directory__state--empty">
// //               <div className="sn-directory__empty-icon">
// //                 <FaNewspaper />
// //               </div>
// //               <h3>No Stories Yet</h3>
// //               <p>New updates will appear here. School news and events can be published from the administration panel.</p>
// //             </div>
// //           )}

// //           {/* Featured News */}
// //           {!loading && !error && featuredNews && (
// //             <div className="sn-directory__featured">
// //               <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-image">
// //                 {featuredNews.featuredImage ? (
// //                   <img
// //                     src={getImageUrl(featuredNews.featuredImage)}
// //                     alt={featuredNews.title}
// //                     loading="lazy"
// //                   />
// //                 ) : (
// //                   <div className="sn-directory__featured-placeholder">
// //                     <FaNewspaper />
// //                   </div>
// //                 )}
// //                 <div className="sn-directory__featured-overlay">
// //                   <span className="sn-directory__featured-badge">Featured</span>
// //                 </div>
// //                 <span className="sn-directory__featured-number">01</span>
// //               </Link>

// //               <div className="sn-directory__featured-content">
// //                 <div className="sn-directory__featured-meta">
// //                   {featuredNews.category && (
// //                     <span className="sn-directory__featured-category">
// //                       <FaTag />
// //                       {featuredNews.category}
// //                     </span>
// //                   )}
// //                   {featuredNews.publishedAt && (
// //                     <time className="sn-directory__featured-date">
// //                       <FaCalendarAlt />
// //                       {formatDate(featuredNews.publishedAt)}
// //                     </time>
// //                   )}
// //                   <span className="sn-directory__featured-read-time">
// //                     <FaClock />
// //                     {getReadingTime(featuredNews.content)}
// //                   </span>
// //                 </div>

// //                 <h3 className="sn-directory__featured-title">{featuredNews.title}</h3>

// //                 {featuredNews.excerpt && (
// //                   <p className="sn-directory__featured-desc">{featuredNews.excerpt}</p>
// //                 )}

// //                 <div className="sn-directory__featured-footer">
// //                   {featuredNews.authorName && (
// //                     <div className="sn-directory__featured-author">
// //                       <FaUser />
// //                       By {featuredNews.authorName}
// //                     </div>
// //                   )}
// //                   <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-link">
// //                     <span>Read Story</span>
// //                     <FaArrowRight />
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* News Grid */}
// //           {!loading && !error && remainingNews.length > 0 && (
// //             <div className="sn-directory__grid">
// //               {remainingNews.map((item, index) => {
// //                 const itemId = item.id || item._id;
// //                 return (
// //                   <div key={itemId} className="sn-directory__card">
// //                     <Link to={`/news/${item.slug}`} className="sn-directory__card-image">
// //                       {item.featuredImage ? (
// //                         <img
// //                           src={getImageUrl(item.featuredImage)}
// //                           alt={item.title}
// //                           loading="lazy"
// //                         />
// //                       ) : (
// //                         <div className="sn-directory__card-placeholder">
// //                           <FaNewspaper />
// //                         </div>
// //                       )}
// //                       <div className="sn-directory__card-overlay">
// //                         <span className="sn-directory__card-read-time">
// //                           <FaClock />
// //                           {getReadingTime(item.content)}
// //                         </span>
// //                       </div>
// //                       <span className="sn-directory__card-number">
// //                         {String(index + 2).padStart(2, "0")}
// //                       </span>
// //                     </Link>

// //                     <div className="sn-directory__card-content">
// //                       <div className="sn-directory__card-meta">
// //                         {item.category && (
// //                           <span className="sn-directory__card-category">
// //                             {item.category}
// //                           </span>
// //                         )}
// //                         {item.publishedAt && (
// //                           <time className="sn-directory__card-date">
// //                             <FaCalendarAlt />
// //                             {formatDate(item.publishedAt)}
// //                           </time>
// //                         )}
// //                       </div>

// //                       <h3 className="sn-directory__card-title">{item.title}</h3>

// //                       {item.excerpt && (
// //                         <p className="sn-directory__card-desc">{item.excerpt}</p>
// //                       )}

// //                       <div className="sn-directory__card-footer">
// //                         {item.authorName && (
// //                           <div className="sn-directory__card-author">
// //                             <FaUser />
// //                             {item.authorName}
// //                           </div>
// //                         )}
// //                         <Link to={`/news/${item.slug}`} className="sn-directory__card-link">
// //                           <span>Read</span>
// //                           <FaArrowRight />
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* =================================================
// //           COMMUNITY SECTION - With Background Image
// //       ================================================= */}
// //       <section ref={communityRef} className="sn-community">
// //         <div className="sn-community__bg-wrapper">
// //           <div 
// //             className="sn-community__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.community})` }}
// //           />
// //           <div className="sn-community__bg-overlay" />
// //         </div>

// //         <div className="sn-container">
// //           <div className="sn-community__inner">
// //             <div className="sn-community__content">
// //               <span className="sn-community__label">THE SNGA COMMUNITY</span>
// //               <h2 className="sn-community__title">
// //                 More Than
// //                 <br />
// //                 <span className="sn-community__highlight">School News.</span>
// //               </h2>
// //             </div>

// //             <div className="sn-community__right">
// //               <div className="sn-community__quote">
// //                 <FaQuoteLeft />
// //               </div>
// //               <p className="sn-community__desc">
// //                 The stories of a school are found in its classrooms, activities,
// //                 competitions, celebrations and the achievements of its students.
// //               </p>
// //               <p className="sn-community__desc">
// //                 Our news section brings these moments together so families and
// //                 the wider community can stay connected with life at SNGA.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           ACHIEVEMENTS SECTION - With Background Image
// //       ================================================= */}
// //       <section ref={achievementsRef} className="sn-achievements">
// //         <div className="sn-achievements__bg-wrapper">
// //           <div 
// //             className="sn-achievements__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.achievements})` }}
// //           />
// //           <div className="sn-achievements__bg-overlay" />
// //         </div>

// //         <div className="sn-container">
// //           <div className="sn-achievements__inner">
// //             <div className="sn-achievements__content">
// //               <span className="sn-achievements__label">STUDENT ACHIEVEMENTS</span>
// //               <h2 className="sn-achievements__title">
// //                 Celebrate Every
// //                 <br />
// //                 <span className="sn-achievements__highlight">Milestone.</span>
// //               </h2>
// //               <p className="sn-achievements__desc">
// //                 From academic accomplishments to sports and other achievements,
// //                 every milestone represents effort, growth and determination.
// //               </p>
// //               <Link to="/achievements" className="sn-achievements__link">
// //                 <span>View All Achievements</span>
// //                 <FaArrowRight />
// //               </Link>
// //             </div>

// //             <div className="sn-achievements__stats">
// //               {stats.map((stat, index) => (
// //                 <div key={index} className="sn-achievements__stat">
// //                   <span className="sn-achievements__stat-icon">{stat.icon}</span>
// //                   <span className="sn-achievements__stat-number">{stat.number}</span>
// //                   <span className="sn-achievements__stat-label">{stat.label}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           GALLERY SECTION
// //       ================================================= */}
// //       <section ref={galleryRef} className="sn-gallery">
// //         <div className="sn-container">
// //           <div className="sn-gallery__inner">
// //             <div className="sn-gallery__content">
// //               <span className="sn-gallery__label">MOMENTS</span>
// //               <h2 className="sn-gallery__title">
// //                 See School Life
// //                 <br />
// //                 <span className="sn-gallery__highlight">In Pictures.</span>
// //               </h2>
// //             </div>

// //             <div className="sn-gallery__right">
// //               <p className="sn-gallery__desc">
// //                 Explore the people, activities and experiences that make
// //                 everyday life at SNGA memorable.
// //               </p>
// //               <Link to="/gallery" className="sn-gallery__link">
// //                 <span>View Gallery</span>
// //                 <FaArrowRight />
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           FINAL CTA - With Background Image
// //       ================================================= */}
// //       <section ref={ctaRef} className="sn-cta">
// //         <div className="sn-cta__bg-wrapper">
// //           <div 
// //             className="sn-cta__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
// //           />
// //           <div className="sn-cta__bg-overlay" />
// //           <div className="sn-cta__bg-gradient" />
// //         </div>

// //         <div className="sn-container">
// //           <div className="sn-cta__content">
// //             <div className="sn-cta__badge">
// //               <FaSchool />
// //               SHIFAN NOOR GLOBAL ACADEMY
// //             </div>
// //             <h2 className="sn-cta__title">
// //               Keep Up With
// //               <br />
// //               <span className="sn-cta__highlight">SNGA.</span>
// //             </h2>
// //             <p className="sn-cta__desc">
// //               Explore our latest stories and discover what's happening across
// //               the school community.
// //             </p>

// //             <div className="sn-cta__actions">
// //               <Link to="/gallery" className="sn-cta__btn sn-cta__btn--primary">
// //                 <span>Explore Gallery</span>
// //                 <FaArrowRight />
// //               </Link>
// //               <Link to="/contact" className="sn-cta__btn sn-cta__btn--secondary">
// //                 Contact School
// //               </Link>
// //             </div>

// //             <div className="sn-cta__footer">
// //               <span>
// //                 <FaMapMarkerAlt /> Bangalore, India
// //               </span>
// //               <span>
// //                 <FaPhone /> +91 98765 43210
// //               </span>
// //               <span>
// //                 <FaEnvelope /> info@snga.edu.in
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default News;

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

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
//   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
//   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   community: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1600&q=80",
//   achievements: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=1600&q=80",
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
//   // FETCH NEWS - UPDATED to use getNews()
//   // =====================================================

//   useEffect(() => {
//     const loadNews = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // ✅ FIXED: Use getNews() instead of getNews()
//         const response = await newsService.getNews();

//         // Handle different response structures
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

//               <div className="sn-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sn-hero__stat">
//                     <span className="sn-hero__stat-icon">{stat.icon}</span>
//                     <span className="sn-hero__stat-number">{stat.number}</span>
//                     <span className="sn-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>

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
//                 <button className="sn-hero__btn-secondary">
//                   <FaPlay />
//                   <span>Watch Highlights</span>
//                 </button>
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
//                 <div className="sn-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div>
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


import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaTimes,
  FaNewspaper,
  FaTag,
  FaCalendarAlt,
  FaEye,
  FaHeart,
  FaShare,
  FaClock,
  FaUsers,
  FaSchool,
  FaTrophy,
  FaStar,
  FaAward,
  FaHands,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaQuoteLeft,
  FaPenFancy,
  FaPlay,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBookOpen,
  FaUser,
} from "react-icons/fa";
import newsService from "../services/news.service";
import "./News.css";

// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
  heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
  ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
  community: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1600&q=80",
  achievements: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=1600&q=80",
};

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState("");

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const directoryRef = useRef(null);
  const communityRef = useRef(null);
  const achievementsRef = useRef(null);
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
      { ref: heroRef, className: "sn-hero--visible" },
      { ref: introRef, className: "sn-intro--visible" },
      { ref: directoryRef, className: "sn-directory--visible" },
      { ref: communityRef, className: "sn-community--visible" },
      { ref: achievementsRef, className: "sn-achievements--visible" },
      { ref: galleryRef, className: "sn-gallery--visible" },
      { ref: ctaRef, className: "sn-cta--visible" },
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
  // FETCH NEWS - Using getNews() public method
  // =====================================================

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        setError("");

        // ✅ Use the public getNews() method
        const response = await newsService.getNews();

        // Handle different response structures
        // The response might be { success: true, data: [...] } or just [...]
        const items = Array.isArray(response)
          ? response
          : response?.data || response?.news || [];

        setNews(items);
      } catch (err) {
        console.error("Failed to load news:", err);
        setError("Unable to load the latest news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  // =====================================================
  // COMPUTED VALUES
  // =====================================================

  const categories = useMemo(() => {
    const values = news.map((item) => item.category).filter(Boolean);
    return ["All", ...new Set(values)];
  }, [news]);

  const filteredNews = useMemo(() => {
    if (activeCategory === "All") {
      return news;
    }
    return news.filter((item) => item.category === activeCategory);
  }, [news, activeCategory]);

  const featuredNews = filteredNews[0];
  const remainingNews = filteredNews.slice(1);

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

  const getReadingTime = (content) => {
    if (!content) return "3 min read";
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // =====================================================
  // DATA
  // =====================================================

  const stats = [
    { number: news.length || "50+", label: "Stories Published", icon: <FaNewspaper /> },
    { number: "25+", label: "Events Covered", icon: <FaCalendarAlt /> },
    { number: "10+", label: "Awards Won", icon: <FaTrophy /> },
    { number: "1000+", label: "Community Members", icon: <FaUsers /> },
  ];

  const categoriesData = [
    { name: "School Events", icon: <FaCalendarAlt />, color: "#4A90D9" },
    { name: "Student Achievements", icon: <FaTrophy />, color: "#27AE60" },
    { name: "Community Stories", icon: <FaUsers />, color: "#E67E22" },
    { name: "School Updates", icon: <FaNewspaper />, color: "#E74C3C" },
    { name: "Celebrations", icon: <FaStar />, color: "#9B59B6" },
  ];

  return (
    <main className="sn-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sn-topbar">
        <div className="sn-container">
          <div className="sn-topbar__content">
            <span className="sn-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sn-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sn-hero">
        <div className="sn-hero__bg-wrapper">
          <div 
            className="sn-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sn-hero__bg-overlay" />
          <div className="sn-hero__bg-gradient" />
        </div>

        <div className="sn-container">
          <div className="sn-hero__inner">
            <div className="sn-hero__content">
              <div className="sn-hero__badge">
                <FaNewspaper />
                NEWS & EVENTS
              </div>

              <h1 className="sn-hero__title">
                Life at SNGA,
                <br />
                <span className="sn-hero__highlight">In Motion.</span>
              </h1>

              <p className="sn-hero__desc">
                Discover the latest stories, events, achievements and moments
                from the Shifan Noor Global Academy community.
              </p>

              {/* <div className="sn-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sn-hero__stat">
                    <span className="sn-hero__stat-icon">{stat.icon}</span>
                    <span className="sn-hero__stat-number">{stat.number}</span>
                    <span className="sn-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}

              <div className="sn-hero__actions">
                <button 
                  className="sn-hero__btn-primary"
                  onClick={() => {
                    directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Read Stories</span>
                  <FaArrowRight />
                </button>
                {/* <button className="sn-hero__btn-secondary">
                  <FaPlay />
                  <span>Watch Highlights</span>
                </button> */}
              </div>
            </div>

            <div className="sn-hero__image-wrapper">
              <div className="sn-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA School" 
                  className="sn-hero__image-img"
                />
                <div className="sn-hero__image-ring" />
                <div className="sn-hero__image-badge">
                  <span>Since 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sn-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sn-intro">
        <div className="sn-container">
          <div className="sn-intro__inner">
            <div className="sn-intro__header">
              <span className="sn-intro__label">SCHOOL LIFE</span>
              <h2 className="sn-intro__title">
                Every Day Brings
                <span className="sn-intro__highlight">Something New.</span>
              </h2>
            </div>

            <div className="sn-intro__content">
              <p>
                School life is made up of learning, activities, achievements,
                celebrations and the everyday experiences that students share
                together.
              </p>
              <p>
                Follow the latest updates from SNGA and stay connected with
                what's happening across our school community.
              </p>
            </div>

            <div className="sn-intro__categories">
              {categoriesData.map((cat, index) => (
                <div 
                  key={index} 
                  className="sn-intro__category"
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
          DIRECTORY - News Grid
      ================================================= */}
      <section ref={directoryRef} className="sn-directory">
        <div className="sn-container">
          <div className="sn-directory__header">
            <div>
              <span className="sn-directory__label">LATEST UPDATES</span>
              <h2 className="sn-directory__title">
                What's Happening
                <span className="sn-directory__highlight">At SNGA.</span>
              </h2>
            </div>
            <p className="sn-directory__desc">
              Explore the latest school news, events, announcements and
              community stories.
            </p>
          </div>

          {/* Filters */}
          {!loading && categories.length > 1 && (
            <div className="sn-directory__filters">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`sn-directory__filter ${
                    activeCategory === category ? "sn-directory__filter--active" : ""
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
            <div className="sn-directory__state">
              <div className="sn-directory__loader">
                <span />
                <span />
                <span />
              </div>
              <span>Loading stories...</span>
            </div>
          )}

          {!loading && error && (
            <div className="sn-directory__state sn-directory__state--error">
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && filteredNews.length === 0 && (
            <div className="sn-directory__state sn-directory__state--empty">
              <div className="sn-directory__empty-icon">
                <FaNewspaper />
              </div>
              <h3>No Stories Yet</h3>
              <p>New updates will appear here. School news and events can be published from the administration panel.</p>
            </div>
          )}

          {/* Featured News */}
          {!loading && !error && featuredNews && (
            <div className="sn-directory__featured">
              <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-image">
                {featuredNews.featuredImage ? (
                  <img
                    src={getImageUrl(featuredNews.featuredImage)}
                    alt={featuredNews.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="sn-directory__featured-placeholder">
                    <FaNewspaper />
                  </div>
                )}
                <div className="sn-directory__featured-overlay">
                  <span className="sn-directory__featured-badge">Featured</span>
                </div>
                <span className="sn-directory__featured-number">01</span>
              </Link>

              <div className="sn-directory__featured-content">
                <div className="sn-directory__featured-meta">
                  {featuredNews.category && (
                    <span className="sn-directory__featured-category">
                      <FaTag />
                      {featuredNews.category}
                    </span>
                  )}
                  {featuredNews.publishedAt && (
                    <time className="sn-directory__featured-date">
                      <FaCalendarAlt />
                      {formatDate(featuredNews.publishedAt)}
                    </time>
                  )}
                  <span className="sn-directory__featured-read-time">
                    <FaClock />
                    {getReadingTime(featuredNews.content)}
                  </span>
                </div>

                <h3 className="sn-directory__featured-title">{featuredNews.title}</h3>

                {featuredNews.excerpt && (
                  <p className="sn-directory__featured-desc">{featuredNews.excerpt}</p>
                )}

                <div className="sn-directory__featured-footer">
                  {featuredNews.authorName && (
                    <div className="sn-directory__featured-author">
                      <FaUser />
                      By {featuredNews.authorName}
                    </div>
                  )}
                  <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-link">
                    <span>Read Story</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          {!loading && !error && remainingNews.length > 0 && (
            <div className="sn-directory__grid">
              {remainingNews.map((item, index) => {
                const itemId = item.id || item._id;
                return (
                  <div key={itemId} className="sn-directory__card">
                    <Link to={`/news/${item.slug}`} className="sn-directory__card-image">
                      {item.featuredImage ? (
                        <img
                          src={getImageUrl(item.featuredImage)}
                          alt={item.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="sn-directory__card-placeholder">
                          <FaNewspaper />
                        </div>
                      )}
                      <div className="sn-directory__card-overlay">
                        <span className="sn-directory__card-read-time">
                          <FaClock />
                          {getReadingTime(item.content)}
                        </span>
                      </div>
                      <span className="sn-directory__card-number">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </Link>

                    <div className="sn-directory__card-content">
                      <div className="sn-directory__card-meta">
                        {item.category && (
                          <span className="sn-directory__card-category">
                            {item.category}
                          </span>
                        )}
                        {item.publishedAt && (
                          <time className="sn-directory__card-date">
                            <FaCalendarAlt />
                            {formatDate(item.publishedAt)}
                          </time>
                        )}
                      </div>

                      <h3 className="sn-directory__card-title">{item.title}</h3>

                      {item.excerpt && (
                        <p className="sn-directory__card-desc">{item.excerpt}</p>
                      )}

                      <div className="sn-directory__card-footer">
                        {item.authorName && (
                          <div className="sn-directory__card-author">
                            <FaUser />
                            {item.authorName}
                          </div>
                        )}
                        <Link to={`/news/${item.slug}`} className="sn-directory__card-link">
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
          COMMUNITY SECTION - With Background Image
      ================================================= */}
      <section ref={communityRef} className="sn-community">
        <div className="sn-community__bg-wrapper">
          <div 
            className="sn-community__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.community})` }}
          />
          <div className="sn-community__bg-overlay" />
        </div>

        <div className="sn-container">
          <div className="sn-community__inner">
            <div className="sn-community__content">
              <span className="sn-community__label">THE SNGA COMMUNITY</span>
              <h2 className="sn-community__title">
                More Than
                <br />
                <span className="sn-community__highlight">School News.</span>
              </h2>
            </div>

            <div className="sn-community__right">
              <div className="sn-community__quote">
                <FaQuoteLeft />
              </div>
              <p className="sn-community__desc">
                The stories of a school are found in its classrooms, activities,
                competitions, celebrations and the achievements of its students.
              </p>
              <p className="sn-community__desc">
                Our news section brings these moments together so families and
                the wider community can stay connected with life at SNGA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ACHIEVEMENTS SECTION - With Background Image
      ================================================= */}
      <section ref={achievementsRef} className="sn-achievements">
        <div className="sn-achievements__bg-wrapper">
          <div 
            className="sn-achievements__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.achievements})` }}
          />
          <div className="sn-achievements__bg-overlay" />
        </div>

        <div className="sn-container">
          <div className="sn-achievements__inner">
            <div className="sn-achievements__content">
              <span className="sn-achievements__label">STUDENT ACHIEVEMENTS</span>
              <h2 className="sn-achievements__title">
                Celebrate Every
                <br />
                <span className="sn-achievements__highlight">Milestone.</span>
              </h2>
              <p className="sn-achievements__desc">
                From academic accomplishments to sports and other achievements,
                every milestone represents effort, growth and determination.
              </p>
              <Link to="/achievements" className="sn-achievements__link">
                <span>View All Achievements</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sn-achievements__stats">
              {stats.map((stat, index) => (
                <div key={index} className="sn-achievements__stat">
                  <span className="sn-achievements__stat-icon">{stat.icon}</span>
                  <span className="sn-achievements__stat-number">{stat.number}</span>
                  <span className="sn-achievements__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          GALLERY SECTION
      ================================================= */}
      <section ref={galleryRef} className="sn-gallery">
        <div className="sn-container">
          <div className="sn-gallery__inner">
            <div className="sn-gallery__content">
              <span className="sn-gallery__label">MOMENTS</span>
              <h2 className="sn-gallery__title">
                See School Life
                <br />
                <span className="sn-gallery__highlight">In Pictures.</span>
              </h2>
            </div>

            <div className="sn-gallery__right">
              <p className="sn-gallery__desc">
                Explore the people, activities and experiences that make
                everyday life at SNGA memorable.
              </p>
              <Link to="/gallery" className="sn-gallery__link">
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
      <section ref={ctaRef} className="sn-cta">
        <div className="sn-cta__bg-wrapper">
          <div 
            className="sn-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sn-cta__bg-overlay" />
          <div className="sn-cta__bg-gradient" />
        </div>

        <div className="sn-container">
          <div className="sn-cta__content">
            <div className="sn-cta__badge">
              <FaSchool />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>
            <h2 className="sn-cta__title">
              Keep Up With
              <br />
              <span className="sn-cta__highlight">SNGA.</span>
            </h2>
            <p className="sn-cta__desc">
              Explore our latest stories and discover what's happening across
              the school community.
            </p>

            <div className="sn-cta__actions">
              <Link to="/gallery" className="sn-cta__btn sn-cta__btn--primary">
                <span>Explore Gallery</span>
                <FaArrowRight />
              </Link>
              <Link to="/contact" className="sn-cta__btn sn-cta__btn--secondary">
                Contact School
              </Link>
            </div>

            <div className="sn-cta__footer">
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

export default News;