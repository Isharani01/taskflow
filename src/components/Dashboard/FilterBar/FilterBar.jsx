import styles from "./FilterBar.module.css";

function FilterBar({ filter, setFilter }) {
  return (
    <div className={styles.filterBar}>

      <button
        className={filter === "All" ? styles.active : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        className={filter === "Completed" ? styles.active : ""}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>

      <button
        className={filter === "Pending" ? styles.active : ""}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>

      <button
        className={filter === "High" ? styles.active : ""}
        onClick={() => setFilter("High")}
      >
        High
      </button>

      <button
        className={filter === "Medium" ? styles.active : ""}
        onClick={() => setFilter("Medium")}
      >
        Medium
      </button>

      <button
        className={filter === "Low" ? styles.active : ""}
        onClick={() => setFilter("Low")}
      >
        Low
      </button>

    </div>
  );
}

export default FilterBar;