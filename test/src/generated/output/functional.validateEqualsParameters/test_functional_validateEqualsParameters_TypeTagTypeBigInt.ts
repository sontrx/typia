import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_functional_validateEqualsParameters_TypeTagTypeBigInt =
  _test_functional_validateEqualsParameters("TypeTagTypeBigInt")(
    TypeTagTypeBigInt,
  )(
    (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
      (
        input: TypeTagTypeBigInt,
      ): import("typia").IValidation<TypeTagTypeBigInt> => {
        const paramResults = [
          ((input: any): typia.IValidation<TypeTagTypeBigInt> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is TypeTagTypeBigInt => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "bigint" === typeof input.in64 &&
                "bigint" === typeof input.uint64 &&
                BigInt(0) <= input.uint64 &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["in64", "uint64"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              return (
                "object" === typeof input && null !== input && $io0(input, true)
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is TypeTagTypeBigInt => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "bigint" === typeof input.in64 ||
                      $report(_exceptionable, {
                        path: _path + ".in64",
                        expected: "bigint",
                        value: input.in64,
                      }),
                    ("bigint" === typeof input.uint64 &&
                      (BigInt(0) <= input.uint64 ||
                        $report(_exceptionable, {
                          path: _path + ".uint64",
                          expected: 'bigint & Type<"uint64">',
                          value: input.uint64,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".uint64",
                        expected: '(bigint & Type<"uint64">)',
                        value: input.uint64,
                      }),
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["in64", "uint64"].some((prop: any) => key === prop)
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "TypeTagTypeBigInt",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagTypeBigInt",
                    value: input,
                  })
                );
              })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
              success,
              errors,
              data: success ? input : undefined,
            } as any;
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        return {
          success: true,
          data: p(input),
          errors: [],
        };
      },
  );
