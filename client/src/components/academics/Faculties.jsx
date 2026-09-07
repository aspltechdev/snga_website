// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaChalkboardTeacher,
//   FaLightbulb,
//   FaUsers,
//   FaGraduationCap,
// } from "react-icons/fa";

// import "./Faculties.css";

// const Faculties = () => {
//   const facultyPrinciples = [
//     {
//       number: "01",
//       icon: <FaChalkboardTeacher />,
//       title: "Teaching with Purpose",
//       description:
//         "Our educators create meaningful learning experiences that help students understand concepts and develop a genuine interest in learning.",
//     },
//     {
//       number: "02",
//       icon: <FaLightbulb />,
//       title: "Encouraging Curiosity",
//       description:
//         "Teachers encourage students to ask questions, explore ideas and become active participants in their own learning.",
//     },
//     {
//       number: "03",
//       icon: <FaUsers />,
//       title: "Understanding Every Student",
//       description:
//         "Recognising that every child is different, our learning environment encourages individual attention and supportive relationships.",
//     },
//     {
//       number: "04",
//       icon: <FaGraduationCap />,
//       title: "Growing Together",
//       description:
//         "Educators and students form a learning community where knowledge, skills, confidence and values develop together.",
//     },
//   ];

//   const facultyRoles = [
//     {
//       number: "01",
//       title: "Academic Educators",
//       description:
//         "Supporting students in building strong subject knowledge, understanding concepts and developing effective learning habits.",
//     },
//     {
//       number: "02",
//       title: "Activity & Co-Curricular Mentors",
//       description:
//         "Encouraging students to discover interests and develop creativity, communication, teamwork and confidence beyond academics.",
//     },
//     {
//       number: "03",
//       title: "Student Support",
//       description:
//         "Creating a positive school environment where students can seek guidance, participate confidently and grow responsibly.",
//     },
//   ];

//   return (
//     <main className="faculties-page">

//       {/* HERO */}
//       <section className="faculties-hero">
//         <div className="faculties-container">

//           <div className="faculties-hero-content">

//             <div className="faculties-eyebrow">
//               <span />
//               FACULTY & EDUCATORS
//             </div>

//             <h1>
//               Great learning
//               <br />
//               starts with <em>great people.</em>
//             </h1>

//             <p>
//               A dedicated teaching community helping students
//               learn, explore, grow and move forward with confidence.
//             </p>

//           </div>

//           <div className="faculties-hero-side">
//             <span>TEACH</span>
//             <span>INSPIRE</span>
//             <span>GUIDE</span>
//             <span>EMPOWER</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="faculties-intro">
//         <div className="faculties-container">

//           <div className="faculties-intro-label">
//             OUR TEACHING COMMUNITY
//           </div>

//           <div className="faculties-intro-grid">

//             <h2>
//               Teachers who
//               <br />
//               help students <em>grow.</em>
//             </h2>

//             <div className="faculties-intro-copy">

//               <p>
//                 At Shifan Noor Global Academy, teachers play
//                 an important role in creating an environment
//                 where students can learn with curiosity,
//                 confidence and enthusiasm.
//               </p>

//               <p>
//                 Teaching extends beyond completing a syllabus.
//                 It is about helping students develop knowledge,
//                 skills, healthy attitudes, values and the
//                 confidence to face new challenges.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* FACULTY IMAGE / STATEMENT */}
//       <section className="faculties-feature">

//         <div className="faculties-container">

//           <div className="faculties-feature-grid">

//             <div className="faculties-feature-visual">

//               <div className="faculties-feature-mark">
//                 <span>SNGA</span>
//                 <small>
//                   LEARNING
//                   <br />
//                   COMMUNITY
//                 </small>
//               </div>

//             </div>

//             <div className="faculties-feature-content">

//               <div className="faculties-eyebrow dark">
//                 THE ROLE OF A TEACHER
//               </div>

//               <h2>
//                 More than
//                 <br />
//                 a <em>classroom.</em>
//               </h2>

//               <p>
//                 A teacher can influence how a student thinks,
//                 communicates, approaches challenges and sees
//                 their own potential.
//               </p>

//               <p>
//                 Our educators contribute to an environment
//                 where academic learning is supported by
//                 encouragement, discipline, participation
//                 and strong values.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* PRINCIPLES */}
//       <section className="faculties-principles">

