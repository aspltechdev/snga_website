// import { useEffect, useMemo, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaTimes,
//   FaTrophy,
//   FaAward,
//   FaStar,
//   FaMedal,
//   FaGraduationCap,
//   FaUsers,
//   FaCalendarAlt,
//   FaTag,
//   FaEye,
//   FaHeart,
//   FaShare,
//   FaSchool,
//   FaPlay,
//   FaQuoteLeft,
//   FaRocket,
//   FaCrown,
//   FaCertificate,
//   FaClipboardCheck,
// } from "react-icons/fa";
// import achievementService from "../services/achievement.service";
// import "./Achievements.css";

// import heroBg from "../assets/school.JPG";
// import heroCircle from "../assets/about.png";
// import ctaBg from "../assets/engaging.jpg";
// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   achievement1: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=800&q=80",
//   achievement2: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
//   achievement3: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//   achievement4: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
//   achievement5: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
//   achievement6: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
// };

// const Achievements = () => {
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedAchievement, setSelectedAchievement] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [error, setError] = useState("");

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const directoryRef = useRef(null);
//   const statsRef = useRef(null);
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
//       { ref: heroRef, className: "sa-hero--visible" },
//       { ref: introRef, className: "sa-intro--visible" },
//       { ref: directoryRef, className: "sa-directory--visible" },
//       { ref: statsRef, className: "sa-stats--visible" },
//       { ref: ctaRef, className: "sa-cta--visible" },
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
//   // FETCH ACHIEVEMENTS
//   // =====================================================

//   useEffect(() => {
//     const loadAchievements = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // ✅ Use the public getPublishedAchievements method
//         const response = await achievementService.getPublishedAchievements();

//         // Handle different response structures
//         const items = Array.isArray(response)
//           ? response
//           : response?.data || response?.achievements || [];

//         setAchievements(items);
//       } catch (err) {
//         console.error("Failed to load achievements:", err);
//         setError("Unable to load achievements. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAchievements();
//   }, []);

//   // =====================================================
//   // COMPUTED VALUES
//   // =====================================================

//   const categories = useMemo(() => {
//     const values = achievements
//       .map((item) => item.category)
//       .filter(Boolean);

//     return ["All", ...new Set(values)];
//   }, [achievements]);

//   const filteredAchievements = useMemo(() => {
//     if (activeCategory === "All") {
//       return achievements;
//     }
//     return achievements.filter((item) => item.category === activeCategory);
//   }, [achievements, activeCategory]);

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

//   const openAchievement = (item) => {
//     setSelectedAchievement(item);
//     document.body.style.overflow = "hidden";
//   };

//   const closeAchievement = () => {
//     setSelectedAchievement(null);
//     setSelectedImage(null);
//     document.body.style.overflow = "";
//   };

//   const openImage = (image) => {
//     setSelectedImage(image);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   // =====================================================
//   // DATA
//   // =====================================================

//   const stats = [
//     { number: achievements.length || "50+", label: "Achievements", icon: <FaTrophy /> },
//     { number: "10+", label: "Categories", icon: <FaTag /> },
//     { number: "25+", label: "Awards Won", icon: <FaAward /> },
//     { number: "100+", label: "Students Recognized", icon: <FaUsers /> },
//   ];

//   return (
//     <main className="sa-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sa-topbar">
//         <div className="sa-container">
//           <div className="sa-topbar__content">
//             <span className="sa-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sa-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sa-hero">
//         <div className="sa-hero__bg-wrapper">
//           <div 
//             className="sa-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sa-hero__bg-overlay" />
//           <div className="sa-hero__bg-gradient" />
//         </div>

//         <div className="sa-container">
//           <div className="sa-hero__inner">
//             <div className="sa-hero__content">
//               <div className="sa-hero__badge">
//                 <FaTrophy />
//                 ACHIEVEMENTS
//               </div>

//               <h1 className="sa-hero__title">
//                 Celebrating
//                 <br />
//                 <span className="sa-hero__highlight">Excellence.</span>
//               </h1>

//               <p className="sa-hero__desc">
//                 Discover the remarkable achievements of our students, faculty
//                 and the entire SNGA community.
//               </p>

//               {/* <div className="sa-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sa-hero__stat">
//                     <span className="sa-hero__stat-icon">{stat.icon}</span>
//                     <span className="sa-hero__stat-number">{stat.number}</span>
//                     <span className="sa-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div> */}

//               {/* <div className="sa-hero__actions">
//                 <a href="#sa-directory" className="sa-hero__btn sa-hero__btn--primary">
//                   <span>Explore Achievements</span>
//                   <FaArrowRight />
//                 </a>
//                 <button className="sa-hero__btn sa-hero__btn--secondary">
//                   <FaPlay />
//                   <span>Watch Highlights</span>
//                 </button>
//               </div> */}
//             </div>

//             <div className="sa-hero__image-wrapper">
//               <div className="sa-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA Achievements" 
//                   className="sa-hero__image-img"
//                 />
//                 <div className="sa-hero__image-ring" />
//                 {/* <div className="sa-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sa-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sa-intro">
//         <div className="sa-container">
//           <div className="sa-intro__inner">
//             <div className="sa-intro__header">
//               <span className="sa-intro__label">OUR ACHIEVEMENTS</span>
//               <h2 className="sa-intro__title">
//                 Every Success
//                 <span className="sa-intro__highlight">Tells a Story.</span>
//               </h2>
//             </div>

