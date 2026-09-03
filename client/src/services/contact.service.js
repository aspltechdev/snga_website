import api from "./api";

// ==========================================
// GET ALL CONTACT ENQUIRIES
// ==========================================

const getAllContacts = async () => {
  const response = await api.get("/contact");

  return response.data;
};

// ==========================================
// GET CONTACT ENQUIRY BY ID
// ==========================================

const getContactById = async (id) => {
  const response = await api.get(
    `/contact/${id}`
  );

  return response.data;
};

// ==========================================
// CREATE CONTACT ENQUIRY
// PUBLIC
// ==========================================

const createContact = async (data) => {
  const response = await api.post(
    "/contact",
    data
  );

  return response.data;
};

// ==========================================
// UPDATE CONTACT ENQUIRY
// ==========================================

const updateContact = async (
  id,
  data
) => {
  const response = await api.put(
    `/contact/${id}`,
    data
  );

  return response.data;
};

// ==========================================
// MARK AS READ
// ==========================================

const markAsRead = async (id) => {
  const response = await api.put(
    `/contact/${id}/read`
  );

  return response.data;
};

// ==========================================
// MARK AS UNREAD
// ==========================================

const markAsUnread = async (id) => {
  const response = await api.put(
    `/contact/${id}/unread`
  );

  return response.data;
};

// ==========================================
// DELETE CONTACT ENQUIRY
// ==========================================

const deleteContact = async (id) => {
  const response = await api.delete(
    `/contact/${id}`
  );

  return response.data;
};

// ==========================================
// EXPORT
// ==========================================

const contactService = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  markAsRead,
  markAsUnread,
  deleteContact,
};

export default contactService;