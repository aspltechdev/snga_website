// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import achievementService from "../../services/achievement.service";
// // import "./AchievementsPreview.css";

// // // =====================================================
// // // TEMPORARY ONLINE IMAGES
// // // Replace with actual SNGA achievement images later.
// // // =====================================================

// // const ONLINE_IMAGES = [
// //   "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1400&h=1000&fit=crop&auto=format",

// //   "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&h=800&fit=crop&auto=format",

// //   "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1000&h=800&fit=crop&auto=format",
// // ];

// // const API_URL =
// //   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// //   "http://localhost:5000";

// // const getImageUrl = (image, fallback) => {
// //   if (!image) return fallback;

// //   if (
// //     image.startsWith("http://") ||
// //     image.startsWith("https://")
// //   ) {
// //     return image;
// //   }

// //   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// // };

// // const getYear = (date) => {
// //   if (!date) return "";

// //   const parsed = new Date(date);

// //   if (Number.isNaN(parsed.getTime())) {
// //     return "";
// //   }

// //   return parsed.getFullYear();
// // };

// // const AchievementsPreview = () => {
// //   const [achievements, setAchievements] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     let mounted = true;

// //     const fetchAchievements = async () => {
// //       try {
// //         const response = await achievementService.getAll();

// //         const data = response?.data || response || [];

// //         const published = Array.isArray(data)
// //           ? data.filter((item) => item.isPublished !== false)
// //           : [];

// //         if (mounted) {
// //           setAchievements(published.slice(0, 3));
// //         }
// //       } catch (error) {
// //         console.error(
// //           "Failed to load achievements:",
// //           error
// //         );

// //         if (mounted) {
// //           setAchievements([]);
// //         }
// //       } finally {
// //         if (mounted) {
// //           setLoading(false);
// //         }
// //       }
// //     };

// //     fetchAchievements();

// //     return () => {
// //       mounted = false;
// //     };
// //   }, []);

// //   const featured = achievements[0];
// //   const second = achievements[1];
// //   const third = achievements[2];

// //   return (
// //     <section className="achievement-wall">

// //       {/* =====================================================
// //           HEADER
// //       ===================================================== */}

// //       <div className="achievement-wall-header">

// //         <div className="achievement-wall-header-inner">

// //           <div className="achievement-wall-heading">

// //             <div className="achievement-wall-eyebrow">
// //               <span />
// //               STUDENT ACHIEVEMENTS
// //             </div>

// //             <h2>
// //               Moments that
// //               <br />
// //               <strong>matter.</strong>
// //             </h2>

// //           </div>


// //           <div className="achievement-wall-header-copy">

// //             <p>
// //               From academic accomplishments to achievements beyond
// //               the classroom, every milestone reflects the effort,
// //               confidence and determination of our students.
// //             </p>

// //             <Link
// //               to="/achievements"
// //               className="achievement-wall-header-link"
// //             >
// //               <span>Explore all achievements</span>
// //               <strong>↗</strong>
// //             </Link>

// //           </div>

// //         </div>

// //       </div>


// //       {/* =====================================================
// //           FEATURED MUSEUM WALL
// //       ===================================================== */}

// //       {loading ? (

// //         <div className="achievement-wall-loading">
// //           <div />
// //           <div />
// //           <div />
// //         </div>

// //       ) : featured ? (

// //         <section className="achievement-wall-feature">

// //           <div className="achievement-wall-feature-inner">

// //             {/* -----------------------------------------
// //                 IMAGE COMPOSITION
// //             ------------------------------------------ */}

// //             <div className="achievement-wall-images">

// //               <div className="achievement-wall-main-image">

// //                 <img
// //                   src={getImageUrl(
// //                     featured.image,
// //                     ONLINE_IMAGES[0]
// //                   )}
// //                   alt={
// //                     featured.title ||
// //                     "Student achievement"
// //                   }
// //                   loading="lazy"
// //                 />

// //                 <span className="achievement-wall-image-label">
// //                   FEATURED
// //                 </span>

// //               </div>


// //               <div className="achievement-wall-small-image">

// //                 <img
// //                   src={
// //                     second?.image
// //                       ? getImageUrl(
// //                           second.image,
// //                           ONLINE_IMAGES[1]
// //                         )
// //                       : ONLINE_IMAGES[1]
// //                   }
// //                   alt="Student achievement"
// //                   loading="lazy"
// //                 />

// //               </div>


// //               <div className="achievement-wall-image-number">
// //                 01
// //               </div>

// //             </div>


// //             {/* -----------------------------------------
// //                 FEATURE CONTENT
// //             ------------------------------------------ */}

// //             <div className="achievement-wall-feature-content">

// //               <div className="achievement-wall-feature-meta">

// //                 <span>
// //                   {featured.category ||
// //                     "STUDENT ACHIEVEMENT"}
// //                 </span>

// //                 {featured.achievementDate && (
// //                   <span>
// //                     {getYear(
// //                       featured.achievementDate
// //                     )}
// //                   </span>
// //                 )}

// //               </div>


// //               <h3>
// //                 {featured.title}
// //               </h3>


// //               {featured.studentName && (
// //                 <div className="achievement-wall-student">

// //                   <span>STUDENT</span>

// //                   <strong>
// //                     {featured.studentName}
// //                   </strong>

// //                 </div>
// //               )}


// //               {featured.description && (
// //                 <p>
// //                   {featured.description}
// //                 </p>
// //               )}


// //               <Link
// //                 to="/achievements"
// //                 className="achievement-wall-feature-link"
// //               >
// //                 <span>Read achievement</span>
// //                 <strong>→</strong>
// //               </Link>

// //             </div>

// //           </div>

// //         </section>

// //       ) : (

// //         <section className="achievement-wall-empty">

// //           <span>STUDENT ACHIEVEMENTS</span>

// //           <h3>
// //             Great things are
// //             <br />
// //             happening.
// //           </h3>

// //           <p>
// //             Student achievements and recognitions will appear here.
// //           </p>

// //           <Link to="/achievements">
// //             Explore achievements →
// //           </Link>

// //         </section>

// //       )}


// //       {/* =====================================================
// //           ACHIEVEMENT ARCHIVE
// //       ===================================================== */}

// //       {(second || third) && (

// //         <section className="achievement-wall-archive">

// //           <div className="achievement-wall-archive-header">

// //             <div>
// //               <span>ACHIEVEMENT ARCHIVE</span>

// //               <h3>
// //                 More reasons
// //                 <br />
// //                 to <strong>celebrate.</strong>
// //               </h3>
// //             </div>

