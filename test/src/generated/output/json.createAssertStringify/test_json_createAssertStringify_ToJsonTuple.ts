import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_createAssertStringify_ToJsonTuple =
  _test_json_assertStringify(TypeGuardError)("ToJsonTuple")<ToJsonTuple>(
    ToJsonTuple,
  )(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ToJsonTuple => {
        const __is = (input: any): input is ToJsonTuple => {
          const $io0 = (input: any): boolean => true;
          const $io1 = (input: any): boolean => true;
          const $io2 = (input: any): boolean => true;
          const $io3 = (input: any): boolean => true;
          return (
            Array.isArray(input) &&
            input.length === 4 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0]) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1]) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io2(input[2]) &&
            "object" === typeof input[3] &&
            null !== input[3] &&
            $io3(input[3])
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ToJsonTuple => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              true ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".toJSON",
                  expected: "unknown",
                  value: input.toJSON,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              true ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".toJSON",
                  expected: "unknown",
                  value: input.toJSON,
                },
                errorFactory,
              );
            const $ao2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              true ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".toJSON",
                  expected: "unknown",
                  value: input.toJSON,
                },
                errorFactory,
              );
            const $ao3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              true ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".toJSON",
                  expected: "unknown",
                  value: input.toJSON,
                },
                errorFactory,
              );
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonTuple",
                    value: input,
                  },
                  errorFactory,
                )) &&
                (input.length === 4 ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "[ToJsonTuple.IToJson<string>, ToJsonTuple.IToJson<number>, ToJsonTuple.IToJson<boolean>, ToJsonTuple.IObject]",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[0] && null !== input[0]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "ToJsonTuple.IToJson<string>",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                  $ao0(input[0], _path + "[0]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "ToJsonTuple.IToJson<string>",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[1] && null !== input[1]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "ToJsonTuple.IToJson<number>",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                  $ao1(input[1], _path + "[1]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "ToJsonTuple.IToJson<number>",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[2] && null !== input[2]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "ToJsonTuple.IToJson<boolean>",
                      value: input[2],
                    },
                    errorFactory,
                  )) &&
                  $ao2(input[2], _path + "[2]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "ToJsonTuple.IToJson<boolean>",
                      value: input[2],
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[3] && null !== input[3]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[3]",
                      expected: "ToJsonTuple.IObject",
                      value: input[3],
                    },
                    errorFactory,
                  )) &&
                  $ao3(input[3], _path + "[3]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[3]",
                      expected: "ToJsonTuple.IObject",
                      value: input[3],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ToJsonTuple",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ToJsonTuple): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        const $number = (typia.json.createAssertStringify as any).number;
        return `[${$string(input[0].toJSON())},${$number(
          input[1].toJSON(),
        )},${input[2].toJSON()},${`{"code":${$string(
          (input[3].toJSON() as any).code,
        )},"name":${$string((input[3].toJSON() as any).name)}}`}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
