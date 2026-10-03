
// import { useEffect, useMemo, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaTimes,
//   FaCamera,
//   FaImages,
//   FaTag,
//   FaCalendarAlt,
//   FaEye,
//   FaPlay,
//   FaChevronRight,
//   FaInstagram,
//   FaYoutube,
//   FaFacebook,
//   FaSchool,
//   FaUsers,
//   FaTrophy,
//   FaBookOpen,
//   FaStar,
//   FaAward,
//   FaHands,
//   FaHeart,
//   FaChild,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaRunning,
//   FaPaintBrush,
//   FaMusic,
//   FaTree,
//   FaQuoteLeft,
//   FaClock,
//   FaMapMarkerAlt,
//   FaPhone, // ✅ Added missing import
//   FaEnvelope, // ✅ Added for email
// } from "react-icons/fa";
// import galleryService from "../services/gallery.service";
// import "./Gallery.css";

// import heroBg from "../assets/school.JPG";
// import heroCircle from "../assets/about.png";
// import ctaBg from "../assets/engaging.jpg";
// import Academics from "../assets/teaching.jpg";
// import sports from "../assets/sports.JPG";
// import arts from "../assets/arts.jpg";
// import nature from "../assets/camp.jpg";
// import value from "../assets/values.jpg";
// import community from "../assets/about-school.jpg";
// import campus1 from "../assets/camp.jpg";
// import campus2 from "../assets/campus.jpg";
// import campus3 from "../assets/school.JPG";
// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   academics: Academics,
//   sports: sports,
//   arts: arts,
//   nature: nature,
//   values: value,
//   community: community,
//   campus1: campus1,
//   campus2: campus2,
//   campus3: campus3,
// };

// const Gallery = () => {
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [error, setError] = useState("");

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const directoryRef = useRef(null);
//   const campusRef = useRef(null);
//   const lifeRef = useRef(null);
//   const newsRef = useRef(null);
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
//       { ref: heroRef, className: "sg-hero--visible" },
//       { ref: introRef, className: "sg-intro--visible" },
//       { ref: directoryRef, className: "sg-directory--visible" },
//       { ref: campusRef, className: "sg-campus--visible" },
//       { ref: lifeRef, className: "sg-life--visible" },
//       { ref: newsRef, className: "sg-news--visible" },
//       { ref: ctaRef, className: "sg-cta--visible" },
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
//   // FETCH GALLERY
//   // =====================================================

//   useEffect(() => {
//     const loadAlbums = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await galleryService.getPublishedAlbums();

//         const items = Array.isArray(response)
//           ? response
//           : response?.data ||
//             response?.albums ||
//             response?.gallery ||
//             [];

//         setAlbums(items);
//       } catch (err) {
//         console.error("Failed to load gallery:", err);
//         setError("Unable to load the gallery. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAlbums();
//   }, []);

//   // =====================================================
//   // COMPUTED VALUES
//   // =====================================================

//   const categories = useMemo(() => {
//     const values = albums
//       .map((album) => album.category)
//       .filter(Boolean);

//     return ["All", ...new Set(values)];
//   }, [albums]);

//   const filteredAlbums = useMemo(() => {
//     if (activeCategory === "All") {
//       return albums;
//     }
//     return albums.filter((album) => album.category === activeCategory);
//   }, [albums, activeCategory]);

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

//   const getAlbumImages = (album) => {
//     if (!album?.images) return [];
//     return Array.isArray(album.images) ? album.images : [];
//   };

//   const openAlbum = (album) => {
//     setSelectedAlbum(album);
//     document.body.style.overflow = "hidden";
//   };

//   const closeAlbum = () => {
//     setSelectedAlbum(null);
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
//     { number: "500+", label: "Students", icon: <FaUsers /> },
//     { number: "50+", label: "Teachers", icon: <FaChalkboardTeacher /> },
//     { number: "15+", label: "Activities", icon: <FaStar /> },
//     { number: "100%", label: "Results", icon: <FaTrophy /> },
//   ];

//   const featuredAlbums = [
//     { 
//       title: "Annual Day Celebration", 
//       category: "Events",
//       image: IMAGES.campus1,
//       date: "Dec 2024",
//       count: 45
//     },
//     { 
//       title: "Sports Day 2024", 
//       category: "Sports",
//       image: IMAGES.sports,
//       date: "Nov 2024",
//       count: 32
//     },
//     { 
//       title: "Art Exhibition", 
//       category: "Arts",
//       image: IMAGES.arts,
//       date: "Oct 2024",
//       count: 28
//     },
//   ];

