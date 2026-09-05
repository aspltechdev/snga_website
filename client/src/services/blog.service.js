import api from "./axios";

// ==========================================
// PUBLIC
// ==========================================

// Get all published blogs
const getPublishedBlogs = async () => {
  const response = await api.get("/blogs/published");
  return response.data;
};

// Get single blog by slug
const getBlogBySlug = async (slug) => {
  const response = await api.get(`/blogs/${slug}`);
  return response.data;
};

// ==========================================
// ADMIN
// ==========================================

// Get all blogs
const getAllBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data;
};

// Create blog
const createBlog = async (data) => {
  const response = await api.post("/blogs", data);
  return response.data;
};

// Update blog
const updateBlog = async (id, data) => {
  const response = await api.put(`/blogs/${id}`, data);
  return response.data;
};

// Delete blog
const deleteBlog = async (id) => {
  const response = await api.delete(`/blogs/${id}`);
  return response.data;
};

export default {
  getPublishedBlogs,
  getBlogBySlug,
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};