import { TopBlog } from "./TopBlog";
import styles from "./topBlog.module.css";
import React from "react";
const {list} = styles

type BlogType = {
  title: string;
  publishDate: string;
  id: string;
}; 

export const TopBlogList = () => {
  const articles: BlogType[] = [
    {
      title: "タイトルテキストタイトルテキスト",
      publishDate: "2025/04/04",
      id: "1",
    },
    {
      title: "タイトルテキストタイトルテキスト",
      publishDate: "2025/04/04",
      id: "2",
    },
    {
      title: "タイトルテキストタイトルテキスト",
      publishDate: "2025/04/04",
      id: "3",
    },
    {
      title: "タイトルテキストタイトルテキスト",
      publishDate: "2025/04/04",
      id: "4",
    },
    {
      title: "タイトルテキストタイトルテキスト",
      publishDate: "2025/04/04",
      id: "5",
    },
  ];
  return (
    <ul className={list}>
      {articles.map((article) => {
        return (
          <TopBlog {...article} key={article.id}/>
        );
      })}
    </ul>
  );
};
