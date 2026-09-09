// // // // // import {
// // // // //   FaGraduationCap,
// // // // //   FaChalkboardTeacher,
// // // // //   FaLightbulb,
// // // // //   FaHeart,
// // // // //   FaArrowRight,
// // // // // } from "react-icons/fa";

// // // // // import { Link } from "react-router-dom";

// // // // // import "./WhyChooseUs.css";

// // // // // const WhyChooseUs = () => {
// // // // //   const features = [
// // // // //     {
// // // // //       number: "01",
// // // // //       icon: <FaGraduationCap />,
// // // // //       title: "Holistic Education",
// // // // //       description:
// // // // //         "We focus on academic excellence along with creativity, confidence, communication and personal growth.",
// // // // //     },
// // // // //     {
// // // // //       number: "02",
// // // // //       icon: <FaChalkboardTeacher />,
// // // // //       title: "Dedicated Faculty",
// // // // //       description:
// // // // //         "Our teachers create an engaging learning environment and encourage every student to reach their potential.",
// // // // //     },
// // // // //     {
// // // // //       number: "03",
// // // // //       icon: <FaLightbulb />,
// // // // //       title: "Future Ready Learning",
// // // // //       description:
// // // // //         "Students are encouraged to think independently, explore new ideas and develop skills for a changing world.",
// // // // //     },
// // // // //     {
// // // // //       number: "04",
// // // // //       icon: <FaHeart />,
// // // // //       title: "Values & Character",
// // // // //       description:
// // // // //         "We nurture responsible, respectful and compassionate individuals through strong values and meaningful experiences.",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <section className="why-choose-section">
// // // // //       <div className="why-choose-container">

// // // // //         {/* =====================================
// // // // //             HEADER
// // // // //         ====================================== */}

// // // // //         <div className="why-choose-header">

// // // // //           <div className="why-choose-heading">

// // // // //             <div className="why-choose-label">
// // // // //               <span></span>
// // // // //               WHY CHOOSE SNGA
// // // // //             </div>

// // // // //             <h2 className="why-choose-title">
// // // // //               More Than Education.
// // // // //               <br />
// // // // //               <em>A Foundation for Life.</em>
// // // // //             </h2>

// // // // //           </div>

// // // // //           <div className="why-choose-intro">
// // // // //             <p>
// // // // //               At Shree Narayan Guru Academy,
// // // // //               we believe every child has unique
// // // // //               potential. Our approach combines
// // // // //               knowledge, values and experiences
// // // // //               to help students grow with confidence.
// // // // //             </p>

// // // // //             <Link
// // // // //               to="/about"
// // // // //               className="why-choose-link"
// // // // //             >
// // // // //               <span>Learn More</span>
// // // // //               <FaArrowRight />
// // // // //             </Link>
// // // // //           </div>

// // // // //         </div>

// // // // //         {/* =====================================
// // // // //             FEATURE GRID
// // // // //         ====================================== */}

// // // // //         <div className="why-choose-grid">

// // // // //           {features.map((feature) => (
// // // // //             <div
// // // // //               className="why-choose-card"
// // // // //               key={feature.number}
// // // // //             >

// // // // //               {/* Number */}

// // // // //               <div className="why-choose-card-top">

// // // // //                 <span className="why-choose-number">
// // // // //                   {feature.number}
// // // // //                 </span>

// // // // //                 <div className="why-choose-icon">
// // // // //                   {feature.icon}
// // // // //                 </div>

// // // // //               </div>

// // // // //               {/* Content */}

// // // // //               <div className="why-choose-card-content">

// // // // //                 <h3>
// // // // //                   {feature.title}
// // // // //                 </h3>

// // // // //                 <p>
// // // // //                   {feature.description}
// // // // //                 </p>

// // // // //               </div>

// // // // //               {/* Bottom Line */}

// // // // //               <div className="why-choose-card-line"></div>

// // // // //             </div>
// // // // //           ))}

// // // // //         </div>

// // // // //         {/* =====================================
// // // // //             BOTTOM STATEMENT
// // // // //         ====================================== */}

// // // // //         <div className="why-choose-bottom">

// // // // //           <div className="why-choose-bottom-line"></div>

// // // // //           <p>
// // // // //             Inspiring students to learn,
// // // // //             lead and make a difference.
// // // // //           </p>

// // // // //           <div className="why-choose-bottom-line"></div>

// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default WhyChooseUs;



// // // // import { useEffect, useRef } from "react";
// // // // import {
// // // //   FaGraduationCap,
// // // //   FaChalkboardTeacher,
// // // //   FaLightbulb,
// // // //   FaHeart,
// // // //   FaArrowRight,
// // // //   FaRocket,
// // // // } from "react-icons/fa";
// // // // import { Link } from "react-router-dom";
// // // // import "./WhyChooseUs.css";