// //             <span className="achievement-wall-archive-index">
// //               02 — 03
// //             </span>

// //           </div>


// //           <div className="achievement-wall-grid">

// //             {second && (
// //               <AchievementArchiveCard
// //                 achievement={second}
// //                 number="02"
// //                 image={getImageUrl(
// //                   second.image,
// //                   ONLINE_IMAGES[1]
// //                 )}
// //               />
// //             )}

// //             {third && (
// //               <AchievementArchiveCard
// //                 achievement={third}
// //                 number="03"
// //                 image={getImageUrl(
// //                   third.image,
// //                   ONLINE_IMAGES[2]
// //                 )}
// //               />
// //             )}

// //           </div>

// //         </section>

// //       )}


// //       {/* =====================================================
// //           NAVY STATEMENT
// //       ===================================================== */}

// //       <section className="achievement-wall-statement">

// //         <div className="achievement-wall-statement-inner">

// //           <div className="achievement-wall-statement-number">
// //             04
// //           </div>

// //           <div className="achievement-wall-statement-content">

// //             <span>BEYOND THE RESULT</span>

// //             <h3>
// //               Every achievement
// //               <br />
// //               begins with the
// //               <strong> decision to try.</strong>
// //             </h3>

// //           </div>

// //           <p>
// //             We believe achievement is part of a larger journey —
// //             developing discipline, confidence, curiosity and the
// //             courage to aim higher.
// //           </p>

// //         </div>

// //       </section>


// //       {/* =====================================================
// //           FINAL CTA
// //       ===================================================== */}

// //       <section className="achievement-wall-footer">

// //         <div className="achievement-wall-footer-inner">

// //           <div>

// //             <span>DISCOVER MORE</span>

// //             <h3>
// //               See what our
// //               <br />
// //               students are <strong>achieving.</strong>
// //             </h3>

// //           </div>

// //           <Link
// //             to="/achievements"
// //             className="achievement-wall-footer-button"
// //           >
// //             <span>View Achievements</span>
// //             <strong>→</strong>
// //           </Link>

// //         </div>

// //       </section>

// //     </section>
// //   );
// // };


// // /* =========================================================
// //    ARCHIVE CARD
// // ========================================================= */

// // const AchievementArchiveCard = ({
// //   achievement,
// //   number,
// //   image,
// // }) => {
// //   return (
// //     <article className="achievement-archive-card">

// //       <div className="achievement-archive-image">

// //         <img
// //           src={image}
// //           alt={
// //             achievement.title ||
// //             "Student achievement"
// //           }
// //           loading="lazy"
// //         />

// //         <span>
// //           {number}
// //         </span>

// //       </div>


// //       <div className="achievement-archive-content">

// //         <div className="achievement-archive-meta">

// //           <span>
// //             {achievement.category ||
// //               "ACHIEVEMENT"}
// //           </span>

// //           {achievement.achievementDate && (
// //             <span>
// //               {getYear(
// //                 achievement.achievementDate
// //               )}
// //             </span>
// //           )}

// //         </div>


// //         <h4>
// //           {achievement.title}
// //         </h4>


// //         {achievement.studentName && (
// //           <p>
// //             {achievement.studentName}
// //           </p>
// //         )}


// //         <Link
// //           to="/achievements"
// //           className="achievement-archive-link"
// //         >
// //           <span>View achievement</span>
// //           <strong>↗</strong>
// //         </Link>

// //       </div>

// //     </article>
// //   );
// // };

// // export default AchievementsPreview;


// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import achievementService from "../../services/achievement.service";
// // import "./AchievementsPreview.css";

// // import art from "../../assets/arts.jpg";
// // import learn from "../../assets/learn.jpg";
// // import celebrate from "../../assets/celebrate.jpg"

// // const fallbackImages = [
// //   art,
// //   learn,
// //   celebrate,
// // ];

// // const getImageUrl = (image, fallbackIndex = 0) => {
// //   if (image) {
// //     if (image.startsWith("http://") || image.startsWith("https://")) {
// //       return image;
// //     }

// //     const API_URL =
// //       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
// //       "http://localhost:5000";

// //     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// //   }

// //   return fallbackImages[fallbackIndex % fallbackImages.length];
// // };

// // const AchievementsPreview = () => {
// //   const [achievements, setAchievements] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     let mounted = true;

// //     const loadAchievements = async () => {
// //       try {
// //         const data = await achievementService.getAchievements();

// //         if (mounted) {
// //           setAchievements(Array.isArray(data) ? data : []);
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

// //   const displayAchievements =
// //     achievements.length > 0 ? achievements.slice(0, 3) : [];

// //   const featured = displayAchievements[0];
// //   const secondaryOne = displayAchievements[1];
// //   const secondaryTwo = displayAchievements[2];

// //   return (
// //     <section className="achievements-preview">
// //       {/* --------------------------------------------------
// //           INTRO
// //       -------------------------------------------------- */}
// //       <div className="achievements-intro">
// //         <div className="achievements-container">
// //           <div className="achievements-intro-grid">
// //             <div>
// //               <span className="achievements-overline">
// //                 STUDENT ACHIEVEMENTS
// //               </span>

// //               <h2 className="achievements-heading">
// //                 Moments
// //                 <br />
// //                 <span>that matter.</span>
// //               </h2>
// //             </div>

// //             <div className="achievements-intro-copy">
// //               <p>
// //                 Every achievement reflects more than a result. It represents
// //                 curiosity, commitment, discipline and the confidence to keep
// //                 moving forward.
// //               </p>

// //               <Link
// //                 to="/achievements"
// //                 className="achievements-text-link"
// //               >
// //                 Explore all achievements
// //                 <span>↗</span>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* --------------------------------------------------
// //           FEATURED ACHIEVEMENT
// //       -------------------------------------------------- */}
// //       <div className="achievements-featured-section">
// //         <div className="achievements-container">
// //           {loading ? (
// //             <div className="achievements-loading">
// //               <span>Loading achievements</span>
// //             </div>
// //           ) : featured ? (
// //             <article className="achievement-featured">
// //               <div className="achievement-featured-media">
// //                 <img
// //                   src={getImageUrl(featured.image, 0)}
// //                   alt={featured.title || "Student achievement"}
// //                   onError={(event) => {
// //                     event.currentTarget.onerror = null;
// //                     event.currentTarget.src = fallbackImages[0];
// //                   }}
// //                 />

// //                 <div className="achievement-image-index">
// //                   <span>01</span>
// //                   <span>/ 03</span>
// //                 </div>
// //               </div>

