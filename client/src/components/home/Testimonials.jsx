// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import testimonialService from "../../services/testimonial.service";
// // // import "./TestimonialsPreview.css";

// // // const API_URL =
// // //   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// // //   "http://localhost:5000";

// // // const fallbackImages = [
// // //   "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1800&q=90",
// // //   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90",
// // //   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
// // // ];

// // // const getImageUrl = (image, index = 0) => {
// // //   if (!image) {
// // //     return fallbackImages[index % fallbackImages.length];
// // //   }

// // //   if (image.startsWith("http://") || image.startsWith("https://")) {
// // //     return image;
// // //   }

// // //   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // // };

// // // const TestimonialsPreview = () => {
// // //   const [testimonials, setTestimonials] = useState([]);
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     let mounted = true;

// // //     const fetchTestimonials = async () => {
// // //       try {
// // //         const response = await testimonialService.getAll();

// // //         const data = response?.data || response || [];

// // //         const published = Array.isArray(data)
// // //           ? data.filter((item) => item.isPublished !== false)
// // //           : [];

// // //         if (mounted) {
// // //           setTestimonials(published.slice(0, 5));
// // //         }
// // //       } catch (error) {
// // //         console.error("Failed to load testimonials:", error);

// // //         if (mounted) {
// // //           setTestimonials([]);
// // //         }
// // //       } finally {
// // //         if (mounted) {
// // //           setLoading(false);
// // //         }
// // //       }
// // //     };

// // //     fetchTestimonials();

// // //     return () => {
// // //       mounted = false;
// // //     };
// // //   }, []);

// // //   useEffect(() => {
// // //     if (testimonials.length <= 1) return;

// // //     const interval = setInterval(() => {
// // //       setActiveIndex((current) =>
// // //         current === testimonials.length - 1 ? 0 : current + 1
// // //       );
// // //     }, 6500);

// // //     return () => clearInterval(interval);
// // //   }, [testimonials.length]);

// // //   const nextTestimonial = () => {
// // //     if (!testimonials.length) return;

// // //     setActiveIndex((current) =>
// // //       current === testimonials.length - 1 ? 0 : current + 1
// // //     );
// // //   };

// // //   const previousTestimonial = () => {
// // //     if (!testimonials.length) return;

// // //     setActiveIndex((current) =>
// // //       current === 0 ? testimonials.length - 1 : current - 1
// // //     );
// // //   };

// // //   const activeTestimonial = testimonials[activeIndex];

// // //   return (
// // //     <section className="testimonials-preview">
// // //       {/* =====================================================
// // //           INTRO
// // //       ===================================================== */}

// // //       <div className="testimonials-intro">
// // //         <div className="testimonials-container">
// // //           <div className="testimonials-intro-top">
// // //             <span className="testimonials-label">
// // //               THE SNGA EXPERIENCE
// // //             </span>

// // //             <span className="testimonials-section-number">
// // //               08
// // //             </span>
// // //           </div>

// // //           <div className="testimonials-intro-grid">
// // //             <h2>
// // //               Life at SNGA,
// // //               <br />
// // //               <span>through their eyes.</span>
// // //             </h2>

// // //             <div className="testimonials-intro-copy">
// // //               <p>
// // //                 A school is experienced differently by every
// // //                 child and every family. These are the voices
// // //                 behind our community.
// // //               </p>

// // //               <Link
// // //                 to="/testimonials"
// // //                 className="testimonials-explore"
// // //               >
// // //                 <span>Meet our community</span>
// // //                 <span>↗</span>
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* =====================================================
// // //           FEATURE
// // //       ===================================================== */}

// // //       <div className="testimonials-stage">
// // //         <div className="testimonials-container">
// // //           {loading ? (
// // //             <div className="testimonials-loading">
// // //               <span />
// // //               <span />
// // //               <span />
// // //             </div>
// // //           ) : activeTestimonial ? (
// // //             <div className="testimonials-feature">
// // //               {/* IMAGE */}

// // //               <div className="testimonials-image-wrap">
// // //                 <img
// // //                   src={getImageUrl(
// // //                     activeTestimonial.image,
// // //                     activeIndex
// // //                   )}
// // //                   alt={
// // //                     activeTestimonial.name ||
// // //                     "SNGA community member"
// // //                   }
// // //                   onError={(event) => {
// // //                     event.currentTarget.onerror = null;
// // //                     event.currentTarget.src =
// // //                       fallbackImages[
// // //                         activeIndex % fallbackImages.length
// // //                       ];
// // //                   }}
// // //                 />

// // //                 <div className="testimonials-image-overlay">
// // //                   <span>SNGA</span>
// // //                   <span>COMMUNITY</span>
// // //                 </div>

// // //                 <div className="testimonials-image-index">
// // //                   {String(activeIndex + 1).padStart(2, "0")}
// // //                 </div>
// // //               </div>

// // //               {/* QUOTE */}

// // //               <div className="testimonials-quote-area">
// // //                 <div className="testimonials-quote-mark">
// // //                   “
// // //                 </div>

// // //                 <div className="testimonials-quote-content">
// // //                   <span className="testimonials-quote-label">
// // //                     A VOICE FROM OUR COMMUNITY
// // //                   </span>

// // //                   <blockquote>
// // //                     {activeTestimonial.message}
// // //                   </blockquote>

// // //                   <div className="testimonials-person">
// // //                     <div className="testimonials-person-line" />

// // //                     <div className="testimonials-person-info">
// // //                       <strong>
// // //                         {activeTestimonial.name ||
// // //                           "SNGA Community"}
// // //                       </strong>

