
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaCheck,
//   FaGraduationCap,
//   FaBookOpen,
//   FaUsers,
//   FaAward,
//   FaHeart,
// } from "react-icons/fa";

// import "./AboutPreview.css";

// import schoolImage from "../../assets/about.png";

// const AboutPreview = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);
//   const statsRef = useRef(null);
//   const pointsRef = useRef(null);

//   const highlights = [
//     {
//       icon: <FaBookOpen />,
//       text: "Holistic Learning Environment",
//     },
//     {
//       icon: <FaUsers />,
//       text: "Experienced & Dedicated Faculty",
//     },
//     {
//       icon: <FaHeart />,
//       text: "Focus on Values & Character",
//     },
//     {
//       icon: <FaAward />,
//       text: "Student-Centred Education",
//     },
//   ];

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.15,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     // Section visibility observer
//     const sectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           sectionObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Image observer
//     const imageObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-image");
//             imageObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     // Content observer
//     const contentObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-content");
//             contentObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     // Stats observer
//     const statsObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-stats");
//             statsObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     // Points observer (staggered)
//     const pointsObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const points = entry.target.querySelectorAll(".about-preview-point");
//             points.forEach((point, index) => {
//               setTimeout(() => {
//                 point.classList.add("reveal-point");
//               }, index * 120);
//             });
//             pointsObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       sectionObserver.observe(sectionRef.current);
//     }

//     if (imageRef.current) {
//       imageObserver.observe(imageRef.current);
//     }

//     if (contentRef.current) {
//       contentObserver.observe(contentRef.current);
//     }

//     if (statsRef.current) {
//       statsObserver.observe(statsRef.current);
//     }

//     if (pointsRef.current) {
//       pointsObserver.observe(pointsRef.current);
//     }

//     return () => {
//       sectionObserver.disconnect();
//       imageObserver.disconnect();
//       contentObserver.disconnect();
//       statsObserver.disconnect();
//       pointsObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`about-preview ${isVisible ? "about-preview-visible" : ""}`}
//     >
//       {/* Background decorative elements */}
//       <div className="about-preview-bg-blob about-preview-bg-blob-1" />
//       <div className="about-preview-bg-blob about-preview-bg-blob-2" />

//       <div className="about-preview-container">
//         {/* =====================================
//             IMAGE SIDE
//         ====================================== */}
//         <div ref={imageRef} className="about-preview-visual">
//           <div className="about-preview-image-wrap">
//             <img
//               src={schoolImage}
//               alt="Shree Narayan Guru Academy"
//               className="about-preview-image"
//             />

//             {/* Floating decorative elements */}
//             <div className="about-preview-float about-preview-float-1">
//               <span>✦</span>
//             </div>
//             <div className="about-preview-float about-preview-float-2">
//               <span>✦</span>
//             </div>
//           </div>

//           {/* Experience Card */}
//           <div className="about-preview-experience">
//             <div className="about-preview-experience-icon">
//               <FaGraduationCap />
//             </div>
//             <div>
//               <strong>25+ Years</strong>
//               <span>of Excellence in Education</span>
//             </div>
//           </div>

//           {/* Decorative Shapes */}
//           <div className="about-preview-shape" />
//           <div className="about-preview-shape about-preview-shape-2" />
//         </div>

//         {/* =====================================
//             CONTENT SIDE
//         ====================================== */}
//         <div ref={contentRef} className="about-preview-content">
//           <div className="about-preview-label">
//             <span className="about-preview-label-line" />
//             <span className="about-preview-label-text">ABOUT SNGA</span>
//           </div>

//           <h2 className="about-preview-title">
//             Nurturing Young Minds,
//             <br />
//             <span className="about-preview-title-emphasis">
//               Building Bright Futures.
//             </span>
//           </h2>

//           <p className="about-preview-description">
//             Shree Narayan Guru Academy is committed to providing a nurturing
//             and inspiring learning environment where every student is encouraged
//             to discover their potential, develop confidence, and grow into a
//             responsible individual.
//           </p>

//           <p className="about-preview-description about-preview-description-secondary">
//             We believe education goes beyond textbooks. Through academics,
//             values, creativity and character building, we prepare our students
//             to face the future with knowledge and confidence.
//           </p>

