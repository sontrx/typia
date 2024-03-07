import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectTuple = _test_json_assertParse(
  CustomGuardError,
)("ObjectTuple")<ObjectTuple>(ObjectTuple)((input) =>
  typia.json.assertParse<ObjectTuple>(input, (p) => new CustomGuardError(p)),
);
