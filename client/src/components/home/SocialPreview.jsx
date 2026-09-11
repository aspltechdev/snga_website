// // import { useEffect, useMemo, useState } from "react";
// // import { Link } from "react-router-dom";

// // import socialService from "../../services/socialService";
// // import "./SocialPreview.css";

// // const getPlatformLabel = (platform) => {
// //   switch (platform) {
// //     case "INSTAGRAM":
// //       return "Instagram";
// //     case "YOUTUBE":
// //       return "YouTube";
// //     case "FACEBOOK":
// //       return "Facebook";
// //     default:
// //       return "Social";
// //   }
// // };

// // const getPlatformClass = (platform) => {
// //   switch (platform) {
// //     case "INSTAGRAM":
// //       return "sp-instagram";
// //     case "YOUTUBE":
// //       return "sp-youtube";
// //     case "FACEBOOK":
// //       return "sp-facebook";
// //     default:
// //       return "";
// //   }
// // };

// // const getYoutubeEmbedUrl = (url) => {
// //   if (!url) return "";

// //   try {
// //     const parsed = new URL(url);

// //     if (parsed.hostname.includes("youtu.be")) {
// //       return `https://www.youtube.com/embed/${parsed.pathname.replace("/", "")}`;
// //     }

// //     if (parsed.hostname.includes("youtube.com")) {
// //       const videoId = parsed.searchParams.get("v");

// //       if (videoId) {
// //         return `https://www.youtube.com/embed/${videoId}`;
// //       }

// //       if (parsed.pathname.startsWith("/shorts/")) {
// //         return `https://www.youtube.com/embed/${parsed.pathname.split("/")[2]}`;
// //       }

// //       if (parsed.pathname.startsWith("/embed/")) {
// //         return url;
// //       }
// //     }
// //   } catch {
// //     return "";
// //   }

// //   return "";
// // };

