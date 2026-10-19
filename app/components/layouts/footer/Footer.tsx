"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./footer.module.css";
const { footer } = styles;

export const Footer = () => {
  const pathname = usePathname();
  // トレワクの紹介ページは自前のフッターを持つ
  if (pathname.startsWith("/torewaku")) return null;
  return (
    <footer className={footer}>
      <p>© tetsu kazui</p>
    </footer>
  );
};
