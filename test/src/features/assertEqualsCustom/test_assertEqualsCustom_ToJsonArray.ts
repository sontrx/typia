import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ToJsonArray = _test_assertEquals(
  CustomGuardError,
)("ToJsonArray")<ToJsonArray>(ToJsonArray)((input) =>
  typia.assertEquals<ToJsonArray>(input, (p) => new CustomGuardError(p)),
);
