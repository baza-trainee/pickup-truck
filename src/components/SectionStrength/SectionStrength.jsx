import { useState } from "react";
import { GoShareAndroid } from "react-icons/go";

import Container from "../Container/Container";

import styles from "./SectionStrength.module.css";
import Modal from "../Modal/Modal";
import ModalShare from "../ModalShare/ModalShare";

const SectionStrength = () => {
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
      <section className={styles.section}>
        <Container>
          <h2 className={styles.title}>В єданні - сила!</h2>
          <h3 className={styles.subTitle}>Розповідай друзям про збір</h3>
          <button className={styles.btn} type="button" onClick={toggleModal}>
            Поділитися
            <GoShareAndroid size={24} />
          </button>
        </Container>
      </section>

      {showModal && (
        <Modal close={toggleModal}>
          <ModalShare close={toggleModal} />
        </Modal>
      )}
    </>
  );
};
export default SectionStrength;
