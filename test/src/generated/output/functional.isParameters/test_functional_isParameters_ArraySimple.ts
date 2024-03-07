import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ArraySimple } from "../../../structures/ArraySimple";
export const test_functional_isParameters_ArraySimple =
  _test_functional_isParameters("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      (input: ArraySimple): ArraySimple | null => {
        if (
          false ===
          ((input: any): input is ArraySimple => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.name &&
              "string" === typeof input.email &&
              Array.isArray(input.hobbies) &&
              input.hobbies.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              "string" === typeof input.name &&
              "string" === typeof input.body &&
              "number" === typeof input.rank &&
              Number.isFinite(input.rank);
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
