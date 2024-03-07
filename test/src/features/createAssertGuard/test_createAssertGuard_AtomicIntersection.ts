import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_AtomicIntersection = _test_assertGuard(
  TypeGuardError,
)("AtomicIntersection")<AtomicIntersection>(AtomicIntersection)(
  typia.createAssertGuard<AtomicIntersection>(),
);
