import React from "react";
import styles from "./skill.module.css";
import Image from "next/image";

type SkillProps = {
  img: string;
  title: string;
  text: string;
};

const Skill = ({ img, title, text }: SkillProps) => {
  return (
    <li className={styles.skillItem} key={title}>
      <Image src={img} width={500} height={350} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
};

export default Skill;
