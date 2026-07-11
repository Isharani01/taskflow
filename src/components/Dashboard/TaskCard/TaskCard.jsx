import styles from "./TaskCard.module.css";
import Button from "../Button/Button";

import {
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

function TaskCard({
  title,
  description,
  dueDate,
  priority,
  status,
}) {
  return (
    <div className={styles.taskCard}>

      <div className={styles.top}>

        <h3>{title}</h3>

        <span className={styles.priority}>
          {priority}
        </span>

      </div>

      <p className={styles.description}>
        {description}
      </p>

      <div className={styles.info}>

        <div className={styles.date}>

          <FaCalendarAlt />

          <span>{dueDate}</span>

        </div>

        <div className={styles.status}>

          <FaCheckCircle />

          <span>{status}</span>

        </div>

      </div>

      <div className={styles.actions}>

        <Button
          text="Edit"
          className={styles.editBtn}
        />

        <Button
          text="Delete"
          className={styles.deleteBtn}
        />

      </div>

    </div>
  );
}

export default TaskCard;