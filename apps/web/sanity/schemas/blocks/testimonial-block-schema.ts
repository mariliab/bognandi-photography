import { linkableSchemaTypes } from "../../variables";
import { BlockTypes } from "./block-types";

export const testimonialBlockSchema = {
  name: BlockTypes.Testimonial,
  title: "Testimonial",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
    },
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }: { title?: string }) {
      return {
        title: title || "Testimonial Block",
      };
    },
  },
};
