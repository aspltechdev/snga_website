// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaLightbulb,
//   FaHeart,
//   FaGraduationCap,
//   FaUsers,
// } from "react-icons/fa";

// import "./VisionMission.css";

// const VisionMission = () => {
//   const missionPoints = [
//     {
//       number: "01",
//       title: "Knowledge",
//       text:
//         "Developing strong academic understanding and encouraging students to explore ideas with curiosity.",
//     },
//     {
//       number: "02",
//       title: "Skills",
//       text:
//         "Helping students develop the practical, communication and learning skills required for the future.",
//     },
//     {
//       number: "03",
//       title: "Values",
//       text:
//         "Nurturing healthy attitudes, responsibility, ethical values and respect for others.",
//     },
//     {
//       number: "04",
//       title: "Confidence",
//       text:
//         "Building self-esteem and confidence so students are prepared to face challenges with courage.",
//     },
//   ];

//   const goals = [
//     {
//       number: "01",
//       title: "Academic Excellence",
//       text:
//         "Striving for strong academic performance while encouraging students to understand, question and learn.",
//     },
//     {
//       number: "02",
//       title: "Communication",
//       text:
//         "Developing confident communication skills that help students express themselves clearly.",
//     },
//     {
//       number: "03",
//       title: "All-Round Development",
//       text:
//         "Creating opportunities across academics, sports, co-curricular and extracurricular activities.",
//     },
//     {
//       number: "04",
//       title: "Human Values",
//       text:
//         "Encouraging students to grow with responsibility, discipline, compassion and strong ethical values.",
//     },
//   ];

//   return (
//     <main className="vision-mission-page">

//       {/* HERO */}
//       <section className="vision-mission-hero">
//         <div className="vision-mission-container">

//           <div className="vision-mission-hero-content">

//             <div className="vision-mission-eyebrow">
//               <span />
//               VISION & MISSION
//             </div>

//             <h1>
//               Education with
//               <br />
//               <em>a clear purpose.</em>
//             </h1>

//             <p>
//               The vision, mission and educational principles
//               that guide Shifan Noor Global Academy.
//             </p>

//           </div>

//           <div className="vision-mission-hero-side">
//             <span>KNOWLEDGE</span>
//             <span>SKILLS</span>
//             <span>VALUES</span>
//             <span>CONFIDENCE</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="vision-mission-intro">
//         <div className="vision-mission-container">

//           <div className="vision-mission-intro-label">
//             OUR EDUCATIONAL DIRECTION
//           </div>

//           <div className="vision-mission-intro-grid">

//             <h2>
//               Preparing students
//               <br />
//               for <em>life, not just exams.</em>
//             </h2>

//             <div className="vision-mission-intro-copy">
//               <p>
//                 At Shifan Noor Global Academy, education is
//                 viewed as a journey that develops the whole
//                 child.
//               </p>

//               <p>
//                 Our approach brings together knowledge,
//                 practical skills, healthy attitudes, values
//                 and confidence to help students become
//                 capable and responsible individuals.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* VISION */}
//       <section className="vision-section">

//         <div className="vision-mission-container">

//           <div className="vision-section-grid">

//             <div className="vision-section-label">
//               <div className="vision-icon">
//                 <FaLightbulb />
//               </div>

//               <span>01</span>
//               OUR VISION
//             </div>

//             <div className="vision-section-content">

//               <h2>
//                 To create
//                 <br />
//                 <em>confident learners.</em>
//               </h2>

//               <p className="vision-lead">
//                 Our vision is to provide complete education
//                 that helps students develop the knowledge,
//                 skills and confidence needed to meet the
//                 challenges of tomorrow.
//               </p>

//               <p>
//                 We aim to maintain high academic, social and
//                 moral expectations while creating a world-class
//                 ambience where students can learn with
//                 enthusiasm and develop high self-esteem.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* MISSION */}
//       <section className="mission-section">

//         <div className="vision-mission-container">

//           <div className="mission-section-grid">

//             <div className="mission-section-content">

//               <div className="vision-mission-eyebrow dark">
//                 OUR MISSION
//               </div>

