import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_CommentTagFormat =
  _test_misc_assertPrune(TypeGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.misc.createAssertPrune<CommentTagFormat>());
