export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "reference",
      to: { type: "projectType" },
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
      name: "websiteUrl",
      title: "Website Url",
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
