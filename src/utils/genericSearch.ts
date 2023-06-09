export const genericSearch = <T>(
  object: T,
  proprieties: Array<keyof T>,
  query: string,
  isSpecial: boolean
) => {
  if (query === "") {
    return true;
  }
  return proprieties.some((property) => {
    let value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      if (isSpecial) {
        return value.toString().toLowerCase().includes(query.toLowerCase());
      }
      return value.toString().includes(query);
    }
  });
};