// // // // const WhyChooseUs = () => {
// // // //   const features = [
// // // //     {
// // // //       number: "01",
// // // //       icon: <FaGraduationCap />,
// // // //       title: "Holistic Development",
// // // //       description:
// // // //         "SNGA brings academics, skills, values, creativity and personal development together to support the complete growth of every student.",
// // // //       color: "#f5c542",
// // // //     },
// // // //     {
// // // //       number: "02",
// // // //       icon: <FaChalkboardTeacher />,
// // // //       title: "Engaging Learning",
// // // //       description:
// // // //         "Digital classrooms and thoughtfully designed learning spaces create an environment where students can understand concepts, explore ideas and learn with confidence.",
// // // //       color: "#e8b84a",
// // // //     },
// // // //     {
// // // //       number: "03",
// // // //       icon: <FaLightbulb />,
// // // //       title: "Learning Beyond Classrooms",
// // // //       description:
// // // //         "From science laboratories and computer learning to library experiences and co-curricular activities, students are encouraged to learn through meaningful experiences.",
// // // //       color: "#d4a830",
// // // //     },
// // // //     {
// // // //       number: "04",
// // // //       icon: <FaHeart />,
// // // //       title: "Values & Confidence",
// // // //       description:
// // // //         "We focus on developing healthy attitudes, strong values, self-esteem and responsibility so students are prepared to meet academic, social and future challenges.",
// // // //       color: "#c49a2a",
// // // //     },
// // // //   ];

// // // //   const sectionRef = useRef(null);
// // // //   const headerRef = useRef(null);
// // // //   const gridRef = useRef(null);
// // // //   const bottomRef = useRef(null);

// // // //   // =====================================================
// // // //   // SCROLL TRIGGERED ANIMATIONS
// // // //   // =====================================================

// // // //   useEffect(() => {
// // // //     const observerOptions = {
// // // //       threshold: 0.1,
// // // //       rootMargin: "0px 0px -50px 0px",
// // // //     };

// // // //     // Section observer
// // // //     const sectionObserver = new IntersectionObserver((entries) => {
// // // //       entries.forEach((entry) => {
// // // //         if (entry.isIntersecting) {
// // // //           entry.target.classList.add("why-choose-visible");
// // // //           sectionObserver.unobserve(entry.target);
// // // //         }
// // // //       });
// // // //     }, observerOptions);

// // // //     // Header observer
// // // //     const headerObserver = new IntersectionObserver((entries) => {
// // // //       entries.forEach((entry) => {
// // // //         if (entry.isIntersecting) {
// // // //           entry.target.classList.add("reveal-header");
// // // //           headerObserver.unobserve(entry.target);
// // // //         }
// // // //       });
// // // //     }, { threshold: 0.15 });

// // // //     // Grid observer (staggered cards)
// // // //     const gridObserver = new IntersectionObserver((entries) => {
// // // //       entries.forEach((entry) => {
// // // //         if (entry.isIntersecting) {
// // // //           const cards = entry.target.querySelectorAll(".why-choose-card");
// // // //           cards.forEach((card, index) => {
// // // //             setTimeout(() => {
// // // //               card.classList.add("reveal-card");
// // // //             }, index * 150);
// // // //           });
// // // //           gridObserver.unobserve(entry.target);
// // // //         }
// // // //       });
// // // //     }, { threshold: 0.1 });

// // // //     // Bottom observer
// // // //     const bottomObserver = new IntersectionObserver((entries) => {
// // // //       entries.forEach((entry) => {
// // // //         if (entry.isIntersecting) {
// // // //           entry.target.classList.add("reveal-bottom");
// // // //           bottomObserver.unobserve(entry.target);
// // // //         }
// // // //       });
// // // //     }, { threshold: 0.2 });

// // // //     if (sectionRef.current) {
// // // //       sectionObserver.observe(sectionRef.current);
// // // //     }

// // // //     if (headerRef.current) {
// // // //       headerObserver.observe(headerRef.current);
// // // //     }

// // // //     if (gridRef.current) {
// // // //       gridObserver.observe(gridRef.current);
// // // //     }

// // // //     if (bottomRef.current) {
// // // //       bottomObserver.observe(bottomRef.current);
// // // //     }

// // // //     return () => {
// // // //       sectionObserver.disconnect();
// // // //       headerObserver.disconnect();
// // // //       gridObserver.disconnect();
// // // //       bottomObserver.disconnect();
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <section ref={sectionRef} className="why-choose-section">
// // // //       {/* Background decorative elements */}
// // // //       <div className="why-choose-bg-circle why-choose-bg-circle-1" />
// // // //       <div className="why-choose-bg-circle why-choose-bg-circle-2" />
// // // //       <div className="why-choose-bg-line" />

// // // //       <div className="why-choose-container">
// // // //         {/* =====================================
// // // //             HEADER
// // // //         ====================================== */}
// // // //         <div ref={headerRef} className="why-choose-header">
// // // //           <div className="why-choose-heading">
// // // //             <div className="why-choose-label">
// // // //               <span className="why-choose-label-line" />
// // // //               <span className="why-choose-label-text">WHY CHOOSE SNGA</span>
// // // //             </div>

// // // //             <h2 className="why-choose-title">
// // // //               Education That
// // // //               <br />
// // // //               <span className="why-choose-title-emphasis">Builds the Whole Child.</span>
// // // //             </h2>
// // // //           </div>

// // // //           <div className="why-choose-intro">
// // // //             <p>
// // // //               At Shifan Noor Global Academy, education extends beyond academic
// // // //               achievement. We create opportunities for students to build knowledge,
// // // //               develop essential skills, strengthen values and grow into confident
// // // //               individuals ready for the future.
// // // //             </p>

