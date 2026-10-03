
// import {
//   useCallback,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import { Link } from "react-router-dom";

// import heroService from "../../services/hero.service";

// import "./Hero.css";

// const FALLBACK_IMAGE =
//   "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2400&q=90";

// const Hero = () => {
//   const [heroes, setHeroes] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [paused, setPaused] = useState(false);
//   const [imageReady, setImageReady] = useState(false);

//   const intervalRef = useRef(null);
//   const touchStartRef = useRef(null);
//   const touchEndRef = useRef(null);

//   const API_URL =
//     import.meta.env.VITE_API_URL?.replace(
//       /\/api\/?$/,
//       ""
//     ) || "http://localhost:5000";

//   /* =====================================================
//      IMAGE
//   ====================================================== */

//   const getImageUrl = useCallback(
//     (image) => {
//       if (!image) return FALLBACK_IMAGE;

//       if (
//         image.startsWith("http://") ||
//         image.startsWith("https://")
//       ) {
//         return image;
//       }

//       return `${API_URL}${
//         image.startsWith("/")
//           ? image
//           : `/${image}`
//       }`;
//     },
//     [API_URL]
//   );

//   /* =====================================================
//      LOAD
//   ====================================================== */

//   useEffect(() => {
//     let mounted = true;

//     const loadHeroes = async () => {
//       try {
//         const response =
//           await heroService.getHero();

//         let data =
//           response?.data || [];

//         if (!Array.isArray(data)) {
//           data = data
//             ? [data]
//             : [];
//         }

//         const activeHeroes =
//           data
//             .filter(
//               (item) =>
//                 item &&
//                 item.isActive !== false
//             )
//             .sort(
//               (a, b) =>
//                 Number(
//                   a.sortOrder ?? 0
//                 ) -
//                 Number(
//                   b.sortOrder ?? 0
//                 )
//             );

//         if (mounted) {
//           setHeroes(activeHeroes);
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
//      IMAGE RESET
//   ====================================================== */

//   useEffect(() => {
//     setImageReady(false);
//   }, [currentIndex]);

//   /* =====================================================
//      NAVIGATION
//   ====================================================== */

//   const nextSlide = useCallback(() => {
//     if (heroes.length <= 1) return;

//     setCurrentIndex(
//       (current) =>
//         current >= heroes.length - 1
//           ? 0
//           : current + 1
//     );
//   }, [heroes.length]);

//   const previousSlide =
//     useCallback(() => {
//       if (heroes.length <= 1) return;

//       setCurrentIndex(
//         (current) =>
//           current <= 0
//             ? heroes.length - 1
//             : current - 1
//       );
//     }, [heroes.length]);

//   /* =====================================================
//      AUTOPLAY
//   ====================================================== */

//   useEffect(() => {
//     if (
//       heroes.length <= 1 ||
//       paused
//     ) {
//       return;
//     }

//     intervalRef.current =
//       setInterval(
//         nextSlide,
//         7000
//       );

//     return () => {
//       clearInterval(
//         intervalRef.current
//       );
//     };
//   }, [
//     heroes.length,
//     paused,
//     nextSlide,
//   ]);

//   /* =====================================================
//      KEYBOARD
//   ====================================================== */

//   useEffect(() => {
//     const handleKeyDown = (
//       event
//     ) => {
//       if (
//         event.key ===
//         "ArrowRight"
//       ) {
//         nextSlide();
//       }

//       if (
//         event.key ===
//         "ArrowLeft"
//       ) {
//         previousSlide();
//       }

//       if (
//         event.key ===
//         " "
//       ) {
//         event.preventDefault();

//         setPaused(
//           (value) => !value
//         );
//       }
//     };

//     window.addEventListener(
//       "keydown",
//       handleKeyDown
//     );

//     return () => {
//       window.removeEventListener(
//         "keydown",
//         handleKeyDown
//       );
//     };
//   }, [
//     nextSlide,
//     previousSlide,
//   ]);

//   /* =====================================================
//      TOUCH
//   ====================================================== */

//   const handleTouchStart = (
//     event
//   ) => {
//     touchStartRef.current =
//       event.touches[0].clientX;
//   };

//   const handleTouchMove = (
//     event
//   ) => {
//     touchEndRef.current =
//       event.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     const start =
//       touchStartRef.current;

//     const end =
//       touchEndRef.current;