// //               <div className="achievement-featured-content">
// //                 <div className="achievement-number">01</div>

// //                 <span className="achievement-category">
// //                   {featured.category || "ACHIEVEMENT"}
// //                 </span>

// //                 <h3>
// //                   {featured.title ||
// //                     "Celebrating the spirit of achievement."}
// //                 </h3>

// //                 {featured.description && (
// //                   <p>{featured.description}</p>
// //                 )}

// //                 {featured.studentName && (
// //                   <div className="achievement-student">
// //                     <span className="achievement-student-label">
// //                       STUDENT
// //                     </span>

// //                     <strong>{featured.studentName}</strong>
// //                   </div>
// //                 )}

// //                 {featured.achievementDate && (
// //                   <div className="achievement-date">
// //                     {new Date(
// //                       featured.achievementDate
// //                     ).toLocaleDateString("en-IN", {
// //                       year: "numeric",
// //                       month: "long",
// //                     })}
// //                   </div>
// //                 )}

// //                 <Link
// //                   to="/achievements"
// //                   className="achievement-featured-link"
// //                 >
// //                   View achievement
// //                   <span>→</span>
// //                 </Link>
// //               </div>
// //             </article>
// //           ) : (
// //             <article className="achievement-featured">
// //               <div className="achievement-featured-media">
// //                 <img
// //                   src={fallbackImages[0]}
// //                   alt="Students celebrating achievement"
// //                 />

// //                 <div className="achievement-image-index">
// //                   <span>01</span>
// //                   <span>/ 03</span>
// //                 </div>
// //               </div>

// //               <div className="achievement-featured-content">
// //                 <div className="achievement-number">01</div>

// //                 <span className="achievement-category">
// //                   STUDENT LIFE
// //                 </span>

// //                 <h3>
// //                   Every achievement begins with
// //                   <span> the courage to try.</span>
// //                 </h3>

// //                 <p>
// //                   At SNGA, students are encouraged to explore their
// //                   abilities, discover their strengths and take pride in
// //                   every step of their journey.
// //                 </p>

// //                 <Link
// //                   to="/achievements"
// //                   className="achievement-featured-link"
// //                 >
// //                   Discover more
// //                   <span>→</span>
// //                 </Link>
// //               </div>
// //             </article>
// //           )}
// //         </div>
// //       </div>

// //       {/* --------------------------------------------------
// //           ACHIEVEMENT ARCHIVE
// //       -------------------------------------------------- */}
// //       <div className="achievements-archive">
// //         <div className="achievements-container">
// //           <div className="achievements-archive-header">
// //             <div>
// //               <span className="achievements-overline">
// //                 FROM THE COMMUNITY
// //               </span>

// //               <h3>More milestones.</h3>
// //             </div>

// //             <p>
// //               Academic, sporting and personal milestones that
// //               celebrate the many ways our students grow.
// //             </p>
// //           </div>

// //           <div className="achievements-archive-grid">
// //             {/* CARD 02 */}
// //             <article className="achievement-archive-card">
// //               <div className="achievement-archive-image">
// //                 <img
// //                   src={getImageUrl(
// //                     secondaryOne?.image,
// //                     1
// //                   )}
// //                   alt={
// //                     secondaryOne?.title ||
// //                     "Student achievement"
// //                   }
// //                   onError={(event) => {
// //                     event.currentTarget.onerror = null;
// //                     event.currentTarget.src = fallbackImages[1];
// //                   }}
// //                 />

// //                 <span>02</span>
// //               </div>

// //               <div className="achievement-archive-content">
// //                 <span>
// //                   {secondaryOne?.category ||
// //                     "STUDENT ACHIEVEMENT"}
// //                 </span>

// //                 <h4>
// //                   {secondaryOne?.title ||
// //                     "Learning beyond the classroom."}
// //                 </h4>

// //                 {secondaryOne?.description && (
// //                   <p>{secondaryOne.description}</p>
// //                 )}

// //                 {secondaryOne?.studentName && (
// //                   <strong>
// //                     {secondaryOne.studentName}
// //                   </strong>
// //                 )}
// //               </div>
// //             </article>

// //             {/* CARD 03 */}
// //             <article className="achievement-archive-card">
// //               <div className="achievement-archive-image">
// //                 <img
// //                   src={getImageUrl(
// //                     secondaryTwo?.image,
// //                     2
// //                   )}
// //                   alt={
// //                     secondaryTwo?.title ||
// //                     "Student achievement"
// //                   }
// //                   onError={(event) => {
// //                     event.currentTarget.onerror = null;
// //                     event.currentTarget.src = fallbackImages[2];
// //                   }}
// //                 />

// //                 <span>03</span>
// //               </div>

// //               <div className="achievement-archive-content">
// //                 <span>
// //                   {secondaryTwo?.category ||
// //                     "STUDENT ACHIEVEMENT"}
// //                 </span>

// //                 <h4>
// //                   {secondaryTwo?.title ||
// //                     "Progress worth celebrating."}
// //                 </h4>

// //                 {secondaryTwo?.description && (
// //                   <p>{secondaryTwo.description}</p>
// //                 )}

// //                 {secondaryTwo?.studentName && (
// //                   <strong>
// //                     {secondaryTwo.studentName}
// //                   </strong>
// //                 )}
// //               </div>
// //             </article>
// //           </div>
// //         </div>
// //       </div>

// //       {/* --------------------------------------------------
// //           STATEMENT
// //       -------------------------------------------------- */}
// //       <div className="achievements-statement">
// //         <div className="achievements-container">
// //           <div className="achievements-statement-inner">
// //             <span className="achievements-statement-number">
// //               04
// //             </span>

// //             <h3>
// //               Every achievement begins
// //               <br />
// //               with the <em>decision to try.</em>
// //             </h3>

// //             <div className="achievements-statement-line" />
// //           </div>
// //         </div>
// //       </div>

// //       {/* --------------------------------------------------
// //           CTA
// //       -------------------------------------------------- */}
// //       <div className="achievements-cta">
// //         <div className="achievements-container">
// //           <div className="achievements-cta-inner">
// //             <div>
// //               <span className="achievements-overline">
// //                 CELEBRATING EVERY STEP
// //               </span>

// //               <h3>
// //                 See what our students
// //                 <br />
// //                 <span>are achieving.</span>
// //               </h3>
// //             </div>

// //             <Link
// //               to="/achievements"
// //               className="achievements-cta-button"
// //             >
// //               View all achievements
// //               <span>↗</span>
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

