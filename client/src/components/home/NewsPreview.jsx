// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaCalendarAlt,
//   FaNewspaper,
// } from "react-icons/fa";
// import newsService from "../../services/news.service";
// import "./NewsPreview.css";

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

// const formatDate = (date) => {
//   if (!date) return "";

//   return new Date(date).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// };

// const NewsPreview = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await newsService.getAll();

//         const data = response?.data || response || [];

//         const published = Array.isArray(data)
//           ? data.filter((item) => item.isPublished !== false)
//           : [];

//         const sorted = [...published].sort((a, b) => {
//           const dateA = new Date(
//             a.publishedAt || a.createdAt || 0
//           );
//           const dateB = new Date(
//             b.publishedAt || b.createdAt || 0
//           );

//           return dateB - dateA;
//         });

//         setNews(sorted.slice(0, 3));
//       } catch (error) {
//         console.error("Failed to load news:", error);
//         setNews([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <section className="news-preview">
//       <div className="news-preview-container">

//         {/* Header */}
//         <div className="news-preview-header">

//           <div className="news-preview-heading">
//             <div className="news-preview-label">
//               <span></span>
//               NEWS & UPDATES
//             </div>

//             <h2 className="news-preview-title">
//               What's Happening
//               <br />
//               <em>At SNGA.</em>
//             </h2>
//           </div>

//           <div className="news-preview-header-right">
//             <p>
//               Stay connected with the latest happenings, events,
//               announcements and stories from our academy.
//             </p>

//             <Link
//               to="/news"
//               className="news-preview-link"
//             >
//               <span>View All News</span>
//               <FaArrowRight />
//             </Link>
//           </div>
//         </div>

//         {/* News */}
//         {loading ? (
//           <div className="news-preview-loading">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         ) : news.length > 0 ? (
//           <div className="news-preview-grid">

//             {news.map((item, index) => {
//               const image = getImageUrl(
//                 item.image ||
//                 item.featuredImage ||
//                 item.coverImage
//               );

//               return (
//                 <article
//                   className={`news-preview-card ${
//                     index === 0 ? "featured" : ""
//                   }`}
//                   key={item.id}
//                 >

//                   {/* Image */}
//                   <Link
//                     to={`/news/${item.slug || item.id}`}
//                     className="news-preview-image"
//                   >
//                     {image ? (
//                       <img
//                         src={image}
//                         alt={item.title || "SNGA news"}
//                       />
//                     ) : (
//                       <div className="news-preview-placeholder">
//                         <FaNewspaper />
//                       </div>
//                     )}

//                     <span className="news-preview-number">
//                       0{index + 1}
//                     </span>

//                     {item.category && (
//                       <span className="news-preview-category">
//                         {item.category}
//                       </span>
//                     )}
//                   </Link>

//                   {/* Content */}
//                   <div className="news-preview-content">

//                     <div className="news-preview-date">
//                       <FaCalendarAlt />

//                       <span>
//                         {formatDate(
//                           item.publishedAt || item.createdAt
//                         )}
//                       </span>
//                     </div>

//                     <h3>
//                       <Link
//                         to={`/news/${item.slug || item.id}`}
//                       >
//                         {item.title}
//                       </Link>
//                     </h3>

//                     {item.excerpt && (
//                       <p>{item.excerpt}</p>
//                     )}

//                     <Link
//                       to={`/news/${item.slug || item.id}`}
//                       className="news-preview-read"
//                     >
//                       <span>Read Story</span>
//                       <FaArrowRight />
//                     </Link>

//                   </div>
//                 </article>
//               );
//             })}

//           </div>
//         ) : (
//           <div className="news-preview-empty">
//             <div className="news-preview-empty-icon">
//               <FaNewspaper />
//             </div>

//             <h3>Stay Tuned</h3>

//             <p>
//               News and updates from our academy will appear here.
//             </p>
//           </div>
//         )}

//         {/* Bottom */}
//         <div className="news-preview-bottom">

//           <div className="news-preview-bottom-line"></div>

//           <div className="news-preview-bottom-content">
//             <span className="news-preview-bottom-label">
//               STAY CONNECTED
//             </span>

//             <strong>
//               Discover the moments that make
//               <em> SNGA special.</em>
//             </strong>
//           </div>

//           <Link
//             to="/news"
//             className="news-preview-bottom-link"
//           >
//             <span>Explore More</span>
//             <FaArrowRight />
//           </Link>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default NewsPreview;



