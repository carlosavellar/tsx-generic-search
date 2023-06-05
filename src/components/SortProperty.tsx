import { IProperty } from "../interfaces/IProperty";

export interface ISortProperty<T> {
  object: T extends {} ? T : never;
  setProperty: (propertyType: IProperty<T>) => void;
}

export function SortProperty<T>(props: ISortProperty<T>) {
  const { object, setProperty } = props;
  return (
    <>
      <label htmlFor="sort-by">Sort by</label>
      <select
        id="sort-by"
        onChange={(event) => {
          const values = event.target.value.split("-");
          if (values.length === 2) {
            setProperty({
              property: values[0] as any,
              isDescending: values[0] === "true",
            });
          }
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <>
              <option key={`${key}-true`} value={`${key}-true`}>
                Sort by {`${key}-true`}
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                Sort by {`${key}-false`}
              </option>
            </>
          );
        })}
      </select>
    </>
  );
}
