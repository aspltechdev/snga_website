import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGraduationCap,
  FaPhoneAlt,
  FaCalendarAlt,
  FaUserPlus,
  FaSchool,
  FaRocket,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";
import "./AdmissionsCTA.css";

const AdmissionsCTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
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
          entry.target.classList.add("sga-cta--visible");
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sga-cta__content--revealed");
          contentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const bottomObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sga-cta__bottom--revealed");
          bottomObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      contentObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  const features = [
    { icon: <FaAward />, label: "Excellence Guaranteed" },
    { icon: <FaShieldAlt />, label: "Safe Environment" },
    { icon: <FaClock />, label: "Flexible Timing" },
  ];

  const steps = [
    {
      number: "01",
      title: "Enquire",
      description: "Start a conversation with us",
      icon: <FaUserPlus />,
    },
    {
      number: "02",
      title: "Visit",
      description: "Experience our learning environment",
      icon: <FaSchool />,
    },
    {
      number: "03",
      title: "Join",
      description: "Begin your child's SNGA journey",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section ref={sectionRef} className="sga-cta">
      {/* Background decorative elements */}
      <div className="sga-cta__bg sga-cta__bg--1" />
      <div className="sga-cta__bg sga-cta__bg--2" />
      <div className="sga-cta__grid" />

      <div className="sga-cta__container">
        {/* =====================================
            WATERMARK
        ====================================== */}
        <div className="sga-cta__watermark">2026</div>

        {/* =====================================
            TOP BADGE
        ====================================== */}
        <div className="sga-cta__badge">
          <span className="sga-cta__badge-line" />
          <span className="sga-cta__badge-text">
            <FaSchool className="sga-cta__badge-icon" />
            Admissions Open
          </span>
          <span className="sga-cta__badge-line" />
        </div>

        {/* =====================================
            MAIN CONTENT
        ====================================== */}
        <div ref={contentRef} className="sga-cta__content">
          {/* ========== LEFT COLUMN ========== */}
          <div className="sga-cta__left">
            <div className="sga-cta__icon-group">
              <div className="sga-cta__icon-wrapper">
                <FaGraduationCap className="sga-cta__icon" />
              </div>
              <span className="sga-cta__pulse" />
            </div>

            <h2 className="sga-cta__title">
              Give Your Child
              <br />
              <span className="sga-cta__title-highlight">
                A Stronger Beginning.
              </span>
            </h2>

            <p className="sga-cta__description">
              Begin your child's journey with an education that builds knowledge,
              character, confidence and a lifelong love for learning.
            </p>

            <div className="sga-cta__actions">
              <Link to="/admissions" className="sga-cta__btn sga-cta__btn--primary">
                <span>Apply for Admission</span>
                <FaArrowRight className="sga-cta__btn-icon" />
              </Link>

              <Link to="/contact" className="sga-cta__btn sga-cta__btn--secondary">
                <FaPhoneAlt className="sga-cta__btn-icon" />
                <span>Talk to Us</span>
              </Link>
            </div>

            <div className="sga-cta__features">
              {features.map((item, index) => (
                <div key={index} className="sga-cta__feature">
                  <span className="sga-cta__feature-icon">{item.icon}</span>
                  <span className="sga-cta__feature-label">{item.label}</span>
                  {index < features.length - 1 && (
                    <span className="sga-cta__feature-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ========== RIGHT COLUMN ========== */}
          <div className="sga-cta__right">
            <div className="sga-cta__steps-header">
              <span className="sga-cta__steps-label">How to Apply</span>
              <h3 className="sga-cta__steps-title">
                Simple <span className="sga-cta__steps-highlight">3-Step</span> Process
              </h3>
            </div>

            <div className="sga-cta__steps">
              {steps.map((step, index) => (
                <div key={index} className="sga-cta__step">
                  <div className="sga-cta__step-number">{step.number}</div>
                  <div className="sga-cta__step-content">
                    <div className="sga-cta__step-icon">{step.icon}</div>
                    <div>
                      <strong className="sga-cta__step-title">{step.title}</strong>
                      <p className="sga-cta__step-desc">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="sga-cta__step-connector" />
                  )}
                </div>
              ))}
            </div>

            <div className="sga-cta__steps-footer">
              <span className="sga-cta__steps-badge">
                <FaGraduationCap />
                SNGA
              </span>
              <span className="sga-cta__steps-quote">
                "Every child deserves the best start"
              </span>
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM BAR
        ====================================== */}
        <div ref={bottomRef} className="sga-cta__bottom">
          <span className="sga-cta__bottom-brand">
            SHIFAN NOOR GLOBAL ACADEMY
          </span>

          <div className="sga-cta__bottom-divider" />

          <span className="sga-cta__bottom-tagline">
            LEARN • GROW • LEAD
          </span>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;