//               <h2>
//                 Give every child
//                 <br />
//                 the opportunity to <em>grow.</em>
//               </h2>

//               <p className="mission-lead">
//                 Our mission is to create a stimulating,
//                 supportive and engaging learning environment
//                 where every student can discover their
//                 potential.
//               </p>

//               <p>
//                 We seek to develop knowledge, skills,
//                 healthy attitudes and values while providing
//                 opportunities for academic, social, moral,
//                 physical and personal growth.
//               </p>

//             </div>

//             <div className="mission-section-visual">

//               <div className="mission-visual-number">
//                 02
//               </div>

//               <div className="mission-visual-title">
//                 COMPLETE
//                 <br />
//                 EDUCATION
//               </div>

//               <div className="mission-visual-footer">
//                 <span>LEARN</span>
//                 <span>GROW</span>
//                 <span>LEAD</span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* FOUR PILLARS */}
//       <section className="mission-pillars">

//         <div className="vision-mission-container">

//           <div className="mission-pillars-header">

//             <div>

//               <div className="vision-mission-eyebrow dark">
//                 OUR FOUR PILLARS
//               </div>

//               <h2>
//                 What every student
//                 <br />
//                 should <em>take forward.</em>
//               </h2>

//             </div>

//             <p>
//               Education at SNGA is shaped around more than
//               academic achievement. These four areas form
//               the foundation of our approach.
//             </p>

//           </div>

//           <div className="mission-pillar-grid">

//             {missionPoints.map((point) => (
//               <article
//                 className="mission-pillar"
//                 key={point.number}
//               >

//                 <span className="mission-pillar-number">
//                   {point.number}
//                 </span>

//                 <div className="mission-pillar-icon">
//                   {point.number === "01" && <FaGraduationCap />}
//                   {point.number === "02" && <FaLightbulb />}
//                   {point.number === "03" && <FaHeart />}
//                   {point.number === "04" && <FaUsers />}
//                 </div>

//                 <h3>{point.title}</h3>

//                 <p>{point.text}</p>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* GOLDEN GOALS */}
//       <section className="mission-goals">

//         <div className="vision-mission-container">

//           <div className="mission-goals-heading">

//             <div className="vision-mission-eyebrow">
//               OUR GOLDEN GOALS
//             </div>

//             <h2>
//               Turning our vision
//               <br />
//               into <em>everyday practice.</em>
//             </h2>

//             <p>
//               The school's educational goals guide the way
//               students learn, communicate, participate and
//               grow within the school community.
//             </p>

//           </div>

//           <div className="mission-goals-list">

//             {goals.map((goal) => (
//               <article
//                 className="mission-goal"
//                 key={goal.number}
//               >

//                 <div className="mission-goal-number">
//                   {goal.number}
//                 </div>

//                 <div className="mission-goal-content">

//                   <h3>{goal.title}</h3>

//                   <p>{goal.text}</p>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* FUTURE */}
//       <section className="vision-future">

//         <div className="vision-mission-container">

//           <div className="vision-future-inner">

//             <div className="vision-mission-eyebrow">
//               LOOKING AHEAD
//             </div>

//             <h2>
//               Building a generation
//               <br />
//               ready to <em>lead.</em>
//             </h2>

//             <p>
//               Our aim is to give students the confidence,
//               knowledge, skills and values to move forward
//               into a changing world with purpose.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="vision-mission-cta">

//         <div className="vision-mission-container">

//           <div className="vision-mission-cta-content">

//             <div className="vision-mission-eyebrow dark">
//               EXPLORE SNGA
//             </div>

//             <h2>
//               See our vision
//               <br />
//               <em>in action.</em>
//             </h2>

//             <p>
//               Explore the campus, academics and learning
//               experiences that bring the SNGA philosophy
//               to life.
//             </p>

//             <div className="vision-mission-actions">

//               <Link
//                 to="/academics"
//                 className="vision-mission-button"
//               >
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/facilities"
//                 className="vision-mission-secondary"
//               >
//                 View Facilities
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default VisionMission;


// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaLightbulb,
//   FaHeart,
//   FaGraduationCap,
//   FaUsers,
//   FaSchool,
//   FaPlay,
//   FaQuoteLeft,
//   FaStar,
//   FaHands,
//   FaChild,
//   FaRocket,
//   FaAward,
//   FaEye,
//   FaBullseye,
//   // FaTarget removed - not available in react-icons/fa
//   FaCrosshairs, // Alternative icon
// } from "react-icons/fa";
// import "./VisionMission.css";

// import heroBg from "../../assets/school.JPG";
// import heroCircle from "../../assets/about.png";
// import ctaBg from "../../assets/engaging.jpg";
// import vission from "../../assets/values.jpg";
// import mission from "../../assets/beyond.jpg";
// import pillars from "../../assets/holistic.jpg";
// import goals from "../../assets/playground.JPG";

// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   vision: vission,
//   mission: mission,
//   pillars: pillars,
//   goals: goals,
// };  

// const VisionMission = () => {
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const visionRef = useRef(null);
//   const missionRef = useRef(null);
//   const pillarsRef = useRef(null);
//   const goalsRef = useRef(null);
//   const futureRef = useRef(null);
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
//       { ref: heroRef, className: "sv-hero--visible" },
//       { ref: introRef, className: "sv-intro--visible" },
//       { ref: visionRef, className: "sv-vision--visible" },
//       { ref: missionRef, className: "sv-mission--visible" },
//       { ref: pillarsRef, className: "sv-pillars--visible" },
//       { ref: goalsRef, className: "sv-goals--visible" },
//       { ref: futureRef, className: "sv-future--visible" },
//       { ref: ctaRef, className: "sv-cta--visible" },
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

//   const missionPoints = [
//     {
//       number: "01",
//       title: "Knowledge",
//       text:
//         "Developing strong academic understanding and encouraging students to explore ideas with curiosity.",
//       icon: <FaGraduationCap />,
//       color: "#4A90D9",
//     },
//     {
//       number: "02",
//       title: "Skills",
//       text:
//         "Helping students develop the practical, communication and learning skills required for the future.",
//       icon: <FaLightbulb />,
//       color: "#F39C12",
//     },
//     {
//       number: "03",
//       title: "Values",
//       text:
//         "Nurturing healthy attitudes, responsibility, ethical values and respect for others.",
//       icon: <FaHeart />,
//       color: "#E74C3C",
//     },
//     {
//       number: "04",
//       title: "Confidence",
//       text:
//         "Building self-esteem and confidence so students are prepared to face challenges with courage.",
//       icon: <FaUsers />,
//       color: "#27AE60",
//     },
//   ];

//   const goals = [
//     {
//       number: "01",
//       title: "Academic Excellence",
//       text:
//         "Striving for strong academic performance while encouraging students to understand, question and learn.",
//       image: IMAGES.vision,
//       color: "#4A90D9",
//     },
//     {
//       number: "02",
//       title: "Communication",
//       text:
//         "Developing confident communication skills that help students express themselves clearly.",
//       image: IMAGES.pillars,
//       color: "#F39C12",
//     },
//     {
//       number: "03",
//       title: "All-Round Development",
//       text:
//         "Creating opportunities across academics, sports, co-curricular and extracurricular activities.",
//       image: IMAGES.goals,
//       color: "#27AE60",
//     },
//     {
//       number: "04",
//       title: "Human Values",
//       text:
//         "Encouraging students to grow with responsibility, discipline, compassion and strong ethical values.",
//       image: IMAGES.mission,
//       color: "#8E44AD",
//     },
//   ];

//   const stats = [
//     { number: "4", label: "Core Pillars", icon: <FaStar /> },
//     { number: "4", label: "Golden Goals", icon: <FaCrosshairs /> }, // Changed from FaTarget
//     { number: "100%", label: "Student Focus", icon: <FaChild /> },
//     { number: "25+", label: "Years of Vision", icon: <FaAward /> },
//   ];

//   const values = [
//     { icon: <FaEye />, label: "Vision-Driven" },
//     { icon: <FaBullseye />, label: "Goal-Oriented" },
//     { icon: <FaHeart />, label: "Value-Based" },
//     { icon: <FaHands />, label: "Holistic Growth" },
//   ];

