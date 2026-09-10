
// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaBookOpen,
//   FaFlask,
//   FaLaptop,
//   FaChalkboardTeacher,
//   FaBuilding,
//   FaUsers,
//   FaSchool,
//   FaPlay,
//   FaQuoteLeft,
//   FaTree,
//   FaStar,
//   FaAward,
//   FaRocket,
//   FaShieldAlt,
//   FaClock,
// } from "react-icons/fa";
// import "./Infrastructure.css";

// import heroBg from "../../assets/school.JPG";
// import heroCircle from "../../assets/about.png";
// import ctaBg from "../../assets/engaging.jpg";
// import classroom from "../../assets/classroom.jpg";
// import library from "../../assets/library.jpg";
// import sciencelab from "../../assets/sciencelab.jpg";
// import computerlab from "../../assets/ComputerLab.jpg";
// import campus from "../../assets/camp.jpg";
// import hall from "../../assets/hall.jpg";
// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   classroom: classroom,
//   library: library,
//   science: sciencelab,
//   computer: computerlab,
//   hall: hall,
//   campus: campus,
// };

// const Infrastructure = () => {
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const statsRef = useRef(null);
//   const classroomsRef = useRef(null);
//   const facilitiesRef = useRef(null);
//   const beyondRef = useRef(null);
//   const environmentRef = useRef(null);
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
//       { ref: heroRef, className: "si-hero--visible" },
//       { ref: introRef, className: "si-intro--visible" },
//       { ref: statsRef, className: "si-stats--visible" },
//       { ref: classroomsRef, className: "si-classrooms--visible" },
//       { ref: facilitiesRef, className: "si-facilities--visible" },
//       { ref: beyondRef, className: "si-beyond--visible" },
//       { ref: environmentRef, className: "si-environment--visible" },
//       { ref: ctaRef, className: "si-cta--visible" },
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

//   const facilities = [
//     {
//       number: "01",
//       icon: <FaChalkboardTeacher />,
//       title: "Digital Classrooms",
//       description:
//         "Every classroom is supported by digital learning facilities that encourage interactive teaching and help students engage with concepts in meaningful ways.",
//       image: IMAGES.classroom,
//       color: "#4A90D9",
//     },
//     {
//       number: "02",
//       icon: <FaBookOpen />,
//       title: "Library",
//       description:
//         "A spacious library with more than 3,500 books, along with newspapers and magazines, provides students with opportunities for reading, exploration and independent study.",
//       image: IMAGES.library,
//       color: "#27AE60",
//     },
//     {
//       number: "03",
//       icon: <FaFlask />,
//       title: "Science Laboratories",
//       description:
//         "Dedicated Chemistry, Physics and Biology laboratories provide students with spaces to explore scientific concepts through practical learning.",
//       image: IMAGES.science,
//       color: "#F39C12",
//     },
//     {
//       number: "04",
//       icon: <FaLaptop />,
//       title: "Computer Laboratory",
//       description:
//         "A dedicated computer learning environment supports students in developing digital knowledge and essential technology skills.",
//       image: IMAGES.computer,
//       color: "#8E44AD",
//     },
//     {
//       number: "05",
//       icon: <FaBuilding />,
//       title: "Multipurpose Hall",
//       description:
//         "A multipurpose hall with a capacity of around 200 provides space for school activities, gatherings, learning experiences and events.",
//       image: IMAGES.hall,
//       color: "#E67E22",
//     },
//     {
//       number: "06",
//       icon: <FaUsers />,
//       title: "Learning Environment",
//       description:
//         "Spacious classrooms, tiled corridors, good ventilation and a calm green campus create an environment designed around comfortable learning.",
//       image: IMAGES.campus,
//       color: "#2ECC71",
//     },
//   ];

//   const campusFeatures = [
//     {
//       number: "13.5",
//       label: "ACRES",
//       text: "Spacious green campus",
//       icon: <FaTree />,
//       color: "#27AE60",
//     },
//     {
//       number: "500",
//       label: "SQ. FT.",
//       text: "Approximate classroom size",
//       icon: <FaBuilding />,
//       color: "#4A90D9",
//     },
//     {
//       number: "3,500+",
//       label: "BOOKS",
//       text: "Library collection",
//       icon: <FaBookOpen />,
//       color: "#F39C12",
//     },
//     {
//       number: "200",
//       label: "SEATS",
//       text: "Multipurpose hall capacity",
//       icon: <FaUsers />,
//       color: "#8E44AD",
//     },
//   ];

