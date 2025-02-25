export type DevArticle = {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  tags: string[];
  createdAt: string;
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
