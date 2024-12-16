import { useState } from "react";
import styles from "./square.module.css";

export default function Square({ value, squareClick }) {
  return (
    <button className={styles.square} onClick={squareClick}>
      {value}
    </button>
  );
}
