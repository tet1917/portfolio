import Link from 'next/link'
import React from 'react'
import styles from "./moreButton.module.css";


type MoreButtonProps = {
  href: string,
}
export const MoreButton = ({href} : MoreButtonProps) => {
  return <Link href={href} className={styles.more}>More</Link>;
};