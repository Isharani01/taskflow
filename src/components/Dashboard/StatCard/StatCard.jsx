import styles from "./StatCard.module.css";

function StatCard({ icon, title, value }) {
  return (
    <div className={styles.card}>

      <div className={styles.left}>

        <p className={styles.title}>
          {title}
        </p>

        <h2 className={styles.value}>
          {value}
        </h2>

      </div>

      <div className={styles.icon}>
        {icon}
      </div>

    </div>
  );
}

export default StatCard;