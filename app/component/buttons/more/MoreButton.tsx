import Link from "next/link";
import React from "react";
import styles from "./moreButton.module.css";
const { more } = styles;

type MoreButtonProps = {
  href: string;
  text?: string;
};
export const MoreButton = ({ href, text = "more" }: MoreButtonProps) => {
  return (
    <Link href={href} className={more}>
      {text}
    </Link>
  );
};
