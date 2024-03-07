import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";
export const test_functional_isReturn_ObjectHttpArray =
  _test_functional_isReturn("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      (input: ObjectHttpArray): ObjectHttpArray | null => {
        const result = p(input);
        return ((input: any): input is ObjectHttpArray => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.booleans) &&
            input.booleans.every((elem: any) => "boolean" === typeof elem) &&
            Array.isArray(input.bigints) &&
            input.bigints.every((elem: any) => "bigint" === typeof elem) &&
            Array.isArray(input.numbers) &&
            input.numbers.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            Array.isArray(input.strings) &&
            input.strings.every((elem: any) => "string" === typeof elem) &&
            Array.isArray(input.templates) &&
            input.templates.every(
              (elem: any) =>
                "string" === typeof elem &&
                RegExp(/^something_(.*)/).test(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
