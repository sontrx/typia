import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_assertHeadersCustom_ObjectHttpArray =
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpArray",
  )<ObjectHttpArray>(ObjectHttpArray)((input) =>
    typia.http.assertHeaders<ObjectHttpArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
