
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
} from "react-icons/fa";
import galleryService from "../../services/gallery.service";
import "./GalleryPreview.css";
import statementImage from "../../assets/sport.jpg";

const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const fallbackImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=90",
];

const getImageUrl = (image, index = 0) => {
  if (!image) {
    return fallbackImages[index % fallbackImages.length];
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  return `${API_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

const GalleryPreview = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sectionRef = useRef(null);

  /* =====================================================
     FETCH GALLERY
  ===================================================== */

  useEffect(() => {
    let mounted = true;

    const fetchGallery = async () => {
      try {
        const response =
          await galleryService.getPublishedAlbums();

        const data = response?.data || response || [];

        const published = Array.isArray(data)
          ? data.filter(
              (album) => album.isPublished !== false
            )
          : [];

        if (mounted) {
          setAlbums(published.slice(0, 3));
        }
      } catch (error) {
        console.error(
          "Failed to load gallery:",
          error
        );

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

  /* =====================================================
     REVEAL ANIMATION
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      ".ga-reveal, .ga-image-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ga-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, [albums, loading]);

  /* =====================================================
     HELPERS
  ===================================================== */

  const getAlbumImage = (album, index) =>
    getImageUrl(
      album?.coverImage ||
        album?.image ||
        album?.featuredImage,
      index
    );

  const getAlbumImages = (album) =>
    Array.isArray(album?.images)
      ? album.images
      : [];

  /* =====================================================
     LIGHTBOX
  ===================================================== */

  const openLightbox = (album) => {
    const images = getAlbumImages(album);

    if (!images.length) return;

    setCurrentAlbum(album);
    setCurrentImages(images);
    setCurrentImageIndex(0);
    setLightboxOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentAlbum(null);
    setCurrentImages([]);
    setCurrentImageIndex(0);

    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (previous) =>
        (previous + 1) % currentImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (previous) =>
        previous === 0
          ? currentImages.length - 1
          : previous - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleDownload = (imageUrl) => {
    if (!imageUrl) return;

    const url = getImageUrl(imageUrl);

    const link = document.createElement("a");

    link.href = url;
    link.download = `SNGA-${
      currentAlbum?.name || "gallery"
    }.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* =====================================================
     KEYBOARD NAVIGATION
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!lightboxOpen) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [lightboxOpen, currentImages]);

  const currentImage =
    currentImages[currentImageIndex];

  return (
    <section
      className="gallery-preview"
      ref={sectionRef}
    >

      {/* =====================================================
          OPENING
      ===================================================== */}

      <section className="ga-opening">
        <div className="ga-container">

          <div className="ga-opening-top ga-reveal">

            <span className="ga-section-number">
              09
            </span>

            <div className="ga-opening-meta">
              <span>VISUAL ARCHIVE</span>
              <span>
                SHIFAN NOOR GLOBAL ACADEMY
              </span>
            </div>

            <span className="ga-opening-location">
              VENKULAM · RAMANATHAPURAM
            </span>

          </div>


          <div className="ga-opening-grid">

            <div className="ga-opening-label ga-reveal">
              <span className="ga-rule" />

              <span>
                LIFE · PEOPLE · PLACE
              </span>
            </div>


            <div className="ga-opening-main ga-reveal">

              <p className="ga-kicker">
                THE SNGA VISUAL ARCHIVE
              </p>

              <h2>
                Life,
                <br />
                <em>unfiltered.</em>
              </h2>

              <p className="ga-opening-description">
                A collection of classrooms,
                celebrations, friendships and everyday
                moments that tell the story of life at
                SNGA.
              </p>

              <Link
                to="/gallery"
                className="ga-text-link"
              >
                <span>Explore the archive</span>
                <span>↗</span>
              </Link>

            </div>


            <div className="ga-opening-aside ga-reveal">

              <strong>
                {String(
                  albums.length
                ).padStart(2, "0")}
              </strong>

              <span>COLLECTIONS</span>

              <div>
                <span>LEARN</span>
                <span>CREATE</span>
                <span>CELEBRATE</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ARCHIVE
      ===================================================== */}

      <section className="ga-archive">

        <div className="ga-container">

          {loading ? (

            <div className="ga-loading">

              <span className="ga-loading-line" />

              <span>
                Loading the archive...
              </span>

            </div>

          ) : albums.length > 0 ? (

            <div className="ga-albums">

              {albums.map((album, index) => {

                const albumId =
                  album.id || album._id;

                const images =
                  getAlbumImages(album);

                const imageCount =
                  images.length;

                return (
                  <article
                    key={albumId}
                    className={`ga-album ga-reveal ga-album-${index + 1}`}
                  >

                    {/* IMAGE */}

                    <button
                      type="button"
                      className="ga-album-image"
                      onClick={() =>
                        openLightbox(album)
                      }
                      aria-label={`Open ${
                        album.name ||
                        "gallery album"
                      }`}
                    >

                      <img
                        src={getAlbumImage(
                          album,
                          index
                        )}
                        alt={
                          album.name ||
                          "SNGA gallery"
                        }
                        loading={
                          index === 0
                            ? "eager"
                            : "lazy"
                        }
                        onError={(event) => {
                          event.currentTarget.onerror =
                            null;

                          event.currentTarget.src =
                            fallbackImages[
                              index %
                                fallbackImages.length
                            ];
                        }}
                      />

                      <span className="ga-album-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="ga-album-open">
                        OPEN
                        <span>↗</span>
                      </span>

                    </button>


                    {/* CONTENT */}

                    <div className="ga-album-content">

                      <div className="ga-album-meta">

                        <span>
                          {album.category ||
                            "SNGA LIFE"}
                        </span>

                        <span className="ga-meta-line">
                          /
                        </span>

                        <span>
                          {String(
                            imageCount
                          ).padStart(2, "0")}{" "}
                          PHOTOS
                        </span>

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
                        className="ga-view-album"
                        onClick={() =>
                          openLightbox(album)
                        }
                      >
                        <span>
                          View collection
                        </span>

                        <span>↗</span>
                      </button>

                    </div>

                  </article>
                );
              })}

            </div>

          ) : (

            <div className="ga-empty ga-reveal">

              <span className="ga-empty-number">
                01
              </span>

              <div>

                <span>
                  THE VISUAL ARCHIVE
                </span>

                <h3>
                  Moments are
                  <br />
                  coming <em>soon.</em>
                </h3>

                <p>
                  School memories and campus
                  moments will appear here.
                </p>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <section
        className="ga-statement"
        style={{
          backgroundImage: `url(${statementImage})`,
        }}
      >

        <div className="ga-container">

          <div className="ga-statement-grid">

            <span className="ga-statement-number">
              10
            </span>

            <div className="ga-statement-main">

              <span>
                THE MEMORY OF A SCHOOL
              </span>

              <h3>
                A school is made
                <br />
                of moments.
                <br />
                <em>Not just lessons.</em>
              </h3>

            </div>

            <p>
              The photographs we keep become part
              of the story students carry with them
              long after the school day ends.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ga-footer">

        <div className="ga-container">

          <div className="ga-footer-inner">

            <div className="ga-footer-copy ga-reveal">

              <span>
                FROM THE ARCHIVE
              </span>

              <h3>
                More moments.
                <br />
                <em>More memories.</em>
              </h3>

            </div>


            <div className="ga-footer-action ga-reveal">

              <p>
                Continue exploring the people,
                places and experiences that shape
                everyday life at SNGA.
              </p>

              <Link
                to="/gallery"
                className="ga-footer-link"
              >
                <span>
                  View all albums
                </span>

                <span>↗</span>
              </Link>

            </div>

          </div>


          <div className="ga-footer-bottom">

            <span>
              SHIFAN NOOR GLOBAL ACADEMY
            </span>

            <span>
              VISUAL ARCHIVE · SNGA
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {lightboxOpen &&
        currentImages.length > 0 && (

          <div
            className="ga-lightbox"
            onClick={closeLightbox}
          >

            <div
              className="ga-lightbox-inner"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* HEADER */}

              <div className="ga-lightbox-header">

                <div className="ga-lightbox-title">

                  <span>
                    {currentAlbum?.name}
                  </span>

                  <small>
                    {String(
                      currentImageIndex + 1
                    ).padStart(2, "0")}{" "}
                    /{" "}
                    {String(
                      currentImages.length
                    ).padStart(2, "0")}
                  </small>

                </div>


                <div className="ga-lightbox-controls">

                  <button
                    type="button"
                    onClick={() =>
                      handleDownload(
                        currentImage?.imageUrl
                      )
                    }
                    aria-label="Download image"
                    className="ga-control-button"
                  >
                    <FaDownload />
                  </button>


                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close gallery"
                    className="ga-control-button"
                  >
                    <FaTimes />
                  </button>

                </div>

              </div>


              {/* IMAGE */}

              <div className="ga-lightbox-body">

                <button
                  type="button"
                  className="ga-lightbox-nav ga-lightbox-prev"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>


                <div className="ga-lightbox-image-wrap">

                  <img
                    src={getImageUrl(
                      currentImage?.imageUrl
                    )}
                    alt={
                      currentImage?.caption ||
                      currentAlbum?.name ||
                      "Gallery image"
                    }
                    className="ga-lightbox-image"
                  />

                  {currentImage?.caption && (
                    <div className="ga-lightbox-caption">
                      {currentImage.caption}
                    </div>
                  )}

                </div>


                <button
                  type="button"
                  className="ga-lightbox-nav ga-lightbox-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>

              </div>


              {/* THUMBNAILS */}

              {currentImages.length > 1 && (

                <div className="ga-lightbox-thumbnails">

                  {currentImages.map(
                    (image, index) => (

                      <button
                        type="button"
                        key={
                          image.id || index
                        }
                        className={`ga-thumbnail ${
                          index ===
                          currentImageIndex
                            ? "ga-thumbnail-active"
                            : ""
                        }`}
                        onClick={() =>
                          goToImage(index)
                        }
                      >

                        <img
                          src={getImageUrl(
                            image.imageUrl
                          )}
                          alt={
                            image.caption ||
                            currentAlbum?.name ||
                            "Gallery"
                          }
                          loading="lazy"
                        />

                      </button>

                    )
                  )}

                </div>

              )}

            </div>

          </div>
        )}

    </section>
  );
};

export default GalleryPreview;
