"use client";

import { CategoryType, PortfolioType } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Modal } from "./Modal";
import styles from "./portfolioArticle.module.css";
const { card, tagsList, box } = styles;

type PortfolioArticleProps = PortfolioType & { page: CategoryType };

export const PortfolioArticle = (props: PortfolioArticleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { thumbnail, title, tags, page } = props;
  const modalOpenHandler = () => setIsOpen((prev) => !prev);
  return (
    <li className={card}>
      <button type="button" onClick={modalOpenHandler}></button>
      <article>
        <div className={box}>
          <Image
            src={thumbnail ? thumbnail.url : "/no-image.svg"}
            width={thumbnail ? thumbnail.width : 1000}
            height={thumbnail ? thumbnail.height : 600}
            alt={title}
          />
        </div>
        {page === "developments" && (
          <div className={tagsList}>
            {tags.map((tag) => (
              <Link href={`/${page}/${tag}`} key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        )}
        <h2>{title}</h2>
      </article>
      <Modal {...props} isOpen={isOpen} modalOpenHandler={modalOpenHandler} />
    </li>
  );
};
