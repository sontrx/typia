import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagNaN =
  _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
