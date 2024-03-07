import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_DynamicTree = _test_protobuf_message(
  "DynamicTree",
)(
  'syntax = "proto3";\n\nmessage DynamicTree {\n  required string id = 1;\n  required double sequence = 2;\n  map<string, DynamicTree> children = 3;\n}',
);
