// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import newsService from "../../services/news.service";
// // import "./NewsPreview.css";

// // const fallbackImages = [
// //   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
// //   "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85",
// //   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
// // ];

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// //   "http://localhost:5000";

// // const getImageUrl = (image, fallbackIndex = 0) => {
// //   if (!image) {
// //     return fallbackImages[fallbackIndex % fallbackImages.length];
// //   }

// //   if (image.startsWith("http://") || image.startsWith("https://")) {
// //     return image;
// //   }

// //   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // };

// // const formatDate = (date) => {
// //   if (!date) return "";

// //   return new Date(date).toLocaleDateString("en-IN", {
// //     day: "2-digit",
// //     month: "short",
// //     year: "numeric",
// //   });
// // };

// // const NewsPreview = () => {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     let mounted = true;

// //     const fetchNews = async () => {
// //       try {
// //         const response = await newsService.getAll();

// //         const data = response?.data || response || [];

// //         const published = Array.isArray(data)
// //           ? data.filter((item) => item.isPublished !== false)
// //           : [];

// //         const sorted = [...published].sort((a, b) => {
// //           const dateA = new Date(
// //             a.publishedAt || a.createdAt || 0
// //           );

// //           const dateB = new Date(
// //             b.publishedAt || b.createdAt || 0
// //           );

// //           return dateB - dateA;
// //         });

// //         if (mounted) {
// //           setNews(sorted.slice(0, 3));
// //         }
// //       } catch (error) {
// //         console.error("Failed to load news:", error);

// //         if (mounted) {
// //           setNews([]);
// //         }
// //       } finally {
// //         if (mounted) {
// //           setLoading(false);
// //         }
// //       }
// //     };

// //     fetchNews();

// //     return () => {
// //       mounted = false;
// //     };
// //   }, []);

// //   const featured = news[0];
// //   const stories = news.slice(1, 3);

// //   return (
// //     <section className="news-preview">

// //       {/* =====================================================
// //           HEADER
// //       ===================================================== */}

// //       <div className="news-header">
// //         <div className="news-container">

// //           <div className="news-header-top">
// //             <span className="news-eyebrow">
// //               FROM THE SNGA COMMUNITY
// //             </span>

// //             <span className="news-header-index">
// //               06 / JOURNAL
// //             </span>
// //           </div>

// //           <div className="news-header-main">

// //             <h2>
// //               The
// //               <br />
// //               <span>Chronicle.</span>
// //             </h2>

// //             <div className="news-header-copy">
// //               <p>
// //                 Stories, announcements and moments from
// //                 everyday life at Shifan Noor Global Academy.
// //               </p>

// //               <Link to="/news" className="news-header-link">
// //                 Explore all stories
// //                 <span>↗</span>
// //               </Link>
// //             </div>

// //           </div>

// //         </div>
// //       </div>


// //       {/* =====================================================
// //           CONTENT
// //       ===================================================== */}

// //       <div className="news-content">
// //         <div className="news-container">

// //           {loading ? (
// //             <div className="news-loading">
// //               <div className="news-loading-line" />
// //               <span>Loading stories</span>
// //             </div>
// //           ) : featured ? (

// //             <div className="news-layout">

// //               {/* =============================================
// //                   FEATURED STORY
// //               ============================================= */}

// //               <article className="news-featured">

// //                 <Link
// //                   to={`/news/${featured.slug || featured.id}`}
// //                   className="news-featured-image"
// //                 >
// //                   <img
// //                     src={getImageUrl(
// //                       featured.image ||
// //                         featured.featuredImage ||
// //                         featured.coverImage,
// //                       0
// //                     )}
// //                     alt={featured.title || "SNGA news"}
// //                     onError={(event) => {
// //                       event.currentTarget.onerror = null;
// //                       event.currentTarget.src = fallbackImages[0];
// //                     }}
// //                   />

// //                   <div className="news-featured-image-meta">
// //                     <span>01</span>
// //                     <span>FEATURED STORY</span>
// //                   </div>
// //                 </Link>

