// // import { useEffect, useState, useRef } from "react";
// // import { useParams, Link, useNavigate } from "react-router-dom";
// // import {
// //   FaArrowLeft,
// //   FaArrowRight,
// //   FaCalendarAlt,
// //   FaUser,
// //   FaTag,
// //   FaClock,
// //   FaEye,
// //   FaHeart,
// //   FaShare,
// //   FaFacebook,
// //   FaTwitter,
// //   FaWhatsapp,
// //   FaLinkedin,
// //   FaCopy,
// //   FaSchool,
// //   FaBookOpen,
// //   FaQuoteLeft,
// //   FaTimes,
// //   FaNewspaper,
// //   FaUsers,
// //   FaTrophy,
// //   FaMapMarkerAlt,
// //   FaPhone,
// //   FaEnvelope,
// // } from "react-icons/fa";
// // import blogService from "../services/blog.service";
// // import "./BlogDetails.css";

// // // =====================================================
// // // ONLINE IMAGES
// // // =====================================================
// // const IMAGES = {
// //   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
// //   authorPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
// // };

// // const BlogDetail = () => {
// //   const { slug } = useParams();
// //   const navigate = useNavigate();
// //   const [blog, setBlog] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [isLiked, setIsLiked] = useState(false);
// //   const [likeCount, setLikeCount] = useState(0);
// //   const [showShareModal, setShowShareModal] = useState(false);
// //   const [copySuccess, setCopySuccess] = useState(false);
// //   const [relatedPosts, setRelatedPosts] = useState([]);
// //   const [readingProgress, setReadingProgress] = useState(0);
// //   const contentRef = useRef(null);
// //   const heroRef = useRef(null);

// //   // =====================================================
// //   // READING PROGRESS TRACKER
// //   // =====================================================

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!contentRef.current) return;
      
// //       const scrollTop = window.scrollY;
// //       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
// //       const progress = (scrollTop / docHeight) * 100;
// //       setReadingProgress(Math.min(100, progress));
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // =====================================================
// //   // FETCH BLOG
// //   // =====================================================

// //   useEffect(() => {
// //     const loadBlog = async () => {
// //       try {
// //         setLoading(true);
// //         setError("");

// //         const response = await blogService.getBlogBySlug(slug);
        
// //         if (!response) {
// //           setError("Article not found.");
// //           return;
// //         }

// //         setBlog(response);
// //         setLikeCount(response.likes || 0);
        
// //         // Fetch related posts (same category)
// //         if (response.category) {
// //           try {
// //             const allBlogs = await blogService.getPublishedBlogs();
// //             const related = allBlogs
// //               ?.filter(b => 
// //                 b.category === response.category && 
// //                 (b.id !== response.id && b._id !== response._id)
// //               )
// //               ?.slice(0, 3) || [];
// //             setRelatedPosts(related);
// //           } catch (err) {
// //             console.error("Failed to load related posts:", err);
// //           }
// //         }
// //       } catch (err) {
// //         console.error("Failed to load blog:", err);
// //         setError("Article not found. It may have been removed.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (slug) {
// //       loadBlog();
// //     }
// //   }, [slug]);

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
// //       month: "long",
// //       year: "numeric",
// //     }).format(parsedDate);
// //   };

// //   const getReadingTime = (content) => {
// //     if (!content) return "5 min read";
// //     const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
// //     const minutes = Math.ceil(words / 200);
// //     return `${minutes} min read`;
// //   };

// //   // =====================================================
// //   // INTERACTIONS
// //   // =====================================================

// //   const handleLike = () => {
// //     setIsLiked(!isLiked);
// //     setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
// //     // TODO: API call to update like
// //   };

// //   const handleShare = (platform) => {
// //     const url = window.location.href;
// //     const title = blog?.title || "Check out this article from SNGA";
// //     let shareUrl = "";

// //     switch (platform) {
// //       case "facebook":
// //         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
// //         break;
// //       case "twitter":
// //         shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
// //         break;
// //       case "whatsapp":
// //         shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`;
// //         break;
// //       case "linkedin":
// //         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
// //         break;
// //       case "copy":
// //         navigator.clipboard.writeText(url);
// //         setCopySuccess(true);
// //         setTimeout(() => setCopySuccess(false), 3000);
// //         return;
// //       default:
// //         return;
// //     }

// //     if (shareUrl) {
// //       window.open(shareUrl, "_blank", "width=600,height=400");
// //     }
// //     setShowShareModal(false);
// //   };

// //   // =====================================================
// //   // LOADING STATE
// //   // =====================================================

// //   if (loading) {
// //     return (
// //       <main className="bd-page">
// //         <div className="bd-loader">
// //           <div className="bd-loader__spinner">
// //             <span />
// //             <span />
// //             <span />
// //           </div>
// //           <p>Loading article...</p>
// //         </div>
// //       </main>
// //     );
// //   }

// //   // =====================================================
// //   // ERROR STATE
// //   // =====================================================

// //   if (error || !blog) {
// //     return (
// //       <main className="bd-page">
// //         <div className="bd-container">
// //           <div className="bd-error">
// //             <div className="bd-error__icon">
// //               <FaBookOpen />
// //             </div>
// //             <h2>Article Not Found</h2>
// //             <p>{error || "The article you're looking for doesn't exist or has been removed."}</p>
// //             <Link to="/blogs" className="bd-error__btn">
// //               <FaArrowLeft />
// //               <span>Back to Articles</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </main>
// //     );
// //   }

