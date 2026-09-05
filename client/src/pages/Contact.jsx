// // // import { useState } from "react";
// // // import contactService from "../services/contact.service";
// // // import "./Contact.css";

// // // const Contact = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     mobile: "",
// // //     subject: "",
// // //     message: "",
// // //   });

// // //   const [status, setStatus] = useState({
// // //     type: "",
// // //     message: "",
// // //   });

// // //   const [submitting, setSubmitting] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;

// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     setStatus({
// // //       type: "",
// // //       message: "",
// // //     });

// // //     if (!formData.name.trim() || !formData.message.trim()) {
// // //       setStatus({
// // //         type: "error",
// // //         message: "Please enter your name and message.",
// // //       });
// // //       return;
// // //     }

// // //     if (!formData.email.trim() && !formData.mobile.trim()) {
// // //       setStatus({
// // //         type: "error",
// // //         message: "Please provide either your email or mobile number.",
// // //       });
// // //       return;
// // //     }

// // //     try {
// // //       setSubmitting(true);

// // //       await contactService.createEnquiry(formData);

// // //       setStatus({
// // //         type: "success",
// // //         message:
// // //           "Thank you for reaching out. Our team will get back to you shortly.",
// // //       });

// // //       setFormData({
// // //         name: "",
// // //         email: "",
// // //         mobile: "",
// // //         subject: "",
// // //         message: "",
// // //       });
// // //     } catch (error) {
// // //       console.error("Contact enquiry error:", error);

// // //       setStatus({
// // //         type: "error",
// // //         message:
// // //           error?.response?.data?.message ||
// // //           "Something went wrong. Please try again.",
// // //       });
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <main className="contact-page">
// // //       {/* HERO */}
// // //       <section className="contact-hero">
// // //         <div className="contact-container">
// // //           <div className="contact-hero-content">
// // //             <p className="contact-eyebrow">GET IN TOUCH</p>

// // //             <h1>
// // //               Let’s start a
// // //               <br />
// // //               <span>conversation.</span>
// // //             </h1>

// // //             <p className="contact-hero-description">
// // //               Whether you are looking for admission information, have a
// // //               question about our school, or simply want to know more about
// // //               Shifan Noor Global Academy, we are here to help.
// // //             </p>
// // //           </div>

// // //           <div className="contact-hero-meta">
// // //             <span>SHIFAN NOOR GLOBAL ACADEMY</span>
// // //             <span>RAMANATHAPURAM · TAMIL NADU</span>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CONTACT CONTENT */}
// // //       <section className="contact-main">
// // //         <div className="contact-container contact-main-grid">
// // //           {/* LEFT */}
// // //           <div className="contact-information">
// // //             <div className="contact-section-label">CONTACT INFORMATION</div>

// // //             <h2>
// // //               We’re always
// // //               <br />
// // //               <span>happy to hear from you.</span>
// // //             </h2>

// // //             <p className="contact-information-intro">
// // //               Connect with our school team for admissions, academic
// // //               information, campus visits, or any other enquiry.
// // //             </p>

// // //             <div className="contact-details">
// // //               <div className="contact-detail">
// // //                 <span className="contact-detail-label">ADDRESS</span>
// // //                 <p>
// // //                   Shifan Noor Global Academy
// // //                   <br />
// // //                   Venkulam, Devipattinam Road
// // //                   <br />
// // //                   Ramanathapuram – 623503
// // //                   <br />
// // //                   Tamil Nadu, India
// // //                 </p>
// // //               </div>

// // //               <div className="contact-detail">
// // //                 <span className="contact-detail-label">PHONE</span>

// // //                 <a href="tel:+919788914441">+91 97889 14441</a>
// // //                 <a href="tel:+919600234555">+91 96002 34555</a>
// // //               </div>

// // //               <div className="contact-detail">
// // //                 <span className="contact-detail-label">EMAIL</span>

// // //                 <a href="mailto:info@sngacbse.com">
// // //                   info@sngacbse.com
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             <div className="contact-admission-note">
// // //               <span>ADMISSIONS</span>
// // //               <p>
// // //                 Planning a visit or looking for admission information?
// // //                 Our team can guide you through the next steps.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT FORM */}
// // //           <div className="contact-form-wrap">
// // //             <div className="contact-form-header">
// // //               <span>ENQUIRY</span>

// // //               <h2>How can we help?</h2>

// // //               <p>
// // //                 Send us your details and message. We’ll get back to you
// // //                 with the information you need.
// // //               </p>
// // //             </div>

// // //             <form className="contact-form" onSubmit={handleSubmit}>
// // //               <div className="contact-form-row">
// // //                 <div className="contact-field">
// // //                   <label htmlFor="name">
// // //                     Name <span>*</span>
// // //                   </label>

// // //                   <input
// // //                     id="name"
// // //                     name="name"
// // //                     type="text"
// // //                     placeholder="Your name"
// // //                     value={formData.name}
// // //                     onChange={handleChange}
// // //                     required
// // //                   />
// // //                 </div>

// // //                 <div className="contact-field">
// // //                   <label htmlFor="mobile">Mobile</label>

// // //                   <input
// // //                     id="mobile"
// // //                     name="mobile"
// // //                     type="tel"
// // //                     placeholder="+91"
// // //                     value={formData.mobile}
// // //                     onChange={handleChange}
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="contact-form-row">
// // //                 <div className="contact-field">
// // //                   <label htmlFor="email">Email</label>

// // //                   <input
// // //                     id="email"
// // //                     name="email"
// // //                     type="email"
// // //                     placeholder="you@example.com"
// // //                     value={formData.email}
// // //                     onChange={handleChange}
// // //                   />
// // //                 </div>

