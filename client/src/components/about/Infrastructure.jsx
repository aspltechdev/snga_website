// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaBookOpen,
//   FaFlask,
//   FaLaptop,
//   FaChalkboardTeacher,
//   FaBuilding,
//   FaUsers,
// } from "react-icons/fa";

// import "./Infrastructure.css";

// const Infrastructure = () => {
//   const facilities = [
//     {
//       number: "01",
//       icon: <FaChalkboardTeacher />,
//       title: "Digital Classrooms",
//       description:
//         "Every classroom is supported by digital learning facilities that encourage interactive teaching and help students engage with concepts in meaningful ways.",
//     },
//     {
//       number: "02",
//       icon: <FaBookOpen />,
//       title: "Library",
//       description:
//         "A spacious library with more than 3,500 books, along with newspapers and magazines, provides students with opportunities for reading, exploration and independent study.",
//     },
//     {
//       number: "03",
//       icon: <FaFlask />,
//       title: "Science Laboratories",
//       description:
//         "Dedicated Chemistry, Physics and Biology laboratories provide students with spaces to explore scientific concepts through practical learning.",
//     },
//     {
//       number: "04",
//       icon: <FaLaptop />,
//       title: "Computer Laboratory",
//       description:
//         "A dedicated computer learning environment supports students in developing digital knowledge and essential technology skills.",
//     },
//     {
//       number: "05",
//       icon: <FaBuilding />,
//       title: "Multipurpose Hall",
//       description:
//         "A multipurpose hall with a capacity of around 200 provides space for school activities, gatherings, learning experiences and events.",
//     },
//     {
//       number: "06",
//       icon: <FaUsers />,
//       title: "Learning Environment",
//       description:
//         "Spacious classrooms, tiled corridors, good ventilation and a calm green campus create an environment designed around comfortable learning.",
//     },
//   ];

//   const campusFeatures = [
//     {
//       number: "13.5",
//       label: "ACRES",
//       text: "Spacious green campus",
//     },
//     {
//       number: "500",
//       label: "SQ. FT.",
//       text: "Approximate classroom size",
//     },
//     {
//       number: "3,500+",
//       label: "BOOKS",
//       text: "Library collection",
//     },
//     {
//       number: "200",
//       label: "SEATS",
//       text: "Multipurpose hall capacity",
//     },
//   ];

//   return (
//     <main className="infrastructure-page">

//       {/* HERO */}
//       <section className="infrastructure-hero">
//         <div className="infrastructure-container">

//           <div className="infrastructure-hero-content">

//             <div className="infrastructure-eyebrow">
//               <span />
//               INFRASTRUCTURE
//             </div>

//             <h1>
//               Spaces designed
//               <br />
//               for <em>possibility.</em>
//             </h1>

//             <p>
//               A learning environment where classrooms,
//               technology, laboratories and open spaces
//               come together to support every student's journey.
//             </p>

//           </div>

//           <div className="infrastructure-hero-side">
//             <span>LEARN</span>
//             <span>EXPLORE</span>
//             <span>CREATE</span>
//             <span>GROW</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="infrastructure-intro">
//         <div className="infrastructure-container">

//           <div className="infrastructure-intro-label">
//             THE SNGA CAMPUS
//           </div>

//           <div className="infrastructure-intro-grid">

//             <h2>
//               A campus built
//               <br />
//               around <em>learning.</em>
//             </h2>

//             <div className="infrastructure-intro-copy">

//               <p>
//                 Shifan Noor Global Academy is situated on
//                 a 13.5-acre campus at Venkulam on the
//                 Ramanathapuram–Devipattinam main road.
//               </p>

//               <p>
//                 Set within a calm, serene and lush green
//                 environment, the campus provides students
//                 with a spacious setting away from the dust
//                 and noise of busy surroundings.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* CAMPUS STATS */}
//       <section className="infrastructure-stats">
//         <div className="infrastructure-container">

//           <div className="infrastructure-stats-header">

//             <div className="infrastructure-eyebrow dark">
//               AT A GLANCE
//             </div>

//             <h2>
//               Built to make
//               <br />
//               learning <em>comfortable.</em>
//             </h2>

//           </div>

//           <div className="infrastructure-stat-grid">

//             {campusFeatures.map((item) => (
//               <div
//                 className="infrastructure-stat"
//                 key={item.label}
//               >

//                 <div className="infrastructure-stat-number">
//                   {item.number}
//                 </div>

//                 <div className="infrastructure-stat-label">
//                   {item.label}
//                 </div>

//                 <p>{item.text}</p>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* CLASSROOMS */}
//       <section className="infrastructure-classrooms">

