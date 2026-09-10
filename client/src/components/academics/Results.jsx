// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaGraduationCap,
//   FaChartLine,
//   FaBookOpen,
//   FaTrophy,
// } from "react-icons/fa";

// import "./Results.css";

// const Results = () => {
//   const resultPillars = [
//     {
//       number: "01",
//       icon: <FaBookOpen />,
//       title: "Strong Foundations",
//       description:
//         "Students are encouraged to build a clear understanding of concepts and develop strong academic foundations.",
//     },
//     {
//       number: "02",
//       icon: <FaChartLine />,
//       title: "Continuous Progress",
//       description:
//         "Learning and assessment help students identify their strengths, recognise areas for improvement and continue progressing.",
//     },
//     {
//       number: "03",
//       icon: <FaGraduationCap />,
//       title: "Academic Excellence",
//       description:
//         "The school maintains high academic expectations while encouraging students to approach learning with discipline and confidence.",
//     },
//     {
//       number: "04",
//       icon: <FaTrophy />,
//       title: "Achievement",
//       description:
//         "Academic achievement is celebrated as part of a wider journey that includes skills, values, confidence and all-round development.",
//     },
//   ];

//   const resultJourney = [
//     {
//       number: "01",
//       title: "Learn",
//       text:
//         "Students build knowledge through classroom learning, digital learning experiences and practical activities.",
//     },
//     {
//       number: "02",
//       title: "Practice",
//       text:
//         "Regular engagement with concepts helps students strengthen understanding and develop effective learning habits.",
//     },
//     {
//       number: "03",
//       title: "Assess",
//       text:
//         "Assessment provides opportunities for students to demonstrate their understanding and for educators to evaluate progress.",
//     },
//     {
//       number: "04",
//       title: "Improve",
//       text:
//         "Feedback and reflection help students identify areas for improvement and continue developing their abilities.",
//     },
//   ];

//   return (
//     <main className="results-page">

//       {/* HERO */}
//       <section className="results-hero">
//         <div className="results-container">

//           <div className="results-hero-content">

//             <div className="results-eyebrow">
//               <span />
//               ACADEMIC RESULTS
//             </div>

//             <h1>
//               Achievement
//               <br />
//               built on <em>learning.</em>
//             </h1>

//             <p>
//               Academic results are one part of a wider
//               journey of knowledge, growth and achievement.
//             </p>

//           </div>

//           <div className="results-hero-side">
//             <span>LEARN</span>
//             <span>PREPARE</span>
//             <span>PERFORM</span>
//             <span>ACHIEVE</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="results-intro">
//         <div className="results-container">

//           <div className="results-intro-label">
//             OUR ACADEMIC OUTLOOK
//           </div>

//           <div className="results-intro-grid">

//             <h2>
//               Results matter.
//               <br />
//               But <em>learning matters more.</em>
//             </h2>

//             <div className="results-intro-copy">

//               <p>
//                 At Shifan Noor Global Academy, academic
//                 achievement is supported by a learning
//                 environment designed to build understanding,
//                 skills and confidence.
//               </p>

//               <p>
//                 We believe meaningful results are developed
//                 through consistent learning, strong foundations,
//                 effective teaching and a student's willingness
//                 to improve.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* STATEMENT */}
//       <section className="results-statement">

//         <div className="results-container">

//           <div className="results-statement-grid">

//             <div className="results-statement-heading">

//               <div className="results-eyebrow dark">
//                 THE BIGGER PICTURE
//               </div>

//               <h2>
//                 Every result
//                 <br />
//                 tells part of a <em>story.</em>
//               </h2>

//             </div>

//             <div className="results-statement-copy">

//               <p>
//                 A student's academic performance reflects
//                 learning at a particular point in time. The
//                 larger objective is to help students develop
//                 the knowledge, skills and confidence to
//                 continue learning throughout their lives.
//               </p>

//               <p>
//                 This is why academic expectations at SNGA
//                 are supported by opportunities for practical
//                 learning, communication, co-curricular
//                 participation and personal development.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* PILLARS */}
//       <section className="results-pillars">

//         <div className="results-container">

//           <div className="results-pillars-header">

//             <div>

//               <div className="results-eyebrow dark">
//                 WHAT BUILDS RESULTS
//               </div>

//               <h2>
//                 Strong outcomes
//                 <br />
//                 start with <em>strong foundations.</em>
//               </h2>

//             </div>

//             <p>
//               Academic achievement develops through a
//               combination of understanding, preparation,
//               consistency and continuous improvement.
//             </p>

//           </div>

//           <div className="results-pillar-grid">

//             {resultPillars.map((pillar) => (
//               <article
//                 className="results-pillar"
//                 key={pillar.number}
//               >

//                 <div className="results-pillar-top">

//                   <span className="results-pillar-number">
//                     {pillar.number}
//                   </span>

//                   <div className="results-pillar-icon">
//                     {pillar.icon}
//                   </div>

//                 </div>

//                 <h3>
//                   {pillar.title}
//                 </h3>

