import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_AtomicClass = _test_misc_assertClone(
  TypeGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)(
  typia.misc.createAssertClone<AtomicClass>(),
);
