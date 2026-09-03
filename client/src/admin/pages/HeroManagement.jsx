// // // import { useEffect, useState } from "react";
// // // import {
// // //   ImagePlus,
// // //   Save,
// // //   Trash2,
// // //   Eye,
// // //   EyeOff,
// // //   RefreshCw,
// // // } from "lucide-react";

// // // import api from "../../services/axios";

// // // import "./HeroManagement.css";

// // // const initialForm = {
// // //   title: "",
// // //   subtitle: "",
// // //   description: "",
// // //   buttonText: "",
// // //   buttonLink: "",
// // //   image: "",
// // //   isActive: true,
// // // };

// // // const HeroManagement = () => {
// // //   const [hero, setHero] = useState(null);

// // //   const [form, setForm] = useState(initialForm);

// // //   const [loading, setLoading] = useState(true);
// // //   const [saving, setSaving] = useState(false);
// // //   const [uploading, setUploading] = useState(false);
// // //   const [deleting, setDeleting] = useState(false);

// // //   const [error, setError] = useState("");
// // //   const [success, setSuccess] = useState("");

// // //   // ==========================================
// // //   // API BASE URL
// // //   // ==========================================

// // //   const API_BASE_URL =
// // //     import.meta.env.VITE_API_URL?.replace(
// // //       /\/api$/,
// // //       ""
// // //     ) || "http://localhost:5000";

// // //   // ==========================================
// // //   // LOAD HERO
// // //   // ==========================================

// // //   const loadHero = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError("");
// // //       setSuccess("");

// // //       const response = await api.get(
// // //         "/hero/admin"
// // //       );

// // //       const data = response.data?.data;

// // //       if (data) {
// // //         setHero(data);

// // //         setForm({
// // //           title: data.title || "",
// // //           subtitle: data.subtitle || "",
// // //           description: data.description || "",
// // //           buttonText: data.buttonText || "",
// // //           buttonLink: data.buttonLink || "",
// // //           image: data.image || "",
// // //           isActive: data.isActive ?? true,
// // //         });
// // //       } else {
// // //         setHero(null);
// // //         setForm(initialForm);
// // //       }
// // //     } catch (err) {
// // //       console.error("Load hero error:", err);

// // //       // No hero exists yet
// // //       if (err.response?.status === 404) {
// // //         setHero(null);
// // //         setForm(initialForm);
// // //         return;
// // //       }

// // //       setError(
// // //         err.response?.data?.message ||
// // //           "Failed to load hero content"
// // //       );
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // ==========================================
// // //   // LOAD ON MOUNT
// // //   // ==========================================

// // //   useEffect(() => {
// // //     loadHero();
// // //   }, []);

// // //   // ==========================================
// // //   // INPUT CHANGE
// // //   // ==========================================

// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } =
// // //       e.target;

// // //     setForm((previous) => ({
// // //       ...previous,
// // //       [name]:
// // //         type === "checkbox"
// // //           ? checked
// // //           : value,
// // //     }));

// // //     setError("");
// // //     setSuccess("");
// // //   };

// // //   // ==========================================
// // //   // IMAGE UPLOAD
// // //   // ==========================================

// // //   const handleImageUpload = async (e) => {
// // //     const file = e.target.files?.[0];

// // //     if (!file) {
// // //       return;
// // //     }

// // //     // ------------------------------------------
// // //     // Validate type
// // //     // ------------------------------------------

// // //     const allowedTypes = [
// // //       "image/jpeg",
// // //       "image/jpg",
// // //       "image/png",
// // //       "image/webp",
// // //       "image/svg+xml",
// // //     ];

// // //     if (!allowedTypes.includes(file.type)) {
// // //       setError(
// // //         "Only JPG, JPEG, PNG, WEBP and SVG images are allowed"
// // //       );

// // //       e.target.value = "";
// // //       return;
// // //     }

// // //     // ------------------------------------------
// // //     // Validate size
// // //     // ------------------------------------------

// // //     if (file.size > 5 * 1024 * 1024) {
// // //       setError(
// // //         "Image size must be less than 5 MB"
// // //       );

// // //       e.target.value = "";
// // //       return;
// // //     }

// // //     try {
// // //       setUploading(true);
// // //       setError("");
// // //       setSuccess("");

// // //       const formData = new FormData();

// // //       formData.append("image", file);

// // //       const response = await api.post(
// // //         "/upload/image",
// // //         formData,
// // //         {
// // //           headers: {
// // //             "Content-Type":
// // //               "multipart/form-data",
// // //           },
// // //         }
// // //       );

// // //       const uploadedImage =
// // //         response.data?.data?.url;

// // //       if (!uploadedImage) {
// // //         throw new Error(
// // //           "Upload response did not contain image URL"
// // //         );
// // //       }

// // //       setForm((previous) => ({
// // //         ...previous,
// // //         image: uploadedImage,
// // //       }));

// // //       setSuccess(
// // //         "Hero image uploaded successfully"
// // //       );
// // //     } catch (err) {
// // //       console.error(
// // //         "Hero image upload error:",
// // //         err
// // //       );

// // //       setError(
// // //         err.response?.data?.message ||
// // //           "Failed to upload image"
// // //       );
// // //     } finally {
// // //       setUploading(false);

// // //       e.target.value = "";
// // //     }
// // //   };

// // //   // ==========================================
// // //   // SAVE HERO
// // //   // ==========================================

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     setError("");
// // //     setSuccess("");

// // //     // ------------------------------------------
// // //     // Validation
// // //     // ------------------------------------------

// // //     if (!form.title.trim()) {
// // //       setError("Hero title is required");
// // //       return;
// // //     }

// // //     try {
// // //       setSaving(true);

// // //       let response;

// // //       const payload = {
// // //         title: form.title.trim(),
// // //         subtitle:
// // //           form.subtitle.trim() || null,
// // //         description:
// // //           form.description.trim() || null,
// // //         buttonText:
// // //           form.buttonText.trim() || null,
// // //         buttonLink:
// // //           form.buttonLink.trim() || null,
// // //         image:
// // //           form.image.trim() || null,
// // //         isActive: form.isActive,
// // //       };

// // //       // ------------------------------------------
// // //       // CREATE
// // //       // ------------------------------------------

// // //       if (!hero) {
// // //         response = await api.post(
// // //           "/hero",
// // //           payload
// // //         );

// // //         setHero(response.data.data);

// // //         setSuccess(
// // //           "Hero content created successfully"
// // //         );
// // //       }

// // //       // ------------------------------------------
// // //       // UPDATE
// // //       // ------------------------------------------

// // //       else {
// // //         response = await api.put(
// // //           `/hero/${hero.id}`,
// // //           payload
// // //         );

// // //         setHero(response.data.data);

// // //         setSuccess(
// // //           "Hero content updated successfully"
// // //         );
// // //       }
// // //     } catch (err) {
// // //       console.error(
// // //         "Save hero error:",
// // //         err
// // //       );

// // //       setError(
// // //         err.response?.data?.message ||
// // //           "Failed to save hero content"
// // //       );
// // //     } finally {
// // //       setSaving(false);
// // //     }
// // //   };

// // //   // ==========================================
// // //   // DELETE HERO
// // //   // ==========================================

// // //   const handleDelete = async () => {
// // //     if (!hero) {
// // //       return;
// // //     }

// // //     const confirmed = window.confirm(
// // //       "Are you sure you want to delete the hero content?"
// // //     );

// // //     if (!confirmed) {
// // //       return;
// // //     }

// // //     try {
// // //       setDeleting(true);
// // //       setError("");
// // //       setSuccess("");

// // //       await api.delete(
// // //         `/hero/${hero.id}`
// // //       );

// // //       setHero(null);
// // //       setForm(initialForm);

// // //       setSuccess(
// // //         "Hero content deleted successfully"
// // //       );
// // //     } catch (err) {
// // //       console.error(
// // //         "Delete hero error:",
// // //         err
// // //       );

// // //       setError(
// // //         err.response?.data?.message ||
// // //           "Failed to delete hero content"
// // //       );
// // //     } finally {
// // //       setDeleting(false);
// // //     }
// // //   };

// // //   // ==========================================
// // //   // IMAGE URL
// // //   // ==========================================

// // //   const getImageUrl = (image) => {
// // //     if (!image) {
// // //       return "";
// // //     }

// // //     if (
// // //       image.startsWith("http://") ||
// // //       image.startsWith("https://")
// // //     ) {
// // //       return image;
// // //     }

// // //     return `${API_BASE_URL}${image}`;
// // //   };

// // //   // ==========================================
// // //   // LOADING
// // //   // ==========================================

// // //   if (loading) {
// // //     return (
// // //       <div className="hero-management-loading">
// // //         <RefreshCw
// // //           size={24}
// // //           className="hero-loading-icon"
// // //         />

// // //         <span>
// // //           Loading hero content...
// // //         </span>
// // //       </div>
// // //     );
// // //   }

