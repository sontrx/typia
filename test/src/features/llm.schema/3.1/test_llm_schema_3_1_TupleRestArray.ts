import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_llm_schema_3_1_TupleRestArray = _test_llm_schema({
  model: "3.1",
  name: "TupleRestArray",
})(typia.llm.schema<TupleRestArray, "3.1">());
