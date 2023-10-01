import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import { IFilter } from "../interfaces/IFilter";

interface IFilterProps<T> {
  object: T extends object ? T : never;
  properties: Array<IFilter<T>>;
  onChangeFilter: (propertyType: IFilter<T>) => void;
}

export function Filters<T>(props: IFilterProps<T>) {
  const { object, properties, onChangeFilter } = props;
  return (
    <div>
      <Form>
        <FormGroup check inline>
          {Object.keys(object).map((key) => {
            return (
              <span key={key}>
                <br />
                <input
                  id={`${key}-true`}
                  type="checkbox"
                  value={key}
                  checked={properties.some((property) => property.property === key && property.isTruthySelected)}
                  onChange={() => onChangeFilter({ property: key as any, isTruthySelected: true })}
                />
                <Label htmlFor={`${key}-true`}>{`${key} true`}</Label>
                <input
                  id={`${key}-false`}
                  type="checkbox"
                  value={key}
                  checked={properties.some((property) => property.property === key && property.isTruthySelected)}
                  onChange={() => onChangeFilter({ property: key as any, isTruthySelected: true })}
                />
                <Label htmlFor={`${key}-false`}>{`${key} false`}</Label>
              </span>
            );
          })}
        </FormGroup>
      </Form>
    </div>
  );
}
