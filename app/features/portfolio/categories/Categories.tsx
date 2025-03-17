import React from "react";
import styles from "./categories.module.css";
import { CategoryLink } from "./CategoryLink";
import { CategoryType } from "@/app/types/types";
const { buttons } = styles;

type CategoriesProps = {
  page: CategoryType;
};

export const Categories = ({ page }: CategoriesProps) => {
  const categories: CategoryType[] = ["works", "developments"];
  return (
    <div className={buttons}>
      {categories.map((category) => (
        <CategoryLink category={category} page={page} key={category} />
      ))}
    </div>
  );
};