// //   // =====================================================
// //   // RENDER BLOG DETAIL
// //   // =====================================================

// //   return (
// //     <main className="bd-page">
// //       {/* Reading Progress Bar */}
// //       <div className="bd-progress-bar" style={{ width: `${readingProgress}%` }} />

// //       {/* =================================================
// //           TOP BAR
// //       ================================================= */}
// //       <div className="bd-topbar">
// //         <div className="bd-container">
// //           <div className="bd-topbar__content">
// //             <span className="bd-topbar__motto">
// //               <FaSchool />
// //               Shifan Noor Global Academy
// //             </span>
// //             <span className="bd-topbar__affiliation">CBSE Affiliated</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =================================================
// //           HERO - With Featured Image
// //       ================================================= */}
// //       <section ref={heroRef} className="bd-hero">
// //         <div className="bd-hero__bg-wrapper">
// //           {blog.featuredImage ? (
// //             <div 
// //               className="bd-hero__bg-image" 
// //               style={{ backgroundImage: `url(${getImageUrl(blog.featuredImage)})` }}
// //             />
// //           ) : (
// //             <div className="bd-hero__bg-image" />
// //           )}
// //           <div className="bd-hero__bg-overlay" />
// //           <div className="bd-hero__bg-gradient" />
// //         </div>

// //         <div className="bd-container">
// //           <div className="bd-hero__content">
// //             <Link to="/blogs" className="bd-hero__back">
// //               <FaArrowLeft />
// //               <span>Back to Articles</span>
// //             </Link>

// //             <div className="bd-hero__meta">
// //               {blog.category && (
// //                 <span className="bd-hero__category">
// //                   <FaTag />
// //                   {blog.category}
// //                 </span>
// //               )}
// //               {blog.publishedAt && (
// //                 <time className="bd-hero__date">
// //                   <FaCalendarAlt />
// //                   {formatDate(blog.publishedAt)}
// //                 </time>
// //               )}
// //               <span className="bd-hero__read-time">
// //                 <FaClock />
// //                 {getReadingTime(blog.content)}
// //               </span>
// //             </div>

// //             <h1 className="bd-hero__title">{blog.title}</h1>

// //             {blog.excerpt && (
// //               <p className="bd-hero__excerpt">{blog.excerpt}</p>
// //             )}

// //             <div className="bd-hero__author">
// //               <div className="bd-hero__author-avatar">
// //                 {blog.authorAvatar ? (
// //                   <img src={getImageUrl(blog.authorAvatar)} alt={blog.authorName} />
// //                 ) : (
// //                   <span>{blog.authorName?.[0] || "A"}</span>
// //                 )}
// //               </div>
// //               <div className="bd-hero__author-info">
// //                 <span className="bd-hero__author-name">
// //                   {blog.authorName || "SNGA Editorial Team"}
// //                 </span>
// //                 <span className="bd-hero__author-role">
// //                   {blog.authorRole || "Contributor"}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bd-hero__wave">
// //           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
// //             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
// //           </svg>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           CONTENT
// //       ================================================= */}
// //       <section className="bd-content">
// //         <div className="bd-container">
// //           <div className="bd-content__wrapper">
// //             {/* Main Content */}
// //             <article className="bd-content__main" ref={contentRef}>
// //               <div 
// //                 className="bd-content__body"
// //                 dangerouslySetInnerHTML={{ __html: blog.content || "<p>No content available.</p>" }}
// //               />

// //               {/* Tags */}
// //               {blog.tags && blog.tags.length > 0 && (
// //                 <div className="bd-content__tags">
// //                   <span className="bd-content__tags-label">Tags:</span>
// //                   {blog.tags.map((tag, index) => (
// //                     <span key={index} className="bd-content__tag">
// //                       #{tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Share & Like */}
// //               <div className="bd-content__actions">
// //                 <button 
// //                   className={`bd-content__like ${isLiked ? "bd-content__like--active" : ""}`}
// //                   onClick={handleLike}
// //                 >
// //                   <FaHeart />
// //                   <span>{likeCount}</span>
// //                 </button>
// //                 <button 
// //                   className="bd-content__share"
// //                   onClick={() => setShowShareModal(true)}
// //                 >
// //                   <FaShare />
// //                   <span>Share</span>
// //                 </button>
// //               </div>
// //             </article>

// //             {/* Sidebar */}
// //             <aside className="bd-content__sidebar">
// //               {/* Author Card */}
// //               <div className="bd-sidebar__card bd-sidebar__author">
// //                 <div className="bd-sidebar__author-avatar">
// //                   {blog.authorAvatar ? (
// //                     <img src={getImageUrl(blog.authorAvatar)} alt={blog.authorName} />
// //                   ) : (
// //                     <span>{blog.authorName?.[0] || "A"}</span>
// //                   )}
// //                 </div>
// //                 <h4>{blog.authorName || "SNGA Editorial Team"}</h4>
// //                 <p>{blog.authorRole || "Contributor"}</p>
// //                 {blog.authorBio && <p className="bd-sidebar__author-bio">{blog.authorBio}</p>}
// //               </div>

