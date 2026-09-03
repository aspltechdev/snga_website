// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaQuoteLeft,
//   FaStar,
// } from "react-icons/fa";
// import testimonialService from "../../services/testimonial.service";
// import "./TestimonialsPreview.css";

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

// const TestimonialsPreview = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await testimonialService.getAll();

//         const data = response?.data || response || [];

//         const published = Array.isArray(data)
//           ? data.filter((item) => item.isPublished !== false)
//           : [];

//         setTestimonials(published.slice(0, 5));
//       } catch (error) {
//         console.error("Failed to load testimonials:", error);
//         setTestimonials([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   useEffect(() => {
//     if (testimonials.length <= 1) return;

//     const interval = setInterval(() => {
//       setActiveIndex((current) =>
//         current === testimonials.length - 1 ? 0 : current + 1
//       );
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const activeTestimonial = testimonials[activeIndex];

//   return (
//     <section className="testimonials-preview">
//       <div className="testimonials-preview-container">

//         {/* Header */}
//         <div className="testimonials-preview-header">
//           <div>
//             <div className="testimonials-preview-label">
//               <span></span>
//               VOICES OF OUR COMMUNITY
//             </div>

//             <h2 className="testimonials-preview-title">
//               What Our
//               <br />
//               <em>Community Says.</em>
//             </h2>
//           </div>

//           <div className="testimonials-preview-header-right">
//             <p>
//               The experiences of our students and parents reflect the
//               relationships, learning and values we build every day.
//             </p>

//             <Link
//               to="/testimonials"
//               className="testimonials-preview-link"
//             >
//               <span>View All Testimonials</span>
//               <FaArrowRight />
//             </Link>
//           </div>
//         </div>

//         {/* Testimonial */}
//         {loading ? (
//           <div className="testimonials-preview-loading">
//             <div></div>
//             <div></div>
//           </div>
//         ) : activeTestimonial ? (
//           <div className="testimonial-feature">

//             {/* Left */}
//             <div className="testimonial-feature-left">
//               <FaQuoteLeft className="testimonial-quote-icon" />

//               <div className="testimonial-rating">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <FaStar
//                     key={star}
//                     className={
//                       star <= (activeTestimonial.rating || 5)
//                         ? "active"
//                         : ""
//                     }
//                   />
//                 ))}
//               </div>

//               <blockquote>
//                 “{activeTestimonial.message}”
//               </blockquote>

//               <div className="testimonial-author">
//                 <div className="testimonial-author-image">
//                   {activeTestimonial.image ? (
//                     <img
//                       src={getImageUrl(activeTestimonial.image)}
//                       alt={activeTestimonial.name}
//                     />
//                   ) : (
//                     <span>
//                       {activeTestimonial.name
//                         ?.charAt(0)
//                         ?.toUpperCase() || "S"}
//                     </span>
//                   )}
//                 </div>

//                 <div className="testimonial-author-info">
//                   <strong>{activeTestimonial.name}</strong>

//                   {activeTestimonial.role && (
//                     <span>{activeTestimonial.role}</span>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Right */}
//             <div className="testimonial-feature-right">
//               <div className="testimonial-feature-number">
//                 {String(activeIndex + 1).padStart(2, "0")}
//                 <span>
//                   / {String(testimonials.length).padStart(2, "0")}
//                 </span>
//               </div>

//               <div className="testimonial-feature-decoration">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>

//               <div className="testimonial-feature-caption">
//                 <strong>TRUST</strong>
//                 <span>Built through meaningful experiences.</span>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="testimonials-preview-empty">
//             <FaQuoteLeft />

//             <h3>Your Voice Matters</h3>

//             <p>
//               Community testimonials will be showcased here.
//             </p>
//           </div>
//         )}

//         {/* Navigation */}
//         {!loading && testimonials.length > 1 && (
//           <div className="testimonials-preview-navigation">

//             <div className="testimonial-dots">
//               {testimonials.map((testimonial, index) => (
//                 <button
//                   key={testimonial.id}
//                   type="button"
//                   className={
//                     index === activeIndex ? "active" : ""
//                   }
//                   onClick={() => setActiveIndex(index)}
//                   aria-label={`View testimonial ${index + 1}`}
//                 >
//                   <span></span>
//                 </button>
//               ))}
//             </div>

//             <div className="testimonial-counter">
//               <strong>
//                 {String(activeIndex + 1).padStart(2, "0")}
//               </strong>

//               <span>—</span>

//               <span>
//                 {String(testimonials.length).padStart(2, "0")}
//               </span>
//             </div>
//           </div>
//         )}

//         {/* Bottom Statement */}
//         <div className="testimonials-preview-bottom">
//           <div>
//             <span>OUR PROMISE</span>
//             <strong>
//               Creating a place where every student
//               <em> feels seen, supported & inspired.</em>
//             </strong>
//           </div>

//           <Link to="/contact" className="testimonials-preview-bottom-link">
//             <span>Connect With Us</span>
//             <FaArrowRight />
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TestimonialsPreview;


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
  FaHeart,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import testimonialService from "../../services/testimonial.service";
import "./TestimonialsPreview.css";

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

