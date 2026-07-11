import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className={styles.hero}>
        {/* main container, split hero into two columns */}
      <div className={styles.container}>
        {/*left section containing content and buttons */} 
        <div className={styles.left}>
          <span className={styles.badge}>
            Productivity Simplified
          </span>
          <h1>
            Manage Your Tasks<br />With Clarity &<br />Confidence
          </h1>
          <p>
            Stay organized, track your progress, and complete
            your work with an intuitive task management
            experience designed for productivity.
          </p>
          {/* call to action buttons for left section */}
          <div className={styles.buttons}>
            <button
  className={styles.primaryBtn}
  onClick={() => navigate("/register")}
>
  Get Started
</button>
            <button
  className={styles.secondaryBtn}
  onClick={() =>
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  Learn More
</button>
          </div>
          {/* buttons div ended */}
        </div>
        {/* left section div ended */}
       <div className={styles.right}>
         {/* right section with  parent wrapper and 3 childs */}
    <div className={styles.dashboardWrapper}>
    <div className={styles.dashboardCard}>
      <div className={styles.cardHeader}>
        <h3>Today's Tasks</h3>
        <span>4 Tasks</span>
      </div>
     {/*all tasks*/}
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
       {/*progress card*/}
    <div className={styles.progressCard}>
      <h4>Progress</h4>
      <h2>78%</h2>
      <div className={styles.progressBar}>
        <div className={styles.progress}></div>
      </div>
    </div>
       {/*stats card */}
   <div className={styles.statsCard}>
      <h2>128</h2>
      <p>Completed Tasks</p>
    </div>
  </div>
     {/*dashbaord wrapper div ended */}

</div>
   {/*right div ended */}
    </div>
      {/*container div ended */}
    </section>
  );
}
export default Hero;