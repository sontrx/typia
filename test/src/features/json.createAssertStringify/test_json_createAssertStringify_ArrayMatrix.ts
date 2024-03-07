import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ArrayMatrix =
  _test_json_assertStringify(TypeGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )(typia.json.createAssertStringify<ArrayMatrix>());
