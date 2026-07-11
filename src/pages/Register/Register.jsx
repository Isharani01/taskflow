import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <section className={styles.register}>
      <div className={styles.container}>

        <div className={styles.registerCard}>

          <div className={styles.logo}>
            <FaCheckCircle />
            TaskFlow
          </div>

          <h1>Create Account</h1>

          <p>Create your account to start managing your tasks.</p>

          <form
             className={styles.form}
             onSubmit={(e) => {
             e.preventDefault();
             navigate("/dashboard");
             }}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
              />
            </div>

            <button
            type="submit"
             className={styles.registerBtn}>
              Create Account
            </button>

          </form>

          <div className={styles.loginLink}>
            <p>
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Register;