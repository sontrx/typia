import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createAssertEncodeCustom_CommentTagInfinite =
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)({
    encode: typia.protobuf.createAssertEncode<CommentTagInfinite>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    message: typia.protobuf.message<CommentTagInfinite>(),
  });
