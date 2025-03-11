'use client'
import dynamic from "next/dynamic";

const SwitchScroll = dynamic(
  () => import("./SwitchScroll").then((mod) => mod.SwitchScroll),
  { ssr: false }
);

export const ClientSwitchScroll = () => {
  return <SwitchScroll />;
};