// //               {/* Quick Stats */}
// //               <div className="bd-sidebar__card bd-sidebar__stats">
// //                 <div className="bd-sidebar__stat">
// //                   <FaCalendarAlt />
// //                   <span>Published</span>
// //                   <strong>{formatDate(blog.publishedAt)}</strong>
// //                 </div>
// //                 <div className="bd-sidebar__stat">
// //                   <FaClock />
// //                   <span>Read Time</span>
// //                   <strong>{getReadingTime(blog.content)}</strong>
// //                 </div>
// //                 <div className="bd-sidebar__stat">
// //                   <FaEye />
// //                   <span>Views</span>
// //                   <strong>{blog.views || 0}</strong>
// //                 </div>
// //               </div>

// //               {/* Related Posts */}
// //               {relatedPosts.length > 0 && (
// //                 <div className="bd-sidebar__card bd-sidebar__related">
// //                   <h4>Related Articles</h4>
// //                   {relatedPosts.map((post) => (
// //                     <Link 
// //                       key={post.id || post._id} 
// //                       to={`/blogs/${post.slug}`}
// //                       className="bd-sidebar__related-item"
// //                     >
// //                       <div className="bd-sidebar__related-image">
// //                         {post.featuredImage ? (
// //                           <img src={getImageUrl(post.featuredImage)} alt={post.title} />
// //                         ) : (
// //                           <FaBookOpen />
// //                         )}
// //                       </div>
// //                       <div className="bd-sidebar__related-info">
// //                         <h5>{post.title}</h5>
// //                         <span>{formatDate(post.publishedAt)}</span>
// //                       </div>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               )}
// //             </aside>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           RELATED POSTS - Horizontal Scroll
// //       ================================================= */}
// //       {relatedPosts.length > 0 && (
// //         <section className="bd-related">
// //           <div className="bd-container">
// //             <div className="bd-related__header">
// //               <h2>
// //                 You Might Also Like
// //                 <span className="bd-related__highlight">Related Articles</span>
// //               </h2>
// //             </div>

// //             <div className="bd-related__grid">
// //               {relatedPosts.map((post) => (
// //                 <Link 
// //                   key={post.id || post._id} 
// //                   to={`/blogs/${post.slug}`}
// //                   className="bd-related__card"
// //                 >
// //                   <div className="bd-related__card-image">
// //                     {post.featuredImage ? (
// //                       <img src={getImageUrl(post.featuredImage)} alt={post.title} />
// //                     ) : (
// //                       <div className="bd-related__card-placeholder">
// //                         <FaBookOpen />
// //                       </div>
// //                     )}
// //                     <span className="bd-related__card-category">{post.category}</span>
// //                   </div>
// //                   <div className="bd-related__card-content">
// //                     <h3>{post.title}</h3>
// //                     <span>{formatDate(post.publishedAt)}</span>
// //                     <div className="bd-related__card-link">
// //                       Read More <FaArrowRight />
// //                     </div>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       )}

// //       {/* =================================================
// //           FINAL CTA
// //       ================================================= */}
// //       <section className="bd-cta">
// //         <div className="bd-cta__bg-wrapper">
// //           <div 
// //             className="bd-cta__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
// //           />
// //           <div className="bd-cta__bg-overlay" />
// //           <div className="bd-cta__bg-gradient" />
// //         </div>

// //         <div className="bd-container">
// //           <div className="bd-cta__content">
// //             <div className="bd-cta__badge">
// //               <FaSchool />
// //               SHIFAN NOOR GLOBAL ACADEMY
// //             </div>
// //             <h2 className="bd-cta__title">
// //               More Stories
// //               <br />
// //               <span className="bd-cta__highlight">Await You.</span>
// //             </h2>
// //             <p className="bd-cta__desc">
// //               Continue exploring insights, perspectives and stories from our learning community.
// //             </p>

// //             <div className="bd-cta__actions">
// //               <Link to="/blogs" className="bd-cta__btn bd-cta__btn--primary">
// //                 <span>View All Articles</span>
// //                 <FaArrowRight />
// //               </Link>
// //               <Link to="/" className="bd-cta__btn bd-cta__btn--secondary">
// //                 Visit Home
// //               </Link>
// //             </div>

// //             <div className="bd-cta__footer">
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

// //       {/* =================================================
// //           SHARE MODAL
// //       ================================================= */}
// //       {showShareModal && (
// //         <div 
// //           className="bd-modal"
// //           onClick={(e) => {
// //             if (e.target === e.currentTarget) {
// //               setShowShareModal(false);
// //             }
// //           }}
// //         >
// //           <div className="bd-modal__inner">
// //             <button 
// //               className="bd-modal__close"
// //               onClick={() => setShowShareModal(false)}
// //             >
// //               <FaTimes />
// //             </button>
// //             <h3>Share This Article</h3>
// //             <p>Spread the knowledge with your network</p>
// //             <div className="bd-modal__options">
// //               <button onClick={() => handleShare("facebook")} className="bd-modal__option bd-modal__option--facebook">
// //                 <FaFacebook />
// //                 <span>Facebook</span>
// //               </button>
// //               <button onClick={() => handleShare("twitter")} className="bd-modal__option bd-modal__option--twitter">
// //                 <FaTwitter />
// //                 <span>Twitter</span>
// //               </button>
// //               <button onClick={() => handleShare("whatsapp")} className="bd-modal__option bd-modal__option--whatsapp">
// //                 <FaWhatsapp />
// //                 <span>WhatsApp</span>
// //               </button>
// //               <button onClick={() => handleShare("linkedin")} className="bd-modal__option bd-modal__option--linkedin">
// //                 <FaLinkedin />
// //                 <span>LinkedIn</span>
// //               </button>
// //               <button onClick={() => handleShare("copy")} className="bd-modal__option bd-modal__option--copy">
// //                 <FaCopy />
// //                 <span>{copySuccess ? "Copied!" : "Copy Link"}</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </main>
// //   );
// // };

