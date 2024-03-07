import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TupleUnion = _test_assertGuard(
  CustomGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)((input) =>
  typia.assertGuard<TupleUnion>(input, (p) => new CustomGuardError(p)),
);
