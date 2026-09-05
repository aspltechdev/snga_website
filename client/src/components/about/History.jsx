
// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaBookOpen,
//   FaFlask,
//   FaLaptop,
//   FaUsers,
//   FaLightbulb,
//   FaHeart,
//   FaGraduationCap,
//   FaBuilding,
//   FaTree,
//   FaAward,
//   FaClock,
//   FaRocket,
//   FaShieldAlt,
// } from "react-icons/fa";
// import "./History.css";

// const History = () => {
//   const milestones = [
//     {
//       number: "01",
//       title: "A Place for Peaceful Learning",
//       description:
//         "Set in a calm, serene and lush green environment at Venkulam on the Ramanathapuram–Devipattinam main road, SNGA was envisioned as a place where students could learn away from the dust and noise of city life.",
//     },
//     {
//       number: "02",
//       title: "A Campus Designed for Learning",
//       description:
//         "The school campus spans 13.5 acres and provides students with thoughtfully planned spaces designed to support academic learning, exploration, interaction and personal growth.",
//     },
//     {
//       number: "03",
//       title: "Learning Meets Technology",
//       description:
//         "Every classroom is supported by digital learning facilities, creating opportunities for interactive teaching and helping students engage with concepts beyond traditional textbooks.",
//     },
//     {
//       number: "04",
//       title: "Beyond the Classroom",
//       description:
//         "The learning environment extends into a well-equipped library, science laboratories, computer facilities and a multipurpose hall, giving students opportunities to learn through varied experiences.",
//     },
//   ];

//   const facilities = [
//     {
//       icon: <FaBookOpen />,
//       number: "3,500+",
//       label: "Books in Library",
//       color: "#2563eb",
//     },
//     {
//       icon: <FaFlask />,
//       number: "03",
//       label: "Science Labs",
//       color: "#3b82f6",
//     },
//     {
//       icon: <FaLaptop />,
//       number: "01",
//       label: "Computer Lab",
//       color: "#60a5fa",
//     },
//     {
//       icon: <FaUsers />,
//       number: "200",
//       label: "Hall Capacity",
//       color: "#93bbfc",
//     },
//   ];

//   const principles = [
//     {
//       icon: <FaLightbulb />,
//       title: "Knowledge",
//       text: "Building a strong foundation of understanding and academic knowledge.",
//       color: "#2563eb",
//     },
//     {
//       icon: <FaUsers />,
//       title: "Skills",
//       text: "Helping students develop practical abilities and communicate with confidence.",
//       color: "#3b82f6",
//     },
//     {
//       icon: <FaHeart />,
//       title: "Values",
//       text: "Encouraging healthy attitudes, responsibility and strong human values.",
//       color: "#60a5fa",
//     },
//   ];

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const campusRef = useRef(null);
//   const milestonesRef = useRef(null);
//   const facilitiesRef = useRef(null);
//   const philosophyRef = useRef(null);
//   const visionRef = useRef(null);
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
//       { ref: heroRef, className: "sh-hero--visible" },
//       { ref: introRef, className: "sh-intro--visible" },
//       { ref: campusRef, className: "sh-campus--visible" },
//       { ref: milestonesRef, className: "sh-milestones--visible" },
//       { ref: facilitiesRef, className: "sh-facilities--visible" },
//       { ref: philosophyRef, className: "sh-philosophy--visible" },
//       { ref: visionRef, className: "sh-vision--visible" },
//       { ref: ctaRef, className: "sh-cta--visible" },
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

//   return (
//     <main className="sh-page">
//       {/* =================================================
//           HERO SECTION
//       ================================================= */}
//       <section ref={heroRef} className="sh-hero">
//         <div className="sh-hero__bg" />
//         <div className="sh-hero__gradient" />

//         <div className="sh-container">
//           <div className="sh-hero__content">
//             <span className="sh-hero__badge">
//               <FaGraduationCap />
//               OUR STORY
//             </span>

//             <h1 className="sh-hero__title">
//               A Place Where
//               <br />
//               <span className="sh-hero__highlight">Learning Grows.</span>
//             </h1>

