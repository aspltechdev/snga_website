

// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import achievementService from "../../services/achievement.service";
// // import "./AchievementsPreview.css";

// // import art from "../../assets/arts.jpg";
// // import learn from "../../assets/learn.jpg";
// // import celebrate from "../../assets/celebrate.jpg";

// // const fallbackImages = [
// //   art,
// //   learn,
// //   celebrate,
// // ];

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// //   "http://localhost:5000";

// // const getImageUrl = (image, fallbackIndex = 0) => {
// //   if (image) {
// //     if (image.startsWith("http://") || image.startsWith("https://")) {
// //       return image;
// //     }
// //     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// //   }
// //   return fallbackImages[fallbackIndex % fallbackImages.length];
// // };

// // const formatDate = (date) => {
// //   if (!date) return "";
// //   return new Date(date).toLocaleDateString("en-IN", {
// //     day: "2-digit",
// //     month: "short",
// //     year: "numeric",
// //   });
// // };

// // const AchievementsPreview = () => {
// //   const [achievements, setAchievements] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     let mounted = true;

// //     const loadAchievements = async () => {
// //       try {
// //         const data = await achievementService.getPublished();

// //         if (mounted) {
// //           const items = Array.isArray(data)
// //             ? data
// //             : data?.data || data?.achievements || [];
// //           setAchievements(items.slice(0, 3));
// //         }
// //       } catch (error) {
// //         console.error("Failed to load achievements:", error);
// //         if (mounted) {
// //           setAchievements([]);
// //         }
// //       } finally {
// //         if (mounted) {
// //           setLoading(false);
// //         }
// //       }
// //     };

// //     loadAchievements();

// //     return () => {
// //       mounted = false;
// //     };
// //   }, []);

// //   const featured = achievements[0];
// //   const secondary = achievements.slice(1, 3);

// //   return (
// //     <section className="ap">
// //       <div className="ap-container">

// //         {/* =============================================
// //             HEADER
// //         ============================================= */}
// //         <div className="ap-header">
// //           <div className="ap-header-left">
// //             <span className="ap-label">Student Achievements</span>
// //             <h2 className="ap-title">
// //               Moments <span>that matter.</span>
// //             </h2>
// //           </div>
// //           <div className="ap-header-right">
// //             <p className="ap-desc">
// //               Every achievement reflects curiosity, commitment,
// //               and the confidence to keep moving forward.
// //             </p>
// //             <Link to="/achievements" className="ap-link">
// //               Explore all achievements <span>↗</span>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* =============================================
// //             CONTENT
// //         ============================================= */}
// //         {loading ? (
// //           <div className="ap-loading">
// //             <span>Loading achievements...</span>
// //           </div>
// //         ) : achievements.length > 0 ? (
// //           <div className="ap-grid">

// //             {/* Featured Card */}
// //             <div className="ap-card ap-card-featured">
// //               <div className="ap-card-image">
// //                 <img
// //                   src={getImageUrl(featured.image || featured.featuredImage, 0)}
// //                   alt={featured.title || "Achievement"}
// //                   onError={(e) => { e.currentTarget.src = fallbackImages[0]; }}
// //                 />
// //                 <span className="ap-card-number">01</span>
// //               </div>
// //               <div className="ap-card-content">
// //                 <span className="ap-card-category">
// //                   {featured.category || "Achievement"}
// //                 </span>
// //                 <h3>{featured.title || "Celebrating Excellence"}</h3>
// //                 {featured.excerpt && <p>{featured.excerpt}</p>}
// //                 {featured.studentName && (
// //                   <div className="ap-card-student">
// //                     <span>Student</span>
// //                     <strong>{featured.studentName}</strong>
// //                   </div>
// //                 )}
// //                 {featured.date && (
// //                   <div className="ap-card-date">{formatDate(featured.date)}</div>
// //                 )}
// //                 <Link to="/achievements" className="ap-card-link">
// //                   View achievement <span>→</span>
// //                 </Link>
// //               </div>
// //             </div>

