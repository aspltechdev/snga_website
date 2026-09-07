// // // // // // import { useEffect, useMemo, useState } from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import { FaArrowRight, FaTimes } from "react-icons/fa";

// // // // // // import galleryService from "../services/gallery.service";
// // // // // // import "./Gallery.css";

// // // // // // const Gallery = () => {
// // // // // //   const [albums, setAlbums] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // // // //   const [selectedAlbum, setSelectedAlbum] = useState(null);
// // // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // // //   const [error, setError] = useState("");

// // // // // //   useEffect(() => {
// // // // // //     const loadAlbums = async () => {
// // // // // //       try {
// // // // // //         setLoading(true);
// // // // // //         setError("");

// // // // // //         const response = await galleryService.getGallery();

// // // // // //         const items = Array.isArray(response)
// // // // // //           ? response
// // // // // //           : response?.data ||
// // // // // //             response?.albums ||
// // // // // //             response?.gallery ||
// // // // // //             [];

// // // // // //         setAlbums(items);
// // // // // //       } catch (err) {
// // // // // //         console.error("Failed to load gallery:", err);
// // // // // //         setError("Unable to load the gallery.");
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     loadAlbums();
// // // // // //   }, []);

// // // // // //   const categories = useMemo(() => {
// // // // // //     const values = albums
// // // // // //       .map((album) => album.category)
// // // // // //       .filter(Boolean);

// // // // // //     return ["All", ...new Set(values)];
// // // // // //   }, [albums]);

// // // // // //   const filteredAlbums = useMemo(() => {
// // // // // //     if (activeCategory === "All") {
// // // // // //       return albums;
// // // // // //     }

// // // // // //     return albums.filter(
// // // // // //       (album) => album.category === activeCategory
// // // // // //     );
// // // // // //   }, [albums, activeCategory]);

// // // // // //   const getImageUrl = (image) => {
// // // // // //     if (!image) return "";

// // // // // //     if (
// // // // // //       image.startsWith("http://") ||
// // // // // //       image.startsWith("https://")
// // // // // //     ) {
// // // // // //       return image;
// // // // // //     }

// // // // // //     const API_URL =
// // // // // //       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// // // // // //       "http://localhost:5000";

// // // // // //     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // // // // //   };

// // // // // //   const getAlbumImages = (album) => {
// // // // // //     if (!album?.images) return [];

// // // // // //     return Array.isArray(album.images)
// // // // // //       ? album.images
// // // // // //       : [];
// // // // // //   };

// // // // // //   const openAlbum = (album) => {
// // // // // //     setSelectedAlbum(album);
// // // // // //   };

// // // // // //   const closeAlbum = () => {
// // // // // //     setSelectedAlbum(null);
// // // // // //     setSelectedImage(null);
// // // // // //   };

// // // // // //   const openImage = (image) => {
// // // // // //     setSelectedImage(image);
// // // // // //   };

// // // // // //   const closeImage = () => {
// // // // // //     setSelectedImage(null);
// // // // // //   };

// // // // // //   return (
// // // // // //     <main className="gallery-page">

// // // // // //       {/* HERO */}
// // // // // //       <section className="gallery-hero">
// // // // // //         <div className="gallery-container">

// // // // // //           <div className="gallery-hero-content">

// // // // // //             <div className="gallery-eyebrow">
// // // // // //               <span />
// // // // // //               GALLERY
// // // // // //             </div>

// // // // // //             <h1>
// // // // // //               Life at SNGA,
// // // // // //               <br />
// // // // // //               <em>captured.</em>
// // // // // //             </h1>

// // // // // //             <p>
// // // // // //               Explore the people, places, activities and
// // // // // //               moments that make the Shifan Noor Global
// // // // // //               Academy experience memorable.
// // // // // //             </p>

// // // // // //           </div>

// // // // // //           <div className="gallery-hero-side">
// // // // // //             <span>LEARN</span>
// // // // // //             <span>PLAY</span>
// // // // // //             <span>CREATE</span>
// // // // // //             <span>CELEBRATE</span>
// // // // // //           </div>

// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* INTRO */}
// // // // // //       <section className="gallery-intro">
// // // // // //         <div className="gallery-container">

// // // // // //           <div className="gallery-intro-label">
// // // // // //             MOMENTS FROM SNGA
// // // // // //           </div>

// // // // // //           <div className="gallery-intro-grid">

// // // // // //             <h2>
// // // // // //               Every moment
// // // // // //               <br />
// // // // // //               tells a <em>story.</em>
// // // // // //             </h2>

// // // // // //             <div className="gallery-intro-copy">

// // // // // //               <p>
// // // // // //                 School life is filled with experiences that
// // // // // //                 happen both inside and outside the classroom.
// // // // // //               </p>

// // // // // //               <p>
// // // // // //                 From learning and sports to celebrations,
// // // // // //                 activities and everyday campus life, the
// // // // // //                 gallery brings these moments together.
// // // // // //               </p>

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* GALLERY DIRECTORY */}
// // // // // //       <section className="gallery-directory">

// // // // // //         <div className="gallery-container">

// // // // // //           <div className="gallery-directory-header">

// // // // // //             <div>

// // // // // //               <div className="gallery-eyebrow dark">
// // // // // //                 EXPLORE THE GALLERY
// // // // // //               </div>

// // // // // //               <h2>
// // // // // //                 See SNGA
// // // // // //                 <br />
// // // // // //                 <em>in moments.</em>
// // // // // //               </h2>

// // // // // //             </div>

// // // // // //             <p>
// // // // // //               Browse albums from across school life,
// // // // // //               activities and events.
// // // // // //             </p>

// // // // // //           </div>

// // // // // //           {/* FILTERS */}
// // // // // //           {!loading && categories.length > 1 && (
// // // // // //             <div className="gallery-filters">

// // // // // //               {categories.map((category) => (
// // // // // //                 <button
// // // // // //                   type="button"
// // // // // //                   key={category}
// // // // // //                   className={
// // // // // //                     activeCategory === category
// // // // // //                       ? "active"
// // // // // //                       : ""
// // // // // //                   }
// // // // // //                   onClick={() =>
// // // // // //                     setActiveCategory(category)
// // // // // //                   }
// // // // // //                 >
// // // // // //                   {category}
// // // // // //                 </button>
// // // // // //               ))}

// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* LOADING */}
// // // // // //           {loading && (
// // // // // //             <div className="gallery-state">
// // // // // //               <span>LOADING GALLERY</span>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* ERROR */}
// // // // // //           {!loading && error && (
// // // // // //             <div className="gallery-state gallery-error">
// // // // // //               <span>{error}</span>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* EMPTY */}
// // // // // //           {!loading &&
// // // // // //             !error &&
// // // // // //             filteredAlbums.length === 0 && (
// // // // // //               <div className="gallery-state">

// // // // // //                 <span>
// // // // // //                   NO ALBUMS YET
// // // // // //                 </span>

// // // // // //                 <h3>
// // // // // //                   New moments will appear here.
// // // // // //                 </h3>

// // // // // //                 <p>
// // // // // //                   Gallery albums can be published from
// // // // // //                   the administration panel.
// // // // // //                 </p>

// // // // // //               </div>
// // // // // //             )}

// // // // // //           {/* ALBUM GRID */}
// // // // // //           {!loading &&
// // // // // //             !error &&
// // // // // //             filteredAlbums.length > 0 && (
// // // // // //               <div className="gallery-album-grid">

// // // // // //                 {filteredAlbums.map((album, index) => {

// // // // // //                   const images = getAlbumImages(album);

// // // // // //                   return (
// // // // // //                     <article
// // // // // //                       className="gallery-album"
// // // // // //                       key={album.id}
// // // // // //                     >

// // // // // //                       <button
// // // // // //                         type="button"
// // // // // //                         className="gallery-album-image"
// // // // // //                         onClick={() =>
// // // // // //                           openAlbum(album)
// // // // // //                         }
// // // // // //                       >

// // // // // //                         {album.coverImage ? (
// // // // // //                           <img
// // // // // //                             src={getImageUrl(
// // // // // //                               album.coverImage
// // // // // //                             )}
// // // // // //                             alt={album.name}
// // // // // //                           />
// // // // // //                         ) : images.length > 0 ? (
// // // // // //                           <img
// // // // // //                             src={getImageUrl(
// // // // // //                               images[0].imageUrl
// // // // // //                             )}
// // // // // //                             alt={album.name}
// // // // // //                           />
// // // // // //                         ) : (
// // // // // //                           <div className="gallery-image-placeholder">
// // // // // //                             SNGA
// // // // // //                           </div>
// // // // // //                         )}

// // // // // //                         <span className="gallery-album-number">
// // // // // //                           {String(index + 1).padStart(2, "0")}
// // // // // //                         </span>

// // // // // //                         <span className="gallery-album-count">
// // // // // //                           {images.length}{" "}
// // // // // //                           {images.length === 1
// // // // // //                             ? "IMAGE"
// // // // // //                             : "IMAGES"}
// // // // // //                         </span>

// // // // // //                       </button>

// // // // // //                       <div className="gallery-album-content">

// // // // // //                         <div className="gallery-album-meta">

// // // // // //                           {album.category && (
// // // // // //                             <span>
// // // // // //                               {album.category}
// // // // // //                             </span>
// // // // // //                           )}

// // // // // //                         </div>

// // // // // //                         <h3>
// // // // // //                           {album.name}
// // // // // //                         </h3>

// // // // // //                         {album.description && (
// // // // // //                           <p>
// // // // // //                             {album.description}
// // // // // //                           </p>
// // // // // //                         )}

// // // // // //                         <button
// // // // // //                           type="button"
// // // // // //                           className="gallery-view-link"
// // // // // //                           onClick={() =>
// // // // // //                             openAlbum(album)
// // // // // //                           }
// // // // // //                         >
// // // // // //                           <span>View Album</span>
// // // // // //                           <FaArrowRight />
// // // // // //                         </button>

// // // // // //                       </div>

// // // // // //                     </article>
// // // // // //                   );
// // // // // //                 })}

// // // // // //               </div>
// // // // // //             )}

// // // // // //         </div>

// // // // // //       </section>

// // // // // //       {/* CAMPUS CONNECTION */}
// // // // // //       <section className="gallery-campus">

// // // // // //         <div className="gallery-container">

// // // // // //           <div className="gallery-campus-grid">

// // // // // //             <div className="gallery-campus-heading">

// // // // // //               <div className="gallery-eyebrow">
// // // // // //                 THE CAMPUS
// // // // // //               </div>

// // // // // //               <h2>
// // // // // //                 A place to
// // // // // //                 <br />
// // // // // //                 <em>learn and grow.</em>
// // // // // //               </h2>

// // // // // //             </div>

// // // // // //             <div className="gallery-campus-copy">

// // // // // //               <p>
// // // // // //                 The SNGA campus provides a calm and spacious
// // // // // //                 environment where students can learn, participate
// // // // // //                 and experience school life in different ways.
// // // // // //               </p>

// // // // // //               <Link
// // // // // //                 to="/infrastructure"
// // // // // //                 className="gallery-link light"
// // // // // //               >
// // // // // //                 <span>Explore Infrastructure</span>
// // // // // //                 <FaArrowRight />
// // // // // //               </Link>

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </section>

// // // // // //       {/* SCHOOL LIFE */}
// // // // // //       <section className="gallery-life">

// // // // // //         <div className="gallery-container">

// // // // // //           <div className="gallery-life-header">

// // // // // //             <div>

// // // // // //               <div className="gallery-eyebrow dark">
// // // // // //                 SCHOOL LIFE
// // // // // //               </div>

// // // // // //               <h2>
// // // // // //                 Beyond the
// // // // // //                 <br />
// // // // // //                 <em>classroom.</em>
// // // // // //               </h2>

// // // // // //             </div>

// // // // // //             <p>
// // // // // //               Learning continues through sports, co-curricular
// // // // // //               activities, celebrations and shared experiences.
// // // // // //             </p>

// // // // // //           </div>

// // // // // //           <div className="gallery-life-list">

// // // // // //             <div className="gallery-life-item">
// // // // // //               <span>01</span>
// // // // // //               <h3>Academics</h3>
// // // // // //               <p>
// // // // // //                 Everyday classroom experiences and
// // // // // //                 opportunities to discover new ideas.
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             <div className="gallery-life-item">
// // // // // //               <span>02</span>
// // // // // //               <h3>Sports</h3>
// // // // // //               <p>
// // // // // //                 Participation, teamwork and achievement
// // // // // //                 through sporting activities.
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             <div className="gallery-life-item">
// // // // // //               <span>03</span>
// // // // // //               <h3>Activities</h3>
// // // // // //               <p>
// // // // // //                 Creative, cultural and co-curricular
// // // // // //                 experiences that encourage participation.
// // // // // //               </p>
// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </section>

// // // // // //       {/* NEWS */}
// // // // // //       <section className="gallery-news">

// // // // // //         <div className="gallery-container">

// // // // // //           <div className="gallery-news-grid">

// // // // // //             <div className="gallery-news-content">

// // // // // //               <div className="gallery-eyebrow dark">
// // // // // //                 SCHOOL STORIES
// // // // // //               </div>

// // // // // //               <h2>
// // // // // //                 Stay connected
// // // // // //                 <br />
// // // // // //                 with <em>SNGA.</em>
// // // // // //               </h2>

// // // // // //               <p>
// // // // // //                 Discover the latest school news, events,
// // // // // //                 achievements and community updates.
// // // // // //               </p>

// // // // // //               <Link
// // // // // //                 to="/news"
// // // // // //                 className="gallery-link"
// // // // // //               >
// // // // // //                 <span>View News & Events</span>
// // // // // //                 <FaArrowRight />
// // // // // //               </Link>

// // // // // //             </div>

// // // // // //             <div className="gallery-news-mark">

// // // // // //               <span>
// // // // // //                 STORIES
// // // // // //               </span>

// // // // // //               <strong>
// // // // // //                 & MOMENTS
// // // // // //               </strong>

// // // // // //               <small>
// // // // // //                 SHIFAN NOOR GLOBAL ACADEMY
// // // // // //               </small>

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </section>

// // // // // //       {/* LIGHTBOX / ALBUM */}
// // // // // //       {selectedAlbum && (
// // // // // //         <div
// // // // // //           className="gallery-modal"
// // // // // //           role="dialog"
// // // // // //           aria-modal="true"
// // // // // //           aria-label={selectedAlbum.name}
// // // // // //           onClick={(event) => {
// // // // // //             if (event.target === event.currentTarget) {
// // // // // //               closeAlbum();
// // // // // //             }
// // // // // //           }}
// // // // // //         >

// // // // // //           <div className="gallery-modal-inner">

// // // // // //             <div className="gallery-modal-header">

// // // // // //               <div>

// // // // // //                 <span>
// // // // // //                   {selectedAlbum.category || "GALLERY"}
// // // // // //                 </span>

// // // // // //                 <h2>
// // // // // //                   {selectedAlbum.name}
// // // // // //                 </h2>

// // // // // //               </div>

// // // // // //               <button
// // // // // //                 type="button"
// // // // // //                 className="gallery-modal-close"
// // // // // //                 onClick={closeAlbum}
// // // // // //                 aria-label="Close album"
// // // // // //               >
// // // // // //                 <FaTimes />
// // // // // //               </button>

// // // // // //             </div>

