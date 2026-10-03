// src/services/socialService.js

import api from "./axios";

const getPublished = async (params = {}) => {
  const response = await api.get("/social-posts/published", {
    params,
  });

  return response.data;
};

const getAll = async (params = {}) => {
  const response = await api.get("/social-posts", {
    params,
  });

  return response.data;
};

const getById = async (id) => {
  const response = await api.get(`/social-posts/${id}`);

  return response.data;
};

const create = async (data) => {
  const response = await api.post("/social-posts", data);

  return response.data;
};

const update = async (id, data) => {
  const response = await api.put(`/social-posts/${id}`, data);

  return response.data;
};

const remove = async (id) => {
  const response = await api.delete(`/social-posts/${id}`);

  return response.data;
};

const togglePublish = async (id) => {
  const response = await api.patch(
    `/social-posts/${id}/publish`
  );

  return response.data;
};

const reorder = async (items) => {
  const response = await api.patch(
    "/social-posts/reorder",
    { items }
  );

  return response.data;
};

export default {
  getPublished,
  getAll,
  getById,
  create,
  update,
  remove,
  togglePublish,
  reorder,
};