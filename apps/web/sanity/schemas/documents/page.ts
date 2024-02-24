// import { TextArea } from '@sanity/ui';
// import { RxFile } from 'react-icons/rx';

export const page = {
  name: "page",
  type: "document",
  //   icon: RxFile,
  fields: [
    { type: "blocks", name: "blocks" },
    {
      name: "title",
      type: "string",
    },
    // {
    //   name: 'description',
    //   type: 'text',
    //   components: {
    //     input: TextArea,
    //   },
    // },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'slug',
    //   type: 'slug',
    //   readOnly: true,
    // },
    {
      name: "parent",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule: any) =>
        Rule.custom((ref: any, { document }: any) => {
          if (ref?._ref === document?._id.replace("drafts.", "")) {
            return `A document can not have itself as parent`;
          }

          return true;
        }),
      options: {
        filter: ({ document }: any) => {
          if (!document._id) {
            return {
              filter: '!(_id in path("drafts.**"))',
            };
          }

          return {
            filter: `_id != '${document._id}' && !(_id in path("drafts.**"))`,
          };
        },
      },
    },
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
    prepare(props: any) {
      return props;
    },
  },
};
