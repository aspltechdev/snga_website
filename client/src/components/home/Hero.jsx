

// // import { useEffect, useState, useCallback, useRef } from "react";
// // import {
// //   FaArrowRight,
// //   FaChevronLeft,
// //   FaChevronRight,
// //   FaPlay,
// //   FaPause,
// //   FaGraduationCap,
// //   FaStar,
// //   FaAward,
// //   FaShieldAlt,
// // } from "react-icons/fa";

// // import heroService from "../../services/hero.service";

// // import "./Hero.css";

// // const Hero = () => {
// //   const [heroes, setHeroes] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [loading, setLoading] = useState(true);
// //   const [isPlaying, setIsPlaying] = useState(true);
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [touchStart, setTouchStart] = useState(null);
// //   const [touchEnd, setTouchEnd] = useState(null);
  
// //   const slideIntervalRef = useRef(null);
// //   const heroSectionRef = useRef(null);

// //   // ==========================================
// //   // API BASE URL
// //   // ==========================================
// //   const API_URL =
// //     import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") || "http://localhost:5000";

// //   // ==========================================
// //   // IMAGE URL
// //   // ==========================================
// //   const getImageUrl = useCallback((image) => {
// //     if (!image) return "";
// //     if (image.startsWith("http://") || image.startsWith("https://")) return image;
// //     if (image.startsWith("/")) return `${API_URL}${image}`;
// //     return `${API_URL}/${image}`;
// //   }, [API_URL]);

// //   // ==========================================
// //   // FETCH HEROES
// //   // ==========================================
// //   const fetchHeroes = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await heroService.getHero();
      
// //       let heroData = response?.data || [];
// //       if (!Array.isArray(heroData)) {
// //         heroData = heroData ? [heroData] : [];
// //       }
      
// //       heroData = heroData.filter((hero) => hero && hero.isActive !== false);
// //       setHeroes(heroData);
// //       setCurrentIndex(0);
// //     } catch (error) {
// //       console.error("Fetch hero error:", error);
// //       setHeroes([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchHeroes();
// //   }, []);

// //   // ==========================================
// //   // AUTO SLIDE WITH PAUSE ON HOVER
// //   // ==========================================
// //   const startAutoSlide = useCallback(() => {
// //     if (heroes.length <= 1) return;
    
// //     slideIntervalRef.current = setInterval(() => {
// //       setCurrentIndex((previous) => {
// //         if (previous >= heroes.length - 1) return 0;
// //         return previous + 1;
// //       });
// //     }, 6000);
// //   }, [heroes.length]);

