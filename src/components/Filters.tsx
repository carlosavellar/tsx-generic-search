import { IFilter } from '../interfaces/IFilter';

interface IFiltersSelect<T> {
  object: T extends {} ? T : never;
  onChangeFilter: (property: IFilter<T>) => void;
  properties: Array<IFilter<T>>;
}
export const Filters = <T,>(props: IFiltersSelect<T>) => {
  const { object, onChangeFilter, properties } = props;
  return (
    <>
      <label className="mt-3">Filters try us too</label>
      {Object.keys(object).map((key, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              value={key}
              id={`${key}-true`}
              onChange={() => {
                onChangeFilter({ property: key as any, isTruthySelected: true });
              }}
              checked={properties.some((property) => property.property === key && property.isTruthySelected)}
            />
            <label htmlFor="each"> Filter by {key} is truthy </label>
            <input
              type="checkbox"
              value={key}
              id={`${key}-false`}
              onChange={() => {
                onChangeFilter({ property: key as any, isTruthySelected: false });
              }}
              checked={properties.some((property) => property.property === key && !property.isTruthySelected)}
            />
            <label htmlFor={key}> Filter by {key} is falsy</label>
          </div>
        );
      })}
    </>
  );
};
