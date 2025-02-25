import Top from "./features/Top/page";
import { getDevelopment } from "@/libs/api";
import { client } from "@/libs/client";

export default async function Home() {

  return (
    <div>
      <Top/>
    </div>
  );
}