// //                 <div className="news-featured-content">

// //                   <div className="news-meta">
// //                     <span>
// //                       {featured.category || "SNGA NEWS"}
// //                     </span>

// //                     <span className="news-dot">
// //                       •
// //                     </span>

// //                     <span>
// //                       {formatDate(
// //                         featured.publishedAt ||
// //                           featured.createdAt
// //                       )}
// //                     </span>
// //                   </div>

// //                   <h3>
// //                     <Link
// //                       to={`/news/${
// //                         featured.slug || featured.id
// //                       }`}
// //                     >
// //                       {featured.title}
// //                     </Link>
// //                   </h3>

// //                   {featured.excerpt && (
// //                     <p>{featured.excerpt}</p>
// //                   )}

// //                   <Link
// //                     to={`/news/${
// //                       featured.slug || featured.id
// //                     }`}
// //                     className="news-read"
// //                   >
// //                     Read the story
// //                     <span>→</span>
// //                   </Link>

// //                 </div>

// //               </article>


// //               {/* =============================================
// //                   STORY RAIL
// //               ============================================= */}

// //               <aside className="news-story-rail">

// //                 <div className="news-rail-heading">
// //                   <span>MORE FROM SNGA</span>
// //                   <span>02 — 03</span>
// //                 </div>

// //                 {stories.length > 0 ? (
// //                   stories.map((item, index) => (

// //                     <article
// //                       className="news-story"
// //                       key={item.id}
// //                     >

// //                       <div className="news-story-number">
// //                         {String(index + 2).padStart(2, "0")}
// //                       </div>

// //                       <Link
// //                         to={`/news/${
// //                           item.slug || item.id
// //                         }`}
// //                         className="news-story-image"
// //                       >
// //                         <img
// //                           src={getImageUrl(
// //                             item.image ||
// //                               item.featuredImage ||
// //                               item.coverImage,
// //                             index + 1
// //                           )}
// //                           alt={
// //                             item.title || "SNGA news"
// //                           }
// //                           loading="lazy"
// //                           onError={(event) => {
// //                             event.currentTarget.onerror = null;
// //                             event.currentTarget.src =
// //                               fallbackImages[
// //                                 (index + 1) %
// //                                   fallbackImages.length
// //                               ];
// //                           }}
// //                         />
// //                       </Link>

// //                       <div className="news-story-content">

// //                         <div className="news-meta">
// //                           <span>
// //                             {item.category ||
// //                               "SNGA NEWS"}
// //                           </span>

// //                           <span className="news-dot">
// //                             •
// //                           </span>

// //                           <span>
// //                             {formatDate(
// //                               item.publishedAt ||
// //                                 item.createdAt
// //                             )}
// //                           </span>
// //                         </div>

// //                         <h4>
// //                           <Link
// //                             to={`/news/${
// //                               item.slug || item.id
// //                             }`}
// //                           >
// //                             {item.title}
// //                           </Link>
// //                         </h4>

// //                         {item.excerpt && (
// //                           <p>{item.excerpt}</p>
// //                         )}

// //                         <Link
// //                           to={`/news/${
// //                             item.slug || item.id
// //                           }`}
// //                           className="news-story-link"
// //                         >
// //                           Read
// //                           <span>↗</span>
// //                         </Link>

// //                       </div>

// //                     </article>

// //                   ))
// //                 ) : (
// //                   <div className="news-placeholder-stories">

// //                     <article className="news-story">

// //                       <div className="news-story-number">
// //                         02
// //                       </div>

// //                       <div className="news-story-image">
// //                         <img
// //                           src={fallbackImages[1]}
// //                           alt="Students at SNGA"
// //                         />
// //                       </div>

// //                       <div className="news-story-content">

// //                         <div className="news-meta">
// //                           <span>SCHOOL LIFE</span>
// //                         </div>

// //                         <h4>
// //                           Moments from everyday
// //                           learning at SNGA.
// //                         </h4>

