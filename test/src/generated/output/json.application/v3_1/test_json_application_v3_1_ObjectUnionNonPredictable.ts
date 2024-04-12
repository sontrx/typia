import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionNonPredictable } from "../../../../structures/ObjectUnionNonPredictable";

export const test_json_application_v3_1_ObjectUnionNonPredictable =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionNonPredictable",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectUnionNonPredictable: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion",
              },
            },
          },
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerObjectUnionNonPredictable.IUnion",
            },
          },
          required: ["value"],
        },
        "IPointerObjectUnionNonPredictable.IUnion": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IUnion",
            },
          },
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IUnion": {
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperboolean",
            },
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrappernumber",
            },
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperstring",
            },
          ],
        },
        "ObjectUnionNonPredictable.IWrapperboolean": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerboolean",
            },
          },
          required: ["value"],
        },
        IPointerboolean: {
          type: "object",
          properties: {
            value: {
              type: "boolean",
            },
          },
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrappernumber": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointernumber",
            },
          },
          required: ["value"],
        },
        IPointernumber: {
          type: "object",
          properties: {
            value: {
              type: "number",
            },
          },
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrapperstring": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerstring",
            },
          },
          required: ["value"],
        },
        IPointerstring: {
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionNonPredictable",
      },
    ],
  });
