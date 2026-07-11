import styles from "./CTA.module.css";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();
  return (
    <section className={styles.cta}>
      {/* Main container */}
      <div className={styles.container}>
        {/* CTA box */}
        <div className={styles.ctaBox}>
          <h2>Ready to Boost Your Productivity?</h2>
          <p>
            Join thousands of users who organize their work,
            manage tasks efficiently, and achieve more every day.
          </p>
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
    window.location.href =
      "mailto:ishakhizar2709@gmail.com"
  }
>
  Contact Us
</button>
          </div>    
        </div>
      </div>
    </section>
  );
}

export default CTA;