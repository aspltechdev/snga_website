

// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// import "./AboutPreview.css";
// import schoolImage from "../../assets/about.png";

// const AboutPreview = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;

//     if (!section) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             section.classList.add("ap-visible");
//             observer.unobserve(section);
//           }
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -60px 0px",
//       }
//     );

//     observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="ap">
//       {/* =====================================================
//           INTRO
//       ====================================================== */}

//       <div className="ap-intro">
//         <div className="ap-container">
//           <div className="ap-topline">
//             <span>ABOUT SHIFAN NOOR GLOBAL ACADEMY</span>
//           </div>

//           <div className="ap-intro-grid">
//             <div className="ap-title-block">
//               <span className="ap-kicker">
//                 A PLACE TO LEARN
//               </span>

//               <h2>
//                 More than
//                 <br />
//                 <span>a school.</span>
//               </h2>
//             </div>

//             <div className="ap-intro-copy">
//               <p>
//                 Shifan Noor Global Academy creates a learning
//                 environment where knowledge, skills, values and
//                 confidence grow together.
//               </p>

//               <Link
//                 to="/about"
//                 className="ap-intro-link"
//               >
//                 Discover our story
//                 <span>↗</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           FEATURE IMAGE + STORY
//       ====================================================== */}

//       <div className="ap-story">
//         <div className="ap-container">
//           <div className="ap-story-grid">

//             {/* IMAGE */}

//             <div className="ap-visual">
//               <div className="ap-image-frame">
//                 <img
//                   src={schoolImage}
//                   alt="Shifan Noor Global Academy campus"
//                   className="ap-image"
//                 />

//                 <div className="ap-image-label">
//                   <span>01</span>
//                   <span>THE SNGA CAMPUS</span>
//                 </div>

//                 <div className="ap-image-location">
//                   Ramanathapuram
//                   <br />
//                   Tamil Nadu
//                 </div>
//               </div>
//             </div>

//             {/* CONTENT */}

//             <div className="ap-story-content">

//               <div className="ap-story-number">
//                 <span>13.5</span>
//                 <small>ACRES</small>
//               </div>

//               <div className="ap-story-copy">

//                 <span className="ap-section-label">
//                   OUR ENVIRONMENT
//                 </span>

//                 <h3>
//                   A calm space
//                   <br />
//                   <span>for growing minds.</span>
//                 </h3>

//                 <p>
//                   Located at Venkulam on the
//                   Ramanathapuram–Devipattinam main road,
//                   the SNGA campus is set within a calm,
//                   serene and lush green environment designed
//                   to support meaningful learning.
//                 </p>

//                 <p>
//                   Classrooms, digital learning spaces,
//                   laboratories, a library and areas for
//                   activities come together to create an
//                   environment where students can learn,
//                   explore and develop beyond textbooks.
//                 </p>

//                 <Link
//                   to="/about  /history"
//                   className="ap-story-link"
//                 >
//                   <span>Explore the school</span>
//                   <span>→</span>
//                 </Link>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           FOUR CORE IDEAS
//       ====================================================== */}

//       <div className="ap-principles">
//         <div className="ap-container">

//           <div className="ap-principles-heading">
//             <span>WHAT WE BELIEVE</span>

//             <p>
//               Education is not only about what students know.
//               It is also about who they become.
//             </p>
//           </div>

//           <div className="ap-principles-list">

//             <div className="ap-principle">
//               <span>01</span>

//               <div>
//                 <h3>Knowledge</h3>
//                 <p>
//                   Building strong foundations and encouraging
//                   students to understand, question and discover.
//                 </p>
//               </div>
//             </div>

//             <div className="ap-principle">
//               <span>02</span>

//               <div>
//                 <h3>Skills</h3>
//                 <p>
//                   Developing practical abilities that help
//                   students approach challenges with confidence.
//                 </p>
//               </div>
//             </div>

//             <div className="ap-principle">
//               <span>03</span>

//               <div>
//                 <h3>Values</h3>
//                 <p>
//                   Nurturing healthy attitudes, responsibility,
//                   character and respect for others.
//                 </p>
//               </div>
//             </div>

//             <div className="ap-principle">
//               <span>04</span>

