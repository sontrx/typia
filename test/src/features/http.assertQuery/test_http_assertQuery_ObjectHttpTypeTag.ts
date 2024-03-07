import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_http_assertQuery_ObjectHttpTypeTag = _test_http_assertQuery(
  TypeGuardError,
)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  typia.http.assertQuery<ObjectHttpTypeTag>(input),
);
