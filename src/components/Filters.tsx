interface IFilters<T> {
  object: T extends {} ? T : never;
  onChangeFilter: (property: keyof T) => void;
  properties: Array<keyof T>;
}
export const Filters = <T,>(props: IFilters<T>) => {
  const { object, onChangeFilter, properties } = props;
  return (
    <>
      <label className="mt-3">Filters try us too</label>
      {Object.keys(object).map((key) => {
        return (
          <>
            <input
              type="checkbox"
              value={key}
              key={key}
              id="each"
              onChange={() => {
                onChangeFilter(key as any);
              }}
              checked={properties.some((property) => property === key)}
            />
            <label htmlFor="each"> Filter by {key} </label>
          </>
        );
      })}
    </>
  );
};