// //             {/* Secondary Cards */}
// //             <div className="ap-side-cards">
// //               {secondary.map((item, index) => (
// //                 <div key={item.id || item._id} className="ap-card ap-card-small">
// //                   <div className="ap-card-image">
// //                     <img
// //                       src={getImageUrl(item.image || item.featuredImage, index + 1)}
// //                       alt={item.title || "Achievement"}
// //                       onError={(e) => { e.currentTarget.src = fallbackImages[index + 1]; }}
// //                     />
// //                     <span className="ap-card-number">
// //                       {String(index + 2).padStart(2, "0")}
// //                     </span>
// //                   </div>
// //                   <div className="ap-card-content">
// //                     <span className="ap-card-category">
// //                       {item.category || "Achievement"}
// //                     </span>
// //                     <h4>{item.title || "Student Achievement"}</h4>
// //                     {item.studentName && (
// //                       <strong className="ap-card-student-name">{item.studentName}</strong>
// //                     )}
// //                     <Link to="/achievements" className="ap-card-link">
// //                       Read <span>→</span>
// //                     </Link>
// //                   </div>
// //                 </div>
// //               ))}

// //               {/* Fallback cards if fewer than 3 achievements */}
// //               {secondary.length < 2 && (
// //                 <>
// //                   {secondary.length === 0 && (
// //                     <div className="ap-card ap-card-small ap-card-placeholder">
// //                       <div className="ap-card-image">
// //                         <img src={fallbackImages[1]} alt="Achievement" />
// //                         <span className="ap-card-number">02</span>
// //                       </div>
// //                       <div className="ap-card-content">
// //                         <span className="ap-card-category">Student Life</span>
// //                         <h4>Learning beyond the classroom.</h4>
// //                         <Link to="/achievements" className="ap-card-link">
// //                           Read <span>→</span>
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   )}
// //                   {secondary.length <= 1 && (
// //                     <div className="ap-card ap-card-small ap-card-placeholder">
// //                       <div className="ap-card-image">
// //                         <img src={fallbackImages[2]} alt="Achievement" />
// //                         <span className="ap-card-number">03</span>
// //                       </div>
// //                       <div className="ap-card-content">
// //                         <span className="ap-card-category">Community</span>
// //                         <h4>Progress worth celebrating.</h4>
// //                         <Link to="/achievements" className="ap-card-link">
// //                           Read <span>→</span>
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </>
// //               )}
// //             </div>

// //           </div>
// //         ) : (
// //           <div className="ap-empty">
// //             <span>01</span>
// //             <div>
// //               <small>ACHIEVEMENTS</small>
// //               <h3>Achievements coming soon.</h3>
// //               <p>Student accomplishments will appear here.</p>
// //             </div>
// //           </div>
// //         )}

// //         {/* =============================================
// //             STATEMENT
// //         ============================================= */}
// //         <div className="ap-statement">
// //           <span className="ap-statement-number">04</span>
// //           <h3>
// //             Every achievement begins
// //             <br />
// //             with the <em>decision to try.</em>
// //           </h3>
// //           <div className="ap-statement-line" />
// //         </div>

// //         {/* =============================================
// //             CTA
// //         ============================================= */}
// //         <div className="ap-cta">
// //           <div className="ap-cta-inner">
// //             <div>
// //               <span className="ap-label">Celebrating Every Step</span>
// //               <h3>
// //                 See what our students
// //                 <br />
// //                 <span>are achieving.</span>
// //               </h3>
// //             </div>
// //             <Link to="/achievements" className="ap-cta-button">
// //               View all achievements <span>↗</span>
// //             </Link>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default AchievementsPreview;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import achievementService from "../../services/achievement.service";
// import "./AchievementsPreview.css";

// import art from "../../assets/arts.jpg";
// import learn from "../../assets/learn.jpg";
// import celebrate from "../../assets/celebrate.jpg";