//             <div className="sa-intro__content">
//               <p>
//                 At Shifan Noor Global Academy, we take pride in the achievements
//                 of our students, faculty and the entire school community.
//                 From academic excellence to sports, arts and beyond, every
//                 success reflects dedication, hard work and the values we instill.
//               </p>
//               <p>
//                 Explore the milestones that make SNGA a place of excellence
//                 and inspiration.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           DIRECTORY - Achievements Grid
//       ================================================= */}
//       <section ref={directoryRef} className="sa-directory" id="sa-directory">
//         <div className="sa-container">
//           <div className="sa-directory__header">
//             <div>
//               <span className="sa-directory__label">ACHIEVEMENTS</span>
//               <h2 className="sa-directory__title">
//                 Our <span className="sa-directory__highlight">Proud Moments.</span>
//               </h2>
//             </div>
//             <p className="sa-directory__desc">
//               Browse through our collection of achievements across various fields.
//             </p>
//           </div>

//           {/* Filters */}
//           {!loading && categories.length > 1 && (
//             <div className="sa-directory__filters">
//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={`sa-directory__filter ${
//                     activeCategory === category ? "sa-directory__filter--active" : ""
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
//             <div className="sa-directory__state">
//               <div className="sa-directory__loader">
//                 <span />
//                 <span />
//                 <span />
//               </div>
//               <span>Loading achievements...</span>
//             </div>
//           )}

//           {!loading && error && (
//             <div className="sa-directory__state sa-directory__state--error">
//               <span>{error}</span>
//             </div>
//           )}

//           {!loading && !error && filteredAchievements.length === 0 && (
//             <div className="sa-directory__state sa-directory__state--empty">
//               <div className="sa-directory__empty-icon">
//                 <FaTrophy />
//               </div>
//               <h3>No Achievements Yet</h3>
//               <p>New achievements will appear here. Achievements can be published from the administration panel.</p>
//             </div>
//           )}

//           {/* Achievement Grid */}
//           {!loading && !error && filteredAchievements.length > 0 && (
//             <div className="sa-directory__grid">
//               {filteredAchievements.map((item, index) => {
//                 const itemId = item.id || item._id;
//                 const image = item.featuredImage || item.image;

//                 return (
//                   <div key={itemId} className="sa-directory__card">
//                     <button
//                       type="button"
//                       className="sa-directory__card-image"
//                       onClick={() => openAchievement(item)}
//                     >
//                       {image ? (
//                         <img
//                           src={getImageUrl(image)}
//                           alt={item.title}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="sa-directory__card-placeholder">
//                           <FaTrophy />
//                         </div>
//                       )}
//                       <div className="sa-directory__card-overlay">
//                         <span className="sa-directory__card-badge">
//                           {item.category || "Achievement"}
//                         </span>
//                         <span className="sa-directory__card-icon">
//                           <FaTrophy />
//                         </span>
//                       </div>
//                     </button>

//                     <div className="sa-directory__card-content">
//                       <div className="sa-directory__card-meta">
//                         {item.category && (
//                           <span className="sa-directory__card-category">
//                             <FaTag />
//                             {item.category}
//                           </span>
//                         )}
//                         {item.date && (
//                           <span className="sa-directory__card-date">
//                             <FaCalendarAlt />
//                             {formatDate(item.date)}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="sa-directory__card-title">{item.title}</h3>

//                       {item.excerpt && (
//                         <p className="sa-directory__card-desc">{item.excerpt}</p>
//                       )}

//                       <button
//                         type="button"
//                         className="sa-directory__card-link"
//                         onClick={() => openAchievement(item)}
//                       >
//                         <span>View Achievement</span>
//                         <FaArrowRight />
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =================================================
//           STATS SECTION - Navy Background
//       ================================================= */}
//       <section ref={statsRef} className="sa-stats">
//         <div className="sa-stats__bg" />

//         <div className="sa-container">
//           <div className="sa-stats__inner">
//             <div className="sa-stats__header">
//               <span className="sa-stats__label">BY THE NUMBERS</span>
//               <h2 className="sa-stats__title">
//                 Impact That
//                 <br />
//                 <span className="sa-stats__highlight">Inspires.</span>
//               </h2>
//             </div>

//             <div className="sa-stats__grid">
//               <div className="sa-stats__card">
//                 <div className="sa-stats__card-icon">
//                   <FaTrophy />
//                 </div>
//                 <span className="sa-stats__card-number">50+</span>
//                 <span className="sa-stats__card-label">Achievements</span>
//               </div>
//               <div className="sa-stats__card">
//                 <div className="sa-stats__card-icon">
//                   <FaAward />
//                 </div>
//                 <span className="sa-stats__card-number">25+</span>
//                 <span className="sa-stats__card-label">Awards Won</span>
//               </div>
//               <div className="sa-stats__card">
//                 <div className="sa-stats__card-icon">
//                   <FaUsers />
//                 </div>
//                 <span className="sa-stats__card-number">100+</span>
//                 <span className="sa-stats__card-label">Students Recognized</span>
//               </div>
//               <div className="sa-stats__card">
//                 <div className="sa-stats__card-icon">
//                   <FaGraduationCap />
//                 </div>
//                 <span className="sa-stats__card-number">10+</span>
//                 <span className="sa-stats__card-label">Years of Excellence</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sa-cta">
//         <div className="sa-cta__bg-wrapper">
//           <div 
//             className="sa-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sa-cta__bg-overlay" />
//           <div className="sa-cta__bg-gradient" />
//         </div>

//         <div className="sa-container">
//           <div className="sa-cta__content">
//             <div className="sa-cta__badge">
//               <FaTrophy />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sa-cta__title">
//               Be Part of
//               <br />
//               <span className="sa-cta__highlight">Our Success Story.</span>
//             </h2>

//             <p className="sa-cta__desc">
//               Join us in celebrating excellence and creating more success
//               stories at SNGA.
//             </p>

//             <div className="sa-cta__actions">
//               <Link to="/admissions" className="sa-cta__btn sa-cta__btn--primary">
//                 <span>Join SNGA</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/gallery" className="sa-cta__btn sa-cta__btn--secondary">
//                 <span>View Gallery</span>
//               </Link>
//             </div>