// // //   // ==========================================
// // //   // RENDER
// // //   // ==========================================

// // //   return (
// // //     <div className="hero-management">

// // //       {/* ====================================== */}
// // //       {/* PAGE HEADER */}
// // //       {/* ====================================== */}

// // //       <div className="hero-management-header">

// // //         <div>
// // //           <h1>
// // //             Hero Management
// // //           </h1>

// // //           <p>
// // //             Manage the hero section displayed
// // //             on the homepage.
// // //           </p>
// // //         </div>

// // //         <button
// // //           type="button"
// // //           className="hero-refresh-button"
// // //           onClick={loadHero}
// // //           disabled={loading}
// // //         >
// // //           <RefreshCw size={18} />

// // //           Refresh
// // //         </button>

// // //       </div>

// // //       {/* ====================================== */}
// // //       {/* SUCCESS */}
// // //       {/* ====================================== */}

// // //       {success && (
// // //         <div className="hero-success-message">
// // //           {success}
// // //         </div>
// // //       )}

// // //       {/* ====================================== */}
// // //       {/* ERROR */}
// // //       {/* ====================================== */}

// // //       {error && (
// // //         <div className="hero-error-message">
// // //           {error}
// // //         </div>
// // //       )}

// // //       <div className="hero-management-grid">

// // //         {/* ==================================== */}
// // //         {/* FORM */}
// // //         {/* ==================================== */}

// // //         <form
// // //           className="hero-form"
// // //           onSubmit={handleSubmit}
// // //         >

// // //           <div className="hero-card">

// // //             <div className="hero-card-header">
// // //               <div>
// // //                 <h2>
// // //                   {hero
// // //                     ? "Edit Hero"
// // //                     : "Create Hero"}
// // //                 </h2>

// // //                 <p>
// // //                   Update your homepage hero
// // //                   content.
// // //                 </p>
// // //               </div>

// // //               {hero && (
// // //                 <span
// // //                   className={
// // //                     form.isActive
// // //                       ? "hero-status-active"
// // //                       : "hero-status-inactive"
// // //                   }
// // //                 >
// // //                   {form.isActive
// // //                     ? "Active"
// // //                     : "Inactive"}
// // //                 </span>
// // //               )}
// // //             </div>

// // //             {/* ================================= */}
// // //             {/* TITLE */}
// // //             {/* ================================= */}

// // //             <div className="hero-form-group">

// // //               <label htmlFor="title">
// // //                 Title
// // //                 <span>*</span>
// // //               </label>

// // //               <input
// // //                 id="title"
// // //                 name="title"
// // //                 type="text"
// // //                 value={form.title}
// // //                 onChange={handleChange}
// // //                 placeholder="Enter hero title"
// // //                 maxLength={200}
// // //               />

// // //             </div>

// // //             {/* ================================= */}
// // //             {/* SUBTITLE */}
// // //             {/* ================================= */}

// // //             <div className="hero-form-group">

// // //               <label htmlFor="subtitle">
// // //                 Subtitle
// // //               </label>

// // //               <input
// // //                 id="subtitle"
// // //                 name="subtitle"
// // //                 type="text"
// // //                 value={form.subtitle}
// // //                 onChange={handleChange}
// // //                 placeholder="Enter hero subtitle"
// // //                 maxLength={200}
// // //               />

// // //             </div>

// // //             {/* ================================= */}
// // //             {/* DESCRIPTION */}
// // //             {/* ================================= */}

// // //             <div className="hero-form-group">

// // //               <label htmlFor="description">
// // //                 Description
// // //               </label>

// // //               <textarea
// // //                 id="description"
// // //                 name="description"
// // //                 value={form.description}
// // //                 onChange={handleChange}
// // //                 placeholder="Enter hero description"
// // //                 rows={5}
// // //                 maxLength={1000}
// // //               />

// // //             </div>

// // //             {/* ================================= */}
// // //             {/* CTA */}
// // //             {/* ================================= */}

// // //             <div className="hero-section-title">
// // //               Call To Action
// // //             </div>

// // //             <div className="hero-form-row">

// // //               <div className="hero-form-group">

// // //                 <label htmlFor="buttonText">
// // //                   Button Text
// // //                 </label>

// // //                 <input
// // //                   id="buttonText"
// // //                   name="buttonText"
// // //                   type="text"
// // //                   value={form.buttonText}
// // //                   onChange={handleChange}
// // //                   placeholder="Explore More"
// // //                   maxLength={100}
// // //                 />

// // //               </div>

// // //               <div className="hero-form-group">

// // //                 <label htmlFor="buttonLink">
// // //                   Button Link
// // //                 </label>

// // //                 <input
// // //                   id="buttonLink"
// // //                   name="buttonLink"
// // //                   type="text"
// // //                   value={form.buttonLink}
// // //                   onChange={handleChange}
// // //                   placeholder="/about"
// // //                   maxLength={500}
// // //                 />

// // //               </div>

// // //             </div>

// // //             {/* ================================= */}
// // //             {/* ACTIVE */}
// // //             {/* ================================= */}

// // //             <div className="hero-active-control">

// // //               <div>

// // //                 <strong>
// // //                   Hero Visibility
// // //                 </strong>

// // //                 <p>
// // //                   Show this hero on the
// // //                   public homepage.
// // //                 </p>

// // //               </div>

// // //               <label className="hero-switch">

// // //                 <input
// // //                   type="checkbox"
// // //                   name="isActive"
// // //                   checked={form.isActive}
// // //                   onChange={handleChange}
// // //                 />

// // //                 <span className="hero-switch-slider"></span>

// // //               </label>

// // //             </div>

// // //             {/* ================================= */}
// // //             {/* ACTIONS */}
// // //             {/* ================================= */}

// // //             <div className="hero-form-actions">

// // //               {hero && (
// // //                 <button
// // //                   type="button"
// // //                   className="hero-delete-button"
// // //                   onClick={handleDelete}
// // //                   disabled={
// // //                     saving || deleting
// // //                   }
// // //                 >
// // //                   <Trash2 size={18} />

// // //                   {deleting
// // //                     ? "Deleting..."
// // //                     : "Delete"}
// // //                 </button>
// // //               )}

// // //               <button
// // //                 type="submit"
// // //                 className="hero-save-button"
// // //                 disabled={
// // //                   saving ||
// // //                   uploading ||
// // //                   deleting
// // //                 }
// // //               >
// // //                 <Save size={18} />

// // //                 {saving
// // //                   ? "Saving..."
// // //                   : hero
// // //                     ? "Update Hero"
// // //                     : "Create Hero"}
// // //               </button>

// // //             </div>

// // //           </div>

// // //         </form>

// // //         {/* ==================================== */}
// // //         {/* IMAGE / PREVIEW */}
// // //         {/* ==================================== */}

// // //         <div className="hero-preview-column">

// // //           {/* IMAGE UPLOAD */}

// // //           <div className="hero-card">

// // //             <div className="hero-card-header">

// // //               <div>
// // //                 <h2>
// // //                   Hero Image
// // //                 </h2>

// // //                 <p>
// // //                   Upload the main homepage
// // //                   hero image.
// // //                 </p>
// // //               </div>

// // //               <ImagePlus size={22} />

// // //             </div>

// // //             <label
// // //               htmlFor="hero-image-upload"
// // //               className="hero-upload-area"
// // //             >

// // //               {form.image ? (
// // //                 <img
// // //                   src={getImageUrl(
// // //                     form.image
// // //                   )}
// // //                   alt="Hero preview"
// // //                   className="hero-upload-preview"
// // //                 />
// // //               ) : (
// // //                 <div className="hero-upload-empty">

// // //                   <ImagePlus size={42} />

// // //                   <strong>
// // //                     {uploading
// // //                       ? "Uploading..."
// // //                       : "Upload Hero Image"}
// // //                   </strong>

// // //                   <span>
// // //                     JPG, PNG, WEBP or SVG
// // //                   </span>

// // //                   <small>
// // //                     Maximum 5 MB
// // //                   </small>

// // //                 </div>
// // //               )}

// // //               {uploading && (
// // //                 <div className="hero-upload-overlay">
// // //                   <RefreshCw
// // //                     size={28}
// // //                     className="hero-loading-icon"
// // //                   />

// // //                   <span>
// // //                     Uploading...
// // //                   </span>
// // //                 </div>
// // //               )}

// // //             </label>

// // //             <input
// // //               id="hero-image-upload"
// // //               type="file"
// // //               accept="image/jpeg,image/jpg,image/png,image/webp,image/svg+xml"
// // //               onChange={handleImageUpload}
// // //               disabled={uploading}
// // //               hidden
// // //             />

// // //             {form.image && (
// // //               <div className="hero-image-actions">

// // //                 <button
// // //                   type="button"
// // //                   onClick={() =>
// // //                     setForm((previous) => ({
// // //                       ...previous,
// // //                       image: "",
// // //                     }))
// // //                   }
// // //                 >
// // //                   Remove Image
// // //                 </button>

