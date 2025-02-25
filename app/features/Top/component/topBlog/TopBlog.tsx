import { BlogArticle } from "@/app/types/types";
import Link from "next/link";
import React from "react";

export const TopBlog = ({ id, title, createdAt }: BlogArticle) => {
  const date = new Date(createdAt);
  const formattedDate = date.toISOString().split("T")[0];
  const formattedDate2 = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <li>
      <article>
        <Link href={`blog/${id}`}></Link>
        <time dateTime={formattedDate}>{formattedDate2}</time>
        <h3>{title}</h3>
      </article>
    </li>
  );
};
