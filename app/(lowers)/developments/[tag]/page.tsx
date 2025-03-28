import { TagPage } from "@/app/features/portfolio/TagPage";

type DevelopmentsTagPageProps = {
  params: Promise<{ tag: string }>
}
export default async function DevelopmentsTagPage({ params }: DevelopmentsTagPageProps) {
  const { tag } = await params;
  return <TagPage page={"developments"} tag={tag} />;
};

