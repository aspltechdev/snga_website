

// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaBuilding,
//   FaFlask,
//   FaBookOpen,
//   FaChild,
//   FaTree,
//   FaUsers,
//   FaGraduationCap,
//   FaMapMarkerAlt,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";
// import "./CampusPreview.css";

// // Online placeholder images (replace with your actual images)
// const IMAGES = {
//   campusMain: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&auto=format",
//   campusBuilding: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&auto=format",
// };

// const CampusPreview = () => {
//   const facilities = [
//     {
//       icon: <FaBuilding />,
//       number: "01",
//       title: "Modern Campus",
//       description: "A welcoming environment designed for learning and growth with state-of-the-art facilities.",
//       color: "#3498db",
//       tag: "Infrastructure",
//     },
//     {
//       icon: <FaBookOpen />,
//       number: "02",
//       title: "Learning Spaces",
//       description: "Thoughtfully designed spaces that encourage curiosity, collaboration and creativity.",
//       color: "#5dade2",
//       tag: "Classrooms",
//     },
//     {
//       icon: <FaFlask />,
//       number: "03",
//       title: "Practical Learning",
//       description: "Facilities that turn classroom learning into hands-on experience and discovery.",
//       color: "#2e86c1",
//       tag: "Labs",
//     },
//     {
//       icon: <FaChild />,
//       number: "04",
//       title: "Student Environment",
//       description: "A positive atmosphere where every student can flourish and reach their full potential.",
//       color: "#85c1e9",
//       tag: "Wellness",
//     },
//   ];

//   const campusHighlights = [
//     { icon: <FaTree />, label: "Green Campus" },
//     { icon: <FaUsers />, label: "Diverse Community" },
//     { icon: <FaShieldAlt />, label: "Safe Environment" },
//     { icon: <FaClock />, label: "Extended Hours" },
//   ];

//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const mainRef = useRef(null);
//   const gridRef = useRef(null);
//   const bottomRef = useRef(null);

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const sectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("campus-visible");
//           sectionObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const headerObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal-header");
//           headerObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.15 });

//     const mainObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal-main");
//           mainObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.15 });

//     const gridObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const cards = entry.target.querySelectorAll(".campus-facility-card");
//           cards.forEach((card, index) => {
//             setTimeout(() => {
//               card.classList.add("reveal-card");
//             }, index * 120);
//           });
//           gridObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.1 });

//     const bottomObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal-bottom");
//           bottomObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.2 });

//     if (sectionRef.current) {
//       sectionObserver.observe(sectionRef.current);
//     }

//     if (headerRef.current) {
//       headerObserver.observe(headerRef.current);
//     }

//     if (mainRef.current) {
//       mainObserver.observe(mainRef.current);
//     }

//     if (gridRef.current) {
//       gridObserver.observe(gridRef.current);
//     }

//     if (bottomRef.current) {
//       bottomObserver.observe(bottomRef.current);
//     }

//     return () => {
//       sectionObserver.disconnect();
//       headerObserver.disconnect();
//       mainObserver.disconnect();
//       gridObserver.disconnect();
//       bottomObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="campus-preview">
//       {/* Background decorative elements */}
//       <div className="campus-bg-shape campus-bg-shape-1" />
//       <div className="campus-bg-shape campus-bg-shape-2" />
//       <div className="campus-bg-grid" />

//       <div className="campus-preview-container">
//         {/* =====================================
//             HEADER
//         ====================================== */}
//         <div ref={headerRef} className="campus-preview-header">
//           <div className="campus-header-content">
//             <span className="campus-tag">
//               <FaMapMarkerAlt />
//               OUR CAMPUS
//             </span>

//             <h2 className="campus-title">
//               More Than
//               <br />
//               <span className="campus-title-highlight">A Place to Learn.</span>
//             </h2>

//             <p className="campus-description">
//               Our campus is designed to give students the space, environment
//               and opportunities they need to learn, explore and grow with
//               confidence in every aspect of their development.
//             </p>

//             <Link to="/campus" className="campus-cta">
//               <span>Explore Our Campus</span>
//               <FaArrowRight />
//             </Link>
//           </div>

//           <div className="campus-header-highlights">
//             {campusHighlights.map((item, index) => (
//               <div key={index} className="campus-highlight-item">
//                 <div className="campus-highlight-icon">{item.icon}</div>
//                 <span className="campus-highlight-label">{item.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* =====================================
//             MAIN VISUAL
//         ====================================== */}
//         <div ref={mainRef} className="campus-main">
//           <div className="campus-main-image">
//             <img src={IMAGES.campusMain} alt="SNGA Campus" loading="lazy" />
//             <div className="campus-main-overlay" />
//             <div className="campus-main-badge">
//               <FaGraduationCap />
//               <span>SNGA Campus</span>
//             </div>
//             <div className="campus-main-number">01</div>
//           </div>

//           <div className="campus-main-content">
//             <div className="campus-main-heading">
//               <span className="campus-main-label">THE ENVIRONMENT</span>
//               <h3 className="campus-main-title">
//                 Where curiosity
//                 <br />
//                 <span className="campus-main-highlight">comes alive.</span>
//               </h3>
//             </div>