// // //               </div>
// // //             )}

// // //           </div>

// // //           {/* ================================= */}
// // //           {/* LIVE PREVIEW */}
// // //           {/* ================================= */}

// // //           <div className="hero-card">

// // //             <div className="hero-card-header">

// // //               <div>
// // //                 <h2>
// // //                   Live Preview
// // //                 </h2>

// // //                 <p>
// // //                   Approximate homepage
// // //                   appearance.
// // //                 </p>
// // //               </div>

// // //               {form.isActive ? (
// // //                 <Eye size={20} />
// // //               ) : (
// // //                 <EyeOff size={20} />
// // //               )}

// // //             </div>

// // //             <div
// // //               className="hero-live-preview"
// // //               style={
// // //                 form.image
// // //                   ? {
// // //                       backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("${getImageUrl(
// // //                         form.image
// // //                       )}")`,
// // //                     }
// // //                   : undefined
// // //               }
// // //             >

// // //               {!form.image && (
// // //                 <div className="hero-live-placeholder">
// // //                   <ImagePlus size={32} />

// // //                   <span>
// // //                     Hero image preview
// // //                   </span>
// // //                 </div>
// // //               )}

// // //               <div className="hero-live-content">

// // //                 {form.subtitle && (
// // //                   <div className="hero-live-subtitle">
// // //                     {form.subtitle}
// // //                   </div>
// // //                 )}

// // //                 <h3>
// // //                   {form.title ||
// // //                     "Your Hero Title"}
// // //                 </h3>

// // //                 {form.description && (
// // //                   <p>
// // //                     {form.description}
// // //                   </p>
// // //                 )}

// // //                 {form.buttonText && (
// // //                   <button
// // //                     type="button"
// // //                     className="hero-live-button"
// // //                   >
// // //                     {form.buttonText}
// // //                   </button>
// // //                 )}

// // //               </div>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </div>

// // //     </div>
// // //   );
// // // };

// // // export default HeroManagement;






















// // import { useEffect, useState } from "react";
// // import {
// //   ImagePlus,
// //   Save,
// //   Trash2,
// //   Eye,
// //   EyeOff,
// //   RefreshCw,
// //   Upload,
// //   X,
// //   CheckCircle2,
// //   AlertCircle,
// //   Layout,
// //   Type,
// //   AlignLeft,
// //   Link2,
// //   ToggleLeft,
// //   ToggleRight,
// //   Loader2
// // } from "lucide-react";

// // import api from "../../services/axios";

// // import "./HeroManagement.css";

// // const initialForm = {
// //   title: "",
// //   subtitle: "",
// //   description: "",
// //   buttonText: "",
// //   buttonLink: "",
// //   image: "",
// //   isActive: true,
// // };

// // const HeroManagement = () => {
// //   const [hero, setHero] = useState(null);
// //   const [form, setForm] = useState(initialForm);
// //   const [loading, setLoading] = useState(true);
// //   const [saving, setSaving] = useState(false);
// //   const [uploading, setUploading] = useState(false);
// //   const [deleting, setDeleting] = useState(false);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");
// //   const [imagePreview, setImagePreview] = useState("");
// //   const [dragOver, setDragOver] = useState(false);

// //   // ==========================================
// //   // API BASE URL
// //   // ==========================================

// //   const API_BASE_URL =
// //     import.meta.env.VITE_API_URL?.replace(/\/api$/, "") ||
// //     "http://localhost:5000";

// //   // ==========================================
// //   // LOAD HERO
// //   // ==========================================

// //   const loadHero = async () => {
// //     try {
// //       setLoading(true);
// //       setError("");
// //       setSuccess("");

// //       const response = await api.get("/hero/admin");
// //       const data = response.data?.data;

// //       if (data) {
// //         setHero(data);
// //         setForm({
// //           title: data.title || "",
// //           subtitle: data.subtitle || "",
// //           description: data.description || "",
// //           buttonText: data.buttonText || "",
// //           buttonLink: data.buttonLink || "",
// //           image: data.image || "",
// //           isActive: data.isActive ?? true,
// //         });
// //         setImagePreview(data.image ? getImageUrl(data.image) : "");
// //       } else {
// //         setHero(null);
// //         setForm(initialForm);
// //         setImagePreview("");
// //       }
// //     } catch (err) {
// //       console.error("Load hero error:", err);

// //       if (err.response?.status === 404) {
// //         setHero(null);
// //         setForm(initialForm);
// //         setImagePreview("");
// //         return;
// //       }

// //       setError(
// //         err.response?.data?.message ||
// //           "Failed to load hero content"
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     loadHero();
// //   }, []);

// //   // ==========================================
// //   // INPUT CHANGE
// //   // ==========================================

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;

// //     setForm((previous) => ({
// //       ...previous,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));

// //     setError("");
// //     setSuccess("");
// //   };

// //   // ==========================================
// //   // IMAGE UPLOAD
// //   // ==========================================

// //   const handleImageUpload = async (e) => {
// //     const file = e.target.files?.[0];
// //     if (!file) return;

// //     await uploadImage(file);
// //     e.target.value = "";
// //   };

// //   const uploadImage = async (file) => {
// //     // Validate type
// //     const allowedTypes = [
// //       "image/jpeg",
// //       "image/jpg",
// //       "image/png",
// //       "image/webp",
// //       "image/svg+xml",
// //     ];

// //     if (!allowedTypes.includes(file.type)) {
// //       setError("Only JPG, JPEG, PNG, WEBP and SVG images are allowed");
// //       return;
// //     }

// //     // Validate size
// //     if (file.size > 5 * 1024 * 1024) {
// //       setError("Image size must be less than 5 MB");
// //       return;
// //     }

// //     try {
// //       setUploading(true);
// //       setError("");
// //       setSuccess("");

// //       const formData = new FormData();
// //       formData.append("image", file);

// //       const response = await api.post("/upload/image", formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //         },
// //       });

// //       const uploadedImage = response.data?.data?.url || response.data?.url;

// //       if (!uploadedImage) {
// //         throw new Error("Upload response did not contain image URL");
// //       }

// //       setForm((previous) => ({
// //         ...previous,
// //         image: uploadedImage,
// //       }));

// //       setImagePreview(getImageUrl(uploadedImage));
// //       setSuccess("Hero image uploaded successfully");
// //     } catch (err) {
// //       console.error("Hero image upload error:", err);
// //       setError(
// //         err.response?.data?.message || "Failed to upload image"
// //       );
// //     } finally {
// //       setUploading(false);
// //     }
// //   };

// //   // ==========================================
// //   // DRAG AND DROP
// //   // ==========================================

// //   const handleDragOver = (e) => {
// //     e.preventDefault();
// //     setDragOver(true);
// //   };

// //   const handleDragLeave = (e) => {
// //     e.preventDefault();
// //     setDragOver(false);
// //   };

// //   const handleDrop = async (e) => {
// //     e.preventDefault();
// //     setDragOver(false);

// //     const file = e.dataTransfer.files?.[0];
// //     if (file) {
// //       await uploadImage(file);
// //     }
// //   };

// //   // ==========================================
// //   // SAVE HERO
// //   // ==========================================

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess("");

// //     if (!form.title.trim()) {
// //       setError("Hero title is required");
// //       return;
// //     }

// //     try {
// //       setSaving(true);

// //       const payload = {
// //         title: form.title.trim(),
// //         subtitle: form.subtitle.trim() || null,
// //         description: form.description.trim() || null,
// //         buttonText: form.buttonText.trim() || null,
// //         buttonLink: form.buttonLink.trim() || null,
// //         image: form.image.trim() || null,
// //         isActive: form.isActive,
// //       };

// //       let response;

// //       if (!hero) {
// //         response = await api.post("/hero", payload);
// //         setHero(response.data.data);
// //         setSuccess("Hero content created successfully");
// //       } else {
// //         response = await api.put(`/hero/${hero.id}`, payload);
// //         setHero(response.data.data);
// //         setSuccess("Hero content updated successfully");
// //       }
// //     } catch (err) {
// //       console.error("Save hero error:", err);
// //       setError(
// //         err.response?.data?.message || "Failed to save hero content"
// //       );
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   // ==========================================
// //   // DELETE HERO
// //   // ==========================================

// //   const handleDelete = async () => {
// //     if (!hero) return;

// //     const confirmed = window.confirm(
// //       "Are you sure you want to delete the hero content?"
// //     );

// //     if (!confirmed) return;

// //     try {
// //       setDeleting(true);
// //       setError("");
// //       setSuccess("");

// //       await api.delete(`/hero/${hero.id}`);

// //       setHero(null);
// //       setForm(initialForm);
// //       setImagePreview("");
// //       setSuccess("Hero content deleted successfully");
// //     } catch (err) {
// //       console.error("Delete hero error:", err);
// //       setError(
// //         err.response?.data?.message || "Failed to delete hero content"
// //       );
// //     } finally {
// //       setDeleting(false);
// //     }
// //   };

