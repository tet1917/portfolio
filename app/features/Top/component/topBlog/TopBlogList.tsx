import { getBlog } from "@/libs/api";
import { TopBlog } from "./TopBlog";
import styles from "./topBlog.module.css";
import React from "react";
import { BlogArticle } from "@/app/types/types";
const { list } = styles;

export const TopBlogList = async () => {
  const { data } = await getBlog();
  const articles: BlogArticle[] = data.contents;
  console.log(articles);
  return (
    <ul className={list}>
      {articles.map((article) => {
        return <TopBlog {...article} key={article.id} />;
      })}
    </ul>
  );
};
