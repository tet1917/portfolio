"use client";

import { nameFont } from "@/app/utils/fonts";
import { motion } from "framer-motion";
import styles from "./name.module.css";
const { name } = styles;

export const Name = ({ text }: { text: string }) => {
  const letters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      transition: { duration: 1 },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${nameFont.className} ${name}`}
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