// // //                       {activeTestimonial.role && (
// // //                         <span>{activeTestimonial.role}</span>
// // //                       )}

// // //                       {activeTestimonial.relation && (
// // //                         <span>
// // //                           {activeTestimonial.relation}
// // //                         </span>
// // //                       )}
// // //                     </div>
// // //                   </div>

// // //                   {activeTestimonial.rating && (
// // //                     <div className="testimonials-rating">
// // //                       <span>EXPERIENCE</span>

// // //                       <div>
// // //                         {[1, 2, 3, 4, 5].map((star) => (
// // //                           <span
// // //                             key={star}
// // //                             className={
// // //                               star <= activeTestimonial.rating
// // //                                 ? "active"
// // //                                 : ""
// // //                             }
// // //                           >
// // //                             ★
// // //                           </span>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* SIDE NUMBER */}

// // //                 <div className="testimonials-side-number">
// // //                   <span>
// // //                     {String(activeIndex + 1).padStart(2, "0")}
// // //                   </span>

// // //                   <i />

// // //                   <span>
// // //                     {String(testimonials.length).padStart(2, "0")}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <div className="testimonials-empty">
// // //               <span>08</span>

// // //               <div>
// // //                 <small>THE SNGA EXPERIENCE</small>

// // //                 <h3>
// // //                   Every voice
// // //                   <br />
// // //                   <em>matters.</em>
// // //                 </h3>

// // //                 <p>
// // //                   Community testimonials will appear here.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* =====================================================
// // //               CONTROLS
// // //           ===================================================== */}

// // //           {!loading && testimonials.length > 1 && (
// // //             <div className="testimonials-controls">
// // //               <div className="testimonials-progress">
// // //                 {testimonials.map((testimonial, index) => (
// // //                   <button
// // //                     key={testimonial.id}
// // //                     type="button"
// // //                     className={
// // //                       index === activeIndex ? "active" : ""
// // //                     }
// // //                     onClick={() => setActiveIndex(index)}
// // //                     aria-label={`View testimonial ${
// // //                       index + 1
// // //                     }`}
// // //                   >
// // //                     <span />
// // //                   </button>
// // //                 ))}
// // //               </div>

// // //               <div className="testimonials-arrows">
// // //                 <button
// // //                   type="button"
// // //                   onClick={previousTestimonial}
// // //                   aria-label="Previous testimonial"
// // //                 >
// // //                   ←
// // //                 </button>

// // //                 <button
// // //                   type="button"
// // //                   onClick={nextTestimonial}
// // //                   aria-label="Next testimonial"
// // //                 >
// // //                   →
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* =====================================================
// // //           STATEMENT
// // //       ===================================================== */}

// // //       <div className="testimonials-statement">
// // //         <div className="testimonials-container">
// // //           <div className="testimonials-statement-grid">
// // //             <div className="testimonials-statement-number">
// // //               09
// // //             </div>

// // //             <div className="testimonials-statement-main">
// // //               <span className="testimonials-label">
// // //                 WHAT WE BELIEVE
// // //               </span>

// // //               <h3>
// // //                 When children feel
// // //                 <br />
// // //                 <span>they belong,</span>
// // //                 <br />
// // //                 they are ready to grow.
// // //               </h3>
// // //             </div>

// // //             <p>
// // //               We believe meaningful education begins with
// // //               relationships — between students, teachers,
// // //               families and the wider school community.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* =====================================================
// // //           CTA
// // //       ===================================================== */}

// // //       <div className="testimonials-bottom">
// // //         <div className="testimonials-container">
// // //           <div className="testimonials-bottom-inner">
// // //             <div>
// // //               <span className="testimonials-label">
// // //                 DISCOVER SNGA
// // //               </span>

// // //               <h3>
// // //                 Your child's story
// // //                 <br />
// // //                 <span>starts here.</span>
// // //               </h3>
// // //             </div>

// // //             <Link
// // //               to="/admissions"
// // //               className="testimonials-bottom-button"
// // //             >
// // //               Explore admissions
// // //               <span>↗</span>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TestimonialsPreview;















// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import testimonialService from "../../services/testimonial.service";
// // import "./TestimonialsPreview.css";

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// //   "http://localhost:5000";

// // const fallbackImages = [
// //   "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1800&q=90",
// //   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90",
// //   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
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

// // const TestimonialsPreview = () => {
// //   const [testimonials, setTestimonials] = useState([]);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     let mounted = true;

// //     const fetchTestimonials = async () => {
// //       try {
// //         // ✅ CORRECT: Using getAll() method
// //         const response = await testimonialService.getAll();

// //         const data = response?.data || response || [];

// //         const published = Array.isArray(data)
// //           ? data.filter((item) => item.isPublished !== false)
// //           : [];

// //         if (mounted) {
// //           setTestimonials(published.slice(0, 5));
// //         }
// //       } catch (error) {
// //         console.error("Failed to load testimonials:", error);
// //         if (mounted) {
// //           setTestimonials([]);
// //         }
// //       } finally {
// //         if (mounted) {
// //           setLoading(false);
// //         }
// //       }
// //     };

// //     fetchTestimonials();

// //     return () => {
// //       mounted = false;
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (testimonials.length <= 1) return;

// //     const interval = setInterval(() => {
// //       setActiveIndex((current) =>
// //         current === testimonials.length - 1 ? 0 : current + 1
// //       );
// //     }, 6500);

// //     return () => clearInterval(interval);
// //   }, [testimonials.length]);

