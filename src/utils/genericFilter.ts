export const genericFilter = <T>(object: T, filterProperties: Array<keyof T>) => {
  filterProperties.every((filterProperty) => {
    return object[filterProperty];
  });
};
