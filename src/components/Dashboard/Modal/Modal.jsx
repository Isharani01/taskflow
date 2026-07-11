import styles from "./Modal.module.css";

function Modal() {
  return (
    <div className={styles.overlay}>

      <div className={styles.modal}>

        <h2>Add Task</h2>

      </div>

    </div>
  );
}

export default Modal;