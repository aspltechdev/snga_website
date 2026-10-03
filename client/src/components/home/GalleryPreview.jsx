// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import galleryService from "../../services/gallery.service";
// // import "./GalleryPreview.css";

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// //   "http://localhost:5000";

// // const fallbackImages = [
// //   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90",
// //   "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=90",
// //   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
// //   "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=90",
// // ];

// // const getImageUrl = (image, index = 0) => {
// //   if (!image) {
// //     return fallbackImages[index % fallbackImages.length];
// //   }

// //   if (image.startsWith("http://") || image.startsWith("https://")) {
// //     return image;
// //   }

// //   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // };

// // const GalleryPreview = () => {
// //   const [albums, setAlbums] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     let mounted = true;

// //     const fetchGallery = async () => {
// //       try {
// //         const response = await galleryService.getAll();

// //         const data = response?.data || response || [];

// //         const published = Array.isArray(data)
// //           ? data.filter((album) => album.isPublished !== false)
// //           : [];

// //         if (mounted) {
// //           setAlbums(published.slice(0, 4));
// //         }
// //       } catch (error) {
// //         console.error("Failed to load gallery:", error);

// //         if (mounted) {
// //           setAlbums([]);
// //         }
// //       } finally {
// //         if (mounted) {
// //           setLoading(false);
// //         }
// //       }
// //     };

// //     fetchGallery();

// //     return () => {
// //       mounted = false;
// //     };
// //   }, []);

// //   const getAlbumImage = (album, index) =>
// //     getImageUrl(
// //       album?.coverImage ||
// //         album?.image ||
// //         album?.featuredImage,
// //       index
// //     );

// //   return (
// //     <section className="gallery-preview">

// //       {/* ==========================================
// //           HEADER
// //       ========================================== */}

// //       <header className="gallery-header">
// //         <div className="gallery-container">

// //           <div className="gallery-header-line">
// //             <span>SNGA / VISUAL ARCHIVE</span>
// //             <span>07</span>
// //           </div>

// //           <div className="gallery-header-content">

// //             <div className="gallery-header-title">
// //               <p>THE MOMENTS</p>

// //               <h2>
// //                 School life,
// //                 <br />
// //                 <span>unfiltered.</span>
// //               </h2>
// //             </div>

// //             <div className="gallery-header-description">
// //               <p>
// //                 A collection of classrooms, celebrations,
// //                 friendships and everyday moments that tell
// //                 the story of life at Shifan Noor Global Academy.
// //               </p>

// //               <Link
// //                 to="/gallery"
// //                 className="gallery-header-link"
// //               >
// //                 <span>Open visual archive</span>
// //                 <b>↗</b>
// //               </Link>
// //             </div>

// //           </div>

// //         </div>
// //       </header>

// //       {/* ==========================================
// //           VISUAL ARCHIVE
// //       ========================================== */}

// //       <div className="gallery-visual">

// //         <div className="gallery-container">

// //           {loading ? (

// //             <div className="gallery-loading">

// //               <div className="gallery-loading-large" />

// //               <div className="gallery-loading-small">
// //                 <span />
// //                 <span />
// //               </div>

// //             </div>

// //           ) : albums.length > 0 ? (

// //             <div className="gallery-composition">

// //               {/* =====================================
// //                   LARGE FEATURE
// //               ===================================== */}

// //               <Link
// //                 to={`/gallery/${albums[0].slug || albums[0].id}`}
// //                 className="gallery-main"
// //               >

// //                 <div className="gallery-main-image">

// //                   <img
// //                     src={getAlbumImage(albums[0], 0)}
// //                     alt={
// //                       albums[0].name ||
// //                       "SNGA school life"
// //                     }
// //                     onError={(event) => {
// //                       event.currentTarget.onerror = null;
// //                       event.currentTarget.src =
// //                         fallbackImages[0];
// //                     }}
// //                   />

// //                   <div className="gallery-main-overlay">

// //                     <div className="gallery-main-top">
// //                       <span>01</span>

// //                       <span>
// //                         {albums[0].category ||
// //                           "FEATURED"}
// //                       </span>
// //                     </div>

// //                     <div className="gallery-main-bottom">

// //                       <span>
// //                         VIEW COLLECTION
// //                       </span>

// //                       <span className="gallery-main-arrow">
// //                         ↗
// //                       </span>

// //                     </div>

// //                   </div>

// //                 </div>

// //                 <div className="gallery-main-caption">

// //                   <span>
// //                     FEATURED MOMENTS
// //                   </span>

// //                   <h3>
// //                     {albums[0].name}
// //                   </h3>

// //                   {albums[0].description && (
// //                     <p>
// //                       {albums[0].description}
// //                     </p>
// //                   )}

