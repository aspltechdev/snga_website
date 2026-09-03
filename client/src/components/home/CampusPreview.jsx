// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaBuilding,
//   FaFlask,
//   FaBookOpen,
//   FaChild,
// } from "react-icons/fa";
// import "./CampusPreview.css";

// const CampusPreview = () => {
//   const facilities = [
//     {
//       icon: <FaBuilding />,
//       number: "01",
//       title: "Modern Campus",
//       description: "A welcoming environment designed for learning and growth.",
//     },
//     {
//       icon: <FaBookOpen />,
//       number: "02",
//       title: "Learning Spaces",
//       description: "Thoughtfully designed spaces that encourage curiosity.",
//     },
//     {
//       icon: <FaFlask />,
//       number: "03",
//       title: "Practical Learning",
//       description: "Facilities that turn classroom learning into experience.",
//     },
//     {
//       icon: <FaChild />,
//       number: "04",
//       title: "Student Environment",
//       description: "A positive atmosphere where every student can flourish.",
//     },
//   ];

//   return (
//     <section className="campus-preview">
//       <div className="campus-preview-container">

//         {/* Header */}
//         <div className="campus-preview-header">

//           <div className="campus-preview-heading">
//             <div className="campus-preview-label">
//               <span></span>
//               OUR CAMPUS
//             </div>

//             <h2 className="campus-preview-title">
//               More Than
//               <br />
//               <em>A Place to Learn.</em>
//             </h2>
//           </div>

//           <div className="campus-preview-header-right">
//             <p>
//               Our campus is designed to give students the space,
//               environment and opportunities they need to learn,
//               explore and grow with confidence.
//             </p>

//             <Link
//               to="/campus"
//               className="campus-preview-link"
//             >
//               <span>Explore Our Campus</span>
//               <FaArrowRight />
//             </Link>
//           </div>

//         </div>

//         {/* Main Visual */}
//         <div className="campus-preview-main">

//           <div className="campus-preview-image-wrap">

//             <div className="campus-preview-image">
//               <img
//                 src="/images/campus-main.jpg"
//                 alt="SNGA Campus"
//               />
//             </div>

//             <div className="campus-preview-image-label">
//               <span>SNGA CAMPUS</span>
//               <strong>LEARN • EXPLORE • GROW</strong>
//             </div>

//             <div className="campus-preview-image-number">
//               01
//             </div>

//           </div>

//           {/* Side Content */}
//           <div className="campus-preview-side">

//             <div className="campus-preview-side-heading">
//               <span>THE ENVIRONMENT</span>

//               <h3>
//                 Where curiosity
//                 <br />
//                 <em>comes alive.</em>
//               </h3>
//             </div>

//             <p>
//               From engaging classrooms to spaces for creativity,
//               experimentation and play, every part of our campus
//               contributes to a meaningful learning experience.
//             </p>

//             <div className="campus-preview-stats">

//               <div>
//                 <strong>01</strong>
//                 <span>Safe & Welcoming</span>
//               </div>

//               <div>
//                 <strong>02</strong>
//                 <span>Learning Focused</span>
//               </div>

//               <div>
//                 <strong>03</strong>
//                 <span>Student Centric</span>
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* Facilities */}
//         <div className="campus-preview-facilities">

//           {facilities.map((facility) => (
//             <div
//               className="campus-preview-facility"
//               key={facility.number}
//             >

//               <div className="campus-preview-facility-top">
//                 <span>{facility.number}</span>

//                 <div className="campus-preview-facility-icon">
//                   {facility.icon}
//                 </div>
//               </div>

//               <h3>{facility.title}</h3>

//               <p>{facility.description}</p>

//               <div className="campus-preview-facility-arrow">
//                 <FaArrowRight />
//               </div>

//             </div>
//           ))}

//         </div>

//         {/* Bottom */}
//         <div className="campus-preview-bottom">

//           <div className="campus-preview-bottom-line"></div>

//           <div className="campus-preview-bottom-content">
//             <span>OUR PHILOSOPHY</span>

//             <strong>
//               A campus should inspire students
//               <em> to discover what they can become.</em>
//             </strong>
//           </div>

//           <Link
//             to="/campus"
//             className="campus-preview-bottom-link"
//           >
//             <span>Discover SNGA</span>
//             <FaArrowRight />
//           </Link>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default CampusPreview;


import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaFlask,
  FaBookOpen,
  FaChild,
  FaTree,
  FaUsers,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import "./CampusPreview.css";

// Online placeholder images (replace with your actual images)
const IMAGES = {
  campusMain: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&auto=format",
  campusBuilding: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&auto=format",
};

