import typia from "typia";
import { ObjectDescription } from "../../../../structures/ObjectDescription";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ObjectDescription =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectDescription",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectDescription",
      },
    ],
    components: {
      schemas: {
        ObjectDescription: {
          $id: "#/components/schemas/ObjectDescription",
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              title: "Primary Key",
              description: "Primary Key.",
            },
            deprecated: {
              type: "boolean",
              deprecated: true,
              title: "Deprecated property",
              description:
                "Deprecated property.\n\nIf `@deprecated` comment tag being utilized, the property will be marked\nas deprecated in the JSON scheam.",
            },
            title: {
              type: "string",
              title: "This is the title",
              description:
                "Title tag can replace the first line of the comment.",
            },
            descriptions: {
              type: "array",
              items: {
                type: "string",
              },
              title: "Description property",
              description:
                'Description property.\n\nIf you write first line and the first line ends with "." character,\nit would be considered as the title. By the way, description does\nnot exclusive the title, so that full content be written.',
            },
            newLine: {
              type: "number",
              description:
                'New line before dot character\n\nIf dot character (".") being used before the first new line, it would not\nbe considered as title in the JSON schema.',
            },
          },
          required: ["id", "deprecated", "title", "descriptions", "newLine"],
          title: "This is the title of object type",
          description:
            "An interface designed to test JSON schema's object description.",
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
