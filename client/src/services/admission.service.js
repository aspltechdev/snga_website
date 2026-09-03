import api from "./axios";

const createEnquiry = async (data) => {
  const response = await api.post("/admission-enquiry", data);
  return response.data;
};

export default {
  createEnquiry,
};