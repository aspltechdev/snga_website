

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

// import heroBg from "../assets/school.JPG";
// import heroCircle from "../assets/about.png";
// import ctaBg from "../assets/engaging.jpg";
// import campus from "../assets/camp.jpg";
// import library from "../assets/library.jpg";
// import computer from "../assets/ComputerLab.jpg";
// import sport from "../assets/sport.JPG";
// import classroom from "../assets/classroom.jpg";
// import value from "../assets/values.jpg";
// import process1 from "../assets/process1.jpg";
// import process2 from "../assets/process2.jpg";
// import process3 from "../assets/process3.jpg";
// import process4 from "../assets/process4.jpg";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   campusBg: campus,
//   processBg: campus,
  
//   // Highlight Cards Images
//   highlight1: value,
//   highlight2: campus,
//   highlight3: classroom,
//   highlight4: computer,
//   highlight5: library,
//   highlight6: sport,
  
//   // Process Cards Images
//   process1: process1,
//   process2: process2,
//   process3: process3,
//   process4: process4,
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

//     // Basic validation
//     if (!formData.parentName || !formData.studentName || !formData.className || !formData.mobile) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     setSubmitting(true);
//     setSuccess("");
//     setError("");

//     try {
//       // ✅ Using the correct service method with /admissions endpoint
//       const response = await admissionService.createEnquiry(formData);

//       // Handle different response structures
//       const message = response?.message || 
//                      response?.data?.message || 
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

//               {/* <div className="sad-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sad-hero__stat">
//                     <span className="sad-hero__stat-icon">{stat.icon}</span>
//                     <span className="sad-hero__stat-number">{stat.number}</span>
//                     <span className="sad-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
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
//               </div> */}
//             </div>

//             <div className="sad-hero__image-wrapper">
//               <div className="sad-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA School" 
//                   className="sad-hero__image-img"
//                 />
//                 <div className="sad-hero__image-ring" />
//                 {/* <div className="sad-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
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
//                       {/* <span className="sad-highlights__card-number">
//                         {String(index + 1).padStart(2, "0")}
//                       </span> */}
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
//                         {/* <span className="sad-process__card-number">
//                           {step.number}
//                         </span> */}
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
//                 <Link to="/about/infrastructure" className="sad-campus__link">
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






















import { useState } from "react";
import { Link } from "react-router-dom";
import admissionService from "../services/admission.service";
import "./Admissions.css";

import heroImage from "../assets/school.JPG";
import campusImage from "../assets/camp.jpg";
import classroomImage from "../assets/classroom.jpg";
import libraryImage from "../assets/library.jpg";
import sportsImage from "../assets/sport.JPG";
import valuesImage from "../assets/values.jpg";

