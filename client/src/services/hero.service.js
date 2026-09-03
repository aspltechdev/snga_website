// import api from "./axios";
// // ==========================================
// // PUBLIC HERO
// // GET /api/hero
// // ==========================================

// const getHero = async () => {
//   const response = await api.get("/hero");
//   return response.data;
// };

// // ==========================================
// // ADMIN HERO
// // GET /api/hero/admin
// // ==========================================

// const getAdminHero = async () => {
//   const response = await api.get("/hero/admin");
//   return response.data;
// };

// // ==========================================
// // CREATE
// // ==========================================

// const createHero = async (data) => {
//   const response = await api.post("/hero", data);
//   return response.data;
// };

// // ==========================================
// // UPDATE
// // ==========================================

// const updateHero = async (id, data) => {
//   const response = await api.put(
//     `/hero/${id}`,
//     data
//   );

//   return response.data;
// };

// // ==========================================
// // DELETE
// // ==========================================

// const deleteHero = async (id) => {
//   const response = await api.delete(
//     `/hero/${id}`
//   );

//   return response.data;
// };

// export default {
//   getHero,
//   getAdminHero,
//   createHero,
//   updateHero,
//   deleteHero,
// };


import api from "./axios";

// ==========================================
// PUBLIC HERO
// GET /api/hero
// ==========================================

const getHero = async () => {
  const response = await api.get("/hero");
  return response.data;
};

// ==========================================
// ADMIN HERO
// GET /api/hero/admin
// ==========================================

const getAdminHero = async () => {
  const response = await api.get("/hero/admin");
  return response.data;
};

// ==========================================
// CREATE
// ==========================================

const createHero = async (data) => {
  const response = await api.post("/hero", data);
  return response.data;
};

// ==========================================
// UPDATE
// ==========================================

const updateHero = async (id, data) => {
  const response = await api.put(
    `/hero/${id}`,
    data
  );

  return response.data;
};

// ==========================================
// DELETE
// ==========================================

const deleteHero = async (id) => {
  const response = await api.delete(
    `/hero/${id}`
  );

  return response.data;
};

export default {
  getHero,
  getAdminHero,
  createHero,
  updateHero,
  deleteHero,
};