// // // //             <Link to="/about" className="why-choose-link">
// // // //               <span>Discover SNGA</span>
// // // //               <FaArrowRight />
// // // //             </Link>
// // // //           </div>
// // // //         </div>

// // // //         {/* =====================================
// // // //             FEATURE GRID
// // // //         ====================================== */}
// // // //         <div ref={gridRef} className="why-choose-grid">
// // // //           {features.map((feature) => (
// // // //             <div
// // // //               className="why-choose-card"
// // // //               key={feature.number}
// // // //               style={{ "--card-color": feature.color }}
// // // //             >
// // // //               <div className="why-choose-card-glow" />

// // // //               <div className="why-choose-card-top">
// // // //                 <span className="why-choose-number">{feature.number}</span>
// // // //                 <div className="why-choose-icon">{feature.icon}</div>
// // // //               </div>

// // // //               <div className="why-choose-card-content">
// // // //                 <h3>{feature.title}</h3>
// // // //                 <p>{feature.description}</p>
// // // //               </div>

// // // //               <div className="why-choose-card-line" />
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* =====================================
// // // //             BOTTOM STATEMENT
// // // //         ====================================== */}
// // // //         <div ref={bottomRef} className="why-choose-bottom">
// // // //           <div className="why-choose-bottom-line" />
// // // //           <p>
// // // //             <FaRocket className="why-choose-bottom-icon" />
// // // //             Knowledge. Skills. Values. Confidence.
// // // //             <FaRocket className="why-choose-bottom-icon" />
// // // //           </p>
// // // //           <div className="why-choose-bottom-line" />
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default WhyChooseUs;


// // // import { useEffect, useRef } from "react";
// // // import {
// // //   FaGraduationCap,
// // //   FaChalkboardTeacher,
// // //   FaLightbulb,
// // //   FaHeart,
// // //   FaArrowRight,
// // //   FaRocket,
// // //   FaPlay,
// // // } from "react-icons/fa";
// // // import { Link } from "react-router-dom";
// // // import "./WhyChooseUs.css";

// // // // Import images (replace with your actual images)
// // // import holisticImage from "../../assets/holistic.jpg";
// // // import engagingImage from "../../assets/engaging.jpg";
// // // import beyondImage from "../../assets/beyond.jpg";
// // // import valuesImage from "../../assets/values.jpg";

// // // const WhyChooseUs = () => {
// // //   const features = [
// // //     {
// // //       number: "01",
// // //       icon: <FaGraduationCap />,
// // //       title: "Holistic Development",
// // //       description:
// // //         "SNGA brings academics, skills, values, creativity and personal development together to support the complete growth of every student.",
// // //       image: holisticImage,
// // //       color: "#f5c542",
// // //       gradient: "linear-gradient(135deg, rgba(245,197,66,0.9), rgba(212,168,48,0.7))",
// // //     },
// // //     {
// // //       number: "02",
// // //       icon: <FaChalkboardTeacher />,
// // //       title: "Engaging Learning",
// // //       description:
// // //         "Digital classrooms and thoughtfully designed learning spaces create an environment where students can understand concepts, explore ideas and learn with confidence.",
// // //       image: engagingImage,
// // //       color: "#e8b84a",
// // //       gradient: "linear-gradient(135deg, rgba(232,184,74,0.9), rgba(200,160,50,0.7))",
// // //     },
// // //     {
// // //       number: "03",
// // //       icon: <FaLightbulb />,
// // //       title: "Learning Beyond Classrooms",
// // //       description:
// // //         "From science laboratories and computer learning to library experiences and co-curricular activities, students are encouraged to learn through meaningful experiences.",
// // //       image: beyondImage,
// // //       color: "#d4a830",
// // //       gradient: "linear-gradient(135deg, rgba(212,168,48,0.9), rgba(180,140,40,0.7))",
// // //     },
// // //     {
// // //       number: "04",
// // //       icon: <FaHeart />,
// // //       title: "Values & Confidence",
// // //       description:
// // //         "We focus on developing healthy attitudes, strong values, self-esteem and responsibility so students are prepared to meet academic, social and future challenges.",
// // //       image: valuesImage,
// // //       color: "#c49a2a",
// // //       gradient: "linear-gradient(135deg, rgba(196,154,42,0.9), rgba(160,130,35,0.7))",
// // //     },
// // //   ];

// // //   const sectionRef = useRef(null);
// // //   const headerRef = useRef(null);
// // //   const gridRef = useRef(null);
// // //   const bottomRef = useRef(null);

// // //   // =====================================================
// // //   // SCROLL TRIGGERED ANIMATIONS
// // //   // =====================================================

// // //   useEffect(() => {
// // //     const observerOptions = {
// // //       threshold: 0.1,
// // //       rootMargin: "0px 0px -50px 0px",
// // //     };

// // //     const sectionObserver = new IntersectionObserver((entries) => {
// // //       entries.forEach((entry) => {
// // //         if (entry.isIntersecting) {
// // //           entry.target.classList.add("why-choose-visible");
// // //           sectionObserver.unobserve(entry.target);
// // //         }
// // //       });
// // //     }, observerOptions);

