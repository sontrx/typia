import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_applicationOfValidate_claude_TemplateConstant =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "TemplateConstant",
    factory: TemplateConstant,
  })(typia.llm.applicationOfValidate<TemplateConstantApplication, "claude">());

interface TemplateConstantApplication {
  insert(p: { first: TemplateConstant }): Promise<void>;
  reduce(p: {
    first: TemplateConstant;
    second: TemplateConstant | null;
  }): Promise<TemplateConstant>;
  coalesce(p: {
    first: TemplateConstant | null;
    second: TemplateConstant | null;
    third?: TemplateConstant | null;
  }): Promise<TemplateConstant | null>;
}
