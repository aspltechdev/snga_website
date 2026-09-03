import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Power,
  RefreshCw,
  Trophy,
  Upload,
  X,
  CalendarDays,
} from "lucide-react";

import api from "../../services/axios";
import "./AchievementManagement.css";

const emptyForm = {
  title: "",
  description: "",
  studentName: "",
  category: "",
  image: "",
  achievementDate: "",
  isPublished: true,
};

const AchievementManagement = () => {
  // ==========================================
  // STATE
  // ==========================================

  const [achievements, setAchievements] =
    useState([]);

  const [form, setForm] =
    useState(emptyForm);

  const [showForm, setShowForm] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [deletingId, setDeletingId] =
    useState(null);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  // ==========================================
  // SERVER URL
  // ==========================================

  const getServerUrl = () => {
    const apiUrl =
      import.meta.env.VITE_API_URL ||
      "http://localhost:5000/api";

    return apiUrl.replace(
      /\/api\/?$/,
      ""
    );
  };

  // ==========================================
  // IMAGE URL
  // ==========================================

  const getImageUrl = (image) => {
    if (!image) {
      return "";
    }

    const value =
      String(image).trim();

    if (
      value.startsWith("http://") ||
      value.startsWith("https://")
    ) {
      return value;
    }

    if (
      value.startsWith("data:image/")
    ) {
      return value;
    }

    const serverUrl =
      getServerUrl();

    if (
      value.startsWith("/uploads/")
    ) {
      return `${serverUrl}${value}`;
    }

    if (
      value.startsWith("uploads/")
    ) {
      return `${serverUrl}/${value}`;
    }

    return `${serverUrl}/uploads/${value}`;
  };

  // ==========================================
  // LOAD ACHIEVEMENTS
  // ==========================================

  const loadAchievements = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await api.get(
          "/achievements"
        );

      console.log(
        "ACHIEVEMENTS:",
        response.data
      );

      const data =
        response.data?.data;

      setAchievements(
        Array.isArray(data)
          ? data
          : []
      );
    } catch (err) {
      console.error(
        "Load achievements error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load achievements"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    loadAchievements();
  }, []);

  // ==========================================
  // ADD
  // ==========================================

  const handleAdd = () => {
    setEditingId(null);

    setForm({
      ...emptyForm,
    });

    setError("");
    setSuccess("");

    setShowForm(true);
  };

  // ==========================================
  // EDIT
  // ==========================================

  const handleEdit = (
    achievement
  ) => {
    let formattedDate = "";

    if (
      achievement.achievementDate
    ) {
      formattedDate =
        new Date(
          achievement.achievementDate
        )
          .toISOString()
          .split("T")[0];
    }

    setEditingId(
      achievement.id
    );

    setForm({
      title:
        achievement.title || "",

      description:
        achievement.description ||
        "",

      studentName:
        achievement.studentName ||
        "",

      category:
        achievement.category ||
        "",

      image:
        achievement.image || "",

      achievementDate:
        formattedDate,

      isPublished:
        achievement.isPublished ??
        true,
    });

    setError("");
    setSuccess("");

    setShowForm(true);
  };

  // ==========================================
  // CLOSE FORM
  // ==========================================

  const handleClose = () => {
    setShowForm(false);

    setEditingId(null);

    setForm({
      ...emptyForm,
    });

    setError("");
  };

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm((previous) => ({
      ...previous,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    setError("");
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

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (
      !allowedTypes.includes(
        file.type
      )
    ) {
      setError(
        "Only JPG, PNG and WEBP images are allowed"
      );

      e.target.value = "";

      return;
    }

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      setError(
        "Image size must be less than 5 MB"
      );

      e.target.value = "";

      return;
    }

    try {
      setUploading(true);
      setError("");
      setSuccess("");

      const formData =
        new FormData();

      formData.append(
        "image",
        file
      );

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
        "ACHIEVEMENT IMAGE UPLOAD:",
        response.data
      );

      const imageUrl =
        response.data?.data?.url;

      if (!imageUrl) {
        throw new Error(
          "No image URL returned from upload"
        );
      }

      setForm((previous) => ({
        ...previous,
        image: imageUrl,
      }));

      setSuccess(
        "Image uploaded successfully"
      );
    } catch (err) {
      console.error(
        "Achievement image upload error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to upload image"
      );
    } finally {
      setUploading(false);

      e.target.value = "";
    }
  };

  // ==========================================
  // SAVE
  // ==========================================

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!form.title.trim()) {
      setError(
        "Achievement title is required"
      );

      return;
    }

    try {
      setSaving(true);

      const payload = {
        title:
          form.title.trim(),

        description:
          form.description.trim() ||
          null,

        studentName:
          form.studentName.trim() ||
          null,

        category:
          form.category.trim() ||
          null,

        image:
          form.image.trim() ||
          null,

        achievementDate:
          form.achievementDate ||
          null,

        isPublished:
          Boolean(
            form.isPublished
          ),
      };

      console.log(
        "ACHIEVEMENT PAYLOAD:",
        payload
      );

      // ======================================
      // CREATE
      // ======================================

      if (!editingId) {
        const response =
          await api.post(
            "/achievements",
            payload
          );

        console.log(
          "CREATE ACHIEVEMENT:",
          response.data
        );

        const newAchievement =
          response.data?.data;

        if (newAchievement) {
          setAchievements(
            (previous) => [
              newAchievement,
              ...previous,
            ]
          );
        }

        setSuccess(
          "Achievement created successfully"
        );
      }

      // ======================================
      // UPDATE
      // ======================================

      else {
        const response =
          await api.put(
            `/achievements/${editingId}`,
            payload
          );

        console.log(
          "UPDATE ACHIEVEMENT:",
          response.data
        );

        const updatedAchievement =
          response.data?.data;

        if (updatedAchievement) {
          setAchievements(
            (previous) =>
              previous.map(
                (achievement) =>
                  achievement.id ===
                  editingId
                    ? updatedAchievement
                    : achievement
              )
          );
        }

        setSuccess(
          "Achievement updated successfully"
        );
      }

      setShowForm(false);

      setEditingId(null);

      setForm({
        ...emptyForm,
      });
    } catch (err) {
      console.error(
        "Save achievement error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to save achievement"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (
    achievement
  ) => {
    const confirmed =
      window.confirm(
        `Delete "${achievement.title}"?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(
        achievement.id
      );

      setError("");
      setSuccess("");

      await api.delete(
        `/achievements/${achievement.id}`
      );

      setAchievements(
        (previous) =>
          previous.filter(
            (item) =>
              item.id !==
              achievement.id
          )
      );

      setSuccess(
        "Achievement deleted successfully"
      );
    } catch (err) {
      console.error(
        "Delete achievement error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete achievement"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // TOGGLE PUBLISH
  // ==========================================

  const handleToggle = async (
    achievement
  ) => {
    try {
      setError("");
      setSuccess("");

      const response =
        await api.put(
          `/achievements/${achievement.id}`,
          {
            isPublished:
              !achievement.isPublished,
          }
        );

      const updatedAchievement =
        response.data?.data;

      if (updatedAchievement) {
        setAchievements(
          (previous) =>
            previous.map(
              (item) =>
                item.id ===
                achievement.id
                  ? updatedAchievement
                  : item
            )
        );
      }

      setSuccess(
        achievement.isPublished
          ? "Achievement unpublished"
          : "Achievement published"
      );
    } catch (err) {
      console.error(
        "Toggle achievement error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to update achievement"
      );
    }
  };

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (
    date
  ) => {
    if (!date) {
      return "No date";
    }

    return new Date(
      date
    ).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="achievement-loading">
        <RefreshCw
          size={22}
          className="achievement-spin"
        />

        <span>
          Loading achievements...
        </span>
      </div>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="achievement-management">

      {/* ====================================== */}
      {/* HEADER */}
      {/* ====================================== */}

      <div className="achievement-page-header">

        <div>
          <h1>
            Achievements
          </h1>

          <p>
            Manage student achievements
            and accomplishments.
          </p>
        </div>

        <div className="achievement-header-actions">

          <button
            type="button"
            className="achievement-refresh-button"
            onClick={
              loadAchievements
            }
          >
            <RefreshCw
              size={17}
            />

            Refresh
          </button>

          <button
            type="button"
            className="achievement-add-button"
            onClick={handleAdd}
          >
            <Plus size={19} />

            Add Achievement
          </button>

        </div>

      </div>

      {/* ====================================== */}
      {/* ALERTS */}
      {/* ====================================== */}

      {success && (
        <div className="achievement-success">
          {success}
        </div>
      )}

      {error && (
        <div className="achievement-error">
          {error}
        </div>
      )}

      {/* ====================================== */}
      {/* FORM */}
      {/* ====================================== */}

      {showForm && (
        <div className="achievement-form-card">

          <div className="achievement-form-header">

            <div>
              <h2>
                {editingId
                  ? "Edit Achievement"
                  : "Add Achievement"}
              </h2>

              <p>
                Add achievement details
                and student information.
              </p>
            </div>

            <button
              type="button"
              className="achievement-close-button"
              onClick={
                handleClose
              }
            >
              <X size={20} />
            </button>

          </div>

          <form
            onSubmit={
              handleSubmit
            }
          >

            <div className="achievement-form-grid">

              {/* TITLE */}

              <div className="achievement-field">

                <label>
                  Achievement Title *
                </label>

                <input
                  type="text"
                  name="title"
                  value={
                    form.title
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="State Level First Prize"
                />

              </div>

              {/* STUDENT */}

              <div className="achievement-field">

                <label>
                  Student Name
                </label>

                <input
                  type="text"
                  name="studentName"
                  value={
                    form.studentName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Student Name"
                />

              </div>

              {/* CATEGORY */}

              <div className="achievement-field">

                <label>
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={
                    form.category
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Academic / Sports / Cultural"
                />

              </div>

              {/* DATE */}

              <div className="achievement-field">

                <label>
                  Achievement Date
                </label>

                <div className="achievement-date-input">

                  <CalendarDays
                    size={17}
                  />

                  <input
                    type="date"
                    name="achievementDate"
                    value={
                      form.achievementDate
                    }
                    onChange={
                      handleChange
                    }
                  />

                </div>

              </div>

              {/* DESCRIPTION */}

              <div className="achievement-field achievement-full">

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  value={
                    form.description
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Describe the achievement..."
                  rows={5}
                />

              </div>

              {/* IMAGE */}

              <div className="achievement-field achievement-full">

                <label>
                  Achievement Image
                </label>

                <div className="achievement-upload-box">

                  {form.image ? (
                    <div className="achievement-image-preview">

                      <img
                        src={getImageUrl(
                          form.image
                        )}
                        alt={
                          form.title ||
                          "Achievement"
                        }
                        onError={(e) => {
                          console.error(
                            "ACHIEVEMENT IMAGE FAILED:",
                            e.currentTarget.src
                          );
                        }}
                      />

                      <button
                        type="button"
                        className="achievement-remove-image"
                        onClick={() =>
                          setForm(
                            (previous) => ({
                              ...previous,
                              image:
                                "",
                            })
                          )
                        }
                      >
                        <Trash2
                          size={15}
                        />

                        Remove
                      </button>

                    </div>
                  ) : (
                    <label className="achievement-upload-label">

                      {uploading ? (
                        <>
                          <RefreshCw
                            size={38}
                            className="achievement-spin"
                          />

                          <strong>
                            Uploading...
                          </strong>
                        </>
                      ) : (
                        <>
                          <Upload
                            size={38}
                          />

                          <strong>
                            Upload Achievement Image
                          </strong>

                          <span>
                            Click to select
                            an image
                          </span>

                          <small>
                            JPG, PNG, WEBP ·
                            Maximum 5 MB
                          </small>
                        </>
                      )}

                      <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={
                          handleImageUpload
                        }
                        disabled={
                          uploading
                        }
                        hidden
                      />

                    </label>
                  )}

                </div>

              </div>

              {/* PUBLISHED */}

              <div className="achievement-published-field">

                <input
                  type="checkbox"
                  id="achievement-published"
                  name="isPublished"
                  checked={
                    form.isPublished
                  }
                  onChange={
                    handleChange
                  }
                />

                <label htmlFor="achievement-published">
                  Published
                </label>

              </div>

            </div>

            {/* FORM ACTIONS */}

            <div className="achievement-form-actions">

              <button
                type="button"
                className="achievement-cancel-button"
                onClick={
                  handleClose
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="achievement-save-button"
                disabled={
                  saving ||
                  uploading
                }
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Achievement"
                    : "Create Achievement"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* ====================================== */}
      {/* EMPTY */}
      {/* ====================================== */}

      {achievements.length ===
      0 ? (
        <div className="achievement-empty">

          <div className="achievement-empty-icon">
            <Trophy size={30} />
          </div>

          <h2>
            No Achievements
          </h2>

          <p>
            Add your first student
            achievement.
          </p>

          {!showForm && (
            <button
              type="button"
              className="achievement-add-button"
              onClick={
                handleAdd
              }
            >
              <Plus size={18} />

              Add Achievement
            </button>
          )}

        </div>
      ) : (
        /* ==================================== */
        /* CARDS */
        /* ==================================== */

        <div className="achievement-grid">

          {achievements.map(
            (achievement) => {

              const imageUrl =
                getImageUrl(
                  achievement.image
                );

              return (
                <div
                  className="achievement-card"
                  key={
                    achievement.id
                  }
                >

                  {/* IMAGE */}

                  <div className="achievement-card-image">

                    {achievement.image ? (
                      <img
                        src={
                          imageUrl
                        }
                        alt={
                          achievement.title
                        }
                        loading="lazy"
                        onLoad={(e) => {
                          console.log(
                            "ACHIEVEMENT IMAGE LOADED:",
                            e.currentTarget.src
                          );
                        }}
                        onError={(e) => {
                          console.error(
                            "ACHIEVEMENT IMAGE FAILED:",
                            e.currentTarget.src
                          );
                        }}
                      />
                    ) : (
                      <div className="achievement-image-placeholder">

                        <Trophy
                          size={42}
                        />

                        <span>
                          No Image
                        </span>

                      </div>
                    )}

                    {/* STATUS */}

                    <div className="achievement-status">

                      <span
                        className={
                          achievement.isPublished
                            ? "published"
                            : "draft"
                        }
                      >
                        {achievement.isPublished
                          ? "Published"
                          : "Draft"}
                      </span>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="achievement-card-content">

                    <h2>
                      {
                        achievement.title
                      }
                    </h2>

                    {achievement.studentName && (
                      <div className="achievement-student">

                        <strong>
                          Student:
                        </strong>

                        <span>
                          {
                            achievement.studentName
                          }
                        </span>

                      </div>
                    )}

                    {achievement.category && (
                      <div className="achievement-category">

                        {achievement.category}

                      </div>
                    )}

                    {achievement.description && (
                      <p>
                        {
                          achievement.description
                        }
                      </p>
                    )}

                    <div className="achievement-date">

                      <CalendarDays
                        size={15}
                      />

                      <span>
                        {formatDate(
                          achievement.achievementDate
                        )}
                      </span>

                    </div>

                    {/* ACTIONS */}

                    <div className="achievement-actions">

                      <button
                        type="button"
                        className="achievement-action-button toggle"
                        onClick={() =>
                          handleToggle(
                            achievement
                          )
                        }
                        title={
                          achievement.isPublished
                            ? "Unpublish"
                            : "Publish"
                        }
                      >
                        <Power
                          size={16}
                        />

                        {achievement.isPublished
                          ? "Unpublish"
                          : "Publish"}
                      </button>

                      <button
                        type="button"
                        className="achievement-action-button edit"
                        onClick={() =>
                          handleEdit(
                            achievement
                          )
                        }
                      >
                        <Pencil
                          size={16}
                        />

                        Edit
                      </button>

                      <button
                        type="button"
                        className="achievement-action-button delete"
                        onClick={() =>
                          handleDelete(
                            achievement
                          )
                        }
                        disabled={
                          deletingId ===
                          achievement.id
                        }
                      >
                        <Trash2
                          size={16}
                        />

                        {deletingId ===
                        achievement.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>
      )}

    </div>
  );
};

export default AchievementManagement;