// // const SocialPreview = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activePost, setActivePost] = useState(0);
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const loadPosts = async () => {
// //       try {
// //         const response = await socialService.getPublished({
// //           limit: 6,
// //         });

// //         const items = Array.isArray(response)
// //           ? response
// //           : Array.isArray(response?.data)
// //             ? response.data
// //             : [];

// //         setPosts(items.slice(0, 6));
// //       } catch (error) {
// //         console.error("Failed to load social posts:", error);
// //         setPosts([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadPosts();
// //   }, []);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setVisible(true);
// //           observer.disconnect();
// //         }
// //       },
// //       {
// //         threshold: 0.12,
// //       }
// //     );

// //     const element = document.querySelector(".social-preview");

// //     if (element) {
// //       observer.observe(element);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   const orderedPosts = useMemo(() => {
// //     return [...posts].sort(
// //       (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
// //     );
// //   }, [posts]);

// //   const featuredPost = orderedPosts[activePost];

// //   const secondaryPosts = orderedPosts.filter(
// //     (_, index) => index !== activePost
// //   );

// //   const renderPreview = (post, featured = false) => {
// //     if (!post) return null;

// //     const platform = post.platform;
// //     const youtubeUrl = getYoutubeEmbedUrl(post.url);

// //     if (platform === "YOUTUBE" && youtubeUrl) {
// //       return (
// //         <div className={`sp-media sp-media-${featured ? "large" : "small"}`}>
// //           <iframe
// //             src={youtubeUrl}
// //             title="SNGA YouTube"
// //             loading="lazy"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //             allowFullScreen
// //           />
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="sp-link-preview">
// //         <div className="sp-link-preview-inner">
// //           <span className="sp-link-platform">
// //             {getPlatformLabel(platform)}
// //           </span>

// //           <span className="sp-link-title">
// //             Follow SNGA
// //           </span>

// //           <span className="sp-link-description">
// //             Discover the latest moments, stories and updates from our school
// //             community.
// //           </span>

// //           <span className="sp-link-arrow">↗</span>
// //         </div>
// //       </div>
// //     );
// //   };

// //   if (!loading && !orderedPosts.length) {
// //     return null;
// //   }

// //   return (
// //     <section className="social-preview">
// //       <div className="sp-container">

// //         {/* INTRO */}
// //         <div className={`sp-intro ${visible ? "sp-visible" : ""}`}>
// //           <div className="sp-intro-top">
// //             <span className="sp-section-number">12</span>

// //             <span className="sp-intro-label">
// //               LIFE AT SHIFAN NOOR GLOBAL ACADEMY
// //             </span>

// //             <span className="sp-intro-location">
// //               VENKULAM · RAMANATHAPURAM
// //             </span>
// //           </div>

// //           <div className="sp-intro-main">
// //             <div>
// //               <p className="sp-kicker">
// //                 SOCIAL WALL
// //               </p>

// //               <h2>
// //                 Stay close to
// //                 <br />
// //                 <em>SNGA.</em>
// //               </h2>
// //             </div>

// //             <div className="sp-intro-copy">
// //               <p>
// //                 From classrooms and competitions to celebrations,
// //                 achievements and everyday school life — discover what is
// //                 happening across the SNGA community.
// //               </p>

// //               <Link to="/social-wall" className="sp-view-all">
// //                 <span>View Social Wall</span>
// //                 <span>↗</span>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>

// //         {/* SOCIAL FEATURE */}
// //         {!loading && featuredPost && (
// //           <div className={`sp-feature ${visible ? "sp-visible" : ""}`}>

// //             <div className="sp-feature-media">
// //               {renderPreview(featuredPost, true)}

// //               <div className="sp-feature-overlay">
// //                 <span className="sp-feature-number">
// //                   {String(activePost + 1).padStart(2, "0")}
// //                 </span>

// //                 <span
// //                   className={`sp-feature-platform ${getPlatformClass(
// //                     featuredPost.platform
// //                   )}`}
// //                 >
// //                   {getPlatformLabel(featuredPost.platform)}
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="sp-feature-content">
// //               <div className="sp-feature-meta">
// //                 <span>SNGA COMMUNITY</span>
// //                 <span>•</span>
// //                 <span>
// //                   {getPlatformLabel(featuredPost.platform).toUpperCase()}
// //                 </span>
// //               </div>

// //               <h3>
// //                 Moments from
// //                 <br />
// //                 <span>school life.</span>
// //               </h3>

// //               <p>
// //                 Follow the moments that make SNGA more than a place to
// //                 learn — a community where students discover, participate
// //                 and grow.
// //               </p>

// //               <a
// //                 href={featuredPost.url}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="sp-primary-link"
// //               >
// //                 <span>
// //                   Open on{" "}
// //                   {getPlatformLabel(featuredPost.platform)}
// //                 </span>

// //                 <span>↗</span>
// //               </a>
// //             </div>
// //           </div>
// //         )}

// //         {/* OTHER POSTS */}
// //         {secondaryPosts.length > 0 && (
// //           <div className={`sp-archive ${visible ? "sp-visible" : ""}`}>
// //             <div className="sp-archive-heading">
// //               <span>MORE FROM SNGA</span>

// //               <span>
// //                 {String(orderedPosts.length).padStart(2, "0")} POSTS
// //               </span>
// //             </div>

// //             <div className="sp-grid">
// //               {secondaryPosts.slice(0, 5).map((post, index) => {
// //                 const actualIndex = orderedPosts.findIndex(
// //                   (item) => item.id === post.id
// //                 );

// //                 return (
// //                   <button
// //                     type="button"
// //                     className={`sp-card ${
// //                       actualIndex === activePost ? "sp-card-active" : ""
// //                     }`}
// //                     key={post.id}
// //                     onClick={() => setActivePost(actualIndex)}
// //                   >
// //                     <div className="sp-card-media">
// //                       {renderPreview(post)}

// //                       <span className="sp-card-number">
// //                         {String(actualIndex + 1).padStart(2, "0")}
// //                       </span>

// //                       <span
// //                         className={`sp-card-platform ${getPlatformClass(
// //                           post.platform
// //                         )}`}
// //                       >
// //                         {getPlatformLabel(post.platform)}
// //                       </span>
// //                     </div>

// //                     <div className="sp-card-footer">
// //                       <span>
// //                         {getPlatformLabel(post.platform)}
// //                       </span>

// //                       <span>View ↗</span>
// //                     </div>
// //                   </button>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         )}

// //         {/* STATEMENT */}
// //         <div className={`sp-statement ${visible ? "sp-visible" : ""}`}>
// //           <div className="sp-statement-number">
// //             13
// //           </div>

// //           <div>
// //             <p className="sp-statement-kicker">
// //               THE SNGA COMMUNITY
// //             </p>

// //             <h3>
// //               Learn.
// //               <br />
// //               Participate.
// //               <br />
// //               <em>Belong.</em>
// //             </h3>
// //           </div>

// //           <p className="sp-statement-copy">
// //             Follow the journey beyond the classroom and see the people,
// //             places and moments that shape life at SNGA.
// //           </p>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default SocialPreview;


// import { useEffect, useMemo, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// import socialService from "../../services/socialService";
// import SocialEmbed from "./SocialEmbed";
// import "./SocialPreview.css";

// const getPlatformLabel = (platform) => {
//   switch (platform) {
//     case "INSTAGRAM":
//       return "Instagram";

//     case "YOUTUBE":
//       return "YouTube";

//     case "FACEBOOK":
//       return "Facebook";

//     default:
//       return "Social";
//   }
// };

// const getPlatformClass = (platform) => {
//   switch (platform) {
//     case "INSTAGRAM":
//       return "sp-instagram";

//     case "YOUTUBE":
//       return "sp-youtube";

//     case "FACEBOOK":
//       return "sp-facebook";

//     default:
//       return "";
//   }
// };

// const SocialPreview = () => {
//   const sectionRef = useRef(null);

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activePost, setActivePost] = useState(0);
//   const [visible, setVisible] = useState(false);

