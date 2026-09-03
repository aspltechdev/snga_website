import api from "./axios";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  if (response.data.token) {
    localStorage.setItem(
      "snga_token",
      response.data.token
    );

    localStorage.setItem(
      "snga_user",
      JSON.stringify(response.data.user)
    );
  }

  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
  } finally {
    localStorage.removeItem("snga_token");
    localStorage.removeItem("snga_user");
  }
};