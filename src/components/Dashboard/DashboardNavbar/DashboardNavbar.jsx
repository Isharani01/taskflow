import styles from "./DashboardNavbar.module.css";

function DashboardNavbar() {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        TaskFlow
      </div>

      <div className={styles.user}>
        Isha
      </div>

    </nav>
  );
}

export default DashboardNavbar;