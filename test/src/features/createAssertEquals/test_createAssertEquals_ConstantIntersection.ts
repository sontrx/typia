import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssertEquals_ConstantIntersection = _test_assertEquals(
  TypeGuardError,
)("ConstantIntersection")<ConstantIntersection>(ConstantIntersection)(
  typia.createAssertEquals<ConstantIntersection>(),
);
