import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ToJsonDouble =
  _test_functional_assertFunction(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
