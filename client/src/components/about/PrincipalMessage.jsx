// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// import "./PrincipalMessage.css";

// const PrincipalMessage = () => {
//   return (
//     <main className="principal-page">

//       {/* HERO */}
//       <section className="principal-hero">
//         <div className="principal-container">
//           <div className="principal-hero-content">

//             <div className="principal-eyebrow">
//               <span />
//               PRINCIPAL'S MESSAGE
//             </div>

//             <h1>
//               Education that
//               <br />
//               <em>helps children fly.</em>
//             </h1>

//             <p>
//               A message from the Principal of
//               Shifan Noor Global Academy.
//             </p>

//           </div>

//           <div className="principal-hero-side">
//             <span>SHIFAN NOOR</span>
//             <span>GLOBAL ACADEMY</span>
//           </div>
//         </div>
//       </section>

//       {/* QUOTE */}
//       <section className="principal-quote">
//         <div className="principal-container">

//           <div className="principal-quote-mark">
//             “
//           </div>

//           <blockquote>
//             Excellence is always the result of
//             <em>
//               {" "}high intention, sincere efforts,
//               intelligent direction and skillful execution.
//             </em>
//           </blockquote>

//           <div className="principal-quote-line">
//             <span />
//             PRINCIPAL'S MESSAGE
//           </div>

//         </div>
//       </section>

//       {/* MESSAGE */}
//       <section className="principal-message">
//         <div className="principal-container">

//           <div className="principal-message-grid">

//             <div className="principal-message-label">
//               <span>01</span>
//               THE MESSAGE
//             </div>

//             <div className="principal-message-content">

//               <h2>
//                 A school built around
//                 <br />
//                 <em>the whole child.</em>
//               </h2>

//               <p>
//                 Shifan Noor Global Academy (CBSE) is the
//                 embodiment of a generous vision by The Shifan
//                 Educational Trust. The Trust's commitment to
//                 education comes from a desire to give back to
//                 society through meaningful opportunities for
//                 children.
//               </p>

//               <p>
//                 SNGA was founded with the objective of extending
//                 excellence in education to children while
//                 recognising the importance of holistic development.
//               </p>

//               <p>
//                 We believe that education should help children
//                 grow not only academically, but also as confident,
//                 responsible and capable individuals.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* LEARNING */}
//       <section className="principal-learning">
//         <div className="principal-container">

//           <div className="principal-learning-header">

//             <div className="principal-eyebrow dark">
//               OUR APPROACH
//             </div>

//             <h2>
//               Learning should be
//               <br />
//               an <em>experience.</em>
//             </h2>

//             <p>
//               At SNGA, learning extends beyond textbooks
//               and examinations.
//             </p>

//           </div>

//           <div className="principal-learning-grid">

//             <article className="principal-learning-item">
//               <span>01</span>

//               <h3>
//                 Beyond the Classroom
//               </h3>

//               <p>
//                 Extra-curricular activities form an important
//                 part of school life, helping students explore
//                 their interests and experience learning in
//                 enjoyable ways.
//               </p>
//             </article>

//             <article className="principal-learning-item">
//               <span>02</span>

//               <h3>
//                 Every Child is Unique
//               </h3>

//               <p>
//                 We value the uniqueness every child brings
//                 to our school and provide a supportive,
//                 child-centred environment.
//               </p>
//             </article>

//             <article className="principal-learning-item">
//               <span>03</span>

//               <h3>
//                 Independent & Confident
//               </h3>

//               <p>
//                 Students are encouraged to become independent
//                 and self-confident learners who can approach
//                 challenges with responsibility.
//               </p>
//             </article>

//           </div>

//         </div>
//       </section>

//       {/* FUTURE */}
//       <section className="principal-future">

//         <div className="principal-container">

//           <div className="principal-future-grid">

//             <div className="principal-future-heading">

//               <div className="principal-eyebrow">
//                 PREPARING FOR TOMORROW
//               </div>

//               <h2>
//                 Ready for a
//                 <br />
//                 <em>changing world.</em>
//               </h2>

//             </div>

//             <div className="principal-future-content">

//               <p>
//                 Our central aim is to prepare young people
//                 for the future in a changing world — one that
//                 demands flexibility, tolerance and a wide
//                 range of skills.
//               </p>

//               <p>
//                 We work towards enhancing the growth of
//                 children intellectually, morally, emotionally,
//                 physically and socially through an engaging
//                 and challenging curriculum.
//               </p>