//   return (
//     <main className="sv-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sv-topbar">
//         <div className="sv-container">
//           <div className="sv-topbar__content">
//             <span className="sv-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sv-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sv-hero">
//         <div className="sv-hero__bg-wrapper">
//           <div 
//             className="sv-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sv-hero__bg-overlay" />
//           <div className="sv-hero__bg-gradient" />
//         </div>

//         <div className="sv-container">
//           <div className="sv-hero__inner">
//             <div className="sv-hero__content">
//               <div className="sv-hero__badge">
//                 <FaEye />
//                 VISION & MISSION
//               </div>

//               <h1 className="sv-hero__title">
//                 Education with
//                 <br />
//                 <span className="sv-hero__highlight">a Clear Purpose.</span>
//               </h1>

//               <p className="sv-hero__desc">
//                 The vision, mission and educational principles
//                 that guide Shifan Noor Global Academy.
//               </p>

//               {/* <div className="sv-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sv-hero__stat">
//                     <span className="sv-hero__stat-icon">{stat.icon}</span>
//                     <span className="sv-hero__stat-number">{stat.number}</span>
//                     <span className="sv-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div> */}
//             </div>

//             <div className="sv-hero__image-wrapper">
//               <div className="sv-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA School" 
//                   className="sv-hero__image-img"
//                 />
//                 <div className="sv-hero__image-ring" />
//                 {/* <div className="sv-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sv-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sv-intro">
//         <div className="sv-container">
//           <div className="sv-intro__inner">
//             <div className="sv-intro__header">
//               <span className="sv-intro__label">OUR EDUCATIONAL DIRECTION</span>
//               <h2 className="sv-intro__title">
//                 Preparing Students
//                 <span className="sv-intro__highlight">For Life, Not Just Exams.</span>
//               </h2>
//             </div>

//             <div className="sv-intro__content">
//               <p>
//                 At Shifan Noor Global Academy, education is viewed as a journey
//                 that develops the whole child.
//               </p>
//               <p>
//                 Our approach brings together knowledge, practical skills,
//                 healthy attitudes, values and confidence to help students
//                 become capable and responsible individuals.
//               </p>
//             </div>

//             <div className="sv-intro__values">
//               {values.map((item, index) => (
//                 <div key={index} className="sv-intro__value">
//                   <span className="sv-intro__value-icon">{item.icon}</span>
//                   <span className="sv-intro__value-label">{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           VISION SECTION - With Background Image
//       ================================================= */}
//       <section ref={visionRef} className="sv-vision">
//         <div className="sv-vision__bg-wrapper">
//           <div 
//             className="sv-vision__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.vision})` }}
//           />
//           <div className="sv-vision__bg-overlay" />
//         </div>

//         <div className="sv-container">
//           <div className="sv-vision__inner">
//             <div className="sv-vision__label">
//               <div className="sv-vision__icon">
//                 <FaLightbulb />
//               </div>
//               <span>01</span>
//               <span>OUR VISION</span>
//             </div>

//             <div className="sv-vision__content">
//               <h2 className="sv-vision__title">
//                 To Create
//                 <br />
//                 <span className="sv-vision__highlight">Confident Learners.</span>
//               </h2>
//               <div className="sv-vision__quote">
//                 <FaQuoteLeft />
//               </div>
//               <p className="sv-vision__lead">
//                 Our vision is to provide complete education that helps students
//                 develop the knowledge, skills and confidence needed to meet the
//                 challenges of tomorrow.
//               </p>
//               <p className="sv-vision__desc">
//                 We aim to maintain high academic, social and moral expectations
//                 while creating a world-class ambience where students can learn
//                 with enthusiasm and develop high self-esteem.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           MISSION SECTION
//       ================================================= */}
//       <section ref={missionRef} className="sv-mission">
//         <div className="sv-mission__bg-wrapper">
//           <div 
//             className="sv-mission__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.mission})` }}
//           />
//           <div className="sv-mission__bg-overlay" />
//         </div>

