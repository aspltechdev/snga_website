// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import achievementService from "../../services/achievement.service";
// import "./AchievementsPreview.css";

// // =====================================================
// // TEMPORARY ONLINE IMAGES
// // Replace with actual SNGA achievement images later.
// // =====================================================

// const ONLINE_IMAGES = [
//   "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1400&h=1000&fit=crop&auto=format",

//   "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&h=800&fit=crop&auto=format",

//   "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1000&h=800&fit=crop&auto=format",
// ];

// const API_URL =
//   import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//   "http://localhost:5000";

// const getImageUrl = (image, fallback) => {
//   if (!image) return fallback;

//   if (
//     image.startsWith("http://") ||
//     image.startsWith("https://")
//   ) {
//     return image;
//   }

//   return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
// };

// const getYear = (date) => {
//   if (!date) return "";

//   const parsed = new Date(date);

//   if (Number.isNaN(parsed.getTime())) {
//     return "";
//   }

//   return parsed.getFullYear();
// };

// const AchievementsPreview = () => {
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let mounted = true;

//     const fetchAchievements = async () => {
//       try {
//         const response = await achievementService.getAll();

//         const data = response?.data || response || [];

//         const published = Array.isArray(data)
//           ? data.filter((item) => item.isPublished !== false)
//           : [];

//         if (mounted) {
//           setAchievements(published.slice(0, 3));
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

//     fetchAchievements();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const featured = achievements[0];
//   const second = achievements[1];
//   const third = achievements[2];

//   return (
//     <section className="achievement-wall">

//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <div className="achievement-wall-header">

//         <div className="achievement-wall-header-inner">

//           <div className="achievement-wall-heading">

//             <div className="achievement-wall-eyebrow">
//               <span />
//               STUDENT ACHIEVEMENTS
//             </div>

//             <h2>
//               Moments that
//               <br />
//               <strong>matter.</strong>
//             </h2>

//           </div>


//           <div className="achievement-wall-header-copy">

//             <p>
//               From academic accomplishments to achievements beyond
//               the classroom, every milestone reflects the effort,
//               confidence and determination of our students.
//             </p>

//             <Link
//               to="/achievements"
//               className="achievement-wall-header-link"
//             >
//               <span>Explore all achievements</span>
//               <strong>↗</strong>
//             </Link>

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           FEATURED MUSEUM WALL
//       ===================================================== */}

//       {loading ? (

//         <div className="achievement-wall-loading">
//           <div />
//           <div />
//           <div />
//         </div>

//       ) : featured ? (

//         <section className="achievement-wall-feature">

//           <div className="achievement-wall-feature-inner">

//             {/* -----------------------------------------
//                 IMAGE COMPOSITION
//             ------------------------------------------ */}

//             <div className="achievement-wall-images">

//               <div className="achievement-wall-main-image">

//                 <img
//                   src={getImageUrl(
//                     featured.image,
//                     ONLINE_IMAGES[0]
//                   )}
//                   alt={
//                     featured.title ||
//                     "Student achievement"
//                   }
//                   loading="lazy"
//                 />

//                 <span className="achievement-wall-image-label">
//                   FEATURED
//                 </span>

//               </div>


//               <div className="achievement-wall-small-image">

//                 <img
//                   src={
//                     second?.image
//                       ? getImageUrl(
//                           second.image,
//                           ONLINE_IMAGES[1]
//                         )
//                       : ONLINE_IMAGES[1]
//                   }
//                   alt="Student achievement"
//                   loading="lazy"
//                 />

//               </div>


//               <div className="achievement-wall-image-number">
//                 01
//               </div>

//             </div>


//             {/* -----------------------------------------
//                 FEATURE CONTENT
//             ------------------------------------------ */}

//             <div className="achievement-wall-feature-content">

//               <div className="achievement-wall-feature-meta">

//                 <span>
//                   {featured.category ||
//                     "STUDENT ACHIEVEMENT"}
//                 </span>

