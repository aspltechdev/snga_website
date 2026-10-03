

// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaSchool,
//   FaGraduationCap,
//   FaHeart,
//   FaLightbulb,
//   FaUsers,
//   FaAward,
//   FaRocket,
//   FaHands,
//   FaChild,
//   FaStar,
//   FaPlay,
//   FaEye,
//   FaBookOpen,
// } from "react-icons/fa";
// import "./PrincipalMessage.css";

// import heroBg from "../../assets/school.JPG";
// import heroCircle from "../../assets/about.png";
// import ctaBg from "../../assets/engaging.jpg";
// import principal from "../../assets/principal.jpg";
// import beyond from "../../assets/beyond.jpg";
// import holistic from "../../assets/holistic.jpg";
// import values from "../../assets/values.jpg";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   principal: principal,
//   classroom: beyond,
//   students: holistic,
//   campus: values,
// };

// const PrincipalMessage = () => {
//   const heroRef = useRef(null);
//   const quoteRef = useRef(null);
//   const messageRef = useRef(null);
//   const learningRef = useRef(null);
//   const futureRef = useRef(null);
//   const signatureRef = useRef(null);
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
//       { ref: heroRef, className: "sp-hero--visible" },
//       { ref: quoteRef, className: "sp-quote--visible" },
//       { ref: messageRef, className: "sp-message--visible" },
//       { ref: learningRef, className: "sp-learning--visible" },
//       { ref: futureRef, className: "sp-future--visible" },
//       { ref: signatureRef, className: "sp-signature--visible" },
//       { ref: ctaRef, className: "sp-cta--visible" },
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
//   // DATA
//   // =====================================================

//   const learningItems = [
//     {
//       number: "01",
//       title: "Beyond the Classroom",
//       description:
//         "Extra-curricular activities form an important part of school life, helping students explore their interests and experience learning in enjoyable ways.",
//       icon: <FaRocket />,
//       color: "#4A90D9",
//     },
//     {
//       number: "02",
//       title: "Every Child is Unique",
//       description:
//         "We value the uniqueness every child brings to our school and provide a supportive, child-centred environment.",
//       icon: <FaChild />,
//       color: "#27AE60",
//     },
//     {
//       number: "03",
//       title: "Independent & Confident",
//       description:
//         "Students are encouraged to become independent and self-confident learners who can approach challenges with responsibility.",
//       icon: <FaStar />,
//       color: "#F39C12",
//     },
//   ];

//   const values = [
//     { icon: <FaHeart />, label: "Empathy", color: "#E74C3C" },
//     { icon: <FaHands />, label: "Support", color: "#4A90D9" },
//     { icon: <FaGraduationCap />, label: "Excellence", color: "#F39C12" },
//     { icon: <FaUsers />, label: "Community", color: "#27AE60" },
//   ];

//   const stats = [
//     { number: "25+", label: "Years of Excellence", icon: <FaAward /> },
//     { number: "500+", label: "Students", icon: <FaUsers /> },
//     { number: "13.5", label: "Acres Campus", icon: <FaSchool /> },
//     { number: "100%", label: "Holistic Focus", icon: <FaHeart /> },
//   ];

//   return (
//     <main className="sp-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sp-topbar">
//         <div className="sp-container">
//           <div className="sp-topbar__content">
//             <span className="sp-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sp-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sp-hero">
//         <div className="sp-hero__bg-wrapper">
//           <div 
//             className="sp-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sp-hero__bg-overlay" />
//           <div className="sp-hero__bg-gradient" />
//         </div>

//         <div className="sp-container">
//           <div className="sp-hero__inner">
//             <div className="sp-hero__content">
//               <div className="sp-hero__badge">
//                 <FaGraduationCap />
//                 PRINCIPAL'S MESSAGE
//               </div>

//               <h1 className="sp-hero__title">
//                 Education That
//                 <br />
//                 <span className="sp-hero__highlight">Helps Children Fly.</span>
//               </h1>

//               <p className="sp-hero__desc">
//                 A message from the Principal of Shifan Noor Global Academy.
//               </p>

//               {/* <div className="sp-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sp-hero__stat">
//                     <span className="sp-hero__stat-icon">{stat.icon}</span>
//                     <span className="sp-hero__stat-number">{stat.number}</span>
//                     <span className="sp-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div> */}
//             </div>

