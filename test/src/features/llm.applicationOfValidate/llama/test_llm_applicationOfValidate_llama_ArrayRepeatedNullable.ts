import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_applicationOfValidate_llama_ArrayRepeatedNullable =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ArrayRepeatedNullable",
    factory: ArrayRepeatedNullable,
  })(
    typia.llm.applicationOfValidate<
      ArrayRepeatedNullableApplication,
      "llama"
    >(),
  );

interface ArrayRepeatedNullableApplication {
  insert(p: { first: ArrayRepeatedNullable }): Promise<void>;
  reduce(p: {
    first: ArrayRepeatedNullable;
    second: ArrayRepeatedNullable | null;
  }): Promise<ArrayRepeatedNullable>;
  coalesce(p: {
    first: ArrayRepeatedNullable | null;
    second: ArrayRepeatedNullable | null;
    third?: ArrayRepeatedNullable | null;
  }): Promise<ArrayRepeatedNullable | null>;
}
