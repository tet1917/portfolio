export type PortfolioType = {
  id: string;
  title: string;
  description: string;
  url?: string;
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
  tags: string[];
};

export type BlogArticle = {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  detail: string;
};

export type CategoryType = "works" | "developments";