// //                         <p>
// //                           Discover the experiences,
// //                           activities and moments that
// //                           shape school life.
// //                         </p>

// //                       </div>

// //                     </article>


// //                     <article className="news-story">

// //                       <div className="news-story-number">
// //                         03
// //                       </div>

// //                       <div className="news-story-image">
// //                         <img
// //                           src={fallbackImages[2]}
// //                           alt="Students learning"
// //                         />
// //                       </div>

// //                       <div className="news-story-content">

// //                         <div className="news-meta">
// //                           <span>COMMUNITY</span>
// //                         </div>

// //                         <h4>
// //                           Stories from our school
// //                           community.
// //                         </h4>

// //                         <p>
// //                           The people and moments that
// //                           make SNGA special.
// //                         </p>

// //                       </div>

// //                     </article>

// //                   </div>
// //                 )}

// //               </aside>

// //             </div>

// //           ) : (

// //             <div className="news-empty">

// //               <span>01</span>

// //               <div>
// //                 <small>THE CHRONICLE</small>

// //                 <h3>
// //                   Stories are
// //                   <br />
// //                   coming soon.
// //                 </h3>

// //                 <p>
// //                   News and updates from our academy
// //                   will appear here.
// //                 </p>
// //               </div>

// //             </div>

// //           )}

// //         </div>
// //       </div>


// //       {/* =====================================================
// //           EDITORIAL STATEMENT
// //       ===================================================== */}

// //       <div className="news-statement">

// //         <div className="news-container">

// //           <div className="news-statement-grid">

// //             <span className="news-statement-number">
// //               07
// //             </span>

// //             <h3>
// //               Small moments.
// //               <br />
// //               <span>Big memories.</span>
// //             </h3>

// //             <p>
// //               Every school year creates stories worth
// //               remembering — from the classroom to the
// //               playground and beyond.
// //             </p>

// //           </div>

// //         </div>

// //       </div>


// //       {/* =====================================================
// //           BOTTOM BAR
// //       ===================================================== */}

// //       <div className="news-footer">

// //         <div className="news-container">

// //           <div className="news-footer-inner">

// //             <div>
// //               <span className="news-eyebrow">
// //                 KEEP EXPLORING
// //               </span>

// //               <h3>
// //                 Life at
// //                 <span> SNGA.</span>
// //               </h3>
// //             </div>

// //             <Link
// //               to="/news"
// //               className="news-footer-button"
// //             >
// //               View all news
// //               <span>↗</span>
// //             </Link>

// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default NewsPreview;




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import newsService from "../../services/news.service";
// import "./NewsPreview.css";

// const fallbackImages = [
//   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
//   "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85",
//   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
// ];

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//   "http://localhost:5000";

// const getImageUrl = (image, fallbackIndex = 0) => {
//   if (!image) {
//     return fallbackImages[fallbackIndex % fallbackImages.length];
//   }

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
//     let mounted = true;

//     const fetchNews = async () => {
//       try {
//         // ✅ CORRECT: Using getNews() public method
//         const response = await newsService.getNews();

//         // Handle different response structures
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

//         if (mounted) {
//           setNews(sorted.slice(0, 3));
//         }
//       } catch (error) {
//         console.error("Failed to load news:", error);

//         if (mounted) {
//           setNews([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchNews();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const featured = news[0];
//   const stories = news.slice(1, 3);

//   return (
//     <section className="news-preview">

//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <div className="news-header">
//         <div className="news-container">

//           <div className="news-header-top">
//             <span className="news-eyebrow">
//               FROM THE SNGA COMMUNITY
//             </span>

//             <span className="news-header-index">
//               06 / JOURNAL
//             </span>
//           </div>

//           <div className="news-header-main">

//             <h2>
//               The
//               <br />
//               <span>Chronicle.</span>
//             </h2>

//             <div className="news-header-copy">
//               <p>
//                 Stories, announcements and moments from
//                 everyday life at Shifan Noor Global Academy.
//               </p>

