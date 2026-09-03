// import { Outlet } from "react-router-dom";

// import Header from "./Header";
// import Footer from "./Footer";

// const PublicLayout = () => {
//   return (
//     <div className="public-layout">

//       <Header />

//       <main>
//         <Outlet />
//       </main>

//       <Footer />

//     </div>
//   );
// };

// export default PublicLayout;

import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./PublicLayout.css";

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;