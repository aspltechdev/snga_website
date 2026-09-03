// import { Link } from "react-router-dom";

// import {
//   FaArrowRight,
//   FaBookOpen,
//   FaFlask,
//   FaLaptop,
//   FaUsers,
//   FaLightbulb,
//   FaHeart,
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
//       label: "Books in the Library",
//     },
//     {
//       icon: <FaFlask />,
//       number: "03",
//       label: "Science Laboratories",
//     },
//     {
//       icon: <FaLaptop />,
//       number: "01",
//       label: "Computer Learning Lab",
//     },
//     {
//       icon: <FaUsers />,
//       number: "200",
//       label: "Multipurpose Hall Capacity",
//     },
//   ];

//   const principles = [
//     {
//       icon: <FaLightbulb />,
//       title: "Knowledge",
//       text:
//         "Building a strong foundation of understanding and academic knowledge.",
//     },
//     {
//       icon: <FaUsers />,
//       title: "Skills",
//       text:
//         "Helping students develop practical abilities and communicate with confidence.",
//     },
//     {
//       icon: <FaHeart />,
//       title: "Values",
//       text:
//         "Encouraging healthy attitudes, responsibility and strong human values.",
//     },
//   ];

//   return (
//     <main className="history-page">

//       {/* =================================================
//           HERO
//       ================================================= */}

//       <section className="history-hero">

//         <div className="history-hero-container">

//           <div className="history-hero-content">

//             <div className="history-eyebrow">
//               <span />
//               OUR STORY
//             </div>

//             <h1>
//               A place where
//               <br />
//               <em>learning grows.</em>
//             </h1>

//             <p>
//               Discover the journey, philosophy and learning
//               environment that shape Shifan Noor Global
//               Academy.
//             </p>

//           </div>

//           <div className="history-hero-side">
//             <span>SHIFAN NOOR</span>
//             <span>GLOBAL ACADEMY</span>
//           </div>

//         </div>

//       </section>

//       {/* =================================================
//           INTRODUCTION
//       ================================================= */}

//       <section className="history-intro">

//         <div className="history-container">

//           <div className="history-intro-label">
//             ABOUT THE INSTITUTION
//           </div>

//           <div className="history-intro-grid">

//             <h2>
//               Creating an environment
//               <br />
//               where every student can
//               <em> discover their potential.</em>
//             </h2>

//             <div className="history-intro-copy">

//               <p>
//                 Shifan Noor Global Academy is located in
//                 Venkulam, on the Ramanathapuram–Devipattinam
//                 main road. Its campus is set within a calm,
//                 serene and lush green environment designed
//                 to provide students with a peaceful setting
//                 for learning.
//               </p>

//               <p>
//                 The school's educational approach recognises
//                 that learning is more than acquiring academic
//                 knowledge. It includes developing skills,
//                 healthy attitudes, confidence and values that
//                 prepare students for the challenges ahead.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =================================================
//           CAMPUS STATEMENT
//       ================================================= */}

//       <section className="history-campus">

//         <div className="history-container">

//           <div className="history-campus-grid">

//             <div className="history-campus-content">

//               <div className="history-eyebrow dark">
//                 THE CAMPUS
//               </div>

//               <h2>
//                 13.5 acres
//                 <br />
//                 <em>built around learning.</em>
//               </h2>

//               <p>
//                 The SNGA campus provides a spacious environment
//                 where students can learn, explore and participate
//                 in activities beyond the classroom.
//               </p>

//               <Link
//                 to="/facilities"
//                 className="history-link"
//               >
//                 <span>Explore Our Facilities</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//             <div className="history-campus-stat">

//               <span className="history-big-number">
//                 13.5
//               </span>

//               <span className="history-big-label">
//                 ACRES
//               </span>

//               <p>
//                 A calm and green campus designed
//                 for a peaceful learning environment.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =================================================
//           MILESTONES
//       ================================================= */}

//       <section className="history-milestones">

//         <div className="history-container">

//           <div className="history-section-heading">

//             <div className="history-eyebrow dark">
//               THE JOURNEY
//             </div>

//             <h2>
//               Designed for
//               <br />
//               <em>the whole student.</em>
//             </h2>

//           </div>

//           <div className="history-milestone-list">

//             {milestones.map((item) => (
//               <article
//                 className="history-milestone"
//                 key={item.number}
//               >

//                 <div className="history-milestone-number">
//                   {item.number}
//                 </div>

//                 <div className="history-milestone-content">

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <p>
//                     {item.description}
//                   </p>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =================================================
//           FACILITIES
//       ================================================= */}

//       <section className="history-facilities">

//         <div className="history-container">

//           <div className="history-facilities-header">

//             <div>
//               <div className="history-eyebrow">
//                 LEARNING INFRASTRUCTURE
//               </div>

//               <h2>
//                 Spaces that make
//                 <br />
//                 <em>learning tangible.</em>
//               </h2>
//             </div>

//             <p>
//               From digital classrooms to laboratories and
//               library spaces, the campus brings different
//               dimensions of learning together.
//             </p>

//           </div>

//           <div className="history-facility-grid">

//             {facilities.map((facility) => (
//               <div
//                 className="history-facility"
//                 key={facility.label}
//               >

//                 <div className="history-facility-icon">
//                   {facility.icon}
//                 </div>

//                 <div className="history-facility-number">
//                   {facility.number}
//                 </div>

//                 <div className="history-facility-label">
//                   {facility.label}
//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =================================================
//           EDUCATIONAL PHILOSOPHY
//       ================================================= */}

//       <section className="history-philosophy">

//         <div className="history-container">

//           <div className="history-philosophy-heading">

//             <div className="history-eyebrow dark">
//               OUR PHILOSOPHY
//             </div>

//             <h2>
//               Education is more than
//               <br />
//               <em>what happens in a classroom.</em>
//             </h2>

//           </div>

//           <div className="history-principles">

//             {principles.map((item) => (
//               <div
//                 className="history-principle"
//                 key={item.title}
//               >

//                 <div className="history-principle-icon">
//                   {item.icon}
//                 </div>

//                 <h3>
//                   {item.title}
//                 </h3>

//                 <p>
//                   {item.text}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =================================================
//           VISION
//       ================================================= */}

//       <section className="history-vision">

//         <div className="history-container">

//           <div className="history-vision-content">

//             <div className="history-eyebrow">
//               LOOKING AHEAD
//             </div>

//             <h2>
//               Building confident
//               <br />
//               <em>Shifanians.</em>
//             </h2>

//             <p>
//               SNGA's vision is to help every student complete
//               their schooling with enthusiasm, confidence,
//               high self-esteem and a readiness to meet new
//               challenges.
//             </p>

//             <p>
//               The school seeks to maintain high academic,
//               social and moral expectations while creating
//               a world-class ambience and widening opportunities
//               for students.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =================================================
//           FINAL CTA
//       ================================================= */}

//       <section className="history-cta">

//         <div className="history-container">

//           <div className="history-cta-content">

//             <span>
//               SHIFAN NOOR GLOBAL ACADEMY
//             </span>

//             <h2>
//               The journey
//               <br />
//               <em>continues.</em>
//             </h2>

//             <p>
//               Explore the people, spaces and experiences
//               that make SNGA a place for meaningful learning.
//             </p>

//             <Link
//               to="/about"
//               className="history-cta-button"
//             >
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
} from "react-icons/fa";
import "./History.css";