// const fallbackImages = [art, learn, celebrate];

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//   "http://localhost:5000";

// const getImageUrl = (image, fallbackIndex = 0) => {
//   if (image) {
//     if (
//       image.startsWith("http://") ||
//       image.startsWith("https://")
//     ) {
//       return image;
//     }

//     return `${API_URL}${
//       image.startsWith("/") ? image : `/${image}`
//     }`;
//   }

//   return fallbackImages[fallbackIndex % fallbackImages.length];
// };

// const formatDate = (date) => {
//   if (!date) return "";

//   const parsed = new Date(date);

//   if (Number.isNaN(parsed.getTime())) return "";

//   return parsed.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// };

// const AchievementsPreview = () => {
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let mounted = true;

//     const loadAchievements = async () => {
//       try {
//         const data = await achievementService.getPublished();

//         if (mounted) {
//           const items = Array.isArray(data)
//             ? data
//             : data?.data ||
//               data?.achievements ||
//               [];

//           setAchievements(items.slice(0, 3));
//         }
//       } catch (error) {
//         console.error(
//           "Failed to load achievements:",
//           error
//         );

//         if (mounted) {
//           setAchievements([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadAchievements();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const featured = achievements[0];
//   const secondary = achievements.slice(1, 3);

//   return (
//     <section
//       className="achievements-preview"
//       aria-labelledby="achievements-title"
//     >
//       {/* =====================================================
//           OPENING
//       ====================================================== */}

//       <div className="achievements-opening">
//         <div className="achievements-container achievements-opening-grid">

//           <div className="achievements-index">
//             <span>05</span>
//             <span className="achievements-index-rule" />
//             <span>ACHIEVEMENTS</span>
//           </div>

//           <div className="achievements-opening-copy">

//             <div className="achievements-kicker">
//               <span />
//               STUDENT ACHIEVEMENT
//             </div>

//             <h2 id="achievements-title">
//               Moments that
//               <br />
//               <em>matter.</em>
//             </h2>

//             <p>
//               Every achievement reflects curiosity,
//               commitment and the confidence to keep
//               moving forward.
//             </p>

//             <Link
//               to="/achievements"
//               className="achievements-text-link"
//             >
//               <span>Explore all achievements</span>
//               <span>↗</span>
//             </Link>

//           </div>

//           <div className="achievements-opening-side">
//             <span>SHIFAN NOOR</span>
//             <span>GLOBAL ACADEMY</span>
//             <span>RAMANATHAPURAM</span>
//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           FEATURED ACHIEVEMENT
//       ====================================================== */}

//       <div className="achievements-featured">
//         <div className="achievements-container">

//           {loading ? (
//             <div className="achievements-loading">
//               <span className="achievements-loading-line" />
//               <span>LOADING ACHIEVEMENTS</span>
//             </div>
//           ) : featured ? (
//             <article className="achievements-feature">

//               <div className="achievements-feature-image">

//                 <img
//                   src={getImageUrl(
//                     featured.image ||
//                       featured.featuredImage,
//                     0
//                   )}
//                   alt={
//                     featured.title ||
//                     "Student achievement"
//                   }
//                   onError={(event) => {
//                     event.currentTarget.src =
//                       fallbackImages[0];
//                   }}
//                 />

//                 <div className="achievements-feature-image-overlay" />

//                 <div className="achievements-image-top">
//                   <span>01</span>
//                   <span>
//                     {featured.category ||
//                       "ACHIEVEMENT"}
//                   </span>
//                 </div>

//                 <div className="achievements-image-bottom">
//                   <span>SNGA · STUDENT LIFE</span>
//                 </div>

//               </div>

//               <div className="achievements-feature-content">

//                 <div className="achievements-feature-meta">
//                   <span>
//                     {featured.category ||
//                       "STUDENT ACHIEVEMENT"}
//                   </span>

