import React from "react";
import styles from "./lowerHero.module.css";

const { hero, split, title } = styles;

type LowerHeroProps = {
  en: string;
  ja: string;
};

export const LowerHero = ({ en, ja }: LowerHeroProps) => {
  const letters = en.split("");

  return (
    <div className={hero}>
      <h1>
        <span className={split}>
          {letters.map((char, i) => (
            <span key={i} style={{ animationDelay: `${i * 150}ms` }}>
              {char}
            </span>
          ))}
        </span>
        <span className={title}>{ja}</span>
      </h1>
    </div>
  );
};
