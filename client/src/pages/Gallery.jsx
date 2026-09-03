// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight, FaTimes } from "react-icons/fa";

// import galleryService from "../services/gallery.service";
// import "./Gallery.css";

// const Gallery = () => {
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadAlbums = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await galleryService.getGallery();

//         const items = Array.isArray(response)
//           ? response
//           : response?.data ||
//             response?.albums ||
//             response?.gallery ||
//             [];

//         setAlbums(items);
//       } catch (err) {
//         console.error("Failed to load gallery:", err);
//         setError("Unable to load the gallery.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAlbums();
//   }, []);

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

//     return albums.filter(
//       (album) => album.category === activeCategory
//     );
//   }, [albums, activeCategory]);

//   const getImageUrl = (image) => {
//     if (!image) return "";

//     if (
//       image.startsWith("http://") ||
//       image.startsWith("https://")
//     ) {
//       return image;
//     }

//     const API_URL =
//       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//       "http://localhost:5000";

//     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
//   };

//   const getAlbumImages = (album) => {
//     if (!album?.images) return [];

//     return Array.isArray(album.images)
//       ? album.images
//       : [];
//   };

//   const openAlbum = (album) => {
//     setSelectedAlbum(album);
//   };

//   const closeAlbum = () => {
//     setSelectedAlbum(null);
//     setSelectedImage(null);
//   };

//   const openImage = (image) => {
//     setSelectedImage(image);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <main className="gallery-page">

//       {/* HERO */}
//       <section className="gallery-hero">
//         <div className="gallery-container">

//           <div className="gallery-hero-content">

//             <div className="gallery-eyebrow">
//               <span />
//               GALLERY
//             </div>

//             <h1>
//               Life at SNGA,
//               <br />
//               <em>captured.</em>
//             </h1>

//             <p>
//               Explore the people, places, activities and
//               moments that make the Shifan Noor Global
//               Academy experience memorable.
//             </p>

//           </div>

//           <div className="gallery-hero-side">
//             <span>LEARN</span>
//             <span>PLAY</span>
//             <span>CREATE</span>
//             <span>CELEBRATE</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="gallery-intro">
//         <div className="gallery-container">

//           <div className="gallery-intro-label">
//             MOMENTS FROM SNGA
//           </div>

//           <div className="gallery-intro-grid">

//             <h2>
//               Every moment
//               <br />
//               tells a <em>story.</em>
//             </h2>

//             <div className="gallery-intro-copy">

//               <p>
//                 School life is filled with experiences that
//                 happen both inside and outside the classroom.
//               </p>

//               <p>
//                 From learning and sports to celebrations,
//                 activities and everyday campus life, the
//                 gallery brings these moments together.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* GALLERY DIRECTORY */}
//       <section className="gallery-directory">

//         <div className="gallery-container">

//           <div className="gallery-directory-header">

//             <div>

//               <div className="gallery-eyebrow dark">
//                 EXPLORE THE GALLERY
//               </div>

//               <h2>
//                 See SNGA
//                 <br />
//                 <em>in moments.</em>
//               </h2>

//             </div>

//             <p>
//               Browse albums from across school life,
//               activities and events.
//             </p>

//           </div>

//           {/* FILTERS */}
//           {!loading && categories.length > 1 && (
//             <div className="gallery-filters">

//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={
//                     activeCategory === category
//                       ? "active"
//                       : ""
//                   }
//                   onClick={() =>
//                     setActiveCategory(category)
//                   }
//                 >
//                   {category}
//                 </button>
//               ))}

//             </div>
//           )}

//           {/* LOADING */}
//           {loading && (
//             <div className="gallery-state">
//               <span>LOADING GALLERY</span>
//             </div>
//           )}

//           {/* ERROR */}
//           {!loading && error && (
//             <div className="gallery-state gallery-error">
//               <span>{error}</span>
//             </div>
//           )}