//                   {featured.achievementDate ||
//                   featured.date ? (
//                     <span>
//                       {formatDate(
//                         featured.achievementDate ||
//                           featured.date
//                       )}
//                     </span>
//                   ) : null}
//                 </div>

//                 <h3>
//                   {featured.title ||
//                     "Celebrating Excellence"}
//                 </h3>

//                 {featured.description ||
//                 featured.excerpt ? (
//                   <p>
//                     {featured.description ||
//                       featured.excerpt}
//                   </p>
//                 ) : null}

//                 {featured.studentName && (
//                   <div className="achievements-student">

//                     <span>STUDENT</span>

//                     <strong>
//                       {featured.studentName}
//                     </strong>

//                   </div>
//                 )}

//                 <Link
//                   to="/achievements"
//                   className="achievements-feature-link"
//                 >
//                   <span>View achievement</span>
//                   <span>→</span>
//                 </Link>

//               </div>

//             </article>
//           ) : (
//             <div className="achievements-empty">

//               <div className="achievements-empty-number">
//                 01
//               </div>

//               <div>
//                 <span>ACHIEVEMENTS</span>

//                 <h3>
//                   Achievements coming soon.
//                 </h3>

//                 <p>
//                   Student accomplishments will
//                   appear here.
//                 </p>
//               </div>

//             </div>
//           )}

//         </div>
//       </div>

//       {/* =====================================================
//           ARCHIVE / SECONDARY ACHIEVEMENTS
//       ====================================================== */}

//       {!loading && achievements.length > 0 && (
//         <div className="achievements-archive">
//           <div className="achievements-container">

//             <div className="achievements-archive-header">

//               <div className="achievements-section-number">
//                 <span>02</span>
//                 <span />
//               </div>

//               <div>
//                 <div className="achievements-kicker">
//                   <span />
//                   MORE FROM SNGA
//                 </div>

//                 <h3>
//                   Progress worth
//                   <br />
//                   <em>remembering.</em>
//                 </h3>
//               </div>

//               <p>
//                 Achievement is not defined by one
//                 moment. It grows through effort,
//                 participation and the willingness
//                 to keep learning.
//               </p>

//             </div>

//             <div className="achievements-archive-list">

//               {secondary.map((item, index) => (
//                 <article
//                   key={
//                     item.id ||
//                     item._id ||
//                     `achievement-${index}`
//                   }
//                   className="achievements-archive-item"
//                 >

//                   <div className="achievements-archive-number">
//                     {String(index + 2).padStart(
//                       2,
//                       "0"
//                     )}
//                   </div>

//                   <div className="achievements-archive-image">

//                     <img
//                       src={getImageUrl(
//                         item.image ||
//                           item.featuredImage,
//                         index + 1
//                       )}
//                       alt={
//                         item.title ||
//                         "Student achievement"
//                       }
//                       loading="lazy"
//                       onError={(event) => {
//                         event.currentTarget.src =
//                           fallbackImages[
//                             (index + 1) %
//                               fallbackImages.length
//                           ];
//                       }}
//                     />

//                   </div>

//                   <div className="achievements-archive-content">

//                     <div className="achievements-archive-meta">
//                       <span>
//                         {item.category ||
//                           "ACHIEVEMENT"}
//                       </span>

//                       {item.achievementDate ||
//                       item.date ? (
//                         <span>
//                           {formatDate(
//                             item.achievementDate ||
//                               item.date
//                           )}
//                         </span>
//                       ) : null}
//                     </div>

//                     <h4>
//                       {item.title ||
//                         "Student Achievement"}
//                     </h4>

//                     {item.studentName && (
//                       <span className="achievements-archive-student">
//                         {item.studentName}
//                       </span>
//                     )}

//                   </div>

//                   <Link
//                     to="/achievements"
//                     className="achievements-archive-link"
//                     aria-label={`Read ${
//                       item.title ||
//                       "achievement"
//                     }`}
//                   >
//                     <span>Read</span>
//                     <strong>↗</strong>
//                   </Link>

