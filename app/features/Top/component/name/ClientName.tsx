"use client";
import dynamic from "next/dynamic";

const Name = dynamic(() => import("./Name").then((mod) => mod.Name), {
  ssr: false,
});

export const ClientName = (props: { text: string }) => {
  return <Name {...props} />;
};
