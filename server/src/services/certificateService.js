
import api from "./axios";

const certificateService = {
  // Get all certificates (Admin)
  getAll: async () => {
    const response = await api.get("/certificates");
    return response.data;
  },

  // Get published certificates (Public)
  getPublished: async () => {
    const response = await api.get("/certificates/published");
    return response.data;
  },

  // Get single certificate (Admin)
  getById: async (id) => {
    const response = await api.get(`/certificates/${id}`);
    return response.data;
  },

  // Create certificate with PDF
  create: async (formData) => {
    const response = await api.post(
      "/certificates",
      formData
    );
    return response.data;
  },

  // Update certificate with optional PDF replacement
  update: async (id, formData) => {
    const response = await api.put(
      `/certificates/${id}`,
      formData
    );
    return response.data;
  },

  // Delete certificate
  delete: async (id) => {
    const response = await api.delete(`/certificates/${id}`);
    return response.data;
  },

  // Toggle publish status
  togglePublish: async (id) => {
    const response = await api.patch(
      `/certificates/${id}/publish`
    );
    return response.data;
  },

  // Reorder certificates
  reorder: async (items) => {
    const response = await api.patch(
      "/certificates/reorder",
      { items }
    );
    return response.data;
  },
};

export default certificateService;
