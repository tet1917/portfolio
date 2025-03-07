import Link from "next/link";
import React from "react";
import styles from "./categories.module.css";
import { CategoryType } from "@/app/types/types";
const { current } = styles;

type CategoryLinkProps = {
  category: CategoryType;
  page: CategoryType;
};

export const CategoryLink = ({ category, page }: CategoryLinkProps) => {
  const isPage = page === category;
  return (
    <Link href={`/${category}`} className={isPage ? current : ""}>
      {category}
    </Link>
  );
};
