// import { useEffect, useState } from "react";
// import {
//   Plus,
//   Pencil,
//   Trash2,
//   Power,
//   RefreshCw,
//   Image as ImageIcon,
//   X,
// } from "lucide-react";

// import api from "../../services/axios";

// import "./NewsManagement.css";

// const emptyForm = {
//   title: "",
//   slug: "",
//   excerpt: "",
//   content: "",
//   image: "",
//   category: "",
//   isPublished: false,
//   publishedAt: "",
// };

// const NewsManagement = () => {
//   const [news, setNews] = useState([]);

//   const [form, setForm] =
//     useState(emptyForm);

//   const [showForm, setShowForm] =
//     useState(false);

//   const [editingId, setEditingId] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [saving, setSaving] =
//     useState(false);

//   const [deletingId, setDeletingId] =
//     useState(null);

//   const [error, setError] =
//     useState("");

//   const [success, setSuccess] =
//     useState("");

//   // ==========================================
//   // IMAGE URL
//   // ==========================================

//   const getImageUrl = (image) => {
//     if (!image) {
//       return "";
//     }

//     const value = String(image).trim();

//     if (
//       value.startsWith("http://") ||
//       value.startsWith("https://") ||
//       value.startsWith("data:image/")
//     ) {
//       return value;
//     }

//     const apiUrl =
//       import.meta.env.VITE_API_URL ||
//       "http://localhost:5000/api";

//     const serverUrl =
//       apiUrl.replace(/\/api\/?$/, "");

//     if (value.startsWith("/")) {
//       return `${serverUrl}${value}`;
//     }

//     if (value.startsWith("uploads/")) {
//       return `${serverUrl}/${value}`;
//     }

//     return `${serverUrl}/uploads/${value}`;
//   };

//   // ==========================================
//   // LOAD NEWS
//   // ==========================================

//   const loadNews = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response =
//         await api.get("/news");

//       setNews(
//         response.data?.data || []
//       );
//     } catch (err) {
//       console.error(
//         "Load news error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to load news"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // INITIAL LOAD
//   // ==========================================

//   useEffect(() => {
//     loadNews();
//   }, []);

//   // ==========================================
//   // ADD
//   // ==========================================

//   const handleAddNews = () => {
//     setEditingId(null);

//     setForm(emptyForm);

//     setError("");
//     setSuccess("");

//     setShowForm(true);
//   };

//   // ==========================================
//   // EDIT
//   // ==========================================

//   const handleEdit = (item) => {
//     setEditingId(item.id);

//     setForm({
//       title: item.title || "",
//       slug: item.slug || "",
//       excerpt: item.excerpt || "",
//       content: item.content || "",
//       image: item.image || "",
//       category: item.category || "",
//       isPublished:
//         item.isPublished ?? false,
//       publishedAt: item.publishedAt
//         ? item.publishedAt.substring(
//             0,
//             16
//           )
//         : "",
//     });

//     setError("");
//     setSuccess("");

//     setShowForm(true);
//   };

//   // ==========================================
//   // CLOSE
//   // ==========================================

//   const handleClose = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setForm(emptyForm);
//     setError("");
//   };

//   // ==========================================
//   // INPUT
//   // ==========================================

//   const handleChange = (e) => {
//     const {
//       name,
//       value,
//       type,
//       checked,
//     } = e.target;

//     setForm((previous) => ({
//       ...previous,

//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,
//     }));
//   };

//   // ==========================================
//   // AUTO SLUG
//   // ==========================================

//   const generateSlug = () => {
//     if (!form.title.trim()) {
//       return;
//     }

//     const slug = form.title
//       .toLowerCase()
//       .trim()
//       .replace(
//         /[^a-z0-9\s-]/g,
//         ""
//       )
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");

//     setForm((previous) => ({
//       ...previous,
//       slug,
//     }));
//   };

//   // ==========================================
//   // SAVE
//   // ==========================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     if (!form.title.trim()) {
//       setError(
//         "News title is required"
//       );
//       return;
//     }

