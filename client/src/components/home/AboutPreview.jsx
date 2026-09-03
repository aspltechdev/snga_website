
// import { Link } from "react-router-dom";

// import {
//   FaArrowRight,
//   FaBookOpen,
//   FaUsers,
//   FaHeart,
//   FaAward,
// } from "react-icons/fa";

// import "./AboutPreview.css";

// import schoolImage from "../../assets/about.png";

// const AboutPreview = () => {
//   const highlights = [
//     {
//       icon: <FaBookOpen />,
//       text: "Holistic & Value-Based Education",
//     },
//     {
//       icon: <FaUsers />,
//       text: "Dedicated Learning Environment",
//     },
//     {
//       icon: <FaHeart />,
//       text: "Character, Confidence & Values",
//     },
//     {
//       icon: <FaAward />,
//       text: "Academic, Sports & Co-Curricular Growth",
//     },
//   ];

//   return (
//     <section className="about-preview">
//       {/* Background decorative elements */}
//       <div className="about-preview-bg-blob about-preview-bg-blob-1" />
//       <div className="about-preview-bg-blob about-preview-bg-blob-2" />

//       <div className="about-preview-container">

//         {/* =====================================
//             IMAGE SIDE
//         ====================================== */}

//         <div className="about-preview-visual">
//           <div className="about-preview-image-wrap">
//             <img
//               src={schoolImage}
//               alt="Shifan Noor Global Academy campus"
//               className="about-preview-image"
//             />

//             <div className="about-preview-float about-preview-float-1">
//               <span>✦</span>
//             </div>

//             <div className="about-preview-float about-preview-float-2">
//               <span>✦</span>
//             </div>
//           </div>

//           {/* Campus Highlight */}
//           <div className="about-preview-experience">
//             <div className="about-preview-experience-icon">
//               <FaBookOpen />
//             </div>

//             <div>
//               <strong>13.5 Acres</strong>
//               <span>
//                 Green & Serene Learning Campus
//               </span>
//             </div>
//           </div>

//           <div className="about-preview-shape" />
//           <div className="about-preview-shape about-preview-shape-2" />
//         </div>

//         {/* =====================================
//             CONTENT SIDE
//         ====================================== */}

//         <div className="about-preview-content">

//           <div className="about-preview-label">
//             <span className="about-preview-label-line" />

//             <span className="about-preview-label-text">
//               ABOUT SNGA
//             </span>
//           </div>

//           <h2 className="about-preview-title">
//             Inspiring Young Minds,
//             <br />

//             <span className="about-preview-title-emphasis">
//               Shaping Confident Futures.
//             </span>
//           </h2>

//           <p className="about-preview-description">
//             Shifan Noor Global Academy is committed to
//             providing a holistic learning environment where
//             knowledge, skills, values and confidence come
//             together to shape every child's future.
//           </p>

//           <p className="about-preview-description about-preview-description-secondary">
//             Set across a calm and lush green 13.5-acre
//             campus in Ramanathapuram, the school provides
//             students with modern learning spaces, digital
//             classrooms, laboratories, library facilities,
//             sports and opportunities to discover their
//             individual potential.
//           </p>

//           {/* =================================
//               HIGHLIGHTS
//           ================================= */}

//           <div className="about-preview-points">
//             {highlights.map((item, index) => (
//               <div
//                 key={index}
//                 className="about-preview-point"
//                 style={{
//                   animationDelay: `${index * 0.1}s`,
//                 }}
//               >
//                 <span className="about-preview-check">
//                   {item.icon}
//                 </span>

//                 <span>{item.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* =================================
//               STATS
//           ================================= */}

//           <div className="about-preview-stats">

//             <div className="about-preview-stat">
//               <span className="about-preview-stat-number">
//                 13.5
//               </span>

//               <span className="about-preview-stat-label">
//                 Acres of Campus
//               </span>
//             </div>

//             <div className="about-preview-stat-divider" />

//             <div className="about-preview-stat">
//               <span className="about-preview-stat-number">
//                 3500+
//               </span>

//               <span className="about-preview-stat-label">
//                 Library Books
//               </span>
//             </div>

//             <div className="about-preview-stat-divider" />

//             <div className="about-preview-stat">
//               <span className="about-preview-stat-number">
//                 500
//               </span>

//               <span className="about-preview-stat-label">
//                 Sq. Ft. Classrooms
//               </span>
//             </div>

//           </div>

//           {/* =================================
//               BUTTON
//           ================================= */}

