export const genericFilter = <T>(object: T, filteredProperties: Array<keyof T>): boolean => {
  return filteredProperties.every((filteredProperty) => {
    return object[filteredProperty] ? true : false;
  });
};
