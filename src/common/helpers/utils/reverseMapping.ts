export const reverseMapping = <Obj extends Record<string, unknown>>(obj: Obj): Obj => {
  return Object
    .fromEntries(Array.from(Object.entries(obj), (pair) => pair.reverse()));
};
