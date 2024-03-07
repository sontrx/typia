import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../../../structures/ObjectUnionExplicitPointer";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectUnionExplicitPointer =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUnionExplicitPointer",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionExplicitPointer",
      },
    ],
    components: {
      schemas: {
        ObjectUnionExplicitPointer: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IPointerObjectUnionExplicitPointer.Shape",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "IPointerObjectUnionExplicitPointer.Shape": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.Shape",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicitPointer.Shape": {
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpointObjectUnionExplicitPointer.IPoint",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorlineObjectUnionExplicitPointer.ILine",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatortriangleObjectUnionExplicitPointer.ITriangle",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorrectangleObjectUnionExplicitPointer.IRectangle",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpolylineObjectUnionExplicitPointer.IPolyline",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpolygonObjectUnionExplicitPointer.IPolygon",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorcircleObjectUnionExplicitPointer.ICircle",
            },
          ],
        },
        "ObjectUnionExplicitPointer.DiscriminatorpointObjectUnionExplicitPointer.IPoint":
          {
            type: "object",
            properties: {
              x: {
                type: "number",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              y: {
                type: "number",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["point"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            nullable: false,
            required: ["x", "y", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.DiscriminatorlineObjectUnionExplicitPointer.ILine":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["line"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            nullable: false,
            required: ["p1", "p2", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.IPoint": {
          type: "object",
          properties: {
            x: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            y: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["x", "y"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicitPointer.DiscriminatortriangleObjectUnionExplicitPointer.ITriangle":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["triangle"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            nullable: false,
            required: ["p1", "p2", "p3", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.DiscriminatorrectangleObjectUnionExplicitPointer.IRectangle":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p4: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["rectangle"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            nullable: false,
            required: ["p1", "p2", "p3", "p4", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.DiscriminatorpolylineObjectUnionExplicitPointer.IPolyline":
          {
            type: "object",
            properties: {
              points: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                },
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["polyline"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            nullable: false,
            required: ["points", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.DiscriminatorpolygonObjectUnionExplicitPointer.IPolygon":
          {
            type: "object",
            properties: {
              outer: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPolyline",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              inner: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPolyline",
                },
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["polygon"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            nullable: false,
            required: ["outer", "inner", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["points"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicitPointer.DiscriminatorcircleObjectUnionExplicitPointer.ICircle":
          {
            type: "object",
            properties: {
              centroid: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              radius: {
                type: "number",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["circle"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            nullable: false,
            required: ["centroid", "radius", "type"],
            "x-typia-jsDocTags": [],
          },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
