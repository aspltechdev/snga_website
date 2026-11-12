// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("snga_token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL:
//     import.meta.env.VITE_API_URL ||
//     "http://localhost:5000/api",

//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ==========================================
// // REQUEST INTERCEPTOR
// // ==========================================

// api.interceptors.request.use(
//   (config) => {
//     const token =
//       localStorage.getItem("snga_token");

//     if (token) {
//       config.headers.Authorization =
//         `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // ==========================================
// // RESPONSE INTERCEPTOR
// // ==========================================

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },

//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("snga_token");
//       localStorage.removeItem("snga_user");

//       // Don't redirect if already on login
//       if (
//         window.location.pathname !==
//         "/admin/login"
//       ) {
//         window.location.href =
//           "/admin/login";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  headers: {
    Accept: "application/json",
  },
});

// ==========================================
// REQUEST INTERCEPTOR
// ==========================================

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("snga_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // IMPORTANT:
    // Let Axios/browser automatically set multipart boundary
    // when sending FormData.

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else if (
      config.data &&
      typeof config.data === "object" &&
      !(config.data instanceof Blob)
    ) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ==========================================
// RESPONSE INTERCEPTOR
// ==========================================

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("snga_token");
      localStorage.removeItem("snga_user");

      if (
        window.location.pathname !== "/admin/login"
      ) {
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
