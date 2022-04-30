/// reference: https://www.olioapps.com/blog/checking-types-real-world-typescript/

import fetch from "node-fetch";
import { decodeToPromise } from "./decode";
import { StoryV } from "./types";

export const fetchTitle = async (storyId: number) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
  );
  const data = await res.json();

  // If the data that is fetched does not match the `StoryV` validator then this
  // line will result in a rejected promise.
  const story = await decodeToPromise(StoryV, data);

  // This line does not type-check because TypeScript can infer from the
  // definition of `StoryV` that `story` does not have a property called
  // `descendents`.
  // const ds = story.descendents;

  // TypeScript infers that `story` does have a `title` property with a value of
  // type `string`, so this line passes type-checking.
  const title = story.title;

  return title;
};
