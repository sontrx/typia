import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_assertDecode_ObjectSimpleProtobuf =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    decode: (input) => typia.protobuf.assertDecode<ObjectSimpleProtobuf>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
  });
