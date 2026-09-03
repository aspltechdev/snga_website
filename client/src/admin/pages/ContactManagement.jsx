import { useEffect, useMemo, useState } from "react";
import {
  Mail,
  MailOpen,
  Search,
  RefreshCw,
  Eye,
  Trash2,
  Check,
  X,
  Phone,
  User,
  Calendar,
  MessageSquare,
  Inbox,
  CircleAlert,
} from "lucide-react";

import api from "../../services/axios";
import "./ContactEnquiryManagement.css";

const ContactEnquiryManagement = () => {
  const [contacts, setContacts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const [selectedContact, setSelectedContact] =
    useState(null);

  // ==========================================
  // FETCH CONTACTS
  // ==========================================

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await api.get("/contact");

      setContacts(
        response.data?.data || []
      );
    } catch (err) {
      console.error(
        "Fetch contacts error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to fetch contact enquiries"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // ==========================================
  // CLEAR MESSAGES
  // ==========================================

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  // ==========================================
  // STATISTICS
  // ==========================================

  const totalCount = contacts.length;

  const unreadCount = contacts.filter(
    (contact) => !contact.isRead
  ).length;

  const readCount = contacts.filter(
    (contact) => contact.isRead
  ).length;

  // ==========================================
  // FILTER + SEARCH
  // ==========================================

  const filteredContacts = useMemo(() => {
    const keyword =
      search.trim().toLowerCase();

    return contacts.filter((contact) => {
      // ----------------------------------------
      // READ FILTER
      // ----------------------------------------

      if (
        filter === "UNREAD" &&
        contact.isRead
      ) {
        return false;
      }

      if (
        filter === "READ" &&
        !contact.isRead
      ) {
        return false;
      }

      // ----------------------------------------
      // SEARCH
      // ----------------------------------------

      if (!keyword) {
        return true;
      }

      return [
        contact.name,
        contact.email,
        contact.mobile,
        contact.subject,
        contact.message,
      ]
        .filter(Boolean)
        .some((value) =>
          String(value)
            .toLowerCase()
            .includes(keyword)
        );
    });
  }, [contacts, search, filter]);

  // ==========================================
  // MARK AS READ
  // ==========================================

  const handleMarkRead = async (
    contact
  ) => {
    try {
      setActionLoading(true);
      clearMessages();

      const response =
        await api.put(
          `/contact/${contact.id}/read`
        );

      const updatedContact =
        response.data?.data;

      setContacts((prev) =>
        prev.map((item) =>
          item.id === contact.id
            ? updatedContact || {
                ...item,
                isRead: true,
              }
            : item
        )
      );

      if (
        selectedContact?.id === contact.id
      ) {
        setSelectedContact(
          updatedContact || {
            ...contact,
            isRead: true,
          }
        );
      }

      setSuccess(
        "Enquiry marked as read"
      );
    } catch (err) {
      console.error(
        "Mark read error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to mark enquiry as read"
      );
    } finally {
      setActionLoading(false);
    }
  };

  // ==========================================
  // MARK AS UNREAD
  // ==========================================

  const handleMarkUnread = async (
    contact
  ) => {
    try {
      setActionLoading(true);
      clearMessages();

      const response =
        await api.put(
          `/contact/${contact.id}/unread`
        );

      const updatedContact =
        response.data?.data;

      setContacts((prev) =>
        prev.map((item) =>
          item.id === contact.id
            ? updatedContact || {
                ...item,
                isRead: false,
              }
            : item
        )
      );

      if (
        selectedContact?.id === contact.id
      ) {
        setSelectedContact(
          updatedContact || {
            ...contact,
            isRead: false,
          }
        );
      }

      setSuccess(
        "Enquiry marked as unread"
      );
    } catch (err) {
      console.error(
        "Mark unread error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to mark enquiry as unread"
      );
    } finally {
      setActionLoading(false);
    }
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (
    contact
  ) => {
    const confirmed = window.confirm(
      `Delete enquiry from ${contact.name}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setActionLoading(true);
      clearMessages();

      await api.delete(
        `/contact/${contact.id}`
      );

      setContacts((prev) =>
        prev.filter(
          (item) =>
            item.id !== contact.id
        )
      );

      if (
        selectedContact?.id === contact.id
      ) {
        setSelectedContact(null);
      }

      setSuccess(
        "Contact enquiry deleted successfully"
      );
    } catch (err) {
      console.error(
        "Delete contact error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete enquiry"
      );
    } finally {
      setActionLoading(false);
    }
  };

  // ==========================================
  // OPEN ENQUIRY
  // ==========================================

  const handleView = async (
    contact
  ) => {
    setSelectedContact(contact);

    // Automatically mark unread enquiry
    // as read when opened.

    if (!contact.isRead) {
      await handleMarkRead(contact);
    }
  };

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const formatDateTime = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleString(
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
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="contact-management">
        <div className="contact-loading">
          <RefreshCw
            size={20}
            className="contact-spin"
          />
          <span>
            Loading enquiries...
          </span>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="contact-management">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="contact-page-header">
        <div>
          <h1>Contact Enquiries</h1>

          <p>
            Manage messages and enquiries
            received through your website.
          </p>
        </div>

        <button
          type="button"
          className="contact-refresh-button"
          onClick={fetchContacts}
          disabled={actionLoading}
        >
          <RefreshCw size={15} />
          Refresh
        </button>
      </div>

      {/* =====================================
          ALERTS
      ====================================== */}

      {success && (
        <div className="contact-success">
          <Check size={15} />

          <span>{success}</span>

          <button
            type="button"
            onClick={() =>
              setSuccess("")
            }
          >
            <X size={14} />
          </button>
        </div>
      )}

      {error && (
        <div className="contact-error">
          <CircleAlert size={15} />

          <span>{error}</span>

          <button
            type="button"
            onClick={() =>
              setError("")
            }
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* =====================================
          STATS
      ====================================== */}

      <div className="contact-stats">

        <div className="contact-stat-card">
          <div className="contact-stat-icon">
            <Inbox size={18} />
          </div>

          <div>
            <span>Total Enquiries</span>
            <strong>{totalCount}</strong>
          </div>
        </div>

        <div className="contact-stat-card">
          <div className="contact-stat-icon unread">
            <Mail size={18} />
          </div>

          <div>
            <span>Unread</span>
            <strong>{unreadCount}</strong>
          </div>
        </div>

        <div className="contact-stat-card">
          <div className="contact-stat-icon read">
            <MailOpen size={18} />
          </div>

          <div>
            <span>Read</span>
            <strong>{readCount}</strong>
          </div>
        </div>

        <div className="contact-stat-card">
          <div className="contact-stat-icon messages">
            <MessageSquare size={18} />
          </div>

          <div>
            <span>Showing</span>
            <strong>
              {filteredContacts.length}
            </strong>
          </div>
        </div>

      </div>

      {/* =====================================
          TOOLBAR
      ====================================== */}

      <div className="contact-toolbar">

        <div className="contact-search">
          <Search size={16} />

          <input
            type="text"
            placeholder="Search enquiries..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              type="button"
              onClick={() =>
                setSearch("")
              }
            >
              <X size={13} />
            </button>
          )}
        </div>

        <div className="contact-filters">

          <button
            type="button"
            className={
              filter === "ALL"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("ALL")
            }
          >
            All
            <span>{totalCount}</span>
          </button>

          <button
            type="button"
            className={
              filter === "UNREAD"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("UNREAD")
            }
          >
            Unread
            <span>{unreadCount}</span>
          </button>

          <button
            type="button"
            className={
              filter === "READ"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("READ")
            }
          >
            Read
            <span>{readCount}</span>
          </button>

        </div>

      </div>

      {/* =====================================
          EMPTY STATE
      ====================================== */}

      {filteredContacts.length === 0 ? (
        <div className="contact-empty">

          <div className="contact-empty-icon">
            <Inbox size={30} />
          </div>

          <h2>
            {search || filter !== "ALL"
              ? "No enquiries found"
              : "No contact enquiries yet"}
          </h2>

          <p>
            {search || filter !== "ALL"
              ? "Try changing your search or filter."
              : "Website contact form submissions will appear here."}
          </p>

          {(search ||
            filter !== "ALL") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilter("ALL");
              }}
            >
              Clear Filters
            </button>
          )}

        </div>
      ) : (
        /* ===================================
           ENQUIRY LIST
        ==================================== */

        <div className="contact-list">

          {filteredContacts.map(
            (contact) => (
              <div
                key={contact.id}
                className={`contact-item ${
                  !contact.isRead
                    ? "contact-item-unread"
                    : ""
                }`}
              >

                {/* LEFT */}
                <div className="contact-item-left">

                  <div
                    className={`contact-mail-icon ${
                      contact.isRead
                        ? "read"
                        : "unread"
                    }`}
                  >
                    {contact.isRead ? (
                      <MailOpen size={18} />
                    ) : (
                      <Mail size={18} />
                    )}
                  </div>

                  <div className="contact-main">

                    <div className="contact-name-row">

                      <h3>
                        {contact.name}
                      </h3>

                      {!contact.isRead && (
                        <span className="contact-unread-dot">
                          New
                        </span>
                      )}

                    </div>

                    <div className="contact-meta">

                      {contact.email && (
                        <span>
                          <Mail size={12} />
                          {contact.email}
                        </span>
                      )}

                      {contact.mobile && (
                        <span>
                          <Phone size={12} />
                          {contact.mobile}
                        </span>
                      )}

                    </div>

                    {contact.subject && (
                      <div className="contact-subject">
                        {contact.subject}
                      </div>
                    )}

                    <p className="contact-message-preview">
                      {contact.message}
                    </p>

                  </div>
                </div>

                {/* RIGHT */}
                <div className="contact-item-right">

                  <div className="contact-date">
                    <Calendar size={12} />
                    {formatDate(
                      contact.createdAt
                    )}
                  </div>

                  <div className="contact-actions">

                    <button
                      type="button"
                      title="View enquiry"
                      onClick={() =>
                        handleView(
                          contact
                        )
                      }
                    >
                      <Eye size={15} />
                      View
                    </button>

                    {contact.isRead ? (
                      <button
                        type="button"
                        title="Mark unread"
                        onClick={() =>
                          handleMarkUnread(
                            contact
                          )
                        }
                        disabled={
                          actionLoading
                        }
                      >
                        <Mail size={15} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        title="Mark read"
                        onClick={() =>
                          handleMarkRead(
                            contact
                          )
                        }
                        disabled={
                          actionLoading
                        }
                      >
                        <Check size={15} />
                      </button>
                    )}

                    <button
                      type="button"
                      className="delete"
                      title="Delete enquiry"
                      onClick={() =>
                        handleDelete(
                          contact
                        )
                      }
                      disabled={
                        actionLoading
                      }
                    >
                      <Trash2 size={15} />
                    </button>

                  </div>

                </div>

              </div>
            )
          )}

        </div>
      )}

      {/* =====================================
          VIEW MODAL
      ====================================== */}

      {selectedContact && (
        <div
          className="contact-modal-overlay"
          onMouseDown={(e) => {
            if (
              e.target ===
              e.currentTarget
            ) {
              setSelectedContact(
                null
              );
            }
          }}
        >

          <div className="contact-modal">

            {/* MODAL HEADER */}

            <div className="contact-modal-header">

              <div>
                <span className="contact-modal-label">
                  Contact Enquiry
                </span>

                <h2>
                  {selectedContact.subject ||
                    "Website Enquiry"}
                </h2>
              </div>

              <button
                type="button"
                className="contact-modal-close"
                onClick={() =>
                  setSelectedContact(
                    null
                  )
                }
              >
                <X size={17} />
              </button>

            </div>

            {/* MODAL BODY */}

            <div className="contact-modal-body">

              {/* PERSON */}

              <div className="contact-detail-person">

                <div className="contact-detail-avatar">
                  <User size={23} />
                </div>

                <div>
                  <strong>
                    {selectedContact.name}
                  </strong>

                  <span>
                    {selectedContact.email ||
                      "No email provided"}
                  </span>
                </div>

              </div>

              {/* DETAILS */}

              <div className="contact-detail-grid">

                <div className="contact-detail-box">

                  <span>
                    <Mail size={13} />
                    Email
                  </span>

                  {selectedContact.email ? (
                    <a
                      href={`mailto:${selectedContact.email}`}
                    >
                      {
                        selectedContact.email
                      }
                    </a>
                  ) : (
                    <strong>
                      Not provided
                    </strong>
                  )}

                </div>

                <div className="contact-detail-box">

                  <span>
                    <Phone size={13} />
                    Mobile
                  </span>

                  {selectedContact.mobile ? (
                    <a
                      href={`tel:${selectedContact.mobile}`}
                    >
                      {
                        selectedContact.mobile
                      }
                    </a>
                  ) : (
                    <strong>
                      Not provided
                    </strong>
                  )}

                </div>

                <div className="contact-detail-box">

                  <span>
                    <Calendar size={13} />
                    Received
                  </span>

                  <strong>
                    {formatDateTime(
                      selectedContact.createdAt
                    )}
                  </strong>

                </div>

                <div className="contact-detail-box">

                  <span>
                    {selectedContact.isRead ? (
                      <MailOpen size={13} />
                    ) : (
                      <Mail size={13} />
                    )}
                    Status
                  </span>

                  <strong
                    className={
                      selectedContact.isRead
                        ? "status-read"
                        : "status-unread"
                    }
                  >
                    {selectedContact.isRead
                      ? "Read"
                      : "Unread"}
                  </strong>

                </div>

              </div>

              {/* MESSAGE */}

              <div className="contact-detail-message">

                <div className="contact-detail-message-title">
                  <MessageSquare size={15} />
                  <span>Message</span>
                </div>

                <div className="contact-message-content">
                  {selectedContact.message}
                </div>

              </div>

            </div>

            {/* MODAL FOOTER */}

            <div className="contact-modal-footer">

              {selectedContact.isRead ? (
                <button
                  type="button"
                  className="contact-secondary-button"
                  onClick={() =>
                    handleMarkUnread(
                      selectedContact
                    )
                  }
                  disabled={
                    actionLoading
                  }
                >
                  <Mail size={15} />
                  Mark Unread
                </button>
              ) : (
                <button
                  type="button"
                  className="contact-secondary-button"
                  onClick={() =>
                    handleMarkRead(
                      selectedContact
                    )
                  }
                  disabled={
                    actionLoading
                  }
                >
                  <Check size={15} />
                  Mark Read
                </button>
              )}

              <div className="contact-footer-right">

                <button
                  type="button"
                  className="contact-delete-button"
                  onClick={() =>
                    handleDelete(
                      selectedContact
                    )
                  }
                  disabled={
                    actionLoading
                  }
                >
                  <Trash2 size={15} />
                  Delete
                </button>

                <button
                  type="button"
                  className="contact-close-button"
                  onClick={() =>
                    setSelectedContact(
                      null
                    )
                  }
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default ContactEnquiryManagement;