//         <div className="infrastructure-container">

//           <div className="infrastructure-classrooms-grid">

//             <div className="infrastructure-classrooms-content">

//               <div className="infrastructure-eyebrow dark">
//                 THE CLASSROOM
//               </div>

//               <h2>
//                 Where everyday
//                 <br />
//                 learning <em>happens.</em>
//               </h2>

//               <p>
//                 Each classroom is designed with approximately
//                 500 square feet of space and provides good
//                 lighting, ventilation and essential learning
//                 facilities.
//               </p>

//               <p>
//                 Digital classroom facilities further support
//                 interactive teaching and give educators
//                 opportunities to bring concepts to life.
//               </p>

//               <Link
//                 to="/academics"
//                 className="infrastructure-link"
//               >
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//             <div className="infrastructure-classrooms-visual">

//               <div className="infrastructure-visual-number">
//                 500
//               </div>

//               <div className="infrastructure-visual-unit">
//                 SQ. FT.
//               </div>

//               <p>
//                 Approximate classroom
//                 space designed for
//                 comfortable learning.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* FACILITIES */}
//       <section className="infrastructure-facilities">

//         <div className="infrastructure-container">

//           <div className="infrastructure-facilities-header">

//             <div>

//               <div className="infrastructure-eyebrow dark">
//                 LEARNING FACILITIES
//               </div>

//               <h2>
//                 More than
//                 <br />
//                 <em>four walls.</em>
//               </h2>

//             </div>

//             <p>
//               Different learning spaces allow students
//               to explore subjects, develop skills and
//               experience learning beyond the traditional
//               classroom.
//             </p>

//           </div>

//           <div className="infrastructure-facility-grid">

//             {facilities.map((facility) => (
//               <article
//                 className="infrastructure-facility"
//                 key={facility.number}
//               >

//                 <div className="infrastructure-facility-top">

//                   <span>
//                     {facility.number}
//                   </span>

//                   <div className="infrastructure-facility-icon">
//                     {facility.icon}
//                   </div>

//                 </div>

//                 <h3>
//                   {facility.title}
//                 </h3>

//                 <p>
//                   {facility.description}
//                 </p>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* LEARNING BEYOND CLASSROOM */}
//       <section className="infrastructure-beyond">

//         <div className="infrastructure-container">

//           <div className="infrastructure-beyond-grid">

//             <div className="infrastructure-beyond-heading">

//               <div className="infrastructure-eyebrow">
//                 BEYOND THE CLASSROOM
//               </div>

//               <h2>
//                 Learning needs
//                 <br />
//                 room to <em>move.</em>
//               </h2>

//             </div>

//             <div className="infrastructure-beyond-copy">

//               <p>
//                 The SNGA campus is designed to support
//                 different dimensions of student life.
//               </p>

//               <p>
//                 From science experiments and computer
//                 learning to reading, school gatherings
//                 and collaborative activities, students
//                 have access to spaces that encourage
//                 exploration and participation.
//               </p>

//               <Link
//                 to="/campus"
//                 className="infrastructure-link light"
//               >
//                 <span>Explore Our Campus</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ENVIRONMENT */}
//       <section className="infrastructure-environment">

//         <div className="infrastructure-container">

//           <div className="infrastructure-environment-header">

//             <div className="infrastructure-eyebrow dark">
//               THE ENVIRONMENT
//             </div>

//             <h2>
//               A calm place to
//               <br />
//               <em>think, learn and grow.</em>
//             </h2>

//             <p>
//               The physical environment plays an important
//               role in creating a positive learning experience.
//             </p>

//           </div>

//           <div className="infrastructure-environment-list">

//             <div className="infrastructure-environment-item">
//               <span>01</span>
//               <h3>Light & Ventilation</h3>
//               <p>
//                 Classrooms designed with attention to
//                 natural light and ventilation.
//               </p>
//             </div>

//             <div className="infrastructure-environment-item">
//               <span>02</span>
//               <h3>Green Surroundings</h3>
//               <p>
//                 A spacious, calm and lush green campus
//                 supporting a peaceful learning atmosphere.
//               </p>
//             </div>

//             <div className="infrastructure-environment-item">
//               <span>03</span>
//               <h3>Thoughtful Spaces</h3>
//               <p>
//                 Learning spaces planned to support
//                 academics, interaction and school life.
//               </p>
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="infrastructure-cta">

//         <div className="infrastructure-container">

//           <div className="infrastructure-cta-content">

//             <div className="infrastructure-eyebrow dark">
//               DISCOVER SNGA
//             </div>