//   const stats = [
//     { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
//     { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
//     { number: "500", label: "Sq. Ft. Classrooms", icon: <FaBuilding /> },
//     { number: "200", label: "Hall Capacity", icon: <FaUsers /> },
//   ];

//   return (
//     <main className="si-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="si-topbar">
//         <div className="si-container">
//           <div className="si-topbar__content">
//             <span className="si-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="si-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="si-hero">
//         <div className="si-hero__bg-wrapper">
//           <div 
//             className="si-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="si-hero__bg-overlay" />
//           <div className="si-hero__bg-gradient" />
//         </div>

//         <div className="si-container">
//           <div className="si-hero__inner">
//             <div className="si-hero__content">
//               <div className="si-hero__badge">
//                 <FaBuilding />
//                 INFRASTRUCTURE
//               </div>

//               <h1 className="si-hero__title">
//                 Spaces Designed
//                 <br />
//                 <span className="si-hero__highlight">for Possibility.</span>
//               </h1>

//               <p className="si-hero__desc">
//                 A learning environment where classrooms, technology,
//                 laboratories and open spaces come together to support
//                 every student's journey.
//               </p>

//               {/* <div className="si-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="si-hero__stat">
//                     <span className="si-hero__stat-icon">{stat.icon}</span>
//                     <span className="si-hero__stat-number">{stat.number}</span>
//                     <span className="si-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div> */}
//             </div>

//             <div className="si-hero__image-wrapper">
//               <div className="si-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA Campus" 
//                   className="si-hero__image-img"
//                 />
//                 <div className="si-hero__image-ring" />
//                 {/* <div className="si-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="si-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="si-intro">
//         <div className="si-container">
//           <div className="si-intro__inner">
//             <div className="si-intro__header">
//               <span className="si-intro__label">THE SNGA CAMPUS</span>
//               <h2 className="si-intro__title">
//                 A Campus Built
//                 <span className="si-intro__highlight">Around Learning.</span>
//               </h2>
//             </div>

//             <div className="si-intro__content">
//               <p>
//                 Shifan Noor Global Academy is situated on a 13.5-acre campus
//                 at Venkulam on the Ramanathapuram–Devipattinam main road.
//               </p>
//               <p>
//                 Set within a calm, serene and lush green environment, the campus
//                 provides students with a spacious setting away from the dust and
//                 noise of busy surroundings.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           CAMPUS STATS
//       ================================================= */}
//       <section ref={statsRef} className="si-stats">
//         <div className="si-stats__bg" />

//         <div className="si-container">
//           <div className="si-stats__header">
//             <span className="si-stats__label">AT A GLANCE</span>
//             <h2 className="si-stats__title">
//               Built to Make
//               <br />
//               <span className="si-stats__highlight">Learning Comfortable.</span>
//             </h2>
//           </div>

//           <div className="si-stats__grid">
//             {campusFeatures.map((item) => (
//               <div key={item.label} className="si-stats__card">
//                 <div className="si-stats__card-icon" style={{ color: item.color }}>
//                   {item.icon}
//                 </div>
//                 <div className="si-stats__card-number">{item.number}</div>
//                 <div className="si-stats__card-label">{item.label}</div>
//                 <p className="si-stats__card-text">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           CLASSROOMS SECTION
//       ================================================= */}
//       <section ref={classroomsRef} className="si-classrooms">
//         <div className="si-container">
//           <div className="si-classrooms__inner">
//             <div className="si-classrooms__content">
//               <span className="si-classrooms__label">THE CLASSROOM</span>
//               <h2 className="si-classrooms__title">
//                 Where Everyday
//                 <br />
//                 <span className="si-classrooms__highlight">Learning Happens.</span>
//               </h2>
//               <p className="si-classrooms__desc">
//                 Each classroom is designed with approximately 500 square feet
//                 of space and provides good lighting, ventilation and essential
//                 learning facilities.
//               </p>
//               <p className="si-classrooms__desc">
//                 Digital classroom facilities further support interactive teaching
//                 and give educators opportunities to bring concepts to life.
//               </p>
//               <Link to="/academics" className="si-classrooms__link">
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>
//             </div>