//             <div className="sa-cta__footer">
//               <span>
//                 <FaTrophy /> Excellence
//               </span>
//               <span>
//                 <FaAward /> Achievements
//               </span>
//               <span>
//                 <FaStar /> Inspiration
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           ACHIEVEMENT MODAL
//       ================================================= */}
//       {selectedAchievement && (
//         <div
//           className="sa-modal"
//           role="dialog"
//           aria-modal="true"
//           aria-label={selectedAchievement.title}
//           onClick={(event) => {
//             if (event.target === event.currentTarget) {
//               closeAchievement();
//             }
//           }}
//         >
//           <div className="sa-modal__inner">
//             <div className="sa-modal__header">
//               <div>
//                 <span className="sa-modal__category">
//                   {selectedAchievement.category || "ACHIEVEMENT"}
//                 </span>
//                 <h2 className="sa-modal__title">{selectedAchievement.title}</h2>
//                 {selectedAchievement.date && (
//                   <span className="sa-modal__date">
//                     <FaCalendarAlt />
//                     {formatDate(selectedAchievement.date)}
//                   </span>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="sa-modal__close"
//                 onClick={closeAchievement}
//                 aria-label="Close achievement"
//               >
//                 <FaTimes />
//               </button>
//             </div>

//             <div className="sa-modal__body">
//               <div className="sa-modal__content">
//                 {selectedAchievement.content ? (
//                   <div 
//                     className="sa-modal__text"
//                     dangerouslySetInnerHTML={{ __html: selectedAchievement.content }}
//                   />
//                 ) : selectedAchievement.description ? (
//                   <p>{selectedAchievement.description}</p>
//                 ) : (
//                   <p>No additional details available.</p>
//                 )}
//               </div>

//               {selectedAchievement.images && selectedAchievement.images.length > 0 && (
//                 <div className="sa-modal__gallery">
//                   <h4>Gallery</h4>
//                   <div className="sa-modal__grid">
//                     {selectedAchievement.images.map((image, index) => (
//                       <button
//                         type="button"
//                         className="sa-modal__image"
//                         key={index}
//                         onClick={() => openImage(image)}
//                       >
//                         <img
//                           src={getImageUrl(image.imageUrl || image)}
//                           alt={image.caption || selectedAchievement.title}
//                           loading="lazy"
//                         />
//                         <div className="sa-modal__image-overlay">
//                           <FaEye />
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =================================================
//           SINGLE IMAGE LIGHTBOX
//       ================================================= */}
//       {selectedImage && (
//         <div
//           className="sa-lightbox"
//           role="dialog"
//           aria-modal="true"
//           onClick={(event) => {
//             if (event.target === event.currentTarget) {
//               closeImage();
//             }
//           }}
//         >
//           <button
//             type="button"
//             className="sa-lightbox__close"
//             onClick={closeImage}
//             aria-label="Close image"
//           >
//             <FaTimes />
//           </button>

//           <img
//             src={getImageUrl(selectedImage.imageUrl || selectedImage)}
//             alt={selectedImage.caption || "Achievement image"}
//             className="sa-lightbox__image"
//           />

//           {selectedImage.caption && (
//             <div className="sa-lightbox__caption">{selectedImage.caption}</div>
//           )}
//         </div>
//       )}
//     </main>
//   );
// };

// export default Achievements;








































// import { useEffect, useMemo, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaTimes,
//   FaTrophy,
//   FaAward,
//   FaStar,
//   FaMedal,
//   FaGraduationCap,
//   FaUsers,
//   FaCalendarAlt,
//   FaTag,
//   FaEye,
//   FaHeart,
//   FaShare,
//   FaSchool,
//   FaPlay,
//   FaQuoteLeft,
//   FaRocket,
//   FaCrown,
//   FaCertificate,
//   FaClipboardCheck,
// } from "react-icons/fa";
// import achievementService from "../services/achievement.service";
// import "./Achievements.css";

// // =====================================================
// // IMPORT LOCAL IMAGES
// // =====================================================
// import heroBg from "../assets/school.JPG";
// import heroCircle from "../assets/about.png";
// import ctaBg from "../assets/engaging.jpg";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   achievement1: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=800&q=80",
//   achievement2: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
//   achievement3: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//   achievement4: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
//   achievement5: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
//   achievement6: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
// };

// const Achievements = () => {
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedAchievement, setSelectedAchievement] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [error, setError] = useState("");

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const directoryRef = useRef(null);
//   const statsRef = useRef(null);
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
//       { ref: heroRef, className: "sa-hero--visible" },
//       { ref: introRef, className: "sa-intro--visible" },
//       { ref: directoryRef, className: "sa-directory--visible" },
//       { ref: statsRef, className: "sa-stats--visible" },
//       { ref: ctaRef, className: "sa-cta--visible" },
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
//   // FETCH ACHIEVEMENTS - ✅ UPDATED with getPublished()
//   // =====================================================

//   useEffect(() => {
//     let mounted = true;

//     const loadAchievements = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // ✅ CORRECT: Using getPublished() method
//         const data = await achievementService.getPublished();

//         if (mounted) {
//           // Handle different response structures
//           const items = Array.isArray(data)
//             ? data
//             : data?.data || data?.achievements || [];
          
//           setAchievements(items);
//         }
//       } catch (error) {
//         console.error("Failed to load achievements:", error);
//         if (mounted) {
//           setError("Unable to load achievements. Please try again later.");
//           setAchievements([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadAchievements();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // =====================================================
//   // COMPUTED VALUES
//   // =====================================================

//   const categories = useMemo(() => {
//     const values = achievements
//       .map((item) => item.category)
//       .filter(Boolean);

//     return ["All", ...new Set(values)];
//   }, [achievements]);

//   const filteredAchievements = useMemo(() => {
//     if (activeCategory === "All") {
//       return achievements;
//     }
//     return achievements.filter((item) => item.category === activeCategory);
//   }, [achievements, activeCategory]);

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

