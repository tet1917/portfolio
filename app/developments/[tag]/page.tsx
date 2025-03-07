import { TagPage } from "@/app/component/portfolioPage/TagPage";
import React from "react";

const DevelopmentsTagPage = async ({
  params,
}: {
  params: Promise<{ tag: string }>;
}) => {
  const {tag} = await params;
  return <TagPage page={"developments"} tag={tag} />;
};

export default DevelopmentsTagPage;
