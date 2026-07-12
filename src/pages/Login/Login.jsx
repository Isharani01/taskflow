import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaHome } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  return (
    <section className={styles.login}>
      <div className={styles.container}>
<div className={styles.loginCard}>

  <div className={styles.topBar}>

    <div className={styles.logo}>
      <FaCheckCircle />
      <span>TaskFlow</span>
    </div>

    <Link to="/" className={styles.homeBtn}>
      <FaHome />
      <span>Back to Home</span>
    </Link>

  </div>

  <h1>Welcome Back</h1>

  <p>Sign in to continue managing your tasks.</p>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
          >
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
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className={styles.loginBtn}
            >
              Sign In
            </button>
          </form>

          <div className={styles.registerLink}>
            <p>
              Don't have an account?{" "}
              <Link to="/register">Register</Link>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Login;