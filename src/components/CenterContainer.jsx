import { useState } from "react";
import Gameboard from "./Gameboard";
import PlayerScore from "./PlayerScore";
import styles from "./centercontainer.module.css";

export default function CenterContainer() {
  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState("");
  return (
    <div className={styles.centerContainer}>
      <PlayerScore playerName={playerName} />
      <Gameboard playerName={playerName} />
      <PlayerScore playerName={playerName} />
    </div>
  );
}
