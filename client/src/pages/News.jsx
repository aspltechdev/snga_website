// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// import newsService from "../services/news.service";
// import "./News.css";

// const News = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadNews = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await newsService.getNews();

//         const items = Array.isArray(response)
//           ? response
//           : response?.data || response?.news || [];

//         setNews(items);
//       } catch (err) {
//         console.error("Failed to load news:", err);
//         setError("Unable to load the latest news.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadNews();
//   }, []);

//   const categories = useMemo(() => {
//     const values = news
//       .map((item) => item.category)
//       .filter(Boolean);

//     return ["All", ...new Set(values)];
//   }, [news]);

//   const filteredNews = useMemo(() => {
//     if (activeCategory === "All") {
//       return news;
//     }

//     return news.filter(
//       (item) => item.category === activeCategory
//     );
//   }, [news, activeCategory]);

//   const featuredNews = filteredNews[0];
//   const remainingNews = filteredNews.slice(1);

//   const getImageUrl = (image) => {
//     if (!image) return "";

//     if (
//       image.startsWith("http://") ||
//       image.startsWith("https://")
//     ) {
//       return image;
//     }

//     const API_URL =
//       import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
//       "http://localhost:5000";

//     return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
//   };

//   const formatDate = (date) => {
//     if (!date) return "";

//     return new Intl.DateTimeFormat("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     }).format(new Date(date));
//   };

//   return (
//     <main className="news-page">

//       {/* HERO */}
//       <section className="news-hero">
//         <div className="news-container">

//           <div className="news-hero-content">

//             <div className="news-eyebrow">
//               <span />
//               NEWS & EVENTS
//             </div>

//             <h1>
//               Life at SNGA,
//               <br />
//               <em>in motion.</em>
//             </h1>

//             <p>
//               Discover the latest stories, events, achievements
//               and moments from the Shifan Noor Global Academy
//               community.
//             </p>

//           </div>

//           <div className="news-hero-side">
//             <span>LEARN</span>
//             <span>PARTICIPATE</span>
//             <span>ACHIEVE</span>
//             <span>CELEBRATE</span>
//           </div>

//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="news-intro">
//         <div className="news-container">

//           <div className="news-intro-label">
//             SCHOOL LIFE
//           </div>

//           <div className="news-intro-grid">

//             <h2>
//               Every day brings
//               <br />
//               something <em>new.</em>
//             </h2>

//             <div className="news-intro-copy">

//               <p>
//                 School life is made up of learning, activities,
//                 achievements, celebrations and the everyday
//                 experiences that students share together.
//               </p>

//               <p>
//                 Follow the latest updates from SNGA and stay
//                 connected with what's happening across our
//                 school community.
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* NEWS DIRECTORY */}
//       <section className="news-directory">

//         <div className="news-container">

//           <div className="news-directory-header">

//             <div>

//               <div className="news-eyebrow dark">
//                 LATEST UPDATES
//               </div>

//               <h2>
//                 What's happening
//                 <br />
//                 <em>at SNGA.</em>
//               </h2>

//             </div>

//             <p>
//               Explore the latest school news, events,
//               announcements and community stories.
//             </p>

//           </div>

//           {/* CATEGORY FILTER */}
//           {!loading && categories.length > 1 && (
//             <div className="news-filters">

//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={
//                     activeCategory === category
//                       ? "active"
//                       : ""
//                   }
//                   onClick={() =>
//                     setActiveCategory(category)
//                   }
//                 >
//                   {category}
//                 </button>
//               ))}

//             </div>
//           )}

//           {/* LOADING */}
//           {loading && (
//             <div className="news-state">
//               <span>LOADING STORIES</span>
//             </div>
//           )}

//           {/* ERROR */}
//           {!loading && error && (
//             <div className="news-state news-error">
//               <span>{error}</span>
//             </div>
//           )}

//           {/* EMPTY */}
//           {!loading &&
//             !error &&
//             filteredNews.length === 0 && (
//               <div className="news-state">

//                 <span>
//                   NO STORIES YET
//                 </span>

//                 <h3>
//                   New updates will appear here.
//                 </h3>

//                 <p>
//                   School news and events can be published
//                   from the administration panel.
//                 </p>

