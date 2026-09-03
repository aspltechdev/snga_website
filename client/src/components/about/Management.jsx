import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./Management.css";

const Management = () => {
  const leadership = [
    {
      role: "FOUNDER",
      name: "Dr. Mansoor",
      image: "/images/management/founder.jpg",
      description:
        "A vision centred on creating an environment where education develops knowledge, confidence, values and the potential of every student.",
    },
    {
      role: "SCHOOL LEADERSHIP",
      name: "Academic & Educational Leadership",
      image: "/images/management/leadership.jpg",
      description:
        "Guiding students and educators towards meaningful learning, academic growth and the development of strong personal values.",
    },
    {
      role: "OUR EDUCATORS",
      name: "Dedicated Teaching Community",
      image: "/images/management/teachers.jpg",
      description:
        "A committed learning community focused on creating engaging classrooms and supporting students in their academic and personal journey.",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Student First",
      text:
        "Every decision begins with the learning, development and wellbeing of our students.",
    },
    {
      number: "02",
      title: "Academic Excellence",
      text:
        "We encourage strong subject understanding, curiosity and a continuous desire to learn.",
    },
    {
      number: "03",
      title: "Character & Values",
      text:
        "Education is strengthened by healthy attitudes, responsibility, confidence and human values.",
    },
    {
      number: "04",
      title: "Future Ready",
      text:
        "Students are encouraged to develop the skills, confidence and adaptability needed for the challenges ahead.",
    },
  ];

  return (
    <main className="management-page">

      {/* HERO */}
      <section className="management-hero">
        <div className="management-container">
          <div className="management-hero-content">

            <div className="management-eyebrow">
              <span />
              SCHOOL MANAGEMENT
            </div>

            <h1>
              Leadership with
              <br />
              <em>a purpose.</em>
            </h1>

            <p>
              The people and educational vision behind
              Shifan Noor Global Academy.
            </p>

          </div>

          <div className="management-hero-mark">
            <span>SNGA</span>
            <small>ESTABLISHING<br />A CULTURE OF LEARNING</small>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="management-intro">
        <div className="management-container">

          <div className="management-intro-label">
            OUR LEADERSHIP
          </div>

          <div className="management-intro-grid">

            <h2>
              Education needs
              <br />
              <em>direction.</em>
            </h2>

            <div className="management-intro-copy">
              <p>
                Shifan Noor Global Academy is guided by an
                educational vision that looks beyond academic
                achievement.
              </p>

              <p>
                The school seeks to create a learning environment
                where students can build knowledge, develop skills,
                strengthen values and grow with confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="management-leadership">
        <div className="management-container">

          <div className="management-section-heading">

            <div className="management-eyebrow dark">
              THE PEOPLE BEHIND SNGA
            </div>

            <h2>
              A community built
              <br />
              around <em>education.</em>
            </h2>

          </div>

          <div className="management-leadership-grid">

            {leadership.map((person, index) => (
              <article
                className={`management-person management-person-${index + 1}`}
                key={person.role}
              >

                <div className="management-person-image">

                  <img
                    src={person.image}
                    alt={person.name}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="management-person-number">
                    0{index + 1}
                  </div>

                </div>

                <div className="management-person-content">

                  <div className="management-person-role">
                    {person.role}
                  </div>

                  <h3>{person.name}</h3>

                  <p>{person.description}</p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="management-philosophy">

        <div className="management-container">

          <div className="management-philosophy-grid">

            <div className="management-philosophy-heading">

              <div className="management-eyebrow">
                OUR APPROACH
              </div>

              <h2>
                Lead the school.
                <br />
                <em>Grow the student.</em>
              </h2>

            </div>

            <div className="management-philosophy-copy">

              <p>
                Strong educational leadership creates the
                foundation for strong learning. At SNGA,
                management, educators and the wider school
                community work towards creating an environment
                where students can discover their potential.
              </p>

              <p>
                The focus extends across academics,
                communication, co-curricular experiences,
                confidence, discipline and values.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="management-values">

        <div className="management-container">

          <div className="management-values-header">

            <div>
              <div className="management-eyebrow dark">
                WHAT GUIDES US
              </div>

              <h2>
                Principles that
                <br />
                shape <em>everyday learning.</em>
              </h2>
            </div>

            <p>
              The school's educational approach is built
              around developing students academically,
              personally and socially.
            </p>

          </div>

          <div className="management-values-list">

            {values.map((value) => (
              <article
                className="management-value"
                key={value.number}
              >

                <div className="management-value-number">
                  {value.number}
                </div>

                <div className="management-value-content">

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* COMMUNITY */}
      <section className="management-community">

        <div className="management-container">

          <div className="management-community-inner">

            <div className="management-eyebrow">
              BE PART OF SNGA
            </div>

            <h2>
              A school is more
              <br />
              than its <em>buildings.</em>
            </h2>

            <p>
              It is the people, relationships and experiences
              that create a meaningful educational journey.
            </p>

            <Link
              to="/contact"
              className="management-cta"
            >
              <span>Connect With SNGA</span>
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Management;