//   const lifeItems = [
//     {
//       icon: <FaChalkboardTeacher />,
//       title: "Academic Excellence",
//       description: "Interactive classrooms with modern teaching methodologies for holistic learning.",
//       image: IMAGES.academics,
//       color: "#4A90D9",
//     },
//     {
//       icon: <FaRunning />,
//       title: "Sports & Fitness",
//       description: "State-of-the-art sports facilities for cricket, football, basketball and more.",
//       image: IMAGES.sports,
//       color: "#27AE60",
//     },
//     {
//       icon: <FaPaintBrush />,
//       title: "Creative Arts",
//       description: "Art, music, dance and drama to nurture creativity and self-expression.",
//       image: IMAGES.arts,
//       color: "#E67E22",
//     },
//     {
//       icon: <FaTree />,
//       title: "Nature & Environment",
//       description: "Green campus with gardens and environmental awareness programs.",
//       image: IMAGES.nature,
//       color: "#2ECC71",
//     },
//     {
//       icon: <FaHeart />,
//       title: "Values & Culture",
//       description: "Building character through Indian values, traditions and cultural celebrations.",
//       image: IMAGES.values,
//       color: "#E74C3C",
//     },
//     {
//       icon: <FaHands />,
//       title: "Community Service",
//       description: "Developing empathy and social responsibility through community initiatives.",
//       image: IMAGES.community,
//       color: "#9B59B6",
//     },
//   ];

//   return (
//     <main className="sg-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sg-topbar">
//         <div className="sg-container">
//           <div className="sg-topbar__content">
//             <span className="sg-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sg-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sg-hero">
//         <div className="sg-hero__bg-wrapper">
//           <div 
//             className="sg-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sg-hero__bg-overlay" />
//           <div className="sg-hero__bg-gradient" />
//         </div>

//         <div className="sg-container">
//           <div className="sg-hero__inner">
//             <div className="sg-hero__content">
//               <div className="sg-hero__badge">
//                 <FaCamera />
//                 OUR GALLERY
//               </div>

//               <h1 className="sg-hero__title">
//                 Capturing
//                 <br />
//                 <span className="sg-hero__highlight">School Life</span>
//               </h1>

//               <p className="sg-hero__desc">
//                 Welcome to the heart of SNGA! Explore the vibrant moments that 
//                 make our school a home away from home.
//               </p>

//               <div className="sg-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sg-hero__stat">
//                     <span className="sg-hero__stat-icon">{stat.icon}</span>
//                     <span className="sg-hero__stat-number">{stat.number}</span>
//                     <span className="sg-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
// {/* 
//               <div className="sg-hero__actions">
//                 <button 
//                   className="sg-hero__btn-primary"
//                   onClick={() => {
//                     directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                 >
//                   <span>Explore Moments</span>
//                   <FaArrowRight />
//                 </button>
//                 <button className="sg-hero__btn-secondary">
//                   <FaPlay />
//                   <span>Watch Story</span>
//                 </button>
//               </div> */}
//             </div>

//             <div className="sg-hero__image-wrapper">
//               <div className="sg-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA School" 
//                   className="sg-hero__image-img"
//                 />
//                 <div className="sg-hero__image-ring" />
//                 {/* <div className="sg-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sg-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sg-intro">
//         <div className="sg-container">
//           <div className="sg-intro__inner">
//             <div className="sg-intro__header">
//               <span className="sg-intro__label">OUR STORY</span>
//               <h2 className="sg-intro__title">
//                 Every Picture Tells a
//                 <span className="sg-intro__highlight">Story of Growth</span>
//               </h2>
//             </div>

//             <div className="sg-intro__content">
//               <p>
//                 At Shifan Noor Global Academy, we believe that every moment matters. 
//                 From the first bell in the morning to the last goodbye in the evening, 
//                 our campus buzzes with the energy of young minds discovering, learning, 
//                 and growing together.
//               </p>
//               <p>
//                 Our gallery is a window into this beautiful journey - showcasing the 
//                 smiles, the achievements, the friendships, and the countless memories 
//                 that make school life truly special.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FEATURED ALBUMS - Horizontal Scroll Cards
//       ================================================= */}
//       {/* <section className="sg-featured">
//         <div className="sg-container">
//           <div className="sg-featured__header">
//             <div>
//               <span className="sg-featured__label">FEATURED</span>
//               <h2 className="sg-featured__title">
//                 Latest <span className="sg-featured__highlight">Moments</span>
//               </h2>
//             </div>
//             <Link to="/gallery" className="sg-featured__view-all">
//               View All <FaArrowRight />
//             </Link>
//           </div>