// const fallbackImages = [
//   art,
//   learn,
//   celebrate,
// ];

// const getImageUrl = (image, fallbackIndex = 0) => {
//   if (image) {
//     if (image.startsWith("http://") || image.startsWith("https://")) {
//       return image;
//     }

//     const API_URL =
//       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//       "http://localhost:5000";

//     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
//   }

//   return fallbackImages[fallbackIndex % fallbackImages.length];
// };

// const AchievementsPreview = () => {
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // =====================================================
//   // FETCH ACHIEVEMENTS - ✅ UPDATED with getPublished()
//   // =====================================================

//   useEffect(() => {
//     let mounted = true;

//     const loadAchievements = async () => {
//       try {
//         // ✅ CORRECT: Using getPublished() method
//         const data = await achievementService.getPublished();

//         if (mounted) {
//           // Handle different response structures
//           const items = Array.isArray(data)
//             ? data
//             : data?.data || data?.achievements || [];
          
//           setAchievements(items);
//         }
//       } catch (error) {
//         console.error("Failed to load achievements:", error);
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

//   const displayAchievements =
//     achievements.length > 0 ? achievements.slice(0, 3) : [];

//   const featured = displayAchievements[0];
//   const secondaryOne = displayAchievements[1];
//   const secondaryTwo = displayAchievements[2];

//   return (
//     <section className="achievements-preview">
//       {/* --------------------------------------------------
//           INTRO
//       -------------------------------------------------- */}
//       <div className="achievements-intro">
//         <div className="achievements-container">
//           <div className="achievements-intro-grid">
//             <div>
//               <span className="achievements-overline">
//                 STUDENT ACHIEVEMENTS
//               </span>

//               <h2 className="achievements-heading">
//                 Moments
//                 <br />
//                 <span>that matter.</span>
//               </h2>
//             </div>

//             <div className="achievements-intro-copy">
//               <p>
//                 Every achievement reflects more than a result. It represents
//                 curiosity, commitment, discipline and the confidence to keep
//                 moving forward.
//               </p>

//               <Link
//                 to="/achievements"
//                 className="achievements-text-link"
//               >
//                 Explore all achievements
//                 <span>↗</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --------------------------------------------------
//           FEATURED ACHIEVEMENT
//       -------------------------------------------------- */}
//       <div className="achievements-featured-section">
//         <div className="achievements-container">
//           {loading ? (
//             <div className="achievements-loading">
//               <span>Loading achievements</span>
//             </div>
//           ) : featured ? (
//             <article className="achievement-featured">
//               <div className="achievement-featured-media">
//                 <img
//                   src={getImageUrl(featured.image, 0)}
//                   alt={featured.title || "Student achievement"}
//                   onError={(event) => {
//                     event.currentTarget.onerror = null;
//                     event.currentTarget.src = fallbackImages[0];
//                   }}
//                 />

//                 <div className="achievement-image-index">
//                   <span>01</span>
//                   <span>/ 03</span>
//                 </div>
//               </div>

//               <div className="achievement-featured-content">
//                 <div className="achievement-number">01</div>

//                 <span className="achievement-category">
//                   {featured.category || "ACHIEVEMENT"}
//                 </span>

//                 <h3>
//                   {featured.title ||
//                     "Celebrating the spirit of achievement."}
//                 </h3>

//                 {featured.description && (
//                   <p>{featured.description}</p>
//                 )}

//                 {featured.studentName && (
//                   <div className="achievement-student">
//                     <span className="achievement-student-label">
//                       STUDENT
//                     </span>

//                     <strong>{featured.studentName}</strong>
//                   </div>
//                 )}

//                 {featured.achievementDate && (
//                   <div className="achievement-date">
//                     {new Date(
//                       featured.achievementDate
//                     ).toLocaleDateString("en-IN", {
//                       year: "numeric",
//                       month: "long",
//                     })}
//                   </div>
//                 )}

//                 <Link
//                   to="/achievements"
//                   className="achievement-featured-link"
//                 >
//                   View achievement
//                   <span>→</span>
//                 </Link>
//               </div>
//             </article>
//           ) : (
//             <article className="achievement-featured">
//               <div className="achievement-featured-media">
//                 <img
//                   src={fallbackImages[0]}
//                   alt="Students celebrating achievement"
//                 />

//                 <div className="achievement-image-index">
//                   <span>01</span>
//                   <span>/ 03</span>
//                 </div>
//               </div>

//               <div className="achievement-featured-content">
//                 <div className="achievement-number">01</div>

//                 <span className="achievement-category">
//                   STUDENT LIFE
//                 </span>

//                 <h3>
//                   Every achievement begins with
//                   <span> the courage to try.</span>
//                 </h3>

//                 <p>
//                   At SNGA, students are encouraged to explore their
//                   abilities, discover their strengths and take pride in
//                   every step of their journey.
//                 </p>

//                 <Link
//                   to="/achievements"
//                   className="achievement-featured-link"
//                 >
//                   Discover more
//                   <span>→</span>
//                 </Link>
//               </div>
//             </article>
//           )}
//         </div>
//       </div>

//       {/* --------------------------------------------------
//           ACHIEVEMENT ARCHIVE
//       -------------------------------------------------- */}
//       <div className="achievements-archive">
//         <div className="achievements-container">
//           <div className="achievements-archive-header">
//             <div>
//               <span className="achievements-overline">
//                 FROM THE COMMUNITY
//               </span>

//               <h3>More milestones.</h3>
//             </div>

//             <p>
//               Academic, sporting and personal milestones that
//               celebrate the many ways our students grow.
//             </p>
//           </div>

//           <div className="achievements-archive-grid">
//             {/* CARD 02 */}
//             <article className="achievement-archive-card">
//               <div className="achievement-archive-image">
//                 <img
//                   src={getImageUrl(
//                     secondaryOne?.image,
//                     1
//                   )}
//                   alt={
//                     secondaryOne?.title ||
//                     "Student achievement"
//                   }
//                   onError={(event) => {
//                     event.currentTarget.onerror = null;
//                     event.currentTarget.src = fallbackImages[1];
//                   }}
//                 />

//                 <span>02</span>
//               </div>

//               <div className="achievement-archive-content">
//                 <span>
//                   {secondaryOne?.category ||
//                     "STUDENT ACHIEVEMENT"}
//                 </span>

//                 <h4>
//                   {secondaryOne?.title ||
//                     "Learning beyond the classroom."}
//                 </h4>

//                 {secondaryOne?.description && (
//                   <p>{secondaryOne.description}</p>
//                 )}