//               <div>
//                 <h3>Confidence</h3>
//                 <p>
//                   Helping every student develop self-belief
//                   and readiness for the challenges ahead.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           STATEMENT
//       ====================================================== */}

//       <div className="ap-statement">
//         <div className="ap-container">

//           <div className="ap-statement-grid">

//             <span className="ap-statement-number">
//               03
//             </span>

//             <h3>
//               Learning should
//               <br />
//               shape the
//               <br />
//               <span>whole person.</span>
//             </h3>

//             <div className="ap-statement-copy">
//               <p>
//                 At SNGA, education brings together academic
//                 learning, personal development, co-curricular
//                 experiences and values to help students grow
//                 into confident individuals.
//               </p>

//               <Link
//                 to="/about/vision-mission"
//                 className="ap-statement-link"
//               >
//                 Our vision & mission
//                 <span>↗</span>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           BOTTOM LINK
//       ====================================================== */}

//       <div className="ap-bottom">
//         <div className="ap-container">

//           <div className="ap-bottom-inner">

//             <div>
//               <span className="ap-kicker">
//                 GET TO KNOW SNGA
//               </span>

//               <h3>
//                 Discover what makes
//                 <br />
//                 <span>our school different.</span>
//               </h3>
//             </div>

//             <Link
//               to="/about"
//               className="ap-bottom-button"
//             >
//               Explore About SNGA
//               <span>↗</span>
//             </Link>

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
import statementBackground from "../../assets/about.png";

const AboutPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("ap-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="ap">
      {/* =====================================================
          EDITORIAL INTRO
      ====================================================== */}

      <div className="ap-intro">
        <div className="ap-container">
          <div className="ap-intro-top">
            <span className="ap-intro-index">01</span>

            <span className="ap-intro-label">
              ABOUT SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <span className="ap-intro-location">
              RAMANATHAPURAM · TAMIL NADU
            </span>
          </div>

          <div className="ap-intro-grid">
            <div className="ap-intro-heading">
              <span className="ap-overline">
                THE SNGA EXPERIENCE
              </span>

              <h2>
                More than
                <br />
                <em>a school.</em>
              </h2>
            </div>

            <div className="ap-intro-statement">
              <p className="ap-lead">
                Shifan Noor Global Academy is a place where
                education extends beyond the classroom —
                building knowledge, developing skills,
                strengthening values and giving every student
                the confidence to move forward.
              </p>

              <Link
                to="/about"
                className="ap-editorial-link"
              >
                <span>Discover SNGA</span>
                <b>↗</b>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CAMPUS STORY
      ====================================================== */}

      <div className="ap-campus">
        <div className="ap-container">
          <div className="ap-campus-grid">
            {/* IMAGE */}

            <div className="ap-campus-image">
              <div className="ap-image-wrap">
                <img
                  src={schoolImage}
                  alt="Shifan Noor Global Academy campus"
                />

                <div className="ap-image-top">
                  <span>01</span>
                  <span>THE CAMPUS</span>
                </div>

                <div className="ap-image-bottom">
                  <span>VENKULAM</span>
                  <span>TAMIL NADU</span>
                </div>
              </div>
            </div>

            {/* STORY */}

            <div className="ap-campus-copy">
              <div className="ap-campus-number">
                <strong>13.5</strong>
                <span>ACRES</span>
              </div>

              <div className="ap-campus-text">
                <span className="ap-overline">
                  A PLACE TO GROW
                </span>

                <h3>
                  Space changes
                  <br />
                  <em>the way we learn.</em>
                </h3>

                <p>
                  Located at Venkulam on the
                  Ramanathapuram–Devipattinam main road,
                  the SNGA campus is set within a calm,
                  serene and lush green environment.
                </p>

                <p>
                  The campus brings together classrooms,
                  digital learning spaces, laboratories,
                  a library and areas for activities —
                  giving students room to learn, explore
                  and develop beyond textbooks.
                </p>

                <Link
                  to="/history"
                  className="ap-text-link"
                >
                  <span>Explore the campus story</span>
                  <b>→</b>
                </Link>
              </div>
            </div>
          </div>

          {/* CAMPUS FACTS */}

          <div className="ap-facts">
            <div className="ap-fact">
              <span>01</span>

              <strong>13.5</strong>

              <div>
                <b>ACRES</b>
                <small>Learning campus</small>
              </div>
            </div>

            <div className="ap-fact">
              <span>02</span>

              <strong>500</strong>

              <div>
                <b>SQ FT</b>
                <small>Classroom space</small>
              </div>
            </div>

            <div className="ap-fact">
              <span>03</span>

              <strong>3,500+</strong>

              <div>
                <b>BOOKS</b>
                <small>Library collection</small>
              </div>
            </div>

            <div className="ap-fact">
              <span>04</span>

              <strong>200</strong>

              <div>
                <b>SEATS</b>
                <small>Multipurpose hall</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          EDUCATIONAL PHILOSOPHY
      ====================================================== */}

      <div className="ap-philosophy">
        <div className="ap-container">
          <div className="ap-philosophy-header">
            <span className="ap-section-number">
              02
            </span>

            <div>
              <span className="ap-overline">
                WHAT EDUCATION MEANS TO US
              </span>

              <p>
                Education is not only about what students
                know. It is also about who they become.
              </p>
            </div>
          </div>

          <div className="ap-philosophy-list">
            <div className="ap-philosophy-row">
              <span>01</span>

              <h3>Knowledge</h3>

              <p>
                Building strong foundations and encouraging
                students to understand, question and discover.
              </p>
            </div>

            <div className="ap-philosophy-row">
              <span>02</span>

              <h3>Skills</h3>

              <p>
                Developing practical abilities that help
                students approach challenges with confidence.
              </p>
            </div>

            <div className="ap-philosophy-row">
              <span>03</span>

              <h3>Values</h3>

              <p>
                Nurturing healthy attitudes, responsibility,
                character and respect for others.
              </p>
            </div>

            <div className="ap-philosophy-row">
              <span>04</span>

              <h3>Confidence</h3>

              <p>
                Helping students develop self-belief and
                readiness for the challenges ahead.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          LARGE STATEMENT
      ====================================================== */}

      <div
        className="ap-statement"
        style={{ "--ap-section-bg": `url(${statementBackground})` }}
      >
        <div className="ap-container">
          <div className="ap-statement-top">
            <span>03</span>
            <span>THE WHOLE CHILD</span>
          </div>

          <div className="ap-statement-grid">
            <h3>
              Learning should
              <br />
              shape the
              <br />
              <em>whole person.</em>
            </h3>

            <div className="ap-statement-copy">
              <p>
                Academic learning, personal development,
                co-curricular experiences and values come
                together to help students grow into
                confident individuals.
              </p>

              <Link
                to="/vision-mission"
                className="ap-statement-link"
              >
                <span>Our vision & mission</span>
                <b>↗</b>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL EDITORIAL CTA
      ====================================================== */}

      <div className="ap-final">
        <div className="ap-container">
          <div className="ap-final-line" />

          <div className="ap-final-grid">
            <div className="ap-final-content">
              <div className="ap-final-intro">
                <span className="ap-final-number">04</span>
                <span className="ap-final-label">CONTINUE EXPLORING</span>
              </div>

              <h3>
                Discover the
                <br />
                <em>SNGA story.</em>
              </h3>

              <p>
                Learn more about our journey, educational vision, campus
                environment and the people who make Shifan Noor Global Academy
                a meaningful place to learn.
              </p>

              <Link to="/about" className="ap-final-link">
                <span>Explore About SNGA</span>
                <b>↗</b>
              </Link>
            </div>

            <div className="ap-final-visual">
              <img
                src={schoolImage}
                alt="Shifan Noor Global Academy campus"
                loading="lazy"
              />

              <div className="ap-final-image-shade" />

              <div className="ap-final-image-top">
                <span>THE SNGA CAMPUS</span>
                <span>RAMANATHAPURAM</span>
              </div>

              <div className="ap-final-image-caption">
                <span>More than a school.</span>
                <small>A place to learn, grow and belong.</small>
              </div>
            </div>
          </div>

          <div className="ap-final-keywords">
            <span>OUR HISTORY</span>
            <span>OUR VISION</span>
            <span>OUR CAMPUS</span>
            <span>OUR COMMUNITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