//           <div className="sg-featured__scroll">
//             {featuredAlbums.map((album, index) => (
//               <div key={index} className="sg-featured__card">
//                 <div className="sg-featured__card-image">
//                   <img src={album.image} alt={album.title} loading="lazy" />
//                   <div className="sg-featured__card-overlay">
//                     <span className="sg-featured__card-category">{album.category}</span>
//                     <span className="sg-featured__card-count">
//                       <FaImages /> {album.count} photos
//                     </span>
//                   </div>
//                 </div>
//                 <div className="sg-featured__card-content">
//                   <h3>{album.title}</h3>
//                   <span><FaCalendarAlt /> {album.date}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* =================================================
//           DIRECTORY - Gallery Grid
//       ================================================= */}
//       <section ref={directoryRef} className="sg-directory">
//         <div className="sg-container">
//           <div className="sg-directory__header">
//             <div>
//               <span className="sg-directory__label">GALLERY</span>
//               <h2 className="sg-directory__title">
//                 Our <span className="sg-directory__highlight">School Moments</span>
//               </h2>
//             </div>
//             <p className="sg-directory__desc">
//               Browse through our collection of memorable moments from various school activities.
//             </p>
//           </div>

//           {/* Filters */}
//           {!loading && categories.length > 1 && (
//             <div className="sg-directory__filters">
//               <button
//                 type="button"
//                 className={`sg-directory__filter ${activeCategory === "All" ? "sg-directory__filter--active" : ""}`}
//                 onClick={() => setActiveCategory("All")}
//               >
//                 All
//               </button>
//               {categories.filter(c => c !== "All").map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={`sg-directory__filter ${
//                     activeCategory === category ? "sg-directory__filter--active" : ""
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
//             <div className="sg-directory__state">
//               <div className="sg-directory__loader">
//                 <span />
//                 <span />
//                 <span />
//               </div>
//               <span>Loading memories...</span>
//             </div>
//           )}

//           {!loading && error && (
//             <div className="sg-directory__state sg-directory__state--error">
//               <span>{error}</span>
//             </div>
//           )}

//           {!loading && !error && filteredAlbums.length === 0 && (
//             <div className="sg-directory__state sg-directory__state--empty">
//               <div className="sg-directory__empty-icon">
//                 <FaImages />
//               </div>
//               <h3>No Memories Yet</h3>
//               <p>Check back soon for new photos from our school activities.</p>
//             </div>
//           )}

//           {/* Album Grid */}
//           {!loading && !error && filteredAlbums.length > 0 && (
//             <div className="sg-directory__grid">
//               {filteredAlbums.map((album, index) => {
//                 const images = getAlbumImages(album);
//                 const coverImage = album.coverImage || (images.length > 0 ? images[0].imageUrl : null);

//                 return (
//                   <div key={album.id || album._id} className="sg-directory__card">
//                     <button
//                       type="button"
//                       className="sg-directory__card-image"
//                       onClick={() => openAlbum(album)}
//                     >
//                       {coverImage ? (
//                         <img
//                           src={getImageUrl(coverImage)}
//                           alt={album.name}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="sg-directory__card-placeholder">
//                           <FaImages />
//                         </div>
//                       )}
//                       <div className="sg-directory__card-overlay">
//                         <span className="sg-directory__card-count">
//                           <FaImages />
//                           {images.length} photos
//                         </span>
//                       </div>
//                     </button>

//                     <div className="sg-directory__card-content">
//                       <div className="sg-directory__card-meta">
//                         {album.category && (
//                           <span className="sg-directory__card-category">
//                             {album.category}
//                           </span>
//                         )}
//                         {album.date && (
//                           <span className="sg-directory__card-date">
//                             <FaCalendarAlt />
//                             {new Date(album.date).toLocaleDateString('en-IN', { 
//                               day: 'numeric', 
//                               month: 'short', 
//                               year: 'numeric' 
//                             })}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="sg-directory__card-title">{album.name}</h3>