// // // // // //             {getAlbumImages(selectedAlbum).length > 0 ? (
// // // // // //               <div className="gallery-modal-grid">

// // // // // //                 {getAlbumImages(selectedAlbum).map(
// // // // // //                   (image) => (
// // // // // //                     <button
// // // // // //                       type="button"
// // // // // //                       className="gallery-modal-image"
// // // // // //                       key={image.id}
// // // // // //                       onClick={() =>
// // // // // //                         openImage(image)
// // // // // //                       }
// // // // // //                     >

// // // // // //                       <img
// // // // // //                         src={getImageUrl(
// // // // // //                           image.imageUrl
// // // // // //                         )}
// // // // // //                         alt={
// // // // // //                           image.caption ||
// // // // // //                           selectedAlbum.name
// // // // // //                         }
// // // // // //                       />

// // // // // //                       {image.caption && (
// // // // // //                         <span>
// // // // // //                           {image.caption}
// // // // // //                         </span>
// // // // // //                       )}

// // // // // //                     </button>
// // // // // //                   )
// // // // // //                 )}

// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="gallery-modal-empty">
// // // // // //                 No images available in this album.
// // // // // //               </div>
// // // // // //             )}

// // // // // //           </div>

// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* SINGLE IMAGE VIEW */}
// // // // // //       {selectedImage && (
// // // // // //         <div
// // // // // //           className="gallery-lightbox"
// // // // // //           role="dialog"
// // // // // //           aria-modal="true"
// // // // // //           onClick={(event) => {
// // // // // //             if (event.target === event.currentTarget) {
// // // // // //               closeImage();
// // // // // //             }
// // // // // //           }}
// // // // // //         >

// // // // // //           <button
// // // // // //             type="button"
// // // // // //             className="gallery-lightbox-close"
// // // // // //             onClick={closeImage}
// // // // // //             aria-label="Close image"
// // // // // //           >
// // // // // //             <FaTimes />
// // // // // //           </button>

// // // // // //           <img
// // // // // //             src={getImageUrl(selectedImage.imageUrl)}
// // // // // //             alt={selectedImage.caption || "Gallery image"}
// // // // // //           />

// // // // // //           {selectedImage.caption && (
// // // // // //             <div className="gallery-lightbox-caption">
// // // // // //               {selectedImage.caption}
// // // // // //             </div>
// // // // // //           )}

// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* CTA */}
// // // // // //       <section className="gallery-cta">

// // // // // //         <div className="gallery-container">

// // // // // //           <div className="gallery-cta-content">

// // // // // //             <div className="gallery-eyebrow dark">
// // // // // //               EXPLORE MORE
// // // // // //             </div>

// // // // // //             <h2>
// // // // // //               There's always
// // // // // //               <br />
// // // // // //               another <em>moment.</em>
// // // // // //             </h2>

// // // // // //             <p>
// // // // // //               Explore the experiences, achievements and
// // // // // //               learning opportunities that make SNGA unique.
// // // // // //             </p>

// // // // // //             <div className="gallery-actions">

// // // // // //               <Link
// // // // // //                 to="/achievements"
// // // // // //                 className="gallery-button"
// // // // // //               >
// // // // // //                 <span>View Achievements</span>
// // // // // //                 <FaArrowRight />
// // // // // //               </Link>

// // // // // //               <Link
// // // // // //                 to="/news"
// // // // // //                 className="gallery-secondary"
// // // // // //               >
// // // // // //                 View News
// // // // // //               </Link>

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </section>

// // // // // //     </main>
// // // // // //   );
// // // // // // };

// // // // // // export default Gallery;


// // // // // import { useEffect, useMemo, useRef, useState } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import {
// // // // //   FaArrowRight,
// // // // //   FaTimes,
// // // // //   FaCamera,
// // // // //   FaImages,
// // // // //   FaTag,
// // // // //   FaCalendarAlt,
// // // // //   FaEye,
// // // // //   FaHeart,
// // // // //   FaShare,
// // // // // } from "react-icons/fa";
// // // // // import galleryService from "../services/gallery.service";
// // // // // import "./Gallery.css";

// // // // // const Gallery = () => {
// // // // //   const [albums, setAlbums] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // // //   const [selectedAlbum, setSelectedAlbum] = useState(null);
// // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // //   const [error, setError] = useState("");

// // // // //   const heroRef = useRef(null);
// // // // //   const introRef = useRef(null);
// // // // //   const directoryRef = useRef(null);
// // // // //   const campusRef = useRef(null);
// // // // //   const lifeRef = useRef(null);
// // // // //   const newsRef = useRef(null);
// // // // //   const ctaRef = useRef(null);

// // // // //   // =====================================================
// // // // //   // SCROLL TRIGGERED ANIMATIONS
// // // // //   // =====================================================

// // // // //   useEffect(() => {
// // // // //     const observerOptions = {
// // // // //       threshold: 0.1,
// // // // //       rootMargin: "0px 0px -50px 0px",
// // // // //     };

// // // // //     const sections = [
// // // // //       { ref: heroRef, className: "sg-hero--visible" },
// // // // //       { ref: introRef, className: "sg-intro--visible" },
// // // // //       { ref: directoryRef, className: "sg-directory--visible" },
// // // // //       { ref: campusRef, className: "sg-campus--visible" },
// // // // //       { ref: lifeRef, className: "sg-life--visible" },
// // // // //       { ref: newsRef, className: "sg-news--visible" },
// // // // //       { ref: ctaRef, className: "sg-cta--visible" },
// // // // //     ];

// // // // //     const observers = {};

// // // // //     sections.forEach(({ ref, className }) => {
// // // // //       if (!ref.current) return;

// // // // //       const observer = new IntersectionObserver((entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) {
// // // // //             entry.target.classList.add(className);
// // // // //             observer.unobserve(entry.target);
// // // // //           }
// // // // //         });
// // // // //       }, observerOptions);

// // // // //       observer.observe(ref.current);
// // // // //       observers[className] = observer;
// // // // //     });

// // // // //     return () => {
// // // // //       Object.values(observers).forEach((observer) => observer.disconnect());
// // // // //     };
// // // // //   }, []);

// // // // //   // =====================================================
// // // // //   // FETCH GALLERY
// // // // //   // =====================================================

// // // // //   useEffect(() => {
// // // // //     const loadAlbums = async () => {
// // // // //       try {
// // // // //         setLoading(true);
// // // // //         setError("");

// // // // //         const response = await galleryService.getGallery();

// // // // //         const items = Array.isArray(response)
// // // // //           ? response
// // // // //           : response?.data ||
// // // // //             response?.albums ||
// // // // //             response?.gallery ||
// // // // //             [];

// // // // //         setAlbums(items);
// // // // //       } catch (err) {
// // // // //         console.error("Failed to load gallery:", err);
// // // // //         setError("Unable to load the gallery.");
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     loadAlbums();
// // // // //   }, []);

// // // // //   // =====================================================
// // // // //   // COMPUTED VALUES
// // // // //   // =====================================================

// // // // //   const categories = useMemo(() => {
// // // // //     const values = albums
// // // // //       .map((album) => album.category)
// // // // //       .filter(Boolean);

// // // // //     return ["All", ...new Set(values)];
// // // // //   }, [albums]);

// // // // //   const filteredAlbums = useMemo(() => {
// // // // //     if (activeCategory === "All") {
// // // // //       return albums;
// // // // //     }
// // // // //     return albums.filter((album) => album.category === activeCategory);
// // // // //   }, [albums, activeCategory]);

// // // // //   // =====================================================
// // // // //   // HELPERS
// // // // //   // =====================================================

// // // // //   const getImageUrl = (image) => {
// // // // //     if (!image) return "";

// // // // //     if (image.startsWith("http://") || image.startsWith("https://")) {
// // // // //       return image;
// // // // //     }

// // // // //     const API_URL =
// // // // //       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// // // // //       "http://localhost:5000";

// // // // //     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // // // //   };

// // // // //   const getAlbumImages = (album) => {
// // // // //     if (!album?.images) return [];
// // // // //     return Array.isArray(album.images) ? album.images : [];
// // // // //   };

// // // // //   const openAlbum = (album) => {
// // // // //     setSelectedAlbum(album);
// // // // //     document.body.style.overflow = "hidden";
// // // // //   };

// // // // //   const closeAlbum = () => {
// // // // //     setSelectedAlbum(null);
// // // // //     setSelectedImage(null);
// // // // //     document.body.style.overflow = "";
// // // // //   };

// // // // //   const openImage = (image) => {
// // // // //     setSelectedImage(image);
// // // // //   };

// // // // //   const closeImage = () => {
// // // // //     setSelectedImage(null);
// // // // //   };

// // // // //   // =====================================================
// // // // //   // DATA
// // // // //   // =====================================================

// // // // //   const lifeItems = [
// // // // //     {
// // // // //       number: "01",
// // // // //       title: "Academics",
// // // // //       description: "Everyday classroom experiences and opportunities to discover new ideas.",
// // // // //       icon: <FaImages />,
// // // // //     },
// // // // //     {
// // // // //       number: "02",
// // // // //       title: "Sports",
// // // // //       description: "Participation, teamwork and achievement through sporting activities.",
// // // // //       icon: <FaImages />,
// // // // //     },
// // // // //     {
// // // // //       number: "03",
// // // // //       title: "Activities",
// // // // //       description: "Creative, cultural and co-curricular experiences that encourage participation.",
// // // // //       icon: <FaImages />,
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <main className="sg-page">
// // // // //       {/* =================================================
// // // // //           HERO SECTION
// // // // //       ================================================= */}
// // // // //       <section ref={heroRef} className="sg-hero">
// // // // //         <div className="sg-hero__bg" />
// // // // //         <div className="sg-hero__gradient" />

// // // // //         <div className="sg-container">
// // // // //           <div className="sg-hero__content">
// // // // //             <span className="sg-hero__badge">
// // // // //               <FaCamera />
// // // // //               GALLERY
// // // // //             </span>

// // // // //             <h1 className="sg-hero__title">
// // // // //               Life at SNGA,
// // // // //               <br />
// // // // //               <span className="sg-hero__highlight">Captured.</span>
// // // // //             </h1>

// // // // //             <p className="sg-hero__desc">
// // // // //               Explore the people, places, activities and moments that make the
// // // // //               Shifan Noor Global Academy experience memorable.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="sg-hero__tags">
// // // // //             <span>LEARN</span>
// // // // //             <span>PLAY</span>
// // // // //             <span>CREATE</span>
// // // // //             <span>CELEBRATE</span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* =================================================
// // // // //           INTRO SECTION
// // // // //       ================================================= */}
// // // // //       <section ref={introRef} className="sg-intro">
// // // // //         <div className="sg-container">
// // // // //           <div className="sg-intro__inner">
// // // // //             <span className="sg-intro__label">MOMENTS FROM SNGA</span>

// // // // //             <div className="sg-intro__grid">
// // // // //               <h2 className="sg-intro__title">
// // // // //                 Every Moment
// // // // //                 <br />
// // // // //                 <span className="sg-intro__highlight">Tells a Story.</span>
// // // // //               </h2>

// // // // //               <div className="sg-intro__text">
// // // // //                 <p>
// // // // //                   School life is filled with experiences that happen both inside
// // // // //                   and outside the classroom.
// // // // //                 </p>
// // // // //                 <p>
// // // // //                   From learning and sports to celebrations, activities and
// // // // //                   everyday campus life, the gallery brings these moments together.
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* =================================================
// // // // //           DIRECTORY SECTION
// // // // //       ================================================= */}
// // // // //       <section ref={directoryRef} className="sg-directory">
// // // // //         <div className="sg-container">
// // // // //           <div className="sg-directory__header">
// // // // //             <div>
// // // // //               <span className="sg-directory__label">EXPLORE THE GALLERY</span>
// // // // //               <h2 className="sg-directory__title">
// // // // //                 See SNGA
// // // // //                 <br />
// // // // //                 <span className="sg-directory__highlight">In Moments.</span>
// // // // //               </h2>
// // // // //             </div>
// // // // //             <p className="sg-directory__desc">
// // // // //               Browse albums from across school life, activities and events.
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Filters */}
// // // // //           {!loading && categories.length > 1 && (
// // // // //             <div className="sg-directory__filters">
// // // // //               {categories.map((category) => (
// // // // //                 <button
// // // // //                   type="button"
// // // // //                   key={category}
// // // // //                   className={`sg-directory__filter ${
// // // // //                     activeCategory === category ? "sg-directory__filter--active" : ""
// // // // //                   }`}
// // // // //                   onClick={() => setActiveCategory(category)}
// // // // //                 >
// // // // //                   {category}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}

// // // // //           {/* States */}
// // // // //           {loading && (
// // // // //             <div className="sg-directory__state">
// // // // //               <div className="sg-directory__loader">
// // // // //                 <span />
// // // // //                 <span />
// // // // //                 <span />
// // // // //               </div>
// // // // //               <span>LOADING GALLERY</span>
// // // // //             </div>
// // // // //           )}

// // // // //           {!loading && error && (
// // // // //             <div className="sg-directory__state sg-directory__state--error">
// // // // //               <span>{error}</span>
// // // // //             </div>
// // // // //           )}

// // // // //           {!loading && !error && filteredAlbums.length === 0 && (
// // // // //             <div className="sg-directory__state sg-directory__state--empty">
// // // // //               <div className="sg-directory__empty-icon">
// // // // //                 <FaImages />
// // // // //               </div>
// // // // //               <h3>No Albums Yet</h3>
// // // // //               <p>New moments will appear here. Gallery albums can be published from the administration panel.</p>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Album Grid */}
// // // // //           {!loading && !error && filteredAlbums.length > 0 && (
// // // // //             <div className="sg-directory__grid">
// // // // //               {filteredAlbums.map((album, index) => {
// // // // //                 const images = getAlbumImages(album);
// // // // //                 const coverImage = album.coverImage || (images.length > 0 ? images[0].imageUrl : null);

// // // // //                 return (
// // // // //                   <div key={album.id} className="sg-directory__card">
// // // // //                     <button
// // // // //                       type="button"
// // // // //                       className="sg-directory__card-image"
// // // // //                       onClick={() => openAlbum(album)}
// // // // //                     >
// // // // //                       {coverImage ? (
// // // // //                         <img
// // // // //                           src={getImageUrl(coverImage)}
// // // // //                           alt={album.name}
// // // // //                           loading="lazy"
// // // // //                         />
// // // // //                       ) : (
// // // // //                         <div className="sg-directory__card-placeholder">
// // // // //                           <FaImages />
// // // // //                         </div>
// // // // //                       )}
// // // // //                       <div className="sg-directory__card-overlay" />
// // // // //                       <span className="sg-directory__card-number">
// // // // //                         {String(index + 1).padStart(2, "0")}
// // // // //                       </span>
// // // // //                       <span className="sg-directory__card-count">
// // // // //                         <FaImages />
// // // // //                         {images.length} {images.length === 1 ? "IMAGE" : "IMAGES"}
// // // // //                       </span>
// // // // //                     </button>

// // // // //                     <div className="sg-directory__card-content">
// // // // //                       <div className="sg-directory__card-meta">
// // // // //                         {album.category && (
// // // // //                           <span className="sg-directory__card-category">
// // // // //                             <FaTag />
// // // // //                             {album.category}
// // // // //                           </span>
// // // // //                         )}
// // // // //                       </div>

