// import api from "./api";

// const getAll = async () => {
//   const response = await api.get("/gallery");
//   return response.data;
// };

// const getById = async (id) => {
//   const response = await api.get(`/gallery/${id}`);
//   return response.data;
// };

// const create = async (data) => {
//   const response = await api.post("/gallery", data);
//   return response.data;
// };

// const update = async (id, data) => {
//   const response = await api.put(`/gallery/${id}`, data);
//   return response.data;
// };

// const remove = async (id) => {
//   const response = await api.delete(`/gallery/${id}`);
//   return response.data;
// };

// export default {
//   getAll,
//   getById,
//   create,
//   update,
//   remove,
// };

// services/gallery.service.js
import api from "./api";

// ==========================================
// PUBLIC ROUTES (No authentication needed)
// ==========================================

/**
 * Get all published albums (for the public gallery)
 * GET /api/gallery/published
 */
const getPublishedAlbums = async () => {
  const response = await api.get("/gallery/published");
  return response.data;
};

/**
 * Get a single album by slug
 * GET /api/gallery/:slug
 */
const getAlbumBySlug = async (slug) => {
  const response = await api.get(`/gallery/${slug}`);
  return response.data;
};

// ==========================================
// ADMIN ROUTES (Require authentication)
// ==========================================

/**
 * Get all albums (admin only)
 * GET /api/gallery
 */
const getAllAlbums = async () => {
  const response = await api.get("/gallery");
  return response.data;
};

/**
 * Create a new album (admin only)
 * POST /api/gallery/albums
 */
const createAlbum = async (data) => {
  const response = await api.post("/gallery/albums", data);
  return response.data;
};

/**
 * Update an album (admin only)
 * PUT /api/gallery/albums/:id
 */
const updateAlbum = async (id, data) => {
  const response = await api.put(`/gallery/albums/${id}`, data);
  return response.data;
};

/**
 * Delete an album (admin only)
 * DELETE /api/gallery/albums/:id
 */
const deleteAlbum = async (id) => {
  const response = await api.delete(`/gallery/albums/${id}`);
  return response.data;
};

// ==========================================
// IMAGE MANAGEMENT (Admin only)
// ==========================================

/**
 * Add image to album (admin only)
 * POST /api/gallery/albums/:albumId/images
 */
const addImage = async (albumId, data) => {
  const response = await api.post(`/gallery/albums/${albumId}/images`, data);
  return response.data;
};

/**
 * Update image (admin only)
 * PUT /api/gallery/images/:id
 */
const updateImage = async (id, data) => {
  const response = await api.put(`/gallery/images/${id}`, data);
  return response.data;
};

/**
 * Delete image (admin only)
 * DELETE /api/gallery/images/:id
 */
const deleteImage = async (id) => {
  const response = await api.delete(`/gallery/images/${id}`);
  return response.data;
};

// ==========================================
// EXPORT
// ==========================================

export default {
  // Public
  getPublishedAlbums,
  getAlbumBySlug,
  
  // Admin - Albums
  getAllAlbums,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  
  // Admin - Images
  addImage,
  updateImage,
  deleteImage,
};