import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container/Container";
import styles from "./Important.module.css";
import { IconFire } from "../../assets/important/IconFire";
import { IconSpeed } from "../../assets/important/IconSpeed";
import { IconSword } from "../../assets/important/IconSword";
import Slide1 from "../../assets/important/slide1.webp";
import Slide2 from "../../assets/important/slide2.webp";
import Slide3 from "../../assets/important/slide3.webp";
import Slide4 from "../../assets/important/slide4.webp";
import Slide5 from "../../assets/important/slide5.webp";

const Important = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section id='important' className={styles.important}>
      <h2 className={styles.title}>Чому це важливо?</h2>
      <div className={styles.importantWrap}>
        <Slider
          className={styles.importantSlider}
          т
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
        >
          <div>
            <img src={Slide1} alt="Slide1" />
          </div>
          <div>
            <img src={Slide2} alt="Slide2" />
          </div>
          <div>
            <img src={Slide3} alt="Slide3" />
          </div>
          <div>
            <img src={Slide4} alt="Slide4" />
          </div>
          <div>
            <img src={Slide5} alt="Slide5" />
          </div>
        </Slider>
        <div className={styles.importantApsolute}>
          <Container>
            <div className={styles.importantApsoluteWrapper}>
              <div className={styles.importantItem}>
                <IconFire />
                <span>Для виконання бойових завдань</span>
              </div>
              <div className={styles.importantItem}>
                <IconSpeed />
                <span>Швидко евакуювати поранених військових</span>
              </div>
              <div className={styles.importantItem}>
                <IconSword />
                <span>Доставити необхідні боєприпаси на бойові позиції</span>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Important;
