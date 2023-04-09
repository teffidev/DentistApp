import React from "react";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div>
      <h2>¡Not Found!</h2>
      <img
        className={styles.image}
        src="https://res.cloudinary.com/dhwjwa7tn/image/upload/v1680987650/ups-error-404-ilustracion-concepto-robot-roto_114360-5529_lnfpvh.jpg"
        alt="Not Found"
      />
    </div>
  );
};
