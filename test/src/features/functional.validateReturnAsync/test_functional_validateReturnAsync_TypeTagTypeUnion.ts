import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_validateReturnAsync_TypeTagTypeUnion =
  _test_functional_validateReturnAsync("TypeTagTypeUnion")(TypeTagTypeUnion)(
    (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
      typia.functional.validateReturn(p),
  );
