import styles from "./StatCard.module.css";

function StatCard({ icon, title, value }) {
  return (
    <div className={styles.card}>

      <div className={styles.icon}>
        {icon}
      </div>

      <h3>{title}</h3>

      <h2>{value}</h2>

    </div>
  );
}

export default StatCard;