//               <Link to="/news" className="news-header-link">
//                 Explore all stories
//                 <span>↗</span>
//               </Link>
//             </div>

//           </div>

//         </div>
//       </div>


//       {/* =====================================================
//           CONTENT
//       ===================================================== */}

//       <div className="news-content">
//         <div className="news-container">

//           {loading ? (
//             <div className="news-loading">
//               <div className="news-loading-line" />
//               <span>Loading stories</span>
//             </div>
//           ) : featured ? (

//             <div className="news-layout">

//               {/* =============================================
//                   FEATURED STORY
//               ============================================= */}

//               <article className="news-featured">

//                 <Link
//                   to={`/news/${featured.slug || featured.id}`}
//                   className="news-featured-image"
//                 >
//                   <img
//                     src={getImageUrl(
//                       featured.image ||
//                         featured.featuredImage ||
//                         featured.coverImage,
//                       0
//                     )}
//                     alt={featured.title || "SNGA news"}
//                     onError={(event) => {
//                       event.currentTarget.onerror = null;
//                       event.currentTarget.src = fallbackImages[0];
//                     }}
//                   />

//                   <div className="news-featured-image-meta">
//                     <span>01</span>
//                     <span>FEATURED STORY</span>
//                   </div>
//                 </Link>

//                 <div className="news-featured-content">

//                   <div className="news-meta">
//                     <span>
//                       {featured.category || "SNGA NEWS"}
//                     </span>

//                     <span className="news-dot">
//                       •
//                     </span>

//                     <span>
//                       {formatDate(
//                         featured.publishedAt ||
//                           featured.createdAt
//                       )}
//                     </span>
//                   </div>

//                   <h3>
//                     <Link
//                       to={`/news/${
//                         featured.slug || featured.id
//                       }`}
//                     >
//                       {featured.title}
//                     </Link>
//                   </h3>

//                   {featured.excerpt && (
//                     <p>{featured.excerpt}</p>
//                   )}

//                   <Link
//                     to={`/news/${
//                       featured.slug || featured.id
//                     }`}
//                     className="news-read"
//                   >
//                     Read the story
//                     <span>→</span>
//                   </Link>

//                 </div>

//               </article>


//               {/* =============================================
//                   STORY RAIL
//               ============================================= */}

//               <aside className="news-story-rail">

//                 <div className="news-rail-heading">
//                   <span>MORE FROM SNGA</span>
//                   <span>02 — 03</span>
//                 </div>

//                 {stories.length > 0 ? (
//                   stories.map((item, index) => (
//                     <article
//                       className="news-story"
//                       key={item.id || item._id}
//                     >

//                       <div className="news-story-number">
//                         {String(index + 2).padStart(2, "0")}
//                       </div>

//                       <Link
//                         to={`/news/${
//                           item.slug || item.id
//                         }`}
//                         className="news-story-image"
//                       >
//                         <img
//                           src={getImageUrl(
//                             item.image ||
//                               item.featuredImage ||
//                               item.coverImage,
//                             index + 1
//                           )}
//                           alt={
//                             item.title || "SNGA news"
//                           }
//                           loading="lazy"
//                           onError={(event) => {
//                             event.currentTarget.onerror = null;
//                             event.currentTarget.src =
//                               fallbackImages[
//                                 (index + 1) %
//                                   fallbackImages.length
//                               ];
//                           }}
//                         />
//                       </Link>

//                       <div className="news-story-content">

//                         <div className="news-meta">
//                           <span>
//                             {item.category ||
//                               "SNGA NEWS"}
//                           </span>

//                           <span className="news-dot">
//                             •
//                           </span>

//                           <span>
//                             {formatDate(
//                               item.publishedAt ||
//                                 item.createdAt
//                             )}
//                           </span>
//                         </div>

//                         <h4>
//                           <Link
//                             to={`/news/${
//                               item.slug || item.id
//                             }`}
//                           >
//                             {item.title}
//                           </Link>
//                         </h4>

//                         {item.excerpt && (
//                           <p>{item.excerpt}</p>
//                         )}