//         <div className="faculties-container">

//           <div className="faculties-principles-header">

//             <div>

//               <div className="faculties-eyebrow dark">
//                 OUR APPROACH
//               </div>

//               <h2>
//                 Teaching that
//                 <br />
//                 <em>makes a difference.</em>
//               </h2>

//             </div>

//             <p>
//               The teaching community supports the school's
//               broader vision of developing knowledgeable,
//               skilled, confident and responsible students.
//             </p>

//           </div>

//           <div className="faculties-principles-grid">

//             {facultyPrinciples.map((item) => (
//               <article
//                 className="faculties-principle"
//                 key={item.number}
//               >

//                 <div className="faculties-principle-top">

//                   <span>
//                     {item.number}
//                   </span>

//                   <div className="faculties-principle-icon">
//                     {item.icon}
//                   </div>

//                 </div>

//                 <h3>
//                   {item.title}
//                 </h3>

//                 <p>
//                   {item.description}
//                 </p>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* FACULTY ROLES */}
//       <section className="faculties-roles">

//         <div className="faculties-container">

//           <div className="faculties-roles-grid">

//             <div className="faculties-roles-heading">

//               <div className="faculties-eyebrow">
//                 A SHARED RESPONSIBILITY
//               </div>

//               <h2>
//                 Every educator
//                 <br />
//                 has a role in <em>growth.</em>
//               </h2>

//             </div>

//             <div className="faculties-roles-list">

//               {facultyRoles.map((role) => (
//                 <article
//                   className="faculties-role"
//                   key={role.number}
//                 >

//                   <div className="faculties-role-number">
//                     {role.number}
//                   </div>

//                   <div className="faculties-role-content">

//                     <h3>
//                       {role.title}
//                     </h3>

//                     <p>
//                       {role.description}
//                     </p>

//                   </div>

//                 </article>
//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* STUDENT CONNECTION */}
//       <section className="faculties-connection">

//         <div className="faculties-container">

//           <div className="faculties-connection-inner">

//             <div className="faculties-eyebrow">
//               TEACHER & STUDENT
//             </div>

//             <h2>
//               When students feel
//               <br />
//               supported, they <em>learn.</em>
//             </h2>

//             <p>
//               A positive relationship between students and
//               educators creates the confidence to ask questions,
//               make mistakes, try again and discover new abilities.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* FACULTY DIRECTORY */}
//       <section className="faculties-directory">

//         <div className="faculties-container">

//           <div className="faculties-directory-header">

//             <div>

//               <div className="faculties-eyebrow dark">
//                 OUR PEOPLE
//               </div>

//               <h2>
//                 Meet the
//                 <br />
//                 <em>SNGA team.</em>
//               </h2>

//             </div>

//             <p>
//               This space can be connected to the school's
//               faculty directory as individual educator profiles
//               are added to the system.
//             </p>

//           </div>

//           <div className="faculties-directory-placeholder">

//             <span>FACULTY DIRECTORY</span>

//             <h3>
//               A growing community
//               <br />
//               of educators.
//             </h3>

//             <p>
//               Faculty profiles, departments and educator
//               information can be managed through the
//               administration system.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="faculties-cta">

//         <div className="faculties-container">

//           <div className="faculties-cta-content">

//             <div className="faculties-eyebrow dark">
//               EXPLORE SNGA
//             </div>

//             <h2>
//               Discover the people
//               <br />
//               behind the <em>learning.</em>
//             </h2>

//             <p>
//               Explore our academic approach, campus and
//               learning environment.
//             </p>

//             <div className="faculties-actions">

//               <Link
//                 to="/academics"
//                 className="faculties-button"
//               >
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/principal-message"
//                 className="faculties-secondary"
//               >
//                 Principal's Message
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Faculties;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChalkboardTeacher,
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaSchool,
  FaPlay,
  FaQuoteLeft,
  FaHeart,
  FaHands,
  FaChild,
  FaStar,
  FaAward,
  FaBookOpen,
  FaUserGraduate,
  FaUserTie,
  FaSmile,
  FaTree,
} from "react-icons/fa";
import "./Faculties.css";

