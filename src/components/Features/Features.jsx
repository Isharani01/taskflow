import styles from "./Features.module.css"
import {
  FaTasks,
  FaChartLine,
  FaUsers,
  FaBell,
  FaCloud
} from "react-icons/fa";
function Features(){
    return(
       <section
        className={styles.features}
        id="features"
        >
           {/*making container main div*/}
            <div className={styles.container}>
                {/*header section containing heading n paragraph*/}
                <div className={styles.header}>
                <h2>Powerful Features</h2>
            <p>
            Everything you need to stay organized, manage your tasks,
            and boost your productivity.
            </p>
            </div>
            {/*slider for visible area*/}
            <div className={styles.slider}>
                {/*track holds all cards*/}
                    <div className={styles.track}>
                    <div className={styles.card}>
                        <div className={styles.icon}><FaTasks /></div>
                        <h3>Task Management</h3>
                         <p>Organize and manage your daily tasks with ease.</p>
                    </div>
                    <div className={styles.card}>
                    <div className={styles.icon}> <FaChartLine /></div>
                     <h3>Analytics</h3>
                     <p> Track your progress with detailed insights.</p>
                    </div>
            <div className={styles.card}>
              <div className={styles.icon}><FaUsers/></div>
              <h3>Team Collaboration</h3>
              <p> Work together with your team in real time.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}><FaBell/></div>
              <h3>Smart Notifications</h3>
              <p> Never miss important deadlines or updates. </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>< FaCloud/></div>
              <h3>Cloud Sync</h3>
              <p>  Access your tasks securely from any device.  </p>
            </div>   
            </div>
            </div>
            </div>
        </section>

    );
}
export default Features;