// //   const nextTestimonial = () => {
// //     if (!testimonials.length) return;
// //     setActiveIndex((current) =>
// //       current === testimonials.length - 1 ? 0 : current + 1
// //     );
// //   };

// //   const previousTestimonial = () => {
// //     if (!testimonials.length) return;
// //     setActiveIndex((current) =>
// //       current === 0 ? testimonials.length - 1 : current - 1
// //     );
// //   };

// //   const activeTestimonial = testimonials[activeIndex];

// //   return (
// //     <section className="testimonials-preview">
// //       {/* =====================================================
// //           INTRO
// //       ===================================================== */}

// //       <div className="testimonials-intro">
// //         <div className="testimonials-container">
// //           <div className="testimonials-intro-top">
// //             <span className="testimonials-label">
// //               THE SNGA EXPERIENCE
// //             </span>

// //             <span className="testimonials-section-number">
// //               {testimonials.length > 0 ? `${String(testimonials.length).padStart(2, "0")}` : "08"}
// //             </span>
// //           </div>

// //           <div className="testimonials-intro-grid">
// //             <h2>
// //               Life at SNGA,
// //               <br />
// //               <span>through their eyes.</span>
// //             </h2>

// //             <div className="testimonials-intro-copy">
// //               <p>
// //                 A school is experienced differently by every
// //                 child and every family. These are the voices
// //                 behind our community.
// //               </p>

// //               <Link
// //                 to="/testimonials"
// //                 className="testimonials-explore"
// //               >
// //                 <span>Meet our community</span>
// //                 <span>↗</span>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           FEATURE
// //       ===================================================== */}

// //       <div className="testimonials-stage">
// //         <div className="testimonials-container">
// //           {loading ? (
// //             <div className="testimonials-loading">
// //               <span />
// //               <span />
// //               <span />
// //             </div>
// //           ) : activeTestimonial ? (
// //             <div className="testimonials-feature">
// //               {/* IMAGE */}

// //               <div className="testimonials-image-wrap">
// //                 <img
// //                   src={getImageUrl(
// //                     activeTestimonial.image,
// //                     activeIndex
// //                   )}
// //                   alt={
// //                     activeTestimonial.name ||
// //                     "SNGA community member"
// //                   }
// //                   onError={(event) => {
// //                     event.currentTarget.onerror = null;
// //                     event.currentTarget.src =
// //                       fallbackImages[
// //                         activeIndex % fallbackImages.length
// //                       ];
// //                   }}
// //                 />

// //                 <div className="testimonials-image-overlay">
// //                   <span>SNGA</span>
// //                   <span>COMMUNITY</span>
// //                 </div>

// //                 <div className="testimonials-image-index">
// //                   {String(activeIndex + 1).padStart(2, "0")}
// //                 </div>
// //               </div>

// //               {/* QUOTE */}

// //               <div className="testimonials-quote-area">
// //                 <div className="testimonials-quote-mark">
// //                   “
// //                 </div>

// //                 <div className="testimonials-quote-content">
// //                   <span className="testimonials-quote-label">
// //                     A VOICE FROM OUR COMMUNITY
// //                   </span>

// //                   <blockquote>
// //                     {activeTestimonial.message}
// //                   </blockquote>

// //                   <div className="testimonials-person">
// //                     <div className="testimonials-person-line" />

// //                     <div className="testimonials-person-info">
// //                       <strong>
// //                         {activeTestimonial.name ||
// //                           "SNGA Community"}
// //                       </strong>

// //                       {activeTestimonial.role && (
// //                         <span>{activeTestimonial.role}</span>
// //                       )}

// //                       {activeTestimonial.relation && (
// //                         <span>
// //                           {activeTestimonial.relation}
// //                         </span>
// //                       )}
// //                     </div>
// //                   </div>

// //                   {activeTestimonial.rating && (
// //                     <div className="testimonials-rating">
// //                       <span>EXPERIENCE</span>

// //                       <div>
// //                         {[1, 2, 3, 4, 5].map((star) => (
// //                           <span
// //                             key={star}
// //                             className={
// //                               star <= activeTestimonial.rating
// //                                 ? "active"
// //                                 : ""
// //                             }
// //                           >
// //                             ★
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* SIDE NUMBER */}

// //                 <div className="testimonials-side-number">
// //                   <span>
// //                     {String(activeIndex + 1).padStart(2, "0")}
// //                   </span>

// //                   <i />

// //                   <span>
// //                     {String(testimonials.length).padStart(2, "0")}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="testimonials-empty">
// //               <span>08</span>

// //               <div>
// //                 <small>THE SNGA EXPERIENCE</small>

// //                 <h3>
// //                   Every voice
// //                   <br />
// //                   <em>matters.</em>
// //                 </h3>

// //                 <p>
// //                   Community testimonials will appear here.
// //                 </p>
// //               </div>
// //             </div>
// //           )}

// //           {/* =====================================================
// //               CONTROLS
// //           ===================================================== */}

// //           {!loading && testimonials.length > 1 && (
// //             <div className="testimonials-controls">
// //               <div className="testimonials-progress">
// //                 {testimonials.map((testimonial, index) => {
// //                   const testimonialId = testimonial.id || testimonial._id;
// //                   return (
// //                     <button
// //                       key={testimonialId}
// //                       type="button"
// //                       className={
// //                         index === activeIndex ? "active" : ""
// //                       }
// //                       onClick={() => setActiveIndex(index)}
// //                       aria-label={`View testimonial ${
// //                         index + 1
// //                       }`}
// //                     >
// //                       <span />
// //                     </button>
// //                   );
// //                 })}
// //               </div>

