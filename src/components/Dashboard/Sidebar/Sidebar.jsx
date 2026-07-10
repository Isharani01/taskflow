import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <a href="#">Dashboard</a>

      <a href="#">Tasks</a>

      <a href="#">About</a>

      <a href="#">Logout</a>

    </aside>
  );
}

export default Sidebar;