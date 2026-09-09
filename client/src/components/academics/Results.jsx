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


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGraduationCap,
  FaChartLine,
  FaBookOpen,
  FaTrophy,
  FaSchool,
  FaPlay,
  FaQuoteLeft,
  FaStar,
  FaAward,
  FaUserGraduate,
  FaRocket,
  FaCheckCircle,
  FaMedal,
  FaCrown,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Results.css";

import heroBg from "../../assets/school.JPG";
import heroCircle from "../../assets/about.png";
import ctaBg from "../../assets/engaging.jpg";
import study from "../../assets/holistic.jpg";
import values from "../../assets/values.jpg";
import classroom from "../../assets/classroom.jpg";
import achievement from "../../assets/achievement.jpg";
// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  success: values,
  studying: study,
  classroom: classroom,
  achievement: achievement,
};

const Results = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const statementRef = useRef(null);
  const pillarsRef = useRef(null);
  const journeyRef = useRef(null);
  const examinationsRef = useRef(null);
  const achievementRef = useRef(null);
  const futureRef = useRef(null);
  const directoryRef = useRef(null);
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
      { ref: heroRef, className: "sr-hero--visible" },
      { ref: introRef, className: "sr-intro--visible" },
      { ref: statementRef, className: "sr-statement--visible" },
      { ref: pillarsRef, className: "sr-pillars--visible" },
      { ref: journeyRef, className: "sr-journey--visible" },
      { ref: examinationsRef, className: "sr-examinations--visible" },
      { ref: achievementRef, className: "sr-achievement--visible" },
      { ref: futureRef, className: "sr-future--visible" },
      { ref: directoryRef, className: "sr-directory--visible" },
      { ref: ctaRef, className: "sr-cta--visible" },
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

  const resultPillars = [
    {
      number: "01",
      icon: <FaBookOpen />,
      title: "Strong Foundations",
      description:
        "Students are encouraged to build a clear understanding of concepts and develop strong academic foundations.",
      image: IMAGES.classroom,
      color: "#4A90D9",
    },
    {
      number: "02",
      icon: <FaChartLine />,
      title: "Continuous Progress",
      description:
        "Learning and assessment help students identify their strengths, recognise areas for improvement and continue progressing.",
      image: IMAGES.studying,
      color: "#27AE60",
    },
    {
      number: "03",
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description:
        "The school maintains high academic expectations while encouraging students to approach learning with discipline and confidence.",
      image: IMAGES.achievement,
      color: "#F39C12",
    },
    {
      number: "04",
      icon: <FaTrophy />,
      title: "Achievement",
      description:
        "Academic achievement is celebrated as part of a wider journey that includes skills, values, confidence and all-round development.",
      image: IMAGES.success,
      color: "#8E44AD",
    },
  ];

  const resultJourney = [
    {
      number: "01",
      title: "Learn",
      text:
        "Students build knowledge through classroom learning, digital learning experiences and practical activities.",
      icon: <FaBookOpen />,
      color: "#4A90D9",
    },
    {
      number: "02",
      title: "Practice",
      text:
        "Regular engagement with concepts helps students strengthen understanding and develop effective learning habits.",
      icon: <FaClipboardCheck />,
      color: "#27AE60",
    },
    {
      number: "03",
      title: "Assess",
      text:
        "Assessment provides opportunities for students to demonstrate their understanding and for educators to evaluate progress.",
      icon: <FaChartLine />,
      color: "#F39C12",
    },
    {
      number: "04",
      title: "Improve",
      text:
        "Feedback and reflection help students identify areas for improvement and continue developing their abilities.",
      icon: <FaRocket />,
      color: "#8E44AD",
    },
  ];

  const stats = [
    { number: "100%", label: "CBSE Curriculum", icon: <FaGraduationCap /> },
    { number: "15+", label: "Subjects Offered", icon: <FaBookOpen /> },
    { number: "4", label: "Assessments Per Year", icon: <FaChartLine /> },
    { number: "50+", label: "Academic Achievements", icon: <FaTrophy /> },
  ];

  const achievements = [
    { icon: <FaMedal />, label: "Academic Excellence", color: "#F39C12" },
    { icon: <FaCrown />, label: "Top Performers", color: "#E74C3C" },
    { icon: <FaStar />, label: "Consistent Results", color: "#27AE60" },
    { icon: <FaAward />, label: "Recognized Achievements", color: "#4A90D9" },
  ];

  return (
    <main className="sr-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sr-topbar">
        <div className="sr-container">
          <div className="sr-topbar__content">
            <span className="sr-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sr-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sr-hero">
        <div className="sr-hero__bg-wrapper">
          <div 
            className="sr-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sr-hero__bg-overlay" />
          <div className="sr-hero__bg-gradient" />
        </div>

        <div className="sr-container">
          <div className="sr-hero__inner">
            <div className="sr-hero__content">
              <div className="sr-hero__badge">
                <FaGraduationCap />
                ACADEMIC RESULTS
              </div>

              <h1 className="sr-hero__title">
                Achievement
                <br />
                <span className="sr-hero__highlight">Built on Learning.</span>
              </h1>

              <p className="sr-hero__desc">
                Academic results are one part of a wider journey of knowledge,
                growth and achievement.
              </p>

              {/* <div className="sr-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sr-hero__stat">
                    <span className="sr-hero__stat-icon">{stat.icon}</span>
                    <span className="sr-hero__stat-number">{stat.number}</span>
                    <span className="sr-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}

              {/* <div className="sr-hero__actions">
                <a href="#sr-pillars" className="sr-hero__btn sr-hero__btn--primary">
                  <span>Explore Results</span>
                  <FaArrowRight />
                </a>
                <button className="sr-hero__btn sr-hero__btn--secondary">
                  <FaPlay />
                  <span>Watch Overview</span>
                </button>
              </div> */}
            </div>

            <div className="sr-hero__image-wrapper">
              <div className="sr-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA School" 
                  className="sr-hero__image-img"
                />
                <div className="sr-hero__image-ring" />
                {/* <div className="sr-hero__image-badge">
                  <span>Since 2015</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="sr-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sr-intro">
        <div className="sr-container">
          <div className="sr-intro__inner">
            <div className="sr-intro__header">
              <span className="sr-intro__label">OUR ACADEMIC OUTLOOK</span>
              <h2 className="sr-intro__title">
                Results Matter.
                <span className="sr-intro__highlight">But Learning Matters More.</span>
              </h2>
            </div>

            <div className="sr-intro__content">
              <p>
                At Shifan Noor Global Academy, academic achievement is supported
                by a learning environment designed to build understanding,
                skills and confidence.
              </p>
              <p>
                We believe meaningful results are developed through consistent
                learning, strong foundations, effective teaching and a student's
                willingness to improve.
              </p>
            </div>

            <div className="sr-intro__achievements">
              {achievements.map((item, index) => (
                <div key={index} className="sr-intro__achievement">
                  <span className="sr-intro__achievement-icon" style={{ color: item.color }}>
                    {item.icon}
                  </span>
                  <span className="sr-intro__achievement-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          STATEMENT SECTION
      ================================================= */}
      <section ref={statementRef} className="sr-statement">
        <div className="sr-statement__bg" />

        <div className="sr-container">
          <div className="sr-statement__inner">
            <div className="sr-statement__content">
              <span className="sr-statement__label">THE BIGGER PICTURE</span>
              <h2 className="sr-statement__title">
                Every Result
                <br />
                <span className="sr-statement__highlight">Tells Part of a Story.</span>
              </h2>
            </div>

            <div className="sr-statement__right">
              <div className="sr-statement__quote">
                <FaQuoteLeft />
              </div>
              <p className="sr-statement__desc">
                A student's academic performance reflects learning at a
                particular point in time. The larger objective is to help
                students develop the knowledge, skills and confidence to
                continue learning throughout their lives.
              </p>
              <p className="sr-statement__desc">
                This is why academic expectations at SNGA are supported by
                opportunities for practical learning, communication,
                co-curricular participation and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          PILLARS - Image Overlay Cards
      ================================================= */}
      <section ref={pillarsRef} className="sr-pillars" id="sr-pillars">
        <div className="sr-container">
          <div className="sr-pillars__header">
            <div>
              <span className="sr-pillars__label">WHAT BUILDS RESULTS</span>
              <h2 className="sr-pillars__title">
                Strong Outcomes
                <br />
                <span className="sr-pillars__highlight">Start with Strong Foundations.</span>
              </h2>
            </div>
            <p className="sr-pillars__desc">
              Academic achievement develops through a combination of
              understanding, preparation, consistency and continuous improvement.
            </p>
          </div>

          <div className="sr-pillars__grid">
            {resultPillars.map((pillar) => (
              <div key={pillar.number} className="sr-pillars__card">
                <div className="sr-pillars__card-image">
                  <img src={pillar.image} alt={pillar.title} loading="lazy" />
                  <div className="sr-pillars__card-overlay">
                    <div className="sr-pillars__card-content">
                      <div className="sr-pillars__card-top">
                        <span className="sr-pillars__card-number">
                          {pillar.number}
                        </span>
                        <div className="sr-pillars__card-icon" style={{ color: pillar.color }}>
                          {pillar.icon}
                        </div>
                      </div>
                      <h3 className="sr-pillars__card-title">{pillar.title}</h3>
                      <p className="sr-pillars__card-desc">{pillar.description}</p>
                      <span className="sr-pillars__card-arrow">
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
          JOURNEY SECTION
      ================================================= */}
      <section ref={journeyRef} className="sr-journey">
        <div className="sr-journey__bg" />

        <div className="sr-container">
          <div className="sr-journey__header">
            <span className="sr-journey__label">THE ACADEMIC JOURNEY</span>
            <h2 className="sr-journey__title">
              Learn.
              <br />
              Improve.
              <br />
              <span className="sr-journey__highlight">Achieve.</span>
            </h2>
          </div>

          <div className="sr-journey__grid">
            {resultJourney.map((item) => (
              <div key={item.number} className="sr-journey__card">
                <div className="sr-journey__card-number">{item.number}</div>
                <div className="sr-journey__card-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="sr-journey__card-title">{item.title}</h3>
                <p className="sr-journey__card-desc">{item.text}</p>
                <div className="sr-journey__card-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          EXAMINATIONS SECTION
      ================================================= */}
      <section ref={examinationsRef} className="sr-examinations">
        <div className="sr-container">
          <div className="sr-examinations__inner">
            <div className="sr-examinations__content">
              <span className="sr-examinations__label">RESULTS & ASSESSMENT</span>
              <h2 className="sr-examinations__title">
                Performance Is
                <br />
                <span className="sr-examinations__highlight">Part of the Process.</span>
              </h2>
              <p className="sr-examinations__desc">
                Examinations and assessments provide opportunities for students
                to demonstrate what they have learned and understand where they
                can improve.
              </p>
              <p className="sr-examinations__desc">
                A consistent approach to learning helps students approach
                examinations with greater preparation and confidence.
              </p>
              <Link to="/examinations" className="sr-examinations__link">
                <span>Explore Examinations</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sr-examinations__visual">
              <div className="sr-examinations__visual-circle">
                <span className="sr-examinations__visual-number">360°</span>
                <span className="sr-examinations__visual-title">
                  LEARNING
                  <br />
                  BEYOND
                  <br />
                  MARKS
                </span>
                <p className="sr-examinations__visual-desc">
                  Knowledge. Skills. Confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ACHIEVEMENT SECTION
      ================================================= */}
      <section ref={achievementRef} className="sr-achievement">
        <div className="sr-container">
          <div className="sr-achievement__inner">
            <span className="sr-achievement__label">A CULTURE OF EXCELLENCE</span>
            <h2 className="sr-achievement__title">
              High Expectations.
              <br />
              <span className="sr-achievement__highlight">Continuous Growth.</span>
            </h2>
            <p className="sr-achievement__desc">
              SNGA's academic vision encourages students to strive for
              excellence while recognising that every learner develops
              at their own pace.
            </p>

            <div className="sr-achievement__metrics">
              <div className="sr-achievement__metric">
                <span className="sr-achievement__metric-icon">
                  <FaStar />
                </span>
                <span className="sr-achievement__metric-value">100%</span>
                <span className="sr-achievement__metric-label">Pass Rate</span>
              </div>
              <div className="sr-achievement__metric">
                <span className="sr-achievement__metric-icon">
                  <FaTrophy />
                </span>
                <span className="sr-achievement__metric-value">50+</span>
                <span className="sr-achievement__metric-label">Awards Won</span>
              </div>
              <div className="sr-achievement__metric">
                <span className="sr-achievement__metric-icon">
                  <FaGraduationCap />
                </span>
                <span className="sr-achievement__metric-value">100%</span>
                <span className="sr-achievement__metric-label">CBSE Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FUTURE SECTION
      ================================================= */}
      <section ref={futureRef} className="sr-future">
        <div className="sr-future__bg" />

        <div className="sr-container">
          <div className="sr-future__inner">
            <div className="sr-future__content">
              <span className="sr-future__label">LOOKING AHEAD</span>
              <h2 className="sr-future__title">
                Today's Achievement
                <br />
                <span className="sr-future__highlight">Becomes Tomorrow's Confidence.</span>
              </h2>
            </div>

            <div className="sr-future__right">
              <p className="sr-future__desc">
                Academic success can give students confidence, but education
                should prepare them for challenges far beyond examinations.
              </p>
              <p className="sr-future__desc">
                Knowledge, communication skills, responsibility, strong values
                and the ability to keep learning are equally important outcomes
                of a complete education.
              </p>
              <div className="sr-future__qualities">
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
          DIRECTORY SECTION
      ================================================= */}
      <section ref={directoryRef} className="sr-directory">
        <div className="sr-directory__bg" />

        <div className="sr-container">
          <div className="sr-directory__inner">
            <div className="sr-directory__header">
              <div>
                <span className="sr-directory__label">RESULTS ARCHIVE</span>
                <h2 className="sr-directory__title">
                  Academic
                  <br />
                  <span className="sr-directory__highlight">Performance.</span>
                </h2>
              </div>
              <p className="sr-directory__desc">
                Year-wise examination results, academic achievements and
                performance records can be published here as they are made
                available by the school.
              </p>
            </div>

            <div className="sr-directory__placeholder">
              <div className="sr-directory__placeholder-icon">
                <FaGraduationCap />
              </div>
              <span className="sr-directory__placeholder-label">ACADEMIC RESULTS</span>
              <h3 className="sr-directory__placeholder-title">
                Results Archive
                <br />
                Coming Together.
              </h3>
              <p className="sr-directory__placeholder-desc">
                This section can be connected to the administration system to
                publish verified academic results and reports.
              </p>
              <div className="sr-directory__placeholder-grid">
                <div className="sr-directory__placeholder-item">
                  <FaCheckCircle />
                  <span>Verified Results</span>
                </div>
                <div className="sr-directory__placeholder-item">
                  <FaChartLine />
                  <span>Performance Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="sr-cta">
        <div className="sr-cta__bg-wrapper">
          <div 
            className="sr-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sr-cta__bg-overlay" />
          <div className="sr-cta__bg-gradient" />
        </div>

        <div className="sr-container">
          <div className="sr-cta__content">
            <div className="sr-cta__badge">
              <FaGraduationCap />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sr-cta__title">
              Discover the
              <br />
              <span className="sr-cta__highlight">Journey Behind the Result.</span>
            </h2>

            <p className="sr-cta__desc">
              Explore our curriculum, examinations and academic learning environment.
            </p>

            <div className="sr-cta__actions">
              <Link to="/curriculum" className="sr-cta__btn sr-cta__btn--primary">
                <span>Explore Curriculum</span>
                <FaArrowRight />
              </Link>
              <Link to="/examinations" className="sr-cta__btn sr-cta__btn--secondary">
                <span>View Examinations</span>
              </Link>
            </div>

            <div className="sr-cta__footer">
              <span>
                <FaGraduationCap /> CBSE Curriculum
              </span>
              <span>
                <FaTrophy /> Academic Excellence
              </span>
              <span>
                <FaAward /> Recognized Achievements
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Results;