//     if (
//       start === null ||
//       end === null
//     ) {
//       return;
//     }

//     const distance =
//       start - end;

//     if (
//       Math.abs(distance) >
//       50
//     ) {
//       if (distance > 0) {
//         nextSlide();
//       } else {
//         previousSlide();
//       }
//     }

//     touchStartRef.current =
//       null;

//     touchEndRef.current =
//       null;
//   };

//   /* =====================================================
//      LOADING
//   ====================================================== */

//   if (loading) {
//     return (
//       <section className="snga-film-hero snga-film-loading">
//         <div className="snga-film-loader">
//           <span>SNGA</span>
//           <i />
//         </div>
//       </section>
//     );
//   }

//   if (!heroes.length) {
//     return null;
//   }

//   const activeHero =
//     heroes[currentIndex];

//   const buttonLink =
//     activeHero.buttonLink ||
//     "/admissions";

//   const internalLink =
//     buttonLink.startsWith("/");

//   /* =====================================================
//      RENDER
//   ====================================================== */

//   return (
//     <section
//       className="snga-film-hero"
//       onTouchStart={
//         handleTouchStart
//       }
//       onTouchMove={
//         handleTouchMove
//       }
//       onTouchEnd={
//         handleTouchEnd
//       }
//     >
//       {/* =================================================
//           CINEMATIC IMAGE
//       ================================================== */}

//       <div className="snga-film-media">
//         {heroes.map(
//           (hero, index) => (
//             <div
//               key={
//                 hero.id ||
//                 index
//               }
//               className={`snga-film-slide ${
//                 index ===
//                 currentIndex
//                   ? "active"
//                   : ""
//               }`}
//             >
//               <img
//                 src={getImageUrl(
//                   hero.image
//                 )}
//                 alt={
//                   hero.title ||
//                   "Shifan Noor Global Academy"
//                 }
//                 loading={
//                   index ===
//                   currentIndex
//                     ? "eager"
//                     : "lazy"
//                 }
//                 onLoad={() => {
//                   if (
//                     index ===
//                     currentIndex
//                   ) {
//                     setImageReady(
//                       true
//                     );
//                   }
//                 }}
//                 onError={(
//                   event
//                 ) => {
//                   event.currentTarget.onerror =
//                     null;

//                   event.currentTarget.src =
//                     FALLBACK_IMAGE;

//                   if (
//                     index ===
//                     currentIndex
//                   ) {
//                     setImageReady(
//                       true
//                     );
//                   }
//                 }}
//               />
//             </div>
//           )
//         )}
//       </div>

//       {/* =================================================
//           CINEMATIC TONE
//       ================================================== */}

//       <div className="snga-film-tone" />

//       {/* =================================================
//           FILM FRAME
//       ================================================== */}

//       <div className="snga-film-border" />

//       {/* =================================================
//           TOP BAR
//       ================================================== */}

//       <header className="snga-film-header">

//         <Link
//           to="/"
//           className="snga-film-brand"
//         >
//           <div className="snga-film-brand-logo">
//             <img
//               src="/images/logo.png"
//               alt="SNGA"
//             />
//           </div>

//           <div className="snga-film-brand-name">
//             <strong>
//               SHIFAN NOOR
//             </strong>

//             <span>
//               GLOBAL ACADEMY
//             </span>
//           </div>
//         </Link>

//         <div className="snga-film-header-center">
//           <span>
//             SHIFAN NOOR GLOBAL ACADEMY
//           </span>
//         </div>

//         <div className="snga-film-header-right">
//           <span>CBSE</span>
//           <i />
//           <span>TN · INDIA</span>
//         </div>

//       </header>

//       {/* =================================================
//           FILM TITLE / MAIN CONTENT
//       ================================================== */}

//       <main className="snga-film-content">

//         <div
//           className={`snga-film-copy ${
//             imageReady
//               ? "visible"
//               : ""
//           }`}
//           key={
//             activeHero.id ||
//             currentIndex
//           }
//         >

//           {activeHero.subtitle && (
//             <div className="snga-film-kicker">
//               <span>
//                 SCENE{" "}
//                 {String(
//                   currentIndex + 1
//                 ).padStart(
//                   2,
//                   "0"
//                 )}
//               </span>

//               <i />

//               <p>
//                 {activeHero.subtitle}
//               </p>
//             </div>
//           )}

