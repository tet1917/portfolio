'use client'
import dynamic from "next/dynamic";

const Parallax = dynamic(
  () => import("./Parallax").then((mod) => mod.Parallax),
  { ssr: false }
);

export const ClientParallax = () => {
  return <Parallax />;
};
