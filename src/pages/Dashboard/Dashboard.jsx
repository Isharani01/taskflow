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
import { useState } from "react";


import { FaTasks } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

function Dashboard() {
  const[tasks,setTasks]=useState([
    {
    id: 1,
    title: "Design Dashboard",
    description: "Create responsive dashboard UI.",
    dueDate: "15 July 2026",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    title: "Complete Assignment",
    description: "Finish React TaskFlow project.",
    dueDate: "18 July 2026",
    priority: "Medium",
    status: "Completed",
  },
  {
    id: 3,
    title: "Push to GitHub",
    description: "Upload latest code.",
    dueDate: "20 July 2026",
    priority: "Low",
    status: "Pending",
  },

  ]);
  const [showModal, setShowModal] = useState(false);
  return (
    <section className={styles.dashboard}>

      <DashboardNavbar />

      <div className={styles.dashboardLayout}>

        <Sidebar />

        <main className={styles.mainContent}>
          <DashboardHeader onAddTask={() => setShowModal(true)} />
  <div className={styles.stats}>
  <StatCard
    icon={<FaTasks />}
    title="Total Tasks"
    value={tasks.length}
  />
  <StatCard
    icon={<FaCheckCircle />}
    title="Completed"
    value={tasks.filter(task=>task.status==="Completed").length}
  />
  <StatCard
    icon={<FaClock />}
    title="Pending"
    value={tasks.filter(task=>task.status==="Pending").length}
  />
</div>
<div className={styles.controls}>

  <SearchBar />

  <FilterBar />

  <SortDropdown />

</div>
        </main>

      </div>
      <TaskList tasks={tasks} />
     {
  showModal && (
    <Modal onClose={() => setShowModal(false)}>

      <TaskForm onClose={() => setShowModal(false)} />

    </Modal>
  )
}

    </section>
  );
}

export default Dashboard;