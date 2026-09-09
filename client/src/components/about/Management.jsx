// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// import "./Management.css";

// const Management = () => {
//   const leadership = [
//     {
//       role: "FOUNDER",
//       name: "Dr. Mansoor",
//       image: "/images/management/founder.jpg",
//       description:
//         "A vision centred on creating an environment where education develops knowledge, confidence, values and the potential of every student.",
//     },
//     {
//       role: "SCHOOL LEADERSHIP",
//       name: "Academic & Educational Leadership",
//       image: "/images/management/leadership.jpg",
//       description:
//         "Guiding students and educators towards meaningful learning, academic growth and the development of strong personal values.",
//     },
//     {
//       role: "OUR EDUCATORS",
//       name: "Dedicated Teaching Community",
//       image: "/images/management/teachers.jpg",
//       description:
//         "A committed learning community focused on creating engaging classrooms and supporting students in their academic and personal journey.",
//     },
//   ];

//   const values = [
//     {
//       number: "01",
//       title: "Student First",
//       text:
//         "Every decision begins with the learning, development and wellbeing of our students.",
//     },
//     {
//       number: "02",
//       title: "Academic Excellence",
//       text:
//         "We encourage strong subject understanding, curiosity and a continuous desire to learn.",
//     },
//     {
//       number: "03",
//       title: "Character & Values",
//       text:
//         "Education is strengthened by healthy attitudes, responsibility, confidence and human values.",
//     },
//     {
//       number: "04",
//       title: "Future Ready",
//       text:
//         "Students are encouraged to develop the skills, confidence and adaptability needed for the challenges ahead.",
//     },
//   ];

//   return (
//     <main className="management-page">

//       {/* HERO */}
//       <section className="management-hero">
//         <div className="management-container">
//           <div className="management-hero-content">

//             <div className="management-eyebrow">
//               <span />
//               SCHOOL MANAGEMENT
//             </div>

//             <h1>
//               Leadership with
//               <br />
//               <em>a purpose.</em>
//             </h1>

//             <p>
//               The people and educational vision behind
//               Shifan Noor Global Academy.
//             </p>

//           </div>

//           <div className="management-hero-mark">
//             <span>SNGA</span>
//             <small>ESTABLISHING<br />A CULTURE OF LEARNING</small>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="management-intro">
//         <div className="management-container">

//           <div className="management-intro-label">
//             OUR LEADERSHIP
//           </div>

//           <div className="management-intro-grid">

//             <h2>
//               Education needs
//               <br />
//               <em>direction.</em>
//             </h2>

//             <div className="management-intro-copy">
//               <p>
//                 Shifan Noor Global Academy is guided by an
//                 educational vision that looks beyond academic
//                 achievement.
//               </p>

//               <p>
//                 The school seeks to create a learning environment
//                 where students can build knowledge, develop skills,
//                 strengthen values and grow with confidence.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* LEADERSHIP */}
//       <section className="management-leadership">
//         <div className="management-container">

//           <div className="management-section-heading">

//             <div className="management-eyebrow dark">
//               THE PEOPLE BEHIND SNGA
//             </div>

//             <h2>
//               A community built
//               <br />
//               around <em>education.</em>
//             </h2>

//           </div>

//           <div className="management-leadership-grid">

//             {leadership.map((person, index) => (
//               <article
//                 className={`management-person management-person-${index + 1}`}
//                 key={person.role}
//               >

//                 <div className="management-person-image">

//                   <img
//                     src={person.image}
//                     alt={person.name}
//                     onError={(event) => {
//                       event.currentTarget.style.display = "none";
//                     }}
//                   />

//                   <div className="management-person-number">
//                     0{index + 1}
//                   </div>

//                 </div>

//                 <div className="management-person-content">

//                   <div className="management-person-role">
//                     {person.role}
//                   </div>

//                   <h3>{person.name}</h3>

//                   <p>{person.description}</p>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* LEADERSHIP PHILOSOPHY */}
//       <section className="management-philosophy">

//         <div className="management-container">

//           <div className="management-philosophy-grid">

//             <div className="management-philosophy-heading">

