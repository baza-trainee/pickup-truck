import Button from '../Button/Button'
import aboutFirst from "../../assets/About/about-img-1.webp";
import aboutSecond from "../../assets/About/about-img-2.webp";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.aboutTitle}>Про бригаду</h2>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutFirstBlock}>
          <img
            src={aboutFirst}
            alt="Brigade photo"
            className={styles.aboutFirstImage}
          />
          <div className={styles.aboutFirstBlockText}>
            <p className={styles.aboutText}>
              З самого початку повномасштабного вторгнення агресора в Україну 9й
              полк оперативного призначення НГУ імені Богдана Завади став на
              захист рубежів нашого регіону і брав участь в обороні населених
              пунктів Мелітополь, Молочанськ, Токмак, Кам'янське, Мала Токмачка.{" "}
            </p>
            <p className={styles.aboutText}>
              Стійкість та мужність цих воїнів дала змогу зупинити переважаючі
              сили ворога на напрямках Василівка - Запоріжжя та Токмак - Оріхів.{" "}
            </p>
          </div>
        </div>
        <div className={styles.aboutSecondBlock}>
          <img
            src={aboutSecond}
            alt="Brigade photo"
            className={styles.aboutSecondImage}
          />
          <div className={styles.aboutSecondBlockText}>
            <p className={styles.aboutText}>
              В січні 2023 року 9й полк було реорганізовано у 15 бригаду
              оперативного призначення імені Богдана Завади, яка увійшла у
              список бригад "Гвардії наступу".
            </p>
            <p className={styles.aboutText}>
              Зараз бійці бригади мужньо та стійко стримують навалу агресора й
              крок за кроком звільняють території наших рідних земель.{" "}
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://send.monobank.ua/jar/3dcSuvAawh"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.aboutButton}
      >
        <Button>ДОНАТ НА ПІКАП</Button>
      </a>
    </section>
  );
};

export default About;
