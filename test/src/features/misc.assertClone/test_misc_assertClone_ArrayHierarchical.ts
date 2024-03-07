import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ArrayHierarchical = _test_misc_assertClone(
  TypeGuardError,
)("ArrayHierarchical")<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.misc.assertClone<ArrayHierarchical>(input),
);
