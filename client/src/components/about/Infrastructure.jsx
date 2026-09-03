import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaFlask,
  FaLaptop,
  FaChalkboardTeacher,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";

import "./Infrastructure.css";

const Infrastructure = () => {
  const facilities = [
    {
      number: "01",
      icon: <FaChalkboardTeacher />,
      title: "Digital Classrooms",
      description:
        "Every classroom is supported by digital learning facilities that encourage interactive teaching and help students engage with concepts in meaningful ways.",
    },
    {
      number: "02",
      icon: <FaBookOpen />,
      title: "Library",
      description:
        "A spacious library with more than 3,500 books, along with newspapers and magazines, provides students with opportunities for reading, exploration and independent study.",
    },
    {
      number: "03",
      icon: <FaFlask />,
      title: "Science Laboratories",
      description:
        "Dedicated Chemistry, Physics and Biology laboratories provide students with spaces to explore scientific concepts through practical learning.",
    },
    {
      number: "04",
      icon: <FaLaptop />,
      title: "Computer Laboratory",
      description:
        "A dedicated computer learning environment supports students in developing digital knowledge and essential technology skills.",
    },
    {
      number: "05",
      icon: <FaBuilding />,
      title: "Multipurpose Hall",
      description:
        "A multipurpose hall with a capacity of around 200 provides space for school activities, gatherings, learning experiences and events.",
    },
    {
      number: "06",
      icon: <FaUsers />,
      title: "Learning Environment",
      description:
        "Spacious classrooms, tiled corridors, good ventilation and a calm green campus create an environment designed around comfortable learning.",
    },
  ];

  const campusFeatures = [
    {
      number: "13.5",
      label: "ACRES",
      text: "Spacious green campus",
    },
    {
      number: "500",
      label: "SQ. FT.",
      text: "Approximate classroom size",
    },
    {
      number: "3,500+",
      label: "BOOKS",
      text: "Library collection",
    },
    {
      number: "200",
      label: "SEATS",
      text: "Multipurpose hall capacity",
    },
  ];

  return (
    <main className="infrastructure-page">

      {/* HERO */}
      <section className="infrastructure-hero">
        <div className="infrastructure-container">

          <div className="infrastructure-hero-content">

            <div className="infrastructure-eyebrow">
              <span />
              INFRASTRUCTURE
            </div>

            <h1>
              Spaces designed
              <br />
              for <em>possibility.</em>
            </h1>

            <p>
              A learning environment where classrooms,
              technology, laboratories and open spaces
              come together to support every student's journey.
            </p>

          </div>

          <div className="infrastructure-hero-side">
            <span>LEARN</span>
            <span>EXPLORE</span>
            <span>CREATE</span>
            <span>GROW</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="infrastructure-intro">
        <div className="infrastructure-container">

          <div className="infrastructure-intro-label">
            THE SNGA CAMPUS
          </div>

          <div className="infrastructure-intro-grid">

            <h2>
              A campus built
              <br />
              around <em>learning.</em>
            </h2>

            <div className="infrastructure-intro-copy">

              <p>
                Shifan Noor Global Academy is situated on
                a 13.5-acre campus at Venkulam on the
                Ramanathapuram–Devipattinam main road.
              </p>

              <p>
                Set within a calm, serene and lush green
                environment, the campus provides students
                with a spacious setting away from the dust
                and noise of busy surroundings.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CAMPUS STATS */}
      <section className="infrastructure-stats">
        <div className="infrastructure-container">

          <div className="infrastructure-stats-header">

            <div className="infrastructure-eyebrow dark">
              AT A GLANCE
            </div>

            <h2>
              Built to make
              <br />
              learning <em>comfortable.</em>
            </h2>

          </div>

          <div className="infrastructure-stat-grid">

            {campusFeatures.map((item) => (
              <div
                className="infrastructure-stat"
                key={item.label}
              >

                <div className="infrastructure-stat-number">
                  {item.number}
                </div>

                <div className="infrastructure-stat-label">
                  {item.label}
                </div>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CLASSROOMS */}
      <section className="infrastructure-classrooms">

        <div className="infrastructure-container">

          <div className="infrastructure-classrooms-grid">

            <div className="infrastructure-classrooms-content">

              <div className="infrastructure-eyebrow dark">
                THE CLASSROOM
              </div>

              <h2>
                Where everyday
                <br />
                learning <em>happens.</em>
              </h2>

              <p>
                Each classroom is designed with approximately
                500 square feet of space and provides good
                lighting, ventilation and essential learning
                facilities.
              </p>

              <p>
                Digital classroom facilities further support
                interactive teaching and give educators
                opportunities to bring concepts to life.
              </p>

              <Link
                to="/academics"
                className="infrastructure-link"
              >
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>

            </div>

            <div className="infrastructure-classrooms-visual">

              <div className="infrastructure-visual-number">
                500
              </div>

              <div className="infrastructure-visual-unit">
                SQ. FT.
              </div>

              <p>
                Approximate classroom
                space designed for
                comfortable learning.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FACILITIES */}
      <section className="infrastructure-facilities">

        <div className="infrastructure-container">

          <div className="infrastructure-facilities-header">

            <div>

              <div className="infrastructure-eyebrow dark">
                LEARNING FACILITIES
              </div>

              <h2>
                More than
                <br />
                <em>four walls.</em>
              </h2>

            </div>

            <p>
              Different learning spaces allow students
              to explore subjects, develop skills and
              experience learning beyond the traditional
              classroom.
            </p>

          </div>

          <div className="infrastructure-facility-grid">

            {facilities.map((facility) => (
              <article
                className="infrastructure-facility"
                key={facility.number}
              >

                <div className="infrastructure-facility-top">

                  <span>
                    {facility.number}
                  </span>

                  <div className="infrastructure-facility-icon">
                    {facility.icon}
                  </div>

                </div>

                <h3>
                  {facility.title}
                </h3>

                <p>
                  {facility.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* LEARNING BEYOND CLASSROOM */}
      <section className="infrastructure-beyond">

        <div className="infrastructure-container">

          <div className="infrastructure-beyond-grid">

            <div className="infrastructure-beyond-heading">

              <div className="infrastructure-eyebrow">
                BEYOND THE CLASSROOM
              </div>

              <h2>
                Learning needs
                <br />
                room to <em>move.</em>
              </h2>

            </div>

            <div className="infrastructure-beyond-copy">

              <p>
                The SNGA campus is designed to support
                different dimensions of student life.
              </p>

              <p>
                From science experiments and computer
                learning to reading, school gatherings
                and collaborative activities, students
                have access to spaces that encourage
                exploration and participation.
              </p>

              <Link
                to="/campus"
                className="infrastructure-link light"
              >
                <span>Explore Our Campus</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ENVIRONMENT */}
      <section className="infrastructure-environment">

        <div className="infrastructure-container">

          <div className="infrastructure-environment-header">

            <div className="infrastructure-eyebrow dark">
              THE ENVIRONMENT
            </div>

            <h2>
              A calm place to
              <br />
              <em>think, learn and grow.</em>
            </h2>

            <p>
              The physical environment plays an important
              role in creating a positive learning experience.
            </p>

          </div>

          <div className="infrastructure-environment-list">

            <div className="infrastructure-environment-item">
              <span>01</span>
              <h3>Light & Ventilation</h3>
              <p>
                Classrooms designed with attention to
                natural light and ventilation.
              </p>
            </div>

            <div className="infrastructure-environment-item">
              <span>02</span>
              <h3>Green Surroundings</h3>
              <p>
                A spacious, calm and lush green campus
                supporting a peaceful learning atmosphere.
              </p>
            </div>

            <div className="infrastructure-environment-item">
              <span>03</span>
              <h3>Thoughtful Spaces</h3>
              <p>
                Learning spaces planned to support
                academics, interaction and school life.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="infrastructure-cta">

        <div className="infrastructure-container">

          <div className="infrastructure-cta-content">

            <div className="infrastructure-eyebrow dark">
              DISCOVER SNGA
            </div>

            <h2>
              See where
              <br />
              <em>learning happens.</em>
            </h2>

            <p>
              Explore our campus, facilities and the
              experiences that make everyday school life
              meaningful.
            </p>

            <div className="infrastructure-actions">

              <Link
                to="/campus"
                className="infrastructure-button"
              >
                <span>Explore Campus</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/gallery"
                className="infrastructure-secondary"
              >
                View Gallery
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Infrastructure;