//               <div className="management-eyebrow">
//                 OUR APPROACH
//               </div>

//               <h2>
//                 Lead the school.
//                 <br />
//                 <em>Grow the student.</em>
//               </h2>

//             </div>

//             <div className="management-philosophy-copy">

//               <p>
//                 Strong educational leadership creates the
//                 foundation for strong learning. At SNGA,
//                 management, educators and the wider school
//                 community work towards creating an environment
//                 where students can discover their potential.
//               </p>

//               <p>
//                 The focus extends across academics,
//                 communication, co-curricular experiences,
//                 confidence, discipline and values.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* VALUES */}
//       <section className="management-values">

//         <div className="management-container">

//           <div className="management-values-header">

//             <div>
//               <div className="management-eyebrow dark">
//                 WHAT GUIDES US
//               </div>

//               <h2>
//                 Principles that
//                 <br />
//                 shape <em>everyday learning.</em>
//               </h2>
//             </div>

//             <p>
//               The school's educational approach is built
//               around developing students academically,
//               personally and socially.
//             </p>

//           </div>

//           <div className="management-values-list">

//             {values.map((value) => (
//               <article
//                 className="management-value"
//                 key={value.number}
//               >

//                 <div className="management-value-number">
//                   {value.number}
//                 </div>

//                 <div className="management-value-content">

//                   <h3>{value.title}</h3>

//                   <p>{value.text}</p>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* COMMUNITY */}
//       <section className="management-community">

//         <div className="management-container">

//           <div className="management-community-inner">

//             <div className="management-eyebrow">
//               BE PART OF SNGA
//             </div>

//             <h2>
//               A school is more
//               <br />
//               than its <em>buildings.</em>
//             </h2>

//             <p>
//               It is the people, relationships and experiences
//               that create a meaningful educational journey.
//             </p>

//             <Link
//               to="/contact"
//               className="management-cta"
//             >
//               <span>Connect With SNGA</span>
//               <FaArrowRight />
//             </Link>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Management;


import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaSchool,
  FaGraduationCap,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaRocket,
  FaHands,
  FaChild,
  FaStar,
  FaPlay,
  FaEye,
  FaBookOpen,
  FaUserTie,
  FaChalkboardTeacher,
  FaBuilding,
  FaQuoteLeft,
  FaBullseye,
} from "react-icons/fa";
import "./Management.css";

import heroBg from "../../assets/school.JPG";
import heroCircle from "../../assets/about.png";
import ctaBg from "../../assets/engaging.jpg";
import founder from "../../assets/founder.jpg";
import Leadership from "../../assets/holistic.jpg"; 
import Teachers from "../../assets/values.jpg";
import Community from "../../assets/beyond.jpg";
// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  founder: founder,
  leadership: Leadership,
  teachers: Teachers,
  community: Community,
};