//             <div className="si-classrooms__visual">
//               <div className="si-classrooms__visual-circle">
//                 <span className="si-classrooms__visual-number">500</span>
//                 <span className="si-classrooms__visual-unit">SQ. FT.</span>
//                 <p className="si-classrooms__visual-desc">
//                   Approximate classroom space designed for comfortable learning.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FACILITIES - Image Overlay Cards
//       ================================================= */}
//       <section ref={facilitiesRef} className="si-facilities">
//         <div className="si-container">
//           <div className="si-facilities__header">
//             <div>
//               <span className="si-facilities__label">LEARNING FACILITIES</span>
//               <h2 className="si-facilities__title">
//                 More Than
//                 <br />
//                 <span className="si-facilities__highlight">Four Walls.</span>
//               </h2>
//             </div>
//             <p className="si-facilities__desc">
//               Different learning spaces allow students to explore subjects,
//               develop skills and experience learning beyond the traditional
//               classroom.
//             </p>
//           </div>

//           <div className="si-facilities__grid">
//             {facilities.map((facility) => (
//               <div key={facility.number} className="si-facilities__card">
//                 <div className="si-facilities__card-image">
//                   <img src={facility.image} alt={facility.title} loading="lazy" />
//                   <div className="si-facilities__card-overlay">
//                     <div className="si-facilities__card-content">
//                       <div className="si-facilities__card-top">
//                         <span className="si-facilities__card-number">
//                           {facility.number}
//                         </span>
//                         <div className="si-facilities__card-icon" style={{ color: facility.color }}>
//                           {facility.icon}
//                         </div>
//                       </div>
//                       <h3 className="si-facilities__card-title">{facility.title}</h3>
//                       <p className="si-facilities__card-desc">{facility.description}</p>
//                       <span className="si-facilities__card-arrow">
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
//           BEYOND THE CLASSROOM
//       ================================================= */}
//       <section ref={beyondRef} className="si-beyond">
//         <div className="si-beyond__bg-wrapper">
//           <div 
//             className="si-beyond__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.campus})` }}
//           />
//           <div className="si-beyond__bg-overlay" />
//         </div>

//         <div className="si-container">
//           <div className="si-beyond__inner">
//             <div className="si-beyond__content">
//               <span className="si-beyond__label">BEYOND THE CLASSROOM</span>
//               <h2 className="si-beyond__title">
//                 Learning Needs
//                 <br />
//                 <span className="si-beyond__highlight">Room to Move.</span>
//               </h2>
//             </div>

//             <div className="si-beyond__right">
//               <div className="si-beyond__quote">
//                 <FaQuoteLeft />
//               </div>
//               <p className="si-beyond__desc">
//                 The SNGA campus is designed to support different dimensions of
//                 student life.
//               </p>
//               <p className="si-beyond__desc">
//                 From science experiments and computer learning to reading,
//                 school gatherings and collaborative activities, students have
//                 access to spaces that encourage exploration and participation.
//               </p>
//               <Link to="/campus" className="si-beyond__link">
//                 <span>Explore Our Campus</span>
//                 <FaArrowRight />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           ENVIRONMENT SECTION
//       ================================================= */}
//       <section ref={environmentRef} className="si-environment">
//         <div className="si-environment__bg" />

//         <div className="si-container">
//           <div className="si-environment__header">
//             <span className="si-environment__label">THE ENVIRONMENT</span>
//             <h2 className="si-environment__title">
//               A Calm Place to
//               <br />
//               <span className="si-environment__highlight">Think, Learn and Grow.</span>
//             </h2>
//             <p className="si-environment__desc">
//               The physical environment plays an important role in creating a
//               positive learning experience.
//             </p>
//           </div>

//           <div className="si-environment__grid">
//             <div className="si-environment__card">
//               <span className="si-environment__card-number">01</span>
//               <h3 className="si-environment__card-title">Light & Ventilation</h3>
//               <p className="si-environment__card-desc">
//                 Classrooms designed with attention to natural light and
//                 ventilation.
//               </p>
//               <div className="si-environment__card-icon">
//                 <FaClock />
//               </div>
//             </div>