// // // // //                       <h3 className="sg-directory__card-title">{album.name}</h3>

// // // // //                       {album.description && (
// // // // //                         <p className="sg-directory__card-desc">{album.description}</p>
// // // // //                       )}

// // // // //                       <button
// // // // //                         type="button"
// // // // //                         className="sg-directory__card-link"
// // // // //                         onClick={() => openAlbum(album)}
// // // // //                       >
// // // // //                         <span>View Album</span>
// // // // //                         <FaArrowRight />
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 );
// // // // //               })}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* =================================================
// // // // //           CAMPUS SECTION
// // // // //       ================================================= */}
// // // // //       <section ref={campusRef} className="sg-campus">
// // // // //         <div className="sg-campus__bg" />

// // // // //         <div className="sg-container">
// // // // //           <div className="sg-campus__inner">
// // // // //             <div className="sg-campus__content">
// // // // //               <span className="sg-campus__label">THE CAMPUS</span>
// // // // //               <h2 className="sg-campus__title">
// // // // //                 A Place to
// // // // //                 <br />
// // // // //                 <span className="sg-campus__highlight">Learn and Grow.</span>
// // // // //               </h2>
// // // // //             </div>

// // // // //             <div className="sg-campus__right">
// // // // //               <p className="sg-campus__desc">
// // // // //                 The SNGA campus provides a calm and spacious environment where
// // // // //                 students can learn, participate and experience school life in
// // // // //                 different ways.
// // // // //               </p>
// // // // //               <Link to="/infrastructure" className="sg-campus__link">
// // // // //                 <span>Explore Infrastructure</span>
// // // // //                 <FaArrowRight />
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* =================================================
// // // // //           SCHOOL LIFE SECTION
// // // // //       ================================================= */}
// // // // //       <section ref={lifeRef} className="sg-life">
// // // // //         <div className="sg-container">
// // // // //           <div className="sg-life__header">
// // // // //             <div>
// // // // //               <span className="sg-life__label">SCHOOL LIFE</span>
// // // // //               <h2 className="sg-life__title">
// // // // //                 Beyond the
// // // // //                 <br />
// // // // //                 <span className="sg-life__highlight">Classroom.</span>
// // // // //               </h2>
// // // // //             </div>
// // // // //             <p className="sg-life__desc">
// // // // //               Learning continues through sports, co-curricular activities,
// // // // //               celebrations and shared experiences.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="sg-life__grid">
// // // // //             {lifeItems.map((item) => (
// // // // //               <div key={item.number} className="sg-life__item">
// // // // //                 <div className="sg-life__item-icon">
// // // // //                   <FaImages />
// // // // //                 </div>
// // // // //                 <span className="sg-life__item-number">{item.number}</span>
// // // // //                 <h3 className="sg-life__item-title">{item.title}</h3>
// // // // //                 <p className="sg-life__item-desc">{item.description}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* =================================================
// // // // //           NEWS SECTION
// // // // //       ================================================= */}
// // // // //       <section ref={newsRef} className="sg-news">
// // // // //         <div className="sg-news__bg" />

// // // // //         <div className="sg-container">
// // // // //           <div className="sg-news__inner">
// // // // //             <div className="sg-news__content">
// // // // //               <span className="sg-news__label">SCHOOL STORIES</span>
// // // // //               <h2 className="sg-news__title">
// // // // //                 Stay Connected
// // // // //                 <br />
// // // // //                 <span className="sg-news__highlight">With SNGA.</span>
// // // // //               </h2>
// // // // //               <p className="sg-news__desc">
// // // // //                 Discover the latest school news, events, achievements and
// // // // //                 community updates.
// // // // //               </p>
// // // // //               <Link to="/news" className="sg-news__link">
// // // // //                 <span>View News & Events</span>
// // // // //                 <FaArrowRight />
// // // // //               </Link>
// // // // //             </div>

// // // // //             <div className="sg-news__badge">
// // // // //               <span>STORIES</span>
// // // // //               <strong>& MOMENTS</strong>
// // // // //               <small>SHIFAN NOOR GLOBAL ACADEMY</small>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* =================================================
// // // // //           FINAL CTA
// // // // //       ================================================= */}
// // // // //       <section ref={ctaRef} className="sg-cta">
// // // // //         <div className="sg-container">
// // // // //           <div className="sg-cta__content">
// // // // //             <span className="sg-cta__label">EXPLORE MORE</span>
// // // // //             <h2 className="sg-cta__title">
// // // // //               There's Always
// // // // //               <br />
// // // // //               <span className="sg-cta__highlight">Another Moment.</span>
// // // // //             </h2>
// // // // //             <p className="sg-cta__desc">
// // // // //               Explore the experiences, achievements and learning opportunities
// // // // //               that make SNGA unique.
// // // // //             </p>

// // // // //             <div className="sg-cta__actions">
// // // // //               <Link to="/achievements" className="sg-cta__btn sg-cta__btn--primary">
// // // // //                 <span>View Achievements</span>
// // // // //                 <FaArrowRight />
// // // // //               </Link>
// // // // //               <Link to="/news" className="sg-cta__btn sg-cta__btn--secondary">
// // // // //                 View News
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* =================================================
// // // // //           ALBUM MODAL
// // // // //       ================================================= */}
// // // // //       {selectedAlbum && (
// // // // //         <div
// // // // //           className="sg-modal"
// // // // //           role="dialog"
// // // // //           aria-modal="true"
// // // // //           aria-label={selectedAlbum.name}
// // // // //           onClick={(event) => {
// // // // //             if (event.target === event.currentTarget) {
// // // // //               closeAlbum();
// // // // //             }
// // // // //           }}
// // // // //         >
// // // // //           <div className="sg-modal__inner">
// // // // //             <div className="sg-modal__header">
// // // // //               <div>
// // // // //                 <span className="sg-modal__category">
// // // // //                   {selectedAlbum.category || "GALLERY"}
// // // // //                 </span>
// // // // //                 <h2 className="sg-modal__title">{selectedAlbum.name}</h2>
// // // // //               </div>
// // // // //               <button
// // // // //                 type="button"
// // // // //                 className="sg-modal__close"
// // // // //                 onClick={closeAlbum}
// // // // //                 aria-label="Close album"
// // // // //               >
// // // // //                 <FaTimes />
// // // // //               </button>
// // // // //             </div>

// // // // //             {getAlbumImages(selectedAlbum).length > 0 ? (
// // // // //               <div className="sg-modal__grid">
// // // // //                 {getAlbumImages(selectedAlbum).map((image) => (
// // // // //                   <button
// // // // //                     type="button"
// // // // //                     className="sg-modal__image"
// // // // //                     key={image.id}
// // // // //                     onClick={() => openImage(image)}
// // // // //                   >
// // // // //                     <img
// // // // //                       src={getImageUrl(image.imageUrl)}
// // // // //                       alt={image.caption || selectedAlbum.name}
// // // // //                       loading="lazy"
// // // // //                     />
// // // // //                     {image.caption && (
// // // // //                       <span className="sg-modal__image-caption">{image.caption}</span>
// // // // //                     )}
// // // // //                     <div className="sg-modal__image-overlay">
// // // // //                       <FaEye />
// // // // //                     </div>
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="sg-modal__empty">
// // // // //                 <FaImages />
// // // // //                 <span>No images available in this album.</span>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* =================================================
// // // // //           SINGLE IMAGE LIGHTBOX
// // // // //       ================================================= */}
// // // // //       {selectedImage && (
// // // // //         <div
// // // // //           className="sg-lightbox"
// // // // //           role="dialog"
// // // // //           aria-modal="true"
// // // // //           onClick={(event) => {
// // // // //             if (event.target === event.currentTarget) {
// // // // //               closeImage();
// // // // //             }
// // // // //           }}
// // // // //         >
// // // // //           <button
// // // // //             type="button"
// // // // //             className="sg-lightbox__close"
// // // // //             onClick={closeImage}
// // // // //             aria-label="Close image"
// // // // //           >
// // // // //             <FaTimes />
// // // // //           </button>

// // // // //           <img
// // // // //             src={getImageUrl(selectedImage.imageUrl)}
// // // // //             alt={selectedImage.caption || "Gallery image"}
// // // // //             className="sg-lightbox__image"
// // // // //           />

// // // // //           {selectedImage.caption && (
// // // // //             <div className="sg-lightbox__caption">{selectedImage.caption}</div>
// // // // //           )}
// // // // //         </div>
// // // // //       )}
// // // // //     </main>
// // // // //   );
// // // // // };

// // // // // export default Gallery;

// // // // import { useEffect, useMemo, useRef, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import {
// // // //   FaArrowRight,
// // // //   FaTimes,
// // // //   FaCamera,
// // // //   FaImages,
// // // //   FaTag,
// // // //   FaCalendarAlt,
// // // //   FaEye,
// // // //   FaHeart,
// // // //   FaShare,
// // // // } from "react-icons/fa";
// // // // import galleryService from "../services/gallery.service";
// // // // import "./Gallery.css";

// // // // const Gallery = () => {
// // // //   const [albums, setAlbums] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // //   const [selectedAlbum, setSelectedAlbum] = useState(null);
// // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // //   const [error, setError] = useState("");

// // // //   const heroRef = useRef(null);
// // // //   const introRef = useRef(null);
// // // //   const directoryRef = useRef(null);
// // // //   const campusRef = useRef(null);
// // // //   const lifeRef = useRef(null);
// // // //   const newsRef = useRef(null);
// // // //   const ctaRef = useRef(null);

// // // //   // =====================================================
// // // //   // SCROLL TRIGGERED ANIMATIONS
// // // //   // =====================================================

// // // //   useEffect(() => {
// // // //     const observerOptions = {
// // // //       threshold: 0.1,
// // // //       rootMargin: "0px 0px -50px 0px",
// // // //     };

// // // //     const sections = [
// // // //       { ref: heroRef, className: "sg-hero--visible" },
// // // //       { ref: introRef, className: "sg-intro--visible" },
// // // //       { ref: directoryRef, className: "sg-directory--visible" },
// // // //       { ref: campusRef, className: "sg-campus--visible" },
// // // //       { ref: lifeRef, className: "sg-life--visible" },
// // // //       { ref: newsRef, className: "sg-news--visible" },
// // // //       { ref: ctaRef, className: "sg-cta--visible" },
// // // //     ];

// // // //     const observers = {};

// // // //     sections.forEach(({ ref, className }) => {
// // // //       if (!ref.current) return;

// // // //       const observer = new IntersectionObserver((entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             entry.target.classList.add(className);
// // // //             observer.unobserve(entry.target);
// // // //           }
// // // //         });
// // // //       }, observerOptions);

// // // //       observer.observe(ref.current);
// // // //       observers[className] = observer;
// // // //     });

// // // //     return () => {
// // // //       Object.values(observers).forEach((observer) => observer.disconnect());
// // // //     };
// // // //   }, []);

// // // //   // =====================================================
// // // //   // FETCH GALLERY - FIXED: Using published endpoint
// // // //   // =====================================================

// // // //   useEffect(() => {
// // // //     const loadAlbums = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         setError("");

// // // //         // ✅ FIXED: Use getPublishedAlbums instead of getGallery
// // // //         const response = await galleryService.getPublishedAlbums();

// // // //         // Handle different response structures
// // // //         const items = Array.isArray(response)
// // // //           ? response
// // // //           : response?.data ||
// // // //             response?.albums ||
// // // //             response?.gallery ||
// // // //             [];

// // // //         setAlbums(items);
// // // //       } catch (err) {
// // // //         console.error("Failed to load gallery:", err);
// // // //         setError("Unable to load the gallery. Please try again later.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     loadAlbums();
// // // //   }, []);

// // // //   // =====================================================
// // // //   // COMPUTED VALUES
// // // //   // =====================================================

// // // //   const categories = useMemo(() => {
// // // //     const values = albums
// // // //       .map((album) => album.category)
// // // //       .filter(Boolean);

// // // //     return ["All", ...new Set(values)];
// // // //   }, [albums]);

// // // //   const filteredAlbums = useMemo(() => {
// // // //     if (activeCategory === "All") {
// // // //       return albums;
// // // //     }
// // // //     return albums.filter((album) => album.category === activeCategory);
// // // //   }, [albums, activeCategory]);

// // // //   // =====================================================
// // // //   // HELPERS
// // // //   // =====================================================

// // // //   const getImageUrl = (image) => {
// // // //     if (!image) return "";

// // // //     if (image.startsWith("http://") || image.startsWith("https://")) {
// // // //       return image;
// // // //     }

// // // //     const API_URL =
// // // //       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// // // //       "http://localhost:5000";

// // // //     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // // //   };

// // // //   const getAlbumImages = (album) => {
// // // //     if (!album?.images) return [];
// // // //     return Array.isArray(album.images) ? album.images : [];
// // // //   };

// // // //   const openAlbum = (album) => {
// // // //     setSelectedAlbum(album);
// // // //     document.body.style.overflow = "hidden";
// // // //   };

// // // //   const closeAlbum = () => {
// // // //     setSelectedAlbum(null);
// // // //     setSelectedImage(null);
// // // //     document.body.style.overflow = "";
// // // //   };

// // // //   const openImage = (image) => {
// // // //     setSelectedImage(image);
// // // //   };

// // // //   const closeImage = () => {
// // // //     setSelectedImage(null);
// // // //   };

// // // //   // =====================================================
// // // //   // DATA
// // // //   // =====================================================

// // // //   const lifeItems = [
// // // //     {
// // // //       number: "01",
// // // //       title: "Academics",
// // // //       description: "Everyday classroom experiences and opportunities to discover new ideas.",
// // // //       icon: <FaImages />,
// // // //     },
// // // //     {
// // // //       number: "02",
// // // //       title: "Sports",
// // // //       description: "Participation, teamwork and achievement through sporting activities.",
// // // //       icon: <FaImages />,
// // // //     },
// // // //     {
// // // //       number: "03",
// // // //       title: "Activities",
// // // //       description: "Creative, cultural and co-curricular experiences that encourage participation.",
// // // //       icon: <FaImages />,
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <main className="sg-page">
// // // //       {/* =================================================
// // // //           HERO SECTION
// // // //       ================================================= */}
// // // //       <section ref={heroRef} className="sg-hero">
// // // //         <div className="sg-hero__bg" />
// // // //         <div className="sg-hero__gradient" />

// // // //         <div className="sg-container">
// // // //           <div className="sg-hero__content">
// // // //             <span className="sg-hero__badge">
// // // //               <FaCamera />
// // // //               GALLERY
// // // //             </span>

// // // //             <h1 className="sg-hero__title">
// // // //               Life at SNGA,
// // // //               <br />
// // // //               <span className="sg-hero__highlight">Captured.</span>
// // // //             </h1>

// // // //             <p className="sg-hero__desc">
// // // //               Explore the people, places, activities and moments that make the
// // // //               Shifan Noor Global Academy experience memorable.
// // // //             </p>
// // // //           </div>

// // // //           <div className="sg-hero__tags">
// // // //             <span>LEARN</span>
// // // //             <span>PLAY</span>
// // // //             <span>CREATE</span>
// // // //             <span>CELEBRATE</span>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           INTRO SECTION
// // // //       ================================================= */}
// // // //       <section ref={introRef} className="sg-intro">
// // // //         <div className="sg-container">
// // // //           <div className="sg-intro__inner">
// // // //             <span className="sg-intro__label">MOMENTS FROM SNGA</span>

