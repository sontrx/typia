import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { DynamicSimple } from "../../../structures/DynamicSimple";
export const test_functional_isFunction_DynamicSimple =
  _test_functional_isFunction("DynamicSimple")(DynamicSimple)(
    (p: (input: DynamicSimple) => DynamicSimple) =>
      (input: DynamicSimple): DynamicSimple | null => {
        if (
          false ===
          ((input: any): input is DynamicSimple => {
            const $io0 = (input: any): boolean =>
              "object" === typeof input.value &&
              null !== input.value &&
              false === Array.isArray(input.value) &&
              $io1(input.value);
            const $io1 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return "number" === typeof value && Number.isFinite(value);
              });
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is DynamicSimple => {
          const $io0 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            false === Array.isArray(input.value) &&
            $io1(input.value);
          const $io1 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return "number" === typeof value && Number.isFinite(value);
            });
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