// // export default BlogDetail;


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
//   FaBookOpen,
//   FaQuoteLeft,
//   FaTimes,
//   FaNewspaper,
//   FaUsers,
//   FaTrophy,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";
// import blogService from "../services/blog.service";
// import "./BlogDetails.css";

// // =====================================================
// // ONLINE IMAGES
// // =====================================================
// const IMAGES = {
//   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   authorPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
// };

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState(null);
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
//   // FETCH BLOG - UPDATED for API structure
//   // =====================================================

//   useEffect(() => {
//     const loadBlog = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await blogService.getBlogBySlug(slug);
        
//         // ✅ Handle the response structure: { success: true, data: { ... } }
//         const blogData = response?.data || response;
        
//         if (!blogData) {
//           setError("Article not found.");
//           return;
//         }

//         setBlog(blogData);
//         setLikeCount(blogData.likes || 0);
        
//         // Fetch related posts (same category)
//         if (blogData.category) {
//           try {
//             const allBlogsResponse = await blogService.getPublishedBlogs();
//             // ✅ Handle the response structure for all blogs
//             const allBlogs = allBlogsResponse?.data || allBlogsResponse || [];
//             const related = allBlogs
//               ?.filter(b => 
//                 b.category === blogData.category && 
//                 b.id !== blogData.id
//               )
//               ?.slice(0, 3) || [];
//             setRelatedPosts(related);
//           } catch (err) {
//             console.error("Failed to load related posts:", err);
//           }
//         }
//       } catch (err) {
//         console.error("Failed to load blog:", err);
//         setError("Article not found. It may have been removed.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       loadBlog();
//     }
//   }, [slug]);

//   // =====================================================
//   // HELPERS - UPDATED for API structure
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
//     if (!content) return "5 min read";
//     const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
//     const minutes = Math.ceil(words / 200);
//     return `${minutes} min read`;
//   };

//   // ✅ Get author name from the author object
//   const getAuthorName = () => {
//     if (blog?.author?.name) return blog.author.name;
//     if (blog?.authorName) return blog.authorName;
//     return "SNGA Editorial Team";
//   };

//   // ✅ Get author email
//   const getAuthorEmail = () => {
//     if (blog?.author?.email) return blog.author.email;
//     return null;
//   };

//   // ✅ Get author avatar (use email for gravatar or placeholder)
//   const getAuthorAvatar = () => {
//     const email = getAuthorEmail();
//     if (email) {
//       return `https://www.gravatar.com/avatar/${md5(email)}?s=200&d=identicon`;
//     }
//     return IMAGES.authorPlaceholder;
//   };

//   // Simple MD5 hash function for gravatar
//   const md5 = (string) => {
//     return require('crypto').createHash('md5').update(string).digest('hex');
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
//     const title = blog?.title || "Check out this article from SNGA";
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
//       <main className="bd-page">
//         <div className="bd-loader">
//           <div className="bd-loader__spinner">
//             <span />
//             <span />
//             <span />
//           </div>
//           <p>Loading article...</p>
//         </div>
//       </main>
//     );
//   }

//   // =====================================================
//   // ERROR STATE
//   // =====================================================

//   if (error || !blog) {
//     return (
//       <main className="bd-page">
//         <div className="bd-container">
//           <div className="bd-error">
//             <div className="bd-error__icon">
//               <FaBookOpen />
//             </div>
//             <h2>Article Not Found</h2>
//             <p>{error || "The article you're looking for doesn't exist or has been removed."}</p>
//             <Link to="/blogs" className="bd-error__btn">
//               <FaArrowLeft />
//               <span>Back to Articles</span>
//             </Link>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   // =====================================================
//   // RENDER BLOG DETAIL
//   // =====================================================

//   return (
//     <main className="bd-page">
//       {/* Reading Progress Bar */}
//       <div className="bd-progress-bar" style={{ width: `${readingProgress}%` }} />

//       {/* =================================================
//           TOP BAR
//       ================================================= */}
//       <div className="bd-topbar">
//         <div className="bd-container">
//           <div className="bd-topbar__content">
//             <span className="bd-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy
//             </span>
//             <span className="bd-topbar__affiliation">CBSE Affiliated</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Featured Image
//       ================================================= */}
//       <section ref={heroRef} className="bd-hero">
//         <div className="bd-hero__bg-wrapper">
//           {blog.featuredImage ? (
//             <div 
//               className="bd-hero__bg-image" 
//               style={{ backgroundImage: `url(${getImageUrl(blog.featuredImage)})` }}
//             />
//           ) : (
//             <div className="bd-hero__bg-image" />
//           )}
//           <div className="bd-hero__bg-overlay" />
//           <div className="bd-hero__bg-gradient" />
//         </div>