//           {/* EMPTY */}
//           {!loading &&
//             !error &&
//             filteredAlbums.length === 0 && (
//               <div className="gallery-state">

//                 <span>
//                   NO ALBUMS YET
//                 </span>

//                 <h3>
//                   New moments will appear here.
//                 </h3>

//                 <p>
//                   Gallery albums can be published from
//                   the administration panel.
//                 </p>

//               </div>
//             )}

//           {/* ALBUM GRID */}
//           {!loading &&
//             !error &&
//             filteredAlbums.length > 0 && (
//               <div className="gallery-album-grid">

//                 {filteredAlbums.map((album, index) => {

//                   const images = getAlbumImages(album);

//                   return (
//                     <article
//                       className="gallery-album"
//                       key={album.id}
//                     >

//                       <button
//                         type="button"
//                         className="gallery-album-image"
//                         onClick={() =>
//                           openAlbum(album)
//                         }
//                       >

//                         {album.coverImage ? (
//                           <img
//                             src={getImageUrl(
//                               album.coverImage
//                             )}
//                             alt={album.name}
//                           />
//                         ) : images.length > 0 ? (
//                           <img
//                             src={getImageUrl(
//                               images[0].imageUrl
//                             )}
//                             alt={album.name}
//                           />
//                         ) : (
//                           <div className="gallery-image-placeholder">
//                             SNGA
//                           </div>
//                         )}

//                         <span className="gallery-album-number">
//                           {String(index + 1).padStart(2, "0")}
//                         </span>

//                         <span className="gallery-album-count">
//                           {images.length}{" "}
//                           {images.length === 1
//                             ? "IMAGE"
//                             : "IMAGES"}
//                         </span>

//                       </button>

//                       <div className="gallery-album-content">

//                         <div className="gallery-album-meta">

//                           {album.category && (
//                             <span>
//                               {album.category}
//                             </span>
//                           )}

//                         </div>

//                         <h3>
//                           {album.name}
//                         </h3>

//                         {album.description && (
//                           <p>
//                             {album.description}
//                           </p>
//                         )}

//                         <button
//                           type="button"
//                           className="gallery-view-link"
//                           onClick={() =>
//                             openAlbum(album)
//                           }
//                         >
//                           <span>View Album</span>
//                           <FaArrowRight />
//                         </button>

//                       </div>

//                     </article>
//                   );
//                 })}

//               </div>
//             )}

//         </div>

//       </section>

//       {/* CAMPUS CONNECTION */}
//       <section className="gallery-campus">

//         <div className="gallery-container">

//           <div className="gallery-campus-grid">

//             <div className="gallery-campus-heading">

//               <div className="gallery-eyebrow">
//                 THE CAMPUS
//               </div>

//               <h2>
//                 A place to
//                 <br />
//                 <em>learn and grow.</em>
//               </h2>

//             </div>

//             <div className="gallery-campus-copy">

//               <p>
//                 The SNGA campus provides a calm and spacious
//                 environment where students can learn, participate
//                 and experience school life in different ways.
//               </p>

//               <Link
//                 to="/infrastructure"
//                 className="gallery-link light"
//               >
//                 <span>Explore Infrastructure</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* SCHOOL LIFE */}
//       <section className="gallery-life">

//         <div className="gallery-container">

//           <div className="gallery-life-header">

//             <div>

//               <div className="gallery-eyebrow dark">
//                 SCHOOL LIFE
//               </div>

//               <h2>
//                 Beyond the
//                 <br />
//                 <em>classroom.</em>
//               </h2>

//             </div>

//             <p>
//               Learning continues through sports, co-curricular
//               activities, celebrations and shared experiences.
//             </p>

//           </div>

//           <div className="gallery-life-list">

//             <div className="gallery-life-item">
//               <span>01</span>
//               <h3>Academics</h3>
//               <p>
//                 Everyday classroom experiences and
//                 opportunities to discover new ideas.
//               </p>
//             </div>

