export const genericSearch = <T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  isSpacialCase: boolean
) => {
  if (query === "") return true;
  return properties.some((property) => {
    let value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      if (isSpacialCase) {
        return value
          .toString()
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase());
      }
      return value.toString().includes(query);
    }
  });
};
