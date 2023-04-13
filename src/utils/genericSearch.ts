export const genericSearch = <T>(data: T, properties: Array<keyof T>, query: string, isUppercase: boolean): boolean => {
  if (query === '') return true;

  return properties.some((property) => {
    const value = data[property];
    if (typeof value === 'string' || typeof value === 'number') {
      return value.toString().includes(query);
    } else if (typeof value === 'string' || (typeof value === 'number' && isUppercase)) {
      return value.toString().includes(query);
    }
    return false;
  });
};
