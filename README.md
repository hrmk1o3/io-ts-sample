# io-ts sample

## Motivation

I was investigating how to assert at runtime that a variable of type `any` is of a certain type.

## How to Run

```sh
yarn
yarn start
```

## Beautiful Point

See [request.ts](./src/request.ts).

```ts
  // This line does not type-check because TypeScript can infer from the
  // definition of `StoryV` that `story` does not have a property called
  // `descendents`.
  const ds = story.descendents;
  //               ~~~~~~~~~~~
  // src/request.ts:20:20 - error TS2551: Property 'descendents' does not exist on type '{ ... }'. Did you mean 'descendants'?
```

## Reference

https://www.olioapps.com/blog/checking-types-real-world-typescript/ by Jesse Hallett
