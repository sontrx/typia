import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_assert_ConstantAtomicWrapper = _test_assert(TypeGuardError)(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ConstantAtomicWrapper => {
    const __is = (input: any): input is ConstantAtomicWrapper => {
      const $io0 = (input: any): boolean => "boolean" === typeof input.value;
      const $io1 = (input: any): boolean =>
        "number" === typeof input.value && Number.isFinite(input.value);
      const $io2 = (input: any): boolean => "string" === typeof input.value;
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1]) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io2(input[2])
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicWrapper => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "boolean" === typeof input.value ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "boolean",
              value: input.value,
            },
            errorFactory,
          );
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("number" === typeof input.value && Number.isFinite(input.value)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "number",
              value: input.value,
            },
            errorFactory,
          );
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "string" === typeof input.value ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            },
            errorFactory,
          );
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantAtomicWrapper",
                value: input,
              },
              errorFactory,
            )) &&
            (input.length === 3 ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                  value: input,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[0] && null !== input[0]) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "ConstantAtomicWrapper.IPointer<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
              $ao0(input[0], _path + "[0]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "ConstantAtomicWrapper.IPointer<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[1] && null !== input[1]) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "ConstantAtomicWrapper.IPointer<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
              $ao1(input[1], _path + "[1]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "ConstantAtomicWrapper.IPointer<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[2] && null !== input[2]) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "ConstantAtomicWrapper.IPointer<string>",
                  value: input[2],
                },
                errorFactory,
              )) &&
              $ao2(input[2], _path + "[2]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "ConstantAtomicWrapper.IPointer<string>",
                  value: input[2],
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ConstantAtomicWrapper",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input),
);