//                 {secondaryOne?.studentName && (
//                   <strong>
//                     {secondaryOne.studentName}
//                   </strong>
//                 )}
//               </div>
//             </article>

//             {/* CARD 03 */}
//             <article className="achievement-archive-card">
//               <div className="achievement-archive-image">
//                 <img
//                   src={getImageUrl(
//                     secondaryTwo?.image,
//                     2
//                   )}
//                   alt={
//                     secondaryTwo?.title ||
//                     "Student achievement"
//                   }
//                   onError={(event) => {
//                     event.currentTarget.onerror = null;
//                     event.currentTarget.src = fallbackImages[2];
//                   }}
//                 />

//                 <span>03</span>
//               </div>

//               <div className="achievement-archive-content">
//                 <span>
//                   {secondaryTwo?.category ||
//                     "STUDENT ACHIEVEMENT"}
//                 </span>

//                 <h4>
//                   {secondaryTwo?.title ||
//                     "Progress worth celebrating."}
//                 </h4>

//                 {secondaryTwo?.description && (
//                   <p>{secondaryTwo.description}</p>
//                 )}

//                 {secondaryTwo?.studentName && (
//                   <strong>
//                     {secondaryTwo.studentName}
//                   </strong>
//                 )}
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>

//       {/* --------------------------------------------------
//           STATEMENT
//       -------------------------------------------------- */}
//       <div className="achievements-statement">
//         <div className="achievements-container">
//           <div className="achievements-statement-inner">
//             <span className="achievements-statement-number">
//               04
//             </span>

//             <h3>
//               Every achievement begins
//               <br />
//               with the <em>decision to try.</em>
//             </h3>

//             <div className="achievements-statement-line" />
//           </div>
//         </div>
//       </div>

//       {/* --------------------------------------------------
//           CTA
//       -------------------------------------------------- */}
//       <div className="achievements-cta">
//         <div className="achievements-container">
//           <div className="achievements-cta-inner">
//             <div>
//               <span className="achievements-overline">
//                 CELEBRATING EVERY STEP
//               </span>

//               <h3>
//                 See what our students
//                 <br />
//                 <span>are achieving.</span>
//               </h3>
//             </div>

//             <Link
//               to="/achievements"
//               className="achievements-cta-button"
//             >
//               View all achievements
//               <span>↗</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AchievementsPreview;




// import { useEffect, useMemo, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaTimes,
//   FaTrophy,
//   FaAward,
//   FaStar,
//   FaMedal,
//   FaGraduationCap,
//   FaUsers,
//   FaCalendarAlt,
//   FaTag,
//   FaEye,
//   FaHeart,
//   FaShare,
//   FaSchool,
//   FaPlay,
//   FaQuoteLeft,
//   FaRocket,
//   FaCrown,
//   FaCertificate,
//   FaClipboardCheck,
//   FaFilter,
//   FaSearch,
//   FaThLarge,
//   FaThList,
// } from "react-icons/fa";
// import achievementService from "../../services/achievement.service";
// import "./AchievementsPreview.css";

// // =====================================================
// // IMPORT LOCAL IMAGES
// // =====================================================
// import heroBg from "../../assets/school.JPG";
// import heroCircle from "../../assets/about.png";
// import ctaBg from "../../assets/engaging.jpg";

// // =====================================================
// // ONLINE IMAGES
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
// };

// const AchievementsPreview = () => {
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedAchievement, setSelectedAchievement] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [error, setError] = useState("");
//   const [viewMode, setViewMode] = useState("grid"); // grid | list
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("newest"); // newest | oldest | title

//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const directoryRef = useRef(null);
//   const statsRef = useRef(null);
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
//       { ref: heroRef, className: "sa-hero--visible" },
//       { ref: introRef, className: "sa-intro--visible" },
//       { ref: directoryRef, className: "sa-directory--visible" },
//       { ref: statsRef, className: "sa-stats--visible" },
//       { ref: ctaRef, className: "sa-cta--visible" },
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
//   // FETCH ACHIEVEMENTS
//   // =====================================================

//   useEffect(() => {
//     let mounted = true;

//     const loadAchievements = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const data = await achievementService.getPublished();

//         if (mounted) {
//           const items = Array.isArray(data)
//             ? data
//             : data?.data || data?.achievements || [];
          
//           setAchievements(items);
//         }
//       } catch (error) {
//         console.error("Failed to load achievements:", error);
//         if (mounted) {
//           setError("Unable to load achievements. Please try again later.");
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

//   // =====================================================
//   // COMPUTED VALUES
//   // =====================================================

//   const categories = useMemo(() => {
//     const values = achievements
//       .map((item) => item.category)
//       .filter(Boolean);

//     return ["All", ...new Set(values)];
//   }, [achievements]);

//   const filteredAndSortedAchievements = useMemo(() => {
//     let result = achievements;

//     // Filter by category
//     if (activeCategory !== "All") {
//       result = result.filter((item) => item.category === activeCategory);
//     }

//     // Filter by search term
//     if (searchTerm.trim()) {
//       const term = searchTerm.toLowerCase().trim();
//       result = result.filter(
//         (item) =>
//           item.title?.toLowerCase().includes(term) ||
//           item.category?.toLowerCase().includes(term) ||
//           item.studentName?.toLowerCase().includes(term) ||
//           item.description?.toLowerCase().includes(term)
//       );
//     }

//     // Sort
//     switch (sortBy) {
//       case "newest":
//         result = result.sort((a, b) => 
//           new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date)
//         );
//         break;
//       case "oldest":
//         result = result.sort((a, b) => 
//           new Date(a.createdAt || a.date) - new Date(b.createdAt || b.date)
//         );
//         break;
//       case "title":
//         result = result.sort((a, b) => 
//           (a.title || "").localeCompare(b.title || "")
//         );
//         break;
//       default:
//         break;
//     }

//     return result;
//   }, [achievements, activeCategory, searchTerm, sortBy]);

//   // =====================================================
//   // HELPERS
//   // =====================================================

//   const getImageUrl = (image) => {
//     if (!image) return "";

//     if (image.startsWith("http://") || image.startsWith("https://")) {
//       return image;
//     }

//     const API_URL =
//       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//       "http://localhost:5000";

//     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
//   };

//   const formatDate = (date) => {
//     if (!date) return "";

//     const parsedDate = new Date(date);

//     if (Number.isNaN(parsedDate.getTime())) {
//       return "";
//     }

//     return new Intl.DateTimeFormat("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     }).format(parsedDate);
//   };

