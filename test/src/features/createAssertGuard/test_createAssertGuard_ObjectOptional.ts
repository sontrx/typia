import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectOptional = _test_assertGuard(
  TypeGuardError,
)("ObjectOptional")<ObjectOptional>(ObjectOptional)(
  typia.createAssertGuard<ObjectOptional>(),
);
