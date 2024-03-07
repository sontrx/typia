import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectPropertyNullable = _test_assertGuard(
  TypeGuardError,
)("ObjectPropertyNullable")<ObjectPropertyNullable>(ObjectPropertyNullable)(
  (input) => typia.assertGuard<ObjectPropertyNullable>(input),
);