//   const openAchievement = (item) => {
//     setSelectedAchievement(item);
//     document.body.style.overflow = "hidden";
//   };

//   const closeAchievement = () => {
//     setSelectedAchievement(null);
//     setSelectedImage(null);
//     document.body.style.overflow = "";
//   };

//   const openImage = (image) => {
//     setSelectedImage(image);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   // =====================================================
//   // DATA
//   // =====================================================

//   const stats = [
//     { number: achievements.length || "50+", label: "Achievements", icon: <FaTrophy /> },
//     { number: "10+", label: "Categories", icon: <FaTag /> },
//     { number: "25+", label: "Awards Won", icon: <FaAward /> },
//     { number: "100+", label: "Students Recognized", icon: <FaUsers /> },
//   ];

//   return (
//     <main className="sa-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sa-topbar">
//         <div className="sa-container">
//           <div className="sa-topbar__content">
//             <span className="sa-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sa-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sa-hero">
//         <div className="sa-hero__bg-wrapper">
//           <div 
//             className="sa-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sa-hero__bg-overlay" />
//           <div className="sa-hero__bg-gradient" />
//         </div>

//         <div className="sa-container">
//           <div className="sa-hero__inner">
//             <div className="sa-hero__content">
//               <div className="sa-hero__badge">
//                 <FaTrophy />
//                 ACHIEVEMENTS
//               </div>

//               <h1 className="sa-hero__title">
//                 Celebrating
//                 <br />
//                 <span className="sa-hero__highlight">Excellence.</span>
//               </h1>

//               <p className="sa-hero__desc">
//                 Discover the remarkable achievements of our students, faculty
//                 and the entire SNGA community.
//               </p>
//             </div>

//             <div className="sa-hero__image-wrapper">
//               <div className="sa-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA Achievements" 
//                   className="sa-hero__image-img"
//                 />
//                 <div className="sa-hero__image-ring" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sa-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sa-intro">
//         <div className="sa-container">
//           <div className="sa-intro__inner">
//             <div className="sa-intro__header">
//               <span className="sa-intro__label">OUR ACHIEVEMENTS</span>
//               <h2 className="sa-intro__title">
//                 Every Success
//                 <span className="sa-intro__highlight">Tells a Story.</span>
//               </h2>
//             </div>

//             <div className="sa-intro__content">
//               <p>
//                 At Shifan Noor Global Academy, we take pride in the achievements
//                 of our students, faculty and the entire school community.
//                 From academic excellence to sports, arts and beyond, every
//                 success reflects dedication, hard work and the values we instill.
//               </p>
//               <p>
//                 Explore the milestones that make SNGA a place of excellence
//                 and inspiration.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           DIRECTORY - Achievements Grid
//       ================================================= */}
//       <section ref={directoryRef} className="sa-directory" id="sa-directory">
//         <div className="sa-container">
//           <div className="sa-directory__header">
//             <div>
//               <span className="sa-directory__label">ACHIEVEMENTS</span>
//               <h2 className="sa-directory__title">
//                 Our <span className="sa-directory__highlight">Proud Moments.</span>
//               </h2>
//             </div>
//             <p className="sa-directory__desc">
//               Browse through our collection of achievements across various fields.
//             </p>
//           </div>

//           {/* Filters */}
//           {!loading && categories.length > 1 && (
//             <div className="sa-directory__filters">
//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={`sa-directory__filter ${
//                     activeCategory === category ? "sa-directory__filter--active" : ""
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
//             <div className="sa-directory__state">
//               <div className="sa-directory__loader">
//                 <span />
//                 <span />
//                 <span />
//               </div>
//               <span>Loading achievements...</span>
//             </div>
//           )}

//           {!loading && error && (
//             <div className="sa-directory__state sa-directory__state--error">
//               <span>{error}</span>
//             </div>
//           )}

//           {!loading && !error && filteredAchievements.length === 0 && (
//             <div className="sa-directory__state sa-directory__state--empty">
//               <div className="sa-directory__empty-icon">
//                 <FaTrophy />
//               </div>
//               <h3>No Achievements Yet</h3>
//               <p>New achievements will appear here. Achievements can be published from the administration panel.</p>
//             </div>
//           )}

//           {/* Achievement Grid */}
//           {!loading && !error && filteredAchievements.length > 0 && (
//             <div className="sa-directory__grid">
//               {filteredAchievements.map((item, index) => {
//                 const itemId = item.id || item._id;
//                 const image = item.featuredImage || item.image;

//                 return (
//                   <div key={itemId} className="sa-directory__card">
//                     <button
//                       type="button"
//                       className="sa-directory__card-image"
//                       onClick={() => openAchievement(item)}
//                     >
//                       {image ? (
//                         <img
//                           src={getImageUrl(image)}
//                           alt={item.title}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="sa-directory__card-placeholder">
//                           <FaTrophy />
//                         </div>
//                       )}
//                       <div className="sa-directory__card-overlay">
//                         <span className="sa-directory__card-badge">
//                           {item.category || "Achievement"}
//                         </span>
//                         <span className="sa-directory__card-icon">
//                           <FaTrophy />
//                         </span>
//                       </div>
//                     </button>

//                     <div className="sa-directory__card-content">
//                       <div className="sa-directory__card-meta">
//                         {item.category && (
//                           <span className="sa-directory__card-category">
//                             <FaTag />
//                             {item.category}
//                           </span>
//                         )}
//                         {item.date && (
//                           <span className="sa-directory__card-date">
//                             <FaCalendarAlt />
//                             {formatDate(item.date)}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="sa-directory__card-title">{item.title}</h3>

//                       {item.excerpt && (
//                         <p className="sa-directory__card-desc">{item.excerpt}</p>
//                       )}