//                 </article>
//               ))}

//               {secondary.length === 0 && (
//                 <article className="achievements-archive-item achievements-placeholder">

//                   <div className="achievements-archive-number">
//                     02
//                   </div>

//                   <div className="achievements-archive-image">
//                     <img
//                       src={fallbackImages[1]}
//                       alt="Student life"
//                     />
//                   </div>

//                   <div className="achievements-archive-content">

//                     <div className="achievements-archive-meta">
//                       <span>STUDENT LIFE</span>
//                     </div>

//                     <h4>
//                       Learning beyond
//                       the classroom.
//                     </h4>

//                   </div>

//                   <Link
//                     to="/achievements"
//                     className="achievements-archive-link"
//                   >
//                     <span>Explore</span>
//                     <strong>↗</strong>
//                   </Link>

//                 </article>
//               )}

//             </div>

//           </div>
//         </div>
//       )}

//       {/* =====================================================
//           STATEMENT
//       ====================================================== */}

//       <div className="achievements-statement">
//         <div className="achievements-container">

//           <div className="achievements-statement-grid">

//             <div className="achievements-statement-number">
//               03
//             </div>

//             <div className="achievements-statement-copy">

//               <span>
//                 THE SPIRIT OF ACHIEVEMENT
//               </span>

//               <h3>
//                 Every achievement begins
//                 <br />
//                 with the{" "}
//                 <em>decision to try.</em>
//               </h3>

//             </div>

//             <div className="achievements-statement-mark">
//               SNGA
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           CLOSING
//       ====================================================== */}

//       <div className="achievements-closing">
//         <div className="achievements-container">

//           <div className="achievements-closing-grid">

//             <div className="achievements-closing-number">
//               04
//             </div>

//             <div className="achievements-closing-copy">

//               <div className="achievements-kicker">
//                 <span />
//                 CELEBRATING EVERY STEP
//               </div>

//               <h3>
//                 See what our students
//                 <br />
//                 <em>are achieving.</em>
//               </h3>

//               <Link
//                 to="/achievements"
//                 className="achievements-closing-link"
//               >
//                 <span>
//                   View all achievements
//                 </span>
//                 <span>↗</span>
//               </Link>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AchievementsPreview;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import achievementService from "../../services/achievement.service";
import "./AchievementsPreview.css";

import art from "../../assets/arts.jpg";
import learn from "../../assets/learn.jpg";
import celebrate from "../../assets/celebrate.jpg";

const fallbackImages = [
  art,
  learn,
  celebrate,
];

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getImageUrl = (image, fallbackIndex = 0) => {
  if (image) {
    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    return `${API_URL}${
      image.startsWith("/") ? image : `/${image}`
    }`;
  }

  return fallbackImages[
    fallbackIndex % fallbackImages.length
  ];
};

