// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaCamera,
//   FaImages,
// } from "react-icons/fa";
// import galleryService from "../../services/gallery.service";
// import "./GalleryPreview.css";

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

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const response = await galleryService.getAll();

//         const data = response?.data || response || [];

//         const published = Array.isArray(data)
//           ? data.filter((album) => album.isPublished !== false)
//           : [];

//         setAlbums(published.slice(0, 4));
//       } catch (error) {
//         console.error("Failed to load gallery:", error);
//         setAlbums([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGallery();
//   }, []);

//   return (
//     <section className="gallery-preview">
//       <div className="gallery-preview-container">

//         {/* Header */}
//         <div className="gallery-preview-header">

//           <div className="gallery-preview-heading">
//             <div className="gallery-preview-label">
//               <span></span>
//               CAMPUS LIFE
//             </div>

//             <h2 className="gallery-preview-title">
//               Moments That
//               <br />
//               <em>Stay With Us.</em>
//             </h2>
//           </div>

//           <div className="gallery-preview-header-right">
//             <p>
//               From classrooms to celebrations, discover the people,
//               places and moments that make life at SNGA special.
//             </p>

//             <Link
//               to="/gallery"
//               className="gallery-preview-link"
//             >
//               <span>Explore Gallery</span>
//               <FaArrowRight />
//             </Link>
//           </div>
//         </div>

//         {/* Gallery */}
//         {loading ? (
//           <div className="gallery-preview-loading">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         ) : albums.length > 0 ? (
//           <div className="gallery-preview-grid">

//             {albums.map((album, index) => {
//               const image = getImageUrl(album.coverImage);

//               return (
//                 <Link
//                   to={`/gallery/${album.slug || album.id}`}
//                   className={`gallery-preview-card gallery-card-${index + 1}`}
//                   key={album.id}
//                 >

//                   <div className="gallery-preview-image">

//                     {image ? (
//                       <img
//                         src={image}
//                         alt={album.name || "SNGA gallery"}
//                       />
//                     ) : (
//                       <div className="gallery-preview-placeholder">
//                         <FaImages />
//                       </div>
//                     )}

//                     <div className="gallery-preview-overlay"></div>

//                     <span className="gallery-preview-number">
//                       0{index + 1}
//                     </span>

//                     <div className="gallery-preview-view">
//                       <FaCamera />
//                     </div>

//                   </div>

//                   <div className="gallery-preview-card-content">

//                     {album.category && (
//                       <span className="gallery-preview-category">
//                         {album.category}
//                       </span>
//                     )}

//                     <h3>{album.name}</h3>

//                     {album.description && (
//                       <p>{album.description}</p>
//                     )}

//                     <span className="gallery-preview-card-arrow">
//                       <FaArrowRight />
//                     </span>

//                   </div>

//                 </Link>
//               );
//             })}

//           </div>
//         ) : (
//           <div className="gallery-preview-empty">

//             <div className="gallery-preview-empty-icon">
//               <FaImages />
//             </div>

//             <h3>Our Stories in Pictures</h3>

//             <p>
//               Campus moments and memories will be showcased here.
//             </p>

//           </div>
//         )}

//         {/* Bottom Statement */}
//         <div className="gallery-preview-bottom">

//           <div className="gallery-preview-bottom-line"></div>

//           <div className="gallery-preview-bottom-content">
//             <span>SEE • EXPERIENCE • REMEMBER</span>

//             <strong>
//               Every picture tells a story.
//               <em> Every moment matters.</em>
//             </strong>
//           </div>

//           <Link
//             to="/gallery"
//             className="gallery-preview-bottom-link"
//           >
//             <span>View Full Gallery</span>
//             <FaArrowRight />
//           </Link>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default GalleryPreview;


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCamera,
  FaImages,
  FaTag,
  FaEye,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";
