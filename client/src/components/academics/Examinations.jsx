import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaLightbulb,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";

import "./Examinations.css";

const Examinations = () => {
  const assessmentAreas = [
    {
      number: "01",
      icon: <FaBookOpen />,
      title: "Understanding",
      description:
        "Assessment helps students demonstrate how well they understand concepts rather than focusing only on memorisation.",
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Application",
      description:
        "Students are encouraged to apply what they learn, connect ideas and approach questions with clarity and confidence.",
    },
    {
      number: "03",
      icon: <FaChartLine />,
      title: "Progress",
      description:
        "Assessment provides an opportunity to understand learning progress and identify areas where students can improve.",
    },
    {
      number: "04",
      icon: <FaGraduationCap />,
      title: "Preparation",
      description:
        "A structured academic environment helps students develop the discipline, confidence and learning habits needed for future challenges.",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Prepare",
      text:
        "Students build understanding throughout the learning process rather than relying only on last-minute preparation.",
    },
    {
      number: "02",
      title: "Practice",
      text:
        "Regular learning activities and opportunities to apply concepts help students strengthen their understanding.",
    },
    {
      number: "03",
      title: "Evaluate",
      text:
        "Assessment provides students and educators with meaningful feedback about learning and progress.",
    },
    {
      number: "04",
      title: "Improve",
      text:
        "The purpose of evaluation is to identify opportunities for improvement and encourage continuous learning.",
    },
  ];

  return (
    <main className="examinations-page">

      {/* HERO */}
      <section className="examinations-hero">
        <div className="examinations-container">

          <div className="examinations-hero-content">

            <div className="examinations-eyebrow">
              <span />
              EXAMINATIONS & ASSESSMENT
            </div>

            <h1>
              Measure learning.
              <br />
              <em>Build confidence.</em>
            </h1>

            <p>
              Assessment that helps students understand their
              progress, strengthen their learning and prepare
              for the challenges ahead.
            </p>

          </div>

          <div className="examinations-hero-side">
            <span>LEARN</span>
            <span>PRACTICE</span>
            <span>ASSESS</span>
            <span>IMPROVE</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="examinations-intro">
        <div className="examinations-container">

          <div className="examinations-intro-label">
            OUR APPROACH
          </div>

          <div className="examinations-intro-grid">

            <h2>
              Exams are
              <br />
              part of the <em>journey.</em>
            </h2>

            <div className="examinations-intro-copy">

              <p>
                At Shifan Noor Global Academy, assessment forms
                part of the wider learning process. It gives
                students opportunities to demonstrate their
                understanding and gives educators insight into
                student progress.
              </p>

              <p>
                The aim is not simply to produce examination
                results, but to help students develop strong
                learning habits, confidence and the ability
                to approach challenges responsibly.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ASSESSMENT PHILOSOPHY */}
      <section className="examinations-philosophy">

        <div className="examinations-container">

          <div className="examinations-philosophy-grid">

            <div className="examinations-philosophy-heading">

              <div className="examinations-eyebrow dark">
                ASSESSMENT PHILOSOPHY
              </div>

              <h2>
                From preparation
                <br />
                to <em>progress.</em>
              </h2>

            </div>

            <div className="examinations-philosophy-copy">

              <p>
                Assessment is an important part of academic
                learning. It helps students reflect on what
                they know, identify areas that need attention
                and continue developing their understanding.
              </p>

              <p>
                For educators, assessment provides valuable
                feedback that can support teaching and help
                address individual learning needs.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ASSESSMENT AREAS */}
      <section className="examinations-areas">

        <div className="examinations-container">

          <div className="examinations-areas-header">

            <div>

              <div className="examinations-eyebrow dark">
                WHAT ASSESSMENT SUPPORTS
              </div>

              <h2>
                More than
                <br />
                a <em>mark.</em>
              </h2>

            </div>

            <p>
              Assessment can provide a broader picture of
              student learning, understanding and progress.
            </p>

          </div>

          <div className="examinations-area-grid">

            {assessmentAreas.map((area) => (
              <article
                className="examinations-area"
                key={area.number}
              >

                <div className="examinations-area-top">

                  <span className="examinations-area-number">
                    {area.number}
                  </span>

                  <div className="examinations-area-icon">
                    {area.icon}
                  </div>

                </div>

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* LEARNING CYCLE */}
      <section className="examinations-cycle">

        <div className="examinations-container">

          <div className="examinations-cycle-header">

            <div className="examinations-eyebrow">
              THE LEARNING CYCLE
            </div>

            <h2>
              Prepare.
              <br />
              Perform.
              <br />
              <em>Progress.</em>
            </h2>

          </div>

          <div className="examinations-cycle-list">

            {principles.map((item) => (
              <article
                className="examinations-cycle-item"
                key={item.number}
              >

                <div className="examinations-cycle-number">
                  {item.number}
                </div>

                <div className="examinations-cycle-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* STUDENT SUPPORT */}
      <section className="examinations-support">

        <div className="examinations-container">

          <div className="examinations-support-grid">

            <div className="examinations-support-content">

              <div className="examinations-eyebrow dark">
                STUDENT SUPPORT
              </div>

              <h2>
                Confidence grows
                <br />
                when students <em>feel prepared.</em>
              </h2>

              <p>
                A positive academic environment encourages
                students to approach examinations with
                preparation, discipline and confidence.
              </p>

              <p>
                Teachers can guide students by identifying
                areas that need further attention and helping
                them develop stronger learning strategies.
              </p>

              <Link
                to="/faculties"
                className="examinations-link"
              >
                <span>Meet Our Educators</span>
                <FaArrowRight />
              </Link>

            </div>

            <div className="examinations-support-visual">

              <div className="examinations-support-number">
                01
              </div>

              <div className="examinations-support-title">
                PREPARE
                <br />
                WITH
                <br />
                PURPOSE
              </div>

              <p>
                Strong understanding.
                Consistent practice.
                Confident performance.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ACADEMIC EXCELLENCE */}
      <section className="examinations-excellence">

        <div className="examinations-container">

          <div className="examinations-excellence-inner">

            <div className="examinations-eyebrow">
              ACADEMIC EXCELLENCE
            </div>

            <h2>
              High expectations.
              <br />
              <em>Meaningful learning.</em>
            </h2>

            <p>
              SNGA's educational vision places importance
              on academic excellence while also recognising
              the development of skills, values, confidence
              and all-round growth.
            </p>

          </div>

        </div>

      </section>

      {/* FUTURE */}
      <section className="examinations-future">

        <div className="examinations-container">

          <div className="examinations-future-grid">

            <div className="examinations-future-heading">

              <div className="examinations-eyebrow dark">
                LOOKING AHEAD
              </div>

              <h2>
                Learning that
                <br />
                lasts beyond the <em>exam.</em>
              </h2>

            </div>

            <div className="examinations-future-copy">

              <p>
                The ultimate goal of education is to prepare
                students for life beyond school. Examinations
                are one part of that journey.
              </p>

              <p>
                Knowledge, communication, confidence,
                responsibility and the ability to face
                challenges are equally important outcomes
                of a complete education.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="examinations-cta">

        <div className="examinations-container">

          <div className="examinations-cta-content">

            <div className="examinations-eyebrow dark">
              EXPLORE ACADEMICS
            </div>

            <h2>
              Discover the
              <br />
              <em>learning experience.</em>
            </h2>

            <p>
              Explore SNGA's curriculum, faculty and academic
              environment.
            </p>

            <div className="examinations-actions">

              <Link
                to="/curriculum"
                className="examinations-button"
              >
                <span>Explore Curriculum</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/academics"
                className="examinations-secondary"
              >
                View Academics
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Examinations;