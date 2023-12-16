import React from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import Container from "../../Container/Container";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ setIsOpenMobileMenu, isOpenMobileMenu }) => {
  return (
    <div
      className={`${styles.mobileMenu} ${isOpenMobileMenu && styles.isOpen}`}
    >
      <Container>
        <div className={styles.mobileMenuContainer}>
          <button
            className={styles.mobileMenuCLoseBtn}
            type="button"
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          >
            <AiOutlineClose className={styles.closeSvg} size={24} />
          </button>
        </div>
        <nav className={styles.navMobile}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                className={styles.link}
                to="goal"
                duration={500}
                aria-label="Move to Goal section"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                Мета
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                to="about"
                duration={500}
                aria-label="Move to About section"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                Про бригаду
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                to="important"
                duration={500}
                aria-label="Move to Why it`s important section"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                Чому важливо
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                to="fundraising"
                duration={500}
                className={styles.link}
                aria-label="Move to Fundraising section"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                Збір
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MobileMenu;
