export interface ISorters<T> {
  object: T extends {} ? T : never;
  setProperty: (property: keyof T) => void;
}

export const Sorters = <T,>(props: ISorters<T>) => {
  const { object, setProperty } = props;
  return (
    <>
      <label htmlFor="sorters">Sorters</label>
      <select id="sorters" name="sorters" onChange={(e) => setProperty(e.target.value as any)}>
        {Object.keys(object).map((key, index) => {
          return (
            <option key={index} value={key}>
              {key}
            </option>
          );
        })}
      </select>
    </>
  );
};