//                       <button
//                         type="button"
//                         className="sa-directory__card-link"
//                         onClick={() => openAchievement(item)}
//                       >
//                         <span>View Achievement</span>
//                         <FaArrowRight />
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =================================================
//           STATS SECTION - Navy Background
//       ================================================= */}
//       <section ref={statsRef} className="sa-stats">
//         <div className="sa-stats__bg" />

//         <div className="sa-container">
//           <div className="sa-stats__inner">
//             <div className="sa-stats__header">
//               <span className="sa-stats__label">BY THE NUMBERS</span>
//               <h2 className="sa-stats__title">
//                 Impact That
//                 <br />
//                 <span className="sa-stats__highlight">Inspires.</span>
//               </h2>
//             </div>

//             <div className="sa-stats__grid">
//               <div className="sa-stats__card">
//                 <div className="sa-stats__card-icon">
//                   <FaTrophy />
//                 </div>
//                 <span className="sa-stats__card-number">50+</span>
//                 <span className="sa-stats__card-label">Achievements</span>
//               </div>
//               <div className="sa-stats__card">
//                 <div className="sa-stats__card-icon">
//                   <FaAward />
//                 </div>
//                 <span className="sa-stats__card-number">25+</span>
//                 <span className="sa-stats__card-label">Awards Won</span>
//               </div>
//               <div className="sa-stats__card">
//                 <div className="sa-stats__card-icon">
//                   <FaUsers />
//                 </div>
//                 <span className="sa-stats__card-number">100+</span>
//                 <span className="sa-stats__card-label">Students Recognized</span>
//               </div>
//               <div className="sa-stats__card">
//                 <div className="sa-stats__card-icon">
//                   <FaGraduationCap />
//                 </div>
//                 <span className="sa-stats__card-number">10+</span>
//                 <span className="sa-stats__card-label">Years of Excellence</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sa-cta">
//         <div className="sa-cta__bg-wrapper">
//           <div 
//             className="sa-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sa-cta__bg-overlay" />
//           <div className="sa-cta__bg-gradient" />
//         </div>

//         <div className="sa-container">
//           <div className="sa-cta__content">
//             <div className="sa-cta__badge">
//               <FaTrophy />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sa-cta__title">
//               Be Part of
//               <br />
//               <span className="sa-cta__highlight">Our Success Story.</span>
//             </h2>

//             <p className="sa-cta__desc">
//               Join us in celebrating excellence and creating more success
//               stories at SNGA.
//             </p>

//             <div className="sa-cta__actions">
//               <Link to="/admissions" className="sa-cta__btn sa-cta__btn--primary">
//                 <span>Join SNGA</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/gallery" className="sa-cta__btn sa-cta__btn--secondary">
//                 <span>View Gallery</span>
//               </Link>
//             </div>

//             <div className="sa-cta__footer">
//               <span>
//                 <FaTrophy /> Excellence
//               </span>
//               <span>
//                 <FaAward /> Achievements
//               </span>
//               <span>
//                 <FaStar /> Inspiration
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           ACHIEVEMENT MODAL
//       ================================================= */}
//       {selectedAchievement && (
//         <div
//           className="sa-modal"
//           role="dialog"
//           aria-modal="true"
//           aria-label={selectedAchievement.title}
//           onClick={(event) => {
//             if (event.target === event.currentTarget) {
//               closeAchievement();
//             }
//           }}
//         >
//           <div className="sa-modal__inner">
//             <div className="sa-modal__header">
//               <div>
//                 <span className="sa-modal__category">
//                   {selectedAchievement.category || "ACHIEVEMENT"}
//                 </span>
//                 <h2 className="sa-modal__title">{selectedAchievement.title}</h2>
//                 {selectedAchievement.date && (
//                   <span className="sa-modal__date">
//                     <FaCalendarAlt />
//                     {formatDate(selectedAchievement.date)}
//                   </span>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="sa-modal__close"
//                 onClick={closeAchievement}
//                 aria-label="Close achievement"
//               >
//                 <FaTimes />
//               </button>
//             </div>

//             <div className="sa-modal__body">
//               <div className="sa-modal__content">
//                 {selectedAchievement.content ? (
//                   <div 
//                     className="sa-modal__text"
//                     dangerouslySetInnerHTML={{ __html: selectedAchievement.content }}
//                   />
//                 ) : selectedAchievement.description ? (
//                   <p>{selectedAchievement.description}</p>
//                 ) : (
//                   <p>No additional details available.</p>
//                 )}
//               </div>

//               {selectedAchievement.images && selectedAchievement.images.length > 0 && (
//                 <div className="sa-modal__gallery">
//                   <h4>Gallery</h4>
//                   <div className="sa-modal__grid">
//                     {selectedAchievement.images.map((image, index) => (
//                       <button
//                         type="button"
//                         className="sa-modal__image"
//                         key={index}
//                         onClick={() => openImage(image)}
//                       >
//                         <img
//                           src={getImageUrl(image.imageUrl || image)}
//                           alt={image.caption || selectedAchievement.title}
//                           loading="lazy"
//                         />
//                         <div className="sa-modal__image-overlay">
//                           <FaEye />
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =================================================
//           SINGLE IMAGE LIGHTBOX
//       ================================================= */}
//       {selectedImage && (
//         <div
//           className="sa-lightbox"
//           role="dialog"
//           aria-modal="true"
//           onClick={(event) => {
//             if (event.target === event.currentTarget) {
//               closeImage();
//             }
//           }}
//         >
//           <button
//             type="button"
//             className="sa-lightbox__close"
//             onClick={closeImage}
//             aria-label="Close image"
//           >
//             <FaTimes />
//           </button>

//           <img
//             src={getImageUrl(selectedImage.imageUrl || selectedImage)}
//             alt={selectedImage.caption || "Achievement image"}
//             className="sa-lightbox__image"
//           />

//           {selectedImage.caption && (
//             <div className="sa-lightbox__caption">{selectedImage.caption}</div>
//           )}
//         </div>
//       )}
//     </main>
//   );
// };

