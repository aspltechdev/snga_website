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
//   ArrowLeft,
// } from "lucide-react";

// import api from "../../services/axios";
// import "./GalleryManagement.css";

// const emptyAlbumForm = {
//   title: "",
//   slug: "",
//   description: "",
//   coverImage: "",
//   isPublished: false,
// };

// const emptyImageForm = {
//   caption: "",
// };

// const GalleryManagement = () => {
//   // ==========================================
//   // STATE
//   // ==========================================

//   const [albums, setAlbums] = useState([]);

//   const [selectedAlbum, setSelectedAlbum] =
//     useState(null);

//   const [images, setImages] = useState([]);

//   const [albumForm, setAlbumForm] =
//     useState(emptyAlbumForm);

//   const [imageForm, setImageForm] =
//     useState(emptyImageForm);

//   const [showAlbumForm, setShowAlbumForm] =
//     useState(false);

//   const [showImageForm, setShowImageForm] =
//     useState(false);

//   const [editingAlbumId, setEditingAlbumId] =
//     useState(null);

//   const [editingImageId, setEditingImageId] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [loadingImages, setLoadingImages] =
//     useState(false);

//   const [saving, setSaving] =
//     useState(false);

//   const [uploading, setUploading] =
//     useState(false);

//   const [deletingAlbumId, setDeletingAlbumId] =
//     useState(null);

//   const [deletingImageId, setDeletingImageId] =
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

//     const value =
//       String(image).trim();

//     // Full URL
//     if (
//       value.startsWith("http://") ||
//       value.startsWith("https://")
//     ) {
//       return value;
//     }

//     // Base64
//     if (
//       value.startsWith("data:image/")
//     ) {
//       return value;
//     }

//     const serverUrl =
//       getServerUrl();

//     // /uploads/image.jpg
//     if (
//       value.startsWith("/uploads/")
//     ) {
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
//   // LOAD ALBUMS
//   // ==========================================

//   const loadAlbums = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response =
//         await api.get("/gallery");

//       console.log(
//         "GALLERY API RESPONSE:",
//         response.data
//       );

//       const data =
//         response.data?.data;

//       setAlbums(
//         Array.isArray(data)
//           ? data
//           : data
//             ? [data]
//             : []
//       );
//     } catch (err) {
//       console.error(
//         "Load albums error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to load gallery albums"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // INITIAL LOAD
//   // ==========================================

//   useEffect(() => {
//     loadAlbums();
//   }, []);

//   // ==========================================
//   // ADD ALBUM
//   // ==========================================

//   const handleAddAlbum = () => {
//     setEditingAlbumId(null);

//     setAlbumForm({
//       ...emptyAlbumForm,
//     });

//     setError("");
//     setSuccess("");

//     setShowAlbumForm(true);
//   };

//   // ==========================================
//   // EDIT ALBUM
//   // ==========================================

//   const handleEditAlbum = (album) => {
//     setEditingAlbumId(album.id);

//     setAlbumForm({
//       title: album.title || "",
//       slug: album.slug || "",
//       description:
//         album.description || "",
//       coverImage:
//         album.coverImage || "",
//       isPublished:
//         album.isPublished ?? false,
//     });

//     setError("");
//     setSuccess("");

//     setShowAlbumForm(true);
//   };

//   // ==========================================
//   // CLOSE ALBUM FORM
//   // ==========================================

//   const handleCloseAlbumForm = () => {
//     setShowAlbumForm(false);

//     setEditingAlbumId(null);

//     setAlbumForm({
//       ...emptyAlbumForm,
//     });
//   };

//   // ==========================================
//   // ALBUM INPUT
//   // ==========================================

//   const handleAlbumChange = (e) => {
//     const {
//       name,
//       value,
//       type,
//       checked,
//     } = e.target;

//     setAlbumForm((previous) => ({
//       ...previous,

//       [name]:
//         type === "checkbox"
//           ? checked
//           : value,
//     }));

//     setError("");
//   };

//   // ==========================================
//   // ALBUM COVER UPLOAD
//   // ==========================================

//   const handleCoverUpload = async (
//     e
//   ) => {
//     const file =
//       e.target.files?.[0];

//     if (!file) {
//       return;
//     }

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
//         "COVER UPLOAD RESPONSE:",
//         response.data
//       );

//       const imageUrl =
//         response.data?.data?.url;

//       if (!imageUrl) {
//         throw new Error(
//           "Image URL missing"
//         );
//       }

//       setAlbumForm((previous) => ({
//         ...previous,
//         coverImage: imageUrl,
//       }));

//       setSuccess(
//         "Cover image uploaded"
//       );
//     } catch (err) {
//       console.error(
//         "Cover upload error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to upload cover image"
//       );
//     } finally {
//       setUploading(false);

//       e.target.value = "";
//     }
//   };

//   // ==========================================
//   // SAVE ALBUM
//   // ==========================================

//   const handleAlbumSubmit = async (
//     e
//   ) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     if (!albumForm.title.trim()) {
//       setError(
//         "Album title is required"
//       );

//       return;
//     }

//     if (!albumForm.slug.trim()) {
//       setError(
//         "Album slug is required"
//       );

//       return;
//     }

//     try {
//       setSaving(true);

//       const payload = {
//         title:
//           albumForm.title.trim(),

//         slug:
//           albumForm.slug.trim(),

//         description:
//           albumForm.description.trim() ||
//           null,

//         coverImage:
//           albumForm.coverImage.trim() ||
//           null,

//         isPublished:
//           Boolean(
//             albumForm.isPublished
//           ),
//       };

//       console.log(
//         "ALBUM PAYLOAD:",
//         payload
//       );

//       if (!editingAlbumId) {
//         const response =
//           await api.post(
//             "/gallery/albums",
//             payload
//           );

//         const createdAlbum =
//           response.data?.data;

//         if (createdAlbum) {
//           setAlbums((previous) => [
//             createdAlbum,
//             ...previous,
//           ]);
//         }

//         setSuccess(
//           "Album created successfully"
//         );
//       } else {
//         const response =
//           await api.put(
//             `/gallery/albums/${editingAlbumId}`,
//             payload
//           );

//         const updatedAlbum =
//           response.data?.data;

//         if (updatedAlbum) {
//           setAlbums((previous) =>
//             previous.map((item) =>
//               item.id ===
//               editingAlbumId
//                 ? updatedAlbum
//                 : item
//             )
//           );

//           if (
//             selectedAlbum?.id ===
//             editingAlbumId
//           ) {
//             setSelectedAlbum(
//               updatedAlbum
//             );
//           }
//         }

//         setSuccess(
//           "Album updated successfully"
//         );
//       }

//       setShowAlbumForm(false);

//       setEditingAlbumId(null);

//       setAlbumForm({
//         ...emptyAlbumForm,
//       });
//     } catch (err) {
//       console.error(
//         "Save album error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to save album"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ==========================================
//   // DELETE ALBUM
//   // ==========================================