//         <div className="bd-container">
//           <div className="bd-hero__content">
//             <Link to="/blogs" className="bd-hero__back">
//               <FaArrowLeft />
//               <span>Back to Articles</span>
//             </Link>

//             <div className="bd-hero__meta">
//               {blog.category && (
//                 <span className="bd-hero__category">
//                   <FaTag />
//                   {blog.category}
//                 </span>
//               )}
//               {blog.publishedAt && (
//                 <time className="bd-hero__date">
//                   <FaCalendarAlt />
//                   {formatDate(blog.publishedAt)}
//                 </time>
//               )}
//               <span className="bd-hero__read-time">
//                 <FaClock />
//                 {getReadingTime(blog.content)}
//               </span>
//             </div>

//             <h1 className="bd-hero__title">{blog.title}</h1>

//             {blog.excerpt && (
//               <p className="bd-hero__excerpt">{blog.excerpt}</p>
//             )}

//             <div className="bd-hero__author">
//               <div className="bd-hero__author-avatar">
//                 {getAuthorEmail() ? (
//                   <img src={getAuthorAvatar()} alt={getAuthorName()} />
//                 ) : (
//                   <span>{getAuthorName()?.[0] || "A"}</span>
//                 )}
//               </div>
//               <div className="bd-hero__author-info">
//                 <span className="bd-hero__author-name">
//                   {getAuthorName()}
//                 </span>
//                 <span className="bd-hero__author-role">
//                   {blog.author?.email ? "Author" : "Contributor"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bd-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           CONTENT
//       ================================================= */}
//       <section className="bd-content">
//         <div className="bd-container">
//           <div className="bd-content__wrapper">
//             {/* Main Content */}
//             <article className="bd-content__main" ref={contentRef}>
//               <div 
//                 className="bd-content__body"
//                 dangerouslySetInnerHTML={{ __html: blog.content || "<p>No content available.</p>" }}
//               />

//               {/* Tags - if keywords exist */}
//               {blog.keywords && (
//                 <div className="bd-content__tags">
//                   <span className="bd-content__tags-label">Tags:</span>
//                   {blog.keywords.split(',').map((tag, index) => (
//                     <span key={index} className="bd-content__tag">
//                       #{tag.trim()}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Share & Like */}
//               <div className="bd-content__actions">
//                 <button 
//                   className={`bd-content__like ${isLiked ? "bd-content__like--active" : ""}`}
//                   onClick={handleLike}
//                 >
//                   <FaHeart />
//                   <span>{likeCount}</span>
//                 </button>
//                 <button 
//                   className="bd-content__share"
//                   onClick={() => setShowShareModal(true)}
//                 >
//                   <FaShare />
//                   <span>Share</span>
//                 </button>
//               </div>
//             </article>

//             {/* Sidebar */}
//             <aside className="bd-content__sidebar">
//               {/* Author Card */}
//               <div className="bd-sidebar__card bd-sidebar__author">
//                 <div className="bd-sidebar__author-avatar">
//                   {getAuthorEmail() ? (
//                     <img src={getAuthorAvatar()} alt={getAuthorName()} />
//                   ) : (
//                     <span>{getAuthorName()?.[0] || "A"}</span>
//                   )}
//                 </div>
//                 <h4>{getAuthorName()}</h4>
//                 <p>{blog.author?.email ? "Author" : "Contributor"}</p>
//                 {blog.author?.email && (
//                   <p className="bd-sidebar__author-bio">
//                     Member of the SNGA community sharing insights and experiences.
//                   </p>
//                 )}
//               </div>

//               {/* Quick Stats */}
//               <div className="bd-sidebar__card bd-sidebar__stats">
//                 <div className="bd-sidebar__stat">
//                   <FaCalendarAlt />
//                   <span>Published</span>
//                   <strong>{formatDate(blog.publishedAt)}</strong>
//                 </div>
//                 <div className="bd-sidebar__stat">
//                   <FaClock />
//                   <span>Read Time</span>
//                   <strong>{getReadingTime(blog.content)}</strong>
//                 </div>
//                 <div className="bd-sidebar__stat">
//                   <FaTag />
//                   <span>Category</span>
//                   <strong>{blog.category || "Uncategorized"}</strong>
//                 </div>
//               </div>

//               {/* Related Posts */}
//               {relatedPosts.length > 0 && (
//                 <div className="bd-sidebar__card bd-sidebar__related">
//                   <h4>Related Articles</h4>
//                   {relatedPosts.map((post) => (
//                     <Link 
//                       key={post.id} 
//                       to={`/blogs/${post.slug}`}
//                       className="bd-sidebar__related-item"
//                     >
//                       <div className="bd-sidebar__related-image">
//                         {post.featuredImage ? (
//                           <img src={getImageUrl(post.featuredImage)} alt={post.title} />
//                         ) : (
//                           <FaBookOpen />
//                         )}
//                       </div>
//                       <div className="bd-sidebar__related-info">
//                         <h5>{post.title}</h5>
//                         <span>{formatDate(post.publishedAt)}</span>
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
//           RELATED POSTS - Horizontal Scroll
//       ================================================= */}
//       {relatedPosts.length > 0 && (
//         <section className="bd-related">
//           <div className="bd-container">
//             <div className="bd-related__header">
//               <h2>
//                 You Might Also Like
//                 <span className="bd-related__highlight">Related Articles</span>
//               </h2>
//             </div>