// // // //             <div className="sg-intro__grid">
// // // //               <h2 className="sg-intro__title">
// // // //                 Every Moment
// // // //                 <br />
// // // //                 <span className="sg-intro__highlight">Tells a Story.</span>
// // // //               </h2>

// // // //               <div className="sg-intro__text">
// // // //                 <p>
// // // //                   School life is filled with experiences that happen both inside
// // // //                   and outside the classroom.
// // // //                 </p>
// // // //                 <p>
// // // //                   From learning and sports to celebrations, activities and
// // // //                   everyday campus life, the gallery brings these moments together.
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           DIRECTORY SECTION
// // // //       ================================================= */}
// // // //       <section ref={directoryRef} className="sg-directory">
// // // //         <div className="sg-container">
// // // //           <div className="sg-directory__header">
// // // //             <div>
// // // //               <span className="sg-directory__label">EXPLORE THE GALLERY</span>
// // // //               <h2 className="sg-directory__title">
// // // //                 See SNGA
// // // //                 <br />
// // // //                 <span className="sg-directory__highlight">In Moments.</span>
// // // //               </h2>
// // // //             </div>
// // // //             <p className="sg-directory__desc">
// // // //               Browse albums from across school life, activities and events.
// // // //             </p>
// // // //           </div>

// // // //           {/* Filters */}
// // // //           {!loading && categories.length > 1 && (
// // // //             <div className="sg-directory__filters">
// // // //               {categories.map((category) => (
// // // //                 <button
// // // //                   type="button"
// // // //                   key={category}
// // // //                   className={`sg-directory__filter ${
// // // //                     activeCategory === category ? "sg-directory__filter--active" : ""
// // // //                   }`}
// // // //                   onClick={() => setActiveCategory(category)}
// // // //                 >
// // // //                   {category}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           )}

// // // //           {/* States */}
// // // //           {loading && (
// // // //             <div className="sg-directory__state">
// // // //               <div className="sg-directory__loader">
// // // //                 <span />
// // // //                 <span />
// // // //                 <span />
// // // //               </div>
// // // //               <span>LOADING GALLERY</span>
// // // //             </div>
// // // //           )}

// // // //           {!loading && error && (
// // // //             <div className="sg-directory__state sg-directory__state--error">
// // // //               <span>{error}</span>
// // // //             </div>
// // // //           )}

// // // //           {!loading && !error && filteredAlbums.length === 0 && (
// // // //             <div className="sg-directory__state sg-directory__state--empty">
// // // //               <div className="sg-directory__empty-icon">
// // // //                 <FaImages />
// // // //               </div>
// // // //               <h3>No Albums Yet</h3>
// // // //               <p>New moments will appear here. Gallery albums can be published from the administration panel.</p>
// // // //             </div>
// // // //           )}

// // // //           {/* Album Grid */}
// // // //           {!loading && !error && filteredAlbums.length > 0 && (
// // // //             <div className="sg-directory__grid">
// // // //               {filteredAlbums.map((album, index) => {
// // // //                 const images = getAlbumImages(album);
// // // //                 const coverImage = album.coverImage || (images.length > 0 ? images[0].imageUrl : null);

// // // //                 return (
// // // //                   <div key={album.id || album._id} className="sg-directory__card">
// // // //                     <button
// // // //                       type="button"
// // // //                       className="sg-directory__card-image"
// // // //                       onClick={() => openAlbum(album)}
// // // //                     >
// // // //                       {coverImage ? (
// // // //                         <img
// // // //                           src={getImageUrl(coverImage)}
// // // //                           alt={album.name}
// // // //                           loading="lazy"
// // // //                         />
// // // //                       ) : (
// // // //                         <div className="sg-directory__card-placeholder">
// // // //                           <FaImages />
// // // //                         </div>
// // // //                       )}
// // // //                       <div className="sg-directory__card-overlay" />
// // // //                       <span className="sg-directory__card-number">
// // // //                         {String(index + 1).padStart(2, "0")}
// // // //                       </span>
// // // //                       <span className="sg-directory__card-count">
// // // //                         <FaImages />
// // // //                         {images.length} {images.length === 1 ? "IMAGE" : "IMAGES"}
// // // //                       </span>
// // // //                     </button>

// // // //                     <div className="sg-directory__card-content">
// // // //                       <div className="sg-directory__card-meta">
// // // //                         {album.category && (
// // // //                           <span className="sg-directory__card-category">
// // // //                             <FaTag />
// // // //                             {album.category}
// // // //                           </span>
// // // //                         )}
// // // //                         {album.date && (
// // // //                           <span className="sg-directory__card-date">
// // // //                             <FaCalendarAlt />
// // // //                             {new Date(album.date).toLocaleDateString()}
// // // //                           </span>
// // // //                         )}
// // // //                       </div>

// // // //                       <h3 className="sg-directory__card-title">{album.name}</h3>

// // // //                       {album.description && (
// // // //                         <p className="sg-directory__card-desc">{album.description}</p>
// // // //                       )}

// // // //                       <button
// // // //                         type="button"
// // // //                         className="sg-directory__card-link"
// // // //                         onClick={() => openAlbum(album)}
// // // //                       >
// // // //                         <span>View Album</span>
// // // //                         <FaArrowRight />
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           CAMPUS SECTION
// // // //       ================================================= */}
// // // //       <section ref={campusRef} className="sg-campus">
// // // //         <div className="sg-campus__bg" />

// // // //         <div className="sg-container">
// // // //           <div className="sg-campus__inner">
// // // //             <div className="sg-campus__content">
// // // //               <span className="sg-campus__label">THE CAMPUS</span>
// // // //               <h2 className="sg-campus__title">
// // // //                 A Place to
// // // //                 <br />
// // // //                 <span className="sg-campus__highlight">Learn and Grow.</span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className="sg-campus__right">
// // // //               <p className="sg-campus__desc">
// // // //                 The SNGA campus provides a calm and spacious environment where
// // // //                 students can learn, participate and experience school life in
// // // //                 different ways.
// // // //               </p>
// // // //               <Link to="/infrastructure" className="sg-campus__link">
// // // //                 <span>Explore Infrastructure</span>
// // // //                 <FaArrowRight />
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           SCHOOL LIFE SECTION
// // // //       ================================================= */}
// // // //       <section ref={lifeRef} className="sg-life">
// // // //         <div className="sg-container">
// // // //           <div className="sg-life__header">
// // // //             <div>
// // // //               <span className="sg-life__label">SCHOOL LIFE</span>
// // // //               <h2 className="sg-life__title">
// // // //                 Beyond the
// // // //                 <br />
// // // //                 <span className="sg-life__highlight">Classroom.</span>
// // // //               </h2>
// // // //             </div>
// // // //             <p className="sg-life__desc">
// // // //               Learning continues through sports, co-curricular activities,
// // // //               celebrations and shared experiences.
// // // //             </p>
// // // //           </div>

// // // //           <div className="sg-life__grid">
// // // //             {lifeItems.map((item) => (
// // // //               <div key={item.number} className="sg-life__item">
// // // //                 <div className="sg-life__item-icon">
// // // //                   <FaImages />
// // // //                 </div>
// // // //                 <span className="sg-life__item-number">{item.number}</span>
// // // //                 <h3 className="sg-life__item-title">{item.title}</h3>
// // // //                 <p className="sg-life__item-desc">{item.description}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           NEWS SECTION
// // // //       ================================================= */}
// // // //       <section ref={newsRef} className="sg-news">
// // // //         <div className="sg-news__bg" />

// // // //         <div className="sg-container">
// // // //           <div className="sg-news__inner">
// // // //             <div className="sg-news__content">
// // // //               <span className="sg-news__label">SCHOOL STORIES</span>
// // // //               <h2 className="sg-news__title">
// // // //                 Stay Connected
// // // //                 <br />
// // // //                 <span className="sg-news__highlight">With SNGA.</span>
// // // //               </h2>
// // // //               <p className="sg-news__desc">
// // // //                 Discover the latest school news, events, achievements and
// // // //                 community updates.
// // // //               </p>
// // // //               <Link to="/news" className="sg-news__link">
// // // //                 <span>View News & Events</span>
// // // //                 <FaArrowRight />
// // // //               </Link>
// // // //             </div>

// // // //             <div className="sg-news__badge">
// // // //               <span>STORIES</span>
// // // //               <strong>& MOMENTS</strong>
// // // //               <small>SHIFAN NOOR GLOBAL ACADEMY</small>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           FINAL CTA
// // // //       ================================================= */}
// // // //       <section ref={ctaRef} className="sg-cta">
// // // //         <div className="sg-container">
// // // //           <div className="sg-cta__content">
// // // //             <span className="sg-cta__label">EXPLORE MORE</span>
// // // //             <h2 className="sg-cta__title">
// // // //               There's Always
// // // //               <br />
// // // //               <span className="sg-cta__highlight">Another Moment.</span>
// // // //             </h2>
// // // //             <p className="sg-cta__desc">
// // // //               Explore the experiences, achievements and learning opportunities
// // // //               that make SNGA unique.
// // // //             </p>

// // // //             <div className="sg-cta__actions">
// // // //               <Link to="/achievements" className="sg-cta__btn sg-cta__btn--primary">
// // // //                 <span>View Achievements</span>
// // // //                 <FaArrowRight />
// // // //               </Link>
// // // //               <Link to="/news" className="sg-cta__btn sg-cta__btn--secondary">
// // // //                 View News
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           ALBUM MODAL
// // // //       ================================================= */}
// // // //       {selectedAlbum && (
// // // //         <div
// // // //           className="sg-modal"
// // // //           role="dialog"
// // // //           aria-modal="true"
// // // //           aria-label={selectedAlbum.name}
// // // //           onClick={(event) => {
// // // //             if (event.target === event.currentTarget) {
// // // //               closeAlbum();
// // // //             }
// // // //           }}
// // // //         >
// // // //           <div className="sg-modal__inner">
// // // //             <div className="sg-modal__header">
// // // //               <div>
// // // //                 <span className="sg-modal__category">
// // // //                   {selectedAlbum.category || "GALLERY"}
// // // //                 </span>
// // // //                 <h2 className="sg-modal__title">{selectedAlbum.name}</h2>
// // // //                 {selectedAlbum.date && (
// // // //                   <span className="sg-modal__date">
// // // //                     <FaCalendarAlt />
// // // //                     {new Date(selectedAlbum.date).toLocaleDateString()}
// // // //                   </span>
// // // //                 )}
// // // //               </div>
// // // //               <button
// // // //                 type="button"
// // // //                 className="sg-modal__close"
// // // //                 onClick={closeAlbum}
// // // //                 aria-label="Close album"
// // // //               >
// // // //                 <FaTimes />
// // // //               </button>
// // // //             </div>

// // // //             {getAlbumImages(selectedAlbum).length > 0 ? (
// // // //               <div className="sg-modal__grid">
// // // //                 {getAlbumImages(selectedAlbum).map((image) => (
// // // //                   <button
// // // //                     type="button"
// // // //                     className="sg-modal__image"
// // // //                     key={image.id || image._id}
// // // //                     onClick={() => openImage(image)}
// // // //                   >
// // // //                     <img
// // // //                       src={getImageUrl(image.imageUrl)}
// // // //                       alt={image.caption || selectedAlbum.name}
// // // //                       loading="lazy"
// // // //                     />
// // // //                     {image.caption && (
// // // //                       <span className="sg-modal__image-caption">{image.caption}</span>
// // // //                     )}
// // // //                     <div className="sg-modal__image-overlay">
// // // //                       <FaEye />
// // // //                     </div>
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //               <div className="sg-modal__empty">
// // // //                 <FaImages />
// // // //                 <span>No images available in this album.</span>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* =================================================
// // // //           SINGLE IMAGE LIGHTBOX
// // // //       ================================================= */}
// // // //       {selectedImage && (
// // // //         <div
// // // //           className="sg-lightbox"
// // // //           role="dialog"
// // // //           aria-modal="true"
// // // //           onClick={(event) => {
// // // //             if (event.target === event.currentTarget) {
// // // //               closeImage();
// // // //             }
// // // //           }}
// // // //         >
// // // //           <button
// // // //             type="button"
// // // //             className="sg-lightbox__close"
// // // //             onClick={closeImage}
// // // //             aria-label="Close image"
// // // //           >
// // // //             <FaTimes />
// // // //           </button>

// // // //           <img
// // // //             src={getImageUrl(selectedImage.imageUrl)}
// // // //             alt={selectedImage.caption || "Gallery image"}
// // // //             className="sg-lightbox__image"
// // // //           />

// // // //           {selectedImage.caption && (
// // // //             <div className="sg-lightbox__caption">{selectedImage.caption}</div>
// // // //           )}
// // // //         </div>
// // // //       )}
// // // //     </main>
// // // //   );
// // // // };

// // // // export default Gallery;



// // // import { useEffect, useMemo, useRef, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   FaArrowRight,
// // //   FaTimes,
// // //   FaCamera,
// // //   FaImages,
// // //   FaTag,
// // //   FaCalendarAlt,
// // //   FaEye,
// // //   FaPlay,
// // //   FaChevronRight,
// // //   FaInstagram,
// // //   FaYoutube,
// // //   FaFacebook,
// // //   FaSchool,
// // //   FaUsers,
// // //   FaTrophy,
// // //   FaBookOpen,
// // //   FaStar,
// // //   FaAward,
// // //   FaHands,
// // //   FaHeart,
// // //   FaChild,
// // //   FaGraduationCap,
// // //   FaChalkboardTeacher,
// // //   FaRunning,
// // //   FaPaintBrush,
// // //   FaMusic,
// // //   FaTree,
// // // } from "react-icons/fa";
// // // import galleryService from "../services/gallery.service";
// // // import "./Gallery.css";

// // // const Gallery = () => {
// // //   const [albums, setAlbums] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeCategory, setActiveCategory] = useState("All");
// // //   const [selectedAlbum, setSelectedAlbum] = useState(null);
// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [error, setError] = useState("");

// // //   const heroRef = useRef(null);
// // //   const introRef = useRef(null);
// // //   const directoryRef = useRef(null);
// // //   const campusRef = useRef(null);
// // //   const lifeRef = useRef(null);
// // //   const newsRef = useRef(null);
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
// // //       { ref: heroRef, className: "sg-hero--visible" },
// // //       { ref: introRef, className: "sg-intro--visible" },
// // //       { ref: directoryRef, className: "sg-directory--visible" },
// // //       { ref: campusRef, className: "sg-campus--visible" },
// // //       { ref: lifeRef, className: "sg-life--visible" },
// // //       { ref: newsRef, className: "sg-news--visible" },
// // //       { ref: ctaRef, className: "sg-cta--visible" },
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
// // //   // FETCH GALLERY
// // //   // =====================================================

// // //   useEffect(() => {
// // //     const loadAlbums = async () => {
// // //       try {
// // //         setLoading(true);
// // //         setError("");

// // //         const response = await galleryService.getPublishedAlbums();

// // //         const items = Array.isArray(response)
// // //           ? response
// // //           : response?.data ||
// // //             response?.albums ||
// // //             response?.gallery ||
// // //             [];

// // //         setAlbums(items);
// // //       } catch (err) {
// // //         console.error("Failed to load gallery:", err);
// // //         setError("Unable to load the gallery. Please try again later.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     loadAlbums();
// // //   }, []);

