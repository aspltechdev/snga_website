// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaGraduationCap,
//   FaPhoneAlt,
//   FaCalendarAlt,
//   FaUserPlus,
//   FaSchool,
//   FaRocket,
//   FaCheckCircle,
//   FaClock,
//   FaShieldAlt,
//   FaAward,
// } from "react-icons/fa";
// import "./AdmissionsCTA.css";

// const AdmissionsCTA = () => {
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);
//   const bottomRef = useRef(null);

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const sectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sga-cta--visible");
//           sectionObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const contentObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sga-cta__content--revealed");
//           contentObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.15 });

//     const bottomObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sga-cta__bottom--revealed");
//           bottomObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.2 });

//     if (sectionRef.current) {
//       sectionObserver.observe(sectionRef.current);
//     }

//     if (contentRef.current) {
//       contentObserver.observe(contentRef.current);
//     }

//     if (bottomRef.current) {
//       bottomObserver.observe(bottomRef.current);
//     }

//     return () => {
//       sectionObserver.disconnect();
//       contentObserver.disconnect();
//       bottomObserver.disconnect();
//     };
//   }, []);

//   const features = [
//     { icon: <FaAward />, label: "Excellence Guaranteed" },
//     { icon: <FaShieldAlt />, label: "Safe Environment" },
//     { icon: <FaClock />, label: "Flexible Timing" },
//   ];

//   const steps = [
//     {
//       number: "01",
//       title: "Enquire",
//       description: "Start a conversation with us",
//       icon: <FaUserPlus />,
//     },
//     {
//       number: "02",
//       title: "Visit",
//       description: "Experience our learning environment",
//       icon: <FaSchool />,
//     },
//     {
//       number: "03",
//       title: "Join",
//       description: "Begin your child's SNGA journey",
//       icon: <FaGraduationCap />,
//     },
//   ];

//   return (
//     <section ref={sectionRef} className="sga-cta">
//       {/* Background decorative elements */}
//       <div className="sga-cta__bg sga-cta__bg--1" />
//       <div className="sga-cta__bg sga-cta__bg--2" />
//       <div className="sga-cta__grid" />

//       <div className="sga-cta__container">
//         {/* =====================================
//             WATERMARK
//         ====================================== */}
//         <div className="sga-cta__watermark">2026</div>

//         {/* =====================================
//             TOP BADGE
//         ====================================== */}
//         <div className="sga-cta__badge">
//           <span className="sga-cta__badge-line" />
//           <span className="sga-cta__badge-text">
//             <FaSchool className="sga-cta__badge-icon" />
//             Admissions Open
//           </span>
//           <span className="sga-cta__badge-line" />
//         </div>

//         {/* =====================================
//             MAIN CONTENT
//         ====================================== */}
//         <div ref={contentRef} className="sga-cta__content">
//           {/* ========== LEFT COLUMN ========== */}
//           <div className="sga-cta__left">
//             <div className="sga-cta__icon-group">
//               <div className="sga-cta__icon-wrapper">
//                 <FaGraduationCap className="sga-cta__icon" />
//               </div>
//               <span className="sga-cta__pulse" />
//             </div>

//             <h2 className="sga-cta__title">
//               Give Your Child
//               <br />
//               <span className="sga-cta__title-highlight">
//                 A Stronger Beginning.
//               </span>
//             </h2>

//             <p className="sga-cta__description">
//               Begin your child's journey with an education that builds knowledge,
//               character, confidence and a lifelong love for learning.
//             </p>

//             <div className="sga-cta__actions">
//               <Link to="/admissions" className="sga-cta__btn sga-cta__btn--primary">
//                 <span>Apply for Admission</span>
//                 <FaArrowRight className="sga-cta__btn-icon" />
//               </Link>

//               <Link to="/contact" className="sga-cta__btn sga-cta__btn--secondary">
//                 <FaPhoneAlt className="sga-cta__btn-icon" />
//                 <span>Talk to Us</span>
//               </Link>
//             </div>

//             <div className="sga-cta__features">
//               {features.map((item, index) => (
//                 <div key={index} className="sga-cta__feature">
//                   <span className="sga-cta__feature-icon">{item.icon}</span>
//                   <span className="sga-cta__feature-label">{item.label}</span>
//                   {index < features.length - 1 && (
//                     <span className="sga-cta__feature-divider" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ========== RIGHT COLUMN ========== */}
//           <div className="sga-cta__right">
//             <div className="sga-cta__steps-header">
//               <span className="sga-cta__steps-label">How to Apply</span>
//               <h3 className="sga-cta__steps-title">
//                 Simple <span className="sga-cta__steps-highlight">3-Step</span> Process
//               </h3>
//             </div>

