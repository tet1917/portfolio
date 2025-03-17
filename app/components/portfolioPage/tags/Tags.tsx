import Link from "next/link";
import React from "react";
import styles from "./tags.module.css";
import { CategoryType, DevArticle } from "@/app/types/types";
import { getTags } from "@/app/hooks/getTags";
const { tagsList, isCurrentTag } = styles;

type TagsProps = {
  articles: DevArticle[];
  currentTag?: string;
  page: CategoryType;
};
export const Tags = ({ articles, currentTag, page }: TagsProps) => {
  const tags = getTags(articles);
  return (
    <div className={tagsList}>
      {tags.map((tag) => {
        const isCurrent = currentTag && currentTag === tag;        
        return (
          <Link
            href={`/${page}/${tag}`}
            key={tag}
            className={isCurrent ? isCurrentTag : ""}
          >
            {tag}
          </Link>
        );
      })}
    </div>
  );
};
