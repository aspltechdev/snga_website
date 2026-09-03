import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import newsService from "../services/news.service";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState("");

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

  const categories = useMemo(() => {
    const values = news
      .map((item) => item.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [news]);

  const filteredNews = useMemo(() => {
    if (activeCategory === "All") {
      return news;
    }

    return news.filter(
      (item) => item.category === activeCategory
    );
  }, [news, activeCategory]);

  const featuredNews = filteredNews[0];
  const remainingNews = filteredNews.slice(1);

  const getImageUrl = (image) => {
    if (!image) return "";

    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
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

  return (
    <main className="news-page">

      {/* HERO */}
      <section className="news-hero">
        <div className="news-container">

          <div className="news-hero-content">

            <div className="news-eyebrow">
              <span />
              NEWS & EVENTS
            </div>

            <h1>
              Life at SNGA,
              <br />
              <em>in motion.</em>
            </h1>

            <p>
              Discover the latest stories, events, achievements
              and moments from the Shifan Noor Global Academy
              community.
            </p>

          </div>

          <div className="news-hero-side">
            <span>LEARN</span>
            <span>PARTICIPATE</span>
            <span>ACHIEVE</span>
            <span>CELEBRATE</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="news-intro">
        <div className="news-container">

          <div className="news-intro-label">
            SCHOOL LIFE
          </div>

          <div className="news-intro-grid">

            <h2>
              Every day brings
              <br />
              something <em>new.</em>
            </h2>

            <div className="news-intro-copy">

              <p>
                School life is made up of learning, activities,
                achievements, celebrations and the everyday
                experiences that students share together.
              </p>

              <p>
                Follow the latest updates from SNGA and stay
                connected with what's happening across our
                school community.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* NEWS DIRECTORY */}
      <section className="news-directory">

        <div className="news-container">

          <div className="news-directory-header">

            <div>

              <div className="news-eyebrow dark">
                LATEST UPDATES
              </div>

              <h2>
                What's happening
                <br />
                <em>at SNGA.</em>
              </h2>

            </div>

            <p>
              Explore the latest school news, events,
              announcements and community stories.
            </p>

          </div>

          {/* CATEGORY FILTER */}
          {!loading && categories.length > 1 && (
            <div className="news-filters">

              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </div>
          )}

          {/* LOADING */}
          {loading && (
            <div className="news-state">
              <span>LOADING STORIES</span>
            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="news-state news-error">
              <span>{error}</span>
            </div>
          )}

          {/* EMPTY */}
          {!loading &&
            !error &&
            filteredNews.length === 0 && (
              <div className="news-state">

                <span>
                  NO STORIES YET
                </span>

                <h3>
                  New updates will appear here.
                </h3>

                <p>
                  School news and events can be published
                  from the administration panel.
                </p>

              </div>
            )}

          {/* FEATURED */}
          {!loading &&
            !error &&
            featuredNews && (
              <article className="news-featured">

                <Link
                  to={`/news/${featuredNews.slug}`}
                  className="news-featured-image"
                >

                  {featuredNews.featuredImage ? (
                    <img
                      src={getImageUrl(
                        featuredNews.featuredImage
                      )}
                      alt={featuredNews.title}
                    />
                  ) : (
                    <div className="news-image-placeholder">
                      SNGA
                    </div>
                  )}

                  <div className="news-featured-index">
                    01
                  </div>

                </Link>

                <div className="news-featured-content">

                  <div className="news-meta">

                    {featuredNews.category && (
                      <span>
                        {featuredNews.category}
                      </span>
                    )}

                    {featuredNews.publishedAt && (
                      <time>
                        {formatDate(
                          featuredNews.publishedAt
                        )}
                      </time>
                    )}

                  </div>

                  <h3>
                    {featuredNews.title}
                  </h3>

                  {featuredNews.excerpt && (
                    <p>
                      {featuredNews.excerpt}
                    </p>
                  )}

                  <Link
                    to={`/news/${featuredNews.slug}`}
                    className="news-read-link"
                  >
                    <span>Read Story</span>
                    <FaArrowRight />
                  </Link>

                </div>

              </article>
            )}

          {/* NEWS GRID */}
          {!loading &&
            !error &&
            remainingNews.length > 0 && (
              <div className="news-grid">

                {remainingNews.map((item, index) => (
                  <article
                    className="news-card"
                    key={item.id}
                  >

                    <Link
                      to={`/news/${item.slug}`}
                      className="news-card-image"
                    >

                      {item.featuredImage ? (
                        <img
                          src={getImageUrl(
                            item.featuredImage
                          )}
                          alt={item.title}
                        />
                      ) : (
                        <div className="news-image-placeholder">
                          SNGA
                        </div>
                      )}

                      <span>
                        {String(index + 2).padStart(2, "0")}
                      </span>

                    </Link>

                    <div className="news-card-content">

                      <div className="news-meta">

                        {item.category && (
                          <span>
                            {item.category}
                          </span>
                        )}

                        {item.publishedAt && (
                          <time>
                            {formatDate(
                              item.publishedAt
                            )}
                          </time>
                        )}

                      </div>

                      <h3>
                        {item.title}
                      </h3>

                      {item.excerpt && (
                        <p>
                          {item.excerpt}
                        </p>
                      )}

                      <Link
                        to={`/news/${item.slug}`}
                        className="news-card-link"
                      >
                        Read Story
                        <FaArrowRight />
                      </Link>

                    </div>

                  </article>
                ))}

              </div>
            )}

        </div>

      </section>

      {/* COMMUNITY */}
      <section className="news-community">

        <div className="news-container">

          <div className="news-community-grid">

            <div className="news-community-heading">

              <div className="news-eyebrow">
                THE SNGA COMMUNITY
              </div>

              <h2>
                More than
                <br />
                <em>school news.</em>
              </h2>

            </div>

            <div className="news-community-copy">

              <p>
                The stories of a school are found in its
                classrooms, activities, competitions,
                celebrations and the achievements of
                its students.
              </p>

              <p>
                Our news section brings these moments
                together so families and the wider
                community can stay connected with
                life at SNGA.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="news-achievements">

        <div className="news-container">

          <div className="news-achievements-content">

            <div className="news-eyebrow dark">
              STUDENT ACHIEVEMENTS
            </div>

            <h2>
              Celebrate every
              <br />
              <em>milestone.</em>
            </h2>

            <p>
              From academic accomplishments to sports
              and other achievements, every milestone
              represents effort, growth and determination.
            </p>

            <Link
              to="/achievements"
              className="news-link"
            >
              <span>View Achievements</span>
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="news-gallery">

        <div className="news-container">

          <div className="news-gallery-grid">

            <div className="news-gallery-heading">

              <div className="news-eyebrow dark">
                MOMENTS
              </div>

              <h2>
                See school life
                <br />
                <em>in pictures.</em>
              </h2>

            </div>

            <div className="news-gallery-copy">

              <p>
                Explore the people, activities and
                experiences that make everyday life
                at SNGA memorable.
              </p>

              <Link
                to="/gallery"
                className="news-link"
              >
                <span>View Gallery</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="news-cta">

        <div className="news-container">

          <div className="news-cta-content">

            <div className="news-eyebrow dark">
              STAY CONNECTED
            </div>

            <h2>
              Keep up with
              <br />
              <em>SNGA.</em>
            </h2>

            <p>
              Explore our latest stories and discover
              what's happening across the school community.
            </p>

            <div className="news-actions">

              <Link
                to="/gallery"
                className="news-button"
              >
                <span>Explore Gallery</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="news-secondary"
              >
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