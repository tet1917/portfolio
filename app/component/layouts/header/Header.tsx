import React from 'react'
import Image  from 'next/image'
import Link  from 'next/link'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <nav>
        <Link href="about">about</Link>
        <Link href="portfolio">portfolio</Link>
        <Link href="blog">blog</Link>
        <Link href="contact">contact</Link>
      </nav>
    </header>
  );
}

export default Header