import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGraduationCap,
  FaChartLine,
  FaBookOpen,
  FaTrophy,
} from "react-icons/fa";

import "./Results.css";

const Results = () => {
  const resultPillars = [
    {
      number: "01",
      icon: <FaBookOpen />,
      title: "Strong Foundations",
      description:
        "Students are encouraged to build a clear understanding of concepts and develop strong academic foundations.",
    },
    {
      number: "02",
      icon: <FaChartLine />,
      title: "Continuous Progress",
      description:
        "Learning and assessment help students identify their strengths, recognise areas for improvement and continue progressing.",
    },
    {
      number: "03",
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description:
        "The school maintains high academic expectations while encouraging students to approach learning with discipline and confidence.",
    },
    {
      number: "04",
      icon: <FaTrophy />,
      title: "Achievement",
      description:
        "Academic achievement is celebrated as part of a wider journey that includes skills, values, confidence and all-round development.",
    },
  ];

  const resultJourney = [
    {
      number: "01",
      title: "Learn",
      text:
        "Students build knowledge through classroom learning, digital learning experiences and practical activities.",
    },
    {
      number: "02",
      title: "Practice",
      text:
        "Regular engagement with concepts helps students strengthen understanding and develop effective learning habits.",
    },
    {
      number: "03",
      title: "Assess",
      text:
        "Assessment provides opportunities for students to demonstrate their understanding and for educators to evaluate progress.",
    },
    {
      number: "04",
      title: "Improve",
      text:
        "Feedback and reflection help students identify areas for improvement and continue developing their abilities.",
    },
  ];

  return (
    <main className="results-page">

      {/* HERO */}
      <section className="results-hero">
        <div className="results-container">

          <div className="results-hero-content">

            <div className="results-eyebrow">
              <span />
              ACADEMIC RESULTS
            </div>

            <h1>
              Achievement
              <br />
              built on <em>learning.</em>
            </h1>

            <p>
              Academic results are one part of a wider
              journey of knowledge, growth and achievement.
            </p>

          </div>

          <div className="results-hero-side">
            <span>LEARN</span>
            <span>PREPARE</span>
            <span>PERFORM</span>
            <span>ACHIEVE</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="results-intro">
        <div className="results-container">

          <div className="results-intro-label">
            OUR ACADEMIC OUTLOOK
          </div>

          <div className="results-intro-grid">

            <h2>
              Results matter.
              <br />
              But <em>learning matters more.</em>
            </h2>

            <div className="results-intro-copy">

              <p>
                At Shifan Noor Global Academy, academic
                achievement is supported by a learning
                environment designed to build understanding,
                skills and confidence.
              </p>

              <p>
                We believe meaningful results are developed
                through consistent learning, strong foundations,
                effective teaching and a student's willingness
                to improve.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* STATEMENT */}
      <section className="results-statement">

        <div className="results-container">

          <div className="results-statement-grid">

            <div className="results-statement-heading">

              <div className="results-eyebrow dark">
                THE BIGGER PICTURE
              </div>

              <h2>
                Every result
                <br />
                tells part of a <em>story.</em>
              </h2>

            </div>

            <div className="results-statement-copy">

              <p>
                A student's academic performance reflects
                learning at a particular point in time. The
                larger objective is to help students develop
                the knowledge, skills and confidence to
                continue learning throughout their lives.
              </p>

              <p>
                This is why academic expectations at SNGA
                are supported by opportunities for practical
                learning, communication, co-curricular
                participation and personal development.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PILLARS */}
      <section className="results-pillars">

        <div className="results-container">

          <div className="results-pillars-header">

            <div>

              <div className="results-eyebrow dark">
                WHAT BUILDS RESULTS
              </div>

              <h2>
                Strong outcomes
                <br />
                start with <em>strong foundations.</em>
              </h2>

            </div>

            <p>
              Academic achievement develops through a
              combination of understanding, preparation,
              consistency and continuous improvement.
            </p>

          </div>

          <div className="results-pillar-grid">

            {resultPillars.map((pillar) => (
              <article
                className="results-pillar"
                key={pillar.number}
              >

                <div className="results-pillar-top">

                  <span className="results-pillar-number">
                    {pillar.number}
                  </span>

                  <div className="results-pillar-icon">
                    {pillar.icon}
                  </div>

                </div>

                <h3>
                  {pillar.title}
                </h3>

                <p>
                  {pillar.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* JOURNEY */}
      <section className="results-journey">

        <div className="results-container">

          <div className="results-journey-header">

            <div className="results-eyebrow">
              THE ACADEMIC JOURNEY
            </div>

            <h2>
              Learn.
              <br />
              Improve.
              <br />
              <em>Achieve.</em>
            </h2>

          </div>

          <div className="results-journey-list">

            {resultJourney.map((item) => (
              <article
                className="results-journey-item"
                key={item.number}
              >

                <div className="results-journey-number">
                  {item.number}
                </div>

                <div className="results-journey-content">

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

      {/* EXAMINATION CONNECTION */}
      <section className="results-examinations">

        <div className="results-container">

          <div className="results-examinations-grid">

            <div className="results-examinations-content">

              <div className="results-eyebrow dark">
                RESULTS & ASSESSMENT
              </div>

              <h2>
                Performance is
                <br />
                part of the <em>process.</em>
              </h2>

              <p>
                Examinations and assessments provide
                opportunities for students to demonstrate
                what they have learned and understand where
                they can improve.
              </p>

              <p>
                A consistent approach to learning helps
                students approach examinations with greater
                preparation and confidence.
              </p>

              <Link
                to="/examinations"
                className="results-link"
              >
                <span>Explore Examinations</span>
                <FaArrowRight />
              </Link>

            </div>

            <div className="results-examinations-visual">

              <div className="results-visual-number">
                360°
              </div>

              <div className="results-visual-title">
                LEARNING
                <br />
                BEYOND
                <br />
                MARKS
              </div>

              <p>
                Knowledge.
                Skills.
                Confidence.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ACHIEVEMENT */}
      <section className="results-achievement">

        <div className="results-container">

          <div className="results-achievement-inner">

            <div className="results-eyebrow">
              A CULTURE OF EXCELLENCE
            </div>

            <h2>
              High expectations.
              <br />
              <em>Continuous growth.</em>
            </h2>

            <p>
              SNGA's academic vision encourages students
              to strive for excellence while recognising
              that every learner develops at their own pace.
            </p>

          </div>

        </div>

      </section>

      {/* FUTURE */}
      <section className="results-future">

        <div className="results-container">

          <div className="results-future-grid">

            <div className="results-future-heading">

              <div className="results-eyebrow dark">
                LOOKING AHEAD
              </div>

              <h2>
                Today's achievement
                <br />
                becomes tomorrow's <em>confidence.</em>
              </h2>

            </div>

            <div className="results-future-copy">

              <p>
                Academic success can give students confidence,
                but education should prepare them for challenges
                far beyond examinations.
              </p>

              <p>
                Knowledge, communication skills, responsibility,
                strong values and the ability to keep learning
                are equally important outcomes of a complete
                education.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* RESULTS DIRECTORY */}
      <section className="results-directory">

        <div className="results-container">

          <div className="results-directory-header">

            <div>

              <div className="results-eyebrow dark">
                RESULTS ARCHIVE
              </div>

              <h2>
                Academic
                <br />
                <em>performance.</em>
              </h2>

            </div>

            <p>
              Year-wise examination results, academic
              achievements and performance records can
              be published here as they are made available
              by the school.
            </p>

          </div>

          <div className="results-directory-placeholder">

            <span>
              ACADEMIC RESULTS
            </span>

            <h3>
              Results archive
              <br />
              coming together.
            </h3>

            <p>
              This section can be connected to the
              administration system to publish verified
              academic results and reports.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="results-cta">

        <div className="results-container">

          <div className="results-cta-content">

            <div className="results-eyebrow dark">
              EXPLORE ACADEMICS
            </div>

            <h2>
              Discover the
              <br />
              journey behind the <em>result.</em>
            </h2>

            <p>
              Explore our curriculum, examinations and
              academic learning environment.
            </p>

            <div className="results-actions">

              <Link
                to="/curriculum"
                className="results-button"
              >
                <span>Explore Curriculum</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/examinations"
                className="results-secondary"
              >
                View Examinations
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Results;