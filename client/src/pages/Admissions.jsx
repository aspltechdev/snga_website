
// // // // import { useEffect, useRef, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import {
// // // //   FaArrowRight,
// // // //   FaCheck,
// // // //   FaPhone,
// // // //   FaEnvelope,
// // // //   FaGraduationCap,
// // // //   FaBuilding,
// // // //   FaBookOpen,
// // // //   FaUsers,
// // // //   FaAward,
// // // //   FaCalendarAlt,
// // // //   FaRocket,
// // // //   FaShieldAlt,
// // // //   FaClock,
// // // // } from "react-icons/fa";
// // // // import admissionService from "../services/admission.service";
// // // // import "./Admissions.css";

// // // // const Admissions = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     parentName: "",
// // // //     studentName: "",
// // // //     className: "",
// // // //     mobile: "",
// // // //     email: "",
// // // //     location: "",
// // // //     message: "",
// // // //   });

// // // //   const [submitting, setSubmitting] = useState(false);
// // // //   const [success, setSuccess] = useState("");
// // // //   const [error, setError] = useState("");

// // // //   const heroRef = useRef(null);
// // // //   const introRef = useRef(null);
// // // //   const highlightsRef = useRef(null);
// // // //   const processRef = useRef(null);
// // // //   const campusRef = useRef(null);
// // // //   const enquiryRef = useRef(null);
// // // //   const guidanceRef = useRef(null);
// // // //   const finalRef = useRef(null);

// // // //   // =====================================================
// // // //   // SCROLL TRIGGERED ANIMATIONS
// // // //   // =====================================================

// // // //   useEffect(() => {
// // // //     const observerOptions = {
// // // //       threshold: 0.1,
// // // //       rootMargin: "0px 0px -50px 0px",
// // // //     };

// // // //     const observers = {};

// // // //     const sections = [
// // // //       { ref: heroRef, className: "sad-hero--visible" },
// // // //       { ref: introRef, className: "sad-intro--visible" },
// // // //       { ref: highlightsRef, className: "sad-highlights--visible" },
// // // //       { ref: processRef, className: "sad-process--visible" },
// // // //       { ref: campusRef, className: "sad-campus--visible" },
// // // //       { ref: enquiryRef, className: "sad-enquiry--visible" },
// // // //       { ref: guidanceRef, className: "sad-guidance--visible" },
// // // //       { ref: finalRef, className: "sad-final--visible" },
// // // //     ];

// // // //     sections.forEach(({ ref, className }) => {
// // // //       if (!ref.current) return;

// // // //       const observer = new IntersectionObserver((entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             entry.target.classList.add(className);
// // // //             observer.unobserve(entry.target);
// // // //           }
// // // //         });
// // // //       }, observerOptions);

// // // //       observer.observe(ref.current);
// // // //       observers[className] = observer;
// // // //     });

// // // //     return () => {
// // // //       Object.values(observers).forEach((observer) => observer.disconnect());
// // // //     };
// // // //   }, []);

// // // //   // =====================================================
// // // //   // FORM HANDLERS
// // // //   // =====================================================

// // // //   const handleChange = (event) => {
// // // //     const { name, value } = event.target;
// // // //     setFormData((previous) => ({
// // // //       ...previous,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (event) => {
// // // //     event.preventDefault();

// // // //     setSubmitting(true);
// // // //     setSuccess("");
// // // //     setError("");

// // // //     try {
// // // //       await admissionService.createEnquiry(formData);

// // // //       setSuccess(
// // // //         "Thank you. Your admission enquiry has been submitted successfully."
// // // //       );

// // // //       setFormData({
// // // //         parentName: "",
// // // //         studentName: "",
// // // //         className: "",
// // // //         mobile: "",
// // // //         email: "",
// // // //         location: "",
// // // //         message: "",
// // // //       });
// // // //     } catch (err) {
// // // //       console.error("Admission enquiry error:", err);
// // // //       setError(
// // // //         err?.response?.data?.message ||
// // // //           "Unable to submit your enquiry. Please try again."
// // // //       );
// // // //     } finally {
// // // //       setSubmitting(false);
// // // //     }
// // // //   };

// // // //   // =====================================================
// // // //   // DATA
// // // //   // =====================================================

// // // //   const admissionSteps = [
// // // //     {
// // // //       number: "01",
// // // //       title: "Make an Enquiry",
// // // //       text: "Share your details with our admissions team and tell us about the student and class you are enquiring for.",
// // // //       icon: <FaBookOpen />,
// // // //     },
// // // //     {
// // // //       number: "02",
// // // //       title: "Connect With Us",
// // // //       text: "Our team can guide you through the admission process, school environment and the next steps.",
// // // //       icon: <FaUsers />,
// // // //     },
// // // //     {
// // // //       number: "03",
// // // //       title: "Visit the School",
// // // //       text: "Experience the SNGA campus and understand the learning environment, facilities and school community.",
// // // //       icon: <FaBuilding />,
// // // //     },
// // // //     {
// // // //       number: "04",
// // // //       title: "Complete Admission",
// // // //       text: "Proceed with the required admission formalities and documentation as guided by the school.",
// // // //       icon: <FaGraduationCap />,
// // // //     },
// // // //   ];

// // // //   const reasons = [
// // // //     { text: "Holistic and value-based education", icon: <FaAward /> },
// // // //     { text: "13.5-acre learning environment", icon: <FaBuilding /> },
// // // //     { text: "Digital classroom facilities", icon: <FaBookOpen /> },
// // // //     { text: "Science and computer laboratories", icon: <FaRocket /> },
// // // //     { text: "Library with 3,500+ books", icon: <FaBookOpen /> },
// // // //     { text: "Academic, sports and co-curricular opportunities", icon: <FaUsers /> },
// // // //   ];

// // // //   const stats = [
// // // //     { number: "13.5", label: "Acres Campus" },
// // // //     { number: "3,500+", label: "Books in Library" },
// // // //     { number: "25+", label: "Years of Excellence" },
// // // //     { number: "500+", label: "Students" },
// // // //   ];

// // // //   return (
// // // //     <main className="sad-page">
// // // //       {/* =================================================
// // // //           HERO SECTION
// // // //       ================================================= */}
// // // //       <section ref={heroRef} className="sad-hero">
// // // //         <div className="sad-hero__bg" />
// // // //         <div className="sad-hero__gradient" />

// // // //         <div className="sad-container">
// // // //           <div className="sad-hero__content">
// // // //             <span className="sad-hero__badge">
// // // //               <FaGraduationCap />
// // // //               ADMISSIONS
// // // //             </span>

// // // //             <h1 className="sad-hero__title">
// // // //               Begin Your Child's
// // // //               <br />
// // // //               <span className="sad-hero__highlight">Journey with SNGA.</span>
// // // //             </h1>

// // // //             <p className="sad-hero__desc">
// // // //               Discover a learning environment where knowledge, skills,
// // // //               values and confidence come together to shape the leaders
// // // //               of tomorrow.
// // // //             </p>

// // // //             <div className="sad-hero__actions">
// // // //               <a href="#sad-enquiry" className="sad-hero__btn sad-hero__btn--primary">
// // // //                 <span>Start an Enquiry</span>
// // // //                 <FaArrowRight />
// // // //               </a>
// // // //               <a href="tel:+919788914441" className="sad-hero__btn sad-hero__btn--secondary">
// // // //                 <FaPhone />
// // // //                 <span>Call Us</span>
// // // //               </a>
// // // //             </div>
// // // //           </div>

// // // //           <div className="sad-hero__stats">
// // // //             {stats.map((stat, index) => (
// // // //               <div key={index} className="sad-hero__stat">
// // // //                 <span className="sad-hero__stat-number">{stat.number}</span>
// // // //                 <span className="sad-hero__stat-label">{stat.label}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           INTRO SECTION
// // // //       ================================================= */}
// // // //       <section ref={introRef} className="sad-intro">
// // // //         <div className="sad-container">
// // // //           <div className="sad-intro__inner">
// // // //             <span className="sad-intro__label">WHY SNGA</span>

// // // //             <div className="sad-intro__grid">
// // // //               <h2 className="sad-intro__title">
// // // //                 A School Built
// // // //                 <br />
// // // //                 <span className="sad-intro__highlight">For Complete Growth.</span>
// // // //               </h2>

// // // //               <div className="sad-intro__text">
// // // //                 <p>
// // // //                   At Shifan Noor Global Academy, education goes beyond academic
// // // //                   achievement. Students are encouraged to build knowledge, develop
// // // //                   skills, strengthen values and grow with confidence.
// // // //                 </p>
// // // //                 <p>
// // // //                   Our campus, classrooms, laboratories, library, sports and
// // // //                   co-curricular opportunities create different spaces for students
// // // //                   to learn and discover their potential.
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           HIGHLIGHTS SECTION
// // // //       ================================================= */}
// // // //       <section ref={highlightsRef} className="sad-highlights">
// // // //         <div className="sad-container">
// // // //           <div className="sad-highlights__header">
// // // //             <div>
// // // //               <span className="sad-highlights__label">THE SNGA EXPERIENCE</span>
// // // //               <h2 className="sad-highlights__title">
// // // //                 More Than
// // // //                 <br />
// // // //                 <span className="sad-highlights__highlight">A School.</span>
// // // //               </h2>
// // // //             </div>
// // // //             <p className="sad-highlights__desc">
// // // //               An environment designed to support academic, personal and
// // // //               all-round student development.
// // // //             </p>
// // // //           </div>

// // // //           <div className="sad-highlights__grid">
// // // //             {reasons.map((reason, index) => (
// // // //               <div key={index} className="sad-highlights__item">
// // // //                 <span className="sad-highlights__number">
// // // //                   {String(index + 1).padStart(2, "0")}
// // // //                 </span>
// // // //                 <div className="sad-highlights__icon">{reason.icon}</div>
// // // //                 <p className="sad-highlights__text">{reason.text}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           PROCESS SECTION
// // // //       ================================================= */}
// // // //       <section ref={processRef} className="sad-process">
// // // //         <div className="sad-container">
// // // //           <div className="sad-process__header">
// // // //             <div>
// // // //               <span className="sad-process__label">ADMISSION PROCESS</span>
// // // //               <h2 className="sad-process__title">
// // // //                 Simple Steps.
// // // //                 <br />
// // // //                 <span className="sad-process__highlight">Clear Guidance.</span>
// // // //               </h2>
// // // //             </div>
// // // //             <p className="sad-process__desc">
// // // //               Our admissions team can guide parents through the process and
// // // //               help answer questions about joining SNGA.
// // // //             </p>
// // // //           </div>

// // // //           <div className="sad-process__steps">
// // // //             {admissionSteps.map((step, index) => (
// // // //               <div key={step.number} className="sad-process__step">
// // // //                 <div className="sad-process__step-number">{step.number}</div>
// // // //                 <div className="sad-process__step-icon">{step.icon}</div>
// // // //                 <div className="sad-process__step-content">
// // // //                   <h3 className="sad-process__step-title">{step.title}</h3>
// // // //                   <p className="sad-process__step-text">{step.text}</p>
// // // //                 </div>
// // // //                 {index < admissionSteps.length - 1 && (
// // // //                   <div className="sad-process__step-connector" />
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           CAMPUS SECTION
// // // //       ================================================= */}
// // // //       <section ref={campusRef} className="sad-campus">
// // // //         <div className="sad-campus__bg" />

// // // //         <div className="sad-container">
// // // //           <div className="sad-campus__inner">
// // // //             <div className="sad-campus__content">
// // // //               <span className="sad-campus__label">EXPERIENCE THE CAMPUS</span>
// // // //               <h2 className="sad-campus__title">
// // // //                 13.5 Acres
// // // //                 <br />
// // // //                 <span className="sad-campus__highlight">Of Possibility.</span>
// // // //               </h2>
// // // //               <p className="sad-campus__desc">
// // // //                 Located at Venkulam on the Ramanathapuram–Devipattinam main road,
// // // //                 the SNGA campus provides a calm, serene and lush green environment
// // // //                 for learning.
// // // //               </p>
// // // //               <Link to="/infrastructure" className="sad-campus__link">
// // // //                 <span>Explore Infrastructure</span>
// // // //                 <FaArrowRight />
// // // //               </Link>
// // // //             </div>

