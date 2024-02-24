import { Blocks } from "../components/blocks";
import { frontPageQuery } from "../sanity/queries/front-page-query";

export default async function Page() {
  const data = await frontPageQuery();
  return (
    <section>
      <Blocks className="mb-20 grid gap-20" blocks={data.blocks} />
    </section>
  );
}
