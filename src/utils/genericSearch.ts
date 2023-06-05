export const genericSearch = <T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  isUpperCase: boolean
) => {
  if (query === "") {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      if (isUpperCase) {
        return value.toString().toUpperCase().includes(query.toUpperCase());
      }
      return value.toString().includes(query);
    }
  });
};
