// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaBookOpen,
//   FaLightbulb,
//   FaUsers,
//   FaFlask,
//   FaLaptop,
//   FaHeart,
// } from "react-icons/fa";

// import "./Curriculum.css";

// const Curriculum = () => {
//   const learningAreas = [
//     {
//       number: "01",
//       icon: <FaBookOpen />,
//       title: "Academic Learning",
//       description:
//         "A structured learning experience that helps students build strong foundations, understand concepts and develop a lasting interest in learning.",
//     },
//     {
//       number: "02",
//       icon: <FaLightbulb />,
//       title: "Curiosity & Exploration",
//       description:
//         "Students are encouraged to ask questions, explore ideas and develop the curiosity needed for meaningful and independent learning.",
//     },
//     {
//       number: "03",
//       icon: <FaFlask />,
//       title: "Practical Learning",
//       description:
//         "Laboratory experiences and activity-based learning create opportunities for students to connect concepts with practical experiences.",
//     },
//     {
//       number: "04",
//       icon: <FaLaptop />,
//       title: "Digital Learning",
//       description:
//         "Digital classroom facilities support interactive teaching and provide additional ways for students to understand and engage with concepts.",
//     },
//     {
//       number: "05",
//       icon: <FaUsers />,
//       title: "Co-Curricular Growth",
//       description:
//         "Learning extends beyond academic subjects through activities that encourage participation, communication, creativity and collaboration.",
//     },
//     {
//       number: "06",
//       icon: <FaHeart />,
//       title: "Values & Character",
//       description:
//         "The curriculum experience is supported by opportunities to develop healthy attitudes, responsibility, confidence and strong human values.",
//     },
//   ];

//   const curriculumPrinciples = [
//     {
//       number: "01",
//       title: "Understand",
//       text:
//         "Build meaningful knowledge and develop a strong understanding of what is being learned.",
//     },
//     {
//       number: "02",
//       title: "Explore",
//       text:
//         "Encourage curiosity, questioning and discovery so students become active participants in learning.",
//     },
//     {
//       number: "03",
//       title: "Apply",
//       text:
//         "Connect classroom knowledge with practical experiences, activities and real-world situations.",
//     },
//     {
//       number: "04",
//       title: "Grow",
//       text:
//         "Develop communication, confidence, values and personal responsibility alongside academic learning.",
//     },
//   ];

//   return (
//     <main className="curriculum-page">

//       {/* HERO */}
//       <section className="curriculum-hero">
//         <div className="curriculum-container">

//           <div className="curriculum-hero-content">

//             <div className="curriculum-eyebrow">
//               <span />
//               CURRICULUM
//             </div>

//             <h1>
//               Learning with
//               <br />
//               <em>purpose.</em>
//             </h1>

//             <p>
//               A learning approach designed to build knowledge,
//               develop skills and prepare students for the future.
//             </p>

//           </div>

//           <div className="curriculum-hero-side">
//             <span>KNOWLEDGE</span>
//             <span>EXPLORATION</span>
//             <span>SKILLS</span>
//             <span>VALUES</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="curriculum-intro">
//         <div className="curriculum-container">

//           <div className="curriculum-intro-label">
//             OUR APPROACH TO LEARNING
//           </div>

//           <div className="curriculum-intro-grid">

//             <h2>
//               More than
//               <br />
//               <em>memorising.</em>
//             </h2>

//             <div className="curriculum-intro-copy">

//               <p>
//                 At Shifan Noor Global Academy, learning is
//                 approached as a process of understanding,
//                 exploration and personal development.
//               </p>

//               <p>
//                 The learning environment brings academic
//                 knowledge together with skills, practical
//                 experiences, technology, co-curricular
//                 participation and values.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* CURRICULUM PHILOSOPHY */}
//       <section className="curriculum-philosophy">

//         <div className="curriculum-container">

//           <div className="curriculum-philosophy-grid">

//             <div className="curriculum-philosophy-heading">

//               <div className="curriculum-eyebrow dark">
//                 LEARNING PHILOSOPHY
//               </div>

//               <h2>
//                 From knowledge
//                 <br />
//                 to <em>confidence.</em>
//               </h2>

//             </div>

//             <div className="curriculum-philosophy-copy">

//               <p>
//                 A strong curriculum should help students
//                 understand what they learn while developing
//                 the ability to communicate, think, participate
//                 and apply their knowledge.
//               </p>

//               <p>
//                 Our approach therefore looks at the student
//                 as a whole and creates opportunities for
//                 academic, intellectual, social, emotional
//                 and personal growth.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* LEARNING AREAS */}
//       <section className="curriculum-areas">