//           <Link
//             to="/about"
//             className="about-preview-button"
//           >
//             <span>
//               Discover Our School
//             </span>

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

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaGraduationCap,
  FaBookOpen,
  FaUsers,
  FaAward,
  FaHeart,
} from "react-icons/fa";

import "./AboutPreview.css";

import schoolImage from "../../assets/about.png";

const AboutPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const pointsRef = useRef(null);

  const highlights = [
    {
      icon: <FaBookOpen />,
      text: "Holistic Learning Environment",
    },
    {
      icon: <FaUsers />,
      text: "Experienced & Dedicated Faculty",
    },
    {
      icon: <FaHeart />,
      text: "Focus on Values & Character",
    },
    {
      icon: <FaAward />,
      text: "Student-Centred Education",
    },
  ];

  // =====================================================
  // SCROLL TRIGGERED ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    // Section visibility observer
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Image observer
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-image");
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Content observer
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-content");
            contentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Stats observer
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-stats");
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Points observer (staggered)
    const pointsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const points = entry.target.querySelectorAll(".about-preview-point");
            points.forEach((point, index) => {
              setTimeout(() => {
                point.classList.add("reveal-point");
              }, index * 120);
            });
            pointsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    if (pointsRef.current) {
      pointsObserver.observe(pointsRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      imageObserver.disconnect();
      contentObserver.disconnect();
      statsObserver.disconnect();
      pointsObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-preview ${isVisible ? "about-preview-visible" : ""}`}
    >
      {/* Background decorative elements */}
      <div className="about-preview-bg-blob about-preview-bg-blob-1" />
      <div className="about-preview-bg-blob about-preview-bg-blob-2" />

      <div className="about-preview-container">
        {/* =====================================
            IMAGE SIDE
        ====================================== */}
        <div ref={imageRef} className="about-preview-visual">
          <div className="about-preview-image-wrap">
            <img
              src={schoolImage}
              alt="Shree Narayan Guru Academy"
              className="about-preview-image"
            />

            {/* Floating decorative elements */}
            <div className="about-preview-float about-preview-float-1">
              <span>✦</span>
            </div>
            <div className="about-preview-float about-preview-float-2">
              <span>✦</span>
            </div>
          </div>

          {/* Experience Card */}
          <div className="about-preview-experience">
            <div className="about-preview-experience-icon">
              <FaGraduationCap />
            </div>
            <div>
              <strong>25+ Years</strong>
              <span>of Excellence in Education</span>
            </div>
          </div>

          {/* Decorative Shapes */}
          <div className="about-preview-shape" />
          <div className="about-preview-shape about-preview-shape-2" />
        </div>

        {/* =====================================
            CONTENT SIDE
        ====================================== */}
        <div ref={contentRef} className="about-preview-content">
          <div className="about-preview-label">
            <span className="about-preview-label-line" />
            <span className="about-preview-label-text">ABOUT SNGA</span>
          </div>

          <h2 className="about-preview-title">
            Nurturing Young Minds,
            <br />
            <span className="about-preview-title-emphasis">
              Building Bright Futures.
            </span>
          </h2>

          <p className="about-preview-description">
            Shree Narayan Guru Academy is committed to providing a nurturing
            and inspiring learning environment where every student is encouraged
            to discover their potential, develop confidence, and grow into a
            responsible individual.
          </p>

          <p className="about-preview-description about-preview-description-secondary">
            We believe education goes beyond textbooks. Through academics,
            values, creativity and character building, we prepare our students
            to face the future with knowledge and confidence.
          </p>

          {/* =================================
              HIGHLIGHTS
          ================================= */}
          <div ref={pointsRef} className="about-preview-points">
            {highlights.map((item, index) => (
              <div key={index} className="about-preview-point">
                <span className="about-preview-check">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* =================================
              STATS
          ================================= */}
          <div ref={statsRef} className="about-preview-stats">
            <div className="about-preview-stat">
              <span className="about-preview-stat-number">500+</span>
              <span className="about-preview-stat-label">Students</span>
            </div>
            <div className="about-preview-stat-divider" />
            <div className="about-preview-stat">
              <span className="about-preview-stat-number">40+</span>
              <span className="about-preview-stat-label">Teachers</span>
            </div>
            <div className="about-preview-stat-divider" />
            <div className="about-preview-stat">
              <span className="about-preview-stat-number">25+</span>
              <span className="about-preview-stat-label">Years of Excellence</span>
            </div>
          </div>

          {/* =================================
              BUTTON
          ================================= */}
          <Link to="/about" className="about-preview-button">
            <span>Discover Our School</span>
            <span className="about-preview-button-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;