//             <h2>
//               See where
//               <br />
//               <em>learning happens.</em>
//             </h2>

//             <p>
//               Explore our campus, facilities and the
//               experiences that make everyday school life
//               meaningful.
//             </p>

//             <div className="infrastructure-actions">

//               <Link
//                 to="/campus"
//                 className="infrastructure-button"
//               >
//                 <span>Explore Campus</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/gallery"
//                 className="infrastructure-secondary"
//               >
//                 View Gallery
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Infrastructure;



import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaFlask,
  FaLaptop,
  FaChalkboardTeacher,
  FaBuilding,
  FaUsers,
  FaSchool,
  FaPlay,
  FaQuoteLeft,
  FaTree,
  FaStar,
  FaAward,
  FaRocket,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import "./Infrastructure.css";

import heroBg from "../../assets/school.JPG";
import heroCircle from "../../assets/about.png";
import ctaBg from "../../assets/engaging.jpg";
import classroom from "../../assets/classroom.jpg";
import library from "../../assets/library.jpg";
import sciencelab from "../../assets/sciencelab.jpg";
import computerlab from "../../assets/ComputerLab.jpg";
import campus from "../../assets/camp.jpg";
import hall from "../../assets/hall.jpg";
// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  classroom: classroom,
  library: library,
  science: sciencelab,
  computer: computerlab,
  hall: hall,
  campus: campus,
};

