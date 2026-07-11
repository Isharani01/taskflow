import styles from "./Sidebar.module.css";
import { Link, useNavigate } from "react-router-dom";

import {
  FaThLarge,
  FaTasks,
  FaPlusCircle,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar({ onMyTasks, onAddTask }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Future me localStorage use karo to ye line uncomment kar dena
    // localStorage.removeItem("tasks");

    navigate("/");
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.menu}>
        <Link to="/dashboard" className={styles.active}>
          <FaThLarge />
          <span>Dashboard</span>
        </Link>

        <button onClick={onMyTasks}>
          <FaTasks />
          <span>My Tasks</span>
        </button>

        <button onClick={onAddTask}>
          <FaPlusCircle />
          <span>Add Task</span>
        </button>

        <Link to="/about">
          <FaInfoCircle />
          <span>About</span>
        </Link>
      </nav>

      <div className={styles.logout}>
        <button onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;