//             <div className="si-environment__card">
//               <span className="si-environment__card-number">02</span>
//               <h3 className="si-environment__card-title">Green Surroundings</h3>
//               <p className="si-environment__card-desc">
//                 A spacious, calm and lush green campus supporting a peaceful
//                 learning atmosphere.
//               </p>
//               <div className="si-environment__card-icon">
//                 <FaTree />
//               </div>
//             </div>

//             <div className="si-environment__card">
//               <span className="si-environment__card-number">03</span>
//               <h3 className="si-environment__card-title">Thoughtful Spaces</h3>
//               <p className="si-environment__card-desc">
//                 Learning spaces planned to support academics, interaction and
//                 school life.
//               </p>
//               <div className="si-environment__card-icon">
//                 <FaShieldAlt />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="si-cta">
//         <div className="si-cta__bg-wrapper">
//           <div 
//             className="si-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="si-cta__bg-overlay" />
//           <div className="si-cta__bg-gradient" />
//         </div>

//         <div className="si-container">
//           <div className="si-cta__content">
//             <div className="si-cta__badge">
//               <FaSchool />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="si-cta__title">
//               See Where
//               <br />
//               <span className="si-cta__highlight">Learning Happens.</span>
//             </h2>

//             <p className="si-cta__desc">
//               Explore our campus, facilities and the experiences that make
//               everyday school life meaningful.
//             </p>

//             <div className="si-cta__actions">
//               <Link to="/campus" className="si-cta__btn si-cta__btn--primary">
//                 <span>Explore Campus</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/gallery" className="si-cta__btn si-cta__btn--secondary">
//                 <span>View Gallery</span>
//               </Link>
//             </div>

//             <div className="si-cta__footer">
//               <span>
//                 <FaBuilding /> Modern Facilities
//               </span>
//               <span>
//                 <FaTree /> Green Campus
//               </span>
//               <span>
//                 <FaBookOpen /> 3,500+ Books
//               </span>
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
import "./Infrastructure.css";

import heroBg from "../../assets/school.JPG";
import classroomImage from "../../assets/classroom.jpg";
import libraryImage from "../../assets/library.jpg";
import scienceImage from "../../assets/sciencelab.jpg";
import computerImage from "../../assets/ComputerLab.jpg";
import campusImage from "../../assets/camp.jpg";
import hallImage from "../../assets/hall.jpg";
import ctaImage from "../../assets/engaging.jpg";

