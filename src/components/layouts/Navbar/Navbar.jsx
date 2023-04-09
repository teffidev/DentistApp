import { Link, Outlet } from "react-router-dom";
import Switch from "@mui/material/Switch";
import styles from "./Navbar.module.css";

export const Navbar = (state, handleChange) => {
  return (
    <div>
      <h2>Navbar</h2>
      <Link to="/">
        <button className={styles.buttonBack}>BACK</button>
      </Link>

      <Switch
        checked={state.isDark}
        onChange={() => handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      <Link to="/favs">Go to favorites</Link>

      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};