// //                 </div>

// //               </Link>

// //               {/* =====================================
// //                   SECONDARY STORIES
// //               ===================================== */}

// //               <div className="gallery-secondary">

// //                 {albums.slice(1, 4).map(
// //                   (album, index) => (

// //                     <Link
// //                       key={album.id}
// //                       to={`/gallery/${
// //                         album.slug || album.id
// //                       }`}
// //                       className="gallery-secondary-item"
// //                     >

// //                       <div className="gallery-secondary-image">

// //                         <img
// //                           src={getAlbumImage(
// //                             album,
// //                             index + 1
// //                           )}
// //                           alt={
// //                             album.name ||
// //                             "SNGA gallery"
// //                           }
// //                           loading="lazy"
// //                           onError={(event) => {
// //                             event.currentTarget.onerror =
// //                               null;

// //                             event.currentTarget.src =
// //                               fallbackImages[
// //                                 (index + 1) %
// //                                   fallbackImages.length
// //                               ];
// //                           }}
// //                         />

// //                         <span>
// //                           {String(index + 2).padStart(
// //                             2,
// //                             "0"
// //                           )}
// //                         </span>

// //                       </div>

// //                       <div className="gallery-secondary-content">

// //                         <div>

// //                           <small>
// //                             {album.category ||
// //                               "SNGA LIFE"}
// //                           </small>

// //                           <h3>
// //                             {album.name}
// //                           </h3>

// //                         </div>

// //                         <span className="gallery-secondary-arrow">
// //                           ↗
// //                         </span>

// //                       </div>

// //                     </Link>

// //                   )
// //                 )}

// //               </div>

// //             </div>

// //           ) : (

// //             <div className="gallery-empty">

// //               <span>07</span>

// //               <div>

// //                 <small>
// //                   VISUAL ARCHIVE
// //                 </small>

// //                 <h3>
// //                   Moments
// //                   <br />
// //                   <em>coming soon.</em>
// //                 </h3>

// //                 <p>
// //                   School memories and campus moments
// //                   will appear here.
// //                 </p>

// //               </div>

// //             </div>

// //           )}

// //           {/* ==========================================
// //               ARCHIVE FOOTER
// //           ========================================== */}

// //           {!loading && albums.length > 0 && (

// //             <div className="gallery-archive-footer">

// //               <div className="gallery-archive-copy">

// //                 <span>
// //                   FROM THE SNGA ARCHIVE
// //                 </span>

// //                 <strong>
// //                   More moments. More memories.
// //                 </strong>

// //               </div>

// //               <Link
// //                 to="/gallery"
// //                 className="gallery-archive-link"
// //               >
// //                 See everything
// //                 <span>→</span>
// //               </Link>

// //             </div>

// //           )}

// //         </div>

// //       </div>

// //       {/* ==========================================
// //           PHILOSOPHY
// //       ========================================== */}

// //       <section className="gallery-philosophy">

// //         <div className="gallery-container">

// //           <div className="gallery-philosophy-layout">

// //             <span className="gallery-philosophy-number">
// //               08
// //             </span>

// //             <div>

// //               <span className="gallery-philosophy-label">
// //                 BEYOND THE CLASSROOM
// //               </span>

// //               <h3>
// //                 The memories
// //                 <br />
// //                 <span>matter too.</span>
// //               </h3>

// //             </div>

// //             <p>
// //               Education is more than lessons and
// //               examinations. It is friendships, discovery,
// //               confidence, celebration and the experiences
// //               children carry with them.
// //             </p>

// //           </div>

// //         </div>

// //       </section>

// //       {/* ==========================================
// //           FINAL CTA
// //       ========================================== */}

// //       <section className="gallery-cta-section">

// //         <div className="gallery-container">

// //           <div className="gallery-cta-inner">

// //             <div>

// //               <span>
// //                 EXPERIENCE SNGA
// //               </span>

// //               <h3>
// //                 See the
// //                 <br />
// //                 <em>difference.</em>
// //               </h3>

// //             </div>

// //             <Link
// //               to="/gallery"
// //               className="gallery-cta-button"
// //             >
// //               Explore gallery
// //               <span>↗</span>
// //             </Link>

// //           </div>

// //         </div>

// //       </section>

// //     </section>
// //   );
// // };

// // export default GalleryPreview;


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
//   FaHeart,
//   FaShare,
//   FaSchool,
//   FaPlay,
//   FaChevronLeft,
//   FaChevronRight,
//   FaDownload,
//   FaExpand,
// } from "react-icons/fa";
// import galleryService from "../../services/gallery.service";
// import "./GalleryPreview.css";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
//   ctaBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
// };

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//   "http://localhost:5000";

