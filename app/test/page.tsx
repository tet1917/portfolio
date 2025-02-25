import { getDevelopment } from "@/libs/api";
import React from "react";
import { DevArticle } from "../types/types";
import Image from "next/image";

const page = async () => {
  const { data } = await getDevelopment();
  const articles: DevArticle[] = data.contents;

  return (
    <div>
      {articles.map((article) => {
        const { title, thumbnail, createdAt } = article;
        return (
          <article>
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