//   const handleDeleteAlbum = async (
//     album
//   ) => {
//     const confirmed =
//       window.confirm(
//         `Delete "${album.title}" and all its gallery images?`
//       );

//     if (!confirmed) {
//       return;
//     }

//     try {
//       setDeletingAlbumId(album.id);

//       setError("");
//       setSuccess("");

//       await api.delete(
//         `/gallery/albums/${album.id}`
//       );

//       setAlbums((previous) =>
//         previous.filter(
//           (item) =>
//             item.id !== album.id
//         )
//       );

//       if (
//         selectedAlbum?.id ===
//         album.id
//       ) {
//         setSelectedAlbum(null);
//         setImages([]);
//       }

//       setSuccess(
//         "Album deleted successfully"
//       );
//     } catch (err) {
//       console.error(
//         "Delete album error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to delete album"
//       );
//     } finally {
//       setDeletingAlbumId(null);
//     }
//   };

//   // ==========================================
//   // TOGGLE ALBUM STATUS
//   // ==========================================

//   const handleToggleAlbum = async (
//     album
//   ) => {
//     try {
//       setError("");
//       setSuccess("");

//       const response =
//         await api.put(
//           `/gallery/albums/${album.id}`,
//           {
//             isPublished:
//               !album.isPublished,
//           }
//         );

//       const updatedAlbum =
//         response.data?.data;

//       if (updatedAlbum) {
//         setAlbums((previous) =>
//           previous.map((item) =>
//             item.id === album.id
//               ? updatedAlbum
//               : item
//           )
//         );

//         if (
//           selectedAlbum?.id ===
//           album.id
//         ) {
//           setSelectedAlbum(
//             updatedAlbum
//           );
//         }
//       }
//     } catch (err) {
//       console.error(
//         "Toggle album error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to update album status"
//       );
//     }
//   };

//   // ==========================================
//   // OPEN ALBUM
//   // ==========================================

//   const handleOpenAlbum = async (
//     album
//   ) => {
//     try {
//       setSelectedAlbum(album);

//       setLoadingImages(true);

//       setError("");

//       const response =
//         await api.get(
//           `/gallery/${album.slug}`
//         );

//       console.log(
//         "ALBUM RESPONSE:",
//         response.data
//       );

//       const data =
//         response.data?.data;

//       /*
//         Depending on controller structure,
//         images may be:

//         data.images

//         OR

//         data.album.images
//       */

//       const albumData =
//         data?.album || data;

//       const albumImages =
//         albumData?.images;

//       setImages(
//         Array.isArray(
//           albumImages
//         )
//           ? albumImages
//           : []
//       );
//     } catch (err) {
//       console.error(
//         "Open album error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to load album images"
//       );

//       setImages([]);
//     } finally {
//       setLoadingImages(false);
//     }
//   };

//   // ==========================================
//   // BACK TO ALBUMS
//   // ==========================================

//   const handleBackToAlbums = () => {
//     setSelectedAlbum(null);

//     setImages([]);

//     setShowImageForm(false);

//     setEditingImageId(null);

//     setImageForm({
//       ...emptyImageForm,
//     });

//     setError("");
//     setSuccess("");
//   };

//   // ==========================================
//   // ADD IMAGE
//   // ==========================================

//   const handleAddImage = () => {
//     setEditingImageId(null);

//     setImageForm({
//       ...emptyImageForm,
//     });

//     setError("");
//     setSuccess("");

//     setShowImageForm(true);
//   };

//   // ==========================================
//   // EDIT IMAGE
//   // ==========================================

//   const handleEditImage = (
//     image
//   ) => {
//     setEditingImageId(image.id);

//     setImageForm({
//       caption:
//         image.caption || "",
//     });

//     setError("");
//     setSuccess("");

//     setShowImageForm(true);
//   };

//   // ==========================================
//   // CLOSE IMAGE FORM
//   // ==========================================

//   const handleCloseImageForm =
//     () => {
//       setShowImageForm(false);

//       setEditingImageId(null);

//       setImageForm({
//         ...emptyImageForm,
//       });
//     };

//   // ==========================================
//   // IMAGE FORM CHANGE
//   // ==========================================

//   const handleImageFormChange = (
//     e
//   ) => {
//     setImageForm((previous) => ({
//       ...previous,
//       [e.target.name]:
//         e.target.value,
//     }));
//   };

//   // ==========================================
//   // MULTIPLE IMAGE UPLOAD
//   // ==========================================

//   const handleImagesUpload = async (
//     e
//   ) => {
//     const files = Array.from(
//       e.target.files || []
//     );

//     if (
//       !files.length ||
//       !selectedAlbum
//     ) {
//       return;
//     }

//     try {
//       setUploading(true);

//       setError("");
//       setSuccess("");

//       let uploadedCount = 0;

//       for (const file of files) {
//         const allowedTypes = [
//           "image/jpeg",
//           "image/jpg",
//           "image/png",
//           "image/webp",
//         ];

//         if (
//           !allowedTypes.includes(
//             file.type
//           )
//         ) {
//           console.warn(
//             "Skipped invalid image:",
//             file.name
//           );

//           continue;
//         }

//         if (
//           file.size >
//           5 * 1024 * 1024
//         ) {
//           console.warn(
//             "Skipped large image:",
//             file.name
//           );

//           continue;
//         }

//         // --------------------------------------
//         // Upload image file
//         // --------------------------------------

//         const formData =
//           new FormData();

//         formData.append(
//           "image",
//           file
//         );

//         const uploadResponse =
//           await api.post(
//             "/upload/image",
//             formData,
//             {
//               headers: {
//                 "Content-Type":
//                   "multipart/form-data",
//               },
//             }
//           );

//         const imageUrl =
//           uploadResponse.data
//             ?.data?.url;

//         if (!imageUrl) {
//           continue;
//         }

//         // --------------------------------------
//         // Add image to album
//         // --------------------------------------

//         await api.post(
//           `/gallery/albums/${selectedAlbum.id}/images`,
//           {
//             image: imageUrl,
//             caption: "",
//           }
//         );

//         uploadedCount++;
//       }

//       setSuccess(
//         `${uploadedCount} image${
//           uploadedCount === 1
//             ? ""
//             : "s"
//         } uploaded successfully`
//       );

//       // Reload album
//       await handleOpenAlbum(
//         selectedAlbum
//       );
//     } catch (err) {
//       console.error(
//         "Multiple image upload error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to upload gallery images"
//       );
//     } finally {
//       setUploading(false);

//       e.target.value = "";
//     }
//   };

//   // ==========================================
//   // UPDATE IMAGE
//   // ==========================================

//   const handleImageSubmit = async (
//     e
//   ) => {
//     e.preventDefault();

//     if (!editingImageId) {
//       return;
//     }

//     try {
//       setSaving(true);

//       setError("");
//       setSuccess("");

//       const response =
//         await api.put(
//           `/gallery/images/${editingImageId}`,
//           {
//             caption:
//               imageForm.caption.trim() ||
//               null,
//           }
//         );

//       const updatedImage =
//         response.data?.data;