// const getImageUrl = (image) => {
//   if (!image) return "";

//   if (image.startsWith("http://") || image.startsWith("https://")) {
//     return image;
//   }

//   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// };

// const GalleryPreview = () => {
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [lightboxIndex, setLightboxIndex] = useState(0);
//   const [error, setError] = useState("");

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const directoryRef = useRef(null);
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
//     let mounted = true;

//     const loadAlbums = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await galleryService.getPublishedAlbums();

//         const data = response?.data || response || [];

//         const items = Array.isArray(data) ? data : [];

//         if (mounted) {
//           setAlbums(items);
//         }
//       } catch (err) {
//         console.error("Failed to load gallery:", err);
//         if (mounted) {
//           setError("Unable to load the gallery.");
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadAlbums();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // =====================================================
//   // COMPUTED VALUES
//   // =====================================================

//   const categories = useMemo(() => {
//     const values = albums.map((album) => album.category).filter(Boolean);
//     return ["All", ...new Set(values)];
//   }, [albums]);

//   const filteredAlbums = useMemo(() => {
//     if (activeCategory === "All") {
//       return albums;
//     }
//     return albums.filter((album) => album.category === activeCategory);
//   }, [albums, activeCategory]);

//   // =====================================================
//   // LIGHTBOX HANDLERS
//   // =====================================================

//   const openLightbox = (album, imageIndex = 0) => {
//     setSelectedAlbum(album);
//     setLightboxIndex(imageIndex);
//     document.body.style.overflow = "hidden";
//   };

//   const closeLightbox = () => {
//     setSelectedAlbum(null);
//     setSelectedImage(null);
//     setLightboxIndex(0);
//     document.body.style.overflow = "";
//   };

//   const nextImage = () => {
//     if (!selectedAlbum) return;
//     const images = selectedAlbum.images || [];
//     setLightboxIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     if (!selectedAlbum) return;
//     const images = selectedAlbum.images || [];
//     setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToImage = (index) => {
//     setLightboxIndex(index);
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!selectedAlbum) return;

//       if (e.key === "Escape") {
//         closeLightbox();
//       } else if (e.key === "ArrowRight") {
//         nextImage();
//       } else if (e.key === "ArrowLeft") {
//         prevImage();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [selectedAlbum]);

//   // =====================================================
//   // RENDER
//   // =====================================================

//   const currentImages = selectedAlbum?.images || [];
//   const currentImage = currentImages[lightboxIndex];

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
//                 GALLERY
//               </div>

//               <h1 className="sg-hero__title">
//                 Life at SNGA,
//                 <br />
//                 <span className="sg-hero__highlight">Captured.</span>
//               </h1>

//               <p className="sg-hero__desc">
//                 Explore the people, places, activities and moments that make the
//                 Shifan Noor Global Academy experience memorable.
//               </p>

//               <div className="sg-hero__actions">
//                 <button
//                   className="sg-hero__btn sg-hero__btn--primary"
//                   onClick={() => {
//                     directoryRef.current?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   <span>Explore Gallery</span>
//                   <FaArrowRight />
//                 </button>
//               </div>
//             </div>

//             <div className="sg-hero__image-wrapper">
//               <div className="sg-hero__image-circle">
//                 <img
//                   src={IMAGES.heroCircle}
//                   alt="SNGA School"
//                   className="sg-hero__image-img"
//                 />
//                 <div className="sg-hero__image-ring" />
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
//               <span className="sg-intro__label">MOMENTS FROM SNGA</span>
//               <h2 className="sg-intro__title">
//                 Every Moment
//                 <span className="sg-intro__highlight">Tells a Story.</span>
//               </h2>
//             </div>

//             <div className="sg-intro__content">
//               <p>
//                 School life is filled with experiences that happen both inside
//                 and outside the classroom.
//               </p>
//               <p>
//                 From learning and sports to celebrations, activities and
//                 everyday campus life, the gallery brings these moments together.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           DIRECTORY - Gallery Grid
//       ================================================= */}
//       <section ref={directoryRef} className="sg-directory" id="sg-directory">
//         <div className="sg-container">
//           <div className="sg-directory__header">
//             <div>
//               <span className="sg-directory__label">EXPLORE THE GALLERY</span>
//               <h2 className="sg-directory__title">
//                 See SNGA
//                 <span className="sg-directory__highlight">In Moments.</span>
//               </h2>
//             </div>
//             <p className="sg-directory__desc">
//               Browse albums from across school life, activities and events.
//             </p>
//           </div>

