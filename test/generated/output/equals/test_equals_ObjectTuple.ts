import typia from "../../../../src";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_equals } from "../../../internal/_test_equals";
export const test_equals_ObjectTuple = _test_equals("ObjectTuple", ObjectTuple.generate, (input) => ((input: any, _exceptionable: boolean = true): input is [ObjectTuple.ISection, ObjectTuple.ICitizen] => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && (3 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["id", "code", "name"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name && (3 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["id", "mobile", "name"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && (input.length === 2 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0], true)) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1], true)));
})(input));