//                       {album.description && (
//                         <p className="sg-directory__card-desc">{album.description}</p>
//                       )}

//                       <button
//                         type="button"
//                         className="sg-directory__card-link"
//                         onClick={() => openAlbum(album)}
//                       >
//                         <span>View Album</span>
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
//           CAMPUS LIFE - School Highlights
//       ================================================= */}
//       <section ref={campusRef} className="sg-campus">
//         <div className="sg-campus__bg" />

//         <div className="sg-container">
//           <div className="sg-campus__inner">
//             <div className="sg-campus__header">
//               <span className="sg-campus__label">CAMPUS LIFE</span>
//               <h2 className="sg-campus__title">
//                 Where <span className="sg-campus__highlight">Learning Comes Alive</span>
//               </h2>
//               <p className="sg-campus__desc">
//                 Our campus is more than just buildings - it's a vibrant community where 
//                 every corner tells a story of learning, friendship, and growth.
//               </p>
//             </div>

//             <div className="sg-campus__grid">
//               <div className="sg-campus__card">
//                 <img src={IMAGES.campus1} alt="Campus" loading="lazy" />
//                 <div className="sg-campus__card-overlay">
//                   <h4>Smart Classrooms</h4>
//                   <p>Interactive learning with modern technology</p>
//                 </div>
//               </div>
//               <div className="sg-campus__card">
//                 <img src={IMAGES.campus2} alt="Campus" loading="lazy" />
//                 <div className="sg-campus__card-overlay">
//                   <h4>Sports Facilities</h4>
//                   <p>Indoor & outdoor games for all-round development</p>
//                 </div>
//               </div>
//               <div className="sg-campus__card">
//                 <img src={IMAGES.campus3} alt="Campus" loading="lazy" />
//                 <div className="sg-campus__card-overlay">
//                   <h4>Green Campus</h4>
//                   <p>Lush gardens and eco-friendly environment</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           SCHOOL LIFE - Activities Grid
//       ================================================= */}
//       <section ref={lifeRef} className="sg-life">
//         <div className="sg-container">
//           <div className="sg-life__header">
//             <div>
//               <span className="sg-life__label">OUR ACTIVITIES</span>
//               <h2 className="sg-life__title">
//                 Beyond the <span className="sg-life__highlight">Classroom</span>
//               </h2>
//             </div>
//             <p className="sg-life__desc">
//               Learning extends beyond textbooks. Explore our diverse activities that shape young minds.
//             </p>
//           </div>

//           <div className="sg-life__grid">
//             {lifeItems.map((item, index) => (
//               <div key={index} className="sg-life__card">
//                 <div className="sg-life__card-image">
//                   <img src={item.image} alt={item.title} loading="lazy" />
//                   <div className="sg-life__card-overlay">
//                     <div className="sg-life__card-icon" style={{ background: item.color + '20', color: item.color }}>
//                       {item.icon}
//                     </div>
//                     <h3 className="sg-life__card-title">{item.title}</h3>
//                     <p className="sg-life__card-desc">{item.description}</p>
//                     <span className="sg-life__card-arrow">
//                       <FaArrowRight />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           SCHOOL NEWS & EVENTS
//       ================================================= */}
//       <section ref={newsRef} className="sg-news">
//         <div className="sg-news__bg" />
//         <div className="sg-news__pattern" />

//         <div className="sg-container">
//           <div className="sg-news__inner">
//             <div className="sg-news__content">
//               <span className="sg-news__label">STAY CONNECTED</span>
//               <h2 className="sg-news__title">
//                 Latest <span className="sg-news__highlight">News & Events</span>
//               </h2>
//               <p className="sg-news__desc">
//                 Stay updated with the latest happenings at SNGA. From academic achievements 
//                 to cultural celebrations, there's always something exciting happening.
//               </p>
//               <Link to="/news" className="sg-news__link">
//                 <span>View All Updates</span>
//                 <FaArrowRight />
//               </Link>
//             </div>

//             <div className="sg-news__features">
//               <div className="sg-news__feature">
//                 <FaTrophy />
//                 <span>Achievements</span>
//               </div>
//               <div className="sg-news__feature">
//                 <FaCalendarAlt />
//                 <span>Events</span>
//               </div>
//               <div className="sg-news__feature">
//                 <FaUsers />
//                 <span>Community</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sg-cta">
//         <div className="sg-cta__bg-wrapper">
//           <div 
//             className="sg-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sg-cta__bg-overlay" />
//           <div className="sg-cta__bg-gradient" />
//         </div>

