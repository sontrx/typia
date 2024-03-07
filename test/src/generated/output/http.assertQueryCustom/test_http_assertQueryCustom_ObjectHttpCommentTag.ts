import typia from "typia";
import { _test_http_assertQuery } from "../../../internal/_test_http_assertQuery";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_http_assertQueryCustom_ObjectHttpCommentTag =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    ((
      input: string | URLSearchParams,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<ObjectHttpCommentTag> => {
      const decode = (
        input: string | URLSearchParams,
      ): import("typia").Resolved<ObjectHttpCommentTag> => {
        const $params = (typia.http.assertQuery as any).params;
        const $number = (typia.http.assertQuery as any).number;
        const $bigint = (typia.http.assertQuery as any).bigint;
        const $string = (typia.http.assertQuery as any).string;
        input = $params(input) as URLSearchParams;
        const output = {
          int: $number(input.get("int")),
          uint64: $bigint(input.get("uint64")),
          uuid: $string(input.get("uuid")),
          items: input.getAll("items").map((elem: any) => $number(elem)),
        };
        return output as any;
      };
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectHttpCommentTag => {
        const __is = (input: any): input is ObjectHttpCommentTag => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.int &&
            Math.floor(input.int) === input.int &&
            -2147483648 <= input.int &&
            input.int <= 2147483647 &&
            "bigint" === typeof input.uint64 &&
            BigInt(0) <= input.uint64 &&
            "string" === typeof input.uuid &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.uuid,
            ) &&
            Array.isArray(input.items) &&
            10 <= input.items.length &&
            input.items.length <= 100 &&
            input.items.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpCommentTag => {
            const $guard = (typia.http.assertQuery as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.int &&
                ((Math.floor(input.int) === input.int &&
                  -2147483648 <= input.int &&
                  input.int <= 2147483647) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int",
                      expected: 'number & Type<"int32">',
                      value: input.int,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".int",
                    expected: '(number & Type<"int32">)',
                    value: input.int,
                  },
                  errorFactory,
                )) &&
              (("bigint" === typeof input.uint64 &&
                (BigInt(0) <= input.uint64 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: 'bigint & Type<"uint64">',
                      value: input.uint64,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uint64",
                    expected: '(bigint & Type<"uint64">)',
                    value: input.uint64,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.uuid &&
                (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  input.uuid,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uuid",
                      expected: 'string & Format<"uuid">',
                      value: input.uuid,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uuid",
                    expected: '(string & Format<"uuid">)',
                    value: input.uuid,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.items) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".items",
                    expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
                    value: input.items,
                  },
                  errorFactory,
                )) &&
                (10 <= input.items.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected: "Array<> & MinItems<10>",
                      value: input.items,
                    },
                    errorFactory,
                  )) &&
                (input.items.length <= 100 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected: "Array<> & MaxItems<100>",
                      value: input.items,
                    },
                    errorFactory,
                  )) &&
                input.items.every(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".items[" + _index1 + "]",
                        expected: "number",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".items",
                    expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
                    value: input.items,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpCommentTag",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpCommentTag",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output, errorFactory) as any;
    })(input, (p) => new CustomGuardError(p)),
  );
