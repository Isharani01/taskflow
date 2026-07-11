import styles from "./TaskForm.module.css";
import Button from "../Button/Button";

function TaskForm({ onClose }) {
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
        <label>Description</label>

        <textarea
          rows="5"
          placeholder="Enter task description"
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
          <label>Status</label>

          <select>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

      </div>

      <div className={styles.inputGroup}>
        <label>Due Date</label>

        <input type="date" />
      </div>

      <div className={styles.buttonGroup}>

        <Button
          text="Cancel"
          className={styles.cancelBtn}
          onClick={onClose}
        />

        <Button
          text="Save Task"
          className={styles.saveBtn}
        />

      </div>

    </form>
  );
}

export default TaskForm;