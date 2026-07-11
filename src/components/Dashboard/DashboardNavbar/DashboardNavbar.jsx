import styles from "./DashboardNavbar.module.css";
import { FaCheckCircle, FaBell, FaUserCircle } from "react-icons/fa";

function DashboardNavbar() {
  return (
    <nav className={styles.dashboardNavbar}>
      <div className={styles.logo}>
        <FaCheckCircle />
        <span>TaskFlow</span>
      </div>

      <div className={styles.right}>
        <button className={styles.notification}>
          <FaBell />
        </button>

        <div className={styles.profile}>
          <FaUserCircle className={styles.profileIcon} />

          <div className={styles.userInfo}>
            <h4>Isha Rani</h4>
            <p>Student</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;