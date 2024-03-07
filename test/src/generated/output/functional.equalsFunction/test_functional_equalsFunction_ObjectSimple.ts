import typia from "typia";
import { _test_functional_equalsFunction } from "../../../internal/_test_functional_equalsFunction";
import { ObjectSimple } from "../../../structures/ObjectSimple";
export const test_functional_equalsFunction_ObjectSimple =
  _test_functional_equalsFunction("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      (input: ObjectSimple): ObjectSimple | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectSimple.IBox3D => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.scale &&
              null !== input.scale &&
              $io1(input.scale, true && _exceptionable) &&
              "object" === typeof input.position &&
              null !== input.position &&
              $io1(input.position, true && _exceptionable) &&
              "object" === typeof input.rotate &&
              null !== input.rotate &&
              $io1(input.rotate, true && _exceptionable) &&
              "object" === typeof input.pivot &&
              null !== input.pivot &&
              $io1(input.pivot, true && _exceptionable) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["scale", "position", "rotate", "pivot"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.x &&
              Number.isFinite(input.x) &&
              "number" === typeof input.y &&
              Number.isFinite(input.y) &&
              "number" === typeof input.z &&
              Number.isFinite(input.z) &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["x", "y", "z"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectSimple.IBox3D => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.scale &&
            null !== input.scale &&
            $io1(input.scale, true && _exceptionable) &&
            "object" === typeof input.position &&
            null !== input.position &&
            $io1(input.position, true && _exceptionable) &&
            "object" === typeof input.rotate &&
            null !== input.rotate &&
            $io1(input.rotate, true && _exceptionable) &&
            "object" === typeof input.pivot &&
            null !== input.pivot &&
            $io1(input.pivot, true && _exceptionable) &&
            (4 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["scale", "position", "rotate", "pivot"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y) &&
            "number" === typeof input.z &&
            Number.isFinite(input.z) &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["x", "y", "z"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
