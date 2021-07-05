export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "show",
      title: "Show",
      type: "boolean",
    },
    {
      name: "URL",
      title: "Url",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https", "mailto", "tel"],
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
