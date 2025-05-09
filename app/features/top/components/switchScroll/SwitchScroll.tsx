"use client";

import { MoreButton } from "@/app/components/buttons/more/MoreButton";
import { motion, useInView } from "framer-motion";
import styles from "./switchScroll.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useIsResponsive } from "@/app/hooks/isResponsive";
const { item, box, body, container, slider, view, active } = styles;
const categories = ["works", "developments"];

type CategoryCardProps = {
  category: string;
  i: number;
};

const CategoryCard = ({ category, i }: CategoryCardProps) => {
  const isFirst = i === 0;
  const viewRef = useRef(null);
  const inView = useInView(viewRef);
  const yRatio = useIsResponsive(768) ? 0 : 30;

  return (
    <div
      className={item}
      {...(!useIsResponsive(768) ? { "data-lenis-prevent": "true" } : {})}
    >
      <div className={box}>
        <Image
          src={`/portfolio/${category}.webp`}
          alt={category}
          width={1920}
          height={1080}
          className={inView ? view : ""}
        />
      </div>
      <motion.div
        className={body}
        initial={{ y: isFirst ? `${yRatio}vmin` : `-${yRatio}vmin` }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        ref={viewRef}
      >
        <h4>{category}</h4>
        <MoreButton href={`/${category}`} text="view" />
      </motion.div>
    </div>
  );
};

export const SwitchScroll = () => {
  const containerRef = useRef(null);
  const containerView = useInView(containerRef, {
    margin: "0px 0px -100%",
  });

  return (
    <div
      className={container}
      ref={containerRef}
    >
      <div className={`${slider} ${containerView ? active : ""}`}>
        {categories.map((category, i) => (
          <CategoryCard key={i} i={i} category={category} />
        ))}
      </div>
    </div>
  );
};
