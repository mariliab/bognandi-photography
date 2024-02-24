// import { RxHome } from 'react-icons/rx';

export const frontpage = {
  name: "frontpage",
  title: "Frontpage",
  type: "document",
  //   icon: RxHome,
  fields: [
    { type: "blocks", name: "blocks" },
    // { type: "slug", name: "slug", hidden: true },
  ],
  preview: {
    // select: { subtitle: "slug.current" },
    prepare({ subtitle }: any) {
      return {
        title: "Frontpage",
        subtitle,
      };
    },
  },
};
