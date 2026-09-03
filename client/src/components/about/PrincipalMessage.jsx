import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./PrincipalMessage.css";

const PrincipalMessage = () => {
  return (
    <main className="principal-page">

      {/* HERO */}
      <section className="principal-hero">
        <div className="principal-container">
          <div className="principal-hero-content">

            <div className="principal-eyebrow">
              <span />
              PRINCIPAL'S MESSAGE
            </div>

            <h1>
              Education that
              <br />
              <em>helps children fly.</em>
            </h1>

            <p>
              A message from the Principal of
              Shifan Noor Global Academy.
            </p>

          </div>

          <div className="principal-hero-side">
            <span>SHIFAN NOOR</span>
            <span>GLOBAL ACADEMY</span>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="principal-quote">
        <div className="principal-container">

          <div className="principal-quote-mark">
            “
          </div>

          <blockquote>
            Excellence is always the result of
            <em>
              {" "}high intention, sincere efforts,
              intelligent direction and skillful execution.
            </em>
          </blockquote>

          <div className="principal-quote-line">
            <span />
            PRINCIPAL'S MESSAGE
          </div>

        </div>
      </section>

      {/* MESSAGE */}
      <section className="principal-message">
        <div className="principal-container">

          <div className="principal-message-grid">

            <div className="principal-message-label">
              <span>01</span>
              THE MESSAGE
            </div>

            <div className="principal-message-content">

              <h2>
                A school built around
                <br />
                <em>the whole child.</em>
              </h2>

              <p>
                Shifan Noor Global Academy (CBSE) is the
                embodiment of a generous vision by The Shifan
                Educational Trust. The Trust's commitment to
                education comes from a desire to give back to
                society through meaningful opportunities for
                children.
              </p>

              <p>
                SNGA was founded with the objective of extending
                excellence in education to children while
                recognising the importance of holistic development.
              </p>

              <p>
                We believe that education should help children
                grow not only academically, but also as confident,
                responsible and capable individuals.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* LEARNING */}
      <section className="principal-learning">
        <div className="principal-container">

          <div className="principal-learning-header">

            <div className="principal-eyebrow dark">
              OUR APPROACH
            </div>

            <h2>
              Learning should be
              <br />
              an <em>experience.</em>
            </h2>

            <p>
              At SNGA, learning extends beyond textbooks
              and examinations.
            </p>

          </div>

          <div className="principal-learning-grid">

            <article className="principal-learning-item">
              <span>01</span>

              <h3>
                Beyond the Classroom
              </h3>

              <p>
                Extra-curricular activities form an important
                part of school life, helping students explore
                their interests and experience learning in
                enjoyable ways.
              </p>
            </article>

            <article className="principal-learning-item">
              <span>02</span>

              <h3>
                Every Child is Unique
              </h3>

              <p>
                We value the uniqueness every child brings
                to our school and provide a supportive,
                child-centred environment.
              </p>
            </article>

            <article className="principal-learning-item">
              <span>03</span>

              <h3>
                Independent & Confident
              </h3>

              <p>
                Students are encouraged to become independent
                and self-confident learners who can approach
                challenges with responsibility.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* FUTURE */}
      <section className="principal-future">

        <div className="principal-container">

          <div className="principal-future-grid">

            <div className="principal-future-heading">

              <div className="principal-eyebrow">
                PREPARING FOR TOMORROW
              </div>

              <h2>
                Ready for a
                <br />
                <em>changing world.</em>
              </h2>

            </div>

            <div className="principal-future-content">

              <p>
                Our central aim is to prepare young people
                for the future in a changing world — one that
                demands flexibility, tolerance and a wide
                range of skills.
              </p>

              <p>
                We work towards enhancing the growth of
                children intellectually, morally, emotionally,
                physically and socially through an engaging
                and challenging curriculum.
              </p>

              <p>
                Wherever possible, teaching is tailored to
                the needs of individual students so that
                every child has the opportunity to develop
                confidence, independent learning and
                responsible thinking.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SIGNATURE */}
      <section className="principal-signature">

        <div className="principal-container">

          <div className="principal-signature-inner">

            <div className="principal-signature-copy">

              <div className="principal-eyebrow dark">
                WITH WARM REGARDS
              </div>

              <h2>
                The journey of
                <br />
                <em>every child matters.</em>
              </h2>

              <p>
                At SNGA, we remain committed to creating
                a stimulating and secure environment where
                students can discover their abilities,
                strengthen their character and prepare
                confidently for the future.
              </p>

              <div className="principal-signature-name">
                <strong>
                  Principal
                </strong>

                <span>
                  Shifan Noor Global Academy
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="principal-cta">

        <div className="principal-container">

          <div className="principal-cta-content">

            <div className="principal-eyebrow">
              EXPLORE SNGA
            </div>

            <h2>
              Discover the
              <br />
              <em>SNGA experience.</em>
            </h2>

            <p>
              Explore our academics, campus, facilities
              and the learning opportunities created
              for every student.
            </p>

            <div className="principal-cta-actions">

              <Link
                to="/academics"
                className="principal-cta-button"
              >
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/facilities"
                className="principal-cta-link"
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

export default PrincipalMessage;