//           {/* =================================
//               HIGHLIGHTS
//           ================================= */}
//           <div ref={pointsRef} className="about-preview-points">
//             {highlights.map((item, index) => (
//               <div key={index} className="about-preview-point">
//                 <span className="about-preview-check">{item.icon}</span>
//                 <span>{item.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* =================================
//               STATS
//           ================================= */}
//           <div ref={statsRef} className="about-preview-stats">
//             <div className="about-preview-stat">
//               <span className="about-preview-stat-number">500+</span>
//               <span className="about-preview-stat-label">Students</span>
//             </div>
//             <div className="about-preview-stat-divider" />
//             <div className="about-preview-stat">
//               <span className="about-preview-stat-number">40+</span>
//               <span className="about-preview-stat-label">Teachers</span>
//             </div>
//             <div className="about-preview-stat-divider" />
//             <div className="about-preview-stat">
//               <span className="about-preview-stat-number">25+</span>
//               <span className="about-preview-stat-label">Years of Excellence</span>
//             </div>
//           </div>

//           {/* =================================
//               BUTTON
//           ================================= */}
//           <Link to="/about" className="about-preview-button">
//             <span>Discover Our School</span>
//             <span className="about-preview-button-icon">
//               <FaArrowRight />
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutPreview;

// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaGraduationCap,
//   FaBookOpen,
//   FaUsers,
//   FaAward,
//   FaHeart,
//   FaChalkboardTeacher,
//   FaTree,
//   FaQuoteLeft,
// } from "react-icons/fa";

// import "./AboutPreview.css";

// import schoolImage from "../../assets/about.png";

// const AboutPreview = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);
//   const statsRef = useRef(null);

//   const highlights = [
//     {
//       icon: <FaBookOpen />,
//       text: "Holistic Learning Environment",
//     },
//     {
//       icon: <FaUsers />,
//       text: "Experienced & Dedicated Faculty",
//     },
//     {
//       icon: <FaHeart />,
//       text: "Focus on Values & Character",
//     },
//     {
//       icon: <FaAward />,
//       text: "Student-Centred Education",
//     },
//   ];

//   const stats = [
//     { number: "500+", label: "Students", icon: <FaUsers /> },
//     { number: "40+", label: "Teachers", icon: <FaChalkboardTeacher /> },
//     { number: "25+", label: "Years of Excellence", icon: <FaAward /> },
//     { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
//   ];

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.15,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const sectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           sectionObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const imageObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-image");
//             imageObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const contentObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-content");
//             contentObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const statsObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-stats");
//             statsObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       sectionObserver.observe(sectionRef.current);
//     }

//     if (imageRef.current) {
//       imageObserver.observe(imageRef.current);
//     }

//     if (contentRef.current) {
//       contentObserver.observe(contentRef.current);
//     }

//     if (statsRef.current) {
//       statsObserver.observe(statsRef.current);
//     }

//     return () => {
//       sectionObserver.disconnect();
//       imageObserver.disconnect();
//       contentObserver.disconnect();
//       statsObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`ap ${isVisible ? "ap-visible" : ""}`}
//     >
//       <div className="ap-container">
//         {/* =====================================
//             CONTENT SIDE
//         ====================================== */}
//         <div ref={contentRef} className="ap-content">
//           <div className="ap-label">
//             <span className="ap-label-line" />
//             <span className="ap-label-text">About SNGA</span>
//           </div>

//           <h2 className="ap-title">
//             Nurturing Young Minds,
//             <br />
//             <span className="ap-title-emphasis">
//               Building Bright Futures.
//             </span>
//           </h2>

//           <p className="ap-description">
//             Shifan Noor Global Academy is committed to providing a nurturing
//             and inspiring learning environment where every student is encouraged
//             to discover their potential, develop confidence, and grow into a
//             responsible individual.
//           </p>

//           <p className="ap-description ap-description-secondary">
//             We believe education goes beyond textbooks. Through academics,
//             values, creativity and character building, we prepare our students
//             to face the future with knowledge and confidence.
//           </p>

//           {/* Highlights Grid */}
//           <div className="ap-highlights">
//             {highlights.map((item, index) => (
//               <div key={index} className="ap-highlight">
//                 <span className="ap-highlight-icon">{item.icon}</span>
//                 <span className="ap-highlight-text">{item.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* Stats */}
//           <div ref={statsRef} className="ap-stats">
//             {stats.map((stat, index) => (
//               <div key={index} className="ap-stat">
//                 <span className="ap-stat-icon">{stat.icon}</span>
//                 <div>
//                   <span className="ap-stat-number">{stat.number}</span>
//                   <span className="ap-stat-label">{stat.label}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Button */}
//           <Link to="/about" className="ap-button">
//             <span>Discover Our School</span>
//             <FaArrowRight />
//           </Link>
//         </div>

//         {/* =====================================
//             IMAGE SIDE
//         ====================================== */}
//         <div ref={imageRef} className="ap-visual">
//           <div className="ap-image-wrap">
//             <img
//               src={schoolImage}
//               alt="Shifan Noor Global Academy"
//               className="ap-image"
//             />
//             <div className="ap-image-overlay" />
//           </div>

