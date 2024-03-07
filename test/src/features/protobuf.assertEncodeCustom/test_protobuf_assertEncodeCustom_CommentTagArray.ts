import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_CommentTagArray =
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagArray",
  )<CommentTagArray>(CommentTagArray)({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagArray>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<CommentTagArray>(),
    message: typia.protobuf.message<CommentTagArray>(),
  });