// // //   // =====================================================
// // //   // COMPUTED VALUES
// // //   // =====================================================

// // //   const categories = useMemo(() => {
// // //     const values = albums
// // //       .map((album) => album.category)
// // //       .filter(Boolean);

// // //     return ["All", ...new Set(values)];
// // //   }, [albums]);

// // //   const filteredAlbums = useMemo(() => {
// // //     if (activeCategory === "All") {
// // //       return albums;
// // //     }
// // //     return albums.filter((album) => album.category === activeCategory);
// // //   }, [albums, activeCategory]);

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

// // //   const getAlbumImages = (album) => {
// // //     if (!album?.images) return [];
// // //     return Array.isArray(album.images) ? album.images : [];
// // //   };

// // //   const openAlbum = (album) => {
// // //     setSelectedAlbum(album);
// // //     document.body.style.overflow = "hidden";
// // //   };

// // //   const closeAlbum = () => {
// // //     setSelectedAlbum(null);
// // //     setSelectedImage(null);
// // //     document.body.style.overflow = "";
// // //   };

// // //   const openImage = (image) => {
// // //     setSelectedImage(image);
// // //   };

// // //   const closeImage = () => {
// // //     setSelectedImage(null);
// // //   };

// // //   // =====================================================
// // //   // DATA
// // //   // =====================================================

// // //   const highlights = [
// // //     { icon: <FaStar />, text: "CBSE Affiliated", color: "#FFD700" },
// // //     { icon: <FaAward />, text: "10+ Years of Excellence", color: "#FF6B6B" },
// // //     { icon: <FaUsers />, text: "500+ Students", color: "#4ECDC4" },
// // //     { icon: <FaGraduationCap />, text: "100% Results", color: "#45B7D1" },
// // //   ];

// // //   const lifeItems = [
// // //     {
// // //       icon: <FaChalkboardTeacher />,
// // //       title: "Academic Excellence",
// // //       description: "Interactive classrooms with modern teaching methodologies for holistic learning.",
// // //       color: "#4A90D9",
// // //     },
// // //     {
// // //       icon: <FaRunning />,
// // //       title: "Sports & Fitness",
// // //       description: "State-of-the-art sports facilities for cricket, football, basketball and more.",
// // //       color: "#27AE60",
// // //     },
// // //     {
// // //       icon: <FaPaintBrush />,
// // //       title: "Creative Arts",
// // //       description: "Art, music, dance and drama to nurture creativity and self-expression.",
// // //       color: "#E67E22",
// // //     },
// // //     {
// // //       icon: <FaTree />,
// // //       title: "Nature & Environment",
// // //       description: "Green campus with gardens and environmental awareness programs.",
// // //       color: "#2ECC71",
// // //     },
// // //     {
// // //       icon: <FaHeart />,
// // //       title: "Values & Culture",
// // //       description: "Building character through Indian values, traditions and cultural celebrations.",
// // //       color: "#E74C3C",
// // //     },
// // //     {
// // //       icon: <FaHands />,
// // //       title: "Community Service",
// // //       description: "Developing empathy and social responsibility through community initiatives.",
// // //       color: "#9B59B6",
// // //     },
// // //   ];

// // //   return (
// // //     <main className="sg-page">
// // //       {/* =================================================
// // //           TOP BAR - School Identity
// // //       ================================================= */}
// // //       <div className="sg-topbar">
// // //         <div className="sg-container">
// // //           <div className="sg-topbar__content">
// // //             <span className="sg-topbar__motto">
// // //               <FaSchool />
// // //               Shifan Noor Global Academy - Where Values Meet Excellence
// // //             </span>
// // //             <span className="sg-topbar__affiliation">Affiliated to CBSE</span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* =================================================
// // //           HERO - Warm School Welcome
// // //       ================================================= */}
// // //       <section ref={heroRef} className="sg-hero">
// // //         <div className="sg-hero__bg">
// // //           <div className="sg-hero__bg-image" />
// // //           <div className="sg-hero__bg-overlay" />
// // //           <div className="sg-hero__bg-shape" />
// // //         </div>

// // //         <div className="sg-container">
// // //           <div className="sg-hero__inner">
// // //             <div className="sg-hero__content">
// // //               <div className="sg-hero__badge">
// // //                 <FaCamera />
// // //                 OUR GALLERY
// // //               </div>

// // //               <h1 className="sg-hero__title">
// // //                 Capturing
// // //                 <br />
// // //                 <span className="sg-hero__highlight">School Life</span>
// // //               </h1>

// // //               <p className="sg-hero__desc">
// // //                 Welcome to the heart of SNGA! Explore the vibrant moments that 
// // //                 make our school a home away from home - where every child grows, 
// // //                 learns, and shines.
// // //               </p>

// // //               <div className="sg-hero__highlights">
// // //                 {highlights.map((item, index) => (
// // //                   <div key={index} className="sg-hero__highlight-item">
// // //                     <span className="sg-hero__highlight-icon" style={{ color: item.color }}>
// // //                       {item.icon}
// // //                     </span>
// // //                     <span className="sg-hero__highlight-text">{item.text}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <div className="sg-hero__actions">
// // //                 <button 
// // //                   className="sg-hero__btn-primary"
// // //                   onClick={() => {
// // //                     directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
// // //                   }}
// // //                 >
// // //                   <span>Explore Moments</span>
// // //                   <FaArrowRight />
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             <div className="sg-hero__image">
// // //               <div className="sg-hero__image-wrapper">
// // //                 <div className="sg-hero__image-placeholder">
// // //                   <FaSchool />
// // //                   <span>SNGA</span>
// // //                 </div>
// // //                 <div className="sg-hero__image-badge">
// // //                   <span>Since 2015</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Wave Divider */}
// // //         <div className="sg-hero__wave">
// // //           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
// // //             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
// // //           </svg>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           INTRO - Welcome Message
// // //       ================================================= */}
// // //       <section ref={introRef} className="sg-intro">
// // //         <div className="sg-container">
// // //           <div className="sg-intro__inner">
// // //             <div className="sg-intro__header">
// // //               <span className="sg-intro__label">OUR STORY</span>
// // //               <h2 className="sg-intro__title">
// // //                 Every Picture Tells a
// // //                 <span className="sg-intro__highlight">Story of Growth</span>
// // //               </h2>
// // //             </div>

// // //             <div className="sg-intro__content">
// // //               <p>
// // //                 At Shifan Noor Global Academy, we believe that every moment matters. 
// // //                 From the first bell in the morning to the last goodbye in the evening, 
// // //                 our campus buzzes with the energy of young minds discovering, learning, 
// // //                 and growing together.
// // //               </p>
// // //               <p>
// // //                 Our gallery is a window into this beautiful journey - showcasing the 
// // //                 smiles, the achievements, the friendships, and the countless memories 
// // //                 that make school life truly special.
// // //               </p>
// // //               <div className="sg-intro__school-values">
// // //                 <div className="sg-intro__value">
// // //                   <FaChild />
// // //                   <span>Nurturing</span>
// // //                 </div>
// // //                 <div className="sg-intro__value">
// // //                   <FaBookOpen />
// // //                   <span>Excellence</span>
// // //                 </div>
// // //                 <div className="sg-intro__value">
// // //                   <FaHands />
// // //                   <span>Values</span>
// // //                 </div>
// // //                 <div className="sg-intro__value">
// // //                   <FaStar />
// // //                   <span>Innovation</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           DIRECTORY - Gallery Grid
// // //       ================================================= */}
// // //       <section ref={directoryRef} className="sg-directory">
// // //         <div className="sg-container">
// // //           <div className="sg-directory__header">
// // //             <div>
// // //               <span className="sg-directory__label">GALLERY</span>
// // //               <h2 className="sg-directory__title">
// // //                 Our <span className="sg-directory__highlight">School Moments</span>
// // //               </h2>
// // //             </div>
// // //             <p className="sg-directory__desc">
// // //               Browse through our collection of memorable moments from various school activities.
// // //             </p>
// // //           </div>

// // //           {/* Filters */}
// // //           {!loading && categories.length > 1 && (
// // //             <div className="sg-directory__filters">
// // //               <button
// // //                 type="button"
// // //                 className={`sg-directory__filter ${activeCategory === "All" ? "sg-directory__filter--active" : ""}`}
// // //                 onClick={() => setActiveCategory("All")}
// // //               >
// // //                 All
// // //               </button>
// // //               {categories.filter(c => c !== "All").map((category) => (
// // //                 <button
// // //                   type="button"
// // //                   key={category}
// // //                   className={`sg-directory__filter ${
// // //                     activeCategory === category ? "sg-directory__filter--active" : ""
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
// // //             <div className="sg-directory__state">
// // //               <div className="sg-directory__loader">
// // //                 <span />
// // //                 <span />
// // //                 <span />
// // //               </div>
// // //               <span>Loading memories...</span>
// // //             </div>
// // //           )}

// // //           {!loading && error && (
// // //             <div className="sg-directory__state sg-directory__state--error">
// // //               <span>{error}</span>
// // //             </div>
// // //           )}

// // //           {!loading && !error && filteredAlbums.length === 0 && (
// // //             <div className="sg-directory__state sg-directory__state--empty">
// // //               <div className="sg-directory__empty-icon">
// // //                 <FaImages />
// // //               </div>
// // //               <h3>No Memories Yet</h3>
// // //               <p>Check back soon for new photos from our school activities.</p>
// // //             </div>
// // //           )}

// // //           {/* Album Grid */}
// // //           {!loading && !error && filteredAlbums.length > 0 && (
// // //             <div className="sg-directory__grid">
// // //               {filteredAlbums.map((album, index) => {
// // //                 const images = getAlbumImages(album);
// // //                 const coverImage = album.coverImage || (images.length > 0 ? images[0].imageUrl : null);

// // //                 return (
// // //                   <div key={album.id || album._id} className="sg-directory__card">
// // //                     <button
// // //                       type="button"
// // //                       className="sg-directory__card-image"
// // //                       onClick={() => openAlbum(album)}
// // //                     >
// // //                       {coverImage ? (
// // //                         <img
// // //                           src={getImageUrl(coverImage)}
// // //                           alt={album.name}
// // //                           loading="lazy"
// // //                         />
// // //                       ) : (
// // //                         <div className="sg-directory__card-placeholder">
// // //                           <FaImages />
// // //                         </div>
// // //                       )}
// // //                       <div className="sg-directory__card-overlay">
// // //                         <span className="sg-directory__card-count">
// // //                           <FaImages />
// // //                           {images.length} photos
// // //                         </span>
// // //                       </div>
// // //                     </button>

// // //                     <div className="sg-directory__card-content">
// // //                       <div className="sg-directory__card-meta">
// // //                         {album.category && (
// // //                           <span className="sg-directory__card-category">
// // //                             {album.category}
// // //                           </span>
// // //                         )}
// // //                         {album.date && (
// // //                           <span className="sg-directory__card-date">
// // //                             <FaCalendarAlt />
// // //                             {new Date(album.date).toLocaleDateString('en-IN', { 
// // //                               day: 'numeric', 
// // //                               month: 'short', 
// // //                               year: 'numeric' 
// // //                             })}
// // //                           </span>
// // //                         )}
// // //                       </div>

// // //                       <h3 className="sg-directory__card-title">{album.name}</h3>

// // //                       {album.description && (
// // //                         <p className="sg-directory__card-desc">{album.description}</p>
// // //                       )}

// // //                       <button
// // //                         type="button"
// // //                         className="sg-directory__card-link"
// // //                         onClick={() => openAlbum(album)}
// // //                       >
// // //                         <span>View Album</span>
// // //                         <FaArrowRight />
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           CAMPUS LIFE - School Highlights
// // //       ================================================= */}
// // //       <section ref={campusRef} className="sg-campus">
// // //         <div className="sg-campus__bg" />

// // //         <div className="sg-container">
// // //           <div className="sg-campus__inner">
// // //             <div className="sg-campus__header">
// // //               <span className="sg-campus__label">CAMPUS LIFE</span>
// // //               <h2 className="sg-campus__title">
// // //                 Where <span className="sg-campus__highlight">Learning Comes Alive</span>
// // //               </h2>
// // //               <p className="sg-campus__desc">
// // //                 Our campus is more than just buildings - it's a vibrant community where 
// // //                 every corner tells a story of learning, friendship, and growth.
// // //               </p>
// // //             </div>

// // //             <div className="sg-campus__features">
// // //               <div className="sg-campus__feature">
// // //                 <div className="sg-campus__feature-icon">
// // //                   <FaChalkboardTeacher />
// // //                 </div>
// // //                 <h4>Smart Classrooms</h4>
// // //                 <p>Interactive learning with modern technology</p>
// // //               </div>
// // //               <div className="sg-campus__feature">
// // //                 <div className="sg-campus__feature-icon">
// // //                   <FaRunning />
// // //                 </div>
// // //                 <h4>Sports Facilities</h4>
// // //                 <p>Indoor & outdoor games for all-round development</p>
// // //               </div>
// // //               <div className="sg-campus__feature">
// // //                 <div className="sg-campus__feature-icon">
// // //                   <FaPaintBrush />
// // //                 </div>
// // //                 <h4>Creative Spaces</h4>
// // //                 <p>Art, music, and innovation labs</p>
// // //               </div>
// // //               <div className="sg-campus__feature">
// // //                 <div className="sg-campus__feature-icon">
// // //                   <FaTree />
// // //                 </div>
// // //                 <h4>Green Campus</h4>
// // //                 <p>Lush gardens and eco-friendly environment</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           SCHOOL LIFE - Activities Grid
// // //       ================================================= */}
// // //       <section ref={lifeRef} className="sg-life">
// // //         <div className="sg-container">
// // //           <div className="sg-life__header">
// // //             <div>
// // //               <span className="sg-life__label">OUR ACTIVITIES</span>
// // //               <h2 className="sg-life__title">
// // //                 Beyond the <span className="sg-life__highlight">Classroom</span>
// // //               </h2>
// // //             </div>
// // //             <p className="sg-life__desc">
// // //               Learning extends beyond textbooks. Explore our diverse activities that shape young minds.
// // //             </p>
// // //           </div>

// // //           <div className="sg-life__grid">
// // //             {lifeItems.map((item, index) => (
// // //               <div key={index} className="sg-life__item">
// // //                 <div className="sg-life__item-icon" style={{ background: item.color + '20', color: item.color }}>
// // //                   {item.icon}
// // //                 </div>
// // //                 <h3 className="sg-life__item-title">{item.title}</h3>
// // //                 <p className="sg-life__item-desc">{item.description}</p>
// // //                 <div className="sg-life__item-arrow">
// // //                   <FaChevronRight />
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           SCHOOL NEWS & EVENTS
// // //       ================================================= */}
// // //       <section ref={newsRef} className="sg-news">
// // //         <div className="sg-news__bg" />
// // //         <div className="sg-news__pattern" />

// // //         <div className="sg-container">
// // //           <div className="sg-news__inner">
// // //             <div className="sg-news__content">
// // //               <span className="sg-news__label">STAY CONNECTED</span>
// // //               <h2 className="sg-news__title">
// // //                 Latest <span className="sg-news__highlight">News & Events</span>
// // //               </h2>
// // //               <p className="sg-news__desc">
// // //                 Stay updated with the latest happenings at SNGA. From academic achievements 
// // //                 to cultural celebrations, there's always something exciting happening.
// // //               </p>
// // //               <Link to="/news" className="sg-news__link">
// // //                 <span>View All Updates</span>
// // //                 <FaArrowRight />
// // //               </Link>
// // //             </div>