//             <p className="campus-main-desc">
//               From engaging classrooms to spaces for creativity, experimentation
//               and play, every part of our campus contributes to a meaningful
//               learning experience that inspires students daily.
//             </p>

//             <div className="campus-main-stats">
//               <div className="campus-main-stat">
//                 <strong>01</strong>
//                 <span>Safe & Welcoming</span>
//               </div>
//               <div className="campus-main-stat-divider" />
//               <div className="campus-main-stat">
//                 <strong>02</strong>
//                 <span>Learning Focused</span>
//               </div>
//               <div className="campus-main-stat-divider" />
//               <div className="campus-main-stat">
//                 <strong>03</strong>
//                 <span>Student Centric</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =====================================
//             FACILITIES GRID
//         ====================================== */}
//         <div ref={gridRef} className="campus-facilities">
//           <div className="campus-facilities-header">
//             <span className="campus-section-label">Campus Facilities</span>
//             <h3 className="campus-section-title">
//               Designed for <span className="campus-section-highlight">Student Success</span>
//             </h3>
//           </div>

//           <div className="campus-facilities-grid">
//             {facilities.map((facility) => (
//               <div
//                 key={facility.number}
//                 className="campus-facility-card"
//                 style={{ "--card-color": facility.color }}
//               >
//                 <div className="campus-facility-top">
//                   <span className="campus-facility-number">{facility.number}</span>
//                   <span className="campus-facility-tag">{facility.tag}</span>
//                 </div>

//                 <div
//                   className="campus-facility-icon"
//                   style={{ backgroundColor: `${facility.color}15`, color: facility.color }}
//                 >
//                   {facility.icon}
//                 </div>

//                 <h3 className="campus-facility-title">{facility.title}</h3>
//                 <p className="campus-facility-desc">{facility.description}</p>

//                 <div className="campus-facility-footer">
//                   <div className="campus-facility-line" />
//                   <span className="campus-facility-link">
//                     Learn More <FaArrowRight />
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* =====================================
//             BOTTOM
//         ====================================== */}
//         <div ref={bottomRef} className="campus-bottom">
//           <div className="campus-bottom-line" />

//           <div className="campus-bottom-content">
//             <span className="campus-bottom-label">OUR PHILOSOPHY</span>
//             <strong className="campus-bottom-quote">
//               A campus should inspire students
//               <em> to discover what they can become.</em>
//             </strong>
//           </div>

//           <Link to="/campus" className="campus-bottom-link">
//             <span>Discover SNGA</span>
//             <FaArrowRight />
//           </Link>

//           <div className="campus-bottom-line" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CampusPreview;



import { Link } from "react-router-dom";
import "./CampusPreview.css";

import campus from "../../assets/campus.jpg";
import learning from "../../assets/teaching.jpg";
import student from "../../assets/student.jpg";
import library from "../../assets/library.jpg";

// =====================================================
// TEMPORARY ONLINE IMAGES
// Replace these with actual SNGA campus photographs later.
// =====================================================

const IMAGES = {
  campus: campus,
  learning: learning,
  students: student,
  library: library,
};

