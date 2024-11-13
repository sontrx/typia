import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_json_schemas_v3_0_ToJsonArray = _test_json_schemas({
  version: "3.0",
  name: "ToJsonArray",
})(typia.json.schemas<[ToJsonArray], "3.0">());
