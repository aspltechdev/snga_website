import { Link } from "react-router-dom";
import "./AcademicsPreview.css";

import heroBg from "../../assets/school.JPG";
import practical from "../../assets/beyond.jpg";
import digital from "../../assets/Digitallearning.jpg";
import creative from "../../assets/creativearts.jpg";
// =====================================================
// ACADEMICS PREVIEW
// Premium editorial / Apple-style section
// =====================================================

const IMAGES = {
  hero: heroBg,
  practical: practical,
  digital: digital,
  creative: creative,
};

const AcademicsPreview = () => {
  const learningAreas = [
    {
      number: "01",
      title: "Strong foundations",
      description:
        "Building clear academic foundations that encourage curiosity, understanding and confident learning.",
    },
    {
      number: "02",
      title: "Practical learning",
      description:
        "Connecting classroom knowledge with experiments, exploration and meaningful real-world application.",
    },
    {
      number: "03",
      title: "Digital learning",
      description:
        "Using technology as part of the learning experience to make lessons more interactive and engaging.",
    },
    {
      number: "04",
      title: "Creative development",
      description:
        "Encouraging students to discover their creativity through activities beyond traditional academics.",
    },
  ];

  return (
    <section className="academics-preview">
      <div className="academics-preview-container">

        {/* =================================================
            INTRO / HERO
        ================================================= */}
        <div className="academics-intro">

          <div className="academics-intro-copy">
            <div className="academics-eyebrow">
              <span className="academics-eyebrow-line" />
              ACADEMICS
            </div>

            <h2 className="academics-main-title">
              Learning that
              <br />
              <span>builds confidence.</span>
            </h2>

            <p className="academics-main-description">
              At Shifan Noor Global Academy, learning goes beyond completing
              a syllabus. We encourage students to understand, explore,
              question and apply what they learn — developing knowledge,
              skills, values and confidence for the future.
            </p>

            <Link
              to="/academics"
              className="academics-primary-link"
            >
              <span>Explore academics</span>
              <span className="academics-link-arrow">↗</span>
            </Link>
          </div>

          <div className="academics-intro-visual">
            <img
              src={IMAGES.hero}
              alt="Students learning in a classroom"
            />

            <div className="academics-visual-caption">
              <span>01</span>
              <p>
                A learning environment designed to encourage curiosity,
                understanding and growth.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            LEARNING APPROACH
        ================================================= */}
        <div className="academics-approach">

          <div className="academics-approach-heading">
            <div>
              <div className="academics-section-label">
                HOW WE LEARN
              </div>

              <h3>
                More than
                <br />
                <span>just academics.</span>
              </h3>
            </div>

            <p>
              Our approach brings together academic learning, practical
              exploration, technology, creativity and values to support
              the development of the whole child.
            </p>
          </div>

          <div className="academics-learning-list">
            {learningAreas.map((item) => (
              <article
                key={item.number}
                className="academics-learning-item"
              >
                <div className="academics-learning-number">
                  {item.number}
                </div>

                <div className="academics-learning-content">
                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>

                <span className="academics-learning-arrow">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* =================================================
            FEATURED LEARNING
        ================================================= */}
        <div className="academics-feature">

          <div className="academics-feature-image">
            <img
              src={IMAGES.practical}
              alt="Students exploring practical learning"
              loading="lazy"
            />

            <div className="academics-feature-image-label">
              PRACTICAL LEARNING
            </div>
          </div>

          <div className="academics-feature-copy">
            <div className="academics-section-label">
              LEARNING IN ACTION
            </div>

            <h3>
              Knowledge becomes
              <br />
              meaningful when
              <span> students experience it.</span>
            </h3>

            <p>
              Practical learning gives students opportunities to explore
              ideas beyond the textbook. Through experimentation,
              observation and application, students develop a deeper
              understanding of what they learn.
            </p>

            <div className="academics-feature-points">
              <div>
                <strong>01</strong>
                <span>Explore</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Understand</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Apply</span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            DIGITAL + CREATIVE
        ================================================= */}
        <div className="academics-dual-feature">

          <div className="academics-small-feature">
            <div className="academics-small-feature-image">
              <img
                src={IMAGES.digital}
                alt="Digital learning"
                loading="lazy"
              />
            </div>

            <div className="academics-small-feature-copy">
              <div className="academics-section-label">
                TECHNOLOGY
              </div>

              <h3>
                Digital learning
                <br />
                <span>for a changing world.</span>
              </h3>

              <p>
                Technology-integrated learning helps make education
                interactive while preparing students for a digitally
                connected future.
              </p>

              <Link to="/academics/curriculum">
                Discover our approach
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="academics-small-feature academics-small-feature-dark">
            <div className="academics-small-feature-image">
              <img
                src={IMAGES.creative}
                alt="Creative student activities"
                loading="lazy"
              />
            </div>

            <div className="academics-small-feature-copy">
              <div className="academics-section-label">
                BEYOND THE CLASSROOM
              </div>

              <h3>
                Creativity is part
                <br />
                <span>of growing.</span>
              </h3>

              <p>
                Activities beyond the classroom encourage expression,
                confidence, collaboration and all-round development.
              </p>

              <Link to="/academics">
                Explore student life
                <span>↗</span>
              </Link>
            </div>
          </div>

        </div>

        {/* =================================================
            REAL SCHOOL FACTS
        ================================================= */}
        <div className="academics-facts">

          <div className="academics-facts-intro">
            <div className="academics-section-label">
              THE LEARNING ENVIRONMENT
            </div>

            <h3>
              Space to learn.
              <br />
              <span>Room to grow.</span>
            </h3>
          </div>

          <div className="academics-facts-grid">

            <div className="academics-fact">
              <strong>13.5</strong>
              <span>Acres of campus</span>
            </div>

            <div className="academics-fact">
              <strong>3,500+</strong>
              <span>Books in the library</span>
            </div>

            <div className="academics-fact">
              <strong>500</strong>
              <span>Sq. ft. classrooms</span>
            </div>

            <div className="academics-fact">
              <strong>Digital</strong>
              <span>Interactive classrooms</span>
            </div>

          </div>
        </div>

        {/* =================================================
            FINAL CTA
        ================================================= */}
        <div className="academics-bottom-cta">

          <div>
            <div className="academics-cta-label">
              DISCOVER SNGA
            </div>

            <h3>
              Give curiosity
              <br />
              <span>room to grow.</span>
            </h3>
          </div>

          <div className="academics-bottom-cta-right">
            <p>
              Explore our academic philosophy, curriculum and learning
              environment in greater detail.
            </p>

            <Link
              to="/academics"
              className="academics-cta-button"
            >
              <span>Explore academics</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademicsPreview;