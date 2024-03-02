import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_protobuf_assertDecode_TypeTagCustom =
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )({
    decode: (input) =>
      ((
        input: Uint8Array,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): typia.Resolved<TypeTagCustom> => {
        const decode = (input: Uint8Array): typia.Resolved<TypeTagCustom> => {
          const $Reader = (typia.protobuf.assertDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              id: "" as any,
              dollar: "" as any,
              postfix: "" as any,
              powerOf: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // string;
                  output.id = reader.string();
                  break;
                case 2:
                  // string;
                  output.dollar = reader.string();
                  break;
                case 3:
                  // string;
                  output.postfix = reader.string();
                  break;
                case 4:
                  // double;
                  output.powerOf = reader.double();
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const reader = new $Reader(input);
          return $pdo0(reader);
        };
        const assert = (
          input: any,
          errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
        ): TypeTagCustom => {
          const __is = (input: any): input is TypeTagCustom => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                (input as any).id,
              ) &&
              "string" === typeof (input as any).dollar &&
              (input as any).dollar[0] === "$" &&
              !isNaN(
                Number((input as any).dollar.substring(1).split(",").join("")),
              ) &&
              "string" === typeof (input as any).postfix &&
              (input as any).postfix.endsWith("abcd") &&
              "number" === typeof (input as any).powerOf &&
              Number.isFinite((input as any).powerOf) &&
              (() => {
                const denominator: number = Math.log(2);
                const value: number =
                  Math.log((input as any).powerOf) / denominator;
                return Math.abs(value - Math.round(value)) < 1e-8;
              })()
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagCustom => {
              const $guard = (typia.protobuf.assertDecode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("string" === typeof input.id &&
                  (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".id",
                        expected: 'string & Format<"uuid">',
                        value: input.id,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: '(string & Format<"uuid">)',
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.dollar &&
                  ((input.dollar[0] === "$" &&
                    !isNaN(
                      Number(input.dollar.substring(1).split(",").join("")),
                    )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".dollar",
                        expected: "string & Dollar",
                        value: input.dollar,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".dollar",
                      expected: "(string & Dollar)",
                      value: input.dollar,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.postfix &&
                  (input.postfix.endsWith("abcd") ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".postfix",
                        expected: 'string & Postfix<"abcd">',
                        value: input.postfix,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".postfix",
                      expected: '(string & Postfix<"abcd">)',
                      value: input.postfix,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.powerOf &&
                  (Number.isFinite(input.powerOf) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".powerOf",
                        expected: "number",
                        value: input.powerOf,
                      },
                      errorFactory,
                    )) &&
                  ((() => {
                    const denominator: number = Math.log(2);
                    const value: number = Math.log(input.powerOf) / denominator;
                    return Math.abs(value - Math.round(value)) < 1e-8;
                  })() ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".powerOf",
                        expected: "number & PowerOf<2>",
                        value: input.powerOf,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".powerOf",
                      expected: "(number & PowerOf<2>)",
                      value: input.powerOf,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TypeTagCustom",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagCustom",
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
      })(input),
    encode: (input: TypeTagCustom): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "id";
          writer.uint32(10);
          writer.string(input.id);
          // property "dollar";
          writer.uint32(18);
          writer.string(input.dollar);
          // property "postfix";
          writer.uint32(26);
          writer.string(input.postfix);
          // property "powerOf";
          writer.uint32(33);
          writer.double(input.powerOf);
        };
        //TypeTagCustom;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