// // //                 <div className="contact-field">
// // //                   <label htmlFor="subject">Subject</label>

// // //                   <input
// // //                     id="subject"
// // //                     name="subject"
// // //                     type="text"
// // //                     placeholder="What is this regarding?"
// // //                     value={formData.subject}
// // //                     onChange={handleChange}
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="contact-field">
// // //                 <label htmlFor="message">
// // //                   Message <span>*</span>
// // //                 </label>

// // //                 <textarea
// // //                   id="message"
// // //                   name="message"
// // //                   rows="7"
// // //                   placeholder="Tell us how we can help..."
// // //                   value={formData.message}
// // //                   onChange={handleChange}
// // //                   required
// // //                 />
// // //               </div>

// // //               {status.message && (
// // //                 <div
// // //                   className={`contact-form-status contact-form-status-${status.type}`}
// // //                   role="alert"
// // //                 >
// // //                   {status.message}
// // //                 </div>
// // //               )}

// // //               <div className="contact-form-footer">
// // //                 <p>
// // //                   By submitting this form, you are requesting our team to
// // //                   contact you regarding your enquiry.
// // //                 </p>

// // //                 <button
// // //                   type="submit"
// // //                   className="contact-submit"
// // //                   disabled={submitting}
// // //                 >
// // //                   {submitting ? "Sending..." : "Send Enquiry"}
// // //                   <span aria-hidden="true">→</span>
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* MAP / CAMPUS CTA */}
// // //       <section className="contact-campus">
// // //         <div className="contact-container contact-campus-inner">
// // //           <div>
// // //             <span className="contact-campus-label">VISIT THE CAMPUS</span>

// // //             <h2>
// // //               Come and experience
// // //               <br />
// // //               <span>SNGA for yourself.</span>
// // //             </h2>
// // //           </div>

// // //           <div className="contact-campus-copy">
// // //             <p>
// // //               Our campus is located at Venkulam on the Ramanathapuram–
// // //               Devipattinam main road, in a calm and spacious environment
// // //               designed for learning.
// // //             </p>

// // //             <a
// // //               href="https://www.google.com/maps/search/?api=1&query=Shifan+Noor+Global+Academy+Venkulam+Ramanathapuram+Tamil+Nadu"
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="contact-map-link"
// // //             >
// // //               Get directions
// // //               <span aria-hidden="true">↗</span>
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* FINAL CTA */}
// // //       <section className="contact-final">
// // //         <div className="contact-container">
// // //           <div className="contact-final-content">
// // //             <span>SHIFAN NOOR GLOBAL ACADEMY</span>

// // //             <h2>
// // //               Questions are the
// // //               <br />
// // //               beginning of <em>discovery.</em>
// // //             </h2>

// // //             <a href="tel:+919788914441" className="contact-final-button">
// // //               Talk to our team
// // //               <span aria-hidden="true">→</span>
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // };

// // // export default Contact;