// //   // ==========================================
// //   // IMAGE URL
// //   // ==========================================

// //   const getImageUrl = (image) => {
// //     if (!image) return "";
// //     if (image.startsWith("http://") || image.startsWith("https://")) {
// //       return image;
// //     }
// //     return `${API_BASE_URL}${image.startsWith("/") ? image : `/${image}`}`;
// //   };

// //   // ==========================================
// //   // LOADING
// //   // ==========================================

// //   if (loading) {
// //     return (
// //       <div className="hero-management-loading">
// //         <Loader2 size={32} className="hero-loading-spinner" />
// //         <span>Loading hero content...</span>
// //       </div>
// //     );
// //   }

// //   // ==========================================
// //   // RENDER
// //   // ==========================================

// //   return (
// //     <div className="hero-management">
// //       {/* PAGE HEADER */}
// //       <div className="hero-management-header">
// //         <div className="hero-header-left">
// //           <div className="hero-header-icon">
// //             <Layout size={24} />
// //           </div>
// //           <div>
// //             <h1>Hero Management</h1>
// //             <p>Manage the hero section displayed on the homepage.</p>
// //           </div>
// //         </div>

// //         <div className="hero-header-actions">
// //           {hero && (
// //             <span className={`hero-status-badge ${form.isActive ? "active" : "inactive"}`}>
// //               {form.isActive ? "Active" : "Inactive"}
// //             </span>
// //           )}
// //           <button
// //             type="button"
// //             className="hero-refresh-button"
// //             onClick={loadHero}
// //             disabled={loading}
// //           >
// //             <RefreshCw size={18} />
// //             Refresh
// //           </button>
// //         </div>
// //       </div>

// //       {/* ALERTS */}
// //       {success && (
// //         <div className="hero-alert hero-alert-success">
// //           <CheckCircle2 size={20} />
// //           <span>{success}</span>
// //           <button onClick={() => setSuccess("")} className="hero-alert-close">
// //             <X size={16} />
// //           </button>
// //         </div>
// //       )}

// //       {error && (
// //         <div className="hero-alert hero-alert-error">
// //           <AlertCircle size={20} />
// //           <span>{error}</span>
// //           <button onClick={() => setError("")} className="hero-alert-close">
// //             <X size={16} />
// //           </button>
// //         </div>
// //       )}

// //       <div className="hero-management-grid">
// //         {/* FORM SECTION */}
// //         <form className="hero-form" onSubmit={handleSubmit}>
// //           <div className="hero-card">
// //             <div className="hero-card-header">
// //               <div>
// //                 <h2>{hero ? "Edit Hero Content" : "Create Hero Content"}</h2>
// //                 <p>Update your homepage hero section.</p>
// //               </div>
// //               <Type size={22} className="hero-card-header-icon" />
// //             </div>

// //             <div className="hero-card-body">
// //               {/* TITLE */}
// //               <div className="hero-form-group">
// //                 <label htmlFor="title">
// //                   Title <span className="hero-required">*</span>
// //                 </label>
// //                 <input
// //                   id="title"
// //                   name="title"
// //                   type="text"
// //                   value={form.title}
// //                   onChange={handleChange}
// //                   placeholder="Enter hero title"
// //                   maxLength={200}
// //                   className="hero-input"
// //                 />
// //               </div>

// //               {/* SUBTITLE */}
// //               <div className="hero-form-group">
// //                 <label htmlFor="subtitle">Subtitle</label>
// //                 <input
// //                   id="subtitle"
// //                   name="subtitle"
// //                   type="text"
// //                   value={form.subtitle}
// //                   onChange={handleChange}
// //                   placeholder="Enter hero subtitle"
// //                   maxLength={200}
// //                   className="hero-input"
// //                 />
// //               </div>

// //               {/* DESCRIPTION */}
// //               <div className="hero-form-group">
// //                 <label htmlFor="description">Description</label>
// //                 <textarea
// //                   id="description"
// //                   name="description"
// //                   value={form.description}
// //                   onChange={handleChange}
// //                   placeholder="Enter hero description"
// //                   rows={5}
// //                   maxLength={1000}
// //                   className="hero-textarea"
// //                 />
// //               </div>

// //               {/* CTA */}
// //               <div className="hero-section-divider">
// //                 <span>Call To Action</span>
// //               </div>

// //               <div className="hero-form-row">
// //                 <div className="hero-form-group">
// //                   <label htmlFor="buttonText">Button Text</label>
// //                   <input
// //                     id="buttonText"
// //                     name="buttonText"
// //                     type="text"
// //                     value={form.buttonText}
// //                     onChange={handleChange}
// //                     placeholder="Explore More"
// //                     maxLength={100}
// //                     className="hero-input"
// //                   />
// //                 </div>

// //                 <div className="hero-form-group">
// //                   <label htmlFor="buttonLink">Button Link</label>
// //                   <input
// //                     id="buttonLink"
// //                     name="buttonLink"
// //                     type="text"
// //                     value={form.buttonLink}
// //                     onChange={handleChange}
// //                     placeholder="/about"
// //                     maxLength={500}
// //                     className="hero-input"
// //                   />
// //                 </div>
// //               </div>

// //               {/* ACTIVE TOGGLE */}
// //               <div className="hero-active-control">
// //                 <div className="hero-active-info">
// //                   <strong>Hero Visibility</strong>
// //                   <p>Show this hero on the public homepage.</p>
// //                 </div>

// //                 <label className="hero-switch">
// //                   <input
// //                     type="checkbox"
// //                     name="isActive"
// //                     checked={form.isActive}
// //                     onChange={handleChange}
// //                   />
// //                   <span className="hero-switch-slider">
// //                     <span className="hero-switch-knob"></span>
// //                   </span>
// //                 </label>
// //               </div>

// //               {/* FORM ACTIONS */}
// //               <div className="hero-form-actions">
// //                 {hero && (
// //                   <button
// //                     type="button"
// //                     className="hero-delete-button"
// //                     onClick={handleDelete}
// //                     disabled={saving || deleting}
// //                   >
// //                     <Trash2 size={18} />
// //                     {deleting ? "Deleting..." : "Delete"}
// //                   </button>
// //                 )}

// //                 <button
// //                   type="submit"
// //                   className="hero-save-button"
// //                   disabled={saving || uploading || deleting}
// //                 >
// //                   <Save size={18} />
// //                   {saving ? "Saving..." : hero ? "Update Hero" : "Create Hero"}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </form>

// //         {/* PREVIEW COLUMN */}
// //         <div className="hero-preview-column">
// //           {/* IMAGE UPLOAD */}
// //           <div className="hero-card">
// //             <div className="hero-card-header">
// //               <div>
// //                 <h2>Hero Image</h2>
// //                 <p>Upload the main homepage hero image.</p>
// //               </div>
// //               <ImagePlus size={22} className="hero-card-header-icon" />
// //             </div>

// //             <div className="hero-card-body">
// //               <div
// //                 className={`hero-upload-area ${dragOver ? "drag-over" : ""} ${
// //                   form.image ? "has-image" : ""
// //                 }`}
// //                 onDragOver={handleDragOver}
// //                 onDragLeave={handleDragLeave}
// //                 onDrop={handleDrop}
// //                 onClick={() => !uploading && document.getElementById("hero-image-upload").click()}
// //               >
// //                 {form.image ? (
// //                   <>
// //                     <img
// //                       src={getImageUrl(form.image)}
// //                       alt="Hero preview"
// //                       className="hero-upload-preview"
// //                       onError={(e) => {
// //                         e.target.style.display = "none";
// //                         e.target.nextElementSibling.style.display = "flex";
// //                       }}
// //                     />
// //                     <div className="hero-upload-overlay">
// //                       <Upload size={24} />
// //                       <span>Click to change image</span>
// //                     </div>
// //                   </>
// //                 ) : (
// //                   <div className="hero-upload-empty">
// //                     {uploading ? (
// //                       <>
// //                         <Loader2 size={42} className="hero-loading-spinner" />
// //                         <strong>Uploading...</strong>
// //                       </>
// //                     ) : (
// //                       <>
// //                         <ImagePlus size={42} />
// //                         <strong>Upload Hero Image</strong>
// //                         <span>JPG, PNG, WEBP or SVG</span>
// //                         <small>Maximum 5 MB</small>
// //                         <span className="hero-upload-hint">
// //                           Click or drag & drop
// //                         </span>
// //                       </>
// //                     )}
// //                   </div>
// //                 )}
// //               </div>

// //               <input
// //                 id="hero-image-upload"
// //                 type="file"
// //                 accept="image/jpeg,image/jpg,image/png,image/webp,image/svg+xml"
// //                 onChange={handleImageUpload}
// //                 disabled={uploading}
// //                 hidden
// //               />

