import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_DynamicUndefined =
  _test_misc_assertClone(CustomGuardError)(
    "DynamicUndefined",
  )<DynamicUndefined>(DynamicUndefined)((input) =>
    typia.misc.assertClone<DynamicUndefined>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