//       if (updatedImage) {
//         setImages((previous) =>
//           previous.map((image) =>
//             image.id ===
//             editingImageId
//               ? updatedImage
//               : image
//           )
//         );
//       }

//       setSuccess(
//         "Image updated successfully"
//       );

//       setShowImageForm(false);

//       setEditingImageId(null);

//       setImageForm({
//         ...emptyImageForm,
//       });
//     } catch (err) {
//       console.error(
//         "Update image error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to update image"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ==========================================
//   // DELETE IMAGE
//   // ==========================================

//   const handleDeleteImage = async (
//     image
//   ) => {
//     const confirmed =
//       window.confirm(
//         "Are you sure you want to delete this image?"
//       );

//     if (!confirmed) {
//       return;
//     }

//     try {
//       setDeletingImageId(
//         image.id
//       );

//       setError("");
//       setSuccess("");

//       await api.delete(
//         `/gallery/images/${image.id}`
//       );

//       setImages((previous) =>
//         previous.filter(
//           (item) =>
//             item.id !== image.id
//         )
//       );

//       setSuccess(
//         "Image deleted successfully"
//       );
//     } catch (err) {
//       console.error(
//         "Delete image error:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//           "Failed to delete image"
//       );
//     } finally {
//       setDeletingImageId(null);
//     }
//   };

//   // ==========================================
//   // LOADING
//   // ==========================================

//   if (loading) {
//     return (
//       <div className="gallery-management-loading">

//         <RefreshCw
//           size={22}
//           className="gallery-spin"
//         />

//         <span>
//           Loading gallery...
//         </span>

//       </div>
//     );
//   }

//   // ==========================================
//   // ALBUM DETAILS
//   // ==========================================

//   if (selectedAlbum) {
//     return (
//       <div className="gallery-management">

//         {/* ====================================== */}
//         {/* HEADER */}
//         {/* ====================================== */}

//         <div className="gallery-page-header">

//           <div className="gallery-header-left">

//             <button
//               type="button"
//               className="gallery-back-button"
//               onClick={
//                 handleBackToAlbums
//               }
//             >
//               <ArrowLeft
//                 size={19}
//               />

//               Albums
//             </button>

//             <div>

//               <h1>
//                 {selectedAlbum.title}
//               </h1>

//               <p>
//                 {selectedAlbum.description ||
//                   "Manage images in this album."}
//               </p>

//             </div>

//           </div>

//           <div className="gallery-header-actions">

//             <label className="gallery-upload-button">

//               <Upload size={18} />

//               {uploading
//                 ? "Uploading..."
//                 : "Upload Images"}

//               <input
//                 type="file"
//                 multiple
//                 accept="image/jpeg,image/jpg,image/png,image/webp"
//                 onChange={
//                   handleImagesUpload
//                 }
//                 disabled={uploading}
//                 hidden
//               />

//             </label>

//           </div>

//         </div>

//         {/* ====================================== */}
//         {/* ALERTS */}
//         {/* ====================================== */}

//         {success && (
//           <div className="gallery-success">
//             {success}
//           </div>
//         )}

//         {error && (
//           <div className="gallery-error">
//             {error}
//           </div>
//         )}

//         {/* ====================================== */}
//         {/* IMAGE FORM */}
//         {/* ====================================== */}

//         {showImageForm && (
//           <div className="gallery-form-card">

//             <div className="gallery-form-header">

//               <div>
//                 <h2>
//                   Edit Image
//                 </h2>

//                 <p>
//                   Update the image caption.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 className="gallery-close-button"
//                 onClick={
//                   handleCloseImageForm
//                 }
//               >
//                 <X size={20} />
//               </button>

//             </div>

//             <form
//               onSubmit={
//                 handleImageSubmit
//               }
//             >

//               <div className="gallery-field">

//                 <label>
//                   Caption
//                 </label>

//                 <input
//                   type="text"
//                   name="caption"
//                   value={
//                     imageForm.caption
//                   }
//                   onChange={
//                     handleImageFormChange
//                   }
//                   placeholder="Enter image caption"
//                 />

//               </div>

//               <div className="gallery-form-actions">

//                 <button
//                   type="button"
//                   className="gallery-cancel-button"
//                   onClick={
//                     handleCloseImageForm
//                   }
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="gallery-save-button"
//                   disabled={saving}
//                 >
//                   {saving
//                     ? "Saving..."
//                     : "Update Image"}
//                 </button>

//               </div>

//             </form>

//           </div>
//         )}

//         {/* ====================================== */}
//         {/* IMAGES */}
//         {/* ====================================== */}

//         {loadingImages ? (
//           <div className="gallery-loading-images">

//             <RefreshCw
//               size={22}
//               className="gallery-spin"
//             />

//             Loading images...

//           </div>
//         ) : images.length === 0 ? (
//           <div className="gallery-empty">

//             <div className="gallery-empty-icon">

//               <ImageIcon
//                 size={30}
//               />

//             </div>

//             <h2>
//               No Images
//             </h2>

//             <p>
//               Upload images to this
//               gallery album.
//             </p>

//             <label className="gallery-upload-button">

//               <Upload size={18} />

//               Upload Images

//               <input
//                 type="file"
//                 multiple
//                 accept="image/jpeg,image/jpg,image/png,image/webp"
//                 onChange={
//                   handleImagesUpload
//                 }
//                 hidden
//               />

//             </label>

//           </div>
//         ) : (
//           <div className="gallery-image-grid">

//             {images.map(
//               (image) => {

//                 const imageUrl =
//                   getImageUrl(
//                     image.image
//                   );

//                 return (
//                   <div
//                     className="gallery-image-card"
//                     key={image.id}
//                   >

//                     <div className="gallery-image-wrapper">

//                       <img
//                         src={imageUrl}
//                         alt={
//                           image.caption ||
//                           "Gallery image"
//                         }
//                         onLoad={(e) => {
//                           console.log(
//                             "GALLERY IMAGE LOADED:",
//                             e.currentTarget.src
//                           );
//                         }}
//                         onError={(e) => {
//                           console.error(
//                             "GALLERY IMAGE FAILED:",
//                             e.currentTarget.src
//                           );
//                         }}
//                       />

//                     </div>

//                     <div className="gallery-image-info">

//                       <p>
//                         {image.caption ||
//                           "No caption"}
//                       </p>

//                       <div className="gallery-image-actions">

//                         <button
//                           type="button"
//                           className="gallery-action-button edit"
//                           onClick={() =>
//                             handleEditImage(
//                               image
//                             )
//                           }
//                         >
//                           <Pencil
//                             size={17}
//                           />

//                           Edit
//                         </button>

//                         <button
//                           type="button"
//                           className="gallery-action-button delete"
//                           onClick={() =>
//                             handleDeleteImage(
//                               image
//                             )
//                           }
//                           disabled={
//                             deletingImageId ===
//                             image.id
//                           }
//                         >
//                           <Trash2
//                             size={17}
//                           />

//                           Delete
//                         </button>

//                       </div>

//                     </div>