// export default Achievements;


import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import achievementService from "../services/achievement.service";
import "./Achievements.css";

import schoolImage from "../assets/school.JPG";
import aboutImage from "../assets/about.png";
import engagingImage from "../assets/engaging.jpg";
import sportsImage from "../assets/sports.JPG";
import artsImage from "../assets/arts.jpg";
import valuesImage from "../assets/values.jpg";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const FALLBACK_IMAGES = [
  sportsImage,
  artsImage,
  schoolImage,
  engagingImage,
  valuesImage,
  aboutImage,
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

const getAchievementImage = (item, index = 0) => {
  if (!item) {
    return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  }

  const image = item.image || item.featuredImage;

  if (!image) {
    return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  }

  return getImageUrl(image);
};

const getAchievementImages = (item) => {
  if (!item?.images || !Array.isArray(item.images)) {
    return [];
  }

  return item.images
    .map((image) => {
      if (typeof image === "string") {
        return {
          imageUrl: image,
          caption: "",
        };
      }

      return {
        imageUrl:
          image?.imageUrl ||
          image?.url ||
          image?.image ||
          "",
        caption: image?.caption || "",
      };
    })
    .filter((image) => image.imageUrl);
};

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAchievement, setSelectedAchievement] =
    useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const archiveRef = useRef(null);
  const philosophyRef = useRef(null);
  const ctaRef = useRef(null);

  /* =====================================================
     LOAD ACHIEVEMENTS
  ===================================================== */

  useEffect(() => {
    let mounted = true;

    const loadAchievements = async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await achievementService.getPublished();

        const data = Array.isArray(response)
          ? response
          : response?.data ||
            response?.achievements ||
            [];

        if (mounted) {
          setAchievements(
            Array.isArray(data)
              ? data.filter(
                  (item) => item?.isPublished !== false
                )
              : []
          );
        }
      } catch (err) {
        console.error(
          "Failed to load achievements:",
          err
        );

        if (mounted) {
          setAchievements([]);
          setError(
            "The achievements archive could not be loaded right now."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadAchievements();

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
      archiveRef,
      philosophyRef,
      ctaRef,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "achievements-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
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
     KEYBOARD
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedAchievement(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =====================================================
     BODY LOCK
  ===================================================== */

  useEffect(() => {
    const modalOpen =
      selectedAchievement || selectedImage;

    document.body.style.overflow = modalOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAchievement, selectedImage]);

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = useMemo(() => {
    const values = achievements
      .map((item) => item?.category)
      .filter(Boolean)
      .map((value) => String(value).trim())
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [achievements]);

  const filteredAchievements = useMemo(() => {
    if (activeCategory === "All") {
      return achievements;
    }

    return achievements.filter(
      (item) =>
        String(item?.category || "").trim() ===
        activeCategory
    );
  }, [achievements, activeCategory]);

  /* =====================================================
     FEATURED
  ===================================================== */

  const featuredAchievement =
    filteredAchievements[0] || null;

  const archiveAchievements =
    filteredAchievements.slice(
      featuredAchievement ? 1 : 0
    );

  /* =====================================================
     ACTIONS
  ===================================================== */

  const openAchievement = (item) => {
    setSelectedAchievement(item);
  };

  const closeAchievement = () => {
    setSelectedAchievement(null);
    setSelectedImage(null);
  };

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <main className="achievements-page">
      {/* =================================================
          HERO
      ================================================= */}

      <section
        ref={heroRef}
        className="achievements-hero"
      >
        <div className="achievements-hero-image">
          <img
            src={schoolImage}
            alt="Shifan Noor Global Academy"
          />
        </div>

        <div className="achievements-hero-overlay" />

        <div className="achievements-container achievements-hero-inner">
          <div className="achievements-hero-top">
            <span>
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <span>
              VENKULAM · RAMANATHAPURAM
            </span>
          </div>

          <div className="achievements-hero-content">
            <span className="achievements-eyebrow">
              THE HONOURS ARCHIVE
            </span>

            <h1>
              Moments of
              <br />
              <em>achievement.</em>
            </h1>

            <p>
              A record of the effort, curiosity,
              discipline and determination behind
              the accomplishments of the SNGA
              community.
            </p>
          </div>

          <div className="achievements-hero-bottom">
            <span>01</span>

            <div />

            <span>
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>
      </section>

      {/* =================================================
          INTRO
      ================================================= */}

      <section
        ref={introRef}
        className="achievements-intro"
      >
        <div className="achievements-container">
          <div className="achievements-intro-grid">
            <div>
              <span className="achievements-section-label">
                OUR JOURNEY
              </span>

              <h2>
                Achievement is
                <br />
                more than a
                <br />
                <em>result.</em>
              </h2>
            </div>

            <div className="achievements-intro-copy">
              <p className="achievements-intro-lead">
                Every achievement begins long before
                recognition arrives.
              </p>

              <p>
                It begins with a student deciding to
                try, a teacher encouraging the next
                step, a family supporting the journey
                and a community creating space for
                growth.
              </p>

              <p>
                This archive celebrates those moments —
                across academics, sport, creativity
                and the many ways our students
                contribute and excel.
              </p>

              <div className="achievements-intro-rule" />

              <div className="achievements-intro-meta">
                <span>
                  KNOWLEDGE
                </span>

                <span>
                  SKILLS
                </span>

                <span>
                  VALUES
                </span>

                <span>
                  CONFIDENCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FEATURED ACHIEVEMENT
      ================================================= */}

      {!loading &&
        !error &&
        featuredAchievement && (
          <section className="achievements-feature">
            <div className="achievements-container">
              <div className="achievements-feature-heading">
                <div>
                  <span className="achievements-section-label">
                    FEATURED MOMENT
                  </span>

                  <h2>
                    A moment worth
                    <br />
                    <em>remembering.</em>
                  </h2>
                </div>

                <span className="achievements-feature-number">
                  02
                </span>
              </div>

              <div className="achievements-feature-grid">
                <button
                  type="button"
                  className="achievements-feature-image"
                  onClick={() =>
                    openAchievement(
                      featuredAchievement
                    )
                  }
                >
                  <img
                    src={getAchievementImage(
                      featuredAchievement,
                      0
                    )}
                    alt={
                      featuredAchievement.title ||
                      "SNGA achievement"
                    }
                    onError={(event) => {
                      event.currentTarget.onerror =
                        null;
                      event.currentTarget.src =
                        schoolImage;
                    }}
                  />

                  <span>
                    VIEW ACHIEVEMENT
                  </span>
                </button>

                <div className="achievements-feature-content">
                  <div className="achievements-feature-meta">
                    <span>
                      {featuredAchievement.category ||
                        "ACHIEVEMENT"}
                    </span>

                    {featuredAchievement.achievementDate && (
                      <span>
                        {formatDate(
                          featuredAchievement.achievementDate
                        )}
                      </span>
                    )}
                  </div>

                  <h3>
                    {featuredAchievement.title}
                  </h3>

                  {featuredAchievement.studentName && (
                    <div className="achievements-feature-student">
                      <span>
                        STUDENT
                      </span>

                      <strong>
                        {
                          featuredAchievement.studentName
                        }
                      </strong>
                    </div>
                  )}

                  {featuredAchievement.description && (
                    <p>
                      {
                        featuredAchievement.description
                      }
                    </p>
                  )}

                  <button
                    type="button"
                    className="achievements-open-link"
                    onClick={() =>
                      openAchievement(
                        featuredAchievement
                      )
                    }
                  >
                    <span>
                      Read the full achievement
                    </span>

                    <strong>→</strong>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* =================================================
          ARCHIVE
      ================================================= */}

      <section
        ref={archiveRef}
        className="achievements-archive"
        id="achievements-archive"
      >
        <div className="achievements-container">
          <div className="achievements-archive-header">
            <div>
              <span className="achievements-section-label">
                THE ARCHIVE
              </span>

              <h2>
                A record of
                <br />
                <em>what was accomplished.</em>
              </h2>
            </div>

            <div className="achievements-archive-count">
              <strong>
                {String(
                  filteredAchievements.length
                ).padStart(2, "0")}
              </strong>

              <span>
                published
                <br />
                achievements
              </span>
            </div>
          </div>

          {/* FILTERS */}

          {!loading &&
            categories.length > 1 && (
              <div className="achievements-filters">
                {categories.map(
                  (category, index) => (
                    <button
                      type="button"
                      key={category}
                      className={
                        activeCategory ===
                        category
                          ? "achievements-filter achievements-filter-active"
                          : "achievements-filter"
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
            <div className="achievements-state">
              <div className="achievements-loader" />

              <p>
                Opening the archive...
              </p>
            </div>
          )}

          {/* ERROR */}

          {!loading && error && (
            <div className="achievements-state achievements-state-error">
              <span>
                ARCHIVE NOTICE
              </span>

              <h3>
                The archive is temporarily
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
            filteredAchievements.length === 0 && (
              <div className="achievements-state achievements-state-empty">
                <span>
                  THE ARCHIVE
                </span>

                <h3>
                  New achievements will appear here.
                </h3>

                <p>
                  Published achievements from the
                  administration panel will be
                  displayed in this archive.
                </p>
              </div>
            )}

          {/* LIST */}

          {!loading &&
            !error &&
            archiveAchievements.length > 0 && (
              <div className="achievements-list">
                {archiveAchievements.map(
                  (item, index) => {
                    const images =
                      getAchievementImages(item);

                    return (
                      <article
                        key={
                          item.id ||
                          item._id ||
                          index
                        }
                        className="achievement-row"
                      >
                        <div className="achievement-row-number">
                          {String(
                            index + 2
                          ).padStart(2, "0")}
                        </div>

                        <button
                          type="button"
                          className="achievement-row-image"
                          onClick={() =>
                            openAchievement(
                              item
                            )
                          }
                        >
                          <img
                            src={getAchievementImage(
                              item,
                              index + 1
                            )}
                            alt={
                              item.title ||
                              "Achievement"
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
                        </button>

                        <div className="achievement-row-content">
                          <div className="achievement-row-meta">
                            <span>
                              {item.category ||
                                "ACHIEVEMENT"}
                            </span>

                            {item.achievementDate && (
                              <span>
                                {formatDate(
                                  item.achievementDate
                                )}
                              </span>
                            )}
                          </div>

                          <h3>
                            {item.title}
                          </h3>

                          {item.studentName && (
                            <div className="achievement-row-student">
                              <span>
                                STUDENT
                              </span>

                              <strong>
                                {
                                  item.studentName
                                }
                              </strong>
                            </div>
                          )}

                          {item.description && (
                            <p>
                              {
                                item.description
                              }
                            </p>
                          )}

                          <button
                            type="button"
                            className="achievement-row-link"
                            onClick={() =>
                              openAchievement(
                                item
                              )
                            }
                          >
                            <span>
                              View achievement
                            </span>

                            <strong>
                              →
                            </strong>
                          </button>
                        </div>

                        <div className="achievement-row-images">
                          {images.length > 0 && (
                            <span>
                              {String(
                                images.length
                              ).padStart(
                                2,
                                "0"
                              )}{" "}
                              images
                            </span>
                          )}
                        </div>
                      </article>
                    );
                  }
                )}
              </div>
            )}
        </div>
      </section>

      {/* =================================================
          PHILOSOPHY
      ================================================= */}

      <section
        ref={philosophyRef}
        className="achievements-philosophy"
      >
        <div className="achievements-container">
          <div className="achievements-philosophy-grid">
            <span>
              03
            </span>

            <div>
              <h2>
                Every achievement
                <br />
                begins with the
                <br />
                <em>decision to try.</em>
              </h2>

              <div className="achievements-philosophy-rule" />

              <p>
                At SNGA, achievement is connected to
                the larger purpose of education:
                developing knowledge, practical skills,
                healthy attitudes, values and the
                confidence to face new challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FOUR DIMENSIONS
      ================================================= */}

      <section className="achievements-dimensions">
        <div className="achievements-container">
          <div className="achievements-dimensions-heading">
            <span className="achievements-section-label">
              WHAT WE CELEBRATE
            </span>

            <h2>
              Excellence has
              <br />
              <em>many forms.</em>
            </h2>
          </div>

          <div className="achievements-dimensions-grid">
            <article>
              <span>
                01
              </span>

              <h3>
                Academic
              </h3>

              <p>
                Progress, understanding, application
                and the pursuit of academic excellence.
              </p>
            </article>

            <article>
              <span>
                02
              </span>

              <h3>
                Sport
              </h3>

              <p>
                Discipline, participation, teamwork
                and the courage to compete.
              </p>
            </article>

            <article>
              <span>
                03
              </span>

              <h3>
                Creativity
              </h3>

              <p>
                Expression, imagination and the freedom
                to explore new ideas.
              </p>
            </article>

            <article>
              <span>
                04
              </span>

              <h3>
                Character
              </h3>

              <p>
                Responsibility, values, confidence and
                meaningful contribution to others.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =================================================
          CAMPUS IMAGE STRIP
      ================================================= */}

      <section className="achievements-image-story">
        <div className="achievements-image-story-main">
          <img
            src={engagingImage}
            alt="Students learning at SNGA"
            loading="lazy"
          />
        </div>

        <div className="achievements-image-story-side">
          <img
            src={sportsImage}
            alt="Sports at SNGA"
            loading="lazy"
          />

          <div>
            <span>
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <p>
              Learning continues beyond the
              classroom.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          CTA
      ================================================= */}

      <section
        ref={ctaRef}
        className="achievements-cta"
      >
        <div className="achievements-cta-image">
          <img
            src={schoolImage}
            alt="Shifan Noor Global Academy campus"
            loading="lazy"
          />
        </div>

        <div className="achievements-cta-overlay" />

        <div className="achievements-container achievements-cta-container">
          <div className="achievements-cta-content">
            <span className="achievements-eyebrow">
              THE NEXT CHAPTER
            </span>

            <h2>
              Every journey has
              <br />
              a moment when
              <br />
              <em>it begins.</em>
            </h2>

            <p>
              Discover an environment where students
              are encouraged to learn deeply, participate
              fully and grow with confidence.
            </p>

            <div className="achievements-cta-actions">
              <Link
                to="/admissions"
                className="achievements-cta-primary"
              >
                Admission Enquiry
              </Link>

              <Link
                to="/gallery"
                className="achievements-cta-secondary"
              >
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ACHIEVEMENT MODAL
      ================================================= */}

      {selectedAchievement && (
        <div
          className="achievement-modal"
          role="dialog"
          aria-modal="true"
          aria-label={
            selectedAchievement.title
          }
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeAchievement();
            }
          }}
        >
          <div className="achievement-modal-inner">
            <div className="achievement-modal-header">
              <div>
                <span>
                  {selectedAchievement.category ||
                    "ACHIEVEMENT"}
                </span>

                <h2>
                  {
                    selectedAchievement.title
                  }
                </h2>

                {selectedAchievement.achievementDate && (
                  <p>
                    {formatDate(
                      selectedAchievement.achievementDate
                    )}
                  </p>
                )}
              </div>

              <button
                type="button"
                className="achievement-modal-close"
                onClick={
                  closeAchievement
                }
              >
                Close
              </button>
            </div>

            {selectedAchievement.studentName && (
              <div className="achievement-modal-student">
                <span>
                  STUDENT
                </span>

                <strong>
                  {
                    selectedAchievement.studentName
                  }
                </strong>
              </div>
            )}

            <div className="achievement-modal-body">
              <div className="achievement-modal-copy">
                {selectedAchievement.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        selectedAchievement.content,
                    }}
                  />
                ) : selectedAchievement.description ? (
                  <p>
                    {
                      selectedAchievement.description
                    }
                  </p>
                ) : (
                  <p>
                    No additional details are
                    available for this achievement.
                  </p>
                )}
              </div>

              {getAchievementImages(
                selectedAchievement
              ).length > 0 && (
                <div className="achievement-modal-gallery">
                  <div className="achievement-modal-gallery-heading">
                    <span>
                      VISUAL RECORD
                    </span>

                    <strong>
                      {
                        getAchievementImages(
                          selectedAchievement
                        ).length
                      }{" "}
                      images
                    </strong>
                  </div>

                  <div className="achievement-modal-images">
                    {getAchievementImages(
                      selectedAchievement
                    ).map(
                      (image, index) => (
                        <button
                          type="button"
                          key={`${image.imageUrl}-${index}`}
                          onClick={() =>
                            openImage(
                              image
                            )
                          }
                        >
                          <img
                            src={getImageUrl(
                              image.imageUrl
                            )}
                            alt={
                              image.caption ||
                              selectedAchievement.title
                            }
                            loading="lazy"
                          />

                          <span>
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          LIGHTBOX
      ================================================= */}

      {selectedImage && (
        <div
          className="achievement-lightbox"
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeImage();
            }
          }}
        >
          <button
            type="button"
            className="achievement-lightbox-close"
            onClick={closeImage}
          >
            Close
          </button>

          <div className="achievement-lightbox-content">
            <img
              src={getImageUrl(
                selectedImage.imageUrl ||
                  selectedImage
              )}
              alt={
                selectedImage.caption ||
                "Achievement"
              }
            />

            {selectedImage.caption && (
              <p>
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Achievements;