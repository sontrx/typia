import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapAlias } from "../../structures/MapAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_MapAlias =
  _test_functional_assertFunction(CustomGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
