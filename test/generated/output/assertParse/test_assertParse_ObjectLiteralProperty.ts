import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_assertParse } from "../../../internal/_test_assertParse";
export const test_assertParse_ObjectLiteralProperty = _test_assertParse("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: string): typia.Primitive<ObjectLiteralProperty> => { const assert = (input: any): ObjectLiteralProperty => {
    const __is = (input: any): input is ObjectLiteralProperty => {
        return "object" === typeof input && null !== input && ("string" === typeof (input as any)["something-interesting-do-you-want?"] && "string" === typeof (input as any)["or-something-crazy-do-you-want?"]);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectLiteralProperty => {
            const $guard = (typia.assertParse as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input["something-interesting-do-you-want?"] || $guard(_exceptionable, {
                path: _path + "[\"something-interesting-do-you-want?\"]",
                expected: "string",
                value: input["something-interesting-do-you-want?"]
            })) && ("string" === typeof input["or-something-crazy-do-you-want?"] || $guard(_exceptionable, {
                path: _path + "[\"or-something-crazy-do-you-want?\"]",
                expected: "string",
                value: input["or-something-crazy-do-you-want?"]
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ObjectLiteralProperty.ISomething",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ObjectLiteralProperty.ISomething",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; })(input), ObjectLiteralProperty.SPOILERS);
