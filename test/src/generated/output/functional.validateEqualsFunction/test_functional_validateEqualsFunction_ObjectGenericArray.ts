import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../../internal/_test_functional_validateEqualsFunction";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_functional_validateEqualsFunction_ObjectGenericArray =
  _test_functional_validateEqualsFunction("ObjectGenericArray")(
    ObjectGenericArray,
  )(
    (p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      (
        input: ObjectGenericArray,
      ): import("typia").IValidation<ObjectGenericArray> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectGenericArray> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ObjectGenericArray => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "object" === typeof input.pagination &&
                null !== input.pagination &&
                $io1(input.pagination, true && _exceptionable) &&
                Array.isArray(input.data) &&
                input.data.every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io2(elem, true && _exceptionable),
                ) &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["pagination", "data"].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io1 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "number" === typeof input.page &&
                Number.isFinite(input.page) &&
                "number" === typeof input.limit &&
                Number.isFinite(input.limit) &&
                "number" === typeof input.total_count &&
                Number.isFinite(input.total_count) &&
                "number" === typeof input.total_pages &&
                Number.isFinite(input.total_pages) &&
                (4 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["page", "limit", "total_count", "total_pages"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io2 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age) &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["name", "age"].some((prop: any) => key === prop))
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
                typia.functional.validateEqualsFunction as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ObjectGenericArray => {
                const $join = (typia.functional.validateEqualsFunction as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ((("object" === typeof input.pagination &&
                      null !== input.pagination) ||
                      $report(_exceptionable, {
                        path: _path + ".pagination",
                        expected: "ObjectGenericArray.IPagination",
                        value: input.pagination,
                      })) &&
                      $vo1(
                        input.pagination,
                        _path + ".pagination",
                        true && _exceptionable,
                      )) ||
                      $report(_exceptionable, {
                        path: _path + ".pagination",
                        expected: "ObjectGenericArray.IPagination",
                        value: input.pagination,
                      }),
                    ((Array.isArray(input.data) ||
                      $report(_exceptionable, {
                        path: _path + ".data",
                        expected: "Array<ObjectGenericArray.IPerson>",
                        value: input.data,
                      })) &&
                      input.data
                        .map(
                          (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".data[" + _index1 + "]",
                                expected: "ObjectGenericArray.IPerson",
                                value: elem,
                              })) &&
                              $vo2(
                                elem,
                                _path + ".data[" + _index1 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".data[" + _index1 + "]",
                              expected: "ObjectGenericArray.IPerson",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".data",
                        expected: "Array<ObjectGenericArray.IPerson>",
                        value: input.data,
                      }),
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["pagination", "data"].some(
                              (prop: any) => key === prop,
                            )
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
                const $vo1 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.page &&
                      Number.isFinite(input.page)) ||
                      $report(_exceptionable, {
                        path: _path + ".page",
                        expected: "number",
                        value: input.page,
                      }),
                    ("number" === typeof input.limit &&
                      Number.isFinite(input.limit)) ||
                      $report(_exceptionable, {
                        path: _path + ".limit",
                        expected: "number",
                        value: input.limit,
                      }),
                    ("number" === typeof input.total_count &&
                      Number.isFinite(input.total_count)) ||
                      $report(_exceptionable, {
                        path: _path + ".total_count",
                        expected: "number",
                        value: input.total_count,
                      }),
                    ("number" === typeof input.total_pages &&
                      Number.isFinite(input.total_pages)) ||
                      $report(_exceptionable, {
                        path: _path + ".total_pages",
                        expected: "number",
                        value: input.total_pages,
                      }),
                    4 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "page",
                              "limit",
                              "total_count",
                              "total_pages",
                            ].some((prop: any) => key === prop)
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
                const $vo2 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    ("number" === typeof input.age &&
                      Number.isFinite(input.age)) ||
                      $report(_exceptionable, {
                        path: _path + ".age",
                        expected: "number",
                        value: input.age,
                      }),
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (["name", "age"].some((prop: any) => key === prop))
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
                      expected: "ObjectGenericArray",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectGenericArray",
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
        const result = ((input: any): typia.IValidation<ObjectGenericArray> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectGenericArray => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.pagination &&
              null !== input.pagination &&
              $io1(input.pagination, true && _exceptionable) &&
              Array.isArray(input.data) &&
              input.data.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["pagination", "data"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.page &&
              Number.isFinite(input.page) &&
              "number" === typeof input.limit &&
              Number.isFinite(input.limit) &&
              "number" === typeof input.total_count &&
              Number.isFinite(input.total_count) &&
              "number" === typeof input.total_pages &&
              Number.isFinite(input.total_pages) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["page", "limit", "total_count", "total_pages"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["name", "age"].some((prop: any) => key === prop))
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
              typia.functional.validateEqualsFunction as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectGenericArray => {
              const $join = (typia.functional.validateEqualsFunction as any)
                .join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((("object" === typeof input.pagination &&
                    null !== input.pagination) ||
                    $report(_exceptionable, {
                      path: _path + ".pagination",
                      expected: "ObjectGenericArray.IPagination",
                      value: input.pagination,
                    })) &&
                    $vo1(
                      input.pagination,
                      _path + ".pagination",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".pagination",
                      expected: "ObjectGenericArray.IPagination",
                      value: input.pagination,
                    }),
                  ((Array.isArray(input.data) ||
                    $report(_exceptionable, {
                      path: _path + ".data",
                      expected: "Array<ObjectGenericArray.IPerson>",
                      value: input.data,
                    })) &&
                    input.data
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".data[" + _index1 + "]",
                              expected: "ObjectGenericArray.IPerson",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + ".data[" + _index1 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".data[" + _index1 + "]",
                            expected: "ObjectGenericArray.IPerson",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".data",
                      expected: "Array<ObjectGenericArray.IPerson>",
                      value: input.data,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["pagination", "data"].some(
                            (prop: any) => key === prop,
                          )
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
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.page &&
                    Number.isFinite(input.page)) ||
                    $report(_exceptionable, {
                      path: _path + ".page",
                      expected: "number",
                      value: input.page,
                    }),
                  ("number" === typeof input.limit &&
                    Number.isFinite(input.limit)) ||
                    $report(_exceptionable, {
                      path: _path + ".limit",
                      expected: "number",
                      value: input.limit,
                    }),
                  ("number" === typeof input.total_count &&
                    Number.isFinite(input.total_count)) ||
                    $report(_exceptionable, {
                      path: _path + ".total_count",
                      expected: "number",
                      value: input.total_count,
                    }),
                  ("number" === typeof input.total_pages &&
                    Number.isFinite(input.total_pages)) ||
                    $report(_exceptionable, {
                      path: _path + ".total_pages",
                      expected: "number",
                      value: input.total_pages,
                    }),
                  4 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["page", "limit", "total_count", "total_pages"].some(
                            (prop: any) => key === prop,
                          )
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
              const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  ("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "number",
                      value: input.age,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (["name", "age"].some((prop: any) => key === prop))
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
                    expected: "ObjectGenericArray",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectGenericArray",
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
