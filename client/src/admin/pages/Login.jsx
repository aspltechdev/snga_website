// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setError("");

//       await login(email, password);

//       navigate("/admin");
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           "Login failed"
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Login</h1>

//       {error && <p>{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//         />

//         <button type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import schoolLogo from "../../assets/logo.png";

import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      await login(email.trim().toLowerCase(), password);

      navigate("/admin", { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page">
      <section className="admin-login-brand">
        <div className="admin-login-brand-content">
          <div className="admin-login-logo-wrap">
            <img
              className="admin-login-logo"
              src={schoolLogo}
              alt="Shifan Noor Global Academy logo"
            />
          </div>

          <p className="admin-login-eyebrow">ADMINISTRATION PORTAL</p>

          <h1>Shifan Noor Global Academy</h1>

          <p className="admin-login-brand-copy">
            Secure access for authorised school administrators.
          </p>

          <div className="admin-login-motto">
            <span>Learn</span>
            <span>Grow</span>
            <span>Lead</span>
          </div>
        </div>
      </section>

      <section className="admin-login-panel">
        <div className="admin-login-card">
          <div className="admin-login-card-heading">
            <span className="admin-login-card-label">WELCOME BACK</span>
            <h2>Admin Login</h2>
            <p>Enter your account details to continue.</p>
          </div>

          <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
            <div className="admin-login-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="admin@snga.edu.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                disabled={loading}
                aria-invalid={Boolean(error)}
              />
            </div>

            <div className="admin-login-field">
              <div className="admin-login-password-label">
                <label htmlFor="password">Password</label>
                <span>Secure access</span>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
                aria-invalid={Boolean(error)}
              />
            </div>

            {error && (
              <p className="admin-login-error" role="alert">
                {error}
              </p>
            )}

            <button
              className="admin-login-button"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="admin-login-spinner" aria-hidden="true" />
                  Signing in...
                </>
              ) : (
                "Login to Dashboard"
              )}
            </button>
          </form>

          <p className="admin-login-help">
            Having trouble signing in? Contact your system administrator.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AdminLogin;
