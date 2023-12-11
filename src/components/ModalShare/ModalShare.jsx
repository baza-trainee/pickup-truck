import { useState } from "react";
import { GoShareAndroid } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

import facebook from "../../assets/modal/fb.svg";
import telegram from "../../assets/modal/tm.svg";
import linkedin from "../../assets/modal/ld.svg";

import styles from "./ModalShare.module.css";

const ModalShare = ({ close }) => {
  const [isCopy, setIsCopy] = useState(false);
  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    if (isCopy) return;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setIsCopy(true);

        setTimeout(() => {
          setIsCopy(false);
          close();
        }, 2000);
      })
      .catch((err) => {
        console.error(`Failed to copy: ${err}`);
      });
  };

  return (
    <div className={styles.modalBox}>
      <h3 className={styles.title}>Поділіться сайтом з друзями!</h3>
      <span className={styles.line}></span>
      <p className={`${styles.text} ${styles.subTitle}`}>
        Надішліть посилання на сайт через cоціальні мережі
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            className={styles.link}
          >
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(
              currentUrl
            )}`}
            className={styles.link}
          >
            <img src={telegram} alt="telegram" />
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              currentUrl
            )}`}
            className={styles.link}
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>
      <p className={styles.text}>або скопіюйте лінк</p>

      <a className={styles.linkCopy} onClick={copyToClipboard}>
        Скопіювати посилання <GoShareAndroid size={24} />
      </a>
      {isCopy && (
        <p className={styles.textCopy}>
          Посилання скопійовано
          <FaCheck style={{ color: "var(--green)" }} size={24} />
        </p>
      )}
    </div>
  );
};

export default ModalShare;
