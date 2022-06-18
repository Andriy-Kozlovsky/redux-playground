import styles from "./Counter.module.css";

const Counter = () => {
  return (
    <div className={styles.counter}>
      <h1>Counter: Redux Basics</h1>
      <button className={styles["btn-toggle"]}>Toggle counter</button>
      <p>5</p>
      <div className={styles.btns}>
        <button>- 5</button>
        <button>-</button>
        <button>+</button>
        <button>+ 5</button>
      </div>
    </div>
  );
};

export default Counter;
