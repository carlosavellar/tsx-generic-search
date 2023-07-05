export interface IProperty<T> {
  property: keyof T;
  isTopDown: boolean;
}
