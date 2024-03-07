import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { TypeGuardError } from "typia";
export const test_json_assertStringify_TupleRestAtomic =
  _test_json_assertStringify(TypeGuardError)(
    "TupleRestAtomic",
  )<TupleRestAtomic>(TupleRestAtomic)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): TupleRestAtomic => {
        const __is = (input: any): input is TupleRestAtomic => {
          return (
            Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            Array.isArray(input.slice(2)) &&
            input.slice(2).every((elem: any) => "string" === typeof elem)
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TupleRestAtomic => {
            const $guard = (typia.json.assertStringify as any).guard;
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TupleRestAtomic",
                    value: input,
                  },
                  errorFactory,
                )) &&
                ("boolean" === typeof input[0] ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "boolean",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "number",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.slice(2)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "...string",
                      value: input.slice(2),
                    },
                    errorFactory,
                  )) &&
                  input.slice(2).every(
                    (elem: any, _index1: number) =>
                      "string" === typeof elem ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + (2 + _index1) + "]",
                          expected: "string",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "...string",
                      value: input.slice(2),
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TupleRestAtomic",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: TupleRestAtomic): string => {
        const $number = (typia.json.assertStringify as any).number;
        const $string = (typia.json.assertStringify as any).string;
        const $rest = (typia.json.assertStringify as any).rest;
        return `[${input[0]},${$number(input[1])}${$rest(
          `[${input
            .slice(2)
            .map((elem: any) => $string(elem))
            .join(",")}]`,
        )}]`;
      };
      return stringify(assert(input, errorFactory));
    })(input),
  );
