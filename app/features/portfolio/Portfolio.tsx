import React from "react";
import styles from "./portfolio.module.css";
import { getArticles } from "@/libs/api";
import { CategoryType, PortfolioType } from "@/app/types/types";
import { Categories } from "./components/categories/Categories";
import { Tags } from "./components/tags/Tags";
import { PortfolioArticle } from "./components/article/PortfolioArticle";
import { LowerHero } from "@/app/components/lowerHero/LowerHero";
const { cardLayout, sectionLayout } = styles;

type PortfolioProps = {
  page: CategoryType;
};

export const Portfolio = async ({ page }: PortfolioProps) => {
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