// // //     const headerObserver = new IntersectionObserver((entries) => {
// // //       entries.forEach((entry) => {
// // //         if (entry.isIntersecting) {
// // //           entry.target.classList.add("reveal-header");
// // //           headerObserver.unobserve(entry.target);
// // //         }
// // //       });
// // //     }, { threshold: 0.15 });

// // //     const gridObserver = new IntersectionObserver((entries) => {
// // //       entries.forEach((entry) => {
// // //         if (entry.isIntersecting) {
// // //           const cards = entry.target.querySelectorAll(".why-choose-card");
// // //           cards.forEach((card, index) => {
// // //             setTimeout(() => {
// // //               card.classList.add("reveal-card");
// // //             }, index * 120);
// // //           });
// // //           gridObserver.unobserve(entry.target);
// // //         }
// // //       });
// // //     }, { threshold: 0.1 });

// // //     const bottomObserver = new IntersectionObserver((entries) => {
// // //       entries.forEach((entry) => {
// // //         if (entry.isIntersecting) {
// // //           entry.target.classList.add("reveal-bottom");
// // //           bottomObserver.unobserve(entry.target);
// // //         }
// // //       });
// // //     }, { threshold: 0.2 });

// // //     if (sectionRef.current) {
// // //       sectionObserver.observe(sectionRef.current);
// // //     }

// // //     if (headerRef.current) {
// // //       headerObserver.observe(headerRef.current);
// // //     }

// // //     if (gridRef.current) {
// // //       gridObserver.observe(gridRef.current);
// // //     }

// // //     if (bottomRef.current) {
// // //       bottomObserver.observe(bottomRef.current);
// // //     }

// // //     return () => {
// // //       sectionObserver.disconnect();
// // //       headerObserver.disconnect();
// // //       gridObserver.disconnect();
// // //       bottomObserver.disconnect();
// // //     };
// // //   }, []);

// // //   return (
// // //     <section ref={sectionRef} className="why-choose-section">
// // //       {/* Background decorative elements */}
// // //       <div className="why-choose-bg-circle why-choose-bg-circle-1" />
// // //       <div className="why-choose-bg-circle why-choose-bg-circle-2" />
// // //       <div className="why-choose-bg-line" />

// // //       <div className="why-choose-container">
// // //         {/* =====================================
// // //             HEADER
// // //         ====================================== */}
// // //         <div ref={headerRef} className="why-choose-header">
// // //           <div className="why-choose-heading">
// // //             <div className="why-choose-label">
// // //               <span className="why-choose-label-line" />
// // //               <span className="why-choose-label-text">WHY CHOOSE SNGA</span>
// // //             </div>

// // //             <h2 className="why-choose-title">
// // //               Education That
// // //               <br />
// // //               <span className="why-choose-title-emphasis">Builds the Whole Child.</span>
// // //             </h2>
// // //           </div>

// // //           <div className="why-choose-intro">
// // //             <p>
// // //               At Shifan Noor Global Academy, education extends beyond academic
// // //               achievement. We create opportunities for students to build knowledge,
// // //               develop essential skills, strengthen values and grow into confident
// // //               individuals ready for the future.
// // //             </p>

// // //             <Link to="/about" className="why-choose-link">
// // //               <span>Discover SNGA</span>
// // //               <FaArrowRight />
// // //             </Link>
// // //           </div>
// // //         </div>

// // //         {/* =====================================
// // //             FEATURE GRID
// // //         ====================================== */}
// // //         <div ref={gridRef} className="why-choose-grid">
// // //           {features.map((feature) => (
// // //             <div
// // //               className="why-choose-card"
// // //               key={feature.number}
// // //               style={{ "--card-color": feature.color }}
// // //             >
// // //               {/* Card Image */}
// // //               <div className="why-choose-card-image">
// // //                 <img src={feature.image} alt={feature.title} loading="lazy" />
// // //                 <div 
// // //                   className="why-choose-card-overlay"
// // //                   style={{ background: feature.gradient }}
// // //                 />
// // //               </div>

// // //               {/* Card Content Overlay */}
// // //               <div className="why-choose-card-content">
// // //                 <div className="why-choose-card-top">
// // //                   <span className="why-choose-number">{feature.number}</span>
// // //                   <div className="why-choose-icon" style={{ color: feature.color }}>
// // //                     {feature.icon}
// // //                   </div>
// // //                 </div>

// // //                 <h3>{feature.title}</h3>
// // //                 <p>{feature.description}</p>

// // //                 <div className="why-choose-card-footer">
// // //                   <div className="why-choose-card-line" />
// // //                   <span className="why-choose-card-explore">
// // //                     Explore <FaArrowRight />
// // //                   </span>
// // //                 </div>
// // //               </div>

// // //               {/* Hover Glow */}
// // //               <div className="why-choose-card-glow" />
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* =====================================
// // //             BOTTOM STATEMENT
// // //         ====================================== */}
// // //         <div ref={bottomRef} className="why-choose-bottom">
// // //           <div className="why-choose-bottom-line" />
// // //           <p>
// // //             <FaRocket className="why-choose-bottom-icon" />
// // //             Knowledge. Skills. Values. Confidence.
// // //             <FaRocket className="why-choose-bottom-icon" />
// // //           </p>
// // //           <div className="why-choose-bottom-line" />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default WhyChooseUs;