//         <div className="curriculum-container">

//           <div className="curriculum-areas-header">

//             <div>

//               <div className="curriculum-eyebrow dark">
//                 LEARNING EXPERIENCE
//               </div>

//               <h2>
//                 Different ways
//                 <br />
//                 to <em>learn.</em>
//               </h2>

//             </div>

//             <p>
//               Students experience learning through classrooms,
//               technology, practical activities, co-curricular
//               experiences and opportunities for personal growth.
//             </p>

//           </div>

//           <div className="curriculum-area-grid">

//             {learningAreas.map((area) => (
//               <article
//                 className="curriculum-area"
//                 key={area.number}
//               >

//                 <div className="curriculum-area-top">

//                   <span className="curriculum-area-number">
//                     {area.number}
//                   </span>

//                   <div className="curriculum-area-icon">
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

//       {/* LEARNING JOURNEY */}
//       <section className="curriculum-journey">

//         <div className="curriculum-container">

//           <div className="curriculum-journey-header">

//             <div className="curriculum-eyebrow">
//               THE LEARNING JOURNEY
//             </div>

//             <h2>
//               Understand.
//               <br />
//               Explore.
//               <br />
//               <em>Grow.</em>
//             </h2>

//           </div>

//           <div className="curriculum-journey-list">

//             {curriculumPrinciples.map((item) => (
//               <article
//                 className="curriculum-journey-item"
//                 key={item.number}
//               >

//                 <div className="curriculum-journey-number">
//                   {item.number}
//                 </div>

//                 <div className="curriculum-journey-content">

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

//       {/* DIGITAL + PRACTICAL */}
//       <section className="curriculum-modern">

//         <div className="curriculum-container">

//           <div className="curriculum-modern-grid">

//             <div className="curriculum-modern-content">

//               <div className="curriculum-eyebrow dark">
//                 MODERN LEARNING
//               </div>

//               <h2>
//                 Connecting the
//                 <br />
//                 classroom to the <em>world.</em>
//               </h2>

//               <p>
//                 Digital classrooms provide opportunities
//                 for interactive teaching, while laboratories,
//                 library spaces and other learning environments
//                 allow students to experience education through
//                 different formats.
//               </p>

//               <p>
//                 This combination helps students move beyond
//                 passive learning and become more engaged in
//                 the learning process.
//               </p>

//               <Link
//                 to="/infrastructure"
//                 className="curriculum-link"
//               >
//                 <span>Explore Infrastructure</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//             <div className="curriculum-modern-visual">

//               <div className="curriculum-modern-number">
//                 360°
//               </div>

//               <div className="curriculum-modern-label">
//                 LEARNING
//                 <br />
//                 EXPERIENCE
//               </div>

//               <p>
//                 Knowledge, skills, activities
//                 and values working together.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* WHOLE CHILD */}
//       <section className="curriculum-whole-child">

//         <div className="curriculum-container">

//           <div className="curriculum-whole-child-grid">

//             <div className="curriculum-whole-child-heading">

//               <div className="curriculum-eyebrow dark">
//                 BEYOND ACADEMICS
//               </div>

//               <h2>
//                 Developing the
//                 <br />
//                 <em>whole child.</em>
//               </h2>

//             </div>

//             <div className="curriculum-whole-child-copy">

//               <p>
//                 Education at SNGA extends beyond academic
//                 achievement. Students are encouraged to
//                 participate in sports, co-curricular and
//                 extracurricular activities.
//               </p>

//               <p>
//                 These experiences help students discover
//                 interests, build confidence, develop
//                 communication skills and learn to work
//                 with others.
//               </p>

//               <Link
//                 to="/sports"
//                 className="curriculum-link"
//               >
//                 <span>Explore Student Life</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* OUTCOME */}
//       <section className="curriculum-outcome">

//         <div className="curriculum-container">

//           <div className="curriculum-outcome-inner">

//             <div className="curriculum-eyebrow">
//               THE OUTCOME
//             </div>

//             <h2>
//               Knowledge to
//               <br />
//               <em>face the future.</em>
//             </h2>

//             <p>
//               Our goal is to help students leave school
//               with knowledge, skills, healthy attitudes,
//               strong values and the confidence to approach
//               new challenges.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="curriculum-cta">

//         <div className="curriculum-container">

//           <div className="curriculum-cta-content">

//             <div className="curriculum-eyebrow dark">
//               EXPLORE ACADEMICS
//             </div>

//             <h2>
//               Discover how
//               <br />
//               <em>students learn.</em>
//             </h2>

