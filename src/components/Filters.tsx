export interface IFilters<T> {
  object: T extends {} ? T : never;
  properties: Array<keyof T>;
  onChangeFilter: (property: keyof T) => void;
}

export const Filters = <T,>(props: IFilters<T>) => {
  const { object, properties, onChangeFilter } = props;
  return (
    <>
      <label htmlFor="filters">Filters also by</label>
      {Object.keys(object).map((key) => {
        return (
          <>
            <input
              type="checkbox"
              name={key}
              key={key}
              onChange={() => {
                onChangeFilter(key as any);
              }}
              checked={properties.includes(key as any)}
            />
            <label htmlFor={key}>'{key}' is truthy</label>
          </>
        );
      })}
    </>
  );
};
