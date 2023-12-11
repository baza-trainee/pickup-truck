import { useState, useEffect } from "react";

import { PiArrowUpLight } from "react-icons/pi";

import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isScroll && (
      <button type="button" className={styles.btn} onClick={scrollToTop}>
        <PiArrowUpLight className={styles.arrow} />
      </button>
    )
  );
};

export default ScrollToTop;