// // // //             <div className="sad-campus__stat">
// // // //               <span className="sad-campus__stat-number">13.5</span>
// // // //               <span className="sad-campus__stat-label">ACRES</span>
// // // //               <p className="sad-campus__stat-text">
// // // //                 A spacious campus created around a peaceful learning environment.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           ENQUIRY SECTION
// // // //       ================================================= */}
// // // //       <section ref={enquiryRef} className="sad-enquiry" id="sad-enquiry">
// // // //         <div className="sad-container">
// // // //           <div className="sad-enquiry__inner">
// // // //             <div className="sad-enquiry__left">
// // // //               <span className="sad-enquiry__badge">ADMISSION ENQUIRY</span>
// // // //               <h2 className="sad-enquiry__title">
// // // //                 Let's Start the
// // // //                 <br />
// // // //                 <span className="sad-enquiry__highlight">Conversation.</span>
// // // //               </h2>
// // // //               <p className="sad-enquiry__desc">
// // // //                 Share your details and our admissions team can get in touch with
// // // //                 you regarding your enquiry.
// // // //               </p>

// // // //               <div className="sad-enquiry__contact">
// // // //                 <a href="tel:+919788914441" className="sad-enquiry__contact-link">
// // // //                   <FaPhone />
// // // //                   <span>
// // // //                     <small>CALL US</small>
// // // //                     +91 97889 14441
// // // //                   </span>
// // // //                 </a>
// // // //                 <a href="mailto:info@sngacbse.com" className="sad-enquiry__contact-link">
// // // //                   <FaEnvelope />
// // // //                   <span>
// // // //                     <small>EMAIL US</small>
// // // //                     info@sngacbse.com
// // // //                   </span>
// // // //                 </a>
// // // //               </div>

// // // //               <div className="sad-enquiry__features">
// // // //                 <div className="sad-enquiry__feature">
// // // //                   <FaClock />
// // // //                   <span>Mon–Fri: 8AM – 4PM</span>
// // // //                 </div>
// // // //                 <div className="sad-enquiry__feature">
// // // //                   <FaShieldAlt />
// // // //                   <span>Safe & Supportive</span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="sad-enquiry__right">
// // // //               <form className="sad-enquiry__form" onSubmit={handleSubmit}>
// // // //                 <div className="sad-enquiry__form-header">
// // // //                   <span className="sad-enquiry__form-number">01</span>
// // // //                   <h3 className="sad-enquiry__form-title">Student Details</h3>
// // // //                 </div>

// // // //                 <div className="sad-enquiry__form-grid">
// // // //                   <div className="sad-enquiry__field">
// // // //                     <label htmlFor="parentName">
// // // //                       Parent / Guardian Name <span className="sad-enquiry__required">*</span>
// // // //                     </label>
// // // //                     <input
// // // //                       id="parentName"
// // // //                       name="parentName"
// // // //                       type="text"
// // // //                       value={formData.parentName}
// // // //                       onChange={handleChange}
// // // //                       placeholder="Enter parent name"
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div className="sad-enquiry__field">
// // // //                     <label htmlFor="studentName">
// // // //                       Student Name <span className="sad-enquiry__required">*</span>
// // // //                     </label>
// // // //                     <input
// // // //                       id="studentName"
// // // //                       name="studentName"
// // // //                       type="text"
// // // //                       value={formData.studentName}
// // // //                       onChange={handleChange}
// // // //                       placeholder="Enter student name"
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div className="sad-enquiry__field">
// // // //                     <label htmlFor="className">
// // // //                       Class <span className="sad-enquiry__required">*</span>
// // // //                     </label>
// // // //                     <select
// // // //                       id="className"
// // // //                       name="className"
// // // //                       value={formData.className}
// // // //                       onChange={handleChange}
// // // //                       required
// // // //                     >
// // // //                       <option value="">Select class</option>
// // // //                       <option value="Pre-KG">Pre-KG</option>
// // // //                       <option value="LKG">LKG</option>
// // // //                       <option value="UKG">UKG</option>
// // // //                       {Array.from({ length: 12 }, (_, i) => (
// // // //                         <option key={i + 1} value={`Std ${i + 1}`}>
// // // //                           Std {i + 1}
// // // //                         </option>
// // // //                       ))}
// // // //                     </select>
// // // //                   </div>

// // // //                   <div className="sad-enquiry__field">
// // // //                     <label htmlFor="mobile">
// // // //                       Mobile Number <span className="sad-enquiry__required">*</span>
// // // //                     </label>
// // // //                     <input
// // // //                       id="mobile"
// // // //                       name="mobile"
// // // //                       type="tel"
// // // //                       value={formData.mobile}
// // // //                       onChange={handleChange}
// // // //                       placeholder="Enter mobile number"
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div className="sad-enquiry__field">
// // // //                     <label htmlFor="email">Email Address</label>
// // // //                     <input
// // // //                       id="email"
// // // //                       name="email"
// // // //                       type="email"
// // // //                       value={formData.email}
// // // //                       onChange={handleChange}
// // // //                       placeholder="Enter email address"
// // // //                     />
// // // //                   </div>

// // // //                   <div className="sad-enquiry__field">
// // // //                     <label htmlFor="location">Location</label>
// // // //                     <input
// // // //                       id="location"
// // // //                       name="location"
// // // //                       type="text"
// // // //                       value={formData.location}
// // // //                       onChange={handleChange}
// // // //                       placeholder="City / Location"
// // // //                     />
// // // //                   </div>

// // // //                   <div className="sad-enquiry__field sad-enquiry__field--full">
// // // //                     <label htmlFor="message">Message</label>
// // // //                     <textarea
// // // //                       id="message"
// // // //                       name="message"
// // // //                       rows="4"
// // // //                       value={formData.message}
// // // //                       onChange={handleChange}
// // // //                       placeholder="Tell us anything you'd like to know..."
// // // //                     />
// // // //                   </div>
// // // //                 </div>

// // // //                 {success && (
// // // //                   <div className="sad-enquiry__status sad-enquiry__status--success">
// // // //                     <FaCheck />
// // // //                     {success}
// // // //                   </div>
// // // //                 )}

// // // //                 {error && (
// // // //                   <div className="sad-enquiry__status sad-enquiry__status--error">
// // // //                     {error}
// // // //                   </div>
// // // //                 )}

// // // //                 <button
// // // //                   type="submit"
// // // //                   className="sad-enquiry__submit"
// // // //                   disabled={submitting}
// // // //                 >
// // // //                   <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
// // // //                   {!submitting && <FaArrowRight />}
// // // //                 </button>
// // // //               </form>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           GUIDANCE SECTION
// // // //       ================================================= */}
// // // //       <section ref={guidanceRef} className="sad-guidance">
// // // //         <div className="sad-container">
// // // //           <div className="sad-guidance__inner">
// // // //             <div>
// // // //               <span className="sad-guidance__label">NEED HELP?</span>
// // // //               <h2 className="sad-guidance__title">
// // // //                 Have Questions
// // // //                 <br />
// // // //                 <span className="sad-guidance__highlight">About Admissions?</span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className="sad-guidance__right">
// // // //               <p className="sad-guidance__desc">
// // // //                 Our admissions team can help parents understand the school's
// // // //                 learning environment, admission process and next steps.
// // // //               </p>
// // // //               <Link to="/contact" className="sad-guidance__link">
// // // //                 <span>Contact the School</span>
// // // //                 <FaArrowRight />
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* =================================================
// // // //           FINAL CTA
// // // //       ================================================= */}
// // // //       <section ref={finalRef} className="sad-final">
// // // //         <div className="sad-container">
// // // //           <div className="sad-final__content">
// // // //             <span className="sad-final__badge">
// // // //               <FaGraduationCap />
// // // //               SHIFAN NOOR GLOBAL ACADEMY
// // // //             </span>

// // // //             <h2 className="sad-final__title">
// // // //               Give Your Child
// // // //               <br />
// // // //               <span className="sad-final__highlight">Room to Grow.</span>
// // // //             </h2>

// // // //             <p className="sad-final__desc">Begin your conversation with SNGA today.</p>

// // // //             <a href="#sad-enquiry" className="sad-final__btn">
// // // //               <span>Make an Enquiry</span>
// // // //               <FaArrowRight />
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </main>
// // // //   );
// // // // };

// // // // export default Admissions;


// // // import { useEffect, useRef, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   FaArrowRight,
// // //   FaCheck,
// // //   FaPhone,
// // //   FaEnvelope,
// // //   FaGraduationCap,
// // //   FaBuilding,
// // //   FaBookOpen,
// // //   FaUsers,
// // //   FaAward,
// // //   FaCalendarAlt,
// // //   FaRocket,
// // //   FaShieldAlt,
// // //   FaClock,
// // //   FaSchool,
// // //   FaMapMarkerAlt,
// // //   FaPlay,
// // //   FaQuoteLeft,
// // //   FaHands,
// // //   FaChild,
// // //   FaStar,
// // //   FaTrophy,
// // //   FaChalkboardTeacher,
// // //   FaTree,
// // //   FaHeart,
// // // } from "react-icons/fa";
// // // import admissionService from "../services/admission.service";
// // // import "./Admissions.css";

// // // // =====================================================
// // // // ONLINE IMAGES (Replace with local imports later)
// // // // =====================================================
// // // const IMAGES = {
// // //   heroBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
// // //   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
// // //   ctaBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
// // //   campusBg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
// // //   processBg: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=1600&q=80",
// // // };

// // // const Admissions = () => {
// // //   const [formData, setFormData] = useState({
// // //     parentName: "",
// // //     studentName: "",
// // //     className: "",
// // //     mobile: "",
// // //     email: "",
// // //     location: "",
// // //     message: "",
// // //   });

// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [success, setSuccess] = useState("");
// // //   const [error, setError] = useState("");

// // //   const heroRef = useRef(null);
// // //   const introRef = useRef(null);
// // //   const highlightsRef = useRef(null);
// // //   const processRef = useRef(null);
// // //   const campusRef = useRef(null);
// // //   const enquiryRef = useRef(null);
// // //   const guidanceRef = useRef(null);
// // //   const finalRef = useRef(null);

// // //   // =====================================================
// // //   // SCROLL TRIGGERED ANIMATIONS
// // //   // =====================================================

// // //   useEffect(() => {
// // //     const observerOptions = {
// // //       threshold: 0.1,
// // //       rootMargin: "0px 0px -50px 0px",
// // //     };

// // //     const observers = {};

// // //     const sections = [
// // //       { ref: heroRef, className: "sad-hero--visible" },
// // //       { ref: introRef, className: "sad-intro--visible" },
// // //       { ref: highlightsRef, className: "sad-highlights--visible" },
// // //       { ref: processRef, className: "sad-process--visible" },
// // //       { ref: campusRef, className: "sad-campus--visible" },
// // //       { ref: enquiryRef, className: "sad-enquiry--visible" },
// // //       { ref: guidanceRef, className: "sad-guidance--visible" },
// // //       { ref: finalRef, className: "sad-final--visible" },
// // //     ];

// // //     sections.forEach(({ ref, className }) => {
// // //       if (!ref.current) return;

// // //       const observer = new IntersectionObserver((entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add(className);
// // //             observer.unobserve(entry.target);
// // //           }
// // //         });
// // //       }, observerOptions);

// // //       observer.observe(ref.current);
// // //       observers[className] = observer;
// // //     });

// // //     return () => {
// // //       Object.values(observers).forEach((observer) => observer.disconnect());
// // //     };
// // //   }, []);

// // //   // =====================================================
// // //   // FORM HANDLERS
// // //   // =====================================================

// // //   const handleChange = (event) => {
// // //     const { name, value } = event.target;
// // //     setFormData((previous) => ({
// // //       ...previous,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     setSubmitting(true);
// // //     setSuccess("");
// // //     setError("");

// // //     try {
// // //       await admissionService.createEnquiry(formData);

// // //       setSuccess(
// // //         "Thank you. Your admission enquiry has been submitted successfully."
// // //       );

// // //       setFormData({
// // //         parentName: "",
// // //         studentName: "",
// // //         className: "",
// // //         mobile: "",
// // //         email: "",
// // //         location: "",
// // //         message: "",
// // //       });
// // //     } catch (err) {
// // //       console.error("Admission enquiry error:", err);
// // //       setError(
// // //         err?.response?.data?.message ||
// // //           "Unable to submit your enquiry. Please try again."
// // //       );
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   // =====================================================
// // //   // DATA
// // //   // =====================================================

// // //   const admissionSteps = [
// // //     {
// // //       number: "01",
// // //       title: "Make an Enquiry",
// // //       text: "Share your details with our admissions team and tell us about the student and class you are enquiring for.",
// // //       icon: <FaBookOpen />,
// // //     },
// // //     {
// // //       number: "02",
// // //       title: "Connect With Us",
// // //       text: "Our team can guide you through the admission process, school environment and the next steps.",
// // //       icon: <FaUsers />,
// // //     },
// // //     {
// // //       number: "03",
// // //       title: "Visit the School",
// // //       text: "Experience the SNGA campus and understand the learning environment, facilities and school community.",
// // //       icon: <FaBuilding />,
// // //     },
// // //     {
// // //       number: "04",
// // //       title: "Complete Admission",
// // //       text: "Proceed with the required admission formalities and documentation as guided by the school.",
// // //       icon: <FaGraduationCap />,
// // //     },
// // //   ];