//           {/* Filters */}
//           {!loading && categories.length > 1 && (
//             <div className="sg-directory__filters">
//               {categories.map((category) => (
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
//               <span>Loading gallery...</span>
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
//               <h3>No Albums Yet</h3>
//               <p>New moments will appear here.</p>
//             </div>
//           )}

//           {/* Album Grid */}
//           {!loading && !error && filteredAlbums.length > 0 && (
//             <div className="sg-directory__grid">
//               {filteredAlbums.map((album, index) => {
//                 const albumId = album.id || album._id;
//                 const images = album.images || [];
//                 const coverImage = album.coverImage || (images.length > 0 ? images[0].imageUrl : null);

//                 return (
//                   <div key={albumId} className="sg-directory__card">
//                     <button
//                       type="button"
//                       className="sg-directory__card-image"
//                       onClick={() => openLightbox(album, 0)}
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
//                           {images.length} {images.length === 1 ? "PHOTO" : "PHOTOS"}
//                         </span>
//                         <span className="sg-directory__card-icon">
//                           <FaEye />
//                         </span>
//                       </div>
//                     </button>

//                     <div className="sg-directory__card-content">
//                       <div className="sg-directory__card-meta">
//                         {album.category && (
//                           <span className="sg-directory__card-category">
//                             <FaTag />
//                             {album.category}
//                           </span>
//                         )}
//                         {album.createdAt && (
//                           <span className="sg-directory__card-date">
//                             <FaCalendarAlt />
//                             {new Date(album.createdAt).toLocaleDateString("en-IN", {
//                               day: "numeric",
//                               month: "short",
//                               year: "numeric",
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
//                         onClick={() => openLightbox(album, 0)}
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
//           FINAL CTA
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
//               <FaCamera />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sg-cta__title">
//               There's Always
//               <br />
//               <span className="sg-cta__highlight">Another Moment.</span>
//             </h2>

//             <p className="sg-cta__desc">
//               Explore the experiences, achievements and learning opportunities
//               that make SNGA unique.
//             </p>

//             <div className="sg-cta__actions">
//               <Link to="/achievements" className="sg-cta__btn sg-cta__btn--primary">
//                 <span>View Achievements</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/news" className="sg-cta__btn sg-cta__btn--secondary">
//                 View News
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           LIGHTBOX - Full Screen Image Viewer
//       ================================================= */}
//       {selectedAlbum && currentImages.length > 0 && (
//         <div className="sg-lightbox" onClick={closeLightbox}>
//           <div className="sg-lightbox__container" onClick={(e) => e.stopPropagation()}>
//             {/* Header */}
//             <div className="sg-lightbox__header">
//               <div className="sg-lightbox__info">
//                 <span className="sg-lightbox__album-name">{selectedAlbum.name}</span>
//                 <span className="sg-lightbox__image-count">
//                   {lightboxIndex + 1} / {currentImages.length}
//                 </span>
//               </div>
//               <button className="sg-lightbox__close" onClick={closeLightbox}>
//                 <FaTimes />
//               </button>
//             </div>

//             {/* Image */}
//             <div className="sg-lightbox__image-wrapper">
//               <button
//                 className="sg-lightbox__nav sg-lightbox__nav--prev"
//                 onClick={prevImage}
//                 aria-label="Previous image"
//               >
//                 <FaChevronLeft />
//               </button>

//               <div className="sg-lightbox__image-container">
//                 <img
//                   src={getImageUrl(currentImage.imageUrl)}
//                   alt={currentImage.caption || selectedAlbum.name}
//                   className="sg-lightbox__image"
//                 />
//               </div>

//               <button
//                 className="sg-lightbox__nav sg-lightbox__nav--next"
//                 onClick={nextImage}
//                 aria-label="Next image"
//               >
//                 <FaChevronRight />
//               </button>
//             </div>

//             {/* Footer */}
//             <div className="sg-lightbox__footer">
//               <div className="sg-lightbox__caption">
//                 {currentImage.caption || selectedAlbum.description || "No caption"}
//               </div>

//               <div className="sg-lightbox__thumbnails">
//                 {currentImages.map((image, index) => (
//                   <button
//                     key={image.id || index}
//                     className={`sg-lightbox__thumbnail ${
//                       index === lightboxIndex ? "sg-lightbox__thumbnail--active" : ""
//                     }`}
//                     onClick={() => goToImage(index)}
//                   >
//                     <img
//                       src={getImageUrl(image.imageUrl)}
//                       alt={image.caption || selectedAlbum.name}
//                       loading="lazy"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default GalleryPreview;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaTimes,
//   FaChevronLeft,
//   FaChevronRight,
//   FaImages,
//   FaEye,
//   FaDownload,
// } from "react-icons/fa";
// import galleryService from "../../services/gallery.service";
// import "./GalleryPreview.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//   "http://localhost:5000";

