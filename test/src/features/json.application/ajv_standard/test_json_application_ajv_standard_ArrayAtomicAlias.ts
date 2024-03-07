import typia from "typia";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ArrayAtomicAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayAtomicAlias",
  })(typia.json.application<[ArrayAtomicAlias], "ajv", false>());