// //               <div className="testimonials-arrows">
// //                 <button
// //                   type="button"
// //                   onClick={previousTestimonial}
// //                   aria-label="Previous testimonial"
// //                 >
// //                   ←
// //                 </button>

// //                 <button
// //                   type="button"
// //                   onClick={nextTestimonial}
// //                   aria-label="Next testimonial"
// //                 >
// //                   →
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           STATEMENT
// //       ===================================================== */}

// //       <div className="testimonials-statement">
// //         <div className="testimonials-container">
// //           <div className="testimonials-statement-grid">
// //             <div className="testimonials-statement-number">
// //               09
// //             </div>

// //             <div className="testimonials-statement-main">
// //               <span className="testimonials-label">
// //                 WHAT WE BELIEVE
// //               </span>

// //               <h3>
// //                 When children feel
// //                 <br />
// //                 <span>they belong,</span>
// //                 <br />
// //                 they are ready to grow.
// //               </h3>
// //             </div>

// //             <p>
// //               We believe meaningful education begins with
// //               relationships — between students, teachers,
// //               families and the wider school community.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           CTA
// //       ===================================================== */}

// //       <div className="testimonials-bottom">
// //         <div className="testimonials-container">
// //           <div className="testimonials-bottom-inner">
// //             <div>
// //               <span className="testimonials-label">
// //                 DISCOVER SNGA
// //               </span>

// //               <h3>
// //                 Your child's story
// //                 <br />
// //                 <span>starts here.</span>
// //               </h3>
// //             </div>

// //             <Link
// //               to="/admissions"
// //               className="testimonials-bottom-button"
// //             >
// //               Explore admissions
// //               <span>↗</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialsPreview;



// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import testimonialService from "../../services/testimonial.service";
// // import "./TestimonialsPreview.css";

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// //   "http://localhost:5000";

// // const fallbackImages = [
// //   "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1800&q=90",
// //   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90",
// //   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
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

// // const TestimonialsPreview = () => {
// //   const [testimonials, setTestimonials] = useState([]);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     let mounted = true;

// //     const fetchTestimonials = async () => {
// //       try {
// //         // ✅ CORRECT: Using getPublished() public method
// //         const response = await testimonialService.getPublished();

// //         // Handle different response structures
// //         const data = response?.data || response || [];

// //         const published = Array.isArray(data)
// //           ? data.filter((item) => item.isPublished !== false)
// //           : [];

// //         if (mounted) {
// //           setTestimonials(published.slice(0, 5));
// //         }
// //       } catch (error) {
// //         console.error("Failed to load testimonials:", error);
// //         if (mounted) {
// //           setTestimonials([]);
// //         }
// //       } finally {
// //         if (mounted) {
// //           setLoading(false);
// //         }
// //       }
// //     };

// //     fetchTestimonials();

// //     return () => {
// //       mounted = false;
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (testimonials.length <= 1) return;

// //     const interval = setInterval(() => {
// //       setActiveIndex((current) =>
// //         current === testimonials.length - 1 ? 0 : current + 1
// //       );
// //     }, 6500);

// //     return () => clearInterval(interval);
// //   }, [testimonials.length]);

// //   const nextTestimonial = () => {
// //     if (!testimonials.length) return;
// //     setActiveIndex((current) =>
// //       current === testimonials.length - 1 ? 0 : current + 1
// //     );
// //   };

// //   const previousTestimonial = () => {
// //     if (!testimonials.length) return;
// //     setActiveIndex((current) =>
// //       current === 0 ? testimonials.length - 1 : current - 1
// //     );
// //   };

// //   const activeTestimonial = testimonials[activeIndex];

// //   return (
// //     <section className="testimonials-preview">
// //       {/* =====================================================
// //           INTRO
// //       ===================================================== */}

// //       <div className="testimonials-intro">
// //         <div className="testimonials-container">
// //           <div className="testimonials-intro-top">
// //             <span className="testimonials-label">
// //               THE SNGA EXPERIENCE
// //             </span>

// //             <span className="testimonials-section-number">
// //               {testimonials.length > 0 ? `${String(testimonials.length).padStart(2, "0")}` : "08"}
// //             </span>
// //           </div>

// //           <div className="testimonials-intro-grid">
// //             <h2>
// //               Life at SNGA,
// //               <br />
// //               <span>through their eyes.</span>
// //             </h2>

// //             <div className="testimonials-intro-copy">
// //               <p>
// //                 A school is experienced differently by every
// //                 child and every family. These are the voices
// //                 behind our community.
// //               </p>

// //               <Link
// //                 to="/testimonials"
// //                 className="testimonials-explore"
// //               >
// //                 <span>Meet our community</span>
// //                 <span>↗</span>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           FEATURE
// //       ===================================================== */}

// //       <div className="testimonials-stage">
// //         <div className="testimonials-container">
// //           {loading ? (
// //             <div className="testimonials-loading">
// //               <span />
// //               <span />
// //               <span />
// //             </div>
// //           ) : activeTestimonial ? (
// //             <div className="testimonials-feature">
// //               {/* IMAGE */}

// //               <div className="testimonials-image-wrap">
// //                 <img
// //                   src={getImageUrl(
// //                     activeTestimonial.image,
// //                     activeIndex
// //                   )}
// //                   alt={
// //                     activeTestimonial.name ||
// //                     "SNGA community member"
// //                   }
// //                   onError={(event) => {
// //                     event.currentTarget.onerror = null;
// //                     event.currentTarget.src =
// //                       fallbackImages[
// //                         activeIndex % fallbackImages.length
// //                       ];
// //                   }}
// //                 />

