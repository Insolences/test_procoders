import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { LoginPageContainer } from "../pages/LoginPage/LoginPageContainer";
import { ProfileContainer } from "../pages/ProfilePage/ProfilePageContainer";
import { NewsPageContainer } from "../pages/NewsPage/NewsPageContainer";
import {useSelector} from "react-redux";

const AllRoutes = () => {
  const {isAuth} = useSelector(state => state.authentication)
  return (
    <Routes>
      <Route path="/" element={<LoginPageContainer />} />
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