//             <div className="sga-cta__steps">
//               {steps.map((step, index) => (
//                 <div key={index} className="sga-cta__step">
//                   <div className="sga-cta__step-number">{step.number}</div>
//                   <div className="sga-cta__step-content">
//                     <div className="sga-cta__step-icon">{step.icon}</div>
//                     <div>
//                       <strong className="sga-cta__step-title">{step.title}</strong>
//                       <p className="sga-cta__step-desc">{step.description}</p>
//                     </div>
//                   </div>
//                   {index < steps.length - 1 && (
//                     <div className="sga-cta__step-connector" />
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="sga-cta__steps-footer">
//               <span className="sga-cta__steps-badge">
//                 <FaGraduationCap />
//                 SNGA
//               </span>
//               <span className="sga-cta__steps-quote">
//                 "Every child deserves the best start"
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* =====================================
//             BOTTOM BAR
//         ====================================== */}
//         <div ref={bottomRef} className="sga-cta__bottom">
//           <span className="sga-cta__bottom-brand">
//             SHIFAN NOOR GLOBAL ACADEMY
//           </span>

//           <div className="sga-cta__bottom-divider" />

//           <span className="sga-cta__bottom-tagline">
//             LEARN • GROW • LEAD
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdmissionsCTA;



// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaGraduationCap,
//   FaPhoneAlt,
//   FaCalendarAlt,
//   FaUserPlus,
//   FaSchool,
//   FaRocket,
//   FaCheckCircle,
//   FaClock,
//   FaShieldAlt,
//   FaAward,
//   FaStar,
//   FaHeart,
//   FaUsers,
//   FaChalkboardTeacher,
// } from "react-icons/fa";
// import "./AdmissionsCTA.css";

// // =====================================================
// // ONLINE IMAGES
// // =====================================================
// const IMAGES = {
//   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=800&fit=crop&auto=format",
// };

// const AdmissionsCTA = () => {
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);
//   const bottomRef = useRef(null);

//   // =====================================================
//   // SCROLL TRIGGERED ANIMATIONS
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const sectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("ac-visible");
//           sectionObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const contentObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("ac-content-reveal");
//           contentObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.15 });

//     const bottomObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("ac-bottom-reveal");
//           bottomObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.2 });

//     if (sectionRef.current) {
//       sectionObserver.observe(sectionRef.current);
//     }

//     if (contentRef.current) {
//       contentObserver.observe(contentRef.current);
//     }

//     if (bottomRef.current) {
//       bottomObserver.observe(bottomRef.current);
//     }

//     return () => {
//       sectionObserver.disconnect();
//       contentObserver.disconnect();
//       bottomObserver.disconnect();
//     };
//   }, []);

//   const features = [
//     { icon: <FaAward />, label: "Excellence Guaranteed" },
//     { icon: <FaShieldAlt />, label: "Safe Environment" },
//     { icon: <FaClock />, label: "Flexible Timing" },
//     { icon: <FaHeart />, label: "Holistic Growth" },
//   ];

//   const steps = [
//     {
//       number: "01",
//       title: "Enquire",
//       description: "Start a conversation with us",
//       icon: <FaUserPlus />,
//     },
//     {
//       number: "02",
//       title: "Visit",
//       description: "Experience our learning environment",
//       icon: <FaSchool />,
//     },
//     {
//       number: "03",
//       title: "Join",
//       description: "Begin your child's SNGA journey",
//       icon: <FaGraduationCap />,
//     },
//   ];

//   return (
//     <section ref={sectionRef} className="ac">
//       <div className="ac-bg-image" style={{ backgroundImage: `url(${IMAGES.ctaBg})` }} />
//       <div className="ac-bg-overlay" />

//       {/* Decorative Elements */}
//       <div className="ac-orb ac-orb-1" />
//       <div className="ac-orb ac-orb-2" />
//       <div className="ac-orb ac-orb-3" />

//       <div className="ac-container">
//         {/* =====================================
//             TOP BADGE
//         ====================================== */}
//         <div className="ac-badge">
//           <span className="ac-badge-dot" />
//           <span className="ac-badge-text">
//             <FaStar className="ac-badge-star" />
//             Admissions Open 2025-26
//           </span>
//           <span className="ac-badge-dot" />
//         </div>

//         {/* =====================================
//             MAIN CONTENT
//         ====================================== */}
//         <div ref={contentRef} className="ac-content">
//           {/* ========== LEFT COLUMN ========== */}
//           <div className="ac-left">
//             <div className="ac-icon-wrapper">
//               <FaGraduationCap className="ac-icon" />
//               <span className="ac-icon-ring" />
//             </div>

//             <h2 className="ac-title">
//               Give Your Child
//               <br />
//               <span className="ac-title-highlight">
//                 A Stronger Beginning.
//               </span>
//             </h2>

//             <p className="ac-description">
//               Begin your child's journey with an education that builds knowledge,
//               character, confidence and a lifelong love for learning.
//             </p>

//             <div className="ac-actions">
//               <Link to="/admissions" className="ac-btn ac-btn-primary">
//                 <span>Apply for Admission</span>
//                 <FaArrowRight className="ac-btn-icon" />
//               </Link>

//               <Link to="/contact" className="ac-btn ac-btn-secondary">
//                 <FaPhoneAlt className="ac-btn-icon" />
//                 <span>Talk to Us</span>
//               </Link>
//             </div>

