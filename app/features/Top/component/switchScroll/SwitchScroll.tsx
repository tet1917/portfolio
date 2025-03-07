"use client";

import { MoreButton } from "@/app/component/buttons/more/MoreButton";
import { motion } from "framer-motion";
import styles from "./switchScroll.module.css";
const { item, box, body, container, slider } = styles;
const categories = ["works", "developments"];

type CategoryCardProps = {
  category: string;
  i: number;
};

const CategoryCard = ({ category, i }: CategoryCardProps) => {
  const isFirst = i === 0;

  return (
    <div className={item}>
      <div className={box}>
        <motion.img
          src={`/portfolio/${category}.jpg`}
          alt={category}
          initial={{ y: isFirst ? "20vh" : "-20vh" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.img>
      </div>
      <motion.div
        className={body}
        initial={{ y: isFirst ? "30vh" : "-30vh" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h4>{category}</h4>
        <MoreButton href={`/${category}`} text="view" />
      </motion.div>
    </div>
  );
};

export const SwitchScroll = () => {
  return (
    <div className={container} data-lenis-prevent>
      <div className={slider}>
        {categories.map((category, i) => (
          <CategoryCard key={i} i={i} category={category} />
        ))}
      </div>
    </div>
  );
};
