import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./WhyChooseUs.css";

import holisticImage from "../../assets/holistic.jpg";
import engagingImage from "../../assets/engaging.jpg";
import beyondImage from "../../assets/beyond.jpg";
import valuesImage from "../../assets/values.jpg";
import campusBackground from "../../assets/campus.jpg";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      number: "01",
      title: "Holistic Development",
      shortTitle: "THE WHOLE CHILD",
      description:
        "Academics, skills, values, creativity and personal development come together to support the complete growth of every student.",
      image: holisticImage,
    },
    {
      number: "02",
      title: "Engaging Learning",
      shortTitle: "CURIOSITY IN ACTION",
      description:
        "Digital classrooms and thoughtfully designed learning spaces help students understand concepts, explore ideas and learn with confidence.",
      image: engagingImage,
    },
    {
      number: "03",
      title: "Beyond the Classroom",
      shortTitle: "LEARNING BY EXPERIENCE",
      description:
        "Science laboratories, computer learning, library experiences and co-curricular activities encourage meaningful learning beyond the classroom.",
      image: beyondImage,
    },
    {
      number: "04",
      title: "Values & Confidence",
      shortTitle: "CHARACTER MATTERS",
      description:
        "Healthy attitudes, strong values, self-esteem and responsibility help students prepare for academic, social and future challenges.",
      image: valuesImage,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("wc-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="wc">
      {/* OPENING STATEMENT */}
      <div
        className="wc-opening"
        style={{ "--wc-opening-bg": `url(${campusBackground})` }}
      >
        <div className="wc-container">
          <div className="wc-opening-top">
            <div className="wc-opening-index">02</div>
            <div className="wc-opening-label">THE SNGA APPROACH</div>
            <div className="wc-opening-location">
              EDUCATION · CHARACTER · CONFIDENCE
            </div>
          </div>

          <div className="wc-opening-grid">
            <div className="wc-opening-heading">
              <span className="wc-overline">WHY SNGA</span>

              <h2>
                Education
                <br />
                <em>with purpose.</em>
              </h2>
            </div>

            <div className="wc-opening-copy">
              <p>
                At Shifan Noor Global Academy, education extends beyond academic
                achievement. We create an environment where knowledge, skills,
                values and confidence grow together.
              </p>

              <Link to="/vision-mission" className="wc-editorial-link">
                <span>What we believe</span>
                <b>↗</b>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE PRINCIPLES */}
      <div className="wc-principles">
        <div className="wc-container">
          <div className="wc-principles-intro">
            <div>
              <span className="wc-overline">THE DISTINCTIVE EXPERIENCE</span>

              <h3>
                Four ideas that
                <br />
                shape everyday life.
              </h3>
            </div>

            <p>
              The experience of learning at SNGA is shaped by more than a
              curriculum. It is shaped by the environment, the people and the
              opportunities students encounter every day.
            </p>
          </div>

          <div className="wc-feature-list">
            {features.map((feature) => (
              <Link key={feature.number} to="/about" className="wc-feature">
                <div className="wc-feature-number">{feature.number}</div>

                <div className="wc-feature-image">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                  />
                  <div className="wc-feature-image-overlay" />
                </div>

                <div className="wc-feature-content">
                  <span>{feature.shortTitle}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>

                  <div className="wc-feature-link">
                    <span>Explore</span>
                    <b>↗</b>
                  </div>
                </div>

                <div className="wc-feature-line" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="wc-philosophy">
        <div className="wc-container">
          <div className="wc-philosophy-top">
            <span>03</span>
            <span>THE BIGGER PICTURE</span>
          </div>

          <div className="wc-philosophy-grid">
            <div className="wc-philosophy-heading">
              <span className="wc-overline">EDUCATION BEYOND RESULTS</span>

              <h3>
                Knowledge gives
                <br />
                <em>direction.</em>
                <br />
                Character gives it
                <br />
                <em>meaning.</em>
              </h3>
            </div>

            <div className="wc-philosophy-copy">
              <div className="wc-philosophy-mark">“</div>

              <p>
                We want students to leave school with more than academic
                knowledge — with the confidence, values and skills to use what
                they have learned meaningfully.
              </p>

              <Link to="/vision-mission" className="wc-philosophy-link">
                <span>Our vision & mission</span>
                <b>↗</b>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FOUNDATION */}
      <div
        className="wc-foundation"
        style={{ "--wc-foundation-bg": `url(${campusBackground})` }}
      >
        <div className="wc-container">
          <div className="wc-foundation-top">
            <span>04 · THE FOUNDATION</span>
            <span>WHAT WE BUILD TOGETHER</span>
          </div>

          <div className="wc-foundation-grid">
            <div className="wc-foundation-heading">
              <span className="wc-foundation-overline">
                A COMPLETE EDUCATION
              </span>

              <h3>
                Knowledge.
                <br />
                Skills.
                <br />
                Values.
                <br />
                <em>Confidence.</em>
              </h3>
            </div>

            <div className="wc-foundation-content">
              <div className="wc-foundation-intro">
                <span>THE SNGA EXPERIENCE</span>

                <p>
                  Four foundations come together to create an educational
                  experience that prepares students for learning, life and the
                  future.
                </p>
              </div>

              <div className="wc-foundation-points">
                <article>
                  <span>01</span>
                  <div>
                    <h4>Knowledge</h4>
                    <p>
                      Strong academic foundations that encourage students to
                      understand, question and discover.
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>
                  <div>
                    <h4>Skills</h4>
                    <p>
                      Practical abilities that help students think,
                      communicate and solve problems confidently.
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>
                  <div>
                    <h4>Values</h4>
                    <p>
                      Responsibility, respect and healthy attitudes that
                      strengthen personal character.
                    </p>
                  </div>
                </article>

                <article>
                  <span>04</span>
                  <div>
                    <h4>Confidence</h4>
                    <p>
                      Self-belief and resilience that prepare every student for
                      future opportunities.
                    </p>
                  </div>
                </article>
              </div>

              <Link to="/academics" className="wc-foundation-link">
                <span>Explore Academics</span>
                <b>↗</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
