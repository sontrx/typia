import typia from "../../../src";
import { NumberNaN } from "../../structures/NumberNaN";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_NumberNaN = _test_validate(
    "NumberNaN",
    NumberNaN.generate,
    (input) => typia.validate(input),
    NumberNaN.SPOILERS,
);