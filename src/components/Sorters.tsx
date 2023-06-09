import { IProperty } from "../interfaces/IProperty";

interface ISorters<T> {
  object: T extends {} ? T : never;
  setPropertyType: (propertyType: IProperty<T>) => void;
}

export const Sorters = <T,>(props: ISorters<T>) => {
  const { object, setPropertyType } = props;
  return (
    <>
      <label htmlFor="sortBy">Sort by</label>
      <select
        id="sortBy"
        name="sortBy"
        onChange={(event) => {
          const value = event.target.value.split("-");
          if (value.length === 2) {
            setPropertyType({
              property: value[0] as any,
              isAscending: value[1] === "true",
            });
          }
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <>
              <option key={`${key}-true`} value={`${key}-true`}>
                Sort by{`${key}-true`}
              </option>
              ;
              <option key={`${key}-false`} value={`${key}-false`}>
                Sort by{`${key}-false`}
              </option>
              ;
            </>
          );
        })}
      </select>
    </>
  );
};
