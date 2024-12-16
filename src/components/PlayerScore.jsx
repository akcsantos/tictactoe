import styles from "./playerscore.module.css";

export default function PlayerScore({ playerName, score }) {
  return (
    <div className={styles.nameScoreContainer}>
      <div>
        <h1 className={styles.playerName}>{playerName}:</h1>
      </div>
      <div>
        <h2 className={styles.playerScore}>{score}</h2>
      </div>
    </div>
  );
}
