import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ArrayUnion = _test_misc_assertClone(
  TypeGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
  typia.misc.createAssertClone<ArrayUnion>(),
);
