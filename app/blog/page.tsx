import React from "react";
import { LowerHero } from "../components/lowerHero/LowerHero";
import { BlogArticle } from "../types/types";
import { getBlog } from "@/libs/api";
import { Blog } from "./Blog";
import styles from "./blog.module.css";
const { list } = styles;

const BlogList = async () => {
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
export default BlogList;
