import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_json_assertParse_CommentTagDefault = _test_json_assertParse(
  TypeGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.json.assertParse<CommentTagDefault>(input),
);
