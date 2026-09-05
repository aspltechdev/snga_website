import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import galleryService from "../../services/gallery.service";
import "./GalleryPreview.css";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const fallbackImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=90",
];

const getImageUrl = (image, index = 0) => {
  if (!image) {
    return fallbackImages[index % fallbackImages.length];
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const GalleryPreview = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchGallery = async () => {
      try {
        const response = await galleryService.getAll();

        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter((album) => album.isPublished !== false)
          : [];

        if (mounted) {
          setAlbums(published.slice(0, 4));
        }
      } catch (error) {
        console.error("Failed to load gallery:", error);

        if (mounted) {
          setAlbums([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchGallery();

    return () => {
      mounted = false;
    };
  }, []);

  const getAlbumImage = (album, index) =>
    getImageUrl(
      album?.coverImage ||
        album?.image ||
        album?.featuredImage,
      index
    );

  return (
    <section className="gallery-preview">

      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="gallery-header">
        <div className="gallery-container">

          <div className="gallery-header-line">
            <span>SNGA / VISUAL ARCHIVE</span>
            <span>07</span>
          </div>

          <div className="gallery-header-content">

            <div className="gallery-header-title">
              <p>THE MOMENTS</p>

              <h2>
                School life,
                <br />
                <span>unfiltered.</span>
              </h2>
            </div>

            <div className="gallery-header-description">
              <p>
                A collection of classrooms, celebrations,
                friendships and everyday moments that tell
                the story of life at Shifan Noor Global Academy.
              </p>

              <Link
                to="/gallery"
                className="gallery-header-link"
              >
                <span>Open visual archive</span>
                <b>↗</b>
              </Link>
            </div>

          </div>

        </div>
      </header>

      {/* ==========================================
          VISUAL ARCHIVE
      ========================================== */}

      <div className="gallery-visual">

        <div className="gallery-container">

          {loading ? (

            <div className="gallery-loading">

              <div className="gallery-loading-large" />

              <div className="gallery-loading-small">
                <span />
                <span />
              </div>

            </div>

          ) : albums.length > 0 ? (

            <div className="gallery-composition">

              {/* =====================================
                  LARGE FEATURE
              ===================================== */}

              <Link
                to={`/gallery/${albums[0].slug || albums[0].id}`}
                className="gallery-main"
              >

                <div className="gallery-main-image">

                  <img
                    src={getAlbumImage(albums[0], 0)}
                    alt={
                      albums[0].name ||
                      "SNGA school life"
                    }
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        fallbackImages[0];
                    }}
                  />

                  <div className="gallery-main-overlay">

                    <div className="gallery-main-top">
                      <span>01</span>

                      <span>
                        {albums[0].category ||
                          "FEATURED"}
                      </span>
                    </div>

                    <div className="gallery-main-bottom">

                      <span>
                        VIEW COLLECTION
                      </span>

                      <span className="gallery-main-arrow">
                        ↗
                      </span>

                    </div>

                  </div>

                </div>

                <div className="gallery-main-caption">

                  <span>
                    FEATURED MOMENTS
                  </span>

                  <h3>
                    {albums[0].name}
                  </h3>

                  {albums[0].description && (
                    <p>
                      {albums[0].description}
                    </p>
                  )}

                </div>

              </Link>

              {/* =====================================
                  SECONDARY STORIES
              ===================================== */}

              <div className="gallery-secondary">

                {albums.slice(1, 4).map(
                  (album, index) => (

                    <Link
                      key={album.id}
                      to={`/gallery/${
                        album.slug || album.id
                      }`}
                      className="gallery-secondary-item"
                    >

                      <div className="gallery-secondary-image">

                        <img
                          src={getAlbumImage(
                            album,
                            index + 1
                          )}
                          alt={
                            album.name ||
                            "SNGA gallery"
                          }
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.onerror =
                              null;

                            event.currentTarget.src =
                              fallbackImages[
                                (index + 1) %
                                  fallbackImages.length
                              ];
                          }}
                        />

                        <span>
                          {String(index + 2).padStart(
                            2,
                            "0"
                          )}
                        </span>

                      </div>

                      <div className="gallery-secondary-content">

                        <div>

                          <small>
                            {album.category ||
                              "SNGA LIFE"}
                          </small>

                          <h3>
                            {album.name}
                          </h3>

                        </div>

                        <span className="gallery-secondary-arrow">
                          ↗
                        </span>

                      </div>

                    </Link>

                  )
                )}

              </div>

            </div>

          ) : (

            <div className="gallery-empty">

              <span>07</span>

              <div>

                <small>
                  VISUAL ARCHIVE
                </small>

                <h3>
                  Moments
                  <br />
                  <em>coming soon.</em>
                </h3>

                <p>
                  School memories and campus moments
                  will appear here.
                </p>

              </div>

            </div>

          )}

          {/* ==========================================
              ARCHIVE FOOTER
          ========================================== */}

          {!loading && albums.length > 0 && (

            <div className="gallery-archive-footer">

              <div className="gallery-archive-copy">

                <span>
                  FROM THE SNGA ARCHIVE
                </span>

                <strong>
                  More moments. More memories.
                </strong>

              </div>

              <Link
                to="/gallery"
                className="gallery-archive-link"
              >
                See everything
                <span>→</span>
              </Link>

            </div>

          )}

        </div>

      </div>

      {/* ==========================================
          PHILOSOPHY
      ========================================== */}

      <section className="gallery-philosophy">

        <div className="gallery-container">

          <div className="gallery-philosophy-layout">

            <span className="gallery-philosophy-number">
              08
            </span>

            <div>

              <span className="gallery-philosophy-label">
                BEYOND THE CLASSROOM
              </span>

              <h3>
                The memories
                <br />
                <span>matter too.</span>
              </h3>

            </div>

            <p>
              Education is more than lessons and
              examinations. It is friendships, discovery,
              confidence, celebration and the experiences
              children carry with them.
            </p>

          </div>

        </div>

      </section>

      {/* ==========================================
          FINAL CTA
      ========================================== */}

      <section className="gallery-cta-section">

        <div className="gallery-container">

          <div className="gallery-cta-inner">

            <div>

              <span>
                EXPERIENCE SNGA
              </span>

              <h3>
                See the
                <br />
                <em>difference.</em>
              </h3>

            </div>

            <Link
              to="/gallery"
              className="gallery-cta-button"
            >
              Explore gallery
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </section>
  );
};

export default GalleryPreview;