// //               {form.image && (
// //                 <div className="hero-image-actions">
// //                   <button
// //                     type="button"
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       setForm((previous) => ({ ...previous, image: "" }));
// //                       setImagePreview("");
// //                     }}
// //                     className="hero-remove-image"
// //                   >
// //                     <X size={16} />
// //                     Remove Image
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* LIVE PREVIEW */}
// //           <div className="hero-card">
// //             <div className="hero-card-header">
// //               <div>
// //                 <h2>Live Preview</h2>
// //                 <p>Approximate homepage appearance.</p>
// //               </div>
// //               {form.isActive ? (
// //                 <Eye size={20} className="hero-card-header-icon" />
// //               ) : (
// //                 <EyeOff size={20} className="hero-card-header-icon" />
// //               )}
// //             </div>

// //             <div className="hero-card-body">
// //               <div
// //                 className="hero-live-preview"
// //                 style={
// //                   form.image
// //                     ? {
// //                         backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("${getImageUrl(
// //                           form.image
// //                         )}")`,
// //                       }
// //                     : undefined
// //                 }
// //               >
// //                 {!form.image && (
// //                   <div className="hero-live-placeholder">
// //                     <ImagePlus size={32} />
// //                     <span>Hero image preview</span>
// //                   </div>
// //                 )}

// //                 <div className="hero-live-content">
// //                   {form.subtitle && (
// //                     <div className="hero-live-subtitle">{form.subtitle}</div>
// //                   )}

// //                   <h3>{form.title || "Your Hero Title"}</h3>

// //                   {form.description && <p>{form.description}</p>}

// //                   {form.buttonText && (
// //                     <button type="button" className="hero-live-button">
// //                       {form.buttonText}
// //                     </button>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroManagement;



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

// import "./HeroManagement.css";

// const emptyForm = {
//   title: "",
//   subtitle: "",
//   description: "",
//   buttonText: "",
//   buttonLink: "",
//   image: "",
//   isActive: true,
// };

// const HeroManagement = () => {
//   const [heroes, setHeroes] = useState([]);

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

//   const [uploading, setUploading] =
//     useState(false);

//   const [deletingId, setDeletingId] =
//     useState(null);

//   const [error, setError] =
//     useState("");

//   const [success, setSuccess] =
//     useState("");

//   // ==========================================
//   // SERVER URL
//   // ==========================================

//   const getServerUrl = () => {
//     const apiUrl =
//       import.meta.env.VITE_API_URL ||
//       "http://localhost:5000/api";

//     return apiUrl.replace(
//       /\/api\/?$/,
//       ""
//     );
//   };

//   // ==========================================
//   // IMAGE URL
//   // ==========================================

//   const getImageUrl = (image) => {
//     if (!image) {
//       return "";
//     }

//     const value = String(image).trim();

//     // Full URL
//     if (
//       value.startsWith("http://") ||
//       value.startsWith("https://") ||
//       value.startsWith("data:image/")
//     ) {
//       return value;
//     }

//     const serverUrl =
//       getServerUrl();

//     // /uploads/image.jpg
//     if (value.startsWith("/")) {
//       return `${serverUrl}${value}`;
//     }

//     // uploads/image.jpg
//     if (
//       value.startsWith("uploads/")
//     ) {
//       return `${serverUrl}/${value}`;
//     }

//     // image.jpg
//     return `${serverUrl}/uploads/${value}`;
//   };

//   // ==========================================
//   // LOAD HEROES
//   // ==========================================

//   const loadHeroes = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       /*
//        * Admin endpoint
//        *
//        * GET /api/hero/admin
//        */

//       const response =
//         await api.get("/hero/admin");

//       console.log(
//         "Hero API response:",
//         response.data
//       );

//       const responseData =
//         response.data?.data;

//       /*
//        * Supports:
//        *
//        * data: [...]
//        *
//        * OR
//        *
//        * data: {...}
//        */

//       if (
//         Array.isArray(
//           responseData
//         )
//       ) {
//         setHeroes(responseData);
//       } else if (
//         responseData
//       ) {
//         setHeroes([
//           responseData,
//         ]);
//       } else {
//         setHeroes([]);
//       }
//     } catch (err) {
//       console.error(
//         "Load heroes error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to load hero banners"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // INITIAL LOAD
//   // ==========================================

//   useEffect(() => {
//     loadHeroes();
//   }, []);

//   // ==========================================
//   // ADD HERO
//   // ==========================================

//   const handleAddHero = () => {
//     setEditingId(null);

//     setForm({
//       ...emptyForm,
//     });

//     setError("");
//     setSuccess("");

//     setShowForm(true);
//   };

//   // ==========================================
//   // EDIT HERO
//   // ==========================================

//   const handleEdit = (hero) => {
//     setEditingId(hero.id);

//     setForm({
//       title:
//         hero.title || "",

//       subtitle:
//         hero.subtitle || "",

//       description:
//         hero.description || "",

//       buttonText:
//         hero.buttonText || "",

//       buttonLink:
//         hero.buttonLink || "",

//       image:
//         hero.image || "",

//       isActive:
//         hero.isActive ?? true,
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

//     setForm({
//       ...emptyForm,
//     });

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

//   const handleImageUpload = async (
//     e
//   ) => {
//     const file =
//       e.target.files?.[0];

//     if (!file) {
//       return;
//     }

//     // ------------------------------------------
//     // Validate image type
//     // ------------------------------------------

//     const allowedTypes = [
//       "image/jpeg",
//       "image/jpg",
//       "image/png",
//       "image/webp",
//     ];

//     if (
//       !allowedTypes.includes(
//         file.type
//       )
//     ) {
//       setError(
//         "Only JPG, PNG and WEBP images are allowed"
//       );

//       e.target.value = "";

//       return;
//     }

//     // ------------------------------------------
//     // Validate image size
//     // ------------------------------------------

//     if (
//       file.size >
//       5 * 1024 * 1024
//     ) {
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

//       const formData =
//         new FormData();

//       formData.append(
//         "image",
//         file
//       );

//       console.log(
//         "Uploading hero image:",
//         file.name
//       );

//       const response =
//         await api.post(
//           "/upload/image",
//           formData,
//           {
//             headers: {
//               "Content-Type":
//                 "multipart/form-data",
//             },
//           }
//         );

//       console.log(
//         "Hero upload response:",
//         response.data
//       );

//       /*
//        * Expected backend response:
//        *
//        * {
//        *   success: true,
//        *   data: {
//        *     url: "/uploads/image.jpg"
//        *   }
//        * }
//        */

//       const imageUrl =
//         response.data?.data?.url;

//       if (!imageUrl) {
//         throw new Error(
//           "Image URL was not returned by server"
//         );
//       }

//       setForm((previous) => ({
//         ...previous,
//         image: imageUrl,
//       }));

//       setSuccess(
//         "Hero image uploaded successfully"
//       );
//     } catch (err) {
//       console.error(
//         "Hero image upload error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to upload hero image"
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
//   // SAVE HERO
//   // ==========================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     // ------------------------------------------
//     // Validation
//     // ------------------------------------------

//     if (!form.title.trim()) {
//       setError(
//         "Hero title is required"
//       );

//       return;
//     }

//     try {
//       setSaving(true);

//       const payload = {
//         title:
//           form.title.trim(),

//         subtitle:
//           form.subtitle.trim() ||
//           null,

//         description:
//           form.description.trim() ||
//           null,

//         buttonText:
//           form.buttonText.trim() ||
//           null,

//         buttonLink:
//           form.buttonLink.trim() ||
//           null,

//         image:
//           form.image.trim() ||
//           null,

//         isActive:
//           Boolean(form.isActive),
//       };

//       console.log(
//         "Hero save payload:",
//         payload
//       );

//       let response;

//       // ======================================
//       // CREATE
//       // ======================================

//       if (!editingId) {
//         response =
//           await api.post(
//             "/hero",
//             payload
//           );

//         console.log(
//           "Create hero response:",
//           response.data
//         );

//         const createdHero =
//           response.data?.data;

//         if (createdHero) {
//           setHeroes((previous) => [
//             createdHero,
//             ...previous,
//           ]);
//         }

//         setSuccess(
//           "Hero banner created successfully"
//         );
//       }

//       // ======================================
//       // UPDATE
//       // ======================================

//       else {
//         response =
//           await api.put(
//             `/hero/${editingId}`,
//             payload
//           );

//         console.log(
//           "Update hero response:",
//           response.data
//         );

//         const updatedHero =
//           response.data?.data;

//         if (updatedHero) {
//           setHeroes((previous) =>
//             previous.map((item) =>
//               item.id === editingId
//                 ? updatedHero
//                 : item
//             )
//           );
//         }

//         setSuccess(
//           "Hero banner updated successfully"
//         );
//       }

//       // Close form
//       setShowForm(false);

//       setEditingId(null);

//       setForm({
//         ...emptyForm,
//       });
//     } catch (err) {
//       console.error(
//         "Save hero error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to save hero banner"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ==========================================
//   // DELETE HERO
//   // ==========================================

