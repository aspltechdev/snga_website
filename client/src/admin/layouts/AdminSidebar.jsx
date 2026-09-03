// // import { NavLink } from "react-router-dom";
// // import { useAuth } from "../../context/AuthContext";

// // const AdminSidebar = () => {
// //   const { logout } = useAuth();

// //   const links = [
// //     {
// //       label: "Dashboard",
// //       path: "/admin",
// //     },
// //     {
// //       label: "News",
// //       path: "/admin/news",
// //     },
// //     {
// //       label: "Blogs",
// //       path: "/admin/blogs",
// //     },
// //     {
// //       label: "Gallery",
// //       path: "/admin/gallery",
// //     },
// //     {
// //       label: "Achievements",
// //       path: "/admin/achievements",
// //     },
// //     {
// //       label: "Admissions",
// //       path: "/admin/admissions",
// //     },
// //     {
// //       label: "Testimonials",
// //       path: "/admin/testimonials",
// //     },
// //     {
// //       label: "Contact Enquiries",
// //       path: "/admin/contact",
// //     },
// //     {
// //       label: "Settings",
// //       path: "/admin/settings",
// //     },
// //   ];

// //   return (
// //     <aside>
// //       <div>
// //         <h2>SNGA Admin</h2>
// //       </div>

// //       <nav>
// //         {links.map((link) => (
// //           <NavLink
// //             key={link.path}
// //             to={link.path}
// //             end={link.path === "/admin"}
// //           >
// //             {link.label}
// //           </NavLink>
// //         ))}
// //       </nav>

// //       <button onClick={logout}>
// //         Logout
// //       </button>
// //     </aside>
// //   );
// // };

// // export default AdminSidebar;



// // import { NavLink } from "react-router-dom";
// // import { useAuth } from "../../context/AuthContext";
// // import { 
// //   LayoutDashboard, 
// //   Newspaper, 
// //   BookOpen, 
// //   Image, 
// //   Trophy, 
// //   GraduationCap, 
// //   MessageSquare, 
// //   Mail, 
// //   Settings,
// //   LogOut,
// //   School
// // } from "lucide-react";
// // import "./AdminSidebar.css";

// // const AdminSidebar = () => {
// //   const { logout } = useAuth();

// //   const links = [
// //     {
// //       label: "Dashboard",
// //       path: "/admin",
// //       icon: LayoutDashboard,
// //     },
// //     {
// //       label: "News",
// //       path: "/admin/news",
// //       icon: Newspaper,
// //     },
// //     {
// //       label: "Blogs",
// //       path: "/admin/blogs",
// //       icon: BookOpen,
// //     },
// //     {
// //       label: "Gallery",
// //       path: "/admin/gallery",
// //       icon: Image,
// //     },
// //     {
// //       label: "Achievements",
// //       path: "/admin/achievements",
// //       icon: Trophy,
// //     },
// //     {
// //       label: "Admissions",
// //       path: "/admin/admissions",
// //       icon: GraduationCap,
// //     },
// //     {
// //       label: "Testimonials",
// //       path: "/admin/testimonials",
// //       icon: MessageSquare,
// //     },
// //     {
// //       label: "Contact Enquiries",
// //       path: "/admin/contact",
// //       icon: Mail,
// //     },
// //     {
// //       label: "Settings",
// //       path: "/admin/settings",
// //       icon: Settings,
// //     },
// //   ];

// //   return (
// //     <aside className="admin-sidebar">
// //       <div className="admin-sidebar-header">
// //         <div className="admin-sidebar-logo">
// //           <School size={32} strokeWidth={2.5} />
// //         </div>
// //         <div className="admin-sidebar-brand">
// //           <h2 className="admin-sidebar-title">SNGA Admin</h2>
// //           <span className="admin-sidebar-subtitle">Management Panel</span>
// //         </div>
// //       </div>

