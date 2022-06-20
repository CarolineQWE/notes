type X = [1, "b", "c"];

type AnyElementOf<T extends any[]> = T[number];

type AnyElementOfX = AnyElementOf<X>;

type UnionToIntersection<U> = (U extends any ? (arg: U) => any : never) extends (
  arg: infer I
) => void
  ? I
  : never;

type UnionToTuple<T> = UnionToIntersection<T extends any ? (t: T) => T : never> extends (
  _: any
) => infer W
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : [];

type A2 = UnionToTuple<"aaa" | "bbb" | "ccc">;

type str = string;

const a: str = "name";
