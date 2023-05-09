import * as React from "react";
import IProperty from "../interfaces/IProperty";

export interface ISorters<T> {
    object: T extends {} ? T : never;
    setProperty: (propertyType: IProperty<T>) => void
}

function Sorters<T>(props: ISorters<T>) {
    const { object, setProperty } = props;
    return <>
        <label htmlFor="sorter">Sort</label>
        <select id="sorter" onChange={(e) => {
            const values = e.target.value.split('-')
            if (values.length === 2) {

                setProperty({ property: values[0] as any, isDescending: values[1] === 'true' });
            }
        }}  >
            {Object.keys(object).map(key => {
                return <>
                    <option value={`${key}-true`} key={`${key}-true`}>Sort by {key} descending</option>
                    <option value={`${key}-false`} key={`${key}-false`}>Sort by {key} ascending</option>
                </>
            })}
        </select>
    </>
}

export default Sorters;