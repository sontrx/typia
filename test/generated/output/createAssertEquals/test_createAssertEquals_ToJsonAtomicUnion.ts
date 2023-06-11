import typia from "../../../../src";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
export const test_createAssertEquals_ToJsonAtomicUnion = _test_assertEquals("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input: any): ToJsonAtomicUnion => {
    const __is = (input: any, _exceptionable: boolean = true): input is ToJsonAtomicUnion => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "function" === typeof input.toJSON && (1 === Object.keys(input).length || Object.keys(input).every((key: any) => {
            if (["toJSON"].some((prop: any) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ToJsonAtomicUnion => {
            const $guard = (typia.createAssertEquals as any).guard;
            const $join = (typia.createAssertEquals as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("function" === typeof input.toJSON || $guard(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            })));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ToJsonAtomicUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ToJsonAtomicUnion.IToJson",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ToJsonAtomicUnion.IToJson",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "ToJsonAtomicUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
});
