import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTimes } from "react-icons/fa";

import galleryService from "../services/gallery.service";
import "./Gallery.css";

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAlbums = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await galleryService.getGallery();

        const items = Array.isArray(response)
          ? response
          : response?.data ||
            response?.albums ||
            response?.gallery ||
            [];

        setAlbums(items);
      } catch (err) {
        console.error("Failed to load gallery:", err);
        setError("Unable to load the gallery.");
      } finally {
        setLoading(false);
      }
    };

    loadAlbums();
  }, []);

  const categories = useMemo(() => {
    const values = albums
      .map((album) => album.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [albums]);

  const filteredAlbums = useMemo(() => {
    if (activeCategory === "All") {
      return albums;
    }

    return albums.filter(
      (album) => album.category === activeCategory
    );
  }, [albums, activeCategory]);

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

  const getAlbumImages = (album) => {
    if (!album?.images) return [];

    return Array.isArray(album.images)
      ? album.images
      : [];
  };

  const openAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedImage(null);
  };

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-container">

          <div className="gallery-hero-content">

            <div className="gallery-eyebrow">
              <span />
              GALLERY
            </div>

            <h1>
              Life at SNGA,
              <br />
              <em>captured.</em>
            </h1>

            <p>
              Explore the people, places, activities and
              moments that make the Shifan Noor Global
              Academy experience memorable.
            </p>

          </div>

          <div className="gallery-hero-side">
            <span>LEARN</span>
            <span>PLAY</span>
            <span>CREATE</span>
            <span>CELEBRATE</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="gallery-intro">
        <div className="gallery-container">

          <div className="gallery-intro-label">
            MOMENTS FROM SNGA
          </div>

          <div className="gallery-intro-grid">

            <h2>
              Every moment
              <br />
              tells a <em>story.</em>
            </h2>

            <div className="gallery-intro-copy">

              <p>
                School life is filled with experiences that
                happen both inside and outside the classroom.
              </p>

              <p>
                From learning and sports to celebrations,
                activities and everyday campus life, the
                gallery brings these moments together.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* GALLERY DIRECTORY */}
      <section className="gallery-directory">

        <div className="gallery-container">

          <div className="gallery-directory-header">

            <div>

              <div className="gallery-eyebrow dark">
                EXPLORE THE GALLERY
              </div>

              <h2>
                See SNGA
                <br />
                <em>in moments.</em>
              </h2>

            </div>

            <p>
              Browse albums from across school life,
              activities and events.
            </p>

          </div>

          {/* FILTERS */}
          {!loading && categories.length > 1 && (
            <div className="gallery-filters">

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
            <div className="gallery-state">
              <span>LOADING GALLERY</span>
            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="gallery-state gallery-error">
              <span>{error}</span>
            </div>
          )}

          {/* EMPTY */}
          {!loading &&
            !error &&
            filteredAlbums.length === 0 && (
              <div className="gallery-state">

                <span>
                  NO ALBUMS YET
                </span>

                <h3>
                  New moments will appear here.
                </h3>

                <p>
                  Gallery albums can be published from
                  the administration panel.
                </p>

              </div>
            )}

          {/* ALBUM GRID */}
          {!loading &&
            !error &&
            filteredAlbums.length > 0 && (
              <div className="gallery-album-grid">

                {filteredAlbums.map((album, index) => {

                  const images = getAlbumImages(album);

                  return (
                    <article
                      className="gallery-album"
                      key={album.id}
                    >

                      <button
                        type="button"
                        className="gallery-album-image"
                        onClick={() =>
                          openAlbum(album)
                        }
                      >

                        {album.coverImage ? (
                          <img
                            src={getImageUrl(
                              album.coverImage
                            )}
                            alt={album.name}
                          />
                        ) : images.length > 0 ? (
                          <img
                            src={getImageUrl(
                              images[0].imageUrl
                            )}
                            alt={album.name}
                          />
                        ) : (
                          <div className="gallery-image-placeholder">
                            SNGA
                          </div>
                        )}

                        <span className="gallery-album-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="gallery-album-count">
                          {images.length}{" "}
                          {images.length === 1
                            ? "IMAGE"
                            : "IMAGES"}
                        </span>

                      </button>

                      <div className="gallery-album-content">

                        <div className="gallery-album-meta">

                          {album.category && (
                            <span>
                              {album.category}
                            </span>
                          )}

                        </div>

                        <h3>
                          {album.name}
                        </h3>

                        {album.description && (
                          <p>
                            {album.description}
                          </p>
                        )}

                        <button
                          type="button"
                          className="gallery-view-link"
                          onClick={() =>
                            openAlbum(album)
                          }
                        >
                          <span>View Album</span>
                          <FaArrowRight />
                        </button>

                      </div>

                    </article>
                  );
                })}

              </div>
            )}

        </div>

      </section>

      {/* CAMPUS CONNECTION */}
      <section className="gallery-campus">

        <div className="gallery-container">

          <div className="gallery-campus-grid">

            <div className="gallery-campus-heading">

              <div className="gallery-eyebrow">
                THE CAMPUS
              </div>

              <h2>
                A place to
                <br />
                <em>learn and grow.</em>
              </h2>

            </div>

            <div className="gallery-campus-copy">

              <p>
                The SNGA campus provides a calm and spacious
                environment where students can learn, participate
                and experience school life in different ways.
              </p>

              <Link
                to="/infrastructure"
                className="gallery-link light"
              >
                <span>Explore Infrastructure</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* SCHOOL LIFE */}
      <section className="gallery-life">

        <div className="gallery-container">

          <div className="gallery-life-header">

            <div>

              <div className="gallery-eyebrow dark">
                SCHOOL LIFE
              </div>

              <h2>
                Beyond the
                <br />
                <em>classroom.</em>
              </h2>

            </div>

            <p>
              Learning continues through sports, co-curricular
              activities, celebrations and shared experiences.
            </p>

          </div>

          <div className="gallery-life-list">

            <div className="gallery-life-item">
              <span>01</span>
              <h3>Academics</h3>
              <p>
                Everyday classroom experiences and
                opportunities to discover new ideas.
              </p>
            </div>

            <div className="gallery-life-item">
              <span>02</span>
              <h3>Sports</h3>
              <p>
                Participation, teamwork and achievement
                through sporting activities.
              </p>
            </div>

            <div className="gallery-life-item">
              <span>03</span>
              <h3>Activities</h3>
              <p>
                Creative, cultural and co-curricular
                experiences that encourage participation.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* NEWS */}
      <section className="gallery-news">

        <div className="gallery-container">

          <div className="gallery-news-grid">

            <div className="gallery-news-content">

              <div className="gallery-eyebrow dark">
                SCHOOL STORIES
              </div>

              <h2>
                Stay connected
                <br />
                with <em>SNGA.</em>
              </h2>

              <p>
                Discover the latest school news, events,
                achievements and community updates.
              </p>

              <Link
                to="/news"
                className="gallery-link"
              >
                <span>View News & Events</span>
                <FaArrowRight />
              </Link>

            </div>

            <div className="gallery-news-mark">

              <span>
                STORIES
              </span>

              <strong>
                & MOMENTS
              </strong>

              <small>
                SHIFAN NOOR GLOBAL ACADEMY
              </small>

            </div>

          </div>

        </div>

      </section>

      {/* LIGHTBOX / ALBUM */}
      {selectedAlbum && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedAlbum.name}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeAlbum();
            }
          }}
        >

          <div className="gallery-modal-inner">

            <div className="gallery-modal-header">

              <div>

                <span>
                  {selectedAlbum.category || "GALLERY"}
                </span>

                <h2>
                  {selectedAlbum.name}
                </h2>

              </div>

              <button
                type="button"
                className="gallery-modal-close"
                onClick={closeAlbum}
                aria-label="Close album"
              >
                <FaTimes />
              </button>

            </div>

            {getAlbumImages(selectedAlbum).length > 0 ? (
              <div className="gallery-modal-grid">

                {getAlbumImages(selectedAlbum).map(
                  (image) => (
                    <button
                      type="button"
                      className="gallery-modal-image"
                      key={image.id}
                      onClick={() =>
                        openImage(image)
                      }
                    >

                      <img
                        src={getImageUrl(
                          image.imageUrl
                        )}
                        alt={
                          image.caption ||
                          selectedAlbum.name
                        }
                      />

                      {image.caption && (
                        <span>
                          {image.caption}
                        </span>
                      )}

                    </button>
                  )
                )}

              </div>
            ) : (
              <div className="gallery-modal-empty">
                No images available in this album.
              </div>
            )}

          </div>

        </div>
      )}

      {/* SINGLE IMAGE VIEW */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeImage();
            }
          }}
        >

          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeImage}
            aria-label="Close image"
          >
            <FaTimes />
          </button>

          <img
            src={getImageUrl(selectedImage.imageUrl)}
            alt={selectedImage.caption || "Gallery image"}
          />

          {selectedImage.caption && (
            <div className="gallery-lightbox-caption">
              {selectedImage.caption}
            </div>
          )}

        </div>
      )}

      {/* CTA */}
      <section className="gallery-cta">

        <div className="gallery-container">

          <div className="gallery-cta-content">

            <div className="gallery-eyebrow dark">
              EXPLORE MORE
            </div>

            <h2>
              There's always
              <br />
              another <em>moment.</em>
            </h2>

            <p>
              Explore the experiences, achievements and
              learning opportunities that make SNGA unique.
            </p>

            <div className="gallery-actions">

              <Link
                to="/achievements"
                className="gallery-button"
              >
                <span>View Achievements</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/news"
                className="gallery-secondary"
              >
                View News
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Gallery;