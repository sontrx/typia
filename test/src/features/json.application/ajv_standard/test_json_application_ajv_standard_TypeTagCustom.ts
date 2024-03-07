import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_TypeTagCustom =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagCustom",
  })(typia.json.application<[TypeTagCustom], "ajv", false>());
