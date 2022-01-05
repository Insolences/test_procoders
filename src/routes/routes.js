import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { LoginPageContainer } from "../pages/LoginPage/LoginPageContainer";
import { ProfileContainer } from "../pages/ProfilePage/ProfilePageContainer";
import { NewsPageContainer } from "../pages/NewsPage/NewsPageContainer";

const AllRoutes = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<LoginPageContainer />} />
      <Route path="/login" element={<LoginPageContainer />} />
      <Route
        path="/profile"
        element={!user ? <Navigate to="/login" /> : <ProfileContainer />}
      />
      <Route
        path="/news"
        element={!user ? <Navigate to="/login" /> : <NewsPageContainer />}
      />
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
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