// // import { useEffect, useRef } from "react";
// // import {
// //   FaGraduationCap,
// //   FaChalkboardTeacher,
// //   FaLightbulb,
// //   FaHeart,
// //   FaArrowRight,
// //   FaRocket,
// // } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import "./WhyChooseUs.css";

// // // Import images (replace with your actual images)
// // import holisticImage from "../../assets/holistic.jpg";
// // import engagingImage from "../../assets/engaging.jpg";
// // import beyondImage from "../../assets/beyond.jpg";
// // import valuesImage from "../../assets/values.jpg";

// // const WhyChooseUs = () => {
// //   const features = [
// //     {
// //       number: "01",
// //       icon: <FaGraduationCap />,
// //       title: "Holistic Development",
// //       description:
// //         "SNGA brings academics, skills, values, creativity and personal development together to support the complete growth of every student.",
// //       image: holisticImage,
// //       color: "#D6A928",
// //     },
// //     {
// //       number: "02",
// //       icon: <FaChalkboardTeacher />,
// //       title: "Engaging Learning",
// //       description:
// //         "Digital classrooms and thoughtfully designed learning spaces create an environment where students can understand concepts, explore ideas and learn with confidence.",
// //       image: engagingImage,
// //       color: "#C80000",
// //     },
// //     {
// //       number: "03",
// //       icon: <FaLightbulb />,
// //       title: "Learning Beyond Classrooms",
// //       description:
// //         "From science laboratories and computer learning to library experiences and co-curricular activities, students are encouraged to learn through meaningful experiences.",
// //       image: beyondImage,
// //       color: "#123B8C",
// //     },
// //     {
// //       number: "04",
// //       icon: <FaHeart />,
// //       title: "Values & Confidence",
// //       description:
// //         "We focus on developing healthy attitudes, strong values, self-esteem and responsibility so students are prepared to meet academic, social and future challenges.",
// //       image: valuesImage,
// //       color: "#00005B",
// //     },
// //   ];

// //   const sectionRef = useRef(null);
// //   const headerRef = useRef(null);
// //   const gridRef = useRef(null);

// //   // =====================================================
// //   // SCROLL TRIGGERED ANIMATIONS
// //   // =====================================================

// //   useEffect(() => {
// //     const observerOptions = {
// //       threshold: 0.1,
// //       rootMargin: "0px 0px -50px 0px",
// //     };

// //     const sectionObserver = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add("wc-visible");
// //           sectionObserver.unobserve(entry.target);
// //         }
// //       });
// //     }, observerOptions);

// //     const headerObserver = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add("reveal-header");
// //           headerObserver.unobserve(entry.target);
// //         }
// //       });
// //     }, { threshold: 0.15 });

// //     const gridObserver = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           const cards = entry.target.querySelectorAll(".wc-card");
// //           cards.forEach((card, index) => {
// //             setTimeout(() => {
// //               card.classList.add("reveal-card");
// //             }, index * 150);
// //           });
// //           gridObserver.unobserve(entry.target);
// //         }
// //       });
// //     }, { threshold: 0.1 });

// //     if (sectionRef.current) {
// //       sectionObserver.observe(sectionRef.current);
// //     }

// //     if (headerRef.current) {
// //       headerObserver.observe(headerRef.current);
// //     }

// //     if (gridRef.current) {
// //       gridObserver.observe(gridRef.current);
// //     }

// //     return () => {
// //       sectionObserver.disconnect();
// //       headerObserver.disconnect();
// //       gridObserver.disconnect();
// //     };
// //   }, []);

// //   return (
// //     <section ref={sectionRef} className="wc">
// //       {/* Background decorative elements */}
// //       <div className="wc-bg-circle wc-bg-circle-1" />
// //       <div className="wc-bg-circle wc-bg-circle-2" />

// //       <div className="wc-container">
// //         {/* =====================================
// //             HEADER
// //         ====================================== */}
// //         <div ref={headerRef} className="wc-header">
// //           <div className="wc-heading">
// //             <div className="wc-label">
// //               <span className="wc-label-line" />
// //               <span className="wc-label-text">WHY CHOOSE SNGA</span>
// //             </div>

// //             <h2 className="wc-title">
// //               Education That
// //               <br />
// //               <span className="wc-title-emphasis">Builds the Whole Child.</span>
// //             </h2>
// //           </div>

// //           <div className="wc-intro">
// //             <p>
// //               At Shifan Noor Global Academy, education extends beyond academic
// //               achievement. We create opportunities for students to build knowledge,
// //               develop essential skills, strengthen values and grow into confident
// //               individuals ready for the future.
// //             </p>

// //             <Link to="/about" className="wc-link">
// //               <span>Discover SNGA</span>
// //               <FaArrowRight />
// //             </Link>
// //           </div>
// //         </div>

// //         {/* =====================================
// //             FEATURE GRID - Image Overlay Cards
// //         ====================================== */}
// //         <div ref={gridRef} className="wc-grid">
// //           {features.map((feature) => (
// //             <div
// //               className="wc-card"
// //               key={feature.number}
// //             >
// //               <div className="wc-card-image">
// //                 <img src={feature.image} alt={feature.title} loading="lazy" />
// //                 <div className="wc-card-overlay" />
// //               </div>

