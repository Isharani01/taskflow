import styles from "./Login.module.css"
import { Link } from "react-router-dom";
import {FaCheckCircle} from "react-icons/fa";
function Login(){
    return(
    <section className={styles.login}>
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <div className={styles.logo}> <FaCheckCircle />
                TaskFlow</div>
                <h1>Welcome Back</h1>
                 <p> Sign in to continue managing your tasks.</p>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <button className={styles.loginBtn}>
                     Sign In</button>
                </form>
                <div className={styles.registerLink}>
                    <p>Don't have an account? <Link to ="/register">Register</Link>
                    </p>
                </div>

            </div>
        </div>
    </section>

    );    
}
export default Login;