import { useState } from "react";

import Modal from "../Modal/Modal";
import ModalShare from "../ModalShare/ModalShare";
import ModalThanks from "../ModalThanks/ModalThanks";

import styles from "./Button.module.css";

const Button = ({ isShare, children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if (showModal) {
      document.body.classList.remove("modal-open");
    } else {
      document.body.classList.add("modal-open");
    }

    setShowModal(!showModal);
  };

  return (
    <>
      <button className={styles.btn} type="button" onClick={toggleModal}>
        {children}
      </button>

      {showModal && (
        <Modal close={toggleModal}>
          {isShare ? (
            <ModalShare close={toggleModal} />
          ) : (
            <ModalThanks close={toggleModal} />
          )}
        </Modal>
      )}
    </>
  );
};

export default Button;