//   const handleDelete = async (
//     hero
//   ) => {
//     const confirmed =
//       window.confirm(
//         `Are you sure you want to delete "${hero.title}"?`
//       );

//     if (!confirmed) {
//       return;
//     }

//     try {
//       setDeletingId(hero.id);

//       setError("");
//       setSuccess("");

//       await api.delete(
//         `/hero/${hero.id}`
//       );

//       setHeroes((previous) =>
//         previous.filter(
//           (item) =>
//             item.id !== hero.id
//         )
//       );

//       setSuccess(
//         "Hero banner deleted successfully"
//       );
//     } catch (err) {
//       console.error(
//         "Delete hero error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to delete hero"
//       );
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   // ==========================================
//   // TOGGLE STATUS
//   // ==========================================

//   const handleToggleStatus = async (
//     hero
//   ) => {
//     try {
//       setError("");
//       setSuccess("");

//       const response =
//         await api.put(
//           `/hero/${hero.id}`,
//           {
//             isActive:
//               !hero.isActive,
//           }
//         );

//       console.log(
//         "Toggle hero response:",
//         response.data
//       );

//       const updatedHero =
//         response.data?.data;

//       if (updatedHero) {
//         setHeroes((previous) =>
//           previous.map((item) =>
//             item.id === hero.id
//               ? updatedHero
//               : item
//           )
//         );
//       }
//     } catch (err) {
//       console.error(
//         "Toggle hero status error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to update hero status"
//       );
//     }
//   };

//   // ==========================================
//   // LOADING
//   // ==========================================

//   if (loading) {
//     return (
//       <div className="hero-management-loading">

//         <RefreshCw
//           size={22}
//           className="hero-spin"
//         />

//         <span>
//           Loading hero banners...
//         </span>

//       </div>
//     );
//   }

//   // ==========================================
//   // PAGE
//   // ==========================================

//   return (
//     <div className="hero-management">

//       {/* ====================================== */}
//       {/* HEADER */}
//       {/* ====================================== */}

//       <div className="hero-page-header">

//         <div>

//           <h1>
//             Hero Banners
//           </h1>

//           <p>
//             Manage the main hero section
//             of your SNGA website.
//           </p>

//         </div>

//         <div className="hero-header-actions">

//           <button
//             type="button"
//             className="hero-refresh-button"
//             onClick={loadHeroes}
//           >
//             <RefreshCw
//               size={17}
//             />

//             Refresh
//           </button>

//           <button
//             type="button"
//             className="hero-add-button"
//             onClick={handleAddHero}
//           >
//             <Plus size={19} />

//             Add Hero
//           </button>

//         </div>

//       </div>

//       {/* ====================================== */}
//       {/* SUCCESS */}
//       {/* ====================================== */}

//       {success && (
//         <div className="hero-success">
//           {success}
//         </div>
//       )}

//       {/* ====================================== */}
//       {/* ERROR */}
//       {/* ====================================== */}

//       {error && (
//         <div className="hero-error">
//           {error}
//         </div>
//       )}

//       {/* ====================================== */}
//       {/* FORM */}
//       {/* ====================================== */}

//       {showForm && (
//         <div className="hero-form-card">

//           <div className="hero-form-header">

//             <div>

//               <h2>
//                 {editingId
//                   ? "Edit Hero"
//                   : "Add Hero"}
//               </h2>

//               <p>
//                 Configure the content
//                 displayed in the hero section.
//               </p>

//             </div>

//             <button
//               type="button"
//               className="hero-close-button"
//               onClick={handleClose}
//             >
//               <X size={20} />
//             </button>

//           </div>

//           <form
//             onSubmit={handleSubmit}
//           >

//             <div className="hero-form-grid">

//               {/* TITLE */}

//               <div className="hero-field">

//                 <label>
//                   Title *
//                 </label>

//                 <input
//                   type="text"
//                   name="title"
//                   value={form.title}
//                   onChange={handleChange}
//                   placeholder="Enter hero title"
//                 />

//               </div>

//               {/* SUBTITLE */}

//               <div className="hero-field">

//                 <label>
//                   Subtitle
//                 </label>

//                 <input
//                   type="text"
//                   name="subtitle"
//                   value={form.subtitle}
//                   onChange={handleChange}
//                   placeholder="Enter hero subtitle"
//                 />

//               </div>

//               {/* DESCRIPTION */}

//               <div className="hero-field hero-full">

//                 <label>
//                   Description
//                 </label>

//                 <textarea
//                   name="description"
//                   value={
//                     form.description
//                   }
//                   onChange={handleChange}
//                   rows="4"
//                   placeholder="Enter hero description"
//                 />

//               </div>

//               {/* ================================= */}
//               {/* IMAGE UPLOAD */}
//               {/* ================================= */}

//               <div className="hero-field hero-full">

//                 <label>
//                   Hero Image
//                 </label>

//                 <div className="hero-upload-box">

//                   {form.image ? (
//                     <div className="hero-upload-preview">

//                       <img
//                         src={getImageUrl(
//                           form.image
//                         )}
//                         alt={
//                           form.title ||
//                           "Hero preview"
//                         }
//                         onError={(e) => {
//                           console.error(
//                             "Hero image failed:",
//                             e.currentTarget
//                               .src
//                           );
//                         }}
//                       />

//                       <button
//                         type="button"
//                         className="hero-remove-image"
//                         onClick={
//                           handleRemoveImage
//                         }
//                       >
//                         <Trash2
//                           size={15}
//                         />

//                         Remove Image
//                       </button>

//                     </div>
//                   ) : (
//                     <label
//                       htmlFor="hero-image-upload"
//                       className="hero-upload-label"
//                     >

//                       {uploading ? (
//                         <>
//                           <RefreshCw
//                             size={38}
//                             className="hero-spin"
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
//                             Upload Hero Image
//                           </strong>

//                           <span>
//                             Click to choose
//                             an image
//                           </span>

//                           <small>
//                             JPG, PNG, WEBP
//                             · Maximum 5 MB
//                           </small>
//                         </>
//                       )}

//                     </label>
//                   )}

//                 </div>

//                 <input
//                   id="hero-image-upload"
//                   type="file"
//                   accept="image/jpeg,image/jpg,image/png,image/webp"
//                   onChange={
//                     handleImageUpload
//                   }
//                   disabled={uploading}
//                   hidden
//                 />

//               </div>

//               {/* BUTTON TEXT */}

//               <div className="hero-field">

//                 <label>
//                   CTA Button Text
//                 </label>

//                 <input
//                   type="text"
//                   name="buttonText"
//                   value={
//                     form.buttonText
//                   }
//                   onChange={handleChange}
//                   placeholder="View More"
//                 />

//               </div>

//               {/* BUTTON LINK */}

//               <div className="hero-field">

//                 <label>
//                   CTA Button Link
//                 </label>

//                 <input
//                   type="text"
//                   name="buttonLink"
//                   value={
//                     form.buttonLink
//                   }
//                   onChange={handleChange}
//                   placeholder="/about"
//                 />

//               </div>

//               {/* ACTIVE */}

//               <div className="hero-active-field">

//                 <input
//                   type="checkbox"
//                   id="hero-active"
//                   name="isActive"
//                   checked={
//                     form.isActive
//                   }
//                   onChange={handleChange}
//                 />

//                 <label htmlFor="hero-active">
//                   Active
//                 </label>

//               </div>

//             </div>

//             {/* ================================= */}
//             {/* FORM ACTIONS */}
//             {/* ================================= */}

//             <div className="hero-form-actions">

//               <button
//                 type="button"
//                 className="hero-cancel-button"
//                 onClick={handleClose}
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="hero-save-button"
//                 disabled={
//                   saving ||
//                   uploading
//                 }
//               >

//                 {saving
//                   ? "Saving..."
//                   : editingId
//                     ? "Update Hero"
//                     : "Add Hero"}

//               </button>

//             </div>

//           </form>

//         </div>
//       )}

//       {/* ====================================== */}
//       {/* TABLE */}
//       {/* ====================================== */}

//       {!showForm && (
//         <div className="hero-table-wrapper">

//           {heroes.length === 0 ? (
//             <div className="hero-empty">

//               <div className="hero-empty-icon">

//                 <ImageIcon
//                   size={30}
//                 />

//               </div>

//               <h2>
//                 No Hero Banners
//               </h2>

//               <p>
//                 Create your first hero
//                 banner for the homepage.
//               </p>

//               <button
//                 type="button"
//                 className="hero-add-button"
//                 onClick={
//                   handleAddHero
//                 }
//               >
//                 <Plus size={18} />

//                 Add Hero
//               </button>

//             </div>
//           ) : (
//             <table className="hero-table">

//               <thead>

//                 <tr>

//                   <th>
//                     IMAGE
//                   </th>

//                   <th>
//                     CONTENT
//                   </th>

//                   <th>
//                     CTA
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

//                 {heroes.map(
//                   (hero) => (
//                     <tr
//                       key={hero.id}
//                     >

