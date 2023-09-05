import React from "react";
import Select from "@mui/material/Select";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { IProperty } from "../interfaces";

interface IGenericSort<T> {
  object: T extends {} ? object : {};
  setPropertyType: (propertyType: IProperty<T>) => void;
}

const GenericSort = <T,>(props: IGenericSort<T>) => {
  const { object, setPropertyType } = props;

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Sorters</InputLabel>
        <select
          id="demo-simple-select-helper"
          onChange={(event: any) => {
            debugger;
            const values = event.target.value.split("-");
            if (values.length === 2) {
              setPropertyType({
                property: values[0] as any,
                isAscending: values[1] === "true",
              });
            }
          }}
        >
          {Object.keys(object).map((key, index) => {
            return (
              <>
                bom dia
                <option key={`${key}-true`} value={`${key}-true`}>
                  {`${key}-true`}
                </option>
                <option key={`${key}-false`} value={`${key}-false`}>
                  {`${key}-false`}
                </option>
              </>
            );
          })}
        </select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>
  );
};

export default GenericSort;