//                 {featured.achievementDate && (
//                   <span>
//                     {getYear(
//                       featured.achievementDate
//                     )}
//                   </span>
//                 )}

//               </div>


//               <h3>
//                 {featured.title}
//               </h3>


//               {featured.studentName && (
//                 <div className="achievement-wall-student">

//                   <span>STUDENT</span>

//                   <strong>
//                     {featured.studentName}
//                   </strong>

//                 </div>
//               )}


//               {featured.description && (
//                 <p>
//                   {featured.description}
//                 </p>
//               )}


//               <Link
//                 to="/achievements"
//                 className="achievement-wall-feature-link"
//               >
//                 <span>Read achievement</span>
//                 <strong>→</strong>
//               </Link>

//             </div>

//           </div>

//         </section>

//       ) : (

//         <section className="achievement-wall-empty">

//           <span>STUDENT ACHIEVEMENTS</span>

//           <h3>
//             Great things are
//             <br />
//             happening.
//           </h3>

//           <p>
//             Student achievements and recognitions will appear here.
//           </p>

//           <Link to="/achievements">
//             Explore achievements →
//           </Link>

//         </section>

//       )}


//       {/* =====================================================
//           ACHIEVEMENT ARCHIVE
//       ===================================================== */}

//       {(second || third) && (

//         <section className="achievement-wall-archive">

//           <div className="achievement-wall-archive-header">

//             <div>
//               <span>ACHIEVEMENT ARCHIVE</span>

//               <h3>
//                 More reasons
//                 <br />
//                 to <strong>celebrate.</strong>
//               </h3>
//             </div>

//             <span className="achievement-wall-archive-index">
//               02 — 03
//             </span>

//           </div>


//           <div className="achievement-wall-grid">

//             {second && (
//               <AchievementArchiveCard
//                 achievement={second}
//                 number="02"
//                 image={getImageUrl(
//                   second.image,
//                   ONLINE_IMAGES[1]
//                 )}
//               />
//             )}

//             {third && (
//               <AchievementArchiveCard
//                 achievement={third}
//                 number="03"
//                 image={getImageUrl(
//                   third.image,
//                   ONLINE_IMAGES[2]
//                 )}
//               />
//             )}

//           </div>

//         </section>

//       )}


//       {/* =====================================================
//           NAVY STATEMENT
//       ===================================================== */}

//       <section className="achievement-wall-statement">

//         <div className="achievement-wall-statement-inner">

//           <div className="achievement-wall-statement-number">
//             04
//           </div>

//           <div className="achievement-wall-statement-content">

//             <span>BEYOND THE RESULT</span>

//             <h3>
//               Every achievement
//               <br />
//               begins with the
//               <strong> decision to try.</strong>
//             </h3>

//           </div>

//           <p>
//             We believe achievement is part of a larger journey —
//             developing discipline, confidence, curiosity and the
//             courage to aim higher.
//           </p>

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="achievement-wall-footer">

//         <div className="achievement-wall-footer-inner">

//           <div>

//             <span>DISCOVER MORE</span>

//             <h3>
//               See what our
//               <br />
//               students are <strong>achieving.</strong>
//             </h3>

//           </div>

//           <Link
//             to="/achievements"
//             className="achievement-wall-footer-button"
//           >
//             <span>View Achievements</span>
//             <strong>→</strong>
//           </Link>

//         </div>

//       </section>

//     </section>
//   );
// };


// /* =========================================================
//    ARCHIVE CARD
// ========================================================= */

// const AchievementArchiveCard = ({
//   achievement,
//   number,
//   image,
// }) => {
//   return (
//     <article className="achievement-archive-card">

//       <div className="achievement-archive-image">

//         <img
//           src={image}
//           alt={
//             achievement.title ||
//             "Student achievement"
//           }
//           loading="lazy"
//         />

//         <span>
//           {number}
//         </span>

//       </div>


//       <div className="achievement-archive-content">

