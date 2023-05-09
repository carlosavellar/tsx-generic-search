import IProperty from "../interfaces/IProperty";

export const genericSort = <T>(a: T, b: T, propertyType: IProperty<T>) => {
  const { property, isDescending } = propertyType;
  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    } else {
      return 0;
    }
  };

  return isDescending ? result() * -1 : result();
};
