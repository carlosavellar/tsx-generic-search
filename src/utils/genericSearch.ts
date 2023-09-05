export const genericSearch = <T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  isUpperCase: boolean
): boolean => {
  return properties.some((property) => {
    const value = object[property];
    if (!query) return true;
    if (typeof value === "string" || typeof value === "number") {
      if (isUpperCase) {
        return value
          .toString()
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase());
      }
      return value.toString().includes(query);
    }
  });
};