//                       {/* IMAGE */}

//                       <td>

//                         <div className="hero-table-image">

//                           {hero.image ? (
//                             <img
//                               src={getImageUrl(
//                                 hero.image
//                               )}
//                               alt={
//                                 hero.title
//                               }
//                               onError={(
//                                 e
//                               ) => {
//                                 console.error(
//                                   "Hero table image failed:",
//                                   e.currentTarget
//                                     .src
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

//                         <div className="hero-content-cell">

//                           <strong>
//                             {
//                               hero.title
//                             }
//                           </strong>

//                           {hero.subtitle && (
//                             <span>
//                               {
//                                 hero.subtitle
//                               }
//                             </span>
//                           )}

//                           {hero.description && (
//                             <small>
//                               {
//                                 hero.description
//                               }
//                             </small>
//                           )}

//                         </div>

//                       </td>

//                       {/* CTA */}

//                       <td>

//                         {hero.buttonText ? (
//                           <div className="hero-cta-cell">

//                             <strong>
//                               {
//                                 hero.buttonText
//                               }
//                             </strong>

//                             {hero.buttonLink && (
//                               <span>
//                                 {
//                                   hero.buttonLink
//                                 }
//                               </span>
//                             )}

//                           </div>
//                         ) : (
//                           <span className="hero-no-value">
//                             No CTA
//                           </span>
//                         )}

//                       </td>

//                       {/* STATUS */}

//                       <td>

//                         <button
//                           type="button"
//                           className={
//                             hero.isActive
//                               ? "hero-status active"
//                               : "hero-status inactive"
//                           }
//                           onClick={() =>
//                             handleToggleStatus(
//                               hero
//                             )
//                           }
//                         >

//                           <Power
//                             size={16}
//                           />

//                           {hero.isActive
//                             ? "Active"
//                             : "Inactive"}

//                         </button>

//                       </td>

//                       {/* ACTIONS */}

//                       <td>

//                         <div className="hero-actions">

//                           <button
//                             type="button"
//                             className="hero-action-button edit"
//                             onClick={() =>
//                               handleEdit(
//                                 hero
//                               )
//                             }
//                             title="Edit Hero"
//                           >

//                             <Pencil
//                               size={19}
//                             />

//                           </button>

//                           <button
//                             type="button"
//                             className="hero-action-button delete"
//                             onClick={() =>
//                               handleDelete(
//                                 hero
//                               )
//                             }
//                             disabled={
//                               deletingId ===
//                               hero.id
//                             }
//                             title="Delete Hero"
//                           >

//                             <Trash2
//                               size={19}
//                             />

//                           </button>

//                         </div>

//                       </td>

//                     </tr>
//                   )
//                 )}

//               </tbody>

//             </table>
//           )}

//         </div>
//       )}

//     </div>
//   );
// };

// export default HeroManagement;


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
import "./HeroManagement.css";

const emptyForm = {
  title: "",
  subtitle: "",
  description: "",
  buttonText: "",
  buttonLink: "",
  image: "",
  isActive: true,
};