//         <div className="sg-container">
//           <div className="sg-cta__content">
//             <div className="sg-cta__badge">
//               <FaSchool />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>
//             <h2 className="sg-cta__title">
//               Be a Part of
//               <br />
//               <span className="sg-cta__highlight">Our Journey</span>
//             </h2>
//             <p className="sg-cta__desc">
//               Join us in creating beautiful memories and building a bright future 
//               for every child. At SNGA, we don't just teach - we inspire.
//             </p>

//             <div className="sg-cta__actions">
//               <Link to="/admissions" className="sg-cta__btn sg-cta__btn--primary">
//                 <span>Admissions Open</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/contact" className="sg-cta__btn sg-cta__btn--secondary">
//                 Visit Campus
//               </Link>
//             </div>

//             <div className="sg-cta__footer">
//               <span>
//                 <FaMapMarkerAlt /> Bangalore, India
//               </span>
//               <span>
//                 <FaClock /> Mon-Sat 8:00 AM - 4:00 PM
//               </span>
//               <span>
//                 <FaPhone /> +91 98765 43210
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           ALBUM MODAL
//       ================================================= */}
//       {selectedAlbum && (
//         <div
//           className="sg-modal"
//           role="dialog"
//           aria-modal="true"
//           aria-label={selectedAlbum.name}
//           onClick={(event) => {
//             if (event.target === event.currentTarget) {
//               closeAlbum();
//             }
//           }}
//         >
//           <div className="sg-modal__inner">
//             <div className="sg-modal__header">
//               <div>
//                 <span className="sg-modal__category">
//                   {selectedAlbum.category || "GALLERY"}
//                 </span>
//                 <h2 className="sg-modal__title">{selectedAlbum.name}</h2>
//                 {selectedAlbum.date && (
//                   <span className="sg-modal__date">
//                     <FaCalendarAlt />
//                     {new Date(selectedAlbum.date).toLocaleDateString('en-IN', { 
//                       day: 'numeric', 
//                       month: 'long', 
//                       year: 'numeric' 
//                     })}
//                   </span>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="sg-modal__close"
//                 onClick={closeAlbum}
//                 aria-label="Close album"
//               >
//                 <FaTimes />
//               </button>
//             </div>

