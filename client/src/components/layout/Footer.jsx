import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaGraduationCap,
  FaArrowUp,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import "./Footer.css";
import logo from "../../assets/logo1.png";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-reveal-active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const revealElements = footerRef.current?.querySelectorAll(".footer-reveal");
    revealElements?.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" ref={footerRef}>
      {/* Animated Gradient Border */}
      <div className="footer-border">
        <div className="footer-border-glow"></div>
      </div>

      {/* Background Effects */}
      <div className="footer-bg-effects">
        <div className="footer-orb footer-orb-1"></div>
        <div className="footer-orb footer-orb-2"></div>
        <div className="footer-grid-overlay"></div>
      </div>

      <div className="footer-container">
        
        {/* Main Footer */}
        <div className="footer-main">
          
          {/* Brand Column */}
          <div className="footer-brand footer-reveal">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="SNGA" />
            </Link>
            
            <p className="footer-brand-text">
              Shifan Noor Global Academy is committed to providing
              holistic education that develops knowledge, skills,
              confidence, values and character in every student.
            </p>

            <div className="footer-badges">
              <span className="footer-badge">
                <FaShieldAlt />
                CBSE Affiliated
              </span>
              <span className="footer-badge">
                <FaAward />
                ISO Certified
              </span>
            </div>

            <div className="footer-social">
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="footer-social-btn" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column footer-reveal">
            <h4 className="footer-heading">
              Quick Links
            </h4>
            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/sports" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="footer-column footer-reveal">
            <h4 className="footer-heading">
              Explore
            </h4>
            <ul className="footer-list">
              <li>
                <Link to="/admissions" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/news" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/public-disclosure" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Public Disclosure
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <FaChevronRight className="footer-link-arrow" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact footer-reveal">
            <h4 className="footer-heading">
              Contact Us
            </h4>
            
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="footer-contact-label">Address</span>
                  <p>
                    Shifan Noor Global Academy
                    <br />
                    Venkulam, Devipattinam Road
                    <br />
                    Ramanathapuram - 623503
                  </p>
                </div>
              </div>

              <a href="tel:+919788914441" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="footer-contact-label">Phone</span>
                  <p>+91 97889 14441</p>
                </div>
              </a>

              <a href="tel:+919600234555" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="footer-contact-label">Alternate</span>
                  <p>+91 96002 34555</p>
                </div>
              </a>

              <a href="mailto:info@sngacbse.com" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="footer-contact-label">Email</span>
                  <p>info@sngacbse.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="footer-cta footer-reveal">
          <div className="footer-cta-content">
            <div className="footer-cta-icon">
              <FaGraduationCap />
            </div>
            <div>
              <span className="footer-cta-tag">ADMISSIONS OPEN</span>
              <h3 className="footer-cta-title">
                Give your child the opportunity to learn, grow and excel.
              </h3>
            </div>
          </div>
          <Link to="/admissions" className="footer-cta-btn">
            <span>Admission Enquiry</span>
            <FaArrowRight />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom footer-reveal">
          <div className="footer-bottom-left">
            <span>© {new Date().getFullYear()} Shifan Noor Global Academy.</span>
            <span className="footer-bottom-dot">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="footer-bottom-center">
            <span>LEARN</span>
            <span className="footer-bottom-sep"></span>
            <span>GROW</span>
            <span className="footer-bottom-sep"></span>
            <span>LEAD</span>
          </div>

          <button onClick={scrollToTop} className="footer-scroll-top" aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;