//   const openAchievement = (item) => {
//     setSelectedAchievement(item);
//     document.body.style.overflow = "hidden";
//   };

//   const closeAchievement = () => {
//     setSelectedAchievement(null);
//     setSelectedImage(null);
//     document.body.style.overflow = "";
//   };

//   const openImage = (image) => {
//     setSelectedImage(image);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   // =====================================================
//   // STATS DATA
//   // =====================================================

//   const stats = [
//     { number: achievements.length || "0", label: "Achievements", icon: <FaTrophy /> },
//     { number: categories.length - 1 || "0", label: "Categories", icon: <FaTag /> },
//     { 
//       number: achievements.filter(a => a.isAward).length || "0", 
//       label: "Awards Won", 
//       icon: <FaAward /> 
//     },
//     { 
//       number: achievements.reduce((sum, a) => sum + (a.studentCount || 1), 0) || "0", 
//       label: "Students Recognized", 
//       icon: <FaUsers /> 
//     },
//   ];

//   return (
//     <main className="sa-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sa-topbar">
//         <div className="sa-container">
//           <div className="sa-topbar__content">
//             <span className="sa-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sa-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sa-hero">
//         <div className="sa-hero__bg-wrapper">
//           <div 
//             className="sa-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sa-hero__bg-overlay" />
//           <div className="sa-hero__bg-gradient" />
//         </div>

//         <div className="sa-container">
//           <div className="sa-hero__inner">
//             <div className="sa-hero__content">
//               <div className="sa-hero__badge">
//                 <FaTrophy />
//                 ACHIEVEMENTS
//               </div>

//               <h1 className="sa-hero__title">
//                 Celebrating
//                 <br />
//                 <span className="sa-hero__highlight">Excellence.</span>
//               </h1>

//               <p className="sa-hero__desc">
//                 Discover the remarkable achievements of our students, faculty
//                 and the entire SNGA community.
//               </p>

//               <div className="sa-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sa-hero__stat">
//                     <span className="sa-hero__stat-icon">{stat.icon}</span>
//                     <span className="sa-hero__stat-number">{stat.number}</span>
//                     <span className="sa-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="sa-hero__image-wrapper">
//               <div className="sa-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA Achievements" 
//                   className="sa-hero__image-img"
//                 />
//                 <div className="sa-hero__image-ring" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sa-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sa-intro">
//         <div className="sa-container">
//           <div className="sa-intro__inner">
//             <div className="sa-intro__header">
//               <span className="sa-intro__label">OUR ACHIEVEMENTS</span>
//               <h2 className="sa-intro__title">
//                 Every Success
//                 <span className="sa-intro__highlight">Tells a Story.</span>
//               </h2>
//             </div>

//             <div className="sa-intro__content">
//               <p>
//                 At Shifan Noor Global Academy, we take pride in the achievements
//                 of our students, faculty and the entire school community.
//                 From academic excellence to sports, arts and beyond, every
//                 success reflects dedication, hard work and the values we instill.
//               </p>
//               <p>
//                 Explore the milestones that make SNGA a place of excellence
//                 and inspiration.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           DIRECTORY - Achievements Grid with Filters
//       ================================================= */}
//       <section ref={directoryRef} className="sa-directory" id="sa-directory">
//         <div className="sa-container">
//           <div className="sa-directory__header">
//             <div>
//               <span className="sa-directory__label">ACHIEVEMENTS</span>
//               <h2 className="sa-directory__title">
//                 Our <span className="sa-directory__highlight">Proud Moments.</span>
//               </h2>
//             </div>
//             <p className="sa-directory__desc">
//               Browse through our collection of achievements across various fields.
//             </p>
//           </div>

//           {/* =============================================
//               FILTERS & CONTROLS
//           ============================================= */}
//           <div className="sa-directory__controls">
//             {/* Search */}
//             <div className="sa-directory__search">
//               <FaSearch className="sa-directory__search-icon" />
//               <input
//                 type="text"
//                 placeholder="Search achievements..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="sa-directory__search-input"
//               />
//               {searchTerm && (
//                 <button
//                   className="sa-directory__search-clear"
//                   onClick={() => setSearchTerm("")}
//                 >
//                   <FaTimes />
//                 </button>
//               )}
//             </div>

//             {/* Sort */}
//             <div className="sa-directory__sort">
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="sa-directory__sort-select"
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//                 <option value="title">By Title</option>
//               </select>
//             </div>

//             {/* View Toggle */}
//             <div className="sa-directory__view-toggle">
//               <button
//                 className={`sa-directory__view-btn ${viewMode === "grid" ? "active" : ""}`}
//                 onClick={() => setViewMode("grid")}
//                 aria-label="Grid view"
//               >
//                 <FaThLarge />
//               </button>
//               <button
//                 className={`sa-directory__view-btn ${viewMode === "list" ? "active" : ""}`}
//                 onClick={() => setViewMode("list")}
//                 aria-label="List view"
//               >
//                 <FaThList />
//               </button>
//             </div>
//           </div>

//           {/* Category Filters */}
//           {!loading && categories.length > 1 && (
//             <div className="sa-directory__filters">
//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={`sa-directory__filter ${
//                     activeCategory === category ? "sa-directory__filter--active" : ""
//                   }`}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category === "All" ? <FaStar /> : <FaTag />}
//                   {category}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* States */}
//           {loading && (
//             <div className="sa-directory__state">
//               <div className="sa-directory__loader">
//                 <span />
//                 <span />
//                 <span />
//               </div>
//               <span>Loading achievements...</span>
//             </div>
//           )}

//           {!loading && error && (
//             <div className="sa-directory__state sa-directory__state--error">
//               <span>{error}</span>
//             </div>
//           )}

//           {!loading && !error && filteredAndSortedAchievements.length === 0 && (
//             <div className="sa-directory__state sa-directory__state--empty">
//               <div className="sa-directory__empty-icon">
//                 <FaTrophy />
//               </div>
//               <h3>No Achievements Found</h3>
//               <p>
//                 {searchTerm || activeCategory !== "All"
//                   ? "Try adjusting your filters or search terms."
//                   : "New achievements will appear here. Achievements can be published from the administration panel."}
//               </p>
//               {(searchTerm || activeCategory !== "All") && (
//                 <button
//                   className="sa-directory__reset-btn"
//                   onClick={() => {
//                     setSearchTerm("");
//                     setActiveCategory("All");
//                   }}
//                 >
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           )}

