import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.left}>
          <span className={styles.badge}>
            Productivity Simplified
          </span>

          <h1>
            Manage Your Tasks
            <br />
            With Clarity &
            <br />
            Confidence
          </h1>

          <p>
            Stay organized, track your progress, and complete
            your work with an intuitive task management
            experience designed for productivity.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Get Started
            </button>

            <button className={styles.secondaryBtn}>
              Learn More
            </button>
          </div>
        </div>
       <div className={styles.right}>
  <div className={styles.dashboardWrapper}>

    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <h3>Today's Tasks</h3>
        <span>4 Tasks</span>
      </div>

      <div className={styles.task}>
        <span className={styles.completed}></span>
        <p>Design Home Page</p>
      </div>

      <div className={styles.task}>
        <span className={styles.completed}></span>
        <p>Setup React Router</p>
      </div>

      <div className={styles.task}>
        <span className={styles.pending}></span>
        <p>Create Dashboard</p>
      </div>

      <div className={styles.task}>
        <span className={styles.pending}></span>
        <p>Connect Local Storage</p>
      </div>
    </div>
    <div className={styles.progressCard}>
      <h4>Progress</h4>

      <h2>78%</h2>

      <div className={styles.progressBar}>
        <div className={styles.progress}></div>
      </div>
    </div>
   <div className={styles.statsCard}>
      <h2>128</h2>
      <p>Completed Tasks</p>
    </div>
  </div>
</div>
    </div>
    </section>
  );
}
export default Hero;