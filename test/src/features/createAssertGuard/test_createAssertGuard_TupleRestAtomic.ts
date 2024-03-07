import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TupleRestAtomic = _test_assertGuard(
  TypeGuardError,
)("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
  typia.createAssertGuard<TupleRestAtomic>(),
);
