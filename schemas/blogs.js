export default {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "notionId",
      title: "Notion ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Banner URL",
      name: "bannerUrl",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
