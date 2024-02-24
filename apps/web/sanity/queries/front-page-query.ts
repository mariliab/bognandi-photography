import { notFound } from "next/navigation";
import type { Block } from "../fragments/block-fragments";
import { blocksFragment } from "../fragments/block-fragments";
import { sanityFetch } from "../lib/client";

type Props = {
  blocks?: Block[];
};

export async function frontPageQuery() {
  const data = await sanityFetch<Props>({ query: frontPageGroq });
  console.log("data: ", data);
  if (!data) return notFound();
  return data;
}

export const frontPageGroq = /* groq */ `*[_type == 'frontpage'][0] {
    blocks[] ${blocksFragment}
  }
`;