import galleryService from "../../services/gallery.service";
import "./GalleryPreview.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getImageUrl = (image) => {
  if (!image) return "";

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const GalleryPreview = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const bottomRef = useRef(null);

  // =====================================================
  // SCROLL TRIGGERED ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("gallery-visible");
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-header");
          headerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const gridObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".gallery-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("reveal-card");
            }, index * 120);
          });
          gridObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const bottomObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-bottom");
          bottomObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (gridRef.current) {
      gridObserver.observe(gridRef.current);
    }

    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      headerObserver.disconnect();
      gridObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  // =====================================================
  // FETCH GALLERY
  // =====================================================

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await galleryService.getAll();

        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter((album) => album.isPublished !== false)
          : [];

        setAlbums(published.slice(0, 4));
      } catch (error) {
        console.error("Failed to load gallery:", error);
        setAlbums([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // =====================================================
  // STATS DATA
  // =====================================================

  const stats = [
    { number: "500+", label: "Photos" },
    { number: "50+", label: "Albums" },
    { number: "25+", label: "Events Covered" },
    { number: "10K+", label: "Views" },
  ];

  return (
    <section ref={sectionRef} className="gallery-preview">
      {/* Background decorative elements */}
      <div className="gallery-bg-shape gallery-bg-shape-1" />
      <div className="gallery-bg-shape gallery-bg-shape-2" />
      <div className="gallery-bg-grid" />

      <div className="gallery-preview-container">
        {/* =====================================
            HEADER
        ====================================== */}
        <div ref={headerRef} className="gallery-preview-header">
          <div className="gallery-header-content">
            <span className="gallery-tag">
              <FaCamera />
              CAMPUS LIFE
            </span>

            <h2 className="gallery-title">
              Moments That
              <br />
              <span className="gallery-title-highlight">Stay With Us.</span>
            </h2>

            <p className="gallery-description">
              From classrooms to celebrations, discover the people,
              places and moments that make life at SNGA special and
              memorable.
            </p>

            <Link to="/gallery" className="gallery-cta">
              <span>Explore Gallery</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="gallery-header-stats">
            {stats.map((stat, index) => (
              <div key={index} className="gallery-stat">
                <span className="gallery-stat-number">{stat.number}</span>
                <span className="gallery-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            GALLERY GRID
        ====================================== */}
        {loading ? (
          <div className="gallery-loading">
            <div className="gallery-loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Loading gallery...</p>
          </div>
        ) : albums.length > 0 ? (
          <div ref={gridRef} className="gallery-grid">
            {albums.map((album, index) => {
              const image = getImageUrl(album.coverImage);

              return (
                <Link
                  to={`/gallery/${album.slug || album.id}`}
                  className={`gallery-card gallery-card-${index + 1}`}
                  key={album.id}
                >
                  <div className="gallery-card-image">
                    {image ? (
                      <img
                        src={image}
                        alt={album.name || "SNGA gallery"}
                        loading="lazy"
                      />
                    ) : (
                      <div className="gallery-card-placeholder">
                        <FaImages />
                      </div>
                    )}
                    <div className="gallery-card-overlay" />
                    <span className="gallery-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="gallery-card-hover-icon">
                      <FaCamera />
                    </div>
                    {album.category && (
                      <span className="gallery-card-tag">
                        <FaTag />
                        {album.category}
                      </span>
                    )}
                  </div>

                  <div className="gallery-card-content">
                    <div className="gallery-card-meta">
                      {album.date && (
                        <span className="gallery-card-date">
                          <FaCalendarAlt />
                          {new Date(album.date).getFullYear()}
                        </span>
                      )}
                      {album.imageCount && (
                        <span className="gallery-card-count">
                          <FaImages />
                          {album.imageCount} photos
                        </span>
                      )}
                    </div>

                    <h3 className="gallery-card-title">{album.name}</h3>

                    {album.description && (
                      <p className="gallery-card-desc">{album.description}</p>
                    )}

                    <div className="gallery-card-footer">
                      <span className="gallery-card-view">
                        <FaEye />
                        View Album
                      </span>
                      <span className="gallery-card-arrow">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="gallery-empty">
            <div className="gallery-empty-icon">
              <FaImages />
            </div>
            <h3>Our Stories in Pictures</h3>
            <p>Campus moments and memories will be showcased here.</p>
          </div>
        )}

        {/* =====================================
            BOTTOM
        ====================================== */}
        <div ref={bottomRef} className="gallery-bottom">
          <div className="gallery-bottom-line" />

          <div className="gallery-bottom-content">
            <span className="gallery-bottom-label">SEE • EXPERIENCE • REMEMBER</span>
            <strong className="gallery-bottom-quote">
              Every picture tells a story.
              <em> Every moment matters.</em>
            </strong>
          </div>

          <Link to="/gallery" className="gallery-bottom-link">
            <span>View Full Gallery</span>
            <FaArrowRight />
          </Link>

          <div className="gallery-bottom-line" />
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;