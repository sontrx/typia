import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectSimpleProtobuf =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    decode: typia.protobuf.createAssertDecode<ObjectSimpleProtobuf>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
  });