const CampusPreview = () => {
  const facilities = [
    {
      icon: <FaBuilding />,
      number: "01",
      title: "Modern Campus",
      description: "A welcoming environment designed for learning and growth with state-of-the-art facilities.",
      color: "#3498db",
      tag: "Infrastructure",
    },
    {
      icon: <FaBookOpen />,
      number: "02",
      title: "Learning Spaces",
      description: "Thoughtfully designed spaces that encourage curiosity, collaboration and creativity.",
      color: "#5dade2",
      tag: "Classrooms",
    },
    {
      icon: <FaFlask />,
      number: "03",
      title: "Practical Learning",
      description: "Facilities that turn classroom learning into hands-on experience and discovery.",
      color: "#2e86c1",
      tag: "Labs",
    },
    {
      icon: <FaChild />,
      number: "04",
      title: "Student Environment",
      description: "A positive atmosphere where every student can flourish and reach their full potential.",
      color: "#85c1e9",
      tag: "Wellness",
    },
  ];

  const campusHighlights = [
    { icon: <FaTree />, label: "Green Campus" },
    { icon: <FaUsers />, label: "Diverse Community" },
    { icon: <FaShieldAlt />, label: "Safe Environment" },
    { icon: <FaClock />, label: "Extended Hours" },
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const gridRef = useRef(null);
  const bottomRef = useRef(null);

  // =====================================================
  // SCROLL TRIGGERED ANIMATIONS
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("campus-visible");
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-header");
          headerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const mainObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-main");
          mainObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const gridObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".campus-facility-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("reveal-card");
            }, index * 120);
          });
          gridObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const bottomObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-bottom");
          bottomObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (mainRef.current) {
      mainObserver.observe(mainRef.current);
    }

    if (gridRef.current) {
      gridObserver.observe(gridRef.current);
    }

    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      headerObserver.disconnect();
      mainObserver.disconnect();
      gridObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="campus-preview">
      {/* Background decorative elements */}
      <div className="campus-bg-shape campus-bg-shape-1" />
      <div className="campus-bg-shape campus-bg-shape-2" />
      <div className="campus-bg-grid" />

      <div className="campus-preview-container">
        {/* =====================================
            HEADER
        ====================================== */}
        <div ref={headerRef} className="campus-preview-header">
          <div className="campus-header-content">
            <span className="campus-tag">
              <FaMapMarkerAlt />
              OUR CAMPUS
            </span>

            <h2 className="campus-title">
              More Than
              <br />
              <span className="campus-title-highlight">A Place to Learn.</span>
            </h2>

            <p className="campus-description">
              Our campus is designed to give students the space, environment
              and opportunities they need to learn, explore and grow with
              confidence in every aspect of their development.
            </p>

            <Link to="/campus" className="campus-cta">
              <span>Explore Our Campus</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="campus-header-highlights">
            {campusHighlights.map((item, index) => (
              <div key={index} className="campus-highlight-item">
                <div className="campus-highlight-icon">{item.icon}</div>
                <span className="campus-highlight-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            MAIN VISUAL
        ====================================== */}
        <div ref={mainRef} className="campus-main">
          <div className="campus-main-image">
            <img src={IMAGES.campusMain} alt="SNGA Campus" loading="lazy" />
            <div className="campus-main-overlay" />
            <div className="campus-main-badge">
              <FaGraduationCap />
              <span>SNGA Campus</span>
            </div>
            <div className="campus-main-number">01</div>
          </div>

          <div className="campus-main-content">
            <div className="campus-main-heading">
              <span className="campus-main-label">THE ENVIRONMENT</span>
              <h3 className="campus-main-title">
                Where curiosity
                <br />
                <span className="campus-main-highlight">comes alive.</span>
              </h3>
            </div>

            <p className="campus-main-desc">
              From engaging classrooms to spaces for creativity, experimentation
              and play, every part of our campus contributes to a meaningful
              learning experience that inspires students daily.
            </p>

            <div className="campus-main-stats">
              <div className="campus-main-stat">
                <strong>01</strong>
                <span>Safe & Welcoming</span>
              </div>
              <div className="campus-main-stat-divider" />
              <div className="campus-main-stat">
                <strong>02</strong>
                <span>Learning Focused</span>
              </div>
              <div className="campus-main-stat-divider" />
              <div className="campus-main-stat">
                <strong>03</strong>
                <span>Student Centric</span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            FACILITIES GRID
        ====================================== */}
        <div ref={gridRef} className="campus-facilities">
          <div className="campus-facilities-header">
            <span className="campus-section-label">Campus Facilities</span>
            <h3 className="campus-section-title">
              Designed for <span className="campus-section-highlight">Student Success</span>
            </h3>
          </div>

          <div className="campus-facilities-grid">
            {facilities.map((facility) => (
              <div
                key={facility.number}
                className="campus-facility-card"
                style={{ "--card-color": facility.color }}
              >
                <div className="campus-facility-top">
                  <span className="campus-facility-number">{facility.number}</span>
                  <span className="campus-facility-tag">{facility.tag}</span>
                </div>

                <div
                  className="campus-facility-icon"
                  style={{ backgroundColor: `${facility.color}15`, color: facility.color }}
                >
                  {facility.icon}
                </div>

                <h3 className="campus-facility-title">{facility.title}</h3>
                <p className="campus-facility-desc">{facility.description}</p>

                <div className="campus-facility-footer">
                  <div className="campus-facility-line" />
                  <span className="campus-facility-link">
                    Learn More <FaArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            BOTTOM
        ====================================== */}
        <div ref={bottomRef} className="campus-bottom">
          <div className="campus-bottom-line" />

          <div className="campus-bottom-content">
            <span className="campus-bottom-label">OUR PHILOSOPHY</span>
            <strong className="campus-bottom-quote">
              A campus should inspire students
              <em> to discover what they can become.</em>
            </strong>
          </div>

          <Link to="/campus" className="campus-bottom-link">
            <span>Discover SNGA</span>
            <FaArrowRight />
          </Link>

          <div className="campus-bottom-line" />
        </div>
      </div>
    </section>
  );
};

export default CampusPreview;