//   /*
//    * ---------------------------------------------------------
//    * LOAD PUBLISHED SOCIAL POSTS
//    * ---------------------------------------------------------
//    *
//    * These are the exact URLs entered from:
//    *
//    * Admin → Social Wall
//    *
//    * Nothing is hardcoded here.
//    */
//   useEffect(() => {
//     let mounted = true;

//     const loadSocialPosts = async () => {
//       try {
//         setLoading(true);

//         const response = await socialService.getPublished({
//           limit: 6,
//         });

//         const items = Array.isArray(response)
//           ? response
//           : Array.isArray(response?.data)
//             ? response.data
//             : [];

//         if (!mounted) return;

//         const publishedPosts = items
//           .filter(
//             (post) =>
//               post &&
//               post.url &&
//               post.isPublished !== false
//           )
//           .sort(
//             (a, b) =>
//               (a.sortOrder ?? 0) -
//               (b.sortOrder ?? 0)
//           )
//           .slice(0, 6);

//         setPosts(publishedPosts);
//       } catch (error) {
//         console.error(
//           "Failed to load social wall:",
//           error
//         );

//         if (mounted) {
//           setPosts([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadSocialPosts();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /*
//    * ---------------------------------------------------------
//    * SECTION REVEAL
//    * ---------------------------------------------------------
//    */

//   useEffect(() => {
//     const element = sectionRef.current;

//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.12,
//       }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   /*
//    * ---------------------------------------------------------
//    * NORMALIZED POSTS
//    * ---------------------------------------------------------
//    */

//   const orderedPosts = useMemo(() => {
//     return [...posts].sort(
//       (a, b) =>
//         (a.sortOrder ?? 0) -
//         (b.sortOrder ?? 0)
//     );
//   }, [posts]);

//   /*
//    * Keep active index safe if posts change.
//    */
//   useEffect(() => {
//     if (!orderedPosts.length) {
//       setActivePost(0);
//       return;
//     }

