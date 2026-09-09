import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaTimes,
  FaTrophy,
  FaAward,
  FaStar,
  FaMedal,
  FaGraduationCap,
  FaUsers,
  FaCalendarAlt,
  FaTag,
  FaEye,
  FaHeart,
  FaShare,
  FaSchool,
  FaPlay,
  FaQuoteLeft,
  FaRocket,
  FaCrown,
  FaCertificate,
  FaClipboardCheck,
} from "react-icons/fa";
import achievementService from "../services/achievement.service";
import "./Achievements.css";

import heroBg from "../assets/school.JPG";
import heroCircle from "../assets/about.png";
import ctaBg from "../assets/engaging.jpg";
// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  achievement1: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=800&q=80",
  achievement2: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
  achievement3: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  achievement4: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  achievement5: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  achievement6: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
};

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const directoryRef = useRef(null);
  const statsRef = useRef(null);
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
      { ref: heroRef, className: "sa-hero--visible" },
      { ref: introRef, className: "sa-intro--visible" },
      { ref: directoryRef, className: "sa-directory--visible" },
      { ref: statsRef, className: "sa-stats--visible" },
      { ref: ctaRef, className: "sa-cta--visible" },
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
  // FETCH ACHIEVEMENTS
  // =====================================================

  useEffect(() => {
    const loadAchievements = async () => {
      try {
        setLoading(true);
        setError("");

        // ✅ Use the public getPublishedAchievements method
        const response = await achievementService.getPublishedAchievements();

        // Handle different response structures
        const items = Array.isArray(response)
          ? response
          : response?.data || response?.achievements || [];

        setAchievements(items);
      } catch (err) {
        console.error("Failed to load achievements:", err);
        setError("Unable to load achievements. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadAchievements();
  }, []);

  // =====================================================
  // COMPUTED VALUES
  // =====================================================

  const categories = useMemo(() => {
    const values = achievements
      .map((item) => item.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [achievements]);

  const filteredAchievements = useMemo(() => {
    if (activeCategory === "All") {
      return achievements;
    }
    return achievements.filter((item) => item.category === activeCategory);
  }, [achievements, activeCategory]);

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
      month: "short",
      year: "numeric",
    }).format(parsedDate);
  };

  const openAchievement = (item) => {
    setSelectedAchievement(item);
    document.body.style.overflow = "hidden";
  };

  const closeAchievement = () => {
    setSelectedAchievement(null);
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

  const stats = [
    { number: achievements.length || "50+", label: "Achievements", icon: <FaTrophy /> },
    { number: "10+", label: "Categories", icon: <FaTag /> },
    { number: "25+", label: "Awards Won", icon: <FaAward /> },
    { number: "100+", label: "Students Recognized", icon: <FaUsers /> },
  ];

  return (
    <main className="sa-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sa-topbar">
        <div className="sa-container">
          <div className="sa-topbar__content">
            <span className="sa-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sa-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sa-hero">
        <div className="sa-hero__bg-wrapper">
          <div 
            className="sa-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sa-hero__bg-overlay" />
          <div className="sa-hero__bg-gradient" />
        </div>

        <div className="sa-container">
          <div className="sa-hero__inner">
            <div className="sa-hero__content">
              <div className="sa-hero__badge">
                <FaTrophy />
                ACHIEVEMENTS
              </div>

              <h1 className="sa-hero__title">
                Celebrating
                <br />
                <span className="sa-hero__highlight">Excellence.</span>
              </h1>

              <p className="sa-hero__desc">
                Discover the remarkable achievements of our students, faculty
                and the entire SNGA community.
              </p>

              {/* <div className="sa-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sa-hero__stat">
                    <span className="sa-hero__stat-icon">{stat.icon}</span>
                    <span className="sa-hero__stat-number">{stat.number}</span>
                    <span className="sa-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}

              {/* <div className="sa-hero__actions">
                <a href="#sa-directory" className="sa-hero__btn sa-hero__btn--primary">
                  <span>Explore Achievements</span>
                  <FaArrowRight />
                </a>
                <button className="sa-hero__btn sa-hero__btn--secondary">
                  <FaPlay />
                  <span>Watch Highlights</span>
                </button>
              </div> */}
            </div>

            <div className="sa-hero__image-wrapper">
              <div className="sa-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA Achievements" 
                  className="sa-hero__image-img"
                />
                <div className="sa-hero__image-ring" />
                {/* <div className="sa-hero__image-badge">
                  <span>Since 2015</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="sa-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sa-intro">
        <div className="sa-container">
          <div className="sa-intro__inner">
            <div className="sa-intro__header">
              <span className="sa-intro__label">OUR ACHIEVEMENTS</span>
              <h2 className="sa-intro__title">
                Every Success
                <span className="sa-intro__highlight">Tells a Story.</span>
              </h2>
            </div>

            <div className="sa-intro__content">
              <p>
                At Shifan Noor Global Academy, we take pride in the achievements
                of our students, faculty and the entire school community.
                From academic excellence to sports, arts and beyond, every
                success reflects dedication, hard work and the values we instill.
              </p>
              <p>
                Explore the milestones that make SNGA a place of excellence
                and inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          DIRECTORY - Achievements Grid
      ================================================= */}
      <section ref={directoryRef} className="sa-directory" id="sa-directory">
        <div className="sa-container">
          <div className="sa-directory__header">
            <div>
              <span className="sa-directory__label">ACHIEVEMENTS</span>
              <h2 className="sa-directory__title">
                Our <span className="sa-directory__highlight">Proud Moments.</span>
              </h2>
            </div>
            <p className="sa-directory__desc">
              Browse through our collection of achievements across various fields.
            </p>
          </div>

          {/* Filters */}
          {!loading && categories.length > 1 && (
            <div className="sa-directory__filters">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`sa-directory__filter ${
                    activeCategory === category ? "sa-directory__filter--active" : ""
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
            <div className="sa-directory__state">
              <div className="sa-directory__loader">
                <span />
                <span />
                <span />
              </div>
              <span>Loading achievements...</span>
            </div>
          )}

          {!loading && error && (
            <div className="sa-directory__state sa-directory__state--error">
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && filteredAchievements.length === 0 && (
            <div className="sa-directory__state sa-directory__state--empty">
              <div className="sa-directory__empty-icon">
                <FaTrophy />
              </div>
              <h3>No Achievements Yet</h3>
              <p>New achievements will appear here. Achievements can be published from the administration panel.</p>
            </div>
          )}

          {/* Achievement Grid */}
          {!loading && !error && filteredAchievements.length > 0 && (
            <div className="sa-directory__grid">
              {filteredAchievements.map((item, index) => {
                const itemId = item.id || item._id;
                const image = item.featuredImage || item.image;

                return (
                  <div key={itemId} className="sa-directory__card">
                    <button
                      type="button"
                      className="sa-directory__card-image"
                      onClick={() => openAchievement(item)}
                    >
                      {image ? (
                        <img
                          src={getImageUrl(image)}
                          alt={item.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="sa-directory__card-placeholder">
                          <FaTrophy />
                        </div>
                      )}
                      <div className="sa-directory__card-overlay">
                        <span className="sa-directory__card-badge">
                          {item.category || "Achievement"}
                        </span>
                        <span className="sa-directory__card-icon">
                          <FaTrophy />
                        </span>
                      </div>
                    </button>

                    <div className="sa-directory__card-content">
                      <div className="sa-directory__card-meta">
                        {item.category && (
                          <span className="sa-directory__card-category">
                            <FaTag />
                            {item.category}
                          </span>
                        )}
                        {item.date && (
                          <span className="sa-directory__card-date">
                            <FaCalendarAlt />
                            {formatDate(item.date)}
                          </span>
                        )}
                      </div>

                      <h3 className="sa-directory__card-title">{item.title}</h3>

                      {item.excerpt && (
                        <p className="sa-directory__card-desc">{item.excerpt}</p>
                      )}

                      <button
                        type="button"
                        className="sa-directory__card-link"
                        onClick={() => openAchievement(item)}
                      >
                        <span>View Achievement</span>
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
          STATS SECTION - Navy Background
      ================================================= */}
      <section ref={statsRef} className="sa-stats">
        <div className="sa-stats__bg" />

        <div className="sa-container">
          <div className="sa-stats__inner">
            <div className="sa-stats__header">
              <span className="sa-stats__label">BY THE NUMBERS</span>
              <h2 className="sa-stats__title">
                Impact That
                <br />
                <span className="sa-stats__highlight">Inspires.</span>
              </h2>
            </div>

            <div className="sa-stats__grid">
              <div className="sa-stats__card">
                <div className="sa-stats__card-icon">
                  <FaTrophy />
                </div>
                <span className="sa-stats__card-number">50+</span>
                <span className="sa-stats__card-label">Achievements</span>
              </div>
              <div className="sa-stats__card">
                <div className="sa-stats__card-icon">
                  <FaAward />
                </div>
                <span className="sa-stats__card-number">25+</span>
                <span className="sa-stats__card-label">Awards Won</span>
              </div>
              <div className="sa-stats__card">
                <div className="sa-stats__card-icon">
                  <FaUsers />
                </div>
                <span className="sa-stats__card-number">100+</span>
                <span className="sa-stats__card-label">Students Recognized</span>
              </div>
              <div className="sa-stats__card">
                <div className="sa-stats__card-icon">
                  <FaGraduationCap />
                </div>
                <span className="sa-stats__card-number">10+</span>
                <span className="sa-stats__card-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="sa-cta">
        <div className="sa-cta__bg-wrapper">
          <div 
            className="sa-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sa-cta__bg-overlay" />
          <div className="sa-cta__bg-gradient" />
        </div>

        <div className="sa-container">
          <div className="sa-cta__content">
            <div className="sa-cta__badge">
              <FaTrophy />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sa-cta__title">
              Be Part of
              <br />
              <span className="sa-cta__highlight">Our Success Story.</span>
            </h2>

            <p className="sa-cta__desc">
              Join us in celebrating excellence and creating more success
              stories at SNGA.
            </p>

            <div className="sa-cta__actions">
              <Link to="/admissions" className="sa-cta__btn sa-cta__btn--primary">
                <span>Join SNGA</span>
                <FaArrowRight />
              </Link>
              <Link to="/gallery" className="sa-cta__btn sa-cta__btn--secondary">
                <span>View Gallery</span>
              </Link>
            </div>

            <div className="sa-cta__footer">
              <span>
                <FaTrophy /> Excellence
              </span>
              <span>
                <FaAward /> Achievements
              </span>
              <span>
                <FaStar /> Inspiration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ACHIEVEMENT MODAL
      ================================================= */}
      {selectedAchievement && (
        <div
          className="sa-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedAchievement.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeAchievement();
            }
          }}
        >
          <div className="sa-modal__inner">
            <div className="sa-modal__header">
              <div>
                <span className="sa-modal__category">
                  {selectedAchievement.category || "ACHIEVEMENT"}
                </span>
                <h2 className="sa-modal__title">{selectedAchievement.title}</h2>
                {selectedAchievement.date && (
                  <span className="sa-modal__date">
                    <FaCalendarAlt />
                    {formatDate(selectedAchievement.date)}
                  </span>
                )}
              </div>
              <button
                type="button"
                className="sa-modal__close"
                onClick={closeAchievement}
                aria-label="Close achievement"
              >
                <FaTimes />
              </button>
            </div>

            <div className="sa-modal__body">
              <div className="sa-modal__content">
                {selectedAchievement.content ? (
                  <div 
                    className="sa-modal__text"
                    dangerouslySetInnerHTML={{ __html: selectedAchievement.content }}
                  />
                ) : selectedAchievement.description ? (
                  <p>{selectedAchievement.description}</p>
                ) : (
                  <p>No additional details available.</p>
                )}
              </div>

              {selectedAchievement.images && selectedAchievement.images.length > 0 && (
                <div className="sa-modal__gallery">
                  <h4>Gallery</h4>
                  <div className="sa-modal__grid">
                    {selectedAchievement.images.map((image, index) => (
                      <button
                        type="button"
                        className="sa-modal__image"
                        key={index}
                        onClick={() => openImage(image)}
                      >
                        <img
                          src={getImageUrl(image.imageUrl || image)}
                          alt={image.caption || selectedAchievement.title}
                          loading="lazy"
                        />
                        <div className="sa-modal__image-overlay">
                          <FaEye />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          SINGLE IMAGE LIGHTBOX
      ================================================= */}
      {selectedImage && (
        <div
          className="sa-lightbox"
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
            className="sa-lightbox__close"
            onClick={closeImage}
            aria-label="Close image"
          >
            <FaTimes />
          </button>

          <img
            src={getImageUrl(selectedImage.imageUrl || selectedImage)}
            alt={selectedImage.caption || "Achievement image"}
            className="sa-lightbox__image"
          />

          {selectedImage.caption && (
            <div className="sa-lightbox__caption">{selectedImage.caption}</div>
          )}
        </div>
      )}
    </main>
  );
};

export default Achievements;