//     if (!form.slug.trim()) {
//       setError(
//         "News slug is required"
//       );
//       return;
//     }

//     if (!form.content.trim()) {
//       setError(
//         "News content is required"
//       );
//       return;
//     }

//     try {
//       setSaving(true);

//       const payload = {
//         title: form.title.trim(),

//         slug: form.slug.trim(),

//         excerpt:
//           form.excerpt.trim() ||
//           null,

//         content:
//           form.content.trim(),

//         image:
//           form.image.trim() ||
//           null,

//         category:
//           form.category.trim() ||
//           null,

//         isPublished:
//           form.isPublished,

//         publishedAt:
//           form.publishedAt ||
//           null,
//       };

//       let response;

//       // ======================================
//       // CREATE
//       // ======================================

//       if (!editingId) {
//         response = await api.post(
//           "/news",
//           payload
//         );

//         setSuccess(
//           "News created successfully"
//         );

//         setNews((previous) => [
//           response.data.data,
//           ...previous,
//         ]);
//       }

//       // ======================================
//       // UPDATE
//       // ======================================

//       else {
//         response = await api.put(
//           `/news/${editingId}`,
//           payload
//         );

//         setSuccess(
//           "News updated successfully"
//         );

//         setNews((previous) =>
//           previous.map((item) =>
//             item.id === editingId
//               ? response.data.data
//               : item
//           )
//         );
//       }

//       setShowForm(false);
//       setEditingId(null);
//       setForm(emptyForm);
//     } catch (err) {
//       console.error(
//         "Save news error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to save news"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ==========================================
//   // DELETE
//   // ==========================================

//   const handleDelete = async (item) => {
//     const confirmed =
//       window.confirm(
//         `Delete "${item.title}"?`
//       );

//     if (!confirmed) {
//       return;
//     }

//     try {
//       setDeletingId(item.id);

//       setError("");
//       setSuccess("");

//       await api.delete(
//         `/news/${item.id}`
//       );

//       setNews((previous) =>
//         previous.filter(
//           (newsItem) =>
//             newsItem.id !== item.id
//         )
//       );

//       setSuccess(
//         "News deleted successfully"
//       );
//     } catch (err) {
//       console.error(
//         "Delete news error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to delete news"
//       );
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   // ==========================================
//   // TOGGLE PUBLISH
//   // ==========================================

//   const handleTogglePublish = async (
//     item
//   ) => {
//     try {
//       setError("");

//       const response =
//         await api.put(
//           `/news/${item.id}`,
//           {
//             isPublished:
//               !item.isPublished,
//           }
//         );

//       const updatedNews =
//         response.data?.data;

//       setNews((previous) =>
//         previous.map((newsItem) =>
//           newsItem.id === item.id
//             ? updatedNews
//             : newsItem
//         )
//       );
//     } catch (err) {
//       console.error(
//         "Toggle publish error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to update status"
//       );
//     }
//   };

//   // ==========================================
//   // LOADING
//   // ==========================================

//   if (loading) {
//     return (
//       <div className="news-management-loading">

//         <RefreshCw
//           size={22}
//           className="news-spin"
//         />

//         Loading news...

//       </div>
//     );
//   }

//   // ==========================================
//   // RENDER
//   // ==========================================

//   return (
//     <div className="news-management">

//       {/* ====================================== */}
//       {/* HEADER */}
//       {/* ====================================== */}

//       <div className="news-page-header">

//         <div>

//           <h1>
//             News
//           </h1>

//           <p>
//             Manage news and announcements
//             on your website.
//           </p>

//         </div>

//         <div className="news-header-actions">

//           <button
//             type="button"
//             className="news-refresh-button"
//             onClick={loadNews}
//           >
//             <RefreshCw size={17} />

//             Refresh
//           </button>

//           <button
//             type="button"
//             className="news-add-button"
//             onClick={handleAddNews}
//           >
//             <Plus size={19} />

//             Add News
//           </button>

//         </div>

//       </div>

//       {/* ====================================== */}
//       {/* MESSAGES */}
//       {/* ====================================== */}

