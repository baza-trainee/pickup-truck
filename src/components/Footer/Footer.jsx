import Container from "../Container/Container";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>
          Розробка Baza Trainee Ukraine 2023 &copy; Всі права захищені
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
