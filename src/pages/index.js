import React, { lazy } from "react";

export const Login = lazy(() =>
  import("./LoginPage/LoginPageContainer").then(({ LoginPageContainer }) => ({
    default: LoginPageContainer,
  }))
);

export const Profile = lazy(() =>
  import("./ProfilePage/ProfilePageContainer").then(({ ProfileContainer }) => ({
    default: ProfileContainer,
  }))
);

export const News = lazy(() =>
  import("./NewsPage/NewsPageContainer").then(({ NewsPageContainer }) => ({
    default: NewsPageContainer,
  }))
);

export const Main = lazy(() =>
  import("./MainPage/MainPageContainer").then(({ MainPageContainer }) => ({
    default: MainPageContainer,
  }))
);
