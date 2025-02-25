import Link from "next/link";
import React from "react";

type BlogType = {
  title: string;
  publishDate: string;
  id: string;
};
export const TopBlog = ({ id, title, publishDate }: BlogType) => {
  return (
    <li>
      <article>
        <Link href={`blog/${id}`}></Link>
        <h3>{title}</h3>
        <time dateTime="2025-04-04">{publishDate}</time>
      </article>
    </li>
  );
};
