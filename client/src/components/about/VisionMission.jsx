import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLightbulb,
  FaHeart,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

import "./VisionMission.css";

const VisionMission = () => {
  const missionPoints = [
    {
      number: "01",
      title: "Knowledge",
      text:
        "Developing strong academic understanding and encouraging students to explore ideas with curiosity.",
    },
    {
      number: "02",
      title: "Skills",
      text:
        "Helping students develop the practical, communication and learning skills required for the future.",
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
        "Building self-esteem and confidence so students are prepared to face challenges with courage.",
    },
  ];

  const goals = [
    {
      number: "01",
      title: "Academic Excellence",
      text:
        "Striving for strong academic performance while encouraging students to understand, question and learn.",
    },
    {
      number: "02",
      title: "Communication",
      text:
        "Developing confident communication skills that help students express themselves clearly.",
    },
    {
      number: "03",
      title: "All-Round Development",
      text:
        "Creating opportunities across academics, sports, co-curricular and extracurricular activities.",
    },
    {
      number: "04",
      title: "Human Values",
      text:
        "Encouraging students to grow with responsibility, discipline, compassion and strong ethical values.",
    },
  ];

  return (
    <main className="vision-mission-page">

      {/* HERO */}
      <section className="vision-mission-hero">
        <div className="vision-mission-container">

          <div className="vision-mission-hero-content">

            <div className="vision-mission-eyebrow">
              <span />
              VISION & MISSION
            </div>

            <h1>
              Education with
              <br />
              <em>a clear purpose.</em>
            </h1>

            <p>
              The vision, mission and educational principles
              that guide Shifan Noor Global Academy.
            </p>

          </div>

          <div className="vision-mission-hero-side">
            <span>KNOWLEDGE</span>
            <span>SKILLS</span>
            <span>VALUES</span>
            <span>CONFIDENCE</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="vision-mission-intro">
        <div className="vision-mission-container">

          <div className="vision-mission-intro-label">
            OUR EDUCATIONAL DIRECTION
          </div>

          <div className="vision-mission-intro-grid">

            <h2>
              Preparing students
              <br />
              for <em>life, not just exams.</em>
            </h2>

            <div className="vision-mission-intro-copy">
              <p>
                At Shifan Noor Global Academy, education is
                viewed as a journey that develops the whole
                child.
              </p>

              <p>
                Our approach brings together knowledge,
                practical skills, healthy attitudes, values
                and confidence to help students become
                capable and responsible individuals.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="vision-section">

        <div className="vision-mission-container">

          <div className="vision-section-grid">

            <div className="vision-section-label">
              <div className="vision-icon">
                <FaLightbulb />
              </div>

              <span>01</span>
              OUR VISION
            </div>

            <div className="vision-section-content">

              <h2>
                To create
                <br />
                <em>confident learners.</em>
              </h2>

              <p className="vision-lead">
                Our vision is to provide complete education
                that helps students develop the knowledge,
                skills and confidence needed to meet the
                challenges of tomorrow.
              </p>

              <p>
                We aim to maintain high academic, social and
                moral expectations while creating a world-class
                ambience where students can learn with
                enthusiasm and develop high self-esteem.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION */}
      <section className="mission-section">

        <div className="vision-mission-container">

          <div className="mission-section-grid">

            <div className="mission-section-content">

              <div className="vision-mission-eyebrow dark">
                OUR MISSION
              </div>

              <h2>
                Give every child
                <br />
                the opportunity to <em>grow.</em>
              </h2>

              <p className="mission-lead">
                Our mission is to create a stimulating,
                supportive and engaging learning environment
                where every student can discover their
                potential.
              </p>

              <p>
                We seek to develop knowledge, skills,
                healthy attitudes and values while providing
                opportunities for academic, social, moral,
                physical and personal growth.
              </p>

            </div>

            <div className="mission-section-visual">

              <div className="mission-visual-number">
                02
              </div>

              <div className="mission-visual-title">
                COMPLETE
                <br />
                EDUCATION
              </div>

              <div className="mission-visual-footer">
                <span>LEARN</span>
                <span>GROW</span>
                <span>LEAD</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOUR PILLARS */}
      <section className="mission-pillars">

        <div className="vision-mission-container">

          <div className="mission-pillars-header">

            <div>

              <div className="vision-mission-eyebrow dark">
                OUR FOUR PILLARS
              </div>

              <h2>
                What every student
                <br />
                should <em>take forward.</em>
              </h2>

            </div>

            <p>
              Education at SNGA is shaped around more than
              academic achievement. These four areas form
              the foundation of our approach.
            </p>

          </div>

          <div className="mission-pillar-grid">

            {missionPoints.map((point) => (
              <article
                className="mission-pillar"
                key={point.number}
              >

                <span className="mission-pillar-number">
                  {point.number}
                </span>

                <div className="mission-pillar-icon">
                  {point.number === "01" && <FaGraduationCap />}
                  {point.number === "02" && <FaLightbulb />}
                  {point.number === "03" && <FaHeart />}
                  {point.number === "04" && <FaUsers />}
                </div>

                <h3>{point.title}</h3>

                <p>{point.text}</p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* GOLDEN GOALS */}
      <section className="mission-goals">

        <div className="vision-mission-container">

          <div className="mission-goals-heading">

            <div className="vision-mission-eyebrow">
              OUR GOLDEN GOALS
            </div>

            <h2>
              Turning our vision
              <br />
              into <em>everyday practice.</em>
            </h2>

            <p>
              The school's educational goals guide the way
              students learn, communicate, participate and
              grow within the school community.
            </p>

          </div>

          <div className="mission-goals-list">

            {goals.map((goal) => (
              <article
                className="mission-goal"
                key={goal.number}
              >

                <div className="mission-goal-number">
                  {goal.number}
                </div>

                <div className="mission-goal-content">

                  <h3>{goal.title}</h3>

                  <p>{goal.text}</p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* FUTURE */}
      <section className="vision-future">

        <div className="vision-mission-container">

          <div className="vision-future-inner">

            <div className="vision-mission-eyebrow">
              LOOKING AHEAD
            </div>

            <h2>
              Building a generation
              <br />
              ready to <em>lead.</em>
            </h2>

            <p>
              Our aim is to give students the confidence,
              knowledge, skills and values to move forward
              into a changing world with purpose.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="vision-mission-cta">

        <div className="vision-mission-container">

          <div className="vision-mission-cta-content">

            <div className="vision-mission-eyebrow dark">
              EXPLORE SNGA
            </div>

            <h2>
              See our vision
              <br />
              <em>in action.</em>
            </h2>

            <p>
              Explore the campus, academics and learning
              experiences that bring the SNGA philosophy
              to life.
            </p>

            <div className="vision-mission-actions">

              <Link
                to="/academics"
                className="vision-mission-button"
              >
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/facilities"
                className="vision-mission-secondary"
              >
                View Facilities
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default VisionMission;