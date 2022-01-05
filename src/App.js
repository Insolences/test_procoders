import "./App.module.scss";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Loader } from "./components/Loader/Loader";
import { Header } from "./components/Header/Header";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`${styles.appContainer} `}>
      <div className={styles.contentContainer}>
        <Suspense fallback={<Loader />}>
          <Router>
            <Header />
            <Routes />
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
