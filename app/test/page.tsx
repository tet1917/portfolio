import { getBlog } from "@/libs/api";
import React from "react";
import { BlogArticle } from "../types/types";
import Image from "next/image";

const page = async () => {
  const { data } = await getBlog();
  const articles: BlogArticle[] = data.contents;

  return (
    <div>
      {articles.map((article) => {
        const { title, thumbnail, createdAt } = article;
        return (
          <article key={article.id}>
            <p>{title}</p>
            <Image
              src={thumbnail.url}
              width={thumbnail.width}
              height={thumbnail.height}
              alt=""
            />
            <p>{new Date(createdAt).toLocaleString()}</p>
          </article>
        );
      })}
    </div>
  );
};

export default page;
