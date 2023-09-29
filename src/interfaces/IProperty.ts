export interface IProperty<T> {
  property: keyof T;
  isSpecialCase: boolean;
}
