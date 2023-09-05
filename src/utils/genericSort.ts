import { IProperty } from "../interfaces";

export const genericSort = <T>(a: T, b: T, propertyType: IProperty<T>) => {
  const { property, isAscending } = propertyType;
  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return 1;
    } else {
      return 0;
    }
  };

  return isAscending ? result() : result() * -1;
};