//               </div>
//             )}

//           {/* FEATURED */}
//           {!loading &&
//             !error &&
//             featuredNews && (
//               <article className="news-featured">

//                 <Link
//                   to={`/news/${featuredNews.slug}`}
//                   className="news-featured-image"
//                 >

//                   {featuredNews.featuredImage ? (
//                     <img
//                       src={getImageUrl(
//                         featuredNews.featuredImage
//                       )}
//                       alt={featuredNews.title}
//                     />
//                   ) : (
//                     <div className="news-image-placeholder">
//                       SNGA
//                     </div>
//                   )}

//                   <div className="news-featured-index">
//                     01
//                   </div>

//                 </Link>

//                 <div className="news-featured-content">

//                   <div className="news-meta">

//                     {featuredNews.category && (
//                       <span>
//                         {featuredNews.category}
//                       </span>
//                     )}

//                     {featuredNews.publishedAt && (
//                       <time>
//                         {formatDate(
//                           featuredNews.publishedAt
//                         )}
//                       </time>
//                     )}

//                   </div>

//                   <h3>
//                     {featuredNews.title}
//                   </h3>

//                   {featuredNews.excerpt && (
//                     <p>
//                       {featuredNews.excerpt}
//                     </p>
//                   )}

//                   <Link
//                     to={`/news/${featuredNews.slug}`}
//                     className="news-read-link"
//                   >
//                     <span>Read Story</span>
//                     <FaArrowRight />
//                   </Link>

//                 </div>

//               </article>
//             )}

//           {/* NEWS GRID */}
//           {!loading &&
//             !error &&
//             remainingNews.length > 0 && (
//               <div className="news-grid">

//                 {remainingNews.map((item, index) => (
//                   <article
//                     className="news-card"
//                     key={item.id}
//                   >

//                     <Link
//                       to={`/news/${item.slug}`}
//                       className="news-card-image"
//                     >

//                       {item.featuredImage ? (
//                         <img
//                           src={getImageUrl(
//                             item.featuredImage
//                           )}
//                           alt={item.title}
//                         />
//                       ) : (
//                         <div className="news-image-placeholder">
//                           SNGA
//                         </div>
//                       )}

//                       <span>
//                         {String(index + 2).padStart(2, "0")}
//                       </span>

//                     </Link>

//                     <div className="news-card-content">

//                       <div className="news-meta">

//                         {item.category && (
//                           <span>
//                             {item.category}
//                           </span>
//                         )}

//                         {item.publishedAt && (
//                           <time>
//                             {formatDate(
//                               item.publishedAt
//                             )}
//                           </time>
//                         )}

//                       </div>

//                       <h3>
//                         {item.title}
//                       </h3>

//                       {item.excerpt && (
//                         <p>
//                           {item.excerpt}
//                         </p>
//                       )}

//                       <Link
//                         to={`/news/${item.slug}`}
//                         className="news-card-link"
//                       >
//                         Read Story
//                         <FaArrowRight />
//                       </Link>

//                     </div>

//                   </article>
//                 ))}

//               </div>
//             )}

//         </div>

//       </section>

//       {/* COMMUNITY */}
//       <section className="news-community">

//         <div className="news-container">

//           <div className="news-community-grid">

//             <div className="news-community-heading">

//               <div className="news-eyebrow">
//                 THE SNGA COMMUNITY
//               </div>

//               <h2>
//                 More than
//                 <br />
//                 <em>school news.</em>
//               </h2>

//             </div>

//             <div className="news-community-copy">

//               <p>
//                 The stories of a school are found in its
//                 classrooms, activities, competitions,
//                 celebrations and the achievements of
//                 its students.
//               </p>

//               <p>
//                 Our news section brings these moments
//                 together so families and the wider
//                 community can stay connected with
//                 life at SNGA.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ACHIEVEMENTS */}
//       <section className="news-achievements">

//         <div className="news-container">

//           <div className="news-achievements-content">

//             <div className="news-eyebrow dark">
//               STUDENT ACHIEVEMENTS
//             </div>

//             <h2>
//               Celebrate every
//               <br />
//               <em>milestone.</em>
//             </h2>