// //               <div className="wc-card-content">
// //                 <div className="wc-card-top">
// //                   <span className="wc-card-number">{feature.number}</span>
// //                   <div className="wc-card-icon" style={{ color: feature.color }}>
// //                     {feature.icon}
// //                   </div>
// //                 </div>

// //                 <h3 className="wc-card-title">{feature.title}</h3>
// //                 <p className="wc-card-desc">{feature.description}</p>

// //                 <div className="wc-card-line" />
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* =====================================
// //             BOTTOM STATEMENT
// //         ====================================== */}
// //         <div className="wc-bottom">
// //           <div className="wc-bottom-line" />
// //           <p>
// //             <FaRocket className="wc-bottom-icon" />
// //             <span>Knowledge. Skills. Values. Confidence.</span>
// //             <FaRocket className="wc-bottom-icon" />
// //           </p>
// //           <div className="wc-bottom-line" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyChooseUs;


// import { useEffect, useRef } from "react";
// import {
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaLightbulb,
//   FaHeart,
//   FaArrowRight,
//   FaRocket,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./WhyChooseUs.css";

// // Import images (replace with your actual images)
// import holisticImage from "../../assets/holistic.jpg";
// import engagingImage from "../../assets/engaging.jpg";
// import beyondImage from "../../assets/beyond.jpg";
// import valuesImage from "../../assets/values.jpg";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       number: "01",
//       icon: <FaGraduationCap />,
//       title: "Holistic Development",
//       description:
//         "SNGA brings academics, skills, values, creativity and personal development together to support the complete growth of every student.",
//       image: holisticImage,
//       color: "#D6A928",
//     },
//     {
//       number: "02",
//       icon: <FaChalkboardTeacher />,
//       title: "Engaging Learning",
//       description:
//         "Digital classrooms and thoughtfully designed learning spaces create an environment where students can understand concepts, explore ideas and learn with confidence.",
//       image: engagingImage,
//       color: "#C80000",
//     },
//     {
//       number: "03",
//       icon: <FaLightbulb />,
//       title: "Learning Beyond Classrooms",
//       description:
//         "From science laboratories and computer learning to library experiences and co-curricular activities, students are encouraged to learn through meaningful experiences.",
//       image: beyondImage,
//       color: "#123B8C",
//     },
//     {
//       number: "04",
//       icon: <FaHeart />,
//       title: "Values & Confidence",
//       description:
//         "We focus on developing healthy attitudes, strong values, self-esteem and responsibility so students are prepared to meet academic, social and future challenges.",
//       image: valuesImage,
//       color: "#00005B",
//     },
//   ];

//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const gridRef = useRef(null);

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
//           entry.target.classList.add("wc-visible");
//           sectionObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const headerObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal-header");
//           headerObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.15 });

//     const gridObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const cards = entry.target.querySelectorAll(".wc-card");
//           cards.forEach((card, index) => {
//             setTimeout(() => {
//               card.classList.add("reveal-card");
//             }, index * 150);
//           });
//           gridObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.1 });

//     if (sectionRef.current) {
//       sectionObserver.observe(sectionRef.current);
//     }

//     if (headerRef.current) {
//       headerObserver.observe(headerRef.current);
//     }

//     if (gridRef.current) {
//       gridObserver.observe(gridRef.current);
//     }

//     return () => {
//       sectionObserver.disconnect();
//       headerObserver.disconnect();
//       gridObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="wc">
//       {/* Background decorative elements */}
//       <div className="wc-bg-circle wc-bg-circle-1" />
//       <div className="wc-bg-circle wc-bg-circle-2" />

//       <div className="wc-container">
//         {/* =====================================
//             HEADER
//         ====================================== */}
//         <div ref={headerRef} className="wc-header">
//           <div className="wc-heading">
//             <div className="wc-label">
//               <span className="wc-label-line" />
//               <span className="wc-label-text">WHY CHOOSE SNGA</span>
//             </div>

//             <h2 className="wc-title">
//               Education That
//               <br />
//               <span className="wc-title-emphasis">Builds the Whole Child.</span>
//             </h2>
//           </div>

//           <div className="wc-intro">
//             <p>
//               At Shifan Noor Global Academy, education extends beyond academic
//               achievement. We create opportunities for students to build knowledge,
//               develop essential skills, strengthen values and grow into confident
//               individuals ready for the future.
//             </p>

//             <Link to="/about" className="wc-link">
//               <span>Discover SNGA</span>
//               <FaArrowRight />
//             </Link>
//           </div>
//         </div>

//         {/* =====================================
//             FEATURE GRID - Image Overlay Cards
//         ====================================== */}
//         <div ref={gridRef} className="wc-grid">
//           {features.map((feature) => (
//             <div
//               className="wc-card"
//               key={feature.number}
//             >
//               <div className="wc-card-image">
//                 <img src={feature.image} alt={feature.title} loading="lazy" />
//                 <div className="wc-card-overlay" />
//               </div>

