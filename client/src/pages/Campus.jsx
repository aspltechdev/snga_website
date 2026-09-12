// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaSchool,
//   FaTree,
//   FaBuilding,
//   FaBookOpen,
//   FaUsers,
//   FaTrophy,
//   FaHeart,
//   FaQuoteLeft,
//   FaPlay,
//   FaClock,
//   FaShieldAlt,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaRocket,
//   FaStar,
//   FaAward,
//   FaHands,
//   FaCheckCircle,
// } from "react-icons/fa";
// import "./Campus.css";

// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
//   heroCircle: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
//   ctaBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
//   campus1: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
//   campus2: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
//   campus3: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
//   campus4: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
//   campus5: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
//   campus6: "https://images.unsplash.com/photo-1461896836934-bd1c52f281b7?w=800&q=80",
// };

// const Campus = () => {
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const featuresRef = useRef(null);
//   const highlightsRef = useRef(null);
//   const galleryRef = useRef(null);
//   const facilitiesRef = useRef(null);
//   const experienceRef = useRef(null);
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
//       { ref: heroRef, className: "sc-hero--visible" },
//       { ref: introRef, className: "sc-intro--visible" },
//       { ref: featuresRef, className: "sc-features--visible" },
//       { ref: highlightsRef, className: "sc-highlights--visible" },
//       { ref: galleryRef, className: "sc-gallery--visible" },
//       { ref: facilitiesRef, className: "sc-facilities--visible" },
//       { ref: experienceRef, className: "sc-experience--visible" },
//       { ref: ctaRef, className: "sc-cta--visible" },
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
//   // DATA - Consistent with Brand Colors
//   // =====================================================

//   // Using brand colors: Navy (#00005B), Blue (#123B8C), Red (#C80000), Gold (#D6A928)
//   const campusFeatures = [
//     {
//       icon: <FaTree />,
//       title: "Green Campus",
//       description: "13.5 acres of lush green environment for peaceful learning.",
//       color: "#123B8C", // Academic Blue
//     },
//     {
//       icon: <FaBuilding />,
//       title: "Modern Classrooms",
//       description: "Spacious, well-ventilated classrooms with digital facilities.",
//       color: "#00005B", // Deep Royal Navy
//     },
//     {
//       icon: <FaBookOpen />,
//       title: "Library",
//       description: "3,500+ books, newspapers and magazines for research.",
//       color: "#D6A928", // Heritage Gold
//     },
//     {
//       icon: <FaUsers />,
//       title: "Community Spaces",
//       description: "Areas for collaboration, interaction and school events.",
//       color: "#C80000", // SNGA Red
//     },
//   ];

//   const campusHighlights = [
//     {
//       number: "01",
//       title: "Peaceful Environment",
//       text: "Located away from city noise, providing a calm atmosphere for focused learning.",
//       image: IMAGES.campus1,
//     },
//     {
//       number: "02",
//       title: "Spacious Design",
//       text: "Thoughtfully planned spaces that give students room to learn, explore and grow.",
//       image: IMAGES.campus2,
//     },
//     {
//       number: "03",
//       title: "Natural Surroundings",
//       text: "Lush greenery and open spaces that create a refreshing learning experience.",
//       image: IMAGES.campus3,
//     },
//     {
//       number: "04",
//       title: "Purposeful Architecture",
//       text: "Buildings and spaces designed to support academic and personal development.",
//       image: IMAGES.campus4,
//     },
//   ];

//   const facilities = [
//     {
//       icon: <FaChalkboardTeacher />,
//       label: "Digital Classrooms",
//       value: "10+",
//       color: "#00005B", // Navy
//     },
//     {
//       icon: <FaBookOpen />,
//       label: "Books in Library",
//       value: "3,500+",
//       color: "#D6A928", // Gold
//     },
//     {
//       icon: <FaGraduationCap />,
//       label: "Science Labs",
//       value: "03",
//       color: "#123B8C", // Academic Blue
//     },
//     {
//       icon: <FaUsers />,
//       label: "Hall Capacity",
//       value: "200",
//       color: "#C80000", // Red
//     },
//   ];

//   const experienceItems = [
//     {
//       icon: <FaHeart />,
//       title: "Nurturing Environment",
//       text: "Every child feels valued, supported and encouraged to grow.",
//       color: "#C80000", // Red
//     },
//     {
//       icon: <FaRocket />,
//       title: "Innovation & Creativity",
//       text: "Students are encouraged to think, question and explore new ideas.",
//       color: "#123B8C", // Academic Blue
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Safe & Secure",
//       text: "A secure campus environment where students can learn with confidence.",
//       color: "#00005B", // Navy
//     },
//     {
//       icon: <FaHands />,
//       title: "Community & Belonging",
//       text: "Building a sense of community through shared experiences and values.",
//       color: "#D6A928", // Gold
//     },
//   ];

//   const stats = [
//     { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
//     { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
//     { number: "10+", label: "Digital Classrooms", icon: <FaChalkboardTeacher /> },
//     { number: "500+", label: "Students", icon: <FaUsers /> },
//   ];

//   return (
//     <main className="sc-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sc-topbar">
//         <div className="sc-container">
//           <div className="sc-topbar__content">
//             <span className="sc-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sc-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sc-hero">
//         <div className="sc-hero__bg-wrapper">
//           <div 
//             className="sc-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sc-hero__bg-overlay" />
//           <div className="sc-hero__bg-gradient" />
//         </div>

//         <div className="sc-container">
//           <div className="sc-hero__inner">
//             <div className="sc-hero__content">
//               <div className="sc-hero__badge">
//                 <FaSchool />
//                 OUR CAMPUS
//               </div>

//               <h1 className="sc-hero__title">
//                 A Place Where
//                 <br />
//                 <span className="sc-hero__highlight">Learning Comes Alive.</span>
//               </h1>

//               <p className="sc-hero__desc">
//                 Discover the 13.5-acre campus designed to inspire curiosity,
//                 foster growth and create lasting memories.
//               </p>