//         <div className="sv-container">
//           <div className="sv-mission__inner">
//             <div className="sv-mission__content">
//               <span className="sv-mission__label">OUR MISSION</span>
//               <h2 className="sv-mission__title">
//                 Give Every Child
//                 <br />
//                 <span className="sv-mission__highlight">the Opportunity to Grow.</span>
//               </h2>
//               <div className="sv-mission__quote">
//                 <FaQuoteLeft />
//               </div>
//               <p className="sv-mission__lead">
//                 Our mission is to create a stimulating, supportive and engaging
//                 learning environment where every student can discover their
//                 potential.
//               </p>
//               <p className="sv-mission__desc">
//                 We seek to develop knowledge, skills, healthy attitudes and
//                 values while providing opportunities for academic, social,
//                 moral, physical and personal growth.
//               </p>
//             </div>

//             <div className="sv-mission__visual">
//               <div className="sv-mission__visual-circle">
//                 <span className="sv-mission__visual-number">02</span>
//                 <span className="sv-mission__visual-title">
//                   COMPLETE
//                   <br />
//                   EDUCATION
//                 </span>
//                 <div className="sv-mission__visual-tags">
//                   <span>LEARN</span>
//                   <span>GROW</span>
//                   <span>LEAD</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FOUR PILLARS - Image Overlay Cards
//       ================================================= */}
//       <section ref={pillarsRef} className="sv-pillars">
//         <div className="sv-container">
//           <div className="sv-pillars__header">
//             <div>
//               <span className="sv-pillars__label">OUR FOUR PILLARS</span>
//               <h2 className="sv-pillars__title">
//                 What Every Student
//                 <br />
//                 <span className="sv-pillars__highlight">Should Take Forward.</span>
//               </h2>
//             </div>
//             <p className="sv-pillars__desc">
//               Education at SNGA is shaped around more than academic achievement.
//               These four areas form the foundation of our approach.
//             </p>
//           </div>

//           <div className="sv-pillars__grid">
//             {missionPoints.map((point) => (
//               <div key={point.number} className="sv-pillars__card">
//                 <div className="sv-pillars__card-image">
//                   <img src={IMAGES.pillars} alt={point.title} loading="lazy" />
//                   <div className="sv-pillars__card-overlay">
//                     <div className="sv-pillars__card-content">
//                       <div className="sv-pillars__card-top">
//                         <span className="sv-pillars__card-number">
//                           {point.number}
//                         </span>
//                         <div className="sv-pillars__card-icon" style={{ color: point.color }}>
//                           {point.icon}
//                         </div>
//                       </div>
//                       <h3 className="sv-pillars__card-title">{point.title}</h3>
//                       <p className="sv-pillars__card-desc">{point.text}</p>
//                       <span className="sv-pillars__card-arrow">
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
//           GOLDEN GOALS - Image Overlay Cards
//       ================================================= */}
//       <section ref={goalsRef} className="sv-goals">
//         <div className="sv-goals__bg" />

//         <div className="sv-container">
//           <div className="sv-goals__header">
//             <span className="sv-goals__label">OUR GOLDEN GOALS</span>
//             <h2 className="sv-goals__title">
//               Turning Our Vision
//               <br />
//               <span className="sv-goals__highlight">Into Everyday Practice.</span>
//             </h2>
//             <p className="sv-goals__desc">
//               The school's educational goals guide the way students learn,
//               communicate, participate and grow within the school community.
//             </p>
//           </div>

//           <div className="sv-goals__grid">
//             {goals.map((goal) => (
//               <div key={goal.number} className="sv-goals__card">
//                 <div className="sv-goals__card-image">
//                   <img src={goal.image} alt={goal.title} loading="lazy" />
//                   <div className="sv-goals__card-overlay">
//                     <div className="sv-goals__card-content">
//                       <span className="sv-goals__card-number">
//                         {goal.number}
//                       </span>
//                       <h3 className="sv-goals__card-title">{goal.title}</h3>
//                       <p className="sv-goals__card-desc">{goal.text}</p>
//                       <span className="sv-goals__card-arrow">
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
//           FUTURE SECTION
//       ================================================= */}
//       <section ref={futureRef} className="sv-future">
//         <div className="sv-future__bg" />