//               <div className="wc-card-content">
//                 <div className="wc-card-top">
//                   <span className="wc-card-number">{feature.number}</span>
//                   <div className="wc-card-icon" style={{ color: feature.color }}>
//                     {feature.icon}
//                   </div>
//                 </div>

//                 <h3 className="wc-card-title">{feature.title}</h3>
//                 <p className="wc-card-desc">{feature.description}</p>

//                 <div className="wc-card-line" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =====================================
//             BOTTOM STATEMENT
//         ====================================== */}
//         <div className="wc-bottom">
//           <div className="wc-bottom-line" />
//           <p>
//             <FaRocket className="wc-bottom-icon" />
//             <span>Knowledge. Skills. Values. Confidence.</span>
//             <FaRocket className="wc-bottom-icon" />
//           </p>
//           <div className="wc-bottom-line" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



// import { useEffect, useRef } from "react";
// import {
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaLightbulb,
//   FaHeart,
//   FaArrowRight,
//   FaRocket,
//   FaQuoteLeft,
//   FaCheckCircle,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./WhyChooseUs.css";

// // Import images (replace with your actual images)
// import holisticImage from "../../assets/holistic.jpg";
// import engagingImage from "../../assets/engaging.jpg";
// import beyondImage from "../../assets/beyond.jpg";
// import valuesImage from "../../assets/values.jpg";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       number: "01",
//       icon: <FaGraduationCap />,
//       title: "Holistic Development",
//       description:
//         "SNGA brings academics, skills, values, creativity and personal development together to support the complete growth of every student.",
//       image: holisticImage,
//       color: "#D6A928",
//     },
//     {
//       number: "02",
//       icon: <FaChalkboardTeacher />,
//       title: "Engaging Learning",
//       description:
//         "Digital classrooms and thoughtfully designed learning spaces create an environment where students can understand concepts, explore ideas and learn with confidence.",
//       image: engagingImage,
//       color: "#C80000",
//     },
//     {
//       number: "03",
//       icon: <FaLightbulb />,
//       title: "Learning Beyond Classrooms",
//       description:
//         "From science laboratories and computer learning to library experiences and co-curricular activities, students are encouraged to learn through meaningful experiences.",
//       image: beyondImage,
//       color: "#123B8C",
//     },
//     {
//       number: "04",
//       icon: <FaHeart />,
//       title: "Values & Confidence",
//       description:
//         "We focus on developing healthy attitudes, strong values, self-esteem and responsibility so students are prepared to meet academic, social and future challenges.",
//       image: valuesImage,
//       color: "#00005B",
//     },
//   ];

//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const gridRef = useRef(null);

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
//           entry.target.classList.add("wc-visible");
//           sectionObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const headerObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal-header");
//           headerObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.15 });

//     const gridObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const cards = entry.target.querySelectorAll(".wc-card");
//           cards.forEach((card, index) => {
//             setTimeout(() => {
//               card.classList.add("reveal-card");
//             }, index * 120);
//           });
//           gridObserver.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.1 });

//     if (sectionRef.current) {
//       sectionObserver.observe(sectionRef.current);
//     }

//     if (headerRef.current) {
//       headerObserver.observe(headerRef.current);
//     }

//     if (gridRef.current) {
//       gridObserver.observe(gridRef.current);
//     }

//     return () => {
//       sectionObserver.disconnect();
//       headerObserver.disconnect();
//       gridObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="wc">
//       {/* Background decorative elements */}
//       <div className="wc-bg-shape wc-bg-shape-1" />
//       <div className="wc-bg-shape wc-bg-shape-2" />
//       <div className="wc-bg-shape wc-bg-shape-3" />

//       <div className="wc-container">
//         {/* =====================================
//             HEADER - Centered
//         ====================================== */}
//         <div ref={headerRef} className="wc-header">
//           <div className="wc-label">
//             <span className="wc-label-line" />
//             <span className="wc-label-text">Why Choose SNGA</span>
//             <span className="wc-label-line" />
//           </div>

//           <h2 className="wc-title">
//             <span className="wc-title-icon">
//               <FaQuoteLeft />
//             </span>
//             Education That Builds
//             <br />
//             <span className="wc-title-emphasis">the Whole Child.</span>
//           </h2>

//           <p className="wc-intro">
//             At Shifan Noor Global Academy, education extends beyond academic
//             achievement. We create opportunities for students to build knowledge,
//             develop essential skills, strengthen values and grow into confident
//             individuals ready for the future.
//           </p>

//           <Link to="/about" className="wc-link">
//             <span>Discover SNGA</span>
//             <FaArrowRight />
//           </Link>
//         </div>

//         {/* =====================================
//             FEATURE GRID - New Pattern
//         ====================================== */}
//         <div ref={gridRef} className="wc-grid">
//           {features.map((feature, index) => (
//             <div
//               className="wc-card"
//               key={feature.number}
//               style={{ 
//                 '--card-delay': `${index * 150}ms`,
//                 '--card-color': feature.color 
//               }}
//             >
//               <div className="wc-card-inner">
//                 <div className="wc-card-image">
//                   <img src={feature.image} alt={feature.title} loading="lazy" />
//                   <div className="wc-card-image-overlay" />
//                 </div>

