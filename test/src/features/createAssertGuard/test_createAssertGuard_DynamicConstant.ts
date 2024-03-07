import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicConstant = _test_assertGuard(
  TypeGuardError,
)("DynamicConstant")<DynamicConstant>(DynamicConstant)(
  typia.createAssertGuard<DynamicConstant>(),
);
