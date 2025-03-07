import React from "react";
import styles from "./portfolio.module.css";
import { getArticles } from "@/libs/api";
import { CategoryType, PortfolioType } from "@/app/types/types";
import { LowerHero } from "../lowerHero/LowerHero";
import { Categories } from "./categories/Categories";
import { Tags } from "./tags/Tags";
import { PortfolioArticle } from "./article/PortfolioArticle";
const { cardLayout, sectionLayout } = styles;

type PortfolioPageProps = {
  page: CategoryType;
};

export const PortfolioPage = async ({ page }: PortfolioPageProps) => {
  const { data } = await getArticles(page);
  const articles: PortfolioType[] = data.contents;

  return (
    <>
      <LowerHero en={"portfolio"} ja={"実績"} />
      <Categories page={page} />
      <section className={sectionLayout}>
        <Tags articles={articles} page={page} />

        <ul className={cardLayout}>
          {articles.map((article) => {
            const props = { ...article, page };
            return <PortfolioArticle {...props} key={article.id} />;
          })}
        </ul>
      </section>
    </>
  );
};