//                 <p>
//                   {pillar.description}
//                 </p>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* JOURNEY */}
//       <section className="results-journey">

//         <div className="results-container">

//           <div className="results-journey-header">

//             <div className="results-eyebrow">
//               THE ACADEMIC JOURNEY
//             </div>

//             <h2>
//               Learn.
//               <br />
//               Improve.
//               <br />
//               <em>Achieve.</em>
//             </h2>

//           </div>

//           <div className="results-journey-list">

//             {resultJourney.map((item) => (
//               <article
//                 className="results-journey-item"
//                 key={item.number}
//               >

//                 <div className="results-journey-number">
//                   {item.number}
//                 </div>

//                 <div className="results-journey-content">

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <p>
//                     {item.text}
//                   </p>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* EXAMINATION CONNECTION */}
//       <section className="results-examinations">

//         <div className="results-container">

//           <div className="results-examinations-grid">

//             <div className="results-examinations-content">

//               <div className="results-eyebrow dark">
//                 RESULTS & ASSESSMENT
//               </div>

//               <h2>
//                 Performance is
//                 <br />
//                 part of the <em>process.</em>
//               </h2>

//               <p>
//                 Examinations and assessments provide
//                 opportunities for students to demonstrate
//                 what they have learned and understand where
//                 they can improve.
//               </p>

//               <p>
//                 A consistent approach to learning helps
//                 students approach examinations with greater
//                 preparation and confidence.
//               </p>

//               <Link
//                 to="/examinations"
//                 className="results-link"
//               >
//                 <span>Explore Examinations</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//             <div className="results-examinations-visual">

//               <div className="results-visual-number">
//                 360°
//               </div>

//               <div className="results-visual-title">
//                 LEARNING
//                 <br />
//                 BEYOND
//                 <br />
//                 MARKS
//               </div>

//               <p>
//                 Knowledge.
//                 Skills.
//                 Confidence.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ACHIEVEMENT */}
//       <section className="results-achievement">

//         <div className="results-container">

//           <div className="results-achievement-inner">

//             <div className="results-eyebrow">
//               A CULTURE OF EXCELLENCE
//             </div>

//             <h2>
//               High expectations.
//               <br />
//               <em>Continuous growth.</em>
//             </h2>

//             <p>
//               SNGA's academic vision encourages students
//               to strive for excellence while recognising
//               that every learner develops at their own pace.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* FUTURE */}
//       <section className="results-future">

//         <div className="results-container">

//           <div className="results-future-grid">

//             <div className="results-future-heading">

//               <div className="results-eyebrow dark">
//                 LOOKING AHEAD
//               </div>

//               <h2>
//                 Today's achievement
//                 <br />
//                 becomes tomorrow's <em>confidence.</em>
//               </h2>

//             </div>

//             <div className="results-future-copy">

//               <p>
//                 Academic success can give students confidence,
//                 but education should prepare them for challenges
//                 far beyond examinations.
//               </p>

//               <p>
//                 Knowledge, communication skills, responsibility,
//                 strong values and the ability to keep learning
//                 are equally important outcomes of a complete
//                 education.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* RESULTS DIRECTORY */}
//       <section className="results-directory">

//         <div className="results-container">

//           <div className="results-directory-header">

//             <div>

//               <div className="results-eyebrow dark">
//                 RESULTS ARCHIVE
//               </div>

//               <h2>
//                 Academic
//                 <br />
//                 <em>performance.</em>
//               </h2>

//             </div>

//             <p>
//               Year-wise examination results, academic
//               achievements and performance records can
//               be published here as they are made available
//               by the school.
//             </p>

//           </div>

//           <div className="results-directory-placeholder">

//             <span>
//               ACADEMIC RESULTS
//             </span>

//             <h3>
//               Results archive
//               <br />
//               coming together.
//             </h3>

//             <p>
//               This section can be connected to the
//               administration system to publish verified
//               academic results and reports.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="results-cta">

//         <div className="results-container">

//           <div className="results-cta-content">

//             <div className="results-eyebrow dark">
//               EXPLORE ACADEMICS
//             </div>

//             <h2>
//               Discover the
//               <br />
//               journey behind the <em>result.</em>
//             </h2>

//             <p>
//               Explore our curriculum, examinations and
//               academic learning environment.
//             </p>

//             <div className="results-actions">

//               <Link
//                 to="/curriculum"
//                 className="results-button"
//               >
//                 <span>Explore Curriculum</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/examinations"
//                 className="results-secondary"
//               >
//                 View Examinations
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Results;


// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaGraduationCap,
//   FaChartLine,
//   FaBookOpen,
//   FaTrophy,
//   FaSchool,
//   FaPlay,
//   FaQuoteLeft,
//   FaStar,
//   FaAward,
//   FaUserGraduate,
//   FaRocket,
//   FaCheckCircle,
//   FaMedal,
//   FaCrown,
//   FaClipboardCheck,
// } from "react-icons/fa";
// import "./Results.css";

