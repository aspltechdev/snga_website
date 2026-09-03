// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaCheck,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";

// import admissionService from "../services/admission.service";
// import "./Admissions.css";

// const Admissions = () => {
//   const [formData, setFormData] = useState({
//     parentName: "",
//     studentName: "",
//     className: "",
//     mobile: "",
//     email: "",
//     location: "",
//     message: "",
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const admissionSteps = [
//     {
//       number: "01",
//       title: "Make an Enquiry",
//       text:
//         "Share your details with our admissions team and tell us about the student and class you are enquiring for.",
//     },
//     {
//       number: "02",
//       title: "Connect With Us",
//       text:
//         "Our team can guide you through the admission process, school environment and the next steps.",
//     },
//     {
//       number: "03",
//       title: "Visit the School",
//       text:
//         "Experience the SNGA campus and understand the learning environment, facilities and school community.",
//     },
//     {
//       number: "04",
//       title: "Complete Admission",
//       text:
//         "Proceed with the required admission formalities and documentation as guided by the school.",
//     },
//   ];

//   const reasons = [
//     "Holistic and value-based education",
//     "13.5-acre learning environment",
//     "Digital classroom facilities",
//     "Science and computer laboratories",
//     "Library with 3,500+ books",
//     "Academic, sports and co-curricular opportunities",
//   ];

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setSubmitting(true);
//     setSuccess("");
//     setError("");

//     try {
//       await admissionService.createEnquiry(formData);

//       setSuccess(
//         "Thank you. Your admission enquiry has been submitted successfully."
//       );

//       setFormData({
//         parentName: "",
//         studentName: "",
//         className: "",
//         mobile: "",
//         email: "",
//         location: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Admission enquiry error:", err);

//       setError(
//         err?.response?.data?.message ||
//           "Unable to submit your enquiry. Please try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <main className="admissions-page">

//       {/* HERO */}
//       <section className="admissions-hero">
//         <div className="admissions-container">

//           <div className="admissions-hero-content">

//             <div className="admissions-eyebrow">
//               <span />
//               ADMISSIONS
//             </div>

//             <h1>
//               Begin your child's
//               <br />
//               journey with <em>SNGA.</em>
//             </h1>

//             <p>
//               Discover a learning environment where knowledge,
//               skills, values and confidence come together.
//             </p>

//             <a
//               href="#admission-enquiry"
//               className="admissions-hero-button"
//             >
//               <span>Start an Enquiry</span>
//               <FaArrowRight />
//             </a>

//           </div>

//           <div className="admissions-hero-side">
//             <span>LEARN</span>
//             <span>GROW</span>
//             <span>DISCOVER</span>
//             <span>LEAD</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="admissions-intro">
//         <div className="admissions-container">

//           <div className="admissions-intro-label">
//             WHY SNGA
//           </div>

//           <div className="admissions-intro-grid">

//             <h2>
//               A school built
//               <br />
//               for <em>complete growth.</em>
//             </h2>

//             <div className="admissions-intro-copy">

//               <p>
//                 At Shifan Noor Global Academy, education goes
//                 beyond academic achievement. Students are
//                 encouraged to build knowledge, develop skills,
//                 strengthen values and grow with confidence.
//               </p>

//               <p>
//                 Our campus, classrooms, laboratories, library,
//                 sports and co-curricular opportunities create
//                 different spaces for students to learn and
//                 discover their potential.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* KEY HIGHLIGHTS */}
//       <section className="admissions-highlights">

//         <div className="admissions-container">

//           <div className="admissions-highlights-header">

//             <div>

//               <div className="admissions-eyebrow dark">
//                 THE SNGA EXPERIENCE
//               </div>

//               <h2>
//                 More than
//                 <br />
//                 a <em>school.</em>
//               </h2>

//             </div>

//             <p>
//               An environment designed to support academic,
//               personal and all-round student development.
//             </p>

//           </div>

//           <div className="admissions-highlights-list">

//             {reasons.map((reason, index) => (
//               <div
//                 className="admissions-highlight"
//                 key={reason}
//               >

//                 <span>
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <div>
//                   <FaCheck />
//                   <p>{reason}</p>
//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ADMISSION PROCESS */}
//       <section className="admissions-process">

//         <div className="admissions-container">

//           <div className="admissions-process-header">

//             <div>

//               <div className="admissions-eyebrow dark">
//                 ADMISSION PROCESS
//               </div>

//               <h2>
//                 Simple steps.
//                 <br />
//                 <em>Clear guidance.</em>
//               </h2>

//             </div>

//             <p>
//               Our admissions team can guide parents through
//               the process and help answer questions about
//               joining SNGA.
//             </p>

//           </div>

//           <div className="admissions-process-list">

//             {admissionSteps.map((step) => (
//               <article
//                 className="admissions-process-item"
//                 key={step.number}
//               >

//                 <div className="admissions-process-number">
//                   {step.number}
//                 </div>

//                 <div className="admissions-process-content">

//                   <h3>
//                     {step.title}
//                   </h3>

//                   <p>
//                     {step.text}
//                   </p>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* CAMPUS */}
//       <section className="admissions-campus">

//         <div className="admissions-container">

//           <div className="admissions-campus-grid">

//             <div className="admissions-campus-content">

//               <div className="admissions-eyebrow dark">
//                 EXPERIENCE THE CAMPUS
//               </div>

//               <h2>
//                 13.5 acres
//                 <br />
//                 of <em>possibility.</em>
//               </h2>

//               <p>
//                 Located at Venkulam on the
//                 Ramanathapuram–Devipattinam main road,
//                 the SNGA campus provides a calm, serene
//                 and lush green environment for learning.
//               </p>

//               <Link
//                 to="/infrastructure"
//                 className="admissions-link"
//               >
//                 <span>Explore Infrastructure</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//             <div className="admissions-campus-stat">

//               <strong>
//                 13.5
//               </strong>

//               <span>
//                 ACRES
//               </span>

//               <p>
//                 A spacious campus created
//                 around a peaceful learning
//                 environment.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ENQUIRY */}
//       <section
//         className="admissions-enquiry"
//         id="admission-enquiry"
//       >

//         <div className="admissions-container">

//           <div className="admissions-enquiry-grid">

//             <div className="admissions-enquiry-content">

//               <div className="admissions-eyebrow">
//                 ADMISSION ENQUIRY
//               </div>

//               <h2>
//                 Let's start the
//                 <br />
//                 <em>conversation.</em>
//               </h2>

//               <p>
//                 Share your details and our admissions team
//                 can get in touch with you regarding your
//                 enquiry.
//               </p>

//               <div className="admissions-contact">

//                 <a href="tel:+919788914441">
//                   <FaPhone />
//                   <span>
//                     <small>CALL US</small>
//                     +91 97889 14441
//                   </span>
//                 </a>

//                 <a href="mailto:info@sngacbse.com">
//                   <FaEnvelope />
//                   <span>
//                     <small>EMAIL US</small>
//                     info@sngacbse.com
//                   </span>
//                 </a>

//               </div>

//             </div>

//             <div className="admissions-form-wrap">

//               <form
//                 className="admissions-form"
//                 onSubmit={handleSubmit}
//               >

//                 <div className="admissions-form-header">
//                   <span>01</span>
//                   <h3>
//                     Student Details
//                   </h3>
//                 </div>

//                 <div className="admissions-form-grid">

//                   <div className="admissions-field">
//                     <label htmlFor="parentName">
//                       Parent / Guardian Name *
//                     </label>

//                     <input
//                       id="parentName"
//                       name="parentName"
//                       type="text"
//                       value={formData.parentName}
//                       onChange={handleChange}
//                       placeholder="Enter parent name"
//                       required
//                     />
//                   </div>

//                   <div className="admissions-field">
//                     <label htmlFor="studentName">
//                       Student Name *
//                     </label>

//                     <input
//                       id="studentName"
//                       name="studentName"
//                       type="text"
//                       value={formData.studentName}
//                       onChange={handleChange}
//                       placeholder="Enter student name"
//                       required
//                     />
//                   </div>

//                   <div className="admissions-field">
//                     <label htmlFor="className">
//                       Class *
//                     </label>

//                     <select
//                       id="className"
//                       name="className"
//                       value={formData.className}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">
//                         Select class
//                       </option>

//                       <option value="Pre-KG">
//                         Pre-KG
//                       </option>

//                       <option value="LKG">
//                         LKG
//                       </option>

//                       <option value="UKG">
//                         UKG
//                       </option>

//                       {Array.from(
//                         { length: 12 },
//                         (_, index) => (
//                           <option
//                             key={index + 1}
//                             value={`Std ${index + 1}`}
//                           >
//                             Std {index + 1}
//                           </option>
//                         )
//                       )}
//                     </select>
//                   </div>

//                   <div className="admissions-field">
//                     <label htmlFor="mobile">
//                       Mobile Number *
//                     </label>

//                     <input
//                       id="mobile"
//                       name="mobile"
//                       type="tel"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       placeholder="Enter mobile number"
//                       required
//                     />
//                   </div>

//                   <div className="admissions-field">
//                     <label htmlFor="email">
//                       Email Address
//                     </label>

//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Enter email address"
//                     />
//                   </div>

//                   <div className="admissions-field">
//                     <label htmlFor="location">
//                       Location
//                     </label>

//                     <input
//                       id="location"
//                       name="location"
//                       type="text"
//                       value={formData.location}
//                       onChange={handleChange}
//                       placeholder="City / Location"
//                     />
//                   </div>

//                   <div className="admissions-field admissions-field-full">
//                     <label htmlFor="message">
//                       Message
//                     </label>

//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="5"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us anything you'd like to know..."
//                     />
//                   </div>

//                 </div>

//                 {success && (
//                   <div className="admissions-form-success">
//                     {success}
//                   </div>
//                 )}

//                 {error && (
//                   <div className="admissions-form-error">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   className="admissions-submit"
//                   disabled={submitting}
//                 >
//                   <span>
//                     {submitting
//                       ? "Submitting..."
//                       : "Submit Enquiry"}
//                   </span>

//                   {!submitting && <FaArrowRight />}
//                 </button>

//               </form>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* FAQ / GUIDANCE */}
//       <section className="admissions-guidance">

//         <div className="admissions-container">

//           <div className="admissions-guidance-grid">

//             <div>

//               <div className="admissions-eyebrow dark">
//                 NEED HELP?
//               </div>

//               <h2>
//                 Have questions
//                 <br />
//                 about <em>admissions?</em>
//               </h2>

//             </div>

//             <div className="admissions-guidance-copy">

//               <p>
//                 Our admissions team can help parents understand
//                 the school's learning environment, admission
//                 process and next steps.
//               </p>

//               <Link
//                 to="/contact"
//                 className="admissions-link"
//               >
//                 <span>Contact the School</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="admissions-final">

//         <div className="admissions-container">

//           <div className="admissions-final-content">

//             <div className="admissions-eyebrow dark">
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2>
//               Give your child
//               <br />
//               room to <em>grow.</em>
//             </h2>

//             <p>
//               Begin your conversation with SNGA today.
//             </p>

//             <a
//               href="#admission-enquiry"
//               className="admissions-final-button"
//             >
//               <span>Make an Enquiry</span>
//               <FaArrowRight />
//             </a>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Admissions;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaBuilding,
  FaBookOpen,
  FaUsers,
  FaAward,
  FaCalendarAlt,
  FaRocket,
  FaShieldAlt,
  FaClock,
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

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const highlightsRef = useRef(null);
  const processRef = useRef(null);
  const campusRef = useRef(null);
  const enquiryRef = useRef(null);
  const guidanceRef = useRef(null);
  const finalRef = useRef(null);

  // =====================================================
  // SCROLL TRIGGERED ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observers = {};

    const sections = [
      { ref: heroRef, className: "sad-hero--visible" },
      { ref: introRef, className: "sad-intro--visible" },
      { ref: highlightsRef, className: "sad-highlights--visible" },
      { ref: processRef, className: "sad-process--visible" },
      { ref: campusRef, className: "sad-campus--visible" },
      { ref: enquiryRef, className: "sad-enquiry--visible" },
      { ref: guidanceRef, className: "sad-guidance--visible" },
      { ref: finalRef, className: "sad-final--visible" },
    ];

    sections.forEach(({ ref, className }) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observer.observe(ref.current);
      observers[className] = observer;
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  // =====================================================
  // FORM HANDLERS
  // =====================================================

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

  // =====================================================
  // DATA
  // =====================================================

  const admissionSteps = [
    {
      number: "01",
      title: "Make an Enquiry",
      text: "Share your details with our admissions team and tell us about the student and class you are enquiring for.",
      icon: <FaBookOpen />,
    },
    {
      number: "02",
      title: "Connect With Us",
      text: "Our team can guide you through the admission process, school environment and the next steps.",
      icon: <FaUsers />,
    },
    {
      number: "03",
      title: "Visit the School",
      text: "Experience the SNGA campus and understand the learning environment, facilities and school community.",
      icon: <FaBuilding />,
    },
    {
      number: "04",
      title: "Complete Admission",
      text: "Proceed with the required admission formalities and documentation as guided by the school.",
      icon: <FaGraduationCap />,
    },
  ];

  const reasons = [
    { text: "Holistic and value-based education", icon: <FaAward /> },
    { text: "13.5-acre learning environment", icon: <FaBuilding /> },
    { text: "Digital classroom facilities", icon: <FaBookOpen /> },
    { text: "Science and computer laboratories", icon: <FaRocket /> },
    { text: "Library with 3,500+ books", icon: <FaBookOpen /> },
    { text: "Academic, sports and co-curricular opportunities", icon: <FaUsers /> },
  ];

  const stats = [
    { number: "13.5", label: "Acres Campus" },
    { number: "3,500+", label: "Books in Library" },
    { number: "25+", label: "Years of Excellence" },
    { number: "500+", label: "Students" },
  ];

  return (
    <main className="sad-page">
      {/* =================================================
          HERO SECTION
      ================================================= */}
      <section ref={heroRef} className="sad-hero">
        <div className="sad-hero__bg" />
        <div className="sad-hero__gradient" />

        <div className="sad-container">
          <div className="sad-hero__content">
            <span className="sad-hero__badge">
              <FaGraduationCap />
              ADMISSIONS
            </span>

            <h1 className="sad-hero__title">
              Begin Your Child's
              <br />
              <span className="sad-hero__highlight">Journey with SNGA.</span>
            </h1>

            <p className="sad-hero__desc">
              Discover a learning environment where knowledge, skills,
              values and confidence come together to shape the leaders
              of tomorrow.
            </p>

            <div className="sad-hero__actions">
              <a href="#sad-enquiry" className="sad-hero__btn sad-hero__btn--primary">
                <span>Start an Enquiry</span>
                <FaArrowRight />
              </a>
              <a href="tel:+919788914441" className="sad-hero__btn sad-hero__btn--secondary">
                <FaPhone />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          <div className="sad-hero__stats">
            {stats.map((stat, index) => (
              <div key={index} className="sad-hero__stat">
                <span className="sad-hero__stat-number">{stat.number}</span>
                <span className="sad-hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          INTRO SECTION
      ================================================= */}
      <section ref={introRef} className="sad-intro">
        <div className="sad-container">
          <div className="sad-intro__inner">
            <span className="sad-intro__label">WHY SNGA</span>

            <div className="sad-intro__grid">
              <h2 className="sad-intro__title">
                A School Built
                <br />
                <span className="sad-intro__highlight">For Complete Growth.</span>
              </h2>

              <div className="sad-intro__text">
                <p>
                  At Shifan Noor Global Academy, education goes beyond academic
                  achievement. Students are encouraged to build knowledge, develop
                  skills, strengthen values and grow with confidence.
                </p>
                <p>
                  Our campus, classrooms, laboratories, library, sports and
                  co-curricular opportunities create different spaces for students
                  to learn and discover their potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          HIGHLIGHTS SECTION
      ================================================= */}
      <section ref={highlightsRef} className="sad-highlights">
        <div className="sad-container">
          <div className="sad-highlights__header">
            <div>
              <span className="sad-highlights__label">THE SNGA EXPERIENCE</span>
              <h2 className="sad-highlights__title">
                More Than
                <br />
                <span className="sad-highlights__highlight">A School.</span>
              </h2>
            </div>
            <p className="sad-highlights__desc">
              An environment designed to support academic, personal and
              all-round student development.
            </p>
          </div>

          <div className="sad-highlights__grid">
            {reasons.map((reason, index) => (
              <div key={index} className="sad-highlights__item">
                <span className="sad-highlights__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="sad-highlights__icon">{reason.icon}</div>
                <p className="sad-highlights__text">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          PROCESS SECTION
      ================================================= */}
      <section ref={processRef} className="sad-process">
        <div className="sad-container">
          <div className="sad-process__header">
            <div>
              <span className="sad-process__label">ADMISSION PROCESS</span>
              <h2 className="sad-process__title">
                Simple Steps.
                <br />
                <span className="sad-process__highlight">Clear Guidance.</span>
              </h2>
            </div>
            <p className="sad-process__desc">
              Our admissions team can guide parents through the process and
              help answer questions about joining SNGA.
            </p>
          </div>

          <div className="sad-process__steps">
            {admissionSteps.map((step, index) => (
              <div key={step.number} className="sad-process__step">
                <div className="sad-process__step-number">{step.number}</div>
                <div className="sad-process__step-icon">{step.icon}</div>
                <div className="sad-process__step-content">
                  <h3 className="sad-process__step-title">{step.title}</h3>
                  <p className="sad-process__step-text">{step.text}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="sad-process__step-connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          CAMPUS SECTION
      ================================================= */}
      <section ref={campusRef} className="sad-campus">
        <div className="sad-campus__bg" />

        <div className="sad-container">
          <div className="sad-campus__inner">
            <div className="sad-campus__content">
              <span className="sad-campus__label">EXPERIENCE THE CAMPUS</span>
              <h2 className="sad-campus__title">
                13.5 Acres
                <br />
                <span className="sad-campus__highlight">Of Possibility.</span>
              </h2>
              <p className="sad-campus__desc">
                Located at Venkulam on the Ramanathapuram–Devipattinam main road,
                the SNGA campus provides a calm, serene and lush green environment
                for learning.
              </p>
              <Link to="/infrastructure" className="sad-campus__link">
                <span>Explore Infrastructure</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sad-campus__stat">
              <span className="sad-campus__stat-number">13.5</span>
              <span className="sad-campus__stat-label">ACRES</span>
              <p className="sad-campus__stat-text">
                A spacious campus created around a peaceful learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ENQUIRY SECTION
      ================================================= */}
      <section ref={enquiryRef} className="sad-enquiry" id="sad-enquiry">
        <div className="sad-container">
          <div className="sad-enquiry__inner">
            <div className="sad-enquiry__left">
              <span className="sad-enquiry__badge">ADMISSION ENQUIRY</span>
              <h2 className="sad-enquiry__title">
                Let's Start the
                <br />
                <span className="sad-enquiry__highlight">Conversation.</span>
              </h2>
              <p className="sad-enquiry__desc">
                Share your details and our admissions team can get in touch with
                you regarding your enquiry.
              </p>

              <div className="sad-enquiry__contact">
                <a href="tel:+919788914441" className="sad-enquiry__contact-link">
                  <FaPhone />
                  <span>
                    <small>CALL US</small>
                    +91 97889 14441
                  </span>
                </a>
                <a href="mailto:info@sngacbse.com" className="sad-enquiry__contact-link">
                  <FaEnvelope />
                  <span>
                    <small>EMAIL US</small>
                    info@sngacbse.com
                  </span>
                </a>
              </div>

              <div className="sad-enquiry__features">
                <div className="sad-enquiry__feature">
                  <FaClock />
                  <span>Mon–Fri: 8AM – 4PM</span>
                </div>
                <div className="sad-enquiry__feature">
                  <FaShieldAlt />
                  <span>Safe & Supportive</span>
                </div>
              </div>
            </div>

            <div className="sad-enquiry__right">
              <form className="sad-enquiry__form" onSubmit={handleSubmit}>
                <div className="sad-enquiry__form-header">
                  <span className="sad-enquiry__form-number">01</span>
                  <h3 className="sad-enquiry__form-title">Student Details</h3>
                </div>

                <div className="sad-enquiry__form-grid">
                  <div className="sad-enquiry__field">
                    <label htmlFor="parentName">
                      Parent / Guardian Name <span className="sad-enquiry__required">*</span>
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

                  <div className="sad-enquiry__field">
                    <label htmlFor="studentName">
                      Student Name <span className="sad-enquiry__required">*</span>
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

                  <div className="sad-enquiry__field">
                    <label htmlFor="className">
                      Class <span className="sad-enquiry__required">*</span>
                    </label>
                    <select
                      id="className"
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select class</option>
                      <option value="Pre-KG">Pre-KG</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={`Std ${i + 1}`}>
                          Std {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sad-enquiry__field">
                    <label htmlFor="mobile">
                      Mobile Number <span className="sad-enquiry__required">*</span>
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

                  <div className="sad-enquiry__field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="sad-enquiry__field">
                    <label htmlFor="location">Location</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City / Location"
                    />
                  </div>

                  <div className="sad-enquiry__field sad-enquiry__field--full">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us anything you'd like to know..."
                    />
                  </div>
                </div>

                {success && (
                  <div className="sad-enquiry__status sad-enquiry__status--success">
                    <FaCheck />
                    {success}
                  </div>
                )}

                {error && (
                  <div className="sad-enquiry__status sad-enquiry__status--error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="sad-enquiry__submit"
                  disabled={submitting}
                >
                  <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
                  {!submitting && <FaArrowRight />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          GUIDANCE SECTION
      ================================================= */}
      <section ref={guidanceRef} className="sad-guidance">
        <div className="sad-container">
          <div className="sad-guidance__inner">
            <div>
              <span className="sad-guidance__label">NEED HELP?</span>
              <h2 className="sad-guidance__title">
                Have Questions
                <br />
                <span className="sad-guidance__highlight">About Admissions?</span>
              </h2>
            </div>

            <div className="sad-guidance__right">
              <p className="sad-guidance__desc">
                Our admissions team can help parents understand the school's
                learning environment, admission process and next steps.
              </p>
              <Link to="/contact" className="sad-guidance__link">
                <span>Contact the School</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}
      <section ref={finalRef} className="sad-final">
        <div className="sad-container">
          <div className="sad-final__content">
            <span className="sad-final__badge">
              <FaGraduationCap />
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <h2 className="sad-final__title">
              Give Your Child
              <br />
              <span className="sad-final__highlight">Room to Grow.</span>
            </h2>

            <p className="sad-final__desc">Begin your conversation with SNGA today.</p>

            <a href="#sad-enquiry" className="sad-final__btn">
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