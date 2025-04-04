"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { NavLink } from "./NavLink";
import { usePathname } from "next/navigation"
const { header, hamburger, open , white } = styles;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);
  const pages = [
    { pageName: "about" },
    { pageName: "portfolio", href: "works" },
    { pageName: "blog" },
    { pageName: "contact" },
  ];
  const pathname = usePathname();
  const isPortfolioPage = pathname.includes("works") || pathname.includes("developments");

  return (
    <>
      <header className={`${header} ${isOpen ? open : ""} ${isPortfolioPage ? white : ""}`}>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <button className={hamburger} type="button" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <div>
            {pages.map((page) => (
              <NavLink {...page} handleClose={handleClose} key={page.pageName}/>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};
