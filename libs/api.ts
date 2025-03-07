import { CategoryType } from "@/app/types/types";
import { client } from "./client";

export const getArticles = async (page: CategoryType) => {
  const data = await client.get({ endpoint: page });
  return { data };
};

export const getHomeBlog = async () => {
  const data = await client.get({ endpoint: "blog", queries: { limit: 5 } });
  return { data };
};

export const getBlog = async () => {
  const data = await client.get({ endpoint: "blog" });
  return { data };
};

export const getDetailBlog = async (contentId: string) => {
  const data = await client.getListDetail({
    endpoint: "blog",
    contentId: contentId,
  });
  return { data };
};