// // //             <div className="sg-news__features">
// // //               <div className="sg-news__feature">
// // //                 <FaTrophy />
// // //                 <span>Achievements</span>
// // //               </div>
// // //               <div className="sg-news__feature">
// // //                 <FaCalendarAlt />
// // //                 <span>Events</span>
// // //               </div>
// // //               <div className="sg-news__feature">
// // //                 <FaUsers />
// // //                 <span>Community</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           FINAL CTA - School Pride
// // //       ================================================= */}
// // //       <section ref={ctaRef} className="sg-cta">
// // //         <div className="sg-cta__bg">
// // //           <div className="sg-cta__bg-image" />
// // //           <div className="sg-cta__bg-overlay" />
// // //         </div>

// // //         <div className="sg-container">
// // //           <div className="sg-cta__content">
// // //             <div className="sg-cta__badge">
// // //               <FaSchool />
// // //               SHIFAN NOOR GLOBAL ACADEMY
// // //             </div>
// // //             <h2 className="sg-cta__title">
// // //               Be a Part of
// // //               <br />
// // //               <span className="sg-cta__highlight">Our Journey</span>
// // //             </h2>
// // //             <p className="sg-cta__desc">
// // //               Join us in creating beautiful memories and building a bright future 
// // //               for every child. At SNGA, we don't just teach - we inspire.
// // //             </p>

// // //             <div className="sg-cta__actions">
// // //               <Link to="/admissions" className="sg-cta__btn sg-cta__btn--primary">
// // //                 <span>Admissions Open</span>
// // //                 <FaArrowRight />
// // //               </Link>
// // //               <Link to="/contact" className="sg-cta__btn sg-cta__btn--secondary">
// // //                 Visit Campus
// // //               </Link>
// // //             </div>

// // //             <div className="sg-cta__footer">
// // //               <span>📞 +91 98765 43210</span>
// // //               <span>✉️ info@snga.edu.in</span>
// // //               <span>📍 Bangalore, India</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           ALBUM MODAL
// // //       ================================================= */}
// // //       {selectedAlbum && (
// // //         <div
// // //           className="sg-modal"
// // //           role="dialog"
// // //           aria-modal="true"
// // //           aria-label={selectedAlbum.name}
// // //           onClick={(event) => {
// // //             if (event.target === event.currentTarget) {
// // //               closeAlbum();
// // //             }
// // //           }}
// // //         >
// // //           <div className="sg-modal__inner">
// // //             <div className="sg-modal__header">
// // //               <div>
// // //                 <span className="sg-modal__category">
// // //                   {selectedAlbum.category || "GALLERY"}
// // //                 </span>
// // //                 <h2 className="sg-modal__title">{selectedAlbum.name}</h2>
// // //                 {selectedAlbum.date && (
// // //                   <span className="sg-modal__date">
// // //                     <FaCalendarAlt />
// // //                     {new Date(selectedAlbum.date).toLocaleDateString('en-IN', { 
// // //                       day: 'numeric', 
// // //                       month: 'long', 
// // //                       year: 'numeric' 
// // //                     })}
// // //                   </span>
// // //                 )}
// // //               </div>
// // //               <button
// // //                 type="button"
// // //                 className="sg-modal__close"
// // //                 onClick={closeAlbum}
// // //                 aria-label="Close album"
// // //               >
// // //                 <FaTimes />
// // //               </button>
// // //             </div>

// // //             {getAlbumImages(selectedAlbum).length > 0 ? (
// // //               <div className="sg-modal__grid">
// // //                 {getAlbumImages(selectedAlbum).map((image) => (
// // //                   <button
// // //                     type="button"
// // //                     className="sg-modal__image"
// // //                     key={image.id || image._id}
// // //                     onClick={() => openImage(image)}
// // //                   >
// // //                     <img
// // //                       src={getImageUrl(image.imageUrl)}
// // //                       alt={image.caption || selectedAlbum.name}
// // //                       loading="lazy"
// // //                     />
// // //                     {image.caption && (
// // //                       <span className="sg-modal__image-caption">{image.caption}</span>
// // //                     )}
// // //                     <div className="sg-modal__image-overlay">
// // //                       <FaEye />
// // //                     </div>
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <div className="sg-modal__empty">
// // //                 <FaImages />
// // //                 <span>No images in this album</span>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* =================================================
// // //           SINGLE IMAGE LIGHTBOX
// // //       ================================================= */}
// // //       {selectedImage && (
// // //         <div
// // //           className="sg-lightbox"
// // //           role="dialog"
// // //           aria-modal="true"
// // //           onClick={(event) => {
// // //             if (event.target === event.currentTarget) {
// // //               closeImage();
// // //             }
// // //           }}
// // //         >
// // //           <button
// // //             type="button"
// // //             className="sg-lightbox__close"
// // //             onClick={closeImage}
// // //             aria-label="Close image"
// // //           >
// // //             <FaTimes />
// // //           </button>

// // //           <img
// // //             src={getImageUrl(selectedImage.imageUrl)}
// // //             alt={selectedImage.caption || "Gallery image"}
// // //             className="sg-lightbox__image"
// // //           />

// // //           {selectedImage.caption && (
// // //             <div className="sg-lightbox__caption">{selectedImage.caption}</div>
// // //           )}
// // //         </div>
// // //       )}
// // //     </main>
// // //   );
// // // };

// // // export default Gallery;
































// // import { useEffect, useMemo, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FaArrowRight,
// //   FaTimes,
// //   FaCamera,
// //   FaImages,
// //   FaTag,
// //   FaCalendarAlt,
// //   FaEye,
// //   FaPlay,
// //   FaChevronRight,
// //   FaInstagram,
// //   FaYoutube,
// //   FaFacebook,
// //   FaSchool,
// //   FaUsers,
// //   FaTrophy,
// //   FaBookOpen,
// //   FaStar,
// //   FaAward,
// //   FaHands,
// //   FaHeart,
// //   FaChild,
// //   FaGraduationCap,
// //   FaChalkboardTeacher,
// //   FaRunning,
// //   FaPaintBrush,
// //   FaMusic,
// //   FaTree,
// // } from "react-icons/fa";
// // import galleryService from "../services/gallery.service";
// // import "./Gallery.css";

// // const Gallery = () => {
// //   const [albums, setAlbums] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [selectedAlbum, setSelectedAlbum] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [error, setError] = useState("");

// //   const heroRef = useRef(null);
// //   const introRef = useRef(null);
// //   const directoryRef = useRef(null);
// //   const campusRef = useRef(null);
// //   const lifeRef = useRef(null);
// //   const newsRef = useRef(null);
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
// //       { ref: heroRef, className: "sg-hero--visible" },
// //       { ref: introRef, className: "sg-intro--visible" },
// //       { ref: directoryRef, className: "sg-directory--visible" },
// //       { ref: campusRef, className: "sg-campus--visible" },
// //       { ref: lifeRef, className: "sg-life--visible" },
// //       { ref: newsRef, className: "sg-news--visible" },
// //       { ref: ctaRef, className: "sg-cta--visible" },
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
// //   // FETCH GALLERY
// //   // =====================================================

// //   useEffect(() => {
// //     const loadAlbums = async () => {
// //       try {
// //         setLoading(true);
// //         setError("");

// //         const response = await galleryService.getPublishedAlbums();

// //         const items = Array.isArray(response)
// //           ? response
// //           : response?.data ||
// //             response?.albums ||
// //             response?.gallery ||
// //             [];

// //         setAlbums(items);
// //       } catch (err) {
// //         console.error("Failed to load gallery:", err);
// //         setError("Unable to load the gallery. Please try again later.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadAlbums();
// //   }, []);

// //   // =====================================================
// //   // COMPUTED VALUES
// //   // =====================================================

// //   const categories = useMemo(() => {
// //     const values = albums
// //       .map((album) => album.category)
// //       .filter(Boolean);

// //     return ["All", ...new Set(values)];
// //   }, [albums]);

// //   const filteredAlbums = useMemo(() => {
// //     if (activeCategory === "All") {
// //       return albums;
// //     }
// //     return albums.filter((album) => album.category === activeCategory);
// //   }, [albums, activeCategory]);

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

// //   const getAlbumImages = (album) => {
// //     if (!album?.images) return [];
// //     return Array.isArray(album.images) ? album.images : [];
// //   };

// //   const openAlbum = (album) => {
// //     setSelectedAlbum(album);
// //     document.body.style.overflow = "hidden";
// //   };

// //   const closeAlbum = () => {
// //     setSelectedAlbum(null);
// //     setSelectedImage(null);
// //     document.body.style.overflow = "";
// //   };

// //   const openImage = (image) => {
// //     setSelectedImage(image);
// //   };

// //   const closeImage = () => {
// //     setSelectedImage(null);
// //   };

// //   // =====================================================
// //   // DATA
// //   // =====================================================

// //   const highlights = [
// //     { icon: <FaStar />, text: "CBSE Affiliated", color: "#FFD700" },
// //     { icon: <FaAward />, text: "10+ Years of Excellence", color: "#FF6B6B" },
// //     { icon: <FaUsers />, text: "500+ Students", color: "#4ECDC4" },
// //     { icon: <FaGraduationCap />, text: "100% Results", color: "#45B7D1" },
// //   ];

// //   const lifeItems = [
// //     {
// //       icon: <FaChalkboardTeacher />,
// //       title: "Academic Excellence",
// //       description: "Interactive classrooms with modern teaching methodologies for holistic learning.",
// //       color: "#4A90D9",
// //     },
// //     {
// //       icon: <FaRunning />,
// //       title: "Sports & Fitness",
// //       description: "State-of-the-art sports facilities for cricket, football, basketball and more.",
// //       color: "#27AE60",
// //     },
// //     {
// //       icon: <FaPaintBrush />,
// //       title: "Creative Arts",
// //       description: "Art, music, dance and drama to nurture creativity and self-expression.",
// //       color: "#E67E22",
// //     },
// //     {
// //       icon: <FaTree />,
// //       title: "Nature & Environment",
// //       description: "Green campus with gardens and environmental awareness programs.",
// //       color: "#2ECC71",
// //     },
// //     {
// //       icon: <FaHeart />,
// //       title: "Values & Culture",
// //       description: "Building character through Indian values, traditions and cultural celebrations.",
// //       color: "#E74C3C",
// //     },
// //     {
// //       icon: <FaHands />,
// //       title: "Community Service",
// //       description: "Developing empathy and social responsibility through community initiatives.",
// //       color: "#9B59B6",
// //     },
// //   ];

// //   return (
// //     <main className="sg-page">
// //       {/* =================================================
// //           TOP BAR - School Identity
// //       ================================================= */}
// //       <div className="sg-topbar">
// //         <div className="sg-container">
// //           <div className="sg-topbar__content">
// //             <span className="sg-topbar__motto">
// //               <FaSchool />
// //               Shifan Noor Global Academy - Where Values Meet Excellence
// //             </span>
// //             <span className="sg-topbar__affiliation">Affiliated to CBSE</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =================================================
// //           HERO - Warm School Welcome
// //       ================================================= */}
// //       <section ref={heroRef} className="sg-hero">
// //         <div className="sg-hero__bg">
// //           <div className="sg-hero__bg-image" />
// //           <div className="sg-hero__bg-overlay" />
// //           <div className="sg-hero__bg-shape" />
// //         </div>

// //         <div className="sg-container">
// //           <div className="sg-hero__inner">
// //             <div className="sg-hero__content">
// //               <div className="sg-hero__badge">
// //                 <FaCamera />
// //                 OUR GALLERY
// //               </div>

// //               <h1 className="sg-hero__title">
// //                 Capturing
// //                 <br />
// //                 <span className="sg-hero__highlight">School Life</span>
// //               </h1>

// //               <p className="sg-hero__desc">
// //                 Welcome to the heart of SNGA! Explore the vibrant moments that 
// //                 make our school a home away from home - where every child grows, 
// //                 learns, and shines.
// //               </p>

// //               <div className="sg-hero__highlights">
// //                 {highlights.map((item, index) => (
// //                   <div key={index} className="sg-hero__highlight-item">
// //                     <span className="sg-hero__highlight-icon" style={{ color: item.color }}>
// //                       {item.icon}
// //                     </span>
// //                     <span className="sg-hero__highlight-text">{item.text}</span>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="sg-hero__actions">
// //                 <button 
// //                   className="sg-hero__btn-primary"
// //                   onClick={() => {
// //                     directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
// //                   }}
// //                 >
// //                   <span>Explore Moments</span>
// //                   <FaArrowRight />
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="sg-hero__image">
// //               <div className="sg-hero__image-wrapper">
// //                 <div className="sg-hero__image-placeholder">
// //                   <FaSchool />
// //                   <span>SNGA</span>
// //                 </div>
// //                 <div className="sg-hero__image-badge">
// //                   <span>Since 2015</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Wave Divider */}
// //         <div className="sg-hero__wave">
// //           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
// //             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
// //           </svg>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           INTRO - Welcome Message
// //       ================================================= */}
// //       <section ref={introRef} className="sg-intro">
// //         <div className="sg-container">
// //           <div className="sg-intro__inner">
// //             <div className="sg-intro__header">
// //               <span className="sg-intro__label">OUR STORY</span>
// //               <h2 className="sg-intro__title">
// //                 Every Picture Tells a
// //                 <span className="sg-intro__highlight">Story of Growth</span>
// //               </h2>
// //             </div>

// //             <div className="sg-intro__content">
// //               <p>
// //                 At Shifan Noor Global Academy, we believe that every moment matters. 
// //                 From the first bell in the morning to the last goodbye in the evening, 
// //                 our campus buzzes with the energy of young minds discovering, learning, 
// //                 and growing together.
// //               </p>
// //               <p>
// //                 Our gallery is a window into this beautiful journey - showcasing the 
// //                 smiles, the achievements, the friendships, and the countless memories 
// //                 that make school life truly special.
// //               </p>
// //               <div className="sg-intro__school-values">
// //                 <div className="sg-intro__value">
// //                   <FaChild />
// //                   <span>Nurturing</span>
// //                 </div>
// //                 <div className="sg-intro__value">
// //                   <FaBookOpen />
// //                   <span>Excellence</span>
// //                 </div>
// //                 <div className="sg-intro__value">
// //                   <FaHands />
// //                   <span>Values</span>
// //                 </div>
// //                 <div className="sg-intro__value">
// //                   <FaStar />
// //                   <span>Innovation</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           DIRECTORY - Gallery Grid
// //       ================================================= */}
// //       <section ref={directoryRef} className="sg-directory">
// //         <div className="sg-container">
// //           <div className="sg-directory__header">
// //             <div>
// //               <span className="sg-directory__label">GALLERY</span>
// //               <h2 className="sg-directory__title">
// //                 Our <span className="sg-directory__highlight">School Moments</span>
// //               </h2>
// //             </div>
// //             <p className="sg-directory__desc">
// //               Browse through our collection of memorable moments from various school activities.
// //             </p>
// //           </div>