// import heroBg from "../../assets/school.JPG";
// import heroCircle from "../../assets/about.png";
// import ctaBg from "../../assets/engaging.jpg";
// import study from "../../assets/holistic.jpg";
// import values from "../../assets/values.jpg";
// import classroom from "../../assets/classroom.jpg";
// import achievement from "../../assets/achievement.jpg";
// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   success: values,
//   studying: study,
//   classroom: classroom,
//   achievement: achievement,
// };

// const Results = () => {
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const statementRef = useRef(null);
//   const pillarsRef = useRef(null);
//   const journeyRef = useRef(null);
//   const examinationsRef = useRef(null);
//   const achievementRef = useRef(null);
//   const futureRef = useRef(null);
//   const directoryRef = useRef(null);
//   const ctaRef = useRef(null);

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const sections = [
//       { ref: heroRef, className: "sr-hero--visible" },
//       { ref: introRef, className: "sr-intro--visible" },
//       { ref: statementRef, className: "sr-statement--visible" },
//       { ref: pillarsRef, className: "sr-pillars--visible" },
//       { ref: journeyRef, className: "sr-journey--visible" },
//       { ref: examinationsRef, className: "sr-examinations--visible" },
//       { ref: achievementRef, className: "sr-achievement--visible" },
//       { ref: futureRef, className: "sr-future--visible" },
//       { ref: directoryRef, className: "sr-directory--visible" },
//       { ref: ctaRef, className: "sr-cta--visible" },
//     ];

//     const observers = {};

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
//   // DATA
//   // =====================================================

//   const resultPillars = [
//     {
//       number: "01",
//       icon: <FaBookOpen />,
//       title: "Strong Foundations",
//       description:
//         "Students are encouraged to build a clear understanding of concepts and develop strong academic foundations.",
//       image: IMAGES.classroom,
//       color: "#4A90D9",
//     },
//     {
//       number: "02",
//       icon: <FaChartLine />,
//       title: "Continuous Progress",
//       description:
//         "Learning and assessment help students identify their strengths, recognise areas for improvement and continue progressing.",
//       image: IMAGES.studying,
//       color: "#27AE60",
//     },
//     {
//       number: "03",
//       icon: <FaGraduationCap />,
//       title: "Academic Excellence",
//       description:
//         "The school maintains high academic expectations while encouraging students to approach learning with discipline and confidence.",
//       image: IMAGES.achievement,
//       color: "#F39C12",
//     },
//     {
//       number: "04",
//       icon: <FaTrophy />,
//       title: "Achievement",
//       description:
//         "Academic achievement is celebrated as part of a wider journey that includes skills, values, confidence and all-round development.",
//       image: IMAGES.success,
//       color: "#8E44AD",
//     },
//   ];

//   const resultJourney = [
//     {
//       number: "01",
//       title: "Learn",
//       text:
//         "Students build knowledge through classroom learning, digital learning experiences and practical activities.",
//       icon: <FaBookOpen />,
//       color: "#4A90D9",
//     },
//     {
//       number: "02",
//       title: "Practice",
//       text:
//         "Regular engagement with concepts helps students strengthen understanding and develop effective learning habits.",
//       icon: <FaClipboardCheck />,
//       color: "#27AE60",
//     },
//     {
//       number: "03",
//       title: "Assess",
//       text:
//         "Assessment provides opportunities for students to demonstrate their understanding and for educators to evaluate progress.",
//       icon: <FaChartLine />,
//       color: "#F39C12",
//     },
//     {
//       number: "04",
//       title: "Improve",
//       text:
//         "Feedback and reflection help students identify areas for improvement and continue developing their abilities.",
//       icon: <FaRocket />,
//       color: "#8E44AD",
//     },
//   ];

//   const stats = [
//     { number: "100%", label: "CBSE Curriculum", icon: <FaGraduationCap /> },
//     { number: "15+", label: "Subjects Offered", icon: <FaBookOpen /> },
//     { number: "4", label: "Assessments Per Year", icon: <FaChartLine /> },
//     { number: "50+", label: "Academic Achievements", icon: <FaTrophy /> },
//   ];

//   const achievements = [
//     { icon: <FaMedal />, label: "Academic Excellence", color: "#F39C12" },
//     { icon: <FaCrown />, label: "Top Performers", color: "#E74C3C" },
//     { icon: <FaStar />, label: "Consistent Results", color: "#27AE60" },
//     { icon: <FaAward />, label: "Recognized Achievements", color: "#4A90D9" },
//   ];

//   return (
//     <main className="sr-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sr-topbar">
//         <div className="sr-container">
//           <div className="sr-topbar__content">
//             <span className="sr-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sr-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sr-hero">
//         <div className="sr-hero__bg-wrapper">
//           <div 
//             className="sr-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sr-hero__bg-overlay" />
//           <div className="sr-hero__bg-gradient" />
//         </div>

//         <div className="sr-container">
//           <div className="sr-hero__inner">
//             <div className="sr-hero__content">
//               <div className="sr-hero__badge">
//                 <FaGraduationCap />
//                 ACADEMIC RESULTS
//               </div>

//               <h1 className="sr-hero__title">
//                 Achievement
//                 <br />
//                 <span className="sr-hero__highlight">Built on Learning.</span>
//               </h1>

//               <p className="sr-hero__desc">
//                 Academic results are one part of a wider journey of knowledge,
//                 growth and achievement.
//               </p>

//               {/* <div className="sr-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sr-hero__stat">
//                     <span className="sr-hero__stat-icon">{stat.icon}</span>
//                     <span className="sr-hero__stat-number">{stat.number}</span>
//                     <span className="sr-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div> */}

//               {/* <div className="sr-hero__actions">
//                 <a href="#sr-pillars" className="sr-hero__btn sr-hero__btn--primary">
//                   <span>Explore Results</span>
//                   <FaArrowRight />
//                 </a>
//                 <button className="sr-hero__btn sr-hero__btn--secondary">
//                   <FaPlay />
//                   <span>Watch Overview</span>
//                 </button>
//               </div> */}
//             </div>

//             <div className="sr-hero__image-wrapper">
//               <div className="sr-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA School" 
//                   className="sr-hero__image-img"
//                 />
//                 <div className="sr-hero__image-ring" />
//                 {/* <div className="sr-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sr-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sr-intro">
//         <div className="sr-container">
//           <div className="sr-intro__inner">
//             <div className="sr-intro__header">
//               <span className="sr-intro__label">OUR ACADEMIC OUTLOOK</span>
//               <h2 className="sr-intro__title">
//                 Results Matter.
//                 <span className="sr-intro__highlight">But Learning Matters More.</span>
//               </h2>
//             </div>

//             <div className="sr-intro__content">
//               <p>
//                 At Shifan Noor Global Academy, academic achievement is supported
//                 by a learning environment designed to build understanding,
//                 skills and confidence.
//               </p>
//               <p>
//                 We believe meaningful results are developed through consistent
//                 learning, strong foundations, effective teaching and a student's
//                 willingness to improve.
//               </p>
//             </div>

//             <div className="sr-intro__achievements">
//               {achievements.map((item, index) => (
//                 <div key={index} className="sr-intro__achievement">
//                   <span className="sr-intro__achievement-icon" style={{ color: item.color }}>
//                     {item.icon}
//                   </span>
//                   <span className="sr-intro__achievement-label">{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           STATEMENT SECTION
//       ================================================= */}
//       <section ref={statementRef} className="sr-statement">
//         <div className="sr-statement__bg" />

//         <div className="sr-container">
//           <div className="sr-statement__inner">
//             <div className="sr-statement__content">
//               <span className="sr-statement__label">THE BIGGER PICTURE</span>
//               <h2 className="sr-statement__title">
//                 Every Result
//                 <br />
//                 <span className="sr-statement__highlight">Tells Part of a Story.</span>
//               </h2>
//             </div>

//             <div className="sr-statement__right">
//               <div className="sr-statement__quote">
//                 <FaQuoteLeft />
//               </div>
//               <p className="sr-statement__desc">
//                 A student's academic performance reflects learning at a
//                 particular point in time. The larger objective is to help
//                 students develop the knowledge, skills and confidence to
//                 continue learning throughout their lives.
//               </p>
//               <p className="sr-statement__desc">
//                 This is why academic expectations at SNGA are supported by
//                 opportunities for practical learning, communication,
//                 co-curricular participation and personal development.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           PILLARS - Image Overlay Cards
//       ================================================= */}
//       <section ref={pillarsRef} className="sr-pillars" id="sr-pillars">
//         <div className="sr-container">
//           <div className="sr-pillars__header">
//             <div>
//               <span className="sr-pillars__label">WHAT BUILDS RESULTS</span>
//               <h2 className="sr-pillars__title">
//                 Strong Outcomes
//                 <br />
//                 <span className="sr-pillars__highlight">Start with Strong Foundations.</span>
//               </h2>
//             </div>
//             <p className="sr-pillars__desc">
//               Academic achievement develops through a combination of
//               understanding, preparation, consistency and continuous improvement.
//             </p>
//           </div>

//           <div className="sr-pillars__grid">
//             {resultPillars.map((pillar) => (
//               <div key={pillar.number} className="sr-pillars__card">
//                 <div className="sr-pillars__card-image">
//                   <img src={pillar.image} alt={pillar.title} loading="lazy" />
//                   <div className="sr-pillars__card-overlay">
//                     <div className="sr-pillars__card-content">
//                       <div className="sr-pillars__card-top">
//                         <span className="sr-pillars__card-number">
//                           {pillar.number}
//                         </span>
//                         <div className="sr-pillars__card-icon" style={{ color: pillar.color }}>
//                           {pillar.icon}
//                         </div>
//                       </div>
//                       <h3 className="sr-pillars__card-title">{pillar.title}</h3>
//                       <p className="sr-pillars__card-desc">{pillar.description}</p>
//                       <span className="sr-pillars__card-arrow">
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
//           JOURNEY SECTION
//       ================================================= */}
//       <section ref={journeyRef} className="sr-journey">
//         <div className="sr-journey__bg" />

//         <div className="sr-container">
//           <div className="sr-journey__header">
//             <span className="sr-journey__label">THE ACADEMIC JOURNEY</span>
//             <h2 className="sr-journey__title">
//               Learn.
//               <br />
//               Improve.
//               <br />
//               <span className="sr-journey__highlight">Achieve.</span>
//             </h2>
//           </div>

//           <div className="sr-journey__grid">
//             {resultJourney.map((item) => (
//               <div key={item.number} className="sr-journey__card">
//                 <div className="sr-journey__card-number">{item.number}</div>
//                 <div className="sr-journey__card-icon" style={{ color: item.color }}>
//                   {item.icon}
//                 </div>
//                 <h3 className="sr-journey__card-title">{item.title}</h3>
//                 <p className="sr-journey__card-desc">{item.text}</p>
//                 <div className="sr-journey__card-line" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           EXAMINATIONS SECTION
//       ================================================= */}
//       <section ref={examinationsRef} className="sr-examinations">
//         <div className="sr-container">
//           <div className="sr-examinations__inner">
//             <div className="sr-examinations__content">
//               <span className="sr-examinations__label">RESULTS & ASSESSMENT</span>
//               <h2 className="sr-examinations__title">
//                 Performance Is
//                 <br />
//                 <span className="sr-examinations__highlight">Part of the Process.</span>
//               </h2>
//               <p className="sr-examinations__desc">
//                 Examinations and assessments provide opportunities for students
//                 to demonstrate what they have learned and understand where they
//                 can improve.
//               </p>
//               <p className="sr-examinations__desc">
//                 A consistent approach to learning helps students approach
//                 examinations with greater preparation and confidence.
//               </p>
//               <Link to="/examinations" className="sr-examinations__link">
//                 <span>Explore Examinations</span>
//                 <FaArrowRight />
//               </Link>
//             </div>

//             <div className="sr-examinations__visual">
//               <div className="sr-examinations__visual-circle">
//                 <span className="sr-examinations__visual-number">360°</span>
//                 <span className="sr-examinations__visual-title">
//                   LEARNING
//                   <br />
//                   BEYOND
//                   <br />
//                   MARKS
//                 </span>
//                 <p className="sr-examinations__visual-desc">
//                   Knowledge. Skills. Confidence.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           ACHIEVEMENT SECTION
//       ================================================= */}
//       <section ref={achievementRef} className="sr-achievement">
//         <div className="sr-container">
//           <div className="sr-achievement__inner">
//             <span className="sr-achievement__label">A CULTURE OF EXCELLENCE</span>
//             <h2 className="sr-achievement__title">
//               High Expectations.
//               <br />
//               <span className="sr-achievement__highlight">Continuous Growth.</span>
//             </h2>
//             <p className="sr-achievement__desc">
//               SNGA's academic vision encourages students to strive for
//               excellence while recognising that every learner develops
//               at their own pace.
//             </p>

//             <div className="sr-achievement__metrics">
//               <div className="sr-achievement__metric">
//                 <span className="sr-achievement__metric-icon">
//                   <FaStar />
//                 </span>
//                 <span className="sr-achievement__metric-value">100%</span>
//                 <span className="sr-achievement__metric-label">Pass Rate</span>
//               </div>
//               <div className="sr-achievement__metric">
//                 <span className="sr-achievement__metric-icon">
//                   <FaTrophy />
//                 </span>
//                 <span className="sr-achievement__metric-value">50+</span>
//                 <span className="sr-achievement__metric-label">Awards Won</span>
//               </div>
//               <div className="sr-achievement__metric">
//                 <span className="sr-achievement__metric-icon">
//                   <FaGraduationCap />
//                 </span>
//                 <span className="sr-achievement__metric-value">100%</span>
//                 <span className="sr-achievement__metric-label">CBSE Curriculum</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FUTURE SECTION
//       ================================================= */}
//       <section ref={futureRef} className="sr-future">
//         <div className="sr-future__bg" />

//         <div className="sr-container">
//           <div className="sr-future__inner">
//             <div className="sr-future__content">
//               <span className="sr-future__label">LOOKING AHEAD</span>
//               <h2 className="sr-future__title">
//                 Today's Achievement
//                 <br />
//                 <span className="sr-future__highlight">Becomes Tomorrow's Confidence.</span>
//               </h2>
//             </div>

//             <div className="sr-future__right">
//               <p className="sr-future__desc">
//                 Academic success can give students confidence, but education
//                 should prepare them for challenges far beyond examinations.
//               </p>
//               <p className="sr-future__desc">
//                 Knowledge, communication skills, responsibility, strong values
//                 and the ability to keep learning are equally important outcomes
//                 of a complete education.
//               </p>
//               <div className="sr-future__qualities">
//                 <span>Knowledge</span>
//                 <span>Skills</span>
//                 <span>Values</span>
//                 <span>Confidence</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           DIRECTORY SECTION
//       ================================================= */}
//       <section ref={directoryRef} className="sr-directory">
//         <div className="sr-directory__bg" />

//         <div className="sr-container">
//           <div className="sr-directory__inner">
//             <div className="sr-directory__header">
//               <div>
//                 <span className="sr-directory__label">RESULTS ARCHIVE</span>
//                 <h2 className="sr-directory__title">
//                   Academic
//                   <br />
//                   <span className="sr-directory__highlight">Performance.</span>
//                 </h2>
//               </div>
//               <p className="sr-directory__desc">
//                 Year-wise examination results, academic achievements and
//                 performance records can be published here as they are made
//                 available by the school.
//               </p>
//             </div>

//             <div className="sr-directory__placeholder">
//               <div className="sr-directory__placeholder-icon">
//                 <FaGraduationCap />
//               </div>
//               <span className="sr-directory__placeholder-label">ACADEMIC RESULTS</span>
//               <h3 className="sr-directory__placeholder-title">
//                 Results Archive
//                 <br />
//                 Coming Together.
//               </h3>
//               <p className="sr-directory__placeholder-desc">
//                 This section can be connected to the administration system to
//                 publish verified academic results and reports.
//               </p>
//               <div className="sr-directory__placeholder-grid">
//                 <div className="sr-directory__placeholder-item">
//                   <FaCheckCircle />
//                   <span>Verified Results</span>
//                 </div>
//                 <div className="sr-directory__placeholder-item">
//                   <FaChartLine />
//                   <span>Performance Reports</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sr-cta">
//         <div className="sr-cta__bg-wrapper">
//           <div 
//             className="sr-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sr-cta__bg-overlay" />
//           <div className="sr-cta__bg-gradient" />
//         </div>

//         <div className="sr-container">
//           <div className="sr-cta__content">
//             <div className="sr-cta__badge">
//               <FaGraduationCap />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sr-cta__title">
//               Discover the
//               <br />
//               <span className="sr-cta__highlight">Journey Behind the Result.</span>
//             </h2>

//             <p className="sr-cta__desc">
//               Explore our curriculum, examinations and academic learning environment.
//             </p>

//             <div className="sr-cta__actions">
//               <Link to="/curriculum" className="sr-cta__btn sr-cta__btn--primary">
//                 <span>Explore Curriculum</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/examinations" className="sr-cta__btn sr-cta__btn--secondary">
//                 <span>View Examinations</span>
//               </Link>
//             </div>

//             <div className="sr-cta__footer">
//               <span>
//                 <FaGraduationCap /> CBSE Curriculum
//               </span>
//               <span>
//                 <FaTrophy /> Academic Excellence
//               </span>
//               <span>
//                 <FaAward /> Recognized Achievements
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Results;














import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Results.css";

import heroBg from "../../assets/school.JPG";
import ctaBg from "../../assets/engaging.jpg";
import classroom from "../../assets/classroom.jpg";
import studying from "../../assets/holistic.jpg";
import achievement from "../../assets/achievement.jpg";
import values from "../../assets/values.jpg";

const Results = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const philosophyRef = useRef(null);
  const foundationsRef = useRef(null);
  const journeyRef = useRef(null);
  const assessmentRef = useRef(null);
  const excellenceRef = useRef(null);
  const futureRef = useRef(null);
  const archiveRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const sections = [
      heroRef,
      introRef,
      philosophyRef,
      foundationsRef,
      journeyRef,
      assessmentRef,
      excellenceRef,
      futureRef,
      archiveRef,
      ctaRef,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const foundations = [
    {
      number: "01",
      title: "Strong Foundations",
      text:
        "Students are encouraged to develop a clear understanding of concepts and build strong academic foundations through consistent learning.",
      image: classroom,
    },
    {
      number: "02",
      title: "Continuous Progress",
      text:
        "Learning and assessment help students recognise their strengths, identify areas for improvement and continue progressing.",
      image: studying,
    },
    {
      number: "03",
      title: "Academic Excellence",
      text:
        "High academic expectations are supported by discipline, effective teaching and a learning environment that encourages confidence.",
      image: achievement,
    },
    {
      number: "04",
      title: "Achievement",
      text:
        "Academic achievement forms part of a wider journey that includes knowledge, skills, values, confidence and all-round development.",
      image: values,
    },
  ];

  const journey = [
    {
      number: "01",
      title: "Learn",
      text:
        "Students build knowledge through classroom learning, digital learning experiences and practical activities.",
    },
    {
      number: "02",
      title: "Practice",
      text:
        "Regular engagement with concepts helps students strengthen understanding and develop effective learning habits.",
    },
    {
      number: "03",
      title: "Assess",
      text:
        "Assessment gives students opportunities to demonstrate what they have learned and helps educators evaluate progress.",
    },
    {
      number: "04",
      title: "Improve",
      text:
        "Feedback and reflection help students identify areas for improvement and continue developing their abilities.",
    },
  ];

  return (
    <main className="sr-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section ref={heroRef} className="sr-hero">

        <div
          className="sr-hero__image"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <div className="sr-hero__tone" />

        <div className="sr-hero__frame" />

        <div className="sr-container sr-hero__container">

          <div className="sr-hero__top">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>RESULTS &amp; ACADEMIC PERFORMANCE</span>
          </div>

          <div className="sr-hero__content">

            <div className="sr-hero__eyebrow">
              ACADEMIC RESULTS
            </div>

            <h1 className="sr-hero__title">
              Results are a
              <br />
              <em>reflection</em>
              <br />
              of learning.
            </h1>

            <div className="sr-hero__bottom">

              <p className="sr-hero__description">
                Academic results are one part of a wider journey of
                knowledge, growth and achievement.
              </p>

              <a
                href="#results-foundations"
                className="sr-text-link sr-text-link--light"
              >
                <span>Explore academic journey</span>
                <span className="sr-text-link__line" />
              </a>

            </div>

          </div>

          <div className="sr-hero__scene">
            <span>04</span>
          </div>

          <div className="sr-hero__side">
            LEARN&nbsp;&nbsp; / &nbsp;&nbsp;GROW&nbsp;&nbsp; / &nbsp;&nbsp;LEAD
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section ref={introRef} className="sr-intro">

        <div className="sr-container">

          <div className="sr-section-kicker">
            OUR ACADEMIC OUTLOOK
          </div>

          <div className="sr-intro__grid">

            <div className="sr-intro__heading">

              <h2>
                Results matter.
                <br />
                <span>Learning matters more.</span>
              </h2>

            </div>

            <div className="sr-intro__copy">

              <p className="sr-lead">
                At Shifan Noor Global Academy, academic achievement is
                supported by a learning environment designed to build
                understanding, skills and confidence.
              </p>

              <p>
                We believe meaningful results develop through consistent
                learning, strong foundations, effective teaching and a
                student's willingness to improve.
              </p>

              <p>
                Achievement is therefore viewed not simply as an outcome,
                but as evidence of a student's progress along a much
                larger educational journey.
              </p>

            </div>

          </div>

          <div className="sr-intro__rule" />

          <div className="sr-intro__statement">
            <span>01</span>

            <p>
              The strongest academic outcomes begin long before
              examination day.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}
      <section ref={philosophyRef} className="sr-philosophy">

        <div className="sr-container">

          <div className="sr-philosophy__grid">

            <div className="sr-philosophy__number">
              01
            </div>

            <div className="sr-philosophy__main">

              <div className="sr-section-kicker sr-section-kicker--light">
                THE BIGGER PICTURE
              </div>

              <h2>
                Every result
                <br />
                tells part of a
                <br />
                <em>story.</em>
              </h2>

            </div>

            <div className="sr-philosophy__copy">

              <p>
                A student's academic performance reflects learning at a
                particular point in time.
              </p>

              <p>
                The larger objective is to help students develop the
                knowledge, skills and confidence to continue learning
                throughout their lives.
              </p>

              <p>
                This is why academic expectations are supported by
                opportunities for practical learning, communication,
                co-curricular participation and personal development.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDATIONS
      ===================================================== */}
      <section
        ref={foundationsRef}
        id="results-foundations"
        className="sr-foundations"
      >

        <div className="sr-container">

          <div className="sr-foundations__header">

            <div>

              <div className="sr-section-kicker">
                WHAT BUILDS RESULTS
              </div>

              <h2>
                Strong outcomes
                <br />
                <span>start with strong foundations.</span>
              </h2>

            </div>

            <p>
              Academic achievement develops through a combination of
              understanding, preparation, consistency and continuous
              improvement.
            </p>

          </div>


          <div className="sr-foundations__list">

            {foundations.map((item) => (
              <article
                key={item.number}
                className="sr-foundation"
              >

                <div className="sr-foundation__number">
                  {item.number}
                </div>

                <div className="sr-foundation__image">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                </div>

                <div className="sr-foundation__content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <span className="sr-foundation__index">
                    ACADEMIC FOUNDATION
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <section ref={journeyRef} className="sr-journey">

        <div className="sr-container">

          <div className="sr-journey__intro">

            <div className="sr-section-kicker">
              THE ACADEMIC JOURNEY
            </div>

            <h2>
              Learn.
              <br />
              Improve.
              <br />
              <em>Achieve.</em>
            </h2>

          </div>


          <div className="sr-journey__timeline">

            {journey.map((item) => (
              <article
                key={item.number}
                className="sr-journey__item"
              >

                <div className="sr-journey__item-number">
                  {item.number}
                </div>

                <div className="sr-journey__item-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

                <div className="sr-journey__item-word">
                  {item.title}
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ASSESSMENT
      ===================================================== */}
      <section ref={assessmentRef} className="sr-assessment">

        <div className="sr-container">

          <div className="sr-assessment__grid">

            <div className="sr-assessment__image">

              <img
                src={studying}
                alt="Students learning at SNGA"
                loading="lazy"
              />

              <div className="sr-assessment__image-caption">
                LEARNING &amp; ASSESSMENT
              </div>

            </div>


            <div className="sr-assessment__content">

              <div className="sr-section-kicker">
                RESULTS &amp; ASSESSMENT
              </div>

              <h2>
                Performance is
                <br />
                <span>part of the process.</span>
              </h2>

              <p className="sr-assessment__lead">
                Examinations and assessments provide opportunities for
                students to demonstrate what they have learned and
                understand where they can improve.
              </p>

              <p>
                A consistent approach to learning helps students
                approach examinations with greater preparation and
                confidence.
              </p>

              <div className="sr-assessment__rule" />

              <Link
                to="/examinations"
                className="sr-text-link"
              >
                <span>Explore examinations</span>
                <span className="sr-text-link__line" />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXCELLENCE
      ===================================================== */}
      <section ref={excellenceRef} className="sr-excellence">

        <div className="sr-container">

          <div className="sr-excellence__top">

            <div className="sr-section-kicker sr-section-kicker--light">
              A CULTURE OF EXCELLENCE
            </div>

            <h2>
              High expectations.
              <br />
              <em>Continuous growth.</em>
            </h2>

          </div>


          <div className="sr-excellence__body">

            <div className="sr-excellence__number">
              02
            </div>

            <div className="sr-excellence__copy">

              <p className="sr-excellence__lead">
                SNGA's academic vision encourages students to strive
                for excellence while recognising that every learner
                develops at their own pace.
              </p>

              <p>
                Academic achievement is strengthened when students
                develop discipline, curiosity, confidence and the
                willingness to keep improving.
              </p>

            </div>


            <div className="sr-excellence__image">

              <img
                src={achievement}
                alt="Academic achievement"
                loading="lazy"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FUTURE
      ===================================================== */}
      <section ref={futureRef} className="sr-future">

        <div className="sr-container">

          <div className="sr-future__grid">

            <div className="sr-future__heading">

              <div className="sr-section-kicker">
                LOOKING AHEAD
              </div>

              <h2>
                Today's achievement
                <br />
                becomes tomorrow's
                <br />
                <em>confidence.</em>
              </h2>

            </div>


            <div className="sr-future__content">

              <p className="sr-future__lead">
                Academic success can give students confidence, but
                education should prepare them for challenges far
                beyond examinations.
              </p>

              <p>
                Knowledge, communication skills, responsibility,
                strong values and the ability to keep learning are
                equally important outcomes of a complete education.
              </p>

              <div className="sr-future__qualities">

                <div>
                  <span>01</span>
                  <strong>Knowledge</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Skills</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Values</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Confidence</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESULTS ARCHIVE
      ===================================================== */}
      <section ref={archiveRef} className="sr-archive">

        <div className="sr-container">

          <div className="sr-archive__header">

            <div>

              <div className="sr-section-kicker">
                RESULTS ARCHIVE
              </div>

              <h2>
                Academic
                <br />
                <span>performance.</span>
              </h2>

            </div>

            <p>
              Year-wise examination results, academic achievements
              and performance records can be published here as they
              are made available by the school.
            </p>

          </div>


          <div className="sr-archive__document">

            <div className="sr-archive__document-top">

              <span>
                SHIFAN NOOR GLOBAL ACADEMY
              </span>

              <span>
                ACADEMIC RECORDS
              </span>

            </div>


            <div className="sr-archive__document-main">

              <div className="sr-archive__document-number">
                —
              </div>

              <div>

                <div className="sr-archive__document-label">
                  VERIFIED RESULTS
                </div>

                <h3>
                  Results archive
                  <br />
                  <em>coming together.</em>
                </h3>

                <p>
                  This section can be connected to the administration
                  system to publish verified academic results and
                  reports.
                </p>

              </div>

            </div>


            <div className="sr-archive__document-bottom">

              <span>
                YEAR-WISE RECORDS
              </span>

              <span>
                PERFORMANCE REPORTS
              </span>

              <span>
                VERIFIED INFORMATION
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section ref={ctaRef} className="sr-cta">

        <div
          className="sr-cta__image"
          style={{ backgroundImage: `url(${ctaBg})` }}
        />

        <div className="sr-cta__tone" />

        <div className="sr-container">

          <div className="sr-cta__content">

            <div className="sr-section-kicker sr-section-kicker--light">
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2>
              Discover the journey
              <br />
              <em>behind the result.</em>
            </h2>

            <p>
              Explore the curriculum, examinations and academic
              learning environment that support every student's
              journey.
            </p>


            <div className="sr-cta__actions">

              <Link
                to="/curriculum"
                className="sr-cta__primary"
              >
                Explore Curriculum
              </Link>

              <Link
                to="/examinations"
                className="sr-cta__secondary"
              >
                View Examinations
              </Link>

            </div>


            <div className="sr-cta__footer">

              <span>
                Ramanathapuram · Tamil Nadu
              </span>

              <span>
                Learn · Grow · Lead
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Results;