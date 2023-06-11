import typia from "../../../../src";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";
import { _test_is } from "../../../internal/_test_is";
export const test_is_DynamicJsonValue = _test_is("DynamicJsonValue", DynamicJsonValue.generate, (input) => ((input: any): input is string | number | boolean | DynamicJsonValue.JsonObject | DynamicJsonValue.JsonArray | null => {
    const $join = (typia.is as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null === value || undefined === value || "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value || (Array.isArray(value) && ($ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && $io0(value));
        return true;
    });
    const $ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem || (Array.isArray(elem) && ($ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io0(elem))));
    return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && ($ia0(input) || false) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)));
})(input), DynamicJsonValue.SPOILERS);