// // //   const reasons = [
// // //     { text: "Holistic and value-based education", icon: <FaAward /> },
// // //     { text: "13.5-acre learning environment", icon: <FaBuilding /> },
// // //     { text: "Digital classroom facilities", icon: <FaBookOpen /> },
// // //     { text: "Science and computer laboratories", icon: <FaRocket /> },
// // //     { text: "Library with 3,500+ books", icon: <FaBookOpen /> },
// // //     { text: "Academic, sports and co-curricular opportunities", icon: <FaUsers /> },
// // //   ];

// // //   const stats = [
// // //     { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
// // //     { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
// // //     { number: "25+", label: "Years of Excellence", icon: <FaTrophy /> },
// // //     { number: "500+", label: "Students", icon: <FaUsers /> },
// // //   ];

// // //   const whyChooseUs = [
// // //     {
// // //       icon: <FaChalkboardTeacher />,
// // //       title: "Expert Faculty",
// // //       desc: "Qualified and experienced teachers dedicated to student growth.",
// // //       color: "#4A90D9"
// // //     },
// // //     {
// // //       icon: <FaHeart />,
// // //       title: "Values & Culture",
// // //       desc: "Building character through Indian values and traditions.",
// // //       color: "#E74C3C"
// // //     },
// // //     {
// // //       icon: <FaStar />,
// // //       title: "Modern Facilities",
// // //       desc: "Smart classrooms, labs, library and sports infrastructure.",
// // //       color: "#F39C12"
// // //     },
// // //     {
// // //       icon: <FaHands />,
// // //       title: "Community Focus",
// // //       desc: "Strong parent-school partnership for student development.",
// // //       color: "#27AE60"
// // //     },
// // //   ];

// // //   return (
// // //     <main className="sad-page">
// // //       {/* =================================================
// // //           TOP BAR - School Identity
// // //       ================================================= */}
// // //       <div className="sad-topbar">
// // //         <div className="sad-container">
// // //           <div className="sad-topbar__content">
// // //             <span className="sad-topbar__motto">
// // //               <FaSchool />
// // //               Shifan Noor Global Academy - Where Values Meet Excellence
// // //             </span>
// // //             <span className="sad-topbar__affiliation">Affiliated to CBSE</span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* =================================================
// // //           HERO - With Background Image & Circular Image
// // //       ================================================= */}
// // //       <section ref={heroRef} className="sad-hero">
// // //         <div className="sad-hero__bg-wrapper">
// // //           <div 
// // //             className="sad-hero__bg-image" 
// // //             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
// // //           />
// // //           <div className="sad-hero__bg-overlay" />
// // //           <div className="sad-hero__bg-gradient" />
// // //         </div>

// // //         <div className="sad-container">
// // //           <div className="sad-hero__inner">
// // //             <div className="sad-hero__content">
// // //               <div className="sad-hero__badge">
// // //                 <FaGraduationCap />
// // //                 ADMISSIONS OPEN
// // //               </div>

// // //               <h1 className="sad-hero__title">
// // //                 Begin Your Child's
// // //                 <br />
// // //                 <span className="sad-hero__highlight">Journey with SNGA.</span>
// // //               </h1>

// // //               <p className="sad-hero__desc">
// // //                 Discover a learning environment where knowledge, skills,
// // //                 values and confidence come together to shape the leaders
// // //                 of tomorrow.
// // //               </p>

// // //               <div className="sad-hero__stats">
// // //                 {stats.map((stat, index) => (
// // //                   <div key={index} className="sad-hero__stat">
// // //                     <span className="sad-hero__stat-icon">{stat.icon}</span>
// // //                     <span className="sad-hero__stat-number">{stat.number}</span>
// // //                     <span className="sad-hero__stat-label">{stat.label}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <div className="sad-hero__actions">
// // //                 <a href="#sad-enquiry" className="sad-hero__btn sad-hero__btn--primary">
// // //                   <span>Start an Enquiry</span>
// // //                   <FaArrowRight />
// // //                 </a>
// // //                 <a href="tel:+919788914441" className="sad-hero__btn sad-hero__btn--secondary">
// // //                   <FaPhone />
// // //                   <span>Call Us</span>
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             <div className="sad-hero__image-wrapper">
// // //               <div className="sad-hero__image-circle">
// // //                 <img 
// // //                   src={IMAGES.heroCircle} 
// // //                   alt="SNGA School" 
// // //                   className="sad-hero__image-img"
// // //                 />
// // //                 <div className="sad-hero__image-ring" />
// // //                 <div className="sad-hero__image-badge">
// // //                   <span>Since 2015</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="sad-hero__wave">
// // //           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
// // //             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
// // //           </svg>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           INTRO - Welcome Message
// // //       ================================================= */}
// // //       <section ref={introRef} className="sad-intro">
// // //         <div className="sad-container">
// // //           <div className="sad-intro__inner">
// // //             <div className="sad-intro__header">
// // //               <span className="sad-intro__label">WHY SNGA</span>
// // //               <h2 className="sad-intro__title">
// // //                 A School Built
// // //                 <span className="sad-intro__highlight">For Complete Growth.</span>
// // //               </h2>
// // //             </div>

// // //             <div className="sad-intro__content">
// // //               <p>
// // //                 At Shifan Noor Global Academy, education goes beyond academic
// // //                 achievement. Students are encouraged to build knowledge, develop
// // //                 skills, strengthen values and grow with confidence.
// // //               </p>
// // //               <p>
// // //                 Our campus, classrooms, laboratories, library, sports and
// // //                 co-curricular opportunities create different spaces for students
// // //                 to learn and discover their potential.
// // //               </p>
// // //             </div>

// // //             <div className="sad-intro__features">
// // //               {whyChooseUs.map((item, index) => (
// // //                 <div key={index} className="sad-intro__feature">
// // //                   <div className="sad-intro__feature-icon" style={{ background: item.color + '20', color: item.color }}>
// // //                     {item.icon}
// // //                   </div>
// // //                   <h4>{item.title}</h4>
// // //                   <p>{item.desc}</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           HIGHLIGHTS SECTION
// // //       ================================================= */}
// // //       <section ref={highlightsRef} className="sad-highlights">
// // //         <div className="sad-container">
// // //           <div className="sad-highlights__header">
// // //             <div>
// // //               <span className="sad-highlights__label">THE SNGA EXPERIENCE</span>
// // //               <h2 className="sad-highlights__title">
// // //                 More Than
// // //                 <br />
// // //                 <span className="sad-highlights__highlight">A School.</span>
// // //               </h2>
// // //             </div>
// // //             <p className="sad-highlights__desc">
// // //               An environment designed to support academic, personal and
// // //               all-round student development.
// // //             </p>
// // //           </div>

// // //           <div className="sad-highlights__grid">
// // //             {reasons.map((reason, index) => (
// // //               <div key={index} className="sad-highlights__item">
// // //                 <div className="sad-highlights__icon-wrapper">
// // //                   <span className="sad-highlights__number">
// // //                     {String(index + 1).padStart(2, "0")}
// // //                   </span>
// // //                   <div className="sad-highlights__icon">{reason.icon}</div>
// // //                 </div>
// // //                 <p className="sad-highlights__text">{reason.text}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           PROCESS SECTION - With Background Image
// // //       ================================================= */}
// // //       <section ref={processRef} className="sad-process">
// // //         <div className="sad-process__bg-wrapper">
// // //           <div 
// // //             className="sad-process__bg-image" 
// // //             style={{ backgroundImage: `url(${IMAGES.processBg})` }}
// // //           />
// // //           <div className="sad-process__bg-overlay" />
// // //         </div>

// // //         <div className="sad-container">
// // //           <div className="sad-process__inner">
// // //             <div className="sad-process__header">
// // //               <div>
// // //                 <span className="sad-process__label">ADMISSION PROCESS</span>
// // //                 <h2 className="sad-process__title">
// // //                   Simple Steps.
// // //                   <br />
// // //                   <span className="sad-process__highlight">Clear Guidance.</span>
// // //                 </h2>
// // //               </div>
// // //               <p className="sad-process__desc">
// // //                 Our admissions team can guide parents through the process and
// // //                 help answer questions about joining SNGA.
// // //               </p>
// // //             </div>

// // //             <div className="sad-process__steps">
// // //               {admissionSteps.map((step, index) => (
// // //                 <div key={step.number} className="sad-process__step">
// // //                   <div className="sad-process__step-number">{step.number}</div>
// // //                   <div className="sad-process__step-icon">{step.icon}</div>
// // //                   <div className="sad-process__step-content">
// // //                     <h3 className="sad-process__step-title">{step.title}</h3>
// // //                     <p className="sad-process__step-text">{step.text}</p>
// // //                   </div>
// // //                   {index < admissionSteps.length - 1 && (
// // //                     <div className="sad-process__step-connector">
// // //                       <span />
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           CAMPUS SECTION - With Background Image
// // //       ================================================= */}
// // //       <section ref={campusRef} className="sad-campus">
// // //         <div className="sad-campus__bg-wrapper">
// // //           <div 
// // //             className="sad-campus__bg-image" 
// // //             style={{ backgroundImage: `url(${IMAGES.campusBg})` }}
// // //           />
// // //           <div className="sad-campus__bg-overlay" />
// // //         </div>

// // //         <div className="sad-container">
// // //           <div className="sad-campus__inner">
// // //             <div className="sad-campus__content">
// // //               <span className="sad-campus__label">EXPERIENCE THE CAMPUS</span>
// // //               <h2 className="sad-campus__title">
// // //                 13.5 Acres
// // //                 <br />
// // //                 <span className="sad-campus__highlight">Of Possibility.</span>
// // //               </h2>
// // //               <p className="sad-campus__desc">
// // //                 Located at Venkulam on the Ramanathapuram–Devipattinam main road,
// // //                 the SNGA campus provides a calm, serene and lush green environment
// // //                 for learning.
// // //               </p>
// // //               <div className="sad-campus__actions">
// // //                 <Link to="/infrastructure" className="sad-campus__link">
// // //                   <span>Explore Infrastructure</span>
// // //                   <FaArrowRight />
// // //                 </Link>
// // //                 <a href="#sad-enquiry" className="sad-campus__link sad-campus__link--secondary">
// // //                   <span>Enquire Now</span>
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             <div className="sad-campus__stats">
// // //               <div className="sad-campus__stat">
// // //                 <span className="sad-campus__stat-number">13.5</span>
// // //                 <span className="sad-campus__stat-label">ACRES</span>
// // //                 <p className="sad-campus__stat-text">
// // //                   A spacious campus created around a peaceful learning environment.
// // //                 </p>
// // //               </div>
// // //               <div className="sad-campus__stat">
// // //                 <span className="sad-campus__stat-number">3,500+</span>
// // //                 <span className="sad-campus__stat-label">BOOKS</span>
// // //                 <p className="sad-campus__stat-text">
// // //                   Well-stocked library with resources for students and teachers.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           ENQUIRY SECTION
// // //       ================================================= */}
// // //       <section ref={enquiryRef} className="sad-enquiry" id="sad-enquiry">
// // //         <div className="sad-container">
// // //           <div className="sad-enquiry__inner">
// // //             <div className="sad-enquiry__left">
// // //               <span className="sad-enquiry__badge">ADMISSION ENQUIRY</span>
// // //               <h2 className="sad-enquiry__title">
// // //                 Let's Start the
// // //                 <br />
// // //                 <span className="sad-enquiry__highlight">Conversation.</span>
// // //               </h2>
// // //               <p className="sad-enquiry__desc">
// // //                 Share your details and our admissions team can get in touch with
// // //                 you regarding your enquiry.
// // //               </p>

// // //               <div className="sad-enquiry__contact">
// // //                 <a href="tel:+919788914441" className="sad-enquiry__contact-link">
// // //                   <FaPhone />
// // //                   <span>
// // //                     <small>CALL US</small>
// // //                     +91 97889 14441
// // //                   </span>
// // //                 </a>
// // //                 <a href="mailto:info@sngacbse.com" className="sad-enquiry__contact-link">
// // //                   <FaEnvelope />
// // //                   <span>
// // //                     <small>EMAIL US</small>
// // //                     info@sngacbse.com
// // //                   </span>
// // //                 </a>
// // //               </div>

