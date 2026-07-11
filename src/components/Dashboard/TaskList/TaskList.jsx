import styles from "./TaskList.module.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskList() {
  return (
    <div className={styles.taskList}>

      <TaskCard />

      <TaskCard />

      <TaskCard />

      <TaskCard />

    </div>
  );
}

export default TaskList;