// import api from "./axios";

// const createEnquiry = async (data) => {
//   const response = await api.post("/admission-enquiry", data);
//   return response.data;
// };

// export default {
//   createEnquiry,
// };

import api from "./axios";

// ==========================================
// PUBLIC
// ==========================================

// Create admission enquiry - POST /api/admissions
const createEnquiry = async (data) => {
  const response = await api.post("/admissions", data);
  return response.data;
};

// ==========================================
// ADMIN
// ==========================================

// Get all admissions (admin only)
const getAllAdmissions = async () => {
  const response = await api.get("/admissions");
  return response.data;
};

// Get admission by ID (admin only)
const getAdmissionById = async (id) => {
  const response = await api.get(`/admissions/${id}`);
  return response.data;
};

// Update admission (admin only)
const updateAdmission = async (id, data) => {
  const response = await api.put(`/admissions/${id}`, data);
  return response.data;
};

// Delete admission (admin only)
const deleteAdmission = async (id) => {
  const response = await api.delete(`/admissions/${id}`);
  return response.data;
};

export default {
  createEnquiry,
  getAllAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission,
};