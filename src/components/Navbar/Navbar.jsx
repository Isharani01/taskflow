import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span>TaskFlow</span>
        </div>

        <ul className={styles.navLinks}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><a href="#features">Features</a></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>

        <div className={styles.actions}>
          <NavLink to="/login" className={styles.login}>
            Login
          </NavLink>

          <NavLink to="/register" className={styles.button}>
            Get Started
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;