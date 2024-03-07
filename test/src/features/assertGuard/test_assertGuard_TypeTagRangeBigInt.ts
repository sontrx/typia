import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_assertGuard_TypeTagRangeBigInt = _test_assertGuard(
  TypeGuardError,
)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.assertGuard<TypeTagRangeBigInt>(input),
);