//               <div className="sc-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sc-hero__stat">
//                     <span className="sc-hero__stat-icon">{stat.icon}</span>
//                     <span className="sc-hero__stat-number">{stat.number}</span>
//                     <span className="sc-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="sc-hero__actions">
//                 <a href="#sc-features" className="sc-hero__btn sc-hero__btn--primary">
//                   <span>Explore Campus</span>
//                   <FaArrowRight />
//                 </a>
//                 <button className="sc-hero__btn sc-hero__btn--secondary">
//                   <FaPlay />
//                   <span>Virtual Tour</span>
//                 </button>
//               </div>
//             </div>

//             <div className="sc-hero__image-wrapper">
//               <div className="sc-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA Campus" 
//                   className="sc-hero__image-img"
//                 />
//                 <div className="sc-hero__image-ring" />
//                 <div className="sc-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sc-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sc-intro">
//         <div className="sc-container">
//           <div className="sc-intro__inner">
//             <div className="sc-intro__header">
//               <span className="sc-intro__label">WELCOME TO SNGA</span>
//               <h2 className="sc-intro__title">
//                 A Campus Designed
//                 <span className="sc-intro__highlight">For Every Student.</span>
//               </h2>
//             </div>

//             <div className="sc-intro__content">
//               <p>
//                 Shifan Noor Global Academy is situated on a 13.5-acre campus
//                 at Venkulam on the Ramanathapuram–Devipattinam main road.
//                 Set within a calm, serene and lush green environment, the
//                 campus provides students with a spacious setting away from
//                 the dust and noise of busy surroundings.
//               </p>
//               <p>
//                 Every corner of our campus is thoughtfully designed to support
//                 learning, exploration and personal growth.
//               </p>
//             </div>

//             <div className="sc-intro__features">
//               {campusFeatures.map((feature, index) => (
//                 <div key={index} className="sc-intro__feature">
//                   <div className="sc-intro__feature-icon" style={{ color: feature.color }}>
//                     {feature.icon}
//                   </div>
//                   <h4>{feature.title}</h4>
//                   <p>{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           HIGHLIGHTS - Image Overlay Cards
//       ================================================= */}
//       <section ref={highlightsRef} className="sc-highlights">
//         <div className="sc-container">
//           <div className="sc-highlights__header">
//             <span className="sc-highlights__label">CAMPUS HIGHLIGHTS</span>
//             <h2 className="sc-highlights__title">
//               Spaces That
//               <br />
//               <span className="sc-highlights__highlight">Inspire Learning.</span>
//             </h2>
//           </div>

//           <div className="sc-highlights__grid">
//             {campusHighlights.map((item) => (
//               <div key={item.number} className="sc-highlights__card">
//                 <div className="sc-highlights__card-image">
//                   <img src={item.image} alt={item.title} loading="lazy" />
//                   <div className="sc-highlights__card-overlay">
//                     <div className="sc-highlights__card-content">
//                       <span className="sc-highlights__card-number">
//                         {item.number}
//                       </span>
//                       <h3 className="sc-highlights__card-title">{item.title}</h3>
//                       <p className="sc-highlights__card-desc">{item.text}</p>
//                       <span className="sc-highlights__card-arrow">
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
//           FACILITIES SECTION
//       ================================================= */}
//       <section ref={facilitiesRef} className="sc-facilities">
//         <div className="sc-facilities__bg" />

//         <div className="sc-container">
//           <div className="sc-facilities__header">
//             <span className="sc-facilities__label">OUR FACILITIES</span>
//             <h2 className="sc-facilities__title">
//               Everything You Need
//               <br />
//               <span className="sc-facilities__highlight">For a Complete Education.</span>
//             </h2>
//           </div>

//           <div className="sc-facilities__grid">
//             {facilities.map((facility, index) => (
//               <div key={index} className="sc-facilities__card">
//                 <div className="sc-facilities__card-icon" style={{ color: facility.color }}>
//                   {facility.icon}
//                 </div>
//                 <span className="sc-facilities__card-value">{facility.value}</span>
//                 <span className="sc-facilities__card-label">{facility.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           GALLERY - Campus Images
//       ================================================= */}
//       <section ref={galleryRef} className="sc-gallery">
//         <div className="sc-container">
//           <div className="sc-gallery__header">
//             <div>
//               <span className="sc-gallery__label">CAMPUS GALLERY</span>
//               <h2 className="sc-gallery__title">
//                 See the <span className="sc-gallery__highlight">Beauty of SNGA.</span>
//               </h2>
//             </div>
//             <Link to="/gallery" className="sc-gallery__view-all">
//               <span>View All</span>
//               <FaArrowRight />
//             </Link>
//           </div>

//           <div className="sc-gallery__grid">
//             <div className="sc-gallery__item sc-gallery__item--large">
//               <img src={IMAGES.campus1} alt="Campus View" loading="lazy" />
//               <div className="sc-gallery__item-overlay">
//                 <span>Main Building</span>
//               </div>
//             </div>
//             <div className="sc-gallery__item">
//               <img src={IMAGES.campus2} alt="Campus View" loading="lazy" />
//               <div className="sc-gallery__item-overlay">
//                 <span>Green Campus</span>
//               </div>
//             </div>
//             <div className="sc-gallery__item">
//               <img src={IMAGES.campus3} alt="Campus View" loading="lazy" />
//               <div className="sc-gallery__item-overlay">
//                 <span>Classroom</span>
//               </div>
//             </div>
//             <div className="sc-gallery__item">
//               <img src={IMAGES.campus4} alt="Campus View" loading="lazy" />
//               <div className="sc-gallery__item-overlay">
//                 <span>Library</span>
//               </div>
//             </div>
//             <div className="sc-gallery__item">
//               <img src={IMAGES.campus5} alt="Campus View" loading="lazy" />
//               <div className="sc-gallery__item-overlay">
//                 <span>Sports Ground</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           EXPERIENCE SECTION
//       ================================================= */}
//       <section ref={experienceRef} className="sc-experience">
//         <div className="sc-experience__bg-wrapper">
//           <div 
//             className="sc-experience__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.campus6})` }}
//           />
//           <div className="sc-experience__bg-overlay" />
//         </div>

