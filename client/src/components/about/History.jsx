import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBookOpen,
  FaFlask,
  FaLaptop,
  FaUsers,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";

import "./History.css";

const History = () => {
  const milestones = [
    {
      number: "01",
      title: "A Place for Peaceful Learning",
      description:
        "Set in a calm, serene and lush green environment at Venkulam on the Ramanathapuram–Devipattinam main road, SNGA was envisioned as a place where students could learn away from the dust and noise of city life.",
    },
    {
      number: "02",
      title: "A Campus Designed for Learning",
      description:
        "The school campus spans 13.5 acres and provides students with thoughtfully planned spaces designed to support academic learning, exploration, interaction and personal growth.",
    },
    {
      number: "03",
      title: "Learning Meets Technology",
      description:
        "Every classroom is supported by digital learning facilities, creating opportunities for interactive teaching and helping students engage with concepts beyond traditional textbooks.",
    },
    {
      number: "04",
      title: "Beyond the Classroom",
      description:
        "The learning environment extends into a well-equipped library, science laboratories, computer facilities and a multipurpose hall, giving students opportunities to learn through varied experiences.",
    },
  ];

  const facilities = [
    {
      icon: <FaBookOpen />,
      number: "3,500+",
      label: "Books in the Library",
    },
    {
      icon: <FaFlask />,
      number: "03",
      label: "Science Laboratories",
    },
    {
      icon: <FaLaptop />,
      number: "01",
      label: "Computer Learning Lab",
    },
    {
      icon: <FaUsers />,
      number: "200",
      label: "Multipurpose Hall Capacity",
    },
  ];

  const principles = [
    {
      icon: <FaLightbulb />,
      title: "Knowledge",
      text:
        "Building a strong foundation of understanding and academic knowledge.",
    },
    {
      icon: <FaUsers />,
      title: "Skills",
      text:
        "Helping students develop practical abilities and communicate with confidence.",
    },
    {
      icon: <FaHeart />,
      title: "Values",
      text:
        "Encouraging healthy attitudes, responsibility and strong human values.",
    },
  ];

  return (
    <main className="history-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="history-hero">

        <div className="history-hero-container">

          <div className="history-hero-content">

            <div className="history-eyebrow">
              <span />
              OUR STORY
            </div>

            <h1>
              A place where
              <br />
              <em>learning grows.</em>
            </h1>

            <p>
              Discover the journey, philosophy and learning
              environment that shape Shifan Noor Global
              Academy.
            </p>

          </div>

          <div className="history-hero-side">
            <span>SHIFAN NOOR</span>
            <span>GLOBAL ACADEMY</span>
          </div>

        </div>

      </section>

      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="history-intro">

        <div className="history-container">

          <div className="history-intro-label">
            ABOUT THE INSTITUTION
          </div>

          <div className="history-intro-grid">

            <h2>
              Creating an environment
              <br />
              where every student can
              <em> discover their potential.</em>
            </h2>

            <div className="history-intro-copy">

              <p>
                Shifan Noor Global Academy is located in
                Venkulam, on the Ramanathapuram–Devipattinam
                main road. Its campus is set within a calm,
                serene and lush green environment designed
                to provide students with a peaceful setting
                for learning.
              </p>

              <p>
                The school's educational approach recognises
                that learning is more than acquiring academic
                knowledge. It includes developing skills,
                healthy attitudes, confidence and values that
                prepare students for the challenges ahead.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          CAMPUS STATEMENT
      ================================================= */}

      <section className="history-campus">

        <div className="history-container">

          <div className="history-campus-grid">

            <div className="history-campus-content">

              <div className="history-eyebrow dark">
                THE CAMPUS
              </div>

              <h2>
                13.5 acres
                <br />
                <em>built around learning.</em>
              </h2>

              <p>
                The SNGA campus provides a spacious environment
                where students can learn, explore and participate
                in activities beyond the classroom.
              </p>

              <Link
                to="/facilities"
                className="history-link"
              >
                <span>Explore Our Facilities</span>
                <FaArrowRight />
              </Link>

            </div>

            <div className="history-campus-stat">

              <span className="history-big-number">
                13.5
              </span>

              <span className="history-big-label">
                ACRES
              </span>

              <p>
                A calm and green campus designed
                for a peaceful learning environment.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          MILESTONES
      ================================================= */}

      <section className="history-milestones">

        <div className="history-container">

          <div className="history-section-heading">

            <div className="history-eyebrow dark">
              THE JOURNEY
            </div>

            <h2>
              Designed for
              <br />
              <em>the whole student.</em>
            </h2>

          </div>

          <div className="history-milestone-list">

            {milestones.map((item) => (
              <article
                className="history-milestone"
                key={item.number}
              >

                <div className="history-milestone-number">
                  {item.number}
                </div>

                <div className="history-milestone-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          FACILITIES
      ================================================= */}

      <section className="history-facilities">

        <div className="history-container">

          <div className="history-facilities-header">

            <div>
              <div className="history-eyebrow">
                LEARNING INFRASTRUCTURE
              </div>

              <h2>
                Spaces that make
                <br />
                <em>learning tangible.</em>
              </h2>
            </div>

            <p>
              From digital classrooms to laboratories and
              library spaces, the campus brings different
              dimensions of learning together.
            </p>

          </div>

          <div className="history-facility-grid">

            {facilities.map((facility) => (
              <div
                className="history-facility"
                key={facility.label}
              >

                <div className="history-facility-icon">
                  {facility.icon}
                </div>

                <div className="history-facility-number">
                  {facility.number}
                </div>

                <div className="history-facility-label">
                  {facility.label}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          EDUCATIONAL PHILOSOPHY
      ================================================= */}

      <section className="history-philosophy">

        <div className="history-container">

          <div className="history-philosophy-heading">

            <div className="history-eyebrow dark">
              OUR PHILOSOPHY
            </div>

            <h2>
              Education is more than
              <br />
              <em>what happens in a classroom.</em>
            </h2>

          </div>

          <div className="history-principles">

            {principles.map((item) => (
              <div
                className="history-principle"
                key={item.title}
              >

                <div className="history-principle-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          VISION
      ================================================= */}

      <section className="history-vision">

        <div className="history-container">

          <div className="history-vision-content">

            <div className="history-eyebrow">
              LOOKING AHEAD
            </div>

            <h2>
              Building confident
              <br />
              <em>Shifanians.</em>
            </h2>

            <p>
              SNGA's vision is to help every student complete
              their schooling with enthusiasm, confidence,
              high self-esteem and a readiness to meet new
              challenges.
            </p>

            <p>
              The school seeks to maintain high academic,
              social and moral expectations while creating
              a world-class ambience and widening opportunities
              for students.
            </p>

          </div>

        </div>

      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="history-cta">

        <div className="history-container">

          <div className="history-cta-content">

            <span>
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <h2>
              The journey
              <br />
              <em>continues.</em>
            </h2>

            <p>
              Explore the people, spaces and experiences
              that make SNGA a place for meaningful learning.
            </p>

            <Link
              to="/about"
              className="history-cta-button"
            >
              <span>Discover SNGA</span>
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default History;