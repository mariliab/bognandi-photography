import { heroBlockSchema } from "./hero-block-schema";
import { testimonialBlockSchema } from "./testimonial-block-schema";

export const blockTypes = [heroBlockSchema, testimonialBlockSchema].sort(
  (a, b) => (a.name ?? "").localeCompare(b.name ?? "")
);

export const blocks = {
  name: "blocks",
  type: "array",
  of: [
    ...blockTypes.map((type) => ({
      type: type.name ?? "",
    })),
    // {
    //   type: 'reference',
    //   to: [{ type: 'reusable-block' }],
    //   preview: {
    //     prepare() {
    //       return { title: 'Reusable Block' };
    //     },
    //   },
    // },
  ],
};
