import Link from 'next/link'
import React from 'react'
import styles from "./moreButton.module.css";


type MoreButtonProps = {
  href: string,
  text?: string
}
export const MoreButton = ({href, text = 'more'} : MoreButtonProps) => {
  return (
    <Link href={href} className={styles.more}>
      {text}
    </Link>
  );
};