// //                 <div className="testimonials-image-overlay">
// //                   <span>SNGA</span>
// //                   <span>COMMUNITY</span>
// //                 </div>

// //                 <div className="testimonials-image-index">
// //                   {String(activeIndex + 1).padStart(2, "0")}
// //                 </div>
// //               </div>

// //               {/* QUOTE */}

// //               <div className="testimonials-quote-area">
// //                 <div className="testimonials-quote-mark">
// //                   “
// //                 </div>

// //                 <div className="testimonials-quote-content">
// //                   <span className="testimonials-quote-label">
// //                     A VOICE FROM OUR COMMUNITY
// //                   </span>

// //                   <blockquote>
// //                     {activeTestimonial.message}
// //                   </blockquote>

// //                   <div className="testimonials-person">
// //                     <div className="testimonials-person-line" />

// //                     <div className="testimonials-person-info">
// //                       <strong>
// //                         {activeTestimonial.name ||
// //                           "SNGA Community"}
// //                       </strong>

// //                       {activeTestimonial.role && (
// //                         <span>{activeTestimonial.role}</span>
// //                       )}

// //                       {activeTestimonial.relation && (
// //                         <span>
// //                           {activeTestimonial.relation}
// //                         </span>
// //                       )}
// //                     </div>
// //                   </div>

// //                   {activeTestimonial.rating && (
// //                     <div className="testimonials-rating">
// //                       <span>EXPERIENCE</span>

// //                       <div>
// //                         {[1, 2, 3, 4, 5].map((star) => (
// //                           <span
// //                             key={star}
// //                             className={
// //                               star <= activeTestimonial.rating
// //                                 ? "active"
// //                                 : ""
// //                             }
// //                           >
// //                             ★
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* SIDE NUMBER */}

// //                 <div className="testimonials-side-number">
// //                   <span>
// //                     {String(activeIndex + 1).padStart(2, "0")}
// //                   </span>

// //                   <i />

// //                   <span>
// //                     {String(testimonials.length).padStart(2, "0")}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="testimonials-empty">
// //               <span>08</span>

// //               <div>
// //                 <small>THE SNGA EXPERIENCE</small>

// //                 <h3>
// //                   Every voice
// //                   <br />
// //                   <em>matters.</em>
// //                 </h3>

// //                 <p>
// //                   Community testimonials will appear here.
// //                 </p>
// //               </div>
// //             </div>
// //           )}

// //           {/* =====================================================
// //               CONTROLS
// //           ===================================================== */}

// //           {!loading && testimonials.length > 1 && (
// //             <div className="testimonials-controls">
// //               <div className="testimonials-progress">
// //                 {testimonials.map((testimonial, index) => {
// //                   const testimonialId = testimonial.id || testimonial._id;
// //                   return (
// //                     <button
// //                       key={testimonialId}
// //                       type="button"
// //                       className={
// //                         index === activeIndex ? "active" : ""
// //                       }
// //                       onClick={() => setActiveIndex(index)}
// //                       aria-label={`View testimonial ${index + 1}`}
// //                     >
// //                       <span />
// //                     </button>
// //                   );
// //                 })}
// //               </div>

// //               <div className="testimonials-arrows">
// //                 <button
// //                   type="button"
// //                   onClick={previousTestimonial}
// //                   aria-label="Previous testimonial"
// //                 >
// //                   ←
// //                 </button>

// //                 <button
// //                   type="button"
// //                   onClick={nextTestimonial}
// //                   aria-label="Next testimonial"
// //                 >
// //                   →
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           STATEMENT
// //       ===================================================== */}

// //       <div className="testimonials-statement">
// //         <div className="testimonials-container">
// //           <div className="testimonials-statement-grid">
// //             <div className="testimonials-statement-number">
// //               09
// //             </div>

// //             <div className="testimonials-statement-main">
// //               <span className="testimonials-label">
// //                 WHAT WE BELIEVE
// //               </span>

// //               <h3>
// //                 When children feel
// //                 <br />
// //                 <span>they belong,</span>
// //                 <br />
// //                 they are ready to grow.
// //               </h3>
// //             </div>

// //             <p>
// //               We believe meaningful education begins with
// //               relationships — between students, teachers,
// //               families and the wider school community.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =====================================================
// //           CTA
// //       ===================================================== */}

// //       <div className="testimonials-bottom">
// //         <div className="testimonials-container">
// //           <div className="testimonials-bottom-inner">
// //             <div>
// //               <span className="testimonials-label">
// //                 DISCOVER SNGA
// //               </span>

// //               <h3>
// //                 Your child's story
// //                 <br />
// //                 <span>starts here.</span>
// //               </h3>
// //             </div>

// //             <Link
// //               to="/admissions"
// //               className="testimonials-bottom-button"
// //             >
// //               Explore admissions
// //               <span>↗</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialsPreview;






// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import testimonialService from "../../services/testimonial.service";
// import "./TestimonialsPreview.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//   "http://localhost:5000";

// const fallbackImages = [
//   "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1800&q=90",
//   "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90",
//   "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
// ];

// const getImageUrl = (image, index = 0) => {
//   if (!image) {
//     return fallbackImages[index % fallbackImages.length];
//   }

//   if (
//     image.startsWith("http://") ||
//     image.startsWith("https://")
//   ) {
//     return image;
//   }

//   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// };

// const TestimonialsPreview = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const sectionRef = useRef(null);

//   /* =====================================================
//      FETCH TESTIMONIALS
//   ===================================================== */

//   useEffect(() => {
//     let mounted = true;

//     const fetchTestimonials = async () => {
//       try {
//         const response =
//           await testimonialService.getPublished();