// //       <nav className="admin-sidebar-nav">
// //         <div className="admin-sidebar-nav-label">Main Menu</div>
// //         {links.map((link) => {
// //           const Icon = link.icon;
// //           return (
// //             <NavLink
// //               key={link.path}
// //               to={link.path}
// //               end={link.path === "/admin"}
// //               className={({ isActive }) => 
// //                 `admin-sidebar-link ${isActive ? "admin-sidebar-link-active" : ""}`
// //               }
// //             >
// //               <Icon size={20} className="admin-sidebar-link-icon" />
// //               <span className="admin-sidebar-link-text">{link.label}</span>
// //               <span className="admin-sidebar-link-indicator"></span>
// //             </NavLink>
// //           );
// //         })}
// //       </nav>

// //       <div className="admin-sidebar-footer">
// //         <button onClick={logout} className="admin-sidebar-logout">
// //           <LogOut size={20} />
// //           <span>Logout</span>
// //         </button>
// //       </div>
// //     </aside>
// //   );
// // };

// // export default AdminSidebar;

// // import { NavLink } from "react-router-dom";
// // import { useAuth } from "../../context/AuthContext";

// // import {
// //   LayoutDashboard,
// //   Newspaper,
// //   BookOpen,
// //   Image,
// //   Trophy,
// //   GraduationCap,
// //   MessageSquare,
// //   Mail,
// //   Settings,
// //   LogOut,
// //   School,
// //   PanelsTopLeft,
// // } from "lucide-react";

// // import "./AdminSidebar.css";

// // const AdminSidebar = () => {
// //   const { logout } = useAuth();

// //   const links = [
// //     {
// //       label: "Dashboard",
// //       path: "/admin",
// //       icon: LayoutDashboard,
// //     },

// //     // ==========================================
// //     // WEBSITE CONTENT
// //     // ==========================================

// //     {
// //       label: "Hero",
// //       path: "/admin/hero",
// //       icon: PanelsTopLeft,
// //     },

// //     {
// //       label: "News",
// //       path: "/admin/news",
// //       icon: Newspaper,
// //     },

// //     {
// //       label: "Blogs",
// //       path: "/admin/blogs",
// //       icon: BookOpen,
// //     },

// //     {
// //       label: "Gallery",
// //       path: "/admin/gallery",
// //       icon: Image,
// //     },

// //     {
// //       label: "Achievements",
// //       path: "/admin/achievements",
// //       icon: Trophy,
// //     },

// //     // ==========================================
// //     // ENQUIRIES
// //     // ==========================================

// //     {
// //       label: "Admissions",
// //       path: "/admin/admissions",
// //       icon: GraduationCap,
// //     },

// //     {
// //       label: "Testimonials",
// //       path: "/admin/testimonials",
// //       icon: MessageSquare,
// //     },

// //     {
// //       label: "Contact Enquiries",
// //       path: "/admin/contact",
// //       icon: Mail,
// //     },

// //     // ==========================================
// //     // SETTINGS
// //     // ==========================================

// //     {
// //       label: "Settings",
// //       path: "/admin/settings",
// //       icon: Settings,
// //     },
// //   ];

// //   return (
// //     <aside className="admin-sidebar">

// //       {/* ====================================== */}
// //       {/* HEADER */}
// //       {/* ====================================== */}

// //       <div className="admin-sidebar-header">

// //         <div className="admin-sidebar-logo">
// //           <School
// //             size={32}
// //             strokeWidth={2.5}
// //           />
// //         </div>

// //         <div className="admin-sidebar-brand">

// //           <h2 className="admin-sidebar-title">
// //             SNGA Admin
// //           </h2>

// //           <span className="admin-sidebar-subtitle">
// //             Management Panel
// //           </span>

// //         </div>

// //       </div>

// //       {/* ====================================== */}
// //       {/* NAVIGATION */}
// //       {/* ====================================== */}

// //       <nav className="admin-sidebar-nav">

// //         <div className="admin-sidebar-nav-label">
// //           Main Menu
// //         </div>

// //         {links.map((link) => {
// //           const Icon = link.icon;