//             <div className="sp-hero__image-wrapper">
//               <div className="sp-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="Principal" 
//                   className="sp-hero__image-img"
//                 />
//                 <div className="sp-hero__image-ring" />
//                 {/* <div className="sp-hero__image-badge">
//                   <span>Principal</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sp-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           QUOTE SECTION
//       ================================================= */}
//       <section ref={quoteRef} className="sp-quote">
//         <div className="sp-container">
//           <div className="sp-quote__inner">
//             <div className="sp-quote__mark sp-quote__mark--left">
//               <FaQuoteLeft />
//             </div>

//             <blockquote className="sp-quote__text">
//               Excellence is always the result of
//               <em> high intention, sincere efforts, intelligent direction and skillful execution.</em>
//             </blockquote>

//             <div className="sp-quote__mark sp-quote__mark--right">
//               <FaQuoteRight />
//             </div>

//             <div className="sp-quote__line">
//               <span />
//               PRINCIPAL'S MESSAGE
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           MESSAGE SECTION
//       ================================================= */}
//       <section ref={messageRef} className="sp-message">
//         <div className="sp-container">
//           <div className="sp-message__inner">
//             <div className="sp-message__label">
//               <span>01</span>
//               THE MESSAGE
//             </div>

//             <div className="sp-message__content">
//               <h2 className="sp-message__title">
//                 A School Built Around
//                 <br />
//                 <span className="sp-message__highlight">the Whole Child.</span>
//               </h2>

//               <div className="sp-message__text">
//                 <p>
//                   Shifan Noor Global Academy (CBSE) is the embodiment of a
//                   generous vision by The Shifan Educational Trust. The Trust's
//                   commitment to education comes from a desire to give back to
//                   society through meaningful opportunities for children.
//                 </p>
//                 <p>
//                   SNGA was founded with the objective of extending excellence
//                   in education to children while recognising the importance of
//                   holistic development.
//                 </p>
//                 <p>
//                   We believe that education should help children grow not only
//                   academically, but also as confident, responsible and capable
//                   individuals.
//                 </p>
//               </div>

//               <div className="sp-message__values">
//                 {values.map((item, index) => (
//                   <div key={index} className="sp-message__value">
//                     <span className="sp-message__value-icon" style={{ color: item.color }}>
//                       {item.icon}
//                     </span>
//                     <span className="sp-message__value-label">{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           LEARNING APPROACH - Image Overlay Cards
//       ================================================= */}
//       <section ref={learningRef} className="sp-learning">
//         <div className="sp-container">
//           <div className="sp-learning__header">
//             <span className="sp-learning__label">OUR APPROACH</span>
//             <h2 className="sp-learning__title">
//               Learning Should Be
//               <br />
//               <span className="sp-learning__highlight">an Experience.</span>
//             </h2>
//             <p className="sp-learning__desc">
//               At SNGA, learning extends beyond textbooks and examinations.
//             </p>
//           </div>

//           <div className="sp-learning__grid">
//             {learningItems.map((item) => (
//               <div key={item.number} className="sp-learning__card">
//                 <div className="sp-learning__card-image">
//                   <img src={IMAGES.classroom} alt={item.title} loading="lazy" />
//                   <div className="sp-learning__card-overlay">
//                     <div className="sp-learning__card-content">
//                       <div className="sp-learning__card-top">
//                         <span className="sp-learning__card-number">
//                           {item.number}
//                         </span>
//                         <div className="sp-learning__card-icon" style={{ color: item.color }}>
//                           {item.icon}
//                         </div>
//                       </div>
//                       <h3 className="sp-learning__card-title">{item.title}</h3>
//                       <p className="sp-learning__card-desc">{item.description}</p>
//                       <span className="sp-learning__card-arrow">
//                         <FaArrowRight />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FUTURE SECTION - With Background Image
//       ================================================= */}
//       <section ref={futureRef} className="sp-future">
//         <div className="sp-future__bg-wrapper">
//           <div 
//             className="sp-future__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.campus})` }}
//           />
//           <div className="sp-future__bg-overlay" />
//         </div>

//         <div className="sp-container">
//           <div className="sp-future__inner">
//             <div className="sp-future__content">
//               <span className="sp-future__label">PREPARING FOR TOMORROW</span>
//               <h2 className="sp-future__title">
//                 Ready for a
//                 <br />
//                 <span className="sp-future__highlight">Changing World.</span>
//               </h2>
//             </div>