// // //               <div className="sad-enquiry__features">
// // //                 <div className="sad-enquiry__feature">
// // //                   <FaClock />
// // //                   <span>Mon–Fri: 8AM – 4PM</span>
// // //                 </div>
// // //                 <div className="sad-enquiry__feature">
// // //                   <FaShieldAlt />
// // //                   <span>Safe & Supportive</span>
// // //                 </div>
// // //                 <div className="sad-enquiry__feature">
// // //                   <FaMapMarkerAlt />
// // //                   <span>Ramanathapuram, Tamil Nadu</span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="sad-enquiry__right">
// // //               <form className="sad-enquiry__form" onSubmit={handleSubmit}>
// // //                 <div className="sad-enquiry__form-header">
// // //                   <span className="sad-enquiry__form-number">01</span>
// // //                   <h3 className="sad-enquiry__form-title">Student Details</h3>
// // //                 </div>

// // //                 <div className="sad-enquiry__form-grid">
// // //                   <div className="sad-enquiry__field">
// // //                     <label htmlFor="parentName">
// // //                       Parent / Guardian Name <span className="sad-enquiry__required">*</span>
// // //                     </label>
// // //                     <input
// // //                       id="parentName"
// // //                       name="parentName"
// // //                       type="text"
// // //                       value={formData.parentName}
// // //                       onChange={handleChange}
// // //                       placeholder="Enter parent name"
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div className="sad-enquiry__field">
// // //                     <label htmlFor="studentName">
// // //                       Student Name <span className="sad-enquiry__required">*</span>
// // //                     </label>
// // //                     <input
// // //                       id="studentName"
// // //                       name="studentName"
// // //                       type="text"
// // //                       value={formData.studentName}
// // //                       onChange={handleChange}
// // //                       placeholder="Enter student name"
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div className="sad-enquiry__field">
// // //                     <label htmlFor="className">
// // //                       Class <span className="sad-enquiry__required">*</span>
// // //                     </label>
// // //                     <select
// // //                       id="className"
// // //                       name="className"
// // //                       value={formData.className}
// // //                       onChange={handleChange}
// // //                       required
// // //                     >
// // //                       <option value="">Select class</option>
// // //                       <option value="Pre-KG">Pre-KG</option>
// // //                       <option value="LKG">LKG</option>
// // //                       <option value="UKG">UKG</option>
// // //                       {Array.from({ length: 12 }, (_, i) => (
// // //                         <option key={i + 1} value={`Std ${i + 1}`}>
// // //                           Std {i + 1}
// // //                         </option>
// // //                       ))}
// // //                     </select>
// // //                   </div>

// // //                   <div className="sad-enquiry__field">
// // //                     <label htmlFor="mobile">
// // //                       Mobile Number <span className="sad-enquiry__required">*</span>
// // //                     </label>
// // //                     <input
// // //                       id="mobile"
// // //                       name="mobile"
// // //                       type="tel"
// // //                       value={formData.mobile}
// // //                       onChange={handleChange}
// // //                       placeholder="Enter mobile number"
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div className="sad-enquiry__field">
// // //                     <label htmlFor="email">Email Address</label>
// // //                     <input
// // //                       id="email"
// // //                       name="email"
// // //                       type="email"
// // //                       value={formData.email}
// // //                       onChange={handleChange}
// // //                       placeholder="Enter email address"
// // //                     />
// // //                   </div>

// // //                   <div className="sad-enquiry__field">
// // //                     <label htmlFor="location">Location</label>
// // //                     <input
// // //                       id="location"
// // //                       name="location"
// // //                       type="text"
// // //                       value={formData.location}
// // //                       onChange={handleChange}
// // //                       placeholder="City / Location"
// // //                     />
// // //                   </div>

