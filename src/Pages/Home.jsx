import React from "react";
import styles from './Home.module.css'
// import { showToast  } from '../Components/ToastProvider';
import { useToast } from "../Components/ToastProvider";
const Home = () => {
  const {showToast} = useToast();
  return (
    <div className={styles.main}>
    <h1>Toast Notifications</h1>
      <div className={styles.home_container}>
        <button onClick={() => showToast("Success Message!", "success")}>Success</button>
        <button onClick={() => showToast("Error Message!", "error")}>Error</button>
        <button onClick={() => showToast("Warning Message!", "warning")}>Warning</button>
        <button onClick={() => showToast("Info Message!", "info")}>Info</button>
      </div>
    </div>
  );
};

export default Home;