//             <p className="sh-hero__desc">
//               Discover the journey, philosophy and learning environment
//               that shape Shifan Noor Global Academy.
//             </p>
//           </div>

//           <div className="sh-hero__tags">
//             <span>SHIFAN NOOR</span>
//             <span>GLOBAL ACADEMY</span>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO SECTION
//       ================================================= */}
//       <section ref={introRef} className="sh-intro">
//         <div className="sh-container">
//           <div className="sh-intro__inner">
//             <span className="sh-intro__label">ABOUT THE INSTITUTION</span>

//             <div className="sh-intro__grid">
//               <h2 className="sh-intro__title">
//                 Creating an Environment
//                 <br />
//                 Where Every Student Can
//                 <br />
//                 <span className="sh-intro__highlight">Discover Their Potential.</span>
//               </h2>

//               <div className="sh-intro__text">
//                 <p>
//                   Shifan Noor Global Academy is located in Venkulam, on the
//                   Ramanathapuram–Devipattinam main road. Its campus is set
//                   within a calm, serene and lush green environment designed
//                   to provide students with a peaceful setting for learning.
//                 </p>
//                 <p>
//                   The school's educational approach recognises that learning is
//                   more than acquiring academic knowledge. It includes developing
//                   skills, healthy attitudes, confidence and values that prepare
//                   students for the challenges ahead.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           CAMPUS SECTION
//       ================================================= */}
//       <section ref={campusRef} className="sh-campus">
//         <div className="sh-campus__bg" />

//         <div className="sh-container">
//           <div className="sh-campus__inner">
//             <div className="sh-campus__content">
//               <span className="sh-campus__label">THE CAMPUS</span>
//               <h2 className="sh-campus__title">
//                 13.5 Acres
//                 <br />
//                 <span className="sh-campus__highlight">Built Around Learning.</span>
//               </h2>
//               <p className="sh-campus__desc">
//                 The SNGA campus provides a spacious environment where students
//                 can learn, explore and participate in activities beyond the
//                 classroom.
//               </p>
//               <Link to="/facilities" className="sh-campus__link">
//                 <span>Explore Our Facilities</span>
//                 <FaArrowRight />
//               </Link>
//             </div>

//             <div className="sh-campus__stat">
//               <span className="sh-campus__stat-number">13.5</span>
//               <span className="sh-campus__stat-label">ACRES</span>
//               <p className="sh-campus__stat-text">
//                 A calm and green campus designed for a peaceful learning
//                 environment.
//               </p>
//               <div className="sh-campus__stat-icons">
//                 <span><FaTree /></span>
//                 <span><FaBuilding /></span>
//                 <span><FaShieldAlt /></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           MILESTONES SECTION
//       ================================================= */}
//       <section ref={milestonesRef} className="sh-milestones">
//         <div className="sh-container">
//           <div className="sh-milestones__header">
//             <span className="sh-milestones__label">THE JOURNEY</span>
//             <h2 className="sh-milestones__title">
//               Designed for
//               <br />
//               <span className="sh-milestones__highlight">The Whole Student.</span>
//             </h2>
//           </div>

//           <div className="sh-milestones__list">
//             {milestones.map((item, index) => (
//               <div key={item.number} className="sh-milestones__item">
//                 <div className="sh-milestones__item-number">{item.number}</div>
//                 <div className="sh-milestones__item-content">
//                   <h3 className="sh-milestones__item-title">{item.title}</h3>
//                   <p className="sh-milestones__item-desc">{item.description}</p>
//                 </div>
//                 {index < milestones.length - 1 && (
//                   <div className="sh-milestones__item-connector" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FACILITIES SECTION
//       ================================================= */}
//       <section ref={facilitiesRef} className="sh-facilities">
//         <div className="sh-facilities__bg" />

//         <div className="sh-container">
//           <div className="sh-facilities__header">
//             <div>
//               <span className="sh-facilities__label">LEARNING INFRASTRUCTURE</span>
//               <h2 className="sh-facilities__title">
//                 Spaces That Make
//                 <br />
//                 <span className="sh-facilities__highlight">Learning Tangible.</span>
//               </h2>
//             </div>
//             <p className="sh-facilities__desc">
//               From digital classrooms to laboratories and library spaces, the
//               campus brings different dimensions of learning together.
//             </p>
//           </div>

