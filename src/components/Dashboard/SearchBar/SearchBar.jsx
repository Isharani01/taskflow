import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className={styles.searchBar}>

      <FaSearch className={styles.icon} />

      <input
        type="text"
        placeholder="Search by title or description..."
      />

    </div>
  );
}

export default SearchBar;