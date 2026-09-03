
// import { useState, useEffect } from "react";
// import {
//   Link,
//   NavLink,
//   useLocation,
// } from "react-router-dom";

// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaLinkedinIn,
//   FaGraduationCap,
//   FaChevronDown,
//   FaArrowRight,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// import "./Header.css";

// import schoolLogo from "../../assets/logo.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] =
//     useState(false);

//   const [isScrolled, setIsScrolled] =
//     useState(false);

//   const [activeDropdown, setActiveDropdown] =
//     useState(null);

//   const location = useLocation();

//   // ==========================================
//   // SCROLL
//   // ==========================================

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener(
//       "scroll",
//       handleScroll
//     );

//     return () =>
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );
//   }, []);

//   // ==========================================
//   // CLOSE MOBILE MENU ON ROUTE CHANGE
//   // ==========================================

//   useEffect(() => {
//     setIsMenuOpen(false);
//     setActiveDropdown(null);
//   }, [location.pathname]);

//   // ==========================================
//   // NAVIGATION
//   // ==========================================

//   const navLinks = [
//     {
//       label: "Home",
//       path: "/",
//     },

//     {
//       label: "About",
//       path: "/about",
//       dropdown: [
//         {
//           label: "Our History",
//           path: "/about/history",
//         },
//         {
//           label: "Vision & Mission",
//           path: "/about/vision-mission",
//         },
//         {
//           label: "Leadership",
//           path: "/about/leadership",
//         },
//         {
//           label: "Infrastructure",
//           path: "/about/infrastructure",
//         },
//       ],
//     },

//     {
//       label: "Academics",
//       path: "/academics",
//       dropdown: [
//         {
//           label: "Curriculum",
//           path: "/academics/curriculum",
//         },
//         {
//           label: "Faculties",
//           path: "/academics/faculties",
//         },
//         {
//           label: "Examinations",
//           path: "/academics/examinations",
//         },
//         {
//           label: "Results",
//           path: "/academics/results",
//         },
//       ],
//     },

//     {
//       label: "News",
//       path: "/news",
//     },

//     {
//       label: "Blogs",
//       path: "/blogs",
//     },

//     {
//       label: "Gallery",
//       path: "/gallery",
//     },

//     {
//       label: "Admissions",
//       path: "/admissions",
//       highlight: true,
//     },

//     {
//       label: "Contact",
//       path: "/contact",
//     },
//   ];

//   // ==========================================
//   // DROPDOWN
//   // ==========================================

//   const handleDropdownEnter = (label) => {
//     setActiveDropdown(label);
//   };

//   const handleDropdownLeave = () => {
//     setActiveDropdown(null);
//   };

//   // ==========================================
//   // RENDER
//   // ==========================================

//   return (
//     <header
//       className={`site-header ${
//         isScrolled
//           ? "site-header-scrolled"
//           : ""
//       }`}
//     >
//       {/* ======================================
//           TOP INFORMATION BAR
//       ======================================= */}

//       <div className="site-topbar">
//         <div className="site-topbar-container">

//           <div className="site-topbar-left">

//             <a
//               href="tel:+919876543210"
//               className="site-top-item"
//             >
//               <FaPhone />

//               <span>
//                 +91 98765 43210
//               </span>
//             </a>

//             <a
//               href="mailto:info@snga.edu"
//               className="site-top-item"
//             >
//               <FaEnvelope />

//               <span>
//                 info@snga.edu
//               </span>
//             </a>

//             <span className="site-top-item">
//               <FaMapMarkerAlt />

//               <span>
//                 Your Address Here
//               </span>
//             </span>

//           </div>

//           <div className="site-topbar-right">

//             <span className="site-top-item">
//               <FaClock />

//               <span>
//                 Mon - Sat : 8:00 AM - 4:00 PM
//               </span>
//             </span>

//             <div className="site-socials">

//               <a
//                 href="#"
//                 aria-label="Facebook"
//               >
//                 <FaFacebookF />
//               </a>

//               <a
//                 href="#"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram />
//               </a>

//               <a
//                 href="#"
//                 aria-label="YouTube"
//               >
//                 <FaYoutube />
//               </a>

//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedinIn />
//               </a>

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* ======================================
//           MAIN HEADER
//       ======================================= */}

//       <div className="site-main-header">

//         <div className="site-main-container">

//           {/* LOGO */}

//           <Link
//             to="/"
//             className="site-brand"
//           >

//             <div className="site-logo">

//               <img
//                 src={schoolLogo}
//                 alt="SNGA Logo"
//                 onError={(e) => {
//                   e.currentTarget.style.display =
//                     "none";
//                 }}
//               />

