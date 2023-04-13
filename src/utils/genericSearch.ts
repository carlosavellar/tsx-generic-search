import { IWidget } from '../interfaces/widgets';

export const genericSearch = <T>(data: T, properties: Array<keyof T>, query: string, isBoolean: boolean): boolean => {
  if (query === ' ') {
    return true;
  }
  return properties.some((property) => {
    const value = data[property];
    if (typeof value === 'string' || typeof value === 'number') {
      return value.toString().includes(query);
    } else if (typeof value === 'string' || (typeof value === 'number' && isBoolean)) {
      return value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });
};
