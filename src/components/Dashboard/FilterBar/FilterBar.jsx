import styles from "./FilterBar.module.css";
import { filters } from "../../../data/filters";

function FilterBar({ filter, setFilter }) {
  return (
  <div className={styles.filterBar}>
    {filters.map((item) => (
      <button
        key={item}
        className={filter === item ? styles.active : ""}
        onClick={() => setFilter(item)}
      >
        {item}
      </button>
    ))}
  </div>
);
}

export default FilterBar;