//             <div className="sp-future__right">
//               <div className="sp-future__quote">
//                 <FaQuoteLeft />
//               </div>
//               <p className="sp-future__desc">
//                 Our central aim is to prepare young people for the future in a
//                 changing world — one that demands flexibility, tolerance and a
//                 wide range of skills.
//               </p>
//               <p className="sp-future__desc">
//                 We work towards enhancing the growth of children intellectually,
//                 morally, emotionally, physically and socially through an engaging
//                 and challenging curriculum.
//               </p>
//               <p className="sp-future__desc">
//                 Wherever possible, teaching is tailored to the needs of individual
//                 students so that every child has the opportunity to develop
//                 confidence, independent learning and responsible thinking.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           SIGNATURE SECTION
//       ================================================= */}
//       <section ref={signatureRef} className="sp-signature">
//         <div className="sp-container">
//           <div className="sp-signature__inner">
//             <div className="sp-signature__content">
//               <div className="sp-signature__badge">
//                 <FaHeart />
//                 WITH WARM REGARDS
//               </div>

//               <h2 className="sp-signature__title">
//                 The Journey of
//                 <br />
//                 <span className="sp-signature__highlight">Every Child Matters.</span>
//               </h2>

//               <p className="sp-signature__desc">
//                 At SNGA, we remain committed to creating a stimulating and secure
//                 environment where students can discover their abilities, strengthen
//                 their character and prepare confidently for the future.
//               </p>

//               <div className="sp-signature__name">
//                 <div className="sp-signature__avatar">
//                   <img src={IMAGES.principal} alt="Principal" />
//                 </div>
//                 <div className="sp-signature__details">
//                   <strong>Principal</strong>
//                   <span>Shifan Noor Global Academy</span>
//                 </div>
//               </div>

//               <div className="sp-signature__line" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sp-cta">
//         <div className="sp-cta__bg-wrapper">
//           <div 
//             className="sp-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sp-cta__bg-overlay" />
//           <div className="sp-cta__bg-gradient" />
//         </div>

//         <div className="sp-container">
//           <div className="sp-cta__content">
//             <div className="sp-cta__badge">
//               <FaGraduationCap />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sp-cta__title">
//               Discover the
//               <br />
//               <span className="sp-cta__highlight">SNGA Experience.</span>
//             </h2>

//             <p className="sp-cta__desc">
//               Explore our academics, campus, facilities and the learning
//               opportunities created for every student.
//             </p>

//             <div className="sp-cta__actions">
//               <Link to="/academics" className="sp-cta__btn sp-cta__btn--primary">
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/facilities" className="sp-cta__btn sp-cta__btn--secondary">
//                 <span>View Facilities</span>
//               </Link>
//             </div>

//             <div className="sp-cta__footer">
//               <span>
//                 <FaHeart /> Values-Driven
//               </span>
//               <span>
//                 <FaGraduationCap /> Academic Excellence
//               </span>
//               <span>
//                 <FaUsers /> Community Focus
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default PrincipalMessage;



import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./PrincipalMessage.css";

import heroBg from "../../assets/school.JPG";
import principalImage from "../../assets/principal.jpg";
import messageImage from "../../assets/beyond.jpg";
import learningImage from "../../assets/holistic.jpg";
import futureImage from "../../assets/values.jpg";
import ctaBg from "../../assets/engaging.jpg";