//           {activeHero.title && (
//             <h1>
//               {activeHero.title}
//             </h1>
//           )}

//           {activeHero.description && (
//             <p className="snga-film-description">
//               {
//                 activeHero.description
//               }
//             </p>
//           )}

//           {activeHero.buttonText && (
//             <div className="snga-film-cta-wrap">

//               {internalLink ? (
//                 <Link
//                   to={buttonLink}
//                   className="snga-film-cta"
//                 >
//                   <span>
//                     {
//                       activeHero.buttonText
//                     }
//                   </span>

//                   <b>↗</b>
//                 </Link>
//               ) : (
//                 <a
//                   href={
//                     buttonLink
//                   }
//                   className="snga-film-cta"
//                 >
//                   <span>
//                     {
//                       activeHero.buttonText
//                     }
//                   </span>

//                   <b>↗</b>
//                 </a>
//               )}

//             </div>
//           )}

//         </div>

//       </main>

//       {/* =================================================
//           LARGE BACKGROUND NUMBER
//       ================================================== */}

//       <div className="snga-film-big-number">
//         {String(
//           currentIndex + 1
//         ).padStart(2, "0")}
//       </div>

//       {/* =================================================
//           SIDE TEXT
//       ================================================== */}

//       <div className="snga-film-side-label">
//         <span>LEARN</span>
//         <i />
//         <span>GROW</span>
//         <i />
//         <span>LEAD</span>
//       </div>

//       {/* =================================================
//           BOTTOM FILM BAR
//       ================================================== */}

//       <footer className="snga-film-footer">

//         <div className="snga-film-footer-left">
//           <span>
//             VENKULAM
//           </span>

//           <i />

//           <span>
//             RAMANATHAPURAM
//           </span>
//         </div>

//         {heroes.length >
//           1 && (
//           <div className="snga-film-controls">

//             <button
//               type="button"
//               onClick={
//                 previousSlide
//               }
//               className="snga-film-arrow"
//               aria-label="Previous slide"
//             >
//               ←
//             </button>

//             <div className="snga-film-progress">
//               {heroes.map(
//                 (
//                   hero,
//                   index
//                 ) => (
//                   <button
//                     key={
//                       hero.id ||
//                       index
//                     }
//                     type="button"
//                     className={
//                       index ===
//                       currentIndex
//                         ? "active"
//                         : ""
//                     }
//                     onClick={() => {
//                       setCurrentIndex(
//                         index
//                       );
//                       setPaused(
//                         false
//                       );
//                     }}
//                     aria-label={`Go to slide ${
//                       index + 1
//                     }`}
//                   >
//                     <span />
//                   </button>
//                 )
//               )}
//             </div>

//             <button
//               type="button"
//               onClick={
//                 nextSlide
//               }
//               className="snga-film-arrow"
//               aria-label="Next slide"
//             >
//               →
//             </button>

//             <div className="snga-film-counter">
//               <strong>
//                 {String(
//                   currentIndex +
//                     1
//                 ).padStart(
//                   2,
//                   "0"
//                 )}
//               </strong>

//               <span>/</span>

//               <small>
//                 {String(
//                   heroes.length
//                 ).padStart(
//                   2,
//                   "0"
//                 )}
//               </small>
//             </div>

//             <button
//               type="button"
//               className="snga-film-play"
//               onClick={() =>
//                 setPaused(
//                   (value) =>
//                     !value
//                 )
//               }
//             >
//               {paused
//                 ? "PLAY"
//                 : "PAUSE"}
//             </button>

//           </div>
//         )}

//       </footer>

//       {/* =================================================
//           FILM MARKER
//       ================================================== */}

//       <div className="snga-film-reel">
//         <span>SNGA</span>
//         <span>01</span>
//       </div>

//     </section>
//   );
// };

// export default Hero;


import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroService from "../../services/hero.service";
import "./Hero.css";