//             <p>
//               Explore the academic environment, learning
//               spaces and opportunities available at SNGA.
//             </p>

//             <div className="curriculum-actions">

//               <Link
//                 to="/academics"
//                 className="curriculum-button"
//               >
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/facilities"
//                 className="curriculum-secondary"
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

// export default Curriculum;


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaLightbulb,
  FaUsers,
  FaFlask,
  FaLaptop,
  FaHeart,
  FaSchool,
  FaPlay,
  FaQuoteLeft,
  FaTree,
  FaRocket,
  FaStar,
  FaAward,
  FaChalkboardTeacher,
  FaHands,
  FaChild,
  FaGraduationCap,
} from "react-icons/fa";
import "./Curriculum.css";

import heroBg from "../../assets/school.JPG";
import heroCircle from "../../assets/about.png";
import ctaBg from "../../assets/engaging.jpg";
import classroom from "../../assets/classroom.jpg";
import library from "../../assets/library.jpg";
import sciencelab from "../../assets/sciencelab.jpg";
import computerlab from "../../assets/ComputerLab.jpg";
import sports from "../../assets/herocircle.JPG";
import values from "../../assets/values.jpg";
// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  classroom: classroom,
  science: sciencelab,
  computer: computerlab,
  library: library,
  sports: sports,
  values: values,
};

