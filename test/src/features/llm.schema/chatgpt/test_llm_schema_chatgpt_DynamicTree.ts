import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_schema_chatgpt_DynamicTree = _test_llm_schema({
  model: "chatgpt",
  name: "DynamicTree",
})(typia.llm.schema<DynamicTree, "chatgpt">());
