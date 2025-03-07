import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Time } from '../component/Time';
import { BlogArticle } from '../types/types';

export const Blog = ({ id, title, createdAt, thumbnail }: BlogArticle) => {
  return (
    <li>
      <article>
        <Link href={`/blog/${id}`}></Link>
        <Image
          src={thumbnail.url}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={title}
        />
        <Time time={createdAt} />
        <h2>{title}</h2>
      </article>
    </li>
  );
};
