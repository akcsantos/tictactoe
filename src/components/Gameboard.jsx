import styles from "./gameboard.module.css";

export default function Gameboard() {
  return (
    <div className={styles.gameboard}>
      <div className={styles.currentPlayer}>Current Player:</div>
      <div className={styles.layout}>
        <div className={styles.grid}></div>
        <div className={styles.grid}></div>
        <div className={styles.grid}></div>
        <div className={styles.grid}></div>
        <div className={styles.grid}></div>
        <div className={styles.grid}></div>
        <div className={styles.grid}></div>
        <div className={styles.grid}></div>
        <div className={styles.grid}></div>
      </div>
    </div>
  );
}