//         <div className="sc-container">
//           <div className="sc-experience__inner">
//             <div className="sc-experience__header">
//               <span className="sc-experience__label">THE SNGA EXPERIENCE</span>
//               <h2 className="sc-experience__title">
//                 More Than
//                 <br />
//                 <span className="sc-experience__highlight">Just a School.</span>
//               </h2>
//             </div>

//             <div className="sc-experience__grid">
//               {experienceItems.map((item, index) => (
//                 <div key={index} className="sc-experience__card">
//                   <div className="sc-experience__card-icon" style={{ color: item.color }}>
//                     {item.icon}
//                   </div>
//                   <h3 className="sc-experience__card-title">{item.title}</h3>
//                   <p className="sc-experience__card-desc">{item.text}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="sc-experience__quote">
//               <FaQuoteLeft />
//               <p>
//                 "The campus is not just a place to learn—it's a place to grow,
//                 discover and become the best version of yourself."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sc-cta">
//         <div className="sc-cta__bg-wrapper">
//           <div 
//             className="sc-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sc-cta__bg-overlay" />
//           <div className="sc-cta__bg-gradient" />
//         </div>

//         <div className="sc-container">
//           <div className="sc-cta__content">
//             <div className="sc-cta__badge">
//               <FaSchool />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sc-cta__title">
//               Visit Our
//               <br />
//               <span className="sc-cta__highlight">Beautiful Campus.</span>
//             </h2>

//             <p className="sc-cta__desc">
//               Experience the learning environment, facilities and community
//               that make SNGA a special place for every student.
//             </p>

//             <div className="sc-cta__actions">
//               <Link to="/infrastructure" className="sc-cta__btn sc-cta__btn--primary">
//                 <span>Explore Infrastructure</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/contact" className="sc-cta__btn sc-cta__btn--secondary">
//                 <span>Visit Us</span>
//               </Link>
//             </div>

//             <div className="sc-cta__footer">
//               <span>
//                 <FaMapMarkerAlt /> Venkulam, Ramanathapuram
//               </span>
//               <span>
//                 <FaPhone /> +91 98765 43210
//               </span>
//               <span>
//                 <FaEnvelope /> info@snga.edu.in
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Campus;


// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaSchool,
//   FaTree,
//   FaBuilding,
//   FaBookOpen,
//   FaUsers,
//   FaTrophy,
//   FaHeart,
//   FaQuoteLeft,
//   FaPlay,
//   FaClock,
//   FaShieldAlt,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaRocket,
//   FaStar,
//   FaAward,
//   FaHands,
//   FaCheckCircle,
//   FaFlask,
//   FaLaptop,
//   FaBus,
//   FaUtensils,
//   FaFutbol,
//   FaPaintBrush,
//   FaMicrophone,
//   FaWifi,
//   FaVideo,
//   FaTablet,
// } from "react-icons/fa";
// import "./Campus.css";

// import heroBg from "../assets/school.JPG";
// import heroCircle from "../assets/about.png";
// import ctaBg from "../assets/engaging.jpg";
// import classroom from "../assets/classroom.jpg";
// import library from "../assets/library.jpg";
// import sciencelab from "../assets/sciencelab.jpg";
// import computerlab from "../assets/ComputerLab.jpg";
// import sports from "../assets/sports.JPG";
// import campus1 from "../assets/camp.jpg";
// import campus2 from "../assets/campus.jpg";
// import campus3 from "../assets/school.JPG";
// import campus4 from "../assets/camp.jpg";
// import campus5 from "../assets/campus.jpg";
// import campus6 from "../assets/school.JPG";
// import bus from "../assets/bus.jpg";


// // =====================================================
// // ONLINE IMAGES (Replace with local imports later)
// // =====================================================
// const IMAGES = {
//   heroBg: heroBg,
//   heroCircle: heroCircle,
//   ctaBg: ctaBg,
//   campus1: campus1,
//   campus2: campus2,
//   campus3: campus3,
//   campus4: campus4,
//   campus5: campus5,
//   campus6: campus6,
//   classroom: classroom,
//   library: library,
//   scienceLab: sciencelab,
//   computerLab: computerlab,
//   sports: sports,
//   bus: bus,
// };

// const Campus = () => {
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const facilitiesRef = useRef(null);
//   const highlightsRef = useRef(null);
//   const galleryRef = useRef(null);
//   const infrastructureRef = useRef(null);
//   const experienceRef = useRef(null);
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
//       { ref: heroRef, className: "sc-hero--visible" },
//       { ref: introRef, className: "sc-intro--visible" },
//       { ref: facilitiesRef, className: "sc-facilities--visible" },
//       { ref: highlightsRef, className: "sc-highlights--visible" },
//       { ref: galleryRef, className: "sc-gallery--visible" },
//       { ref: infrastructureRef, className: "sc-infrastructure--visible" },
//       { ref: experienceRef, className: "sc-experience--visible" },
//       { ref: ctaRef, className: "sc-cta--visible" },
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
//   // DATA - All Infrastructure
//   // =====================================================

//   // Smart Classrooms
//   const smartClassrooms = [
//     {
//       icon: <FaVideo />,
//       title: "Interactive Displays",
//       desc: "Large format interactive displays for engaging lessons.",
//       color: "#123B8C",
//     },
//     {
//       icon: <FaWifi />,
//       title: "High-Speed WiFi",
//       desc: "Seamless connectivity for digital learning experiences.",
//       color: "#00005B",
//     },
//     {
//       icon: <FaTablet />,
//       title: "Student Devices",
//       desc: "Tablets and laptops for hands-on digital learning.",
//       color: "#D6A928",
//     },
//     {
//       icon: <FaChalkboardTeacher />,
//       title: "Digital Content",
//       desc: "Rich multimedia content for interactive teaching.",
//       color: "#C80000",
//     },
//   ];

