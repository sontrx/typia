import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_assertStringify_ToJsonAtomicUnion =
  _test_json_assertStringify(TypeGuardError)(
    "ToJsonAtomicUnion",
  )<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
    typia.json.assertStringify<ToJsonAtomicUnion>(input),
  );