const Infrastructure = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const statsRef = useRef(null);
  const classroomsRef = useRef(null);
  const facilitiesRef = useRef(null);
  const beyondRef = useRef(null);
  const environmentRef = useRef(null);
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
      { ref: heroRef, className: "si-hero--visible" },
      { ref: introRef, className: "si-intro--visible" },
      { ref: statsRef, className: "si-stats--visible" },
      { ref: classroomsRef, className: "si-classrooms--visible" },
      { ref: facilitiesRef, className: "si-facilities--visible" },
      { ref: beyondRef, className: "si-beyond--visible" },
      { ref: environmentRef, className: "si-environment--visible" },
      { ref: ctaRef, className: "si-cta--visible" },
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

  const facilities = [
    {
      number: "01",
      icon: <FaChalkboardTeacher />,
      title: "Digital Classrooms",
      description:
        "Every classroom is supported by digital learning facilities that encourage interactive teaching and help students engage with concepts in meaningful ways.",
      image: IMAGES.classroom,
      color: "#4A90D9",
    },
    {
      number: "02",
      icon: <FaBookOpen />,
      title: "Library",
      description:
        "A spacious library with more than 3,500 books, along with newspapers and magazines, provides students with opportunities for reading, exploration and independent study.",
      image: IMAGES.library,
      color: "#27AE60",
    },
    {
      number: "03",
      icon: <FaFlask />,
      title: "Science Laboratories",
      description:
        "Dedicated Chemistry, Physics and Biology laboratories provide students with spaces to explore scientific concepts through practical learning.",
      image: IMAGES.science,
      color: "#F39C12",
    },
    {
      number: "04",
      icon: <FaLaptop />,
      title: "Computer Laboratory",
      description:
        "A dedicated computer learning environment supports students in developing digital knowledge and essential technology skills.",
      image: IMAGES.computer,
      color: "#8E44AD",
    },
    {
      number: "05",
      icon: <FaBuilding />,
      title: "Multipurpose Hall",
      description:
        "A multipurpose hall with a capacity of around 200 provides space for school activities, gatherings, learning experiences and events.",
      image: IMAGES.hall,
      color: "#E67E22",
    },
    {
      number: "06",
      icon: <FaUsers />,
      title: "Learning Environment",
      description:
        "Spacious classrooms, tiled corridors, good ventilation and a calm green campus create an environment designed around comfortable learning.",
      image: IMAGES.campus,
      color: "#2ECC71",
    },
  ];

  const campusFeatures = [
    {
      number: "13.5",
      label: "ACRES",
      text: "Spacious green campus",
      icon: <FaTree />,
      color: "#27AE60",
    },
    {
      number: "500",
      label: "SQ. FT.",
      text: "Approximate classroom size",
      icon: <FaBuilding />,
      color: "#4A90D9",
    },
    {
      number: "3,500+",
      label: "BOOKS",
      text: "Library collection",
      icon: <FaBookOpen />,
      color: "#F39C12",
    },
    {
      number: "200",
      label: "SEATS",
      text: "Multipurpose hall capacity",
      icon: <FaUsers />,
      color: "#8E44AD",
    },
  ];

  const stats = [
    { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
    { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
    { number: "500", label: "Sq. Ft. Classrooms", icon: <FaBuilding /> },
    { number: "200", label: "Hall Capacity", icon: <FaUsers /> },
  ];

  return (
    <main className="si-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="si-topbar">
        <div className="si-container">
          <div className="si-topbar__content">
            <span className="si-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="si-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="si-hero">
        <div className="si-hero__bg-wrapper">
          <div 
            className="si-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="si-hero__bg-overlay" />
          <div className="si-hero__bg-gradient" />
        </div>

        <div className="si-container">
          <div className="si-hero__inner">
            <div className="si-hero__content">
              <div className="si-hero__badge">
                <FaBuilding />
                INFRASTRUCTURE
              </div>

              <h1 className="si-hero__title">
                Spaces Designed
                <br />
                <span className="si-hero__highlight">for Possibility.</span>
              </h1>

              <p className="si-hero__desc">
                A learning environment where classrooms, technology,
                laboratories and open spaces come together to support
                every student's journey.
              </p>

              {/* <div className="si-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="si-hero__stat">
                    <span className="si-hero__stat-icon">{stat.icon}</span>
                    <span className="si-hero__stat-number">{stat.number}</span>
                    <span className="si-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="si-hero__image-wrapper">
              <div className="si-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA Campus" 
                  className="si-hero__image-img"
                />
                <div className="si-hero__image-ring" />
                {/* <div className="si-hero__image-badge">
                  <span>Since 2015</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="si-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="si-intro">
        <div className="si-container">
          <div className="si-intro__inner">
            <div className="si-intro__header">
              <span className="si-intro__label">THE SNGA CAMPUS</span>
              <h2 className="si-intro__title">
                A Campus Built
                <span className="si-intro__highlight">Around Learning.</span>
              </h2>
            </div>

            <div className="si-intro__content">
              <p>
                Shifan Noor Global Academy is situated on a 13.5-acre campus
                at Venkulam on the Ramanathapuram–Devipattinam main road.
              </p>
              <p>
                Set within a calm, serene and lush green environment, the campus
                provides students with a spacious setting away from the dust and
                noise of busy surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CAMPUS STATS
      ================================================= */}
      <section ref={statsRef} className="si-stats">
        <div className="si-stats__bg" />

        <div className="si-container">
          <div className="si-stats__header">
            <span className="si-stats__label">AT A GLANCE</span>
            <h2 className="si-stats__title">
              Built to Make
              <br />
              <span className="si-stats__highlight">Learning Comfortable.</span>
            </h2>
          </div>

          <div className="si-stats__grid">
            {campusFeatures.map((item) => (
              <div key={item.label} className="si-stats__card">
                <div className="si-stats__card-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="si-stats__card-number">{item.number}</div>
                <div className="si-stats__card-label">{item.label}</div>
                <p className="si-stats__card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          CLASSROOMS SECTION
      ================================================= */}
      <section ref={classroomsRef} className="si-classrooms">
        <div className="si-container">
          <div className="si-classrooms__inner">
            <div className="si-classrooms__content">
              <span className="si-classrooms__label">THE CLASSROOM</span>
              <h2 className="si-classrooms__title">
                Where Everyday
                <br />
                <span className="si-classrooms__highlight">Learning Happens.</span>
              </h2>
              <p className="si-classrooms__desc">
                Each classroom is designed with approximately 500 square feet
                of space and provides good lighting, ventilation and essential
                learning facilities.
              </p>
              <p className="si-classrooms__desc">
                Digital classroom facilities further support interactive teaching
                and give educators opportunities to bring concepts to life.
              </p>
              <Link to="/academics" className="si-classrooms__link">
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="si-classrooms__visual">
              <div className="si-classrooms__visual-circle">
                <span className="si-classrooms__visual-number">500</span>
                <span className="si-classrooms__visual-unit">SQ. FT.</span>
                <p className="si-classrooms__visual-desc">
                  Approximate classroom space designed for comfortable learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FACILITIES - Image Overlay Cards
      ================================================= */}
      <section ref={facilitiesRef} className="si-facilities">
        <div className="si-container">
          <div className="si-facilities__header">
            <div>
              <span className="si-facilities__label">LEARNING FACILITIES</span>
              <h2 className="si-facilities__title">
                More Than
                <br />
                <span className="si-facilities__highlight">Four Walls.</span>
              </h2>
            </div>
            <p className="si-facilities__desc">
              Different learning spaces allow students to explore subjects,
              develop skills and experience learning beyond the traditional
              classroom.
            </p>
          </div>

          <div className="si-facilities__grid">
            {facilities.map((facility) => (
              <div key={facility.number} className="si-facilities__card">
                <div className="si-facilities__card-image">
                  <img src={facility.image} alt={facility.title} loading="lazy" />
                  <div className="si-facilities__card-overlay">
                    <div className="si-facilities__card-content">
                      <div className="si-facilities__card-top">
                        <span className="si-facilities__card-number">
                          {facility.number}
                        </span>
                        <div className="si-facilities__card-icon" style={{ color: facility.color }}>
                          {facility.icon}
                        </div>
                      </div>
                      <h3 className="si-facilities__card-title">{facility.title}</h3>
                      <p className="si-facilities__card-desc">{facility.description}</p>
                      <span className="si-facilities__card-arrow">
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
          BEYOND THE CLASSROOM
      ================================================= */}
      <section ref={beyondRef} className="si-beyond">
        <div className="si-beyond__bg-wrapper">
          <div 
            className="si-beyond__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.campus})` }}
          />
          <div className="si-beyond__bg-overlay" />
        </div>

        <div className="si-container">
          <div className="si-beyond__inner">
            <div className="si-beyond__content">
              <span className="si-beyond__label">BEYOND THE CLASSROOM</span>
              <h2 className="si-beyond__title">
                Learning Needs
                <br />
                <span className="si-beyond__highlight">Room to Move.</span>
              </h2>
            </div>

            <div className="si-beyond__right">
              <div className="si-beyond__quote">
                <FaQuoteLeft />
              </div>
              <p className="si-beyond__desc">
                The SNGA campus is designed to support different dimensions of
                student life.
              </p>
              <p className="si-beyond__desc">
                From science experiments and computer learning to reading,
                school gatherings and collaborative activities, students have
                access to spaces that encourage exploration and participation.
              </p>
              <Link to="/campus" className="si-beyond__link">
                <span>Explore Our Campus</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ENVIRONMENT SECTION
      ================================================= */}
      <section ref={environmentRef} className="si-environment">
        <div className="si-environment__bg" />

        <div className="si-container">
          <div className="si-environment__header">
            <span className="si-environment__label">THE ENVIRONMENT</span>
            <h2 className="si-environment__title">
              A Calm Place to
              <br />
              <span className="si-environment__highlight">Think, Learn and Grow.</span>
            </h2>
            <p className="si-environment__desc">
              The physical environment plays an important role in creating a
              positive learning experience.
            </p>
          </div>

          <div className="si-environment__grid">
            <div className="si-environment__card">
              <span className="si-environment__card-number">01</span>
              <h3 className="si-environment__card-title">Light & Ventilation</h3>
              <p className="si-environment__card-desc">
                Classrooms designed with attention to natural light and
                ventilation.
              </p>
              <div className="si-environment__card-icon">
                <FaClock />
              </div>
            </div>

            <div className="si-environment__card">
              <span className="si-environment__card-number">02</span>
              <h3 className="si-environment__card-title">Green Surroundings</h3>
              <p className="si-environment__card-desc">
                A spacious, calm and lush green campus supporting a peaceful
                learning atmosphere.
              </p>
              <div className="si-environment__card-icon">
                <FaTree />
              </div>
            </div>

            <div className="si-environment__card">
              <span className="si-environment__card-number">03</span>
              <h3 className="si-environment__card-title">Thoughtful Spaces</h3>
              <p className="si-environment__card-desc">
                Learning spaces planned to support academics, interaction and
                school life.
              </p>
              <div className="si-environment__card-icon">
                <FaShieldAlt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="si-cta">
        <div className="si-cta__bg-wrapper">
          <div 
            className="si-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="si-cta__bg-overlay" />
          <div className="si-cta__bg-gradient" />
        </div>

        <div className="si-container">
          <div className="si-cta__content">
            <div className="si-cta__badge">
              <FaSchool />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="si-cta__title">
              See Where
              <br />
              <span className="si-cta__highlight">Learning Happens.</span>
            </h2>

            <p className="si-cta__desc">
              Explore our campus, facilities and the experiences that make
              everyday school life meaningful.
            </p>

            <div className="si-cta__actions">
              <Link to="/campus" className="si-cta__btn si-cta__btn--primary">
                <span>Explore Campus</span>
                <FaArrowRight />
              </Link>
              <Link to="/gallery" className="si-cta__btn si-cta__btn--secondary">
                <span>View Gallery</span>
              </Link>
            </div>

            <div className="si-cta__footer">
              <span>
                <FaBuilding /> Modern Facilities
              </span>
              <span>
                <FaTree /> Green Campus
              </span>
              <span>
                <FaBookOpen /> 3,500+ Books
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Infrastructure;