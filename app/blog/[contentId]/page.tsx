import { getDetailBlog } from "@/libs/api";
import Image from "next/image";
import React from "react";
import styles from "./detailBlog.module.css";
import parse from "html-react-parser";
import { Time } from "@/app/component/Time";

const { detailBlog, box, thumbnailImage, bg, container, body } = styles;

const DetailBlog = async ({ params }: { params: { contentId: string } }) => {
  const contentId = params.contentId;
  const { data } = await getDetailBlog(contentId);
  const { title, createdAt, thumbnail, detail } = data;
  const reactElement = parse(detail);

  return (
    <section className={detailBlog}>
      <article>
        <div className={box}>
          <Image
            src={thumbnail.url}
            alt={title}
            width={thumbnail.width}
            height={thumbnail.height}
            className={thumbnailImage}
          />
          <Image
            src={thumbnail.url}
            alt="background"
            width={thumbnail.width}
            height={thumbnail.height}
            className={bg}
          />
        </div>
        <div className={container}>
          <h1>{title}</h1>
          <Time time={createdAt} />
          <div className={body}>{reactElement}</div>
        </div>
      </article>
    </section>
  );
};
export default DetailBlog;