const CampusPreview = () => {
  return (
    <section className="campus-preview">

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="campus-intro">

        <div className="campus-intro-inner">

          <div className="campus-intro-content">

            <div className="campus-eyebrow">
              <span />
              OUR CAMPUS
            </div>

            <h2>
              More than
              <br />
              a place to <strong>learn.</strong>
            </h2>

            <p>
              A calm, spacious environment designed to give students
              room to learn, explore, connect and grow with confidence.
            </p>

            <Link
              to="/campus"
              className="campus-intro-button"
            >
              <span>Explore Our Campus</span>
              <strong>→</strong>
            </Link>

          </div>


          <div className="campus-intro-side">

            <span>13.5 ACRES</span>
            <span>LEARNING</span>
            <span>COMMUNITY</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CAMPUS IMAGE
      ===================================================== */}

      <article className="campus-image-panel campus-main-panel">

        <img
          src={IMAGES.campus}
          alt="School campus"
          className="campus-panel-image"
          loading="lazy"
        />

        <div className="campus-panel-overlay" />

        <div className="campus-panel-inner">

          <div className="campus-panel-content">

            <div className="campus-panel-eyebrow">
              <span />
              THE CAMPUS
            </div>

            <h3>
              Space that
              <br />
              inspires <strong>growth.</strong>
            </h3>

            <p>
              Set in a calm and spacious environment, the SNGA campus
              gives students an atmosphere where learning feels natural,
              focused and inspiring.
            </p>

            <Link
              to="/infrastructure"
              className="campus-panel-button"
            >
              <span>Discover Our Campus</span>
              <strong>→</strong>
            </Link>

          </div>


          <div className="campus-panel-side">

            <span className="campus-panel-number">
              01
            </span>

            <div>
              <span>SPACE</span>
              <span>CALM</span>
              <span>GROWTH</span>
            </div>

          </div>

        </div>

      </article>


      {/* =====================================================
          LEARNING ENVIRONMENT
      ===================================================== */}

      <article className="campus-image-panel campus-learning-panel">

        <img
          src={IMAGES.learning}
          alt="Learning environment"
          className="campus-panel-image"
          loading="lazy"
        />

        <div className="campus-panel-overlay" />

        <div className="campus-panel-inner">

          <div className="campus-panel-content">

            <div className="campus-panel-eyebrow">
              <span />
              LEARNING SPACES
            </div>

            <h3>
              Every space
              <br />
              has a <strong>purpose.</strong>
            </h3>

            <p>
              Thoughtfully designed classrooms and learning spaces
              support concentration, interaction and curiosity throughout
              the school day.
            </p>

            <Link
              to="/infrastructure"
              className="campus-panel-link"
            >
              <span>Explore Learning Spaces</span>
              <strong>↗</strong>
            </Link>

          </div>


          <div className="campus-panel-side">

            <span className="campus-panel-number">
              02
            </span>

            <div>
              <span>CLASSROOMS</span>
              <span>DISCOVERY</span>
              <span>FOCUS</span>
            </div>

          </div>

        </div>

      </article>


      {/* =====================================================
          STUDENT LIFE
      ===================================================== */}

      <article className="campus-image-panel campus-student-panel">

        <img
          src={IMAGES.students}
          alt="Students learning together"
          className="campus-panel-image"
          loading="lazy"
        />

        <div className="campus-panel-overlay" />

        <div className="campus-panel-inner">

          <div className="campus-panel-content">

            <div className="campus-panel-eyebrow">
              <span />
              STUDENT LIFE
            </div>

            <h3>
              A place to
              <br />
              belong and <strong>become.</strong>
            </h3>

            <p>
              School life extends beyond lessons. Students have space
              to collaborate, express themselves, participate and build
              meaningful relationships.
            </p>

            <Link
              to="/campus"
              className="campus-panel-link"
            >
              <span>Discover Student Life</span>
              <strong>↗</strong>
            </Link>

          </div>


          <div className="campus-panel-side">

            <span className="campus-panel-number">
              03
            </span>

            <div>
              <span>CONNECT</span>
              <span>EXPLORE</span>
              <span>BELONG</span>
            </div>

          </div>

        </div>

      </article>


      {/* =====================================================
          LIBRARY / KNOWLEDGE
      ===================================================== */}

      <article className="campus-image-panel campus-library-panel">

        <img
          src={IMAGES.library}
          alt="School library"
          className="campus-panel-image"
          loading="lazy"
        />

        <div className="campus-panel-overlay" />

        <div className="campus-panel-inner">

          <div className="campus-panel-content">

            <div className="campus-panel-eyebrow">
              <span />
              KNOWLEDGE
            </div>

            <h3>
              Discover more.
              <br />
              <strong>Imagine further.</strong>
            </h3>

            <p>
              A learning environment enriched by books, resources,
              technology and opportunities to discover ideas beyond
              the classroom.
            </p>

            <Link
              to="/facilities"
              className="campus-panel-button"
            >
              <span>Explore Facilities</span>
              <strong>→</strong>
            </Link>

          </div>


          <div className="campus-panel-side">

            <span className="campus-panel-number">
              04
            </span>

            <div>
              <span>READ</span>
              <span>DISCOVER</span>
              <span>LEARN</span>
            </div>

          </div>

        </div>

      </article>


      {/* =====================================================
          CAMPUS FACTS
      ===================================================== */}

      <section className="campus-facts">

        <div className="campus-facts-inner">

          <div className="campus-facts-heading">

            <span>THE SNGA ENVIRONMENT</span>

            <h3>
              Built around
              <br />
              <strong>students.</strong>
            </h3>

          </div>


          <div className="campus-facts-grid">

            <div className="campus-fact">

              <strong>13.5</strong>

              <span>
                ACRES OF
                <br />
                CAMPUS
              </span>

            </div>


            <div className="campus-fact">

              <strong>500</strong>

              <span>
                SQ. FT.
                <br />
                CLASSROOMS
              </span>

            </div>


            <div className="campus-fact">

              <strong>3,500+</strong>

              <span>
                BOOKS IN
                <br />
                LIBRARY
              </span>

            </div>


            <div className="campus-fact">

              <strong>200</strong>

              <span>
                HALL
                <br />
                CAPACITY
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAMPUS STATEMENT
      ===================================================== */}

      <section className="campus-statement">

        <div className="campus-statement-inner">

          <div className="campus-statement-number">
            05
          </div>

          <div className="campus-statement-content">

            <span>OUR PHILOSOPHY</span>

            <h3>
              A campus should inspire
              <br />
              students to discover
              <br />
              <strong>what they can become.</strong>
            </h3>

          </div>

          <Link
            to="/campus"
            className="campus-statement-button"
          >
            <span>Discover SNGA</span>
            <strong>→</strong>
          </Link>

        </div>

      </section>

    </section>
  );
};

export default CampusPreview;