//           {/* Achievement Grid */}
//           {!loading && !error && filteredAndSortedAchievements.length > 0 && (
//             <div className={`sa-directory__grid ${viewMode === "list" ? "sa-directory__grid--list" : ""}`}>
//               {filteredAndSortedAchievements.map((item, index) => {
//                 const itemId = item.id || item._id;
//                 const image = item.featuredImage || item.image;

//                 return (
//                   <div key={itemId} className="sa-directory__card">
//                     <button
//                       type="button"
//                       className="sa-directory__card-image"
//                       onClick={() => openAchievement(item)}
//                     >
//                       {image ? (
//                         <img
//                           src={getImageUrl(image)}
//                           alt={item.title}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="sa-directory__card-placeholder">
//                           <FaTrophy />
//                         </div>
//                       )}
//                       <div className="sa-directory__card-overlay">
//                         <span className="sa-directory__card-badge">
//                           {item.category || "Achievement"}
//                         </span>
//                         <span className="sa-directory__card-icon">
//                           <FaTrophy />
//                         </span>
//                       </div>
//                       {item.isAward && (
//                         <span className="sa-directory__card-award-badge">
//                           <FaAward />
//                           Award
//                         </span>
//                       )}
//                     </button>

//                     <div className="sa-directory__card-content">
//                       <div className="sa-directory__card-meta">
//                         {item.category && (
//                           <span className="sa-directory__card-category">
//                             <FaTag />
//                             {item.category}
//                           </span>
//                         )}
//                         {item.date && (
//                           <span className="sa-directory__card-date">
//                             <FaCalendarAlt />
//                             {formatDate(item.date)}
//                           </span>
//                         )}
//                       </div>

//                       <h3 className="sa-directory__card-title">{item.title}</h3>

//                       {item.studentName && (
//                         <div className="sa-directory__card-student">
//                           <FaUsers />
//                           {item.studentName}
//                         </div>
//                       )}

//                       {item.excerpt && (
//                         <p className="sa-directory__card-desc">{item.excerpt}</p>
//                       )}

//                       <div className="sa-directory__card-footer">
//                         <button
//                           type="button"
//                           className="sa-directory__card-link"
//                           onClick={() => openAchievement(item)}
//                         >
//                           <span>View Achievement</span>
//                           <FaArrowRight />
//                         </button>
//                         {item.studentCount && (
//                           <span className="sa-directory__card-student-count">
//                             <FaUsers />
//                             {item.studentCount} students
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =================================================
//           STATS SECTION - Navy Background
//       ================================================= */}
//       <section ref={statsRef} className="sa-stats">
//         <div className="sa-stats__bg" />

//         <div className="sa-container">
//           <div className="sa-stats__inner">
//             <div className="sa-stats__header">
//               <span className="sa-stats__label">BY THE NUMBERS</span>
//               <h2 className="sa-stats__title">
//                 Impact That
//                 <br />
//                 <span className="sa-stats__highlight">Inspires.</span>
//               </h2>
//             </div>

//             <div className="sa-stats__grid">
//               {stats.map((stat, index) => (
//                 <div key={index} className="sa-stats__card">
//                   <div className="sa-stats__card-icon">
//                     {stat.icon}
//                   </div>
//                   <span className="sa-stats__card-number">{stat.number}</span>
//                   <span className="sa-stats__card-label">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sa-cta">
//         <div className="sa-cta__bg-wrapper">
//           <div 
//             className="sa-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sa-cta__bg-overlay" />
//           <div className="sa-cta__bg-gradient" />
//         </div>

//         <div className="sa-container">
//           <div className="sa-cta__content">
//             <div className="sa-cta__badge">
//               <FaTrophy />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sa-cta__title">
//               Be Part of
//               <br />
//               <span className="sa-cta__highlight">Our Success Story.</span>
//             </h2>

//             <p className="sa-cta__desc">
//               Join us in celebrating excellence and creating more success
//               stories at SNGA.
//             </p>

//             <div className="sa-cta__actions">
//               <Link to="/admissions" className="sa-cta__btn sa-cta__btn--primary">
//                 <span>Join SNGA</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/gallery" className="sa-cta__btn sa-cta__btn--secondary">
//                 <span>View Gallery</span>
//               </Link>
//             </div>

//             <div className="sa-cta__footer">
//               <span>
//                 <FaTrophy /> Excellence
//               </span>
//               <span>
//                 <FaAward /> Achievements
//               </span>
//               <span>
//                 <FaStar /> Inspiration
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           ACHIEVEMENT MODAL
//       ================================================= */}
//       {selectedAchievement && (
//         <div
//           className="sa-modal"
//           role="dialog"
//           aria-modal="true"
//           aria-label={selectedAchievement.title}
//           onClick={(event) => {
//             if (event.target === event.currentTarget) {
//               closeAchievement();
//             }
//           }}
//         >
//           <div className="sa-modal__inner">
//             <div className="sa-modal__header">
//               <div>
//                 <span className="sa-modal__category">
//                   {selectedAchievement.category || "ACHIEVEMENT"}
//                 </span>
//                 <h2 className="sa-modal__title">{selectedAchievement.title}</h2>
//                 {selectedAchievement.date && (
//                   <span className="sa-modal__date">
//                     <FaCalendarAlt />
//                     {formatDate(selectedAchievement.date)}
//                   </span>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="sa-modal__close"
//                 onClick={closeAchievement}
//                 aria-label="Close achievement"
//               >
//                 <FaTimes />
//               </button>
//             </div>

//             <div className="sa-modal__body">
//               {selectedAchievement.image && (
//                 <div className="sa-modal__hero-image">
//                   <img
//                     src={getImageUrl(selectedAchievement.image)}
//                     alt={selectedAchievement.title}
//                   />
//                 </div>
//               )}

//               <div className="sa-modal__content">
//                 {selectedAchievement.studentName && (
//                   <div className="sa-modal__student">
//                     <FaUsers />
//                     <span>Student: <strong>{selectedAchievement.studentName}</strong></span>
//                   </div>
//                 )}

//                 {selectedAchievement.content ? (
//                   <div 
//                     className="sa-modal__text"
//                     dangerouslySetInnerHTML={{ __html: selectedAchievement.content }}
//                   />
//                 ) : selectedAchievement.description ? (
//                   <p>{selectedAchievement.description}</p>
//                 ) : (
//                   <p>No additional details available.</p>
//                 )}
//               </div>