//             <div className="bd-related__grid">
//               {relatedPosts.map((post) => (
//                 <Link 
//                   key={post.id} 
//                   to={`/blogs/${post.slug}`}
//                   className="bd-related__card"
//                 >
//                   <div className="bd-related__card-image">
//                     {post.featuredImage ? (
//                       <img src={getImageUrl(post.featuredImage)} alt={post.title} />
//                     ) : (
//                       <div className="bd-related__card-placeholder">
//                         <FaBookOpen />
//                       </div>
//                     )}
//                     <span className="bd-related__card-category">{post.category}</span>
//                   </div>
//                   <div className="bd-related__card-content">
//                     <h3>{post.title}</h3>
//                     <span>{formatDate(post.publishedAt)}</span>
//                     <div className="bd-related__card-link">
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
//       <section className="bd-cta">
//         <div className="bd-cta__bg-wrapper">
//           <div 
//             className="bd-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="bd-cta__bg-overlay" />
//           <div className="bd-cta__bg-gradient" />
//         </div>

//         <div className="bd-container">
//           <div className="bd-cta__content">
//             <div className="bd-cta__badge">
//               <FaSchool />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>
//             <h2 className="bd-cta__title">
//               More Stories
//               <br />
//               <span className="bd-cta__highlight">Await You.</span>
//             </h2>
//             <p className="bd-cta__desc">
//               Continue exploring insights, perspectives and stories from our learning community.
//             </p>

//             <div className="bd-cta__actions">
//               <Link to="/blogs" className="bd-cta__btn bd-cta__btn--primary">
//                 <span>View All Articles</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/" className="bd-cta__btn bd-cta__btn--secondary">
//                 Visit Home
//               </Link>
//             </div>

//             <div className="bd-cta__footer">
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
//           className="bd-modal"
//           onClick={(e) => {
//             if (e.target === e.currentTarget) {
//               setShowShareModal(false);
//             }
//           }}
//         >
//           <div className="bd-modal__inner">
//             <button 
//               className="bd-modal__close"
//               onClick={() => setShowShareModal(false)}
//             >
//               <FaTimes />
//             </button>
//             <h3>Share This Article</h3>
//             <p>Spread the knowledge with your network</p>
//             <div className="bd-modal__options">
//               <button onClick={() => handleShare("facebook")} className="bd-modal__option bd-modal__option--facebook">
//                 <FaFacebook />
//                 <span>Facebook</span>
//               </button>
//               <button onClick={() => handleShare("twitter")} className="bd-modal__option bd-modal__option--twitter">
//                 <FaTwitter />
//                 <span>Twitter</span>
//               </button>
//               <button onClick={() => handleShare("whatsapp")} className="bd-modal__option bd-modal__option--whatsapp">
//                 <FaWhatsapp />
//                 <span>WhatsApp</span>
//               </button>
//               <button onClick={() => handleShare("linkedin")} className="bd-modal__option bd-modal__option--linkedin">
//                 <FaLinkedin />
//                 <span>LinkedIn</span>
//               </button>
//               <button onClick={() => handleShare("copy")} className="bd-modal__option bd-modal__option--copy">
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

// export default BlogDetail;

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
  FaBookOpen,
  FaQuoteLeft,
  FaTimes,
  FaNewspaper,
  FaUsers,
  FaTrophy,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import blogService from "../services/blog.service";
import "./BlogDetails.css";

// =====================================================
// ONLINE IMAGES
// =====================================================
const IMAGES = {
  ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
  authorPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
};