//         <div className="sv-container">
//           <div className="sv-future__inner">
//             <span className="sv-future__label">LOOKING AHEAD</span>
//             <h2 className="sv-future__title">
//               Building a Generation
//               <br />
//               <span className="sv-future__highlight">Ready to Lead.</span>
//             </h2>
//             <div className="sv-future__quote">
//               <FaQuoteLeft />
//             </div>
//             <p className="sv-future__desc">
//               Our aim is to give students the confidence, knowledge, skills and
//               values to move forward into a changing world with purpose.
//             </p>

//             <div className="sv-future__qualities">
//               <span>Confidence</span>
//               <span>Knowledge</span>
//               <span>Skills</span>
//               <span>Values</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sv-cta">
//         <div className="sv-cta__bg-wrapper">
//           <div 
//             className="sv-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sv-cta__bg-overlay" />
//           <div className="sv-cta__bg-gradient" />
//         </div>

//         <div className="sv-container">
//           <div className="sv-cta__content">
//             <div className="sv-cta__badge">
//               <FaEye />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sv-cta__title">
//               See Our Vision
//               <br />
//               <span className="sv-cta__highlight">In Action.</span>
//             </h2>

//             <p className="sv-cta__desc">
//               Explore the campus, academics and learning experiences that bring
//               the SNGA philosophy to life.
//             </p>

//             <div className="sv-cta__actions">
//               <Link to="/academics" className="sv-cta__btn sv-cta__btn--primary">
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/facilities" className="sv-cta__btn sv-cta__btn--secondary">
//                 <span>View Facilities</span>
//               </Link>
//             </div>

//             <div className="sv-cta__footer">
//               <span>
//                 <FaEye /> Clear Vision
//               </span>
//               <span>
//                 <FaBullseye /> Strong Mission
//               </span>
//               <span>
//                 <FaHeart /> Values-Driven
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default VisionMission;


import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./VisionMission.css";

import heroBg from "../../assets/school.JPG";
import visionImage from "../../assets/values.jpg";
import missionImage from "../../assets/beyond.jpg";
import pillarsImage from "../../assets/holistic.jpg";
import goalsImage from "../../assets/playground.JPG";
import futureImage from "../../assets/engaging.jpg";