// //           return (
// //             <NavLink
// //               key={link.path}
// //               to={link.path}
// //               end={link.path === "/admin"}
// //               className={({ isActive }) =>
// //                 `admin-sidebar-link ${
// //                   isActive
// //                     ? "admin-sidebar-link-active"
// //                     : ""
// //                 }`
// //               }
// //             >

// //               <Icon
// //                 size={20}
// //                 className="admin-sidebar-link-icon"
// //               />

// //               <span className="admin-sidebar-link-text">
// //                 {link.label}
// //               </span>

// //               <span className="admin-sidebar-link-indicator"></span>

// //             </NavLink>
// //           );
// //         })}

// //       </nav>

// //       {/* ====================================== */}
// //       {/* FOOTER */}
// //       {/* ====================================== */}

// //       <div className="admin-sidebar-footer">

// //         <button
// //           onClick={logout}
// //           className="admin-sidebar-logout"
// //         >
// //           <LogOut size={20} />

// //           <span>
// //             Logout
// //           </span>
// //         </button>

// //       </div>

// //     </aside>
// //   );
// // };

// // export default AdminSidebar;




// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// import {
//   LayoutDashboard,
//   Newspaper,
//   BookOpen,
//   Image,
//   Trophy,
//   GraduationCap,
//   MessageSquare,
//   Mail,
//   Settings,
//   LogOut,
//   School,
//   PanelsTopLeft,
//   ChevronRight,
//   Sparkles,
// } from "lucide-react";

// import "./AdminSidebar.css";

// const AdminSidebar = () => {
//   const { logout } = useAuth();

//   const links = [
//     {
//       label: "Dashboard",
//       path: "/admin",
//       icon: LayoutDashboard,
//     },
//     {
//       label: "Hero",
//       path: "/admin/hero",
//       icon: PanelsTopLeft,
//     },
//     {
//       label: "News",
//       path: "/admin/news",
//       icon: Newspaper,
//     },
//     {
//       label: "Blogs",
//       path: "/admin/blogs",
//       icon: BookOpen,
//     },
//     {
//       label: "Gallery",
//       path: "/admin/gallery",
//       icon: Image,
//     },
//     {
//       label: "Achievements",
//       path: "/admin/achievements",
//       icon: Trophy,
//     },
//     {
//       label: "Admissions",
//       path: "/admin/admissions",
//       icon: GraduationCap,
//     },
//     {
//       label: "Testimonials",
//       path: "/admin/testimonials",
//       icon: MessageSquare,
//     },
//     {
//       label: "Contact Enquiries",
//       path: "/admin/contact",
//       icon: Mail,
//     },
//     {
//       label: "Settings",
//       path: "/admin/settings",
//       icon: Settings,
//     },
//   ];

//   return (
//     <aside className="admin-sidebar">
//       {/* HEADER WITH LOGO */}
//       <div className="admin-sidebar-header">
//         <div className="admin-logo-wrapper">
//           <div className="admin-logo-shine"></div>
//           <div className="admin-logo-icon">
//             <School size={28} strokeWidth={2.5} />
//           </div>
//           <div className="admin-logo-badge">
//             <Sparkles size={12} />
//           </div>
//         </div>

//         <div className="admin-sidebar-brand">
//           <h2 className="admin-sidebar-title">
//             SNGA
//           </h2>
//           <span className="admin-sidebar-subtitle">
//             Admin Panel
//           </span>
//         </div>
//       </div>

//       {/* NAVIGATION */}
//       <nav className="admin-sidebar-nav">
//         <div className="admin-sidebar-nav-label">
//           Main Menu
//         </div>

//         {links.map((link) => {
//           const Icon = link.icon;

//           return (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               end={link.path === "/admin"}
//               className={({ isActive }) =>
//                 `admin-sidebar-link ${
//                   isActive
//                     ? "admin-sidebar-link-active"
//                     : ""
//                 }`
//               }
//             >
//               <Icon
//                 size={20}
//                 className="admin-sidebar-link-icon"
//               />

