import styles from "./TaskCard.module.css";
import Button from "../Button/Button";

import {
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

function TaskCard({
  task,
  onDelete,
  onEdit,
  onToggleStatus,
}) {
  return (
    <div className={styles.taskCard}>

      <div className={styles.top}>
        <h3>{task.title}</h3>

        <span className={styles.priority}>
          {task.priority}
        </span>
      </div>

      <p className={styles.description}>
        {task.description}
      </p>

      <div className={styles.info}>

        <div className={styles.date}>
          <FaCalendarAlt />
          <span>{task.dueDate}</span>
        </div>

        <div
          className={styles.status}
          onClick={() => onToggleStatus(task.id)}
          style={{ cursor: "pointer" }}
        >
          <FaCheckCircle />
          <span>{task.status}</span>
        </div>

      </div>

      <div className={styles.actions}>

        <Button
          text="Edit"
          className={styles.editBtn}
          onClick={() => onEdit(task)}
        />

        <Button
          text="Delete"
          className={styles.deleteBtn}
          onClick={() => onDelete(task.id)}
        />

      </div>

    </div>
  );
}

export default TaskCard;