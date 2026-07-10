import styles from "./FilterBar.module.css";

function FilterBar() {
  return (
    <div className={styles.filterBar}>

      <button>All</button>

      <button>Completed</button>

      <button>Pending</button>

      <button>High</button>

      <button>Medium</button>

      <button>Low</button>

    </div>
  );
}

export default FilterBar;