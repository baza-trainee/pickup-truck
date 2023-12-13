import Marquee from "react-fast-marquee";
import styles from "./RunningText.module.css";

const RunningText = () => {
  return (
    <Marquee autoFill={true} speed={80}>
      <div className={styles.runningBlock}>
        <p className={styles.runningText}>РАЗОМ ДО ПЕРЕМОГИ</p>
        <p className={styles.runningText}>РАЗОМ ДО ПЕРЕМОГИ</p>
      </div>
    </Marquee>
  );
};

export default RunningText;
