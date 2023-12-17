import Container from "../Container/Container";
import styles from "./Header.module.css";
import { Link } from "react-scroll";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useState } from "react";
import LogoImg from "../../assets/Logo.svg"; 
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const onOpenMobileMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu);

  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.HeaderElements}>
          <div className={styles.Logo}>
            <img src={LogoImg} alt="logo" />
          </div>
          <nav className={styles.Nav}>
            <ul className={styles.NavMenu}>
              <li>
                <Link
                  className={styles.link}
                  to="goal"
                  duration={500}
                  aria-label="Move to Goal section"
                >
                  Мета
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  to="about"
                  duration={500}
                  aria-label="Move to About section"
                >
                  Про бригаду
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  to="important"
                  duration={500}
                  aria-label="Move to Why it`s important section"
                >
                  Чому важливо
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  to="fundraising"
                  duration={500}
                  aria-label="Move to Fundraising section"
                >
                  Збір
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className={styles.burgerMenuOpen}
            onClick={() => onOpenMobileMenu()}
          >
            <FiMenu />
          </button>
        </div>
        <MobileMenu
          setIsOpenMobileMenu={setIsOpenMobileMenu}
          isOpenMobileMenu={isOpenMobileMenu}
        />
      </Container>
    </header>
  );
};

export default Header;
