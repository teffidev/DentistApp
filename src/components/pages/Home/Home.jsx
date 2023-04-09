import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = (state) => {
  return (
    <div
      className={
        state.isDark ? `${styles.containerDark}` : `${styles.containerLight}`
      }
    >
      <h2>Welcome to the website of your dental health</h2>
      <Link to="/dentists">See Dentists</Link>
      
      <img
        className={styles.image}
        src="https://res.cloudinary.com/dhwjwa7tn/image/upload/v1680982268/be_a_denist_qrlmyk.jpg"
        alt="Home picture"
      />
    </div>
  );
};
