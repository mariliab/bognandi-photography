import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function sanityFetch<T>({
  query,
  revalidate,
}: {
  query: string;
  revalidate?: number;
}): Promise<T> {
  try {
    return client.fetch<T>(
      query,
      {},
      {
        next: {
          revalidate: revalidate ?? 10,
        },
      }
    );
  } catch (e) {
    console.error(e);
    throw "Sanity client error";
  }
}
