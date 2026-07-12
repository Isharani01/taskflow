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
        <div className={styles.emptyState}>
          <h2>No Tasks Yet</h2>
          <p>
            Click <strong>Add Task</strong> to create your first task.
          </p>
        </div>
      )}
    </div>
  );
}

export default TaskList;