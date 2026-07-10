import styles from "./Dashboard.module.css";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import StatCard from "../../components/Dashboard/StatCard/StatCard";

import { FaTasks } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

function Dashboard() {
  return (
    <section className={styles.dashboard}>

      <DashboardNavbar />

      <div className={styles.dashboardLayout}>

        <Sidebar />

        <main className={styles.mainContent}>
          <DashboardHeader />
          <div className={styles.stats}>

  <StatCard
    icon={<FaTasks />}
    title="Total Tasks"
    value="18"
  />

  <StatCard
    icon={<FaCheckCircle />}
    title="Completed"
    value="12"
  />

  <StatCard
    icon={<FaClock />}
    title="Pending"
    value="6"
  />
</div>
        </main>

      </div>

    </section>
  );
}

export default Dashboard;