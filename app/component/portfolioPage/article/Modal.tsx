import React from "react";
import styles from "./portfolioArticle.module.css";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { CategoryType,  PortfolioType } from "@/app/types/types";
const { modal, container, open, body, tagsList, linkUrl } = styles;

type ModalProps =  PortfolioType & {
    isOpen: boolean;
    modalOpenHandler: () => void;
    page: CategoryType;
  };

export const Modal = (props: ModalProps) => {
  const {
    title,
    description,
    thumbnail,
    tags,
    url,
    isOpen,
    modalOpenHandler,
    page,
  } = props;
  const reactElement = parse(description);

  return (
    <div className={`${modal} ${isOpen ? open : ""}`} data-lenis-prevent>
      <div className={container}>
        <Image
          src={thumbnail ? thumbnail.url : "/no-image.svg"}
          width={thumbnail ? thumbnail.width : 1000}
          height={thumbnail ? thumbnail.height : 600}
          alt={title}
        />
        <h2>{title}</h2>

        {page === "developments" && (
          <div className={tagsList}>
            {tags.map((tag) => (
              <Link href={`/${page}/${tag}`} key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        )}

        {url && (
          <a
            href={`https://${url}`}
            target="_blank"
            rel="noreferrer"
            className={linkUrl}
          >
            {url}
          </a>
        )}

        <div className={body}>{reactElement}</div>
        <button type="button" onClick={modalOpenHandler}>
          close
        </button>
      </div>
    </div>
  );
};
