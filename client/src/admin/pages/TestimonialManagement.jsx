import { useEffect, useMemo, useRef, useState } from "react";
import {
  Plus,
  Search,
  RefreshCw,
  Pencil,
  Trash2,
  X,
  Star,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  Eye,
  EyeOff,
  User,
  MessageSquare,
} from "lucide-react";

import api from "../../services/axios";
import "./TestimonialManagement.css";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

const UPLOAD_BASE_URL =
  API_BASE_URL.replace(/\/api\/?$/, "");

const TestimonialManagement = () => {
  // ==========================================
  // STATE
  // ==========================================

  const [testimonials, setTestimonials] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [deletingId, setDeletingId] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [showForm, setShowForm] =
    useState(false);

  const [editingTestimonial, setEditingTestimonial] =
    useState(null);

  const [previewTestimonial, setPreviewTestimonial] =
    useState(null);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const fileInputRef =
    useRef(null);

  // ==========================================
  // FORM
  // ==========================================

  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
    image: "",
    rating: 5,
    isPublished: true,
  });

  // ==========================================
  // IMAGE PREVIEW
  // ==========================================

  const [imagePreview, setImagePreview] =
    useState("");

  // ==========================================
  // IMAGE URL HELPER
  // ==========================================

  const getImageUrl = (image) => {
    if (!image) {
      return "";
    }

    if (
      image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("data:")
    ) {
      return image;
    }

    if (image.startsWith("/")) {
      return `${UPLOAD_BASE_URL}${image}`;
    }

    return `${UPLOAD_BASE_URL}/${image}`;
  };

  // ==========================================
  // LOAD TESTIMONIALS
  // ==========================================

  const loadTestimonials = async (
    showRefresh = false
  ) => {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response =
        await api.get(
          "/testimonials"
        );

      const data =
        response.data?.data;

      setTestimonials(
        Array.isArray(data)
          ? data
          : []
      );
    } catch (err) {
      console.error(
        "Load testimonials error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load testimonials"
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    loadTestimonials();
  }, []);

  // ==========================================
  // FILTER
  // ==========================================

  const filteredTestimonials =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      if (!query) {
        return testimonials;
      }

      return testimonials.filter(
        (testimonial) =>
          testimonial.name
            ?.toLowerCase()
            .includes(query) ||
          testimonial.role
            ?.toLowerCase()
            .includes(query) ||
          testimonial.message
            ?.toLowerCase()
            .includes(query)
      );
    }, [
      testimonials,
      search,
    ]);

  // ==========================================
  // RESET FORM
  // ==========================================

  const resetForm = () => {
    setForm({
      name: "",
      role: "",
      message: "",
      image: "",
      rating: 5,
      isPublished: true,
    });

    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value =
        "";
    }
  };

  // ==========================================
  // OPEN CREATE
  // ==========================================

  const openCreate = () => {
    setEditingTestimonial(null);

    resetForm();

    setError("");
    setSuccess("");

    setShowForm(true);
  };

  // ==========================================
  // OPEN EDIT
  // ==========================================

  const openEdit = (
    testimonial
  ) => {
    setEditingTestimonial(
      testimonial
    );

    setForm({
      name:
        testimonial.name || "",

      role:
        testimonial.role || "",

      message:
        testimonial.message || "",

      image:
        testimonial.image || "",

      rating:
        testimonial.rating || 5,

      isPublished:
        testimonial.isPublished !==
        false,
    });

    setImagePreview(
      testimonial.image
        ? getImageUrl(
            testimonial.image
          )
        : ""
    );

    setError("");
    setSuccess("");

    setShowForm(true);
  };

  // ==========================================
  // CLOSE FORM
  // ==========================================

  const closeForm = () => {
    if (saving || uploading) {
      return;
    }

    setShowForm(false);

    setEditingTestimonial(
      null
    );

    resetForm();

    setError("");
  };

  // ==========================================
  // FORM CHANGE
  // ==========================================

  const handleChange = (
    e
  ) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm(
      (previous) => ({
        ...previous,

        [name]:
          type === "checkbox"
            ? checked
            : value,
      })
    );

    setError("");
  };

  // ==========================================
  // RATING
  // ==========================================

  const handleRating = (
    rating
  ) => {
    setForm(
      (previous) => ({
        ...previous,
        rating,
      })
    );
  };

  // ==========================================
  // UPLOAD IMAGE
  // ==========================================

  const handleImageUpload = async (
    e
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) {
      return;
    }

    // ----------------------------------------
    // Validate type
    // ----------------------------------------

    if (
      !file.type.startsWith(
        "image/"
      )
    ) {
      setError(
        "Please select a valid image file."
      );

      e.target.value = "";

      return;
    }

    // ----------------------------------------
    // Validate size
    // ----------------------------------------

    const maxSize =
      5 * 1024 * 1024;

    if (file.size > maxSize) {
      setError(
        "Image must be smaller than 5MB."
      );

      e.target.value = "";

      return;
    }

    // ----------------------------------------
    // Local preview
    // ----------------------------------------

    const localPreview =
      URL.createObjectURL(
        file
      );

    setImagePreview(
      localPreview
    );

    setUploading(true);
    setError("");

    try {
      const formData =
        new FormData();

      formData.append(
        "image",
        file
      );

      /*
       * Your existing upload endpoint.
       *
       * If your upload controller uses
       * another field name, change "image"
       * here.
       */

      const response =
        await api.post(
          "/upload/image",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      console.log(
        "UPLOAD RESPONSE:",
        response.data
      );

      const uploadedImage =
        response.data?.data
          ?.url ||
        response.data?.data
          ?.image ||
        response.data?.url ||
        response.data?.image ||
        response.data?.data;

      if (
        typeof uploadedImage !==
        "string"
      ) {
        throw new Error(
          "Upload response did not contain an image URL"
        );
      }

      setForm(
        (previous) => ({
          ...previous,
          image:
            uploadedImage,
        })
      );

      setImagePreview(
        getImageUrl(
          uploadedImage
        )
      );

      setSuccess(
        "Image uploaded successfully"
      );
    } catch (err) {
      console.error(
        "Image upload error:",
        err
      );

      setImagePreview("");

      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to upload image"
      );

      setForm(
        (previous) => ({
          ...previous,
          image: "",
        })
      );
    } finally {
      setUploading(false);

      URL.revokeObjectURL(
        localPreview
      );
    }
  };

  // ==========================================
  // REMOVE IMAGE
  // ==========================================

  const removeImage = () => {
    setForm(
      (previous) => ({
        ...previous,
        image: "",
      })
    );

    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value =
        "";
    }
  };

  // ==========================================
  // CREATE / UPDATE
  // ==========================================

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    // ----------------------------------------
    // Validation
    // ----------------------------------------

    if (!form.name.trim()) {
      setError(
        "Name is required."
      );

      return;
    }

    if (
      !form.message.trim()
    ) {
      setError(
        "Message is required."
      );

      return;
    }

    if (uploading) {
      setError(
        "Please wait for the image upload to finish."
      );

      return;
    }

    try {
      setSaving(true);

      setError("");
      setSuccess("");

      const payload = {
        name:
          form.name.trim(),

        role:
          form.role.trim() ||
          null,

        message:
          form.message.trim(),

        image:
          form.image.trim() ||
          null,

        rating:
          Number(form.rating),

        isPublished:
          Boolean(
            form.isPublished
          ),
      };

      let response;

      // ----------------------------------------
      // UPDATE
      // ----------------------------------------

      if (editingTestimonial) {
        response =
          await api.put(
            `/testimonials/${editingTestimonial.id}`,
            payload
          );
      }

      // ----------------------------------------
      // CREATE
      // ----------------------------------------

      else {
        response =
          await api.post(
            "/testimonials",
            payload
          );
      }

      const testimonial =
        response.data?.data;

      if (testimonial) {
        if (
          editingTestimonial
        ) {
          setTestimonials(
            (previous) =>
              previous.map(
                (item) =>
                  item.id ===
                  editingTestimonial.id
                    ? testimonial
                    : item
              )
          );
        } else {
          setTestimonials(
            (previous) => [
              testimonial,
              ...previous,
            ]
          );
        }
      }

      setSuccess(
        editingTestimonial
          ? "Testimonial updated successfully."
          : "Testimonial created successfully."
      );

      setShowForm(false);

      setEditingTestimonial(
        null
      );

      resetForm();
    } catch (err) {
      console.error(
        "Save testimonial error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to save testimonial"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // TOGGLE PUBLISHED
  // ==========================================

  const togglePublished =
    async (testimonial) => {
      try {
        setError("");
        setSuccess("");

        const response =
          await api.put(
            `/testimonials/${testimonial.id}`,
            {
              isPublished:
                !testimonial.isPublished,
            }
          );

        const updated =
          response.data?.data;

        if (updated) {
          setTestimonials(
            (previous) =>
              previous.map(
                (item) =>
                  item.id ===
                  testimonial.id
                    ? updated
                    : item
              )
          );
        }

        setSuccess(
          testimonial.isPublished
            ? "Testimonial unpublished."
            : "Testimonial published."
        );
      } catch (err) {
        console.error(
          "Toggle published error:",
          err
        );

        setError(
          err.response?.data?.message ||
            "Failed to update publish status"
        );
      }
    };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (
    testimonial
  ) => {
    const confirmed =
      window.confirm(
        `Delete testimonial from ${testimonial.name}?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(
        testimonial.id
      );

      setError("");
      setSuccess("");

      await api.delete(
        `/testimonials/${testimonial.id}`
      );

      setTestimonials(
        (previous) =>
          previous.filter(
            (item) =>
              item.id !==
              testimonial.id
          )
      );

      setSuccess(
        "Testimonial deleted successfully."
      );
    } catch (err) {
      console.error(
        "Delete testimonial error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete testimonial"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // STARS
  // ==========================================

  const renderStars = (
    rating = 0,
    interactive = false
  ) => {
    return (
      <div
        className={
          interactive
            ? "testimonial-rating testimonial-rating-input"
            : "testimonial-rating"
        }
      >
        {[1, 2, 3, 4, 5].map(
          (star) => (
            <button
              key={star}
              type={
                interactive
                  ? "button"
                  : "button"
              }
              disabled={
                !interactive
              }
              onClick={() =>
                interactive &&
                handleRating(
                  star
                )
              }
              className={
                star <= rating
                  ? "active"
                  : ""
              }
              aria-label={`Rate ${star} stars`}
            >
              <Star
                size={
                  interactive
                    ? 21
                    : 14
                }
                fill={
                  star <= rating
                    ? "currentColor"
                    : "none"
                }
              />
            </button>
          )
        )}
      </div>
    );
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="testimonial-loading">
        <RefreshCw
          size={21}
          className="testimonial-spin"
        />

        <span>
          Loading testimonials...
        </span>
      </div>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="testimonial-management">

      {/* ====================================== */}
      {/* HEADER */}
      {/* ====================================== */}

      <div className="testimonial-page-header">

        <div>
          <h1>
            Testimonials
          </h1>

          <p>
            Manage customer and parent
            testimonials displayed on the
            website.
          </p>
        </div>

        <div className="testimonial-header-actions">

          <button
            type="button"
            className="testimonial-refresh-button"
            onClick={() =>
              loadTestimonials(true)
            }
            disabled={refreshing}
          >
            <RefreshCw
              size={16}
              className={
                refreshing
                  ? "testimonial-spin"
                  : ""
              }
            />

            Refresh
          </button>

          <button
            type="button"
            className="testimonial-add-button"
            onClick={openCreate}
          >
            <Plus size={17} />

            Add Testimonial
          </button>

        </div>

      </div>

      {/* ====================================== */}
      {/* ALERTS */}
      {/* ====================================== */}

      {success && (
        <div className="testimonial-success">
          <CheckCircle2
            size={16}
          />

          {success}

          <button
            type="button"
            onClick={() =>
              setSuccess("")
            }
          >
            <X size={15} />
          </button>
        </div>
      )}

      {error && !showForm && (
        <div className="testimonial-error">
          {error}

          <button
            type="button"
            onClick={() =>
              setError("")
            }
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* ====================================== */}
      {/* STATS */}
      {/* ====================================== */}

      <div className="testimonial-stats">

        <div className="testimonial-stat-card">
          <span>
            Total
          </span>

          <strong>
            {testimonials.length}
          </strong>
        </div>

        <div className="testimonial-stat-card">
          <span>
            Published
          </span>

          <strong>
            {
              testimonials.filter(
                (item) =>
                  item.isPublished
              ).length
            }
          </strong>
        </div>

        <div className="testimonial-stat-card">
          <span>
            Hidden
          </span>

          <strong>
            {
              testimonials.filter(
                (item) =>
                  !item.isPublished
              ).length
            }
          </strong>
        </div>

        <div className="testimonial-stat-card">
          <span>
            With Rating
          </span>

          <strong>
            {
              testimonials.filter(
                (item) =>
                  item.rating
              ).length
            }
          </strong>
        </div>

      </div>

      {/* ====================================== */}
      {/* TOOLBAR */}
      {/* ====================================== */}

      <div className="testimonial-toolbar">

        <div className="testimonial-search">

          <Search size={17} />

          <input
            type="text"
            placeholder="Search testimonials..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          {search && (
            <button
              type="button"
              onClick={() =>
                setSearch("")
              }
            >
              <X size={15} />
            </button>
          )}

        </div>

        <span className="testimonial-result-count">
          {filteredTestimonials.length}{" "}
          result
          {filteredTestimonials.length !==
          1
            ? "s"
            : ""}
        </span>

      </div>

      {/* ====================================== */}
      {/* EMPTY */}
      {/* ====================================== */}

      {filteredTestimonials.length ===
      0 ? (
        <div className="testimonial-empty">

          <div className="testimonial-empty-icon">
            <MessageSquare
              size={30}
            />
          </div>

          <h2>
            No Testimonials
          </h2>

          <p>
            {search
              ? "No testimonials match your search."
              : "Create your first testimonial to display it on the website."}
          </p>

          {!search && (
            <button
              type="button"
              onClick={
                openCreate
              }
              className="testimonial-add-button"
            >
              <Plus size={16} />

              Add Testimonial
            </button>
          )}

        </div>
      ) : (
        /* ==================================== */
        /* GRID */
        /* ==================================== */

        <div className="testimonial-grid">

          {filteredTestimonials.map(
            (testimonial) => (
              <div
                className="testimonial-card"
                key={
                  testimonial.id
                }
              >

                {/* CARD TOP */}

                <div className="testimonial-card-top">

                  <div className="testimonial-person">

                    <div className="testimonial-avatar">

                      {testimonial.image ? (
                        <img
                          src={getImageUrl(
                            testimonial.image
                          )}
                          alt={
                            testimonial.name
                          }
                          onError={(
                            e
                          ) => {
                            e.currentTarget.style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <User
                          size={20}
                        />
                      )}

                    </div>

                    <div className="testimonial-person-info">

                      <strong>
                        {
                          testimonial.name
                        }
                      </strong>

                      <span>
                        {
                          testimonial.role ||
                          "No role"
                        }
                      </span>

                    </div>

                  </div>

                  <span
                    className={`testimonial-published-badge ${
                      testimonial.isPublished
                        ? "published"
                        : "hidden"
                    }`}
                  >
                    {testimonial.isPublished
                      ? "Published"
                      : "Hidden"}
                  </span>

                </div>

                {/* RATING */}

                {testimonial.rating && (
                  <div className="testimonial-card-rating">
                    {renderStars(
                      testimonial.rating
                    )}
                  </div>
                )}

                {/* MESSAGE */}

                <div className="testimonial-card-message">

                  <span className="testimonial-quote">
                    “
                  </span>

                  <p>
                    {
                      testimonial.message
                    }
                  </p>

                </div>

                {/* DATE */}

                <div className="testimonial-card-date">
                  {testimonial.createdAt
                    ? new Date(
                        testimonial.createdAt
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "-"}
                </div>

                {/* ACTIONS */}

                <div className="testimonial-card-actions">

                  <button
                    type="button"
                    className="testimonial-action view"
                    onClick={() =>
                      setPreviewTestimonial(
                        testimonial
                      )
                    }
                  >
                    <Eye
                      size={15}
                    />

                    View
                  </button>

                  <button
                    type="button"
                    className="testimonial-action edit"
                    onClick={() =>
                      openEdit(
                        testimonial
                      )
                    }
                  >
                    <Pencil
                      size={15}
                    />

                    Edit
                  </button>

                  <button
                    type="button"
                    className="testimonial-action publish"
                    onClick={() =>
                      togglePublished(
                        testimonial
                      )
                    }
                  >
                    {testimonial.isPublished ? (
                      <EyeOff
                        size={15}
                      />
                    ) : (
                      <Eye
                        size={15}
                      />
                    )}

                    {testimonial.isPublished
                      ? "Hide"
                      : "Publish"}
                  </button>

                  <button
                    type="button"
                    className="testimonial-action delete"
                    onClick={() =>
                      handleDelete(
                        testimonial
                      )
                    }
                    disabled={
                      deletingId ===
                      testimonial.id
                    }
                  >
                    <Trash2
                      size={15}
                    />

                    {deletingId ===
                    testimonial.id
                      ? "Deleting..."
                      : "Delete"}
                  </button>

                </div>

              </div>
            )
          )}

        </div>
      )}

      {/* ====================================== */}
      {/* CREATE / EDIT MODAL */}
      {/* ====================================== */}

      {showForm && (
        <div
          className="testimonial-modal-overlay"
          onMouseDown={(e) => {
            if (
              e.target ===
              e.currentTarget
            ) {
              closeForm();
            }
          }}
        >

          <div className="testimonial-modal">

            {/* HEADER */}

            <div className="testimonial-modal-header">

              <div>
                <span>
                  {editingTestimonial
                    ? "Edit Testimonial"
                    : "New Testimonial"}
                </span>

                <h2>
                  {editingTestimonial
                    ? "Update testimonial"
                    : "Add a testimonial"}
                </h2>
              </div>

              <button
                type="button"
                className="testimonial-modal-close"
                onClick={
                  closeForm
                }
              >
                <X size={19} />
              </button>

            </div>

            {/* FORM */}

            <form
              onSubmit={
                handleSubmit
              }
            >

              <div className="testimonial-modal-body">

                {error && (
                  <div className="testimonial-form-error">
                    {error}
                  </div>
                )}

                <div className="testimonial-form-grid">

                  {/* NAME */}

                  <div className="testimonial-field">

                    <label>
                      Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={
                        form.name
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Customer / Parent name"
                    />

                  </div>

                  {/* ROLE */}

                  <div className="testimonial-field">

                    <label>
                      Role
                    </label>

                    <input
                      type="text"
                      name="role"
                      value={
                        form.role
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Parent, Student, Alumni..."
                    />

                  </div>

                  {/* MESSAGE */}

                  <div className="testimonial-field testimonial-field-full">

                    <label>
                      Testimonial *
                    </label>

                    <textarea
                      name="message"
                      value={
                        form.message
                      }
                      onChange={
                        handleChange
                      }
                      rows={5}
                      placeholder="Write the testimonial message..."
                    />

                  </div>

                  {/* IMAGE */}

                  <div className="testimonial-field testimonial-field-full">

                    <label>
                      Profile Image
                    </label>

                    <div className="testimonial-upload-area">

                      {imagePreview ? (
                        <div className="testimonial-image-preview">

                          <img
                            src={
                              imagePreview
                            }
                            alt="Preview"
                            onError={() =>
                              setImagePreview(
                                ""
                              )
                            }
                          />

                          <div className="testimonial-image-preview-overlay">

                            <button
                              type="button"
                              onClick={
                                removeImage
                              }
                            >
                              <Trash2
                                size={15}
                              />

                              Remove
                            </button>

                          </div>

                        </div>
                      ) : (
                        <button
                          type="button"
                          className="testimonial-upload-box"
                          onClick={() =>
                            fileInputRef.current?.click()
                          }
                          disabled={
                            uploading
                          }
                        >
                          {uploading ? (
                            <>
                              <RefreshCw
                                size={22}
                                className="testimonial-spin"
                              />

                              <span>
                                Uploading...
                              </span>
                            </>
                          ) : (
                            <>
                              <Upload
                                size={22}
                              />

                              <span>
                                Upload Image
                              </span>

                              <small>
                                JPG, PNG, WEBP ·
                                Max 5MB
                              </small>
                            </>
                          )}
                        </button>
                      )}

                      <input
                        ref={
                          fileInputRef
                        }
                        type="file"
                        accept="image/*"
                        onChange={
                          handleImageUpload
                        }
                        hidden
                      />

                    </div>

                    {form.image && (
                      <small className="testimonial-image-path">
                        {form.image}
                      </small>
                    )}

                  </div>

                  {/* RATING */}

                  <div className="testimonial-field">

                    <label>
                      Rating
                    </label>

                    <div className="testimonial-rating-picker">

                      {renderStars(
                        Number(
                          form.rating
                        ),
                        true
                      )}

                      <span>
                        {
                          form.rating
                        }{" "}
                        / 5
                      </span>

                    </div>

                  </div>

                  {/* PUBLISHED */}

                  <div className="testimonial-field">

                    <label>
                      Visibility
                    </label>

                    <label className="testimonial-switch">

                      <input
                        type="checkbox"
                        name="isPublished"
                        checked={
                          form.isPublished
                        }
                        onChange={
                          handleChange
                        }
                      />

                      <span className="testimonial-switch-track">
                        <span />
                      </span>

                      <span>
                        {form.isPublished
                          ? "Published"
                          : "Hidden"}
                      </span>

                    </label>

                  </div>

                </div>

              </div>

              {/* FOOTER */}

              <div className="testimonial-modal-footer">

                <button
                  type="button"
                  className="testimonial-cancel-button"
                  onClick={
                    closeForm
                  }
                  disabled={
                    saving ||
                    uploading
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="testimonial-save-button"
                  disabled={
                    saving ||
                    uploading
                  }
                >
                  {saving ? (
                    <>
                      <RefreshCw
                        size={16}
                        className="testimonial-spin"
                      />

                      Saving...
                    </>
                  ) : (
                    <>
                      <CheckCircle2
                        size={16}
                      />

                      {editingTestimonial
                        ? "Update Testimonial"
                        : "Create Testimonial"}
                    </>
                  )}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

      {/* ====================================== */}
      {/* VIEW MODAL */}
      {/* ====================================== */}

      {previewTestimonial && (
        <div
          className="testimonial-modal-overlay"
          onMouseDown={(e) => {
            if (
              e.target ===
              e.currentTarget
            ) {
              setPreviewTestimonial(
                null
              );
            }
          }}
        >

          <div className="testimonial-preview-modal">

            <button
              type="button"
              className="testimonial-preview-close"
              onClick={() =>
                setPreviewTestimonial(
                  null
                )
              }
            >
              <X size={19} />
            </button>

            <div className="testimonial-preview-image">

              {previewTestimonial.image ? (
                <img
                  src={getImageUrl(
                    previewTestimonial.image
                  )}
                  alt={
                    previewTestimonial.name
                  }
                />
              ) : (
                <User
                  size={34}
                />
              )}

            </div>

            <h2>
              {
                previewTestimonial.name
              }
            </h2>

            <span className="testimonial-preview-role">
              {
                previewTestimonial.role ||
                "No role"
              }
            </span>

            {previewTestimonial.rating && (
              <div className="testimonial-preview-rating">
                {renderStars(
                  previewTestimonial.rating
                )}
              </div>
            )}

            <div className="testimonial-preview-message">
              <span>
                “
              </span>

              <p>
                {
                  previewTestimonial.message
                }
              </p>
            </div>

            <div
              className={`testimonial-preview-status ${
                previewTestimonial.isPublished
                  ? "published"
                  : "hidden"
              }`}
            >
              {previewTestimonial.isPublished
                ? "Published on website"
                : "Hidden from website"}
            </div>

            <div className="testimonial-preview-actions">

              <button
                type="button"
                onClick={() => {
                  setPreviewTestimonial(
                    null
                  );

                  openEdit(
                    previewTestimonial
                  );
                }}
                className="testimonial-save-button"
              >
                <Pencil
                  size={15}
                />

                Edit Testimonial
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default TestimonialManagement;