//                 <div className="wc-card-body">
//                   <div className="wc-card-header">
//                     <span className="wc-card-number">{feature.number}</span>
//                     <div className="wc-card-icon" style={{ color: feature.color }}>
//                       {feature.icon}
//                     </div>
//                   </div>

//                   <h3 className="wc-card-title">{feature.title}</h3>
//                   <p className="wc-card-desc">{feature.description}</p>

//                   <div className="wc-card-footer">
//                     <div className="wc-card-line" />
//                     <FaCheckCircle className="wc-card-check" style={{ color: feature.color }} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =====================================
//             BOTTOM STATEMENT - New Pattern
//         ====================================== */}
//         <div className="wc-bottom">
//           <div className="wc-bottom-grid">
//             <div className="wc-bottom-item">
//               <FaRocket className="wc-bottom-icon" />
//               <span>Knowledge</span>
//             </div>
//             <div className="wc-bottom-divider" />
//             <div className="wc-bottom-item">
//               <FaRocket className="wc-bottom-icon" />
//               <span>Skills</span>
//             </div>
//             <div className="wc-bottom-divider" />
//             <div className="wc-bottom-item">
//               <FaRocket className="wc-bottom-icon" />
//               <span>Values</span>
//             </div>
//             <div className="wc-bottom-divider" />
//             <div className="wc-bottom-item">
//               <FaRocket className="wc-bottom-icon" />
//               <span>Confidence</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./WhyChooseUs.css";

import holisticImage from "../../assets/holistic.jpg";
import engagingImage from "../../assets/engaging.jpg";
import beyondImage from "../../assets/beyond.jpg";
import valuesImage from "../../assets/values.jpg";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      number: "01",
      title: "Holistic Development",
      shortTitle: "The whole child",
      description:
        "Academics, skills, values, creativity and personal development come together to support the complete growth of every student.",
      image: holisticImage,
    },
    {
      number: "02",
      title: "Engaging Learning",
      shortTitle: "Curiosity in action",
      description:
        "Digital classrooms and thoughtfully designed learning spaces help students understand concepts, explore ideas and learn with confidence.",
      image: engagingImage,
    },
    {
      number: "03",
      title: "Learning Beyond Classrooms",
      shortTitle: "Learn by experience",
      description:
        "Science laboratories, computer learning, library experiences and co-curricular activities encourage meaningful learning beyond the classroom.",
      image: beyondImage,
    },
    {
      number: "04",
      title: "Values & Confidence",
      shortTitle: "Character matters",
      description:
        "Healthy attitudes, strong values, self-esteem and responsibility help students prepare for academic, social and future challenges.",
      image: valuesImage,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("wc-visible");
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="wc">
      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="wc-intro">
        <div className="wc-container">

          <div className="wc-topline">
            <span>THE SNGA APPROACH</span>
          </div>

          <div className="wc-intro-grid">

            <div className="wc-intro-title">
              <span className="wc-kicker">
                WHY FAMILIES CHOOSE US
              </span>

              <h2>
                Education
                <br />
                <span>with purpose.</span>
              </h2>
            </div>

            <div className="wc-intro-copy">

              <p>
                At Shifan Noor Global Academy, education extends
                beyond academic achievement. We create an
                environment where knowledge, skills, values and
                confidence grow together.
              </p>

              <Link
                to="/about"
                className="wc-intro-link"
              >
                Discover the SNGA approach
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <div className="wc-principles">
        <div className="wc-container">

          <div className="wc-principles-heading">
            <span>FOUR PRINCIPLES</span>

            <p>
              What shapes the everyday learning experience
              at SNGA.
            </p>
          </div>

          <div className="wc-list">

            {features.map((feature, index) => (
              <Link
                key={feature.number}
                to="/about"
                className="wc-row"
              >

                <div className="wc-row-number">
                  {feature.number}
                </div>

                <div className="wc-row-image">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                  />
                </div>

                <div className="wc-row-content">

                  <span className="wc-row-kicker">
                    {feature.shortTitle}
                  </span>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>

                </div>

                <div className="wc-row-arrow">
                  ↗
                </div>

              </Link>
            ))}

          </div>

        </div>
      </div>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <div className="wc-philosophy">
        <div className="wc-container">

          <div className="wc-philosophy-grid">

            <div className="wc-philosophy-number">
              04
            </div>

            <div className="wc-philosophy-main">

              <span className="wc-kicker">
                THE BIGGER PICTURE
              </span>

              <h3>
                Knowledge gives
                <br />
                direction.
                <br />
                <span>Character gives it meaning.</span>
              </h3>

            </div>

            <div className="wc-philosophy-copy">

              <p>
                We want students to leave school with more
                than academic knowledge — with the confidence,
                values and skills to use what they have learned
                meaningfully.
              </p>

              <Link
                to="/about/vision-mission"
                className="wc-philosophy-link"
              >
                Our vision & mission
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          FOUNDATION
      ===================================================== */}

      <div className="wc-foundation">

        <div className="wc-container">

          <div className="wc-foundation-inner">

            <span className="wc-foundation-label">
              WHAT WE BUILD
            </span>

            <div className="wc-foundation-items">

              <span>KNOWLEDGE</span>
              <i />
              <span>SKILLS</span>
              <i />
              <span>VALUES</span>
              <i />
              <span>CONFIDENCE</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;