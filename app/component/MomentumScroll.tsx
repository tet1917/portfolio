"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

interface MomentumScrollProps {
  children: React.ReactNode;
}

export const MomentumScroll = ({ children }: MomentumScrollProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current!,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