// const fallbackImages = [
//   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90",
//   "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=90",
//   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
//   "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=90",
// ];

// const getImageUrl = (image, index = 0) => {
//   if (!image) {
//     return fallbackImages[index % fallbackImages.length];
//   }

//   if (image.startsWith("http://") || image.startsWith("https://")) {
//     return image;
//   }

//   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// };

// const GalleryPreview = () => {
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Lightbox state
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentAlbum, setCurrentAlbum] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentImages, setCurrentImages] = useState([]);

//   useEffect(() => {
//     let mounted = true;

//     const fetchGallery = async () => {
//       try {
//         const response = await galleryService.getPublishedAlbums();

//         const data = response?.data || response || [];

//         const published = Array.isArray(data)
//           ? data.filter((album) => album.isPublished !== false)
//           : [];

//         if (mounted) {
//           setAlbums(published.slice(0, 3));
//         }
//       } catch (error) {
//         console.error("Failed to load gallery:", error);
//         if (mounted) {
//           setAlbums([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchGallery();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const getAlbumImage = (album, index) =>
//     getImageUrl(
//       album?.coverImage ||
//         album?.image ||
//         album?.featuredImage,
//       index
//     );

//   // ==========================================
//   // LIGHTBOX HANDLERS
//   // ==========================================

//   const openLightbox = (album) => {
//     const images = album.images || [];
//     if (images.length === 0) return;

//     setCurrentAlbum(album);
//     setCurrentImages(images);
//     setCurrentImageIndex(0);
//     setLightboxOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeLightbox = () => {
//     setLightboxOpen(false);
//     setCurrentAlbum(null);
//     setCurrentImages([]);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "";
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? currentImages.length - 1 : prev - 1
//     );
//   };

//   const goToImage = (index) => {
//     setCurrentImageIndex(index);
//   };

//   const handleDownload = (imageUrl) => {
//     const url = getImageUrl(imageUrl);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `SNGA-${currentAlbum?.name || "image"}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!lightboxOpen) return;

//       if (e.key === "Escape") {
//         closeLightbox();
//       } else if (e.key === "ArrowRight") {
//         nextImage();
//       } else if (e.key === "ArrowLeft") {
//         prevImage();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [lightboxOpen, currentImages]);

//   const currentImage = currentImages[currentImageIndex];

//   return (
//     <section className="gp">
//       <div className="gp-container">

//         {/* ==========================================
//             HEADER
//         ========================================== */}
//         <div className="gp-header">
//           <div className="gp-header-left">
//             <span className="gp-label">VISUAL ARCHIVE</span>
//             <h2 className="gp-title">
//               School Life,
//               <br />
//               <span>Unfiltered.</span>
//             </h2>
//           </div>
//           <div className="gp-header-right">
//             <p className="gp-desc">
//               A collection of classrooms, celebrations,
//               friendships and everyday moments that tell
//               the story of life at SNGA.
//             </p>
//             <Link to="/gallery" className="gp-link">
//               Explore all moments <span>↗</span>
//             </Link>
//           </div>
//         </div>

//         {/* ==========================================
//             GRID
//         ========================================== */}
//         {loading ? (
//           <div className="gp-loading">
//             <div className="gp-loading-card" />
//             <div className="gp-loading-card" />
//             <div className="gp-loading-card" />
//           </div>
//         ) : albums.length > 0 ? (
//           <div className="gp-grid">
//             {albums.map((album, index) => {
//               const albumId = album.id || album._id;
//               const images = album.images || [];
//               const imageCount = images.length;

//               return (
//                 <div
//                   key={albumId}
//                   className="gp-card"
//                   onClick={() => openLightbox(album)}
//                 >
//                   <div className="gp-card-image">
//                     <img
//                       src={getAlbumImage(album, index)}
//                       alt={album.name || "Gallery"}
//                       loading={index === 0 ? "eager" : "lazy"}
//                       onError={(e) => {
//                         e.currentTarget.src = fallbackImages[index % fallbackImages.length];
//                       }}
//                     />
//                     <div className="gp-card-overlay">
//                       <span className="gp-card-count">
//                         <FaImages className="gp-card-icon" />
//                         {imageCount} {imageCount === 1 ? "Photo" : "Photos"}
//                       </span>
//                       <span className="gp-card-view">
//                         <FaEye />
//                       </span>
//                     </div>
//                   </div>
//                   <div className="gp-card-content">
//                     <span className="gp-card-category">
//                       {album.category || "SNGA LIFE"}
//                     </span>
//                     <h3 className="gp-card-title">{album.name}</h3>
//                     {album.description && (
//                       <p className="gp-card-desc">{album.description}</p>
//                     )}
//                     <span className="gp-card-link">
//                       View Album <span>→</span>
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="gp-empty">
//             <span>📸</span>
//             <div>
//               <h3>Moments coming soon.</h3>
//               <p>School memories and campus moments will appear here.</p>
//             </div>
//           </div>
//         )}