//               {selectedAchievement.images && selectedAchievement.images.length > 0 && (
//                 <div className="sa-modal__gallery">
//                   <h4>Gallery</h4>
//                   <div className="sa-modal__grid">
//                     {selectedAchievement.images.map((image, index) => (
//                       <button
//                         type="button"
//                         className="sa-modal__image"
//                         key={index}
//                         onClick={() => openImage(image)}
//                       >
//                         <img
//                           src={getImageUrl(image.imageUrl || image)}
//                           alt={image.caption || selectedAchievement.title}
//                           loading="lazy"
//                         />
//                         <div className="sa-modal__image-overlay">
//                           <FaEye />
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =================================================
//           SINGLE IMAGE LIGHTBOX
//       ================================================= */}
//       {selectedImage && (
//         <div
//           className="sa-lightbox"
//           role="dialog"
//           aria-modal="true"
//           onClick={(event) => {
//             if (event.target === event.currentTarget) {
//               closeImage();
//             }
//           }}
//         >
//           <button
//             type="button"
//             className="sa-lightbox__close"
//             onClick={closeImage}
//             aria-label="Close image"
//           >
//             <FaTimes />
//           </button>

//           <img
//             src={getImageUrl(selectedImage.imageUrl || selectedImage)}
//             alt={selectedImage.caption || "Achievement image"}
//             className="sa-lightbox__image"
//           />

//           {selectedImage.caption && (
//             <div className="sa-lightbox__caption">{selectedImage.caption}</div>
//           )}
//         </div>
//       )}
//     </main>
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
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }
    return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
  }
  return fallbackImages[fallbackIndex % fallbackImages.length];
};

const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN", {
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
        const data = await achievementService.getPublished();

        if (mounted) {
          const items = Array.isArray(data)
            ? data
            : data?.data || data?.achievements || [];
          setAchievements(items.slice(0, 3));
        }
      } catch (error) {
        console.error("Failed to load achievements:", error);
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

  const featured = achievements[0];
  const secondary = achievements.slice(1, 3);

  return (
    <section className="ap">
      <div className="ap-container">

        {/* =============================================
            HEADER
        ============================================= */}
        <div className="ap-header">
          <div className="ap-header-left">
            <span className="ap-label">Student Achievements</span>
            <h2 className="ap-title">
              Moments <span>that matter.</span>
            </h2>
          </div>
          <div className="ap-header-right">
            <p className="ap-desc">
              Every achievement reflects curiosity, commitment,
              and the confidence to keep moving forward.
            </p>
            <Link to="/achievements" className="ap-link">
              Explore all achievements <span>↗</span>
            </Link>
          </div>
        </div>

        {/* =============================================
            CONTENT
        ============================================= */}
        {loading ? (
          <div className="ap-loading">
            <span>Loading achievements...</span>
          </div>
        ) : achievements.length > 0 ? (
          <div className="ap-grid">

            {/* Featured Card */}
            <div className="ap-card ap-card-featured">
              <div className="ap-card-image">
                <img
                  src={getImageUrl(featured.image || featured.featuredImage, 0)}
                  alt={featured.title || "Achievement"}
                  onError={(e) => { e.currentTarget.src = fallbackImages[0]; }}
                />
                <span className="ap-card-number">01</span>
              </div>
              <div className="ap-card-content">
                <span className="ap-card-category">
                  {featured.category || "Achievement"}
                </span>
                <h3>{featured.title || "Celebrating Excellence"}</h3>
                {featured.excerpt && <p>{featured.excerpt}</p>}
                {featured.studentName && (
                  <div className="ap-card-student">
                    <span>Student</span>
                    <strong>{featured.studentName}</strong>
                  </div>
                )}
                {featured.date && (
                  <div className="ap-card-date">{formatDate(featured.date)}</div>
                )}
                <Link to="/achievements" className="ap-card-link">
                  View achievement <span>→</span>
                </Link>
              </div>
            </div>

            {/* Secondary Cards */}
            <div className="ap-side-cards">
              {secondary.map((item, index) => (
                <div key={item.id || item._id} className="ap-card ap-card-small">
                  <div className="ap-card-image">
                    <img
                      src={getImageUrl(item.image || item.featuredImage, index + 1)}
                      alt={item.title || "Achievement"}
                      onError={(e) => { e.currentTarget.src = fallbackImages[index + 1]; }}
                    />
                    <span className="ap-card-number">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="ap-card-content">
                    <span className="ap-card-category">
                      {item.category || "Achievement"}
                    </span>
                    <h4>{item.title || "Student Achievement"}</h4>
                    {item.studentName && (
                      <strong className="ap-card-student-name">{item.studentName}</strong>
                    )}
                    <Link to="/achievements" className="ap-card-link">
                      Read <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Fallback cards if fewer than 3 achievements */}
              {secondary.length < 2 && (
                <>
                  {secondary.length === 0 && (
                    <div className="ap-card ap-card-small ap-card-placeholder">
                      <div className="ap-card-image">
                        <img src={fallbackImages[1]} alt="Achievement" />
                        <span className="ap-card-number">02</span>
                      </div>
                      <div className="ap-card-content">
                        <span className="ap-card-category">Student Life</span>
                        <h4>Learning beyond the classroom.</h4>
                        <Link to="/achievements" className="ap-card-link">
                          Read <span>→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                  {secondary.length <= 1 && (
                    <div className="ap-card ap-card-small ap-card-placeholder">
                      <div className="ap-card-image">
                        <img src={fallbackImages[2]} alt="Achievement" />
                        <span className="ap-card-number">03</span>
                      </div>
                      <div className="ap-card-content">
                        <span className="ap-card-category">Community</span>
                        <h4>Progress worth celebrating.</h4>
                        <Link to="/achievements" className="ap-card-link">
                          Read <span>→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        ) : (
          <div className="ap-empty">
            <span>01</span>
            <div>
              <small>ACHIEVEMENTS</small>
              <h3>Achievements coming soon.</h3>
              <p>Student accomplishments will appear here.</p>
            </div>
          </div>
        )}

        {/* =============================================
            STATEMENT
        ============================================= */}
        <div className="ap-statement">
          <span className="ap-statement-number">04</span>
          <h3>
            Every achievement begins
            <br />
            with the <em>decision to try.</em>
          </h3>
          <div className="ap-statement-line" />
        </div>

        {/* =============================================
            CTA
        ============================================= */}
        <div className="ap-cta">
          <div className="ap-cta-inner">
            <div>
              <span className="ap-label">Celebrating Every Step</span>
              <h3>
                See what our students
                <br />
                <span>are achieving.</span>
              </h3>
            </div>
            <Link to="/achievements" className="ap-cta-button">
              View all achievements <span>↗</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsPreview;