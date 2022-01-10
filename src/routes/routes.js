import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./routes.module.scss";
import { Login, Main, News, Profile } from "../pages";

const AllRoutes = () => {
  const { isAuth } = useSelector((state) => state.authentication);

  const routesPath = Object.freeze({
    main: "/",
    login: "/login",
    profile: "/profile",
    news: "/news",
  });

  return (
    <div className={styles.routesContainer}>
      <Routes>
        <Route path={`${routesPath.main}`} element={<Main />} />
        <Route path={`${routesPath.login}`} element={<Login />} />
        <Route
          path={`${routesPath.profile}`}
          element={!isAuth ? <Navigate to="/login" /> : <Profile />}
        />
        <Route
          path={`${routesPath.news}`}
          element={!isAuth ? <Navigate to="/login" /> : <News />}
        />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
