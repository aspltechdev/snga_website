// import { useAuth } from "../../context/AuthContext";

// const Dashboard = () => {
//   const { user, logout } = useAuth();

//   return (
//     <div>
//       <h1>SNGA Admin Dashboard</h1>

//       <p>
//         Welcome, {user?.name}
//       </p>

//       <p>
//         Role: {user?.role}
//       </p>

//       <button onClick={logout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;


import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  Newspaper,
  FileText,
  Images,
  Trophy,
  GraduationCap,
  MessageSquareQuote,
  Mail,
  RefreshCw,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

import {
  getDashboardStats,
} from "../../services/dashboard.service";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();

  const [stats, setStats] = useState({
    news: 0,
    blogs: 0,
    gallery: 0,
    achievements: 0,
    admissions: 0,
    testimonials: 0,
    contacts: 0,
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadStats = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getDashboardStats();

      setStats(data);
    } catch (err) {
      console.error(
        "Dashboard stats error:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load dashboard statistics"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const cards = [
    {
      title: "News",
      value: stats.news,
      icon: Newspaper,
      path: "/admin/news",
    },
    {
      title: "Blogs",
      value: stats.blogs,
      icon: FileText,
      path: "/admin/blogs",
    },
    {
      title: "Gallery",
      value: stats.gallery,
      icon: Images,
      path: "/admin/gallery",
    },
    {
      title: "Achievements",
      value: stats.achievements,
      icon: Trophy,
      path: "/admin/achievements",
    },
    {
      title: "Admissions",
      value: stats.admissions,
      icon: GraduationCap,
      path: "/admin/admissions",
    },
    {
      title: "Testimonials",
      value: stats.testimonials,
      icon: MessageSquareQuote,
      path: "/admin/testimonials",
    },
    {
      title: "Contact Enquiries",
      value: stats.contacts,
      icon: Mail,
      path: "/admin/contact",
    },
  ];

  return (
    <div className="admin-dashboard">

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back, {user?.name}
          </p>
        </div>

        <button
          type="button"
          onClick={loadStats}
          disabled={loading}
        >
          <RefreshCw size={18} />

          {loading
            ? "Refreshing..."
            : "Refresh"}
        </button>

      </div>

      {/* ================================= */}
      {/* ERROR */}
      {/* ================================= */}

      {error && (
        <div className="dashboard-error">
          {error}
        </div>
      )}

      {/* ================================= */}
      {/* STATISTICS */}
      {/* ================================= */}

      <div className="dashboard-grid">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              to={card.path}
              className="dashboard-card"
            >

              <div className="dashboard-card-icon">
                <Icon size={24} />
              </div>

              <div>
                <p>{card.title}</p>

                <h2>
                  {loading
                    ? "—"
                    : card.value}
                </h2>
              </div>

            </Link>
          );
        })}

      </div>

      {/* ================================= */}
      {/* QUICK ACTIONS */}
      {/* ================================= */}

      <section className="quick-actions">

        <h2>Quick Actions</h2>

        <div>

          <Link to="/admin/news">
            Manage News
          </Link>

          <Link to="/admin/blogs">
            Manage Blogs
          </Link>

          <Link to="/admin/gallery">
            Manage Gallery
          </Link>

          <Link to="/admin/admissions">
            View Admissions
          </Link>

          <Link to="/admin/contact">
            View Enquiries
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Dashboard;