export interface ISorter<T> {
  property: keyof T;
  isSpecialCase: boolean;
}