//                         <Link
//                           to={`/news/${
//                             item.slug || item.id
//                           }`}
//                           className="news-story-link"
//                         >
//                           Read
//                           <span>↗</span>
//                         </Link>

//                       </div>

//                     </article>
//                   ))
//                 ) : (
//                   <div className="news-placeholder-stories">

//                     <article className="news-story">

//                       <div className="news-story-number">
//                         02
//                       </div>

//                       <div className="news-story-image">
//                         <img
//                           src={fallbackImages[1]}
//                           alt="Students at SNGA"
//                         />
//                       </div>

//                       <div className="news-story-content">

//                         <div className="news-meta">
//                           <span>SCHOOL LIFE</span>
//                         </div>

//                         <h4>
//                           Moments from everyday
//                           learning at SNGA.
//                         </h4>

//                         <p>
//                           Discover the experiences,
//                           activities and moments that
//                           shape school life.
//                         </p>

//                       </div>

//                     </article>


//                     <article className="news-story">

//                       <div className="news-story-number">
//                         03
//                       </div>

//                       <div className="news-story-image">
//                         <img
//                           src={fallbackImages[2]}
//                           alt="Students learning"
//                         />
//                       </div>

//                       <div className="news-story-content">

//                         <div className="news-meta">
//                           <span>COMMUNITY</span>
//                         </div>

//                         <h4>
//                           Stories from our school
//                           community.
//                         </h4>

//                         <p>
//                           The people and moments that
//                           make SNGA special.
//                         </p>

//                       </div>

//                     </article>

//                   </div>
//                 )}

//               </aside>

//             </div>

//           ) : (

//             <div className="news-empty">

//               <span>01</span>

//               <div>
//                 <small>THE CHRONICLE</small>

//                 <h3>
//                   Stories are
//                   <br />
//                   coming soon.
//                 </h3>

//                 <p>
//                   News and updates from our academy
//                   will appear here.
//                 </p>
//               </div>

//             </div>

//           )}

//         </div>
//       </div>


//       {/* =====================================================
//           EDITORIAL STATEMENT
//       ===================================================== */}

//       <div className="news-statement">

//         <div className="news-container">

//           <div className="news-statement-grid">

//             <span className="news-statement-number">
//               07
//             </span>

//             <h3>
//               Small moments.
//               <br />
//               <span>Big memories.</span>
//             </h3>

//             <p>
//               Every school year creates stories worth
//               remembering — from the classroom to the
//               playground and beyond.
//             </p>

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           BOTTOM BAR
//       ===================================================== */}

//       <div className="news-footer">

//         <div className="news-container">

//           <div className="news-footer-inner">

//             <div>
//               <span className="news-eyebrow">
//                 KEEP EXPLORING
//               </span>

//               <h3>
//                 Life at
//                 <span> SNGA.</span>
//               </h3>
//             </div>

//             <Link
//               to="/news"
//               className="news-footer-button"
//             >
//               View all news
//               <span>↗</span>
//             </Link>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default NewsPreview;





















































// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import newsService from "../../services/news.service";
// import "./NewsPreview.css";

// const fallbackImages = [
//   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
//   "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85",
//   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
// ];

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//   "http://localhost:5000";

// const getImageUrl = (image, fallbackIndex = 0) => {
//   if (!image) {
//     return fallbackImages[fallbackIndex % fallbackImages.length];
//   }

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
//     let mounted = true;

//     const fetchNews = async () => {
//       try {
//         const response = await newsService.getNews();

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

//         if (mounted) {
//           setNews(sorted);
//         }
//       } catch (error) {
//         console.error("Failed to load news:", error);
//         if (mounted) {
//           setNews([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchNews();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // Take first 3 for display
//   const displayNews = news.slice(0, 3);

//   return (
//     <section className="news-preview">

//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <div className="news-header">
//         <div className="news-container">

//           <div className="news-header-top">
//             <span className="news-eyebrow">
//               FROM THE SNGA COMMUNITY
//             </span>

