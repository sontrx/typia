import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassGetter } from "../../structures/ClassGetter";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ClassGetter = _test_json_assertStringify(
  TypeGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)((input) =>
  typia.json.assertStringify<ClassGetter>(input),
);