//   // Laboratories
//   const laboratories = [
//     {
//       icon: <FaFlask />,
//       title: "Physics Lab",
//       desc: "Fully equipped lab for physics experiments and research.",
//       image: IMAGES.scienceLab,
//       color: "#123B8C",
//     },
//     {
//       icon: <FaFlask />,
//       title: "Chemistry Lab",
//       desc: "Modern chemistry lab with advanced equipment and safety.",
//       image: IMAGES.scienceLab,
//       color: "#00005B",
//     },
//     {
//       icon: <FaFlask />,
//       title: "Biology Lab",
//       desc: "Well-equipped biology lab for life sciences exploration.",
//       image: IMAGES.scienceLab,
//       color: "#D6A928",
//     },
//     {
//       icon: <FaLaptop />,
//       title: "Computer Lab",
//       desc: "State-of-the-art computer lab with 30+ systems.",
//       image: IMAGES.computerLab,
//       color: "#C80000",
//     },
//   ];

//   // Facilities
//   const facilities = [
//     {
//       icon: <FaBookOpen />,
//       title: "Library",
//       desc: "3,500+ books, journals, and digital resources for research.",
//       image: IMAGES.library,
//       color: "#D6A928",
//     },
//     {
//       icon: <FaFutbol />,
//       title: "Sports Facilities",
//       desc: "Cricket, football, basketball courts and playground.",
//       image: IMAGES.sports,
//       color: "#123B8C",
//     },
//     {
//       icon: <FaBus />,
//       title: "Transportation",
//       desc: "Safe and reliable bus service for students and staff.",
//       image: IMAGES.bus,
//       color: "#00005B",
//     },
//     {
//       icon: <FaUtensils />,
//       title: "Cafeteria",
//       desc: "Hygienic and nutritious meals for students.",
//       image: IMAGES.campus3,
//       color: "#C80000",
//     },
//     {
//       icon: <FaPaintBrush />,
//       title: "Art & Music",
//       desc: "Creative spaces for art, music and performing arts.",
//       image: IMAGES.campus5,
//       color: "#D6A928",
//     },
//     {
//       icon: <FaMicrophone />,
//       title: "Auditorium",
//       desc: "400+ capacity hall for events, assemblies and performances.",
//       image: IMAGES.campus4,
//       color: "#123B8C",
//     },
//   ];

//   const campusHighlights = [
//     {
//       number: "01",
//       title: "13.5 Acres Campus",
//       text: "Spacious green campus with modern infrastructure and learning spaces.",
//       image: IMAGES.campus1,
//     },
//     {
//       number: "02",
//       title: "Smart Classrooms",
//       text: "Technology-enabled classrooms with interactive learning tools.",
//       image: IMAGES.classroom,
//     },
//     {
//       number: "03",
//       title: "Science & Computer Labs",
//       text: "Fully equipped laboratories for practical and digital learning.",
//       image: IMAGES.scienceLab,
//     },
//     {
//       number: "04",
//       title: "Sports & Recreation",
//       text: "Extensive sports facilities for physical development and teamwork.",
//       image: IMAGES.sports,
//     },
//   ];

//   const stats = [
//     { number: "13.5", label: "Acres Campus", icon: <FaTree /> },
//     { number: "3,500+", label: "Books in Library", icon: <FaBookOpen /> },
//     { number: "10+", label: "Smart Classrooms", icon: <FaChalkboardTeacher /> },
//     { number: "500+", label: "Students", icon: <FaUsers /> },
//   ];

//   return (
//     <main className="sc-page">
//       {/* =================================================
//           TOP BAR - School Identity
//       ================================================= */}
//       <div className="sc-topbar">
//         <div className="sc-container">
//           <div className="sc-topbar__content">
//             <span className="sc-topbar__motto">
//               <FaSchool />
//               Shifan Noor Global Academy - Where Values Meet Excellence
//             </span>
//             <span className="sc-topbar__affiliation">Affiliated to CBSE</span>
//           </div>
//         </div>
//       </div>

//       {/* =================================================
//           HERO - With Background Image & Circular Image
//       ================================================= */}
//       <section ref={heroRef} className="sc-hero">
//         <div className="sc-hero__bg-wrapper">
//           <div 
//             className="sc-hero__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
//           />
//           <div className="sc-hero__bg-overlay" />
//           <div className="sc-hero__bg-gradient" />
//         </div>

//         <div className="sc-container">
//           <div className="sc-hero__inner">
//             <div className="sc-hero__content">
//               <div className="sc-hero__badge">
//                 <FaSchool />
//                 OUR CAMPUS
//               </div>

//               <h1 className="sc-hero__title">
//                 A Place Where
//                 <br />
//                 <span className="sc-hero__highlight">Learning Comes Alive.</span>
//               </h1>

//               <p className="sc-hero__desc">
//                 Discover our 13.5-acre campus with smart classrooms, modern laboratories,
//                 library, sports facilities and safe transportation.
//               </p>

//               {/* <div className="sc-hero__stats">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="sc-hero__stat">
//                     <span className="sc-hero__stat-icon">{stat.icon}</span>
//                     <span className="sc-hero__stat-number">{stat.number}</span>
//                     <span className="sc-hero__stat-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div> */}

//               {/* <div className="sc-hero__actions">
//                 <a href="#sc-facilities" className="sc-hero__btn sc-hero__btn--primary">
//                   <span>Explore Campus</span>
//                   <FaArrowRight />
//                 </a>
//                 <button className="sc-hero__btn sc-hero__btn--secondary">
//                   <FaPlay />
//                   <span>Virtual Tour</span>
//                 </button>
//               </div> */}
//             </div>

