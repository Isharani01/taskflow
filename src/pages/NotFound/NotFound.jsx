import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <Navbar />

      <section className={styles.notFound}>
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist.
        </p>

        <Link to="/" className={styles.btn}>
          Go Back Home
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default NotFound;