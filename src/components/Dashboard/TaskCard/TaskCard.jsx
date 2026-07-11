import styles from "./TaskCard.module.css";

function TaskCard() {
  return (
    <div className={styles.taskCard}>

      <div className={styles.left}>

        <h3>Design Dashboard</h3>

        <p>Build responsive dashboard UI.</p>

        <span>Due: 15 July 2026</span>

        <span>High Priority</span>

      </div>

      <div className={styles.right}>

        <button>Pending</button>

        <button>Edit</button>

        <button>Delete</button>

      </div>

    </div>
  );
}

export default TaskCard;