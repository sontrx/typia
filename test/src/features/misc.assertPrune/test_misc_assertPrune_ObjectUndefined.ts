import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectUndefined = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.misc.assertPrune<ObjectUndefined>(input),
);
