import styles from "./TaskList.module.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskList() {

  const tasks = [
    {
      id: 1,
      title: "Design Dashboard",
      description: "Create a responsive dashboard using React.",
      dueDate: "15 July 2026",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Complete Assignment",
      description: "Finish the TaskFlow project.",
      dueDate: "18 July 2026",
      priority: "Medium",
      status: "Completed",
    },
    {
      id: 3,
      title: "Push to GitHub",
      description: "Upload the latest version of the project.",
      dueDate: "20 July 2026",
      priority: "Low",
      status: "Pending",
    },
  ];

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