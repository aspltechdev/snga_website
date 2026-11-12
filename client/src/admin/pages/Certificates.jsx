
import { useCallback, useEffect, useRef, useState } from "react";

import {
  FileText,
  Upload,
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
  X,
  CheckCircle,
  File,
  RefreshCw,
} from "lucide-react";

import certificateService from "../../services/certificateService";
import "./Certificates.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "";
const MAX_PDF_SIZE = 10 * 1024 * 1024;

const initialForm = {
  title: "",
  issuer: "",
  description: "",
  category: "",
  issueDate: "",
  isPublished: true,
  sortOrder: 0,
};

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [pdfFile, setPdfFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);
  const previewRef = useRef(null);

  // =========================================
  // FETCH CERTIFICATES
  // =========================================

  const fetchCertificates = useCallback(async () => {
    try {
      setLoading(true);

      const response = await certificateService.getAll();

      setCertificates(
        Array.isArray(response?.data) ? response.data : []
      );

      setError("");
    } catch (err) {
      console.error("FETCH CERTIFICATES ERROR:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load certificates."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

  // =========================================
  // PREVIEW URL CLEANUP
  // =========================================

  useEffect(() => {
    return () => {
      if (previewRef.current) {
        URL.revokeObjectURL(previewRef.current);
      }
    };
  }, []);

  // =========================================
  // CLEAR SELECTED PDF
  // =========================================

  const clearSelectedFile = () => {
    if (previewRef.current) {
      URL.revokeObjectURL(previewRef.current);
      previewRef.current = null;
    }

    setPreview(null);
    setPdfFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // =========================================
  // RESET FORM
  // =========================================

  const resetForm = () => {
    clearSelectedFile();

    setEditingId(null);
    setForm({ ...initialForm });
    setError("");
  };

  // =========================================
  // CREATE MODAL
  // =========================================

  const openCreateModal = () => {
    resetForm();
    setShowModal(true);
  };

  // =========================================
  // EDIT MODAL
  // =========================================

  const openEditModal = (certificate) => {
    resetForm();

    setEditingId(certificate.id);

    setForm({
      title: certificate.title || "",
      issuer: certificate.issuer || "",
      description: certificate.description || "",
      category: certificate.category || "",

      issueDate: certificate.issueDate
        ? new Date(certificate.issueDate)
            .toISOString()
            .slice(0, 10)
        : "",

      isPublished: Boolean(certificate.isPublished),
      sortOrder: certificate.sortOrder ?? 0,
    });

    setShowModal(true);
  };

  // =========================================
  // FORM CHANGE
  // =========================================

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================================
  // PDF VALIDATION
  // =========================================

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const extensionIsPdf = file.name
      .toLowerCase()
      .endsWith(".pdf");

    const mimeIsPdf = file.type === "application/pdf";

    if (!extensionIsPdf || !mimeIsPdf) {
      setError("Please select a valid PDF file.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_PDF_SIZE) {
      setError("PDF size must be 10 MB or less.");
      event.target.value = "";
      return;
    }

    // Remove previous preview
    if (previewRef.current) {
      URL.revokeObjectURL(previewRef.current);
    }

    const objectUrl = URL.createObjectURL(file);

    previewRef.current = objectUrl;

    setError("");
    setPdfFile(file);
    setPreview(objectUrl);
  };

  // =========================================
  // CLOSE MODAL
  // =========================================

  const closeModal = () => {
    if (saving) return;

    clearSelectedFile();

    setShowModal(false);
    setEditingId(null);
    setForm({ ...initialForm });
    setError("");
  };

  // =========================================
  // CREATE / UPDATE CERTIFICATE
  // =========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!form.title.trim()) {
      setError("Certificate title is required.");
      return;
    }

    if (!editingId && !pdfFile) {
      setError("Please upload a certificate PDF.");
      return;
    }

    if (pdfFile && pdfFile.size > MAX_PDF_SIZE) {
      setError("PDF size must be 10 MB or less.");
      return;
    }

    try {
      setSaving(true);

      const formData = new FormData();

      // Certificate information
      formData.append("title", String(form.title).trim());

      formData.append(
        "issuer",
        String(form.issuer || "")
      );

      formData.append(
        "description",
        String(form.description || "")
      );

      formData.append(
        "category",
        String(form.category || "")
      );

      formData.append(
        "issueDate",
        String(form.issueDate || "")
      );

      formData.append(
        "isPublished",
        String(Boolean(form.isPublished))
      );

      formData.append(
        "sortOrder",
        String(form.sortOrder ?? 0)
      );

      // =====================================
      // PDF UPLOAD
      // =====================================

      // No instanceof File check.
      // The selected file is already validated
      // in handleFileChange.

      if (pdfFile) {
        formData.append(
          "pdf",
          pdfFile,
          pdfFile.name
        );
      }

      // =====================================
      // DEBUG FOR FORMDATA
      // =====================================

      console.log(
        "========== CERTIFICATE FORMDATA =========="
      );

      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") {
          console.log(key, value);
        } else {
          console.log(key, {
            name: value.name,
            size: value.size,
            type: value.type,
          });
        }
      }

      console.log(
        "PDF SELECTED:",
        pdfFile ? pdfFile.name : "No new PDF"
      );

      console.log(
        "=========================================="
      );

      // =====================================
      // API REQUEST
      // =====================================

      if (editingId) {
        await certificateService.update(
          editingId,
          formData
        );
      } else {
        await certificateService.create(formData);
      }

      // =====================================
      // SUCCESS
      // =====================================

      clearSelectedFile();

      setShowModal(false);
      setEditingId(null);
      setForm({ ...initialForm });
      setError("");

      await fetchCertificates();

    } catch (err) {
      console.error(
        "CERTIFICATE SUBMISSION ERROR:",
        err
      );

      console.error(
        "CERTIFICATE SERVER RESPONSE:",
        err.response?.data
      );

      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Unable to save certificate. Please try again."
      );

    } finally {
      setSaving(false);
    }
  };

  // =========================================
  // DELETE CERTIFICATE
  // =========================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this certificate?"
    );

    if (!confirmed) return;

    try {
      await certificateService.delete(id);

      await fetchCertificates();

    } catch (err) {
      console.error(
        "DELETE CERTIFICATE ERROR:",
        err
      );

      window.alert(
        err.response?.data?.message ||
          "Unable to delete certificate."
      );
    }
  };

  // =========================================
  // PUBLISH / UNPUBLISH
  // =========================================

  const handleTogglePublish = async (id) => {
    try {
      await certificateService.togglePublish(id);

      await fetchCertificates();

    } catch (err) {
      console.error(
        "TOGGLE CERTIFICATE STATUS ERROR:",
        err
      );

      window.alert(
        err.response?.data?.message ||
          "Unable to update certificate status."
      );
    }
  };

  // =========================================
  // PDF URL
  // =========================================

  const getPdfUrl = (url) => {
    if (!url) return "";

    if (/^https?:\/\//i.test(url)) {
      return url;
    }

    const serverBase = API_BASE_URL
      .replace(/\/api\/?$/i, "")
      .replace(/\/$/, "");

    const normalizedPath = url.startsWith("/")
      ? url
      : `/${url}`;

    return `${serverBase}${normalizedPath}`;
  };

  // =========================================
  // PDF PREVIEW
  // =========================================

  const handlePreview = (certificate) => {
    const pdfUrl = getPdfUrl(certificate.pdfUrl);

    if (!pdfUrl) {
      window.alert(
        "PDF URL is not available for this certificate."
      );

      return;
    }

    window.open(
      pdfUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // =========================================
  // SEARCH
  // =========================================

  const filteredCertificates = certificates.filter(
    (certificate) => {
      const query = search.trim().toLowerCase();

      if (!query) return true;

      return (
        certificate.title?.toLowerCase().includes(query) ||
        certificate.issuer?.toLowerCase().includes(query) ||
        certificate.category?.toLowerCase().includes(query)
      );
    }
  );

  // =========================================
  // STATISTICS
  // =========================================

  const publishedCount = certificates.filter(
    (certificate) => certificate.isPublished
  ).length;

  // =========================================
  // DATE FORMAT
  // =========================================

  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================================
  // UI
  // =========================================

  return (
    <div className="cert-admin">

      {/* HEADER */}

      <div className="cert-admin-header">
        <div>
          <span className="cert-eyebrow">
            WEBSITE CONTENT MANAGEMENT
          </span>

          <h1>Certificates</h1>

          <p>
            Manage school certificates, accreditations and
            official recognition documents.
          </p>
        </div>

        <button
          type="button"
          className="cert-primary-btn"
          onClick={openCreateModal}
        >
          <Plus size={18} />
          Add Certificate
        </button>
      </div>

      {/* STATISTICS */}

      <div className="cert-stats">

        <div className="cert-stat">
          <span>Total Certificates</span>
          <strong>{certificates.length}</strong>
        </div>

        <div className="cert-stat">
          <span>Published</span>
          <strong>{publishedCount}</strong>
        </div>

        <div className="cert-stat">
          <span>Drafts</span>
          <strong>
            {certificates.length - publishedCount}
          </strong>
        </div>

      </div>

      {/* TOOLBAR */}

      <div className="cert-toolbar">

        <div className="cert-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>

        <button
          type="button"
          className="cert-refresh-btn"
          onClick={fetchCertificates}
          disabled={loading}
        >
          <RefreshCw size={16} />

          {loading ? "Loading..." : "Refresh"}
        </button>

      </div>

      {/* TABLE */}

      <div className="cert-table-container">

        <table className="cert-table">

          <thead>
            <tr>
              <th>Certificate</th>
              <th>Issuer</th>
              <th>Category</th>
              <th>Issue Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {loading ? (
              <tr>
                <td colSpan="6" className="cert-empty">
                  Loading certificates...
                </td>
              </tr>
            ) : filteredCertificates.length === 0 ? (
              <tr>
                <td colSpan="6" className="cert-empty">
                  No certificates found.
                </td>
              </tr>
            ) : (
              filteredCertificates.map((certificate) => (

                <tr key={certificate.id}>

                  <td>
                    <div className="cert-name-cell">

                      <div className="cert-file-icon">
                        <FileText size={21} />
                      </div>

                      <div>
                        <strong>
                          {certificate.title}
                        </strong>

                        <small>PDF Document</small>
                      </div>

                    </div>
                  </td>

                  <td>
                    {certificate.issuer || "—"}
                  </td>

                  <td>
                    <span className="cert-category">
                      {certificate.category || "General"}
                    </span>
                  </td>

                  <td>
                    {formatDate(certificate.issueDate)}
                  </td>

                  <td>
                    <span
                      className={
                        certificate.isPublished
                          ? "cert-status published"
                          : "cert-status draft"
                      }
                    >
                      {certificate.isPublished
                        ? "Published"
                        : "Draft"}
                    </span>
                  </td>

                  <td>
                    <div className="cert-actions">

                      <button
                        type="button"
                        title="Preview PDF"
                        aria-label={`Preview ${certificate.title}`}
                        onClick={() =>
                          handlePreview(certificate)
                        }
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        type="button"
                        title="Edit"
                        aria-label={`Edit ${certificate.title}`}
                        onClick={() =>
                          openEditModal(certificate)
                        }
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        type="button"
                        title={
                          certificate.isPublished
                            ? "Unpublish"
                            : "Publish"
                        }
                        aria-label={
                          certificate.isPublished
                            ? `Unpublish ${certificate.title}`
                            : `Publish ${certificate.title}`
                        }
                        onClick={() =>
                          handleTogglePublish(certificate.id)
                        }
                      >
                        <CheckCircle size={17} />
                      </button>

                      <button
                        type="button"
                        title="Delete"
                        aria-label={`Delete ${certificate.title}`}
                        className="cert-delete-action"
                        onClick={() =>
                          handleDelete(certificate.id)
                        }
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>
                  </td>

                </tr>

              ))
            )}

          </tbody>

        </table>

      </div>

      {/* CREATE / EDIT MODAL */}

      {showModal && (

        <div
          className="cert-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >

          <div className="cert-modal">

            <div className="cert-modal-header">

              <div>
                <span className="cert-eyebrow">
                  CERTIFICATE MANAGEMENT
                </span>

                <h2>
                  {editingId
                    ? "Edit Certificate"
                    : "Add New Certificate"}
                </h2>
              </div>

              <button
                type="button"
                className="cert-modal-close"
                onClick={closeModal}
                disabled={saving}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >

              <div className="cert-form-grid">

                {/* TITLE */}

                <div className="cert-form-group full">

                  <label htmlFor="certificate-title">
                    Certificate Title *
                  </label>

                  <input
                    id="certificate-title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Enter certificate title"
                    maxLength={180}
                    required
                  />

                </div>

                {/* ISSUER */}

                <div className="cert-form-group">

                  <label htmlFor="certificate-issuer">
                    Issuing Organisation
                  </label>

                  <input
                    id="certificate-issuer"
                    name="issuer"
                    value={form.issuer}
                    onChange={handleChange}
                    placeholder="Enter issuing organisation"
                  />

                </div>

                {/* CATEGORY */}

                <div className="cert-form-group">

                  <label htmlFor="certificate-category">
                    Category
                  </label>

                  <input
                    id="certificate-category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="e.g. Accreditation"
                  />

                </div>

                {/* ISSUE DATE */}

                <div className="cert-form-group">

                  <label htmlFor="certificate-issue-date">
                    Issue Date
                  </label>

                  <input
                    id="certificate-issue-date"
                    type="date"
                    name="issueDate"
                    value={form.issueDate}
                    onChange={handleChange}
                  />

                </div>

                {/* DISPLAY ORDER */}

                <div className="cert-form-group">

                  <label htmlFor="certificate-sort-order">
                    Display Order
                  </label>

                  <input
                    id="certificate-sort-order"
                    type="number"
                    name="sortOrder"
                    min="0"
                    step="1"
                    value={form.sortOrder}
                    onChange={handleChange}
                  />

                </div>

                {/* DESCRIPTION */}

                <div className="cert-form-group full">

                  <label htmlFor="certificate-description">
                    Description
                  </label>

                  <textarea
                    id="certificate-description"
                    name="description"
                    rows="3"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Write a short description..."
                  />

                </div>

                {/* PDF UPLOAD */}

                <div className="cert-form-group full">

                  <label>
                    Certificate PDF {!editingId && "*"}

                    {editingId &&
                      " (optional — upload only to replace)"}
                  </label>

                  <label className="cert-upload-area">

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="application/pdf,.pdf"
                      onChange={handleFileChange}
                      hidden
                    />

                    <Upload size={26} />

                    <strong>
                      {pdfFile
                        ? pdfFile.name
                        : editingId
                          ? "Click to replace existing PDF"
                          : "Click to upload PDF"}
                    </strong>

                    <span>
                      PDF format · Maximum 10 MB
                    </span>

                  </label>

                  {preview && pdfFile && (

                    <div className="cert-selected-file">

                      <File size={18} />

                      <span>{pdfFile.name}</span>

                      <button
                        type="button"
                        onClick={clearSelectedFile}
                        aria-label="Remove selected PDF"
                      >
                        <X size={16} />
                      </button>

                    </div>

                  )}

                </div>

                {/* PUBLISH STATUS */}

                <div className="cert-form-group full">

                  <label className="cert-publish-option">

                    <input
                      type="checkbox"
                      name="isPublished"
                      checked={Boolean(form.isPublished)}
                      onChange={handleChange}
                    />

                    <span>
                      Publish this certificate on the website
                    </span>

                  </label>

                </div>

              </div>

              {/* ERROR */}

              {error && (
                <div className="cert-error" role="alert">
                  {error}
                </div>
              )}

              {/* FOOTER */}

              <div className="cert-modal-footer">

                <button
                  type="button"
                  className="cert-cancel-btn"
                  onClick={closeModal}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="cert-primary-btn"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingId
                      ? "Update Certificate"
                      : "Save Certificate"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Certificates;