//             <div className="sc-hero__image-wrapper">
//               <div className="sc-hero__image-circle">
//                 <img 
//                   src={IMAGES.heroCircle} 
//                   alt="SNGA Campus" 
//                   className="sc-hero__image-img"
//                 />
//                 <div className="sc-hero__image-ring" />
//                 {/* <div className="sc-hero__image-badge">
//                   <span>Since 2015</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sc-hero__wave">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//           </svg>
//         </div>
//       </section>

//       {/* =================================================
//           INTRO - Welcome Message
//       ================================================= */}
//       <section ref={introRef} className="sc-intro">
//         <div className="sc-container">
//           <div className="sc-intro__inner">
//             <div className="sc-intro__header">
//               <span className="sc-intro__label">WELCOME TO SNGA</span>
//               <h2 className="sc-intro__title">
//                 A Campus Designed
//                 <span className="sc-intro__highlight">For Every Student.</span>
//               </h2>
//             </div>

//             <div className="sc-intro__content">
//               <p>
//                 Shifan Noor Global Academy is situated on a 13.5-acre campus
//                 at Venkulam on the Ramanathapuram–Devipattinam main road.
//                 Set within a calm, serene and lush green environment, the
//                 campus provides students with a spacious setting away from
//                 the dust and noise of busy surroundings.
//               </p>
//               <p>
//                 Every corner of our campus is thoughtfully designed to support
//                 learning, exploration and personal growth.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FACILITIES - All Facilities
//       ================================================= */}
//       <section ref={facilitiesRef} className="sc-facilities" id="sc-facilities">
//         <div className="sc-facilities__header">
//           <span className="sc-facilities__label">CAMPUS FACILITIES</span>
//           <h2 className="sc-facilities__title">
//             Everything You Need
//             <br />
//             <span className="sc-facilities__highlight">For a Complete Education.</span>
//           </h2>
//           <p className="sc-facilities__desc">
//             From smart classrooms to sports, library to laboratories — our campus
//             has it all.
//           </p>
//         </div>

//         <div className="sc-container">
//           <div className="sc-facilities__grid">
//             {facilities.map((facility, index) => (
//               <div key={index} className="sc-facilities__card">
//                 <div className="sc-facilities__card-image">
//                   <img src={facility.image} alt={facility.title} loading="lazy" />
//                   <div className="sc-facilities__card-overlay">
//                     <div className="sc-facilities__card-icon" style={{ color: facility.color }}>
//                       {facility.icon}
//                     </div>
//                     <h3 className="sc-facilities__card-title">{facility.title}</h3>
//                     <p className="sc-facilities__card-desc">{facility.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           SMART CLASSROOMS
//       ================================================= */}
//       <section className="sc-smart">
//         <div className="sc-container">
//           <div className="sc-smart__header">
//             <span className="sc-smart__label">SMART CLASSROOMS</span>
//             <h2 className="sc-smart__title">
//               Technology-Enabled
//               <br />
//               <span className="sc-smart__highlight">Learning Spaces.</span>
//             </h2>
//             <p className="sc-smart__desc">
//               Every classroom is equipped with modern technology to make
//               learning interactive, engaging and effective.
//             </p>
//           </div>

//           <div className="sc-smart__grid">
//             {smartClassrooms.map((item, index) => (
//               <div key={index} className="sc-smart__card">
//                 <div className="sc-smart__card-icon" style={{ color: item.color }}>
//                   {item.icon}
//                 </div>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           LABORATORIES
//       ================================================= */}
//       <section className="sc-labs">
//         <div className="sc-container">
//           <div className="sc-labs__header">
//             <span className="sc-labs__label">LABORATORIES</span>
//             <h2 className="sc-labs__title">
//               Hands-On Learning
//               <br />
//               <span className="sc-labs__highlight">Through Practical Experience.</span>
//             </h2>
//             <p className="sc-labs__desc">
//               Our laboratories are designed to help students explore concepts
//               through hands-on experiments and practical learning.
//             </p>
//           </div>

//           <div className="sc-labs__grid">
//             {laboratories.map((lab, index) => (
//               <div key={index} className="sc-labs__card">
//                 <div className="sc-labs__card-image">
//                   <img src={lab.image} alt={lab.title} loading="lazy" />
//                   <div className="sc-labs__card-overlay">
//                     <div className="sc-labs__card-icon" style={{ color: lab.color }}>
//                       {lab.icon}
//                     </div>
//                     <h3 className="sc-labs__card-title">{lab.title}</h3>
//                     <p className="sc-labs__card-desc">{lab.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           HIGHLIGHTS - Image Overlay Cards
//       ================================================= */}
//       <section ref={highlightsRef} className="sc-highlights">
//         <div className="sc-container">
//           <div className="sc-highlights__header">
//             <span className="sc-highlights__label">CAMPUS HIGHLIGHTS</span>
//             <h2 className="sc-highlights__title">
//               Spaces That
//               <br />
//               <span className="sc-highlights__highlight">Inspire Learning.</span>
//             </h2>
//           </div>

//           <div className="sc-highlights__grid">
//             {campusHighlights.map((item) => (
//               <div key={item.number} className="sc-highlights__card">
//                 <div className="sc-highlights__card-image">
//                   <img src={item.image} alt={item.title} loading="lazy" />
//                   <div className="sc-highlights__card-overlay">
//                     <div className="sc-highlights__card-content">
//                       <span className="sc-highlights__card-number">
//                         {item.number}
//                       </span>
//                       <h3 className="sc-highlights__card-title">{item.title}</h3>
//                       <p className="sc-highlights__card-desc">{item.text}</p>
//                       <span className="sc-highlights__card-arrow">
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
//           INFRASTRUCTURE - Stats
//       ================================================= */}
//       <section ref={infrastructureRef} className="sc-infrastructure">
//         <div className="sc-infrastructure__bg" />

//         <div className="sc-container">
//           <div className="sc-infrastructure__header">
//             <span className="sc-infrastructure__label">INFRASTRUCTURE</span>
//             <h2 className="sc-infrastructure__title">
//               Built for
//               <br />
//               <span className="sc-infrastructure__highlight">Excellence.</span>
//             </h2>
//           </div>

