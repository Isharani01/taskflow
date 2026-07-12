import styles from "./SortDropdown.module.css";
import { sortOptions } from "../../../data/sortOptions";

function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className={styles.sortDropdown}>

      <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  {sortOptions.map((option) => (
    <option
      key={option}
      value={option}
    >
      {option}
    </option>
  ))}
</select>

    </div>
  );
}

export default SortDropdown;