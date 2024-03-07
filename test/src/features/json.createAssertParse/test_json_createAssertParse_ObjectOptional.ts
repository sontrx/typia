import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectOptional =
  _test_json_assertParse(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(typia.json.createAssertParse<ObjectOptional>());
