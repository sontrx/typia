import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAny } from "../../structures/ArrayAny";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ArrayAny = _test_json_assertParse(
  TypeGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
  typia.json.assertParse<ArrayAny>(input),
);