//         {/* ==========================================
//             CTA
//         ========================================== */}
//         {!loading && albums.length > 0 && (
//           <div className="gp-cta">
//             <div className="gp-cta-inner">
//               <div>
//                 <span className="gp-label">FROM THE ARCHIVE</span>
//                 <h3>
//                   More moments.
//                   <br />
//                   <span>More memories.</span>
//                 </h3>
//               </div>
//               <Link to="/gallery" className="gp-cta-button">
//                 View all albums <span>↗</span>
//               </Link>
//             </div>
//           </div>
//         )}

//       </div>

//       {/* ==========================================
//           LIGHTBOX POPUP
//       ========================================== */}
//       {lightboxOpen && currentImages.length > 0 && (
//         <div className="gp-lightbox" onClick={closeLightbox}>
//           <div className="gp-lightbox-container" onClick={(e) => e.stopPropagation()}>
            
//             {/* Header */}
//             <div className="gp-lightbox-header">
//               <div className="gp-lightbox-info">
//                 <span className="gp-lightbox-album">{currentAlbum?.name}</span>
//                 <span className="gp-lightbox-count">
//                   {currentImageIndex + 1} / {currentImages.length}
//                 </span>
//               </div>
//               <div className="gp-lightbox-actions">
//                 <button
//                   className="gp-lightbox-btn gp-lightbox-download"
//                   onClick={() => handleDownload(currentImage?.imageUrl)}
//                   aria-label="Download image"
//                 >
//                   <FaDownload />
//                 </button>
//                 <button
//                   className="gp-lightbox-btn gp-lightbox-close"
//                   onClick={closeLightbox}
//                   aria-label="Close"
//                 >
//                   <FaTimes />
//                 </button>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="gp-lightbox-body">
//               <button
//                 className="gp-lightbox-nav gp-lightbox-nav-prev"
//                 onClick={prevImage}
//                 aria-label="Previous"
//               >
//                 <FaChevronLeft />
//               </button>

//               <div className="gp-lightbox-image-wrap">
//                 <img
//                   src={getImageUrl(currentImage?.imageUrl)}
//                   alt={currentImage?.caption || currentAlbum?.name}
//                   className="gp-lightbox-image"
//                 />
//                 {currentImage?.caption && (
//                   <div className="gp-lightbox-caption">
//                     {currentImage.caption}
//                   </div>
//                 )}
//               </div>

//               <button
//                 className="gp-lightbox-nav gp-lightbox-nav-next"
//                 onClick={nextImage}
//                 aria-label="Next"
//               >
//                 <FaChevronRight />
//               </button>
//             </div>

//             {/* Thumbnails */}
//             {currentImages.length > 1 && (
//               <div className="gp-lightbox-thumbnails">
//                 {currentImages.map((image, index) => (
//                   <button
//                     key={image.id || index}
//                     className={`gp-lightbox-thumb ${
//                       index === currentImageIndex ? "gp-lightbox-thumb-active" : ""
//                     }`}
//                     onClick={() => goToImage(index)}
//                   >
//                     <img
//                       src={getImageUrl(image.imageUrl)}
//                       alt={image.caption || currentAlbum?.name}
//                       loading="lazy"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}

//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default GalleryPreview;


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
} from "react-icons/fa";
import galleryService from "../../services/gallery.service";
import "./GalleryPreview.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const fallbackImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
];

