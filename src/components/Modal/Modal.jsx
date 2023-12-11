import { useEffect } from "react";
import { createPortal } from "react-dom";

import { IoCloseOutline } from "react-icons/io5";

import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ close, children }) => {
  const handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      close();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleClose);

    return () => document.body.removeEventListener("keydown", handleClose);
  });

  return createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal}>
        <IoCloseOutline className={styles.btnClose} onClick={close} size={24} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
