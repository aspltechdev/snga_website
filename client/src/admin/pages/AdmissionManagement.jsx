import { useEffect, useMemo, useState } from "react";
import {
  Search,
  RefreshCw,
  Eye,
  Pencil,
  Trash2,
  X,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  GraduationCap,
  User,
  MessageSquare,
  Filter,
  CheckCircle2,
} from "lucide-react";

import api from "../../services/axios";
import "./AdmissionManagement.css";

const STATUS_OPTIONS = [
  "NEW",
  "CONTACTED",
  "FOLLOW_UP",
  "CONVERTED",
  "CLOSED",
];

const AdmissionManagement = () => {
  // ==========================================
  // STATE
  // ==========================================

  const [admissions, setAdmissions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [deletingId, setDeletingId] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("ALL");

  const [selectedAdmission, setSelectedAdmission] =
    useState(null);

  const [editingAdmission, setEditingAdmission] =
    useState(null);

  const [showDetails, setShowDetails] =
    useState(false);

  const [showEditForm, setShowEditForm] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  // ==========================================
  // FORM
  // ==========================================

  const [form, setForm] = useState({
    parentName: "",
    studentName: "",
    className: "",
    mobile: "",
    email: "",
    location: "",
    message: "",
    status: "NEW",
  });

  // ==========================================
  // LOAD ADMISSIONS
  // ==========================================

  const loadAdmissions = async (
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
          "/admissions"
        );

      console.log(
        "ADMISSIONS:",
        response.data
      );

      const data =
        response.data?.data;

      setAdmissions(
        Array.isArray(data)
          ? data
          : []
      );
    } catch (err) {
      console.error(
        "Load admissions error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load admission enquiries"
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
    loadAdmissions();
  }, []);

  // ==========================================
  // FILTERED ADMISSIONS
  // ==========================================

  const filteredAdmissions =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      return admissions.filter(
        (admission) => {
          const matchesSearch =
            !query ||
            admission.parentName
              ?.toLowerCase()
              .includes(query) ||
            admission.studentName
              ?.toLowerCase()
              .includes(query) ||
            admission.mobile
              ?.toLowerCase()
              .includes(query) ||
            admission.email
              ?.toLowerCase()
              .includes(query) ||
            admission.className
              ?.toLowerCase()
              .includes(query) ||
            admission.location
              ?.toLowerCase()
              .includes(query);

          const matchesStatus =
            statusFilter === "ALL" ||
            admission.status ===
              statusFilter;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );
    }, [
      admissions,
      search,
      statusFilter,
    ]);

  // ==========================================
  // COUNTS
  // ==========================================

  const statusCounts =
    useMemo(() => {
      const counts = {
        ALL: admissions.length,
        NEW: 0,
        CONTACTED: 0,
        FOLLOW_UP: 0,
        CONVERTED: 0,
        CLOSED: 0,
      };

      admissions.forEach(
        (admission) => {
          if (
            counts[
              admission.status
            ] !== undefined
          ) {
            counts[
              admission.status
            ]++;
          }
        }
      );

      return counts;
    }, [admissions]);

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) {
      return "-";
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
  // FORMAT DATE + TIME
  // ==========================================

  const formatDateTime = (
    date
  ) => {
    if (!date) {
      return "-";
    }

    return new Date(
      date
    ).toLocaleString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  // ==========================================
  // STATUS LABEL
  // ==========================================

  const getStatusLabel = (
    status
  ) => {
    switch (status) {
      case "NEW":
        return "New";

      case "CONTACTED":
        return "Contacted";

      case "FOLLOW_UP":
        return "Follow Up";

      case "CONVERTED":
        return "Converted";

      case "CLOSED":
        return "Closed";

      default:
        return status || "Unknown";
    }
  };

  // ==========================================
  // STATUS CLASS
  // ==========================================

  const getStatusClass = (
    status
  ) => {
    switch (status) {
      case "NEW":
        return "new";

      case "CONTACTED":
        return "contacted";

      case "FOLLOW_UP":
        return "follow-up";

      case "CONVERTED":
        return "converted";

      case "CLOSED":
        return "closed";

      default:
        return "new";
    }
  };

  // ==========================================
  // VIEW DETAILS
  // ==========================================

  const handleView = (
    admission
  ) => {
    setSelectedAdmission(
      admission
    );

    setShowDetails(true);

    setError("");
    setSuccess("");
  };

  // ==========================================
  // CLOSE DETAILS
  // ==========================================

  const closeDetails = () => {
    setShowDetails(false);

    setSelectedAdmission(null);
  };

  // ==========================================
  // EDIT
  // ==========================================

  const handleEdit = (
    admission
  ) => {
    setEditingAdmission(
      admission
    );

    setForm({
      parentName:
        admission.parentName ||
        "",

      studentName:
        admission.studentName ||
        "",

      className:
        admission.className ||
        "",

      mobile:
        admission.mobile ||
        "",

      email:
        admission.email ||
        "",

      location:
        admission.location ||
        "",

      message:
        admission.message ||
        "",

      status:
        admission.status ||
        "NEW",
    });

    setShowEditForm(true);

    setError("");
    setSuccess("");
  };

  // ==========================================
  // CLOSE EDIT
  // ==========================================

  const closeEdit = () => {
    setShowEditForm(false);

    setEditingAdmission(null);

    setForm({
      parentName: "",
      studentName: "",
      className: "",
      mobile: "",
      email: "",
      location: "",
      message: "",
      status: "NEW",
    });

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
    } = e.target;

    setForm(
      (previous) => ({
        ...previous,
        [name]: value,
      })
    );

    setError("");
  };

  // ==========================================
  // UPDATE ADMISSION
  // ==========================================

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    if (!editingAdmission) {
      return;
    }

    if (
      !form.parentName.trim()
    ) {
      setError(
        "Parent name is required"
      );
      return;
    }

    if (
      !form.studentName.trim()
    ) {
      setError(
        "Student name is required"
      );
      return;
    }

    if (
      !form.className.trim()
    ) {
      setError(
        "Class is required"
      );
      return;
    }

    if (
      !form.mobile.trim()
    ) {
      setError(
        "Mobile number is required"
      );
      return;
    }

    try {
      setSaving(true);

      setError("");
      setSuccess("");

      const payload = {
        parentName:
          form.parentName.trim(),

        studentName:
          form.studentName.trim(),

        className:
          form.className.trim(),

        mobile:
          form.mobile.trim(),

        email:
          form.email.trim() ||
          null,

        location:
          form.location.trim() ||
          null,

        message:
          form.message.trim() ||
          null,

        status:
          form.status,
      };

      console.log(
        "UPDATE ADMISSION:",
        payload
      );

      const response =
        await api.put(
          `/admissions/${editingAdmission.id}`,
          payload
        );

      const updatedAdmission =
        response.data?.data;

      if (updatedAdmission) {
        setAdmissions(
          (previous) =>
            previous.map(
              (admission) =>
                admission.id ===
                editingAdmission.id
                  ? updatedAdmission
                  : admission
            )
        );

        if (
          selectedAdmission?.id ===
          editingAdmission.id
        ) {
          setSelectedAdmission(
            updatedAdmission
          );
        }
      }

      setSuccess(
        "Admission enquiry updated successfully"
      );

      closeEdit();
    } catch (err) {
      console.error(
        "Update admission error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to update admission enquiry"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // QUICK STATUS UPDATE
  // ==========================================

  const handleStatusChange = async (
    admission,
    newStatus
  ) => {
    if (
      admission.status ===
      newStatus
    ) {
      return;
    }

    try {
      setError("");
      setSuccess("");

      const response =
        await api.put(
          `/admissions/${admission.id}`,
          {
            status: newStatus,
          }
        );

      const updatedAdmission =
        response.data?.data;

      if (updatedAdmission) {
        setAdmissions(
          (previous) =>
            previous.map(
              (item) =>
                item.id ===
                admission.id
                  ? updatedAdmission
                  : item
            )
        );

        if (
          selectedAdmission?.id ===
          admission.id
        ) {
          setSelectedAdmission(
            updatedAdmission
          );
        }
      }

      setSuccess(
        `Status changed to ${getStatusLabel(
          newStatus
        )}`
      );
    } catch (err) {
      console.error(
        "Status update error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to update status"
      );
    }
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (
    admission
  ) => {
    const confirmed =
      window.confirm(
        `Delete admission enquiry from ${admission.parentName}?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(
        admission.id
      );

      setError("");
      setSuccess("");

      await api.delete(
        `/admissions/${admission.id}`
      );

      setAdmissions(
        (previous) =>
          previous.filter(
            (item) =>
              item.id !==
              admission.id
          )
      );

      if (
        selectedAdmission?.id ===
        admission.id
      ) {
        closeDetails();
      }

      setSuccess(
        "Admission enquiry deleted successfully"
      );
    } catch (err) {
      console.error(
        "Delete admission error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete admission enquiry"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="admission-loading">

        <RefreshCw
          size={22}
          className="admission-spin"
        />

        <span>
          Loading admissions...
        </span>

      </div>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="admission-management">

      {/* ====================================== */}
      {/* HEADER */}
      {/* ====================================== */}

      <div className="admission-page-header">

        <div>
          <h1>
            Admissions
          </h1>

          <p>
            Manage admission enquiries
            submitted through the website.
          </p>
        </div>

        <button
          type="button"
          className="admission-refresh-button"
          onClick={() =>
            loadAdmissions(true)
          }
          disabled={refreshing}
        >
          <RefreshCw
            size={17}
            className={
              refreshing
                ? "admission-spin"
                : ""
            }
          />

          {refreshing
            ? "Refreshing..."
            : "Refresh"}
        </button>

      </div>

      {/* ====================================== */}
      {/* ALERTS */}
      {/* ====================================== */}

      {success && (
        <div className="admission-success">
          {success}
        </div>
      )}

      {error && (
        <div className="admission-error">
          {error}
        </div>
      )}

      {/* ====================================== */}
      {/* STATS */}
      {/* ====================================== */}

      <div className="admission-stats">

        <button
          type="button"
          className={`admission-stat ${
            statusFilter === "ALL"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setStatusFilter("ALL")
          }
        >
          <span className="admission-stat-label">
            Total Enquiries
          </span>

          <strong>
            {statusCounts.ALL}
          </strong>
        </button>

        <button
          type="button"
          className={`admission-stat ${
            statusFilter === "NEW"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setStatusFilter("NEW")
          }
        >
          <span className="admission-stat-label">
            New
          </span>

          <strong>
            {statusCounts.NEW}
          </strong>
        </button>

        <button
          type="button"
          className={`admission-stat ${
            statusFilter ===
            "CONTACTED"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setStatusFilter(
              "CONTACTED"
            )
          }
        >
          <span className="admission-stat-label">
            Contacted
          </span>

          <strong>
            {statusCounts.CONTACTED}
          </strong>
        </button>

        <button
          type="button"
          className={`admission-stat ${
            statusFilter ===
            "FOLLOW_UP"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setStatusFilter(
              "FOLLOW_UP"
            )
          }
        >
          <span className="admission-stat-label">
            Follow Up
          </span>

          <strong>
            {statusCounts.FOLLOW_UP}
          </strong>
        </button>

        <button
          type="button"
          className={`admission-stat ${
            statusFilter ===
            "CONVERTED"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setStatusFilter(
              "CONVERTED"
            )
          }
        >
          <span className="admission-stat-label">
            Converted
          </span>

          <strong>
            {statusCounts.CONVERTED}
          </strong>
        </button>

      </div>

      {/* ====================================== */}
      {/* FILTERS */}
      {/* ====================================== */}

      <div className="admission-toolbar">

        <div className="admission-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search student, parent, mobile, email..."
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
              <X size={16} />
            </button>
          )}

        </div>

        <div className="admission-filter">

          <Filter size={16} />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }
          >
            <option value="ALL">
              All Status
            </option>

            {STATUS_OPTIONS.map(
              (status) => (
                <option
                  key={status}
                  value={status}
                >
                  {getStatusLabel(
                    status
                  )}
                </option>
              )
            )}

          </select>

        </div>

      </div>

      {/* ====================================== */}
      {/* RESULT COUNT */}
      {/* ====================================== */}

      <div className="admission-result-info">

        Showing{" "}
        <strong>
          {filteredAdmissions.length}
        </strong>{" "}
        of{" "}
        <strong>
          {admissions.length}
        </strong>{" "}
        enquiries

      </div>

      {/* ====================================== */}
      {/* EMPTY */}
      {/* ====================================== */}

      {filteredAdmissions.length ===
      0 ? (
        <div className="admission-empty">

          <div className="admission-empty-icon">
            <GraduationCap
              size={32}
            />
          </div>

          <h2>
            No Admission Enquiries
          </h2>

          <p>
            {search ||
            statusFilter !== "ALL"
              ? "No enquiries match your current filters."
              : "No admission enquiries have been submitted yet."}
          </p>

        </div>
      ) : (
        /* ==================================== */
        /* TABLE */
        /* ==================================== */

        <div className="admission-table-wrapper">

          <table className="admission-table">

            <thead>

              <tr>

                <th>
                  Student
                </th>

                <th>
                  Parent
                </th>

                <th>
                  Class
                </th>

                <th>
                  Contact
                </th>

                <th>
                  Status
                </th>

                <th>
                  Submitted
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredAdmissions.map(
                (admission) => (
                  <tr
                    key={
                      admission.id
                    }
                  >

                    {/* STUDENT */}

                    <td>

                      <div className="admission-student-cell">

                        <div className="admission-avatar">
                          <User
                            size={17}
                          />
                        </div>

                        <div>
                          <strong>
                            {
                              admission.studentName
                            }
                          </strong>

                          <span>
                            ID #
                            {
                              admission.id
                            }
                          </span>
                        </div>

                      </div>

                    </td>

                    {/* PARENT */}

                    <td>
                      <span className="admission-parent-name">
                        {
                          admission.parentName
                        }
                      </span>
                    </td>

                    {/* CLASS */}

                    <td>

                      <span className="admission-class">

                        <GraduationCap
                          size={14}
                        />

                        {
                          admission.className
                        }

                      </span>

                    </td>

                    {/* CONTACT */}

                    <td>

                      <div className="admission-contact-cell">

                        <a
                          href={`tel:${admission.mobile}`}
                        >
                          <Phone
                            size={13}
                          />

                          {
                            admission.mobile
                          }
                        </a>

                        {admission.email && (
                          <a
                            href={`mailto:${admission.email}`}
                          >
                            <Mail
                              size={13}
                            />

                            {
                              admission.email
                            }
                          </a>
                        )}

                      </div>

                    </td>

                    {/* STATUS */}

                    <td>

                      <select
                        className={`admission-status-select ${getStatusClass(
                          admission.status
                        )}`}
                        value={
                          admission.status
                        }
                        onChange={(
                          e
                        ) =>
                          handleStatusChange(
                            admission,
                            e.target
                              .value
                          )
                        }
                      >
                        {STATUS_OPTIONS.map(
                          (
                            status
                          ) => (
                            <option
                              key={
                                status
                              }
                              value={
                                status
                              }
                            >
                              {getStatusLabel(
                                status
                              )}
                            </option>
                          )
                        )}
                      </select>

                    </td>

                    {/* DATE */}

                    <td>

                      <div className="admission-date-cell">

                        <CalendarDays
                          size={14}
                        />

                        <span>
                          {formatDate(
                            admission.createdAt
                          )}
                        </span>

                      </div>

                    </td>

                    {/* ACTIONS */}

                    <td>

                      <div className="admission-actions">

                        <button
                          type="button"
                          className="admission-action view"
                          onClick={() =>
                            handleView(
                              admission
                            )
                          }
                          title="View"
                        >
                          <Eye
                            size={16}
                          />
                        </button>

                        <button
                          type="button"
                          className="admission-action edit"
                          onClick={() =>
                            handleEdit(
                              admission
                            )
                          }
                          title="Edit"
                        >
                          <Pencil
                            size={16}
                          />
                        </button>

                        <button
                          type="button"
                          className="admission-action delete"
                          onClick={() =>
                            handleDelete(
                              admission
                            )
                          }
                          disabled={
                            deletingId ===
                            admission.id
                          }
                          title="Delete"
                        >
                          <Trash2
                            size={16}
                          />
                        </button>

                      </div>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>
      )}

      {/* ====================================== */}
      {/* DETAILS MODAL */}
      {/* ====================================== */}

      {showDetails &&
        selectedAdmission && (
          <div
            className="admission-modal-overlay"
            onMouseDown={(e) => {
              if (
                e.target ===
                e.currentTarget
              ) {
                closeDetails();
              }
            }}
          >

            <div className="admission-modal">

              <div className="admission-modal-header">

                <div>
                  <span>
                    Admission Enquiry #
                    {
                      selectedAdmission.id
                    }
                  </span>

                  <h2>
                    {
                      selectedAdmission.studentName
                    }
                  </h2>
                </div>

                <button
                  type="button"
                  className="admission-modal-close"
                  onClick={
                    closeDetails
                  }
                >
                  <X size={20} />
                </button>

              </div>

              <div className="admission-modal-body">

                {/* STATUS */}

                <div className="admission-detail-status">

                  <span>
                    Status
                  </span>

                  <select
                    className={`admission-status-select ${getStatusClass(
                      selectedAdmission.status
                    )}`}
                    value={
                      selectedAdmission.status
                    }
                    onChange={(e) =>
                      handleStatusChange(
                        selectedAdmission,
                        e.target.value
                      )
                    }
                  >
                    {STATUS_OPTIONS.map(
                      (status) => (
                        <option
                          key={status}
                          value={status}
                        >
                          {getStatusLabel(
                            status
                          )}
                        </option>
                      )
                    )}
                  </select>

                </div>

                {/* DETAILS GRID */}

                <div className="admission-details-grid">

                  <div className="admission-detail-item">

                    <User size={17} />

                    <div>
                      <span>
                        Parent Name
                      </span>

                      <strong>
                        {
                          selectedAdmission.parentName
                        }
                      </strong>
                    </div>

                  </div>

                  <div className="admission-detail-item">

                    <GraduationCap
                      size={17}
                    />

                    <div>
                      <span>
                        Class
                      </span>

                      <strong>
                        {
                          selectedAdmission.className
                        }
                      </strong>
                    </div>

                  </div>

                  <div className="admission-detail-item">

                    <Phone size={17} />

                    <div>
                      <span>
                        Mobile
                      </span>

                      <a
                        href={`tel:${selectedAdmission.mobile}`}
                      >
                        {
                          selectedAdmission.mobile
                        }
                      </a>
                    </div>

                  </div>

                  <div className="admission-detail-item">

                    <Mail size={17} />

                    <div>
                      <span>
                        Email
                      </span>

                      {selectedAdmission.email ? (
                        <a
                          href={`mailto:${selectedAdmission.email}`}
                        >
                          {
                            selectedAdmission.email
                          }
                        </a>
                      ) : (
                        <strong>
                          Not provided
                        </strong>
                      )}

                    </div>

                  </div>

                  <div className="admission-detail-item">

                    <MapPin
                      size={17}
                    />

                    <div>
                      <span>
                        Location
                      </span>

                      <strong>
                        {
                          selectedAdmission.location ||
                          "Not provided"
                        }
                      </strong>
                    </div>

                  </div>

                  <div className="admission-detail-item">

                    <CalendarDays
                      size={17}
                    />

                    <div>
                      <span>
                        Submitted
                      </span>

                      <strong>
                        {formatDateTime(
                          selectedAdmission.createdAt
                        )}
                      </strong>
                    </div>

                  </div>

                </div>

                {/* MESSAGE */}

                <div className="admission-message-box">

                  <div className="admission-message-title">

                    <MessageSquare
                      size={17}
                    />

                    <span>
                      Message
                    </span>

                  </div>

                  <p>
                    {
                      selectedAdmission.message ||
                      "No message provided."
                    }
                  </p>

                </div>

              </div>

              {/* FOOTER */}

              <div className="admission-modal-footer">

                <button
                  type="button"
                  className="admission-cancel-button"
                  onClick={
                    closeDetails
                  }
                >
                  Close
                </button>

                <button
                  type="button"
                  className="admission-save-button"
                  onClick={() => {
                    closeDetails();

                    handleEdit(
                      selectedAdmission
                    );
                  }}
                >
                  <Pencil
                    size={16}
                  />

                  Edit Enquiry
                </button>

              </div>

            </div>

          </div>
        )}

      {/* ====================================== */}
      {/* EDIT MODAL */}
      {/* ====================================== */}

      {showEditForm &&
        editingAdmission && (
          <div
            className="admission-modal-overlay"
            onMouseDown={(e) => {
              if (
                e.target ===
                e.currentTarget
              ) {
                closeEdit();
              }
            }}
          >

            <div className="admission-modal admission-edit-modal">

              <div className="admission-modal-header">

                <div>
                  <span>
                    Edit Admission Enquiry
                  </span>

                  <h2>
                    {
                      editingAdmission.studentName
                    }
                  </h2>
                </div>

                <button
                  type="button"
                  className="admission-modal-close"
                  onClick={
                    closeEdit
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

                <div className="admission-modal-body">

                  <div className="admission-edit-grid">

                    {/* PARENT */}

                    <div className="admission-field">

                      <label>
                        Parent Name *
                      </label>

                      <input
                        type="text"
                        name="parentName"
                        value={
                          form.parentName
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Parent name"
                      />

                    </div>

                    {/* STUDENT */}

                    <div className="admission-field">

                      <label>
                        Student Name *
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
                        placeholder="Student name"
                      />

                    </div>

                    {/* CLASS */}

                    <div className="admission-field">

                      <label>
                        Class *
                      </label>

                      <input
                        type="text"
                        name="className"
                        value={
                          form.className
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Class"
                      />

                    </div>

                    {/* MOBILE */}

                    <div className="admission-field">

                      <label>
                        Mobile *
                      </label>

                      <input
                        type="tel"
                        name="mobile"
                        value={
                          form.mobile
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Mobile number"
                      />

                    </div>

                    {/* EMAIL */}

                    <div className="admission-field">

                      <label>
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={
                          form.email
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Email address"
                      />

                    </div>

                    {/* LOCATION */}

                    <div className="admission-field">

                      <label>
                        Location
                      </label>

                      <input
                        type="text"
                        name="location"
                        value={
                          form.location
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Location"
                      />

                    </div>

                    {/* STATUS */}

                    <div className="admission-field">

                      <label>
                        Status
                      </label>

                      <select
                        name="status"
                        value={
                          form.status
                        }
                        onChange={
                          handleChange
                        }
                      >
                        {STATUS_OPTIONS.map(
                          (
                            status
                          ) => (
                            <option
                              key={
                                status
                              }
                              value={
                                status
                              }
                            >
                              {getStatusLabel(
                                status
                              )}
                            </option>
                          )
                        )}
                      </select>

                    </div>

                    {/* MESSAGE */}

                    <div className="admission-field admission-field-full">

                      <label>
                        Message
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
                        placeholder="Admission enquiry message..."
                      />

                    </div>

                  </div>

                </div>

                <div className="admission-modal-footer">

                  <button
                    type="button"
                    className="admission-cancel-button"
                    onClick={
                      closeEdit
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="admission-save-button"
                    disabled={
                      saving
                    }
                  >
                    {saving ? (
                      <>
                        <RefreshCw
                          size={16}
                          className="admission-spin"
                        />

                        Saving...
                      </>
                    ) : (
                      <>
                        <CheckCircle2
                          size={16}
                        />

                        Save Changes
                      </>
                    )}
                  </button>

                </div>

              </form>

            </div>

          </div>
        )}

    </div>
  );
};

export default AdmissionManagement;