const VisionMission = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sv-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addSection = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  const pillars = [
    {
      number: "01",
      title: "Knowledge",
      text:
        "Building strong academic understanding while encouraging students to explore ideas with curiosity.",
    },
    {
      number: "02",
      title: "Skills",
      text:
        "Developing practical, communication and learning skills that prepare students for the future.",
    },
    {
      number: "03",
      title: "Values",
      text:
        "Nurturing healthy attitudes, responsibility, ethical values and respect for others.",
    },
    {
      number: "04",
      title: "Confidence",
      text:
        "Strengthening self-esteem and confidence so students can approach challenges with courage.",
    },
  ];

  const goldenGoals = [
    {
      number: "01",
      title: "Punctuality & Regularity",
      text:
        "Encouraging discipline, punctuality and regular participation as foundations for meaningful learning.",
    },
    {
      number: "02",
      title: "Academic Excellence",
      text:
        "Striving for strong academic performance while encouraging understanding, curiosity and achievement.",
    },
    {
      number: "03",
      title: "Communication Skills",
      text:
        "Helping students communicate clearly and confidently in a changing and connected world.",
    },
    {
      number: "04",
      title: "Curiosity & Learning",
      text:
        "Kindling curiosity and creating a learning environment where students ask questions and explore.",
    },
    {
      number: "05",
      title: "All-Round Development",
      text:
        "Providing opportunities across academics, sports, co-curricular and extracurricular activities.",
    },
    {
      number: "06",
      title: "Teaching Excellence",
      text:
        "Supporting teachers in developing strong subject knowledge, teaching skills and meaningful classroom practice.",
    },
    {
      number: "07",
      title: "A Clean Environment",
      text:
        "Maintaining a clean, responsible and environment-friendly campus for the whole school community.",
    },
    {
      number: "08",
      title: "Human & Ethical Values",
      text:
        "Helping students grow with responsibility, compassion, discipline and strong human values.",
    },
  ];

  return (
    <main className="sv-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-hero sv-reveal"
        style={{ "--sv-hero-image": `url(${heroBg})` }}
      >
        <div className="sv-hero__overlay" />

        <div className="sv-hero__frame" />

        <div className="sv-container sv-hero__container">
          <div className="sv-hero__topline">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>VISION &amp; MISSION</span>
          </div>

          <div className="sv-hero__content">
            <div className="sv-hero__number">01</div>

            <p className="sv-hero__eyebrow">
              EDUCATIONAL DIRECTION
            </p>

            <h1 className="sv-hero__title">
              Education
              <br />
              <em>with purpose.</em>
            </h1>

            <p className="sv-hero__description">
              The vision, mission and educational principles that guide
              Shifan Noor Global Academy.
            </p>
          </div>

          <div className="sv-hero__bottom">
            <span>VENKULAM · RAMANATHAPURAM</span>

            <span className="sv-hero__scroll">
              SCROLL TO EXPLORE
              <i />
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-intro sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-intro__grid">
            <div className="sv-section-index">
              <span>02</span>
              <span>OUR DIRECTION</span>
            </div>

            <div className="sv-intro__main">
              <p className="sv-kicker">
                MORE THAN ACADEMIC ACHIEVEMENT
              </p>

              <h2>
                Preparing students
                <br />
                <em>for life.</em>
              </h2>

              <div className="sv-intro__body">
                <p>
                  At Shifan Noor Global Academy, education is viewed as
                  a journey that develops the whole child.
                </p>

                <p>
                  Our approach brings together knowledge, practical
                  skills, healthy attitudes, values and confidence to
                  help students become capable and responsible
                  individuals.
                </p>
              </div>
            </div>
          </div>

          <div className="sv-intro__rule" />

          <div className="sv-intro__statement">
            <span>THE SNGA APPROACH</span>
            <p>
              Learning should develop not only what a student knows,
              but also who they become.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-vision sv-reveal"
      >
        <div className="sv-vision__image">
          <img
            src={visionImage}
            alt="Students learning at Shifan Noor Global Academy"
            loading="lazy"
          />
        </div>

        <div className="sv-vision__content">
          <div className="sv-container sv-vision__container">
            <div className="sv-section-index sv-section-index--light">
              <span>03</span>
              <span>OUR VISION</span>
            </div>

            <p className="sv-kicker sv-kicker--light">
              LOOKING AHEAD
            </p>

            <h2>
              Building
              <br />
              <em>confident learners.</em>
            </h2>

            <div className="sv-vision__copy">
              <p className="sv-vision__lead">
                Our vision is to provide complete education that helps
                students develop the knowledge, skills and confidence
                needed to meet the challenges of tomorrow.
              </p>

              <p>
                We aim to maintain high academic, social and moral
                expectations while creating a world-class ambience
                where students can learn with enthusiasm and develop
                high self-esteem.
              </p>
            </div>

            <div className="sv-vision__bottom">
              <span>KNOWLEDGE</span>
              <span>SKILLS</span>
              <span>VALUES</span>
              <span>CONFIDENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-mission sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-mission__grid">
            <div className="sv-mission__intro">
              <div className="sv-section-index">
                <span>04</span>
                <span>OUR MISSION</span>
              </div>

              <p className="sv-kicker">
                EVERY CHILD MATTERS
              </p>

              <h2>
                Give every child
                <br />
                <em>room to grow.</em>
              </h2>
            </div>

            <div className="sv-mission__visual">
              <img
                src={missionImage}
                alt="Learning environment at SNGA"
                loading="lazy"
              />
            </div>

            <div className="sv-mission__copy">
              <p className="sv-mission__lead">
                Our mission is to create a stimulating, supportive and
                engaging learning environment where every student can
                discover their potential.
              </p>

              <p>
                We seek to develop knowledge, skills, healthy attitudes
                and values while providing opportunities for academic,
                social, moral, physical and personal growth.
              </p>

              <div className="sv-mission__line" />

              <p className="sv-mission__small">
                A complete education is one that prepares a student not
                only to succeed, but to contribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUR PILLARS
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-pillars sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-pillars__header">
            <div className="sv-section-index">
              <span>05</span>
              <span>THE FOUNDATION</span>
            </div>

            <div>
              <p className="sv-kicker">
                FOUR AREAS THAT MATTER
              </p>

              <h2>
                What students
                <br />
                <em>take forward.</em>
              </h2>
            </div>
          </div>

          <div className="sv-pillars__layout">
            <div className="sv-pillars__image">
              <img
                src={pillarsImage}
                alt="Students developing through learning"
                loading="lazy"
              />

              <div className="sv-pillars__image-caption">
                <span>SHIFAN NOOR GLOBAL ACADEMY</span>
                <strong>
                  Learning is a journey
                  <br />
                  of becoming.
                </strong>
              </div>
            </div>

            <div className="sv-pillars__list">
              {pillars.map((pillar) => (
                <article
                  className="sv-pillar"
                  key={pillar.number}
                >
                  <span className="sv-pillar__number">
                    {pillar.number}
                  </span>

                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY STATEMENT
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-statement sv-reveal"
      >
        <div className="sv-container">
          <p className="sv-statement__eyebrow">
            OUR EDUCATIONAL PHILOSOPHY
          </p>

          <h2>
            Knowledge gives direction.
            <br />
            <em>Character gives it meaning.</em>
          </h2>

          <div className="sv-statement__footer">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>LEARN · GROW · LEAD</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOLDEN GOALS
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-goals sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-goals__header">
            <div className="sv-section-index">
              <span>06</span>
              <span>THE GOLDEN GOALS</span>
            </div>

            <div className="sv-goals__heading">
              <p className="sv-kicker">
                FROM PRINCIPLE TO PRACTICE
              </p>

              <h2>
                Eight goals.
                <br />
                <em>One direction.</em>
              </h2>

              <p>
                These goals guide the way students learn,
                communicate, participate and grow within the school
                community.
              </p>
            </div>
          </div>

          <div className="sv-goals__image">
            <img
              src={goalsImage}
              alt="Student development at SNGA"
              loading="lazy"
            />
          </div>

          <div className="sv-goals__list">
            {goldenGoals.map((goal) => (
              <article
                className="sv-goal"
                key={goal.number}
              >
                <span className="sv-goal__number">
                  {goal.number}
                </span>

                <h3>{goal.title}</h3>

                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FUTURE
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-future sv-reveal"
        style={{ "--sv-future-image": `url(${futureImage})` }}
      >
        <div className="sv-future__overlay" />

        <div className="sv-container">
          <div className="sv-future__content">
            <div className="sv-section-index sv-section-index--light">
              <span>07</span>
              <span>LOOKING AHEAD</span>
            </div>

            <p className="sv-kicker sv-kicker--light">
              THE NEXT GENERATION
            </p>

            <h2>
              Ready for
              <br />
              <em>what comes next.</em>
            </h2>

            <p className="sv-future__text">
              Our aim is to give students the confidence, knowledge,
              skills and values to move forward into a changing world
              with purpose.
            </p>

            <div className="sv-future__qualities">
              <span>CONFIDENCE</span>
              <span>KNOWLEDGE</span>
              <span>SKILLS</span>
              <span>VALUES</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        ref={addSection}
        className="sv-cta sv-reveal"
      >
        <div className="sv-container">
          <div className="sv-cta__top">
            <span>08</span>
            <span>CONTINUE EXPLORING</span>
          </div>

          <div className="sv-cta__grid">
            <div>
              <p className="sv-kicker">
                SHIFAN NOOR GLOBAL ACADEMY
              </p>

              <h2>
                See the vision
                <br />
                <em>in action.</em>
              </h2>
            </div>

            <div className="sv-cta__right">
              <p>
                Explore the academics, campus and learning
                experiences that bring the SNGA philosophy to life.
              </p>

              <div className="sv-cta__actions">
                <Link
                  to="/academics"
                  className="sv-cta__link sv-cta__link--primary"
                >
                  <span>Explore Academics</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/infrastructure"
                  className="sv-cta__link"
                >
                  <span>View Infrastructure</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="sv-cta__bottom">
            <span>
              Shifan Noor Global Academy
            </span>

            <span>
              Venkulam · Ramanathapuram
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisionMission;