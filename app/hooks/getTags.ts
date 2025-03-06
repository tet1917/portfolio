import { PortfolioType } from "../types/types";

export const getTags = (articles: PortfolioType[]) => {
  const tags = [...new Set(articles.flatMap((article) => article.tags))];
  return tags;
};