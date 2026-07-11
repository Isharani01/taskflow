import styles from "./TaskForm.module.css";

function TaskForm() {
  return (
    <form className={styles.taskForm}>
      <h2>Add New Task</h2>

      <div className={styles.inputGroup}>
        <label>Task Title</label>
        <input
          type="text"
          placeholder="Enter task title"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Task Description</label>
        <textarea
          placeholder="Enter task description"
          rows="4"
        ></textarea>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>Priority</label>

          <select>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Due Date</label>

          <input type="date" />
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button
          type="button"
          className={styles.cancelBtn}
        >
          Cancel
        </button>

        <button
          type="submit"
          className={styles.saveBtn}
        >
          Save Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;