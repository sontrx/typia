import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_AtomicClass =
  _test_misc_assertClone(CustomGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )(typia.misc.createAssertClone<AtomicClass>((p) => new CustomGuardError(p)));
