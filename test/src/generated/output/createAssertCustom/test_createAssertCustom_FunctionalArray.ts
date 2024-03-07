import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertCustom_FunctionalArray = _test_assert(
  CustomGuardError,
)("FunctionalArray")<FunctionalArray>(FunctionalArray)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): FunctionalArray => {
    const __is = (input: any): input is FunctionalArray => {
      return (
        Array.isArray(input) &&
        input.every((elem: any) => "function" === typeof elem)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalArray => {
        const $guard = (typia.createAssert as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "FunctionalArray",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                "function" === typeof elem ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "unknown",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "FunctionalArray",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
