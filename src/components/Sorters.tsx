import { IProperty } from "../interfaces/IProperty";

interface ISorters<T> {
  object: T extends {} ? T : never;
  setProperty: (propertyType: IProperty<T>) => void;
}

export const Sorters = <T,>(props: ISorters<T>) => {
  const { object, setProperty } = props;
  return (
    <>
      <label htmlFor="sorter">Sorters</label>
      <select
        id="sorter"
        name="sorter"
        onChange={(event) => {
          const value = event.target.value.split("-");
          if (value.length === 2) {
            setProperty({
              property: value[0] as any,
              isTopDown: value[1] === "true",
            });
          }
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <>
              <option key={`${key}-true`} value={`${key}-true`}>
                {key} {`${key}-true`}
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                {key} {`${key}-false`}
              </option>
            </>
          );
        })}
      </select>
    </>
  );
};