const History = () => {
  const milestones = [
    {
      number: "01",
      title: "A Place for Peaceful Learning",
      description:
        "Set in a calm, serene and lush green environment at Venkulam on the Ramanathapuram–Devipattinam main road, SNGA was envisioned as a place where students could learn away from the dust and noise of city life.",
    },
    {
      number: "02",
      title: "A Campus Designed for Learning",
      description:
        "The school campus spans 13.5 acres and provides students with thoughtfully planned spaces designed to support academic learning, exploration, interaction and personal growth.",
    },
    {
      number: "03",
      title: "Learning Meets Technology",
      description:
        "Every classroom is supported by digital learning facilities, creating opportunities for interactive teaching and helping students engage with concepts beyond traditional textbooks.",
    },
    {
      number: "04",
      title: "Beyond the Classroom",
      description:
        "The learning environment extends into a well-equipped library, science laboratories, computer facilities and a multipurpose hall, giving students opportunities to learn through varied experiences.",
    },
  ];

  const facilities = [
    {
      icon: <FaBookOpen />,
      number: "3,500+",
      label: "Books in Library",
      color: "#2563eb",
    },
    {
      icon: <FaFlask />,
      number: "03",
      label: "Science Labs",
      color: "#3b82f6",
    },
    {
      icon: <FaLaptop />,
      number: "01",
      label: "Computer Lab",
      color: "#60a5fa",
    },
    {
      icon: <FaUsers />,
      number: "200",
      label: "Hall Capacity",
      color: "#93bbfc",
    },
  ];

  const principles = [
    {
      icon: <FaLightbulb />,
      title: "Knowledge",
      text: "Building a strong foundation of understanding and academic knowledge.",
      color: "#2563eb",
    },
    {
      icon: <FaUsers />,
      title: "Skills",
      text: "Helping students develop practical abilities and communicate with confidence.",
      color: "#3b82f6",
    },
    {
      icon: <FaHeart />,
      title: "Values",
      text: "Encouraging healthy attitudes, responsibility and strong human values.",
      color: "#60a5fa",
    },
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
          HERO SECTION
      ================================================= */}
      <section ref={heroRef} className="sh-hero">
        <div className="sh-hero__bg" />
        <div className="sh-hero__gradient" />

        <div className="sh-container">
          <div className="sh-hero__content">
            <span className="sh-hero__badge">
              <FaGraduationCap />
              OUR STORY
            </span>

            <h1 className="sh-hero__title">
              A Place Where
              <br />
              <span className="sh-hero__highlight">Learning Grows.</span>
            </h1>

            <p className="sh-hero__desc">
              Discover the journey, philosophy and learning environment
              that shape Shifan Noor Global Academy.
            </p>
          </div>

          <div className="sh-hero__tags">
            <span>SHIFAN NOOR</span>
            <span>GLOBAL ACADEMY</span>
          </div>
        </div>
      </section>

      {/* =================================================
          INTRO SECTION
      ================================================= */}
      <section ref={introRef} className="sh-intro">
        <div className="sh-container">
          <div className="sh-intro__inner">
            <span className="sh-intro__label">ABOUT THE INSTITUTION</span>

            <div className="sh-intro__grid">
              <h2 className="sh-intro__title">
                Creating an Environment
                <br />
                Where Every Student Can
                <br />
                <span className="sh-intro__highlight">Discover Their Potential.</span>
              </h2>

              <div className="sh-intro__text">
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
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CAMPUS SECTION
      ================================================= */}
      <section ref={campusRef} className="sh-campus">
        <div className="sh-campus__bg" />

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
          MILESTONES SECTION
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

          <div className="sh-milestones__list">
            {milestones.map((item, index) => (
              <div key={item.number} className="sh-milestones__item">
                <div className="sh-milestones__item-number">{item.number}</div>
                <div className="sh-milestones__item-content">
                  <h3 className="sh-milestones__item-title">{item.title}</h3>
                  <p className="sh-milestones__item-desc">{item.description}</p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="sh-milestones__item-connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          FACILITIES SECTION
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
              <div key={facility.label} className="sh-facilities__item">
                <div
                  className="sh-facilities__item-icon"
                  style={{ backgroundColor: `${facility.color}15`, color: facility.color }}
                >
                  {facility.icon}
                </div>
                <span className="sh-facilities__item-number">{facility.number}</span>
                <span className="sh-facilities__item-label">{facility.label}</span>
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

          <div className="sh-philosophy__principles">
            {principles.map((item) => (
              <div key={item.title} className="sh-philosophy__principle">
                <div
                  className="sh-philosophy__principle-icon"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="sh-philosophy__principle-title">{item.title}</h3>
                <p className="sh-philosophy__principle-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          VISION SECTION
      ================================================= */}
      <section ref={visionRef} className="sh-vision">
        <div className="sh-vision__bg" />

        <div className="sh-container">
          <div className="sh-vision__content">
            <span className="sh-vision__label">LOOKING AHEAD</span>
            <h2 className="sh-vision__title">
              Building Confident
              <br />
              <span className="sh-vision__highlight">Shifanians.</span>
            </h2>
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
        <div className="sh-container">
          <div className="sh-cta__content">
            <span className="sh-cta__badge">SHIFAN NOOR GLOBAL ACADEMY</span>
            <h2 className="sh-cta__title">
              The Journey
              <br />
              <span className="sh-cta__highlight">Continues.</span>
            </h2>
            <p className="sh-cta__desc">
              Explore the people, spaces and experiences that make SNGA a place
              for meaningful learning.
            </p>
            <Link to="/about" className="sh-cta__btn">
              <span>Discover SNGA</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default History;