//           <div className="sh-facilities__grid">
//             {facilities.map((facility) => (
//               <div key={facility.label} className="sh-facilities__item">
//                 <div
//                   className="sh-facilities__item-icon"
//                   style={{ backgroundColor: `${facility.color}15`, color: facility.color }}
//                 >
//                   {facility.icon}
//                 </div>
//                 <span className="sh-facilities__item-number">{facility.number}</span>
//                 <span className="sh-facilities__item-label">{facility.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           PHILOSOPHY SECTION
//       ================================================= */}
//       <section ref={philosophyRef} className="sh-philosophy">
//         <div className="sh-container">
//           <div className="sh-philosophy__header">
//             <span className="sh-philosophy__label">OUR PHILOSOPHY</span>
//             <h2 className="sh-philosophy__title">
//               Education Is More Than
//               <br />
//               <span className="sh-philosophy__highlight">What Happens in a Classroom.</span>
//             </h2>
//           </div>

//           <div className="sh-philosophy__principles">
//             {principles.map((item) => (
//               <div key={item.title} className="sh-philosophy__principle">
//                 <div
//                   className="sh-philosophy__principle-icon"
//                   style={{ backgroundColor: `${item.color}15`, color: item.color }}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="sh-philosophy__principle-title">{item.title}</h3>
//                 <p className="sh-philosophy__principle-text">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           VISION SECTION
//       ================================================= */}
//       <section ref={visionRef} className="sh-vision">
//         <div className="sh-vision__bg" />

//         <div className="sh-container">
//           <div className="sh-vision__content">
//             <span className="sh-vision__label">LOOKING AHEAD</span>
//             <h2 className="sh-vision__title">
//               Building Confident
//               <br />
//               <span className="sh-vision__highlight">Shifanians.</span>
//             </h2>
//             <p className="sh-vision__desc">
//               SNGA's vision is to help every student complete their schooling
//               with enthusiasm, confidence, high self-esteem and a readiness to
//               meet new challenges.
//             </p>
//             <p className="sh-vision__desc">
//               The school seeks to maintain high academic, social and moral
//               expectations while creating a world-class ambience and widening
//               opportunities for students.
//             </p>
//             <div className="sh-vision__icons">
//               <span><FaAward /></span>
//               <span><FaRocket /></span>
//               <span><FaGraduationCap /></span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA
//       ================================================= */}
//       <section ref={ctaRef} className="sh-cta">
//         <div className="sh-container">
//           <div className="sh-cta__content">
//             <span className="sh-cta__badge">SHIFAN NOOR GLOBAL ACADEMY</span>
//             <h2 className="sh-cta__title">
//               The Journey
//               <br />
//               <span className="sh-cta__highlight">Continues.</span>
//             </h2>
//             <p className="sh-cta__desc">
//               Explore the people, spaces and experiences that make SNGA a place
//               for meaningful learning.
//             </p>
//             <Link to="/about" className="sh-cta__btn">
//               <span>Discover SNGA</span>
//               <FaArrowRight />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default History;









import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaFlask,
  FaLaptop,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaGraduationCap,
  FaBuilding,
  FaTree,
  FaAward,
  FaClock,
  FaRocket,
  FaShieldAlt,
  FaSchool,
  FaPlay,
  FaQuoteLeft,
  FaStar,
  FaHands,
  FaChild,
} from "react-icons/fa";
import "./History.css";

import heroBg from "../../assets/school.jpg";
import heroCircle from "../../assets/about.png";
import ctaBg from "../../assets/engaging.jpg";
import campusImage from "../../assets/campus.jpg";
import libraryImage from "../../assets/library.jpg";
import scienceImage from "../../assets/sciencelab.jpg";
import computerImage from "../../assets/ComputerLab.jpg";
import playground from "../../assets/playground.jpg";
// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  campus: campusImage,
  library: libraryImage,
  science: scienceImage,
  computer: computerImage,
  playground: playground,
};

