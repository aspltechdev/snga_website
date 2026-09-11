import { useEffect, useMemo, useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaPlus,
  FaEdit,
  FaTrash,
  FaGripVertical,
  FaEye,
  FaEyeSlash,
  FaArrowUp,
  FaArrowDown,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

import socialService from "../../services/socialService";
import "./SocialWall.css";


/* =========================================================
   PLATFORM CONFIG
   ========================================================= */

const PLATFORM_CONFIG = {
  INSTAGRAM: {
    label: "Instagram",
    className: "instagram",
    icon: FaInstagram,
  },

  YOUTUBE: {
    label: "YouTube",
    className: "youtube",
    icon: FaYoutube,
  },

  FACEBOOK: {
    label: "Facebook",
    className: "facebook",
    icon: FaFacebookF,
  },
};


/* =========================================================
   EMPTY FORM
   ========================================================= */

const emptyForm = {
  platform: "INSTAGRAM",
  url: "",
  isPublished: true,
  sortOrder: 0,
};


/* =========================================================
   PLATFORM DETECTION
   ========================================================= */

const detectPlatform = (url) => {
  if (!url) return null;

  const value = url.toLowerCase();

  if (
    value.includes("instagram.com") ||
    value.includes("instagr.am")
  ) {
    return "INSTAGRAM";
  }

  if (
    value.includes("youtube.com") ||
    value.includes("youtu.be")
  ) {
    return "YOUTUBE";
  }

  if (
    value.includes("facebook.com") ||
    value.includes("fb.watch")
  ) {
    return "FACEBOOK";
  }

  return null;
};


/* =========================================================
   URL VALIDATION
   ========================================================= */

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};


/* =========================================================
   COMPONENT
   ========================================================= */