//       {success && (
//         <div className="news-success">
//           {success}
//         </div>
//       )}

//       {error && (
//         <div className="news-error">
//           {error}
//         </div>
//       )}

//       {/* ====================================== */}
//       {/* FORM */}
//       {/* ====================================== */}

//       {showForm && (
//         <div className="news-form-card">

//           <div className="news-form-header">

//             <div>

//               <h2>
//                 {editingId
//                   ? "Edit News"
//                   : "Add News"}
//               </h2>

//               <p>
//                 Create or update a news
//                 article.
//               </p>

//             </div>

//             <button
//               type="button"
//               className="news-close-button"
//               onClick={handleClose}
//             >
//               <X size={20} />
//             </button>

//           </div>

//           <form
//             onSubmit={handleSubmit}
//           >

//             <div className="news-form-grid">

//               {/* TITLE */}

//               <div className="news-field">

//                 <label>
//                   Title *
//                 </label>

//                 <input
//                   type="text"
//                   name="title"
//                   value={form.title}
//                   onChange={handleChange}
//                   placeholder="Enter news title"
//                 />

//               </div>

//               {/* CATEGORY */}

//               <div className="news-field">

//                 <label>
//                   Category
//                 </label>

//                 <input
//                   type="text"
//                   name="category"
//                   value={form.category}
//                   onChange={handleChange}
//                   placeholder="Events"
//                 />

//               </div>

//               {/* SLUG */}

//               <div className="news-field">

//                 <label>
//                   Slug *
//                 </label>

//                 <div className="news-slug-row">

//                   <input
//                     type="text"
//                     name="slug"
//                     value={form.slug}
//                     onChange={handleChange}
//                     placeholder="news-title"
//                   />

//                   <button
//                     type="button"
//                     onClick={
//                       generateSlug
//                     }
//                   >
//                     Generate
//                   </button>

//                 </div>

//               </div>

//               {/* IMAGE */}

//               <div className="news-field">

//                 <label>
//                   Image URL
//                 </label>

//                 <input
//                   type="text"
//                   name="image"
//                   value={form.image}
//                   onChange={handleChange}
//                   placeholder="/uploads/news.jpg"
//                 />

//               </div>

//               {/* EXCERPT */}

//               <div className="news-field news-full">

//                 <label>
//                   Excerpt
//                 </label>

//                 <textarea
//                   name="excerpt"
//                   value={form.excerpt}
//                   onChange={handleChange}
//                   rows="3"
//                   placeholder="Short summary of the news..."
//                 />

//               </div>

//               {/* CONTENT */}

//               <div className="news-field news-full">

//                 <label>
//                   Content *
//                 </label>

//                 <textarea
//                   name="content"
//                   value={form.content}
//                   onChange={handleChange}
//                   rows="10"
//                   placeholder="Write the complete news content..."
//                 />

//               </div>

//               {/* IMAGE PREVIEW */}

//               {form.image && (
//                 <div className="news-field news-full">

//                   <label>
//                     Image Preview
//                   </label>

//                   <img
//                     src={getImageUrl(
//                       form.image
//                     )}
//                     alt="News preview"
//                     className="news-form-image"
//                   />

//                 </div>
//               )}

//               {/* PUBLISH */}

//               <div className="news-publish-field">

//                 <input
//                   type="checkbox"
//                   id="publish-news"
//                   name="isPublished"
//                   checked={
//                     form.isPublished
//                   }
//                   onChange={handleChange}
//                 />

//                 <label htmlFor="publish-news">
//                   Publish this news
//                 </label>

//               </div>

//               {/* PUBLISHED DATE */}

//               {form.isPublished && (
//                 <div className="news-field">

//                   <label>
//                     Published At
//                   </label>

//                   <input
//                     type="datetime-local"
//                     name="publishedAt"
//                     value={
//                       form.publishedAt
//                     }
//                     onChange={handleChange}
//                   />

//                 </div>
//               )}

//             </div>

//             {/* FORM ACTIONS */}

//             <div className="news-form-actions">

