

// import { useEffect, useState, useRef } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   FaArrowLeft,
//   FaArrowRight,
//   FaCalendarAlt,
//   FaUser,
//   FaTag,
//   FaClock,
//   FaEye,
//   FaHeart,
//   FaShare,
//   FaFacebook,
//   FaTwitter,
//   FaWhatsapp,
//   FaLinkedin,
//   FaCopy,
//   FaSchool,
//   FaNewspaper,
//   FaQuoteLeft,
//   FaTimes,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";
// import newsService from "../services/news.service";
// import "./NewsDetail.css";

// // =====================================================
// // ONLINE IMAGES
// // =====================================================
// const IMAGES = {
//   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   authorPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
// };

// const NewsDetail = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [news, setNews] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isLiked, setIsLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(0);
//   const [showShareModal, setShowShareModal] = useState(false);
//   const [copySuccess, setCopySuccess] = useState(false);
//   const [relatedPosts, setRelatedPosts] = useState([]);
//   const [readingProgress, setReadingProgress] = useState(0);
//   const contentRef = useRef(null);
//   const heroRef = useRef(null);

//   // =====================================================
//   // READING PROGRESS TRACKER
//   // =====================================================

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!contentRef.current) return;
      
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / docHeight) * 100;
//       setReadingProgress(Math.min(100, progress));
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // =====================================================
//   // FETCH NEWS
//   // =====================================================

//   useEffect(() => {
//     const loadNews = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // ✅ Use getNewsBySlug from the service
//         const response = await newsService.getNewsBySlug(slug);
        
//         // Handle the response structure
//         const newsData = response?.data || response;
        
//         if (!newsData) {
//           setError("News article not found.");
//           return;
//         }

//         setNews(newsData);
//         setLikeCount(newsData.likes || 0);
        
//         // Fetch related news (same category)
//         if (newsData.category) {
//           try {
//             const allNewsResponse = await newsService.getNews();
//             const allNews = allNewsResponse?.data || allNewsResponse || [];
//             const related = allNews
//               ?.filter(item => 
//                 item.category === newsData.category && 
//                 item.id !== newsData.id
//               )
//               ?.slice(0, 3) || [];
//             setRelatedPosts(related);
//           } catch (err) {
//             console.error("Failed to load related news:", err);
//           }
//         }
//       } catch (err) {
//         console.error("Failed to load news:", err);
//         setError("News article not found. It may have been removed.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       loadNews();
//     }
//   }, [slug]);

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
//       month: "long",
//       year: "numeric",
//     }).format(parsedDate);
//   };

//   const getReadingTime = (content) => {
//     if (!content) return "3 min read";
//     const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
//     const minutes = Math.ceil(words / 200);
//     return `${minutes} min read`;
//   };

//   const getAuthorName = () => {
//     if (news?.author?.name) return news.author.name;
//     if (news?.authorName) return news.authorName;
//     return "SNGA News Team";
//   };

//   const getAuthorAvatarUrl = () => {
//     const name = getAuthorName();
//     return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=D4A02B&color=fff&size=200&font-size=0.5`;
//   };

//   // =====================================================
//   // INTERACTIONS
//   // =====================================================

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
//     // TODO: API call to update like
//   };

//   const handleShare = (platform) => {
//     const url = window.location.href;
//     const title = news?.title || "Check out this news from SNGA";
//     let shareUrl = "";

//     switch (platform) {
//       case "facebook":
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
//         break;
//       case "twitter":
//         shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
//         break;
//       case "whatsapp":
//         shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`;
//         break;
//       case "linkedin":
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
//         break;
//       case "copy":
//         navigator.clipboard.writeText(url);
//         setCopySuccess(true);
//         setTimeout(() => setCopySuccess(false), 3000);
//         return;
//       default:
//         return;
//     }

//     if (shareUrl) {
//       window.open(shareUrl, "_blank", "width=600,height=400");
//     }
//     setShowShareModal(false);
//   };

//   // =====================================================
//   // LOADING STATE
//   // =====================================================

//   if (loading) {
//     return (
//       <main className="nd-page">
//         <div className="nd-loader">
//           <div className="nd-loader__spinner">
//             <span />
//             <span />
//             <span />
//           </div>
//           <p>Loading news article...</p>
//         </div>
//       </main>
//     );
//   }

