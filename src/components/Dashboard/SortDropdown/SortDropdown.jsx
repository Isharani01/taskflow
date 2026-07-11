import styles from "./SortDropdown.module.css";

function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className={styles.sortDropdown}>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option>Recent</option>
        <option>Due Date</option>
        <option>Priority</option>
      </select>

    </div>
  );
}

export default SortDropdown;