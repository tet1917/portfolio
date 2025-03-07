import { LowerHero } from "@/app/component/lowerHero/LowerHero";
import styles from "./portfolio.module.css";
import { Categories } from "@/app/component/portfolioPage/categories/Categories";
import { CategoryType, PortfolioType } from "@/app/types/types";
import { getArticles } from "@/libs/api";
import { Tags } from "@/app/component/portfolioPage/tags/Tags";
import { PortfolioArticle } from "@/app/component/portfolioPage/article/PortfolioArticle";
import { MoreButton } from "../buttons/more/MoreButton";
const { cardLayout, sectionLayout } = styles;

type TagPageProps = {
  tag: string;
  page: CategoryType;
};

export const TagPage = async ({ tag, page }: TagPageProps) => {
  const { data } = await getArticles(page);
  const articles: PortfolioType[] = data.contents;
  const filteredArticles = articles.filter((article) =>
    article.tags.includes(tag)
  );
  return (
    <>
      <LowerHero en={"portfolio"} ja={"実績"} />
      <Categories page={page} />
      <section className={sectionLayout}>
        <Tags articles={articles} currentTag={tag} page={page} />
        <ul className={cardLayout}>
          {filteredArticles.map((article) => {
            const props = { ...article, page };
            return <PortfolioArticle {...props} key={article.id} />;
          })}
        </ul>
        <MoreButton text="all" href={`/${page}`} />
      </section>
    </>
  );
};