//               <button
//                 type="button"
//                 className="news-cancel-button"
//                 onClick={handleClose}
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="news-save-button"
//                 disabled={saving}
//               >
//                 {saving
//                   ? "Saving..."
//                   : editingId
//                     ? "Update News"
//                     : "Add News"}
//               </button>

//             </div>

//           </form>

//         </div>
//       )}

//       {/* ====================================== */}
//       {/* TABLE */}
//       {/* ====================================== */}

//       {!showForm && (
//         <div className="news-table-wrapper">

//           {news.length === 0 ? (
//             <div className="news-empty">

//               <div className="news-empty-icon">
//                 <ImageIcon size={30} />
//               </div>

//               <h2>
//                 No News Found
//               </h2>

//               <p>
//                 Add your first news article.
//               </p>

//               <button
//                 type="button"
//                 className="news-add-button"
//                 onClick={handleAddNews}
//               >
//                 <Plus size={18} />

//                 Add News
//               </button>

//             </div>
//           ) : (
//             <table className="news-table">

//               <thead>

//                 <tr>

//                   <th>
//                     IMAGE
//                   </th>

//                   <th>
//                     CONTENT
//                   </th>

//                   <th>
//                     CATEGORY
//                   </th>

//                   <th>
//                     STATUS
//                   </th>

//                   <th>
//                     ACTIONS
//                   </th>

//                 </tr>

//               </thead>

//               <tbody>

//                 {news.map((item) => (
//                   <tr key={item.id}>

//                     {/* IMAGE */}

//                     <td>

//                       <div className="news-table-image">

//                         {item.image ? (
//                           <img
//                             src={getImageUrl(
//                               item.image
//                             )}
//                             alt={
//                               item.title
//                             }
//                           />
//                         ) : (
//                           <ImageIcon
//                             size={26}
//                           />
//                         )}

//                       </div>

//                     </td>

//                     {/* CONTENT */}

//                     <td>

//                       <div className="news-content-cell">

//                         <strong>
//                           {item.title}
//                         </strong>

//                         {item.excerpt && (
//                           <span>
//                             {item.excerpt}
//                           </span>
//                         )}

//                         <small>
//                           /{item.slug}
//                         </small>

//                       </div>

//                     </td>

//                     {/* CATEGORY */}

//                     <td>

//                       {item.category ? (
//                         <span className="news-category">
//                           {item.category}
//                         </span>
//                       ) : (
//                         <span className="news-no-value">
//                           No category
//                         </span>
//                       )}

//                     </td>

//                     {/* STATUS */}

//                     <td>

//                       <button
//                         type="button"
//                         className={
//                           item.isPublished
//                             ? "news-status published"
//                             : "news-status draft"
//                         }
//                         onClick={() =>
//                           handleTogglePublish(
//                             item
//                           )
//                         }
//                       >

//                         <Power size={16} />

//                         {item.isPublished
//                           ? "Published"
//                           : "Draft"}

//                       </button>

//                     </td>

//                     {/* ACTIONS */}

//                     <td>

//                       <div className="news-actions">

//                         <button
//                           type="button"
//                           className="news-action edit"
//                           onClick={() =>
//                             handleEdit(
//                               item
//                             )
//                           }
//                           title="Edit"
//                         >
//                           <Pencil
//                             size={19}
//                           />
//                         </button>

//                         <button
//                           type="button"
//                           className="news-action delete"
//                           onClick={() =>
//                             handleDelete(
//                               item
//                             )
//                           }
//                           disabled={
//                             deletingId ===
//                             item.id
//                           }
//                           title="Delete"
//                         >
//                           <Trash2
//                             size={19}
//                           />
//                         </button>

//                       </div>

//                     </td>

//                   </tr>
//                 ))}

//               </tbody>

//             </table>
//           )}

//         </div>
//       )}

//     </div>
//   );
// };

// export default NewsManagement;


import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Power,
  RefreshCw,
  Image as ImageIcon,
  X,
  Upload,
} from "lucide-react";

import api from "../../services/axios";

