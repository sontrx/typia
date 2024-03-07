import typia from "typia";
import { TypeTagAtomicUnion } from "../../../../structures/TypeTagAtomicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_TypeTagAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagAtomicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagAtomicUnion",
      },
    ],
    components: {
      schemas: {
        TypeTagAtomicUnion: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagAtomicUnion.Type",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagAtomicUnion.Type": {
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "string",
                  maxLength: 7,
                  minLength: 3,
                  "x-typia-typeTags": [
                    {
                      target: "string",
                      name: "MinLength<3>",
                      kind: "minLength",
                      value: 3,
                      validate: "3 <= $input.length",
                      exclusive: true,
                    },
                    {
                      target: "string",
                      name: "MaxLength<7>",
                      kind: "maxLength",
                      value: 7,
                      validate: "$input.length <= 7",
                      exclusive: true,
                    },
                  ],
                },
                {
                  type: "number",
                  minimum: 3,
                  "x-typia-typeTags": [
                    {
                      target: "number",
                      name: "Minimum<3>",
                      kind: "minimum",
                      value: 3,
                      validate: "3 <= $input",
                      exclusive: ["minimum", "exclusiveMinimum"],
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
