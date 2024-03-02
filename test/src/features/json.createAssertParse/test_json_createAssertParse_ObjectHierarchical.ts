import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_createAssertParse_ObjectHierarchical =
  _test_json_assertParse(TypeGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)(
    typia.json.createAssertParse<ObjectHierarchical>(),
  );