//             <div className="gallery-life-item">
//               <span>02</span>
//               <h3>Sports</h3>
//               <p>
//                 Participation, teamwork and achievement
//                 through sporting activities.
//               </p>
//             </div>

//             <div className="gallery-life-item">
//               <span>03</span>
//               <h3>Activities</h3>
//               <p>
//                 Creative, cultural and co-curricular
//                 experiences that encourage participation.
//               </p>
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* NEWS */}
//       <section className="gallery-news">

//         <div className="gallery-container">

//           <div className="gallery-news-grid">

//             <div className="gallery-news-content">

//               <div className="gallery-eyebrow dark">
//                 SCHOOL STORIES
//               </div>

//               <h2>
//                 Stay connected
//                 <br />
//                 with <em>SNGA.</em>
//               </h2>

//               <p>
//                 Discover the latest school news, events,
//                 achievements and community updates.
//               </p>

//               <Link
//                 to="/news"
//                 className="gallery-link"
//               >
//                 <span>View News & Events</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//             <div className="gallery-news-mark">

//               <span>
//                 STORIES
//               </span>

//               <strong>
//                 & MOMENTS
//               </strong>

//               <small>
//                 SHIFAN NOOR GLOBAL ACADEMY
//               </small>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* LIGHTBOX / ALBUM */}
//       {selectedAlbum && (
//         <div
//           className="gallery-modal"
//           role="dialog"
//           aria-modal="true"
//           aria-label={selectedAlbum.name}
//           onClick={(event) => {
//             if (event.target === event.currentTarget) {
//               closeAlbum();
//             }
//           }}
//         >

//           <div className="gallery-modal-inner">

//             <div className="gallery-modal-header">

//               <div>

//                 <span>
//                   {selectedAlbum.category || "GALLERY"}
//                 </span>

//                 <h2>
//                   {selectedAlbum.name}
//                 </h2>

//               </div>

//               <button
//                 type="button"
//                 className="gallery-modal-close"
//                 onClick={closeAlbum}
//                 aria-label="Close album"
//               >
//                 <FaTimes />
//               </button>

//             </div>

//             {getAlbumImages(selectedAlbum).length > 0 ? (
//               <div className="gallery-modal-grid">

//                 {getAlbumImages(selectedAlbum).map(
//                   (image) => (
//                     <button
//                       type="button"
//                       className="gallery-modal-image"
//                       key={image.id}
//                       onClick={() =>
//                         openImage(image)
//                       }
//                     >

//                       <img
//                         src={getImageUrl(
//                           image.imageUrl
//                         )}
//                         alt={
//                           image.caption ||
//                           selectedAlbum.name
//                         }
//                       />

//                       {image.caption && (
//                         <span>
//                           {image.caption}
//                         </span>
//                       )}

//                     </button>
//                   )
//                 )}

//               </div>
//             ) : (
//               <div className="gallery-modal-empty">
//                 No images available in this album.
//               </div>
//             )}

//           </div>

//         </div>
//       )}

//       {/* SINGLE IMAGE VIEW */}
//       {selectedImage && (
//         <div
//           className="gallery-lightbox"
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
//             className="gallery-lightbox-close"
//             onClick={closeImage}
//             aria-label="Close image"
//           >
//             <FaTimes />
//           </button>

//           <img
//             src={getImageUrl(selectedImage.imageUrl)}
//             alt={selectedImage.caption || "Gallery image"}
//           />

//           {selectedImage.caption && (
//             <div className="gallery-lightbox-caption">
//               {selectedImage.caption}
//             </div>
//           )}

//         </div>
//       )}

//       {/* CTA */}
//       <section className="gallery-cta">

//         <div className="gallery-container">

//           <div className="gallery-cta-content">

//             <div className="gallery-eyebrow dark">
//               EXPLORE MORE
//             </div>

//             <h2>
//               There's always
//               <br />
//               another <em>moment.</em>
//             </h2>

