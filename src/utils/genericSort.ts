import { IProperty } from "../interfaces/IProperty";

export const genericSort = <T>(
  a: T,
  b: T,
  filteredProperties: IProperty<T>
) => {
  const { isSpecialCase, property } = filteredProperties;
  const result = () => {
    if (a[property] > b[property]) {
      return -1;
    }
    if (a[property] < b[property]) {
      return 1;
    }
    return 0;
  };
  return isSpecialCase ? result() * -1 : result();
};
