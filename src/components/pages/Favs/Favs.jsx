import React from "react";
import styles from './Favs.module.css'

export const Favs = ({ state }) => {
  return (
    <div className={styles.container}>
      {state.favs.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
    </div>
  );
};
