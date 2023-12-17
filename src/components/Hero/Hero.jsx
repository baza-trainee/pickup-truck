import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Пікап для захисників</h1>
          <h2 className={styles.subTitle}>Разом до перемоги</h2>
          <p className={styles.goal}>
            Наша мета <span>&mdash;</span>{" "}
            <span className={styles.sum}>250 000 грн</span>
          </p>
          <p className={styles.description}>
            Для 15 Бригади Оперативного Призначення НГУ "Кара-Даг"
          </p>
          <div className={styles.buttonWrapper}>
            <a

              href="https://send.monobank.ua/jar/3dcSuvAawh"
              target="_blank"
              rel="noopener noreferrer" className={styles.button}
            >
              <Button >ДОНАТ НА ПІКАП</Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
