import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagArrayUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TypeTagArrayUnion",
  )(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