//             <p>
//               Explore the experiences, achievements and
//               learning opportunities that make SNGA unique.
//             </p>

//             <div className="gallery-actions">

//               <Link
//                 to="/achievements"
//                 className="gallery-button"
//               >
//                 <span>View Achievements</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/news"
//                 className="gallery-secondary"
//               >
//                 View News
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

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
  FaHeart,
  FaShare,
} from "react-icons/fa";
import galleryService from "../services/gallery.service";
import "./Gallery.css";

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

        const response = await galleryService.getGallery();

        const items = Array.isArray(response)
          ? response
          : response?.data ||
            response?.albums ||
            response?.gallery ||
            [];

        setAlbums(items);
      } catch (err) {
        console.error("Failed to load gallery:", err);
        setError("Unable to load the gallery.");
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

  const lifeItems = [
    {
      number: "01",
      title: "Academics",
      description: "Everyday classroom experiences and opportunities to discover new ideas.",
      icon: <FaImages />,
    },
    {
      number: "02",
      title: "Sports",
      description: "Participation, teamwork and achievement through sporting activities.",
      icon: <FaImages />,
    },
    {
      number: "03",
      title: "Activities",
      description: "Creative, cultural and co-curricular experiences that encourage participation.",
      icon: <FaImages />,
    },
  ];

  return (
    <main className="sg-page">
      {/* =================================================
          HERO SECTION
      ================================================= */}
      <section ref={heroRef} className="sg-hero">
        <div className="sg-hero__bg" />
        <div className="sg-hero__gradient" />

        <div className="sg-container">
          <div className="sg-hero__content">
            <span className="sg-hero__badge">
              <FaCamera />
              GALLERY
            </span>

            <h1 className="sg-hero__title">
              Life at SNGA,
              <br />
              <span className="sg-hero__highlight">Captured.</span>
            </h1>

            <p className="sg-hero__desc">
              Explore the people, places, activities and moments that make the
              Shifan Noor Global Academy experience memorable.
            </p>
          </div>

          <div className="sg-hero__tags">
            <span>LEARN</span>
            <span>PLAY</span>
            <span>CREATE</span>
            <span>CELEBRATE</span>
          </div>
        </div>
      </section>

      {/* =================================================
          INTRO SECTION
      ================================================= */}
      <section ref={introRef} className="sg-intro">
        <div className="sg-container">
          <div className="sg-intro__inner">
            <span className="sg-intro__label">MOMENTS FROM SNGA</span>

            <div className="sg-intro__grid">
              <h2 className="sg-intro__title">
                Every Moment
                <br />
                <span className="sg-intro__highlight">Tells a Story.</span>
              </h2>

              <div className="sg-intro__text">
                <p>
                  School life is filled with experiences that happen both inside
                  and outside the classroom.
                </p>
                <p>
                  From learning and sports to celebrations, activities and
                  everyday campus life, the gallery brings these moments together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          DIRECTORY SECTION
      ================================================= */}
      <section ref={directoryRef} className="sg-directory">
        <div className="sg-container">
          <div className="sg-directory__header">
            <div>
              <span className="sg-directory__label">EXPLORE THE GALLERY</span>
              <h2 className="sg-directory__title">
                See SNGA
                <br />
                <span className="sg-directory__highlight">In Moments.</span>
              </h2>
            </div>
            <p className="sg-directory__desc">
              Browse albums from across school life, activities and events.
            </p>
          </div>

          {/* Filters */}
          {!loading && categories.length > 1 && (
            <div className="sg-directory__filters">
              {categories.map((category) => (
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
              <span>LOADING GALLERY</span>
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
              <h3>No Albums Yet</h3>
              <p>New moments will appear here. Gallery albums can be published from the administration panel.</p>
            </div>
          )}

          {/* Album Grid */}
          {!loading && !error && filteredAlbums.length > 0 && (
            <div className="sg-directory__grid">
              {filteredAlbums.map((album, index) => {
                const images = getAlbumImages(album);
                const coverImage = album.coverImage || (images.length > 0 ? images[0].imageUrl : null);

                return (
                  <div key={album.id} className="sg-directory__card">
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
                      <div className="sg-directory__card-overlay" />
                      <span className="sg-directory__card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="sg-directory__card-count">
                        <FaImages />
                        {images.length} {images.length === 1 ? "IMAGE" : "IMAGES"}
                      </span>
                    </button>

                    <div className="sg-directory__card-content">
                      <div className="sg-directory__card-meta">
                        {album.category && (
                          <span className="sg-directory__card-category">
                            <FaTag />
                            {album.category}
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
          CAMPUS SECTION
      ================================================= */}
      <section ref={campusRef} className="sg-campus">
        <div className="sg-campus__bg" />

        <div className="sg-container">
          <div className="sg-campus__inner">
            <div className="sg-campus__content">
              <span className="sg-campus__label">THE CAMPUS</span>
              <h2 className="sg-campus__title">
                A Place to
                <br />
                <span className="sg-campus__highlight">Learn and Grow.</span>
              </h2>
            </div>

            <div className="sg-campus__right">
              <p className="sg-campus__desc">
                The SNGA campus provides a calm and spacious environment where
                students can learn, participate and experience school life in
                different ways.
              </p>
              <Link to="/infrastructure" className="sg-campus__link">
                <span>Explore Infrastructure</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SCHOOL LIFE SECTION
      ================================================= */}
      <section ref={lifeRef} className="sg-life">
        <div className="sg-container">
          <div className="sg-life__header">
            <div>
              <span className="sg-life__label">SCHOOL LIFE</span>
              <h2 className="sg-life__title">
                Beyond the
                <br />
                <span className="sg-life__highlight">Classroom.</span>
              </h2>
            </div>
            <p className="sg-life__desc">
              Learning continues through sports, co-curricular activities,
              celebrations and shared experiences.
            </p>
          </div>

          <div className="sg-life__grid">
            {lifeItems.map((item) => (
              <div key={item.number} className="sg-life__item">
                <div className="sg-life__item-icon">
                  <FaImages />
                </div>
                <span className="sg-life__item-number">{item.number}</span>
                <h3 className="sg-life__item-title">{item.title}</h3>
                <p className="sg-life__item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          NEWS SECTION
      ================================================= */}
      <section ref={newsRef} className="sg-news">
        <div className="sg-news__bg" />

        <div className="sg-container">
          <div className="sg-news__inner">
            <div className="sg-news__content">
              <span className="sg-news__label">SCHOOL STORIES</span>
              <h2 className="sg-news__title">
                Stay Connected
                <br />
                <span className="sg-news__highlight">With SNGA.</span>
              </h2>
              <p className="sg-news__desc">
                Discover the latest school news, events, achievements and
                community updates.
              </p>
              <Link to="/news" className="sg-news__link">
                <span>View News & Events</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sg-news__badge">
              <span>STORIES</span>
              <strong>& MOMENTS</strong>
              <small>SHIFAN NOOR GLOBAL ACADEMY</small>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}
      <section ref={ctaRef} className="sg-cta">
        <div className="sg-container">
          <div className="sg-cta__content">
            <span className="sg-cta__label">EXPLORE MORE</span>
            <h2 className="sg-cta__title">
              There's Always
              <br />
              <span className="sg-cta__highlight">Another Moment.</span>
            </h2>
            <p className="sg-cta__desc">
              Explore the experiences, achievements and learning opportunities
              that make SNGA unique.
            </p>

            <div className="sg-cta__actions">
              <Link to="/achievements" className="sg-cta__btn sg-cta__btn--primary">
                <span>View Achievements</span>
                <FaArrowRight />
              </Link>
              <Link to="/news" className="sg-cta__btn sg-cta__btn--secondary">
                View News
              </Link>
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
                    key={image.id}
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
                <span>No images available in this album.</span>
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