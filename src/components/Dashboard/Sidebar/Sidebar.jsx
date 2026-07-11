import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

import {
  FaThLarge,
  FaTasks,
  FaPlusCircle,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <nav className={styles.menu}>

        <Link to="/dashboard" className={styles.active}>
          <FaThLarge />
          <span>Dashboard</span>
        </Link>

        <Link to="/dashboard">
          <FaTasks />
          <span>My Tasks</span>
        </Link>

        <Link to="/dashboard">
          <FaPlusCircle />
          <span>Add Task</span>
        </Link>

        <Link to="/about">
          <FaInfoCircle />
          <span>About</span>
        </Link>

      </nav>

      <div className={styles.logout}>

        <button>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;