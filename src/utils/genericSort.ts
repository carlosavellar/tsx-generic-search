import { IProperty } from "../interfaces/IProperty";

export const genericSort = <T>(a: T, b: T, propertyType: IProperty<T>) => {
  const { property, isAscending } = propertyType;
  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return 1;
    }
    return 0;
  };
  return isAscending ? result() * -1 : result();
};
