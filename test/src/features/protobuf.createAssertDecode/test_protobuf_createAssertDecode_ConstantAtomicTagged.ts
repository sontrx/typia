import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ConstantAtomicTagged =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)({
    decode: typia.protobuf.createAssertDecode<ConstantAtomicTagged>(),
    encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
  });
