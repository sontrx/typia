import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_application_claude_ClassGetter = _test_llm_application({
  model: "claude",
  name: "ClassGetter",
})(typia.llm.application<ClassGetterApplication, "claude">());

interface ClassGetterApplication {
  insert(p: { first: ClassGetter }): Promise<void>;
  reduce(p: {
    first: ClassGetter;
    second: ClassGetter | null;
  }): Promise<ClassGetter>;
  coalesce(p: {
    first: ClassGetter | null;
    second: ClassGetter | null;
    third?: ClassGetter | null;
  }): Promise<ClassGetter | null>;
}
