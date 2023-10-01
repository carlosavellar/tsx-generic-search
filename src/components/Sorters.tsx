import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { ISorter } from "../interfaces/ISorter";

interface ISortersProps<T> {
  object: T extends object ? T : never;
  setProperty: (propertyType: ISorter<T>) => void;
}

export function Sorters<T>(props: ISortersProps<T>) {
  const { object, setProperty } = props;
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            onChange={(event) => {
              const value = event.target.value.split("-");
              if (value.length === 2) {
                setProperty({
                  property: value[0] as keyof T,
                  isSpecialCase: value[1] === "true",
                });
              }
            }}
          >
            {Object.keys(object).map((key) => {
              return (
                <>
                  <option key={`${key}-true`} value={`${key}-true`}>
                    Sort by {key} true
                  </option>
                  <option key={`${key}-false`}>Sort by {key} false</option>
                </>
              );
            })}
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
}
