import "./App.module.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Loader } from "./components/Loader/Loader";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import { Notification } from "./components/Notification/Notification";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className={`${styles.appContainer}`}>
        <Notification />
        <div className={styles.contentContainer}>
          <Router>
            <Header />
            <Routes />
          </Router>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
