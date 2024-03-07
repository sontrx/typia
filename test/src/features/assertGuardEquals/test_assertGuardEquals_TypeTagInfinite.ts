import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TypeTagInfinite = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)((input) =>
  typia.assertGuardEquals<TypeTagInfinite>(input),
);