import process1 from "../assets/process1.jpg";
import process2 from "../assets/process2.jpg";
import process3 from "../assets/process3.jpg";
import process4 from "../assets/process4.jpg";

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

  const schoolHighlights = [
    {
      number: "01",
      title: "A spacious campus",
      description:
        "A 13.5-acre campus at Venkulam provides a calm, serene and lush green setting for learning.",
      image: campusImage,
    },
    {
      number: "02",
      title: "Purposeful learning spaces",
      description:
        "Classrooms and digital learning environments are supported by laboratories and spaces designed for focused learning.",
      image: classroomImage,
    },
    {
      number: "03",
      title: "A culture of reading",
      description:
        "The school library houses more than 3,500 books, giving students opportunities to explore knowledge beyond the classroom.",
      image: libraryImage,
    },
    {
      number: "04",
      title: "Learning beyond academics",
      description:
        "Sports and co-curricular opportunities contribute to the wider development of students and their confidence.",
      image: sportsImage,
    },
  ];

  const admissionSteps = [
    {
      number: "01",
      title: "Make an enquiry",
      description:
        "Share your details with the school and tell us which class you are enquiring about.",
      image: process1,
    },
    {
      number: "02",
      title: "Connect with us",
      description:
        "Our admissions team can guide you through the school, learning environment and next steps.",
      image: process2,
    },
    {
      number: "03",
      title: "Visit the school",
      description:
        "Experience the SNGA campus and understand the learning environment and school community.",
      image: process3,
    },
    {
      number: "04",
      title: "Complete admission",
      description:
        "Proceed with the required admission formalities and documentation as guided by the school.",
      image: process4,
    },
  ];

  const learningPrinciples = [
    {
      number: "01",
      title: "Knowledge",
    },
    {
      number: "02",
      title: "Skills",
    },
    {
      number: "03",
      title: "Values",
    },
    {
      number: "04",
      title: "Confidence",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (success) {
      setSuccess("");
    }

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    if (
      !formData.parentName.trim() ||
      !formData.studentName.trim() ||
      !formData.className ||
      !formData.mobile.trim()
    ) {
      setError("Please complete all required fields before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await admissionService.createEnquiry(formData);

      const message =
        response?.message ||
        response?.data?.message ||
        "Thank you. Your admission enquiry has been submitted successfully.";

      setSuccess(message);

      setFormData({
        parentName: "",
        studentName: "",
        className: "",
        mobile: "",
        email: "",
        location: "",
        message: "",
      });

      setTimeout(() => {
        document
          .getElementById("admission-enquiry")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 100);
    } catch (err) {
      console.error("Admission enquiry error:", err);

      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Unable to submit your enquiry. Please try again.";

      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="snga-admissions-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="snga-admissions-hero">

        <div className="snga-admissions-hero-media">
          <img
            src={heroImage}
            alt="Shifan Noor Global Academy campus"
          />
        </div>

        <div className="snga-admissions-hero-overlay" />

        <div className="snga-admissions-container">
          <div className="snga-admissions-hero-content">

            <div className="snga-admissions-eyebrow">
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <div className="snga-admissions-hero-line" />

            <div className="snga-admissions-hero-location">
              VENKULAM · RAMANATHAPURAM · TAMIL NADU
            </div>

            <h1>
              Begin the
              <br />
              <em>journey here.</em>
            </h1>

            <p>
              Admission is the beginning of a relationship between
              a child, a family and a school. Start the conversation
              with SNGA.
            </p>

            <a
              href="#admission-enquiry"
              className="snga-admissions-hero-link"
            >
              <span>Start an enquiry</span>
              <strong>→</strong>
            </a>

          </div>

          <div className="snga-admissions-hero-side">
            ADMISSIONS
            <span>01</span>
          </div>
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="snga-admissions-intro">

        <div className="snga-admissions-container">

          <div className="snga-admissions-intro-grid">

            <div className="snga-admissions-section-label">
              ADMISSIONS AT SNGA
            </div>

            <div className="snga-admissions-intro-content">

              <h2>
                Choosing a school is
                <br />
                <em>choosing an environment.</em>
              </h2>

              <div className="snga-admissions-intro-copy">

                <p>
                  At Shifan Noor Global Academy, education goes beyond
                  academic achievement. Students are encouraged to build
                  knowledge, develop skills, strengthen values and grow
                  with confidence.
                </p>

                <p>
                  Our admissions process gives families an opportunity
                  to understand the school, experience the campus and
                  make an informed decision about their child's
                  educational journey.
                </p>

              </div>

            </div>

          </div>


          <div className="snga-admissions-principles">

            {learningPrinciples.map((item) => (
              <div
                key={item.number}
                className="snga-admissions-principle"
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SCHOOL EXPERIENCE
      ===================================================== */}

      <section className="snga-admissions-experience">

        <div className="snga-admissions-container">

          <div className="snga-admissions-section-heading">

            <div>
              <span className="snga-admissions-section-label">
                THE SNGA EXPERIENCE
              </span>

              <h2>
                More than
                <br />
                <em>a place to study.</em>
              </h2>
            </div>

            <p>
              A learning environment shaped around academic growth,
              personal development and the wider experience of school life.
            </p>

          </div>


          <div className="snga-admissions-experience-list">

            {schoolHighlights.map((item, index) => (
              <article
                key={item.number}
                className={`snga-admissions-experience-item ${
                  index % 2 === 1
                    ? "snga-admissions-experience-item--reverse"
                    : ""
                }`}
              >

                <div className="snga-admissions-experience-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <div className="snga-admissions-experience-copy">

                  <span className="snga-admissions-item-number">
                    {item.number}
                  </span>

                  <h3>{item.title}</h3>

                  <div className="snga-admissions-copy-rule" />

                  <p>{item.description}</p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAMPUS
      ===================================================== */}

      <section className="snga-admissions-campus">

        <div className="snga-admissions-campus-image">
          <img
            src={campusImage}
            alt="SNGA campus"
            loading="lazy"
          />
        </div>

        <div className="snga-admissions-campus-overlay" />

        <div className="snga-admissions-container">

          <div className="snga-admissions-campus-content">

            <span className="snga-admissions-light-label">
              THE CAMPUS
            </span>

            <h2>
              13.5 acres
              <br />
              <em>of possibility.</em>
            </h2>

            <p>
              Located at Venkulam on the Ramanathapuram–Devipattinam
              main road, the SNGA campus provides a calm, serene and
              lush green environment for learning.
            </p>

            <Link
              to="/infrastructure"
              className="snga-admissions-light-link"
            >
              Explore infrastructure
              <span>→</span>
            </Link>

          </div>


          <div className="snga-admissions-campus-facts">

            <div>
              <strong>13.5</strong>
              <span>ACRES</span>
              <p>Campus</p>
            </div>

            <div>
              <strong>3,500+</strong>
              <span>BOOKS</span>
              <p>Library</p>
            </div>

            <div>
              <strong>500</strong>
              <span>SQ FT</span>
              <p>Classrooms</p>
            </div>

            <div>
              <strong>200</strong>
              <span>SEATS</span>
              <p>Multipurpose hall</p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADMISSION PROCESS
      ===================================================== */}

      <section className="snga-admissions-process">

        <div className="snga-admissions-container">

          <div className="snga-admissions-process-heading">

            <div>
              <span className="snga-admissions-section-label">
                THE PROCESS
              </span>

              <h2>
                A clear path
                <br />
                <em>to joining SNGA.</em>
              </h2>
            </div>

            <p>
              Our admissions team can guide families through the
              journey from first enquiry to admission.
            </p>

          </div>


          <div className="snga-admissions-process-grid">

            {admissionSteps.map((step) => (
              <article
                key={step.number}
                className="snga-admissions-process-item"
              >

                <div className="snga-admissions-process-image">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                  />
                </div>

                <div className="snga-admissions-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ENQUIRY
      ===================================================== */}

      <section
        id="admission-enquiry"
        className="snga-admissions-enquiry"
      >

        <div className="snga-admissions-container">

          <div className="snga-admissions-enquiry-grid">

            {/* LEFT */}

            <div className="snga-admissions-enquiry-intro">

              <span className="snga-admissions-section-label">
                ADMISSION ENQUIRY
              </span>

              <h2>
                Let's begin
                <br />
                <em>a conversation.</em>
              </h2>

              <p>
                Tell us a little about your child and the class
                you are considering. Our admissions team will
                get in touch with you.
              </p>


              <div className="snga-admissions-contact-list">

                <div className="snga-admissions-contact-item">

                  <span>CALL</span>

                  <a href="tel:+919788914441">
                    +91 97889 14441
                  </a>

                  <a href="tel:+919600234555">
                    +91 96002 34555
                  </a>

                </div>


                <div className="snga-admissions-contact-item">

                  <span>EMAIL</span>

                  <a href="mailto:info@sngacbse.com">
                    info@sngacbse.com
                  </a>

                </div>


                <div className="snga-admissions-contact-item">

                  <span>VISIT</span>

                  <p>
                    Shifan Noor Global Academy
                    <br />
                    Venkulam, Devipattinam Road
                    <br />
                    Ramanathapuram – 623503
                    <br />
                    Tamil Nadu, India
                  </p>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="snga-admissions-form-wrap">

              <form
                className="snga-admissions-form"
                onSubmit={handleSubmit}
                noValidate
              >

                <div className="snga-admissions-form-header">

                  <span>01</span>

                  <h3>
                    Student & family details
                  </h3>

                </div>


                <div className="snga-admissions-form-grid">

                  <div className="snga-admissions-field">

                    <label htmlFor="parentName">
                      Parent / Guardian Name
                      <b>*</b>
                    </label>

                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      value={formData.parentName}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />

                  </div>


                  <div className="snga-admissions-field">

                    <label htmlFor="studentName">
                      Student Name
                      <b>*</b>
                    </label>

                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="snga-admissions-field">

                    <label htmlFor="className">
                      Class Applying For
                      <b>*</b>
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


                  <div className="snga-admissions-field">

                    <label htmlFor="mobile">
                      Mobile Number
                      <b>*</b>
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                    />

                  </div>


                  <div className="snga-admissions-field">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />

                  </div>


                  <div className="snga-admissions-field">

                    <label htmlFor="location">
                      Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      autoComplete="address-level2"
                    />

                  </div>


                  <div className="snga-admissions-field snga-admissions-field--full">

                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />

                  </div>

                </div>


                {success && (
                  <div
                    className="snga-admissions-status snga-admissions-status--success"
                    role="status"
                  >
                    {success}
                  </div>
                )}


                {error && (
                  <div
                    className="snga-admissions-status snga-admissions-status--error"
                    role="alert"
                  >
                    {error}
                  </div>
                )}


                <div className="snga-admissions-form-footer">

                  <p>
                    Fields marked with{" "}
                    <strong>*</strong> are required.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting
                      ? "Submitting..."
                      : "Submit enquiry"}

                    <span>→</span>
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GUIDANCE
      ===================================================== */}

      <section className="snga-admissions-guidance">

        <div className="snga-admissions-container">

          <div className="snga-admissions-guidance-grid">

            <div>

              <span className="snga-admissions-section-label">
                HAVE QUESTIONS?
              </span>

              <h2>
                The right school
                <br />
                <em>starts with the right questions.</em>
              </h2>

            </div>


            <div>

              <p>
                If you would like to understand more about the
                school's academic approach, campus, facilities
                or admissions process, our team is available
                to help.
              </p>

              <Link
                to="/contact"
                className="snga-admissions-dark-link"
              >
                Contact the school
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="snga-admissions-final">

        <div className="snga-admissions-final-image">
          <img
            src={valuesImage}
            alt="Students learning at SNGA"
            loading="lazy"
          />
        </div>

        <div className="snga-admissions-final-overlay" />

        <div className="snga-admissions-container">

          <div className="snga-admissions-final-content">

            <span className="snga-admissions-light-label">
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <h2>
              A place to learn.
              <br />
              <em>A place to become.</em>
            </h2>

            <p>
              Begin your child's journey with a school that
              values knowledge, skills, values and confidence.
            </p>

            <div className="snga-admissions-final-actions">

              <a
                href="#admission-enquiry"
                className="snga-admissions-final-primary"
              >
                Make an enquiry
                <span>→</span>
              </a>

              <Link
                to="/about"
                className="snga-admissions-final-secondary"
              >
                Discover SNGA
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Admissions;