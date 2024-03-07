import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ArrayRecursiveUnionExplicitPointer =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
    decode: (input) =>
      typia.protobuf.assertDecode<ArrayRecursiveUnionExplicitPointer>(input),
    encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
  });