//                   </div>
//                 );
//               }
//             )}

//           </div>
//         )}

//       </div>
//     );
//   }

//   // ==========================================
//   // ALBUM VIEW
//   // ==========================================

//   return (
//     <div className="gallery-management">

//       {/* ====================================== */}
//       {/* HEADER */}
//       {/* ====================================== */}

//       <div className="gallery-page-header">

//         <div>

//           <h1>
//             Gallery
//           </h1>

//           <p>
//             Manage gallery albums and
//             images for your SNGA website.
//           </p>

//         </div>

//         <div className="gallery-header-actions">

//           <button
//             type="button"
//             className="gallery-refresh-button"
//             onClick={loadAlbums}
//           >
//             <RefreshCw
//               size={17}
//             />

//             Refresh
//           </button>

//           <button
//             type="button"
//             className="gallery-add-button"
//             onClick={
//               handleAddAlbum
//             }
//           >
//             <Plus size={19} />

//             Add Album
//           </button>

//         </div>

//       </div>

//       {/* ====================================== */}
//       {/* ALERTS */}
//       {/* ====================================== */}

//       {success && (
//         <div className="gallery-success">
//           {success}
//         </div>
//       )}

//       {error && (
//         <div className="gallery-error">
//           {error}
//         </div>
//       )}

//       {/* ====================================== */}
//       {/* ALBUM FORM */}
//       {/* ====================================== */}

//       {showAlbumForm && (
//         <div className="gallery-form-card">

//           <div className="gallery-form-header">

//             <div>

//               <h2>
//                 {editingAlbumId
//                   ? "Edit Album"
//                   : "Add Album"}
//               </h2>

//               <p>
//                 Create and manage your
//                 gallery album.
//               </p>

//             </div>

//             <button
//               type="button"
//               className="gallery-close-button"
//               onClick={
//                 handleCloseAlbumForm
//               }
//             >
//               <X size={20} />
//             </button>

//           </div>

//           <form
//             onSubmit={
//               handleAlbumSubmit
//             }
//           >

//             <div className="gallery-form-grid">

//               {/* TITLE */}

//               <div className="gallery-field">

//                 <label>
//                   Album Title *
//                 </label>

//                 <input
//                   type="text"
//                   name="title"
//                   value={
//                     albumForm.title
//                   }
//                   onChange={
//                     handleAlbumChange
//                   }
//                   placeholder="Annual Day"
//                 />

//               </div>

//               {/* SLUG */}

//               <div className="gallery-field">

//                 <label>
//                   Slug *
//                 </label>

//                 <input
//                   type="text"
//                   name="slug"
//                   value={
//                     albumForm.slug
//                   }
//                   onChange={
//                     handleAlbumChange
//                   }
//                   placeholder="annual-day"
//                 />

//               </div>

//               {/* DESCRIPTION */}

//               <div className="gallery-field gallery-full">

//                 <label>
//                   Description
//                 </label>

//                 <textarea
//                   name="description"
//                   value={
//                     albumForm.description
//                   }
//                   onChange={
//                     handleAlbumChange
//                   }
//                   rows="4"
//                   placeholder="Album description..."
//                 />

//               </div>

//               {/* COVER IMAGE */}

//               <div className="gallery-field gallery-full">

//                 <label>
//                   Cover Image
//                 </label>

//                 <div className="gallery-upload-box">

//                   {albumForm.coverImage ? (
//                     <div className="gallery-cover-preview">

//                       <img
//                         src={getImageUrl(
//                           albumForm.coverImage
//                         )}
//                         alt="Album cover"
//                       />

//                       <button
//                         type="button"
//                         className="gallery-remove-image"
//                         onClick={() =>
//                           setAlbumForm(
//                             (previous) => ({
//                               ...previous,
//                               coverImage:
//                                 "",
//                             })
//                           )
//                         }
//                       >
//                         <Trash2
//                           size={15}
//                         />

//                         Remove
//                       </button>

//                     </div>
//                   ) : (
//                     <label className="gallery-upload-label">

//                       {uploading ? (
//                         <>
//                           <RefreshCw
//                             size={38}
//                             className="gallery-spin"
//                           />

//                           <strong>
//                             Uploading...
//                           </strong>
//                         </>
//                       ) : (
//                         <>
//                           <Upload
//                             size={38}
//                           />

//                           <strong>
//                             Upload Cover Image
//                           </strong>

//                           <span>
//                             JPG, PNG or WEBP
//                           </span>
//                         </>
//                       )}

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/jpg,image/png,image/webp"
//                         onChange={
//                           handleCoverUpload
//                         }
//                         hidden
//                       />

//                     </label>
//                   )}

//                 </div>

//               </div>

//               {/* PUBLISHED */}

//               <div className="gallery-active-field">

//                 <input
//                   type="checkbox"
//                   id="album-published"
//                   name="isPublished"
//                   checked={
//                     albumForm.isPublished
//                   }
//                   onChange={
//                     handleAlbumChange
//                   }
//                 />

//                 <label htmlFor="album-published">
//                   Published
//                 </label>

//               </div>

//             </div>

//             {/* FORM ACTIONS */}

//             <div className="gallery-form-actions">

//               <button
//                 type="button"
//                 className="gallery-cancel-button"
//                 onClick={
//                   handleCloseAlbumForm
//                 }
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="gallery-save-button"
//                 disabled={
//                   saving ||
//                   uploading
//                 }
//               >
//                 {saving
//                   ? "Saving..."
//                   : editingAlbumId
//                     ? "Update Album"
//                     : "Create Album"}
//               </button>

//             </div>

//           </form>

//         </div>
//       )}

//       {/* ====================================== */}
//       {/* ALBUM GRID */}
//       {/* ====================================== */}

//       {!showAlbumForm && (
//         <>
//           {albums.length === 0 ? (
//             <div className="gallery-empty">

//               <div className="gallery-empty-icon">

//                 <ImageIcon
//                   size={30}
//                 />

//               </div>

//               <h2>
//                 No Albums
//               </h2>

//               <p>
//                 Create your first
//                 gallery album.
//               </p>

//               <button
//                 type="button"
//                 className="gallery-add-button"
//                 onClick={
//                   handleAddAlbum
//                 }
//               >
//                 <Plus size={18} />

//                 Add Album
//               </button>

//             </div>
//           ) : (
//             <div className="gallery-album-grid">

//               {albums.map(
//                 (album) => {

//                   const coverUrl =
//                     getImageUrl(
//                       album.coverImage
//                     );

//                   return (
//                     <div
//                       className="gallery-album-card"
//                       key={album.id}
//                     >

//                       {/* COVER */}

//                       <div className="gallery-album-cover">

//                         {album.coverImage ? (
//                           <img
//                             src={coverUrl}
//                             alt={
//                               album.title
//                             }
//                           />
//                         ) : (
//                           <ImageIcon
//                             size={42}
//                           />
//                         )}

//                         <div className="gallery-album-status">