// // import { useEffect, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FaArrowRight,
// //   FaPhoneAlt,
// //   FaEnvelope,
// //   FaMapMarkerAlt,
// //   FaClock,
// //   FaGraduationCap,
// //   FaUserGraduate,
// //   FaBuilding,
// //   FaCalendarAlt,
// //   FaCheckCircle,
// // } from "react-icons/fa";
// // import contactService from "../services/contact.service";
// // import "./Contact.css";

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     mobile: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const [status, setStatus] = useState({
// //     type: "",
// //     message: "",
// //   });

// //   const [submitting, setSubmitting] = useState(false);

// //   const heroRef = useRef(null);
// //   const mainRef = useRef(null);
// //   const campusRef = useRef(null);
// //   const finalRef = useRef(null);

// //   // =====================================================
// //   // SCROLL TRIGGERED ANIMATIONS
// //   // =====================================================

// //   useEffect(() => {
// //     const observerOptions = {
// //       threshold: 0.1,
// //       rootMargin: "0px 0px -50px 0px",
// //     };

// //     const heroObserver = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add("sc-hero--visible");
// //           heroObserver.unobserve(entry.target);
// //         }
// //       });
// //     }, { threshold: 0.2 });

// //     const mainObserver = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add("sc-main--visible");
// //           mainObserver.unobserve(entry.target);
// //         }
// //       });
// //     }, observerOptions);

// //     const campusObserver = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add("sc-campus--visible");
// //           campusObserver.unobserve(entry.target);
// //         }
// //       });
// //     }, observerOptions);

// //     const finalObserver = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add("sc-final--visible");
// //           finalObserver.unobserve(entry.target);
// //         }
// //       });
// //     }, observerOptions);

// //     if (heroRef.current) {
// //       heroObserver.observe(heroRef.current);
// //     }

// //     if (mainRef.current) {
// //       mainObserver.observe(mainRef.current);
// //     }

// //     if (campusRef.current) {
// //       campusObserver.observe(campusRef.current);
// //     }

// //     if (finalRef.current) {
// //       finalObserver.observe(finalRef.current);
// //     }

// //     return () => {
// //       heroObserver.disconnect();
// //       mainObserver.disconnect();
// //       campusObserver.disconnect();
// //       finalObserver.disconnect();
// //     };
// //   }, []);

// //   // =====================================================
// //   // FORM HANDLERS
// //   // =====================================================

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     setStatus({
// //       type: "",
// //       message: "",
// //     });

// //     if (!formData.name.trim() || !formData.message.trim()) {
// //       setStatus({
// //         type: "error",
// //         message: "Please enter your name and message.",
// //       });
// //       return;
// //     }

// //     if (!formData.email.trim() && !formData.mobile.trim()) {
// //       setStatus({
// //         type: "error",
// //         message: "Please provide either your email or mobile number.",
// //       });
// //       return;
// //     }

// //     try {
// //       setSubmitting(true);

// //       await contactService.createEnquiry(formData);

// //       setStatus({
// //         type: "success",
// //         message:
// //           "Thank you for reaching out. Our team will get back to you shortly.",
// //       });

// //       setFormData({
// //         name: "",
// //         email: "",
// //         mobile: "",
// //         subject: "",
// //         message: "",
// //       });
// //     } catch (error) {
// //       console.error("Contact enquiry error:", error);

// //       setStatus({
// //         type: "error",
// //         message:
// //           error?.response?.data?.message ||
// //           "Something went wrong. Please try again.",
// //       });
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   // =====================================================
// //   // CONTACT DETAILS DATA
// //   // =====================================================

// //   const contactDetails = [
// //     {
// //       icon: <FaMapMarkerAlt />,
// //       label: "Address",
// //       content: (
// //         <>
// //           Shifan Noor Global Academy
// //           <br />
// //           Venkulam, Devipattinam Road
// //           <br />
// //           Ramanathapuram – 623503
// //           <br />
// //           Tamil Nadu, India
// //         </>
// //       ),
// //     },
// //     {
// //       icon: <FaPhoneAlt />,
// //       label: "Phone",
// //       content: (
// //         <>
// //           <a href="tel:+919788914441">+91 97889 14441</a>
// //           <a href="tel:+919600234555">+91 96002 34555</a>
// //         </>
// //       ),
// //     },
// //     {
// //       icon: <FaEnvelope />,
// //       label: "Email",
// //       content: (
// //         <a href="mailto:info@sngacbse.com">info@sngacbse.com</a>
// //       ),
// //     },
// //     {
// //       icon: <FaClock />,
// //       label: "Office Hours",
// //       content: (
// //         <>
// //           <span>Mon–Fri: 8:00 AM – 4:00 PM</span>
// //           <span>Sat: 9:00 AM – 1:00 PM</span>
// //         </>
// //       ),
// //     },
// //   ];

// //   return (
// //     <main className="sc-page">
// //       {/* =================================================
// //           HERO SECTION
// //       ================================================= */}
// //       <section ref={heroRef} className="sc-hero">
// //         <div className="sc-hero__bg" />
// //         <div className="sc-hero__gradient" />

// //         <div className="sc-container">
// //           <div className="sc-hero__content">
// //             <span className="sc-hero__badge">
// //               <FaGraduationCap />
// //               GET IN TOUCH
// //             </span>

// //             <h1 className="sc-hero__title">
// //               Let's Start a
// //               <br />
// //               <span className="sc-hero__highlight">Conversation.</span>
// //             </h1>

// //             <p className="sc-hero__desc">
// //               Whether you are looking for admission information, have a
// //               question about our school, or simply want to know more about
// //               Shifan Noor Global Academy, we are here to help.
// //             </p>

// //             <div className="sc-hero__actions">
// //               <a href="#contact-form" className="sc-hero__btn sc-hero__btn--primary">
// //                 <span>Get in Touch</span>
// //                 <FaArrowRight />
// //               </a>
// //               <a href="tel:+919788914441" className="sc-hero__btn sc-hero__btn--secondary">
// //                 <FaPhoneAlt />
// //                 <span>Call Now</span>
// //               </a>
// //             </div>
// //           </div>

// //           <div className="sc-hero__meta">
// //             <span className="sc-hero__meta-brand">SHIFAN NOOR GLOBAL ACADEMY</span>
// //             <span className="sc-hero__meta-divider" />
// //             <span className="sc-hero__meta-location">RAMANATHAPURAM · TAMIL NADU</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           MAIN CONTENT - Contact Details + Form
// //       ================================================= */}
// //       <section ref={mainRef} className="sc-main">
// //         <div className="sc-container sc-main__grid">
// //           {/* LEFT - Contact Information */}
// //           <div className="sc-main__left">
// //             <div className="sc-main__label">CONTACT INFORMATION</div>

// //             <h2 className="sc-main__title">
// //               We're Always
// //               <br />
// //               <span className="sc-main__highlight">Happy to Hear From You.</span>
// //             </h2>

// //             <p className="sc-main__intro">
// //               Connect with our school team for admissions, academic
// //               information, campus visits, or any other enquiry.
// //             </p>

// //             <div className="sc-main__details">
// //               {contactDetails.map((item, index) => (
// //                 <div key={index} className="sc-main__detail">
// //                   <div className="sc-main__detail-icon">{item.icon}</div>
// //                   <div className="sc-main__detail-content">
// //                     <span className="sc-main__detail-label">{item.label}</span>
// //                     <div className="sc-main__detail-text">{item.content}</div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="sc-main__note">
// //               <div className="sc-main__note-icon">
// //                 <FaGraduationCap />
// //               </div>
// //               <div>
// //                 <span className="sc-main__note-label">ADMISSIONS</span>
// //                 <p className="sc-main__note-text">
// //                   Planning a visit or looking for admission information?
// //                   Our team can guide you through the next steps.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT - Contact Form */}
// //           <div className="sc-main__right" id="contact-form">
// //             <div className="sc-main__form-header">
// //               <span className="sc-main__form-badge">ENQUIRY</span>
// //               <h3 className="sc-main__form-title">How Can We Help?</h3>
// //               <p className="sc-main__form-desc">
// //                 Send us your details and message. We'll get back to you
// //                 with the information you need.
// //               </p>
// //             </div>

// //             <form className="sc-main__form" onSubmit={handleSubmit}>
// //               <div className="sc-main__form-row">
// //                 <div className="sc-main__field">
// //                   <label htmlFor="name">
// //                     Full Name <span className="sc-main__field-required">*</span>
// //                   </label>
// //                   <input
// //                     id="name"
// //                     name="name"
// //                     type="text"
// //                     placeholder="Enter your full name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     required
// //                     className={status.type === "error" && !formData.name ? "error" : ""}
// //                   />
// //                 </div>

// //                 <div className="sc-main__field">
// //                   <label htmlFor="mobile">Mobile Number</label>
// //                   <input
// //                     id="mobile"
// //                     name="mobile"
// //                     type="tel"
// //                     placeholder="+91 98765 43210"
// //                     value={formData.mobile}
// //                     onChange={handleChange}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="sc-main__form-row">
// //                 <div className="sc-main__field">
// //                   <label htmlFor="email">Email Address</label>
// //                   <input
// //                     id="email"
// //                     name="email"
// //                     type="email"
// //                     placeholder="you@example.com"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                   />
// //                 </div>

// //                 <div className="sc-main__field">
// //                   <label htmlFor="subject">Subject</label>
// //                   <input
// //                     id="subject"
// //                     name="subject"
// //                     type="text"
// //                     placeholder="What is this regarding?"
// //                     value={formData.subject}
// //                     onChange={handleChange}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="sc-main__field sc-main__field--full">
// //                 <label htmlFor="message">
// //                   Your Message <span className="sc-main__field-required">*</span>
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   rows="5"
// //                   placeholder="Tell us how we can help..."
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   required
// //                   className={status.type === "error" && !formData.message ? "error" : ""}
// //                 />
// //               </div>

// //               {status.message && (
// //                 <div
// //                   className={`sc-main__status sc-main__status--${status.type}`}
// //                   role="alert"
// //                 >
// //                   {status.type === "success" && <FaCheckCircle />}
// //                   {status.message}
// //                 </div>
// //               )}

// //               <div className="sc-main__form-footer">
// //                 <p className="sc-main__form-note">
// //                   By submitting this form, you are requesting our team to
// //                   contact you regarding your enquiry.
// //                 </p>

// //                 <button
// //                   type="submit"
// //                   className="sc-main__submit"
// //                   disabled={submitting}
// //                 >
// //                   {submitting ? "Sending..." : "Send Enquiry"}
// //                   <FaArrowRight />
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           CAMPUS SECTION
// //       ================================================= */}
// //       <section ref={campusRef} className="sc-campus">
// //         <div className="sc-campus__bg" />
// //         <div className="sc-container sc-campus__inner">
// //           <div className="sc-campus__left">
// //             <span className="sc-campus__label">
// //               <FaBuilding />
// //               VISIT THE CAMPUS
// //             </span>

// //             <h2 className="sc-campus__title">
// //               Come and Experience
// //               <br />
// //               <span className="sc-campus__highlight">SNGA for Yourself.</span>
// //             </h2>
// //           </div>

// //           <div className="sc-campus__right">
// //             <p className="sc-campus__desc">
// //               Our campus is located at Venkulam on the Ramanathapuram–
// //               Devipattinam main road, in a calm and spacious environment
// //               designed for learning.
// //             </p>

// //             <a
// //               href="https://www.google.com/maps/search/?api=1&query=Shifan+Noor+Global+Academy+Venkulam+Ramanathapuram+Tamil+Nadu"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="sc-campus__link"
// //             >
// //               <span>Get Directions</span>
// //               <FaArrowRight />
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =================================================
// //           FINAL CTA
// //       ================================================= */}
// //       <section ref={finalRef} className="sc-final">
// //         <div className="sc-container">
// //           <div className="sc-final__content">
// //             <span className="sc-final__badge">
// //               <FaGraduationCap />
// //               SHIFAN NOOR GLOBAL ACADEMY
// //             </span>

// //             <h2 className="sc-final__title">
// //               Questions Are the
// //               <br />
// //               <span className="sc-final__highlight">Beginning of Discovery.</span>
// //             </h2>

// //             <div className="sc-final__actions">
// //               <a href="tel:+919788914441" className="sc-final__btn sc-final__btn--primary">
// //                 <FaPhoneAlt />
// //                 <span>Talk to Our Team</span>
// //               </a>
// //               <Link to="/admissions" className="sc-final__btn sc-final__btn--secondary">
// //                 <span>Admissions</span>
// //                 <FaArrowRight />
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Contact;


// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
//   FaGraduationCap,
//   FaUserGraduate,
//   FaBuilding,
//   FaCalendarAlt,
//   FaCheckCircle,
//   FaSchool,
//   FaPlay,
//   FaQuoteLeft,
//   FaInstagram,
//   FaYoutube,
//   FaFacebook,
//   FaLinkedin,
//   FaWhatsapp,
// } from "react-icons/fa";
// import contactService from "../services/contact.service";
// import "./Contact.css";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
//   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
//   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   campusBg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({
//     type: "",
//     message: "",
//   });

//   const [submitting, setSubmitting] = useState(false);

//   const heroRef = useRef(null);
//   const mainRef = useRef(null);
//   const campusRef = useRef(null);
//   const finalRef = useRef(null);

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const heroObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sc-hero--visible");
//           heroObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.2 });

//     const mainObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sc-main--visible");
//           mainObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const campusObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sc-campus--visible");
//           campusObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const finalObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sc-final--visible");
//           finalObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     if (heroRef.current) {
//       heroObserver.observe(heroRef.current);
//     }

//     if (mainRef.current) {
//       mainObserver.observe(mainRef.current);
//     }

//     if (campusRef.current) {
//       campusObserver.observe(campusRef.current);
//     }

//     if (finalRef.current) {
//       finalObserver.observe(finalRef.current);
//     }

//     return () => {
//       heroObserver.disconnect();
//       mainObserver.disconnect();
//       campusObserver.disconnect();
//       finalObserver.disconnect();
//     };
//   }, []);

//   // =====================================================
//   // FORM HANDLERS
//   // =====================================================

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setStatus({
//       type: "",
//       message: "",
//     });

//     if (!formData.name.trim() || !formData.message.trim()) {
//       setStatus({
//         type: "error",
//         message: "Please enter your name and message.",
//       });
//       return;
//     }

//     if (!formData.email.trim() && !formData.mobile.trim()) {
//       setStatus({
//         type: "error",
//         message: "Please provide either your email or mobile number.",
//       });
//       return;
//     }

//     try {
//       setSubmitting(true);

//       await contactService.createEnquiry(formData);

//       setStatus({
//         type: "success",
//         message:
//           "Thank you for reaching out. Our team will get back to you shortly.",
//       });

//       setFormData({
//         name: "",
//         email: "",
//         mobile: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Contact enquiry error:", error);

//       setStatus({
//         type: "error",
//         message:
//           error?.response?.data?.message ||
//           "Something went wrong. Please try again.",
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // =====================================================
//   // CONTACT DETAILS DATA
//   // =====================================================

//   const contactDetails = [
//     {
//       icon: <FaMapMarkerAlt />,
//       label: "Address",
//       content: (
//         <>
//           Shifan Noor Global Academy
//           <br />
//           Venkulam, Devipattinam Road
//           <br />
//           Ramanathapuram – 623503
//           <br />
//           Tamil Nadu, India
//         </>
//       ),
//     },
//     {
//       icon: <FaPhoneAlt />,
//       label: "Phone",
//       content: (
//         <>
//           <a href="tel:+919788914441">+91 97889 14441</a>
//           <a href="tel:+919600234555">+91 96002 34555</a>
//         </>
//       ),
//     },
//     {
//       icon: <FaEnvelope />,
//       label: "Email",
//       content: (
//         <a href="mailto:info@sngacbse.com">info@sngacbse.com</a>
//       ),
//     },
//     {
//       icon: <FaClock />,
//       label: "Office Hours",
//       content: (
//         <>
//           <span>Mon–Fri: 8:00 AM – 4:00 PM</span>
//           <span>Sat: 9:00 AM – 1:00 PM</span>
//         </>
//       ),
//     },
//   ];

//   const quickLinks = [
//     { label: "Admissions", icon: <FaGraduationCap />, to: "/admissions" },
//     { label: "Academics", icon: <FaUserGraduate />, to: "/academics" },
//     { label: "Gallery", icon: <FaBuilding />, to: "/gallery" },
//     { label: "News", icon: <FaCalendarAlt />, to: "/news" },
//   ];

//   return (
//     <main className="sc-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sc-topbar">
//         <div className="sc-container">
//           <div className="sc-topbar__content">
//             <span className="sc-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sc-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sc-hero">
//         <div className="sc-hero__bg-wrapper">
//           <div 
//             className="sc-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sc-hero__bg-overlay" />
//           <div className="sc-hero__bg-gradient" />
//         </div>

//         <div className="sc-container">
//           <div className="sc-hero__inner">
//             <div className="sc-hero__content">
//               <div className="sc-hero__badge">
//                 <FaGraduationCap />
//                 GET IN TOUCH
//               </div>

//               <h1 className="sc-hero__title">
//                 Let's Start a
//                 <br />
//                 <span className="sc-hero__highlight">Conversation.</span>
//               </h1>

//               <p className="sc-hero__desc">
//                 Whether you are looking for admission information, have a
//                 question about our school, or simply want to know more about
//                 Shifan Noor Global Academy, we are here to help.
//               </p>

//               <div className="sc-hero__actions">
//                 <a href="#contact-form" className="sc-hero__btn sc-hero__btn--primary">
//                   <span>Get in Touch</span>
//                   <FaArrowRight />
//                 </a>
//                 <a href="tel:+919788914441" className="sc-hero__btn sc-hero__btn--secondary">
//                   <FaPhoneAlt />
//                   <span>Call Now</span>
//                 </a>
//               </div>
//             </div>

//             <div className="sc-hero__image-wrapper">
//               <div className="sc-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA School" 
//                   className="sc-hero__image-img"
//                 />
//                 <div className="sc-hero__image-ring" />
//                 <div className="sc-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="sc-hero__meta">
//             <span className="sc-hero__meta-brand">SHIFAN NOOR GLOBAL ACADEMY</span>
//             <span className="sc-hero__meta-divider" />
//             <span className="sc-hero__meta-location">RAMANATHAPURAM · TAMIL NADU</span>
//           </div>
//         </div>

//         <div className="sc-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           MAIN CONTENT - Contact Details + Form
//       ================================================= */}
//       <section ref={mainRef} className="sc-main">
//         <div className="sc-container sc-main__grid">
//           {/* LEFT - Contact Information */}
//           <div className="sc-main__left">
//             <div className="sc-main__label">CONTACT INFORMATION</div>

//             <h2 className="sc-main__title">
//               We're Always
//               <br />
//               <span className="sc-main__highlight">Happy to Hear From You.</span>
//             </h2>

//             <p className="sc-main__intro">
//               Connect with our school team for admissions, academic
//               information, campus visits, or any other enquiry.
//             </p>

//             <div className="sc-main__details">
//               {contactDetails.map((item, index) => (
//                 <div key={index} className="sc-main__detail">
//                   <div className="sc-main__detail-icon">{item.icon}</div>
//                   <div className="sc-main__detail-content">
//                     <span className="sc-main__detail-label">{item.label}</span>
//                     <div className="sc-main__detail-text">{item.content}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Quick Links */}
//             <div className="sc-main__quick-links">
//               <span className="sc-main__quick-label">Quick Links</span>
//               <div className="sc-main__quick-grid">
//                 {quickLinks.map((link, index) => (
//                   <Link key={index} to={link.to} className="sc-main__quick-link">
//                     {link.icon}
//                     <span>{link.label}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <div className="sc-main__note">
//               <div className="sc-main__note-icon">
//                 <FaGraduationCap />
//               </div>
//               <div>
//                 <span className="sc-main__note-label">ADMISSIONS</span>
//                 <p className="sc-main__note-text">
//                   Planning a visit or looking for admission information?
//                   Our team can guide you through the next steps.
//                 </p>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="sc-main__social">
//               <span className="sc-main__social-label">Connect With Us</span>
//               <div className="sc-main__social-links">
//                 <a href="#" className="sc-main__social-link" aria-label="Facebook">
//                   <FaFacebook />
//                 </a>
//                 <a href="#" className="sc-main__social-link" aria-label="Instagram">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" className="sc-main__social-link" aria-label="YouTube">
//                   <FaYoutube />
//                 </a>
//                 <a href="#" className="sc-main__social-link" aria-label="LinkedIn">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#" className="sc-main__social-link" aria-label="WhatsApp">
//                   <FaWhatsapp />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT - Contact Form */}
//           <div className="sc-main__right" id="contact-form">
//             <div className="sc-main__form-header">
//               <span className="sc-main__form-badge">ENQUIRY</span>
//               <h3 className="sc-main__form-title">How Can We Help?</h3>
//               <p className="sc-main__form-desc">
//                 Send us your details and message. We'll get back to you
//                 with the information you need.
//               </p>
//             </div>

//             <form className="sc-main__form" onSubmit={handleSubmit} noValidate>
//               <div className="sc-main__form-row">
//                 <div className="sc-main__field">
//                   <label htmlFor="name">
//                     Full Name <span className="sc-main__field-required">*</span>
//                   </label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Enter your full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className={status.type === "error" && !formData.name ? "error" : ""}
//                   />
//                 </div>

//                 <div className="sc-main__field">
//                   <label htmlFor="mobile">Mobile Number</label>
//                   <input
//                     id="mobile"
//                     name="mobile"
//                     type="tel"
//                     placeholder="+91 98765 43210"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="sc-main__form-row">
//                 <div className="sc-main__field">
//                   <label htmlFor="email">Email Address</label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="you@example.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="sc-main__field">
//                   <label htmlFor="subject">Subject</label>
//                   <input
//                     id="subject"
//                     name="subject"
//                     type="text"
//                     placeholder="What is this regarding?"
//                     value={formData.subject}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="sc-main__field sc-main__field--full">
//                 <label htmlFor="message">
//                   Your Message <span className="sc-main__field-required">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   placeholder="Tell us how we can help..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className={status.type === "error" && !formData.message ? "error" : ""}
//                 />
//               </div>

//               {status.message && (
//                 <div
//                   className={`sc-main__status sc-main__status--${status.type}`}
//                   role="alert"
//                 >
//                   {status.type === "success" && <FaCheckCircle />}
//                   {status.message}
//                 </div>
//               )}

//               <div className="sc-main__form-footer">
//                 <p className="sc-main__form-note">
//                   By submitting this form, you are requesting our team to
//                   contact you regarding your enquiry.
//                 </p>

//                 <button
//                   type="submit"
//                   className="sc-main__submit"
//                   disabled={submitting}
//                 >
//                   {submitting ? "Sending..." : "Send Enquiry"}
//                   <FaArrowRight />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           CAMPUS SECTION - With Background Image
//       ================================================= */}
//       <section ref={campusRef} className="sc-campus">
//         <div className="sc-campus__bg-wrapper">
//           <div 
//             className="sc-campus__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.campusBg})` }}
//           />
//           <div className="sc-campus__bg-overlay" />
//         </div>

//         <div className="sc-container sc-campus__inner">
//           <div className="sc-campus__content">
//             <span className="sc-campus__label">
//               <FaBuilding />
//               VISIT THE CAMPUS
//             </span>

//             <h2 className="sc-campus__title">
//               Come and Experience
//               <br />
//               <span className="sc-campus__highlight">SNGA for Yourself.</span>
//             </h2>
//           </div>

//           <div className="sc-campus__right">
//             <div className="sc-campus__quote">
//               <FaQuoteLeft />
//             </div>
//             <p className="sc-campus__desc">
//               Our campus is located at Venkulam on the Ramanathapuram–
//               Devipattinam main road, in a calm and spacious environment
//               designed for learning.
//             </p>

//             <div className="sc-campus__actions">
//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=Shifan+Noor+Global+Academy+Venkulam+Ramanathapuram+Tamil+Nadu"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="sc-campus__link sc-campus__link--primary"
//               >
//                 <span>Get Directions</span>
//                 <FaArrowRight />
//               </a>
//               <Link to="/infrastructure" className="sc-campus__link sc-campus__link--secondary">
//                 <span>Explore Campus</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={finalRef} className="sc-final">
//         <div className="sc-final__bg-wrapper">
//           <div 
//             className="sc-final__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sc-final__bg-overlay" />
//           <div className="sc-final__bg-gradient" />
//         </div>

//         <div className="sc-container">
//           <div className="sc-final__content">
//             <div className="sc-final__badge">
//               <FaGraduationCap />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sc-final__title">
//               Questions Are the
//               <br />
//               <span className="sc-final__highlight">Beginning of Discovery.</span>
//             </h2>

//             <p className="sc-final__desc">
//               Whether you're a parent, student, or community member, 
//               we'd love to hear from you. Reach out and let's start a conversation.
//             </p>

//             <div className="sc-final__actions">
//               <a href="tel:+919788914441" className="sc-final__btn sc-final__btn--primary">
//                 <FaPhoneAlt />
//                 <span>Talk to Our Team</span>
//               </a>
//               <Link to="/admissions" className="sc-final__btn sc-final__btn--secondary">
//                 <span>Admissions</span>
//                 <FaArrowRight />
//               </Link>
//             </div>

//             <div className="sc-final__footer">
//               <span>
//                 <FaMapMarkerAlt /> Bangalore, India
//               </span>
//               <span>
//                 <FaPhoneAlt /> +91 98765 43210
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

// export default Contact;

















































import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
  FaUserGraduate,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaSchool,
  FaPlay,
  FaQuoteLeft,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import contactService from "../services/contact.service";
import "./Contact.css";

// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80",
  heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
  ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
  campusBg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const heroRef = useRef(null);
  const mainRef = useRef(null);
  const campusRef = useRef(null);
  const finalRef = useRef(null);

  // =====================================================
  // SCROLL TRIGGERED ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sc-hero--visible");
          heroObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const mainObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sc-main--visible");
          mainObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const campusObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sc-campus--visible");
          campusObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const finalObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sc-final--visible");
          finalObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    if (mainRef.current) {
      mainObserver.observe(mainRef.current);
    }

    if (campusRef.current) {
      campusObserver.observe(campusRef.current);
    }

    if (finalRef.current) {
      finalObserver.observe(finalRef.current);
    }

    return () => {
      heroObserver.disconnect();
      mainObserver.disconnect();
      campusObserver.disconnect();
      finalObserver.disconnect();
    };
  }, []);

  // =====================================================
  // FORM HANDLERS
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    // Validate required fields
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your name and message.",
      });
      return;
    }

    if (!formData.email.trim() && !formData.mobile.trim()) {
      setStatus({
        type: "error",
        message: "Please provide either your email or mobile number.",
      });
      return;
    }

    try {
      setSubmitting(true);

      // ✅ Using the correct service method - createContact
      const response = await contactService.createContact(formData);

      // Handle success message from API
      const message = response?.message || 
                     response?.data?.message || 
                     "Thank you for reaching out. Our team will get back to you shortly.";

      setStatus({
        type: "success",
        message: message,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });

      // Scroll to success message
      if (mainRef.current) {
        mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

    } catch (error) {
      console.error("Contact enquiry error:", error);

      // Handle error response
      const errorMessage = error?.response?.data?.message || 
                          error?.response?.data?.error ||
                          error?.message ||
                          "Something went wrong. Please try again.";

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setSubmitting(false);
    }
  };

  // =====================================================
  // CONTACT DETAILS DATA
  // =====================================================

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      content: (
        <>
          Shifan Noor Global Academy
          <br />
          Venkulam, Devipattinam Road
          <br />
          Ramanathapuram – 623503
          <br />
          Tamil Nadu, India
        </>
      ),
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      content: (
        <>
          <a href="tel:+919788914441">+91 97889 14441</a>
          <a href="tel:+919600234555">+91 96002 34555</a>
        </>
      ),
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      content: (
        <a href="mailto:info@sngacbse.com">info@sngacbse.com</a>
      ),
    },
    {
      icon: <FaClock />,
      label: "Office Hours",
      content: (
        <>
          <span>Mon–Fri: 8:00 AM – 4:00 PM</span>
          <span>Sat: 9:00 AM – 1:00 PM</span>
        </>
      ),
    },
  ];

  const quickLinks = [
    { label: "Admissions", icon: <FaGraduationCap />, to: "/admissions" },
    { label: "Academics", icon: <FaUserGraduate />, to: "/academics" },
    { label: "Gallery", icon: <FaBuilding />, to: "/gallery" },
    { label: "News", icon: <FaCalendarAlt />, to: "/news" },
  ];

  return (
    <main className="sc-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sc-topbar">
        <div className="sc-container">
          <div className="sc-topbar__content">
            <span className="sc-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sc-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sc-hero">
        <div className="sc-hero__bg-wrapper">
          <div 
            className="sc-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sc-hero__bg-overlay" />
          <div className="sc-hero__bg-gradient" />
        </div>

        <div className="sc-container">
          <div className="sc-hero__inner">
            <div className="sc-hero__content">
              <div className="sc-hero__badge">
                <FaGraduationCap />
                GET IN TOUCH
              </div>

              <h1 className="sc-hero__title">
                Let's Start a
                <br />
                <span className="sc-hero__highlight">Conversation.</span>
              </h1>

              <p className="sc-hero__desc">
                Whether you are looking for admission information, have a
                question about our school, or simply want to know more about
                Shifan Noor Global Academy, we are here to help.
              </p>

              <div className="sc-hero__actions">
                <a href="#contact-form" className="sc-hero__btn sc-hero__btn--primary">
                  <span>Get in Touch</span>
                  <FaArrowRight />
                </a>
                <a href="tel:+919788914441" className="sc-hero__btn sc-hero__btn--secondary">
                  <FaPhoneAlt />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="sc-hero__image-wrapper">
              <div className="sc-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA School" 
                  className="sc-hero__image-img"
                />
                <div className="sc-hero__image-ring" />
                <div className="sc-hero__image-badge">
                  <span>Since 2015</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sc-hero__meta">
            <span className="sc-hero__meta-brand">SHIFAN NOOR GLOBAL ACADEMY</span>
            <span className="sc-hero__meta-divider" />
            <span className="sc-hero__meta-location">RAMANATHAPURAM · TAMIL NADU</span>
          </div>
        </div>

        <div className="sc-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          MAIN CONTENT - Contact Details + Form
      ================================================= */}
      <section ref={mainRef} className="sc-main">
        <div className="sc-container sc-main__grid">
          {/* LEFT - Contact Information */}
          <div className="sc-main__left">
            <div className="sc-main__label">CONTACT INFORMATION</div>

            <h2 className="sc-main__title">
              We're Always
              <br />
              <span className="sc-main__highlight">Happy to Hear From You.</span>
            </h2>

            <p className="sc-main__intro">
              Connect with our school team for admissions, academic
              information, campus visits, or any other enquiry.
            </p>

            <div className="sc-main__details">
              {contactDetails.map((item, index) => (
                <div key={index} className="sc-main__detail">
                  <div className="sc-main__detail-icon">{item.icon}</div>
                  <div className="sc-main__detail-content">
                    <span className="sc-main__detail-label">{item.label}</span>
                    <div className="sc-main__detail-text">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="sc-main__quick-links">
              <span className="sc-main__quick-label">Quick Links</span>
              <div className="sc-main__quick-grid">
                {quickLinks.map((link, index) => (
                  <Link key={index} to={link.to} className="sc-main__quick-link">
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sc-main__note">
              <div className="sc-main__note-icon">
                <FaGraduationCap />
              </div>
              <div>
                <span className="sc-main__note-label">ADMISSIONS</span>
                <p className="sc-main__note-text">
                  Planning a visit or looking for admission information?
                  Our team can guide you through the next steps.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="sc-main__social">
              <span className="sc-main__social-label">Connect With Us</span>
              <div className="sc-main__social-links">
                <a href="#" className="sc-main__social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="sc-main__social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="sc-main__social-link" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#" className="sc-main__social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="sc-main__social-link" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="sc-main__right" id="contact-form">
            <div className="sc-main__form-header">
              <span className="sc-main__form-badge">ENQUIRY</span>
              <h3 className="sc-main__form-title">How Can We Help?</h3>
              <p className="sc-main__form-desc">
                Send us your details and message. We'll get back to you
                with the information you need.
              </p>
            </div>

            <form className="sc-main__form" onSubmit={handleSubmit} noValidate>
              <div className="sc-main__form-row">
                <div className="sc-main__field">
                  <label htmlFor="name">
                    Full Name <span className="sc-main__field-required">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={status.type === "error" && !formData.name ? "error" : ""}
                  />
                </div>

                <div className="sc-main__field">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sc-main__form-row">
                <div className="sc-main__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="sc-main__field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sc-main__field sc-main__field--full">
                <label htmlFor="message">
                  Your Message <span className="sc-main__field-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={status.type === "error" && !formData.message ? "error" : ""}
                />
              </div>

              {status.message && (
                <div
                  className={`sc-main__status sc-main__status--${status.type}`}
                  role="alert"
                >
                  {status.type === "success" && <FaCheckCircle />}
                  {status.message}
                </div>
              )}

              <div className="sc-main__form-footer">
                <p className="sc-main__form-note">
                  By submitting this form, you are requesting our team to
                  contact you regarding your enquiry.
                </p>

                <button
                  type="submit"
                  className="sc-main__submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =================================================
          CAMPUS SECTION - With Background Image
      ================================================= */}
      <section ref={campusRef} className="sc-campus">
        <div className="sc-campus__bg-wrapper">
          <div 
            className="sc-campus__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.campusBg})` }}
          />
          <div className="sc-campus__bg-overlay" />
        </div>

        <div className="sc-container sc-campus__inner">
          <div className="sc-campus__content">
            <span className="sc-campus__label">
              <FaBuilding />
              VISIT THE CAMPUS
            </span>

            <h2 className="sc-campus__title">
              Come and Experience
              <br />
              <span className="sc-campus__highlight">SNGA for Yourself.</span>
            </h2>
          </div>

          <div className="sc-campus__right">
            <div className="sc-campus__quote">
              <FaQuoteLeft />
            </div>
            <p className="sc-campus__desc">
              Our campus is located at Venkulam on the Ramanathapuram–
              Devipattinam main road, in a calm and spacious environment
              designed for learning.
            </p>

            <div className="sc-campus__actions">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shifan+Noor+Global+Academy+Venkulam+Ramanathapuram+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                className="sc-campus__link sc-campus__link--primary"
              >
                <span>Get Directions</span>
                <FaArrowRight />
              </a>
              <Link to="/infrastructure" className="sc-campus__link sc-campus__link--secondary">
                <span>Explore Campus</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={finalRef} className="sc-final">
        <div className="sc-final__bg-wrapper">
          <div 
            className="sc-final__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sc-final__bg-overlay" />
          <div className="sc-final__bg-gradient" />
        </div>

        <div className="sc-container">
          <div className="sc-final__content">
            <div className="sc-final__badge">
              <FaGraduationCap />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sc-final__title">
              Questions Are the
              <br />
              <span className="sc-final__highlight">Beginning of Discovery.</span>
            </h2>

            <p className="sc-final__desc">
              Whether you're a parent, student, or community member, 
              we'd love to hear from you. Reach out and let's start a conversation.
            </p>

            <div className="sc-final__actions">
              <a href="tel:+919788914441" className="sc-final__btn sc-final__btn--primary">
                <FaPhoneAlt />
                <span>Talk to Our Team</span>
              </a>
              <Link to="/admissions" className="sc-final__btn sc-final__btn--secondary">
                <span>Admissions</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sc-final__footer">
              <span>
                <FaMapMarkerAlt /> Bangalore, India
              </span>
              <span>
                <FaPhoneAlt /> +91 98765 43210
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

export default Contact;