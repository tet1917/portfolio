import { DetailBlog } from "@/app/features/blog/DetailBlog";

type DetailBlogPageProps = {
  params: Promise<{ contentId: string }>;
};

export default async function DetailBlogPage({ params }: DetailBlogPageProps) {
  const { contentId } = await params;
  return <DetailBlog contentId={contentId} />;
};
