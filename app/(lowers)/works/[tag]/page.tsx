import { TagPage } from "@/app/features/portfolio/TagPage";

type WorksTagPageProps = {
  params: Promise<{ tag: string }>;
};
export default async function WorksTagPage({ params }: WorksTagPageProps) {
  const { tag } = await params;
  return <TagPage page={"works"} tag={tag} />;
}
