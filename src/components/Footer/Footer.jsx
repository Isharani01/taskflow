import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Isha.dev</h2>

          <p>
            Building modern web applications with React and creating clean user
            experiences.
          </p>
        </div>

        <div className={styles.center}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <div className={styles.right}>
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2026 Isha Rani. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;