const HeroManagement = () => {
  const [heroes, setHeroes] = useState([]);

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

    /*
      Example:

      VITE_API_URL
      http://localhost:5000/api

      becomes:

      http://localhost:5000
    */

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

    const value = String(image).trim();

    // ------------------------------------------
    // Already full URL
    // ------------------------------------------

    if (
      value.startsWith("http://") ||
      value.startsWith("https://")
    ) {
      return value;
    }

    // ------------------------------------------
    // Data URL
    // ------------------------------------------

    if (
      value.startsWith("data:image/")
    ) {
      return value;
    }

    const serverUrl =
      getServerUrl();

    // ------------------------------------------
    // /uploads/image.jpg
    // ------------------------------------------

    if (value.startsWith("/")) {
      return `${serverUrl}${value}`;
    }

    // ------------------------------------------
    // uploads/image.jpg
    // ------------------------------------------

    if (
      value.startsWith("uploads/")
    ) {
      return `${serverUrl}/${value}`;
    }

    // ------------------------------------------
    // image.jpg
    // ------------------------------------------

    return `${serverUrl}/uploads/${value}`;
  };

  // ==========================================
  // LOAD HEROES
  // ==========================================

  const loadHeroes = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await api.get("/hero/admin");

      console.log(
        "Hero API response:",
        response.data
      );

      const data =
        response.data?.data;

      if (Array.isArray(data)) {
        setHeroes(data);
      } else if (data) {
        setHeroes([data]);
      } else {
        setHeroes([]);
      }
    } catch (err) {
      console.error(
        "Load heroes error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load hero banners"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    loadHeroes();
  }, []);

  // ==========================================
  // ADD HERO
  // ==========================================

  const handleAddHero = () => {
    setEditingId(null);

    setForm({
      ...emptyForm,
    });

    setError("");
    setSuccess("");

    setShowForm(true);
  };

  // ==========================================
  // EDIT HERO
  // ==========================================

  const handleEdit = (hero) => {
    setEditingId(hero.id);

    setForm({
      title: hero.title || "",

      subtitle:
        hero.subtitle || "",

      description:
        hero.description || "",

      buttonText:
        hero.buttonText || "",

      buttonLink:
        hero.buttonLink || "",

      image:
        hero.image || "",

      isActive:
        hero.isActive ?? true,
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

  const handleImageUpload = async (
    e
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) {
      return;
    }

    // ------------------------------------------
    // Allowed types
    // ------------------------------------------

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

    // ------------------------------------------
    // Max 5MB
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
        "Uploading image:",
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
        "Upload response:",
        response.data
      );

      const imageUrl =
        response.data?.data?.url;

      if (!imageUrl) {
        throw new Error(
          "Upload response does not contain image URL"
        );
      }

      setForm((previous) => ({
        ...previous,
        image: imageUrl,
      }));

      setSuccess(
        "Hero image uploaded successfully"
      );
    } catch (err) {
      console.error(
        "Image upload error:",
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
  // SAVE HERO
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
        "Hero title is required"
      );

      return;
    }

    try {
      setSaving(true);

      const payload = {
        title:
          form.title.trim(),

        subtitle:
          form.subtitle.trim() ||
          null,

        description:
          form.description.trim() ||
          null,

        buttonText:
          form.buttonText.trim() ||
          null,

        buttonLink:
          form.buttonLink.trim() ||
          null,

        image:
          form.image.trim() ||
          null,

        isActive:
          Boolean(form.isActive),
      };

      console.log(
        "Hero payload:",
        payload
      );

      let response;

      // ========================================
      // CREATE
      // ========================================

      if (!editingId) {
        response =
          await api.post(
            "/hero",
            payload
          );

        console.log(
          "Created hero:",
          response.data
        );

        const createdHero =
          response.data?.data;

        if (createdHero) {
          setHeroes((previous) => [
            createdHero,
            ...previous,
          ]);
        }

        setSuccess(
          "Hero banner created successfully"
        );
      }

      // ========================================
      // UPDATE
      // ========================================

      else {
        response =
          await api.put(
            `/hero/${editingId}`,
            payload
          );

        console.log(
          "Updated hero:",
          response.data
        );

        const updatedHero =
          response.data?.data;

        if (updatedHero) {
          setHeroes((previous) =>
            previous.map((item) =>
              item.id === editingId
                ? updatedHero
                : item
            )
          );
        }

        setSuccess(
          "Hero banner updated successfully"
        );
      }

      setShowForm(false);

      setEditingId(null);

      setForm({
        ...emptyForm,
      });
    } catch (err) {
      console.error(
        "Save hero error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to save hero banner"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // DELETE HERO
  // ==========================================

  const handleDelete = async (
    hero
  ) => {
    const confirmed =
      window.confirm(
        `Are you sure you want to delete "${hero.title}"?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(hero.id);

      setError("");
      setSuccess("");

      await api.delete(
        `/hero/${hero.id}`
      );

      setHeroes((previous) =>
        previous.filter(
          (item) =>
            item.id !== hero.id
        )
      );

      setSuccess(
        "Hero banner deleted successfully"
      );
    } catch (err) {
      console.error(
        "Delete hero error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete hero banner"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // TOGGLE ACTIVE
  // ==========================================

  const handleToggleStatus = async (
    hero
  ) => {
    try {
      setError("");
      setSuccess("");

      const response =
        await api.put(
          `/hero/${hero.id}`,
          {
            isActive:
              !hero.isActive,
          }
        );

      console.log(
        "Toggle response:",
        response.data
      );

      const updatedHero =
        response.data?.data;

      if (updatedHero) {
        setHeroes((previous) =>
          previous.map((item) =>
            item.id === hero.id
              ? updatedHero
              : item
          )
        );
      }
    } catch (err) {
      console.error(
        "Toggle hero status error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to update hero status"
      );
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="hero-management-loading">

        <RefreshCw
          size={22}
          className="hero-spin"
        />

        <span>
          Loading hero banners...
        </span>

      </div>
    );
  }

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="hero-management">

      {/* ====================================== */}
      {/* HEADER */}
      {/* ====================================== */}

      <div className="hero-page-header">

        <div>

          <h1>
            Hero Banners
          </h1>

          <p>
            Manage the main hero section
            of your SNGA website.
          </p>

        </div>

        <div className="hero-header-actions">

          <button
            type="button"
            className="hero-refresh-button"
            onClick={loadHeroes}
          >
            <RefreshCw
              size={17}
            />

            Refresh
          </button>

          <button
            type="button"
            className="hero-add-button"
            onClick={handleAddHero}
          >
            <Plus size={19} />

            Add Hero
          </button>

        </div>

      </div>

      {/* ====================================== */}
      {/* SUCCESS MESSAGE */}
      {/* ====================================== */}

      {success && (
        <div className="hero-success">
          {success}
        </div>
      )}

      {/* ====================================== */}
      {/* ERROR MESSAGE */}
      {/* ====================================== */}

      {error && (
        <div className="hero-error">
          {error}
        </div>
      )}

      {/* ====================================== */}
      {/* ADD / EDIT FORM */}
      {/* ====================================== */}

      {showForm && (
        <div className="hero-form-card">

          <div className="hero-form-header">

            <div>

              <h2>
                {editingId
                  ? "Edit Hero"
                  : "Add Hero"}
              </h2>

              <p>
                Configure the content
                displayed in the hero section.
              </p>

            </div>

            <button
              type="button"
              className="hero-close-button"
              onClick={handleClose}
            >
              <X size={20} />
            </button>

          </div>

          <form
            onSubmit={handleSubmit}
          >

            <div className="hero-form-grid">

              {/* ================================= */}
              {/* TITLE */}
              {/* ================================= */}

              <div className="hero-field">

                <label>
                  Title *
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter hero title"
                />

              </div>

              {/* ================================= */}
              {/* SUBTITLE */}
              {/* ================================= */}

              <div className="hero-field">

                <label>
                  Subtitle
                </label>

                <input
                  type="text"
                  name="subtitle"
                  value={form.subtitle}
                  onChange={handleChange}
                  placeholder="Enter hero subtitle"
                />

              </div>

              {/* ================================= */}
              {/* DESCRIPTION */}
              {/* ================================= */}

              <div className="hero-field hero-full">

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  value={
                    form.description
                  }
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter hero description"
                />

              </div>

              {/* ================================= */}
              {/* IMAGE */}
              {/* ================================= */}

              <div className="hero-field hero-full">

                <label>
                  Hero Image
                </label>

                <div className="hero-upload-box">

                  {form.image ? (
                    <div className="hero-upload-preview">

                      <img
                        src={getImageUrl(
                          form.image
                        )}
                        alt={
                          form.title ||
                          "Hero preview"
                        }
                        onLoad={() => {
                          console.log(
                            "Hero image loaded:",
                            getImageUrl(
                              form.image
                            )
                          );
                        }}
                        onError={(e) => {
                          console.error(
                            "Hero image failed:",
                            getImageUrl(
                              form.image
                            )
                          );

                          e.currentTarget.style.display =
                            "none";
                        }}
                      />

                      <button
                        type="button"
                        className="hero-remove-image"
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
                      htmlFor="hero-image-upload"
                      className="hero-upload-label"
                    >

                      {uploading ? (
                        <>
                          <RefreshCw
                            size={38}
                            className="hero-spin"
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
                            Upload Hero Image
                          </strong>

                          <span>
                            Click to choose
                            an image
                          </span>

                          <small>
                            JPG, PNG, WEBP
                            · Maximum 5 MB
                          </small>
                        </>
                      )}

                    </label>
                  )}

                </div>

                <input
                  id="hero-image-upload"
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
              {/* CTA TEXT */}
              {/* ================================= */}

              <div className="hero-field">

                <label>
                  CTA Button Text
                </label>

                <input
                  type="text"
                  name="buttonText"
                  value={
                    form.buttonText
                  }
                  onChange={handleChange}
                  placeholder="View More"
                />

              </div>

              {/* ================================= */}
              {/* CTA LINK */}
              {/* ================================= */}

              <div className="hero-field">

                <label>
                  CTA Button Link
                </label>

                <input
                  type="text"
                  name="buttonLink"
                  value={
                    form.buttonLink
                  }
                  onChange={handleChange}
                  placeholder="/about"
                />

              </div>

              {/* ================================= */}
              {/* ACTIVE */}
              {/* ================================= */}

              <div className="hero-active-field">

                <input
                  type="checkbox"
                  id="hero-active"
                  name="isActive"
                  checked={
                    form.isActive
                  }
                  onChange={handleChange}
                />

                <label htmlFor="hero-active">
                  Active
                </label>

              </div>

            </div>

            {/* ================================= */}
            {/* FORM ACTIONS */}
            {/* ================================= */}

            <div className="hero-form-actions">

              <button
                type="button"
                className="hero-cancel-button"
                onClick={handleClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="hero-save-button"
                disabled={
                  saving ||
                  uploading
                }
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Hero"
                    : "Add Hero"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* ====================================== */}
      {/* HERO TABLE */}
      {/* ====================================== */}

      {!showForm && (
        <div className="hero-table-wrapper">

          {heroes.length === 0 ? (
            <div className="hero-empty">

              <div className="hero-empty-icon">

                <ImageIcon
                  size={30}
                />

              </div>

              <h2>
                No Hero Banners
              </h2>

              <p>
                Create your first hero
                banner for the homepage.
              </p>

              <button
                type="button"
                className="hero-add-button"
                onClick={
                  handleAddHero
                }
              >
                <Plus size={18} />

                Add Hero
              </button>

            </div>
          ) : (
            <table className="hero-table">

              <thead>

                <tr>

                  <th>
                    IMAGE
                  </th>

                  <th>
                    CONTENT
                  </th>

                  <th>
                    CTA
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

                {heroes.map(
                  (hero) => {

                    const imageUrl =
                      getImageUrl(
                        hero.image
                      );

                    return (
                      <tr
                        key={hero.id}
                      >

                        {/* ================================= */}
                        {/* IMAGE */}
                        {/* ================================= */}

                        <td>

                          <div className="hero-table-image">

                            {hero.image ? (
                              <img
                                src={imageUrl}
                                alt={
                                  hero.title ||
                                  "Hero"
                                }
                                onLoad={() => {
                                  console.log(
                                    "Hero table image loaded:",
                                    imageUrl
                                  );
                                }}
                                onError={(e) => {
                                  console.error(
                                    "Hero table image failed:",
                                    imageUrl
                                  );

                                  e.currentTarget.style.display =
                                    "none";
                                }}
                              />
                            ) : (
                              <ImageIcon
                                size={27}
                              />
                            )}

                          </div>

                        </td>

                        {/* ================================= */}
                        {/* CONTENT */}
                        {/* ================================= */}

                        <td>

                          <div className="hero-content-cell">

                            <strong>
                              {
                                hero.title
                              }
                            </strong>

                            {hero.subtitle && (
                              <span>
                                {
                                  hero.subtitle
                                }
                              </span>
                            )}

                            {hero.description && (
                              <small>
                                {
                                  hero.description
                                }
                              </small>
                            )}

                          </div>

                        </td>

                        {/* ================================= */}
                        {/* CTA */}
                        {/* ================================= */}

                        <td>

                          {hero.buttonText ? (
                            <div className="hero-cta-cell">

                              <strong>
                                {
                                  hero.buttonText
                                }
                              </strong>

                              {hero.buttonLink && (
                                <span>
                                  {
                                    hero.buttonLink
                                  }
                                </span>
                              )}

                            </div>
                          ) : (
                            <span className="hero-no-value">
                              No CTA
                            </span>
                          )}

                        </td>

                        {/* ================================= */}
                        {/* STATUS */}
                        {/* ================================= */}

                        <td>

                          <button
                            type="button"
                            className={
                              hero.isActive
                                ? "hero-status active"
                                : "hero-status inactive"
                            }
                            onClick={() =>
                              handleToggleStatus(
                                hero
                              )
                            }
                          >

                            <Power
                              size={16}
                            />

                            {hero.isActive
                              ? "Active"
                              : "Inactive"}

                          </button>

                        </td>

                        {/* ================================= */}
                        {/* ACTIONS */}
                        {/* ================================= */}

                        <td>

                          <div className="hero-actions">

                            <button
                              type="button"
                              className="hero-action-button edit"
                              onClick={() =>
                                handleEdit(
                                  hero
                                )
                              }
                              title="Edit Hero"
                            >
                              <Pencil
                                size={19}
                              />
                            </button>

                            <button
                              type="button"
                              className="hero-action-button delete"
                              onClick={() =>
                                handleDelete(
                                  hero
                                )
                              }
                              disabled={
                                deletingId ===
                                hero.id
                              }
                              title="Delete Hero"
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

export default HeroManagement;