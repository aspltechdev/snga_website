// import api from "./api";

// const getAll = async () => {
//   const response = await api.get("/achievements");
//   return response.data;
// };

// const getById = async (id) => {
//   const response = await api.get(`/achievements/${id}`);
//   return response.data;
// };

// const create = async (data) => {
//   const response = await api.post("/achievements", data);
//   return response.data;
// };

// const update = async (id, data) => {
//   const response = await api.put(`/achievements/${id}`, data);
//   return response.data;
// };

// const remove = async (id) => {
//   const response = await api.delete(`/achievements/${id}`);
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
// PUBLIC
// ==========================================

const getPublished = async () => {
  const response = await api.get("/achievements/published");
  return response.data;
};

// ==========================================
// ADMIN
// ==========================================

const getAll = async () => {
  const response = await api.get("/achievements");
  return response.data;
};

const getById = async (id) => {
  const response = await api.get(`/achievements/${id}`);
  return response.data;
};

const create = async (data) => {
  const response = await api.post("/achievements", data);
  return response.data;
};

const update = async (id, data) => {
  const response = await api.put(`/achievements/${id}`, data);
  return response.data;
};

const remove = async (id) => {
  const response = await api.delete(`/achievements/${id}`);
  return response.data;
};

export default {
  // Public
  getPublished,

  // Admin
  getAll,
  getById,
  create,
  update,
  remove,
};