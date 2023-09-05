export const genericFilter = <T>(
  object: T,
  filteredProperties: Array<keyof T>
) => {
  return filteredProperties.every((filterOProperty) => {
    return object[filterOProperty] ? true : false;
  });
};