const FALLBACK_HERO = [
  {
    id: "fallback-1",
    eyebrow: "SHIFAN NOOR GLOBAL ACADEMY",
    title: "Where curiosity becomes capability.",
    subtitle:
      "An education shaped by knowledge, character and confidence.",
    description:
      "A learning environment designed to help every student discover, grow and lead.",
    buttonText: "Explore SNGA",
    buttonLink: "/about",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "fallback-2",
    eyebrow: "THE LEARNING CAMPUS",
    title: "Room to learn. Space to become.",
    subtitle:
      "A 13.5-acre campus created around the experience of learning.",
    description:
      "From classrooms and laboratories to sport and community life, learning continues beyond the timetable.",
    buttonText: "Discover Our Campus",
    buttonLink: "/infrastructure",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "fallback-3",
    eyebrow: "THE SNGA EXPERIENCE",
    title: "Education for the life ahead.",
    subtitle:
      "Building knowledge. Strengthening character. Growing confidence.",
    description:
      "Every part of school life is an opportunity to develop the person behind the student.",
    buttonText: "Our Vision",
    buttonLink: "/vision-mission",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90",
  },
];

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getImageUrl = (image) => {
  if (!image) return "";

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:")
  ) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("next");
  const [isLeaving, setIsLeaving] = useState(false);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const loadHero = async () => {
      try {
        const response = await heroService.getHero();

        const items = Array.isArray(response)
          ? response
          : response?.data || [];

        const formatted = items
          .filter((item) => item?.isActive !== false)
          .sort(
            (a, b) =>
              Number(a.sortOrder ?? 0) - Number(b.sortOrder ?? 0)
          );

        if (mounted) {
          setSlides(formatted.length ? formatted : FALLBACK_HERO);
        }
      } catch (error) {
        console.error("Failed to load hero:", error);

        if (mounted) {
          setSlides(FALLBACK_HERO);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadHero();

    return () => {
      mounted = false;
    };
  }, []);

  const activeSlide = slides[activeIndex];

  const preparedSlides = useMemo(() => {
    return slides.map((slide, index) => ({
      ...slide,
      image: getImageUrl(slide.image),
      number: String(index + 1).padStart(2, "0"),
    }));
  }, [slides]);

  const changeSlide = (nextIndex, slideDirection = "next") => {
    if (slides.length <= 1) return;
    if (isLeaving) return;

    setDirection(slideDirection);
    setIsLeaving(true);

    window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsLeaving(false);
    }, 420);
  };

  const nextSlide = () => {
    const nextIndex =
      activeIndex === slides.length - 1
        ? 0
        : activeIndex + 1;

    changeSlide(nextIndex, "next");
  };

  const previousSlide = () => {
    const previousIndex =
      activeIndex === 0
        ? slides.length - 1
        : activeIndex - 1;

    changeSlide(previousIndex, "previous");
  };

  useEffect(() => {
    if (
      isPaused ||
      slides.length <= 1 ||
      isLoading
    ) {
      return undefined;
    }

    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      window.clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused, slides.length, isLoading]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }

      if (event.key === " ") {
        event.preventDefault();
        setIsPaused((current) => !current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, slides.length, isLeaving]);

  const handleTouchStart = (event) => {
    const touch = event.changedTouches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touch = event.changedTouches[0];

    const deltaX =
      touch.clientX - touchStartX.current;

    const deltaY =
      touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 50) return;

    if (Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  };

  if (isLoading) {
    return (
      <section className="snga-cinematic-hero snga-cinematic-hero--loading">
        <div className="snga-cinematic-loader">
          <span>SNGA</span>
          <i />
          <small>SHIFAN NOOR GLOBAL ACADEMY</small>
        </div>
      </section>
    );
  }

  if (!preparedSlides.length) {
    return null;
  }

  return (
    <section
      className={`snga-cinematic-hero ${
        isLeaving
          ? `snga-cinematic-hero--leaving-${direction}`
          : ""
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ==================================================
          IMAGE STAGE
         ================================================== */}

      <div className="snga-cinematic-stage">
        {preparedSlides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id ?? index}
              className={`snga-cinematic-slide ${
                isActive
                  ? "snga-cinematic-slide--active"
                  : ""
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt=""
              />

              <div className="snga-cinematic-slide-wash" />
              <div className="snga-cinematic-slide-noise" />
            </div>
          );
        })}
      </div>

      {/* ==================================================
          ARCHITECTURAL GRID
         ================================================== */}

      <div className="snga-cinematic-grid">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* ==================================================
          TOP NAVIGATION
         ================================================== */}

      <header className="snga-cinematic-header">
        <Link
          to="/"
          className="snga-cinematic-brand"
        >
          <div className="snga-cinematic-brand-mark">
            <img
              src="/images/logo.png"
              alt="Shifan Noor Global Academy"
            />
          </div>

          <div className="snga-cinematic-brand-copy">
            <strong>
              SHIFAN NOOR
              <br />
              GLOBAL ACADEMY
            </strong>

            <span>
              RAMANATHAPURAM · TAMIL NADU
            </span>
          </div>
        </Link>

        <div className="snga-cinematic-header-center">
          <span>ESTABLISHED FOR LEARNING</span>
          <i />
          <span>CBSE · INDIA</span>
        </div>

        <Link
          to="/admissions"
          className="snga-cinematic-header-cta"
        >
          <span>Admissions</span>
          <b>↗</b>
        </Link>
      </header>

      {/* ==================================================
          MAIN EDITORIAL CONTENT
         ================================================== */}

      <div className="snga-cinematic-main">
        <div className="snga-cinematic-content">
          <div className="snga-cinematic-meta">
            <span>
              {activeSlide?.eyebrow ||
                "SHIFAN NOOR GLOBAL ACADEMY"}
            </span>

            <i />

            <span>
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div
            className={`snga-cinematic-heading ${
              isLeaving
                ? "snga-cinematic-heading--out"
                : ""
            }`}
          >
            <h1>
              {activeSlide?.title}
            </h1>

            <div className="snga-cinematic-rule" />

            {activeSlide?.subtitle && (
              <p className="snga-cinematic-subtitle">
                {activeSlide.subtitle}
              </p>
            )}

            {activeSlide?.description && (
              <p className="snga-cinematic-description">
                {activeSlide.description}
              </p>
            )}

            <div className="snga-cinematic-actions">
              {activeSlide?.buttonText &&
                activeSlide?.buttonLink && (
                  <Link
                    to={activeSlide.buttonLink}
                    className="snga-cinematic-primary"
                  >
                    <span>
                      {activeSlide.buttonText}
                    </span>

                    <b>↗</b>
                  </Link>
                )}

              <Link
                to="/about"
                className="snga-cinematic-discover"
              >
                <span>Discover SNGA</span>
                <i />
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            LARGE SCENE NUMBER
           ================================================== */}

        <div className="snga-cinematic-scene-number">
          <span>
            {activeSlide?.number}
          </span>
        </div>
      </div>

      {/* ==================================================
          RIGHT SIDE MESSAGE
         ================================================== */}

      <div className="snga-cinematic-side">
        <div className="snga-cinematic-side-line" />

        <span>LEARN</span>
        <span>GROW</span>
        <span>LEAD</span>
      </div>

      {/* ==================================================
          BOTTOM INFORMATION
         ================================================== */}

      <footer className="snga-cinematic-footer">
        <div className="snga-cinematic-footer-left">
          <span className="snga-cinematic-footer-index">
            {activeSlide?.number}
          </span>

          <div>
            <strong>
              SHIFAN NOOR GLOBAL ACADEMY
            </strong>

            <small>
              A LEARNING CAMPUS IN RAMANATHAPURAM
            </small>
          </div>
        </div>

        <div className="snga-cinematic-footer-center">
          <span>13.5 ACRES</span>
          <i />
          <span>LEARNING CAMPUS</span>
        </div>

        <div className="snga-cinematic-controls">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            ←
          </button>

          <div className="snga-cinematic-progress">
            {slides.map((slide, index) => (
              <button
                key={slide.id ?? index}
                type="button"
                className={
                  index === activeIndex
                    ? "is-active"
                    : ""
                }
                onClick={() =>
                  changeSlide(
                    index,
                    index > activeIndex
                      ? "next"
                      : "previous"
                  )
                }
                aria-label={`Go to slide ${
                  index + 1
                }`}
              >
                <span />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            →
          </button>

          <button
            type="button"
            className="snga-cinematic-play"
            onClick={() =>
              setIsPaused((current) => !current)
            }
            aria-label={
              isPaused
                ? "Play slideshow"
                : "Pause slideshow"
            }
          >
            {isPaused ? "PLAY" : "PAUSE"}
          </button>
        </div>
      </footer>

      {/* ==================================================
          SCROLL INDICATOR
         ================================================== */}

      <div className="snga-cinematic-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>

      {/* ==================================================
          RED ACCENT
         ================================================== */}

      <div className="snga-cinematic-accent" />
    </section>
  );
};

export default Hero;