const Curriculum = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const philosophyRef = useRef(null);
  const areasRef = useRef(null);
  const journeyRef = useRef(null);
  const modernRef = useRef(null);
  const wholeChildRef = useRef(null);
  const outcomeRef = useRef(null);
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
      { ref: heroRef, className: "sc-hero--visible" },
      { ref: introRef, className: "sc-intro--visible" },
      { ref: philosophyRef, className: "sc-philosophy--visible" },
      { ref: areasRef, className: "sc-areas--visible" },
      { ref: journeyRef, className: "sc-journey--visible" },
      { ref: modernRef, className: "sc-modern--visible" },
      { ref: wholeChildRef, className: "sc-whole-child--visible" },
      { ref: outcomeRef, className: "sc-outcome--visible" },
      { ref: ctaRef, className: "sc-cta--visible" },
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

  const learningAreas = [
    {
      number: "01",
      icon: <FaBookOpen />,
      title: "Academic Learning",
      description:
        "A structured learning experience that helps students build strong foundations, understand concepts and develop a lasting interest in learning.",
      image: IMAGES.classroom,
      color: "#4A90D9",
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Curiosity & Exploration",
      description:
        "Students are encouraged to ask questions, explore ideas and develop the curiosity needed for meaningful and independent learning.",
      image: IMAGES.library,
      color: "#F39C12",
    },
    {
      number: "03",
      icon: <FaFlask />,
      title: "Practical Learning",
      description:
        "Laboratory experiences and activity-based learning create opportunities for students to connect concepts with practical experiences.",
      image: IMAGES.science,
      color: "#27AE60",
    },
    {
      number: "04",
      icon: <FaLaptop />,
      title: "Digital Learning",
      description:
        "Digital classroom facilities support interactive teaching and provide additional ways for students to understand and engage with concepts.",
      image: IMAGES.computer,
      color: "#8E44AD",
    },
    {
      number: "05",
      icon: <FaUsers />,
      title: "Co-Curricular Growth",
      description:
        "Learning extends beyond academic subjects through activities that encourage participation, communication, creativity and collaboration.",
      image: IMAGES.sports,
      color: "#E74C3C",
    },
    {
      number: "06",
      icon: <FaHeart />,
      title: "Values & Character",
      description:
        "The curriculum experience is supported by opportunities to develop healthy attitudes, responsibility, confidence and strong human values.",
      image: IMAGES.values,
      color: "#E67E22",
    },
  ];

  const curriculumPrinciples = [
    {
      number: "01",
      title: "Understand",
      text:
        "Build meaningful knowledge and develop a strong understanding of what is being learned.",
      icon: <FaBookOpen />,
    },
    {
      number: "02",
      title: "Explore",
      text:
        "Encourage curiosity, questioning and discovery so students become active participants in learning.",
      icon: <FaLightbulb />,
    },
    {
      number: "03",
      title: "Apply",
      text:
        "Connect classroom knowledge with practical experiences, activities and real-world situations.",
      icon: <FaHands />,
    },
    {
      number: "04",
      title: "Grow",
      text:
        "Develop communication, confidence, values and personal responsibility alongside academic learning.",
      icon: <FaChild />,
    },
  ];

  const stats = [
    { number: "15+", label: "Subjects", icon: <FaBookOpen /> },
    { number: "20+", label: "Activities", icon: <FaStar /> },
    { number: "100%", label: "Focus on Values", icon: <FaHeart /> },
    { number: "25+", label: "Years of Excellence", icon: <FaAward /> },
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
                CURRICULUM
              </div>

              <h1 className="sc-hero__title">
                Learning with
                <br />
                <span className="sc-hero__highlight">Purpose.</span>
              </h1>

              <p className="sc-hero__desc">
                A learning approach designed to build knowledge,
                develop skills and prepare students for the future.
              </p>

              {/* <div className="sc-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sc-hero__stat">
                    <span className="sc-hero__stat-icon">{stat.icon}</span>
                    <span className="sc-hero__stat-number">{stat.number}</span>
                    <span className="sc-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}

              <div className="sc-hero__actions">
                <a href="#sc-areas" className="sc-hero__btn sc-hero__btn--primary">
                  <span>Explore Curriculum</span>
                  <FaArrowRight />
                </a>
                <button className="sc-hero__btn sc-hero__btn--secondary">
                  <FaPlay />
                  <span>Watch Overview</span>
                </button>
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
        </div>

        <div className="sc-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sc-intro">
        <div className="sc-container">
          <div className="sc-intro__inner">
            <div className="sc-intro__header">
              <span className="sc-intro__label">OUR APPROACH TO LEARNING</span>
              <h2 className="sc-intro__title">
                More Than
                <span className="sc-intro__highlight">Memorising.</span>
              </h2>
            </div>

            <div className="sc-intro__content">
              <p>
                At Shifan Noor Global Academy, learning is approached as a process
                of understanding, exploration and personal development.
              </p>
              <p>
                The learning environment brings academic knowledge together with
                skills, practical experiences, technology, co-curricular
                participation and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          PHILOSOPHY SECTION
      ================================================= */}
      <section ref={philosophyRef} className="sc-philosophy">
        <div className="sc-philosophy__bg" />

        <div className="sc-container">
          <div className="sc-philosophy__inner">
            <div className="sc-philosophy__content">
              <span className="sc-philosophy__label">LEARNING PHILOSOPHY</span>
              <h2 className="sc-philosophy__title">
                From Knowledge
                <br />
                <span className="sc-philosophy__highlight">to Confidence.</span>
              </h2>
            </div>

            <div className="sc-philosophy__right">
              <div className="sc-philosophy__quote">
                <FaQuoteLeft />
              </div>
              <p className="sc-philosophy__desc">
                A strong curriculum should help students understand what they
                learn while developing the ability to communicate, think,
                participate and apply their knowledge.
              </p>
              <p className="sc-philosophy__desc">
                Our approach therefore looks at the student as a whole and
                creates opportunities for academic, intellectual, social,
                emotional and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          LEARNING AREAS - Image Overlay Cards
      ================================================= */}
      <section ref={areasRef} className="sc-areas" id="sc-areas">
        <div className="sc-container">
          <div className="sc-areas__header">
            <div>
              <span className="sc-areas__label">LEARNING EXPERIENCE</span>
              <h2 className="sc-areas__title">
                Different Ways
                <br />
                <span className="sc-areas__highlight">to Learn.</span>
              </h2>
            </div>
            <p className="sc-areas__desc">
              Students experience learning through classrooms, technology,
              practical activities, co-curricular experiences and opportunities
              for personal growth.
            </p>
          </div>

          <div className="sc-areas__grid">
            {learningAreas.map((area) => (
              <div key={area.number} className="sc-areas__card">
                <div className="sc-areas__card-image">
                  <img src={area.image} alt={area.title} loading="lazy" />
                  <div className="sc-areas__card-overlay">
                    <div className="sc-areas__card-content">
                      <div className="sc-areas__card-top">
                   
                        <div className="sc-areas__card-icon" style={{ color: area.color }}>
                          {area.icon}
                        </div>
                      </div>
                      <h3 className="sc-areas__card-title">{area.title}</h3>
                      <p className="sc-areas__card-desc">{area.description}</p>
                      <span className="sc-areas__card-arrow">
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
          LEARNING JOURNEY
      ================================================= */}
      <section ref={journeyRef} className="sc-journey">
        <div className="sc-container">
          <div className="sc-journey__header">
            <span className="sc-journey__label">THE LEARNING JOURNEY</span>
            <h2 className="sc-journey__title">
              Understand.
              <br />
              Explore.
              <br />
              <span className="sc-journey__highlight">Grow.</span>
            </h2>
          </div>

          <div className="sc-journey__grid">
            {curriculumPrinciples.map((item) => (
              <div key={item.number} className="sc-journey__card">
                {/* <div className="sc-journey__card-number">{item.number}</div> */}
                <div className="sc-journey__card-icon">{item.icon}</div>
                <h3 className="sc-journey__card-title">{item.title}</h3>
                <p className="sc-journey__card-desc">{item.text}</p>
                <div className="sc-journey__card-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          MODERN LEARNING
      ================================================= */}
      <section ref={modernRef} className="sc-modern">
        <div className="sc-modern__bg" />

        <div className="sc-container">
          <div className="sc-modern__inner">
            <div className="sc-modern__content">
              <span className="sc-modern__label">MODERN LEARNING</span>
              <h2 className="sc-modern__title">
                Connecting the
                <br />
                Classroom to the <span className="sc-modern__highlight">World.</span>
              </h2>
              <p className="sc-modern__desc">
                Digital classrooms provide opportunities for interactive teaching,
                while laboratories, library spaces and other learning environments
                allow students to experience education through different formats.
              </p>
              <p className="sc-modern__desc">
                This combination helps students move beyond passive learning and
                become more engaged in the learning process.
              </p>
              <Link to="/infrastructure" className="sc-modern__link">
                <span>Explore Infrastructure</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sc-modern__visual">
              <div className="sc-modern__visual-circle">
                <span className="sc-modern__visual-number">360°</span>
                <span className="sc-modern__visual-label">LEARNING<br />EXPERIENCE</span>
                <p className="sc-modern__visual-desc">
                  Knowledge, skills, activities and values working together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          WHOLE CHILD
      ================================================= */}
      <section ref={wholeChildRef} className="sc-whole-child">
        <div className="sc-container">
          <div className="sc-whole-child__inner">
            <div className="sc-whole-child__content">
              <span className="sc-whole-child__label">BEYOND ACADEMICS</span>
              <h2 className="sc-whole-child__title">
                Developing the
                <br />
                <span className="sc-whole-child__highlight">Whole Child.</span>
              </h2>
            </div>

            <div className="sc-whole-child__right">
              <p className="sc-whole-child__desc">
                Education at SNGA extends beyond academic achievement. Students
                are encouraged to participate in sports, co-curricular and
                extracurricular activities.
              </p>
              <p className="sc-whole-child__desc">
                These experiences help students discover interests, build
                confidence, develop communication skills and learn to work
                with others.
              </p>
              <Link to="/sports" className="sc-whole-child__link">
                <span>Explore Student Life</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          OUTCOME SECTION
      ================================================= */}
      <section ref={outcomeRef} className="sc-outcome">
        <div className="sc-outcome__bg" />

        <div className="sc-container">
          <div className="sc-outcome__inner">
            <span className="sc-outcome__label">THE OUTCOME</span>
            <h2 className="sc-outcome__title">
              Knowledge to
              <br />
              <span className="sc-outcome__highlight">Face the Future.</span>
            </h2>
            <p className="sc-outcome__desc">
              Our goal is to help students leave school with knowledge, skills,
              healthy attitudes, strong values and the confidence to approach
              new challenges.
            </p>

            <div className="sc-outcome__values">
              <div className="sc-outcome__value">
                <FaBookOpen />
                <span>Knowledge</span>
              </div>
              <div className="sc-outcome__value">
                <FaHands />
                <span>Skills</span>
              </div>
              <div className="sc-outcome__value">
                <FaHeart />
                <span>Values</span>
              </div>
              <div className="sc-outcome__value">
                <FaRocket />
                <span>Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="sc-cta">
        <div className="sc-cta__bg-wrapper">
          <div 
            className="sc-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sc-cta__bg-overlay" />
          <div className="sc-cta__bg-gradient" />
        </div>

        <div className="sc-container">
          <div className="sc-cta__content">
            <div className="sc-cta__badge">
              <FaGraduationCap />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sc-cta__title">
              Discover How
              <br />
              <span className="sc-cta__highlight">Students Learn.</span>
            </h2>

            <p className="sc-cta__desc">
              Explore the academic environment, learning spaces and
              opportunities available at SNGA.
            </p>

            <div className="sc-cta__actions">
              <Link to="/academics" className="sc-cta__btn sc-cta__btn--primary">
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>
              <Link to="/infrastructure" className="sc-cta__btn sc-cta__btn--secondary">
                <span>View Facilities</span>
              </Link>
            </div>

            <div className="sc-cta__footer">
              <span>
                <FaSchool /> CBSE Affiliated
              </span>
              <span>
                <FaBookOpen /> Holistic Education
              </span>
              <span>
                <FaAward /> Excellence in Learning
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curriculum;