// //   const stopAutoSlide = useCallback(() => {
// //     if (slideIntervalRef.current) {
// //       clearInterval(slideIntervalRef.current);
// //       slideIntervalRef.current = null;
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (isPlaying && !isHovered && heroes.length > 1) {
// //       startAutoSlide();
// //     } else {
// //       stopAutoSlide();
// //     }
    
// //     return () => stopAutoSlide();
// //   }, [isPlaying, isHovered, heroes.length, startAutoSlide, stopAutoSlide]);

// //   // ==========================================
// //   // KEYBOARD NAVIGATION
// //   // ==========================================
// //   useEffect(() => {
// //     const handleKeyDown = (event) => {
// //       if (heroes.length <= 1) return;
      
// //       if (event.key === "ArrowLeft") {
// //         handlePrevious();
// //       } else if (event.key === "ArrowRight") {
// //         handleNext();
// //       } else if (event.key === "Escape") {
// //         setIsPlaying(false);
// //       } else if (event.key === " ") {
// //         event.preventDefault();
// //         setIsPlaying((prev) => !prev);
// //       }
// //     };

// //     window.addEventListener("keydown", handleKeyDown);
// //     return () => window.removeEventListener("keydown", handleKeyDown);
// //   }, [heroes.length, currentIndex]);

// //   // ==========================================
// //   // NAVIGATION HANDLERS
// //   // ==========================================
// //   const handlePrevious = useCallback(() => {
// //     setCurrentIndex((previous) => {
// //       if (previous === 0) return heroes.length - 1;
// //       return previous - 1;
// //     });
// //   }, [heroes.length]);

// //   const handleNext = useCallback(() => {
// //     setCurrentIndex((previous) => {
// //       if (previous >= heroes.length - 1) return 0;
// //       return previous + 1;
// //     });
// //   }, [heroes.length]);

// //   const goToSlide = useCallback((index) => {
// //     setCurrentIndex(index);
// //     setIsPlaying(true);
// //   }, []);

// //   // ==========================================
// //   // TOUCH SWIPE HANDLERS
// //   // ==========================================
// //   const handleTouchStart = useCallback((e) => {
// //     setTouchStart(e.targetTouches[0].clientX);
// //     setTouchEnd(null);
// //   }, []);

// //   const handleTouchMove = useCallback((e) => {
// //     setTouchEnd(e.targetTouches[0].clientX);
// //   }, []);

// //   const handleTouchEnd = useCallback(() => {
// //     if (!touchStart || !touchEnd) return;
    
// //     const distance = touchStart - touchEnd;
// //     const isLeftSwipe = distance > 50;
// //     const isRightSwipe = distance < -50;
    
// //     if (isLeftSwipe) {
// //       handleNext();
// //     } else if (isRightSwipe) {
// //       handlePrevious();
// //     }
// //   }, [touchStart, touchEnd, handleNext, handlePrevious]);

// //   // ==========================================
// //   // LOADING
// //   // ==========================================
// //   if (loading) {
// //     return (
// //       <section className="hero-section hero-loading">
// //         <div className="hero-loader">
// //           <div className="hero-loader-ring"></div>
// //           <FaGraduationCap className="hero-loader-icon" />
// //         </div>
// //       </section>
// //     );
// //   }

// //   // ==========================================
// //   // NO HERO
// //   // ==========================================
// //   if (heroes.length === 0) {
// //     return null;
// //   }

// //   const hero = heroes[currentIndex];
// //   const imageUrl = getImageUrl(hero.image);

// //   // ==========================================
// //   // RENDER
// //   // ==========================================
// //   return (
// //     <section
// //       ref={heroSectionRef}
// //       className="hero-section"
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //       onTouchStart={handleTouchStart}
// //       onTouchMove={handleTouchMove}
// //       onTouchEnd={handleTouchEnd}
// //     >
// //       {/* ======================================
// //           BACKGROUND SLIDES
// //       ======================================= */}
// //       <div className="hero-background">
// //         {heroes.map((item, index) => {
// //           const itemImage = getImageUrl(item.image);
          
// //           return (
// //             <div
// //               key={item.id || index}
// //               className={`hero-slide ${index === currentIndex ? "hero-slide-active" : ""}`}
// //             >
// //               {itemImage ? (
// //                 <img
// //                   src={itemImage}
// //                   alt={item.title || "SNGA"}
// //                   className="hero-image"
// //                   loading={index === currentIndex ? "eager" : "lazy"}
// //                   onError={(event) => {
// //                     event.currentTarget.style.display = "none";
// //                   }}
// //                 />
// //               ) : (
// //                 <div className="hero-no-image">
// //                   <FaGraduationCap />
// //                 </div>
// //               )}
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {/* ======================================
// //           GRADIENT OVERLAYS
// //       ======================================= */}
// //       <div className="hero-overlay"></div>
// //       <div className="hero-overlay-gradient"></div>
// //       <div className="hero-vignette"></div>

// //       {/* ======================================
// //           DECORATIVE ELEMENTS
// //       ======================================= */}
// //       <div className="hero-decorations">
// //         <div className="hero-orb hero-orb-1"></div>
// //         <div className="hero-orb hero-orb-2"></div>
// //         <div className="hero-grid-pattern"></div>
// //       </div>

// //       {/* ======================================
// //           CONTENT
// //       ======================================= */}
// //       <div className="hero-container">
// //         <div className="hero-content">
// //           {/* Animated Keyframe */}
// //           <div className="hero-content-inner" key={currentIndex}>
// //             {/* BADGE */}
// //             {hero.subtitle && (
// //               <div className="hero-subtitle">
// //                 <span className="hero-subtitle-icon">
// //                   <FaStar />
// //                 </span>
// //                 <span className="hero-subtitle-line"></span>
// //                 <span className="hero-subtitle-text">{hero.subtitle}</span>
// //               </div>
// //             )}

// //             {/* TITLE */}
// //             {hero.title && (
// //               <h1 className="hero-title">
// //                 {hero.title.split(" ").map((word, index, array) => (
// //                   <span key={index} className="hero-title-word" style={{ animationDelay: `${index * 0.1}s` }}>
// //                     {word}
// //                     {index < array.length - 1 && " "}
// //                   </span>
// //                 ))}
// //               </h1>
// //             )}

// //             {/* DESCRIPTION */}
// //             {hero.description && (
// //               <p className="hero-description">{hero.description}</p>
// //             )}

// //             {/* CTA BUTTONS */}
// //             {hero.buttonText && hero.buttonLink && (
// //               <div className="hero-actions">
// //                 <a href={hero.buttonLink} className="hero-cta">
// //                   <span className="hero-cta-text">{hero.buttonText}</span>
// //                   <span className="hero-cta-icon">
// //                     <FaArrowRight />
// //                   </span>
// //                   <span className="hero-cta-shine"></span>
// //                 </a>
                
// //                 <a href="/about" className="hero-cta-secondary">
// //                   <span>Discover More</span>
// //                   <FaArrowRight />
// //                 </a>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* TRUST BADGES */}
// //         <div className="hero-trust-badges">
// //           <div className="hero-trust-item">
// //             <FaShieldAlt />
// //             <span>CBSE Affiliated</span>
// //           </div>
// //           <div className="hero-trust-item">
// //             <FaAward />
// //             <span>ISO Certified</span>
// //           </div>
// //           <div className="hero-trust-item">
// //             <FaGraduationCap />
// //             <span>Excellence in Education</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ======================================
// //           NAVIGATION ARROWS
// //       ======================================= */}
// //       {heroes.length > 1 && (
// //         <>
// //           <button
// //             type="button"
// //             className="hero-arrow hero-arrow-left"
// //             onClick={handlePrevious}
// //             aria-label="Previous slide"
// //           >
// //             <FaChevronLeft />
// //             <span className="hero-arrow-ripple"></span>
// //           </button>

// //           <button
// //             type="button"
// //             className="hero-arrow hero-arrow-right"
// //             onClick={handleNext}
// //             aria-label="Next slide"
// //           >
// //             <FaChevronRight />
// //             <span className="hero-arrow-ripple"></span>
// //           </button>
// //         </>
// //       )}

// //       {/* ======================================
// //           BOTTOM CONTROLS
// //       ======================================= */}
// //       {heroes.length > 1 && (
// //         <div className="hero-bottom">
// //           {/* Play/Pause */}
// //           <button
// //             type="button"
// //             className="hero-play-pause"
// //             onClick={() => setIsPlaying(!isPlaying)}
// //             aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
// //           >
// //             {isPlaying ? <FaPause /> : <FaPlay />}
// //           </button>

// //           {/* Counter */}
// //           <div className="hero-counter">
// //             <span className="hero-counter-current">
// //               {String(currentIndex + 1).padStart(2, "0")}
// //             </span>
// //             <span className="hero-counter-line"></span>
// //             <span className="hero-counter-total">
// //               {String(heroes.length).padStart(2, "0")}
// //             </span>
// //           </div>

// //           {/* Dots */}
// //           <div className="hero-dots">
// //             {heroes.map((item, index) => (
// //               <button
// //                 key={item.id || index}
// //                 type="button"
// //                 className={`hero-dot ${index === currentIndex ? "hero-dot-active" : ""}`}
// //                 onClick={() => goToSlide(index)}
// //                 aria-label={`Go to slide ${index + 1}`}
// //               >
// //                 <span className="hero-dot-progress"></span>
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* ======================================
// //           SIDE LABEL
// //       ======================================= */}
// //       <div className="hero-side-label">
// //         <span className="hero-side-label-line"></span>
// //         <span className="hero-side-label-text">
// //           SHREE NARAYAN GURU ACADEMY
// //         </span>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <div className="hero-scroll-indicator">
// //         <span className="hero-scroll-text">Scroll Down</span>
// //         <span className="hero-scroll-line"></span>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// import { useEffect, useState, useCallback, useRef } from "react";
// import {
//   FaArrowRight,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// import heroService from "../../services/hero.service";

// import "./Hero.css";

// const Hero = () => {
//   const [heroes, setHeroes] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isHovered, setIsHovered] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
  
//   const slideIntervalRef = useRef(null);
//   const heroSectionRef = useRef(null);

//   const API_URL = import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") || "http://localhost:5000";

//   const getImageUrl = useCallback((image) => {
//     if (!image) return "";
//     if (image.startsWith("http://") || image.startsWith("https://")) return image;
//     if (image.startsWith("/")) return `${API_URL}${image}`;
//     return `${API_URL}/${image}`;
//   }, [API_URL]);

//   const fetchHeroes = async () => {
//     try {
//       setLoading(true);
//       const response = await heroService.getHero();
//       let heroData = response?.data || [];
//       if (!Array.isArray(heroData)) heroData = heroData ? [heroData] : [];
//       heroData = heroData.filter((hero) => hero && hero.isActive !== false);
//       setHeroes(heroData);
//       setCurrentIndex(0);
//     } catch (error) {
//       console.error("Fetch hero error:", error);
//       setHeroes([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHeroes();
//   }, []);

//   const startAutoSlide = useCallback(() => {
//     if (heroes.length <= 1) return;
//     slideIntervalRef.current = setInterval(() => {
//       setCurrentIndex((previous) => {
//         return previous >= heroes.length - 1 ? 0 : previous + 1;
//       });
//     }, 7000);
//   }, [heroes.length]);

//   const stopAutoSlide = useCallback(() => {
//     if (slideIntervalRef.current) {
//       clearInterval(slideIntervalRef.current);
//       slideIntervalRef.current = null;
//     }
//   }, []);

//   useEffect(() => {
//     if (isPlaying && !isHovered && heroes.length > 1) {
//       startAutoSlide();
//     } else {
//       stopAutoSlide();
//     }
//     return () => stopAutoSlide();
//   }, [isPlaying, isHovered, heroes.length, startAutoSlide, stopAutoSlide]);

//   const handlePrevious = useCallback(() => {
//     setCurrentIndex((previous) => {
//       return previous === 0 ? heroes.length - 1 : previous - 1;
//     });
//   }, [heroes.length]);

//   const handleNext = useCallback(() => {
//     setCurrentIndex((previous) => {
//       return previous >= heroes.length - 1 ? 0 : previous + 1;
//     });
//   }, [heroes.length]);

//   const goToSlide = useCallback((index) => {
//     setCurrentIndex(index);
//     setIsPlaying(true);
//   }, []);

//   const handleTouchStart = useCallback((e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//     setTouchEnd(null);
//   }, []);

//   const handleTouchMove = useCallback((e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   }, []);

//   const handleTouchEnd = useCallback(() => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;
//     if (isLeftSwipe) handleNext();
//     else if (isRightSwipe) handlePrevious();
//   }, [touchStart, touchEnd, handleNext, handlePrevious]);

//   if (loading) {
//     return (
//       <section className="hero-cinematic hero-loading-state">
//         <div className="hero-cinematic-loader">
//           <div className="loader-ring"></div>
//           <div className="loader-text">SNGA</div>
//         </div>
//       </section>
//     );
//   }

//   if (heroes.length === 0) return null;

//   const hero = heroes[currentIndex];
//   const imageUrl = getImageUrl(hero.image);

//   return (
//     <section
//       ref={heroSectionRef}
//       className="hero-cinematic"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Background Images */}
//       <div className="hero-cinematic-background">
//         {heroes.map((item, index) => {
//           const itemImage = getImageUrl(item.image);
//           return (
//             <div
//               key={item.id || index}
//               className={`hero-cinematic-slide ${
//                 index === currentIndex ? "hero-cinematic-slide-active" : ""
//               }`}
//             >
//               {itemImage ? (
//                 <img
//                   src={itemImage}
//                   alt={item.title || "SNGA"}
//                   className="hero-cinematic-image"
//                   loading={index === currentIndex ? "eager" : "lazy"}
//                   onError={(event) => {
//                     event.currentTarget.style.display = "none";
//                   }}
//                 />
//               ) : (
//                 <div className="hero-cinematic-fallback"></div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* Cinematic Overlays */}
//       <div className="hero-cinematic-overlay"></div>
//       <div className="hero-cinematic-gradient"></div>
//       <div className="hero-cinematic-vignette"></div>
      
//       {/* Animated Lines */}
//       <div className="hero-cinematic-lines">
//         <div className="cinematic-line line-1"></div>
//         <div className="cinematic-line line-2"></div>
//         <div className="cinematic-line line-3"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="hero-cinematic-particles">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="cinematic-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 10}s`,
//               animationDuration: `${8 + Math.random() * 12}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="hero-cinematic-container">
//         <div className="hero-cinematic-content" key={currentIndex}>
//           {/* Eyebrow */}
//           {hero.subtitle && (
//             <div className="hero-cinematic-eyebrow">
//               <span className="eyebrow-bar"></span>
//               <span className="eyebrow-text">{hero.subtitle}</span>
//             </div>
//           )}

//           {/* Title */}
//           {hero.title && (
//             <h1 className="hero-cinematic-title">
//               {hero.title.split(" ").map((word, index, array) => (
//                 <span
//                   key={index}
//                   className="cinematic-title-word"
//                   style={{ animationDelay: `${index * 0.15}s` }}
//                 >
//                   {word}
//                   {index < array.length - 1 ? "\u00A0" : ""}
//                 </span>
//               ))}
//             </h1>
//           )}

//           {/* Description */}
//           {hero.description && (
//             <p className="hero-cinematic-description">
//               {hero.description}
//             </p>
//           )}

//           {/* CTA */}
//           {hero.buttonText && hero.buttonLink && (
//             <div className="hero-cinematic-actions">
//               <a href={hero.buttonLink} className="cinematic-cta-primary">
//                 <span className="cta-text">{hero.buttonText}</span>
//                 <span className="cta-arrow">
//                   <FaArrowRight />
//                 </span>
//               </a>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Side Elements */}
//       <div className="hero-cinematic-side">
//         <div className="side-vertical-text">
//           <span>EST. 2025</span>
//         </div>
//         <div className="side-vertical-line"></div>
//       </div>

//       {/* Navigation Arrows */}
//       {heroes.length > 1 && (
//         <>
//           <button
//             type="button"
//             className="cinematic-arrow cinematic-arrow-left"
//             onClick={handlePrevious}
//             aria-label="Previous slide"
//           >
//             <FaChevronLeft />
//           </button>
//           <button
//             type="button"
//             className="cinematic-arrow cinematic-arrow-right"
//             onClick={handleNext}
//             aria-label="Next slide"
//           >
//             <FaChevronRight />
//           </button>
//         </>
//       )}

//       {/* Bottom Controls */}
//       {heroes.length > 1 && (
//         <div className="hero-cinematic-bottom">
//           <div className="cinematic-progress">
//             {heroes.map((item, index) => (
//               <button
//                 key={item.id || index}
//                 type="button"
//                 className={`cinematic-progress-bar ${
//                   index === currentIndex ? "cinematic-progress-active" : ""
//                 }`}
//                 onClick={() => goToSlide(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//               >
//                 <span className="progress-fill"></span>
//               </button>
//             ))}
//           </div>
          
//           <div className="cinematic-counter">
//             <span className="counter-current">
//               {String(currentIndex + 1).padStart(2, "0")}
//             </span>
//             <span className="counter-separator">/</span>
//             <span className="counter-total">
//               {String(heroes.length).padStart(2, "0")}
//             </span>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;

// import {
//   useCallback,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import {
//   FaArrowRight,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// import heroService from "../../services/hero.service";

// import "./Hero.css";

// const Hero = () => {
//   const [heroes, setHeroes] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [loading, setLoading] = useState(true);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   const intervalRef = useRef(null);
//   const heroRef = useRef(null);

//   const API_URL =
//     import.meta.env.VITE_API_URL?.replace(
//       /\/api\/?$/,
//       ""
//     ) || "http://localhost:5000";

//   /* =====================================================
//      IMAGE URL
//   ===================================================== */

//   const getImageUrl = useCallback(
//     (image) => {
//       if (!image) return "";

//       if (
//         image.startsWith("http://") ||
//         image.startsWith("https://")
//       ) {
//         return image;
//       }

//       return `${API_URL}${
//         image.startsWith("/") ? image : `/${image}`
//       }`;
//     },
//     [API_URL]
//   );

//   /* =====================================================
//      FETCH
//   ===================================================== */

//   useEffect(() => {
//     let mounted = true;

//     const loadHeroes = async () => {
//       try {
//         const response = await heroService.getHero();

//         let data = response?.data || [];

//         if (!Array.isArray(data)) {
//           data = data ? [data] : [];
//         }

//         data = data
//           .filter(
//             (item) =>
//               item &&
//               item.isActive !== false
//           )
//           .sort(
//             (a, b) =>
//               Number(a.sortOrder ?? 0) -
//               Number(b.sortOrder ?? 0)
//           );

//         if (mounted) {
//           setHeroes(data);
//           setCurrentIndex(0);
//         }
//       } catch (error) {
//         console.error(
//           "Failed to load hero:",
//           error
//         );

//         if (mounted) {
//           setHeroes([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadHeroes();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /* =====================================================
//      SLIDER
//   ===================================================== */

//   const stopSlider = useCallback(() => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   }, []);

//   const startSlider = useCallback(() => {
//     stopSlider();

//     if (heroes.length <= 1) return;

//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((index) =>
//         index === heroes.length - 1
//           ? 0
//           : index + 1
//       );
//     }, 7000);
//   }, [heroes.length, stopSlider]);

//   useEffect(() => {
//     if (
//       heroes.length > 1 &&
//       !isHovered &&
//       !isPaused
//     ) {
//       startSlider();
//     } else {
//       stopSlider();
//     }

//     return stopSlider;
//   }, [
//     heroes.length,
//     isHovered,
//     isPaused,
//     startSlider,
//     stopSlider,
//   ]);

//   /* =====================================================
//      NAVIGATION
//   ===================================================== */

//   const previousSlide = useCallback(() => {
//     setCurrentIndex((index) =>
//       index === 0
//         ? heroes.length - 1
//         : index - 1
//     );

//     setIsPaused(false);
//   }, [heroes.length]);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((index) =>
//       index === heroes.length - 1
//         ? 0
//         : index + 1
//     );

//     setIsPaused(false);
//   }, [heroes.length]);

//   const selectSlide = (index) => {
//     setCurrentIndex(index);
//     setIsPaused(false);
//   };

//   /* =====================================================
//      KEYBOARD
//   ===================================================== */

//   useEffect(() => {
//     const handleKeyboard = (event) => {
//       if (event.key === "ArrowLeft") {
//         previousSlide();
//       }

//       if (event.key === "ArrowRight") {
//         nextSlide();
//       }

//       if (event.key === " ") {
//         event.preventDefault();
//         setIsPaused((value) => !value);
//       }
//     };

//     window.addEventListener(
//       "keydown",
//       handleKeyboard
//     );

//     return () =>
//       window.removeEventListener(
//         "keydown",
//         handleKeyboard
//       );
//   }, [previousSlide, nextSlide]);

//   /* =====================================================
//      TOUCH
//   ===================================================== */

//   const handleTouchStart = (event) => {
//     setTouchStart(
//       event.targetTouches[0].clientX
//     );
//   };

//   const handleTouchMove = (event) => {
//     setTouchEnd(
//       event.targetTouches[0].clientX
//     );
//   };

//   const handleTouchEnd = () => {
//     if (
//       touchStart === null ||
//       touchEnd === null
//     ) {
//       return;
//     }

//     const distance =
//       touchStart - touchEnd;

//     if (Math.abs(distance) > 50) {
//       if (distance > 0) {
//         nextSlide();
//       } else {
//         previousSlide();
//       }
//     }

//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   /* =====================================================
//      MOUSE PARALLAX
//   ===================================================== */

//   const handleMouseMove = (event) => {
//     if (!heroRef.current) return;

//     const rect =
//       heroRef.current.getBoundingClientRect();

//     const x =
//       ((event.clientX - rect.left) /
//         rect.width -
//         0.5) *
//       2;

//     const y =
//       ((event.clientY - rect.top) /
//         rect.height -
//         0.5) *
//       2;

//     setMousePosition({ x, y });
//   };

//   const resetMouse = () => {
//     setMousePosition({
//       x: 0,
//       y: 0,
//     });
//   };

//   /* =====================================================
//      LOADING
//   ===================================================== */

//   if (loading) {
//     return (
//       <section className="snga-hero snga-hero-loader">
//         <div className="snga-loader-content">
//           <span>SNGA</span>
//           <div>
//             <i />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (!heroes.length) return null;

//   const activeHero = heroes[currentIndex];

//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (
//     <section
//       ref={heroRef}
//       className="snga-hero"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => {
//         setIsHovered(false);
//         resetMouse();
//       }}
//       onMouseMove={handleMouseMove}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       aria-label="Shifan Noor Global Academy"
//     >
//       {/* =================================================
//           MEDIA
//       ================================================= */}

//       <div className="snga-hero-media">
//         {heroes.map((item, index) => {
//           const image = getImageUrl(item.image);

//           return (
//             <div
//               key={item.id || index}
//               className={`snga-hero-media-slide ${
//                 index === currentIndex
//                   ? "active"
//                   : ""
//               }`}
//             >
//               {image && (
//                 <img
//                   src={image}
//                   alt=""
//                   aria-hidden="true"
//                   loading={
//                     index === currentIndex
//                       ? "eager"
//                       : "lazy"
//                   }
//                   style={{
//                     transform: `
//                       scale(1.035)
//                       translate3d(
//                         ${mousePosition.x * -8}px,
//                         ${mousePosition.y * -8}px,
//                         0
//                       )
//                     `,
//                   }}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* =================================================
//           TONAL LAYERS
//       ================================================= */}

//       <div className="snga-hero-tone" />

//       <div className="snga-hero-left-shade" />

//       <div className="snga-hero-bottom-shade" />

//       {/* =================================================
//           TOP BAR
//       ================================================= */}

//       <div className="snga-hero-top">
//         <div className="snga-hero-top-brand">
//           <span className="brand-dot" />

//           <span>
//             SHIFAN NOOR GLOBAL ACADEMY
//           </span>
//         </div>

//         <div className="snga-hero-top-meta">
//           <span>CBSE</span>
//           <span className="meta-divider" />
//           <span>RAMANATHAPURAM</span>
//         </div>
//       </div>

//       {/* =================================================
//           MAIN CONTENT
//       ================================================= */}

//       <div className="snga-hero-inner">
//         <div
//           className="snga-hero-copy"
//           key={activeHero.id || currentIndex}
//         >
//           {activeHero.subtitle && (
//             <div className="snga-hero-kicker">
//               <span />
//               <p>{activeHero.subtitle}</p>
//             </div>
//           )}

//           {activeHero.title && (
//             <h1 className="snga-hero-title">
//               {activeHero.title}
//             </h1>
//           )}

//           {activeHero.description && (
//             <p className="snga-hero-description">
//               {activeHero.description}
//             </p>
//           )}

//           {activeHero.buttonText &&
//             activeHero.buttonLink && (
//               <a
//                 href={activeHero.buttonLink}
//                 className="snga-hero-cta"
//               >
//                 <span>
//                   {activeHero.buttonText}
//                 </span>

//                 <span className="cta-icon">
//                   <FaArrowRight />
//                 </span>
//               </a>
//             )}
//         </div>
//       </div>

//       {/* =================================================
//           RIGHT INFORMATION
//       ================================================= */}

//       <div className="snga-hero-side-info">
//         <span>01</span>
//         <span className="side-line" />
//         <span>LEARN · GROW · LEAD</span>
//       </div>

//       {/* =================================================
//           NAVIGATION
//       ================================================= */}

//       {heroes.length > 1 && (
//         <div className="snga-hero-controls">
//           <button
//             type="button"
//             onClick={previousSlide}
//             aria-label="Previous hero"
//           >
//             <FaChevronLeft />
//           </button>

//           <button
//             type="button"
//             onClick={nextSlide}
//             aria-label="Next hero"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       )}

//       {/* =================================================
//           BOTTOM
//       ================================================= */}

//       <div className="snga-hero-bottom">
//         {heroes.length > 1 && (
//           <div className="snga-hero-pagination">
//             {heroes.map((item, index) => (
//               <button
//                 key={item.id || index}
//                 type="button"
//                 className={
//                   index === currentIndex
//                     ? "active"
//                     : ""
//                 }
//                 onClick={() =>
//                   selectSlide(index)
//                 }
//                 aria-label={`Slide ${
//                   index + 1
//                 }`}
//               >
//                 <span />
//               </button>
//             ))}
//           </div>
//         )}

//         <div className="snga-hero-index">
//           <strong>
//             {String(
//               currentIndex + 1
//             ).padStart(2, "0")}
//           </strong>

//           <span>/</span>

//           <small>
//             {String(
//               heroes.length
//             ).padStart(2, "0")}
//           </small>
//         </div>

//         <button
//           type="button"
//           className="snga-hero-pause"
//           onClick={() =>
//             setIsPaused((value) => !value)
//           }
//           aria-label={
//             isPaused
//               ? "Play slideshow"
//               : "Pause slideshow"
//           }
//         >
//           {isPaused ? "PLAY" : "PAUSE"}
//         </button>
//       </div>

//       {/* =================================================
//           SCROLL
//       ================================================= */}

//       <div className="snga-hero-scroll">
//         <span>EXPLORE</span>
//         <i />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";

import heroService from "../../services/hero.service";

import "./Hero.css";

const Hero = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);

  const intervalRef = useRef(null);
  const heroRef = useRef(null);
  const slideRef = useRef(null);

  const API_URL =
    import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
    "http://localhost:5000";

  /* =====================================================
     IMAGE URL
  ===================================================== */

  const getImageUrl = useCallback(
    (image) => {
      if (!image) return "";
      if (image.startsWith("http://") || image.startsWith("https://")) {
        return image;
      }
      return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
    },
    [API_URL]
  );

  /* =====================================================
     FETCH
  ===================================================== */

  useEffect(() => {
    let mounted = true;

    const loadHeroes = async () => {
      try {
        const response = await heroService.getHero();
        let data = response?.data || [];

        if (!Array.isArray(data)) {
          data = data ? [data] : [];
        }

        data = data
          .filter((item) => item && item.isActive !== false)
          .sort((a, b) => Number(a.sortOrder ?? 0) - Number(b.sortOrder ?? 0));

        if (mounted) {
          setHeroes(data);
          setCurrentIndex(0);
        }
      } catch (error) {
        console.error("Failed to load hero:", error);
        if (mounted) {
          setHeroes([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadHeroes();

    return () => {
      mounted = false;
    };
  }, []);

  /* =====================================================
     SLIDER
  ===================================================== */

  const stopSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startSlider = useCallback(() => {
    stopSlider();
    if (heroes.length <= 1) return;

    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        setDirection(1);
        setCurrentIndex((index) => (index === heroes.length - 1 ? 0 : index + 1));
      }
    }, 6000);
  }, [heroes.length, stopSlider, isTransitioning]);

  useEffect(() => {
    if (heroes.length > 1 && !isHovered && !isPaused) {
      startSlider();
    } else {
      stopSlider();
    }

    return stopSlider;
  }, [heroes.length, isHovered, isPaused, startSlider, stopSlider]);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const goToSlide = useCallback(
    (index) => {
      if (index === currentIndex || isTransitioning) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setIsPaused(false);
    },
    [currentIndex, isTransitioning]
  );

  const previousSlide = useCallback(() => {
    if (isTransitioning) return;
    setDirection(-1);
    setCurrentIndex((index) => (index === 0 ? heroes.length - 1 : index - 1));
    setIsPaused(false);
  }, [heroes.length, isTransitioning]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setDirection(1);
    setCurrentIndex((index) => (index === heroes.length - 1 ? 0 : index + 1));
    setIsPaused(false);
  }, [heroes.length, isTransitioning]);

  const selectSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsPaused(false);
  };

  /* =====================================================
     KEYBOARD
  ===================================================== */

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === "ArrowLeft") {
        previousSlide();
      }
      if (event.key === "ArrowRight") {
        nextSlide();
      }
      if (event.key === " ") {
        event.preventDefault();
        setIsPaused((value) => !value);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [previousSlide, nextSlide]);

  /* =====================================================
     TOUCH
  ===================================================== */

  const handleTouchStart = (event) => {
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  /* =====================================================
     MOUSE PARALLAX
  ===================================================== */

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setMousePosition({ x, y });
  };

  const resetMouse = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  /* =====================================================
     TRANSITION HANDLER
  ===================================================== */

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <section className="snga-hero snga-hero-loader">
        <div className="snga-loader-content">
          <span className="loader-logo">SNGA</span>
          <div className="loader-bar">
            <i />
          </div>
        </div>
      </section>
    );
  }

  if (!heroes.length) return null;

  const activeHero = heroes[currentIndex];
  const prevIndex = currentIndex === 0 ? heroes.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === heroes.length - 1 ? 0 : currentIndex + 1;

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <section
      ref={heroRef}
      className="snga-hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetMouse();
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Shifan Noor Global Academy"
    >
      {/* =================================================
          BACKGROUND OVERLAY - CINEMATIC GRADIENT
      ================================================= */}
      <div className="snga-hero-overlay">
        <div className="snga-hero-gradient" />
        <div className="snga-hero-vignette" />
      </div>

      {/* =================================================
          MEDIA CAROUSEL
      ================================================= */}
      <div className="snga-hero-carousel" ref={slideRef}>
        {heroes.map((item, index) => {
          const image = getImageUrl(item.image);
          const isActive = index === currentIndex;
          const isPrev = index === prevIndex;
          const isNext = index === nextIndex;

          let slideClass = "snga-hero-slide";
          if (isActive) slideClass += " active";
          if (isPrev) slideClass += " prev";
          if (isNext) slideClass += " next";
          if (isTransitioning) slideClass += " transitioning";

          return (
            <div
              key={item.id || index}
              className={slideClass}
              style={{
                transform: isActive
                  ? `scale(1.02) translate3d(${mousePosition.x * -6}px, ${mousePosition.y * -6}px, 0)`
                  : isPrev
                  ? `translate3d(-30%, 0, 0) scale(0.92)`
                  : isNext
                  ? `translate3d(30%, 0, 0) scale(0.92)`
                  : `translate3d(0, 0, 0) scale(0.85)`,
                opacity: isActive ? 1 : isPrev || isNext ? 0.6 : 0,
                zIndex: isActive ? 10 : isPrev || isNext ? 5 : 0,
              }}
            >
              {image && (
                <img
                  src={image}
                  alt={item.title || "Hero slide"}
                  loading={isActive ? "eager" : "lazy"}
                  className="snga-hero-image"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* =================================================
          CONTENT OVERLAY
      ================================================= */}
      <div className="snga-hero-content">
        {/* TOP BAR */}
        <div className="snga-hero-top">
          <div className="snga-hero-brand">
            <span className="brand-dot" />
            <span className="brand-name">SHIFAN NOOR GLOBAL ACADEMY</span>
          </div>
          <div className="snga-hero-meta">
            <span>CBSE</span>
            <span className="meta-divider" />
            <span>RAMANATHAPURAM</span>
          </div>
        </div>

        {/* MAIN COPY */}
        <div className="snga-hero-copy-wrapper">
          <div
            className="snga-hero-copy"
            key={activeHero.id || currentIndex}
          >
            {activeHero.subtitle && (
              <div className="snga-hero-kicker">
                <span className="kicker-line" />
                <p>{activeHero.subtitle}</p>
              </div>
            )}

            {activeHero.title && (
              <h1 className="snga-hero-title">
                <span className="title-line">{activeHero.title}</span>
              </h1>
            )}

            {activeHero.description && (
              <p className="snga-hero-description">
                {activeHero.description}
              </p>
            )}

            {activeHero.buttonText && activeHero.buttonLink && (
              <a
                href={activeHero.buttonLink}
                className="snga-hero-cta"
              >
                <span>{activeHero.buttonText}</span>
                <span className="cta-icon">
                  <FaArrowRight />
                </span>
              </a>
            )}
          </div>
        </div>

        {/* SIDE INFO */}
        <div className="snga-hero-side-info">
          <span className="side-number">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="side-line" />
          <span className="side-text">LEARN · GROW · LEAD</span>
        </div>
      </div>

      {/* =================================================
          CONTROLS
      ================================================= */}
      {heroes.length > 1 && (
        <>
          <button
            type="button"
            className="snga-hero-control snga-hero-control-prev"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            className="snga-hero-control snga-hero-control-next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* =================================================
          BOTTOM BAR
      ================================================= */}
      <div className="snga-hero-bottom">
        {heroes.length > 1 && (
          <div className="snga-hero-pagination">
            {heroes.map((item, index) => (
              <button
                key={item.id || index}
                type="button"
                className={`snga-hero-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => selectSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span />
              </button>
            ))}
          </div>
        )}

        <div className="snga-hero-index">
          <strong>{String(currentIndex + 1).padStart(2, "0")}</strong>
          <span>/</span>
          <small>{String(heroes.length).padStart(2, "0")}</small>
        </div>

        <button
          type="button"
          className="snga-hero-pause"
          onClick={() => setIsPaused((value) => !value)}
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? <FaPlay /> : <FaPause />}
        </button>
      </div>

      {/* =================================================
          SCROLL INDICATOR
      ================================================= */}
      <div className="snga-hero-scroll">
        <span>EXPLORE</span>
        <div className="scroll-line">
          <i />
        </div>
      </div>
    </section>
  );
};

export default Hero;