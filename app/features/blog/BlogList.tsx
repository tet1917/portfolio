import React from "react";
import { getBlog } from "@/libs/api";
import { Blog } from "./components/Blog";
import styles from "./blog.module.css";
import { BlogArticle } from "@/app/types/types";
import { LowerHero } from "@/app/components/lowerHero/LowerHero";
const { list } = styles;

export const BlogList = async() => {
  const { data } = await getBlog();
  const blogs: BlogArticle[] = data.contents;

  return (
    <>
      <LowerHero en={"blog"} ja={"ブログ"} />
      <ul className={list}>
        {blogs.map((blog) => (
          <Blog {...blog} key={blog.id} />
        ))}
      </ul>
    </>
  );
};