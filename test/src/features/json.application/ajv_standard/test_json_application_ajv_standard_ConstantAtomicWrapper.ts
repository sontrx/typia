import typia from "typia";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ConstantAtomicWrapper =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantAtomicWrapper",
  })(typia.json.application<[ConstantAtomicWrapper], "ajv", false>());
