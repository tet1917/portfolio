"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./parallax.module.css";
const { item } = styles;

interface ParallaxImageProps {
  src: string;
  speed: number;
}

export const ParallaxImage = ({ src, speed }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);

  return (
    <motion.div ref={ref} className={item} style={{ y }}>
      <motion.img src={src} alt="" style={{ scale }} />
    </motion.div>
  );
};
