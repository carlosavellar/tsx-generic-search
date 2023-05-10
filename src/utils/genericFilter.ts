export const genericFilter = <T>(object: T, filterProperties: Array<keyof T>) => {
  return filterProperties.every((filterProperty) => {
    return object[filterProperty] ? true : false;
  });
};
