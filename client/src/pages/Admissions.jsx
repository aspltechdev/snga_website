import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import admissionService from "../services/admission.service";
import "./Admissions.css";

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    className: "",
    mobile: "",
    email: "",
    location: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const admissionSteps = [
    {
      number: "01",
      title: "Make an Enquiry",
      text:
        "Share your details with our admissions team and tell us about the student and class you are enquiring for.",
    },
    {
      number: "02",
      title: "Connect With Us",
      text:
        "Our team can guide you through the admission process, school environment and the next steps.",
    },
    {
      number: "03",
      title: "Visit the School",
      text:
        "Experience the SNGA campus and understand the learning environment, facilities and school community.",
    },
    {
      number: "04",
      title: "Complete Admission",
      text:
        "Proceed with the required admission formalities and documentation as guided by the school.",
    },
  ];

  const reasons = [
    "Holistic and value-based education",
    "13.5-acre learning environment",
    "Digital classroom facilities",
    "Science and computer laboratories",
    "Library with 3,500+ books",
    "Academic, sports and co-curricular opportunities",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      await admissionService.createEnquiry(formData);

      setSuccess(
        "Thank you. Your admission enquiry has been submitted successfully."
      );

      setFormData({
        parentName: "",
        studentName: "",
        className: "",
        mobile: "",
        email: "",
        location: "",
        message: "",
      });
    } catch (err) {
      console.error("Admission enquiry error:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="admissions-page">

      {/* HERO */}
      <section className="admissions-hero">
        <div className="admissions-container">

          <div className="admissions-hero-content">

            <div className="admissions-eyebrow">
              <span />
              ADMISSIONS
            </div>

            <h1>
              Begin your child's
              <br />
              journey with <em>SNGA.</em>
            </h1>

            <p>
              Discover a learning environment where knowledge,
              skills, values and confidence come together.
            </p>

            <a
              href="#admission-enquiry"
              className="admissions-hero-button"
            >
              <span>Start an Enquiry</span>
              <FaArrowRight />
            </a>

          </div>

          <div className="admissions-hero-side">
            <span>LEARN</span>
            <span>GROW</span>
            <span>DISCOVER</span>
            <span>LEAD</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="admissions-intro">
        <div className="admissions-container">

          <div className="admissions-intro-label">
            WHY SNGA
          </div>

          <div className="admissions-intro-grid">

            <h2>
              A school built
              <br />
              for <em>complete growth.</em>
            </h2>

            <div className="admissions-intro-copy">

              <p>
                At Shifan Noor Global Academy, education goes
                beyond academic achievement. Students are
                encouraged to build knowledge, develop skills,
                strengthen values and grow with confidence.
              </p>

              <p>
                Our campus, classrooms, laboratories, library,
                sports and co-curricular opportunities create
                different spaces for students to learn and
                discover their potential.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="admissions-highlights">

        <div className="admissions-container">

          <div className="admissions-highlights-header">

            <div>

              <div className="admissions-eyebrow dark">
                THE SNGA EXPERIENCE
              </div>

              <h2>
                More than
                <br />
                a <em>school.</em>
              </h2>

            </div>

            <p>
              An environment designed to support academic,
              personal and all-round student development.
            </p>

          </div>

          <div className="admissions-highlights-list">

            {reasons.map((reason, index) => (
              <div
                className="admissions-highlight"
                key={reason}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <FaCheck />
                  <p>{reason}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ADMISSION PROCESS */}
      <section className="admissions-process">

        <div className="admissions-container">

          <div className="admissions-process-header">

            <div>

              <div className="admissions-eyebrow dark">
                ADMISSION PROCESS
              </div>

              <h2>
                Simple steps.
                <br />
                <em>Clear guidance.</em>
              </h2>

            </div>

            <p>
              Our admissions team can guide parents through
              the process and help answer questions about
              joining SNGA.
            </p>

          </div>

          <div className="admissions-process-list">

            {admissionSteps.map((step) => (
              <article
                className="admissions-process-item"
                key={step.number}
              >

                <div className="admissions-process-number">
                  {step.number}
                </div>

                <div className="admissions-process-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* CAMPUS */}
      <section className="admissions-campus">

        <div className="admissions-container">

          <div className="admissions-campus-grid">

            <div className="admissions-campus-content">

              <div className="admissions-eyebrow dark">
                EXPERIENCE THE CAMPUS
              </div>

              <h2>
                13.5 acres
                <br />
                of <em>possibility.</em>
              </h2>

              <p>
                Located at Venkulam on the
                Ramanathapuram–Devipattinam main road,
                the SNGA campus provides a calm, serene
                and lush green environment for learning.
              </p>

              <Link
                to="/infrastructure"
                className="admissions-link"
              >
                <span>Explore Infrastructure</span>
                <FaArrowRight />
              </Link>

            </div>

            <div className="admissions-campus-stat">

              <strong>
                13.5
              </strong>

              <span>
                ACRES
              </span>

              <p>
                A spacious campus created
                around a peaceful learning
                environment.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ENQUIRY */}
      <section
        className="admissions-enquiry"
        id="admission-enquiry"
      >

        <div className="admissions-container">

          <div className="admissions-enquiry-grid">

            <div className="admissions-enquiry-content">

              <div className="admissions-eyebrow">
                ADMISSION ENQUIRY
              </div>

              <h2>
                Let's start the
                <br />
                <em>conversation.</em>
              </h2>

              <p>
                Share your details and our admissions team
                can get in touch with you regarding your
                enquiry.
              </p>

              <div className="admissions-contact">

                <a href="tel:+919788914441">
                  <FaPhone />
                  <span>
                    <small>CALL US</small>
                    +91 97889 14441
                  </span>
                </a>

                <a href="mailto:info@sngacbse.com">
                  <FaEnvelope />
                  <span>
                    <small>EMAIL US</small>
                    info@sngacbse.com
                  </span>
                </a>

              </div>

            </div>

            <div className="admissions-form-wrap">

              <form
                className="admissions-form"
                onSubmit={handleSubmit}
              >

                <div className="admissions-form-header">
                  <span>01</span>
                  <h3>
                    Student Details
                  </h3>
                </div>

                <div className="admissions-form-grid">

                  <div className="admissions-field">
                    <label htmlFor="parentName">
                      Parent / Guardian Name *
                    </label>

                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent name"
                      required
                    />
                  </div>

                  <div className="admissions-field">
                    <label htmlFor="studentName">
                      Student Name *
                    </label>

                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter student name"
                      required
                    />
                  </div>

                  <div className="admissions-field">
                    <label htmlFor="className">
                      Class *
                    </label>

                    <select
                      id="className"
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select class
                      </option>

                      <option value="Pre-KG">
                        Pre-KG
                      </option>

                      <option value="LKG">
                        LKG
                      </option>

                      <option value="UKG">
                        UKG
                      </option>

                      {Array.from(
                        { length: 12 },
                        (_, index) => (
                          <option
                            key={index + 1}
                            value={`Std ${index + 1}`}
                          >
                            Std {index + 1}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="admissions-field">
                    <label htmlFor="mobile">
                      Mobile Number *
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>

                  <div className="admissions-field">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="admissions-field">
                    <label htmlFor="location">
                      Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City / Location"
                    />
                  </div>

                  <div className="admissions-field admissions-field-full">
                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us anything you'd like to know..."
                    />
                  </div>

                </div>

                {success && (
                  <div className="admissions-form-success">
                    {success}
                  </div>
                )}

                {error && (
                  <div className="admissions-form-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="admissions-submit"
                  disabled={submitting}
                >
                  <span>
                    {submitting
                      ? "Submitting..."
                      : "Submit Enquiry"}
                  </span>

                  {!submitting && <FaArrowRight />}
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ / GUIDANCE */}
      <section className="admissions-guidance">

        <div className="admissions-container">

          <div className="admissions-guidance-grid">

            <div>

              <div className="admissions-eyebrow dark">
                NEED HELP?
              </div>

              <h2>
                Have questions
                <br />
                about <em>admissions?</em>
              </h2>

            </div>

            <div className="admissions-guidance-copy">

              <p>
                Our admissions team can help parents understand
                the school's learning environment, admission
                process and next steps.
              </p>

              <Link
                to="/contact"
                className="admissions-link"
              >
                <span>Contact the School</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="admissions-final">

        <div className="admissions-container">

          <div className="admissions-final-content">

            <div className="admissions-eyebrow dark">
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2>
              Give your child
              <br />
              room to <em>grow.</em>
            </h2>

            <p>
              Begin your conversation with SNGA today.
            </p>

            <a
              href="#admission-enquiry"
              className="admissions-final-button"
            >
              <span>Make an Enquiry</span>
              <FaArrowRight />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Admissions;