//             <span className="news-header-index">
//               {news.length > 0 ? `${String(news.length).padStart(2, "0")} / STORIES` : "LATEST / NEWS"}
//             </span>
//           </div>

//           <div className="news-header-main">

//             <h2>
//               The
//               <br />
//               <span>Chronicle.</span>
//             </h2>

//             <div className="news-header-copy">
//               <p>
//                 Stories, announcements and moments from
//                 everyday life at Shifan Noor Global Academy.
//               </p>

//               <Link to="/news" className="news-header-link">
//                 Explore all stories
//                 <span>↗</span>
//               </Link>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           NEWS CARDS GRID
//       ===================================================== */}

//       <div className="news-content">
//         <div className="news-container">

//           {loading ? (
//             <div className="news-loading">
//               <div className="news-loading-spinner" />
//               <span>Loading stories...</span>
//             </div>
//           ) : news.length > 0 ? (

//             <div className="news-grid">
//               {displayNews.map((item, index) => {
//                 const itemId = item.id || item._id;
//                 const slug = item.slug || itemId;
//                 const image = item.image || item.featuredImage || item.coverImage;

//                 return (
//                   <article key={itemId} className="news-card">
//                     <Link to={`/news/${slug}`} className="news-card-image">
//                       <img
//                         src={getImageUrl(image, index)}
//                         alt={item.title || "SNGA news"}
//                         loading={index === 0 ? "eager" : "lazy"}
//                         onError={(event) => {
//                           event.currentTarget.onerror = null;
//                           event.currentTarget.src = fallbackImages[index % fallbackImages.length];
//                         }}
//                       />
//                       <span className="news-card-number">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                     </Link>

//                     <div className="news-card-content">
//                       <div className="news-meta">
//                         <span className="news-category">
//                           {item.category || "SNGA NEWS"}
//                         </span>
//                         <span className="news-dot">•</span>
//                         <span className="news-date">
//                           {formatDate(item.publishedAt || item.createdAt)}
//                         </span>
//                       </div>

//                       <h3 className="news-card-title">
//                         <Link to={`/news/${slug}`}>
//                           {item.title}
//                         </Link>
//                       </h3>

//                       {item.excerpt && (
//                         <p className="news-card-desc">{item.excerpt}</p>
//                       )}

//                       <Link to={`/news/${slug}`} className="news-card-link">
//                         Read Story
//                         <span>→</span>
//                       </Link>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>

//           ) : (

//             <div className="news-empty">
//               <span>01</span>
//               <div>
//                 <small>THE CHRONICLE</small>
//                 <h3>Stories are coming soon.</h3>
//                 <p>News and updates from our academy will appear here.</p>
//               </div>
//             </div>

//           )}

//         </div>
//       </div>

//       {/* =====================================================
//           EDITORIAL STATEMENT
//       ===================================================== */}

//       <div className="news-statement">
//         <div className="news-container">
//           <div className="news-statement-grid">
//             <span className="news-statement-number">02</span>
//             <h3>
//               Small moments.
//               <br />
//               <span>Big memories.</span>
//             </h3>
//             <p>
//               Every school year creates stories worth
//               remembering — from the classroom to the
//               playground and beyond.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           BOTTOM BAR
//       ===================================================== */}

//       <div className="news-footer">
//         <div className="news-container">
//           <div className="news-footer-inner">
//             <div>
//               <span className="news-eyebrow">KEEP EXPLORING</span>
//               <h3>
//                 Life at
//                 <span> SNGA.</span>
//               </h3>
//             </div>
//             <Link to="/news" className="news-footer-button">
//               View all news
//               <span>↗</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default NewsPreview;



import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import newsService from "../../services/news.service";
import "./NewsPreview.css";

const fallbackImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
];

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getImageUrl = (image, fallbackIndex = 0) => {
  if (!image) {
    return fallbackImages[fallbackIndex % fallbackImages.length];
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
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

  useEffect(() => {
    let mounted = true;

    const fetchNews = async () => {
      try {
        const response = await newsService.getNews();
        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter((item) => item.isPublished !== false)
          : [];

        const sorted = [...published].sort((a, b) => {
          const dateA = new Date(
            a.publishedAt || a.createdAt || 0
          );

          const dateB = new Date(
            b.publishedAt || b.createdAt || 0
          );

          return dateB - dateA;
        });

        if (mounted) {
          setNews(sorted);
        }
      } catch (error) {
        console.error("Failed to load news:", error);

        if (mounted) {
          setNews([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchNews();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      ".np-reveal, .np-image-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("np-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [news, loading]);

  const displayNews = news.slice(0, 3);
  const featuredNews = displayNews[0];
  const secondaryNews = displayNews.slice(1);

  const getSlug = (item) => {
    const itemId = item?.id || item?._id;
    return item?.slug || itemId;
  };

  const getImage = (item, index) => {
    const image =
      item?.image ||
      item?.featuredImage ||
      item?.coverImage;

    return getImageUrl(image, index);
  };

  return (
    <section className="news-preview" ref={sectionRef}>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="np-opening">
        <div className="np-container">

          <div className="np-opening-top np-reveal">
            <span className="np-section-number">
              07
            </span>

            <div className="np-opening-meta">
              <span>NEWS & STORIES</span>
              <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            </div>

            <span className="np-opening-location">
              VENKULAM · RAMANATHAPURAM
            </span>
          </div>

          <div className="np-opening-grid">

            <div className="np-opening-label np-reveal">
              <span className="np-rule" />
              <span>
                FROM THE SNGA COMMUNITY
              </span>
            </div>

            <div className="np-opening-main np-reveal">

              <p className="np-kicker">
                THE SCHOOL CHRONICLE
              </p>

              <h2>
                Stories
                <br />
                worth <em>remembering.</em>
              </h2>

              <p className="np-opening-description">
                Stories, announcements and moments from
                everyday life at Shifan Noor Global Academy.
              </p>

              <Link
                to="/news"
                className="np-text-link"
              >
                <span>Explore all stories</span>
                <span>↗</span>
              </Link>

            </div>

            <div className="np-opening-aside np-reveal">

              <strong>
                {String(news.length).padStart(2, "0")}
              </strong>

              <span>STORIES</span>

              <div>
                <span>LEARN</span>
                <span>PARTICIPATE</span>
                <span>CELEBRATE</span>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          STORIES
      ===================================================== */}

      <section className="np-stories">
        <div className="np-container">

          {loading ? (

            <div className="np-loading">
              <span className="np-loading-line" />
              <span>Loading stories...</span>
            </div>

          ) : displayNews.length > 0 ? (

            <>

              {/* =============================================
                  FEATURED STORY
              ============================================= */}

              {featuredNews && (
                <article className="np-featured np-reveal">

                  <Link
                    to={`/news/${getSlug(featuredNews)}`}
                    className="np-featured-image np-image-reveal"
                  >
                    <img
                      src={getImage(featuredNews, 0)}
                      alt={
                        featuredNews.title ||
                        "SNGA news"
                      }
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src =
                          fallbackImages[0];
                      }}
                    />

                    <span className="np-image-number">
                      01
                    </span>

                    <span className="np-image-label">
                      FEATURED STORY
                    </span>
                  </Link>

                  <div className="np-featured-copy">

                    <div className="np-meta">
                      <span>
                        {featuredNews.category ||
                          "SNGA NEWS"}
                      </span>

                      <span className="np-meta-divider">
                        /
                      </span>

                      <span>
                        {formatDate(
                          featuredNews.publishedAt ||
                          featuredNews.createdAt
                        )}
                      </span>
                    </div>

                    <h3>
                      <Link
                        to={`/news/${getSlug(
                          featuredNews
                        )}`}
                      >
                        {featuredNews.title}
                      </Link>
                    </h3>

                    {featuredNews.excerpt && (
                      <p>
                        {featuredNews.excerpt}
                      </p>
                    )}

                    <Link
                      to={`/news/${getSlug(
                        featuredNews
                      )}`}
                      className="np-story-link"
                    >
                      <span>Read the story</span>
                      <span>↗</span>
                    </Link>

                  </div>

                </article>
              )}


              {/* =============================================
                  SECONDARY STORIES
              ============================================= */}

              {secondaryNews.length > 0 && (
                <div className="np-secondary">

                  {secondaryNews.map(
                    (item, index) => {
                      const slug = getSlug(item);

                      return (
                        <article
                          key={
                            item.id ||
                            item._id ||
                            slug
                          }
                          className="np-secondary-story np-reveal"
                        >

                          <Link
                            to={`/news/${slug}`}
                            className="np-secondary-image"
                          >
                            <img
                              src={getImage(
                                item,
                                index + 1
                              )}
                              alt={
                                item.title ||
                                "SNGA news"
                              }
                              loading="lazy"
                              onError={(event) => {
                                event.currentTarget.onerror =
                                  null;

                                event.currentTarget.src =
                                  fallbackImages[
                                    (index + 1) %
                                      fallbackImages.length
                                  ];
                              }}
                            />

                            <span>
                              {String(
                                index + 2
                              ).padStart(2, "0")}
                            </span>
                          </Link>

                          <div className="np-secondary-copy">

                            <div className="np-meta">
                              <span>
                                {item.category ||
                                  "SNGA NEWS"}
                              </span>

                              <span className="np-meta-divider">
                                /
                              </span>

                              <span>
                                {formatDate(
                                  item.publishedAt ||
                                  item.createdAt
                                )}
                              </span>
                            </div>

                            <h3>
                              <Link
                                to={`/news/${slug}`}
                              >
                                {item.title}
                              </Link>
                            </h3>

                            {item.excerpt && (
                              <p>
                                {item.excerpt}
                              </p>
                            )}

                            <Link
                              to={`/news/${slug}`}
                              className="np-story-link"
                            >
                              <span>
                                Read story
                              </span>

                              <span>↗</span>
                            </Link>

                          </div>

                        </article>
                      );
                    }
                  )}

                </div>
              )}

            </>

          ) : (

            <div className="np-empty np-reveal">

              <div className="np-empty-number">
                01
              </div>

              <div>
                <span>THE CHRONICLE</span>

                <h3>
                  Stories are
                  <br />
                  coming <em>soon.</em>
                </h3>

                <p>
                  News and updates from our academy
                  will appear here.
                </p>
              </div>

            </div>

          )}

        </div>
      </section>


      {/* =====================================================
          EDITORIAL STATEMENT
      ===================================================== */}

      <section
        className="np-statement"
        style={{
          "--np-statement-bg": `url(${getImage(featuredNews, 0)})`,
        }}
      >

        <div className="np-container">

          <div className="np-statement-grid">

            <span className="np-statement-number">
              08
            </span>

            <div className="np-statement-main">

              <span>
                THE SCHOOL YEAR
              </span>

              <h3>
                Small moments.
                <br />
                <em>Big memories.</em>
              </h3>

            </div>

            <p>
              Every school year creates stories worth
              remembering — from the classroom to the
              playground and beyond.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="np-footer">

        <div className="np-container">

          <div className="np-footer-inner">

            <div className="np-footer-copy np-reveal">

              <span>
                KEEP EXPLORING
              </span>

              <h3>
                Life at
                <br />
                <em>SNGA.</em>
              </h3>

            </div>

            <div className="np-footer-action np-reveal">

              <p>
                Continue discovering the people,
                achievements and moments that make
                our academy what it is.
              </p>

              <Link
                to="/news"
                className="np-footer-link"
              >
                <span>View all news</span>
                <span>↗</span>
              </Link>

            </div>

          </div>

          <div className="np-footer-bottom">

            <span>
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <span>
              NEWS · STORIES · COMMUNITY
            </span>

          </div>

        </div>

      </section>

    </section>
  );
};

export default NewsPreview;
