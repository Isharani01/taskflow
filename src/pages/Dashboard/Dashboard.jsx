import styles from "./Dashboard.module.css";

import DashboardNavbar from "../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import StatCard from "../../components/Dashboard/StatCard/StatCard";
import SearchBar from "../../components/Dashboard/SearchBar/SearchBar";
import FilterBar from "../../components/Dashboard/FilterBar/FilterBar";
import SortDropdown from "../../components/Dashboard/SortDropdown/SortDropdown";
import TaskList from "../../components/Dashboard/TaskList/TaskList";
import Modal from "../../components/Dashboard/Modal/Modal";
import TaskForm from "../../components/Dashboard/TaskForm/TaskForm";
import { useMemo, useRef, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import {
  FaTasks,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function Dashboard() {

  const defaultTasks = [
  {
    id: 1,
    title: "Design Dashboard",
    description: "Create responsive dashboard UI.",
    dueDate: "2026-07-15",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    title: "Complete Assignment",
    description: "Finish React TaskFlow project.",
    dueDate: "2026-07-18",
    priority: "Medium",
    status: "Completed",
  },
  {
    id: 3,
    title: "Push to GitHub",
    description: "Upload latest code.",
    dueDate: "2026-07-20",
    priority: "Low",
    status: "Pending",
  },
];

const [tasks, setTasks] = useLocalStorage(
  "tasks",
  defaultTasks
);

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Recent");
  const taskRef = useRef(null);

  const addTask = (newTask) => {

    if (editingTask) {

      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                ...newTask,
              }
            : task
        )
      );

      setEditingTask(null);

    } else {

      setTasks([
        ...tasks,
        {
          id: Date.now(),
          ...newTask,
          status: "Pending",
        },
      ]);

    }

    setShowModal(false);

  };

  const deleteTask = (id) => {

    setTasks(tasks.filter((task) => task.id !== id));

  };

  const editTask = (task) => {

    setEditingTask(task);

    setShowModal(true);

  };

  const toggleStatus = (id) => {

    setTasks(

      tasks.map((task) =>

        task.id === id

          ? {
              ...task,
              status:
                task.status === "Pending"
                  ? "Completed"
                  : "Pending",
            }

          : task

      )

    );

  };

  const filteredTasks = useMemo(() => {

    let data = [...tasks];

    if (searchTerm) {

      data = data.filter(

        (task) =>
          task.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||

          task.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

      );

    }

    if (filter !== "All") {

      data = data.filter(

        (task) =>
          task.status === filter ||
          task.priority === filter

      );

    }

    if (sortBy === "Priority") {

      const order = {

        High: 1,
        Medium: 2,
        Low: 3,

      };

      data.sort(
        (a, b) => order[a.priority] - order[b.priority]
      );

    }

    if (sortBy === "Due Date") {

      data.sort(
        (a, b) =>
          new Date(a.dueDate) - new Date(b.dueDate)
      );

    }

    return data;

  }, [tasks, searchTerm, filter, sortBy]);

  return (

    <section className={styles.dashboard}>

      <DashboardNavbar />

      <div className={styles.dashboardLayout}>

        <Sidebar
  onMyTasks={() =>
    taskRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }
  onAddTask={() => {
    setEditingTask(null);
    setShowModal(true);
  }}
/>

        <main className={styles.mainContent}>

          <DashboardHeader
            onAddTask={() => {
              setEditingTask(null);
              setShowModal(true);
            }}
          />

          <div className={styles.stats}>

            <StatCard
              icon={<FaTasks />}
              title="Total Tasks"
              value={tasks.length}
            />

            <StatCard
              icon={<FaCheckCircle />}
              title="Completed"
              value={
                tasks.filter(
                  (task) => task.status === "Completed"
                ).length
              }
            />

            <StatCard
              icon={<FaClock />}
              title="Pending"
              value={
                tasks.filter(
                  (task) => task.status === "Pending"
                ).length
              }
            />

          </div>

          <div className={styles.controls}>

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <FilterBar
              filter={filter}
              setFilter={setFilter}
            />

            <SortDropdown
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

          </div>

         <div ref={taskRef}>
  <TaskList
    tasks={filteredTasks}
    onDelete={deleteTask}
    onEdit={editTask}
    onToggleStatus={toggleStatus}
  />
</div>

        </main>

      </div>

      {showModal && (

        <Modal
          onClose={() => {
            setShowModal(false);
            setEditingTask(null);
          }}
        >

        <TaskForm
  key={editingTask ? editingTask.id : "new"}
  onClose={() => {
    setShowModal(false);
    setEditingTask(null);
  }}
  onAddTask={addTask}
  editingTask={editingTask}
/>

        </Modal>

      )}

    </section>

  );
}

export default Dashboard;