//                           <span
//                             className={
//                               album.isPublished
//                                 ? "published"
//                                 : "draft"
//                             }
//                           >
//                             {album.isPublished
//                               ? "Published"
//                               : "Draft"}
//                           </span>

//                         </div>

//                       </div>

//                       {/* CONTENT */}

//                       <div className="gallery-album-content">

//                         <h2>
//                           {
//                             album.title
//                           }
//                         </h2>

//                         {album.description && (
//                           <p>
//                             {
//                               album.description
//                             }
//                           </p>
//                         )}

//                         <div className="gallery-album-meta">

//                           <span>
//                             {Array.isArray(
//                               album.images
//                             )
//                               ? `${album.images.length} Images`
//                               : "Gallery Album"}
//                           </span>

//                         </div>

//                         {/* ACTIONS */}

//                         <div className="gallery-album-actions">

//                           <button
//                             type="button"
//                             className="gallery-view-button"
//                             onClick={() =>
//                               handleOpenAlbum(
//                                 album
//                               )
//                             }
//                           >
//                             View Album
//                           </button>

//                           <button
//                             type="button"
//                             className="gallery-icon-button"
//                             onClick={() =>
//                               handleToggleAlbum(
//                                 album
//                               )
//                             }
//                             title={
//                               album.isPublished
//                                 ? "Unpublish"
//                                 : "Publish"
//                             }
//                           >
//                             <Power
//                               size={17}
//                             />
//                           </button>

//                           <button
//                             type="button"
//                             className="gallery-icon-button"
//                             onClick={() =>
//                               handleEditAlbum(
//                                 album
//                               )
//                             }
//                             title="Edit"
//                           >
//                             <Pencil
//                               size={17}
//                             />
//                           </button>

//                           <button
//                             type="button"
//                             className="gallery-icon-button delete"
//                             onClick={() =>
//                               handleDeleteAlbum(
//                                 album
//                               )
//                             }
//                             disabled={
//                               deletingAlbumId ===
//                               album.id
//                             }
//                             title="Delete"
//                           >
//                             <Trash2
//                               size={17}
//                             />
//                           </button>

//                         </div>

//                       </div>

//                     </div>
//                   );
//                 }
//               )}

//             </div>
//           )}
//         </>
//       )}

//     </div>
//   );
// };

// export default GalleryManagement;

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
  ArrowLeft,
} from "lucide-react";

import api from "../../services/axios";
import "./GalleryManagement.css";

const emptyAlbumForm = {
  name: "",
  slug: "",
  description: "",
  coverImage: "",
  category: "",
  isPublished: true,
};

