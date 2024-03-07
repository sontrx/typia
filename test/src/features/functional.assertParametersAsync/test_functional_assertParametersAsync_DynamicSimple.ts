import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_DynamicSimple =
  _test_functional_assertParametersAsync(TypeGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.assertParameters(p),
  );