const getImageUrl = (image, index = 0) => {
  if (!image) {
    return fallbackImages[index % fallbackImages.length];
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const GalleryPreview = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sectionRef = useRef(null);

  /* =====================================================
     FETCH GALLERY
  ===================================================== */

  useEffect(() => {
    let mounted = true;

    const fetchGallery = async () => {
      try {
        const response =
          await galleryService.getPublishedAlbums();

        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter(
              (album) => album.isPublished !== false
            )
          : [];

        if (mounted) {
          setAlbums(published.slice(0, 3));
        }
      } catch (error) {
        console.error(
          "Failed to load gallery:",
          error
        );

        if (mounted) {
          setAlbums([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchGallery();

    return () => {
      mounted = false;
    };
  }, []);

  /* =====================================================
     REVEAL ANIMATION
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      ".ga-reveal, .ga-image-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ga-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, [albums, loading]);

  /* =====================================================
     HELPERS
  ===================================================== */

  const getAlbumImage = (album, index) =>
    getImageUrl(
      album?.coverImage ||
        album?.image ||
        album?.featuredImage,
      index
    );

  const getAlbumImages = (album) =>
    Array.isArray(album?.images)
      ? album.images
      : [];

  /* =====================================================
     LIGHTBOX
  ===================================================== */

  const openLightbox = (album) => {
    const images = getAlbumImages(album);

    if (!images.length) return;

    setCurrentAlbum(album);
    setCurrentImages(images);
    setCurrentImageIndex(0);
    setLightboxOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentAlbum(null);
    setCurrentImages([]);
    setCurrentImageIndex(0);

    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (previous) =>
        (previous + 1) % currentImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (previous) =>
        previous === 0
          ? currentImages.length - 1
          : previous - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleDownload = (imageUrl) => {
    if (!imageUrl) return;

    const url = getImageUrl(imageUrl);

    const link = document.createElement("a");

    link.href = url;
    link.download = `SNGA-${
      currentAlbum?.name || "gallery"
    }.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* =====================================================
     KEYBOARD NAVIGATION
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!lightboxOpen) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [lightboxOpen, currentImages]);

  const currentImage =
    currentImages[currentImageIndex];

  return (
    <section
      className="gallery-preview"
      ref={sectionRef}
    >

      {/* =====================================================
          OPENING
      ===================================================== */}

      <section className="ga-opening">
        <div className="ga-container">

          <div className="ga-opening-top ga-reveal">

            <span className="ga-section-number">
              09
            </span>

            <div className="ga-opening-meta">
              <span>VISUAL ARCHIVE</span>
              <span>
                SHIFAN NOOR GLOBAL ACADEMY
              </span>
            </div>

            <span className="ga-opening-location">
              VENKULAM · RAMANATHAPURAM
            </span>

          </div>


          <div className="ga-opening-grid">

            <div className="ga-opening-label ga-reveal">
              <span className="ga-rule" />

              <span>
                LIFE · PEOPLE · PLACE
              </span>
            </div>


            <div className="ga-opening-main ga-reveal">

              <p className="ga-kicker">
                THE SNGA VISUAL ARCHIVE
              </p>

              <h2>
                Life,
                <br />
                <em>unfiltered.</em>
              </h2>

              <p className="ga-opening-description">
                A collection of classrooms,
                celebrations, friendships and everyday
                moments that tell the story of life at
                SNGA.
              </p>

              <Link
                to="/gallery"
                className="ga-text-link"
              >
                <span>Explore the archive</span>
                <span>↗</span>
              </Link>

            </div>


            <div className="ga-opening-aside ga-reveal">

              <strong>
                {String(
                  albums.length
                ).padStart(2, "0")}
              </strong>

              <span>COLLECTIONS</span>

              <div>
                <span>LEARN</span>
                <span>CREATE</span>
                <span>CELEBRATE</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ARCHIVE
      ===================================================== */}

      <section className="ga-archive">

        <div className="ga-container">

          {loading ? (

            <div className="ga-loading">

              <span className="ga-loading-line" />

              <span>
                Loading the archive...
              </span>

            </div>

          ) : albums.length > 0 ? (

            <div className="ga-albums">

              {albums.map((album, index) => {

                const albumId =
                  album.id || album._id;

                const images =
                  getAlbumImages(album);

                const imageCount =
                  images.length;

                return (
                  <article
                    key={albumId}
                    className={`ga-album ga-reveal ga-album-${index + 1}`}
                  >

                    {/* IMAGE */}

                    <button
                      type="button"
                      className="ga-album-image"
                      onClick={() =>
                        openLightbox(album)
                      }
                      aria-label={`Open ${
                        album.name ||
                        "gallery album"
                      }`}
                    >

                      <img
                        src={getAlbumImage(
                          album,
                          index
                        )}
                        alt={
                          album.name ||
                          "SNGA gallery"
                        }
                        loading={
                          index === 0
                            ? "eager"
                            : "lazy"
                        }
                        onError={(event) => {
                          event.currentTarget.onerror =
                            null;

                          event.currentTarget.src =
                            fallbackImages[
                              index %
                                fallbackImages.length
                            ];
                        }}
                      />

                      <span className="ga-album-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="ga-album-open">
                        OPEN
                        <span>↗</span>
                      </span>

                    </button>


                    {/* CONTENT */}

                    <div className="ga-album-content">

                      <div className="ga-album-meta">

                        <span>
                          {album.category ||
                            "SNGA LIFE"}
                        </span>

                        <span className="ga-meta-line">
                          /
                        </span>

                        <span>
                          {String(
                            imageCount
                          ).padStart(2, "0")}{" "}
                          PHOTOS
                        </span>

                      </div>


                      <h3>
                        {album.name}
                      </h3>


                      {album.description && (
                        <p>
                          {album.description}
                        </p>
                      )}


                      <button
                        type="button"
                        className="ga-view-album"
                        onClick={() =>
                          openLightbox(album)
                        }
                      >
                        <span>
                          View collection
                        </span>

                        <span>↗</span>
                      </button>

                    </div>

                  </article>
                );
              })}

            </div>

          ) : (

            <div className="ga-empty ga-reveal">

              <span className="ga-empty-number">
                01
              </span>

              <div>

                <span>
                  THE VISUAL ARCHIVE
                </span>

                <h3>
                  Moments are
                  <br />
                  coming <em>soon.</em>
                </h3>

                <p>
                  School memories and campus
                  moments will appear here.
                </p>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <section className="ga-statement">

        <div className="ga-container">

          <div className="ga-statement-grid">

            <span className="ga-statement-number">
              10
            </span>

            <div className="ga-statement-main">

              <span>
                THE MEMORY OF A SCHOOL
              </span>

              <h3>
                A school is made
                <br />
                of moments.
                <br />
                <em>Not just lessons.</em>
              </h3>

            </div>

            <p>
              The photographs we keep become part
              of the story students carry with them
              long after the school day ends.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ga-footer">

        <div className="ga-container">

          <div className="ga-footer-inner">

            <div className="ga-footer-copy ga-reveal">

              <span>
                FROM THE ARCHIVE
              </span>

              <h3>
                More moments.
                <br />
                <em>More memories.</em>
              </h3>

            </div>


            <div className="ga-footer-action ga-reveal">

              <p>
                Continue exploring the people,
                places and experiences that shape
                everyday life at SNGA.
              </p>

              <Link
                to="/gallery"
                className="ga-footer-link"
              >
                <span>
                  View all albums
                </span>

                <span>↗</span>
              </Link>

            </div>

          </div>


          <div className="ga-footer-bottom">

            <span>
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <span>
              VISUAL ARCHIVE · SNGA
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {lightboxOpen &&
        currentImages.length > 0 && (

          <div
            className="ga-lightbox"
            onClick={closeLightbox}
          >

            <div
              className="ga-lightbox-inner"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* HEADER */}

              <div className="ga-lightbox-header">

                <div className="ga-lightbox-title">

                  <span>
                    {currentAlbum?.name}
                  </span>

                  <small>
                    {String(
                      currentImageIndex + 1
                    ).padStart(2, "0")}{" "}
                    /{" "}
                    {String(
                      currentImages.length
                    ).padStart(2, "0")}
                  </small>

                </div>


                <div className="ga-lightbox-controls">

                  <button
                    type="button"
                    onClick={() =>
                      handleDownload(
                        currentImage?.imageUrl
                      )
                    }
                    aria-label="Download image"
                    className="ga-control-button"
                  >
                    <FaDownload />
                  </button>


                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close gallery"
                    className="ga-control-button"
                  >
                    <FaTimes />
                  </button>

                </div>

              </div>


              {/* IMAGE */}

              <div className="ga-lightbox-body">

                <button
                  type="button"
                  className="ga-lightbox-nav ga-lightbox-prev"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>


                <div className="ga-lightbox-image-wrap">

                  <img
                    src={getImageUrl(
                      currentImage?.imageUrl
                    )}
                    alt={
                      currentImage?.caption ||
                      currentAlbum?.name ||
                      "Gallery image"
                    }
                    className="ga-lightbox-image"
                  />

                  {currentImage?.caption && (
                    <div className="ga-lightbox-caption">
                      {currentImage.caption}
                    </div>
                  )}

                </div>


                <button
                  type="button"
                  className="ga-lightbox-nav ga-lightbox-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>

              </div>


              {/* THUMBNAILS */}

              {currentImages.length > 1 && (

                <div className="ga-lightbox-thumbnails">

                  {currentImages.map(
                    (image, index) => (

                      <button
                        type="button"
                        key={
                          image.id || index
                        }
                        className={`ga-thumbnail ${
                          index ===
                          currentImageIndex
                            ? "ga-thumbnail-active"
                            : ""
                        }`}
                        onClick={() =>
                          goToImage(index)
                        }
                      >

                        <img
                          src={getImageUrl(
                            image.imageUrl
                          )}
                          alt={
                            image.caption ||
                            currentAlbum?.name ||
                            "Gallery"
                          }
                          loading="lazy"
                        />

                      </button>

                    )
                  )}

                </div>

              )}

            </div>

          </div>
        )}

    </section>
  );
};

export default GalleryPreview;