import React, { PropsWithChildren, ReactNode } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { ISorter } from "../interfaces/ISorter";

// eslint-disable-next-line react/require-default-props
type PropsWithChildrenFunction<P, T> = P & { children?(item: T): ReactNode };

interface ISortersProps<T> {
  dataSorters: Array<T>;
  setProperty: (propertyType: PropsWithChildren<ISorter<T>>) => void;
}

export function Sorters<T>(props: PropsWithChildrenFunction<ISortersProps<T>, T>) {
  const { dataSorters, setProperty, children } = props;
  const dataObj = dataSorters.length > 0 ? dataSorters[0] : {};
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
            {Object.keys(dataObj as any).map((key) => {
              return (
                <>
                  <option key={`${key}-true`} value={`${key}-true`}>
                    Sort by {key} true
                  </option>
                  <option key={`${key}-false`}>Sort by {key} false</option>
                </>
              );
            })}
            {(children as any) && dataSorters.map((widget) => widget)}
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
}
