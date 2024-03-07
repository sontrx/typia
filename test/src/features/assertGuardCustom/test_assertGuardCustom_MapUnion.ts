import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapUnion } from "../../structures/MapUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_MapUnion = _test_assertGuard(
  CustomGuardError,
)("MapUnion")<MapUnion>(MapUnion)((input) =>
  typia.assertGuard<MapUnion>(input, (p) => new CustomGuardError(p)),
);
