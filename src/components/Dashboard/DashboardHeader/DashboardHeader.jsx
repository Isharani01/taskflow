import styles from "./DashboardHeader.module.css";

function DashboardHeader() {
  return (
    <div className={styles.header}>

      <div>

        <h1>Dashboard</h1>

        <p>
          Manage your daily tasks efficiently.
        </p>

      </div>

      <button className={styles.addBtn}>
        + Add Task
      </button>

    </div>
  );
}

export default DashboardHeader;