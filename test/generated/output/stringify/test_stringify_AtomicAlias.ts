import typia from "../../../../src";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_stringify_AtomicAlias = _test_stringify("AtomicAlias", AtomicAlias.generate, (input) => ((input: [boolean, number, string]): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
})(input));