const PrincipalMessage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sp-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addSection = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  const principles = [
    {
      number: "01",
      title: "Every Child is Unique",
      text:
        "We recognise the individuality every child brings to our school and seek to create an environment where each student can grow with confidence.",
    },
    {
      number: "02",
      title: "Learning Beyond the Classroom",
      text:
        "Education extends beyond textbooks. Activities, experiences and opportunities help students discover interests and develop new abilities.",
    },
    {
      number: "03",
      title: "A Supportive Environment",
      text:
        "Students learn best when they feel secure, respected and encouraged. We strive to create a child-centred environment that supports their development.",
    },
    {
      number: "04",
      title: "Preparing for Tomorrow",
      text:
        "Our aim is to help students become flexible, responsible and confident young people who are ready to meet the challenges of a changing world.",
    },
  ];

  return (
    <main className="sp-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-hero sp-reveal"
        style={{ "--sp-hero-image": `url(${heroBg})` }}
      >
        <div className="sp-hero__overlay" />

        <div className="sp-hero__frame" />

        <div className="sp-container sp-hero__container">

          <div className="sp-hero__topline">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>PRINCIPAL'S MESSAGE</span>
          </div>

          <div className="sp-hero__content">

            <div className="sp-hero__number">
              01
            </div>

            <p className="sp-hero__eyebrow">
              MESSAGE FROM THE PRINCIPAL
            </p>

            <h1 className="sp-hero__title">
              Education
              <br />
              <em>with intention.</em>
            </h1>

            <p className="sp-hero__description">
              A message about learning, character, opportunity and
              preparing every child for the future.
            </p>

          </div>

          <div className="sp-hero__bottom">
            <span>
              VENKULAM · RAMANATHAPURAM
            </span>

            <span className="sp-hero__scroll">
              SCROLL TO READ
              <i />
            </span>
          </div>

        </div>
      </section>


      {/* =====================================================
          PRINCIPAL QUOTE
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-quote sp-reveal"
      >
        <div className="sp-container">

          <div className="sp-quote__grid">

            <div className="sp-quote__index">
              <span>02</span>
              <span>THE PRINCIPAL</span>
            </div>

            <div className="sp-quote__content">

              <p className="sp-quote__eyebrow">
                A BELIEF IN EXCELLENCE
              </p>

              <blockquote>
                “Excellence is always the result of high intention,
                sincere efforts, intelligent direction and skillful
                execution.”
              </blockquote>

              <div className="sp-quote__rule">
                <span />
                <p>MESSAGE FROM THE PRINCIPAL</p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MESSAGE
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-message sp-reveal"
      >
        <div className="sp-container">

          <div className="sp-message__header">

            <div className="sp-section-index">
              <span>03</span>
              <span>THE MESSAGE</span>
            </div>

            <div>
              <p className="sp-kicker">
                A SCHOOL BUILT AROUND CHILDREN
              </p>

              <h2>
                Education should
                <br />
                <em>shape the whole child.</em>
              </h2>
            </div>

          </div>


          <div className="sp-message__layout">

            <div className="sp-message__image">

              <img
                src={messageImage}
                alt="Students learning at Shifan Noor Global Academy"
                loading="lazy"
              />

              <div className="sp-message__image-caption">
                <span>SHIFAN NOOR GLOBAL ACADEMY</span>
                <strong>
                  A generous vision
                  <br />
                  for every child.
                </strong>
              </div>

            </div>


            <div className="sp-message__copy">

              <p className="sp-message__lead">
                Shifan Noor Global Academy (CBSE) is the embodiment
                of a generous vision by The Shifan Educational Trust.
                The Trust's commitment to education comes from a
                desire to give back to society through meaningful
                opportunities for children.
              </p>

              <p>
                SNGA was founded with the objective of extending
                excellence in education to children while recognising
                the importance of holistic development.
              </p>

              <p>
                We believe that education should help children grow
                not only academically, but also as confident,
                responsible and capable individuals.
              </p>

              <div className="sp-message__signature-line" />

              <p className="sp-message__small">
                Every child's journey is different. Our responsibility
                is to create the environment in which that journey can
                flourish.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRINCIPAL IMAGE / PERSONAL NOTE
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-principal sp-reveal"
      >

        <div className="sp-principal__image">
          <img
            src={principalImage}
            alt="Principal of Shifan Noor Global Academy"
            loading="lazy"
          />
        </div>

        <div className="sp-principal__content">

          <div className="sp-container sp-principal__container">

            <div className="sp-section-index sp-section-index--light">
              <span>04</span>
              <span>FROM THE PRINCIPAL</span>
            </div>

            <p className="sp-kicker sp-kicker--light">
              A SHARED RESPONSIBILITY
            </p>

            <h2>
              Growing together,
              <br />
              <em>as a community.</em>
            </h2>

            <p className="sp-principal__lead">
              Education is strongest when the school, the child and
              the family work together.
            </p>

            <p>
              We value the relationship between teachers, students
              and parents because meaningful education requires
              understanding, communication and shared responsibility.
            </p>

            <p>
              Our commitment is to create a learning environment in
              which students feel encouraged to participate, explore,
              question and develop their own confidence.
            </p>

            <div className="sp-principal__footer">

              <div className="sp-principal__name">
                <strong>Principal</strong>
                <span>
                  Shifan Noor Global Academy
                </span>
              </div>

              <div className="sp-principal__motto">
                LEARN
                <span>•</span>
                GROW
                <span>•</span>
                LEAD
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-principles sp-reveal"
      >

        <div className="sp-container">

          <div className="sp-principles__header">

            <div className="sp-section-index">
              <span>05</span>
              <span>OUR APPROACH</span>
            </div>

            <div>

              <p className="sp-kicker">
                WHAT WE BELIEVE
              </p>

              <h2>
                Learning is more
                <br />
                <em>than a lesson.</em>
              </h2>

              <p className="sp-principles__intro">
                Our educational approach seeks to support students
                academically, socially, morally, physically and
                emotionally.
              </p>

            </div>

          </div>


          <div className="sp-principles__list">

            {principles.map((principle) => (
              <article
                className="sp-principle"
                key={principle.number}
              >

                <span className="sp-principle__number">
                  {principle.number}
                </span>

                <div className="sp-principle__content">

                  <h3>
                    {principle.title}
                  </h3>

                  <p>
                    {principle.text}
                  </p>

                </div>

                <span className="sp-principle__arrow">
                  →
                </span>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING / WHOLE CHILD
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-learning sp-reveal"
      >

        <div className="sp-container">

          <div className="sp-learning__grid">

            <div className="sp-learning__content">

              <div className="sp-section-index">
                <span>06</span>
                <span>HOLISTIC DEVELOPMENT</span>
              </div>

              <p className="sp-kicker">
                DEVELOPING THE WHOLE PERSON
              </p>

              <h2>
                Knowledge.
                <br />
                Character.
                <br />
                <em>Confidence.</em>
              </h2>

              <p className="sp-learning__lead">
                We work towards enhancing the growth of children
                intellectually, morally, emotionally, physically
                and socially.
              </p>

              <p>
                Through an engaging and challenging curriculum,
                students are encouraged to develop their abilities
                while discovering the importance of responsibility,
                respect and independent thinking.
              </p>

            </div>


            <div className="sp-learning__image">

              <img
                src={learningImage}
                alt="Holistic learning at SNGA"
                loading="lazy"
              />

              <div className="sp-learning__image-label">
                <span>THE WHOLE CHILD</span>
                <strong>
                  Intellectual
                  <br />
                  Moral
                  <br />
                  Emotional
                  <br />
                  Physical
                  <br />
                  Social
                </strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FUTURE
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-future sp-reveal"
        style={{
          "--sp-future-image": `url(${futureImage})`,
        }}
      >

        <div className="sp-future__overlay" />

        <div className="sp-container">

          <div className="sp-future__content">

            <div className="sp-section-index sp-section-index--light">
              <span>07</span>
              <span>LOOKING AHEAD</span>
            </div>

            <p className="sp-kicker sp-kicker--light">
              PREPARING FOR TOMORROW
            </p>

            <h2>
              Ready for a
              <br />
              <em>changing world.</em>
            </h2>

            <div className="sp-future__copy">

              <p className="sp-future__lead">
                Our central aim is to prepare young people for the
                future in a changing world — one that demands
                flexibility, tolerance and a wide range of skills.
              </p>

              <p>
                We work towards enhancing the growth of children
                through an engaging and challenging curriculum,
                while teaching is tailored wherever possible to
                the needs of individual students.
              </p>

              <p>
                Our hope is that students leave school with the
                confidence to learn independently, think
                responsibly and contribute meaningfully.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING MESSAGE
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-closing sp-reveal"
      >

        <div className="sp-container">

          <div className="sp-closing__grid">

            <div className="sp-section-index">
              <span>08</span>
              <span>A FINAL THOUGHT</span>
            </div>

            <div className="sp-closing__content">

              <p className="sp-kicker">
                WITH WARM REGARDS
              </p>

              <h2>
                Every child deserves
                <br />
                <em>the opportunity to flourish.</em>
              </h2>

              <p>
                At SNGA, we remain committed to creating a stimulating
                and secure environment where students can discover
                their abilities, strengthen their character and
                prepare confidently for the future.
              </p>

              <div className="sp-closing__signature">
                <strong>
                  Principal
                </strong>

                <span>
                  Shifan Noor Global Academy
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        ref={addSection}
        className="sp-cta sp-reveal"
        style={{
          "--sp-cta-image": `url(${ctaBg})`,
        }}
      >

        <div className="sp-cta__overlay" />

        <div className="sp-container">

          <div className="sp-cta__content">

            <p className="sp-cta__eyebrow">
              SHIFAN NOOR GLOBAL ACADEMY
            </p>

            <h2>
              Discover the
              <br />
              <em>SNGA experience.</em>
            </h2>

            <p className="sp-cta__description">
              Explore our academics, campus, facilities and the
              learning opportunities created for every student.
            </p>

            <div className="sp-cta__actions">

              <Link
                to="/academics"
                className="sp-cta__link sp-cta__link--primary"
              >
                <span>Explore Academics</span>
                <span>→</span>
              </Link>

              <Link
                to="/vision-mission"
                className="sp-cta__link"
              >
                <span>Our Vision &amp; Mission</span>
                <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="sp-cta__link"
              >
                <span>Contact the School</span>
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default PrincipalMessage;