//     if (activePost >= orderedPosts.length) {
//       setActivePost(0);
//     }
//   }, [orderedPosts.length, activePost]);

//   const featuredPost = orderedPosts[activePost];

//   const secondaryPosts = orderedPosts.filter(
//     (_, index) => index !== activePost
//   );

//   /*
//    * ---------------------------------------------------------
//    * EMPTY STATE
//    * ---------------------------------------------------------
//    *
//    * If admin has not published anything,
//    * don't show an empty section on the homepage.
//    */

//   if (!loading && orderedPosts.length === 0) {
//     return null;
//   }

//   return (
//     <section
//       className="social-preview"
//       ref={sectionRef}
//     >
//       <div className="sp-container">

//         {/* =====================================================
//             INTRO
//         ====================================================== */}

//         <div
//           className={`sp-intro ${
//             visible ? "sp-visible" : ""
//           }`}
//         >
//           <div className="sp-intro-top">
//             <span className="sp-section-number">
//               12
//             </span>

//             <span className="sp-intro-label">
//               LIFE AT SHIFAN NOOR GLOBAL ACADEMY
//             </span>

//             <span className="sp-intro-location">
//               VENKULAM · RAMANATHAPURAM
//             </span>
//           </div>

//           <div className="sp-intro-main">

//             <div>
//               <p className="sp-kicker">
//                 SOCIAL WALL
//               </p>

//               <h2>
//                 Stay close to
//                 <br />
//                 <em>SNGA.</em>
//               </h2>
//             </div>

//             <div className="sp-intro-copy">
//               <p>
//                 Discover the latest moments from
//                 classrooms, competitions, celebrations,
//                 achievements and everyday life across
//                 the SNGA community.
//               </p>

//               <Link
//                 to="/social-wall"
//                 className="sp-view-all"
//               >
//                 <span>
//                   View Social Wall
//                 </span>

//                 <span>
//                   ↗
//                 </span>
//               </Link>
//             </div>

//           </div>
//         </div>

//         {/* =====================================================
//             LOADING
//         ====================================================== */}

//         {loading && (
//           <div className="sp-loading">
//             <span />
//             <span />
//             <span />
//           </div>
//         )}

//         {/* =====================================================
//             FEATURED SOCIAL POST
//         ====================================================== */}

//         {!loading && featuredPost && (
//           <div
//             className={`sp-feature ${
//               visible ? "sp-visible" : ""
//             }`}
//           >

//             {/* MEDIA */}

//             <div className="sp-feature-media">

//               <SocialEmbed
//                 post={featuredPost}
//                 featured
//               />

//               <div className="sp-feature-overlay">

//                 <span className="sp-feature-number">
//                   {String(activePost + 1).padStart(
//                     2,
//                     "0"
//                   )}
//                 </span>

//                 <span
//                   className={`sp-feature-platform ${getPlatformClass(
//                     featuredPost.platform
//                   )}`}
//                 >
//                   {getPlatformLabel(
//                     featuredPost.platform
//                   )}
//                 </span>

//               </div>

//             </div>

//             {/* CONTENT */}

//             <div className="sp-feature-content">

//               <div className="sp-feature-meta">
//                 <span>
//                   SNGA COMMUNITY
//                 </span>

//                 <span>•</span>

//                 <span>
//                   {getPlatformLabel(
//                     featuredPost.platform
//                   ).toUpperCase()}
//                 </span>
//               </div>

//               <h3>
//                 Moments from
//                 <br />
//                 <span>school life.</span>
//               </h3>

//               <p>
//                 Follow the moments that make SNGA
//                 more than a place to learn — a
//                 community where students discover,
//                 participate and grow.
//               </p>

//               <a
//                 href={featuredPost.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="sp-primary-link"
//               >
//                 <span>
//                   Open on{" "}
//                   {getPlatformLabel(
//                     featuredPost.platform
//                   )}
//                 </span>

//                 <span>
//                   ↗
//                 </span>
//               </a>

//             </div>

