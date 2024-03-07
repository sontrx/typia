import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_TupleRestArray =
  _test_json_assertParse(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(
    typia.json.createAssertParse<TupleRestArray>(
      (p) => new CustomGuardError(p),
    ),
  );
