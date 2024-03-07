import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_DynamicSimple =
  _test_protobuf_assertDecode(TypeGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )({
    decode: typia.protobuf.createAssertDecode<DynamicSimple>(),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
  });
