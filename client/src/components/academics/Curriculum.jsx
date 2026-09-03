import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaLightbulb,
  FaUsers,
  FaFlask,
  FaLaptop,
  FaHeart,
} from "react-icons/fa";

import "./Curriculum.css";

const Curriculum = () => {
  const learningAreas = [
    {
      number: "01",
      icon: <FaBookOpen />,
      title: "Academic Learning",
      description:
        "A structured learning experience that helps students build strong foundations, understand concepts and develop a lasting interest in learning.",
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Curiosity & Exploration",
      description:
        "Students are encouraged to ask questions, explore ideas and develop the curiosity needed for meaningful and independent learning.",
    },
    {
      number: "03",
      icon: <FaFlask />,
      title: "Practical Learning",
      description:
        "Laboratory experiences and activity-based learning create opportunities for students to connect concepts with practical experiences.",
    },
    {
      number: "04",
      icon: <FaLaptop />,
      title: "Digital Learning",
      description:
        "Digital classroom facilities support interactive teaching and provide additional ways for students to understand and engage with concepts.",
    },
    {
      number: "05",
      icon: <FaUsers />,
      title: "Co-Curricular Growth",
      description:
        "Learning extends beyond academic subjects through activities that encourage participation, communication, creativity and collaboration.",
    },
    {
      number: "06",
      icon: <FaHeart />,
      title: "Values & Character",
      description:
        "The curriculum experience is supported by opportunities to develop healthy attitudes, responsibility, confidence and strong human values.",
    },
  ];

  const curriculumPrinciples = [
    {
      number: "01",
      title: "Understand",
      text:
        "Build meaningful knowledge and develop a strong understanding of what is being learned.",
    },
    {
      number: "02",
      title: "Explore",
      text:
        "Encourage curiosity, questioning and discovery so students become active participants in learning.",
    },
    {
      number: "03",
      title: "Apply",
      text:
        "Connect classroom knowledge with practical experiences, activities and real-world situations.",
    },
    {
      number: "04",
      title: "Grow",
      text:
        "Develop communication, confidence, values and personal responsibility alongside academic learning.",
    },
  ];

  return (
    <main className="curriculum-page">

      {/* HERO */}
      <section className="curriculum-hero">
        <div className="curriculum-container">

          <div className="curriculum-hero-content">

            <div className="curriculum-eyebrow">
              <span />
              CURRICULUM
            </div>

            <h1>
              Learning with
              <br />
              <em>purpose.</em>
            </h1>

            <p>
              A learning approach designed to build knowledge,
              develop skills and prepare students for the future.
            </p>

          </div>

          <div className="curriculum-hero-side">
            <span>KNOWLEDGE</span>
            <span>EXPLORATION</span>
            <span>SKILLS</span>
            <span>VALUES</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="curriculum-intro">
        <div className="curriculum-container">

          <div className="curriculum-intro-label">
            OUR APPROACH TO LEARNING
          </div>

          <div className="curriculum-intro-grid">

            <h2>
              More than
              <br />
              <em>memorising.</em>
            </h2>

            <div className="curriculum-intro-copy">

              <p>
                At Shifan Noor Global Academy, learning is
                approached as a process of understanding,
                exploration and personal development.
              </p>

              <p>
                The learning environment brings academic
                knowledge together with skills, practical
                experiences, technology, co-curricular
                participation and values.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CURRICULUM PHILOSOPHY */}
      <section className="curriculum-philosophy">

        <div className="curriculum-container">

          <div className="curriculum-philosophy-grid">

            <div className="curriculum-philosophy-heading">

              <div className="curriculum-eyebrow dark">
                LEARNING PHILOSOPHY
              </div>

              <h2>
                From knowledge
                <br />
                to <em>confidence.</em>
              </h2>

            </div>

            <div className="curriculum-philosophy-copy">

              <p>
                A strong curriculum should help students
                understand what they learn while developing
                the ability to communicate, think, participate
                and apply their knowledge.
              </p>

              <p>
                Our approach therefore looks at the student
                as a whole and creates opportunities for
                academic, intellectual, social, emotional
                and personal growth.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* LEARNING AREAS */}
      <section className="curriculum-areas">

        <div className="curriculum-container">

          <div className="curriculum-areas-header">

            <div>

              <div className="curriculum-eyebrow dark">
                LEARNING EXPERIENCE
              </div>

              <h2>
                Different ways
                <br />
                to <em>learn.</em>
              </h2>

            </div>

            <p>
              Students experience learning through classrooms,
              technology, practical activities, co-curricular
              experiences and opportunities for personal growth.
            </p>

          </div>

          <div className="curriculum-area-grid">

            {learningAreas.map((area) => (
              <article
                className="curriculum-area"
                key={area.number}
              >

                <div className="curriculum-area-top">

                  <span className="curriculum-area-number">
                    {area.number}
                  </span>

                  <div className="curriculum-area-icon">
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

      {/* LEARNING JOURNEY */}
      <section className="curriculum-journey">

        <div className="curriculum-container">

          <div className="curriculum-journey-header">

            <div className="curriculum-eyebrow">
              THE LEARNING JOURNEY
            </div>

            <h2>
              Understand.
              <br />
              Explore.
              <br />
              <em>Grow.</em>
            </h2>

          </div>

          <div className="curriculum-journey-list">

            {curriculumPrinciples.map((item) => (
              <article
                className="curriculum-journey-item"
                key={item.number}
              >

                <div className="curriculum-journey-number">
                  {item.number}
                </div>

                <div className="curriculum-journey-content">

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

      {/* DIGITAL + PRACTICAL */}
      <section className="curriculum-modern">

        <div className="curriculum-container">

          <div className="curriculum-modern-grid">

            <div className="curriculum-modern-content">

              <div className="curriculum-eyebrow dark">
                MODERN LEARNING
              </div>

              <h2>
                Connecting the
                <br />
                classroom to the <em>world.</em>
              </h2>

              <p>
                Digital classrooms provide opportunities
                for interactive teaching, while laboratories,
                library spaces and other learning environments
                allow students to experience education through
                different formats.
              </p>

              <p>
                This combination helps students move beyond
                passive learning and become more engaged in
                the learning process.
              </p>

              <Link
                to="/infrastructure"
                className="curriculum-link"
              >
                <span>Explore Infrastructure</span>
                <FaArrowRight />
              </Link>

            </div>

            <div className="curriculum-modern-visual">

              <div className="curriculum-modern-number">
                360°
              </div>

              <div className="curriculum-modern-label">
                LEARNING
                <br />
                EXPERIENCE
              </div>

              <p>
                Knowledge, skills, activities
                and values working together.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHOLE CHILD */}
      <section className="curriculum-whole-child">

        <div className="curriculum-container">

          <div className="curriculum-whole-child-grid">

            <div className="curriculum-whole-child-heading">

              <div className="curriculum-eyebrow dark">
                BEYOND ACADEMICS
              </div>

              <h2>
                Developing the
                <br />
                <em>whole child.</em>
              </h2>

            </div>

            <div className="curriculum-whole-child-copy">

              <p>
                Education at SNGA extends beyond academic
                achievement. Students are encouraged to
                participate in sports, co-curricular and
                extracurricular activities.
              </p>

              <p>
                These experiences help students discover
                interests, build confidence, develop
                communication skills and learn to work
                with others.
              </p>

              <Link
                to="/sports"
                className="curriculum-link"
              >
                <span>Explore Student Life</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* OUTCOME */}
      <section className="curriculum-outcome">

        <div className="curriculum-container">

          <div className="curriculum-outcome-inner">

            <div className="curriculum-eyebrow">
              THE OUTCOME
            </div>

            <h2>
              Knowledge to
              <br />
              <em>face the future.</em>
            </h2>

            <p>
              Our goal is to help students leave school
              with knowledge, skills, healthy attitudes,
              strong values and the confidence to approach
              new challenges.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="curriculum-cta">

        <div className="curriculum-container">

          <div className="curriculum-cta-content">

            <div className="curriculum-eyebrow dark">
              EXPLORE ACADEMICS
            </div>

            <h2>
              Discover how
              <br />
              <em>students learn.</em>
            </h2>

            <p>
              Explore the academic environment, learning
              spaces and opportunities available at SNGA.
            </p>

            <div className="curriculum-actions">

              <Link
                to="/academics"
                className="curriculum-button"
              >
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/facilities"
                className="curriculum-secondary"
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

export default Curriculum;