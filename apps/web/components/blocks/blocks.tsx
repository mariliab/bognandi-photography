import { PortableText } from "@portabletext/react";
import { Block, BlockTypes } from "../../sanity/fragments/block-fragments";
import { HeroBlock } from "./hero-block";
import { TestimonialBlock } from "./testimonial-block";

type Props = {
  blocks?: Block[] | null;
  className?: string;
};

function extractReusableBlocks(blocks?: Block[]): Block[] {
  // @ts-expect-error types
  return (
    blocks?.flatMap((b) =>
      b._type === "reference" ? b.reusableBlock ?? [] : b
    ) ?? []
  );
}

export function Blocks({ blocks, className }: Props) {
  if (!blocks?.length) {
    return null;
  }

  const types = {
    [BlockTypes.Testimonial]: TestimonialBlock,
    [BlockTypes.Hero]: HeroBlock,
  };

  return (
    <div className={className}>
      <PortableText
        value={extractReusableBlocks(blocks)}
        components={{ types }}
      />
    </div>
  );
}
