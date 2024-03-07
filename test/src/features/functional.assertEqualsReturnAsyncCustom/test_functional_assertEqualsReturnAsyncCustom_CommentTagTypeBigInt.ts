import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagTypeBigInt =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "CommentTagTypeBigInt",
  )(CommentTagTypeBigInt)(
    (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
