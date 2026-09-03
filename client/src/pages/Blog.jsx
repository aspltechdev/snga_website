import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import newsService from "../services/news.service";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await newsService.getNews();

        const items = Array.isArray(response)
          ? response
          : response?.data || response?.blogs || response?.news || [];

        setBlogs(items);
      } catch (err) {
        console.error("Failed to load blogs:", err);
        setError("Unable to load articles.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const categories = useMemo(() => {
    const values = blogs
      .map((blog) => blog.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return blogs;
    }

    return blogs.filter(
      (blog) => blog.category === activeCategory
    );
  }, [blogs, activeCategory]);

  const featuredBlog = filteredBlogs[0];
  const remainingBlogs = filteredBlogs.slice(1);

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

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(parsedDate);
  };

  return (
    <main className="blogs-page">

      {/* HERO */}
      <section className="blogs-hero">
        <div className="blogs-container">

          <div className="blogs-hero-content">

            <div className="blogs-eyebrow">
              <span />
              SNGA STORIES
            </div>

            <h1>
              Ideas worth
              <br />
              <em>sharing.</em>
            </h1>

            <p>
              Perspectives, insights and stories from the
              learning community at Shifan Noor Global Academy.
            </p>

          </div>

          <div className="blogs-hero-side">
            <span>LEARN</span>
            <span>THINK</span>
            <span>EXPLORE</span>
            <span>SHARE</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="blogs-intro">
        <div className="blogs-container">

          <div className="blogs-intro-label">
            THE SNGA JOURNAL
          </div>

          <div className="blogs-intro-grid">

            <h2>
              Stories that
              <br />
              extend the <em>classroom.</em>
            </h2>

            <div className="blogs-intro-copy">

              <p>
                Learning doesn't stop when the classroom
                ends. Ideas, experiences and conversations
                can inspire students, parents and the wider
                school community.
              </p>

              <p>
                Explore articles and stories that reflect
                the educational journey, values and
                experiences of the SNGA community.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* BLOG DIRECTORY */}
      <section className="blogs-directory">

        <div className="blogs-container">

          <div className="blogs-directory-header">

            <div>

              <div className="blogs-eyebrow dark">
                LATEST ARTICLES
              </div>

              <h2>
                Read,
                <br />
                <em>explore & discover.</em>
              </h2>

            </div>

            <p>
              Browse the latest articles published by
              Shifan Noor Global Academy.
            </p>

          </div>

          {/* CATEGORY FILTER */}
          {!loading && categories.length > 1 && (
            <div className="blogs-filters">

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
            <div className="blogs-state">
              <span>LOADING ARTICLES</span>
            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="blogs-state blogs-error">
              <span>{error}</span>
            </div>
          )}

          {/* EMPTY */}
          {!loading &&
            !error &&
            filteredBlogs.length === 0 && (
              <div className="blogs-state">

                <span>
                  NO ARTICLES YET
                </span>

                <h3>
                  New stories will appear here.
                </h3>

                <p>
                  Articles can be published from the
                  administration panel.
                </p>

              </div>
            )}

          {/* FEATURED BLOG */}
          {!loading &&
            !error &&
            featuredBlog && (
              <article className="blogs-featured">

                <Link
                  to={`/blogs/${featuredBlog.slug}`}
                  className="blogs-featured-image"
                >

                  {featuredBlog.featuredImage ? (
                    <img
                      src={getImageUrl(
                        featuredBlog.featuredImage
                      )}
                      alt={featuredBlog.title}
                    />
                  ) : (
                    <div className="blogs-image-placeholder">
                      SNGA
                    </div>
                  )}

                  <div className="blogs-featured-number">
                    01
                  </div>

                </Link>

                <div className="blogs-featured-content">

                  <div className="blogs-meta">

                    {featuredBlog.category && (
                      <span>
                        {featuredBlog.category}
                      </span>
                    )}

                    {featuredBlog.publishedAt && (
                      <time>
                        {formatDate(
                          featuredBlog.publishedAt
                        )}
                      </time>
                    )}

                  </div>

                  <h3>
                    {featuredBlog.title}
                  </h3>

                  {featuredBlog.excerpt && (
                    <p>
                      {featuredBlog.excerpt}
                    </p>
                  )}

                  {featuredBlog.authorName && (
                    <div className="blogs-author">
                      By {featuredBlog.authorName}
                    </div>
                  )}

                  <Link
                    to={`/blogs/${featuredBlog.slug}`}
                    className="blogs-read-link"
                  >
                    <span>Read Article</span>
                    <FaArrowRight />
                  </Link>

                </div>

              </article>
            )}

          {/* BLOG GRID */}
          {!loading &&
            !error &&
            remainingBlogs.length > 0 && (
              <div className="blogs-grid">

                {remainingBlogs.map((blog, index) => (
                  <article
                    className="blogs-card"
                    key={blog.id}
                  >

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="blogs-card-image"
                    >

                      {blog.featuredImage ? (
                        <img
                          src={getImageUrl(
                            blog.featuredImage
                          )}
                          alt={blog.title}
                        />
                      ) : (
                        <div className="blogs-image-placeholder">
                          SNGA
                        </div>
                      )}

                      <span>
                        {String(index + 2).padStart(2, "0")}
                      </span>

                    </Link>

                    <div className="blogs-card-content">

                      <div className="blogs-meta">

                        {blog.category && (
                          <span>
                            {blog.category}
                          </span>
                        )}

                        {blog.publishedAt && (
                          <time>
                            {formatDate(
                              blog.publishedAt
                            )}
                          </time>
                        )}

                      </div>

                      <h3>
                        {blog.title}
                      </h3>

                      {blog.excerpt && (
                        <p>
                          {blog.excerpt}
                        </p>
                      )}

                      {blog.authorName && (
                        <div className="blogs-author">
                          By {blog.authorName}
                        </div>
                      )}

                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="blogs-card-link"
                      >
                        Read Article
                        <FaArrowRight />
                      </Link>

                    </div>

                  </article>
                ))}

              </div>
            )}

        </div>

      </section>

      {/* EDITORIAL STATEMENT */}
      <section className="blogs-editorial">

        <div className="blogs-container">

          <div className="blogs-editorial-grid">

            <div className="blogs-editorial-heading">

              <div className="blogs-eyebrow">
                LEARNING NEVER STOPS
              </div>

              <h2>
                Curiosity creates
                <br />
                <em>better questions.</em>
              </h2>

            </div>

            <div className="blogs-editorial-copy">

              <p>
                A strong learning culture encourages students
                to look beyond what they already know and
                develop the confidence to ask questions.
              </p>

              <p>
                Our stories and articles are an extension
                of that culture — creating another space
                for ideas, experiences and perspectives.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NEWS CONNECTION */}
      <section className="blogs-news">

        <div className="blogs-container">

          <div className="blogs-news-grid">

            <div className="blogs-news-content">

              <div className="blogs-eyebrow dark">
                SCHOOL UPDATES
              </div>

              <h2>
                Looking for
                <br />
                what's happening <em>now?</em>
              </h2>

              <p>
                Visit our News & Events section for the
                latest school announcements, activities,
                celebrations and community updates.
              </p>

              <Link
                to="/news"
                className="blogs-link"
              >
                <span>View School News</span>
                <FaArrowRight />
              </Link>

            </div>

            <div className="blogs-news-mark">

              <span>
                NEWS
              </span>

              <strong>
                & EVENTS
              </strong>

              <small>
                STAY CONNECTED
              </small>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="blogs-gallery">

        <div className="blogs-container">

          <div className="blogs-gallery-grid">

            <div>

              <div className="blogs-eyebrow dark">
                STORIES IN PICTURES
              </div>

              <h2>
                Some moments
                <br />
                don't need <em>words.</em>
              </h2>

            </div>

            <div className="blogs-gallery-copy">

              <p>
                Explore the people, activities and
                experiences that make school life
                memorable.
              </p>

              <Link
                to="/gallery"
                className="blogs-link"
              >
                <span>View Gallery</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="blogs-cta">

        <div className="blogs-container">

          <div className="blogs-cta-content">

            <div className="blogs-eyebrow dark">
              EXPLORE SNGA
            </div>

            <h2>
              There's always
              <br />
              more to <em>discover.</em>
            </h2>

            <p>
              Explore academics, campus life and the
              experiences that shape the SNGA journey.
            </p>

            <div className="blogs-actions">

              <Link
                to="/academics"
                className="blogs-button"
              >
                <span>Explore Academics</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/about"
                className="blogs-secondary"
              >
                About SNGA
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Blogs;