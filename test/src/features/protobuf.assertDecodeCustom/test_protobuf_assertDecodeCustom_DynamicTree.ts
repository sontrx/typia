import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_DynamicTree =
  _test_protobuf_assertDecode(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    decode: (input) =>
      typia.protobuf.assertDecode<DynamicTree>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<DynamicTree>(),
  });
