import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
  ],
};
