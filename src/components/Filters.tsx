import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

interface IFilters<T> {
  object: T extends {} ? T : never;
  properties: Array<keyof T>;
  onChangeFilter: (property: keyof T) => void;
}

export const Filters = <T,>(props: IFilters<T>) => {
  const { object, properties, onChangeFilter } = props;
  return (
    <FormGroup>
      {Object.keys(object).map((key) => {
        return (
          <FormControlLabel
            key={key}
            value={key}
            control={<Checkbox defaultChecked />}
            label={`${key}is truthy`}
            onChange={() => {
              onChangeFilter(key as any);
            }}
            checked={properties.some((property) => {
              console.log(property);
              return property === key;
            })}
          />
        );
      })}
    </FormGroup>
  );
};