//         const data = response?.data || response || [];

//         const published = Array.isArray(data)
//           ? data.filter(
//               (item) => item.isPublished !== false
//             )
//           : [];

//         if (mounted) {
//           setTestimonials(published.slice(0, 5));
//         }
//       } catch (error) {
//         console.error(
//           "Failed to load testimonials:",
//           error
//         );

//         if (mounted) {
//           setTestimonials([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchTestimonials();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /* =====================================================
//      AUTO ROTATION
//   ===================================================== */

//   useEffect(() => {
//     if (testimonials.length <= 1) return;

//     const interval = setInterval(() => {
//       setActiveIndex((current) =>
//         current === testimonials.length - 1
//           ? 0
//           : current + 1
//       );
//     }, 6500);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   /* =====================================================
//      REVEAL
//   ===================================================== */

//   useEffect(() => {
//     const section = sectionRef.current;

//     if (!section) return;

//     const elements = section.querySelectorAll(
//       ".tp-reveal, .tp-image-reveal"
//     );

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("tp-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     elements.forEach((element) =>
//       observer.observe(element)
//     );

//     return () => observer.disconnect();
//   }, [testimonials, loading]);

//   /* =====================================================
//      CONTROLS
//   ===================================================== */

//   const nextTestimonial = () => {
//     if (!testimonials.length) return;

//     setActiveIndex((current) =>
//       current === testimonials.length - 1
//         ? 0
//         : current + 1
//     );
//   };

//   const previousTestimonial = () => {
//     if (!testimonials.length) return;

//     setActiveIndex((current) =>
//       current === 0
//         ? testimonials.length - 1
//         : current - 1
//     );
//   };

//   const activeTestimonial =
//     testimonials[activeIndex];

//   return (
//     <section
//       className="testimonials-preview"
//       ref={sectionRef}
//     >

//       {/* =====================================================
//           OPENING
//       ===================================================== */}

//       <section className="tp-opening">
//         <div className="tp-container">

//           <div className="tp-opening-top tp-reveal">

//             <span className="tp-section-number">
//               10
//             </span>

//             <div className="tp-opening-meta">
//               <span>
//                 THE SNGA EXPERIENCE
//               </span>

//               <span>
//                 VOICES FROM OUR COMMUNITY
//               </span>
//             </div>

//             <span className="tp-opening-location">
//               VENKULAM · RAMANATHAPURAM
//             </span>

//           </div>


//           <div className="tp-opening-grid">

//             <div className="tp-opening-label tp-reveal">

//               <span className="tp-rule" />

//               <span>
//                 PEOPLE · EXPERIENCE · BELONGING
//               </span>

//             </div>


//             <div className="tp-opening-main tp-reveal">

//               <p className="tp-kicker">
//                 THE PEOPLE BEHIND THE SCHOOL
//               </p>

//               <h2>
//                 Life at SNGA,
//                 <br />
//                 through their <em>eyes.</em>
//               </h2>

//               <p className="tp-opening-description">
//                 A school is experienced differently by
//                 every child and every family. These are
//                 the voices behind our community.
//               </p>

//               <Link
//                 to="/testimonials"
//                 className="tp-text-link"
//               >
//                 <span>Meet our community</span>
//                 <span>↗</span>
//               </Link>

//             </div>


//             <div className="tp-opening-aside tp-reveal">

//               <strong>
//                 {String(
//                   testimonials.length
//                 ).padStart(2, "0")}
//               </strong>

//               <span>
//                 VOICES
//               </span>

//               <div>
//                 <span>STUDENTS</span>
//                 <span>FAMILIES</span>
//                 <span>COMMUNITY</span>
//               </div>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           TESTIMONIAL STAGE
//       ===================================================== */}

//       <section className="tp-stage">

//         <div className="tp-container">

//           {loading ? (

//             <div className="tp-loading">

//               <span className="tp-loading-line" />

//               <span>
//                 Listening to our community...
//               </span>

//             </div>

//           ) : activeTestimonial ? (

//             <div className="tp-feature">

//               {/* IMAGE */}

//               <div className="tp-image-wrap tp-image-reveal">

//                 <img
//                   src={getImageUrl(
//                     activeTestimonial.image,
//                     activeIndex
//                   )}
//                   alt={
//                     activeTestimonial.name ||
//                     "SNGA community member"
//                   }
//                   onError={(event) => {
//                     event.currentTarget.onerror =
//                       null;

//                     event.currentTarget.src =
//                       fallbackImages[
//                         activeIndex %
//                           fallbackImages.length
//                       ];
//                   }}
//                 />

//                 <div className="tp-image-top">

//                   <span>
//                     {String(
//                       activeIndex + 1
//                     ).padStart(2, "0")}
//                   </span>

//                   <span>
//                     COMMUNITY
//                   </span>

//                 </div>

//                 <div className="tp-image-bottom">

//                   <span>
//                     SHIFAN NOOR GLOBAL ACADEMY
//                   </span>

//                   <span>
//                     {String(
//                       activeIndex + 1
//                     ).padStart(2, "0")}{" "}
//                     /{" "}
//                     {String(
//                       testimonials.length
//                     ).padStart(2, "0")}
//                   </span>

//                 </div>

//               </div>


//               {/* QUOTE */}

//               <div className="tp-quote">

//                 <div className="tp-quote-mark">
//                   “
//                 </div>

//                 <div className="tp-quote-content">

//                   <span className="tp-kicker">
//                     A VOICE FROM OUR COMMUNITY
//                   </span>

//                   <blockquote>
//                     {activeTestimonial.message}
//                   </blockquote>


//                   <div className="tp-person">

//                     <span className="tp-person-rule" />

//                     <div>

//                       <strong>
//                         {activeTestimonial.name ||
//                           "SNGA Community"}
//                       </strong>

//                       {activeTestimonial.role && (
//                         <span>
//                           {activeTestimonial.role}
//                         </span>
//                       )}

//                       {activeTestimonial.relation && (
//                         <span>
//                           {activeTestimonial.relation}
//                         </span>
//                       )}

//                     </div>

//                   </div>


//                   {activeTestimonial.rating && (
//                     <div className="tp-rating">

//                       <span>
//                         EXPERIENCE
//                       </span>

//                       <div>
//                         {[1, 2, 3, 4, 5].map(
//                           (star) => (
//                             <span
//                               key={star}
//                               className={
//                                 star <=
//                                 activeTestimonial.rating
//                                   ? "active"
//                                   : ""
//                               }
//                             >
//                               ★
//                             </span>
//                           )
//                         )}
//                       </div>

//                     </div>
//                   )}

//                 </div>


//                 <div className="tp-side-index">

//                   <span>
//                     {String(
//                       activeIndex + 1
//                     ).padStart(2, "0")}
//                   </span>

//                   <i />

//                   <span>
//                     {String(
//                       testimonials.length
//                     ).padStart(2, "0")}
//                   </span>

//                 </div>

//               </div>

//             </div>

//           ) : (

//             <div className="tp-empty tp-reveal">

//               <span className="tp-empty-number">
//                 10
//               </span>

//               <div>

//                 <span>
//                   THE SNGA EXPERIENCE
//                 </span>

//                 <h3>
//                   Every voice
//                   <br />
//                   <em>matters.</em>
//                 </h3>

//                 <p>
//                   Community testimonials will
//                   appear here.
//                 </p>

//               </div>

//             </div>

//           )}


//           {/* =====================================================
//               CONTROLS
//           ===================================================== */}

//           {!loading &&
//             testimonials.length > 1 && (

//               <div className="tp-controls">

//                 <div className="tp-progress">

//                   {testimonials.map(
//                     (testimonial, index) => {

//                       const testimonialId =
//                         testimonial.id ||
//                         testimonial._id ||
//                         index;

//                       return (
//                         <button
//                           key={testimonialId}
//                           type="button"
//                           className={
//                             index === activeIndex
//                               ? "active"
//                               : ""
//                           }
//                           onClick={() =>
//                             setActiveIndex(index)
//                           }
//                           aria-label={`View testimonial ${
//                             index + 1
//                           }`}
//                         >
//                           <span />
//                         </button>
//                       );
//                     }
//                   )}

//                 </div>


//                 <div className="tp-arrows">

//                   <button
//                     type="button"
//                     onClick={
//                       previousTestimonial
//                     }
//                     aria-label="Previous testimonial"
//                   >
//                     ←
//                   </button>

//                   <button
//                     type="button"
//                     onClick={
//                       nextTestimonial
//                     }
//                     aria-label="Next testimonial"
//                   >
//                     →
//                   </button>

//                 </div>

//               </div>
//             )}

//         </div>

//       </section>


//       {/* =====================================================
//           STATEMENT
//       ===================================================== */}

//       <section className="tp-statement">

//         <div className="tp-container">

//           <div className="tp-statement-grid">

//             <span className="tp-statement-number">
//               11
//             </span>

//             <div className="tp-statement-main">

//               <span>
//                 WHAT WE BELIEVE
//               </span>

//               <h3>
//                 When children feel
//                 <br />
//                 <em>they belong,</em>
//                 <br />
//                 they are ready to grow.
//               </h3>

//             </div>

//             <p>
//               Meaningful education begins with
//               relationships — between students,
//               teachers, families and the wider
//               school community.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="tp-footer">

//         <div className="tp-container">

//           <div className="tp-footer-inner">

//             <div className="tp-footer-copy tp-reveal">

//               <span>
//                 DISCOVER SNGA
//               </span>

//               <h3>
//                 Your child's story
//                 <br />
//                 <em>starts here.</em>
//               </h3>

//             </div>


//             <div className="tp-footer-action tp-reveal">

//               <p>
//                 Discover a learning environment
//                 built around curiosity, character,
//                 confidence and belonging.
//               </p>

//               <Link
//                 to="/admissions"
//                 className="tp-footer-link"
//               >
//                 <span>
//                   Explore admissions
//                 </span>

//                 <span>↗</span>
//               </Link>

//             </div>

//           </div>


//           <div className="tp-footer-bottom">

//             <span>
//               SHIFAN NOOR GLOBAL ACADEMY
//             </span>

//             <span>
//               PEOPLE · PURPOSE · POSSIBILITY
//             </span>

//           </div>

//         </div>

//       </section>

//     </section>
//   );
// };

// export default TestimonialsPreview;


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import testimonialService from "../../services/testimonial.service";
import "./TestimonialsPreview.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const fallbackImages = [
  "/images/testimonial-1.jpg",
  "/images/testimonial-2.jpg",
  "/images/testimonial-3.jpg",
  "/images/testimonial-4.jpg",
  "/images/testimonial-5.jpg",
];