//           {/* Experience Badge */}
//           <div className="ap-badge">
//             <FaGraduationCap />
//             <div>
//               <strong>25+ Years</strong>
//               <span>of Excellence in Education</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutPreview;



import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./AboutPreview.css";
import schoolImage from "../../assets/about.png";

const AboutPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("ap-visible");
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="ap">
      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="ap-intro">
        <div className="ap-container">
          <div className="ap-topline">
            <span>ABOUT SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>02 / 09</span>
          </div>

          <div className="ap-intro-grid">
            <div className="ap-title-block">
              <span className="ap-kicker">
                A PLACE TO LEARN
              </span>

              <h2>
                More than
                <br />
                <span>a school.</span>
              </h2>
            </div>

            <div className="ap-intro-copy">
              <p>
                Shifan Noor Global Academy creates a learning
                environment where knowledge, skills, values and
                confidence grow together.
              </p>

              <Link
                to="/about"
                className="ap-intro-link"
              >
                Discover our story
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FEATURE IMAGE + STORY
      ====================================================== */}

      <div className="ap-story">
        <div className="ap-container">
          <div className="ap-story-grid">

            {/* IMAGE */}

            <div className="ap-visual">
              <div className="ap-image-frame">
                <img
                  src={schoolImage}
                  alt="Shifan Noor Global Academy campus"
                  className="ap-image"
                />

                <div className="ap-image-label">
                  <span>01</span>
                  <span>THE SNGA CAMPUS</span>
                </div>

                <div className="ap-image-location">
                  Ramanathapuram
                  <br />
                  Tamil Nadu
                </div>
              </div>
            </div>

            {/* CONTENT */}

            <div className="ap-story-content">

              <div className="ap-story-number">
                <span>13.5</span>
                <small>ACRES</small>
              </div>

              <div className="ap-story-copy">

                <span className="ap-section-label">
                  OUR ENVIRONMENT
                </span>

                <h3>
                  A calm space
                  <br />
                  <span>for growing minds.</span>
                </h3>

                <p>
                  Located at Venkulam on the
                  Ramanathapuram–Devipattinam main road,
                  the SNGA campus is set within a calm,
                  serene and lush green environment designed
                  to support meaningful learning.
                </p>

                <p>
                  Classrooms, digital learning spaces,
                  laboratories, a library and areas for
                  activities come together to create an
                  environment where students can learn,
                  explore and develop beyond textbooks.
                </p>

                <Link
                  to="/history"
                  className="ap-story-link"
                >
                  <span>Explore the school</span>
                  <span>→</span>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOUR CORE IDEAS
      ====================================================== */}

      <div className="ap-principles">
        <div className="ap-container">

          <div className="ap-principles-heading">
            <span>WHAT WE BELIEVE</span>

            <p>
              Education is not only about what students know.
              It is also about who they become.
            </p>
          </div>

          <div className="ap-principles-list">

            <div className="ap-principle">
              <span>01</span>

              <div>
                <h3>Knowledge</h3>
                <p>
                  Building strong foundations and encouraging
                  students to understand, question and discover.
                </p>
              </div>
            </div>

            <div className="ap-principle">
              <span>02</span>

              <div>
                <h3>Skills</h3>
                <p>
                  Developing practical abilities that help
                  students approach challenges with confidence.
                </p>
              </div>
            </div>

            <div className="ap-principle">
              <span>03</span>

              <div>
                <h3>Values</h3>
                <p>
                  Nurturing healthy attitudes, responsibility,
                  character and respect for others.
                </p>
              </div>
            </div>

            <div className="ap-principle">
              <span>04</span>

              <div>
                <h3>Confidence</h3>
                <p>
                  Helping every student develop self-belief
                  and readiness for the challenges ahead.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          STATEMENT
      ====================================================== */}

      <div className="ap-statement">
        <div className="ap-container">

          <div className="ap-statement-grid">

            <span className="ap-statement-number">
              03
            </span>

            <h3>
              Learning should
              <br />
              shape the
              <br />
              <span>whole person.</span>
            </h3>

            <div className="ap-statement-copy">
              <p>
                At SNGA, education brings together academic
                learning, personal development, co-curricular
                experiences and values to help students grow
                into confident individuals.
              </p>

              <Link
                to="/vision-mission"
                className="ap-statement-link"
              >
                Our vision & mission
                <span>↗</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINK
      ====================================================== */}

      <div className="ap-bottom">
        <div className="ap-container">

          <div className="ap-bottom-inner">

            <div>
              <span className="ap-kicker">
                GET TO KNOW SNGA
              </span>

              <h3>
                Discover what makes
                <br />
                <span>our school different.</span>
              </h3>
            </div>

            <Link
              to="/about"
              className="ap-bottom-button"
            >
              Explore About SNGA
              <span>↗</span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;