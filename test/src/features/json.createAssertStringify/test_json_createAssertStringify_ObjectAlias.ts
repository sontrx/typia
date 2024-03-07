import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectAlias =
  _test_json_assertStringify(TypeGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )(typia.json.createAssertStringify<ObjectAlias>());