//         <div className="achievement-archive-meta">

//           <span>
//             {achievement.category ||
//               "ACHIEVEMENT"}
//           </span>

//           {achievement.achievementDate && (
//             <span>
//               {getYear(
//                 achievement.achievementDate
//               )}
//             </span>
//           )}

//         </div>


//         <h4>
//           {achievement.title}
//         </h4>


//         {achievement.studentName && (
//           <p>
//             {achievement.studentName}
//           </p>
//         )}


//         <Link
//           to="/achievements"
//           className="achievement-archive-link"
//         >
//           <span>View achievement</span>
//           <strong>↗</strong>
//         </Link>

//       </div>

//     </article>
//   );
// };

// export default AchievementsPreview;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import achievementService from "../../services/achievement.service";
import "./AchievementsPreview.css";

import art from "../../assets/arts.jpg";
import learn from "../../assets/learn.jpg";
import celebrate from "../../assets/celebrate.jpg"

const fallbackImages = [
  art,
  learn,
  celebrate,
];

const getImageUrl = (image, fallbackIndex = 0) => {
  if (image) {
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    const API_URL =
      import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
      "http://localhost:5000";

    return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
  }

  return fallbackImages[fallbackIndex % fallbackImages.length];
};

const AchievementsPreview = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadAchievements = async () => {
      try {
        const data = await achievementService.getAchievements();

        if (mounted) {
          setAchievements(Array.isArray(data) ? data : []);
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

  const displayAchievements =
    achievements.length > 0 ? achievements.slice(0, 3) : [];

  const featured = displayAchievements[0];
  const secondaryOne = displayAchievements[1];
  const secondaryTwo = displayAchievements[2];

  return (
    <section className="achievements-preview">
      {/* --------------------------------------------------
          INTRO
      -------------------------------------------------- */}
      <div className="achievements-intro">
        <div className="achievements-container">
          <div className="achievements-intro-grid">
            <div>
              <span className="achievements-overline">
                STUDENT ACHIEVEMENTS
              </span>

              <h2 className="achievements-heading">
                Moments
                <br />
                <span>that matter.</span>
              </h2>
            </div>

            <div className="achievements-intro-copy">
              <p>
                Every achievement reflects more than a result. It represents
                curiosity, commitment, discipline and the confidence to keep
                moving forward.
              </p>

              <Link
                to="/achievements"
                className="achievements-text-link"
              >
                Explore all achievements
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          FEATURED ACHIEVEMENT
      -------------------------------------------------- */}
      <div className="achievements-featured-section">
        <div className="achievements-container">
          {loading ? (
            <div className="achievements-loading">
              <span>Loading achievements</span>
            </div>
          ) : featured ? (
            <article className="achievement-featured">
              <div className="achievement-featured-media">
                <img
                  src={getImageUrl(featured.image, 0)}
                  alt={featured.title || "Student achievement"}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = fallbackImages[0];
                  }}
                />

                <div className="achievement-image-index">
                  <span>01</span>
                  <span>/ 03</span>
                </div>
              </div>

              <div className="achievement-featured-content">
                <div className="achievement-number">01</div>

                <span className="achievement-category">
                  {featured.category || "ACHIEVEMENT"}
                </span>

                <h3>
                  {featured.title ||
                    "Celebrating the spirit of achievement."}
                </h3>

                {featured.description && (
                  <p>{featured.description}</p>
                )}

                {featured.studentName && (
                  <div className="achievement-student">
                    <span className="achievement-student-label">
                      STUDENT
                    </span>

                    <strong>{featured.studentName}</strong>
                  </div>
                )}

                {featured.achievementDate && (
                  <div className="achievement-date">
                    {new Date(
                      featured.achievementDate
                    ).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                    })}
                  </div>
                )}

                <Link
                  to="/achievements"
                  className="achievement-featured-link"
                >
                  View achievement
                  <span>→</span>
                </Link>
              </div>
            </article>
          ) : (
            <article className="achievement-featured">
              <div className="achievement-featured-media">
                <img
                  src={fallbackImages[0]}
                  alt="Students celebrating achievement"
                />

                <div className="achievement-image-index">
                  <span>01</span>
                  <span>/ 03</span>
                </div>
              </div>

              <div className="achievement-featured-content">
                <div className="achievement-number">01</div>

                <span className="achievement-category">
                  STUDENT LIFE
                </span>

                <h3>
                  Every achievement begins with
                  <span> the courage to try.</span>
                </h3>

                <p>
                  At SNGA, students are encouraged to explore their
                  abilities, discover their strengths and take pride in
                  every step of their journey.
                </p>

                <Link
                  to="/achievements"
                  className="achievement-featured-link"
                >
                  Discover more
                  <span>→</span>
                </Link>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* --------------------------------------------------
          ACHIEVEMENT ARCHIVE
      -------------------------------------------------- */}
      <div className="achievements-archive">
        <div className="achievements-container">
          <div className="achievements-archive-header">
            <div>
              <span className="achievements-overline">
                FROM THE COMMUNITY
              </span>

              <h3>More milestones.</h3>
            </div>

            <p>
              Academic, sporting and personal milestones that
              celebrate the many ways our students grow.
            </p>
          </div>

          <div className="achievements-archive-grid">
            {/* CARD 02 */}
            <article className="achievement-archive-card">
              <div className="achievement-archive-image">
                <img
                  src={getImageUrl(
                    secondaryOne?.image,
                    1
                  )}
                  alt={
                    secondaryOne?.title ||
                    "Student achievement"
                  }
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = fallbackImages[1];
                  }}
                />

                <span>02</span>
              </div>

              <div className="achievement-archive-content">
                <span>
                  {secondaryOne?.category ||
                    "STUDENT ACHIEVEMENT"}
                </span>

                <h4>
                  {secondaryOne?.title ||
                    "Learning beyond the classroom."}
                </h4>

                {secondaryOne?.description && (
                  <p>{secondaryOne.description}</p>
                )}

                {secondaryOne?.studentName && (
                  <strong>
                    {secondaryOne.studentName}
                  </strong>
                )}
              </div>
            </article>

            {/* CARD 03 */}
            <article className="achievement-archive-card">
              <div className="achievement-archive-image">
                <img
                  src={getImageUrl(
                    secondaryTwo?.image,
                    2
                  )}
                  alt={
                    secondaryTwo?.title ||
                    "Student achievement"
                  }
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = fallbackImages[2];
                  }}
                />

                <span>03</span>
              </div>

              <div className="achievement-archive-content">
                <span>
                  {secondaryTwo?.category ||
                    "STUDENT ACHIEVEMENT"}
                </span>

                <h4>
                  {secondaryTwo?.title ||
                    "Progress worth celebrating."}
                </h4>

                {secondaryTwo?.description && (
                  <p>{secondaryTwo.description}</p>
                )}

                {secondaryTwo?.studentName && (
                  <strong>
                    {secondaryTwo.studentName}
                  </strong>
                )}
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          STATEMENT
      -------------------------------------------------- */}
      <div className="achievements-statement">
        <div className="achievements-container">
          <div className="achievements-statement-inner">
            <span className="achievements-statement-number">
              04
            </span>

            <h3>
              Every achievement begins
              <br />
              with the <em>decision to try.</em>
            </h3>

            <div className="achievements-statement-line" />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          CTA
      -------------------------------------------------- */}
      <div className="achievements-cta">
        <div className="achievements-container">
          <div className="achievements-cta-inner">
            <div>
              <span className="achievements-overline">
                CELEBRATING EVERY STEP
              </span>

              <h3>
                See what our students
                <br />
                <span>are achieving.</span>
              </h3>
            </div>

            <Link
              to="/achievements"
              className="achievements-cta-button"
            >
              View all achievements
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPreview;