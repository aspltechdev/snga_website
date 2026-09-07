// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaBookOpen,
//   FaLightbulb,
//   FaChartLine,
//   FaGraduationCap,
// } from "react-icons/fa";

// import "./Examinations.css";

// const Examinations = () => {
//   const assessmentAreas = [
//     {
//       number: "01",
//       icon: <FaBookOpen />,
//       title: "Understanding",
//       description:
//         "Assessment helps students demonstrate how well they understand concepts rather than focusing only on memorisation.",
//     },
//     {
//       number: "02",
//       icon: <FaLightbulb />,
//       title: "Application",
//       description:
//         "Students are encouraged to apply what they learn, connect ideas and approach questions with clarity and confidence.",
//     },
//     {
//       number: "03",
//       icon: <FaChartLine />,
//       title: "Progress",
//       description:
//         "Assessment provides an opportunity to understand learning progress and identify areas where students can improve.",
//     },
//     {
//       number: "04",
//       icon: <FaGraduationCap />,
//       title: "Preparation",
//       description:
//         "A structured academic environment helps students develop the discipline, confidence and learning habits needed for future challenges.",
//     },
//   ];

//   const principles = [
//     {
//       number: "01",
//       title: "Prepare",
//       text:
//         "Students build understanding throughout the learning process rather than relying only on last-minute preparation.",
//     },
//     {
//       number: "02",
//       title: "Practice",
//       text:
//         "Regular learning activities and opportunities to apply concepts help students strengthen their understanding.",
//     },
//     {
//       number: "03",
//       title: "Evaluate",
//       text:
//         "Assessment provides students and educators with meaningful feedback about learning and progress.",
//     },
//     {
//       number: "04",
//       title: "Improve",
//       text:
//         "The purpose of evaluation is to identify opportunities for improvement and encourage continuous learning.",
//     },
//   ];

//   return (
//     <main className="examinations-page">

//       {/* HERO */}
//       <section className="examinations-hero">
//         <div className="examinations-container">

//           <div className="examinations-hero-content">

//             <div className="examinations-eyebrow">
//               <span />
//               EXAMINATIONS & ASSESSMENT
//             </div>

//             <h1>
//               Measure learning.
//               <br />
//               <em>Build confidence.</em>
//             </h1>

//             <p>
//               Assessment that helps students understand their
//               progress, strengthen their learning and prepare
//               for the challenges ahead.
//             </p>

//           </div>

//           <div className="examinations-hero-side">
//             <span>LEARN</span>
//             <span>PRACTICE</span>
//             <span>ASSESS</span>
//             <span>IMPROVE</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="examinations-intro">
//         <div className="examinations-container">

//           <div className="examinations-intro-label">
//             OUR APPROACH
//           </div>

//           <div className="examinations-intro-grid">

//             <h2>
//               Exams are
//               <br />
//               part of the <em>journey.</em>
//             </h2>

//             <div className="examinations-intro-copy">

//               <p>
//                 At Shifan Noor Global Academy, assessment forms
//                 part of the wider learning process. It gives
//                 students opportunities to demonstrate their
//                 understanding and gives educators insight into
//                 student progress.
//               </p>

//               <p>
//                 The aim is not simply to produce examination
//                 results, but to help students develop strong
//                 learning habits, confidence and the ability
//                 to approach challenges responsibly.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* ASSESSMENT PHILOSOPHY */}
//       <section className="examinations-philosophy">

//         <div className="examinations-container">

//           <div className="examinations-philosophy-grid">

//             <div className="examinations-philosophy-heading">

//               <div className="examinations-eyebrow dark">
//                 ASSESSMENT PHILOSOPHY
//               </div>

//               <h2>
//                 From preparation
//                 <br />
//                 to <em>progress.</em>
//               </h2>

//             </div>

//             <div className="examinations-philosophy-copy">

//               <p>
//                 Assessment is an important part of academic
//                 learning. It helps students reflect on what
//                 they know, identify areas that need attention
//                 and continue developing their understanding.
//               </p>

//               <p>
//                 For educators, assessment provides valuable
//                 feedback that can support teaching and help
//                 address individual learning needs.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ASSESSMENT AREAS */}
//       <section className="examinations-areas">

//         <div className="examinations-container">

//           <div className="examinations-areas-header">

//             <div>

//               <div className="examinations-eyebrow dark">
//                 WHAT ASSESSMENT SUPPORTS
//               </div>

//               <h2>
//                 More than
//                 <br />
//                 a <em>mark.</em>
//               </h2>

//             </div>

//             <p>
//               Assessment can provide a broader picture of
//               student learning, understanding and progress.
//             </p>

//           </div>

//           <div className="examinations-area-grid">

//             {assessmentAreas.map((area) => (
//               <article
//                 className="examinations-area"
//                 key={area.number}
//               >

//                 <div className="examinations-area-top">

//                   <span className="examinations-area-number">
//                     {area.number}
//                   </span>

//                   <div className="examinations-area-icon">
//                     {area.icon}
//                   </div>

//                 </div>

//                 <h3>
//                   {area.title}
//                 </h3>

//                 <p>
//                   {area.description}
//                 </p>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* LEARNING CYCLE */}
//       <section className="examinations-cycle">

//         <div className="examinations-container">

//           <div className="examinations-cycle-header">

//             <div className="examinations-eyebrow">
//               THE LEARNING CYCLE
//             </div>

//             <h2>
//               Prepare.
//               <br />
//               Perform.
//               <br />
//               <em>Progress.</em>
//             </h2>

//           </div>

//           <div className="examinations-cycle-list">

//             {principles.map((item) => (
//               <article
//                 className="examinations-cycle-item"
//                 key={item.number}
//               >

//                 <div className="examinations-cycle-number">
//                   {item.number}
//                 </div>

//                 <div className="examinations-cycle-content">

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

//       {/* STUDENT SUPPORT */}
//       <section className="examinations-support">

//         <div className="examinations-container">

//           <div className="examinations-support-grid">

//             <div className="examinations-support-content">

//               <div className="examinations-eyebrow dark">
//                 STUDENT SUPPORT
//               </div>

//               <h2>
//                 Confidence grows
//                 <br />
//                 when students <em>feel prepared.</em>
//               </h2>

//               <p>
//                 A positive academic environment encourages
//                 students to approach examinations with
//                 preparation, discipline and confidence.
//               </p>

//               <p>
//                 Teachers can guide students by identifying
//                 areas that need further attention and helping
//                 them develop stronger learning strategies.
//               </p>

//               <Link
//                 to="/faculties"
//                 className="examinations-link"
//               >
//                 <span>Meet Our Educators</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//             <div className="examinations-support-visual">

//               <div className="examinations-support-number">
//                 01
//               </div>

//               <div className="examinations-support-title">
//                 PREPARE
//                 <br />
//                 WITH
//                 <br />
//                 PURPOSE
//               </div>

//               <p>
//                 Strong understanding.
//                 Consistent practice.
//                 Confident performance.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ACADEMIC EXCELLENCE */}
//       <section className="examinations-excellence">

//         <div className="examinations-container">

//           <div className="examinations-excellence-inner">

//             <div className="examinations-eyebrow">
//               ACADEMIC EXCELLENCE
//             </div>

//             <h2>
//               High expectations.
//               <br />
//               <em>Meaningful learning.</em>
//             </h2>

//             <p>
//               SNGA's educational vision places importance
//               on academic excellence while also recognising
//               the development of skills, values, confidence
//               and all-round growth.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* FUTURE */}
//       <section className="examinations-future">

//         <div className="examinations-container">

//           <div className="examinations-future-grid">

//             <div className="examinations-future-heading">

//               <div className="examinations-eyebrow dark">
//                 LOOKING AHEAD
//               </div>

//               <h2>
//                 Learning that
//                 <br />
//                 lasts beyond the <em>exam.</em>
//               </h2>

//             </div>

//             <div className="examinations-future-copy">

//               <p>
//                 The ultimate goal of education is to prepare
//                 students for life beyond school. Examinations
//                 are one part of that journey.
//               </p>

//               <p>
//                 Knowledge, communication, confidence,
//                 responsibility and the ability to face
//                 challenges are equally important outcomes
//                 of a complete education.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="examinations-cta">

//         <div className="examinations-container">

//           <div className="examinations-cta-content">

//             <div className="examinations-eyebrow dark">
//               EXPLORE ACADEMICS
//             </div>

//             <h2>
//               Discover the
//               <br />
//               <em>learning experience.</em>
//             </h2>

//             <p>
//               Explore SNGA's curriculum, faculty and academic
//               environment.
//             </p>

//             <div className="examinations-actions">

//               <Link
//                 to="/curriculum"
//                 className="examinations-button"
//               >
//                 <span>Explore Curriculum</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/academics"
//                 className="examinations-secondary"
//               >
//                 View Academics
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Examinations;














import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaLightbulb,
  FaChartLine,
  FaGraduationCap,
  FaSchool,
  FaPlay,
  FaQuoteLeft,
  FaCheckCircle,
  FaStar,
  FaAward,
  FaUserGraduate,
  FaClock,
  FaPenFancy,
  FaClipboardCheck,
  FaRocket,
} from "react-icons/fa";
import "./Examinations.css";

import heroBg from "../../assets/school.JPG";
import heroCircle from "../../assets/about.png";
import ctaBg from "../../assets/engaging.jpg";
import classroom from "../../assets/classroom.jpg";
import study from "../../assets/holistic.jpg";
import exam from "../../assets/exam.jpg";
import values from "../../assets/values.jpg";

// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  exam: exam,
  studying: study,
  classroom: classroom,
  success: values,
};

