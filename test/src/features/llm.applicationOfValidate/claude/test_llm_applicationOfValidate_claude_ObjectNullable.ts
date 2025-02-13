import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_applicationOfValidate_claude_ObjectNullable =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ObjectNullable",
    factory: ObjectNullable,
  })(typia.llm.applicationOfValidate<ObjectNullableApplication, "claude">());

interface ObjectNullableApplication {
  insert(p: { first: ObjectNullable }): Promise<void>;
  reduce(p: {
    first: ObjectNullable;
    second: ObjectNullable | null;
  }): Promise<ObjectNullable>;
  coalesce(p: {
    first: ObjectNullable | null;
    second: ObjectNullable | null;
    third?: ObjectNullable | null;
  }): Promise<ObjectNullable | null>;
}
