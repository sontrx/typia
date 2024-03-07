import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ArrayRecursive = _test_misc_assertClone(
  TypeGuardError,
)("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)((input) =>
  typia.misc.assertClone<ArrayRecursive>(input),
);