// //           {/* Filters */}
// //           {!loading && categories.length > 1 && (
// //             <div className="sg-directory__filters">
// //               <button
// //                 type="button"
// //                 className={`sg-directory__filter ${activeCategory === "All" ? "sg-directory__filter--active" : ""}`}
// //                 onClick={() => setActiveCategory("All")}
// //               >
// //                 All
// //               </button>
// //               {categories.filter(c => c !== "All").map((category) => (
// //                 <button
// //                   type="button"
// //                   key={category}
// //                   className={`sg-directory__filter ${
// //                     activeCategory === category ? "sg-directory__filter--active" : ""
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
// //             <div className="sg-directory__state">
// //               <div className="sg-directory__loader">
// //                 <span />
// //                 <span />
// //                 <span />
// //               </div>
// //               <span>Loading memories...</span>
// //             </div>
// //           )}

// //           {!loading && error && (
// //             <div className="sg-directory__state sg-directory__state--error">
// //               <span>{error}</span>
// //             </div>
// //           )}

// //           {!loading && !error && filteredAlbums.length === 0 && (
// //             <div className="sg-directory__state sg-directory__state--empty">
// //               <div className="sg-directory__empty-icon">
// //                 <FaImages />
// //               </div>
// //               <h3>No Memories Yet</h3>
// //               <p>Check back soon for new photos from our school activities.</p>
// //             </div>
// //           )}

// //           {/* Album Grid */}
// //           {!loading && !error && filteredAlbums.length > 0 && (
// //             <div className="sg-directory__grid">
// //               {filteredAlbums.map((album, index) => {
// //                 const images = getAlbumImages(album);
// //                 const coverImage = album.coverImage || (images.length > 0 ? images[0].imageUrl : null);

// //                 return (
// //                   <div key={album.id || album._id} className="sg-directory__card">
// //                     <button
// //                       type="button"
// //                       className="sg-directory__card-image"
// //                       onClick={() => openAlbum(album)}
// //                     >
// //                       {coverImage ? (
// //                         <img
// //                           src={getImageUrl(coverImage)}
// //                           alt={album.name}
// //                           loading="lazy"
// //                         />
// //                       ) : (
// //                         <div className="sg-directory__card-placeholder">
// //                           <FaImages />
// //                         </div>
// //                       )}
// //                       <div className="sg-directory__card-overlay">
// //                         <span className="sg-directory__card-count">
// //                           <FaImages />
// //                           {images.length} photos
// //                         </span>
// //                       </div>
// //                     </button>

// //                     <div className="sg-directory__card-content">
// //                       <div className="sg-directory__card-meta">
// //                         {album.category && (
// //                           <span className="sg-directory__card-category">
// //                             {album.category}
// //                           </span>
// //                         )}
// //                         {album.date && (
// //                           <span className="sg-directory__card-date">
// //                             <FaCalendarAlt />
// //                             {new Date(album.date).toLocaleDateString('en-IN', { 
// //                               day: 'numeric', 
// //                               month: 'short', 
// //                               year: 'numeric' 
// //                             })}
// //                           </span>
// //                         )}
// //                       </div>

// //                       <h3 className="sg-directory__card-title">{album.name}</h3>

// //                       {album.description && (
// //                         <p className="sg-directory__card-desc">{album.description}</p>
// //                       )}

// //                       <button
// //                         type="button"
// //                         className="sg-directory__card-link"
// //                         onClick={() => openAlbum(album)}
// //                       >
// //                         <span>View Album</span>
// //                         <FaArrowRight />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* =================================================
// //           CAMPUS LIFE - School Highlights
// //       ================================================= */}
// //       <section ref={campusRef} className="sg-campus">
// //         <div className="sg-campus__bg" />

// //         <div className="sg-container">
// //           <div className="sg-campus__inner">
// //             <div className="sg-campus__header">
// //               <span className="sg-campus__label">CAMPUS LIFE</span>
// //               <h2 className="sg-campus__title">
// //                 Where <span className="sg-campus__highlight">Learning Comes Alive</span>
// //               </h2>
// //               <p className="sg-campus__desc">
// //                 Our campus is more than just buildings - it's a vibrant community where 
// //                 every corner tells a story of learning, friendship, and growth.
// //               </p>
// //             </div>

// //             <div className="sg-campus__features">
// //               <div className="sg-campus__feature">
// //                 <div className="sg-campus__feature-icon">
// //                   <FaChalkboardTeacher />
// //                 </div>
// //                 <h4>Smart Classrooms</h4>
// //                 <p>Interactive learning with modern technology</p>
// //               </div>
// //               <div className="sg-campus__feature">
// //                 <div className="sg-campus__feature-icon">
// //                   <FaRunning />
// //                 </div>
// //                 <h4>Sports Facilities</h4>
// //                 <p>Indoor & outdoor games for all-round development</p>
// //               </div>
// //               <div className="sg-campus__feature">
// //                 <div className="sg-campus__feature-icon">
// //                   <FaPaintBrush />
// //                 </div>
// //                 <h4>Creative Spaces</h4>
// //                 <p>Art, music, and innovation labs</p>
// //               </div>
// //               <div className="sg-campus__feature">
// //                 <div className="sg-campus__feature-icon">
// //                   <FaTree />
// //                 </div>
// //                 <h4>Green Campus</h4>
// //                 <p>Lush gardens and eco-friendly environment</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           SCHOOL LIFE - Activities Grid
// //       ================================================= */}
// //       <section ref={lifeRef} className="sg-life">
// //         <div className="sg-container">
// //           <div className="sg-life__header">
// //             <div>
// //               <span className="sg-life__label">OUR ACTIVITIES</span>
// //               <h2 className="sg-life__title">
// //                 Beyond the <span className="sg-life__highlight">Classroom</span>
// //               </h2>
// //             </div>
// //             <p className="sg-life__desc">
// //               Learning extends beyond textbooks. Explore our diverse activities that shape young minds.
// //             </p>
// //           </div>

// //           <div className="sg-life__grid">
// //             {lifeItems.map((item, index) => (
// //               <div key={index} className="sg-life__item">
// //                 <div className="sg-life__item-icon" style={{ background: item.color + '20', color: item.color }}>
// //                   {item.icon}
// //                 </div>
// //                 <h3 className="sg-life__item-title">{item.title}</h3>
// //                 <p className="sg-life__item-desc">{item.description}</p>
// //                 <div className="sg-life__item-arrow">
// //                   <FaChevronRight />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           SCHOOL NEWS & EVENTS
// //       ================================================= */}
// //       <section ref={newsRef} className="sg-news">
// //         <div className="sg-news__bg" />
// //         <div className="sg-news__pattern" />

// //         <div className="sg-container">
// //           <div className="sg-news__inner">
// //             <div className="sg-news__content">
// //               <span className="sg-news__label">STAY CONNECTED</span>
// //               <h2 className="sg-news__title">
// //                 Latest <span className="sg-news__highlight">News & Events</span>
// //               </h2>
// //               <p className="sg-news__desc">
// //                 Stay updated with the latest happenings at SNGA. From academic achievements 
// //                 to cultural celebrations, there's always something exciting happening.
// //               </p>
// //               <Link to="/news" className="sg-news__link">
// //                 <span>View All Updates</span>
// //                 <FaArrowRight />
// //               </Link>
// //             </div>

// //             <div className="sg-news__features">
// //               <div className="sg-news__feature">
// //                 <FaTrophy />
// //                 <span>Achievements</span>
// //               </div>
// //               <div className="sg-news__feature">
// //                 <FaCalendarAlt />
// //                 <span>Events</span>
// //               </div>
// //               <div className="sg-news__feature">
// //                 <FaUsers />
// //                 <span>Community</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           FINAL CTA - School Pride
// //       ================================================= */}
// //       <section ref={ctaRef} className="sg-cta">
// //         <div className="sg-cta__bg">
// //           <div className="sg-cta__bg-image" />
// //           <div className="sg-cta__bg-overlay" />
// //         </div>

// //         <div className="sg-container">
// //           <div className="sg-cta__content">
// //             <div className="sg-cta__badge">
// //               <FaSchool />
// //               SHIFAN NOOR GLOBAL ACADEMY
// //             </div>
// //             <h2 className="sg-cta__title">
// //               Be a Part of
// //               <br />
// //               <span className="sg-cta__highlight">Our Journey</span>
// //             </h2>
// //             <p className="sg-cta__desc">
// //               Join us in creating beautiful memories and building a bright future 
// //               for every child. At SNGA, we don't just teach - we inspire.
// //             </p>

// //             <div className="sg-cta__actions">
// //               <Link to="/admissions" className="sg-cta__btn sg-cta__btn--primary">
// //                 <span>Admissions Open</span>
// //                 <FaArrowRight />
// //               </Link>
// //               <Link to="/contact" className="sg-cta__btn sg-cta__btn--secondary">
// //                 Visit Campus
// //               </Link>
// //             </div>

// //             <div className="sg-cta__footer">
// //               <span>📞 +91 98765 43210</span>
// //               <span>✉️ info@snga.edu.in</span>
// //               <span>📍 Bangalore, India</span>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           ALBUM MODAL
// //       ================================================= */}
// //       {selectedAlbum && (
// //         <div
// //           className="sg-modal"
// //           role="dialog"
// //           aria-modal="true"
// //           aria-label={selectedAlbum.name}
// //           onClick={(event) => {
// //             if (event.target === event.currentTarget) {
// //               closeAlbum();
// //             }
// //           }}
// //         >
// //           <div className="sg-modal__inner">
// //             <div className="sg-modal__header">
// //               <div>
// //                 <span className="sg-modal__category">
// //                   {selectedAlbum.category || "GALLERY"}
// //                 </span>
// //                 <h2 className="sg-modal__title">{selectedAlbum.name}</h2>
// //                 {selectedAlbum.date && (
// //                   <span className="sg-modal__date">
// //                     <FaCalendarAlt />
// //                     {new Date(selectedAlbum.date).toLocaleDateString('en-IN', { 
// //                       day: 'numeric', 
// //                       month: 'long', 
// //                       year: 'numeric' 
// //                     })}
// //                   </span>
// //                 )}
// //               </div>
// //               <button
// //                 type="button"
// //                 className="sg-modal__close"
// //                 onClick={closeAlbum}
// //                 aria-label="Close album"
// //               >
// //                 <FaTimes />
// //               </button>
// //             </div>

// //             {getAlbumImages(selectedAlbum).length > 0 ? (
// //               <div className="sg-modal__grid">
// //                 {getAlbumImages(selectedAlbum).map((image) => (
// //                   <button
// //                     type="button"
// //                     className="sg-modal__image"
// //                     key={image.id || image._id}
// //                     onClick={() => openImage(image)}
// //                   >
// //                     <img
// //                       src={getImageUrl(image.imageUrl)}
// //                       alt={image.caption || selectedAlbum.name}
// //                       loading="lazy"
// //                     />
// //                     {image.caption && (
// //                       <span className="sg-modal__image-caption">{image.caption}</span>
// //                     )}
// //                     <div className="sg-modal__image-overlay">
// //                       <FaEye />
// //                     </div>
// //                   </button>
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className="sg-modal__empty">
// //                 <FaImages />
// //                 <span>No images in this album</span>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {/* =================================================
// //           SINGLE IMAGE LIGHTBOX
// //       ================================================= */}
// //       {selectedImage && (
// //         <div
// //           className="sg-lightbox"
// //           role="dialog"
// //           aria-modal="true"
// //           onClick={(event) => {
// //             if (event.target === event.currentTarget) {
// //               closeImage();
// //             }
// //           }}
// //         >
// //           <button
// //             type="button"
// //             className="sg-lightbox__close"
// //             onClick={closeImage}
// //             aria-label="Close image"
// //           >
// //             <FaTimes />
// //           </button>

// //           <img
// //             src={getImageUrl(selectedImage.imageUrl)}
// //             alt={selectedImage.caption || "Gallery image"}
// //             className="sg-lightbox__image"
// //           />

// //           {selectedImage.caption && (
// //             <div className="sg-lightbox__caption">{selectedImage.caption}</div>
// //           )}
// //         </div>
// //       )}
// //     </main>
// //   );
// // };

// // export default Gallery;


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
//    FaPhone, 
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import galleryService from "../services/gallery.service";
// import "./Gallery.css";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
//   ctaBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
//   academics: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
//   sports: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=800&q=80",
//   arts: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
//   nature: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
//   values: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
//   community: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
//   campus1: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
//   campus2: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//   campus3: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
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
//                 <div className="sg-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div>
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
//       <section className="sg-featured">
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
//       </section>

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
//               <span><FaMapMarkerAlt /> Bangalore, India</span>
//               <span><FaClock /> Mon-Sat 8:00 AM - 4:00 PM</span>
//               <span><FaPhone /> +91 98765 43210</span>
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
import {
  FaArrowRight,
  FaTimes,
  FaCamera,
  FaImages,
  FaTag,
  FaCalendarAlt,
  FaEye,
  FaPlay,
  FaChevronRight,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaSchool,
  FaUsers,
  FaTrophy,
  FaBookOpen,
  FaStar,
  FaAward,
  FaHands,
  FaHeart,
  FaChild,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaRunning,
  FaPaintBrush,
  FaMusic,
  FaTree,
  FaQuoteLeft,
  FaClock,
  FaMapMarkerAlt,
  FaPhone, // ✅ Added missing import
  FaEnvelope, // ✅ Added for email
} from "react-icons/fa";
import galleryService from "../services/gallery.service";
import "./Gallery.css";

