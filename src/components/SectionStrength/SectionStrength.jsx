import { GoShareAndroid } from "react-icons/go";

import Container from "../Container/Container";
import Button from "../Button/Button";

import styles from "./SectionStrength.module.css";

const SectionStrength = () => {
  return (
    <>
      <section id='fundraising' className={styles.section}>
        <Container>
          <h2 className={styles.title}>В єднанні - сила!</h2>
          <h3 className={styles.subTitle}>Розповідай друзям про збір</h3>
          <Button isShare>
            Поділитися
            <GoShareAndroid size={24} />
          </Button>
        </Container>
      </section>
    </>
  );
};

export default SectionStrength;
