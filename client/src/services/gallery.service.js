import api from "./api";

const getAll = async () => {
  const response = await api.get("/gallery");
  return response.data;
};

const getById = async (id) => {
  const response = await api.get(`/gallery/${id}`);
  return response.data;
};

const create = async (data) => {
  const response = await api.post("/gallery", data);
  return response.data;
};

const update = async (id, data) => {
  const response = await api.put(`/gallery/${id}`, data);
  return response.data;
};

const remove = async (id) => {
  const response = await api.delete(`/gallery/${id}`);
  return response.data;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};