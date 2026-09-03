// import { useEffect, useState } from "react";
// import {
//   Plus,
//   Pencil,
//   Trash2,
//   Power,
//   RefreshCw,
//   Image as ImageIcon,
//   X,
//   Upload,
// } from "lucide-react";

// import api from "../../services/axios";
// import "./BlogManagement.css";

// const emptyForm = {
//   title: "",
//   slug: "",
//   excerpt: "",
//   content: "",
//   image: "",
//   category: "",
//   isPublished: false,
// };

// const BlogManagement = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [form, setForm] = useState(emptyForm);

//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [deletingId, setDeletingId] = useState(null);

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // ==========================================
//   // IMAGE URL
//   // ==========================================

//   const getImageUrl = (image) => {
//     if (!image) return "";

//     const value = String(image).trim();

//     if (
//       value.startsWith("http://") ||
//       value.startsWith("https://")
//     ) {
//       return value;
//     }

//     if (value.startsWith("data:image/")) {
//       return value;
//     }

//     const apiUrl =
//       import.meta.env.VITE_API_URL ||
//       "http://localhost:5000/api";

//     const serverUrl = apiUrl.replace(
//       /\/api\/?$/,
//       ""
//     );

//     if (value.startsWith("/")) {
//       return `${serverUrl}${value}`;
//     }

//     if (value.startsWith("uploads/")) {
//       return `${serverUrl}/${value}`;
//     }

//     return `${serverUrl}/uploads/${value}`;
//   };

//   // ==========================================
//   // LOAD BLOGS
//   // ==========================================

//   const loadBlogs = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await api.get("/blogs");

//       console.log(
//         "Blogs API response:",
//         response.data
//       );

//       const data = response.data?.data;

//       setBlogs(
//         Array.isArray(data)
//           ? data
//           : data
//             ? [data]
//             : []
//       );
//     } catch (err) {
//       console.error(
//         "Load blogs error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to load blogs"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadBlogs();
//   }, []);

//   // ==========================================
//   // ADD BLOG
//   // ==========================================

//   const handleAddBlog = () => {
//     setEditingId(null);
//     setForm({ ...emptyForm });

//     setError("");
//     setSuccess("");

//     setShowForm(true);
//   };

//   // ==========================================
//   // EDIT BLOG
//   // ==========================================

//   const handleEdit = (blog) => {
//     setEditingId(blog.id);

//     setForm({
//       title: blog.title || "",
//       slug: blog.slug || "",
//       excerpt: blog.excerpt || "",
//       content: blog.content || "",
//       image: blog.image || "",
//       category: blog.category || "",
//       isPublished: blog.isPublished ?? false,
//     });

//     setError("");
//     setSuccess("");

//     setShowForm(true);
//   };

//   // ==========================================
//   // CLOSE FORM
//   // ==========================================

//   const handleClose = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setForm({ ...emptyForm });
//     setError("");
//   };

//   // ==========================================
//   // INPUT CHANGE
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

//     setError("");
//   };

//   // ==========================================
//   // IMAGE UPLOAD
//   // ==========================================

//   const handleImageUpload = async (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     const allowedTypes = [
//       "image/jpeg",
//       "image/jpg",
//       "image/png",
//       "image/webp",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       setError(
//         "Only JPG, PNG and WEBP images are allowed"
//       );

