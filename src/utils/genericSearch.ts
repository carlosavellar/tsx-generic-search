export const genericSearch = <T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean
) => {
  if (query === "") {
    return true;
  }
  return properties.some((property) => {
    const value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      if (shouldBeCaseSensitive) {
        return value.toString().toLowerCase().includes(query.toLowerCase());
      } else {
        return value.toString().includes(query);
      }
    }
    return value;
  });
};
