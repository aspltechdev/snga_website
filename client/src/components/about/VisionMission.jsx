

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./VisionMission.css";

import heroBg from "../../assets/school.JPG";
import visionImage from "../../assets/values.jpg";
import schoolImage from "../../assets/school1.jpg";
import pillarsImage from "../../assets/holistic.jpg";
import goalsImage from "../../assets/playground.JPG";
import futureImage from "../../assets/engaging.jpg";

const VisionMission = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sv-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addSection = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  const pillars = [
    {
      number: "01",
      title: "Knowledge",
      text:
        "Building strong academic understanding while encouraging students to explore ideas with curiosity.",
    },
    {
      number: "02",
      title: "Skills",
      text:
        "Developing practical, communication and learning skills that prepare students for the future.",
    },
    {
      number: "03",
      title: "Values",
      text:
        "Nurturing healthy attitudes, responsibility, ethical values and respect for others.",
    },
    {
      number: "04",
      title: "Confidence",
      text:
        "Strengthening self-esteem and confidence so students can approach challenges with courage.",
    },
  ];

  const goldenGoals = [
    {
      number: "01",
      title: "Punctuality & Regularity",
      text:
        "Encouraging discipline, punctuality and regular participation as foundations for meaningful learning.",
    },
    {
      number: "02",
      title: "Academic Excellence",
      text:
        "Striving for strong academic performance while encouraging understanding, curiosity and achievement.",
    },
    {
      number: "03",
      title: "Communication Skills",
      text:
        "Helping students communicate clearly and confidently in a changing and connected world.",
    },
    {
      number: "04",
      title: "Curiosity & Learning",
      text:
        "Kindling curiosity and creating a learning environment where students ask questions and explore.",
    },
    {
      number: "05",
      title: "All-Round Development",
      text:
        "Providing opportunities across academics, sports, co-curricular and extracurricular activities.",
    },
    {
      number: "06",
      title: "Teaching Excellence",
      text:
        "Supporting teachers in developing strong subject knowledge, teaching skills and meaningful classroom practice.",
    },
    {
      number: "07",
      title: "A Clean Environment",
      text:
        "Maintaining a clean, responsible and environment-friendly campus for the whole school community.",
    },
    {
      number: "08",
      title: "Human & Ethical Values",
      text:
        "Helping students grow with responsibility, compassion, discipline and strong human values.",
    },
  ];

  return (
    <main className="sv-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-hero sv-reveal"
        style={{ "--sv-hero-image": `url(${heroBg})` }}
      >
        <div className="sv-hero__overlay" />

        <div className="sv-hero__frame" />

        <div className="sv-container sv-hero__container">
          <div className="sv-hero__topline">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>VISION &amp; MISSION</span>
          </div>

          <div className="sv-hero__content">
            <div className="sv-hero__number">01</div>

            <p className="sv-hero__eyebrow">
              EDUCATIONAL DIRECTION
            </p>

            <h1 className="sv-hero__title">
              Education
              <br />
              <em>with purpose.</em>
            </h1>

            <p className="sv-hero__description">
              The vision, mission and educational principles that guide
              Shifan Noor Global Academy.
            </p>
          </div>

          <div className="sv-hero__bottom">
            <span>VENKULAM · RAMANATHAPURAM</span>

            <span className="sv-hero__scroll">
              SCROLL TO EXPLORE
              <i />
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-intro sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-intro__grid">
            <div className="sv-section-index">
              <span>02</span>
              <span>OUR DIRECTION</span>
            </div>

            <div className="sv-intro__main">
              <p className="sv-kicker">
                MORE THAN ACADEMIC ACHIEVEMENT
              </p>

              <h2>
                Preparing students
                <br />
                <em>for life.</em>
              </h2>

              <div className="sv-intro__body">
                <p>
                  At Shifan Noor Global Academy, education is viewed as
                  a journey that develops the whole child.
                </p>

                <p>
                  Our approach brings together knowledge, practical
                  skills, healthy attitudes, values and confidence to
                  help students become capable and responsible
                  individuals.
                </p>
              </div>
            </div>
          </div>

          <div className="sv-intro__rule" />

          <div className="sv-intro__statement">
            <span>THE SNGA APPROACH</span>
            <p>
              Learning should develop not only what a student knows,
              but also who they become.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-vision sv-reveal"
      >
        <div className="sv-vision__image">
          <img
            src={visionImage}
            alt="Students learning at Shifan Noor Global Academy"
            loading="lazy"
          />
        </div>

        <div className="sv-vision__content">
          <div className="sv-container sv-vision__container">
            <div className="sv-section-index sv-section-index--light">
              <span>03</span>
              <span>OUR VISION</span>
            </div>

            <p className="sv-kicker sv-kicker--light">
              LOOKING AHEAD
            </p>

            <h2>
              Building
              <br />
              <em>confident learners.</em>
            </h2>

            <div className="sv-vision__copy">
              <p className="sv-vision__lead">
                Our vision is to provide complete education that helps
                students develop the knowledge, skills and confidence
                needed to meet the challenges of tomorrow.
              </p>

              <p>
                We aim to maintain high academic, social and moral
                expectations while creating a world-class ambience
                where students can learn with enthusiasm and develop
                high self-esteem.
              </p>
            </div>

            <div className="sv-vision__bottom">
              <span>KNOWLEDGE</span>
              <span>SKILLS</span>
              <span>VALUES</span>
              <span>CONFIDENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-mission sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-mission__grid">
            <div className="sv-mission__content">
              <div className="sv-mission__intro">
                <div className="sv-section-index">
                  <span>04</span>
                  <span>OUR MISSION</span>
                </div>

                <p className="sv-kicker">
                  EVERY CHILD MATTERS
                </p>

                <h2>
                  Give every child
                  <br />
                  <em>room to grow.</em>
                </h2>
              </div>

              <div className="sv-mission__copy">
                <p className="sv-mission__lead">
                  Our mission is to create a stimulating, supportive and
                  engaging learning environment where every student can
                  discover their potential.
                </p>

                <p>
                  We seek to develop knowledge, skills, healthy attitudes
                  and values while providing opportunities for academic,
                  social, moral, physical and personal growth.
                </p>

                <div className="sv-mission__line" />

                <p className="sv-mission__small">
                  A complete education is one that prepares a student not
                  only to succeed, but to contribute.
                </p>
              </div>
            </div>

            <div className="sv-mission__visual">
              <img
                src={schoolImage}
                alt="Shifan Noor Global Academy campus"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUR PILLARS
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-pillars sv-reveal"
      >
        <div className="sv-pillars__hero">
          <div className="sv-container">
            <div className="sv-pillars__header">
              <div className="sv-section-index">
                <span>05</span>
                <span>THE FOUNDATION</span>
              </div>

              <div>
                <p className="sv-kicker">
                  FOUR AREAS THAT MATTER
                </p>

                <h2>
                  What students
                  <br />
                  <em>take forward.</em>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="sv-container">
          <div className="sv-pillars__layout">
            <div className="sv-pillars__image">
              <img
                src={pillarsImage}
                alt="Students developing through learning"
                loading="lazy"
              />

              <div className="sv-pillars__image-caption">
                <span>SHIFAN NOOR GLOBAL ACADEMY</span>
                <strong>
                  Learning is a journey
                  <br />
                  of becoming.
                </strong>
              </div>
            </div>

            <div className="sv-pillars__list">
              {pillars.map((pillar) => (
                <article
                  className="sv-pillar"
                  key={pillar.number}
                >
                  <span className="sv-pillar__number">
                    {pillar.number}
                  </span>

                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY STATEMENT
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-statement sv-reveal"
      >
        <div className="sv-container">
          <p className="sv-statement__eyebrow">
            OUR EDUCATIONAL PHILOSOPHY
          </p>

          <h2>
            Knowledge gives direction.
            <br />
            <em>Character gives it meaning.</em>
          </h2>

          <div className="sv-statement__footer">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>LEARN · GROW · LEAD</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOLDEN GOALS
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-goals sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-goals__header">
            <div className="sv-section-index">
              <span>06</span>
              <span>THE GOLDEN GOALS</span>
            </div>

            <div className="sv-goals__heading">
              <p className="sv-kicker">
                FROM PRINCIPLE TO PRACTICE
              </p>

              <h2>
                Eight goals.
                <br />
                <em>One direction.</em>
              </h2>

              <p>
                These goals guide the way students learn,
                communicate, participate and grow within the school
                community.
              </p>
            </div>
          </div>

          <div className="sv-goals__image">
            <img
              src={goalsImage}
              alt="Student development at SNGA"
              loading="lazy"
            />
          </div>

          <div className="sv-goals__list">
            {goldenGoals.map((goal) => (
              <article
                className="sv-goal"
                key={goal.number}
              >
                <span className="sv-goal__number">
                  {goal.number}
                </span>

                <h3>{goal.title}</h3>

                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FUTURE
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-future sv-reveal"
        style={{ "--sv-future-image": `url(${futureImage})` }}
      >
        <div className="sv-future__overlay" />

        <div className="sv-container">
          <div className="sv-future__content">
            <div className="sv-section-index sv-section-index--light">
              <span>07</span>
              <span>LOOKING AHEAD</span>
            </div>

            <p className="sv-kicker sv-kicker--light">
              THE NEXT GENERATION
            </p>

            <h2>
              Ready for
              <br />
              <em>what comes next.</em>
            </h2>

            <p className="sv-future__text">
              Our aim is to give students the confidence, knowledge,
              skills and values to move forward into a changing world
              with purpose.
            </p>

            <div className="sv-future__qualities">
              <span>CONFIDENCE</span>
              <span>KNOWLEDGE</span>
              <span>SKILLS</span>
              <span>VALUES</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-cta sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-cta__top">
            <span>08</span>
            <span>CONTINUE EXPLORING</span>
          </div>

          <div className="sv-cta__grid">
            <div>
              <p className="sv-kicker">
                SHIFAN NOOR GLOBAL ACADEMY
              </p>

              <h2>
                See the vision
                <br />
                <em>in action.</em>
              </h2>
            </div>

            <div className="sv-cta__right">
              <p>
                Explore the academics, campus and learning
                experiences that bring the SNGA philosophy to life.
              </p>

              <div className="sv-cta__actions">
                <Link
                  to="/academics"
                  className="sv-cta__link sv-cta__link--primary"
                >
                  <span>Explore Academics</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/infrastructure"
                  className="sv-cta__link"
                >
                  <span>View Infrastructure</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="sv-cta__bottom">
            <span>
              Shifan Noor Global Academy
            </span>

            <span>
              Venkulam · Ramanathapuram
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisionMission;