//               <p>
//                 Wherever possible, teaching is tailored to
//                 the needs of individual students so that
//                 every child has the opportunity to develop
//                 confidence, independent learning and
//                 responsible thinking.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* SIGNATURE */}
//       <section className="principal-signature">

//         <div className="principal-container">

//           <div className="principal-signature-inner">

//             <div className="principal-signature-copy">

//               <div className="principal-eyebrow dark">
//                 WITH WARM REGARDS
//               </div>

//               <h2>
//                 The journey of
//                 <br />
//                 <em>every child matters.</em>
//               </h2>

//               <p>
//                 At SNGA, we remain committed to creating
//                 a stimulating and secure environment where
//                 students can discover their abilities,
//                 strengthen their character and prepare
//                 confidently for the future.
//               </p>

//               <div className="principal-signature-name">
//                 <strong>
//                   Principal
//                 </strong>

//                 <span>
//                   Shifan Noor Global Academy
//                 </span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="principal-cta">

//         <div className="principal-container">

//           <div className="principal-cta-content">

//             <div className="principal-eyebrow">
//               EXPLORE SNGA
//             </div>

//             <h2>
//               Discover the
//               <br />
//               <em>SNGA experience.</em>
//             </h2>

//             <p>
//               Explore our academics, campus, facilities
//               and the learning opportunities created
//               for every student.
//             </p>

//             <div className="principal-cta-actions">

//               <Link
//                 to="/academics"
//                 className="principal-cta-button"
//               >
//                 <span>Explore Academics</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/facilities"
//                 className="principal-cta-link"
//               >
//                 View Facilities
//               </Link>

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
import {
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaSchool,
  FaGraduationCap,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaRocket,
  FaHands,
  FaChild,
  FaStar,
  FaPlay,
  FaEye,
  FaBookOpen,
} from "react-icons/fa";
import "./PrincipalMessage.css";

import heroBg from "../../assets/school.jpg";
import heroCircle from "../../assets/about.png";
import ctaBg from "../../assets/engaging.jpg";
import principle from "../../assets/principal.jpg";
import beyond from "../../assets/beyond.jpg";
import holistic from "../../assets/holistic.jpg";
import values from "../../assets/values.jpg";

// =====================================================
// ONLINE IMAGES (Replace with local imports later)
// =====================================================
const IMAGES = {
  heroBg: heroBg,
  heroCircle: heroCircle,
  ctaBg: ctaBg,
  principal: principle,
  classroom: beyond,
  students: holistic,
  campus: values,
};