//             <p>
//               From academic accomplishments to sports
//               and other achievements, every milestone
//               represents effort, growth and determination.
//             </p>

//             <Link
//               to="/achievements"
//               className="news-link"
//             >
//               <span>View Achievements</span>
//               <FaArrowRight />
//             </Link>

//           </div>

//         </div>

//       </section>

//       {/* GALLERY */}
//       <section className="news-gallery">

//         <div className="news-container">

//           <div className="news-gallery-grid">

//             <div className="news-gallery-heading">

//               <div className="news-eyebrow dark">
//                 MOMENTS
//               </div>

//               <h2>
//                 See school life
//                 <br />
//                 <em>in pictures.</em>
//               </h2>

//             </div>

//             <div className="news-gallery-copy">

//               <p>
//                 Explore the people, activities and
//                 experiences that make everyday life
//                 at SNGA memorable.
//               </p>

//               <Link
//                 to="/gallery"
//                 className="news-link"
//               >
//                 <span>View Gallery</span>
//                 <FaArrowRight />
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="news-cta">

//         <div className="news-container">

//           <div className="news-cta-content">

//             <div className="news-eyebrow dark">
//               STAY CONNECTED
//             </div>

//             <h2>
//               Keep up with
//               <br />
//               <em>SNGA.</em>
//             </h2>

//             <p>
//               Explore our latest stories and discover
//               what's happening across the school community.
//             </p>

//             <div className="news-actions">

//               <Link
//                 to="/gallery"
//                 className="news-button"
//               >
//                 <span>Explore Gallery</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/contact"
//                 className="news-secondary"
//               >
//                 Contact School
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default News;