//   // =====================================================
//   // ERROR STATE
//   // =====================================================

//   if (error || !news) {
//     return (
//       <main className="nd-page">
//         <div className="nd-container">
//           <div className="nd-error">
//             <div className="nd-error__icon">
//               <FaNewspaper />
//             </div>
//             <h2>News Not Found</h2>
//             <p>{error || "The news article you're looking for doesn't exist or has been removed."}</p>
//             <Link to="/news" className="nd-error__btn">
//               <FaArrowLeft />
//               <span>Back to News</span>
//             </Link>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   // =====================================================
//   // RENDER NEWS DETAIL
//   // =====================================================

//   return (
//     <main className="nd-page">
//       {/* Reading Progress Bar */}
//       <div className="nd-progress-bar" style={{ width: `${readingProgress}%` }} />

//       {/* =================================================
//           TOP BAR
//       ================================================= */}
//       <div className="nd-topbar">
//         <div className="nd-container">
//           <div className="nd-topbar__content">
//             <span className="nd-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy
//             </span>
//             <span className="nd-topbar__affiliation">CBSE Affiliated</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Featured Image
//       ================================================= */}
//       <section ref={heroRef} className="nd-hero">
//         <div className="nd-hero__bg-wrapper">
//           {news.featuredImage ? (
//             <div 
//               className="nd-hero__bg-image" 
//               style={{ backgroundImage: `url(${getImageUrl(news.featuredImage)})` }}
//             />
//           ) : (
//             <div className="nd-hero__bg-image" style={{ background: 'var(--nd-primary)' }} />
//           )}
//           <div className="nd-hero__bg-overlay" />
//           <div className="nd-hero__bg-gradient" />
//         </div>

//         <div className="nd-container">
//           <div className="nd-hero__content">
//             <Link to="/news" className="nd-hero__back">
//               <FaArrowLeft />
//               <span>Back to News</span>
//             </Link>

//             <div className="nd-hero__meta">
//               {news.category && (
//                 <span className="nd-hero__category">
//                   <FaTag />
//                   {news.category}
//                 </span>
//               )}
//               {news.publishedAt && (
//                 <time className="nd-hero__date">
//                   <FaCalendarAlt />
//                   {formatDate(news.publishedAt)}
//                 </time>
//               )}
//               <span className="nd-hero__read-time">
//                 <FaClock />
//                 {getReadingTime(news.content)}
//               </span>
//             </div>

//             <h1 className="nd-hero__title">{news.title}</h1>

//             {news.excerpt && (
//               <p className="nd-hero__excerpt">{news.excerpt}</p>
//             )}

//           </div>
//         </div>

//         <div className="nd-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           CONTENT
//       ================================================= */}
//       <section className="nd-content">
//         <div className="nd-container">
//           <div className="nd-content__wrapper">
//             {/* Main Content */}
//             <article className="nd-content__main" ref={contentRef}>
//               <div 
//                 className="nd-content__body"
//                 dangerouslySetInnerHTML={{ __html: news.content || "<p>No content available.</p>" }}
//               />

//               {/* Tags - if keywords exist */}
//               {news.keywords && (
//                 <div className="nd-content__tags">
//                   <span className="nd-content__tags-label">Tags:</span>
//                   {news.keywords.split(',').map((tag, index) => (
//                     <span key={index} className="nd-content__tag">
//                       #{tag.trim()}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Share & Like */}
//               <div className="nd-content__actions">
//                 <button 
//                   className={`nd-content__like ${isLiked ? "nd-content__like--active" : ""}`}
//                   onClick={handleLike}
//                 >
//                   <FaHeart />
//                   <span>{likeCount}</span>
//                 </button>
//                 <button 
//                   className="nd-content__share"
//                   onClick={() => setShowShareModal(true)}
//                 >
//                   <FaShare />
//                   <span>Share</span>
//                 </button>
//               </div>
//             </article>

