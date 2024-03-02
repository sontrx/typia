import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_misc_createAssertPrune_TypeTagBigInt = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
  typia.misc.createAssertPrune<TypeTagBigInt>(),
);