//           <div className="sc-infrastructure__grid">
//             <div className="sc-infrastructure__item">
//               <FaBuilding />
//               <span className="sc-infrastructure__number">10+</span>
//               <span className="sc-infrastructure__label">Smart Classrooms</span>
//             </div>
//             <div className="sc-infrastructure__item">
//               <FaFlask />
//               <span className="sc-infrastructure__number">04</span>
//               <span className="sc-infrastructure__label">Science & Computer Labs</span>
//             </div>
//             <div className="sc-infrastructure__item">
//               <FaBookOpen />
//               <span className="sc-infrastructure__number">3,500+</span>
//               <span className="sc-infrastructure__label">Books in Library</span>
//             </div>
//             <div className="sc-infrastructure__item">
//               <FaBus />
//               <span className="sc-infrastructure__number">10+</span>
//               <span className="sc-infrastructure__label">Transport Buses</span>
//             </div>
//             <div className="sc-infrastructure__item">
//               <FaFutbol />
//               <span className="sc-infrastructure__number">5+</span>
//               <span className="sc-infrastructure__label">Sports Facilities</span>
//             </div>
//             <div className="sc-infrastructure__item">
//               <FaMicrophone />
//               <span className="sc-infrastructure__number">400+</span>
//               <span className="sc-infrastructure__label">Auditorium Capacity</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           EXPERIENCE SECTION
//       ================================================= */}
//       <section ref={experienceRef} className="sc-experience">
//         <div className="sc-experience__bg-wrapper">
//           <div 
//             className="sc-experience__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.campus6})` }}
//           />
//           <div className="sc-experience__bg-overlay" />
//         </div>

//         <div className="sc-container">
//           <div className="sc-experience__inner">
//             <div className="sc-experience__header">
//               <span className="sc-experience__label">THE SNGA EXPERIENCE</span>
//               <h2 className="sc-experience__title">
//                 More Than
//                 <br />
//                 <span className="sc-experience__highlight">Just a School.</span>
//               </h2>
//             </div>

//             <div className="sc-experience__grid">
//               <div className="sc-experience__card">
//                 <div className="sc-experience__card-icon" style={{ color: "#C80000" }}>
//                   <FaHeart />
//                 </div>
//                 <h3 className="sc-experience__card-title">Nurturing Environment</h3>
//                 <p className="sc-experience__card-desc">Every child feels valued, supported and encouraged to grow.</p>
//               </div>
//               <div className="sc-experience__card">
//                 <div className="sc-experience__card-icon" style={{ color: "#123B8C" }}>
//                   <FaRocket />
//                 </div>
//                 <h3 className="sc-experience__card-title">Innovation & Creativity</h3>
//                 <p className="sc-experience__card-desc">Students are encouraged to think, question and explore new ideas.</p>
//               </div>
//               <div className="sc-experience__card">
//                 <div className="sc-experience__card-icon" style={{ color: "#00005B" }}>
//                   <FaShieldAlt />
//                 </div>
//                 <h3 className="sc-experience__card-title">Safe & Secure</h3>
//                 <p className="sc-experience__card-desc">A secure campus environment where students can learn with confidence.</p>
//               </div>
//               <div className="sc-experience__card">
//                 <div className="sc-experience__card-icon" style={{ color: "#D6A928" }}>
//                   <FaHands />
//                 </div>
//                 <h3 className="sc-experience__card-title">Community & Belonging</h3>
//                 <p className="sc-experience__card-desc">Building a sense of community through shared experiences and values.</p>
//               </div>
//             </div>

//             <div className="sc-experience__quote">
//               <FaQuoteLeft />
//               <p>
//                 "The campus is not just a place to learn—it's a place to grow,
//                 discover and become the best version of yourself."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================
//           FINAL CTA - With Background Image
//       ================================================= */}
//       <section ref={ctaRef} className="sc-cta">
//         <div className="sc-cta__bg-wrapper">
//           <div 
//             className="sc-cta__bg-image" 
//             style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
//           />
//           <div className="sc-cta__bg-overlay" />
//           <div className="sc-cta__bg-gradient" />
//         </div>

//         <div className="sc-container">
//           <div className="sc-cta__content">
//             <div className="sc-cta__badge">
//               <FaSchool />
//               SHIFAN NOOR GLOBAL ACADEMY
//             </div>

//             <h2 className="sc-cta__title">
//               Visit Our
//               <br />
//               <span className="sc-cta__highlight">Beautiful Campus.</span>
//             </h2>

//             <p className="sc-cta__desc">
//               Experience the learning environment, facilities and community
//               that make SNGA a special place for every student.
//             </p>

//             <div className="sc-cta__actions">
//               <Link to="/infrastructure" className="sc-cta__btn sc-cta__btn--primary">
//                 <span>Explore Infrastructure</span>
//                 <FaArrowRight />
//               </Link>
//               <Link to="/contact" className="sc-cta__btn sc-cta__btn--secondary">
//                 <span>Visit Us</span>
//               </Link>
//             </div>

//             <div className="sc-cta__footer">
//               <span>
//                 <FaMapMarkerAlt /> Venkulam, Ramanathapuram
//               </span>
//               <span>
//                 <FaPhone /> +91 98765 43210
//               </span>
//               <span>
//                 <FaEnvelope /> info@snga.edu.in
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Campus;



import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Campus.css";

import heroBg from "../assets/school.JPG";
import aboutImage from "../assets/about.png";
import classroom from "../assets/classroom.jpg";
import library from "../assets/library.jpg";
import scienceLab from "../assets/sciencelab.jpg";
import computerLab from "../assets/ComputerLab.jpg";
import sports from "../assets/sports.JPG";
import campusImage from "../assets/school1.jpg";
import campImage from "../assets/camp.jpg";
import engagingImage from "../assets/engaging.jpg";

const IMAGES = {
  hero: heroBg,
  about: aboutImage,
  classroom,
  library,
  scienceLab,
  computerLab,
  sports,
  campus: campusImage,
  campusAlt: campImage,
  engaging: engagingImage,
};