const Infrastructure = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("si-is-visible");
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

  const learningSpaces = [
    {
      number: "01",
      eyebrow: "CLASSROOMS",
      title: "Spaces designed for attention.",
      text:
        "Each classroom provides approximately 500 square feet of space with good lighting, ventilation and essential learning facilities.",
      image: classroomImage,
    },
    {
      number: "02",
      eyebrow: "DIGITAL LEARNING",
      title: "Technology that supports teaching.",
      text:
        "Digital classroom facilities help teachers create more interactive learning experiences and bring concepts closer to students.",
      image: classroomImage,
    },
    {
      number: "03",
      eyebrow: "LIBRARY",
      title: "A place for curiosity to grow.",
      text:
        "The library houses more than 3,500 books along with newspapers and magazines, providing students with space for reading and independent study.",
      image: libraryImage,
    },
    {
      number: "04",
      eyebrow: "SCIENCE",
      title: "Learning through exploration.",
      text:
        "Dedicated Chemistry, Physics and Biology laboratories provide opportunities for students to connect scientific ideas with practical learning.",
      image: scienceImage,
    },
    {
      number: "05",
      eyebrow: "COMPUTER LABORATORY",
      title: "Building digital confidence.",
      text:
        "A dedicated computer laboratory provides an environment for developing digital knowledge and essential technology skills.",
      image: computerImage,
    },
    {
      number: "06",
      eyebrow: "MULTIPURPOSE HALL",
      title: "A space for the wider school.",
      text:
        "The multipurpose hall accommodates around 200 people and supports gatherings, activities, learning experiences and school events.",
      image: hallImage,
    },
  ];

  const campusFacts = [
    {
      number: "13.5",
      unit: "ACRES",
      label: "Campus",
      text: "A spacious green campus at Venkulam.",
    },
    {
      number: "500",
      unit: "SQ. FT.",
      label: "Classrooms",
      text: "Approximate classroom size.",
    },
    {
      number: "3,500+",
      unit: "BOOKS",
      label: "Library",
      text: "Books available for learning and reading.",
    },
    {
      number: "200",
      unit: "SEATS",
      label: "Hall",
      text: "Approximate multipurpose hall capacity.",
    },
  ];

  return (
    <main className="si-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        ref={addSection}
        className="si-hero si-reveal"
        style={{
          "--si-hero-image": `url(${heroBg})`,
        }}
      >
        <div className="si-hero__overlay" />
        <div className="si-hero__frame" />

        <div className="si-container si-hero__container">

          <div className="si-hero__top">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>INFRASTRUCTURE</span>
          </div>

          <div className="si-hero__content">

            <div className="si-hero__number">
              04
            </div>

            <p className="si-hero__eyebrow">
              CAMPUS &amp; LEARNING SPACES
            </p>

            <h1>
              A place
              <br />
              <em>built for learning.</em>
            </h1>

            <p className="si-hero__description">
              A spacious campus where classrooms, laboratories,
              technology, reading spaces and shared environments
              come together to support the life of a learner.
            </p>

          </div>

          <div className="si-hero__bottom">

            <span>
              VENKULAM · RAMANATHAPURAM
            </span>

            <span className="si-hero__scroll">
              EXPLORE THE CAMPUS
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
        className="si-intro si-reveal"
      >
        <div className="si-container">

          <div className="si-intro__grid">

            <div className="si-index">
              <span>01</span>
              <span>THE CAMPUS</span>
            </div>

            <div className="si-intro__content">

              <p className="si-kicker">
                ROOM TO LEARN
              </p>

              <h2>
                Education needs
                <br />
                <em>room to grow.</em>
              </h2>

              <div className="si-intro__text">

                <p>
                  Shifan Noor Global Academy is situated on a
                  13.5-acre campus at Venkulam on the
                  Ramanathapuram–Devipattinam main road.
                </p>

                <p>
                  The campus is set within a calm, serene and
                  lush green environment, creating a spacious
                  setting designed around comfortable learning.
                </p>

              </div>

            </div>

          </div>

          <div className="si-rule" />

          <div className="si-intro__statement">

            <span>
              CAMPUS PHILOSOPHY
            </span>

            <p>
              The physical environment is part of the learning
              experience — giving students places to focus,
              explore, collaborate and participate.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CAMPUS IMAGE
          ===================================================== */}

      <section
        ref={addSection}
        className="si-campus si-reveal"
      >
        <div className="si-container">

          <div className="si-campus__image">

            <img
              src={campusImage}
              alt="Shifan Noor Global Academy campus"
              loading="lazy"
            />

            <div className="si-campus__caption">
              <span>SHIFAN NOOR GLOBAL ACADEMY</span>
              <span>VENKULAM · RAMANATHAPURAM</span>
            </div>

          </div>

          <div className="si-campus__facts">

            {campusFacts.map((fact) => (
              <div
                className="si-fact"
                key={fact.label}
              >
                <div className="si-fact__number">
                  {fact.number}
                </div>

                <div className="si-fact__unit">
                  {fact.unit}
                </div>

                <h3>
                  {fact.label}
                </h3>

                <p>
                  {fact.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          LEARNING SPACES INTRO
          ===================================================== */}

      <section
        ref={addSection}
        className="si-spaces-intro si-reveal"
      >
        <div className="si-container">

          <div className="si-spaces-intro__grid">

            <div className="si-index">
              <span>02</span>
              <span>LEARNING SPACES</span>
            </div>

            <div>

              <p className="si-kicker">
                MORE THAN FOUR WALLS
              </p>

              <h2>
                Different spaces.
                <br />
                <em>One purpose.</em>
              </h2>

              <p className="si-spaces-intro__description">
                Every learning environment serves a different
                purpose — from focused classroom learning and
                independent reading to scientific exploration
                and shared school experiences.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED CLASSROOM
          ===================================================== */}

      <section
        ref={addSection}
        className="si-feature si-reveal"
      >
        <div className="si-container">

          <div className="si-feature__grid">

            <div className="si-feature__image">

              <img
                src={classroomImage}
                alt="SNGA classroom"
                loading="lazy"
              />

              <div className="si-feature__image-label">
                01 · CLASSROOM
              </div>

            </div>

            <div className="si-feature__content">

              <p className="si-kicker">
                THE EVERYDAY CLASSROOM
              </p>

              <h2>
                Where
                <br />
                <em>learning happens.</em>
              </h2>

              <p>
                Classrooms at SNGA are designed to provide
                students with a comfortable environment for
                focused learning.
              </p>

              <p>
                With approximately 500 square feet of space,
                good lighting and ventilation, each classroom
                provides the foundation for everyday academic life.
              </p>

              <div className="si-feature__detail">

                <span>CLASSROOM SPACE</span>

                <strong>
                  500 SQ. FT.
                </strong>

              </div>

              <Link
                to="/curriculum"
                className="si-editorial-link"
              >
                <span>Explore Academics</span>
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FACILITIES ARCHIVE
          ===================================================== */}

      <section
        ref={addSection}
        className="si-facilities si-reveal"
      >
        <div className="si-container">

          <div className="si-facilities__header">

            <div className="si-index">
              <span>03</span>
              <span>THE FACILITIES</span>
            </div>

            <div>

              <p className="si-kicker">
                LEARNING INFRASTRUCTURE
              </p>

              <h2>
                Spaces that
                <br />
                <em>extend the classroom.</em>
              </h2>

            </div>

          </div>


          <div className="si-facilities__list">

            {learningSpaces.map((space) => (
              <article
                key={space.number}
                className="si-facility"
              >

                <div className="si-facility__number">
                  {space.number}
                </div>

                <div className="si-facility__image">

                  <img
                    src={space.image}
                    alt={space.title}
                    loading="lazy"
                  />

                </div>

                <div className="si-facility__content">

                  <p className="si-facility__eyebrow">
                    {space.eyebrow}
                  </p>

                  <h3>
                    {space.title}
                  </h3>

                  <p>
                    {space.text}
                  </p>

                </div>

                <span className="si-facility__arrow">
                  →
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SCIENCE / PRACTICAL LEARNING
          ===================================================== */}

      <section
        ref={addSection}
        className="si-science si-reveal"
      >

        <div className="si-container">

          <div className="si-science__grid">

            <div className="si-science__content">

              <div className="si-index">
                <span>04</span>
                <span>PRACTICAL LEARNING</span>
              </div>

              <p className="si-kicker">
                FROM THEORY TO EXPERIENCE
              </p>

              <h2>
                Learning becomes
                <br />
                <em>real through doing.</em>
              </h2>

              <p className="si-science__lead">
                Dedicated science laboratories give students
                opportunities to explore scientific ideas
                through practical learning.
              </p>

              <div className="si-science__subjects">

                <div>
                  <span>01</span>
                  <strong>Chemistry</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Physics</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Biology</strong>
                </div>

              </div>

            </div>

            <div className="si-science__image">

              <img
                src={scienceImage}
                alt="SNGA science laboratory"
                loading="lazy"
              />

              <div className="si-science__image-caption">
                SCIENCE LABORATORIES
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIBRARY
          ===================================================== */}

      <section
        ref={addSection}
        className="si-library si-reveal"
      >

        <div className="si-container">

          <div className="si-library__image">

            <img
              src={libraryImage}
              alt="SNGA library"
              loading="lazy"
            />

          </div>

          <div className="si-library__content">

            <p className="si-kicker">
              THE LIBRARY
            </p>

            <h2>
              A quiet place
              <br />
              <em>for curious minds.</em>
            </h2>

            <p>
              The library provides students with access to
              more than 3,500 books, along with newspapers
              and magazines.
            </p>

            <p>
              It also provides a spacious environment for
              reading, independent study and exploration.
            </p>

            <div className="si-library__stat">

              <strong>
                3,500+
              </strong>

              <span>
                BOOKS
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAMPUS LIFE
          ===================================================== */}

      <section
        ref={addSection}
        className="si-life si-reveal"
      >

        <div className="si-life__image">

          <img
            src={campusImage}
            alt="SNGA campus environment"
            loading="lazy"
          />

        </div>

        <div className="si-life__content">

          <div className="si-container si-life__container">

            <div className="si-index si-index--light">
              <span>05</span>
              <span>CAMPUS LIFE</span>
            </div>

            <p className="si-kicker si-kicker--light">
              BEYOND THE CLASSROOM
            </p>

            <h2>
              Learning needs
              <br />
              <em>space to breathe.</em>
            </h2>

            <p className="si-life__lead">
              A school campus should support more than academic
              instruction. It should give students opportunities
              to move, participate, interact and belong.
            </p>

            <p>
              The green and spacious SNGA campus provides an
              environment for different dimensions of school life,
              including sports, activities, gatherings and shared
              experiences.
            </p>

            <Link
              to="/campus"
              className="si-life__link"
            >
              <span>Explore Campus</span>
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          MULTIPURPOSE HALL
          ===================================================== */}

      <section
        ref={addSection}
        className="si-hall si-reveal"
      >

        <div className="si-container">

          <div className="si-hall__grid">

            <div className="si-hall__content">

              <p className="si-kicker">
                SHARED SCHOOL SPACE
              </p>

              <h2>
                One space.
                <br />
                <em>Many possibilities.</em>
              </h2>

              <p>
                The multipurpose hall provides a shared space
                for school gatherings, activities, events and
                learning experiences.
              </p>

              <div className="si-hall__stat">

                <strong>
                  200
                </strong>

                <div>
                  <span>APPROXIMATE</span>
                  <span>SEAT CAPACITY</span>
                </div>

              </div>

            </div>

            <div className="si-hall__image">

              <img
                src={hallImage}
                alt="SNGA multipurpose hall"
                loading="lazy"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INFRASTRUCTURE PHILOSOPHY
          ===================================================== */}

      <section
        ref={addSection}
        className="si-philosophy si-reveal"
      >

        <div className="si-container">

          <div className="si-philosophy__grid">

            <div className="si-index si-index--light">
              <span>06</span>
              <span>OUR APPROACH</span>
            </div>

            <div>

              <p className="si-kicker si-kicker--light">
                INFRASTRUCTURE WITH PURPOSE
              </p>

              <h2>
                Good spaces do not
                <br />
                replace good teaching.
                <br />
                <em>They support it.</em>
              </h2>

              <p className="si-philosophy__text">
                Infrastructure becomes meaningful when it helps
                students learn better, gives teachers the right
                environment to teach and creates room for the
                wider life of the school.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CROSS NAVIGATION
          ===================================================== */}

      <section
        ref={addSection}
        className="si-navigation si-reveal"
      >

        <div className="si-container">

          <div className="si-navigation__top">
            <span>CONTINUE EXPLORING</span>
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
          </div>

          <div className="si-navigation__grid">

            <Link
              to="/campus"
              className="si-navigation__item"
            >
              <span>01</span>

              <div>
                <small>THE CAMPUS</small>
                <strong>Campus Life</strong>
              </div>

              <span>→</span>
            </Link>

            <Link
              to="/curriculum"
              className="si-navigation__item"
            >
              <span>02</span>

              <div>
                <small>ACADEMICS</small>
                <strong>Curriculum</strong>
              </div>

              <span>→</span>
            </Link>

            <Link
              to="/gallery"
              className="si-navigation__item"
            >
              <span>03</span>

              <div>
                <small>VISUAL ARCHIVE</small>
                <strong>Gallery</strong>
              </div>

              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section
        ref={addSection}
        className="si-cta si-reveal"
        style={{
          "--si-cta-image": `url(${ctaImage})`,
        }}
      >

        <div className="si-cta__overlay" />

        <div className="si-container">

          <div className="si-cta__content">

            <p className="si-cta__eyebrow">
              SHIFAN NOOR GLOBAL ACADEMY
            </p>

            <h2>
              Come and see
              <br />
              <em>where learning happens.</em>
            </h2>

            <p>
              Explore the campus, facilities and learning
              environment that support everyday life at SNGA.
            </p>

            <div className="si-cta__actions">

              <Link
                to="/campus"
                className="si-cta__primary"
              >
                <span>Explore Campus</span>
                <span>→</span>
              </Link>

              <Link
                to="/gallery"
                className="si-cta__secondary"
              >
                <span>View Gallery</span>
                <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="si-cta__secondary"
              >
                <span>Contact School</span>
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Infrastructure;