import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaNewspaper,
  FaTag,
  FaClock,
  FaUser,
  FaEye,
} from "react-icons/fa";
import newsService from "../../services/news.service";
import "./NewsPreview.css";

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

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const NewsPreview = () => {
  const [news, setNews] = useState([]);
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
          entry.target.classList.add("news-visible");
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
          const cards = entry.target.querySelectorAll(".news-card");
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
  // FETCH NEWS
  // =====================================================

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsService.getAll();

        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter((item) => item.isPublished !== false)
          : [];

        const sorted = [...published].sort((a, b) => {
          const dateA = new Date(a.publishedAt || a.createdAt || 0);
          const dateB = new Date(b.publishedAt || b.createdAt || 0);
          return dateB - dateA;
        });

        setNews(sorted.slice(0, 3));
      } catch (error) {
        console.error("Failed to load news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // =====================================================
  // STATS DATA
  // =====================================================

  const stats = [
    { number: "50+", label: "News Articles" },
    { number: "100+", label: "Student Stories" },
    { number: "25+", label: "Events Covered" },
    { number: "95%", label: "Positive Feedback" },
  ];

  return (
    <section ref={sectionRef} className="news-preview">
      {/* Background decorative elements */}
      <div className="news-bg-shape news-bg-shape-1" />
      <div className="news-bg-shape news-bg-shape-2" />
      <div className="news-bg-grid" />

      <div className="news-preview-container">
        {/* =====================================
            HEADER
        ====================================== */}
        <div ref={headerRef} className="news-preview-header">
          <div className="news-header-content">
            <span className="news-tag">
              <FaNewspaper />
              NEWS & UPDATES
            </span>

            <h2 className="news-title">
              What's Happening
              <br />
              <span className="news-title-highlight">At SNGA.</span>
            </h2>

            <p className="news-description">
              Stay connected with the latest happenings, events,
              announcements and inspiring stories from our academy
              community.
            </p>

            <Link to="/news" className="news-cta">
              <span>View All News</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="news-header-stats">
            {stats.map((stat, index) => (
              <div key={index} className="news-stat">
                <span className="news-stat-number">{stat.number}</span>
                <span className="news-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            NEWS GRID
        ====================================== */}
        {loading ? (
          <div className="news-loading">
            <div className="news-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Loading news...</p>
          </div>
        ) : news.length > 0 ? (
          <div ref={gridRef} className="news-grid">
            {news.map((item, index) => {
              const image = getImageUrl(
                item.image || item.featuredImage || item.coverImage
              );

              return (
                <article
                  className={`news-card ${index === 0 ? "news-card-featured" : ""}`}
                  key={item.id}
                >
                  <Link
                    to={`/news/${item.slug || item.id}`}
                    className="news-card-image"
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={item.title || "SNGA news"}
                        loading="lazy"
                      />
                    ) : (
                      <div className="news-card-placeholder">
                        <FaNewspaper />
                      </div>
                    )}
                    <div className="news-card-overlay" />
                    <span className="news-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.category && (
                      <span className="news-card-category">
                        <FaTag />
                        {item.category}
                      </span>
                    )}
                  </Link>

                  <div className="news-card-content">
                    <div className="news-card-meta">
                      <span className="news-card-date">
                        <FaCalendarAlt />
                        {formatDate(item.publishedAt || item.createdAt)}
                      </span>
                      {item.author && (
                        <span className="news-card-author">
                          <FaUser />
                          {item.author}
                        </span>
                      )}
                    </div>

                    <h3 className="news-card-title">
                      <Link to={`/news/${item.slug || item.id}`}>
                        {item.title}
                      </Link>
                    </h3>

                    {item.excerpt && (
                      <p className="news-card-excerpt">{item.excerpt}</p>
                    )}

                    <div className="news-card-footer">
                      <Link
                        to={`/news/${item.slug || item.id}`}
                        className="news-card-read"
                      >
                        <span>Read Story</span>
                        <FaArrowRight />
                      </Link>
                      {item.readTime && (
                        <span className="news-card-readtime">
                          <FaClock />
                          {item.readTime} min read
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="news-empty">
            <div className="news-empty-icon">
              <FaNewspaper />
            </div>
            <h3>Stay Tuned</h3>
            <p>News and updates from our academy will appear here.</p>
          </div>
        )}

        {/* =====================================
            BOTTOM
        ====================================== */}
        <div ref={bottomRef} className="news-bottom">
          <div className="news-bottom-line" />

          <div className="news-bottom-content">
            <span className="news-bottom-label">STAY CONNECTED</span>
            <strong className="news-bottom-quote">
              Discover the moments that make
              <em> SNGA special.</em>
            </strong>
          </div>

          <Link to="/news" className="news-bottom-link">
            <span>Explore More</span>
            <FaArrowRight />
          </Link>

          <div className="news-bottom-line" />
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;