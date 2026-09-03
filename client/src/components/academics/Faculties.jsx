import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChalkboardTeacher,
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

import "./Faculties.css";

const Faculties = () => {
  const facultyPrinciples = [
    {
      number: "01",
      icon: <FaChalkboardTeacher />,
      title: "Teaching with Purpose",
      description:
        "Our educators create meaningful learning experiences that help students understand concepts and develop a genuine interest in learning.",
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Encouraging Curiosity",
      description:
        "Teachers encourage students to ask questions, explore ideas and become active participants in their own learning.",
    },
    {
      number: "03",
      icon: <FaUsers />,
      title: "Understanding Every Student",
      description:
        "Recognising that every child is different, our learning environment encourages individual attention and supportive relationships.",
    },
    {
      number: "04",
      icon: <FaGraduationCap />,
      title: "Growing Together",
      description:
        "Educators and students form a learning community where knowledge, skills, confidence and values develop together.",
    },
  ];

  const facultyRoles = [
    {
      number: "01",
      title: "Academic Educators",
      description:
        "Supporting students in building strong subject knowledge, understanding concepts and developing effective learning habits.",
    },
    {
      number: "02",
      title: "Activity & Co-Curricular Mentors",
      description:
        "Encouraging students to discover interests and develop creativity, communication, teamwork and confidence beyond academics.",
    },
    {
      number: "03",
      title: "Student Support",
      description:
        "Creating a positive school environment where students can seek guidance, participate confidently and grow responsibly.",
    },
  ];

  return (
    <main className="faculties-page">

      {/* HERO */}
      <section className="faculties-hero">
        <div className="faculties-container">

          <div className="faculties-hero-content">

            <div className="faculties-eyebrow">
              <span />
              FACULTY & EDUCATORS
            </div>

            <h1>
              Great learning
              <br />
              starts with <em>great people.</em>
            </h1>

            <p>
              A dedicated teaching community helping students
              learn, explore, grow and move forward with confidence.
            </p>

          </div>

          <div className="faculties-hero-side">
            <span>TEACH</span>
            <span>INSPIRE</span>
            <span>GUIDE</span>
            <span>EMPOWER</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="faculties-intro">
        <div className="faculties-container">

          <div className="faculties-intro-label">
            OUR TEACHING COMMUNITY
          </div>

          <div className="faculties-intro-grid">

            <h2>
              Teachers who
              <br />
              help students <em>grow.</em>
            </h2>

            <div className="faculties-intro-copy">

              <p>
                At Shifan Noor Global Academy, teachers play
                an important role in creating an environment
                where students can learn with curiosity,
                confidence and enthusiasm.
              </p>

              <p>
                Teaching extends beyond completing a syllabus.
                It is about helping students develop knowledge,
                skills, healthy attitudes, values and the
                confidence to face new challenges.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* FACULTY IMAGE / STATEMENT */}
      <section className="faculties-feature">

        <div className="faculties-container">

          <div className="faculties-feature-grid">

            <div className="faculties-feature-visual">

              <div className="faculties-feature-mark">
                <span>SNGA</span>
                <small>
                  LEARNING
                  <br />
                  COMMUNITY
                </small>
              </div>

            </div>

            <div className="faculties-feature-content">

              <div className="faculties-eyebrow dark">
                THE ROLE OF A TEACHER
              </div>

              <h2>
                More than
                <br />
                a <em>classroom.</em>
              </h2>

              <p>
                A teacher can influence how a student thinks,
                communicates, approaches challenges and sees
                their own potential.
              </p>

              <p>
                Our educators contribute to an environment
                where academic learning is supported by
                encouragement, discipline, participation
                and strong values.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRINCIPLES */}
      <section className="faculties-principles">

        <div className="faculties-container">

          <div className="faculties-principles-header">

            <div>

              <div className="faculties-eyebrow dark">
                OUR APPROACH
              </div>

              <h2>
                Teaching that
                <br />
                <em>makes a difference.</em>
              </h2>

            </div>

            <p>
              The teaching community supports the school's
              broader vision of developing knowledgeable,
              skilled, confident and responsible students.
            </p>

          </div>

          <div className="faculties-principles-grid">

            {facultyPrinciples.map((item) => (
              <article
                className="faculties-principle"
                key={item.number}
              >

                <div className="faculties-principle-top">

                  <span>
                    {item.number}
                  </span>

                  <div className="faculties-principle-icon">
                    {item.icon}
                  </div>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* FACULTY ROLES */}
      <section className="faculties-roles">

        <div className="faculties-container">

          <div className="faculties-roles-grid">

            <div className="faculties-roles-heading">

              <div className="faculties-eyebrow">
                A SHARED RESPONSIBILITY
              </div>

              <h2>
                Every educator
                <br />
                has a role in <em>growth.</em>
              </h2>

            </div>

            <div className="faculties-roles-list">

              {facultyRoles.map((role) => (
                <article
                  className="faculties-role"
                  key={role.number}
                >

                  <div className="faculties-role-number">
                    {role.number}
                  </div>

                  <div className="faculties-role-content">

                    <h3>
                      {role.title}
                    </h3>

                    <p>
                      {role.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* STUDENT CONNECTION */}
      <section className="faculties-connection">

        <div className="faculties-container">

          <div className="faculties-connection-inner">

            <div className="faculties-eyebrow">
              TEACHER & STUDENT
            </div>

            <h2>
              When students feel
              <br />
              supported, they <em>learn.</em>
            </h2>

            <p>
              A positive relationship between students and
              educators creates the confidence to ask questions,
              make mistakes, try again and discover new abilities.
            </p>

          </div>

        </div>

      </section>

      {/* FACULTY DIRECTORY */}
      <section className="faculties-directory">

        <div className="faculties-container">

          <div className="faculties-directory-header">

            <div>

              <div className="faculties-eyebrow dark">
                OUR PEOPLE
              </div>

              <h2>
                Meet the
                <br />
                <em>SNGA team.</em>
              </h2>

            </div>

            <p>
              This space can be connected to the school's
              faculty directory as individual educator profiles
              are added to the system.
            </p>

          </div>

          <div className="faculties-directory-placeholder">

            <span>FACULTY DIRECTORY</span>

            <h3>
              A growing community
              <br />
              of educators.
            </h3>

            <p>
              Faculty profiles, departments and educator
              information can be managed through the
              administration system.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="faculties-cta">

        <div className="faculties-container">

          <div className="faculties-cta-content">

            <div className="faculties-eyebrow dark">
              EXPLORE SNGA
            </div>

            <h2>
              Discover the people
              <br />
              behind the <em>learning.</em>
            </h2>

            <p>
              Explore our academic approach, campus and
              learning environment.
            </p>

            <div className="faculties-actions">

              <Link
                to="/academics"
                className="faculties-button"
              >
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/principal-message"
                className="faculties-secondary"
              >
                Principal's Message
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Faculties;