// // //                   <div className="sad-enquiry__field sad-enquiry__field--full">
// // //                     <label htmlFor="message">Message</label>
// // //                     <textarea
// // //                       id="message"
// // //                       name="message"
// // //                       rows="4"
// // //                       value={formData.message}
// // //                       onChange={handleChange}
// // //                       placeholder="Tell us anything you'd like to know..."
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 {success && (
// // //                   <div className="sad-enquiry__status sad-enquiry__status--success">
// // //                     <FaCheck />
// // //                     {success}
// // //                   </div>
// // //                 )}

// // //                 {error && (
// // //                   <div className="sad-enquiry__status sad-enquiry__status--error">
// // //                     {error}
// // //                   </div>
// // //                 )}

// // //                 <button
// // //                   type="submit"
// // //                   className="sad-enquiry__submit"
// // //                   disabled={submitting}
// // //                 >
// // //                   <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
// // //                   {!submitting && <FaArrowRight />}
// // //                 </button>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           GUIDANCE SECTION
// // //       ================================================= */}
// // //       <section ref={guidanceRef} className="sad-guidance">
// // //         <div className="sad-container">
// // //           <div className="sad-guidance__inner">
// // //             <div className="sad-guidance__content">
// // //               <span className="sad-guidance__label">NEED HELP?</span>
// // //               <h2 className="sad-guidance__title">
// // //                 Have Questions
// // //                 <br />
// // //                 <span className="sad-guidance__highlight">About Admissions?</span>
// // //               </h2>
// // //             </div>

// // //             <div className="sad-guidance__right">
// // //               <div className="sad-guidance__quote">
// // //                 <FaQuoteLeft />
// // //               </div>
// // //               <p className="sad-guidance__desc">
// // //                 Our admissions team can help parents understand the school's
// // //                 learning environment, admission process and next steps.
// // //               </p>
// // //               <div className="sad-guidance__actions">
// // //                 <Link to="/contact" className="sad-guidance__link">
// // //                   <span>Contact the School</span>
// // //                   <FaArrowRight />
// // //                 </Link>
// // //                 <a href="tel:+919788914441" className="sad-guidance__link sad-guidance__link--secondary">
// // //                   <FaPhone />
// // //                   <span>Call Now</span>
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =================================================
// // //           FINAL CTA - With Background Image
// // //       ================================================= */}
// // //       <section ref={finalRef} className="sad-final">
// // //         <div className="sad-final__bg-wrapper">
// // //           <div 
// // //             className="sad-final__bg-image" 
// // //             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
// // //           />
// // //           <div className="sad-final__bg-overlay" />
// // //           <div className="sad-final__bg-gradient" />
// // //         </div>

// // //         <div className="sad-container">
// // //           <div className="sad-final__content">
// // //             <div className="sad-final__badge">
// // //               <FaGraduationCap />
// // //               SHIFAN NOOR GLOBAL ACADEMY
// // //             </div>

// // //             <h2 className="sad-final__title">
// // //               Give Your Child
// // //               <br />
// // //               <span className="sad-final__highlight">Room to Grow.</span>
// // //             </h2>

// // //             <p className="sad-final__desc">
// // //               Begin your conversation with SNGA today. Join a community that nurtures
// // //               curiosity, builds character and celebrates every child's potential.
// // //             </p>

// // //             <div className="sad-final__actions">
// // //               <a href="#sad-enquiry" className="sad-final__btn sad-final__btn--primary">
// // //                 <span>Make an Enquiry</span>
// // //                 <FaArrowRight />
// // //               </a>
// // //               <Link to="/about" className="sad-final__btn sad-final__btn--secondary">
// // //                 <span>Learn About SNGA</span>
// // //               </Link>
// // //             </div>

// // //             <div className="sad-final__footer">
// // //               <span>
// // //                 <FaMapMarkerAlt /> Bangalore, India
// // //               </span>
// // //               <span>
// // //                 <FaPhone /> +91 98765 43210
// // //               </span>
// // //               <span>
// // //                 <FaEnvelope /> info@snga.edu.in
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // };

// // // export default Admissions;

// // import { useEffect, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FaArrowRight,
// //   FaCheck,
// //   FaPhone,
// //   FaEnvelope,
// //   FaGraduationCap,
// //   FaBuilding,
// //   FaBookOpen,
// //   FaUsers,
// //   FaAward,
// //   FaCalendarAlt,
// //   FaRocket,
// //   FaShieldAlt,
// //   FaClock,
// //   FaSchool,
// //   FaMapMarkerAlt,
// //   FaPlay,
// //   FaQuoteLeft,
// //   FaHands,
// //   FaChild,
// //   FaStar,
// //   FaTrophy,
// //   FaChalkboardTeacher,
// //   FaTree,
// //   FaHeart,
// // } from "react-icons/fa";
// // import admissionService from "../services/admission.service";
// // import "./Admissions.css";

// // // =====================================================
// // // ONLINE IMAGES (Replace with local imports later)
// // // =====================================================
// // const IMAGES = {
// //   heroBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
// //   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
// //   ctaBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
// //   campusBg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
// //   processBg: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=1600&q=80",
  
// //   // Highlight Cards Images
// //   highlight1: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
// //   highlight2: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
// //   highlight3: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
// //   highlight4: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
// //   highlight5: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
// //   highlight6: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=800&q=80",
  
// //   // Process Cards Images
// //   process1: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
// //   process2: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
// //   process3: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
// //   process4: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
// // };

// // const Admissions = () => {
// //   const [formData, setFormData] = useState({
// //     parentName: "",
// //     studentName: "",
// //     className: "",
// //     mobile: "",
// //     email: "",
// //     location: "",
// //     message: "",
// //   });

// //   const [submitting, setSubmitting] = useState(false);
// //   const [success, setSuccess] = useState("");
// //   const [error, setError] = useState("");

// //   const heroRef = useRef(null);
// //   const introRef = useRef(null);
// //   const highlightsRef = useRef(null);
// //   const processRef = useRef(null);
// //   const campusRef = useRef(null);
// //   const enquiryRef = useRef(null);
// //   const guidanceRef = useRef(null);
// //   const finalRef = useRef(null);

// //   // =====================================================
// //   // SCROLL TRIGGERED ANIMATIONS
// //   // =====================================================

// //   useEffect(() => {
// //     const observerOptions = {
// //       threshold: 0.1,
// //       rootMargin: "0px 0px -50px 0px",
// //     };

// //     const observers = {};

// //     const sections = [
// //       { ref: heroRef, className: "sad-hero--visible" },
// //       { ref: introRef, className: "sad-intro--visible" },
// //       { ref: highlightsRef, className: "sad-highlights--visible" },
// //       { ref: processRef, className: "sad-process--visible" },
// //       { ref: campusRef, className: "sad-campus--visible" },
// //       { ref: enquiryRef, className: "sad-enquiry--visible" },
// //       { ref: guidanceRef, className: "sad-guidance--visible" },
// //       { ref: finalRef, className: "sad-final--visible" },
// //     ];

// //     sections.forEach(({ ref, className }) => {
// //       if (!ref.current) return;

// //       const observer = new IntersectionObserver((entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add(className);
// //             observer.unobserve(entry.target);
// //           }
// //         });
// //       }, observerOptions);

// //       observer.observe(ref.current);
// //       observers[className] = observer;
// //     });

// //     return () => {
// //       Object.values(observers).forEach((observer) => observer.disconnect());
// //     };
// //   }, []);

// //   // =====================================================
// //   // FORM HANDLERS
// //   // =====================================================

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setFormData((previous) => ({
// //       ...previous,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     setSubmitting(true);
// //     setSuccess("");
// //     setError("");

// //     try {
// //       await admissionService.createEnquiry(formData);

// //       setSuccess(
// //         "Thank you. Your admission enquiry has been submitted successfully."
// //       );

// //       setFormData({
// //         parentName: "",
// //         studentName: "",
// //         className: "",
// //         mobile: "",
// //         email: "",
// //         location: "",
// //         message: "",
// //       });
// //     } catch (err) {
// //       console.error("Admission enquiry error:", err);
// //       setError(
// //         err?.response?.data?.message ||
// //           "Unable to submit your enquiry. Please try again."
// //       );
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   // =====================================================
// //   // DATA
// //   // =====================================================

// //   const admissionSteps = [
// //     {
// //       number: "01",
// //       title: "Make an Enquiry",
// //       text: "Share your details with our admissions team and tell us about the student and class you are enquiring for.",
// //       icon: <FaBookOpen />,
// //       image: IMAGES.process1,
// //     },
// //     {
// //       number: "02",
// //       title: "Connect With Us",
// //       text: "Our team can guide you through the admission process, school environment and the next steps.",
// //       icon: <FaUsers />,
// //       image: IMAGES.process2,
// //     },
// //     {
// //       number: "03",
// //       title: "Visit the School",
// //       text: "Experience the SNGA campus and understand the learning environment, facilities and school community.",
// //       icon: <FaBuilding />,
// //       image: IMAGES.process3,
// //     },
// //     {
// //       number: "04",
// //       title: "Complete Admission",
// //       text: "Proceed with the required admission formalities and documentation as guided by the school.",
// //       icon: <FaGraduationCap />,
// //       image: IMAGES.process4,
// //     },
// //   ];

// //   const reasons = [
// //     { 
// //       text: "Holistic and value-based education", 
// //       icon: <FaAward />,
// //       image: IMAGES.highlight1,
// //     },
// //     { 
// //       text: "13.5-acre learning environment", 
// //       icon: <FaBuilding />,
// //       image: IMAGES.highlight2,
// //     },
// //     { 
// //       text: "Digital classroom facilities", 
// //       icon: <FaBookOpen />,
// //       image: IMAGES.highlight3,
// //     },
// //     { 
// //       text: "Science and computer laboratories", 
// //       icon: <FaRocket />,
// //       image: IMAGES.highlight4,
// //     },
// //     { 
// //       text: "Library with 3,500+ books", 
// //       icon: <FaBookOpen />,
// //       image: IMAGES.highlight5,
// //     },
// //     { 
// //       text: "Academic, sports and co-curricular opportunities", 
// //       icon: <FaUsers />,
// //       image: IMAGES.highlight6,
// //     },
// //   ];

// //   const stats = [
// //     { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
// //     { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
// //     { number: "25+", label: "Years of Excellence", icon: <FaTrophy /> },
// //     { number: "500+", label: "Students", icon: <FaUsers /> },
// //   ];

// //   const whyChooseUs = [
// //     {
// //       icon: <FaChalkboardTeacher />,
// //       title: "Expert Faculty",
// //       desc: "Qualified and experienced teachers dedicated to student growth.",
// //       color: "#4A90D9"
// //     },
// //     {
// //       icon: <FaHeart />,
// //       title: "Values & Culture",
// //       desc: "Building character through Indian values and traditions.",
// //       color: "#E74C3C"
// //     },
// //     {
// //       icon: <FaStar />,
// //       title: "Modern Facilities",
// //       desc: "Smart classrooms, labs, library and sports infrastructure.",
// //       color: "#F39C12"
// //     },
// //     {
// //       icon: <FaHands />,
// //       title: "Community Focus",
// //       desc: "Strong parent-school partnership for student development.",
// //       color: "#27AE60"
// //     },
// //   ];

// //   return (
// //     <main className="sad-page">
// //       {/* =================================================
// //           TOP BAR - School Identity
// //       ================================================= */}
// //       <div className="sad-topbar">
// //         <div className="sad-container">
// //           <div className="sad-topbar__content">
// //             <span className="sad-topbar__motto">
// //               <FaSchool />
// //               Shifan Noor Global Academy - Where Values Meet Excellence
// //             </span>
// //             <span className="sad-topbar__affiliation">Affiliated to CBSE</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =================================================
// //           HERO - With Background Image & Circular Image
// //       ================================================= */}
// //       <section ref={heroRef} className="sad-hero">
// //         <div className="sad-hero__bg-wrapper">
// //           <div 
// //             className="sad-hero__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
// //           />
// //           <div className="sad-hero__bg-overlay" />
// //           <div className="sad-hero__bg-gradient" />
// //         </div>

// //         <div className="sad-container">
// //           <div className="sad-hero__inner">
// //             <div className="sad-hero__content">
// //               <div className="sad-hero__badge">
// //                 <FaGraduationCap />
// //                 ADMISSIONS OPEN
// //               </div>

// //               <h1 className="sad-hero__title">
// //                 Begin Your Child's
// //                 <br />
// //                 <span className="sad-hero__highlight">Journey with SNGA.</span>
// //               </h1>

// //               <p className="sad-hero__desc">
// //                 Discover a learning environment where knowledge, skills,
// //                 values and confidence come together to shape the leaders
// //                 of tomorrow.
// //               </p>

// //               {/* <div className="sad-hero__stats">
// //                 {stats.map((stat, index) => (
// //                   <div key={index} className="sad-hero__stat">
// //                     <span className="sad-hero__stat-icon">{stat.icon}</span>
// //                     <span className="sad-hero__stat-number">{stat.number}</span>
// //                     <span className="sad-hero__stat-label">{stat.label}</span>
// //                   </div>
// //                 ))}
// //               </div> */}
// // {/* 
// //               <div className="sad-hero__actions">
// //                 <a href="#sad-enquiry" className="sad-hero__btn sad-hero__btn--primary">
// //                   <span>Start an Enquiry</span>
// //                   <FaArrowRight />
// //                 </a>
// //                 <a href="tel:+919788914441" className="sad-hero__btn sad-hero__btn--secondary">
// //                   <FaPhone />
// //                   <span>Call Us</span>
// //                 </a>
// //               </div> */}
// //             </div>

// //             <div className="sad-hero__image-wrapper">
// //               <div className="sad-hero__image-circle">
// //                 <img 
// //                   src={IMAGES.heroCircle} 
// //                   alt="SNGA School" 
// //                   className="sad-hero__image-img"
// //                 />
// //                 <div className="sad-hero__image-ring" />
// //                 <div className="sad-hero__image-badge">
// //                   <span>Since 2015</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="sad-hero__wave">
// //           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
// //             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
// //           </svg>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           INTRO - Welcome Message
// //       ================================================= */}
// //       <section ref={introRef} className="sad-intro">
// //         <div className="sad-container">
// //           <div className="sad-intro__inner">
// //             <div className="sad-intro__header">
// //               <span className="sad-intro__label">WHY SNGA</span>
// //               <h2 className="sad-intro__title">
// //                 A School Built
// //                 <span className="sad-intro__highlight">For Complete Growth.</span>
// //               </h2>
// //             </div>

// //             <div className="sad-intro__content">
// //               <p>
// //                 At Shifan Noor Global Academy, education goes beyond academic
// //                 achievement. Students are encouraged to build knowledge, develop
// //                 skills, strengthen values and grow with confidence.
// //               </p>
// //               <p>
// //                 Our campus, classrooms, laboratories, library, sports and
// //                 co-curricular opportunities create different spaces for students
// //                 to learn and discover their potential.
// //               </p>
// //             </div>

// //             <div className="sad-intro__features">
// //               {whyChooseUs.map((item, index) => (
// //                 <div key={index} className="sad-intro__feature">
// //                   <div className="sad-intro__feature-icon" style={{ background: item.color + '20', color: item.color }}>
// //                     {item.icon}
// //                   </div>
// //                   <h4>{item.title}</h4>
// //                   <p>{item.desc}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           HIGHLIGHTS SECTION - Image Overlay Cards
// //       ================================================= */}
// //       <section ref={highlightsRef} className="sad-highlights">
// //         <div className="sad-container">
// //           <div className="sad-highlights__header">
// //             <div>
// //               <span className="sad-highlights__label">THE SNGA EXPERIENCE</span>
// //               <h2 className="sad-highlights__title">
// //                 More Than
// //                 <br />
// //                 <span className="sad-highlights__highlight">A School.</span>
// //               </h2>
// //             </div>
// //             <p className="sad-highlights__desc">
// //               An environment designed to support academic, personal and
// //               all-round student development.
// //             </p>
// //           </div>

// //           <div className="sad-highlights__grid">
// //             {reasons.map((reason, index) => (
// //               <div key={index} className="sad-highlights__card">
// //                 <div className="sad-highlights__card-image">
// //                   <img src={reason.image} alt={reason.text} loading="lazy" />
// //                   <div className="sad-highlights__card-overlay">
// //                     <div className="sad-highlights__card-content">
// //                       <span className="sad-highlights__card-number">
// //                         {String(index + 1).padStart(2, "0")}
// //                       </span>
// //                       <div className="sad-highlights__card-icon">
// //                         {reason.icon}
// //                       </div>
// //                       <p className="sad-highlights__card-text">{reason.text}</p>
// //                       <span className="sad-highlights__card-arrow">
// //                         <FaArrowRight />
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           PROCESS SECTION - Image Overlay Cards
// //       ================================================= */}
// //       <section ref={processRef} className="sad-process">
// //         <div className="sad-process__bg-wrapper">
// //           <div 
// //             className="sad-process__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.processBg})` }}
// //           />
// //           <div className="sad-process__bg-overlay" />
// //         </div>

// //         <div className="sad-container">
// //           <div className="sad-process__inner">
// //             <div className="sad-process__header">
// //               <div>
// //                 <span className="sad-process__label">ADMISSION PROCESS</span>
// //                 <h2 className="sad-process__title">
// //                   Simple Steps.
// //                   <br />
// //                   <span className="sad-process__highlight">Clear Guidance.</span>
// //                 </h2>
// //               </div>
// //               <p className="sad-process__desc">
// //                 Our admissions team can guide parents through the process and
// //                 help answer questions about joining SNGA.
// //               </p>
// //             </div>

// //             <div className="sad-process__steps">
// //               {admissionSteps.map((step, index) => (
// //                 <div key={step.number} className="sad-process__card">
// //                   <div className="sad-process__card-image">
// //                     <img src={step.image} alt={step.title} loading="lazy" />
// //                     <div className="sad-process__card-overlay">
// //                       <div className="sad-process__card-content">
// //                         <span className="sad-process__card-number">
// //                           {step.number}
// //                         </span>
// //                         <div className="sad-process__card-icon">
// //                           {step.icon}
// //                         </div>
// //                         <h3 className="sad-process__card-title">{step.title}</h3>
// //                         <p className="sad-process__card-text">{step.text}</p>
// //                         <span className="sad-process__card-arrow">
// //                           <FaArrowRight />
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   {index < admissionSteps.length - 1 && (
// //                     <div className="sad-process__card-connector">
// //                       <span />
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           CAMPUS SECTION - With Background Image
// //       ================================================= */}
// //       <section ref={campusRef} className="sad-campus">
// //         <div className="sad-campus__bg-wrapper">
// //           <div 
// //             className="sad-campus__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.campusBg})` }}
// //           />
// //           <div className="sad-campus__bg-overlay" />
// //         </div>

// //         <div className="sad-container">
// //           <div className="sad-campus__inner">
// //             <div className="sad-campus__content">
// //               <span className="sad-campus__label">EXPERIENCE THE CAMPUS</span>
// //               <h2 className="sad-campus__title">
// //                 13.5 Acres
// //                 <br />
// //                 <span className="sad-campus__highlight">Of Possibility.</span>
// //               </h2>
// //               <p className="sad-campus__desc">
// //                 Located at Venkulam on the Ramanathapuram–Devipattinam main road,
// //                 the SNGA campus provides a calm, serene and lush green environment
// //                 for learning.
// //               </p>
// //               <div className="sad-campus__actions">
// //                 <Link to="/infrastructure" className="sad-campus__link">
// //                   <span>Explore Infrastructure</span>
// //                   <FaArrowRight />
// //                 </Link>
// //                 <a href="#sad-enquiry" className="sad-campus__link sad-campus__link--secondary">
// //                   <span>Enquire Now</span>
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="sad-campus__stats">
// //               <div className="sad-campus__stat">
// //                 <span className="sad-campus__stat-number">13.5</span>
// //                 <span className="sad-campus__stat-label">ACRES</span>
// //                 <p className="sad-campus__stat-text">
// //                   A spacious campus created around a peaceful learning environment.
// //                 </p>
// //               </div>
// //               <div className="sad-campus__stat">
// //                 <span className="sad-campus__stat-number">3,500+</span>
// //                 <span className="sad-campus__stat-label">BOOKS</span>
// //                 <p className="sad-campus__stat-text">
// //                   Well-stocked library with resources for students and teachers.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           ENQUIRY SECTION
// //       ================================================= */}
// //       <section ref={enquiryRef} className="sad-enquiry" id="sad-enquiry">
// //         <div className="sad-container">
// //           <div className="sad-enquiry__inner">
// //             <div className="sad-enquiry__left">
// //               <span className="sad-enquiry__badge">ADMISSION ENQUIRY</span>
// //               <h2 className="sad-enquiry__title">
// //                 Let's Start the
// //                 <br />
// //                 <span className="sad-enquiry__highlight">Conversation.</span>
// //               </h2>
// //               <p className="sad-enquiry__desc">
// //                 Share your details and our admissions team can get in touch with
// //                 you regarding your enquiry.
// //               </p>

// //               <div className="sad-enquiry__contact">
// //                 <a href="tel:+919788914441" className="sad-enquiry__contact-link">
// //                   <FaPhone />
// //                   <span>
// //                     <small>CALL US</small>
// //                     +91 97889 14441
// //                   </span>
// //                 </a>
// //                 <a href="mailto:info@sngacbse.com" className="sad-enquiry__contact-link">
// //                   <FaEnvelope />
// //                   <span>
// //                     <small>EMAIL US</small>
// //                     info@sngacbse.com
// //                   </span>
// //                 </a>
// //               </div>

// //               <div className="sad-enquiry__features">
// //                 <div className="sad-enquiry__feature">
// //                   <FaClock />
// //                   <span>Mon–Fri: 8AM – 4PM</span>
// //                 </div>
// //                 <div className="sad-enquiry__feature">
// //                   <FaShieldAlt />
// //                   <span>Safe & Supportive</span>
// //                 </div>
// //                 <div className="sad-enquiry__feature">
// //                   <FaMapMarkerAlt />
// //                   <span>Ramanathapuram, Tamil Nadu</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="sad-enquiry__right">
// //               <form className="sad-enquiry__form" onSubmit={handleSubmit}>
// //                 <div className="sad-enquiry__form-header">
// //                   <span className="sad-enquiry__form-number">01</span>
// //                   <h3 className="sad-enquiry__form-title">Student Details</h3>
// //                 </div>

// //                 <div className="sad-enquiry__form-grid">
// //                   <div className="sad-enquiry__field">
// //                     <label htmlFor="parentName">
// //                       Parent / Guardian Name <span className="sad-enquiry__required">*</span>
// //                     </label>
// //                     <input
// //                       id="parentName"
// //                       name="parentName"
// //                       type="text"
// //                       value={formData.parentName}
// //                       onChange={handleChange}
// //                       placeholder="Enter parent name"
// //                       required
// //                     />
// //                   </div>

// //                   <div className="sad-enquiry__field">
// //                     <label htmlFor="studentName">
// //                       Student Name <span className="sad-enquiry__required">*</span>
// //                     </label>
// //                     <input
// //                       id="studentName"
// //                       name="studentName"
// //                       type="text"
// //                       value={formData.studentName}
// //                       onChange={handleChange}
// //                       placeholder="Enter student name"
// //                       required
// //                     />
// //                   </div>

// //                   <div className="sad-enquiry__field">
// //                     <label htmlFor="className">
// //                       Class <span className="sad-enquiry__required">*</span>
// //                     </label>
// //                     <select
// //                       id="className"
// //                       name="className"
// //                       value={formData.className}
// //                       onChange={handleChange}
// //                       required
// //                     >
// //                       <option value="">Select class</option>
// //                       <option value="Pre-KG">Pre-KG</option>
// //                       <option value="LKG">LKG</option>
// //                       <option value="UKG">UKG</option>
// //                       {Array.from({ length: 12 }, (_, i) => (
// //                         <option key={i + 1} value={`Std ${i + 1}`}>
// //                           Std {i + 1}
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   <div className="sad-enquiry__field">
// //                     <label htmlFor="mobile">
// //                       Mobile Number <span className="sad-enquiry__required">*</span>
// //                     </label>
// //                     <input
// //                       id="mobile"
// //                       name="mobile"
// //                       type="tel"
// //                       value={formData.mobile}
// //                       onChange={handleChange}
// //                       placeholder="Enter mobile number"
// //                       required
// //                     />
// //                   </div>

// //                   <div className="sad-enquiry__field">
// //                     <label htmlFor="email">Email Address</label>
// //                     <input
// //                       id="email"
// //                       name="email"
// //                       type="email"
// //                       value={formData.email}
// //                       onChange={handleChange}
// //                       placeholder="Enter email address"
// //                     />
// //                   </div>

// //                   <div className="sad-enquiry__field">
// //                     <label htmlFor="location">Location</label>
// //                     <input
// //                       id="location"
// //                       name="location"
// //                       type="text"
// //                       value={formData.location}
// //                       onChange={handleChange}
// //                       placeholder="City / Location"
// //                     />
// //                   </div>

// //                   <div className="sad-enquiry__field sad-enquiry__field--full">
// //                     <label htmlFor="message">Message</label>
// //                     <textarea
// //                       id="message"
// //                       name="message"
// //                       rows="4"
// //                       value={formData.message}
// //                       onChange={handleChange}
// //                       placeholder="Tell us anything you'd like to know..."
// //                     />
// //                   </div>
// //                 </div>

// //                 {success && (
// //                   <div className="sad-enquiry__status sad-enquiry__status--success">
// //                     <FaCheck />
// //                     {success}
// //                   </div>
// //                 )}

// //                 {error && (
// //                   <div className="sad-enquiry__status sad-enquiry__status--error">
// //                     {error}
// //                   </div>
// //                 )}

// //                 <button
// //                   type="submit"
// //                   className="sad-enquiry__submit"
// //                   disabled={submitting}
// //                 >
// //                   <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
// //                   {!submitting && <FaArrowRight />}
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           GUIDANCE SECTION
// //       ================================================= */}
// //       <section ref={guidanceRef} className="sad-guidance">
// //         <div className="sad-container">
// //           <div className="sad-guidance__inner">
// //             <div className="sad-guidance__content">
// //               <span className="sad-guidance__label">NEED HELP?</span>
// //               <h2 className="sad-guidance__title">
// //                 Have Questions
// //                 <br />
// //                 <span className="sad-guidance__highlight">About Admissions?</span>
// //               </h2>
// //             </div>

// //             <div className="sad-guidance__right">
// //               <div className="sad-guidance__quote">
// //                 <FaQuoteLeft />
// //               </div>
// //               <p className="sad-guidance__desc">
// //                 Our admissions team can help parents understand the school's
// //                 learning environment, admission process and next steps.
// //               </p>
// //               <div className="sad-guidance__actions">
// //                 <Link to="/contact" className="sad-guidance__link">
// //                   <span>Contact the School</span>
// //                   <FaArrowRight />
// //                 </Link>
// //                 <a href="tel:+919788914441" className="sad-guidance__link sad-guidance__link--secondary">
// //                   <FaPhone />
// //                   <span>Call Now</span>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           FINAL CTA - With Background Image
// //       ================================================= */}
// //       <section ref={finalRef} className="sad-final">
// //         <div className="sad-final__bg-wrapper">
// //           <div 
// //             className="sad-final__bg-image" 
// //             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
// //           />
// //           <div className="sad-final__bg-overlay" />
// //           <div className="sad-final__bg-gradient" />
// //         </div>

// //         <div className="sad-container">
// //           <div className="sad-final__content">
// //             <div className="sad-final__badge">
// //               <FaGraduationCap />
// //               SHIFAN NOOR GLOBAL ACADEMY
// //             </div>

// //             <h2 className="sad-final__title">
// //               Give Your Child
// //               <br />
// //               <span className="sad-final__highlight">Room to Grow.</span>
// //             </h2>

// //             <p className="sad-final__desc">
// //               Begin your conversation with SNGA today. Join a community that nurtures
// //               curiosity, builds character and celebrates every child's potential.
// //             </p>

// //             <div className="sad-final__actions">
// //               <a href="#sad-enquiry" className="sad-final__btn sad-final__btn--primary">
// //                 <span>Make an Enquiry</span>
// //                 <FaArrowRight />
// //               </a>
// //               <Link to="/about" className="sad-final__btn sad-final__btn--secondary">
// //                 <span>Learn About SNGA</span>
// //               </Link>
// //             </div>

// //             <div className="sad-final__footer">
// //               <span>
// //                 <FaMapMarkerAlt /> Bangalore, India
// //               </span>
// //               <span>
// //                 <FaPhone /> +91 98765 43210
// //               </span>
// //               <span>
// //                 <FaEnvelope /> info@snga.edu.in
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Admissions;


// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaCheck,
//   FaPhone,
//   FaEnvelope,
//   FaGraduationCap,
//   FaBuilding,
//   FaBookOpen,
//   FaUsers,
//   FaAward,
//   FaCalendarAlt,
//   FaRocket,
//   FaShieldAlt,
//   FaClock,
//   FaSchool,
//   FaMapMarkerAlt,
//   FaPlay,
//   FaQuoteLeft,
//   FaHands,
//   FaChild,
//   FaStar,
//   FaTrophy,
//   FaChalkboardTeacher,
//   FaTree,
//   FaHeart,
// } from "react-icons/fa";
// import admissionService from "../services/admission.service";
// import "./Admissions.css";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
//   ctaBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
//   campusBg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
//   processBg: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=1600&q=80",
  
//   // Highlight Cards Images
//   highlight1: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
//   highlight2: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
//   highlight3: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//   highlight4: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
//   highlight5: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
//   highlight6: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=800&q=80",
  
//   // Process Cards Images
//   process1: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
//   process2: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
//   process3: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//   process4: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
// };

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

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const highlightsRef = useRef(null);
//   const processRef = useRef(null);
//   const campusRef = useRef(null);
//   const enquiryRef = useRef(null);
//   const guidanceRef = useRef(null);
//   const finalRef = useRef(null);

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const observers = {};

//     const sections = [
//       { ref: heroRef, className: "sad-hero--visible" },
//       { ref: introRef, className: "sad-intro--visible" },
//       { ref: highlightsRef, className: "sad-highlights--visible" },
//       { ref: processRef, className: "sad-process--visible" },
//       { ref: campusRef, className: "sad-campus--visible" },
//       { ref: enquiryRef, className: "sad-enquiry--visible" },
//       { ref: guidanceRef, className: "sad-guidance--visible" },
//       { ref: finalRef, className: "sad-final--visible" },
//     ];

//     sections.forEach(({ ref, className }) => {
//       if (!ref.current) return;

//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(className);
//             observer.unobserve(entry.target);
//           }
//         });
//       }, observerOptions);

//       observer.observe(ref.current);
//       observers[className] = observer;
//     });

//     return () => {
//       Object.values(observers).forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   // =====================================================
//   // FORM HANDLERS
//   // =====================================================

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
//       // ✅ Using the correct service method
//       const response = await admissionService.createEnquiry(formData);

//       // Handle different response structures
//       const message = response?.message || response?.data?.message || 
//                      "Thank you. Your admission enquiry has been submitted successfully.";

//       setSuccess(message);

//       // Reset form
//       setFormData({
//         parentName: "",
//         studentName: "",
//         className: "",
//         mobile: "",
//         email: "",
//         location: "",
//         message: "",
//       });

//       // Scroll to success message
//       if (enquiryRef.current) {
//         enquiryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }

//     } catch (err) {
//       console.error("Admission enquiry error:", err);
      
//       // Handle error response
//       const errorMessage = err?.response?.data?.message || 
//                           err?.response?.data?.error ||
//                           err?.message ||
//                           "Unable to submit your enquiry. Please try again.";
      
//       setError(errorMessage);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // =====================================================
//   // DATA
//   // =====================================================

//   const admissionSteps = [
//     {
//       number: "01",
//       title: "Make an Enquiry",
//       text: "Share your details with our admissions team and tell us about the student and class you are enquiring for.",
//       icon: <FaBookOpen />,
//       image: IMAGES.process1,
//     },
//     {
//       number: "02",
//       title: "Connect With Us",
//       text: "Our team can guide you through the admission process, school environment and the next steps.",
//       icon: <FaUsers />,
//       image: IMAGES.process2,
//     },
//     {
//       number: "03",
//       title: "Visit the School",
//       text: "Experience the SNGA campus and understand the learning environment, facilities and school community.",
//       icon: <FaBuilding />,
//       image: IMAGES.process3,
//     },
//     {
//       number: "04",
//       title: "Complete Admission",
//       text: "Proceed with the required admission formalities and documentation as guided by the school.",
//       icon: <FaGraduationCap />,
//       image: IMAGES.process4,
//     },
//   ];

//   const reasons = [
//     { 
//       text: "Holistic and value-based education", 
//       icon: <FaAward />,
//       image: IMAGES.highlight1,
//     },
//     { 
//       text: "13.5-acre learning environment", 
//       icon: <FaBuilding />,
//       image: IMAGES.highlight2,
//     },
//     { 
//       text: "Digital classroom facilities", 
//       icon: <FaBookOpen />,
//       image: IMAGES.highlight3,
//     },
//     { 
//       text: "Science and computer laboratories", 
//       icon: <FaRocket />,
//       image: IMAGES.highlight4,
//     },
//     { 
//       text: "Library with 3,500+ books", 
//       icon: <FaBookOpen />,
//       image: IMAGES.highlight5,
//     },
//     { 
//       text: "Academic, sports and co-curricular opportunities", 
//       icon: <FaUsers />,
//       image: IMAGES.highlight6,
//     },
//   ];

//   const stats = [
//     { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
//     { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
//     { number: "25+", label: "Years of Excellence", icon: <FaTrophy /> },
//     { number: "500+", label: "Students", icon: <FaUsers /> },
//   ];

//   const whyChooseUs = [
//     {
//       icon: <FaChalkboardTeacher />,
//       title: "Expert Faculty",
//       desc: "Qualified and experienced teachers dedicated to student growth.",
//       color: "#4A90D9"
//     },
//     {
//       icon: <FaHeart />,
//       title: "Values & Culture",
//       desc: "Building character through Indian values and traditions.",
//       color: "#E74C3C"
//     },
//     {
//       icon: <FaStar />,
//       title: "Modern Facilities",
//       desc: "Smart classrooms, labs, library and sports infrastructure.",
//       color: "#F39C12"
//     },
//     {
//       icon: <FaHands />,
//       title: "Community Focus",
//       desc: "Strong parent-school partnership for student development.",
//       color: "#27AE60"
//     },
//   ];

//   return (
//     <main className="sad-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sad-topbar">
//         <div className="sad-container">
//           <div className="sad-topbar__content">
//             <span className="sad-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sad-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sad-hero">
//         <div className="sad-hero__bg-wrapper">
//           <div 
//             className="sad-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sad-hero__bg-overlay" />
//           <div className="sad-hero__bg-gradient" />
//         </div>

//         <div className="sad-container">
//           <div className="sad-hero__inner">
//             <div className="sad-hero__content">
//               <div className="sad-hero__badge">
//                 <FaGraduationCap />
//                 ADMISSIONS OPEN
//               </div>

//               <h1 className="sad-hero__title">
//                 Begin Your Child's
//                 <br />
//                 <span className="sad-hero__highlight">Journey with SNGA.</span>
//               </h1>

//               <p className="sad-hero__desc">
//                 Discover a learning environment where knowledge, skills,
//                 values and confidence come together to shape the leaders
//                 of tomorrow.
//               </p>

//               <div className="sad-hero__stats">
            
//               </div>

//               <div className="sad-hero__actions">
//                 <a href="#sad-enquiry" className="sad-hero__btn sad-hero__btn--primary">
//                   <span>Start an Enquiry</span>
//                   <FaArrowRight />
//                 </a>
//                 <a href="tel:+919788914441" className="sad-hero__btn sad-hero__btn--secondary">
//                   <FaPhone />
//                   <span>Call Us</span>
//                 </a>
//               </div>
//             </div>

//             <div className="sad-hero__image-wrapper">
//               <div className="sad-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA School" 
//                   className="sad-hero__image-img"
//                 />
//                 <div className="sad-hero__image-ring" />
//                 <div className="sad-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sad-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sad-intro">
//         <div className="sad-container">
//           <div className="sad-intro__inner">
//             <div className="sad-intro__header">
//               <span className="sad-intro__label">WHY SNGA</span>
//               <h2 className="sad-intro__title">
//                 A School Built
//                 <span className="sad-intro__highlight">For Complete Growth.</span>
//               </h2>
//             </div>

//             <div className="sad-intro__content">
//               <p>
//                 At Shifan Noor Global Academy, education goes beyond academic
//                 achievement. Students are encouraged to build knowledge, develop
//                 skills, strengthen values and grow with confidence.
//               </p>
//               <p>
//                 Our campus, classrooms, laboratories, library, sports and
//                 co-curricular opportunities create different spaces for students
//                 to learn and discover their potential.
//               </p>
//             </div>

//             <div className="sad-intro__features">
//               {whyChooseUs.map((item, index) => (
//                 <div key={index} className="sad-intro__feature">
//                   <div className="sad-intro__feature-icon" style={{ background: item.color + '20', color: item.color }}>
//                     {item.icon}
//                   </div>
//                   <h4>{item.title}</h4>
//                   <p>{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           HIGHLIGHTS SECTION - Image Overlay Cards
//       ================================================= */}
//       <section ref={highlightsRef} className="sad-highlights">
//         <div className="sad-container">
//           <div className="sad-highlights__header">
//             <div>
//               <span className="sad-highlights__label">THE SNGA EXPERIENCE</span>
//               <h2 className="sad-highlights__title">
//                 More Than
//                 <br />
//                 <span className="sad-highlights__highlight">A School.</span>
//               </h2>
//             </div>
//             <p className="sad-highlights__desc">
//               An environment designed to support academic, personal and
//               all-round student development.
//             </p>
//           </div>

//           <div className="sad-highlights__grid">
//             {reasons.map((reason, index) => (
//               <div key={index} className="sad-highlights__card">
//                 <div className="sad-highlights__card-image">
//                   <img src={reason.image} alt={reason.text} loading="lazy" />
//                   <div className="sad-highlights__card-overlay">
//                     <div className="sad-highlights__card-content">
//                       <span className="sad-highlights__card-number">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                       <div className="sad-highlights__card-icon">
//                         {reason.icon}
//                       </div>
//                       <p className="sad-highlights__card-text">{reason.text}</p>
//                       <span className="sad-highlights__card-arrow">
//                         <FaArrowRight />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           PROCESS SECTION - Image Overlay Cards
//       ================================================= */}
//       <section ref={processRef} className="sad-process">
//         <div className="sad-process__bg-wrapper">
//           <div 
//             className="sad-process__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.processBg})` }}
//           />
//           <div className="sad-process__bg-overlay" />
//         </div>

//         <div className="sad-container">
//           <div className="sad-process__inner">
//             <div className="sad-process__header">
//               <div>
//                 <span className="sad-process__label">ADMISSION PROCESS</span>
//                 <h2 className="sad-process__title">
//                   Simple Steps.
//                   <br />
//                   <span className="sad-process__highlight">Clear Guidance.</span>
//                 </h2>
//               </div>
//               <p className="sad-process__desc">
//                 Our admissions team can guide parents through the process and
//                 help answer questions about joining SNGA.
//               </p>
//             </div>

//             <div className="sad-process__steps">
//               {admissionSteps.map((step, index) => (
//                 <div key={step.number} className="sad-process__card">
//                   <div className="sad-process__card-image">
//                     <img src={step.image} alt={step.title} loading="lazy" />
//                     <div className="sad-process__card-overlay">
//                       <div className="sad-process__card-content">
//                         <span className="sad-process__card-number">
//                           {step.number}
//                         </span>
//                         <div className="sad-process__card-icon">
//                           {step.icon}
//                         </div>
//                         <h3 className="sad-process__card-title">{step.title}</h3>
//                         <p className="sad-process__card-text">{step.text}</p>
//                         <span className="sad-process__card-arrow">
//                           <FaArrowRight />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   {index < admissionSteps.length - 1 && (
//                     <div className="sad-process__card-connector">
//                       <span />
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           CAMPUS SECTION - With Background Image
//       ================================================= */}
//       <section ref={campusRef} className="sad-campus">
//         <div className="sad-campus__bg-wrapper">
//           <div 
//             className="sad-campus__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.campusBg})` }}
//           />
//           <div className="sad-campus__bg-overlay" />
//         </div>

//         <div className="sad-container">
//           <div className="sad-campus__inner">
//             <div className="sad-campus__content">
//               <span className="sad-campus__label">EXPERIENCE THE CAMPUS</span>
//               <h2 className="sad-campus__title">
//                 13.5 Acres
//                 <br />
//                 <span className="sad-campus__highlight">Of Possibility.</span>
//               </h2>
//               <p className="sad-campus__desc">
//                 Located at Venkulam on the Ramanathapuram–Devipattinam main road,
//                 the SNGA campus provides a calm, serene and lush green environment
//                 for learning.
//               </p>
//               <div className="sad-campus__actions">
//                 <Link to="/infrastructure" className="sad-campus__link">
//                   <span>Explore Infrastructure</span>
//                   <FaArrowRight />
//                 </Link>
//                 <a href="#sad-enquiry" className="sad-campus__link sad-campus__link--secondary">
//                   <span>Enquire Now</span>
//                 </a>
//               </div>
//             </div>

//             <div className="sad-campus__stats">
//               <div className="sad-campus__stat">
//                 <span className="sad-campus__stat-number">13.5</span>
//                 <span className="sad-campus__stat-label">ACRES</span>
//                 <p className="sad-campus__stat-text">
//                   A spacious campus created around a peaceful learning environment.
//                 </p>
//               </div>
//               <div className="sad-campus__stat">
//                 <span className="sad-campus__stat-number">3,500+</span>
//                 <span className="sad-campus__stat-label">BOOKS</span>
//                 <p className="sad-campus__stat-text">
//                   Well-stocked library with resources for students and teachers.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           ENQUIRY SECTION
//       ================================================= */}
//       <section ref={enquiryRef} className="sad-enquiry" id="sad-enquiry">
//         <div className="sad-container">
//           <div className="sad-enquiry__inner">
//             <div className="sad-enquiry__left">
//               <span className="sad-enquiry__badge">ADMISSION ENQUIRY</span>
//               <h2 className="sad-enquiry__title">
//                 Let's Start the
//                 <br />
//                 <span className="sad-enquiry__highlight">Conversation.</span>
//               </h2>
//               <p className="sad-enquiry__desc">
//                 Share your details and our admissions team can get in touch with
//                 you regarding your enquiry.
//               </p>

//               <div className="sad-enquiry__contact">
//                 <a href="tel:+919788914441" className="sad-enquiry__contact-link">
//                   <FaPhone />
//                   <span>
//                     <small>CALL US</small>
//                     +91 97889 14441
//                   </span>
//                 </a>
//                 <a href="mailto:info@sngacbse.com" className="sad-enquiry__contact-link">
//                   <FaEnvelope />
//                   <span>
//                     <small>EMAIL US</small>
//                     info@sngacbse.com
//                   </span>
//                 </a>
//               </div>

//               <div className="sad-enquiry__features">
//                 <div className="sad-enquiry__feature">
//                   <FaClock />
//                   <span>Mon–Fri: 8AM – 4PM</span>
//                 </div>
//                 <div className="sad-enquiry__feature">
//                   <FaShieldAlt />
//                   <span>Safe & Supportive</span>
//                 </div>
//                 <div className="sad-enquiry__feature">
//                   <FaMapMarkerAlt />
//                   <span>Ramanathapuram, Tamil Nadu</span>
//                 </div>
//               </div>
//             </div>

//             <div className="sad-enquiry__right">
//               <form className="sad-enquiry__form" onSubmit={handleSubmit} noValidate>
//                 <div className="sad-enquiry__form-header">
//                   <span className="sad-enquiry__form-number">01</span>
//                   <h3 className="sad-enquiry__form-title">Student Details</h3>
//                 </div>

//                 <div className="sad-enquiry__form-grid">
//                   <div className="sad-enquiry__field">
//                     <label htmlFor="parentName">
//                       Parent / Guardian Name <span className="sad-enquiry__required">*</span>
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

//                   <div className="sad-enquiry__field">
//                     <label htmlFor="studentName">
//                       Student Name <span className="sad-enquiry__required">*</span>
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

//                   <div className="sad-enquiry__field">
//                     <label htmlFor="className">
//                       Class <span className="sad-enquiry__required">*</span>
//                     </label>
//                     <select
//                       id="className"
//                       name="className"
//                       value={formData.className}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select class</option>
//                       <option value="Pre-KG">Pre-KG</option>
//                       <option value="LKG">LKG</option>
//                       <option value="UKG">UKG</option>
//                       {Array.from({ length: 12 }, (_, i) => (
//                         <option key={i + 1} value={`Std ${i + 1}`}>
//                           Std {i + 1}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="sad-enquiry__field">
//                     <label htmlFor="mobile">
//                       Mobile Number <span className="sad-enquiry__required">*</span>
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

//                   <div className="sad-enquiry__field">
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Enter email address"
//                     />
//                   </div>

//                   <div className="sad-enquiry__field">
//                     <label htmlFor="location">Location</label>
//                     <input
//                       id="location"
//                       name="location"
//                       type="text"
//                       value={formData.location}
//                       onChange={handleChange}
//                       placeholder="City / Location"
//                     />
//                   </div>

//                   <div className="sad-enquiry__field sad-enquiry__field--full">
//                     <label htmlFor="message">Message</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="4"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us anything you'd like to know..."
//                     />
//                   </div>
//                 </div>

//                 {success && (
//                   <div className="sad-enquiry__status sad-enquiry__status--success">
//                     <FaCheck />
//                     {success}
//                   </div>
//                 )}

//                 {error && (
//                   <div className="sad-enquiry__status sad-enquiry__status--error">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   className="sad-enquiry__submit"
//                   disabled={submitting}
//                 >
//                   <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
//                   {!submitting && <FaArrowRight />}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           GUIDANCE SECTION
//       ================================================= */}
//       <section ref={guidanceRef} className="sad-guidance">
//         <div className="sad-container">
//           <div className="sad-guidance__inner">
//             <div className="sad-guidance__content">
//               <span className="sad-guidance__label">NEED HELP?</span>
//               <h2 className="sad-guidance__title">
//                 Have Questions
//                 <br />
//                 <span className="sad-guidance__highlight">About Admissions?</span>
//               </h2>
//             </div>

//             <div className="sad-guidance__right">
//               <div className="sad-guidance__quote">
//                 <FaQuoteLeft />
//               </div>
//               <p className="sad-guidance__desc">
//                 Our admissions team can help parents understand the school's
//                 learning environment, admission process and next steps.
//               </p>
//               <div className="sad-guidance__actions">
//                 <Link to="/contact" className="sad-guidance__link">
//                   <span>Contact the School</span>
//                   <FaArrowRight />
//                 </Link>
//                 <a href="tel:+919788914441" className="sad-guidance__link sad-guidance__link--secondary">
//                   <FaPhone />
//                   <span>Call Now</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={finalRef} className="sad-final">
//         <div className="sad-final__bg-wrapper">
//           <div 
//             className="sad-final__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sad-final__bg-overlay" />
//           <div className="sad-final__bg-gradient" />
//         </div>

//         <div className="sad-container">
//           <div className="sad-final__content">
//             <div className="sad-final__badge">
//               <FaGraduationCap />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sad-final__title">
//               Give Your Child
//               <br />
//               <span className="sad-final__highlight">Room to Grow.</span>
//             </h2>

//             <p className="sad-final__desc">
//               Begin your conversation with SNGA today. Join a community that nurtures
//               curiosity, builds character and celebrates every child's potential.
//             </p>

//             <div className="sad-final__actions">
//               <a href="#sad-enquiry" className="sad-final__btn sad-final__btn--primary">
//                 <span>Make an Enquiry</span>
//                 <FaArrowRight />
//               </a>
//               <Link to="/about" className="sad-final__btn sad-final__btn--secondary">
//                 <span>Learn About SNGA</span>
//               </Link>
//             </div>

//             <div className="sad-final__footer">
//               <span>
//                 <FaMapMarkerAlt /> Bangalore, India
//               </span>
//               <span>
//                 <FaPhone /> +91 98765 43210
//               </span>
//               <span>
//                 <FaEnvelope /> info@snga.edu.in
//               </span>
//             </div>
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
  FaSchool,
  FaMapMarkerAlt,
  FaPlay,
  FaQuoteLeft,
  FaHands,
  FaChild,
  FaStar,
  FaTrophy,
  FaChalkboardTeacher,
  FaTree,
  FaHeart,
} from "react-icons/fa";
import admissionService from "../services/admission.service";
import "./Admissions.css";

import heroBg from "../assets/school.JPG";
import heroCircle from "../assets/about.png";
import ctaBg from "../assets/engaging.jpg";
import campus from "../assets/camp.jpg";
import library from "../assets/library.jpg";
import computer from "../assets/ComputerLab.jpg";
import sport from "../assets/sport.JPG";
import classroom from "../assets/classroom.jpg";
import value from "../assets/values.jpg";
import process1 from "../assets/process1.jpg";
import process2 from "../assets/process2.jpg";
import process3 from "../assets/process3.jpg";
import process4 from "../assets/process4.jpg";

// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  campusBg: campus,
  processBg: campus,
  
  // Highlight Cards Images
  highlight1: value,
  highlight2: campus,
  highlight3: classroom,
  highlight4: computer,
  highlight5: library,
  highlight6: sport,
  
  // Process Cards Images
  process1: process1,
  process2: process2,
  process3: process3,
  process4: process4,
};

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

    // Basic validation
    if (!formData.parentName || !formData.studentName || !formData.className || !formData.mobile) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      // ✅ Using the correct service method with /admissions endpoint
      const response = await admissionService.createEnquiry(formData);

      // Handle different response structures
      const message = response?.message || 
                     response?.data?.message || 
                     "Thank you. Your admission enquiry has been submitted successfully.";

      setSuccess(message);

      // Reset form
      setFormData({
        parentName: "",
        studentName: "",
        className: "",
        mobile: "",
        email: "",
        location: "",
        message: "",
      });

      // Scroll to success message
      if (enquiryRef.current) {
        enquiryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

    } catch (err) {
      console.error("Admission enquiry error:", err);
      
      // Handle error response
      const errorMessage = err?.response?.data?.message || 
                          err?.response?.data?.error ||
                          err?.message ||
                          "Unable to submit your enquiry. Please try again.";
      
      setError(errorMessage);
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
      image: IMAGES.process1,
    },
    {
      number: "02",
      title: "Connect With Us",
      text: "Our team can guide you through the admission process, school environment and the next steps.",
      icon: <FaUsers />,
      image: IMAGES.process2,
    },
    {
      number: "03",
      title: "Visit the School",
      text: "Experience the SNGA campus and understand the learning environment, facilities and school community.",
      icon: <FaBuilding />,
      image: IMAGES.process3,
    },
    {
      number: "04",
      title: "Complete Admission",
      text: "Proceed with the required admission formalities and documentation as guided by the school.",
      icon: <FaGraduationCap />,
      image: IMAGES.process4,
    },
  ];

  const reasons = [
    { 
      text: "Holistic and value-based education", 
      icon: <FaAward />,
      image: IMAGES.highlight1,
    },
    { 
      text: "13.5-acre learning environment", 
      icon: <FaBuilding />,
      image: IMAGES.highlight2,
    },
    { 
      text: "Digital classroom facilities", 
      icon: <FaBookOpen />,
      image: IMAGES.highlight3,
    },
    { 
      text: "Science and computer laboratories", 
      icon: <FaRocket />,
      image: IMAGES.highlight4,
    },
    { 
      text: "Library with 3,500+ books", 
      icon: <FaBookOpen />,
      image: IMAGES.highlight5,
    },
    { 
      text: "Academic, sports and co-curricular opportunities", 
      icon: <FaUsers />,
      image: IMAGES.highlight6,
    },
  ];

  const stats = [
    { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
    { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
    { number: "25+", label: "Years of Excellence", icon: <FaTrophy /> },
    { number: "500+", label: "Students", icon: <FaUsers /> },
  ];

  const whyChooseUs = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Faculty",
      desc: "Qualified and experienced teachers dedicated to student growth.",
      color: "#4A90D9"
    },
    {
      icon: <FaHeart />,
      title: "Values & Culture",
      desc: "Building character through Indian values and traditions.",
      color: "#E74C3C"
    },
    {
      icon: <FaStar />,
      title: "Modern Facilities",
      desc: "Smart classrooms, labs, library and sports infrastructure.",
      color: "#F39C12"
    },
    {
      icon: <FaHands />,
      title: "Community Focus",
      desc: "Strong parent-school partnership for student development.",
      color: "#27AE60"
    },
  ];

  return (
    <main className="sad-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sad-topbar">
        <div className="sad-container">
          <div className="sad-topbar__content">
            <span className="sad-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sad-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sad-hero">
        <div className="sad-hero__bg-wrapper">
          <div 
            className="sad-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sad-hero__bg-overlay" />
          <div className="sad-hero__bg-gradient" />
        </div>

        <div className="sad-container">
          <div className="sad-hero__inner">
            <div className="sad-hero__content">
              <div className="sad-hero__badge">
                <FaGraduationCap />
                ADMISSIONS OPEN
              </div>

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

              {/* <div className="sad-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sad-hero__stat">
                    <span className="sad-hero__stat-icon">{stat.icon}</span>
                    <span className="sad-hero__stat-number">{stat.number}</span>
                    <span className="sad-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="sad-hero__actions">
                <a href="#sad-enquiry" className="sad-hero__btn sad-hero__btn--primary">
                  <span>Start an Enquiry</span>
                  <FaArrowRight />
                </a>
                <a href="tel:+919788914441" className="sad-hero__btn sad-hero__btn--secondary">
                  <FaPhone />
                  <span>Call Us</span>
                </a>
              </div> */}
            </div>

            <div className="sad-hero__image-wrapper">
              <div className="sad-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA School" 
                  className="sad-hero__image-img"
                />
                <div className="sad-hero__image-ring" />
                {/* <div className="sad-hero__image-badge">
                  <span>Since 2015</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="sad-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sad-intro">
        <div className="sad-container">
          <div className="sad-intro__inner">
            <div className="sad-intro__header">
              <span className="sad-intro__label">WHY SNGA</span>
              <h2 className="sad-intro__title">
                A School Built
                <span className="sad-intro__highlight">For Complete Growth.</span>
              </h2>
            </div>

            <div className="sad-intro__content">
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

            <div className="sad-intro__features">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="sad-intro__feature">
                  <div className="sad-intro__feature-icon" style={{ background: item.color + '20', color: item.color }}>
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          HIGHLIGHTS SECTION - Image Overlay Cards
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
              <div key={index} className="sad-highlights__card">
                <div className="sad-highlights__card-image">
                  <img src={reason.image} alt={reason.text} loading="lazy" />
                  <div className="sad-highlights__card-overlay">
                    <div className="sad-highlights__card-content">
                      {/* <span className="sad-highlights__card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span> */}
                      <div className="sad-highlights__card-icon">
                        {reason.icon}
                      </div>
                      <p className="sad-highlights__card-text">{reason.text}</p>
                      <span className="sad-highlights__card-arrow">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          PROCESS SECTION - Image Overlay Cards
      ================================================= */}
      <section ref={processRef} className="sad-process">
        <div className="sad-process__bg-wrapper">
          <div 
            className="sad-process__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.processBg})` }}
          />
          <div className="sad-process__bg-overlay" />
        </div>

        <div className="sad-container">
          <div className="sad-process__inner">
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
                <div key={step.number} className="sad-process__card">
                  <div className="sad-process__card-image">
                    <img src={step.image} alt={step.title} loading="lazy" />
                    <div className="sad-process__card-overlay">
                      <div className="sad-process__card-content">
                        {/* <span className="sad-process__card-number">
                          {step.number}
                        </span> */}
                        <div className="sad-process__card-icon">
                          {step.icon}
                        </div>
                        <h3 className="sad-process__card-title">{step.title}</h3>
                        <p className="sad-process__card-text">{step.text}</p>
                        <span className="sad-process__card-arrow">
                          <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="sad-process__card-connector">
                      <span />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CAMPUS SECTION - With Background Image
      ================================================= */}
      <section ref={campusRef} className="sad-campus">
        <div className="sad-campus__bg-wrapper">
          <div 
            className="sad-campus__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.campusBg})` }}
          />
          <div className="sad-campus__bg-overlay" />
        </div>

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
              <div className="sad-campus__actions">
                <Link to="/infrastructure" className="sad-campus__link">
                  <span>Explore Infrastructure</span>
                  <FaArrowRight />
                </Link>
                <a href="#sad-enquiry" className="sad-campus__link sad-campus__link--secondary">
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>

            <div className="sad-campus__stats">
              <div className="sad-campus__stat">
                <span className="sad-campus__stat-number">13.5</span>
                <span className="sad-campus__stat-label">ACRES</span>
                <p className="sad-campus__stat-text">
                  A spacious campus created around a peaceful learning environment.
                </p>
              </div>
              <div className="sad-campus__stat">
                <span className="sad-campus__stat-number">3,500+</span>
                <span className="sad-campus__stat-label">BOOKS</span>
                <p className="sad-campus__stat-text">
                  Well-stocked library with resources for students and teachers.
                </p>
              </div>
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
                <div className="sad-enquiry__feature">
                  <FaMapMarkerAlt />
                  <span>Ramanathapuram, Tamil Nadu</span>
                </div>
              </div>
            </div>

            <div className="sad-enquiry__right">
              <form className="sad-enquiry__form" onSubmit={handleSubmit} noValidate>
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
            <div className="sad-guidance__content">
              <span className="sad-guidance__label">NEED HELP?</span>
              <h2 className="sad-guidance__title">
                Have Questions
                <br />
                <span className="sad-guidance__highlight">About Admissions?</span>
              </h2>
            </div>

            <div className="sad-guidance__right">
              <div className="sad-guidance__quote">
                <FaQuoteLeft />
              </div>
              <p className="sad-guidance__desc">
                Our admissions team can help parents understand the school's
                learning environment, admission process and next steps.
              </p>
              <div className="sad-guidance__actions">
                <Link to="/contact" className="sad-guidance__link">
                  <span>Contact the School</span>
                  <FaArrowRight />
                </Link>
                <a href="tel:+919788914441" className="sad-guidance__link sad-guidance__link--secondary">
                  <FaPhone />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={finalRef} className="sad-final">
        <div className="sad-final__bg-wrapper">
          <div 
            className="sad-final__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sad-final__bg-overlay" />
          <div className="sad-final__bg-gradient" />
        </div>

        <div className="sad-container">
          <div className="sad-final__content">
            <div className="sad-final__badge">
              <FaGraduationCap />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sad-final__title">
              Give Your Child
              <br />
              <span className="sad-final__highlight">Room to Grow.</span>
            </h2>

            <p className="sad-final__desc">
              Begin your conversation with SNGA today. Join a community that nurtures
              curiosity, builds character and celebrates every child's potential.
            </p>

            <div className="sad-final__actions">
              <a href="#sad-enquiry" className="sad-final__btn sad-final__btn--primary">
                <span>Make an Enquiry</span>
                <FaArrowRight />
              </a>
              <Link to="/about" className="sad-final__btn sad-final__btn--secondary">
                <span>Learn About SNGA</span>
              </Link>
            </div>

            <div className="sad-final__footer">
              <span>
                <FaMapMarkerAlt /> Bangalore, India
              </span>
              <span>
                <FaPhone /> +91 98765 43210
              </span>
              <span>
                <FaEnvelope /> info@snga.edu.in
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;