import styles from "./CTA.module.css";

function CTA() {
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
            <button className={styles.primaryBtn}>
              Get Started
            </button>
            <button className={styles.secondaryBtn}>
              Contact Us
            </button>
          </div>    
        </div>
      </div>
    </section>
  );
}

export default CTA;