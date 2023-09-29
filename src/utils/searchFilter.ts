export const searchFilter = <T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  isDifferentCase?: boolean,
): boolean => {
  if (!query) return true;
  return properties.some((property) => {
    // eslint-disable-next-line no-debugger
    // debugger;
    const value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      if (isDifferentCase) {
        return value
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase());
      }
      return value.toString().includes(query.toString());
    }
    return false;
  });
};