const Management = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const leadershipRef = useRef(null);
  const philosophyRef = useRef(null);
  const valuesRef = useRef(null);
  const communityRef = useRef(null);

  // =====================================================
  // SCROLL TRIGGERED ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const sections = [
      { ref: heroRef, className: "sm-hero--visible" },
      { ref: introRef, className: "sm-intro--visible" },
      { ref: leadershipRef, className: "sm-leadership--visible" },
      { ref: philosophyRef, className: "sm-philosophy--visible" },
      { ref: valuesRef, className: "sm-values--visible" },
      { ref: communityRef, className: "sm-community--visible" },
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

  const leadership = [
    {
      role: "FOUNDER",
      name: "Dr. Mansoor",
      image: IMAGES.founder,
      description:
        "A vision centred on creating an environment where education develops knowledge, confidence, values and the potential of every student.",
      icon: <FaUserTie />,
      color: "#4A90D9",
    },
    {
      role: "SCHOOL LEADERSHIP",
      name: "Academic & Educational Leadership",
      image: IMAGES.leadership,
      description:
        "Guiding students and educators towards meaningful learning, academic growth and the development of strong personal values.",
      icon: <FaChalkboardTeacher />,
      color: "#27AE60",
    },
    {
      role: "OUR EDUCATORS",
      name: "Dedicated Teaching Community",
      image: IMAGES.teachers,
      description:
        "A committed learning community focused on creating engaging classrooms and supporting students in their academic and personal journey.",
      icon: <FaUsers />,
      color: "#F39C12",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Student First",
      text:
        "Every decision begins with the learning, development and wellbeing of our students.",
      icon: <FaChild />,
      color: "#4A90D9",
    },
    {
      number: "02",
      title: "Academic Excellence",
      text:
        "We encourage strong subject understanding, curiosity and a continuous desire to learn.",
      icon: <FaGraduationCap />,
      color: "#27AE60",
    },
    {
      number: "03",
      title: "Character & Values",
      text:
        "Education is strengthened by healthy attitudes, responsibility, confidence and human values.",
      icon: <FaHeart />,
      color: "#E74C3C",
    },
    {
      number: "04",
      title: "Future Ready",
      text:
        "Students are encouraged to develop the skills, confidence and adaptability needed for the challenges ahead.",
      icon: <FaRocket />,
      color: "#8E44AD",
    },
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence", icon: <FaAward /> },
    { number: "500+", label: "Students", icon: <FaUsers /> },
    { number: "50+", label: "Faculty Members", icon: <FaChalkboardTeacher /> },
    { number: "100%", label: "Value-Based Education", icon: <FaHeart /> },
  ];

  return (
    <main className="sm-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sm-topbar">
        <div className="sm-container">
          <div className="sm-topbar__content">
            <span className="sm-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sm-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sm-hero">
        <div className="sm-hero__bg-wrapper">
          <div 
            className="sm-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sm-hero__bg-overlay" />
          <div className="sm-hero__bg-gradient" />
        </div>

        <div className="sm-container">
          <div className="sm-hero__inner">
            <div className="sm-hero__content">
              <div className="sm-hero__badge">
                <FaUserTie />
                SCHOOL MANAGEMENT
              </div>

              <h1 className="sm-hero__title">
                Leadership with
                <br />
                <span className="sm-hero__highlight">a Purpose.</span>
              </h1>

              <p className="sm-hero__desc">
                The people and educational vision behind Shifan Noor Global Academy.
              </p>

              {/* <div className="sm-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sm-hero__stat">
                    <span className="sm-hero__stat-icon">{stat.icon}</span>
                    <span className="sm-hero__stat-number">{stat.number}</span>
                    <span className="sm-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="sm-hero__image-wrapper">
              <div className="sm-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA Management" 
                  className="sm-hero__image-img"
                />
                <div className="sm-hero__image-ring" />
                {/* <div className="sm-hero__image-badge">
                  <span>Since 2015</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="sm-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sm-intro">
        <div className="sm-container">
          <div className="sm-intro__inner">
            <div className="sm-intro__header">
              <span className="sm-intro__label">OUR LEADERSHIP</span>
              <h2 className="sm-intro__title">
                Education Needs
                <span className="sm-intro__highlight">Direction.</span>
              </h2>
            </div>

            <div className="sm-intro__content">
              <p>
                Shifan Noor Global Academy is guided by an educational vision
                that looks beyond academic achievement.
              </p>
              <p>
                The school seeks to create a learning environment where students
                can build knowledge, develop skills, strengthen values and grow
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          LEADERSHIP - Image Overlay Cards
      ================================================= */}
      <section ref={leadershipRef} className="sm-leadership">
        <div className="sm-container">
          <div className="sm-leadership__header">
            <span className="sm-leadership__label">THE PEOPLE BEHIND SNGA</span>
            <h2 className="sm-leadership__title">
              A Community Built
              <br />
              <span className="sm-leadership__highlight">Around Education.</span>
            </h2>
          </div>

          <div className="sm-leadership__grid">
            {leadership.map((person, index) => (
              <div key={person.role} className="sm-leadership__card">
                <div className="sm-leadership__card-image">
                  <img src={person.image} alt={person.name} loading="lazy" />
                  <div className="sm-leadership__card-overlay">
                    <div className="sm-leadership__card-content">
                      <div className="sm-leadership__card-top">
                        <span className="sm-leadership__card-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="sm-leadership__card-icon" style={{ color: person.color }}>
                          {person.icon}
                        </div>
                      </div>
                      <span className="sm-leadership__card-role">{person.role}</span>
                      <h3 className="sm-leadership__card-name">{person.name}</h3>
                      <p className="sm-leadership__card-desc">{person.description}</p>
                      <span className="sm-leadership__card-arrow">
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
          PHILOSOPHY SECTION
      ================================================= */}
      <section ref={philosophyRef} className="sm-philosophy">
        <div className="sm-philosophy__bg" />

        <div className="sm-container">
          <div className="sm-philosophy__inner">
            <div className="sm-philosophy__content">
              <span className="sm-philosophy__label">OUR APPROACH</span>
              <h2 className="sm-philosophy__title">
                Lead the School.
                <br />
                <span className="sm-philosophy__highlight">Grow the Student.</span>
              </h2>
            </div>

            <div className="sm-philosophy__right">
              <div className="sm-philosophy__quote">
                <FaQuoteLeft />
              </div>
              <p className="sm-philosophy__desc">
                Strong educational leadership creates the foundation for strong
                learning. At SNGA, management, educators and the wider school
                community work towards creating an environment where students
                can discover their potential.
              </p>
              <p className="sm-philosophy__desc">
                The focus extends across academics, communication,
                co-curricular experiences, confidence, discipline and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          VALUES SECTION
      ================================================= */}
      <section ref={valuesRef} className="sm-values">
        <div className="sm-container">
          <div className="sm-values__header">
            <div>
              <span className="sm-values__label">WHAT GUIDES US</span>
              <h2 className="sm-values__title">
                Principles That
                <br />
                <span className="sm-values__highlight">Shape Everyday Learning.</span>
              </h2>
            </div>
            <p className="sm-values__desc">
              The school's educational approach is built around developing
              students academically, personally and socially.
            </p>
          </div>

          <div className="sm-values__grid">
            {values.map((value) => (
              <div key={value.number} className="sm-values__card">
                <div className="sm-values__card-top">
                  <span className="sm-values__card-number">{value.number}</span>
                  <div className="sm-values__card-icon" style={{ color: value.color }}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="sm-values__card-title">{value.title}</h3>
                <p className="sm-values__card-desc">{value.text}</p>
                <div className="sm-values__card-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          COMMUNITY SECTION - With Background Image
      ================================================= */}
      <section ref={communityRef} className="sm-community">
        <div className="sm-community__bg-wrapper">
          <div 
            className="sm-community__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.community})` }}
          />
          <div className="sm-community__bg-overlay" />
        </div>

        <div className="sm-container">
          <div className="sm-community__inner">
            <span className="sm-community__label">BE PART OF SNGA</span>
            <h2 className="sm-community__title">
              A School Is More
              <br />
              <span className="sm-community__highlight">Than Its Buildings.</span>
            </h2>
            <p className="sm-community__desc">
              It is the people, relationships and experiences that create a
              meaningful educational journey.
            </p>
            <Link to="/contact" className="sm-community__link">
              <span>Connect With SNGA</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section className="sm-cta">
        <div className="sm-cta__bg-wrapper">
          <div 
            className="sm-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sm-cta__bg-overlay" />
          <div className="sm-cta__bg-gradient" />
        </div>

        <div className="sm-container">
          <div className="sm-cta__content">
            <div className="sm-cta__badge">
              <FaSchool />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sm-cta__title">
              Discover the
              <br />
              <span className="sm-cta__highlight">Leadership Behind SNGA.</span>
            </h2>

            <p className="sm-cta__desc">
              Explore our academic approach, campus and learning environment.
            </p>

            <div className="sm-cta__actions">
              <Link to="/academics" className="sm-cta__btn sm-cta__btn--primary">
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>
              <Link to="/vision-mission" className="sm-cta__btn sm-cta__btn--secondary">
                <span>View Vision & Mission</span>
              </Link>
            </div>

            <div className="sm-cta__footer">
              <span>
                <FaUserTie /> Visionary Leadership
              </span>
              <span>
                <FaChalkboardTeacher /> Dedicated Faculty
              </span>
              <span>
                <FaHeart /> Values-Driven Education
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Management;