"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisProviderProps {
  children: React.ReactNode;
}
export const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis();

    function update(time: number) {
      lenis.raf(time);
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