const TestimonialsPreview = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featureRef = useRef(null);
  const navRef = useRef(null);
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
          entry.target.classList.add("testimonials-visible");
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

    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-feature");
          featureObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-nav");
          navObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

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

    if (featureRef.current) {
      featureObserver.observe(featureRef.current);
    }

    if (navRef.current) {
      navObserver.observe(navRef.current);
    }

    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      headerObserver.disconnect();
      featureObserver.disconnect();
      navObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  // =====================================================
  // FETCH TESTIMONIALS
  // =====================================================

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await testimonialService.getAll();

        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter((item) => item.isPublished !== false)
          : [];

        setTestimonials(published.slice(0, 5));
      } catch (error) {
        console.error("Failed to load testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // =====================================================
  // AUTO-PLAY
  // =====================================================

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const activeTestimonial = testimonials[activeIndex];

  // =====================================================
  // STATS DATA
  // =====================================================

  const stats = [
    { number: "50+", label: "Testimonials" },
    { number: "4.9", label: "Average Rating" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "100%", label: "Trust & Care" },
  ];

  return (
    <section ref={sectionRef} className="testimonials-preview">
      {/* Background decorative elements */}
      <div className="testimonials-bg-shape testimonials-bg-shape-1" />
      <div className="testimonials-bg-shape testimonials-bg-shape-2" />
      <div className="testimonials-bg-grid" />

      <div className="testimonials-preview-container">
        {/* =====================================
            HEADER
        ====================================== */}
        <div ref={headerRef} className="testimonials-preview-header">
          <div className="testimonials-header-content">
            <span className="testimonials-tag">
              <FaHeart />
              VOICES OF OUR COMMUNITY
            </span>

            <h2 className="testimonials-title">
              What Our
              <br />
              <span className="testimonials-title-highlight">Community Says.</span>
            </h2>

            <p className="testimonials-description">
              The experiences of our students and parents reflect the
              relationships, learning and values we build every day.
            </p>

            <Link to="/testimonials" className="testimonials-cta">
              <span>View All Testimonials</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="testimonials-header-stats">
            {stats.map((stat, index) => (
              <div key={index} className="testimonials-stat">
                <span className="testimonials-stat-number">{stat.number}</span>
                <span className="testimonials-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            FEATURED TESTIMONIAL
        ====================================== */}
        {loading ? (
          <div className="testimonials-loading">
            <div className="testimonials-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Loading testimonials...</p>
          </div>
        ) : activeTestimonial ? (
          <div ref={featureRef} className="testimonials-feature">
            {/* Left - Quote Content */}
            <div className="testimonials-feature-left">
              <div className="testimonials-quote-icon">
                <FaQuoteLeft />
              </div>

              <div className="testimonials-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= (activeTestimonial.rating || 5)
                        ? "active"
                        : ""
                    }
                  />
                ))}
              </div>

              <blockquote className="testimonials-quote">
                “{activeTestimonial.message}”
              </blockquote>

              <div className="testimonials-author">
                <div className="testimonials-author-avatar">
                  {activeTestimonial.image ? (
                    <img
                      src={getImageUrl(activeTestimonial.image)}
                      alt={activeTestimonial.name}
                      loading="lazy"
                    />
                  ) : (
                    <span className="testimonials-avatar-placeholder">
                      <FaUserCircle />
                    </span>
                  )}
                </div>

                <div className="testimonials-author-info">
                  <strong>{activeTestimonial.name}</strong>
                  {activeTestimonial.role && (
                    <span>
                      {activeTestimonial.role}
                    </span>
                  )}
                  {activeTestimonial.relation && (
                    <span className="testimonials-author-relation">
                      {activeTestimonial.relation}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Side Info */}
            <div className="testimonials-feature-right">
              <div className="testimonials-feature-number">
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="testimonials-feature-total">
                  / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              <div className="testimonials-feature-decoration">
                <span className="deco-line" />
                <span className="deco-dot" />
                <span className="deco-line" />
              </div>

              <div className="testimonials-feature-badge">
                <FaChalkboardTeacher />
                <span>SNGA Community</span>
              </div>

              <div className="testimonials-feature-caption">
                <strong>TRUST</strong>
                <span>Built through meaningful experiences.</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="testimonials-empty">
            <div className="testimonials-empty-icon">
              <FaQuoteLeft />
            </div>
            <h3>Your Voice Matters</h3>
            <p>Community testimonials will be showcased here.</p>
          </div>
        )}

        {/* =====================================
            NAVIGATION
        ====================================== */}
        {!loading && testimonials.length > 1 && (
          <div ref={navRef} className="testimonials-nav">
            <div className="testimonials-dots">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  className={`testimonials-dot ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                >
                  <span className="dot-bar" />
                </button>
              ))}
            </div>

            <div className="testimonials-counter">
              <span className="counter-current">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="counter-divider">—</span>
              <span className="counter-total">
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        )}

        {/* =====================================
            BOTTOM
        ====================================== */}
        <div ref={bottomRef} className="testimonials-bottom">
          <div className="testimonials-bottom-content">
            <span className="testimonials-bottom-label">OUR PROMISE</span>
            <strong className="testimonials-bottom-quote">
              Creating a place where every student
              <em> feels seen, supported & inspired.</em>
            </strong>
          </div>

          <Link to="/contact" className="testimonials-bottom-link">
            <span>Connect With Us</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;