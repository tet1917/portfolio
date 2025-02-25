import React from "react";
import styles from "./heading.module.css";
const {commonHeading, right} = styles

type HeadingProps = {
  ja: string;
  en: string;
  isRight?: boolean
};
export const Heading = ({ ja, en, isRight }: HeadingProps) => (
  <h2 className={`${commonHeading} ${isRight ? right : null}`}>
    <span>{en}</span>
    {ja}
  </h2>
);