import heroBg from "../../assets/school.JPG";
import heroCircle from "../../assets/about.png";
import ctaBg from "../../assets/engaging.jpg";
import faculty from "../../assets/values.jpg";
import teach from "../../assets/teaching.jpg";
import classroom from "../../assets/classroom.jpg";
import community from "../../assets/about-school.jpg";

// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  faculty: faculty,
  teaching: teach,
  classroom: classroom,
  community: community,
};

const Faculties = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featureRef = useRef(null);
  const principlesRef = useRef(null);
  const rolesRef = useRef(null);
  const connectionRef = useRef(null);
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
      { ref: heroRef, className: "sf-hero--visible" },
      { ref: introRef, className: "sf-intro--visible" },
      { ref: featureRef, className: "sf-feature--visible" },
      { ref: principlesRef, className: "sf-principles--visible" },
      { ref: rolesRef, className: "sf-roles--visible" },
      { ref: connectionRef, className: "sf-connection--visible" },
      { ref: directoryRef, className: "sf-directory--visible" },
      { ref: ctaRef, className: "sf-cta--visible" },
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

  const facultyPrinciples = [
    {
      number: "01",
      icon: <FaChalkboardTeacher />,
      title: "Teaching with Purpose",
      description:
        "Our educators create meaningful learning experiences that help students understand concepts and develop a genuine interest in learning.",
      image: IMAGES.teaching,
      color: "#4A90D9",
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Encouraging Curiosity",
      description:
        "Teachers encourage students to ask questions, explore ideas and become active participants in their own learning.",
      image: IMAGES.classroom,
      color: "#F39C12",
    },
    {
      number: "03",
      icon: <FaUsers />,
      title: "Understanding Every Student",
      description:
        "Recognising that every child is different, our learning environment encourages individual attention and supportive relationships.",
      image: IMAGES.community,
      color: "#27AE60",
    },
    {
      number: "04",
      icon: <FaGraduationCap />,
      title: "Growing Together",
      description:
        "Educators and students form a learning community where knowledge, skills, confidence and values develop together.",
      image: IMAGES.faculty,
      color: "#8E44AD",
    },
  ];

  const facultyRoles = [
    {
      number: "01",
      title: "Academic Educators",
      description:
        "Supporting students in building strong subject knowledge, understanding concepts and developing effective learning habits.",
      icon: <FaBookOpen />,
      color: "#4A90D9",
    },
    {
      number: "02",
      title: "Activity & Co-Curricular Mentors",
      description:
        "Encouraging students to discover interests and develop creativity, communication, teamwork and confidence beyond academics.",
      icon: <FaStar />,
      color: "#F39C12",
    },
    {
      number: "03",
      title: "Student Support",
      description:
        "Creating a positive school environment where students can seek guidance, participate confidently and grow responsibly.",
      icon: <FaHeart />,
      color: "#E74C3C",
    },
  ];

  const stats = [
    { number: "25+", label: "Experienced Teachers", icon: <FaUserTie /> },
    { number: "1:15", label: "Student-Teacher Ratio", icon: <FaUsers /> },
    { number: "10+", label: "Years of Excellence", icon: <FaAward /> },
    { number: "100%", label: "Qualified Educators", icon: <FaGraduationCap /> },
  ];

  const values = [
    { icon: <FaHeart />, label: "Empathy" },
    { icon: <FaHands />, label: "Support" },
    { icon: <FaChild />, label: "Growth" },
    { icon: <FaSmile />, label: "Encouragement" },
  ];

  return (
    <main className="sf-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sf-topbar">
        <div className="sf-container">
          <div className="sf-topbar__content">
            <span className="sf-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sf-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sf-hero">
        <div className="sf-hero__bg-wrapper">
          <div 
            className="sf-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sf-hero__bg-overlay" />
          <div className="sf-hero__bg-gradient" />
        </div>

        <div className="sf-container">
          <div className="sf-hero__inner">
            <div className="sf-hero__content">
              <div className="sf-hero__badge">
                <FaChalkboardTeacher />
                FACULTY & EDUCATORS
              </div>

              <h1 className="sf-hero__title">
                Great Learning
                <br />
                <span className="sf-hero__highlight">Starts with Great People.</span>
              </h1>

              <p className="sf-hero__desc">
                A dedicated teaching community helping students
                learn, explore, grow and move forward with confidence.
              </p>


              {/* <div className="sf-hero__actions">
                <a href="#sf-principles" className="sf-hero__btn sf-hero__btn--primary">
                  <span>Meet Our Team</span>
                  <FaArrowRight />
                </a>
                <button className="sf-hero__btn sf-hero__btn--secondary">
                  <FaPlay />
                  <span>Watch Video</span>
                </button>
              </div> */}
            </div>

            <div className="sf-hero__image-wrapper">
              <div className="sf-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA Faculty" 
                  className="sf-hero__image-img"
                />
                <div className="sf-hero__image-ring" />
                <div className="sf-hero__image-badge">
                  <span>Since 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sf-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sf-intro">
        <div className="sf-container">
          <div className="sf-intro__inner">
            <div className="sf-intro__header">
              <span className="sf-intro__label">OUR TEACHING COMMUNITY</span>
              <h2 className="sf-intro__title">
                Teachers Who
                <span className="sf-intro__highlight">Help Students Grow.</span>
              </h2>
            </div>

            <div className="sf-intro__content">
              <p>
                At Shifan Noor Global Academy, teachers play an important role
                in creating an environment where students can learn with
                curiosity, confidence and enthusiasm.
              </p>
              <p>
                Teaching extends beyond completing a syllabus. It is about
                helping students develop knowledge, skills, healthy attitudes,
                values and the confidence to face new challenges.
              </p>
            </div>

            <div className="sf-intro__values">
              {values.map((item, index) => (
                <div key={index} className="sf-intro__value">
                  <span className="sf-intro__value-icon">{item.icon}</span>
                  <span className="sf-intro__value-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FEATURE SECTION
      ================================================= */}
      <section ref={featureRef} className="sf-feature">
        <div className="sf-feature__bg" />

        <div className="sf-container">
          <div className="sf-feature__inner">
            <div className="sf-feature__visual">
              <div className="sf-feature__mark">
                <span>SNGA</span>
                <small>
                  LEARNING
                  <br />
                  COMMUNITY
                </small>
              </div>
            </div>

            <div className="sf-feature__content">
              <span className="sf-feature__label">THE ROLE OF A TEACHER</span>
              <h2 className="sf-feature__title">
                More Than
                <br />
                <span className="sf-feature__highlight">a Classroom.</span>
              </h2>
              <p className="sf-feature__desc">
                A teacher can influence how a student thinks, communicates,
                approaches challenges and sees their own potential.
              </p>
              <p className="sf-feature__desc">
                Our educators contribute to an environment where academic
                learning is supported by encouragement, discipline,
                participation and strong values.
              </p>
              <div className="sf-feature__quote">
                <FaQuoteLeft />
                <span>"Teaching is not just a profession, it's a passion."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          PRINCIPLES - Image Overlay Cards
      ================================================= */}
      <section ref={principlesRef} className="sf-principles" id="sf-principles">
        <div className="sf-container">
          <div className="sf-principles__header">
            <div>
              <span className="sf-principles__label">OUR APPROACH</span>
              <h2 className="sf-principles__title">
                Teaching That
                <br />
                <span className="sf-principles__highlight">Makes a Difference.</span>
              </h2>
            </div>
            <p className="sf-principles__desc">
              The teaching community supports the school's broader vision of
              developing knowledgeable, skilled, confident and responsible students.
            </p>
          </div>

          <div className="sf-principles__grid">
            {facultyPrinciples.map((item) => (
              <div key={item.number} className="sf-principles__card">
                <div className="sf-principles__card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="sf-principles__card-overlay">
                    <div className="sf-principles__card-content">
                      <div className="sf-principles__card-top">
                        <span className="sf-principles__card-number">
                          {item.number}
                        </span>
                        <div className="sf-principles__card-icon" style={{ color: item.color }}>
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="sf-principles__card-title">{item.title}</h3>
                      <p className="sf-principles__card-desc">{item.description}</p>
                      <span className="sf-principles__card-arrow">
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
          ROLES SECTION
      ================================================= */}
      <section ref={rolesRef} className="sf-roles">
        <div className="sf-roles__bg" />

        <div className="sf-container">
          <div className="sf-roles__inner">
            <div className="sf-roles__content">
              <span className="sf-roles__label">A SHARED RESPONSIBILITY</span>
              <h2 className="sf-roles__title">
                Every Educator
                <br />
                <span className="sf-roles__highlight">Has a Role in Growth.</span>
              </h2>
            </div>

            <div className="sf-roles__list">
              {facultyRoles.map((role) => (
                <div key={role.number} className="sf-roles__item">
                  <div className="sf-roles__item-number">{role.number}</div>
                  <div className="sf-roles__item-icon" style={{ color: role.color }}>
                    {role.icon}
                  </div>
                  <div className="sf-roles__item-content">
                    <h3 className="sf-roles__item-title">{role.title}</h3>
                    <p className="sf-roles__item-desc">{role.description}</p>
                  </div>
                  <div className="sf-roles__item-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CONNECTION SECTION
      ================================================= */}
      <section ref={connectionRef} className="sf-connection">
        <div className="sf-container">
          <div className="sf-connection__inner">
            <span className="sf-connection__label">TEACHER & STUDENT</span>
            <h2 className="sf-connection__title">
              When Students Feel
              <br />
              <span className="sf-connection__highlight">Supported, They Learn.</span>
            </h2>
            <p className="sf-connection__desc">
              A positive relationship between students and educators creates
              the confidence to ask questions, make mistakes, try again and
              discover new abilities.
            </p>

            <div className="sf-connection__quotes">
              <div className="sf-connection__quote">
                <FaQuoteLeft />
                <p>"A teacher affects eternity; they can never tell where their influence stops."</p>
              </div>
              <div className="sf-connection__quote">
                <FaQuoteLeft />
                <p>"The art of teaching is the art of assisting discovery."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          DIRECTORY SECTION
      ================================================= */}
      <section ref={directoryRef} className="sf-directory">
        <div className="sf-directory__bg" />

        <div className="sf-container">
          <div className="sf-directory__inner">
            <div className="sf-directory__header">
              <div>
                <span className="sf-directory__label">OUR PEOPLE</span>
                <h2 className="sf-directory__title">
                  Meet the
                  <br />
                  <span className="sf-directory__highlight">SNGA Team.</span>
                </h2>
              </div>
              <p className="sf-directory__desc">
                This space can be connected to the school's faculty directory
                as individual educator profiles are added to the system.
              </p>
            </div>

            <div className="sf-directory__placeholder">
              <div className="sf-directory__placeholder-icon">
                <FaUserTie />
              </div>
              <span className="sf-directory__placeholder-label">FACULTY DIRECTORY</span>
              <h3 className="sf-directory__placeholder-title">
                A Growing Community
                <br />
                of Educators.
              </h3>
              <p className="sf-directory__placeholder-desc">
                Faculty profiles, departments and educator information can be
                managed through the administration system.
              </p>
              <div className="sf-directory__placeholder-grid">
                <div className="sf-directory__placeholder-item">
                  <FaUserGraduate />
                  <span>25+ Teachers</span>
                </div>
                <div className="sf-directory__placeholder-item">
                  <FaBookOpen />
                  <span>10+ Subjects</span>
                </div>
                <div className="sf-directory__placeholder-item">
                  <FaStar />
                  <span>100% Qualified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="sf-cta">
        <div className="sf-cta__bg-wrapper">
          <div 
            className="sf-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sf-cta__bg-overlay" />
          <div className="sf-cta__bg-gradient" />
        </div>

        <div className="sf-container">
          <div className="sf-cta__content">
            <div className="sf-cta__badge">
              <FaGraduationCap />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sf-cta__title">
              Discover the People
              <br />
              <span className="sf-cta__highlight">Behind the Learning.</span>
            </h2>

            <p className="sf-cta__desc">
              Explore our academic approach, campus and learning environment.
            </p>

            <div className="sf-cta__actions">
              <Link to="/academics" className="sf-cta__btn sf-cta__btn--primary">
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>
              <Link to="/principal-message" className="sf-cta__btn sf-cta__btn--secondary">
                <span>Principal's Message</span>
              </Link>
            </div>

            <div className="sf-cta__footer">
              <span>
                <FaChalkboardTeacher /> Dedicated Faculty
              </span>
              <span>
                <FaHeart /> Caring Environment
              </span>
              <span>
                <FaGraduationCap /> Holistic Education
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faculties;