//             <div className="ac-features">
//               {features.map((item, index) => (
//                 <div key={index} className="ac-feature">
//                   <span className="ac-feature-icon">{item.icon}</span>
//                   <span className="ac-feature-label">{item.label}</span>
//                   {index < features.length - 1 && (
//                     <span className="ac-feature-divider" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ========== RIGHT COLUMN ========== */}
//           <div className="ac-right">
//             <div className="ac-steps-header">
//               <span className="ac-steps-label">How to Apply</span>
//               <h3 className="ac-steps-title">
//                 Simple <span className="ac-steps-highlight">3-Step</span> Process
//               </h3>
//             </div>

//             <div className="ac-steps">
//               {steps.map((step, index) => (
//                 <div key={index} className="ac-step">
//                   <div className="ac-step-number">{step.number}</div>
//                   <div className="ac-step-content">
//                     <div className="ac-step-icon">{step.icon}</div>
//                     <div className="ac-step-info">
//                       <strong className="ac-step-title">{step.title}</strong>
//                       <p className="ac-step-desc">{step.description}</p>
//                     </div>
//                   </div>
//                   {index < steps.length - 1 && (
//                     <div className="ac-step-connector" />
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="ac-steps-footer">
//               <span className="ac-steps-badge">
//                 <FaGraduationCap />
//                 SNGA
//               </span>
//               <span className="ac-steps-quote">
//                 "Every child deserves the best start"
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* =====================================
//             BOTTOM BAR
//         ====================================== */}
//         <div ref={bottomRef} className="ac-bottom">
//           <span className="ac-bottom-brand">
//             SHIFAN NOOR GLOBAL ACADEMY
//           </span>

//           <div className="ac-bottom-divider" />

//           <span className="ac-bottom-tagline">
//             <FaUsers className="ac-bottom-icon" />
//             LEARN • GROW • LEAD
//             <FaChalkboardTeacher className="ac-bottom-icon" />
//           </span>

//           <div className="ac-bottom-divider" />

//           <span className="ac-bottom-year">EST. 2015</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdmissionsCTA;



import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./AdmissionsCTA.css";

const IMAGES = {
  background:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2400&q=90",

  students:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=90",
};

const AdmissionsCTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("ac-visible");
            content.classList.add("ac-content-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Talk to us",
      text: "Begin with a simple conversation about your child's journey.",
    },
    {
      number: "02",
      title: "Visit SNGA",
      text: "Experience our campus, classrooms and learning environment.",
    },
    {
      number: "03",
      title: "Take the next step",
      text: "Complete the admission process and begin the journey.",
    },
  ];

  return (
    <section ref={sectionRef} className="ac">

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="ac-background">
        <img
          src={IMAGES.background}
          alt="Shifan Noor Global Academy campus"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = IMAGES.students;
          }}
        />
      </div>

      <div className="ac-background-overlay" />


      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="ac-container">

        <div ref={contentRef} className="ac-content">

          {/* LEFT */}
          <div className="ac-main">

            <div className="ac-eyebrow">
              ADMISSIONS
            </div>

            <h2 className="ac-title">
              The next
              <br />
              <span>chapter starts here.</span>
            </h2>

            <p className="ac-description">
              Give your child an environment where knowledge,
              character, confidence and curiosity can grow
              together.
            </p>

            <div className="ac-actions">

              <Link
                to="/admissions"
                className="ac-primary-button"
              >
                Begin an enquiry
                <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="ac-secondary-button"
              >
                Talk to our team
                <span>→</span>
              </Link>

            </div>

          </div>


          {/* RIGHT INFORMATION PANEL */}
          <div className="ac-panel">

            <div className="ac-panel-header">
              <span>YOUR JOURNEY</span>
              <span>01 — 03</span>
            </div>

            <div className="ac-steps">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="ac-step"
                >

                  <div className="ac-step-number">
                    {step.number}
                  </div>

                  <div className="ac-step-body">

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>

                  </div>

                  <span className="ac-step-arrow">
                    ↗
                  </span>

                </div>
              ))}

            </div>

            <div className="ac-panel-footer">

              <span>
                SHIFAN NOOR GLOBAL ACADEMY
              </span>

              <span>
                LEARN • GROW • LEAD
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <div className="ac-bottom">

          <div className="ac-bottom-item">

            <span className="ac-bottom-label">
              LOCATION
            </span>

            <span className="ac-bottom-value">
              Ramanathapuram, Tamil Nadu
            </span>

          </div>

          <div className="ac-bottom-item">

            <span className="ac-bottom-label">
              ADMISSIONS
            </span>

            <span className="ac-bottom-value">
              Pre-KG through Senior School
            </span>

          </div>

          <div className="ac-bottom-item">

            <span className="ac-bottom-label">
              CONTACT
            </span>

            <a
              href="tel:+919788914441"
              className="ac-bottom-value ac-phone"
            >
              +91 97889 14441
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AdmissionsCTA;