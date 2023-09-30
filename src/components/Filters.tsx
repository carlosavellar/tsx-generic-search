import React from "react";
import { Form, FormGroup, Label } from "reactstrap";

interface IFilterProps<T> {
  object: T extends object ? T : never;
  properties: Array<keyof T>;
  onChangeFilter: (propertyType: keyof T) => void;
}

export function Filters<T>(props: IFilterProps<T>) {
  const { object, properties, onChangeFilter } = props;
  return (
    <div>
      <Form>
        <FormGroup check inline>
          {Object.keys(object).map((key) => {
            return (
              <>
                <input
                  key={key}
                  id="check-filter"
                  type="checkbox"
                  value={key}
                  checked={properties.some((property) => property === key)}
                  onChange={() => onChangeFilter(key as keyof T)}
                />
                <Label key={key} htmlFor="check-filter">
                  {key}
                </Label>
              </>
            );
          })}
        </FormGroup>
      </Form>
    </div>
  );
}
