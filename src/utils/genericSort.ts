import { IProperty } from "../interfaces/IProperty";

export const genericSort = <T>(a: T, b: T, sortedProperty: IProperty<T>) => {
  const { property, isTopDown } = sortedProperty;
  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    }
    if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  };
  return isTopDown ? result() * -1 : result();
};
