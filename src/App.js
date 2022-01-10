import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Loader } from "./components/Loader/Loader";
import { Header } from "./components/Header/Header";
import { Notification } from "./components/Notification/Notification";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Notification />
      <div className={styles.contentContainer}>
        <Router>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
