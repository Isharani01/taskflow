import styles from "./Button.module.css";

function Button({ text, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;