// =====================================================
// SIMPLE MD5 HASH FUNCTION (Browser compatible)
// =====================================================
const md5 = (string) => {
  // Simple MD5 implementation for browser
  const crypto = window.crypto || window.msCrypto;
  if (crypto && crypto.subtle) {
    // Use Web Crypto API if available
    const encoder = new TextEncoder();
    const data = encoder.encode(string);
    return crypto.subtle.digest('MD5', data).then(buffer => {
      const hashArray = Array.from(new Uint8Array(buffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    });
  }
  // Fallback: simple hash (not cryptographically secure but works for gravatar)
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(32, '0');
};

// =====================================================
// ALTERNATIVE: Use this simpler MD5 function
// =====================================================
// Or install: npm install crypto-js
// import md5 from 'crypto-js/md5';
// Then use: md5(email).toString()

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [authorAvatar, setAuthorAvatar] = useState(IMAGES.authorPlaceholder);
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
  // FETCH BLOG - UPDATED for API structure
  // =====================================================

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await blogService.getBlogBySlug(slug);
        
        // Handle the response structure: { success: true, data: { ... } }
        const blogData = response?.data || response;
        
        if (!blogData) {
          setError("Article not found.");
          return;
        }

        setBlog(blogData);
        setLikeCount(blogData.likes || 0);
        
        // Set author avatar
        if (blogData.author?.email) {
          // Use a simple gravatar URL with a static hash
          // Or use the simplified approach below
          setAuthorAvatar(`https://ui-avatars.com/api/?name=${encodeURIComponent(blogData.author.name || 'User')}&background=D4A02B&color=fff&size=200`);
        }
        
        // Fetch related posts (same category)
        if (blogData.category) {
          try {
            const allBlogsResponse = await blogService.getPublishedBlogs();
            const allBlogs = allBlogsResponse?.data || allBlogsResponse || [];
            const related = allBlogs
              ?.filter(b => 
                b.category === blogData.category && 
                b.id !== blogData.id
              )
              ?.slice(0, 3) || [];
            setRelatedPosts(related);
          } catch (err) {
            console.error("Failed to load related posts:", err);
          }
        }
      } catch (err) {
        console.error("Failed to load blog:", err);
        setError("Article not found. It may have been removed.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadBlog();
    }
  }, [slug]);

  // =====================================================
  // HELPERS - UPDATED for API structure
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
    if (!content) return "5 min read";
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Get author name from the author object
  const getAuthorName = () => {
    if (blog?.author?.name) return blog.author.name;
    if (blog?.authorName) return blog.authorName;
    return "SNGA Editorial Team";
  };

  // Get author email
  const getAuthorEmail = () => {
    if (blog?.author?.email) return blog.author.email;
    return null;
  };

  // Get author avatar - using UI Avatars API (simple and reliable)
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
    const title = blog?.title || "Check out this article from SNGA";
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
      <main className="bd-page">
        <div className="bd-loader">
          <div className="bd-loader__spinner">
            <span />
            <span />
            <span />
          </div>
          <p>Loading article...</p>
        </div>
      </main>
    );
  }

  // =====================================================
  // ERROR STATE
  // =====================================================

  if (error || !blog) {
    return (
      <main className="bd-page">
        <div className="bd-container">
          <div className="bd-error">
            <div className="bd-error__icon">
              <FaBookOpen />
            </div>
            <h2>Article Not Found</h2>
            <p>{error || "The article you're looking for doesn't exist or has been removed."}</p>
            <Link to="/blogs" className="bd-error__btn">
              <FaArrowLeft />
              <span>Back to Articles</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // =====================================================
  // RENDER BLOG DETAIL
  // =====================================================

  return (
    <main className="bd-page">
      {/* Reading Progress Bar */}
      <div className="bd-progress-bar" style={{ width: `${readingProgress}%` }} />

      {/* =================================================
          TOP BAR
      ================================================= */}
      <div className="bd-topbar">
        <div className="bd-container">
          <div className="bd-topbar__content">
            <span className="bd-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy
            </span>
            <span className="bd-topbar__affiliation">CBSE Affiliated</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Featured Image
      ================================================= */}
      <section ref={heroRef} className="bd-hero">
        <div className="bd-hero__bg-wrapper">
          {blog.featuredImage ? (
            <div 
              className="bd-hero__bg-image" 
              style={{ backgroundImage: `url(${getImageUrl(blog.featuredImage)})` }}
            />
          ) : (
            <div className="bd-hero__bg-image" style={{ background: 'var(--bd-primary)' }} />
          )}
          <div className="bd-hero__bg-overlay" />
          <div className="bd-hero__bg-gradient" />
        </div>

        <div className="bd-container">
          <div className="bd-hero__content">
            <Link to="/blogs" className="bd-hero__back">
              <FaArrowLeft />
              <span>Back to Articles</span>
            </Link>

            <div className="bd-hero__meta">
              {blog.category && (
                <span className="bd-hero__category">
                  <FaTag />
                  {blog.category}
                </span>
              )}
              {blog.publishedAt && (
                <time className="bd-hero__date">
                  <FaCalendarAlt />
                  {formatDate(blog.publishedAt)}
                </time>
              )}
              <span className="bd-hero__read-time">
                <FaClock />
                {getReadingTime(blog.content)}
              </span>
            </div>

            <h1 className="bd-hero__title">{blog.title}</h1>

            {blog.excerpt && (
              <p className="bd-hero__excerpt">{blog.excerpt}</p>
            )}

            {/* <div className="bd-hero__author">
              <div className="bd-hero__author-avatar">
                <img src={getAuthorAvatarUrl()} alt={getAuthorName()} />
              </div>
              <div className="bd-hero__author-info">
                <span className="bd-hero__author-name">
                  {getAuthorName()}
                </span>
                <span className="bd-hero__author-role">
                  {blog.author?.email ? "Author" : "Contributor"}
                </span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="bd-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          CONTENT
      ================================================= */}
      <section className="bd-content">
        <div className="bd-container">
          <div className="bd-content__wrapper">
            {/* Main Content */}
            <article className="bd-content__main" ref={contentRef}>
              <div 
                className="bd-content__body"
                dangerouslySetInnerHTML={{ __html: blog.content || "<p>No content available.</p>" }}
              />

              {/* Tags - if keywords exist */}
              {blog.keywords && (
                <div className="bd-content__tags">
                  <span className="bd-content__tags-label">Tags:</span>
                  {blog.keywords.split(',').map((tag, index) => (
                    <span key={index} className="bd-content__tag">
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Share & Like */}
              <div className="bd-content__actions">
                {/* <button 
                  className={`bd-content__like ${isLiked ? "bd-content__like--active" : ""}`}
                  onClick={handleLike}
                >
                  <FaHeart />
                  <span>{likeCount}</span>
                </button> */}
                <button 
                  className="bd-content__share"
                  onClick={() => setShowShareModal(true)}
                >
                  <FaShare />
                  <span>Share</span>
                </button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="bd-content__sidebar">
              {/* Author Card */}
              <div className="bd-sidebar__card bd-sidebar__author">
                <div className="bd-sidebar__author-avatar">
                  <img src={getAuthorAvatarUrl()} alt={getAuthorName()} />
                </div>
                <h4>{getAuthorName()}</h4>
                <p>{blog.author?.email ? "Author" : "Contributor"}</p>
                {blog.author?.email && (
                  <p className="bd-sidebar__author-bio">
                    Member of the SNGA community sharing insights and experiences.
                  </p>
                )}
              </div>

              {/* Quick Stats */}
              <div className="bd-sidebar__card bd-sidebar__stats">
                <div className="bd-sidebar__stat">
                  <FaCalendarAlt />
                  <span>Published</span>
                  <strong>{formatDate(blog.publishedAt)}</strong>
                </div>
                <div className="bd-sidebar__stat">
                  <FaClock />
                  <span>Read Time</span>
                  <strong>{getReadingTime(blog.content)}</strong>
                </div>
                <div className="bd-sidebar__stat">
                  <FaTag />
                  <span>Category</span>
                  <strong>{blog.category || "Uncategorized"}</strong>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bd-sidebar__card bd-sidebar__related">
                  <h4>Related Articles</h4>
                  {relatedPosts.map((post) => (
                    <Link 
                      key={post.id} 
                      to={`/blogs/${post.slug}`}
                      className="bd-sidebar__related-item"
                    >
                      <div className="bd-sidebar__related-image">
                        {post.featuredImage ? (
                          <img src={getImageUrl(post.featuredImage)} alt={post.title} />
                        ) : (
                          <FaBookOpen />
                        )}
                      </div>
                      <div className="bd-sidebar__related-info">
                        <h5>{post.title}</h5>
                        <span>{formatDate(post.publishedAt)}</span>
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
          RELATED POSTS - Horizontal Scroll
      ================================================= */}
      {relatedPosts.length > 0 && (
        <section className="bd-related">
          <div className="bd-container">
            <div className="bd-related__header">
              <h2>
                You Might Also Like
                <span className="bd-related__highlight">Related Articles</span>
              </h2>
            </div>

            <div className="bd-related__grid">
              {relatedPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blogs/${post.slug}`}
                  className="bd-related__card"
                >
                  <div className="bd-related__card-image">
                    {post.featuredImage ? (
                      <img src={getImageUrl(post.featuredImage)} alt={post.title} />
                    ) : (
                      <div className="bd-related__card-placeholder">
                        <FaBookOpen />
                      </div>
                    )}
                    <span className="bd-related__card-category">{post.category}</span>
                  </div>
                  <div className="bd-related__card-content">
                    <h3>{post.title}</h3>
                    <span>{formatDate(post.publishedAt)}</span>
                    <div className="bd-related__card-link">
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
      <section className="bd-cta">
        <div className="bd-cta__bg-wrapper">
          <div 
            className="bd-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="bd-cta__bg-overlay" />
          <div className="bd-cta__bg-gradient" />
        </div>

        <div className="bd-container">
          <div className="bd-cta__content">
            <div className="bd-cta__badge">
              <FaSchool />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>
            <h2 className="bd-cta__title">
              More Stories
              <br />
              <span className="bd-cta__highlight">Await You.</span>
            </h2>
            <p className="bd-cta__desc">
              Continue exploring insights, perspectives and stories from our learning community.
            </p>

            <div className="bd-cta__actions">
              <Link to="/blogs" className="bd-cta__btn bd-cta__btn--primary">
                <span>View All Articles</span>
                <FaArrowRight />
              </Link>
              <Link to="/" className="bd-cta__btn bd-cta__btn--secondary">
                Visit Home
              </Link>
            </div>

            <div className="bd-cta__footer">
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
          className="bd-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowShareModal(false);
            }
          }}
        >
          <div className="bd-modal__inner">
            <button 
              className="bd-modal__close"
              onClick={() => setShowShareModal(false)}
            >
              <FaTimes />
            </button>
            <h3>Share This Article</h3>
            <p>Spread the knowledge with your network</p>
            <div className="bd-modal__options">
              <button onClick={() => handleShare("facebook")} className="bd-modal__option bd-modal__option--facebook">
                <FaFacebook />
                <span>Facebook</span>
              </button>
              <button onClick={() => handleShare("twitter")} className="bd-modal__option bd-modal__option--twitter">
                <FaTwitter />
                <span>Twitter</span>
              </button>
              <button onClick={() => handleShare("whatsapp")} className="bd-modal__option bd-modal__option--whatsapp">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </button>
              <button onClick={() => handleShare("linkedin")} className="bd-modal__option bd-modal__option--linkedin">
                <FaLinkedin />
                <span>LinkedIn</span>
              </button>
              <button onClick={() => handleShare("copy")} className="bd-modal__option bd-modal__option--copy">
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

export default BlogDetail;