export const genericSearch = <T>(object: T, properties: Array<keyof T>, query: string, isUpperCase: boolean) => {
  if (!query) {
    return true;
  }
  properties.some((property) => {
    const value = object[property];
    if (typeof value === 'string' || typeof value === 'number') {
      return value.toString().includes(query);
    } else if (typeof value === 'string' || (typeof value === 'number' && isUpperCase)) {
      return value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return value;
  });
};