import heroBg from "../assets/school.JPG";
import heroCircle from "../assets/about.png";
import ctaBg from "../assets/engaging.jpg";
import Academics from "../assets/teaching.jpg";
import sports from "../assets/sports.JPG";
import arts from "../assets/arts.jpg";
import nature from "../assets/camp.jpg";
import value from "../assets/values.jpg";
import community from "../assets/about-school.jpg";
import campus1 from "../assets/camp.jpg";
import campus2 from "../assets/campus.jpg";
import campus3 from "../assets/school.JPG";
// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  academics: Academics,
  sports: sports,
  arts: arts,
  nature: nature,
  values: value,
  community: community,
  campus1: campus1,
  campus2: campus2,
  campus3: campus3,
};

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const directoryRef = useRef(null);
  const campusRef = useRef(null);
  const lifeRef = useRef(null);
  const newsRef = useRef(null);
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
      { ref: heroRef, className: "sg-hero--visible" },
      { ref: introRef, className: "sg-intro--visible" },
      { ref: directoryRef, className: "sg-directory--visible" },
      { ref: campusRef, className: "sg-campus--visible" },
      { ref: lifeRef, className: "sg-life--visible" },
      { ref: newsRef, className: "sg-news--visible" },
      { ref: ctaRef, className: "sg-cta--visible" },
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
  // FETCH GALLERY
  // =====================================================

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
        setError("Unable to load the gallery. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadAlbums();
  }, []);

  // =====================================================
  // COMPUTED VALUES
  // =====================================================

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
    return albums.filter((album) => album.category === activeCategory);
  }, [albums, activeCategory]);

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

  const getAlbumImages = (album) => {
    if (!album?.images) return [];
    return Array.isArray(album.images) ? album.images : [];
  };

  const openAlbum = (album) => {
    setSelectedAlbum(album);
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

  // =====================================================
  // DATA
  // =====================================================

  const stats = [
    { number: "500+", label: "Students", icon: <FaUsers /> },
    { number: "50+", label: "Teachers", icon: <FaChalkboardTeacher /> },
    { number: "15+", label: "Activities", icon: <FaStar /> },
    { number: "100%", label: "Results", icon: <FaTrophy /> },
  ];

  const featuredAlbums = [
    { 
      title: "Annual Day Celebration", 
      category: "Events",
      image: IMAGES.campus1,
      date: "Dec 2024",
      count: 45
    },
    { 
      title: "Sports Day 2024", 
      category: "Sports",
      image: IMAGES.sports,
      date: "Nov 2024",
      count: 32
    },
    { 
      title: "Art Exhibition", 
      category: "Arts",
      image: IMAGES.arts,
      date: "Oct 2024",
      count: 28
    },
  ];

  const lifeItems = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Academic Excellence",
      description: "Interactive classrooms with modern teaching methodologies for holistic learning.",
      image: IMAGES.academics,
      color: "#4A90D9",
    },
    {
      icon: <FaRunning />,
      title: "Sports & Fitness",
      description: "State-of-the-art sports facilities for cricket, football, basketball and more.",
      image: IMAGES.sports,
      color: "#27AE60",
    },
    {
      icon: <FaPaintBrush />,
      title: "Creative Arts",
      description: "Art, music, dance and drama to nurture creativity and self-expression.",
      image: IMAGES.arts,
      color: "#E67E22",
    },
    {
      icon: <FaTree />,
      title: "Nature & Environment",
      description: "Green campus with gardens and environmental awareness programs.",
      image: IMAGES.nature,
      color: "#2ECC71",
    },
    {
      icon: <FaHeart />,
      title: "Values & Culture",
      description: "Building character through Indian values, traditions and cultural celebrations.",
      image: IMAGES.values,
      color: "#E74C3C",
    },
    {
      icon: <FaHands />,
      title: "Community Service",
      description: "Developing empathy and social responsibility through community initiatives.",
      image: IMAGES.community,
      color: "#9B59B6",
    },
  ];

  return (
    <main className="sg-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sg-topbar">
        <div className="sg-container">
          <div className="sg-topbar__content">
            <span className="sg-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sg-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sg-hero">
        <div className="sg-hero__bg-wrapper">
          <div 
            className="sg-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sg-hero__bg-overlay" />
          <div className="sg-hero__bg-gradient" />
        </div>

        <div className="sg-container">
          <div className="sg-hero__inner">
            <div className="sg-hero__content">
              <div className="sg-hero__badge">
                <FaCamera />
                OUR GALLERY
              </div>

              <h1 className="sg-hero__title">
                Capturing
                <br />
                <span className="sg-hero__highlight">School Life</span>
              </h1>

              <p className="sg-hero__desc">
                Welcome to the heart of SNGA! Explore the vibrant moments that 
                make our school a home away from home.
              </p>

              <div className="sg-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sg-hero__stat">
                    <span className="sg-hero__stat-icon">{stat.icon}</span>
                    <span className="sg-hero__stat-number">{stat.number}</span>
                    <span className="sg-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
{/* 
              <div className="sg-hero__actions">
                <button 
                  className="sg-hero__btn-primary"
                  onClick={() => {
                    directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Explore Moments</span>
                  <FaArrowRight />
                </button>
                <button className="sg-hero__btn-secondary">
                  <FaPlay />
                  <span>Watch Story</span>
                </button>
              </div> */}
            </div>

            <div className="sg-hero__image-wrapper">
              <div className="sg-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA School" 
                  className="sg-hero__image-img"
                />
                <div className="sg-hero__image-ring" />
                <div className="sg-hero__image-badge">
                  <span>Since 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sg-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sg-intro">
        <div className="sg-container">
          <div className="sg-intro__inner">
            <div className="sg-intro__header">
              <span className="sg-intro__label">OUR STORY</span>
              <h2 className="sg-intro__title">
                Every Picture Tells a
                <span className="sg-intro__highlight">Story of Growth</span>
              </h2>
            </div>

            <div className="sg-intro__content">
              <p>
                At Shifan Noor Global Academy, we believe that every moment matters. 
                From the first bell in the morning to the last goodbye in the evening, 
                our campus buzzes with the energy of young minds discovering, learning, 
                and growing together.
              </p>
              <p>
                Our gallery is a window into this beautiful journey - showcasing the 
                smiles, the achievements, the friendships, and the countless memories 
                that make school life truly special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FEATURED ALBUMS - Horizontal Scroll Cards
      ================================================= */}
      {/* <section className="sg-featured">
        <div className="sg-container">
          <div className="sg-featured__header">
            <div>
              <span className="sg-featured__label">FEATURED</span>
              <h2 className="sg-featured__title">
                Latest <span className="sg-featured__highlight">Moments</span>
              </h2>
            </div>
            <Link to="/gallery" className="sg-featured__view-all">
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="sg-featured__scroll">
            {featuredAlbums.map((album, index) => (
              <div key={index} className="sg-featured__card">
                <div className="sg-featured__card-image">
                  <img src={album.image} alt={album.title} loading="lazy" />
                  <div className="sg-featured__card-overlay">
                    <span className="sg-featured__card-category">{album.category}</span>
                    <span className="sg-featured__card-count">
                      <FaImages /> {album.count} photos
                    </span>
                  </div>
                </div>
                <div className="sg-featured__card-content">
                  <h3>{album.title}</h3>
                  <span><FaCalendarAlt /> {album.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* =================================================
          DIRECTORY - Gallery Grid
      ================================================= */}
      <section ref={directoryRef} className="sg-directory">
        <div className="sg-container">
          <div className="sg-directory__header">
            <div>
              <span className="sg-directory__label">GALLERY</span>
              <h2 className="sg-directory__title">
                Our <span className="sg-directory__highlight">School Moments</span>
              </h2>
            </div>
            <p className="sg-directory__desc">
              Browse through our collection of memorable moments from various school activities.
            </p>
          </div>

          {/* Filters */}
          {!loading && categories.length > 1 && (
            <div className="sg-directory__filters">
              <button
                type="button"
                className={`sg-directory__filter ${activeCategory === "All" ? "sg-directory__filter--active" : ""}`}
                onClick={() => setActiveCategory("All")}
              >
                All
              </button>
              {categories.filter(c => c !== "All").map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`sg-directory__filter ${
                    activeCategory === category ? "sg-directory__filter--active" : ""
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
            <div className="sg-directory__state">
              <div className="sg-directory__loader">
                <span />
                <span />
                <span />
              </div>
              <span>Loading memories...</span>
            </div>
          )}

          {!loading && error && (
            <div className="sg-directory__state sg-directory__state--error">
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && filteredAlbums.length === 0 && (
            <div className="sg-directory__state sg-directory__state--empty">
              <div className="sg-directory__empty-icon">
                <FaImages />
              </div>
              <h3>No Memories Yet</h3>
              <p>Check back soon for new photos from our school activities.</p>
            </div>
          )}

          {/* Album Grid */}
          {!loading && !error && filteredAlbums.length > 0 && (
            <div className="sg-directory__grid">
              {filteredAlbums.map((album, index) => {
                const images = getAlbumImages(album);
                const coverImage = album.coverImage || (images.length > 0 ? images[0].imageUrl : null);

                return (
                  <div key={album.id || album._id} className="sg-directory__card">
                    <button
                      type="button"
                      className="sg-directory__card-image"
                      onClick={() => openAlbum(album)}
                    >
                      {coverImage ? (
                        <img
                          src={getImageUrl(coverImage)}
                          alt={album.name}
                          loading="lazy"
                        />
                      ) : (
                        <div className="sg-directory__card-placeholder">
                          <FaImages />
                        </div>
                      )}
                      <div className="sg-directory__card-overlay">
                        <span className="sg-directory__card-count">
                          <FaImages />
                          {images.length} photos
                        </span>
                      </div>
                    </button>

                    <div className="sg-directory__card-content">
                      <div className="sg-directory__card-meta">
                        {album.category && (
                          <span className="sg-directory__card-category">
                            {album.category}
                          </span>
                        )}
                        {album.date && (
                          <span className="sg-directory__card-date">
                            <FaCalendarAlt />
                            {new Date(album.date).toLocaleDateString('en-IN', { 
                              day: 'numeric', 
                              month: 'short', 
                              year: 'numeric' 
                            })}
                          </span>
                        )}
                      </div>

                      <h3 className="sg-directory__card-title">{album.name}</h3>

                      {album.description && (
                        <p className="sg-directory__card-desc">{album.description}</p>
                      )}

                      <button
                        type="button"
                        className="sg-directory__card-link"
                        onClick={() => openAlbum(album)}
                      >
                        <span>View Album</span>
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          CAMPUS LIFE - School Highlights
      ================================================= */}
      <section ref={campusRef} className="sg-campus">
        <div className="sg-campus__bg" />

        <div className="sg-container">
          <div className="sg-campus__inner">
            <div className="sg-campus__header">
              <span className="sg-campus__label">CAMPUS LIFE</span>
              <h2 className="sg-campus__title">
                Where <span className="sg-campus__highlight">Learning Comes Alive</span>
              </h2>
              <p className="sg-campus__desc">
                Our campus is more than just buildings - it's a vibrant community where 
                every corner tells a story of learning, friendship, and growth.
              </p>
            </div>

            <div className="sg-campus__grid">
              <div className="sg-campus__card">
                <img src={IMAGES.campus1} alt="Campus" loading="lazy" />
                <div className="sg-campus__card-overlay">
                  <h4>Smart Classrooms</h4>
                  <p>Interactive learning with modern technology</p>
                </div>
              </div>
              <div className="sg-campus__card">
                <img src={IMAGES.campus2} alt="Campus" loading="lazy" />
                <div className="sg-campus__card-overlay">
                  <h4>Sports Facilities</h4>
                  <p>Indoor & outdoor games for all-round development</p>
                </div>
              </div>
              <div className="sg-campus__card">
                <img src={IMAGES.campus3} alt="Campus" loading="lazy" />
                <div className="sg-campus__card-overlay">
                  <h4>Green Campus</h4>
                  <p>Lush gardens and eco-friendly environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SCHOOL LIFE - Activities Grid
      ================================================= */}
      <section ref={lifeRef} className="sg-life">
        <div className="sg-container">
          <div className="sg-life__header">
            <div>
              <span className="sg-life__label">OUR ACTIVITIES</span>
              <h2 className="sg-life__title">
                Beyond the <span className="sg-life__highlight">Classroom</span>
              </h2>
            </div>
            <p className="sg-life__desc">
              Learning extends beyond textbooks. Explore our diverse activities that shape young minds.
            </p>
          </div>

          <div className="sg-life__grid">
            {lifeItems.map((item, index) => (
              <div key={index} className="sg-life__card">
                <div className="sg-life__card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="sg-life__card-overlay">
                    <div className="sg-life__card-icon" style={{ background: item.color + '20', color: item.color }}>
                      {item.icon}
                    </div>
                    <h3 className="sg-life__card-title">{item.title}</h3>
                    <p className="sg-life__card-desc">{item.description}</p>
                    <span className="sg-life__card-arrow">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          SCHOOL NEWS & EVENTS
      ================================================= */}
      <section ref={newsRef} className="sg-news">
        <div className="sg-news__bg" />
        <div className="sg-news__pattern" />

        <div className="sg-container">
          <div className="sg-news__inner">
            <div className="sg-news__content">
              <span className="sg-news__label">STAY CONNECTED</span>
              <h2 className="sg-news__title">
                Latest <span className="sg-news__highlight">News & Events</span>
              </h2>
              <p className="sg-news__desc">
                Stay updated with the latest happenings at SNGA. From academic achievements 
                to cultural celebrations, there's always something exciting happening.
              </p>
              <Link to="/news" className="sg-news__link">
                <span>View All Updates</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sg-news__features">
              <div className="sg-news__feature">
                <FaTrophy />
                <span>Achievements</span>
              </div>
              <div className="sg-news__feature">
                <FaCalendarAlt />
                <span>Events</span>
              </div>
              <div className="sg-news__feature">
                <FaUsers />
                <span>Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="sg-cta">
        <div className="sg-cta__bg-wrapper">
          <div 
            className="sg-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sg-cta__bg-overlay" />
          <div className="sg-cta__bg-gradient" />
        </div>

        <div className="sg-container">
          <div className="sg-cta__content">
            <div className="sg-cta__badge">
              <FaSchool />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>
            <h2 className="sg-cta__title">
              Be a Part of
              <br />
              <span className="sg-cta__highlight">Our Journey</span>
            </h2>
            <p className="sg-cta__desc">
              Join us in creating beautiful memories and building a bright future 
              for every child. At SNGA, we don't just teach - we inspire.
            </p>

            <div className="sg-cta__actions">
              <Link to="/admissions" className="sg-cta__btn sg-cta__btn--primary">
                <span>Admissions Open</span>
                <FaArrowRight />
              </Link>
              <Link to="/contact" className="sg-cta__btn sg-cta__btn--secondary">
                Visit Campus
              </Link>
            </div>

            <div className="sg-cta__footer">
              <span>
                <FaMapMarkerAlt /> Bangalore, India
              </span>
              <span>
                <FaClock /> Mon-Sat 8:00 AM - 4:00 PM
              </span>
              <span>
                <FaPhone /> +91 98765 43210
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ALBUM MODAL
      ================================================= */}
      {selectedAlbum && (
        <div
          className="sg-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedAlbum.name}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeAlbum();
            }
          }}
        >
          <div className="sg-modal__inner">
            <div className="sg-modal__header">
              <div>
                <span className="sg-modal__category">
                  {selectedAlbum.category || "GALLERY"}
                </span>
                <h2 className="sg-modal__title">{selectedAlbum.name}</h2>
                {selectedAlbum.date && (
                  <span className="sg-modal__date">
                    <FaCalendarAlt />
                    {new Date(selectedAlbum.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                )}
              </div>
              <button
                type="button"
                className="sg-modal__close"
                onClick={closeAlbum}
                aria-label="Close album"
              >
                <FaTimes />
              </button>
            </div>

            {getAlbumImages(selectedAlbum).length > 0 ? (
              <div className="sg-modal__grid">
                {getAlbumImages(selectedAlbum).map((image) => (
                  <button
                    type="button"
                    className="sg-modal__image"
                    key={image.id || image._id}
                    onClick={() => openImage(image)}
                  >
                    <img
                      src={getImageUrl(image.imageUrl)}
                      alt={image.caption || selectedAlbum.name}
                      loading="lazy"
                    />
                    {image.caption && (
                      <span className="sg-modal__image-caption">{image.caption}</span>
                    )}
                    <div className="sg-modal__image-overlay">
                      <FaEye />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="sg-modal__empty">
                <FaImages />
                <span>No images in this album</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =================================================
          SINGLE IMAGE LIGHTBOX
      ================================================= */}
      {selectedImage && (
        <div
          className="sg-lightbox"
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
            className="sg-lightbox__close"
            onClick={closeImage}
            aria-label="Close image"
          >
            <FaTimes />
          </button>

          <img
            src={getImageUrl(selectedImage.imageUrl)}
            alt={selectedImage.caption || "Gallery image"}
            className="sg-lightbox__image"
          />

          {selectedImage.caption && (
            <div className="sg-lightbox__caption">{selectedImage.caption}</div>
          )}
        </div>
      )}
    </main>
  );
};

export default Gallery;