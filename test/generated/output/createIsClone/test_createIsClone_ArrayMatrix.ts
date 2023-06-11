import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_createIsClone_ArrayMatrix = _test_isClone("ArrayMatrix", ArrayMatrix.generate, (input: any): typia.Primitive<ArrayMatrix> | null => { const is = (input: any): input is ArrayMatrix => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
}; const clone = (input: ArrayMatrix): typia.Primitive<ArrayMatrix> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    const $cp1 = (input: any) => input.map((elem: any) => Array.isArray(elem) ? $cp0(elem) : elem as any);
    const $cp2 = (input: any) => input.map((elem: any) => Array.isArray(elem) ? $cp1(elem) : elem as any);
    return Array.isArray(input) ? $cp2(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ArrayMatrix.SPOILERS);