const formatDate = (date) => {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const AchievementsPreview = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadAchievements = async () => {
      try {
        const data =
          await achievementService.getPublished();

        if (!mounted) return;

        const items = Array.isArray(data)
          ? data
          : data?.data ||
            data?.achievements ||
            [];

        /*
         * Homepage intentionally displays
         * only the latest 6 achievements.
         *
         * The complete collection remains
         * available on /achievements.
         */
        setAchievements(items.slice(0, 6));
      } catch (error) {
        console.error(
          "Failed to load achievements:",
          error
        );

        if (mounted) {
          setAchievements([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadAchievements();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      className="achievements-preview"
      aria-labelledby="achievements-title"
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="achievements-opening">
        <div className="achievements-container">

          <div className="achievements-opening-top">

            <div className="achievements-index">
              <span>05</span>
              <span className="achievements-index-line" />
              <span>ACHIEVEMENTS</span>
            </div>

            <div className="achievements-context">
              <span>SHIFAN NOOR GLOBAL ACADEMY</span>
              <span>STUDENT LIFE · EXCELLENCE</span>
            </div>

          </div>

          <div className="achievements-header-content">

            <div>
              <div className="achievements-kicker">
                <span />
                STUDENT ACHIEVEMENT
              </div>

              <h2 id="achievements-title">
                Moments that
                <br />
                <em>matter.</em>
              </h2>
            </div>

            <div className="achievements-header-description">

              <p>
                Every achievement reflects curiosity,
                commitment and the confidence to keep
                moving forward.
              </p>

              <Link
                to="/achievements"
                className="achievements-header-link"
              >
                <span>Explore the archive</span>
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          ACHIEVEMENT GRID
      ====================================================== */}

      <div className="achievements-grid-section">
        <div className="achievements-container">

          {loading ? (
            <div className="achievements-loading">

              <span className="achievements-loading-line" />

              <span>
                LOADING ACHIEVEMENTS
              </span>

            </div>
          ) : achievements.length > 0 ? (

            <div className="achievements-grid">

              {achievements.map((item, index) => {

                const image =
                  item.image ||
                  item.featuredImage;

                const date =
                  item.achievementDate ||
                  item.date;

                return (
                  <article
                    key={
                      item.id ||
                      item._id ||
                      `achievement-${index}`
                    }
                    className="achievement-card"
                  >

                    {/* IMAGE */}

                    <Link
                      to="/achievements"
                      className="achievement-card-image"
                      aria-label={
                        item.title ||
                        "View achievement"
                      }
                    >

                      <img
                        src={getImageUrl(
                          image,
                          index
                        )}
                        alt={
                          item.title ||
                          "Student achievement"
                        }
                        loading={
                          index < 3
                            ? "eager"
                            : "lazy"
                        }
                        onError={(event) => {
                          event.currentTarget.src =
                            fallbackImages[
                              index %
                                fallbackImages.length
                            ];
                        }}
                      />

                      <div className="achievement-card-image-overlay" />

                      <span className="achievement-card-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="achievement-card-view">
                        VIEW
                        <span>↗</span>
                      </span>

                    </Link>

                    {/* CONTENT */}

                    <div className="achievement-card-content">

                      <div className="achievement-card-meta">

                        <span>
                          {item.category ||
                            "ACHIEVEMENT"}
                        </span>

                        {date && (
                          <span>
                            {formatDate(date)}
                          </span>
                        )}

                      </div>

                      <h3>
                        {item.title ||
                          "Student Achievement"}
                      </h3>

                      {item.studentName && (
                        <div className="achievement-card-student">
                          <span>STUDENT</span>

                          <strong>
                            {item.studentName}
                          </strong>
                        </div>
                      )}

                    </div>

                  </article>
                );
              })}

            </div>

          ) : (

            <div className="achievements-empty">

              <span>01</span>

              <div>
                <small>
                  ACHIEVEMENTS
                </small>

                <h3>
                  Achievements coming soon.
                </h3>

                <p>
                  Student accomplishments will
                  appear here.
                </p>
              </div>

            </div>

          )}

          {/* =================================================
              VIEW ALL
          ================================================== */}

          {!loading && achievements.length > 0 && (
            <div className="achievements-view-all">

              <div className="achievements-view-all-line" />

              <Link
                to="/achievements"
                className="achievements-view-all-button"
              >
                <span>
                  View all achievements
                </span>

                <span className="achievements-view-all-arrow">
                  ↗
                </span>
              </Link>

              <div className="achievements-view-all-line" />

            </div>
          )}

        </div>
      </div>

      {/* =====================================================
          STATEMENT
      ====================================================== */}

      <div className="achievements-statement">
        <div className="achievements-container">

          <div className="achievements-statement-grid">

            <div className="achievements-statement-number">
              06
            </div>

            <div className="achievements-statement-copy">

              <span>
                THE SPIRIT OF ACHIEVEMENT
              </span>

              <h3>
                Every achievement begins
                <br />
                with the{" "}
                <em>decision to try.</em>
              </h3>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default AchievementsPreview;