import { useState } from "react";
import styles from "./TaskForm.module.css";
import Button from "../Button/Button";
import { priorities } from "../../../data/priorities";
function TaskForm({ onClose, onAddTask, editingTask }) {
  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(
    editingTask?.description || ""
  );
  const [priority, setPriority] = useState(
    editingTask?.priority || "Medium"
  );
  const [dueDate, setDueDate] = useState(
    editingTask?.dueDate || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter task title.");
      return;
    }

    onAddTask({
      title,
      description,
      priority,
      dueDate,
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form
      className={styles.taskForm}
      onSubmit={handleSubmit}
    >
      <h2>
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>

      <div className={styles.inputGroup}>
        <label>Task Title</label>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Description</label>

        <textarea
          rows="5"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {priorities.map((item) => (
  <option
    key={item}
    value={item}
  >
    {item}
  </option>
))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Due Date</label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <Button
          text="Cancel"
          className={styles.cancelBtn}
          onClick={onClose}
        />

        <Button
  type="submit"
  text={editingTask ? "Update Task" : "Save Task"}
  className={styles.saveBtn}
/>
      </div>
    </form>
  );
}

export default TaskForm;