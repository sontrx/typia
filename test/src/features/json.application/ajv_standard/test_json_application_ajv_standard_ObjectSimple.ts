import typia from "typia";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectSimple",
  })(typia.json.application<[ObjectSimple], "ajv", false>());
