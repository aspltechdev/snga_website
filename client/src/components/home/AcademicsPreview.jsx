import { useEffect, useRef , useState } from "react";
import {
  FaBookOpen,
  FaMicroscope,
  FaCode,
  FaPaintBrush,
  FaArrowRight,
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaChalkboardTeacher,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AcademicsPreview.css";

// =====================================================
// ONLINE PLACEHOLDER IMAGES
// =====================================================
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&auto=format",
  curriculum: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&auto=format",
  practical: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&auto=format",
  digital: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&auto=format",
  creative: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&auto=format",
};

const AcademicsPreview = () => {
  const programs = [
    {
      id: 1,
      icon: <FaBookOpen />,
      title: "Strong Curriculum",
      description:
        "Structured and engaging curriculum designed to build strong academic foundations and foster intellectual curiosity.",
      image: IMAGES.curriculum,
      color: "#2c3e6b",
      stat: "25+ Subjects",
    },
    {
      id: 2,
      icon: <FaMicroscope />,
      title: "Practical Learning",
      description:
        "Hands-on experiments, activities and real-world experiences that bring concepts to life.",
      image: IMAGES.practical,
      color: "#3498db",
      stat: "10+ Labs",
    },
    {
      id: 3,
      icon: <FaCode />,
      title: "Digital Learning",
      description:
        "Technology-enabled learning that helps students develop modern skills for the digital future.",
      image: IMAGES.digital,
      color: "#27ae60",
      stat: "Smart Classes",
    },
    {
      id: 4,
      icon: <FaPaintBrush />,
      title: "Creative Development",
      description:
        "Encouraging creativity, expression and curiosity through arts, sports and innovation.",
      image: IMAGES.creative,
      color: "#e67e22",
      stat: "Arts & Sports",
    },
  ];

  const stats = [
    { number: "500+", label: "Students" },
    { number: "40+", label: "Teachers" },
    { number: "25+", label: "Years of Excellence" },
    { number: "15+", label: "Programs Offered" },
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const statsRef = useRef(null);

  // =====================================================
  // SCROLL ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("academics-visible");
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
          const items = entry.target.querySelectorAll(".academics-program-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("reveal-item");
            }, index * 120);
          });
          gridObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".academics-stat-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("reveal-stat");
            }, index * 120);
          });
          statsObserver.unobserve(entry.target);
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

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      headerObserver.disconnect();
      gridObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="academics-preview">
      <div className="academics-preview-container">
        {/* =====================================
            HEADER
        ====================================== */}
        <div ref={headerRef} className="academics-preview-header">
          <div className="academics-header-content">
            <span className="academics-tag">ACADEMICS</span>
            <h1 className="academics-title">
              Education That
              <br />
              <span className="academics-title-highlight">Inspires Excellence</span>
            </h1>
            <p className="academics-description">
              We create meaningful learning experiences that help students
              understand, explore and apply what they learn, preparing them
              for a lifetime of discovery and achievement.
            </p>
            <div className="academics-header-actions">
              <Link to="/academics" className="academics-btn-primary">
                Explore Programs
                <FaArrowRight />
              </Link>
              <Link to="/admissions" className="academics-btn-secondary">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="academics-header-visual">
            <div className="academics-hero-image">
              <img src={IMAGES.hero} alt="Students learning" />
              <div className="academics-hero-badge">
                <FaGraduationCap />
                <span>25+ Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            PROGRAMS GRID
        ====================================== */}
        <div ref={gridRef} className="academics-programs">
          <div className="academics-programs-header">
            <span className="academics-section-label">What We Offer</span>
            <h2 className="academics-section-title">
              Our Learning <span className="academics-section-highlight">Programs</span>
            </h2>
          </div>

          <div className="academics-programs-grid">
            {programs.map((program) => (
              <div
                key={program.id}
                className="academics-program-item"
                style={{ "--item-color": program.color }}
              >
                <div className="academics-program-image">
                  <img src={program.image} alt={program.title} loading="lazy" />
                  <div className="academics-program-overlay" />
                </div>

                <div className="academics-program-content">
                  <div
                    className="academics-program-icon"
                    style={{ backgroundColor: `${program.color}15`, color: program.color }}
                  >
                    {program.icon}
                  </div>

                  <h3 className="academics-program-title">{program.title}</h3>
                  <p className="academics-program-desc">{program.description}</p>

                  <div className="academics-program-footer">
                    <span className="academics-program-stat">{program.stat}</span>
                    <Link to="/academics" className="academics-program-link">
                      Learn More
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            STATS
        ====================================== */}
        <div ref={statsRef} className="academics-stats">
          {stats.map((stat, index) => (
            <div key={index} className="academics-stat-item">
              <span className="academics-stat-number">{stat.number}</span>
              <span className="academics-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* =====================================
            CTA SECTION
        ====================================== */}
        <div className="academics-cta">
          <div className="academics-cta-inner">
            <div className="academics-cta-text">
              <h3 className="academics-cta-title">
                Ready to Start Your <span className="academics-cta-highlight">Learning Journey?</span>
              </h3>
              <p className="academics-cta-desc">
                Join our community of learners and discover your potential.
              </p>
            </div>
            <Link to="/admissions" className="academics-cta-button">
              Apply Now
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsPreview;