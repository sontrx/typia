import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectUnionExplicitPointer =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectUnionExplicitPointer>(input),
    encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
  });
