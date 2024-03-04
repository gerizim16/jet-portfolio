import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "home",
      type: "document",
      fields: [
        {
          name: "image",
          type: "image",
        },
      ],
    },
    {
      name: "portfolio",
      type: "document",
      fields: [
        {
          name: "images",
          type: "array",
          of: [
            {
              name: "image",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "about",
      type: "document",
      fields: [
        {
          title: "content",
          name: "content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "image",
          type: "image",
        },
      ],
    },
  ],
};
