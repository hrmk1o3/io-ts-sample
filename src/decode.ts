/// reference: https://www.olioapps.com/blog/checking-types-real-world-typescript/

import reporter from "io-ts-reporters";
import * as t from "io-ts";
import { fold } from "fp-ts/lib/Either";

// Apply a validator and get the result in a `Promise`
export const decodeToPromise = <T, O, I>(
  validator: t.Type<T, O, I>,
  input: I
): Promise<T> => {
  const result = validator.decode(input);
  return fold(
    (_errors: any) => {
      const messages = reporter.report(result);
      return Promise.reject(new Error(messages.join("\n")));
    },
    (value: any) => Promise.resolve(value)
  )(result);
};
