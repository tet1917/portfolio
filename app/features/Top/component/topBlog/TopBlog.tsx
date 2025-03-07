import { Time } from "@/app/component/Time";
import { BlogArticle } from "@/app/types/types";
import Link from "next/link";
import React from "react";

export const TopBlog = ({ id, title, createdAt }: BlogArticle) => {
  return (
    <li>
      <article>
        <Link href={`blog/${id}`}></Link>
        <Time time={createdAt} />
        <h3>{title}</h3>
      </article>
    </li>
  );
};