//       e.target.value = "";
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       setError(
//         "Image size must be less than 5 MB"
//       );

//       e.target.value = "";
//       return;
//     }

//     try {
//       setUploading(true);
//       setError("");
//       setSuccess("");

//       const formData = new FormData();

//       formData.append("image", file);

//       const response = await api.post(
//         "/upload/image",
//         formData,
//         {
//           headers: {
//             "Content-Type":
//               "multipart/form-data",
//           },
//         }
//       );

//       console.log(
//         "Blog image upload response:",
//         response.data
//       );

//       const imageUrl =
//         response.data?.data?.url;

//       if (!imageUrl) {
//         throw new Error(
//           "Upload response does not contain image URL"
//         );
//       }

//       setForm((previous) => ({
//         ...previous,
//         image: imageUrl,
//       }));

//       setSuccess(
//         "Blog image uploaded successfully"
//       );
//     } catch (err) {
//       console.error(
//         "Blog image upload error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to upload image"
//       );
//     } finally {
//       setUploading(false);
//       e.target.value = "";
//     }
//   };

//   // ==========================================
//   // REMOVE IMAGE
//   // ==========================================

//   const handleRemoveImage = () => {
//     setForm((previous) => ({
//       ...previous,
//       image: "",
//     }));

//     setSuccess("");
//   };

//   // ==========================================
//   // SAVE BLOG
//   // ==========================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     if (!form.title.trim()) {
//       setError("Blog title is required");
//       return;
//     }

//     if (!form.slug.trim()) {
//       setError("Blog slug is required");
//       return;
//     }

//     if (!form.content.trim()) {
//       setError("Blog content is required");
//       return;
//     }

//     try {
//       setSaving(true);

//       const payload = {
//         title: form.title.trim(),
//         slug: form.slug.trim(),
//         excerpt:
//           form.excerpt.trim() || null,
//         content: form.content,
//         image:
//           form.image.trim() || null,
//         category:
//           form.category.trim() || null,
//         isPublished:
//           Boolean(form.isPublished),
//       };

//       console.log(
//         "Blog payload:",
//         payload
//       );

//       if (!editingId) {
//         const response = await api.post(
//           "/blogs",
//           payload
//         );

//         const createdBlog =
//           response.data?.data;

//         if (createdBlog) {
//           setBlogs((previous) => [
//             createdBlog,
//             ...previous,
//           ]);
//         }

//         setSuccess(
//           "Blog created successfully"
//         );
//       } else {
//         const response = await api.put(
//           `/blogs/${editingId}`,
//           payload
//         );

//         const updatedBlog =
//           response.data?.data;

//         if (updatedBlog) {
//           setBlogs((previous) =>
//             previous.map((item) =>
//               item.id === editingId
//                 ? updatedBlog
//                 : item
//             )
//           );
//         }

//         setSuccess(
//           "Blog updated successfully"
//         );
//       }

//       setShowForm(false);
//       setEditingId(null);
//       setForm({ ...emptyForm });
//     } catch (err) {
//       console.error(
//         "Save blog error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to save blog"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ==========================================
//   // DELETE BLOG
//   // ==========================================

//   const handleDelete = async (blog) => {
//     const confirmed =
//       window.confirm(
//         `Are you sure you want to delete "${blog.title}"?`
//       );

//     if (!confirmed) return;

//     try {
//       setDeletingId(blog.id);
//       setError("");
//       setSuccess("");

//       await api.delete(
//         `/blogs/${blog.id}`
//       );

//       setBlogs((previous) =>
//         previous.filter(
//           (item) =>
//             item.id !== blog.id
//         )
//       );

//       setSuccess(
//         "Blog deleted successfully"
//       );
//     } catch (err) {
//       console.error(
//         "Delete blog error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to delete blog"
//       );
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   // ==========================================
//   // TOGGLE PUBLISH
//   // ==========================================

//   const handleToggleStatus = async (
//     blog
//   ) => {
//     try {
//       setError("");
//       setSuccess("");

//       const response = await api.put(
//         `/blogs/${blog.id}`,
//         {
//           isPublished:
//             !blog.isPublished,
//         }
//       );

//       const updatedBlog =
//         response.data?.data;

//       if (updatedBlog) {
//         setBlogs((previous) =>
//           previous.map((item) =>
//             item.id === blog.id
//               ? updatedBlog
//               : item
//           )
//         );
//       }
//     } catch (err) {
//       console.error(
//         "Toggle blog status error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to update blog status"
//       );
//     }
//   };

//   // ==========================================
//   // LOADING
//   // ==========================================

//   if (loading) {
//     return (
//       <div className="blog-management-loading">
//         <RefreshCw
//           size={22}
//           className="blog-spin"
//         />

//         <span>
//           Loading blogs...
//         </span>
//       </div>
//     );
//   }

//   // ==========================================
//   // RENDER
//   // ==========================================

//   return (
//     <div className="blog-management">

//       {/* ====================================== */}
//       {/* HEADER */}
//       {/* ====================================== */}

//       <div className="blog-page-header">

//         <div>
//           <h1>
//             Blogs
//           </h1>

//           <p>
//             Manage blog articles published
//             on your SNGA website.
//           </p>
//         </div>

//         <div className="blog-header-actions">

//           <button
//             type="button"
//             className="blog-refresh-button"
//             onClick={loadBlogs}
//           >
//             <RefreshCw size={17} />
//             Refresh
//           </button>

//           <button
//             type="button"
//             className="blog-add-button"
//             onClick={handleAddBlog}
//           >
//             <Plus size={19} />
//             Add Blog
//           </button>

//         </div>
//       </div>

//       {/* ====================================== */}
//       {/* SUCCESS */}
//       {/* ====================================== */}

//       {success && (
//         <div className="blog-success">
//           {success}
//         </div>
//       )}

//       {/* ====================================== */}
//       {/* ERROR */}
//       {/* ====================================== */}

//       {error && (
//         <div className="blog-error">
//           {error}
//         </div>
//       )}

//       {/* ====================================== */}
//       {/* FORM */}
//       {/* ====================================== */}

//       {showForm && (
//         <div className="blog-form-card">

//           <div className="blog-form-header">

//             <div>
//               <h2>
//                 {editingId
//                   ? "Edit Blog"
//                   : "Add Blog"}
//               </h2>

//               <p>
//                 Create and manage your blog
//                 article.
//               </p>
//             </div>

//             <button
//               type="button"
//               className="blog-close-button"
//               onClick={handleClose}
//             >
//               <X size={20} />
//             </button>

//           </div>

//           <form
//             onSubmit={handleSubmit}
//           >

//             <div className="blog-form-grid">

//               {/* TITLE */}

//               <div className="blog-field">

//                 <label>
//                   Title *
//                 </label>

//                 <input
//                   type="text"
//                   name="title"
//                   value={form.title}
//                   onChange={handleChange}
//                   placeholder="Enter blog title"
//                 />

//               </div>

//               {/* SLUG */}

//               <div className="blog-field">

//                 <label>
//                   Slug *
//                 </label>

//                 <input
//                   type="text"
//                   name="slug"
//                   value={form.slug}
//                   onChange={handleChange}
//                   placeholder="example-blog-title"
//                 />

//               </div>

//               {/* CATEGORY */}

//               <div className="blog-field">

//                 <label>
//                   Category
//                 </label>

//                 <input
//                   type="text"
//                   name="category"
//                   value={form.category}
//                   onChange={handleChange}
//                   placeholder="Education"
//                 />

//               </div>

//               {/* EXCERPT */}

//               <div className="blog-field">

//                 <label>
//                   Excerpt
//                 </label>

//                 <input
//                   type="text"
//                   name="excerpt"
//                   value={form.excerpt}
//                   onChange={handleChange}
//                   placeholder="Short description"
//                 />

//               </div>

//               {/* CONTENT */}

//               <div className="blog-field blog-full">

//                 <label>
//                   Content *
//                 </label>

//                 <textarea
//                   name="content"
//                   value={form.content}
//                   onChange={handleChange}
//                   rows="10"
//                   placeholder="Write your blog content..."
//                 />

//               </div>

//               {/* IMAGE */}

//               <div className="blog-field blog-full">

//                 <label>
//                   Featured Image
//                 </label>

//                 <div className="blog-upload-box">

//                   {form.image ? (
//                     <div className="blog-upload-preview">

//                       <img
//                         src={getImageUrl(
//                           form.image
//                         )}
//                         alt={
//                           form.title ||
//                           "Blog preview"
//                         }
//                         onError={(e) => {
//                           console.error(
//                             "Blog image failed:",
//                             getImageUrl(
//                               form.image
//                             )
//                           );
//                         }}
//                       />

//                       <button
//                         type="button"
//                         className="blog-remove-image"
//                         onClick={
//                           handleRemoveImage
//                         }
//                       >
//                         <Trash2 size={15} />
//                         Remove Image
//                       </button>

//                     </div>
//                   ) : (
//                     <label
//                       htmlFor="blog-image-upload"
//                       className="blog-upload-label"
//                     >

//                       {uploading ? (
//                         <>
//                           <RefreshCw
//                             size={38}
//                             className="blog-spin"
//                           />

//                           <strong>
//                             Uploading...
//                           </strong>

//                           <span>
//                             Please wait
//                           </span>
//                         </>
//                       ) : (
//                         <>
//                           <Upload
//                             size={38}
//                           />

//                           <strong>
//                             Upload Featured Image
//                           </strong>

//                           <span>
//                             Click to choose
//                             an image
//                           </span>

//                           <small>
//                             JPG, PNG, WEBP ·
//                             Maximum 5 MB
//                           </small>
//                         </>
//                       )}

//                     </label>
//                   )}

//                 </div>

//                 <input
//                   id="blog-image-upload"
//                   type="file"
//                   accept="image/jpeg,image/jpg,image/png,image/webp"
//                   onChange={
//                     handleImageUpload
//                   }
//                   disabled={uploading}
//                   hidden
//                 />

//               </div>

//               {/* PUBLISHED */}

//               <div className="blog-active-field">

//                 <input
//                   type="checkbox"
//                   id="blog-published"
//                   name="isPublished"
//                   checked={
//                     form.isPublished
//                   }
//                   onChange={handleChange}
//                 />

//                 <label htmlFor="blog-published">
//                   Published
//                 </label>

//               </div>

//             </div>

//             {/* FORM ACTIONS */}

//             <div className="blog-form-actions">

//               <button
//                 type="button"
//                 className="blog-cancel-button"
//                 onClick={handleClose}
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="blog-save-button"
//                 disabled={
//                   saving ||
//                   uploading
//                 }
//               >
//                 {saving
//                   ? "Saving..."
//                   : editingId
//                     ? "Update Blog"
//                     : "Add Blog"}
//               </button>

//             </div>

//           </form>

//         </div>
//       )}

//       {/* ====================================== */}
//       {/* TABLE */}
//       {/* ====================================== */}

//       {!showForm && (
//         <div className="blog-table-wrapper">

//           {blogs.length === 0 ? (
//             <div className="blog-empty">

//               <div className="blog-empty-icon">
//                 <ImageIcon size={30} />
//               </div>

//               <h2>
//                 No Blogs
//               </h2>

//               <p>
//                 Create your first blog article.
//               </p>

//               <button
//                 type="button"
//                 className="blog-add-button"
//                 onClick={handleAddBlog}
//               >
//                 <Plus size={18} />
//                 Add Blog
//               </button>

//             </div>
//           ) : (
//             <table className="blog-table">

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

//                 {blogs.map((blog) => {

//                   const imageUrl =
//                     getImageUrl(
//                       blog.image
//                     );

//                   return (
//                     <tr
//                       key={blog.id}
//                     >

//                       {/* IMAGE */}

//                       <td>

//                         <div className="blog-table-image">

//                           {blog.image ? (
//                             <img
//                               src={imageUrl}
//                               alt={
//                                 blog.title ||
//                                 "Blog"
//                               }
//                               onError={(e) => {
//                                 console.error(
//                                   "Blog table image failed:",
//                                   imageUrl
//                                 );
//                               }}
//                             />
//                           ) : (
//                             <ImageIcon
//                               size={27}
//                             />
//                           )}

//                         </div>

//                       </td>

//                       {/* CONTENT */}

//                       <td>

//                         <div className="blog-content-cell">

//                           <strong>
//                             {blog.title}
//                           </strong>

//                           <span>
//                             /{blog.slug}
//                           </span>

//                           {blog.excerpt && (
//                             <small>
//                               {blog.excerpt}
//                             </small>
//                           )}

//                         </div>

//                       </td>

//                       {/* CATEGORY */}

//                       <td>

//                         {blog.category ? (
//                           <span className="blog-category">
//                             {blog.category}
//                           </span>
//                         ) : (
//                           <span className="blog-no-value">
//                             —
//                           </span>
//                         )}

//                       </td>

//                       {/* STATUS */}

//                       <td>

//                         <button
//                           type="button"
//                           className={
//                             blog.isPublished
//                               ? "blog-status published"
//                               : "blog-status draft"
//                           }
//                           onClick={() =>
//                             handleToggleStatus(
//                               blog
//                             )
//                           }
//                         >

//                           <Power size={16} />

//                           {blog.isPublished
//                             ? "Published"
//                             : "Draft"}

//                         </button>

//                       </td>

//                       {/* ACTIONS */}

//                       <td>

//                         <div className="blog-actions">

//                           <button
//                             type="button"
//                             className="blog-action-button edit"
//                             onClick={() =>
//                               handleEdit(
//                                 blog
//                               )
//                             }
//                             title="Edit Blog"
//                           >
//                             <Pencil
//                               size={19}
//                             />
//                           </button>

//                           <button
//                             type="button"
//                             className="blog-action-button delete"
//                             onClick={() =>
//                               handleDelete(
//                                 blog
//                               )
//                             }
//                             disabled={
//                               deletingId ===
//                               blog.id
//                             }
//                             title="Delete Blog"
//                           >
//                             <Trash2
//                               size={19}
//                             />
//                           </button>

//                         </div>

//                       </td>

//                     </tr>
//                   );
//                 })}

//               </tbody>

//             </table>
//           )}

//         </div>
//       )}

//     </div>
//   );
// };

// export default BlogManagement;

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
import "./BlogManagement.css";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  featuredImage: "",
  category: "",
  isPublished: false,
};

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState(emptyForm);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // SERVER URL
  // ==========================================

  const getServerUrl = () => {
    const apiUrl =
      import.meta.env.VITE_API_URL ||
      "http://localhost:5000/api";

    return apiUrl.replace(/\/api\/?$/, "");
  };

  // ==========================================
  // IMAGE URL
  // ==========================================

  const getImageUrl = (image) => {
    if (!image) {
      return "";
    }

    const value = String(image).trim();

    // Full URL
    if (
      value.startsWith("http://") ||
      value.startsWith("https://")
    ) {
      return value;
    }

    // Base64
    if (value.startsWith("data:image/")) {
      return value;
    }

    const serverUrl = getServerUrl();

    // /uploads/example.jpg
    if (value.startsWith("/uploads/")) {
      return `${serverUrl}${value}`;
    }

    // uploads/example.jpg
    if (value.startsWith("uploads/")) {
      return `${serverUrl}/${value}`;
    }

    // example.jpg
    return `${serverUrl}/uploads/${value}`;
  };

  // ==========================================
  // LOAD BLOGS
  // ==========================================

  const loadBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/blogs");

      console.log(
        "BLOGS API RESPONSE:",
        response.data
      );

      const data = response.data?.data;

      if (Array.isArray(data)) {
        setBlogs(data);
      } else if (data) {
        setBlogs([data]);
      } else {
        setBlogs([]);
      }
    } catch (err) {
      console.error(
        "Load blogs error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load blogs"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    loadBlogs();
  }, []);

  // ==========================================
  // ADD BLOG
  // ==========================================

  const handleAddBlog = () => {
    setEditingId(null);

    setForm({
      ...emptyForm,
    });

    setError("");
    setSuccess("");

    setShowForm(true);
  };

  // ==========================================
  // EDIT BLOG
  // ==========================================

  const handleEdit = (blog) => {
    setEditingId(blog.id);

    setForm({
      title: blog.title || "",
      slug: blog.slug || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",

      // IMPORTANT:
      // Prisma field is featuredImage
      featuredImage:
        blog.featuredImage || "",

      category: blog.category || "",

      isPublished:
        blog.isPublished ?? false,
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
  // IMAGE UPLOAD
  // ==========================================

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    // ------------------------------------------
    // File type
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
    // File size
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

      console.log(
        "Uploading blog image:",
        file.name
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
        "BLOG IMAGE UPLOAD RESPONSE:",
        response.data
      );

      const imageUrl =
        response.data?.data?.url;

      if (!imageUrl) {
        throw new Error(
          "Image URL missing from upload response"
        );
      }

      // IMPORTANT:
      // Save into featuredImage
      setForm((previous) => ({
        ...previous,
        featuredImage: imageUrl,
      }));

      setSuccess(
        "Blog image uploaded successfully"
      );
    } catch (err) {
      console.error(
        "Blog image upload error:",
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
      featuredImage: "",
    }));

    setSuccess("");
  };

  // ==========================================
  // SAVE BLOG
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
        "Blog title is required"
      );

      return;
    }

    if (!form.slug.trim()) {
      setError(
        "Blog slug is required"
      );

      return;
    }

    if (!form.content.trim()) {
      setError(
        "Blog content is required"
      );

      return;
    }

    try {
      setSaving(true);

      // IMPORTANT:
      // Prisma uses featuredImage
      const payload = {
        title:
          form.title.trim(),

        slug:
          form.slug.trim(),

        excerpt:
          form.excerpt.trim() ||
          null,

        content:
          form.content,

        featuredImage:
          form.featuredImage.trim() ||
          null,

        category:
          form.category.trim() ||
          null,

        isPublished:
          Boolean(
            form.isPublished
          ),
      };

      console.log(
        "BLOG PAYLOAD:",
        payload
      );

      // ========================================
      // CREATE
      // ========================================

      if (!editingId) {
        const response =
          await api.post(
            "/blogs",
            payload
          );

        console.log(
          "BLOG CREATE RESPONSE:",
          response.data
        );

        const createdBlog =
          response.data?.data;

        if (createdBlog) {
          setBlogs((previous) => [
            createdBlog,
            ...previous,
          ]);
        }

        setSuccess(
          "Blog created successfully"
        );
      }

      // ========================================
      // UPDATE
      // ========================================

      else {
        const response =
          await api.put(
            `/blogs/${editingId}`,
            payload
          );

        console.log(
          "BLOG UPDATE RESPONSE:",
          response.data
        );

        const updatedBlog =
          response.data?.data;

        if (updatedBlog) {
          setBlogs((previous) =>
            previous.map((item) =>
              item.id === editingId
                ? updatedBlog
                : item
            )
          );
        }

        setSuccess(
          "Blog updated successfully"
        );
      }

      setShowForm(false);

      setEditingId(null);

      setForm({
        ...emptyForm,
      });
    } catch (err) {
      console.error(
        "Save blog error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to save blog"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // DELETE BLOG
  // ==========================================

  const handleDelete = async (blog) => {
    const confirmed =
      window.confirm(
        `Are you sure you want to delete "${blog.title}"?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(blog.id);

      setError("");
      setSuccess("");

      await api.delete(
        `/blogs/${blog.id}`
      );

      setBlogs((previous) =>
        previous.filter(
          (item) =>
            item.id !== blog.id
        )
      );

      setSuccess(
        "Blog deleted successfully"
      );
    } catch (err) {
      console.error(
        "Delete blog error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete blog"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // TOGGLE PUBLISHED
  // ==========================================

  const handleToggleStatus = async (
    blog
  ) => {
    try {
      setError("");
      setSuccess("");

      const response =
        await api.put(
          `/blogs/${blog.id}`,
          {
            isPublished:
              !blog.isPublished,
          }
        );

      console.log(
        "BLOG STATUS RESPONSE:",
        response.data
      );

      const updatedBlog =
        response.data?.data;

      if (updatedBlog) {
        setBlogs((previous) =>
          previous.map((item) =>
            item.id === blog.id
              ? updatedBlog
              : item
          )
        );
      }
    } catch (err) {
      console.error(
        "Toggle blog status error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to update blog status"
      );
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="blog-management-loading">

        <RefreshCw
          size={22}
          className="blog-spin"
        />

        <span>
          Loading blogs...
        </span>

      </div>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="blog-management">

      {/* ====================================== */}
      {/* HEADER */}
      {/* ====================================== */}

      <div className="blog-page-header">

        <div>

          <h1>
            Blogs
          </h1>

          <p>
            Manage blog articles published
            on your SNGA website.
          </p>

        </div>

        <div className="blog-header-actions">

          <button
            type="button"
            className="blog-refresh-button"
            onClick={loadBlogs}
          >
            <RefreshCw size={17} />

            Refresh
          </button>

          <button
            type="button"
            className="blog-add-button"
            onClick={handleAddBlog}
          >
            <Plus size={19} />

            Add Blog
          </button>

        </div>

      </div>

      {/* ====================================== */}
      {/* SUCCESS */}
      {/* ====================================== */}

      {success && (
        <div className="blog-success">
          {success}
        </div>
      )}

      {/* ====================================== */}
      {/* ERROR */}
      {/* ====================================== */}

      {error && (
        <div className="blog-error">
          {error}
        </div>
      )}

      {/* ====================================== */}
      {/* FORM */}
      {/* ====================================== */}

      {showForm && (
        <div className="blog-form-card">

          <div className="blog-form-header">

            <div>

              <h2>
                {editingId
                  ? "Edit Blog"
                  : "Add Blog"}
              </h2>

              <p>
                Create and manage your
                blog article.
              </p>

            </div>

            <button
              type="button"
              className="blog-close-button"
              onClick={handleClose}
            >
              <X size={20} />
            </button>

          </div>

          <form
            onSubmit={handleSubmit}
          >

            <div className="blog-form-grid">

              {/* ================================= */}
              {/* TITLE */}
              {/* ================================= */}

              <div className="blog-field">

                <label>
                  Title *
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter blog title"
                />

              </div>

              {/* ================================= */}
              {/* SLUG */}
              {/* ================================= */}

              <div className="blog-field">

                <label>
                  Slug *
                </label>

                <input
                  type="text"
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  placeholder="example-blog-title"
                />

              </div>

              {/* ================================= */}
              {/* CATEGORY */}
              {/* ================================= */}

              <div className="blog-field">

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
                  placeholder="Education"
                />

              </div>

              {/* ================================= */}
              {/* EXCERPT */}
              {/* ================================= */}

              <div className="blog-field">

                <label>
                  Excerpt
                </label>

                <input
                  type="text"
                  name="excerpt"
                  value={
                    form.excerpt
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Short description"
                />

              </div>

              {/* ================================= */}
              {/* CONTENT */}
              {/* ================================= */}

              <div className="blog-field blog-full">

                <label>
                  Content *
                </label>

                <textarea
                  name="content"
                  value={
                    form.content
                  }
                  onChange={
                    handleChange
                  }
                  rows="10"
                  placeholder="Write your blog content..."
                />

              </div>

              {/* ================================= */}
              {/* FEATURED IMAGE */}
              {/* ================================= */}

              <div className="blog-field blog-full">

                <label>
                  Featured Image
                </label>

                <div className="blog-upload-box">

                  {form.featuredImage ? (
                    <div className="blog-upload-preview">

                      <img
                        src={getImageUrl(
                          form.featuredImage
                        )}
                        alt={
                          form.title ||
                          "Blog preview"
                        }
                        onLoad={(e) => {
                          console.log(
                            "BLOG PREVIEW LOADED:",
                            e.currentTarget
                              .src
                          );
                        }}
                        onError={(e) => {
                          console.error(
                            "BLOG PREVIEW FAILED:",
                            e.currentTarget
                              .src
                          );
                        }}
                      />

                      <button
                        type="button"
                        className="blog-remove-image"
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
                      htmlFor="blog-image-upload"
                      className="blog-upload-label"
                    >

                      {uploading ? (
                        <>
                          <RefreshCw
                            size={38}
                            className="blog-spin"
                          />

                          <strong>
                            Uploading...
                          </strong>

                          <span>
                            Please wait
                          </span>
                        </>
                      ) : (
                        <>
                          <Upload
                            size={38}
                          />

                          <strong>
                            Upload Featured Image
                          </strong>

                          <span>
                            Click to choose
                            an image
                          </span>

                          <small>
                            JPG, PNG, WEBP ·
                            Maximum 5 MB
                          </small>
                        </>
                      )}

                    </label>
                  )}

                </div>

                <input
                  id="blog-image-upload"
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

              </div>

              {/* ================================= */}
              {/* PUBLISHED */}
              {/* ================================= */}

              <div className="blog-active-field">

                <input
                  type="checkbox"
                  id="blog-published"
                  name="isPublished"
                  checked={
                    form.isPublished
                  }
                  onChange={
                    handleChange
                  }
                />

                <label htmlFor="blog-published">
                  Published
                </label>

              </div>

            </div>

            {/* ================================= */}
            {/* FORM ACTIONS */}
            {/* ================================= */}

            <div className="blog-form-actions">

              <button
                type="button"
                className="blog-cancel-button"
                onClick={handleClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="blog-save-button"
                disabled={
                  saving ||
                  uploading
                }
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Blog"
                    : "Add Blog"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* ====================================== */}
      {/* BLOG TABLE */}
      {/* ====================================== */}

      {!showForm && (
        <div className="blog-table-wrapper">

          {blogs.length === 0 ? (
            <div className="blog-empty">

              <div className="blog-empty-icon">

                <ImageIcon
                  size={30}
                />

              </div>

              <h2>
                No Blogs
              </h2>

              <p>
                Create your first
                blog article.
              </p>

              <button
                type="button"
                className="blog-add-button"
                onClick={
                  handleAddBlog
                }
              >
                <Plus size={18} />

                Add Blog
              </button>

            </div>
          ) : (
            <table className="blog-table">

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

                {blogs.map(
                  (blog) => {

                    const imageUrl =
                      getImageUrl(
                        blog.featuredImage
                      );

                    return (
                      <tr
                        key={blog.id}
                      >

                        {/* IMAGE */}

                        <td>

                          <div className="blog-table-image">

                            {blog.featuredImage ? (
                              <img
                                src={
                                  imageUrl
                                }
                                alt={
                                  blog.title ||
                                  "Blog"
                                }
                                style={{
                                  width:
                                    "105px",
                                  height:
                                    "70px",
                                  objectFit:
                                    "cover",
                                  display:
                                    "block",
                                  borderRadius:
                                    "10px",
                                }}
                                onLoad={(e) => {
                                  console.log(
                                    "BLOG IMAGE LOADED:",
                                    e.currentTarget
                                      .src
                                  );
                                }}
                                onError={(e) => {
                                  console.error(
                                    "BLOG IMAGE FAILED:",
                                    e.currentTarget
                                      .src
                                  );
                                }}
                              />
                            ) : (
                              <ImageIcon
                                size={
                                  27
                                }
                              />
                            )}

                          </div>

                        </td>

                        {/* CONTENT */}

                        <td>

                          <div className="blog-content-cell">

                            <strong>
                              {
                                blog.title
                              }
                            </strong>

                            <span>
                              /
                              {
                                blog.slug
                              }
                            </span>

                            {blog.excerpt && (
                              <small>
                                {
                                  blog.excerpt
                                }
                              </small>
                            )}

                          </div>

                        </td>

                        {/* CATEGORY */}

                        <td>

                          {blog.category ? (
                            <span className="blog-category">
                              {
                                blog.category
                              }
                            </span>
                          ) : (
                            <span className="blog-no-value">
                              —
                            </span>
                          )}

                        </td>

                        {/* STATUS */}

                        <td>

                          <button
                            type="button"
                            className={
                              blog.isPublished
                                ? "blog-status published"
                                : "blog-status draft"
                            }
                            onClick={() =>
                              handleToggleStatus(
                                blog
                              )
                            }
                          >

                            <Power
                              size={16}
                            />

                            {blog.isPublished
                              ? "Published"
                              : "Draft"}

                          </button>

                        </td>

                        {/* ACTIONS */}

                        <td>

                          <div className="blog-actions">

                            <button
                              type="button"
                              className="blog-action-button edit"
                              onClick={() =>
                                handleEdit(
                                  blog
                                )
                              }
                              title="Edit Blog"
                            >
                              <Pencil
                                size={19}
                              />
                            </button>

                            <button
                              type="button"
                              className="blog-action-button delete"
                              onClick={() =>
                                handleDelete(
                                  blog
                                )
                              }
                              disabled={
                                deletingId ===
                                blog.id
                              }
                              title="Delete Blog"
                            >
                              <Trash2
                                size={19}
                              />
                            </button>

                          </div>

                        </td>

                      </tr>
                    );
                  }
                )}

              </tbody>

            </table>
          )}

        </div>
      )}

    </div>
  );
};

export default BlogManagement;