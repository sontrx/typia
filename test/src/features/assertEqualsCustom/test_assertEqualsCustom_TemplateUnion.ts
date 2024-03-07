import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TemplateUnion = _test_assertEquals(
  CustomGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)((input) =>
  typia.assertEquals<TemplateUnion>(input, (p) => new CustomGuardError(p)),
);
