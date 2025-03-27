import { useEffect, useState } from "react";

export const useIsResponsive = (condition: number | "orientation") => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const breakpoint = condition === "orientation" ? h : condition;
      setIsResponsive(w < breakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [condition]);

  return isResponsive;
};
