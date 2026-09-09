// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Home from "../pages/Home";
// import AdminLogin from "../admin/pages/Login";
// import ProtectedRoute from "./ProtectedRoute";
// import Dashboard from "../admin/pages/Dashboard";



// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* PUBLIC */}
//         <Route
//           path="/"
//           element={<Home />}
//         />

//         {/* ADMIN LOGIN */}
//         <Route
//           path="/admin/login"
//           element={<AdminLogin />}
//         />

//         {/* PROTECTED ADMIN */}
//         <Route element={<ProtectedRoute />}>
//           <Route
//             path="/admin"
//             element={<Dashboard />}
//           />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;

import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import Home from "../pages/Home";
import AdminLogin from "../admin/pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../admin/layouts/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import Contact from "../pages/Contact";

import Gallery from "../pages/Gallery";
import Blogs from "../pages/Blog";
import News from "../pages/News";
import Academics from "../pages/Academics";
import About from "../pages/About";
import HeroManagement from "../admin/pages/HeroManagement";
import NewsManagement from "../admin/pages/NewsManagement";
import BlogManagement from "../admin/pages/BlogManagement";
import GalleryManagement from "../admin/pages/GalleryManagement";
import AchievementManagement from "../admin/pages/AchievementManagement";
import AdmissionManagement from "../admin/pages/AdmissionManagement";
import TestimonialManagement from "../admin/pages/TestimonialManagement";
import ContactEnquiryManagement from "../admin/pages/ContactManagement";

import History from "../components/about/History";
import VisionMission from "../components/about/VisionMission";
import PrincipalMessage from "../components/about/PrincipalMessage";
import Management from "../components/about/Management";
import Infrastructure from "../components/about/Infrastructure";
import Curriculum from "../components/academics/Curriculum";
import Faculties from "../components/academics/Faculties";
import Examinations from "../components/academics/Examinations";
import Admissions from "../pages/Admissions";
import BlogDetail from "../pages/BlogDetails";
import NewsDetail from "../pages/NewsDetail";
import Results from "../components/academics/Results";
import Campus from "../pages/Campus";
import Achievements from "../pages/Achievements";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>

            <Routes>

                {/* ================================= */}
                {/* PUBLIC WEBSITE */}
                {/* ================================= */}

                <Route element={<PublicLayout />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* Future public pages */}


                    <Route
                        path="/about"
                        element={<History />}

                    />
                    <Route
                        path="/about/history"
                        element={<History />}

                    />


                    <Route
                        path="/about/vision-mission"
                        element={<VisionMission />}

                    />


                    <Route
                        path="/about/leadership"
                        element={<PrincipalMessage />}

                    />

                    <Route
                        path="/about/management"
                        element={<Management />}

                    />
                    <Route
                        path="/about/infrastructure"
                        element={<Infrastructure />}

                    />


                    <Route
                        path="/academics/curriculum"
                        element={<Curriculum />}



                    />

                    <Route
                        path="/academics"
                        element={<Curriculum />}



                    />




                    <Route
                        path="/campus"
                        element={<Campus />}



                    />
                    <Route
                        path="/achievements"
                        element={<Achievements />}



                    />

                    <Route
                        path="/academics/faculties"
                        element={<Faculties />}

                    />

                    <Route
                        path="/academics/examinations"
                        element={<Examinations />}
                    />
                    <Route
                        path="/academics/results"
                        element={<Results />}
                    />























                    <Route
                        path="/academics"
                        element={<Academics />}
                    />

                    <Route
                        path="/news"
                        element={<News />}
                    />

                    <Route
                        path="/blogs"
                        element={<Blogs />}
                    />
                    <Route path="/blogs/:slug" element={<BlogDetail />} />

                    <Route path="/news/:slug" element={<NewsDetail />} />
                    <Route
                        path="/gallery"
                        element={<Gallery />}
                    />

                    <Route
                        path="/admissions"
                        element={<Admissions />}
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />


                </Route>

                {/* ================================= */}
                {/* ADMIN LOGIN */}
                {/* ================================= */}

                <Route
                    path="/admin/login"
                    element={<AdminLogin />}
                />

                {/* ================================= */}
                {/* PROTECTED ADMIN */}
                {/* ================================= */}

                <Route element={<ProtectedRoute />}>

                    <Route
                        path="/admin"
                        element={<AdminLayout />}
                    >

                        <Route
                            index
                            element={<Dashboard />}
                        />

                        <Route
                            path="hero"
                            element={<HeroManagement />}


                        />


                        <Route
                            path="news"
                            element={<NewsManagement />}
                        />


                        <Route
                            path="achievements"
                            element={<AchievementManagement />}
                        />
                        <Route
                            path="admissions"
                            element={<AdmissionManagement />}
                        />


                        <Route
                            path="blogs"
                            element={<BlogManagement />}
                        />


                        <Route
                            path="gallery"
                            element={<GalleryManagement />}
                        />


                        <Route
                            path="testimonials"
                            element={<TestimonialManagement />}
                        />
                        <Route
                            path="contact"
                            element={<ContactEnquiryManagement />}
                        />


                    </Route>

                </Route>

            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;