const Examinations = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const philosophyRef = useRef(null);
  const areasRef = useRef(null);
  const cycleRef = useRef(null);
  const supportRef = useRef(null);
  const excellenceRef = useRef(null);
  const futureRef = useRef(null);
  const ctaRef = useRef(null);

  // =====================================================
  // SCROLL TRIGGERED ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const sections = [
      { ref: heroRef, className: "se-hero--visible" },
      { ref: introRef, className: "se-intro--visible" },
      { ref: philosophyRef, className: "se-philosophy--visible" },
      { ref: areasRef, className: "se-areas--visible" },
      { ref: cycleRef, className: "se-cycle--visible" },
      { ref: supportRef, className: "se-support--visible" },
      { ref: excellenceRef, className: "se-excellence--visible" },
      { ref: futureRef, className: "se-future--visible" },
      { ref: ctaRef, className: "se-cta--visible" },
    ];

    const observers = {};

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
  // DATA
  // =====================================================

  const assessmentAreas = [
    {
      number: "01",
      icon: <FaBookOpen />,
      title: "Understanding",
      description:
        "Assessment helps students demonstrate how well they understand concepts rather than focusing only on memorisation.",
      image: IMAGES.classroom,
      color: "#4A90D9",
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Application",
      description:
        "Students are encouraged to apply what they learn, connect ideas and approach questions with clarity and confidence.",
      image: IMAGES.exam,
      color: "#F39C12",
    },
    {
      number: "03",
      icon: <FaChartLine />,
      title: "Progress",
      description:
        "Assessment provides an opportunity to understand learning progress and identify areas where students can improve.",
      image: IMAGES.studying,
      color: "#27AE60",
    },
    {
      number: "04",
      icon: <FaGraduationCap />,
      title: "Preparation",
      description:
        "A structured academic environment helps students develop the discipline, confidence and learning habits needed for future challenges.",
      image: IMAGES.success,
      color: "#8E44AD",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Prepare",
      text:
        "Students build understanding throughout the learning process rather than relying only on last-minute preparation.",
      icon: <FaClock />,
      color: "#4A90D9",
    },
    {
      number: "02",
      title: "Practice",
      text:
        "Regular learning activities and opportunities to apply concepts help students strengthen their understanding.",
      icon: <FaPenFancy />,
      color: "#F39C12",
    },
    {
      number: "03",
      title: "Evaluate",
      text:
        "Assessment provides students and educators with meaningful feedback about learning and progress.",
      icon: <FaClipboardCheck />,
      color: "#27AE60",
    },
    {
      number: "04",
      title: "Improve",
      text:
        "The purpose of evaluation is to identify opportunities for improvement and encourage continuous learning.",
      icon: <FaRocket />,
      color: "#8E44AD",
    },
  ];

  const stats = [
    { number: "100%", label: "CBSE Curriculum", icon: <FaGraduationCap /> },
    { number: "15+", label: "Subjects Offered", icon: <FaBookOpen /> },
    { number: "4", label: "Assessments Per Year", icon: <FaChartLine /> },
    { number: "100%", label: "Student Progress Tracking", icon: <FaCheckCircle /> },
  ];

  const assessmentTypes = [
    { label: "Formative Assessments", icon: <FaClipboardCheck /> },
    { label: "Summative Assessments", icon: <FaStar /> },
    { label: "Periodic Tests", icon: <FaClock /> },
    { label: "Practical Examinations", icon: <FaPenFancy /> },
  ];

  return (
    <main className="se-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="se-topbar">
        <div className="se-container">
          <div className="se-topbar__content">
            <span className="se-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="se-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="se-hero">
        <div className="se-hero__bg-wrapper">
          <div 
            className="se-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="se-hero__bg-overlay" />
          <div className="se-hero__bg-gradient" />
        </div>

        <div className="se-container">
          <div className="se-hero__inner">
            <div className="se-hero__content">
              <div className="se-hero__badge">
                <FaGraduationCap />
                EXAMINATIONS & ASSESSMENT
              </div>

              <h1 className="se-hero__title">
                Measure Learning.
                <br />
                <span className="se-hero__highlight">Build Confidence.</span>
              </h1>

              <p className="se-hero__desc">
                Assessment that helps students understand their progress,
                strengthen their learning and prepare for the challenges ahead.
              </p>

              {/* <div className="se-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="se-hero__stat">
                    <span className="se-hero__stat-icon">{stat.icon}</span>
                    <span className="se-hero__stat-number">{stat.number}</span>
                    <span className="se-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="se-hero__actions">
                <a href="#se-areas" className="se-hero__btn se-hero__btn--primary">
                  <span>Learn More</span>
                  <FaArrowRight />
                </a>
                <button className="se-hero__btn se-hero__btn--secondary">
                  <FaPlay />
                  <span>Watch Overview</span>
                </button>
              </div> */}
            </div>

            <div className="se-hero__image-wrapper">
              <div className="se-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA School" 
                  className="se-hero__image-img"
                />
                <div className="se-hero__image-ring" />
                <div className="se-hero__image-badge">
                  <span>Since 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="se-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="se-intro">
        <div className="se-container">
          <div className="se-intro__inner">
            <div className="se-intro__header">
              <span className="se-intro__label">OUR APPROACH</span>
              <h2 className="se-intro__title">
                Exams Are
                <span className="se-intro__highlight">Part of the Journey.</span>
              </h2>
            </div>

            <div className="se-intro__content">
              <p>
                At Shifan Noor Global Academy, assessment forms part of the
                wider learning process. It gives students opportunities to
                demonstrate their understanding and gives educators insight
                into student progress.
              </p>
              <p>
                The aim is not simply to produce examination results, but to
                help students develop strong learning habits, confidence and
                the ability to approach challenges responsibly.
              </p>
            </div>

            <div className="se-intro__assessment-types">
              {assessmentTypes.map((item, index) => (
                <div key={index} className="se-intro__assessment-type">
                  <span className="se-intro__assessment-icon">{item.icon}</span>
                  <span className="se-intro__assessment-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          PHILOSOPHY SECTION
      ================================================= */}
      <section ref={philosophyRef} className="se-philosophy">
        <div className="se-philosophy__bg" />

        <div className="se-container">
          <div className="se-philosophy__inner">
            <div className="se-philosophy__content">
              <span className="se-philosophy__label">ASSESSMENT PHILOSOPHY</span>
              <h2 className="se-philosophy__title">
                From Preparation
                <br />
                <span className="se-philosophy__highlight">to Progress.</span>
              </h2>
            </div>

            <div className="se-philosophy__right">
              <div className="se-philosophy__quote">
                <FaQuoteLeft />
              </div>
              <p className="se-philosophy__desc">
                Assessment is an important part of academic learning. It helps
                students reflect on what they know, identify areas that need
                attention and continue developing their understanding.
              </p>
              <p className="se-philosophy__desc">
                For educators, assessment provides valuable feedback that can
                support teaching and help address individual learning needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ASSESSMENT AREAS - Image Overlay Cards
      ================================================= */}
      <section ref={areasRef} className="se-areas" id="se-areas">
        <div className="se-container">
          <div className="se-areas__header">
            <div>
              <span className="se-areas__label">WHAT ASSESSMENT SUPPORTS</span>
              <h2 className="se-areas__title">
                More Than
                <br />
                <span className="se-areas__highlight">a Mark.</span>
              </h2>
            </div>
            <p className="se-areas__desc">
              Assessment can provide a broader picture of student learning,
              understanding and progress.
            </p>
          </div>

          <div className="se-areas__grid">
            {assessmentAreas.map((area) => (
              <div key={area.number} className="se-areas__card">
                <div className="se-areas__card-image">
                  <img src={area.image} alt={area.title} loading="lazy" />
                  <div className="se-areas__card-overlay">
                    <div className="se-areas__card-content">
                      <div className="se-areas__card-top">
                        <span className="se-areas__card-number">
                          {area.number}
                        </span>
                        <div className="se-areas__card-icon" style={{ color: area.color }}>
                          {area.icon}
                        </div>
                      </div>
                      <h3 className="se-areas__card-title">{area.title}</h3>
                      <p className="se-areas__card-desc">{area.description}</p>
                      <span className="se-areas__card-arrow">
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
          LEARNING CYCLE
      ================================================= */}
      <section ref={cycleRef} className="se-cycle">
        <div className="se-cycle__bg" />

        <div className="se-container">
          <div className="se-cycle__header">
            <span className="se-cycle__label">THE LEARNING CYCLE</span>
            <h2 className="se-cycle__title">
              Prepare.
              <br />
              Perform.
              <br />
              <span className="se-cycle__highlight">Progress.</span>
            </h2>
          </div>

          <div className="se-cycle__grid">
            {principles.map((item) => (
              <div key={item.number} className="se-cycle__card">
                <div className="se-cycle__card-number">{item.number}</div>
                <div className="se-cycle__card-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="se-cycle__card-title">{item.title}</h3>
                <p className="se-cycle__card-desc">{item.text}</p>
                <div className="se-cycle__card-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          STUDENT SUPPORT
      ================================================= */}
      <section ref={supportRef} className="se-support">
        <div className="se-support__bg" />

        <div className="se-container">
          <div className="se-support__inner">
            <div className="se-support__content">
              <span className="se-support__label">STUDENT SUPPORT</span>
              <h2 className="se-support__title">
                Confidence Grows
                <br />
                <span className="se-support__highlight">When Students Feel Prepared.</span>
              </h2>
              <p className="se-support__desc">
                A positive academic environment encourages students to approach
                examinations with preparation, discipline and confidence.
              </p>
              <p className="se-support__desc">
                Teachers can guide students by identifying areas that need
                further attention and helping them develop stronger learning
                strategies.
              </p>
              <Link to="/faculties" className="se-support__link">
                <span>Meet Our Educators</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="se-support__visual">
              <div className="se-support__visual-circle">
                <span className="se-support__visual-number">01</span>
                <span className="se-support__visual-title">
                  PREPARE
                  <br />
                  WITH
                  <br />
                  PURPOSE
                </span>
                <p className="se-support__visual-desc">
                  Strong understanding.
                  <br />
                  Consistent practice.
                  <br />
                  Confident performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ACADEMIC EXCELLENCE
      ================================================= */}
      <section ref={excellenceRef} className="se-excellence">
        <div className="se-container">
          <div className="se-excellence__inner">
            <span className="se-excellence__label">ACADEMIC EXCELLENCE</span>
            <h2 className="se-excellence__title">
              High Expectations.
              <br />
              <span className="se-excellence__highlight">Meaningful Learning.</span>
            </h2>
            <p className="se-excellence__desc">
              SNGA's educational vision places importance on academic excellence
              while also recognising the development of skills, values,
              confidence and all-round growth.
            </p>

            <div className="se-excellence__pillars">
              <div className="se-excellence__pillar">
                <FaBookOpen />
                <span>Knowledge</span>
              </div>
              <div className="se-excellence__pillar">
                <FaChartLine />
                <span>Progress</span>
              </div>
              <div className="se-excellence__pillar">
                <FaAward />
                <span>Excellence</span>
              </div>
              <div className="se-excellence__pillar">
                <FaUserGraduate />
                <span>Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FUTURE SECTION
      ================================================= */}
      <section ref={futureRef} className="se-future">
        <div className="se-future__bg" />

        <div className="se-container">
          <div className="se-future__inner">
            <div className="se-future__content">
              <span className="se-future__label">LOOKING AHEAD</span>
              <h2 className="se-future__title">
                Learning That
                <br />
                <span className="se-future__highlight">Lasts Beyond the Exam.</span>
              </h2>
            </div>

            <div className="se-future__right">
              <p className="se-future__desc">
                The ultimate goal of education is to prepare students for life
                beyond school. Examinations are one part of that journey.
              </p>
              <p className="se-future__desc">
                Knowledge, communication, confidence, responsibility and the
                ability to face challenges are equally important outcomes of
                a complete education.
              </p>
              <div className="se-future__values">
                <span>Knowledge</span>
                <span>Skills</span>
                <span>Values</span>
                <span>Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="se-cta">
        <div className="se-cta__bg-wrapper">
          <div 
            className="se-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="se-cta__bg-overlay" />
          <div className="se-cta__bg-gradient" />
        </div>

        <div className="se-container">
          <div className="se-cta__content">
            <div className="se-cta__badge">
              <FaGraduationCap />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="se-cta__title">
              Discover the
              <br />
              <span className="se-cta__highlight">Learning Experience.</span>
            </h2>

            <p className="se-cta__desc">
              Explore SNGA's curriculum, faculty and academic environment.
            </p>

            <div className="se-cta__actions">
              <Link to="/curriculum" className="se-cta__btn se-cta__btn--primary">
                <span>Explore Curriculum</span>
                <FaArrowRight />
              </Link>
              <Link to="/academics" className="se-cta__btn se-cta__btn--secondary">
                <span>View Academics</span>
              </Link>
            </div>

            <div className="se-cta__footer">
              <span>
                <FaGraduationCap /> CBSE Curriculum
              </span>
              <span>
                <FaAward /> Academic Excellence
              </span>
              <span>
                <FaUserGraduate /> Holistic Growth
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Examinations;