import styles from "./SortDropdown.module.css";

function SortDropdown() {
  return (
    <div className={styles.sortDropdown}>

      <select>

        <option value="recent">
          Recently Added
        </option>

        <option value="date">
          Due Date
        </option>

        <option value="high">
          High Priority
        </option>

        <option value="low">
          Low Priority
        </option>

        <option value="completed">
          Completed
        </option>

      </select>

    </div>
  );
}

export default SortDropdown;