//               <span className="admin-sidebar-link-text">
//                 {link.label}
//               </span>

//               <ChevronRight
//                 size={16}
//                 className="admin-sidebar-link-arrow"
//               />

//               <span className="admin-sidebar-link-indicator"></span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* FOOTER */}
//       <div className="admin-sidebar-footer">
//         <div className="admin-sidebar-user">
//           <div className="admin-user-avatar">
//             A
//           </div>
//           <div className="admin-user-info">
//             <span className="admin-user-name">
//               Admin User
//             </span>
//             <span className="admin-user-role">
//               Administrator
//             </span>
//           </div>
//         </div>

//         <button
//           onClick={logout}
//           className="admin-sidebar-logout"
//         >
//           <LogOut size={20} />
//           <span>Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default AdminSidebar;





import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {
  LayoutDashboard,
  Newspaper,
  BookOpen,
  Image,
  Trophy,
  GraduationCap,
  MessageSquare,
  Mail,
  Settings,
  LogOut,
  PanelsTopLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import "./AdminSidebar.css";

// Import logo from assets
import schoolLogo from "../../assets/logo.png"; // Adjust path as needed
// Or if you have SVG:
// import schoolLogo from "../../assets/logo.svg";

const AdminSidebar = () => {
  const { logout } = useAuth();

  const links = [
    {
      label: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Hero",
      path: "/admin/hero",
      icon: PanelsTopLeft,
    },
    {
      label: "News",
      path: "/admin/news",
      icon: Newspaper,
    },
    {
      label: "Blogs",
      path: "/admin/blogs",
      icon: BookOpen,
    },
    {
      label: "Gallery",
      path: "/admin/gallery",
      icon: Image,
    },
    {
      label: "Achievements",
      path: "/admin/achievements",
      icon: Trophy,
    },
    {
      label: "Admissions",
      path: "/admin/admissions",
      icon: GraduationCap,
    },
    {
      label: "Testimonials",
      path: "/admin/testimonials",
      icon: MessageSquare,
    },
    {
      label: "Contact Enquiries",
      path: "/admin/contact",
      icon: Mail,
    },
    // {
    //   label: "Settings",
    //   path: "/admin/settings",
    //   icon: Settings,
    // },
  ];

  return (
    <aside className="admin-sidebar">
      {/* HEADER WITH LOGO */}
      <div className="admin-sidebar-header">
        <div className="admin-logo-wrapper">
          <div className="admin-logo-shine"></div>
          <div className="admin-logo-container">
            <img
              src={schoolLogo}
              alt="SNGA Logo"
              className="admin-logo-image"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
       
            <div className="admin-logo-fallback" style={{ display: "none" }}>
              SNGA
            </div>
          </div>
      
        </div>

        <div className="admin-sidebar-brand">
          <h2 className="admin-sidebar-title">
            SNGA
          </h2>
          <span className="admin-sidebar-subtitle">
            Admin Panel
          </span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="admin-sidebar-nav">
        <div className="admin-sidebar-nav-label">
          Main Menu
        </div>

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/admin"}
              className={({ isActive }) =>
                `admin-sidebar-link ${
                  isActive
                    ? "admin-sidebar-link-active"
                    : ""
                }`
              }
            >
              <Icon
                size={20}
                className="admin-sidebar-link-icon"
              />

              <span className="admin-sidebar-link-text">
                {link.label}
              </span>

              <ChevronRight
                size={16}
                className="admin-sidebar-link-arrow"
              />

              <span className="admin-sidebar-link-indicator"></span>
            </NavLink>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="admin-sidebar-footer">
        <div className="admin-sidebar-user">
          <div className="admin-user-avatar">
            A
          </div>
          <div className="admin-user-info">
            <span className="admin-user-name">
              Admin User
            </span>
            <span className="admin-user-role">
              Administrator
            </span>
          </div>
        </div>

        <button
          onClick={logout}
          className="admin-sidebar-logout"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;