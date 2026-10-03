// import api from "./api";

// const getAll = async () => {
//   const response = await api.get("/news");
//   return response.data;
// };

// const getById = async (id) => {
//   const response = await api.get(`/news/${id}`);
//   return response.data;
// };

// const create = async (data) => {
//   const response = await api.post("/news", data);
//   return response.data;
// };

// const update = async (id, data) => {
//   const response = await api.put(`/news/${id}`, data);
//   return response.data;
// };

// const remove = async (id) => {
//   const response = await api.delete(`/news/${id}`);
//   return response.data;
// };

// export default {
//   getAll,
//   getById,
//   create,
//   update,
//   remove,
// };

import api from "./api";

// ==========================================
// PUBLIC ROUTES (No authentication needed)
// ==========================================

// Get all published news (for public viewing)
const getNews = async () => {
  try {
    const response = await api.get("/news/published");
    return response.data;
  } catch (error) {
    console.error("Error fetching published news:", error);
    throw error;
  }
};

// Get single news by slug (public)
const getNewsBySlug = async (slug) => {
  try {
    const response = await api.get(`/news/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news by slug:", error);
    throw error;
  }
};

// ==========================================
// ADMIN ROUTES (Require authentication)
// ==========================================

// Get all news (admin only)
const getAll = async () => {
  try {
    const response = await api.get("/news");
    return response.data;
  } catch (error) {
    console.error("Error fetching all news:", error);
    throw error;
  }
};

// Get news by ID (admin only)
const getById = async (id) => {
  try {
    const response = await api.get(`/news/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news by ID:", error);
    throw error;
  }
};

// Create news (admin only)
const create = async (data) => {
  try {
    const response = await api.post("/news", data);
    return response.data;
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
};

// Update news (admin only)
const update = async (id, data) => {
  try {
    const response = await api.put(`/news/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating news:", error);
    throw error;
  }
};

// Delete news (admin only)
const remove = async (id) => {
  try {
    const response = await api.delete(`/news/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
};

export default {
  // Public methods
  getNews,
  getNewsBySlug,
  
  // Admin methods (existing)
  getAll,
  getById,
  create,
  update,
  remove,
};