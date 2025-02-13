import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_applicationOfValidate_gemini_TypeTagLength =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "TypeTagLength",
    factory: TypeTagLength,
  })(typia.llm.applicationOfValidate<TypeTagLengthApplication, "gemini">());

interface TypeTagLengthApplication {
  insert(p: { first: TypeTagLength }): Promise<void>;
  reduce(p: {
    first: TypeTagLength;
    second: TypeTagLength | null;
  }): Promise<TypeTagLength>;
  coalesce(p: {
    first: TypeTagLength | null;
    second: TypeTagLength | null;
    third?: TypeTagLength | null;
  }): Promise<TypeTagLength | null>;
}