const getImageUrl = (image, index = 0) => {
  if (!image) return fallbackImages[index % fallbackImages.length];

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const TestimonialsPreview = () => {
  const sectionRef = useRef(null);

  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadTestimonials = async () => {
      try {
        const response = await testimonialService.getPublished();

        if (!mounted) return;

        const items = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
          ? response.data
          : [];

        setTestimonials(
          items
            .filter((item) => item?.isPublished !== false)
            .slice(0, 5)
        );
      } catch (error) {
        console.error("Failed to load testimonials:", error);

        if (mounted) {
          setTestimonials([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadTestimonials();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tp-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements =
      sectionRef.current.querySelectorAll(".tp-reveal");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [loading, testimonials.length]);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 6500);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    if (!testimonials.length) return;

    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    if (!testimonials.length) return;

    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  if (loading) {
    return (
      <section className="testimonials-preview" ref={sectionRef}>
        <div className="testimonials-loading">
          <div className="testimonials-loading-line" />
          <span>Loading community voices</span>
        </div>
      </section>
    );
  }

  if (!testimonials.length) {
    return null;
  }

  return (
    <section
      className="testimonials-preview"
      ref={sectionRef}
      aria-label="Testimonials"
    >
      {/* =====================================================
          INTRO
          ===================================================== */}

      <div className="tp-intro">
        <div className="tp-container">
          <div className="tp-intro-top tp-reveal">
            <div className="tp-section-marker">
              <span>10</span>
              <span>THE SNGA EXPERIENCE</span>
            </div>

            <span className="tp-location">
              VENKULAM · RAMANATHAPURAM
            </span>
          </div>

          <div className="tp-intro-main">
            <div className="tp-reveal">
              <span className="tp-kicker">
                VOICES FROM OUR COMMUNITY
              </span>

              <h2>
                Life at SNGA,
                <br />
                <em>through their eyes.</em>
              </h2>
            </div>

            <div className="tp-intro-copy tp-reveal">
              <p>
                A school is experienced through its people.
                Hear from the families and community members
                who have shared their journey with Shifan Noor
                Global Academy.
              </p>

              <div className="tp-intro-meta">
                <span>
                  {String(testimonials.length).padStart(2, "0")}
                </span>
                <span>COMMUNITY VOICES</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TESTIMONIAL FEATURE
          ===================================================== */}

      <div className="tp-feature-section">
        <div className="tp-container">
          <div className="tp-feature tp-reveal">
            {/* IMAGE */}

            <div className="tp-image-column">
              <div className="tp-image-frame">
                <img
                  src={getImageUrl(
                    activeTestimonial.image,
                    activeIndex
                  )}
                  alt={
                    activeTestimonial.name
                      ? `${activeTestimonial.name} testimonial`
                      : "SNGA community testimonial"
                  }
                />

                <div className="tp-image-top">
                  <span>SHIFAN NOOR GLOBAL ACADEMY</span>
                  <span>
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="tp-image-bottom">
                  <span>COMMUNITY</span>
                  <span>VENKULAM · TAMIL NADU</span>
                </div>

                <div className="tp-image-number">
                  {String(activeIndex + 1).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* CONTENT */}

            <div className="tp-content-column">
              <div className="tp-content-header">
                <span>THE PEOPLE BEHIND THE SCHOOL</span>

                <div className="tp-content-index">
                  <strong>
                    {String(activeIndex + 1).padStart(2, "0")}
                  </strong>
                  <span>
                    / {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="tp-quote-area">
                <span className="tp-quote-mark">“</span>

                <blockquote>
                  {activeTestimonial.message}
                </blockquote>
              </div>

              <div className="tp-author">
                <div className="tp-author-line" />

                <div className="tp-author-details">
                  <strong>{activeTestimonial.name}</strong>

                  {activeTestimonial.role && (
                    <span>{activeTestimonial.role}</span>
                  )}

                  {activeTestimonial.relation && (
                    <span className="tp-author-relation">
                      {activeTestimonial.relation}
                    </span>
                  )}
                </div>
              </div>

              {activeTestimonial.rating && (
                <div
                  className="tp-rating"
                  aria-label={`${activeTestimonial.rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={
                        star <= activeTestimonial.rating
                          ? "active"
                          : ""
                      }
                    />
                  ))}
                </div>
              )}

              <div className="tp-content-footer">
                <span>SHARED WITH SNGA</span>
                <span>01 — COMMUNITY</span>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTROLS
              ================================================= */}

          <div className="tp-navigation tp-reveal">
            <div className="tp-navigation-left">
              <button
                type="button"
                className="tp-arrow"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                className="tp-arrow"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="tp-progress">
              {testimonials.map((testimonial, index) => (
                <button
                  type="button"
                  key={testimonial.id || index}
                  className={`tp-progress-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                >
                  <span />
                </button>
              ))}
            </div>

            <div className="tp-navigation-counter">
              <strong>
                {String(activeIndex + 1).padStart(2, "0")}
              </strong>

              <span>/</span>

              <span>
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          STATEMENT
          ===================================================== */}

      <div className="tp-statement">
        <div className="tp-container">
          <div className="tp-statement-inner tp-reveal">
            <div className="tp-statement-number">
              11
            </div>

            <div>
              <span className="tp-statement-kicker">
                A SCHOOL IS A COMMUNITY
              </span>

              <h3>
                When children feel
                <br />
                <em>they belong,</em>
                <br />
                they are ready to grow.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CLOSING CTA
          ===================================================== */}

      <div className="tp-closing">
        <div className="tp-container">
          <div className="tp-closing-top tp-reveal">
            <span>CONTINUE EXPLORING</span>
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
          </div>

          <div className="tp-closing-main tp-reveal">
            <h3>
              Your child's story
              <br />
              <em>starts here.</em>
            </h3>

            <Link
              to="/admissions"
              className="tp-closing-link"
            >
              <span>EXPLORE ADMISSIONS</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;