//           </div>
//         )}

//         {/* =====================================================
//             OTHER SOCIAL POSTS
//         ====================================================== */}

//         {!loading &&
//           secondaryPosts.length > 0 && (
//             <div
//               className={`sp-archive ${
//                 visible ? "sp-visible" : ""
//               }`}
//             >

//               <div className="sp-archive-heading">
//                 <span>
//                   MORE FROM SNGA
//                 </span>

//                 <span>
//                   {String(
//                     orderedPosts.length
//                   ).padStart(2, "0")}{" "}
//                   POSTS
//                 </span>
//               </div>

//               <div className="sp-grid">

//                 {secondaryPosts
//                   .slice(0, 5)
//                   .map((post) => {

//                     const actualIndex =
//                       orderedPosts.findIndex(
//                         (item) =>
//                           item.id === post.id
//                       );

//                     return (
//                       <button
//                         type="button"
//                         className="sp-card"
//                         key={post.id}
//                         onClick={() =>
//                           setActivePost(
//                             actualIndex
//                           )
//                         }
//                         aria-label={`View ${getPlatformLabel(
//                           post.platform
//                         )} post`}
//                       >

//                         <div className="sp-card-media">

//                           <SocialEmbed
//                             post={post}
//                           />

//                           <span className="sp-card-number">
//                             {String(
//                               actualIndex + 1
//                             ).padStart(2, "0")}
//                           </span>

//                           <span
//                             className={`sp-card-platform ${getPlatformClass(
//                               post.platform
//                             )}`}
//                           >
//                             {getPlatformLabel(
//                               post.platform
//                             )}
//                           </span>

//                         </div>

//                         <div className="sp-card-footer">

//                           <span>
//                             {getPlatformLabel(
//                               post.platform
//                             )}
//                           </span>

//                           <span>
//                             View ↗
//                           </span>

//                         </div>

//                       </button>
//                     );
//                   })}

//               </div>
//             </div>
//           )}

//         {/* =====================================================
//             STATEMENT
//         ====================================================== */}

//         <div
//           className={`sp-statement ${
//             visible ? "sp-visible" : ""
//           }`}
//         >

//           <div className="sp-statement-number">
//             13
//           </div>

//           <div>
//             <p className="sp-statement-kicker">
//               THE SNGA COMMUNITY
//             </p>

//             <h3>
//               Learn.
//               <br />
//               Participate.
//               <br />
//               <em>Belong.</em>
//             </h3>
//           </div>

//           <p className="sp-statement-copy">
//             Follow the journey beyond the classroom
//             and discover the people, places and
//             moments that shape life at SNGA.
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default SocialPreview;














import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import socialService from "../../services/socialService";
import SocialEmbed from "./SocialEmbed";
import "./SocialPreview.css";

const getPlatformLabel = (platform) => {
  switch (platform) {
    case "INSTAGRAM":
      return "Instagram";

    case "YOUTUBE":
      return "YouTube";

    case "FACEBOOK":
      return "Facebook";

    default:
      return "Social";
  }
};

const getPlatformClass = (platform) => {
  switch (platform) {
    case "INSTAGRAM":
      return "sp-instagram";

    case "YOUTUBE":
      return "sp-youtube";

    case "FACEBOOK":
      return "sp-facebook";

    default:
      return "";
  }
};

