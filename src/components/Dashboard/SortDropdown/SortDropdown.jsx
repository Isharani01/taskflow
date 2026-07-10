import styles from "./SortDropdown.module.css";

function SortDropdown() {
  return (
    <div className={styles.sortDropdown}>

      <select>

        <option>Recently Added</option>

        <option>Due Date</option>

        <option>Priority</option>

      </select>

    </div>
  );
}

export default SortDropdown;