import "./NewsManagement.css";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  image: "",
  category: "",
  isPublished: false,
  publishedAt: "",
};

const NewsManagement = () => {
  const [news, setNews] = useState([]);

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
  // IMAGE URL
  // ==========================================

  const getImageUrl = (image) => {
    if (!image) {
      return "";
    }

    const value = String(image).trim();

    // Already complete URL
    if (
      value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("data:image/")
    ) {
      return value;
    }

    const apiUrl =
      import.meta.env.VITE_API_URL ||
      "http://localhost:5000/api";

    const serverUrl =
      apiUrl.replace(/\/api\/?$/, "");

    // /uploads/image.jpg
    if (value.startsWith("/")) {
      return `${serverUrl}${value}`;
    }

    // uploads/image.jpg
    if (value.startsWith("uploads/")) {
      return `${serverUrl}/${value}`;
    }

    // image.jpg
    return `${serverUrl}/uploads/${value}`;
  };

  // ==========================================
  // LOAD NEWS
  // ==========================================

  const loadNews = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await api.get("/news");

      setNews(
        response.data?.data || []
      );
    } catch (err) {
      console.error(
        "Load news error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load news"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    loadNews();
  }, []);

  // ==========================================
  // ADD NEWS
  // ==========================================

  const handleAddNews = () => {
    setEditingId(null);

    setForm(emptyForm);

    setError("");
    setSuccess("");

    setShowForm(true);
  };

  // ==========================================
  // EDIT NEWS
  // ==========================================

  const handleEdit = (item) => {
    setEditingId(item.id);

    setForm({
      title: item.title || "",
      slug: item.slug || "",
      excerpt: item.excerpt || "",
      content: item.content || "",
      image: item.image || "",
      category: item.category || "",
      isPublished:
        item.isPublished ?? false,
      publishedAt: item.publishedAt
        ? formatDateTimeLocal(
            item.publishedAt
          )
        : "",
    });

    setError("");
    setSuccess("");

    setShowForm(true);
  };

  // ==========================================
  // FORMAT DATE FOR INPUT
  // ==========================================

  const formatDateTimeLocal = (
    date
  ) => {
    const parsedDate =
      new Date(date);

    if (
      Number.isNaN(
        parsedDate.getTime()
      )
    ) {
      return "";
    }

    const year =
      parsedDate.getFullYear();

    const month = String(
      parsedDate.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      parsedDate.getDate()
    ).padStart(2, "0");

    const hours = String(
      parsedDate.getHours()
    ).padStart(2, "0");

    const minutes = String(
      parsedDate.getMinutes()
    ).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  // ==========================================
  // CLOSE FORM
  // ==========================================

  const handleClose = () => {
    setShowForm(false);

    setEditingId(null);

    setForm(emptyForm);

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
  // GENERATE SLUG
  // ==========================================

  const generateSlug = () => {
    if (!form.title.trim()) {
      setError(
        "Enter a title first"
      );

      return;
    }

    const slug = form.title
      .toLowerCase()
      .trim()
      .replace(
        /[^a-z0-9\s-]/g,
        ""
      )
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setForm((previous) => ({
      ...previous,
      slug,
    }));

    setError("");
  };

  // ==========================================
  // IMAGE UPLOAD
  // ==========================================

  const handleImageUpload = async (
    e
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) {
      return;
    }

    // ------------------------------------------
    // Validate type
    // ------------------------------------------

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError(
        "Only JPG, PNG and WEBP images are allowed"
      );

      e.target.value = "";

      return;
    }

    // ------------------------------------------
    // Validate size
    // ------------------------------------------

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
        "News image upload response:",
        response.data
      );

      const imageUrl =
        response.data?.data?.url;

      if (!imageUrl) {
        throw new Error(
          "Image URL was not returned by the server"
        );
      }

      setForm((previous) => ({
        ...previous,
        image: imageUrl,
      }));

      setSuccess(
        "News image uploaded successfully"
      );
    } catch (err) {
      console.error(
        "News image upload error:",
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
  // REMOVE IMAGE
  // ==========================================

  const handleRemoveImage = () => {
    setForm((previous) => ({
      ...previous,
      image: "",
    }));

    setSuccess("");
  };

  // ==========================================
  // SAVE NEWS
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // ------------------------------------------
    // Validation
    // ------------------------------------------

    if (!form.title.trim()) {
      setError(
        "News title is required"
      );

      return;
    }

    if (!form.slug.trim()) {
      setError(
        "News slug is required"
      );

      return;
    }

    if (!form.content.trim()) {
      setError(
        "News content is required"
      );

      return;
    }

    try {
      setSaving(true);

      const payload = {
        title:
          form.title.trim(),

        slug:
          form.slug.trim(),

        excerpt:
          form.excerpt.trim() ||
          null,

        content:
          form.content.trim(),

        image:
          form.image.trim() ||
          null,

        category:
          form.category.trim() ||
          null,

        isPublished:
          form.isPublished,

        publishedAt:
          form.isPublished &&
          form.publishedAt
            ? new Date(
                form.publishedAt
              ).toISOString()
            : null,
      };

      let response;

      // ======================================
      // CREATE
      // ======================================

      if (!editingId) {
        response =
          await api.post(
            "/news",
            payload
          );

        const createdNews =
          response.data?.data;

        setNews((previous) => [
          createdNews,
          ...previous,
        ]);

        setSuccess(
          "News created successfully"
        );
      }

      // ======================================
      // UPDATE
      // ======================================

      else {
        response =
          await api.put(
            `/news/${editingId}`,
            payload
          );

        const updatedNews =
          response.data?.data;

        setNews((previous) =>
          previous.map((item) =>
            item.id === editingId
              ? updatedNews
              : item
          )
        );

        setSuccess(
          "News updated successfully"
        );
      }

      setShowForm(false);

      setEditingId(null);

      setForm(emptyForm);
    } catch (err) {
      console.error(
        "Save news error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to save news"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // DELETE NEWS
  // ==========================================

  const handleDelete = async (
    item
  ) => {
    const confirmed =
      window.confirm(
        `Are you sure you want to delete "${item.title}"?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(item.id);

      setError("");
      setSuccess("");

      await api.delete(
        `/news/${item.id}`
      );

      setNews((previous) =>
        previous.filter(
          (newsItem) =>
            newsItem.id !== item.id
        )
      );

      setSuccess(
        "News deleted successfully"
      );
    } catch (err) {
      console.error(
        "Delete news error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete news"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // TOGGLE PUBLISH
  // ==========================================

  const handleTogglePublish = async (
    item
  ) => {
    try {
      setError("");

      const response =
        await api.put(
          `/news/${item.id}`,
          {
            isPublished:
              !item.isPublished,
          }
        );

      const updatedNews =
        response.data?.data;

      setNews((previous) =>
        previous.map((newsItem) =>
          newsItem.id === item.id
            ? updatedNews
            : newsItem
        )
      );
    } catch (err) {
      console.error(
        "Toggle publish error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to update status"
      );
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="news-management-loading">

        <RefreshCw
          size={22}
          className="news-spin"
        />

        <span>
          Loading news...
        </span>

      </div>
    );
  }

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="news-management">

      {/* ====================================== */}
      {/* PAGE HEADER */}
      {/* ====================================== */}

      <div className="news-page-header">

        <div>

          <h1>
            News
          </h1>

          <p>
            Manage news and announcements
            on your website.
          </p>

        </div>

        <div className="news-header-actions">

          <button
            type="button"
            className="news-refresh-button"
            onClick={loadNews}
          >
            <RefreshCw
              size={17}
            />

            Refresh
          </button>

          <button
            type="button"
            className="news-add-button"
            onClick={handleAddNews}
          >
            <Plus size={19} />

            Add News
          </button>

        </div>

      </div>

      {/* ====================================== */}
      {/* SUCCESS MESSAGE */}
      {/* ====================================== */}

      {success && (
        <div className="news-success">
          {success}
        </div>
      )}

      {/* ====================================== */}
      {/* ERROR MESSAGE */}
      {/* ====================================== */}

      {error && (
        <div className="news-error">
          {error}
        </div>
      )}

      {/* ====================================== */}
      {/* ADD / EDIT FORM */}
      {/* ====================================== */}

      {showForm && (
        <div className="news-form-card">

          <div className="news-form-header">

            <div>

              <h2>
                {editingId
                  ? "Edit News"
                  : "Add News"}
              </h2>

              <p>
                Create or update a
                news article.
              </p>

            </div>

            <button
              type="button"
              className="news-close-button"
              onClick={handleClose}
            >
              <X size={20} />
            </button>

          </div>

          <form
            onSubmit={handleSubmit}
          >

            <div className="news-form-grid">

              {/* ================================= */}
              {/* TITLE */}
              {/* ================================= */}

              <div className="news-field">

                <label>
                  Title *
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter news title"
                />

              </div>

              {/* ================================= */}
              {/* CATEGORY */}
              {/* ================================= */}

              <div className="news-field">

                <label>
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={
                    form.category
                  }
                  onChange={handleChange}
                  placeholder="Events"
                />

              </div>

              {/* ================================= */}
              {/* SLUG */}
              {/* ================================= */}

              <div className="news-field">

                <label>
                  Slug *
                </label>

                <div className="news-slug-row">

                  <input
                    type="text"
                    name="slug"
                    value={form.slug}
                    onChange={handleChange}
                    placeholder="news-title"
                  />

                  <button
                    type="button"
                    onClick={
                      generateSlug
                    }
                  >
                    Generate
                  </button>

                </div>

              </div>

              {/* ================================= */}
              {/* IMAGE UPLOAD */}
              {/* ================================= */}

              <div className="news-field">

                <label>
                  News Image
                </label>

                <div className="news-upload-box">

                  {form.image ? (
                    <div className="news-upload-preview">

                      <img
                        src={getImageUrl(
                          form.image
                        )}
                        alt="News preview"
                      />

                      <button
                        type="button"
                        className="news-remove-image"
                        onClick={
                          handleRemoveImage
                        }
                      >
                        <Trash2
                          size={15}
                        />

                        Remove Image
                      </button>

                    </div>
                  ) : (
                    <label
                      htmlFor="news-image-upload"
                      className="news-upload-label"
                    >

                      {uploading ? (
                        <>
                          <RefreshCw
                            size={35}
                            className="news-spin"
                          />

                          <strong>
                            Uploading...
                          </strong>
                        </>
                      ) : (
                        <>
                          <Upload
                            size={35}
                          />

                          <strong>
                            Upload News Image
                          </strong>

                          <span>
                            Click to choose
                            an image
                          </span>

                          <small>
                            JPG, PNG, WEBP
                            · Max 5 MB
                          </small>
                        </>
                      )}

                    </label>
                  )}

                </div>

                <input
                  id="news-image-upload"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={
                    handleImageUpload
                  }
                  disabled={uploading}
                  hidden
                />

              </div>

              {/* ================================= */}
              {/* EXCERPT */}
              {/* ================================= */}

              <div className="news-field news-full">

                <label>
                  Excerpt
                </label>

                <textarea
                  name="excerpt"
                  value={
                    form.excerpt
                  }
                  onChange={handleChange}
                  rows="3"
                  placeholder="Short summary of the news..."
                />

              </div>

              {/* ================================= */}
              {/* CONTENT */}
              {/* ================================= */}

              <div className="news-field news-full">

                <label>
                  Content *
                </label>

                <textarea
                  name="content"
                  value={
                    form.content
                  }
                  onChange={handleChange}
                  rows="10"
                  placeholder="Write the complete news content..."
                />

              </div>

              {/* ================================= */}
              {/* PUBLISH */}
              {/* ================================= */}

              <div className="news-publish-field">

                <input
                  type="checkbox"
                  id="publish-news"
                  name="isPublished"
                  checked={
                    form.isPublished
                  }
                  onChange={
                    handleChange
                  }
                />

                <label htmlFor="publish-news">
                  Publish this news
                </label>

              </div>

              {/* ================================= */}
              {/* PUBLISHED DATE */}
              {/* ================================= */}

              {form.isPublished && (
                <div className="news-field">

                  <label>
                    Published At
                  </label>

                  <input
                    type="datetime-local"
                    name="publishedAt"
                    value={
                      form.publishedAt
                    }
                    onChange={
                      handleChange
                    }
                  />

                </div>
              )}

            </div>

            {/* ================================= */}
            {/* ACTIONS */}
            {/* ================================= */}

            <div className="news-form-actions">

              <button
                type="button"
                className="news-cancel-button"
                onClick={handleClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="news-save-button"
                disabled={
                  saving ||
                  uploading
                }
              >

                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update News"
                    : "Add News"}

              </button>

            </div>

          </form>

        </div>
      )}

      {/* ====================================== */}
      {/* NEWS TABLE */}
      {/* ====================================== */}

      {!showForm && (
        <div className="news-table-wrapper">

          {news.length === 0 ? (
            <div className="news-empty">

              <div className="news-empty-icon">
                <ImageIcon
                  size={30}
                />
              </div>

              <h2>
                No News Found
              </h2>

              <p>
                Add your first news
                article.
              </p>

              <button
                type="button"
                className="news-add-button"
                onClick={
                  handleAddNews
                }
              >
                <Plus size={18} />

                Add News
              </button>

            </div>
          ) : (
            <table className="news-table">

              <thead>

                <tr>

                  <th>
                    IMAGE
                  </th>

                  <th>
                    CONTENT
                  </th>

                  <th>
                    CATEGORY
                  </th>

                  <th>
                    STATUS
                  </th>

                  <th>
                    ACTIONS
                  </th>

                </tr>

              </thead>

              <tbody>

                {news.map((item) => (
                  <tr
                    key={item.id}
                  >

                    {/* IMAGE */}

                    <td>

                      <div className="news-table-image">

                        {item.image ? (
                          <img
                            src={getImageUrl(
                              item.image
                            )}
                            alt={
                              item.title
                            }
                          />
                        ) : (
                          <ImageIcon
                            size={26}
                          />
                        )}

                      </div>

                    </td>

                    {/* CONTENT */}

                    <td>

                      <div className="news-content-cell">

                        <strong>
                          {item.title}
                        </strong>

                        {item.excerpt && (
                          <span>
                            {
                              item.excerpt
                            }
                          </span>
                        )}

                        <small>
                          /{item.slug}
                        </small>

                      </div>

                    </td>

                    {/* CATEGORY */}

                    <td>

                      {item.category ? (
                        <span className="news-category">
                          {
                            item.category
                          }
                        </span>
                      ) : (
                        <span className="news-no-value">
                          No category
                        </span>
                      )}

                    </td>

                    {/* STATUS */}

                    <td>

                      <button
                        type="button"
                        className={
                          item.isPublished
                            ? "news-status published"
                            : "news-status draft"
                        }
                        onClick={() =>
                          handleTogglePublish(
                            item
                          )
                        }
                        title="Toggle publish status"
                      >

                        <Power
                          size={16}
                        />

                        {item.isPublished
                          ? "Published"
                          : "Draft"}

                      </button>

                    </td>

                    {/* ACTIONS */}

                    <td>

                      <div className="news-actions">

                        <button
                          type="button"
                          className="news-action edit"
                          onClick={() =>
                            handleEdit(
                              item
                            )
                          }
                          title="Edit News"
                        >
                          <Pencil
                            size={19}
                          />
                        </button>

                        <button
                          type="button"
                          className="news-action delete"
                          onClick={() =>
                            handleDelete(
                              item
                            )
                          }
                          disabled={
                            deletingId ===
                            item.id
                          }
                          title="Delete News"
                        >
                          <Trash2
                            size={19}
                          />
                        </button>

                      </div>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>
          )}

        </div>
      )}

    </div>
  );
};

export default NewsManagement;