//             {getAlbumImages(selectedAlbum).length > 0 ? (
//               <div className="sg-modal__grid">
//                 {getAlbumImages(selectedAlbum).map((image) => (
//                   <button
//                     type="button"
//                     className="sg-modal__image"
//                     key={image.id || image._id}
//                     onClick={() => openImage(image)}
//                   >
//                     <img
//                       src={getImageUrl(image.imageUrl)}
//                       alt={image.caption || selectedAlbum.name}
//                       loading="lazy"
//                     />
//                     {image.caption && (
//                       <span className="sg-modal__image-caption">{image.caption}</span>
//                     )}
//                     <div className="sg-modal__image-overlay">
//                       <FaEye />
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             ) : (
//               <div className="sg-modal__empty">
//                 <FaImages />
//                 <span>No images in this album</span>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* =================================================
//           SINGLE IMAGE LIGHTBOX
//       ================================================= */}
//       {selectedImage && (
//         <div
//           className="sg-lightbox"
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
//             className="sg-lightbox__close"
//             onClick={closeImage}
//             aria-label="Close image"
//           >
//             <FaTimes />
//           </button>

//           <img
//             src={getImageUrl(selectedImage.imageUrl)}
//             alt={selectedImage.caption || "Gallery image"}
//             className="sg-lightbox__image"
//           />

//           {selectedImage.caption && (
//             <div className="sg-lightbox__caption">{selectedImage.caption}</div>
//           )}
//         </div>
//       )}
//     </main>
//   );
// };

// export default Gallery;


import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import galleryService from "../services/gallery.service";
import "./Gallery.css";

import heroImage from "../assets/school.JPG";
import campusImage from "../assets/camp.jpg";
import campusImage2 from "../assets/camp.jpg";
import classroomImage from "../assets/classroom.jpg";
import academicsImage from "../assets/teaching.jpg";
import sportsImage from "../assets/sports.JPG";
import artsImage from "../assets/arts.jpg";
import natureImage from "../assets/campus.jpg";
import valuesImage from "../assets/values.jpg";
import communityImage from "../assets/about-school.jpg";
import ctaImage from "../assets/engaging.jpg";

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");

  const directoryRef = useRef(null);

  useEffect(() => {
    const loadAlbums = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await galleryService.getPublishedAlbums();

        const items = Array.isArray(response)
          ? response
          : response?.data ||
            response?.albums ||
            response?.gallery ||
            [];

        setAlbums(items);
      } catch (err) {
        console.error("Failed to load gallery:", err);
        setError(
          "Unable to load the gallery. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAlbums();
  }, []);

  const categories = useMemo(() => {
    const values = albums
      .map((album) => album.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [albums]);

  const filteredAlbums = useMemo(() => {
    if (activeCategory === "All") {
      return albums;
    }

    return albums.filter(
      (album) => album.category === activeCategory
    );
  }, [albums, activeCategory]);

  const getImageUrl = (image) => {
    if (!image) return "";

    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    const API_URL =
      import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
      "http://localhost:5000";

    return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
  };

  const getAlbumImages = (album) => {
    if (!album?.images) return [];

    return Array.isArray(album.images)
      ? album.images
      : [];
  };

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setSelectedImage(null);
    document.body.style.overflow = "hidden";
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
          return;
        }

        if (selectedAlbum) {
          closeAlbum();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAlbum, selectedImage]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const visualArchive = [
    {
      number: "01",
      title: "Learning",
      description:
        "Classrooms, ideas, questions and the everyday moments that make learning meaningful.",
      image: classroomImage,
    },
    {
      number: "02",
      title: "Campus life",
      description:
        "A glimpse into the spaces where students spend their days learning, meeting and growing.",
      image: campusImage,
    },
    {
      number: "03",
      title: "Sports",
      description:
        "Movement, participation, teamwork and the spirit of healthy competition.",
      image: sportsImage,
    },
    {
      number: "04",
      title: "Arts & expression",
      description:
        "Creative experiences that give students opportunities to express ideas and imagination.",
      image: artsImage,
    },
  ];

  return (
    <main className="snga-gallery-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="snga-gallery-hero">

        <div className="snga-gallery-hero-image">
          <img
            src={heroImage}
            alt="Shifan Noor Global Academy"
          />
        </div>

        <div className="snga-gallery-hero-overlay" />

        <div className="snga-gallery-container">

          <div className="snga-gallery-hero-content">

            <span className="snga-gallery-eyebrow">
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <div className="snga-gallery-hero-rule" />

            <span className="snga-gallery-location">
              VENKULAM · RAMANATHAPURAM · TAMIL NADU
            </span>

            <h1>
              A year at SNGA,
              <br />
              <em>in frames.</em>
            </h1>

            <p>
              A visual archive of learning, friendship,
              achievement and everyday life across our school.
            </p>

            <a
              href="#gallery-archive"
              className="snga-gallery-hero-link"
            >
              Explore the archive
              <span>→</span>
            </a>

          </div>

          <div className="snga-gallery-hero-index">
            GALLERY
            <span>01</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="snga-gallery-intro">

        <div className="snga-gallery-container">

          <div className="snga-gallery-intro-grid">

            <div className="snga-gallery-section-label">
              THE SCHOOL IN FRAMES
            </div>

            <div>

              <h2>
                Some moments
                <br />
                <em>deserve to be remembered.</em>
              </h2>

              <div className="snga-gallery-intro-copy">

                <p>
                  School life is made up of more than lessons and
                  timetables. It is the conversation before class,
                  the excitement of an event, the concentration of
                  a student at work and the celebration of something
                  achieved together.
                </p>

                <p>
                  This gallery brings those moments together —
                  offering families and students a window into
                  life at Shifan Noor Global Academy.
                </p>

              </div>

            </div>

          </div>

          <div className="snga-gallery-intro-line">

            <span>01</span>

            <p>
              LEARN · PARTICIPATE · DISCOVER · GROW
            </p>

            <span>SNGA</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL ARCHIVE
      ===================================================== */}

      <section className="snga-gallery-archive">

        <div className="snga-gallery-container">

          <div className="snga-gallery-archive-heading">

            <div>

              <span className="snga-gallery-section-label">
                VISUAL ARCHIVE
              </span>

              <h2>
                Life beyond
                <br />
                <em>the classroom.</em>
              </h2>

            </div>

            <p>
              From academic learning to sports and creative
              expression, these are the spaces and experiences
              that shape the wider school journey.
            </p>

          </div>


          <div className="snga-gallery-archive-grid">

            {visualArchive.map((item, index) => (
              <article
                key={item.number}
                className={`snga-gallery-archive-item ${
                  index % 2 === 1
                    ? "snga-gallery-archive-item--reverse"
                    : ""
                }`}
              >

                <div className="snga-gallery-archive-image">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                </div>

                <div className="snga-gallery-archive-copy">

                  <span>{item.number}</span>

                  <h3>{item.title}</h3>

                  <div className="snga-gallery-copy-rule" />

                  <p>{item.description}</p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY ARCHIVE
      ===================================================== */}

      <section
        ref={directoryRef}
        id="gallery-archive"
        className="snga-gallery-directory"
      >

        <div className="snga-gallery-container">

          <div className="snga-gallery-directory-heading">

            <div>

              <span className="snga-gallery-section-label">
                THE ARCHIVE
              </span>

              <h2>
                Explore
                <br />
                <em>school life.</em>
              </h2>

            </div>

            <p>
              Browse published albums and discover moments
              from across the SNGA community.
            </p>

          </div>


          {/* FILTERS */}

          {!loading && categories.length > 1 && (
            <div className="snga-gallery-filters">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "snga-gallery-filter snga-gallery-filter--active"
                      : "snga-gallery-filter"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}

            </div>
          )}


          {/* LOADING */}

          {loading && (
            <div className="snga-gallery-state">

              <div className="snga-gallery-loader">
                <span />
                <span />
                <span />
              </div>

              <p>Loading the archive...</p>

            </div>
          )}


          {/* ERROR */}

          {!loading && error && (
            <div className="snga-gallery-state snga-gallery-state--error">

              <p>{error}</p>

            </div>
          )}


          {/* EMPTY */}

          {!loading &&
            !error &&
            filteredAlbums.length === 0 && (
              <div className="snga-gallery-state snga-gallery-state--empty">

                <span>THE ARCHIVE</span>

                <h3>
                  New memories are
                  <br />
                  <em>on their way.</em>
                </h3>

                <p>
                  Check back soon for photographs
                  from school life and activities.
                </p>

              </div>
            )}


          {/* ALBUM GRID */}

          {!loading &&
            !error &&
            filteredAlbums.length > 0 && (

              <div className="snga-gallery-albums">

                {filteredAlbums.map((album, index) => {

                  const images = getAlbumImages(album);

                  const coverImage =
                    album.coverImage ||
                    (images.length > 0
                      ? images[0].imageUrl
                      : "");

                  return (
                    <article
                      key={album.id || album._id || index}
                      className="snga-gallery-album"
                    >

                      <button
                        type="button"
                        className="snga-gallery-album-image"
                        onClick={() => openAlbum(album)}
                        aria-label={`Open ${album.name}`}
                      >

                        {coverImage ? (
                          <img
                            src={getImageUrl(coverImage)}
                            alt={album.name}
                            loading="lazy"
                          />
                        ) : (
                          <div className="snga-gallery-album-placeholder">
                            <span>SNGA</span>
                          </div>
                        )}

                        <div className="snga-gallery-album-overlay">

                          <span>
                            {images.length}{" "}
                            {images.length === 1
                              ? "IMAGE"
                              : "IMAGES"}
                          </span>

                          <strong>View album →</strong>

                        </div>

                      </button>


                      <div className="snga-gallery-album-content">

                        <div className="snga-gallery-album-meta">

                          <span>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {album.category && (
                            <span>
                              {album.category}
                            </span>
                          )}

                        </div>

                        <h3>{album.name}</h3>

                        {album.description && (
                          <p>{album.description}</p>
                        )}

                        {album.date && (
                          <time>
                            {new Date(
                              album.date
                            ).toLocaleDateString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </time>
                        )}

                        <button
                          type="button"
                          className="snga-gallery-album-link"
                          onClick={() => openAlbum(album)}
                        >
                          Open album
                          <span>→</span>
                        </button>

                      </div>

                    </article>
                  );
                })}

              </div>
            )}

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="snga-gallery-philosophy">

        <div className="snga-gallery-container">

          <div className="snga-gallery-philosophy-grid">

            <span className="snga-gallery-philosophy-number">
              04
            </span>

            <h2>
              The photograph
              <br />
              captures the moment.
              <br />
              <em>The memory keeps it.</em>
            </h2>

            <p>
              Every photograph represents a small part of the
              larger SNGA journey — students learning, taking
              part, discovering new interests and growing
              together as a community.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAMPUS PREVIEW
      ===================================================== */}

      <section className="snga-gallery-campus">

        <div className="snga-gallery-container">

          <div className="snga-gallery-campus-grid">

            <div className="snga-gallery-campus-image-main">

              <img
                src={campusImage2}
                alt="SNGA campus"
                loading="lazy"
              />

            </div>

            <div className="snga-gallery-campus-image-small">

              <img
                src={natureImage}
                alt="SNGA campus environment"
                loading="lazy"
              />

            </div>

            <div className="snga-gallery-campus-copy">

              <span className="snga-gallery-section-label">
                EXPERIENCE SNGA
              </span>

              <h2>
                See the place
                <br />
                <em>behind the pictures.</em>
              </h2>

              <p>
                Explore the campus, learning spaces and facilities
                that form the setting for everyday school life.
              </p>

              <Link
                to="/campus"
                className="snga-gallery-text-link"
              >
                Explore the campus
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="snga-gallery-final">

        <div className="snga-gallery-final-image">

          <img
            src={ctaImage}
            alt="Students at Shifan Noor Global Academy"
            loading="lazy"
          />

        </div>

        <div className="snga-gallery-final-overlay" />

        <div className="snga-gallery-container">

          <div className="snga-gallery-final-content">

            <span className="snga-gallery-light-label">
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <h2>
              Every year leaves
              <br />
              <em>a story behind.</em>
            </h2>

            <p>
              Discover the people, places and experiences
              that make life at SNGA meaningful.
            </p>

            <div className="snga-gallery-final-actions">

              <Link
                to="/admissions"
                className="snga-gallery-final-primary"
              >
                Begin your journey
                <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="snga-gallery-final-secondary"
              >
                Contact the school
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ALBUM MODAL
      ===================================================== */}

      {selectedAlbum && (
        <div
          className="snga-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedAlbum.name}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeAlbum();
            }
          }}
        >

          <div className="snga-gallery-modal-inner">

            <div className="snga-gallery-modal-header">

              <div>

                <span>
                  {selectedAlbum.category || "GALLERY"}
                </span>

                <h2>
                  {selectedAlbum.name}
                </h2>

                {selectedAlbum.description && (
                  <p>
                    {selectedAlbum.description}
                  </p>
                )}

              </div>

              <button
                type="button"
                className="snga-gallery-modal-close"
                onClick={closeAlbum}
                aria-label="Close album"
              >
                ×
              </button>

            </div>


            {getAlbumImages(selectedAlbum).length > 0 ? (

              <div className="snga-gallery-modal-grid">

                {getAlbumImages(selectedAlbum).map(
                  (image, index) => (
                    <button
                      type="button"
                      className="snga-gallery-modal-image"
                      key={image.id || image._id || index}
                      onClick={() => openImage(image)}
                    >

                      <img
                        src={getImageUrl(image.imageUrl)}
                        alt={
                          image.caption ||
                          selectedAlbum.name
                        }
                        loading="lazy"
                      />

                      {image.caption && (
                        <span>
                          {image.caption}
                        </span>
                      )}

                    </button>
                  )
                )}

              </div>

            ) : (

              <div className="snga-gallery-modal-empty">

                <span>SNGA</span>

                <p>
                  No images have been added
                  to this album yet.
                </p>

              </div>

            )}

          </div>

        </div>
      )}


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className="snga-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeImage();
            }
          }}
        >

          <button
            type="button"
            className="snga-gallery-lightbox-close"
            onClick={closeImage}
            aria-label="Close image"
          >
            ×
          </button>

          <div className="snga-gallery-lightbox-content">

            <img
              src={getImageUrl(selectedImage.imageUrl)}
              alt={
                selectedImage.caption ||
                "SNGA gallery"
              }
            />

            {selectedImage.caption && (
              <p>{selectedImage.caption}</p>
            )}

          </div>

        </div>
      )}

    </main>
  );
};

export default Gallery;