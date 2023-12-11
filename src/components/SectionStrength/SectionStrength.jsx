import { GoShareAndroid } from "react-icons/go";
import Container from "../Container/Container";

import styles from "./SectionStrength.module.css";

const SectionStrength = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>В єданні - сила!</h2>
        <h3 className={styles.subTitle}>Розповідай друзям про збір</h3>
        <button className={styles.btn} type="button">
          Поділитися
          <GoShareAndroid size={24} />
        </button>
      </Container>
    </section>
  );
};
export default SectionStrength;