const Campus = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const elements = revealRefs.current.filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("campus-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  return (
    <main className="campus-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="campus-hero">
        <div className="campus-hero-image">
          <img
            src={IMAGES.hero}
            alt="Shifan Noor Global Academy campus"
          />
        </div>

        <div className="campus-hero-overlay" />

        <div className="campus-container campus-hero-content">
          <div className="campus-hero-meta">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>VENKULAM · RAMANATHAPURAM</span>
          </div>

          <div className="campus-hero-copy">
            <span className="campus-eyebrow">
              THE CAMPUS
            </span>

            <h1>
              A place to
              <br />
              <em>learn, grow</em>
              <br />
              and belong.
            </h1>

            <p>
              A calm, spacious learning environment designed to
              give students room to think, explore and develop.
            </p>
          </div>

          <div className="campus-hero-bottom">
            <span>01</span>
            <span className="campus-hero-line" />
            <span>THE PLACE WE CALL SCHOOL</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        ref={addRevealRef}
        className="campus-introduction campus-reveal"
      >
        <div className="campus-container">
          <div className="campus-introduction-grid">
            <div className="campus-section-number">
              01
            </div>

            <div className="campus-introduction-heading">
              <span className="campus-eyebrow campus-eyebrow-dark">
                A CAMPUS WITH SPACE TO THINK
              </span>

              <h2>
                Education needs
                <br />
                <em>room to grow.</em>
              </h2>
            </div>

            <div className="campus-introduction-copy">
              <p className="campus-lead">
                Shifan Noor Global Academy is situated on a
                13.5-acre campus at Venkulam on the
                Ramanathapuram–Devipattinam main road.
              </p>

              <p>
                Set within a calm, serene and lush green
                environment, the campus provides students with
                a spacious setting away from the dust and noise
                of busy surroundings.
              </p>

              <p>
                The environment is designed to support more than
                classroom learning — giving students space for
                study, practical exploration, sport, creativity
                and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LARGE CAMPUS IMAGE
      ===================================================== */}

      <section
        ref={addRevealRef}
        className="campus-editorial-image campus-reveal"
      >
        <div className="campus-container">
          <figure>
            <img
              src={IMAGES.about}
              alt="Shifan Noor Global Academy campus environment"
              loading="lazy"
            />

            <figcaption>
              <span>SHIFAN NOOR GLOBAL ACADEMY</span>
              <span>13.5 ACRES · VENKULAM</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =====================================================
          CAMPUS FACTS
      ===================================================== */}

      <section
        ref={addRevealRef}
        className="campus-facts campus-reveal"
      >
        <div className="campus-container">
          <div className="campus-facts-header">
            <div>
              <span className="campus-eyebrow campus-eyebrow-dark">
                AT A GLANCE
              </span>

              <h2>
                Designed around
                <br />
                <em>the student.</em>
              </h2>
            </div>

            <p>
              Every part of the campus has a role in creating
              an environment where learning can happen naturally.
            </p>
          </div>

          <div className="campus-facts-list">
            <div className="campus-fact">
              <strong>13.5</strong>
              <div>
                <span>ACRES</span>
                <p>
                  A spacious green campus in a calm,
                  serene environment.
                </p>
              </div>
            </div>

            <div className="campus-fact">
              <strong>500</strong>
              <div>
                <span>SQ FT</span>
                <p>
                  Approximate classroom size designed with
                  natural light, ventilation and comfortable
                  learning space.
                </p>
              </div>
            </div>

            <div className="campus-fact">
              <strong>3,500+</strong>
              <div>
                <span>BOOKS</span>
                <p>
                  A library collection supporting reading,
                  study and independent exploration.
                </p>
              </div>
            </div>

            <div className="campus-fact">
              <strong>200</strong>
              <div>
                <span>SEATS</span>
                <p>
                  Multipurpose hall supporting school
                  gatherings and community events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING SPACES
      ===================================================== */}

      <section
        ref={addRevealRef}
        className="campus-learning campus-reveal"
      >
        <div className="campus-container">
          <div className="campus-learning-header">
            <div className="campus-section-number campus-section-number-light">
              02
            </div>

            <div>
              <span className="campus-eyebrow campus-eyebrow-light">
                LEARNING SPACES
              </span>

              <h2>
                Places where
                <br />
                <em>curiosity becomes practice.</em>
              </h2>
            </div>
          </div>

          <div className="campus-learning-feature">
            <div className="campus-learning-image">
              <img
                src={IMAGES.classroom}
                alt="SNGA classroom"
                loading="lazy"
              />
            </div>

            <div className="campus-learning-copy">
              <span>01</span>

              <h3>
                Classrooms designed
                <br />
                for attention.
              </h3>

              <p>
                Classrooms are designed with good light,
                ventilation and practical learning furniture.
                Each class also has access to digital classroom
                facilities that support interactive teaching.
              </p>

              <div className="campus-rule" />

              <span className="campus-small-label">
                DIGITAL CLASSROOMS
              </span>
            </div>
          </div>

          <div className="campus-learning-grid">
            <article>
              <div className="campus-learning-card-image">
                <img
                  src={IMAGES.library}
                  alt="SNGA library"
                  loading="lazy"
                />
              </div>

              <span>02 · LIBRARY</span>

              <h3>
                A place to
                <br />
                discover more.
              </h3>

              <p>
                With more than 3,500 books, newspapers,
                magazines and a spacious study room, the
                library encourages students to read,
                research and explore independently.
              </p>
            </article>

            <article>
              <div className="campus-learning-card-image">
                <img
                  src={IMAGES.scienceLab}
                  alt="SNGA science laboratory"
                  loading="lazy"
                />
              </div>

              <span>03 · LABORATORIES</span>

              <h3>
                Learning that
                <br />
                becomes tangible.
              </h3>

              <p>
                Chemistry, Physics and Biology laboratories
                provide students with dedicated spaces for
                practical exploration and scientific learning.
              </p>
            </article>

            <article>
              <div className="campus-learning-card-image">
                <img
                  src={IMAGES.computerLab}
                  alt="SNGA computer laboratory"
                  loading="lazy"
                />
              </div>

              <span>04 · TECHNOLOGY</span>

              <h3>
                Digital skills
                <br />
                for a changing world.
              </h3>

              <p>
                The computer laboratory and digital learning
                facilities complement classroom teaching with
                technology-enabled learning experiences.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          SPORT + LIFE
      ===================================================== */}

      <section
        ref={addRevealRef}
        className="campus-life campus-reveal"
      >
        <div className="campus-container">
          <div className="campus-life-grid">
            <div className="campus-life-copy">
              <span className="campus-eyebrow campus-eyebrow-dark">
                BEYOND THE CLASSROOM
              </span>

              <h2>
                Education is
                <br />
                <em>larger than a desk.</em>
              </h2>

              <p className="campus-lead">
                Student development continues beyond academic
                lessons.
              </p>

              <p>
                The campus supports athletics, tennis, cricket,
                football, skating, kho-kho, carrom and gymnastics,
                encouraging students to develop physical fitness,
                teamwork, discipline and confidence.
              </p>

              <Link
                to="/sports"
                className="campus-editorial-link"
              >
                Explore sports
                <span>↗</span>
              </Link>
            </div>

            <div className="campus-life-image">
              <img
                src={IMAGES.sports}
                alt="Students participating in sports at SNGA"
                loading="lazy"
              />

              <div className="campus-image-caption">
                <span>STUDENT LIFE</span>
                <strong>
                  Movement. Teamwork. Confidence.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAMPUS GALLERY / ARCHITECTURE
      ===================================================== */}

      <section
        ref={addRevealRef}
        className="campus-gallery campus-reveal"
      >
        <div className="campus-container">
          <div className="campus-gallery-header">
            <span className="campus-eyebrow campus-eyebrow-dark">
              THE ENVIRONMENT
            </span>

            <h2>
              A campus built
              <br />
              <em>around possibility.</em>
            </h2>
          </div>

          <div className="campus-gallery-layout">
            <figure className="campus-gallery-large">
              <img
                src={IMAGES.campus}
                alt="SNGA campus"
                loading="lazy"
              />

              <figcaption>
                <span>01</span>
                <span>THE CAMPUS</span>
              </figcaption>
            </figure>

            <figure className="campus-gallery-small campus-gallery-small-top">
              <img
                src={IMAGES.campusAlt}
                alt="SNGA school environment"
                loading="lazy"
              />

              <figcaption>
                <span>02</span>
                <span>SPACE TO GROW</span>
              </figcaption>
            </figure>

            <figure className="campus-gallery-small campus-gallery-small-bottom">
              <img
                src={IMAGES.hero}
                alt="SNGA school grounds"
                loading="lazy"
              />

              <figcaption>
                <span>03</span>
                <span>A PLACE TO BELONG</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section
        ref={addRevealRef}
        className="campus-philosophy campus-reveal"
      >
        <div className="campus-container">
          <div className="campus-philosophy-inner">
            <span className="campus-section-number">
              03
            </span>

            <div>
              <span className="campus-eyebrow">
                THE IDEA BEHIND THE CAMPUS
              </span>

              <h2>
                The right environment
                <br />
                can change how a child
                <br />
                <em>sees the world.</em>
              </h2>

              <p>
                At SNGA, the campus is part of the educational
                experience. Space, technology, books, practical
                learning, sport and community come together to
                create an environment where students can develop
                knowledge, skills, healthy attitudes, values and
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FACILITIES INDEX
      ===================================================== */}

      <section
        ref={addRevealRef}
        className="campus-index campus-reveal"
      >
        <div className="campus-container">
          <div className="campus-index-header">
            <span className="campus-eyebrow campus-eyebrow-dark">
              CAMPUS INDEX
            </span>

            <h2>
              Explore the
              <br />
              <em>spaces at SNGA.</em>
            </h2>
          </div>

          <div className="campus-index-list">
            <Link to="/infrastructure">
              <span>01</span>
              <strong>Classrooms</strong>
              <small>
                Learning spaces with digital classroom facilities
              </small>
              <b>↗</b>
            </Link>

            <Link to="/infrastructure">
              <span>02</span>
              <strong>Library</strong>
              <small>
                3,500+ books, newspapers and magazines
              </small>
              <b>↗</b>
            </Link>

            <Link to="/infrastructure">
              <span>03</span>
              <strong>Science Laboratories</strong>
              <small>
                Chemistry, Physics and Biology
              </small>
              <b>↗</b>
            </Link>

            <Link to="/infrastructure">
              <span>04</span>
              <strong>Computer Laboratory</strong>
              <small>
                Dedicated digital learning environment
              </small>
              <b>↗</b>
            </Link>

            <Link to="/sports">
              <span>05</span>
              <strong>Sports</strong>
              <small>
                Athletics, tennis, cricket, football and more
              </small>
              <b>↗</b>
            </Link>

            <Link to="/infrastructure">
              <span>06</span>
              <strong>Multipurpose Hall</strong>
              <small>
                Space for school gatherings and events
              </small>
              <b>↗</b>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL IMAGE CTA
      ===================================================== */}

      <section className="campus-final">
        <img
          src={IMAGES.engaging}
          alt="Learning at Shifan Noor Global Academy"
          loading="lazy"
        />

        <div className="campus-final-overlay" />

        <div className="campus-container">
          <div className="campus-final-content">
            <span className="campus-eyebrow">
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <h2>
              Come and
              <br />
              <em>experience SNGA.</em>
            </h2>

            <p>
              Discover a campus designed to give every student
              the space, support and opportunity to grow.
            </p>

            <div className="campus-final-actions">
              <Link
                to="/infrastructure"
                className="campus-final-button"
              >
                Explore infrastructure
                <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="campus-final-text-link"
              >
                Contact the school
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Campus;  