const SocialPreview = () => {
  const sectionRef = useRef(null);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePost, setActivePost] = useState(0);
  const [visible, setVisible] = useState(false);

  /*
   * =========================================================
   * LOAD PUBLISHED SOCIAL POSTS
   * =========================================================
   *
   * Data comes directly from:
   *
   * Admin → Social Wall
   *
   * No social URLs are hardcoded here.
   */

  useEffect(() => {
    let mounted = true;

    const loadSocialPosts = async () => {
      try {
        setLoading(true);

        const response =
          await socialService.getPublished({
            limit: 6,
          });

        const items = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : [];

        if (!mounted) return;

        const publishedPosts = items
          .filter(
            (post) =>
              post &&
              post.url &&
              post.isPublished !== false
          )
          .sort(
            (a, b) =>
              (a.sortOrder ?? 0) -
              (b.sortOrder ?? 0)
          )
          .slice(0, 6);

        setPosts(publishedPosts);
      } catch (error) {
        console.error(
          "Failed to load social wall:",
          error
        );

        if (mounted) {
          setPosts([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadSocialPosts();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * =========================================================
   * REVEAL ANIMATION
   * =========================================================
   */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /*
   * =========================================================
   * ORDER POSTS
   * =========================================================
   */

  const orderedPosts = useMemo(() => {
    return [...posts].sort(
      (a, b) =>
        (a.sortOrder ?? 0) -
        (b.sortOrder ?? 0)
    );
  }, [posts]);

  /*
   * Keep active post valid.
   */

  useEffect(() => {
    if (!orderedPosts.length) {
      setActivePost(0);
      return;
    }

    if (activePost >= orderedPosts.length) {
      setActivePost(0);
    }
  }, [
    orderedPosts.length,
    activePost,
  ]);

  const featuredPost =
    orderedPosts[activePost];

  /*
   * =========================================================
   * SECONDARY POSTS
   * =========================================================
   *
   * The first post is featured.
   * Everything else becomes the marquee.
   */

  const secondaryPosts =
    orderedPosts.filter(
      (_, index) =>
        index !== activePost
    );

  /*
   * Duplicate secondary posts so the marquee
   * can loop continuously.
   */

  const marqueePosts = useMemo(() => {
    if (!secondaryPosts.length) {
      return [];
    }

    return [
      ...secondaryPosts,
      ...secondaryPosts,
    ];
  }, [secondaryPosts]);

  /*
   * =========================================================
   * EMPTY STATE
   * =========================================================
   */

  if (
    !loading &&
    !orderedPosts.length
  ) {
    return null;
  }

  return (
    <section
      className="social-preview"
      ref={sectionRef}
    >
      <div className="sp-container">

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div
          className={`sp-intro ${
            visible
              ? "sp-visible"
              : ""
          }`}
        >
          <div className="sp-intro-top">

            <span className="sp-section-number">
              12
            </span>

            <span className="sp-intro-label">
              LIFE AT SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <span className="sp-intro-location">
              VENKULAM · RAMANATHAPURAM
            </span>

          </div>

          <div className="sp-intro-main">

            <div>

              <p className="sp-kicker">
                SOCIAL WALL
              </p>

              <h2>
                Stay close to
                <br />
                <em>SNGA.</em>
              </h2>

            </div>

            <div className="sp-intro-copy">

              <p>
                Discover the latest moments from
                classrooms, competitions,
                celebrations, achievements and
                everyday life across the SNGA
                community.
              </p>

              <Link
                to="/social-wall"
                className="sp-view-all"
              >
                <span>
                  View Social Wall
                </span>

                <span>
                  ↗
                </span>
              </Link>

            </div>

          </div>
        </div>

        {/* =====================================================
            LOADING
        ====================================================== */}

        {loading && (
          <div className="sp-loading">
            <span />
            <span />
            <span />
          </div>
        )}

        {/* =====================================================
            FEATURED SOCIAL POST
            THIS REMAINS EXACTLY AS THE MAIN FEATURE
        ====================================================== */}

        {!loading &&
          featuredPost && (
            <div
              className={`sp-feature ${
                visible
                  ? "sp-visible"
                  : ""
              }`}
            >

              {/* FEATURE MEDIA */}

              <div className="sp-feature-media">

                <SocialEmbed
                  post={featuredPost}
                  featured
                />

                <div className="sp-feature-overlay">

                  <span className="sp-feature-number">
                    {String(
                      activePost + 1
                    ).padStart(2, "0")}
                  </span>

                  <span
                    className={`sp-feature-platform ${getPlatformClass(
                      featuredPost.platform
                    )}`}
                  >
                    {getPlatformLabel(
                      featuredPost.platform
                    )}
                  </span>

                </div>

              </div>

              {/* FEATURE CONTENT */}

              <div className="sp-feature-content">

                <div className="sp-feature-meta">

                  <span>
                    SNGA COMMUNITY
                  </span>

                  <span>
                    •
                  </span>

                  <span>
                    {getPlatformLabel(
                      featuredPost.platform
                    ).toUpperCase()}
                  </span>

                </div>

                <h3>
                  Moments from
                  <br />
                  <span>
                    school life.
                  </span>
                </h3>

                <p>
                  Follow the moments that make
                  SNGA more than a place to learn
                  — a community where students
                  discover, participate and grow.
                </p>

                <a
                  href={featuredPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-primary-link"
                >
                  <span>
                    Open on{" "}
                    {getPlatformLabel(
                      featuredPost.platform
                    )}
                  </span>

                  <span>
                    ↗
                  </span>
                </a>

              </div>

            </div>
          )}

        {/* =====================================================
            SECONDARY SOCIAL POSTS
            MARQUEE
        ====================================================== */}

        {!loading &&
          secondaryPosts.length > 0 && (
            <div
              className={`sp-archive ${
                visible
                  ? "sp-visible"
                  : ""
              }`}
            >

              {/* SECTION HEADER */}

              <div className="sp-archive-heading">

                <span>
                  MORE FROM SNGA
                </span>

                <span>
                  {String(
                    secondaryPosts.length
                  ).padStart(2, "0")}{" "}
                  POSTS
                </span>

              </div>

              {/* MARQUEE VIEWPORT */}

              <div className="sp-marquee-viewport">

                {/* LEFT FADE */}

                <div className="sp-marquee-fade sp-marquee-fade-left" />

                {/* RIGHT FADE */}

                <div className="sp-marquee-fade sp-marquee-fade-right" />

                {/* MARQUEE TRACK */}

                <div className="sp-marquee-track">

                  {marqueePosts.map(
                    (post, index) => {

                      /*
                       * Because the array is duplicated,
                       * get the original post index.
                       */

                      const originalIndex =
                        orderedPosts.findIndex(
                          (item) =>
                            item.id ===
                            post.id
                        );

                      return (
                        <button
                          type="button"
                          className="sp-card"
                          key={`${post.id}-${index}`}
                          onClick={() =>
                            setActivePost(
                              originalIndex
                            )
                          }
                          aria-label={`View ${getPlatformLabel(
                            post.platform
                          )} post`}
                        >

                          {/* CARD MEDIA */}

                          <div className="sp-card-media">

                            <SocialEmbed
                              post={post}
                            />

                            <span className="sp-card-number">
                              {String(
                                originalIndex + 1
                              ).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <span
                              className={`sp-card-platform ${getPlatformClass(
                                post.platform
                              )}`}
                            >
                              {getPlatformLabel(
                                post.platform
                              )}
                            </span>

                          </div>

                          {/* CARD FOOTER */}

                          <div className="sp-card-footer">

                            <span>
                              {getPlatformLabel(
                                post.platform
                              )}
                            </span>

                            <span>
                              View ↗
                            </span>

                          </div>

                        </button>
                      );
                    }
                  )}

                </div>

              </div>

            </div>
          )}

        {/* =====================================================
            STATEMENT
        ====================================================== */}

        <div
          className={`sp-statement ${
            visible
              ? "sp-visible"
              : ""
          }`}
        >

          <div className="sp-statement-number">
            13
          </div>

          <div>

            <p className="sp-statement-kicker">
              THE SNGA COMMUNITY
            </p>

            <h3>
              Learn.
              <br />
              Participate.
              <br />
              <em>Belong.</em>
            </h3>

          </div>

          <p className="sp-statement-copy">
            Follow the journey beyond the
            classroom and discover the people,
            places and moments that shape life
            at SNGA.
          </p>

        </div>

      </div>
    </section>
  );
};

export default SocialPreview;