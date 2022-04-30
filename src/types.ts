/// reference: https://www.olioapps.com/blog/checking-types-real-world-typescript/

import * as t from "io-ts";

const optional = <RT extends t.Any>(
  type: RT,
  name: string = `${type.name} | undefined`
): t.UnionType<
  [RT, t.UndefinedType],
  t.TypeOf<RT> | undefined,
  t.OutputOf<RT> | undefined,
  t.InputOf<RT> | undefined
> => {
  return t.union<[RT, t.UndefinedType]>([type, t.undefined], name);
};

// The `V` in `StoryV` is short for `Validator`
export const StoryV = t.type({
  type: t.literal("story"), // value of property called `type` is the exact string `"story"`
  by: t.string, // username
  dead: optional(t.boolean),
  deleted: optional(t.boolean),
  descendants: t.number, // number of comments
  id: t.number,
  kids: optional(t.array(t.number)), // IDs of comments on an item
  score: t.number,
  text: optional(t.string), // HTML content if story is a text post
  time: t.number, // seconds since Unix epoch
  title: t.string,
  url: optional(t.string), // URL of linked article if the story is not text post
});
