// import { RxVercelLogo } from 'react-icons/rx';

import { linkableSchemaTypes } from "../../variables";
import { BlockTypes } from "./block-types";

export const heroBlockSchema = {
  name: BlockTypes.Hero,
  title: "Hero",
  //   icon: RxVercelLogo,
  type: "object",
  fields: [
    {
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Standard", value: "Standard" },
          { title: "Two Column", value: "2-column" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "Standard",
    },
    {
      name: "theme",
      type: "string",
      options: {
        list: [
          { title: "Regular", value: "regular" },
          { title: "Alt", value: "alt" },
          { title: "Inverted", value: "inverted" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "regular",
      hidden: ({ parent }: any) => {
        if (parent.type === "2-column") {
          return false;
        } else {
          return true;
        }
      },
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Sub title",
      type: "string",
    },
    {
      name: "link",
      type: "reference",
      to: Array.from(linkableSchemaTypes).map((type: string) => ({ type })),
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: "title", type: "type" },
    prepare({ title, type }: { title?: string; type?: string }) {
      return {
        title: title || "Hero Block",
        subtitle: type + " Hero Block",
      };
    },
  },
};
