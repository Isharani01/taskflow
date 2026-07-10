import styles from "./Dashboard.module.css";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";

function Dashboard() {
  return (
    <section className={styles.dashboard}>

      <DashboardNavbar />

      <div className={styles.dashboardLayout}>

        <Sidebar />

        <main className={styles.mainContent}>
          <DashboardHeader />
        </main>

      </div>

    </section>
  );
}

export default Dashboard;