const GalleryManagement = () => {
  // ==========================================
  // STATE
  // ==========================================

  const [albums, setAlbums] = useState([]);

  const [selectedAlbum, setSelectedAlbum] =
    useState(null);

  const [images, setImages] = useState([]);

  const [albumForm, setAlbumForm] =
    useState(emptyAlbumForm);

  const [imageCaption, setImageCaption] =
    useState("");

  const [showAlbumForm, setShowAlbumForm] =
    useState(false);

  const [showImageEdit, setShowImageEdit] =
    useState(false);

  const [editingAlbumId, setEditingAlbumId] =
    useState(null);

  const [editingImageId, setEditingImageId] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [loadingImages, setLoadingImages] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [deletingAlbumId, setDeletingAlbumId] =
    useState(null);

  const [deletingImageId, setDeletingImageId] =
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

    // Already full URL
    if (
      value.startsWith("http://") ||
      value.startsWith("https://")
    ) {
      return value;
    }

    // Base64
    if (
      value.startsWith("data:image/")
    ) {
      return value;
    }

    const serverUrl =
      getServerUrl();

    // /uploads/file.jpg
    if (
      value.startsWith("/uploads/")
    ) {
      return `${serverUrl}${value}`;
    }

    // uploads/file.jpg
    if (
      value.startsWith("uploads/")
    ) {
      return `${serverUrl}/${value}`;
    }

    // file.jpg
    return `${serverUrl}/uploads/${value}`;
  };

  // ==========================================
  // LOAD ALBUMS
  // ==========================================

  const loadAlbums = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await api.get("/gallery");

      console.log(
        "GALLERY ALBUMS:",
        response.data
      );

      const data =
        response.data?.data;

      setAlbums(
        Array.isArray(data)
          ? data
          : []
      );
    } catch (err) {
      console.error(
        "Load gallery albums error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load gallery albums"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    loadAlbums();
  }, []);

  // ==========================================
  // ADD ALBUM
  // ==========================================

  const handleAddAlbum = () => {
    setEditingAlbumId(null);

    setAlbumForm({
      ...emptyAlbumForm,
    });

    setError("");
    setSuccess("");

    setShowAlbumForm(true);
  };

  // ==========================================
  // EDIT ALBUM
  // ==========================================

  const handleEditAlbum = (album) => {
    setEditingAlbumId(album.id);

    setAlbumForm({
      name: album.name || "",
      slug: album.slug || "",
      description:
        album.description || "",
      coverImage:
        album.coverImage || "",
      category:
        album.category || "",
      isPublished:
        album.isPublished ?? true,
    });

    setError("");
    setSuccess("");

    setShowAlbumForm(true);
  };

  // ==========================================
  // CLOSE ALBUM FORM
  // ==========================================

  const handleCloseAlbumForm = () => {
    setShowAlbumForm(false);

    setEditingAlbumId(null);

    setAlbumForm({
      ...emptyAlbumForm,
    });

    setError("");
  };

  // ==========================================
  // ALBUM INPUT CHANGE
  // ==========================================

  const handleAlbumChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setAlbumForm((previous) => ({
      ...previous,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    setError("");
  };

  // ==========================================
  // UPLOAD COVER IMAGE
  // ==========================================

  const handleCoverUpload = async (
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
        "COVER UPLOAD:",
        response.data
      );

      const imageUrl =
        response.data?.data?.url;

      if (!imageUrl) {
        throw new Error(
          "Upload response did not contain an image URL"
        );
      }

      setAlbumForm((previous) => ({
        ...previous,
        coverImage: imageUrl,
      }));

      setSuccess(
        "Cover image uploaded successfully"
      );
    } catch (err) {
      console.error(
        "Cover upload error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to upload cover image"
      );
    } finally {
      setUploading(false);

      e.target.value = "";
    }
  };

  // ==========================================
  // SAVE ALBUM
  // ==========================================

  const handleAlbumSubmit = async (
    e
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!albumForm.name.trim()) {
      setError(
        "Album name is required"
      );

      return;
    }

    if (!albumForm.slug.trim()) {
      setError(
        "Album slug is required"
      );

      return;
    }

    try {
      setSaving(true);

      const payload = {
        name:
          albumForm.name.trim(),

        slug:
          albumForm.slug.trim(),

        description:
          albumForm.description.trim() ||
          null,

        coverImage:
          albumForm.coverImage.trim() ||
          null,

        category:
          albumForm.category.trim() ||
          null,

        isPublished:
          Boolean(
            albumForm.isPublished
          ),
      };

      console.log(
        "ALBUM PAYLOAD:",
        payload
      );

      if (!editingAlbumId) {
        const response =
          await api.post(
            "/gallery/albums",
            payload
          );

        console.log(
          "CREATE ALBUM:",
          response.data
        );

        const newAlbum =
          response.data?.data;

        if (newAlbum) {
          setAlbums((previous) => [
            newAlbum,
            ...previous,
          ]);
        }

        setSuccess(
          "Album created successfully"
        );
      } else {
        const response =
          await api.put(
            `/gallery/albums/${editingAlbumId}`,
            payload
          );

        console.log(
          "UPDATE ALBUM:",
          response.data
        );

        const updatedAlbum =
          response.data?.data;

        if (updatedAlbum) {
          setAlbums((previous) =>
            previous.map((album) =>
              album.id ===
              editingAlbumId
                ? updatedAlbum
                : album
            )
          );

          if (
            selectedAlbum?.id ===
            editingAlbumId
          ) {
            setSelectedAlbum(
              updatedAlbum
            );
          }
        }

        setSuccess(
          "Album updated successfully"
        );
      }

      setShowAlbumForm(false);

      setEditingAlbumId(null);

      setAlbumForm({
        ...emptyAlbumForm,
      });
    } catch (err) {
      console.error(
        "Save album error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to save album"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // DELETE ALBUM
  // ==========================================

  const handleDeleteAlbum = async (
    album
  ) => {
    const confirmed =
      window.confirm(
        `Delete "${album.name}" and all images inside it?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingAlbumId(album.id);

      setError("");
      setSuccess("");

      await api.delete(
        `/gallery/albums/${album.id}`
      );

      setAlbums((previous) =>
        previous.filter(
          (item) =>
            item.id !== album.id
        )
      );

      if (
        selectedAlbum?.id ===
        album.id
      ) {
        setSelectedAlbum(null);
        setImages([]);
      }

      setSuccess(
        "Album deleted successfully"
      );
    } catch (err) {
      console.error(
        "Delete album error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete album"
      );
    } finally {
      setDeletingAlbumId(null);
    }
  };

  // ==========================================
  // TOGGLE PUBLISHED
  // ==========================================

  const handleToggleAlbum = async (
    album
  ) => {
    try {
      setError("");
      setSuccess("");

      const response =
        await api.put(
          `/gallery/albums/${album.id}`,
          {
            isPublished:
              !album.isPublished,
          }
        );

      const updatedAlbum =
        response.data?.data;

      if (updatedAlbum) {
        setAlbums((previous) =>
          previous.map((item) =>
            item.id === album.id
              ? updatedAlbum
              : item
          )
        );

        if (
          selectedAlbum?.id ===
          album.id
        ) {
          setSelectedAlbum(
            updatedAlbum
          );
        }
      }

      setSuccess(
        album.isPublished
          ? "Album unpublished"
          : "Album published"
      );
    } catch (err) {
      console.error(
        "Toggle album error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to update album"
      );
    }
  };

  // ==========================================
  // OPEN ALBUM
  // ==========================================

  const handleOpenAlbum = async (
    album
  ) => {
    try {
      setSelectedAlbum(album);

      setLoadingImages(true);

      setError("");
      setSuccess("");

      const response =
        await api.get(
          `/gallery/${encodeURIComponent(
            album.slug
          )}`
        );

      console.log(
        "SINGLE ALBUM RESPONSE:",
        response.data
      );

      const albumData =
        response.data?.data;

      const albumImages =
        albumData?.images;

      setImages(
        Array.isArray(
          albumImages
        )
          ? albumImages
          : []
      );
    } catch (err) {
      console.error(
        "Open album error:",
        err
      );

      setImages([]);

      setError(
        err.response?.data?.message ||
          "Failed to load album images"
      );
    } finally {
      setLoadingImages(false);
    }
  };

  // ==========================================
  // BACK TO ALBUMS
  // ==========================================

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);

    setImages([]);

    setShowImageEdit(false);

    setEditingImageId(null);

    setImageCaption("");

    setError("");
    setSuccess("");
  };

  // ==========================================
  // MULTIPLE IMAGE UPLOAD
  // ==========================================

  const handleImagesUpload = async (
    e
  ) => {
    const files = Array.from(
      e.target.files || []
    );

    if (
      files.length === 0 ||
      !selectedAlbum
    ) {
      return;
    }

    try {
      setUploading(true);

      setError("");
      setSuccess("");

      let uploadedCount = 0;

      for (const file of files) {
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
          console.warn(
            `Skipping invalid file: ${file.name}`
          );

          continue;
        }

        if (
          file.size >
          5 * 1024 * 1024
        ) {
          console.warn(
            `Skipping large file: ${file.name}`
          );

          continue;
        }

        // --------------------------------------
        // Upload file
        // --------------------------------------

        const formData =
          new FormData();

        formData.append(
          "image",
          file
        );

        const uploadResponse =
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
          "GALLERY UPLOAD:",
          uploadResponse.data
        );

        const imageUrl =
          uploadResponse.data
            ?.data?.url;

        if (!imageUrl) {
          console.error(
            "No URL returned for:",
            file.name
          );

          continue;
        }

        // --------------------------------------
        // Add image to album
        // --------------------------------------

        await api.post(
          `/gallery/albums/${selectedAlbum.id}/images`,
          {
            imageUrl:
              imageUrl,

            caption: "",
          }
        );

        uploadedCount++;
      }

      setSuccess(
        `${uploadedCount} image${
          uploadedCount === 1
            ? ""
            : "s"
        } uploaded successfully`
      );

      // --------------------------------------
      // Reload current album
      // --------------------------------------

      await handleOpenAlbum(
        selectedAlbum
      );
    } catch (err) {
      console.error(
        "Gallery image upload error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to upload gallery images"
      );
    } finally {
      setUploading(false);

      e.target.value = "";
    }
  };

  // ==========================================
  // EDIT IMAGE
  // ==========================================

  const handleEditImage = (
    image
  ) => {
    setEditingImageId(image.id);

    setImageCaption(
      image.caption || ""
    );

    setShowImageEdit(true);

    setError("");
    setSuccess("");
  };

  // ==========================================
  // UPDATE IMAGE
  // ==========================================

  const handleUpdateImage = async (
    e
  ) => {
    e.preventDefault();

    if (!editingImageId) {
      return;
    }

    try {
      setSaving(true);

      setError("");
      setSuccess("");

      const response =
        await api.put(
          `/gallery/images/${editingImageId}`,
          {
            caption:
              imageCaption.trim() ||
              null,
          }
        );

      console.log(
        "UPDATE IMAGE:",
        response.data
      );

      const updatedImage =
        response.data?.data;

      if (updatedImage) {
        setImages((previous) =>
          previous.map((item) =>
            item.id ===
            editingImageId
              ? updatedImage
              : item
          )
        );
      }

      setShowImageEdit(false);

      setEditingImageId(null);

      setImageCaption("");

      setSuccess(
        "Image updated successfully"
      );
    } catch (err) {
      console.error(
        "Update image error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to update image"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // DELETE IMAGE
  // ==========================================

  const handleDeleteImage = async (
    image
  ) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this image?"
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingImageId(
        image.id
      );

      setError("");
      setSuccess("");

      await api.delete(
        `/gallery/images/${image.id}`
      );

      setImages((previous) =>
        previous.filter(
          (item) =>
            item.id !== image.id
        )
      );

      setSuccess(
        "Image deleted successfully"
      );
    } catch (err) {
      console.error(
        "Delete image error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to delete image"
      );
    } finally {
      setDeletingImageId(null);
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="gallery-management-loading">
        <RefreshCw
          size={22}
          className="gallery-spin"
        />

        <span>
          Loading gallery...
        </span>
      </div>
    );
  }

  // ==========================================
  // ALBUM DETAILS VIEW
  // ==========================================

  if (selectedAlbum) {
    return (
      <div className="gallery-management">

        {/* ====================================== */}
        {/* HEADER */}
        {/* ====================================== */}

        <div className="gallery-page-header">

          <div className="gallery-header-left">

            <button
              type="button"
              className="gallery-back-button"
              onClick={
                handleBackToAlbums
              }
            >
              <ArrowLeft
                size={19}
              />

              Albums
            </button>

            <div>
              <h1>
                {selectedAlbum.name}
              </h1>

              <p>
                {selectedAlbum.description ||
                  "Manage images in this album."}
              </p>
            </div>

          </div>

          <div className="gallery-header-actions">

            <button
              type="button"
              className="gallery-refresh-button"
              onClick={() =>
                handleOpenAlbum(
                  selectedAlbum
                )
              }
              disabled={loadingImages}
            >
              <RefreshCw
                size={17}
                className={
                  loadingImages
                    ? "gallery-spin"
                    : ""
                }
              />

              Refresh
            </button>

            <label className="gallery-upload-button">

              <Upload size={18} />

              {uploading
                ? "Uploading..."
                : "Upload Images"}

              <input
                type="file"
                multiple
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={
                  handleImagesUpload
                }
                disabled={uploading}
                hidden
              />

            </label>

          </div>

        </div>

        {/* ====================================== */}
        {/* ALERTS */}
        {/* ====================================== */}

        {success && (
          <div className="gallery-success">
            {success}
          </div>
        )}

        {error && (
          <div className="gallery-error">
            {error}
          </div>
        )}

        {/* ====================================== */}
        {/* IMAGE EDIT FORM */}
        {/* ====================================== */}

        {showImageEdit && (
          <div className="gallery-form-card">

            <div className="gallery-form-header">

              <div>
                <h2>
                  Edit Image
                </h2>

                <p>
                  Update the image caption.
                </p>
              </div>

              <button
                type="button"
                className="gallery-close-button"
                onClick={() => {
                  setShowImageEdit(false);
                  setEditingImageId(null);
                  setImageCaption("");
                }}
              >
                <X size={20} />
              </button>

            </div>

            <form
              onSubmit={
                handleUpdateImage
              }
            >

              <div className="gallery-field">

                <label>
                  Caption
                </label>

                <input
                  type="text"
                  value={
                    imageCaption
                  }
                  onChange={(e) =>
                    setImageCaption(
                      e.target.value
                    )
                  }
                  placeholder="Enter image caption"
                />

              </div>

              <div className="gallery-form-actions">

                <button
                  type="button"
                  className="gallery-cancel-button"
                  onClick={() => {
                    setShowImageEdit(
                      false
                    );
                    setEditingImageId(
                      null
                    );
                    setImageCaption(
                      ""
                    );
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="gallery-save-button"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : "Update Image"}
                </button>

              </div>

            </form>

          </div>
        )}

        {/* ====================================== */}
        {/* IMAGES */}
        {/* ====================================== */}

        {loadingImages ? (
          <div className="gallery-loading-images">

            <RefreshCw
              size={22}
              className="gallery-spin"
            />

            Loading images...

          </div>
        ) : images.length === 0 ? (
          <div className="gallery-empty">

            <div className="gallery-empty-icon">
              <ImageIcon
                size={30}
              />
            </div>

            <h2>
              No Images
            </h2>

            <p>
              Upload images to this
              gallery album.
            </p>

            <label className="gallery-upload-button">

              <Upload size={18} />

              Upload Images

              <input
                type="file"
                multiple
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={
                  handleImagesUpload
                }
                hidden
              />

            </label>

          </div>
        ) : (
          <div className="gallery-image-grid">

            {images.map(
              (image) => {

                // IMPORTANT:
                // Prisma field = imageUrl
                const imageUrl =
                  getImageUrl(
                    image.imageUrl
                  );

                return (
                  <div
                    className="gallery-image-card"
                    key={image.id}
                  >

                    {/* IMAGE */}

                    <div className="gallery-image-wrapper">

                      {image.imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={
                            image.caption ||
                            "Gallery image"
                          }
                          loading="lazy"
                          onLoad={(e) => {
                            console.log(
                              "GALLERY IMAGE LOADED:",
                              e.currentTarget.src
                            );
                          }}
                          onError={(e) => {
                            console.error(
                              "GALLERY IMAGE FAILED:",
                              e.currentTarget.src
                            );
                          }}
                        />
                      ) : (
                        <div className="gallery-image-placeholder">

                          <ImageIcon
                            size={40}
                          />

                          <span>
                            No Image
                          </span>

                        </div>
                      )}

                    </div>

                    {/* INFO */}

                    <div className="gallery-image-info">

                      <p>
                        {image.caption ||
                          "No caption"}
                      </p>

                      <small>
                        Image #{image.id}
                      </small>

                      {/* ACTIONS */}

                      <div className="gallery-image-actions">

                        <button
                          type="button"
                          className="gallery-action-button edit"
                          onClick={() =>
                            handleEditImage(
                              image
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
                          className="gallery-action-button delete"
                          onClick={() =>
                            handleDeleteImage(
                              image
                            )
                          }
                          disabled={
                            deletingImageId ===
                            image.id
                          }
                        >
                          <Trash2
                            size={16}
                          />

                          {deletingImageId ===
                          image.id
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
  }

  // ==========================================
  // ALBUM LIST VIEW
  // ==========================================

  return (
    <div className="gallery-management">

      {/* ====================================== */}
      {/* HEADER */}
      {/* ====================================== */}

      <div className="gallery-page-header">

        <div>

          <h1>
            Gallery
          </h1>

          <p>
            Manage gallery albums and
            images for your SNGA website.
          </p>

        </div>

        <div className="gallery-header-actions">

          <button
            type="button"
            className="gallery-refresh-button"
            onClick={
              loadAlbums
            }
          >
            <RefreshCw
              size={17}
            />

            Refresh
          </button>

          <button
            type="button"
            className="gallery-add-button"
            onClick={
              handleAddAlbum
            }
          >
            <Plus size={19} />

            Add Album
          </button>

        </div>

      </div>

      {/* ====================================== */}
      {/* ALERTS */}
      {/* ====================================== */}

      {success && (
        <div className="gallery-success">
          {success}
        </div>
      )}

      {error && (
        <div className="gallery-error">
          {error}
        </div>
      )}

      {/* ====================================== */}
      {/* ALBUM FORM */}
      {/* ====================================== */}

      {showAlbumForm && (
        <div className="gallery-form-card">

          <div className="gallery-form-header">

            <div>

              <h2>
                {editingAlbumId
                  ? "Edit Album"
                  : "Add Album"}
              </h2>

              <p>
                Create and manage your
                gallery album.
              </p>

            </div>

            <button
              type="button"
              className="gallery-close-button"
              onClick={
                handleCloseAlbumForm
              }
            >
              <X size={20} />
            </button>

          </div>

          <form
            onSubmit={
              handleAlbumSubmit
            }
          >

            <div className="gallery-form-grid">

              {/* NAME */}

              <div className="gallery-field">

                <label>
                  Album Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={
                    albumForm.name
                  }
                  onChange={
                    handleAlbumChange
                  }
                  placeholder="Annual Day"
                />

              </div>

              {/* SLUG */}

              <div className="gallery-field">

                <label>
                  Slug *
                </label>

                <input
                  type="text"
                  name="slug"
                  value={
                    albumForm.slug
                  }
                  onChange={
                    handleAlbumChange
                  }
                  placeholder="annual-day"
                />

              </div>

              {/* CATEGORY */}

              <div className="gallery-field">

                <label>
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={
                    albumForm.category
                  }
                  onChange={
                    handleAlbumChange
                  }
                  placeholder="Events"
                />

              </div>

              {/* DESCRIPTION */}

              <div className="gallery-field">

                <label>
                  Description
                </label>

                <input
                  type="text"
                  name="description"
                  value={
                    albumForm.description
                  }
                  onChange={
                    handleAlbumChange
                  }
                  placeholder="Annual Day celebration"
                />

              </div>

              {/* COVER */}

              <div className="gallery-field gallery-full">

                <label>
                  Cover Image
                </label>

                <div className="gallery-upload-box">

                  {albumForm.coverImage ? (
                    <div className="gallery-cover-preview">

                      <img
                        src={getImageUrl(
                          albumForm.coverImage
                        )}
                        alt="Album cover"
                        onError={(e) => {
                          console.error(
                            "COVER IMAGE FAILED:",
                            e.currentTarget.src
                          );
                        }}
                      />

                      <button
                        type="button"
                        className="gallery-remove-image"
                        onClick={() =>
                          setAlbumForm(
                            (previous) => ({
                              ...previous,
                              coverImage:
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
                    <label className="gallery-upload-label">

                      {uploading ? (
                        <>
                          <RefreshCw
                            size={38}
                            className="gallery-spin"
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
                            Upload Cover Image
                          </strong>

                          <span>
                            Click to select
                            image
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
                          handleCoverUpload
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

              <div className="gallery-active-field">

                <input
                  type="checkbox"
                  id="gallery-published"
                  name="isPublished"
                  checked={
                    albumForm.isPublished
                  }
                  onChange={
                    handleAlbumChange
                  }
                />

                <label htmlFor="gallery-published">
                  Published
                </label>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="gallery-form-actions">

              <button
                type="button"
                className="gallery-cancel-button"
                onClick={
                  handleCloseAlbumForm
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="gallery-save-button"
                disabled={
                  saving ||
                  uploading
                }
              >
                {saving
                  ? "Saving..."
                  : editingAlbumId
                    ? "Update Album"
                    : "Create Album"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* ====================================== */}
      {/* ALBUM GRID */}
      {/* ====================================== */}

      {!showAlbumForm && (
        <>
          {albums.length === 0 ? (
            <div className="gallery-empty">

              <div className="gallery-empty-icon">
                <ImageIcon
                  size={30}
                />
              </div>

              <h2>
                No Albums
              </h2>

              <p>
                Create your first
                gallery album.
              </p>

              <button
                type="button"
                className="gallery-add-button"
                onClick={
                  handleAddAlbum
                }
              >
                <Plus size={18} />

                Add Album
              </button>

            </div>
          ) : (
            <div className="gallery-album-grid">

              {albums.map(
                (album) => {

                  const coverUrl =
                    getImageUrl(
                      album.coverImage
                    );

                  const imageCount =
                    Array.isArray(
                      album.images
                    )
                      ? album.images.length
                      : 0;

                  return (
                    <div
                      className="gallery-album-card"
                      key={album.id}
                    >

                      {/* COVER */}

                      <div className="gallery-album-cover">

                        {album.coverImage ? (
                          <img
                            src={coverUrl}
                            alt={
                              album.name
                            }
                            loading="lazy"
                            onError={(e) => {
                              console.error(
                                "ALBUM COVER FAILED:",
                                e.currentTarget.src
                              );
                            }}
                          />
                        ) : (
                          <ImageIcon
                            size={42}
                          />
                        )}

                        <div className="gallery-album-status">

                          <span
                            className={
                              album.isPublished
                                ? "published"
                                : "draft"
                            }
                          >
                            {album.isPublished
                              ? "Published"
                              : "Draft"}
                          </span>

                        </div>

                      </div>

                      {/* CONTENT */}

                      <div className="gallery-album-content">

                        <h2>
                          {album.name}
                        </h2>

                        {album.description && (
                          <p>
                            {
                              album.description
                            }
                          </p>
                        )}

                        <div className="gallery-album-meta">

                          <span>
                            {imageCount}{" "}
                            {imageCount ===
                            1
                              ? "Image"
                              : "Images"}
                          </span>

                          {album.category && (
                            <>
                              <span>
                                •
                              </span>

                              <span>
                                {
                                  album.category
                                }
                              </span>
                            </>
                          )}

                        </div>

                        {/* ACTIONS */}

                        <div className="gallery-album-actions">

                          <button
                            type="button"
                            className="gallery-view-button"
                            onClick={() =>
                              handleOpenAlbum(
                                album
                              )
                            }
                          >
                            View Album
                          </button>

                          <button
                            type="button"
                            className="gallery-icon-button"
                            onClick={() =>
                              handleToggleAlbum(
                                album
                              )
                            }
                            title={
                              album.isPublished
                                ? "Unpublish"
                                : "Publish"
                            }
                          >
                            <Power
                              size={17}
                            />
                          </button>

                          <button
                            type="button"
                            className="gallery-icon-button"
                            onClick={() =>
                              handleEditAlbum(
                                album
                              )
                            }
                            title="Edit Album"
                          >
                            <Pencil
                              size={17}
                            />
                          </button>

                          <button
                            type="button"
                            className="gallery-icon-button delete"
                            onClick={() =>
                              handleDeleteAlbum(
                                album
                              )
                            }
                            disabled={
                              deletingAlbumId ===
                              album.id
                            }
                            title="Delete Album"
                          >
                            <Trash2
                              size={17}
                            />
                          </button>

                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>
          )}
        </>
      )}

    </div>
  );
};

export default GalleryManagement;