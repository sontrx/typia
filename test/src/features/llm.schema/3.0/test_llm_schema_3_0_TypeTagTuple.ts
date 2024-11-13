import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_llm_schema_3_0_TypeTagTuple = _test_llm_schema({
  model: "3.0",
  name: "TypeTagTuple",
})(typia.llm.schema<TypeTagTuple, "3.0">());
