import styles from "./TaskList.module.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskList({
  tasks,
  onDelete,
  onEdit,
  onToggleStatus,
}) {
  return (
    <div className={styles.taskList}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleStatus={onToggleStatus}
          />
        ))
      ) : (
        <h3>No Tasks Found.</h3>
      )}
    </div>
  );
}

export default TaskList;