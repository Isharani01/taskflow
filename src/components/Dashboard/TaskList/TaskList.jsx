import styles from "./TaskList.module.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskList({tasks}) {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          priority={task.priority}
          status={task.status}
        />
      ))}
    </div>
  );
}

export default TaskList;