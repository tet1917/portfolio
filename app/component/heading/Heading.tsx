import React from "react";
import styles from "./heading.module.css";

type HeadingProps = {
  ja: string;
  en: string;
};
export const Heading = ({ ja, en }: HeadingProps) => (
  <h2 className={styles.commonHeading}>
    <span>{en}</span>
    {ja}
  </h2>
);
