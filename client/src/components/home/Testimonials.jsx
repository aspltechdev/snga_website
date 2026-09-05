import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import testimonialService from "../../services/testimonial.service";
import "./TestimonialsPreview.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const fallbackImages = [
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
];

const getImageUrl = (image, index = 0) => {
  if (!image) {
    return fallbackImages[index % fallbackImages.length];
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const TestimonialsPreview = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchTestimonials = async () => {
      try {
        const response = await testimonialService.getAll();

        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter((item) => item.isPublished !== false)
          : [];

        if (mounted) {
          setTestimonials(published.slice(0, 5));
        }
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

    fetchTestimonials();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 6500);

    return () => clearInterval(interval);
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

  return (
    <section className="testimonials-preview">
      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="testimonials-intro">
        <div className="testimonials-container">
          <div className="testimonials-intro-top">
            <span className="testimonials-label">
              THE SNGA EXPERIENCE
            </span>

            <span className="testimonials-section-number">
              08
            </span>
          </div>

          <div className="testimonials-intro-grid">
            <h2>
              Life at SNGA,
              <br />
              <span>through their eyes.</span>
            </h2>

            <div className="testimonials-intro-copy">
              <p>
                A school is experienced differently by every
                child and every family. These are the voices
                behind our community.
              </p>

              <Link
                to="/testimonials"
                className="testimonials-explore"
              >
                <span>Meet our community</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FEATURE
      ===================================================== */}

      <div className="testimonials-stage">
        <div className="testimonials-container">
          {loading ? (
            <div className="testimonials-loading">
              <span />
              <span />
              <span />
            </div>
          ) : activeTestimonial ? (
            <div className="testimonials-feature">
              {/* IMAGE */}

              <div className="testimonials-image-wrap">
                <img
                  src={getImageUrl(
                    activeTestimonial.image,
                    activeIndex
                  )}
                  alt={
                    activeTestimonial.name ||
                    "SNGA community member"
                  }
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      fallbackImages[
                        activeIndex % fallbackImages.length
                      ];
                  }}
                />

                <div className="testimonials-image-overlay">
                  <span>SNGA</span>
                  <span>COMMUNITY</span>
                </div>

                <div className="testimonials-image-index">
                  {String(activeIndex + 1).padStart(2, "0")}
                </div>
              </div>

              {/* QUOTE */}

              <div className="testimonials-quote-area">
                <div className="testimonials-quote-mark">
                  “
                </div>

                <div className="testimonials-quote-content">
                  <span className="testimonials-quote-label">
                    A VOICE FROM OUR COMMUNITY
                  </span>

                  <blockquote>
                    {activeTestimonial.message}
                  </blockquote>

                  <div className="testimonials-person">
                    <div className="testimonials-person-line" />

                    <div className="testimonials-person-info">
                      <strong>
                        {activeTestimonial.name ||
                          "SNGA Community"}
                      </strong>

                      {activeTestimonial.role && (
                        <span>{activeTestimonial.role}</span>
                      )}

                      {activeTestimonial.relation && (
                        <span>
                          {activeTestimonial.relation}
                        </span>
                      )}
                    </div>
                  </div>

                  {activeTestimonial.rating && (
                    <div className="testimonials-rating">
                      <span>EXPERIENCE</span>

                      <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={
                              star <= activeTestimonial.rating
                                ? "active"
                                : ""
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* SIDE NUMBER */}

                <div className="testimonials-side-number">
                  <span>
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <i />

                  <span>
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="testimonials-empty">
              <span>08</span>

              <div>
                <small>THE SNGA EXPERIENCE</small>

                <h3>
                  Every voice
                  <br />
                  <em>matters.</em>
                </h3>

                <p>
                  Community testimonials will appear here.
                </p>
              </div>
            </div>
          )}

          {/* =====================================================
              CONTROLS
          ===================================================== */}

          {!loading && testimonials.length > 1 && (
            <div className="testimonials-controls">
              <div className="testimonials-progress">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    className={
                      index === activeIndex ? "active" : ""
                    }
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View testimonial ${
                      index + 1
                    }`}
                  >
                    <span />
                  </button>
                ))}
              </div>

              <div className="testimonials-arrows">
                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <div className="testimonials-statement">
        <div className="testimonials-container">
          <div className="testimonials-statement-grid">
            <div className="testimonials-statement-number">
              09
            </div>

            <div className="testimonials-statement-main">
              <span className="testimonials-label">
                WHAT WE BELIEVE
              </span>

              <h3>
                When children feel
                <br />
                <span>they belong,</span>
                <br />
                they are ready to grow.
              </h3>
            </div>

            <p>
              We believe meaningful education begins with
              relationships — between students, teachers,
              families and the wider school community.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="testimonials-bottom">
        <div className="testimonials-container">
          <div className="testimonials-bottom-inner">
            <div>
              <span className="testimonials-label">
                DISCOVER SNGA
              </span>

              <h3>
                Your child's story
                <br />
                <span>starts here.</span>
              </h3>
            </div>

            <Link
              to="/admissions"
              className="testimonials-bottom-button"
            >
              Explore admissions
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;