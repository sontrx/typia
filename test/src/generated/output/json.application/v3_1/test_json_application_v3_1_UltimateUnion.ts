import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { UltimateUnion } from "../../../../structures/UltimateUnion";

export const test_json_application_v3_1_UltimateUnion = _test_json_application({
  version: "3.1",
  name: "UltimateUnion",
})({
  version: "3.1",
  components: {
    schemas: {
      UltimateUnion: {
        type: "array",
        items: {
          $ref: "#/components/schemas/IJsonApplication.IV3_1",
        },
      },
      "IJsonApplication.IV3_1": {
        type: "object",
        properties: {
          version: {
            const: "3.1",
          },
          components: {
            $ref: "#/components/schemas/OpenApi.IComponents",
          },
          schemas: {
            type: "array",
            items: {
              $ref: "#/components/schemas/OpenApi.IJsonSchema",
            },
          },
        },
        required: ["version", "components", "schemas"],
      },
      "OpenApi.IComponents": {
        type: "object",
        properties: {
          schemas: {
            $ref: "#/components/schemas/RecordstringOpenApi.IJsonSchema",
          },
          securitySchemes: {
            $ref: "#/components/schemas/RecordstringOpenApi.ISecurityScheme",
          },
        },
        required: ["schemas"],
      },
      "RecordstringOpenApi.IJsonSchema": {
        type: "object",
        properties: {},
        description: "Construct a type with a set of properties K of type T",
        additionalProperties: {
          $ref: "#/components/schemas/OpenApi.IJsonSchema",
        },
      },
      "OpenApi.IJsonSchema": {
        oneOf: [
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IConstant",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IBoolean",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IInteger",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.INumber",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IString",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IArray",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.ITuple",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IObject",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IReferencestring",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IOneOf",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.INull",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IUnknown",
          },
        ],
      },
      "OpenApi.IJsonSchema.IConstant": {
        type: "object",
        properties: {
          const: {
            oneOf: [
              {
                type: "string",
              },
              {
                type: "number",
              },
              {
                type: "boolean",
              },
            ],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["const"],
      },
      "OpenApi.IJsonSchema.IBoolean": {
        type: "object",
        properties: {
          default: {
            type: "boolean",
          },
          type: {
            const: "boolean",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["type"],
      },
      "OpenApi.IJsonSchema.IInteger": {
        type: "object",
        properties: {
          exclusiveMinimum: {
            type: "boolean",
          },
          exclusiveMaximum: {
            type: "boolean",
          },
          type: {
            const: "integer",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["type"],
      },
      "OpenApi.IJsonSchema.INumber": {
        type: "object",
        properties: {
          default: {
            type: "number",
          },
          minimum: {
            type: "number",
          },
          maximum: {
            type: "number",
          },
          exclusiveMinimum: {
            type: "boolean",
          },
          exclusiveMaximum: {
            type: "boolean",
          },
          multipleOf: {
            type: "number",
          },
          type: {
            const: "number",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["type"],
      },
      "OpenApi.IJsonSchema.IString": {
        type: "object",
        properties: {
          contentMediaType: {
            type: "string",
          },
          default: {
            type: "string",
          },
          enum: {
            type: "array",
            items: {
              type: "string",
            },
          },
          format: {
            type: "string",
          },
          pattern: {
            type: "string",
          },
          type: {
            const: "string",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["type"],
      },
      "OpenApi.IJsonSchema.IArray": {
        type: "object",
        properties: {
          items: {
            $ref: "#/components/schemas/OpenApi.IJsonSchema",
          },
          type: {
            const: "array",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["items", "type"],
      },
      "OpenApi.IJsonSchema.ITuple": {
        type: "object",
        properties: {
          prefixItems: {
            type: "array",
            items: {
              $ref: "#/components/schemas/OpenApi.IJsonSchema",
            },
          },
          additionalItems: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IConstant",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IBoolean",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.INumber",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IInteger",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IString",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IArray",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.ITuple",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IObject",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IReferencestring",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IOneOf",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IUnknown",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.INull",
              },
            ],
          },
          type: {
            const: "array",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["prefixItems", "additionalItems", "type"],
      },
      "OpenApi.IJsonSchema.IObject": {
        type: "object",
        properties: {
          properties: {
            $ref: "#/components/schemas/RecordstringOpenApi.IJsonSchema",
          },
          additionalProperties: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IConstant",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IBoolean",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.INumber",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IInteger",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IString",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IArray",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.ITuple",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IObject",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IReferencestring",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IOneOf",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IUnknown",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.INull",
              },
            ],
          },
          required: {
            type: "array",
            items: {
              type: "string",
            },
          },
          type: {
            const: "object",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["type"],
      },
      "OpenApi.IJsonSchema.IReferencestring": {
        type: "object",
        properties: {
          $ref: {
            type: "string",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["$ref"],
      },
      "OpenApi.IJsonSchema.IOneOf": {
        type: "object",
        properties: {
          oneOf: {
            type: "array",
            items: {
              oneOf: [
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IConstant",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IBoolean",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.INumber",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IInteger",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IString",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IArray",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.ITuple",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IReferencestring",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IUnknown",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.INull",
                },
              ],
            },
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["oneOf"],
      },
      "OpenApi.IJsonSchema.IUnknown": {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
      },
      "OpenApi.IJsonSchema.INull": {
        type: "object",
        properties: {
          type: {
            const: "null",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        required: ["type"],
      },
      "RecordstringOpenApi.ISecurityScheme": {
        type: "object",
        properties: {},
        description: "Construct a type with a set of properties K of type T",
        additionalProperties: {
          $ref: "#/components/schemas/OpenApi.ISecurityScheme",
        },
      },
      "OpenApi.ISecurityScheme": {
        oneOf: [
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IApiKey",
          },
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IHttpBasic",
          },
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IHttpBearer",
          },
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IOAuth2",
          },
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IOpenId",
          },
        ],
      },
      "OpenApi.ISecurityScheme.IApiKey": {
        type: "object",
        properties: {
          type: {
            const: "apiKey",
          },
          in: {
            oneOf: [
              {
                const: "header",
              },
              {
                const: "query",
              },
              {
                const: "cookie",
              },
            ],
          },
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
        required: ["type"],
      },
      "OpenApi.ISecurityScheme.IHttpBasic": {
        type: "object",
        properties: {
          type: {
            const: "http",
          },
          scheme: {
            const: "basic",
          },
          description: {
            type: "string",
          },
        },
        required: ["type", "scheme"],
      },
      "OpenApi.ISecurityScheme.IHttpBearer": {
        type: "object",
        properties: {
          type: {
            const: "http",
          },
          scheme: {
            const: "bearer",
          },
          bearerFormat: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
        required: ["type", "scheme"],
      },
      "OpenApi.ISecurityScheme.IOAuth2": {
        type: "object",
        properties: {
          type: {
            const: "oauth2",
          },
          flows: {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IOAuth2.IFlowSet",
          },
          description: {
            type: "string",
          },
        },
        required: ["type", "flows"],
      },
      "OpenApi.ISecurityScheme.IOAuth2.IFlowSet": {
        type: "object",
        properties: {
          authorizationCode: {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IOAuth2.IFlow",
          },
          implicit: {
            $ref: "#/components/schemas/OmitOpenApi.ISecurityScheme.IOAuth2.IFlowtokenUrl",
          },
          password: {
            $ref: "#/components/schemas/OmitOpenApi.ISecurityScheme.IOAuth2.IFlowauthorizationUrl",
          },
          clientCredentials: {
            $ref: "#/components/schemas/OmitOpenApi.ISecurityScheme.IOAuth2.IFlowauthorizationUrl",
          },
        },
      },
      "OpenApi.ISecurityScheme.IOAuth2.IFlow": {
        type: "object",
        properties: {
          authorizationUrl: {
            type: "string",
          },
          tokenUrl: {
            type: "string",
          },
          refreshUrl: {
            type: "string",
          },
          scopes: {
            $ref: "#/components/schemas/Recordstringstring",
          },
        },
      },
      Recordstringstring: {
        type: "object",
        properties: {},
        description: "Construct a type with a set of properties K of type T",
        additionalProperties: {
          type: "string",
        },
      },
      "OmitOpenApi.ISecurityScheme.IOAuth2.IFlowtokenUrl": {
        type: "object",
        properties: {
          authorizationUrl: {
            type: "string",
          },
          refreshUrl: {
            type: "string",
          },
          scopes: {
            $ref: "#/components/schemas/Recordstringstring",
          },
        },
        description:
          "Construct a type with the properties of T except for those in type K.",
      },
      "OmitOpenApi.ISecurityScheme.IOAuth2.IFlowauthorizationUrl": {
        type: "object",
        properties: {
          tokenUrl: {
            type: "string",
          },
          refreshUrl: {
            type: "string",
          },
          scopes: {
            $ref: "#/components/schemas/Recordstringstring",
          },
        },
        description:
          "Construct a type with the properties of T except for those in type K.",
      },
      "OpenApi.ISecurityScheme.IOpenId": {
        type: "object",
        properties: {
          type: {
            const: "openIdConnect",
          },
          openIdConnectUrl: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
        required: ["type", "openIdConnectUrl"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/UltimateUnion",
    },
  ],
});