//             {/* Sidebar */}
//             <aside className="nd-content__sidebar">
//               {/* Author Card */}
//               <div className="nd-sidebar__card nd-sidebar__author">
//                 <div className="nd-sidebar__author-avatar">
//                   <img src={getAuthorAvatarUrl()} alt={getAuthorName()} />
//                 </div>
//                 <h4>{getAuthorName()}</h4>
//                 <p>{news.author?.email ? "Author" : "News Team"}</p>
//                 {news.author?.email && (
//                   <p className="nd-sidebar__author-bio">
//                     Member of the SNGA community sharing news and updates.
//                   </p>
//                 )}
//               </div>

//               {/* Quick Stats */}
//               <div className="nd-sidebar__card nd-sidebar__stats">
//                 <div className="nd-sidebar__stat">
//                   <FaCalendarAlt />
//                   <span>Published</span>
//                   <strong>{formatDate(news.publishedAt)}</strong>
//                 </div>
//                 <div className="nd-sidebar__stat">
//                   <FaClock />
//                   <span>Read Time</span>
//                   <strong>{getReadingTime(news.content)}</strong>
//                 </div>
//                 <div className="nd-sidebar__stat">
//                   <FaTag />
//                   <span>Category</span>
//                   <strong>{news.category || "Uncategorized"}</strong>
//                 </div>
//               </div>

//               {/* Related News */}
//               {relatedPosts.length > 0 && (
//                 <div className="nd-sidebar__card nd-sidebar__related">
//                   <h4>Related News</h4>
//                   {relatedPosts.map((item) => (
//                     <Link 
//                       key={item.id} 
//                       to={`/news/${item.slug}`}
//                       className="nd-sidebar__related-item"
//                     >
//                       <div className="nd-sidebar__related-image">
//                         {item.featuredImage ? (
//                           <img src={getImageUrl(item.featuredImage)} alt={item.title} />
//                         ) : (
//                           <FaNewspaper />
//                         )}
//                       </div>
//                       <div className="nd-sidebar__related-info">
//                         <h5>{item.title}</h5>
//                         <span>{formatDate(item.publishedAt)}</span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           RELATED NEWS
//       ================================================= */}
//       {relatedPosts.length > 0 && (
//         <section className="nd-related">
//           <div className="nd-container">
//             <div className="nd-related__header">
//               <h2>
//                 You Might Also Like
//                 <span className="nd-related__highlight">Related News</span>
//               </h2>
//             </div>

//             <div className="nd-related__grid">
//               {relatedPosts.map((item) => (
//                 <Link 
//                   key={item.id} 
//                   to={`/news/${item.slug}`}
//                   className="nd-related__card"
//                 >
//                   <div className="nd-related__card-image">
//                     {item.featuredImage ? (
//                       <img src={getImageUrl(item.featuredImage)} alt={item.title} />
//                     ) : (
//                       <div className="nd-related__card-placeholder">
//                         <FaNewspaper />
//                       </div>
//                     )}
//                     <span className="nd-related__card-category">{item.category}</span>
//                   </div>
//                   <div className="nd-related__card-content">
//                     <h3>{item.title}</h3>
//                     <span>{formatDate(item.publishedAt)}</span>
//                     <div className="nd-related__card-link">
//                       Read More <FaArrowRight />
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* =================================================
//           FINAL CTA
//       ================================================= */}
//       <section className="nd-cta">
//         <div className="nd-cta__bg-wrapper">
//           <div 
//             className="nd-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="nd-cta__bg-overlay" />
//           <div className="nd-cta__bg-gradient" />
//         </div>

//         <div className="nd-container">
//           <div className="nd-cta__content">
//             <div className="nd-cta__badge">
//               <FaSchool />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>
//             <h2 className="nd-cta__title">
//               Stay Updated
//               <br />
//               <span className="nd-cta__highlight">With SNGA.</span>
//             </h2>
//             <p className="nd-cta__desc">
//               Continue exploring the latest news, events and stories from our school community.
//             </p>

//             <div className="nd-cta__actions">
//               <Link to="/news" className="nd-cta__btn nd-cta__btn--primary">
//                 <span>View All News</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/" className="nd-cta__btn nd-cta__btn--secondary">
//                 Visit Home
//               </Link>
//             </div>

//             <div className="nd-cta__footer">
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

