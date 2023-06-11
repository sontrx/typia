import typia from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_assertStringify_SetUnion = _test_assertStringify("SetUnion", SetUnion.generate, (input) => ((input: any): string => { const assert = (input: any): Array<SetUnion.Union> => {
    const __is = (input: any): input is Array<SetUnion.Union> => {
        const $io0 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age));
        return Array.isArray(input) && input.every((elem: any) => elem instanceof Set && (() => {
            const array = [...elem];
            const top = elem.values().next().value;
            if (0 === elem.size)
                return true;
            const arrayPredicators = [
                [
                    (top: any): any => "boolean" === typeof top,
                    (entire: any[]): any => entire.every((elem: any) => "boolean" === typeof elem)
                ],
                [
                    (top: any): any => "number" === typeof top && Number.isFinite(top),
                    (entire: any[]): any => entire.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))
                ],
                [
                    (top: any): any => "string" === typeof top,
                    (entire: any[]): any => entire.every((elem: any) => "string" === typeof elem)
                ],
                [
                    (top: any): any => Array.isArray(top) && top.every((elem: any) => "number" === typeof elem && Number.isFinite(elem)),
                    (entire: any[]): any => entire.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem)))
                ],
                [
                    (top: any): any => "object" === typeof top && null !== top && $io0(top),
                    (entire: any[]): any => entire.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))
                ]
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
            if (1 === passed.length)
                return passed[0][1](array);
            else if (1 < passed.length)
                for (const pred of passed)
                    if (array.every((value: any) => true === pred[0](value)))
                        return pred[1](array);
            return false;
        })());
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<SetUnion.Union> => {
            const $guard = (typia.assertStringify as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && ("number" === typeof input.age && Number.isFinite(input.age) || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            }));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "SetUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => (elem instanceof Set || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(Set<Array<number>> | Set<SetUnion.Person> | Set<boolean> | Set<number> | Set<string>)",
                value: elem
            })) && (() => {
                const array = [...elem];
                const top = elem.values().next().value;
                if (0 === elem.size)
                    return true;
                const arrayPredicators = [
                    [
                        (top: any): any => "boolean" === typeof top,
                        (entire: any[]): any => entire.every((elem: any, _index2: number) => "boolean" === typeof elem || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
                            expected: "boolean",
                            value: elem
                        }))
                    ],
                    [
                        (top: any): any => "number" === typeof top && Number.isFinite(top),
                        (entire: any[]): any => entire.every((elem: any, _index3: number) => "number" === typeof elem && Number.isFinite(elem) || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index3 + "]",
                            expected: "number",
                            value: elem
                        }))
                    ],
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any => entire.every((elem: any, _index4: number) => "string" === typeof elem || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index4 + "]",
                            expected: "string",
                            value: elem
                        }))
                    ],
                    [
                        (top: any): any => Array.isArray(top) && top.every((elem: any, _index5: number) => "number" === typeof elem && Number.isFinite(elem)),
                        (entire: any[]): any => entire.every((elem: any, _index6: number) => (Array.isArray(elem) || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index6 + "]",
                            expected: "Array<number>",
                            value: elem
                        })) && elem.every((elem: any, _index7: number) => "number" === typeof elem && Number.isFinite(elem) || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index6 + "][" + _index7 + "]",
                            expected: "number",
                            value: elem
                        })) || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index6 + "]",
                            expected: "Array<number>",
                            value: elem
                        }))
                    ],
                    [
                        (top: any): any => "object" === typeof top && null !== top && $ao0(top, _path + "[0]", false),
                        (entire: any[]): any => entire.every((elem: any, _index8: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index8 + "]",
                            expected: "SetUnion.Person",
                            value: elem
                        })) && $ao0(elem, _path + "[" + _index1 + "][" + _index8 + "]", true) || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index8 + "]",
                            expected: "SetUnion.Person",
                            value: elem
                        }))
                    ]
                ];
                const passed = arrayPredicators.filter((pred: any) => pred[0](top));
                if (1 === passed.length)
                    return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (array.every((value: any) => true === pred[0](value)))
                            return pred[1](array);
                return $guard(_exceptionable, {
                    path: _path + "[" + _index1 + "]",
                    expected: "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<SetUnion.Person>)",
                    value: elem
                });
            })() || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(Set<Array<number>> | Set<SetUnion.Person> | Set<boolean> | Set<number> | Set<string>)",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "SetUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: Array<SetUnion.Union>): string => {
    const $string = (typia.assertStringify as any).string;
    const $number = (typia.assertStringify as any).number;
    return `[${input.map((elem: any) => "{}").join(",")}]`;
}; return stringify(assert(input)); })(input), SetUnion.SPOILERS);