const PrincipalMessage = () => {
  const heroRef = useRef(null);
  const quoteRef = useRef(null);
  const messageRef = useRef(null);
  const learningRef = useRef(null);
  const futureRef = useRef(null);
  const signatureRef = useRef(null);
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
      { ref: heroRef, className: "sp-hero--visible" },
      { ref: quoteRef, className: "sp-quote--visible" },
      { ref: messageRef, className: "sp-message--visible" },
      { ref: learningRef, className: "sp-learning--visible" },
      { ref: futureRef, className: "sp-future--visible" },
      { ref: signatureRef, className: "sp-signature--visible" },
      { ref: ctaRef, className: "sp-cta--visible" },
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

  // =====================================================
  // DATA
  // =====================================================

  const learningItems = [
    {
      number: "01",
      title: "Beyond the Classroom",
      description:
        "Extra-curricular activities form an important part of school life, helping students explore their interests and experience learning in enjoyable ways.",
      icon: <FaRocket />,
      color: "#4A90D9",
    },
    {
      number: "02",
      title: "Every Child is Unique",
      description:
        "We value the uniqueness every child brings to our school and provide a supportive, child-centred environment.",
      icon: <FaChild />,
      color: "#27AE60",
    },
    {
      number: "03",
      title: "Independent & Confident",
      description:
        "Students are encouraged to become independent and self-confident learners who can approach challenges with responsibility.",
      icon: <FaStar />,
      color: "#F39C12",
    },
  ];

  const values = [
    { icon: <FaHeart />, label: "Empathy", color: "#E74C3C" },
    { icon: <FaHands />, label: "Support", color: "#4A90D9" },
    { icon: <FaGraduationCap />, label: "Excellence", color: "#F39C12" },
    { icon: <FaUsers />, label: "Community", color: "#27AE60" },
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence", icon: <FaAward /> },
    { number: "500+", label: "Students", icon: <FaUsers /> },
    { number: "13.5", label: "Acres Campus", icon: <FaSchool /> },
    { number: "100%", label: "Holistic Focus", icon: <FaHeart /> },
  ];

  return (
    <main className="sp-page">
      {/* =================================================
          TOP BAR - School Identity
      ================================================= */}
      <div className="sp-topbar">
        <div className="sp-container">
          <div className="sp-topbar__content">
            <span className="sp-topbar__motto">
              <FaSchool />
              Shifan Noor Global Academy - Where Values Meet Excellence
            </span>
            <span className="sp-topbar__affiliation">Affiliated to CBSE</span>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO - With Background Image & Circular Image
      ================================================= */}
      <section ref={heroRef} className="sp-hero">
        <div className="sp-hero__bg-wrapper">
          <div 
            className="sp-hero__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          />
          <div className="sp-hero__bg-overlay" />
          <div className="sp-hero__bg-gradient" />
        </div>

        <div className="sp-container">
          <div className="sp-hero__inner">
            <div className="sp-hero__content">
              <div className="sp-hero__badge">
                <FaGraduationCap />
                PRINCIPAL'S MESSAGE
              </div>

              <h1 className="sp-hero__title">
                Education That
                <br />
                <span className="sp-hero__highlight">Helps Children Fly.</span>
              </h1>

              <p className="sp-hero__desc">
                A message from the Principal of Shifan Noor Global Academy.
              </p>

              {/* <div className="sp-hero__stats">
                {stats.map((stat, index) => (
                  <div key={index} className="sp-hero__stat">
                    <span className="sp-hero__stat-icon">{stat.icon}</span>
                    <span className="sp-hero__stat-number">{stat.number}</span>
                    <span className="sp-hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="sp-hero__image-wrapper">
              <div className="sp-hero__image-circle">
                <img 
                  src={IMAGES.heroCircle} 
                  alt="Principal" 
                  className="sp-hero__image-img"
                />
                <div className="sp-hero__image-ring" />
                <div className="sp-hero__image-badge">
                  <span>Principal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sp-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* =================================================
          QUOTE SECTION
      ================================================= */}
      <section ref={quoteRef} className="sp-quote">
        <div className="sp-container">
          <div className="sp-quote__inner">
            <div className="sp-quote__mark sp-quote__mark--left">
              <FaQuoteLeft />
            </div>

            <blockquote className="sp-quote__text">
              Excellence is always the result of
              <em> high intention, sincere efforts, intelligent direction and skillful execution.</em>
            </blockquote>

            <div className="sp-quote__mark sp-quote__mark--right">
              <FaQuoteRight />
            </div>

            <div className="sp-quote__line">
              <span />
              PRINCIPAL'S MESSAGE
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          MESSAGE SECTION
      ================================================= */}
      <section ref={messageRef} className="sp-message">
        <div className="sp-container">
          <div className="sp-message__inner">
            <div className="sp-message__label">
              <span>01</span>
              THE MESSAGE
            </div>

            <div className="sp-message__content">
              <h2 className="sp-message__title">
                A School Built Around
                <br />
                <span className="sp-message__highlight">the Whole Child.</span>
              </h2>

              <div className="sp-message__text">
                <p>
                  Shifan Noor Global Academy (CBSE) is the embodiment of a
                  generous vision by The Shifan Educational Trust. The Trust's
                  commitment to education comes from a desire to give back to
                  society through meaningful opportunities for children.
                </p>
                <p>
                  SNGA was founded with the objective of extending excellence
                  in education to children while recognising the importance of
                  holistic development.
                </p>
                <p>
                  We believe that education should help children grow not only
                  academically, but also as confident, responsible and capable
                  individuals.
                </p>
              </div>

              <div className="sp-message__values">
                {values.map((item, index) => (
                  <div key={index} className="sp-message__value">
                    <span className="sp-message__value-icon" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    <span className="sp-message__value-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          LEARNING APPROACH - Image Overlay Cards
      ================================================= */}
      <section ref={learningRef} className="sp-learning">
        <div className="sp-container">
          <div className="sp-learning__header">
            <span className="sp-learning__label">OUR APPROACH</span>
            <h2 className="sp-learning__title">
              Learning Should Be
              <br />
              <span className="sp-learning__highlight">an Experience.</span>
            </h2>
            <p className="sp-learning__desc">
              At SNGA, learning extends beyond textbooks and examinations.
            </p>
          </div>

          <div className="sp-learning__grid">
            {learningItems.map((item) => (
              <div key={item.number} className="sp-learning__card">
                <div className="sp-learning__card-image">
                  <img src={IMAGES.classroom} alt={item.title} loading="lazy" />
                  <div className="sp-learning__card-overlay">
                    <div className="sp-learning__card-content">
                      <div className="sp-learning__card-top">
                        <span className="sp-learning__card-number">
                          {item.number}
                        </span>
                        <div className="sp-learning__card-icon" style={{ color: item.color }}>
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="sp-learning__card-title">{item.title}</h3>
                      <p className="sp-learning__card-desc">{item.description}</p>
                      <span className="sp-learning__card-arrow">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          FUTURE SECTION - With Background Image
      ================================================= */}
      <section ref={futureRef} className="sp-future">
        <div className="sp-future__bg-wrapper">
          <div 
            className="sp-future__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.campus})` }}
          />
          <div className="sp-future__bg-overlay" />
        </div>

        <div className="sp-container">
          <div className="sp-future__inner">
            <div className="sp-future__content">
              <span className="sp-future__label">PREPARING FOR TOMORROW</span>
              <h2 className="sp-future__title">
                Ready for a
                <br />
                <span className="sp-future__highlight">Changing World.</span>
              </h2>
            </div>

            <div className="sp-future__right">
              <div className="sp-future__quote">
                <FaQuoteLeft />
              </div>
              <p className="sp-future__desc">
                Our central aim is to prepare young people for the future in a
                changing world — one that demands flexibility, tolerance and a
                wide range of skills.
              </p>
              <p className="sp-future__desc">
                We work towards enhancing the growth of children intellectually,
                morally, emotionally, physically and socially through an engaging
                and challenging curriculum.
              </p>
              <p className="sp-future__desc">
                Wherever possible, teaching is tailored to the needs of individual
                students so that every child has the opportunity to develop
                confidence, independent learning and responsible thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SIGNATURE SECTION
      ================================================= */}
      <section ref={signatureRef} className="sp-signature">
        <div className="sp-container">
          <div className="sp-signature__inner">
            <div className="sp-signature__content">
              <div className="sp-signature__badge">
                <FaHeart />
                WITH WARM REGARDS
              </div>

              <h2 className="sp-signature__title">
                The Journey of
                <br />
                <span className="sp-signature__highlight">Every Child Matters.</span>
              </h2>

              <p className="sp-signature__desc">
                At SNGA, we remain committed to creating a stimulating and secure
                environment where students can discover their abilities, strengthen
                their character and prepare confidently for the future.
              </p>

              <div className="sp-signature__name">
                <div className="sp-signature__avatar">
                  <img src={IMAGES.principal} alt="Principal" />
                </div>
                <div className="sp-signature__details">
                  <strong>Principal</strong>
                  <span>Shifan Noor Global Academy</span>
                </div>
              </div>

              <div className="sp-signature__line" />
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA - With Background Image
      ================================================= */}
      <section ref={ctaRef} className="sp-cta">
        <div className="sp-cta__bg-wrapper">
          <div 
            className="sp-cta__bg-image" 
            style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
          />
          <div className="sp-cta__bg-overlay" />
          <div className="sp-cta__bg-gradient" />
        </div>

        <div className="sp-container">
          <div className="sp-cta__content">
            <div className="sp-cta__badge">
              <FaGraduationCap />
              SHIFAN NOOR GLOBAL ACADEMY
            </div>

            <h2 className="sp-cta__title">
              Discover the
              <br />
              <span className="sp-cta__highlight">SNGA Experience.</span>
            </h2>

            <p className="sp-cta__desc">
              Explore our academics, campus, facilities and the learning
              opportunities created for every student.
            </p>

            <div className="sp-cta__actions">
              <Link to="/academics" className="sp-cta__btn sp-cta__btn--primary">
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>
              <Link to="/facilities" className="sp-cta__btn sp-cta__btn--secondary">
                <span>View Facilities</span>
              </Link>
            </div>

            <div className="sp-cta__footer">
              <span>
                <FaHeart /> Values-Driven
              </span>
              <span>
                <FaGraduationCap /> Academic Excellence
              </span>
              <span>
                <FaUsers /> Community Focus
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrincipalMessage;