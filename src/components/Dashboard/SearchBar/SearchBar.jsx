import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search tasks..."
      />
    </div>
  );
}

export default SearchBar;