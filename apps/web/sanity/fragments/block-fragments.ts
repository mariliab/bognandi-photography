import { z } from "zod";

export enum BlockTypes {
  Hero = "hero-block",
  Testimonial = "testimonial-block",
  Reusable = "reference",
}

export const heroBlockFragment = /* groq */ `{
    _type,
    type,
    title,
    subtitle,
    theme,
  }`;

export const heroBlockSchema = z.object({
  _type: z.literal(BlockTypes.Hero),
  type: z.enum(["Standard", "2-column"]),
  title: z.string().nullable(),
  subtitle: z.string().nullable().optional(),
  theme: z.string().nullable().optional(),
});

export type HeroBlock = z.infer<typeof heroBlockSchema>;

export const testimonialBlockSchema = z.object({
  _type: z.literal(BlockTypes.Testimonial),
  title: z.string().nullable(),
});

export const testimonialBlockFragment = /* groq */ `{
    _type,
    title,
  }`;

export type TestimonialBlock = z.infer<typeof testimonialBlockSchema>;

export const reusableBlockSchema = z
  .object({
    _type: z.literal(BlockTypes.Reusable),
  })
  .passthrough();

export const reusableBlockFragment = /* groq */ `{
    _type == "reference" => {
      _type,
      "reusableBlock": @->blocks[] {
      _type == '${BlockTypes.Hero}' => ${heroBlockFragment},
      }
    }
  }`;

export type ReusableBlock = z.infer<typeof reusableBlockSchema>;

export const blocksFragment = /* groq */ `{
    _type == '${BlockTypes.Hero}' => ${heroBlockFragment},
    _type == '${BlockTypes.Testimonial}' => ${testimonialBlockFragment},
  }`;

export const blockSchema = z.union([heroBlockSchema, testimonialBlockSchema]);

export type Block = z.infer<typeof blockSchema>;
