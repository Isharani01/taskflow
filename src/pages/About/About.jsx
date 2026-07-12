import styles from "./About.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className={styles.about}>
        <div className={styles.container}>
          <h1>About TaskFlow</h1>

          <p className={styles.intro}>
            TaskFlow is a modern task management application
            built using React. It helps users organize,
            manage and track daily tasks with an attractive
            and responsive interface.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Project Features</h3>

              <ul>
                <li>Create Tasks</li>
                <li>Edit Tasks</li>
                <li>Delete Tasks</li>
                <li>Search Tasks</li>
                <li>Filter & Sort</li>
                <li>Local Storage</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Technologies</h3>

              <ul>
                <li>React JS</li>
                <li>React Router</li>
                <li>React Hooks</li>
                <li>CSS Modules</li>
                <li>React Icons</li>
                <li>Local Storage API</li>
              </ul>
            </div>
          </div>

          <div className={styles.footer}>
            <h3>Developer</h3>

            <p>
              Developed by <strong>Isha Rani</strong> as a
              React Task Management Project.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;