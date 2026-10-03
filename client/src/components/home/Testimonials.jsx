

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import testimonialService from "../../services/testimonial.service";
import engagingImage from "../../assets/engaging.jpg";
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

      <div
        className="tp-statement"
        style={{
          backgroundImage: `url(${engagingImage})`,
        }}
      >
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
