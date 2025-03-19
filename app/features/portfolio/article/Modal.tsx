import React, { useRef } from "react";
import styles from "./portfolioArticle.module.css";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { CategoryType, PortfolioType } from "@/app/types/types";
const { modal, container, open, body, tagsList, linkUrl } = styles;

type ModalProps = PortfolioType & {
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

  const handleClose = () => {
    modalOpenHandler();
    setTimeout(() => (modalRef.current!.scrollTop = 0), 400);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if(!modalRef.current) {
      return
    }
    if(!modalRef.current.contains(e.target as Node)){
      handleClose()
    }
  };

  return (
    <div
      className={`${modal} ${isOpen ? open : ""}`}
      data-lenis-prevent
      onClick={handleCloseOverlay}
    >
      <div className={container} ref={modalRef}>
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
          <a href={url} target="_blank" rel="noreferrer" className={linkUrl}>
            {url}
          </a>
        )}

        <div className={body}>{reactElement}</div>
        <button type="button" onClick={handleClose}>
          close
        </button>
      </div>
    </div>
  );
};
