// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight, FaTrophy } from "react-icons/fa";
// import achievementService from "../../services/achievement.service";
// import "./AchievementsPreview.css";

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//   "http://localhost:5000";

// const getImageUrl = (image) => {
//   if (!image) return "";

//   if (image.startsWith("http://") || image.startsWith("https://")) {
//     return image;
//   }

//   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// };

// const AchievementsPreview = () => {
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAchievements = async () => {
//       try {
//         const response = await achievementService.getAll();

//         const data = response?.data || response || [];

//         const published = Array.isArray(data)
//           ? data.filter((item) => item.isPublished !== false)
//           : [];

//         setAchievements(published.slice(0, 3));
//       } catch (error) {
//         console.error("Failed to load achievements:", error);
//         setAchievements([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAchievements();
//   }, []);

//   return (
//     <section className="achievements-preview">
//       <div className="achievements-preview-container">

//         {/* Header */}
//         <div className="achievements-preview-header">

//           <div className="achievements-preview-heading">
//             <div className="achievements-preview-label">
//               <span></span>
//               STUDENT ACHIEVEMENTS
//             </div>

//             <h2 className="achievements-preview-title">
//               Celebrating
//               <br />
//               <em>Every Achievement.</em>
//             </h2>
//           </div>

//           <div className="achievements-preview-header-right">
//             <p>
//               Every achievement represents dedication, perseverance and the
//               confidence to aim higher.
//             </p>

//             <Link
//               to="/achievements"
//               className="achievements-preview-link"
//             >
//               <span>View All Achievements</span>
//               <FaArrowRight />
//             </Link>
//           </div>
//         </div>

//         {/* Content */}
//         {loading ? (
//           <div className="achievements-preview-loading">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         ) : achievements.length > 0 ? (
//           <div className="achievements-preview-grid">
//             {achievements.map((achievement, index) => {
//               const image = getImageUrl(achievement.image);

//               return (
//                 <article
//                   className="achievement-preview-card"
//                   key={achievement.id}
//                 >
//                   {/* Image */}
//                   <div className="achievement-preview-image">
//                     {image ? (
//                       <img
//                         src={image}
//                         alt={achievement.title || "Student achievement"}
//                       />
//                     ) : (
//                       <div className="achievement-preview-placeholder">
//                         <FaTrophy />
//                       </div>
//                     )}

//                     <span className="achievement-preview-index">
//                       0{index + 1}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="achievement-preview-content">

//                     <div className="achievement-preview-meta">
//                       {achievement.category && (
//                         <span>{achievement.category}</span>
//                       )}

//                       {achievement.achievementDate && (
//                         <span>
//                           {new Date(
//                             achievement.achievementDate
//                           ).getFullYear()}
//                         </span>
//                       )}
//                     </div>

//                     <h3>{achievement.title}</h3>

//                     {achievement.studentName && (
//                       <div className="achievement-preview-student">
//                         <span></span>
//                         {achievement.studentName}
//                       </div>
//                     )}

//                     {achievement.description && (
//                       <p>{achievement.description}</p>
//                     )}

//                     <Link
//                       to="/achievements"
//                       className="achievement-preview-read"
//                     >
//                       <span>Read More</span>
//                       <FaArrowRight />
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="achievements-preview-empty">
//             <div className="achievements-preview-empty-icon">
//               <FaTrophy />
//             </div>

//             <h3>Great Things Are Happening</h3>

//             <p>
//               Student achievements and recognitions will be showcased here.
//             </p>
//           </div>
//         )}

//         {/* Bottom Statement */}
//         <div className="achievements-preview-footer">

//           <div className="achievements-preview-footer-line"></div>

//           <div className="achievements-preview-footer-content">
//             <span className="achievements-preview-footer-number">
//               01
//             </span>

//             <div>
//               <strong>ACHIEVE</strong>
//               <span>Dream beyond limits</span>
//             </div>

//             <div>
//               <strong>INSPIRE</strong>
//               <span>Lead by example</span>
//             </div>

//             <div>
//               <strong>EXCEL</strong>
//               <span>Become your best</span>
//             </div>
//           </div>

//           <div className="achievements-preview-footer-line"></div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AchievementsPreview;


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaTrophy, 
  FaMedal, 
  FaAward, 
  FaStar,
  FaGraduationCap,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";
import achievementService from "../../services/achievement.service";
import "./AchievementsPreview.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getImageUrl = (image) => {
  if (!image) return "";

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const AchievementsPreview = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const footerRef = useRef(null);

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
          entry.target.classList.add("achievements-visible");
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

    const gridObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".achievement-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("reveal-card");
            }, index * 120);
          });
          gridObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".achievements-footer-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("reveal-footer-item");
            }, index * 150);
          });
          footerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (gridRef.current) {
      gridObserver.observe(gridRef.current);
    }

    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      headerObserver.disconnect();
      gridObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  // =====================================================
  // FETCH ACHIEVEMENTS
  // =====================================================

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await achievementService.getAll();

        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter((item) => item.isPublished !== false)
          : [];

        setAchievements(published.slice(0, 3));
      } catch (error) {
        console.error("Failed to load achievements:", error);
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  // =====================================================
  // STATS DATA
  // =====================================================

  const stats = [
    { number: "50+", label: "Awards Won", icon: <FaTrophy /> },
    { number: "100+", label: "Student Achievements", icon: <FaMedal /> },
    { number: "25+", label: "Competitions", icon: <FaAward /> },
    { number: "95%", label: "Success Rate", icon: <FaStar /> },
  ];

  return (
    <section ref={sectionRef} className="achievements-preview">
      {/* Background decorative elements */}
      <div className="achievements-bg-shape achievements-bg-shape-1" />
      <div className="achievements-bg-shape achievements-bg-shape-2" />
      <div className="achievements-bg-grid" />

      <div className="achievements-preview-container">
        {/* =====================================
            HEADER
        ====================================== */}
        <div ref={headerRef} className="achievements-preview-header">
          <div className="achievements-header-content">
            <span className="achievements-tag">
              <FaTrophy />
              STUDENT ACHIEVEMENTS
            </span>

            <h2 className="achievements-title">
              Celebrating
              <br />
              <span className="achievements-title-highlight">Every Achievement.</span>
            </h2>

            <p className="achievements-description">
              Every achievement represents dedication, perseverance and the
              confidence to aim higher. We celebrate the success of our students
              who make us proud.
            </p>

            <Link to="/achievements" className="achievements-cta">
              <span>View All Achievements</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="achievements-header-stats">
            {stats.map((stat, index) => (
              <div key={index} className="achievements-stat">
                <div className="achievements-stat-icon">{stat.icon}</div>
                <span className="achievements-stat-number">{stat.number}</span>
                <span className="achievements-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            ACHIEVEMENTS GRID
        ====================================== */}
        {loading ? (
          <div className="achievements-loading">
            <div className="achievements-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Loading achievements...</p>
          </div>
        ) : achievements.length > 0 ? (
          <div ref={gridRef} className="achievements-grid">
            {achievements.map((achievement, index) => {
              const image = getImageUrl(achievement.image);

              return (
                <article
                  className="achievement-card"
                  key={achievement.id}
                >
                  <div className="achievement-card-image">
                    {image ? (
                      <img
                        src={image}
                        alt={achievement.title || "Student achievement"}
                        loading="lazy"
                      />
                    ) : (
                      <div className="achievement-card-placeholder">
                        <FaTrophy />
                      </div>
                    )}
                    <div className="achievement-card-overlay" />
                    <span className="achievement-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {achievement.category && (
                      <span className="achievement-card-tag">
                        {achievement.category}
                      </span>
                    )}
                  </div>

                  <div className="achievement-card-content">
                    <div className="achievement-card-meta">
                      {achievement.studentName && (
                        <span className="achievement-card-student">
                          <FaUserGraduate />
                          {achievement.studentName}
                        </span>
                      )}
                      {achievement.achievementDate && (
                        <span className="achievement-card-date">
                          <FaCalendarAlt />
                          {new Date(achievement.achievementDate).getFullYear()}
                        </span>
                      )}
                    </div>

                    <h3 className="achievement-card-title">
                      {achievement.title}
                    </h3>

                    {achievement.description && (
                      <p className="achievement-card-desc">
                        {achievement.description}
                      </p>
                    )}

                    <Link
                      to="/achievements"
                      className="achievement-card-link"
                    >
                      <span>Read More</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="achievements-empty">
            <div className="achievements-empty-icon">
              <FaTrophy />
            </div>
            <h3>Great Things Are Happening</h3>
            <p>Student achievements and recognitions will be showcased here.</p>
          </div>
        )}

        {/* =====================================
            FOOTER / BOTTOM STATEMENT
        ====================================== */}
        <div ref={footerRef} className="achievements-footer">
          <div className="achievements-footer-line" />

          <div className="achievements-footer-content">
            <div className="achievements-footer-item">
              <span className="achievements-footer-number">01</span>
              <div>
                <strong>ACHIEVE</strong>
                <span>Dream beyond limits</span>
              </div>
            </div>

            <div className="achievements-footer-divider" />

            <div className="achievements-footer-item">
              <span className="achievements-footer-number">02</span>
              <div>
                <strong>INSPIRE</strong>
                <span>Lead by example</span>
              </div>
            </div>

            <div className="achievements-footer-divider" />

            <div className="achievements-footer-item">
              <span className="achievements-footer-number">03</span>
              <div>
                <strong>EXCEL</strong>
                <span>Become your best</span>
              </div>
            </div>
          </div>

          <div className="achievements-footer-line" />
        </div>
      </div>
    </section>
  );
};

export default AchievementsPreview;