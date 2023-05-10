import { IProperty } from '../interfaces/IProperty';

interface ISortProperty<T> {
  object: T extends {} ? T : never;
  setPropertyType: (propertyType: IProperty<T>) => void;
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
          ('');
          const value = event.target.value.split('-');
          if (value.length === 2) {
            setPropertyType({ property: value[0] as any, isDescending: value[1] === 'true' });
          }
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <>
              <option value={`${key}-true`}>sort by {`${key}-true`}</option>
              <option value={`${key}-false`}>sort by {`${key}-false`}</option>
            </>
          );
        })}
      </select>
    </>
  );
};
