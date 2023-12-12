import { IoCloseOutline } from "react-icons/io5";

import styles from "./ModalThanks.module.css";
import stylesBtnClose from "../Modal/Modal.module.css";

const ModalThanks = ({ close }) => {
  return (
    <div className={styles.modalBox}>
      <IoCloseOutline
        className={`${stylesBtnClose.btnClose} ${stylesBtnClose.btnCloseThanks}`}
        onClick={close}
        size={24}
      />
      <p className={styles.text}>Дякуємо за вашу підтримку!</p>
    </div>
  );
};

export default ModalThanks;