const SocialWall = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState(emptyForm);

  const [filter, setFilter] = useState("ALL");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* =======================================================
     LOAD POSTS
     ======================================================= */

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await socialService.getAll();

      const data = Array.isArray(response)
        ? response
        : Array.isArray(response?.data)
        ? response.data
        : [];

      setPosts(data);
    } catch (err) {
      console.error("Failed to load social posts:", err);

      setError(
        err?.response?.data?.message ||
          "Failed to load social wall"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);


  /* =======================================================
     FLASH MESSAGE
     ======================================================= */

  const showSuccess = (message) => {
    setSuccess(message);

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };


  /* =======================================================
     OPEN CREATE FORM
     ======================================================= */

  const openCreate = () => {
    setEditingId(null);

    setForm({
      ...emptyForm,
      sortOrder: posts.length,
    });

    setError("");
    setShowForm(true);
  };


  /* =======================================================
     OPEN EDIT FORM
     ======================================================= */

  const openEdit = (post) => {
    setEditingId(post.id);

    setForm({
      platform: post.platform,
      url: post.url || "",
      isPublished: post.isPublished,
      sortOrder: post.sortOrder ?? 0,
    });

    setError("");
    setShowForm(true);
  };


  /* =======================================================
     CLOSE FORM
     ======================================================= */

  const closeForm = () => {
    if (saving) return;

    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  };


  /* =======================================================
     FORM CHANGE
     ======================================================= */

  const handleUrlChange = (event) => {
    const url = event.target.value;

    setForm((current) => ({
      ...current,
      url,
      ...(detectPlatform(url)
        ? {
            platform: detectPlatform(url),
          }
        : {}),
    }));
  };

  const handlePlatformChange = (event) => {
    setForm((current) => ({
      ...current,
      platform: event.target.value,
    }));
  };

  const handlePublishedChange = (event) => {
    setForm((current) => ({
      ...current,
      isPublished: event.target.checked,
    }));
  };

  const handleSortChange = (event) => {
    setForm((current) => ({
      ...current,
      sortOrder: event.target.value,
    }));
  };


  /* =======================================================
     SAVE
     ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const cleanUrl = form.url.trim();

    if (!cleanUrl) {
      setError("Social media URL is required.");
      return;
    }

    if (!isValidUrl(cleanUrl)) {
      setError("Please enter a valid URL.");
      return;
    }

    const detected = detectPlatform(cleanUrl);

    if (!detected) {
      setError(
        "Please provide an Instagram, YouTube or Facebook URL."
      );
      return;
    }

    if (detected !== form.platform) {
      setError(
        `This URL belongs to ${PLATFORM_CONFIG[detected].label}.`
      );
      return;
    }

    try {
      setSaving(true);

      const payload = {
        platform: form.platform,
        url: cleanUrl,
        isPublished: form.isPublished,
        sortOrder: Number(form.sortOrder) || 0,
      };

      if (editingId) {
        await socialService.update(
          editingId,
          payload
        );

        showSuccess(
          "Social post updated successfully."
        );
      } else {
        await socialService.create(payload);

        showSuccess(
          "Social post added successfully."
        );
      }

      closeForm();

      await loadPosts();
    } catch (err) {
      console.error("Save social post error:", err);

      setError(
        err?.response?.data?.message ||
          "Failed to save social post."
      );
    } finally {
      setSaving(false);
    }
  };


  /* =======================================================
     DELETE
     ======================================================= */

  const handleDelete = async (post) => {
    const confirmed = window.confirm(
      `Delete this ${PLATFORM_CONFIG[post.platform]?.label || "social"} post?`
    );

    if (!confirmed) return;

    try {
      setError("");

      await socialService.remove(post.id);

      showSuccess(
        "Social post deleted successfully."
      );

      await loadPosts();
    } catch (err) {
      console.error(
        "Delete social post error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Failed to delete social post."
      );
    }
  };


  /* =======================================================
     TOGGLE PUBLISH
     ======================================================= */

  const handleTogglePublish = async (post) => {
    try {
      setError("");

      await socialService.togglePublish(
        post.id
      );

      showSuccess(
        post.isPublished
          ? "Social post unpublished."
          : "Social post published."
      );

      await loadPosts();
    } catch (err) {
      console.error(
        "Toggle publish error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Failed to update status."
      );
    }
  };


  /* =======================================================
     MOVE POST
     ======================================================= */

  const movePost = async (index, direction) => {
    const targetIndex =
      direction === "up"
        ? index - 1
        : index + 1;

    if (
      targetIndex < 0 ||
      targetIndex >= posts.length
    ) {
      return;
    }

    const current = posts[index];
    const target = posts[targetIndex];

    const updated = posts.map((post, i) => {
      if (i === index) {
        return {
          ...post,
          sortOrder: target.sortOrder,
        };
      }

      if (i === targetIndex) {
        return {
          ...post,
          sortOrder: current.sortOrder,
        };
      }

      return post;
    });

    setPosts(updated);

    try {
      await socialService.reorder([
        {
          id: current.id,
          sortOrder: target.sortOrder,
        },
        {
          id: target.id,
          sortOrder: current.sortOrder,
        },
      ]);

      showSuccess("Display order updated.");
    } catch (err) {
      console.error(
        "Reorder social posts error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Failed to update display order."
      );

      await loadPosts();
    }
  };


  /* =======================================================
     FILTER
     ======================================================= */

  const filteredPosts = useMemo(() => {
    if (filter === "ALL") {
      return posts;
    }

    return posts.filter(
      (post) => post.platform === filter
    );
  }, [posts, filter]);


  /* =======================================================
     COUNTS
     ======================================================= */

  const counts = useMemo(() => {
    return {
      all: posts.length,

      instagram: posts.filter(
        (post) => post.platform === "INSTAGRAM"
      ).length,

      youtube: posts.filter(
        (post) => post.platform === "YOUTUBE"
      ).length,

      facebook: posts.filter(
        (post) => post.platform === "FACEBOOK"
      ).length,

      published: posts.filter(
        (post) => post.isPublished
      ).length,
    };
  }, [posts]);


  /* =======================================================
     PLATFORM ICON
     ======================================================= */

  const PlatformIcon = ({ platform }) => {
    const config =
      PLATFORM_CONFIG[platform];

    if (!config) return null;

    const Icon = config.icon;

    return (
      <span
        className={`social-platform-icon ${config.className}`}
      >
        <Icon />
      </span>
    );
  };


  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <div className="social-wall-admin">

      {/* ===================================================
          HEADER
          =================================================== */}

      <header className="social-wall-header">

        <div className="social-wall-heading">

          <div className="social-wall-eyebrow">
            <span>CONTENT</span>
            <span>06</span>
          </div>

          <h1>
            Social Wall
          </h1>

          <p>
            Manage the social stories displayed
            across the SNGA website.
          </p>

        </div>

        <button
          type="button"
          className="social-wall-add"
          onClick={openCreate}
        >
          <FaPlus />
          <span>Add Social Post</span>
        </button>

      </header>


      {/* ===================================================
          MESSAGES
          =================================================== */}

      {success && (
        <div className="social-wall-success">
          <span>{success}</span>
        </div>
      )}

      {error && !showForm && (
        <div className="social-wall-error">
          <span>{error}</span>

          <button
            type="button"
            onClick={() => setError("")}
            aria-label="Close error"
          >
            <FaTimes />
          </button>
        </div>
      )}


      {/* ===================================================
          OVERVIEW
          =================================================== */}

      <section className="social-wall-overview">

        <div className="social-overview-item">
          <span className="social-overview-number">
            {String(counts.all).padStart(2, "0")}
          </span>

          <span className="social-overview-label">
            Total Posts
          </span>
        </div>

        <div className="social-overview-item">
          <span className="social-overview-number">
            {String(counts.published).padStart(2, "0")}
          </span>

          <span className="social-overview-label">
            Published
          </span>
        </div>

        <div className="social-overview-item">
          <span className="social-overview-number">
            {String(counts.instagram).padStart(2, "0")}
          </span>

          <span className="social-overview-label">
            Instagram
          </span>
        </div>

        <div className="social-overview-item">
          <span className="social-overview-number">
            {String(counts.youtube).padStart(2, "0")}
          </span>

          <span className="social-overview-label">
            YouTube
          </span>
        </div>

        <div className="social-overview-item">
          <span className="social-overview-number">
            {String(counts.facebook).padStart(2, "0")}
          </span>

          <span className="social-overview-label">
            Facebook
          </span>
        </div>

      </section>


      {/* ===================================================
          FILTER
          =================================================== */}

      <div className="social-wall-toolbar">

        <div className="social-wall-filters">

          <button
            type="button"
            className={
              filter === "ALL"
                ? "active"
                : ""
            }
            onClick={() => setFilter("ALL")}
          >
            All
            <span>{counts.all}</span>
          </button>

          <button
            type="button"
            className={
              filter === "INSTAGRAM"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("INSTAGRAM")
            }
          >
            Instagram
            <span>{counts.instagram}</span>
          </button>

          <button
            type="button"
            className={
              filter === "YOUTUBE"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("YOUTUBE")
            }
          >
            YouTube
            <span>{counts.youtube}</span>
          </button>

          <button
            type="button"
            className={
              filter === "FACEBOOK"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("FACEBOOK")
            }
          >
            Facebook
            <span>{counts.facebook}</span>
          </button>

        </div>

        <span className="social-wall-order-note">
          DISPLAY ORDER
        </span>

      </div>


      {/* ===================================================
          CONTENT
          =================================================== */}

      {loading ? (
        <div className="social-wall-loading">
          <div />
          <span>Loading social wall</span>
        </div>
      ) : filteredPosts.length === 0 ? (

        <div className="social-wall-empty">

          <div className="social-empty-number">
            00
          </div>

          <h2>
            No social posts yet.
          </h2>

          <p>
            Add an Instagram, YouTube or
            Facebook link to begin building
            your social wall.
          </p>

          <button
            type="button"
            onClick={openCreate}
          >
            <FaPlus />
            Add First Post
          </button>

        </div>

      ) : (

        <div className="social-wall-list">

          {filteredPosts.map((post, index) => {

            const config =
              PLATFORM_CONFIG[post.platform];

            return (
              <article
                key={post.id}
                className={`social-post-row ${
                  !post.isPublished
                    ? "unpublished"
                    : ""
                }`}
              >

                {/* ORDER */}

                <div className="social-post-order">

                  <FaGripVertical />

                  <span>
                    {String(
                      post.sortOrder + 1
                    ).padStart(2, "0")}
                  </span>

                </div>


                {/* PLATFORM */}

                <div className="social-post-platform">

                  <PlatformIcon
                    platform={post.platform}
                  />

                  <div>
                    <strong>
                      {config?.label ||
                        post.platform}
                    </strong>

                    <span>
                      {post.isPublished
                        ? "Published"
                        : "Unpublished"}
                    </span>
                  </div>

                </div>


                {/* URL */}

                <div className="social-post-url">

                  <span>
                    SOCIAL URL
                  </span>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    title={post.url}
                  >
                    {post.url}
                    <FaExternalLinkAlt />
                  </a>

                </div>


                {/* STATUS */}

                <div className="social-post-status">

                  <span
                    className={
                      post.isPublished
                        ? "published"
                        : "hidden"
                    }
                  >
                    {post.isPublished
                      ? "LIVE"
                      : "HIDDEN"}
                  </span>

                </div>


                {/* ORDER CONTROLS */}

                <div className="social-post-move">

                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() =>
                      movePost(
                        index,
                        "up"
                      )
                    }
                    aria-label="Move up"
                  >
                    <FaArrowUp />
                  </button>

                  <button
                    type="button"
                    disabled={
                      index ===
                      filteredPosts.length - 1
                    }
                    onClick={() =>
                      movePost(
                        index,
                        "down"
                      )
                    }
                    aria-label="Move down"
                  >
                    <FaArrowDown />
                  </button>

                </div>


                {/* ACTIONS */}

                <div className="social-post-actions">

                  <button
                    type="button"
                    className="social-action"
                    onClick={() =>
                      handleTogglePublish(post)
                    }
                    title={
                      post.isPublished
                        ? "Unpublish"
                        : "Publish"
                    }
                  >
                    {post.isPublished ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                  <button
                    type="button"
                    className="social-action"
                    onClick={() =>
                      openEdit(post)
                    }
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  <button
                    type="button"
                    className="social-action delete"
                    onClick={() =>
                      handleDelete(post)
                    }
                    title="Delete"
                  >
                    <FaTrash />
                  </button>

                </div>

              </article>
            );
          })}

        </div>
      )}


      {/* ===================================================
          FORM DRAWER
          =================================================== */}

      {showForm && (

        <div
          className="social-form-overlay"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeForm();
            }
          }}
        >

          <aside className="social-form-panel">

            <div className="social-form-header">

              <div>
                <span>
                  {editingId
                    ? "EDIT SOCIAL POST"
                    : "NEW SOCIAL POST"}
                </span>

                <h2>
                  {editingId
                    ? "Update social story."
                    : "Add a social story."}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeForm}
                aria-label="Close"
              >
                <FaTimes />
              </button>

            </div>


            {error && (
              <div className="social-form-error">
                {error}
              </div>
            )}


            <form
              className="social-form"
              onSubmit={handleSubmit}
            >

              {/* PLATFORM */}

              <div className="social-field">

                <label htmlFor="platform">
                  Platform
                </label>

                <select
                  id="platform"
                  value={form.platform}
                  onChange={
                    handlePlatformChange
                  }
                >
                  <option value="INSTAGRAM">
                    Instagram
                  </option>

                  <option value="YOUTUBE">
                    YouTube
                  </option>

                  <option value="FACEBOOK">
                    Facebook
                  </option>
                </select>

              </div>


              {/* URL */}

              <div className="social-field">

                <label htmlFor="social-url">
                  Social Media URL
                </label>

                <input
                  id="social-url"
                  type="url"
                  value={form.url}
                  onChange={handleUrlChange}
                  placeholder="https://www.instagram.com/p/..."
                  autoComplete="off"
                />

                <small>
                  Paste the public post, reel,
                  video or Facebook URL.
                </small>

              </div>


              {/* DETECTED PLATFORM */}

              {form.url &&
                detectPlatform(form.url) && (

                  <div className="social-detected">

                    <PlatformIcon
                      platform={detectPlatform(
                        form.url
                      )}
                    />

                    <div>
                      <span>
                        DETECTED PLATFORM
                      </span>

                      <strong>
                        {
                          PLATFORM_CONFIG[
                            detectPlatform(
                              form.url
                            )
                          ]?.label
                        }
                      </strong>
                    </div>

                  </div>
                )}


              {/* ORDER */}

              <div className="social-field">

                <label htmlFor="sort-order">
                  Display Order
                </label>

                <input
                  id="sort-order"
                  type="number"
                  min="0"
                  value={form.sortOrder}
                  onChange={handleSortChange}
                />

                <small>
                  Lower numbers appear first.
                </small>

              </div>


              {/* PUBLISHED */}

              <label className="social-published-toggle">

                <input
                  type="checkbox"
                  checked={form.isPublished}
                  onChange={
                    handlePublishedChange
                  }
                />

                <span className="toggle-track">
                  <span />
                </span>

                <div>
                  <strong>
                    Published
                  </strong>

                  <small>
                    Show this post on the
                    public website.
                  </small>
                </div>

              </label>


              {/* ACTIONS */}

              <div className="social-form-actions">

                <button
                  type="button"
                  className="social-form-cancel"
                  onClick={closeForm}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="social-form-submit"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Post"
                    : "Add Social Post"}
                </button>

              </div>

            </form>

          </aside>

        </div>
      )}

    </div>
  );
};

export default SocialWall;