const History = () => {
  const milestones = [
    {
      number: "01",
      title: "A Place for Peaceful Learning",
      description:
        "Set in a calm, serene and lush green environment at Venkulam on the Ramanathapuram–Devipattinam main road, SNGA was envisioned as a place where students could learn away from the dust and noise of city life.",
      image: IMAGES.campus,
    },
    {
      number: "02",
      title: "A Campus Designed for Learning",
      description:
        "The school campus spans 13.5 acres and provides students with thoughtfully planned spaces designed to support academic learning, exploration, interaction and personal growth.",
      image: IMAGES.library,
    },
    {
      number: "03",
      title: "Learning Meets Technology",
      description:
        "Every classroom is supported by digital learning facilities, creating opportunities for interactive teaching and helping students engage with concepts beyond traditional textbooks.",
      image: IMAGES.computer,
    },
    {
      number: "04",
      title: "Beyond the Classroom",
      description:
        "The learning environment extends into a well-equipped library, science laboratories, computer facilities and a multipurpose hall, giving students opportunities to learn through varied experiences.",
      image: IMAGES.science,
    },
  ];

  const facilities = [
    {
      icon: <FaBookOpen />,
      number: "3,500+",
      label: "Books in Library",
      color: "#4A90D9",
      image: IMAGES.library,
    },
    {
      icon: <FaFlask />,
      number: "03",
      label: "Science Labs",
      color: "#27AE60",
      image: IMAGES.science,
    },
    {
      icon: <FaLaptop />,
      number: "01",
      label: "Computer Lab",
      color: "#8E44AD",
      image: IMAGES.computer,
    },
    {
      icon: <FaUsers />,
      number: "200",
      label: "Hall Capacity",
      color: "#E67E22",
      image: IMAGES.playground,
    },
  ];

  const principles = [
    {
      icon: <FaLightbulb />,
      title: "Knowledge",
      text: "Building a strong foundation of understanding and academic knowledge.",
      color: "#4A90D9",
    },
    {
      icon: <FaUsers />,
      title: "Skills",
      text: "Helping students develop practical abilities and communicate with confidence.",
      color: "#27AE60",
    },
    {
      icon: <FaHeart />,
      title: "Values",
      text: "Encouraging healthy attitudes, responsibility and strong human values.",
      color: "#E74C3C",
    },
  ];

  const stats = [
    { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
    { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
    { number: "25+", label: "Years of Excellence", icon: <FaAward /> },
    { number: "500+", label: "Students", icon: <FaUsers /> },
  ];

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const campusRef = useRef(null);
  const milestonesRef = useRef(null);
  const facilitiesRef = useRef(null);
  const philosophyRef = useRef(null);
  const visionRef = useRef(null);
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
      { ref: heroRef, className: "sh-hero--visible" },
      { ref: introRef, className: "sh-intro--visible" },
      { ref: campusRef, className: "sh-campus--visible" },
      { ref: milestonesRef, className: "sh-milestones--visible" },
      { ref: facilitiesRef, className: "sh-facilities--visible" },
      { ref: philosophyRef, className: "sh-philosophy--visible" },
      { ref: visionRef, className: "sh-vision--visible" },
      { ref: ctaRef, className: "sh-cta--visible" },
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

  return (
    <main className="sh-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sh-topbar">
        <div className="sh-container">
          <div className="sh-topbar__content">
            <span className="sh-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sh-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sh-hero">
        <div className="sh-hero__bg-wrapper">
          <div 
            className="sh-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sh-hero__bg-overlay" />
          <div className="sh-hero__bg-gradient" />
        </div>

        <div className="sh-container">
          <div className="sh-hero__inner">
            <div className="sh-hero__content">
              <div className="sh-hero__badge">
                <FaGraduationCap />
                OUR STORY
              </div>

              <h1 className="sh-hero__title">
                A Place Where
                <br />
                <span className="sh-hero__highlight">Learning Grows.</span>
              </h1>

              <p className="sh-hero__desc">
                Discover the journey, philosophy and learning environment
                that shape Shifan Noor Global Academy.
              </p>
{/* 
              <div className="sh-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sh-hero__stat">
                    <span className="sh-hero__stat-icon">{stat.icon}</span>
                    <span className="sh-hero__stat-number">{stat.number}</span>
                    <span className="sh-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="sh-hero__image-wrapper">
              <div className="sh-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="SNGA School" 
                  className="sh-hero__image-img"
                />
                <div className="sh-hero__image-ring" />
                <div className="sh-hero__image-badge">
                  <span>Since 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sh-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          INTRO - Welcome Message
      ================================================= */}
      <section ref={introRef} className="sh-intro">
        <div className="sh-container">
          <div className="sh-intro__inner">
            <div className="sh-intro__header">
              <span className="sh-intro__label">ABOUT THE INSTITUTION</span>
              <h2 className="sh-intro__title">
                Creating an Environment
                <br />
                Where Every Student Can
                <br />
                <span className="sh-intro__highlight">Discover Their Potential.</span>
              </h2>
            </div>

            <div className="sh-intro__content">
              <p>
                Shifan Noor Global Academy is located in Venkulam, on the
                Ramanathapuram–Devipattinam main road. Its campus is set
                within a calm, serene and lush green environment designed
                to provide students with a peaceful setting for learning.
              </p>
              <p>
                The school's educational approach recognises that learning is
                more than acquiring academic knowledge. It includes developing
                skills, healthy attitudes, confidence and values that prepare
                students for the challenges ahead.
              </p>
            </div>

            <div className="sh-intro__values">
              <div className="sh-intro__value">
                <FaChild />
                <span>Student-Centric</span>
              </div>
              <div className="sh-intro__value">
                <FaHands />
                <span>Holistic Growth</span>
              </div>
              <div className="sh-intro__value">
                <FaStar />
                <span>Excellence</span>
              </div>
              <div className="sh-intro__value">
                <FaHeart />
                <span>Values</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CAMPUS SECTION - With Background Image
      ================================================= */}
      <section ref={campusRef} className="sh-campus">
        <div className="sh-campus__bg-wrapper">
          <div 
            className="sh-campus__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.campus})` }}
          />
          <div className="sh-campus__bg-overlay" />
        </div>

        <div className="sh-container">
          <div className="sh-campus__inner">
            <div className="sh-campus__content">
              <span className="sh-campus__label">THE CAMPUS</span>
              <h2 className="sh-campus__title">
                13.5 Acres
                <br />
                <span className="sh-campus__highlight">Built Around Learning.</span>
              </h2>
              <p className="sh-campus__desc">
                The SNGA campus provides a spacious environment where students
                can learn, explore and participate in activities beyond the
                classroom.
              </p>
              <Link to="/facilities" className="sh-campus__link">
                <span>Explore Our Facilities</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sh-campus__stat">
              <span className="sh-campus__stat-number">13.5</span>
              <span className="sh-campus__stat-label">ACRES</span>
              <p className="sh-campus__stat-text">
                A calm and green campus designed for a peaceful learning
                environment.
              </p>
              <div className="sh-campus__stat-icons">
                <span><FaTree /></span>
                <span><FaBuilding /></span>
                <span><FaShieldAlt /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          MILESTONES SECTION - Image Overlay Cards
      ================================================= */}
      <section ref={milestonesRef} className="sh-milestones">
        <div className="sh-container">
          <div className="sh-milestones__header">
            <span className="sh-milestones__label">THE JOURNEY</span>
            <h2 className="sh-milestones__title">
              Designed for
              <br />
              <span className="sh-milestones__highlight">The Whole Student.</span>
            </h2>
          </div>

          <div className="sh-milestones__grid">
            {milestones.map((item, index) => (
              <div key={item.number} className="sh-milestones__card">
                <div className="sh-milestones__card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="sh-milestones__card-overlay">
                    <div className="sh-milestones__card-content">
                      <span className="sh-milestones__card-number">
                        {item.number}
                      </span>
                      <h3 className="sh-milestones__card-title">{item.title}</h3>
                      <p className="sh-milestones__card-desc">{item.description}</p>
                      <span className="sh-milestones__card-arrow">
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
          FACILITIES SECTION - Image Overlay Cards
      ================================================= */}
      <section ref={facilitiesRef} className="sh-facilities">
        <div className="sh-facilities__bg" />

        <div className="sh-container">
          <div className="sh-facilities__header">
            <div>
              <span className="sh-facilities__label">LEARNING INFRASTRUCTURE</span>
              <h2 className="sh-facilities__title">
                Spaces That Make
                <br />
                <span className="sh-facilities__highlight">Learning Tangible.</span>
              </h2>
            </div>
            <p className="sh-facilities__desc">
              From digital classrooms to laboratories and library spaces, the
              campus brings different dimensions of learning together.
            </p>
          </div>

          <div className="sh-facilities__grid">
            {facilities.map((facility) => (
              <div key={facility.label} className="sh-facilities__card">
                <div className="sh-facilities__card-image">
                  <img src={facility.image} alt={facility.label} loading="lazy" />
                  <div className="sh-facilities__card-overlay">
                    <div className="sh-facilities__card-content">
                      <div
                        className="sh-facilities__card-icon"
                        style={{ backgroundColor: `${facility.color}20`, color: facility.color }}
                      >
                        {facility.icon}
                      </div>
                      <span className="sh-facilities__card-number">{facility.number}</span>
                      <span className="sh-facilities__card-label">{facility.label}</span>
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
      <section ref={philosophyRef} className="sh-philosophy">
        <div className="sh-container">
          <div className="sh-philosophy__header">
            <span className="sh-philosophy__label">OUR PHILOSOPHY</span>
            <h2 className="sh-philosophy__title">
              Education Is More Than
              <br />
              <span className="sh-philosophy__highlight">What Happens in a Classroom.</span>
            </h2>
          </div>

          <div className="sh-philosophy__grid">
            {principles.map((item) => (
              <div key={item.title} className="sh-philosophy__card">
                <div
                  className="sh-philosophy__card-icon"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="sh-philosophy__card-title">{item.title}</h3>
                <p className="sh-philosophy__card-text">{item.text}</p>
                <div className="sh-philosophy__card-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          VISION SECTION - With Background Image
      ================================================= */}
      <section ref={visionRef} className="sh-vision">
        <div className="sh-vision__bg-wrapper">
          <div 
            className="sh-vision__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sh-vision__bg-overlay" />
        </div>

        <div className="sh-container">
          <div className="sh-vision__content">
            <span className="sh-vision__label">LOOKING AHEAD</span>
            <h2 className="sh-vision__title">
              Building Confident
              <br />
              <span className="sh-vision__highlight">Shifanians.</span>
            </h2>
            <div className="sh-vision__quote">
              <FaQuoteLeft />
            </div>
            <p className="sh-vision__desc">
              SNGA's vision is to help every student complete their schooling
              with enthusiasm, confidence, high self-esteem and a readiness to
              meet new challenges.
            </p>
            <p className="sh-vision__desc">
              The school seeks to maintain high academic, social and moral
              expectations while creating a world-class ambience and widening
              opportunities for students.
            </p>
            <div className="sh-vision__icons">
              <span><FaAward /></span>
              <span><FaRocket /></span>
              <span><FaGraduationCap /></span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}
      <section ref={ctaRef} className="sh-cta">
        <div className="sh-cta__bg-wrapper">
          <div 
            className="sh-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sh-cta__bg-overlay" />
          <div className="sh-cta__bg-gradient" />
        </div>

        <div className="sh-container">
          <div className="sh-cta__content">
            <div className="sh-cta__badge">
              <FaSchool />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sh-cta__title">
              The Journey
              <br />
              <span className="sh-cta__highlight">Continues.</span>
            </h2>

            <p className="sh-cta__desc">
              Explore the people, spaces and experiences that make SNGA a place
              for meaningful learning.
            </p>

            <div className="sh-cta__actions">
              <Link to="/about" className="sh-cta__btn sh-cta__btn--primary">
                <span>Discover SNGA</span>
                <FaArrowRight />
              </Link>
              <Link to="/gallery" className="sh-cta__btn sh-cta__btn--secondary">
                <span>View Gallery</span>
              </Link>
            </div>

            <div className="sh-cta__footer">
              <span>
                <FaTree /> 13.5 Acres Campus
              </span>
              <span>
                <FaBookOpen /> 3,500+ Books
              </span>
              <span>
                <FaAward /> Excellence in Education
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default History;