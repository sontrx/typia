import typia from "typia";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
export const test_reflect_metadata_TupleRestArray = _test_reflect_metadata(
  "TupleRestArray",
)({
  metadatas: [
    {
      any: false,
      required: true,
      optional: false,
      nullable: false,
      functional: false,
      atomics: [],
      constants: [],
      templates: [],
      escaped: null,
      rest: null,
      arrays: [],
      tuples: [
        {
          name: "TupleRestArray",
          tags: [],
        },
      ],
      objects: [],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [],
    aliases: [],
    arrays: [
      {
        name: "Array<string>",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [
            {
              type: "string",
              tags: [],
            },
          ],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [],
          tuples: [],
          objects: [],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [
      {
        name: "TupleRestArray",
        index: null,
        elements: [
          {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [
              {
                type: "boolean",
                tags: [],
              },
            ],
            constants: [],
            templates: [],
            escaped: null,
            rest: null,
            arrays: [],
            tuples: [],
            objects: [],
            aliases: [],
            natives: [],
            sets: [],
            maps: [],
          },
          {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [
              {
                type: "number",
                tags: [],
              },
            ],
            constants: [],
            templates: [],
            escaped: null,
            rest: null,
            arrays: [],
            tuples: [],
            objects: [],
            aliases: [],
            natives: [],
            sets: [],
            maps: [],
          },
          {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [],
            constants: [],
            templates: [],
            escaped: null,
            rest: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<string>",
                  tags: [],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            arrays: [],
            tuples: [],
            objects: [],
            aliases: [],
            natives: [],
            sets: [],
            maps: [],
          },
        ],
        recursive: false,
        nullables: [false],
      },
    ],
  },
});
