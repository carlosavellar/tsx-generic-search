import { IFilter } from "../interfaces/IFilter";

export const genericFilter = <T>(object: T, filteredProperties: Array<IFilter<T>>): boolean => {
  return filteredProperties.every((filteredProperty) => {
    const { property, isTruthySelected } = filteredProperty;
    return isTruthySelected ? object[property] : !object[property];
  });
};
