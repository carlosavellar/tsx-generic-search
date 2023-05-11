import { IFilter } from '../interfaces/IFilter';

export const genericFilter = <T>(object: T, filterProperties: Array<IFilter<T>>) => {
  return filterProperties.every((filterProperty) => {
    const { property, isTruthySelected } = filterProperty;
    return isTruthySelected ? object[property] : !object[property];
  });
};
