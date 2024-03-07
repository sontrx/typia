import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_TypeTagMatrix = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.misc.assertClone<TypeTagMatrix>(input),
);
