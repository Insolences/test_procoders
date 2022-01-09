import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPageContainer } from "../pages/LoginPage/LoginPageContainer";
import { ProfileContainer } from "../pages/ProfilePage/ProfilePageContainer";
import { NewsPageContainer } from "../pages/NewsPage/NewsPageContainer";
import { useSelector } from "react-redux";
import { MainPageContainer } from "../pages/MainPage/MainPageContainer";
import image from "../assets/news-background.jpeg";

const AllRoutes = () => {
  const { isAuth } = useSelector((state) => state.authentication);

  return (
    <div
      style={{
        padding: "10px 20px",
        width: "100%",
        background: image,
      }}
    >
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
        <Route path="/login" element={<LoginPageContainer />} />
        <Route
          path="/profile"
          element={!isAuth ? <Navigate to="/login" /> : <ProfileContainer />}
        />
        <Route
          path="/news"
          element={!isAuth ? <Navigate to="/login" /> : <NewsPageContainer />}
        />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
};

// const PublicRoute = ({ element, ...props }) => {
//     return (
//         <Route
//             {...props}
//             element={user ? element : <Navigate to="/login" replace />}
//         />
//     );
// };
//
// const PrivateRoute = ({ element, ...props }) => {
//     return (
//         <Route
//             {...props}
//             element={
//                 user ? (
//                     element
//                 ) : (
//                     <Navigate to="/login" state={{ from: location.pathname }} />
//                 )
//             }
//         />
//     );
// };

export default AllRoutes;
