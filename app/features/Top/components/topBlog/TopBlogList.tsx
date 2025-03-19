import styles from "./topBlog.module.css";
import React from "react";
import { BlogArticle } from "@/app/types/types";
import { getHomeBlog } from "@/libs/api";
import { TopBlog } from "./TopBlog";
const { list } = styles;

export const TopBlogList = async () => {
  const { data } = await getHomeBlog();
  const articles: BlogArticle[] = data.contents;

  return (
    <ul className={list}>
      {articles.map((article) => {
        return <TopBlog {...article} key={article.id} />;
      })}
    </ul>
  );
};
