import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectOptional =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectOptional",
  )<ObjectOptional>(ObjectOptional)({
    encode: typia.protobuf.createAssertEncode<ObjectOptional>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectOptional>(),
    message: typia.protobuf.message<ObjectOptional>(),
  });
