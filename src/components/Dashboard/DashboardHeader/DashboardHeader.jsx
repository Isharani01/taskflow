import styles from "./DashboardHeader.module.css";
import Button from "../Button/Button";

function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.header}>

      <div className={styles.heading}>

        <h1>Welcome Back, Isha </h1>

        <p>
          Stay organized and manage your daily tasks efficiently.
        </p>

        <span>{today}</span>

      </div>

      <Button
        text="+ Add Task"
        className={styles.addBtn}
      />

    </div>
  );
}

export default DashboardHeader;