//       {/* =================================================
//           SHARE MODAL
//       ================================================= */}
//       {showShareModal && (
//         <div 
//           className="nd-modal"
//           onClick={(e) => {
//             if (e.target === e.currentTarget) {
//               setShowShareModal(false);
//             }
//           }}
//         >
//           <div className="nd-modal__inner">
//             <button 
//               className="nd-modal__close"
//               onClick={() => setShowShareModal(false)}
//             >
//               <FaTimes />
//             </button>
//             <h3>Share This News</h3>
//             <p>Spread the news with your network</p>
//             <div className="nd-modal__options">
//               <button onClick={() => handleShare("facebook")} className="nd-modal__option nd-modal__option--facebook">
//                 <FaFacebook />
//                 <span>Facebook</span>
//               </button>
//               <button onClick={() => handleShare("twitter")} className="nd-modal__option nd-modal__option--twitter">
//                 <FaTwitter />
//                 <span>Twitter</span>
//               </button>
//               <button onClick={() => handleShare("whatsapp")} className="nd-modal__option nd-modal__option--whatsapp">
//                 <FaWhatsapp />
//                 <span>WhatsApp</span>
//               </button>
//               <button onClick={() => handleShare("linkedin")} className="nd-modal__option nd-modal__option--linkedin">
//                 <FaLinkedin />
//                 <span>LinkedIn</span>
//               </button>
//               <button onClick={() => handleShare("copy")} className="nd-modal__option nd-modal__option--copy">
//                 <FaCopy />
//                 <span>{copySuccess ? "Copied!" : "Copy Link"}</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default NewsDetail;




import { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaClock,
  FaEye,
  FaHeart,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaCopy,
  FaSchool,
  FaNewspaper,
  FaQuoteLeft,
  FaTimes,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import newsService from "../services/news.service";
import "./NewsDetail.css";

// =====================================================
// ONLINE IMAGES
// =====================================================
const IMAGES = {
  ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
  authorPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
};

const NewsDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef(null);
  const heroRef = useRef(null);

  // =====================================================
  // READING PROGRESS TRACKER
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, progress));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =====================================================
  // FETCH NEWS
  // =====================================================

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        setError("");

        // ✅ Use getNewsBySlug from the service
        const response = await newsService.getNewsBySlug(slug);
        
        // Handle the response structure
        const newsData = response?.data || response;
        
        if (!newsData) {
          setError("News article not found.");
          return;
        }

        setNews(newsData);
        setLikeCount(newsData.likes || 0);
        
        // Fetch related news (same category)
        if (newsData.category) {
          try {
            const allNewsResponse = await newsService.getNews();
            const allNews = allNewsResponse?.data || allNewsResponse || [];
            const related = allNews
              ?.filter(item => 
                item.category === newsData.category && 
                item.id !== newsData.id
              )
              ?.slice(0, 3) || [];
            setRelatedPosts(related);
          } catch (err) {
            console.error("Failed to load related news:", err);
          }
        }
      } catch (err) {
        console.error("Failed to load news:", err);
        setError("News article not found. It may have been removed.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadNews();
    }
  }, [slug]);

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
      month: "long",
      year: "numeric",
    }).format(parsedDate);
  };

  const getReadingTime = (content) => {
    if (!content) return "3 min read";
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const getAuthorName = () => {
    if (news?.author?.name) return news.author.name;
    if (news?.authorName) return news.authorName;
    return "SNGA News Team";
  };

  const getAuthorAvatarUrl = () => {
    const name = getAuthorName();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=D4A02B&color=fff&size=200&font-size=0.5`;
  };

  // =====================================================
  // INTERACTIONS
  // =====================================================

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    // TODO: API call to update like
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = news?.title || "Check out this news from SNGA";
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
        return;
      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
    setShowShareModal(false);
  };

  // =====================================================
  // LOADING STATE
  // =====================================================

  if (loading) {
    return (
      <main className="nd-page">
        <div className="nd-loader">
          <div className="nd-loader__spinner">
            <span />
            <span />
            <span />
          </div>
          <p>Loading news article...</p>
        </div>
      </main>
    );
  }

  // =====================================================
  // ERROR STATE
  // =====================================================

  if (error || !news) {
    return (
      <main className="nd-page">
        <div className="nd-container">
          <div className="nd-error">
            <div className="nd-error__icon">
              <FaNewspaper />
            </div>
            <h2>News Not Found</h2>
            <p>{error || "The news article you're looking for doesn't exist or has been removed."}</p>
            <Link to="/news" className="nd-error__btn">
              <FaArrowLeft />
              <span>Back to News</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // =====================================================
  // RENDER NEWS DETAIL
  // =====================================================

  return (
    <main className="nd-page">
      {/* Reading Progress Bar */}
      <div className="nd-progress-bar" style={{ width: `${readingProgress}%` }} />

      {/* =================================================
          TOP BAR
      ================================================= */}
      <div className="nd-topbar">
        <div className="nd-container">
          <div className="nd-topbar__content">
            <span className="nd-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy
            </span>
            <span className="nd-topbar__affiliation">CBSE Affiliated</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Featured Image
      ================================================= */}
      <section ref={heroRef} className="nd-hero">
        <div className="nd-hero__bg-wrapper">
          {news.featuredImage ? (
            <div 
              className="nd-hero__bg-image" 
              style={{ backgroundImage: `url(${getImageUrl(news.featuredImage)})` }}
            />
          ) : (
            <div className="nd-hero__bg-image" style={{ background: 'var(--nd-primary)' }} />
          )}
          <div className="nd-hero__bg-overlay" />
          <div className="nd-hero__bg-gradient" />
        </div>

        <div className="nd-container">
          <div className="nd-hero__content">
            <Link to="/news" className="nd-hero__back">
              <FaArrowLeft />
              <span>Back to News</span>
            </Link>

            <div className="nd-hero__meta">
              {news.category && (
                <span className="nd-hero__category">
                  <FaTag />
                  {news.category}
                </span>
              )}
              {news.publishedAt && (
                <time className="nd-hero__date">
                  <FaCalendarAlt />
                  {formatDate(news.publishedAt)}
                </time>
              )}
              <span className="nd-hero__read-time">
                <FaClock />
                {getReadingTime(news.content)}
              </span>
            </div>

            <h1 className="nd-hero__title">{news.title}</h1>

            {news.excerpt && (
              <p className="nd-hero__excerpt">{news.excerpt}</p>
            )}

          </div>
        </div>

        <div className="nd-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          CONTENT
      ================================================= */}
      <section className="nd-content">
        <div className="nd-container">
          <div className="nd-content__wrapper">
            {/* Main Content */}
            <article className="nd-content__main" ref={contentRef}>
              <div 
                className="nd-content__body"
                dangerouslySetInnerHTML={{ __html: news.content || "<p>No content available.</p>" }}
              />

              {/* Tags - if keywords exist */}
              {news.keywords && (
                <div className="nd-content__tags">
                  <span className="nd-content__tags-label">Tags:</span>
                  {news.keywords.split(',').map((tag, index) => (
                    <span key={index} className="nd-content__tag">
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Share & Like */}
              <div className="nd-content__actions">
                <button 
                  className={`nd-content__like ${isLiked ? "nd-content__like--active" : ""}`}
                  onClick={handleLike}
                >
                  <FaHeart />
                  <span>{likeCount}</span>
                </button>
                <button 
                  className="nd-content__share"
                  onClick={() => setShowShareModal(true)}
                >
                  <FaShare />
                  <span>Share</span>
                </button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="nd-content__sidebar">
              {/* Author Card */}
              <div className="nd-sidebar__card nd-sidebar__author">
                <div className="nd-sidebar__author-avatar">
                  <img src={getAuthorAvatarUrl()} alt={getAuthorName()} />
                </div>
                <h4>{getAuthorName()}</h4>
                <p>{news.author?.email ? "Author" : "News Team"}</p>
                {news.author?.email && (
                  <p className="nd-sidebar__author-bio">
                    Member of the SNGA community sharing news and updates.
                  </p>
                )}
              </div>

              {/* Quick Stats */}
              <div className="nd-sidebar__card nd-sidebar__stats">
                <div className="nd-sidebar__stat">
                  <FaCalendarAlt />
                  <span>Published</span>
                  <strong>{formatDate(news.publishedAt)}</strong>
                </div>
                <div className="nd-sidebar__stat">
                  <FaClock />
                  <span>Read Time</span>
                  <strong>{getReadingTime(news.content)}</strong>
                </div>
                <div className="nd-sidebar__stat">
                  <FaTag />
                  <span>Category</span>
                  <strong>{news.category || "Uncategorized"}</strong>
                </div>
              </div>

              {/* Related News */}
              {relatedPosts.length > 0 && (
                <div className="nd-sidebar__card nd-sidebar__related">
                  <h4>Related News</h4>
                  {relatedPosts.map((item) => (
                    <Link 
                      key={item.id} 
                      to={`/news/${item.slug}`}
                      className="nd-sidebar__related-item"
                    >
                      <div className="nd-sidebar__related-image">
                        {item.featuredImage ? (
                          <img src={getImageUrl(item.featuredImage)} alt={item.title} />
                        ) : (
                          <FaNewspaper />
                        )}
                      </div>
                      <div className="nd-sidebar__related-info">
                        <h5>{item.title}</h5>
                        <span>{formatDate(item.publishedAt)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* =================================================
          RELATED NEWS
      ================================================= */}
      {relatedPosts.length > 0 && (
        <section className="nd-related">
          <div className="nd-container">
            <div className="nd-related__header">
              <h2>
                You Might Also Like
                <span className="nd-related__highlight">Related News</span>
              </h2>
            </div>

            <div className="nd-related__grid">
              {relatedPosts.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/news/${item.slug}`}
                  className="nd-related__card"
                >
                  <div className="nd-related__card-image">
                    {item.featuredImage ? (
                      <img src={getImageUrl(item.featuredImage)} alt={item.title} />
                    ) : (
                      <div className="nd-related__card-placeholder">
                        <FaNewspaper />
                      </div>
                    )}
                    <span className="nd-related__card-category">{item.category}</span>
                  </div>
                  <div className="nd-related__card-content">
                    <h3>{item.title}</h3>
                    <span>{formatDate(item.publishedAt)}</span>
                    <div className="nd-related__card-link">
                      Read More <FaArrowRight />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =================================================
          FINAL CTA
      ================================================= */}
      <section className="nd-cta">
        <div className="nd-cta__bg-wrapper">
          <div 
            className="nd-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="nd-cta__bg-overlay" />
          <div className="nd-cta__bg-gradient" />
        </div>

        <div className="nd-container">
          <div className="nd-cta__content">
            <div className="nd-cta__badge">
              <FaSchool />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>
            <h2 className="nd-cta__title">
              Stay Updated
              <br />
              <span className="nd-cta__highlight">With SNGA.</span>
            </h2>
            <p className="nd-cta__desc">
              Continue exploring the latest news, events and stories from our school community.
            </p>

            <div className="nd-cta__actions">
              <Link to="/news" className="nd-cta__btn nd-cta__btn--primary">
                <span>View All News</span>
                <FaArrowRight />
              </Link>
              <Link to="/" className="nd-cta__btn nd-cta__btn--secondary">
                Visit Home
              </Link>
            </div>

            <div className="nd-cta__footer">
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

      {/* =================================================
          SHARE MODAL
      ================================================= */}
      {showShareModal && (
        <div 
          className="nd-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowShareModal(false);
            }
          }}
        >
          <div className="nd-modal__inner">
            <button 
              className="nd-modal__close"
              onClick={() => setShowShareModal(false)}
            >
              <FaTimes />
            </button>
            <h3>Share This News</h3>
            <p>Spread the news with your network</p>
            <div className="nd-modal__options">
              <button onClick={() => handleShare("facebook")} className="nd-modal__option nd-modal__option--facebook">
                <FaFacebook />
                <span>Facebook</span>
              </button>
              <button onClick={() => handleShare("twitter")} className="nd-modal__option nd-modal__option--twitter">
                <FaTwitter />
                <span>Twitter</span>
              </button>
              <button onClick={() => handleShare("whatsapp")} className="nd-modal__option nd-modal__option--whatsapp">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </button>
              <button onClick={() => handleShare("linkedin")} className="nd-modal__option nd-modal__option--linkedin">
                <FaLinkedin />
                <span>LinkedIn</span>
              </button>
              <button onClick={() => handleShare("copy")} className="nd-modal__option nd-modal__option--copy">
                <FaCopy />
                <span>{copySuccess ? "Copied!" : "Copy Link"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default NewsDetail;