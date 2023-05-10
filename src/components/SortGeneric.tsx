import { IProperty } from '../interfaces/IProperty';

interface ISortProperty<T> {
  object: T extends {} ? T : never;
  setPropertyType: (property: keyof T) => void;
}

export const SortProperty = <T,>(props: ISortProperty<T>) => {
  const { object, setPropertyType } = props;
  return (
    <>
      <label htmlFor="sort">Sort</label>
      <select
        id="sort"
        name="sort"
        onChange={(event) => {
          setPropertyType(event.target.value as any);
        }}
      >
        {Object.keys(object).map((key) => {
          return <option value={key}>sort by {key}</option>;
        })}
      </select>
    </>
  );
};