//             </div>

//             <div className="site-brand-text">

//               <strong>
//                 SNGA
//               </strong>

//               <span>
//                 Shree Narayan Guru Academy
//               </span>

//             </div>

//           </Link>

//           {/* ====================================
//               DESKTOP NAV
//           ===================================== */}

//           <nav className="site-navigation">

//             {navLinks.map((link) => (
//               <div
//                 key={link.path}
//                 className="site-nav-item"
//                 onMouseEnter={() =>
//                   link.dropdown &&
//                   handleDropdownEnter(
//                     link.label
//                   )
//                 }
//                 onMouseLeave={
//                   handleDropdownLeave
//                 }
//               >

//                 <NavLink
//                   to={link.path}
//                   className={({ isActive }) =>
//                     `site-nav-link ${
//                       isActive
//                         ? "site-nav-active"
//                         : ""
//                     } ${
//                       link.highlight
//                         ? "site-nav-highlight"
//                         : ""
//                     }`
//                   }
//                 >

//                   <span>
//                     {link.label}
//                   </span>

//                   {link.dropdown && (
//                     <FaChevronDown />
//                   )}

//                 </NavLink>

//                 {/* DROPDOWN */}

//                 {link.dropdown &&
//                   activeDropdown ===
//                     link.label && (
//                     <div className="site-dropdown">

//                       <div className="site-dropdown-inner">

//                         {link.dropdown.map(
//                           (item) => (
//                             <Link
//                               key={
//                                 item.path
//                               }
//                               to={
//                                 item.path
//                               }
//                               className="site-dropdown-link"
//                             >

//                               <span>
//                                 {
//                                   item.label
//                                 }
//                               </span>

//                               <FaArrowRight />

//                             </Link>
//                           )
//                         )}

//                       </div>

//                     </div>
//                   )}

//               </div>
//             ))}

//           </nav>

//           {/* ====================================
//               HEADER CTA
//           ===================================== */}

//           <div className="site-header-actions">

//             <Link
//               to="/admissions"
//               className="site-apply-button"
//             >

//               <span className="site-apply-icon">
//                 <FaGraduationCap />
//               </span>

//               <span>
//                 Apply Now
//               </span>

//             </Link>

//             {/* MOBILE BUTTON */}

//             <button
//               type="button"
//               className="site-mobile-toggle"
//               onClick={() =>
//                 setIsMenuOpen(
//                   !isMenuOpen
//                 )
//               }
//               aria-label="Toggle navigation"
//               aria-expanded={
//                 isMenuOpen
//               }
//             >
//               {isMenuOpen ? (
//                 <FaTimes />
//               ) : (
//                 <FaBars />
//               )}
//             </button>

//           </div>

//         </div>

//       </div>

//       {/* ======================================
//           MOBILE MENU
//       ======================================= */}

//       <div
//         className={`site-mobile-menu ${
//           isMenuOpen
//             ? "site-mobile-menu-open"
//             : ""
//         }`}
//       >

//         <div className="site-mobile-navigation">

//           {navLinks.map((link) => (
//             <div
//               key={link.path}
//               className="site-mobile-item"
//             >

//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `site-mobile-link ${
//                     isActive
//                       ? "site-mobile-active"
//                       : ""
//                   } ${
//                     link.highlight
//                       ? "site-mobile-highlight"
//                       : ""
//                   }`
//                 }
//               >

//                 <span>
//                   {link.label}
//                 </span>

//                 {link.dropdown && (
//                   <FaChevronDown />
//                 )}

//               </NavLink>

//               {link.dropdown && (
//                 <div className="site-mobile-dropdown">

//                   {link.dropdown.map(
//                     (item) => (
//                       <Link
//                         key={item.path}
//                         to={item.path}
//                         className="site-mobile-dropdown-link"
//                       >
//                         <span>
//                           {item.label}
//                         </span>

//                         <FaArrowRight />
//                       </Link>
//                     )
//                   )}

//                 </div>
//               )}

//             </div>
//           ))}

//         </div>

//         {/* MOBILE CTA */}

//         <div className="site-mobile-footer">

//           <Link
//             to="/admissions"
//             className="site-mobile-apply"
//           >
//             <FaGraduationCap />

//             <span>
//               Apply for Admission
//             </span>

//             <FaArrowRight />
//           </Link>

//           <div className="site-mobile-contact">

//             <a href="tel:+919876543210">
//               <FaPhone />
//               +91 98765 43210
//             </a>

//             <a href="mailto:info@snga.edu">
//               <FaEnvelope />
//               info@snga.edu
//             </a>

//           </div>

//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;



































import { useState, useEffect, useRef, useCallback } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGraduationCap,
  FaChevronDown,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaShieldAlt,
  FaAward,
  FaStar,
  FaUserGraduate,
  FaBookOpen,
  FaUsers,
  FaTrophy,
  FaBuilding,
  FaGlobe,
  FaCheckCircle,
  FaUsersCog,
} from "react-icons/fa";

import "./Header.css";

import schoolLogo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [topbarVisible, setTopbarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const headerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // ==========================================
  // RESPONSIVE DETECTION
  // ==========================================
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ==========================================
  // SCROLL HANDLER WITH DEBOUNCE
  // ==========================================
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setIsScrolled(currentScrollY > 40);
          
          if (currentScrollY > lastScrollY && currentScrollY > 120) {
            setTopbarVisible(false);
          } else if (currentScrollY < lastScrollY) {
            setTopbarVisible(true);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==========================================
  // CLOSE MOBILE MENU ON ROUTE CHANGE
  // ==========================================
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // ==========================================
  // CLOSE DROPDOWN ON OUTSIDE CLICK
  // ==========================================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ==========================================
  // ESCAPE KEY HANDLER
  // ==========================================
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // ==========================================
  // BODY SCROLL LOCK FOR MOBILE MENU
  // ==========================================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ==========================================
  // TOUCH SWIPE HANDLERS
  // ==========================================
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 80;
    const isRightSwipe = distance < -80;
    
    if (isLeftSwipe && isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (isRightSwipe && !isMenuOpen) {
      setIsMenuOpen(true);
    }
  }, [touchStart, touchEnd, isMenuOpen]);

  // ==========================================
  // DROPDOWN HANDLERS WITH DELAY
  // ==========================================
  const handleDropdownEnter = useCallback((label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  // ==========================================
  // NAVIGATION DATA
  // ==========================================
  const navLinks = [
    { label: "Home", path: "/" },
    {
      label: "About",
      path: "/about",
      dropdown: [
        { label: "Our History", path: "/about/history", icon: <FaBookOpen /> },
        { label: "Vision & Mission", path: "/about/vision-mission", icon: <FaGlobe /> },
        { label: "Leadership", path: "/about/leadership", icon: <FaUsers /> },
        { label: "Management", path: "/about/management", icon: <FaUsersCog/> },
         { label: "Infrastructure", path: "/about/infrastructure", icon: <FaBuilding /> },
      ],
    },
    {
      label: "Academics",
      path: "/academics",
      dropdown: [
        { label: "Curriculum", path: "/academics/curriculum", icon: <FaBookOpen /> },
        { label: "Faculties", path: "/academics/faculties", icon: <FaUserGraduate /> },
        { label: "Examinations", path: "/academics/examinations", icon: <FaCheckCircle /> },
        { label: "Results", path: "/academics/results", icon: <FaTrophy /> },
      ],
    },
    { label: "News", path: "/news" },
    { label: "Blogs", path: "/blogs" },
    { label: "Gallery", path: "/gallery" },
    { label: "Admissions", path: "/admissions", highlight: true },
    { label: "Contact", path: "/contact" },
  ];

  // ==========================================
  // RENDER
  // ==========================================
  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? "header-scrolled" : ""} ${
        !topbarVisible && !isMobile ? "header-topbar-hidden" : ""
      }`}
    >
      {/* ======================================
          TOP BAR - DESKTOP ONLY
      ======================================= */}
      {!isMobile && (
        <div className={`header-topbar ${!topbarVisible ? "header-topbar-collapsed" : ""}`}>
          <div className="header-topbar-container">
            <div className="header-topbar-left">
              <a href="tel:+919788914441" className="header-top-item">
                <span className="header-top-icon"><FaPhoneAlt /></span>
                <span>+91 97889 14441</span>
              </a>

              <span className="header-top-divider"></span>

              <a href="mailto:info@sngacbse.com" className="header-top-item">
                <span className="header-top-icon"><FaEnvelope /></span>
                <span>info@sngacbse.com</span>
              </a>

              <span className="header-top-divider"></span>

              <span className="header-top-item">
                <span className="header-top-icon"><FaMapMarkerAlt /></span>
                <span>Ramanathapuram, Tamil Nadu</span>
              </span>
            </div>

            <div className="header-topbar-right">
              <span className="header-top-item">
                <span className="header-top-icon"><FaClock /></span>
                <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
              </span>

              <span className="header-top-divider"></span>

              <div className="header-top-socials">
                <a href="#" aria-label="Facebook" className="header-top-social">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Instagram" className="header-top-social">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="YouTube" className="header-top-social">
                  <FaYoutube />
                </a>
                <a href="#" aria-label="LinkedIn" className="header-top-social">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================
          MAIN HEADER
      ======================================= */}
      <div className="header-main">
        <div className="header-main-container">
          {/* Logo */}
          <Link to="/" className="header-brand" aria-label="SNGA Home">
            <div className="header-logo-wrapper">
              <img
                src={schoolLogo}
                alt="SNGA Logo"
                className="header-logo"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="header-logo-shine"></div>
            </div>

            <div className="header-brand-text">
              <div className="header-brand-title">
                <strong>SNGA</strong>
                <FaStar className="header-brand-star" />
              </div>
              <span className="header-brand-subtitle">
                Shifan Noor Global Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="header-nav" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="header-nav-item"
                  onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `header-nav-link ${isActive ? "header-nav-active" : ""} ${
                        link.highlight ? "header-nav-cta" : ""
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    {link.dropdown && (
                      <FaChevronDown className="header-nav-chevron" />
                    )}
                    <span className="header-nav-underline"></span>
                  </NavLink>

                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === link.label && (
                    <div 
                      className="header-dropdown"
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="header-dropdown-inner">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="header-dropdown-link"
                          >
                            <span className="header-dropdown-icon">{item.icon}</span>
                            <span className="header-dropdown-label">{item.label}</span>
                            <FaArrowRight className="header-dropdown-arrow" />
                          </Link>
                        ))}
                      </div>
                      <div className="header-dropdown-footer">
                        <FaShieldAlt />
                        <span>Accredited & Certified</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Header Actions */}
          <div className="header-actions">
            {!isMobile && (
              <Link to="/admissions" className="header-apply-btn">
                <span className="header-apply-icon">
                  <FaGraduationCap />
                </span>
                <span className="header-apply-text">
                  <span className="header-apply-label">Apply Now</span>
                  <span className="header-apply-subtext">2025-26</span>
                </span>
                <span className="header-apply-shine"></span>
              </Link>
            )}

            {/* Mobile Toggle */}
            <button
              type="button"
              className="header-mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span className={`header-toggle-icon ${isMenuOpen ? "header-toggle-open" : ""}`}>
                <FaBars className="header-toggle-bars" />
                <FaTimes className="header-toggle-times" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================
          MOBILE MENU
      ======================================= */}
      <div
        className={`header-mobile-menu ${isMenuOpen ? "header-mobile-open" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="header-mobile-overlay" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
        
        <div className="header-mobile-panel">
          <div className="header-mobile-header">
            <span className="header-mobile-title">
              <FaStar /> Menu
            </span>
            <button
              className="header-mobile-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <div className="header-mobile-nav">
            {navLinks.map((link, index) => (
              <div key={link.path} className="header-mobile-item" style={{ animationDelay: `${index * 0.06}s` }}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `header-mobile-link ${isActive ? "header-mobile-active" : ""} ${
                      link.highlight ? "header-mobile-highlight" : ""
                    }`
                  }
                >
                  <span className="header-mobile-link-text">
                    {link.label}
                  </span>
                  {link.dropdown ? (
                    <FaChevronDown className="header-mobile-chevron" />
                  ) : (
                    <FaArrowRight className="header-mobile-arrow" />
                  )}
                </NavLink>

                {link.dropdown && (
                  <div className="header-mobile-dropdown">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="header-mobile-dropdown-link"
                      >
                        <span className="header-mobile-dropdown-icon">{item.icon}</span>
                        <span>{item.label}</span>
                        <FaArrowRight className="header-mobile-dropdown-arrow" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="header-mobile-footer">
            <Link to="/admissions" className="header-mobile-apply">
              <FaGraduationCap className="header-mobile-apply-icon" />
              <div className="header-mobile-apply-text">
                <span>Apply for Admission</span>
                <small>Academic Year 2025-26</small>
              </div>
              <FaArrowRight className="header-mobile-apply-arrow" />
            </Link>

            <div className="header-mobile-contact">
              <a href="tel:+919788914441">
                <FaPhoneAlt />
                <span>+91 97889 14441</span>
              </a>
              <a href="mailto:info@sngacbse.com">
                <FaEnvelope />
                <span>info@sngacbse.com</span>
              </a>
              <span>
                <FaMapMarkerAlt />
                <span>Ramanathapuram, Tamil Nadu</span>
              </span>
            </div>

            <div className="header-mobile-badges">
              <span>
                <FaShieldAlt />
                CBSE Affiliated
              </span>
              <span>
                <FaAward />
                ISO Certified
              </span>
              <span>
                <FaTrophy />
                Excellence in Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;