import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaNewspaper,
  FaTag,
  FaCalendarAlt,
  FaEye,
  FaHeart,
  FaShare,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import newsService from "../services/news.service";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState("");

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const directoryRef = useRef(null);
  const communityRef = useRef(null);
  const achievementsRef = useRef(null);
  const galleryRef = useRef(null);
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
      { ref: heroRef, className: "sn-hero--visible" },
      { ref: introRef, className: "sn-intro--visible" },
      { ref: directoryRef, className: "sn-directory--visible" },
      { ref: communityRef, className: "sn-community--visible" },
      { ref: achievementsRef, className: "sn-achievements--visible" },
      { ref: galleryRef, className: "sn-gallery--visible" },
      { ref: ctaRef, className: "sn-cta--visible" },
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
  // FETCH NEWS
  // =====================================================

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await newsService.getNews();

        const items = Array.isArray(response)
          ? response
          : response?.data || response?.news || [];

        setNews(items);
      } catch (err) {
        console.error("Failed to load news:", err);
        setError("Unable to load the latest news.");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  // =====================================================
  // COMPUTED VALUES
  // =====================================================

  const categories = useMemo(() => {
    const values = news.map((item) => item.category).filter(Boolean);
    return ["All", ...new Set(values)];
  }, [news]);

  const filteredNews = useMemo(() => {
    if (activeCategory === "All") {
      return news;
    }
    return news.filter((item) => item.category === activeCategory);
  }, [news, activeCategory]);

  const featuredNews = filteredNews[0];
  const remainingNews = filteredNews.slice(1);

  // =====================================================
  // HELPERS
  // =====================================================

  const getImageUrl = (image) => {
    if (!image) return "";

    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    const API_URL =
      import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
      "http://localhost:5000";

    return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  };

  // =====================================================
  // DATA
  // =====================================================

  const stats = [
    { number: "50+", label: "Stories Published" },
    { number: "25+", label: "Events Covered" },
    { number: "10+", label: "Awards Won" },
    { number: "1000+", label: "Community Members" },
  ];

  return (
    <main className="sn-page">
      {/* =================================================
          HERO SECTION
      ================================================= */}
      <section ref={heroRef} className="sn-hero">
        <div className="sn-hero__bg" />
        <div className="sn-hero__gradient" />

        <div className="sn-container">
          <div className="sn-hero__content">
            <span className="sn-hero__badge">
              <FaNewspaper />
              NEWS & EVENTS
            </span>

            <h1 className="sn-hero__title">
              Life at SNGA,
              <br />
              <span className="sn-hero__highlight">In Motion.</span>
            </h1>

            <p className="sn-hero__desc">
              Discover the latest stories, events, achievements and moments
              from the Shifan Noor Global Academy community.
            </p>
          </div>

          <div className="sn-hero__tags">
            <span>LEARN</span>
            <span>PARTICIPATE</span>
            <span>ACHIEVE</span>
            <span>CELEBRATE</span>
          </div>
        </div>
      </section>

      {/* =================================================
          INTRO SECTION
      ================================================= */}
      <section ref={introRef} className="sn-intro">
        <div className="sn-container">
          <div className="sn-intro__inner">
            <span className="sn-intro__label">SCHOOL LIFE</span>

            <div className="sn-intro__grid">
              <h2 className="sn-intro__title">
                Every Day Brings
                <br />
                <span className="sn-intro__highlight">Something New.</span>
              </h2>

              <div className="sn-intro__text">
                <p>
                  School life is made up of learning, activities, achievements,
                  celebrations and the everyday experiences that students share
                  together.
                </p>
                <p>
                  Follow the latest updates from SNGA and stay connected with
                  what's happening across our school community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          DIRECTORY SECTION
      ================================================= */}
      <section ref={directoryRef} className="sn-directory">
        <div className="sn-container">
          <div className="sn-directory__header">
            <div>
              <span className="sn-directory__label">LATEST UPDATES</span>
              <h2 className="sn-directory__title">
                What's Happening
                <br />
                <span className="sn-directory__highlight">At SNGA.</span>
              </h2>
            </div>
            <p className="sn-directory__desc">
              Explore the latest school news, events, announcements and
              community stories.
            </p>
          </div>

          {/* Filters */}
          {!loading && categories.length > 1 && (
            <div className="sn-directory__filters">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`sn-directory__filter ${
                    activeCategory === category ? "sn-directory__filter--active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* States */}
          {loading && (
            <div className="sn-directory__state">
              <div className="sn-directory__loader">
                <span />
                <span />
                <span />
              </div>
              <span>LOADING STORIES</span>
            </div>
          )}

          {!loading && error && (
            <div className="sn-directory__state sn-directory__state--error">
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && filteredNews.length === 0 && (
            <div className="sn-directory__state sn-directory__state--empty">
              <div className="sn-directory__empty-icon">
                <FaNewspaper />
              </div>
              <h3>No Stories Yet</h3>
              <p>New updates will appear here. School news and events can be published from the administration panel.</p>
            </div>
          )}

          {/* Featured News */}
          {!loading && !error && featuredNews && (
            <div className="sn-directory__featured">
              <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-image">
                {featuredNews.featuredImage ? (
                  <img
                    src={getImageUrl(featuredNews.featuredImage)}
                    alt={featuredNews.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="sn-directory__featured-placeholder">
                    <FaNewspaper />
                  </div>
                )}
                <div className="sn-directory__featured-overlay" />
                <span className="sn-directory__featured-number">01</span>
              </Link>

              <div className="sn-directory__featured-content">
                <div className="sn-directory__featured-meta">
                  {featuredNews.category && (
                    <span className="sn-directory__featured-category">
                      <FaTag />
                      {featuredNews.category}
                    </span>
                  )}
                  {featuredNews.publishedAt && (
                    <time className="sn-directory__featured-date">
                      <FaCalendarAlt />
                      {formatDate(featuredNews.publishedAt)}
                    </time>
                  )}
                </div>

                <h3 className="sn-directory__featured-title">{featuredNews.title}</h3>

                {featuredNews.excerpt && (
                  <p className="sn-directory__featured-desc">{featuredNews.excerpt}</p>
                )}

                <Link to={`/news/${featuredNews.slug}`} className="sn-directory__featured-link">
                  <span>Read Story</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* News Grid */}
          {!loading && !error && remainingNews.length > 0 && (
            <div className="sn-directory__grid">
              {remainingNews.map((item, index) => (
                <div key={item.id} className="sn-directory__card">
                  <Link to={`/news/${item.slug}`} className="sn-directory__card-image">
                    {item.featuredImage ? (
                      <img
                        src={getImageUrl(item.featuredImage)}
                        alt={item.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="sn-directory__card-placeholder">
                        <FaNewspaper />
                      </div>
                    )}
                    <div className="sn-directory__card-overlay" />
                    <span className="sn-directory__card-number">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </Link>

                  <div className="sn-directory__card-content">
                    <div className="sn-directory__card-meta">
                      {item.category && (
                        <span className="sn-directory__card-category">
                          <FaTag />
                          {item.category}
                        </span>
                      )}
                      {item.publishedAt && (
                        <time className="sn-directory__card-date">
                          <FaCalendarAlt />
                          {formatDate(item.publishedAt)}
                        </time>
                      )}
                    </div>

                    <h3 className="sn-directory__card-title">{item.title}</h3>

                    {item.excerpt && (
                      <p className="sn-directory__card-desc">{item.excerpt}</p>
                    )}

                    <Link to={`/news/${item.slug}`} className="sn-directory__card-link">
                      <span>Read Story</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          COMMUNITY SECTION
      ================================================= */}
      <section ref={communityRef} className="sn-community">
        <div className="sn-community__bg" />

        <div className="sn-container">
          <div className="sn-community__inner">
            <div className="sn-community__content">
              <span className="sn-community__label">THE SNGA COMMUNITY</span>
              <h2 className="sn-community__title">
                More Than
                <br />
                <span className="sn-community__highlight">School News.</span>
              </h2>
            </div>

            <div className="sn-community__right">
              <p className="sn-community__desc">
                The stories of a school are found in its classrooms, activities,
                competitions, celebrations and the achievements of its students.
              </p>
              <p className="sn-community__desc">
                Our news section brings these moments together so families and
                the wider community can stay connected with life at SNGA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ACHIEVEMENTS SECTION
      ================================================= */}
      <section ref={achievementsRef} className="sn-achievements">
        <div className="sn-achievements__bg" />

        <div className="sn-container">
          <div className="sn-achievements__inner">
            <div className="sn-achievements__content">
              <span className="sn-achievements__label">STUDENT ACHIEVEMENTS</span>
              <h2 className="sn-achievements__title">
                Celebrate Every
                <br />
                <span className="sn-achievements__highlight">Milestone.</span>
              </h2>
              <p className="sn-achievements__desc">
                From academic accomplishments to sports and other achievements,
                every milestone represents effort, growth and determination.
              </p>
              <Link to="/achievements" className="sn-achievements__link">
                <span>View Achievements</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="sn-achievements__stats">
              {stats.map((stat, index) => (
                <div key={index} className="sn-achievements__stat">
                  <span className="sn-achievements__stat-number">{stat.number}</span>
                  <span className="sn-achievements__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          GALLERY SECTION
      ================================================= */}
      <section ref={galleryRef} className="sn-gallery">
        <div className="sn-container">
          <div className="sn-gallery__inner">
            <div className="sn-gallery__content">
              <span className="sn-gallery__label">MOMENTS</span>
              <h2 className="sn-gallery__title">
                See School Life
                <br />
                <span className="sn-gallery__highlight">In Pictures.</span>
              </h2>
            </div>

            <div className="sn-gallery__right">
              <p className="sn-gallery__desc">
                Explore the people, activities and experiences that make
                everyday life at SNGA memorable.
              </p>
              <Link to="/gallery" className="sn-gallery__link">
                <span>View Gallery</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}
      <section ref={ctaRef} className="sn-cta">
        <div className="sn-container">
          <div className="sn-cta__content">
            <span className="sn-cta__label">STAY CONNECTED</span>
            <h2 className="sn-cta__title">
              Keep Up With
              <br />
              <span className="sn-cta__highlight">SNGA.</span>
            </h2>
            <p className="sn-cta__desc">
              Explore our latest stories and discover what's happening across
              the school community.
            </p>

            <div className="sn-cta__actions">
              <Link to="/gallery" className="sn-cta__btn sn-cta__btn--primary">
                <span>Explore Gallery</span>
                <FaArrowRight />
              </Link>
              <Link to="/contact" className="sn-cta__btn sn-cta__btn--secondary">
                Contact School
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;