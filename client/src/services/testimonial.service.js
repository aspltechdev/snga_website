// import api from "./api";

// const getAll = async () => {
//   const response = await api.get("/testimonials");
//   return response.data;
// };

// const getById = async (id) => {
//   const response = await api.get(`/testimonials/${id}`);
//   return response.data;
// };

// const create = async (data) => {
//   const response = await api.post("/testimonials", data);
//   return response.data;
// };

// const update = async (id, data) => {
//   const response = await api.put(`/testimonials/${id}`, data);
//   return response.data;
// };

// const remove = async (id) => {
//   const response = await api.delete(`/testimonials/${id}`);
//   return response.data;
// };

// export default {
//   getAll,
//   getById,
//   create,
//   update,
//   remove,
// };


// services/testimonial.service.js
import api from "./api";

// ==========================================
// PUBLIC ROUTES (No authentication needed)
// ==========================================

// Get all published testimonials (for public viewing)
const getPublished = async () => {
  try {
    const response = await api.get("/testimonials/published");
    return response.data;
  } catch (error) {
    console.error("Error fetching published testimonials:", error);
    throw error;
  }
};

// Get single testimonial by ID (public)
const getById = async (id) => {
  try {
    const response = await api.get(`/testimonials/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonial by ID:", error);
    throw error;
  }
};

// ==========================================
// ADMIN ROUTES (Require authentication)
// ==========================================

// Get all testimonials (admin only)
const getAll = async () => {
  try {
    const response = await api.get("/testimonials");
    return response.data;
  } catch (error) {
    console.error("Error fetching all testimonials:", error);
    throw error;
  }
};

// Get testimonial by ID (admin only)
const getByIdAdmin = async (id) => {
  try {
    const response = await api.get(`/testimonials/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonial by ID:", error);
    throw error;
  }
};

// Create testimonial (admin only)
const create = async (data) => {
  try {
    const response = await api.post("/testimonials", data);
    return response.data;
  } catch (error) {
    console.error("Error creating testimonial:", error);
    throw error;
  }
};

// Update testimonial (admin only)
const update = async (id, data) => {
  try {
    const response = await api.put(`/testimonials/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating testimonial:", error);
    throw error;
  }
};

// Delete testimonial (admin only)
const remove = async (id) => {
  try {
    const response = await api.delete(`/testimonials/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    throw error;
  }
};

export default {
  // Public
  getPublished,
  getById,
  
  // Admin
  getAll,
  getByIdAdmin,
  create,
  update,
  remove,
};