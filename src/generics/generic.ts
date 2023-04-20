import React from 'react';

interface FooBar {
  foo: string;
  bar: string;
}

export const fooBar: Array<FooBar> = [
  { foo: 'Aoo', bar: 'bar' },
  { foo: 'Xoo', bar: 'far' },
  { foo: 'O3oo', bar: 'rtar' },
];

export const sortByFoo = (data: Array<FooBar>) => {
  return data.sort((a, b) => {
    if (a.foo < b.foo) return -1;
    if (a.foo > b.foo) return 1;
    else return 0;
  });
};
export const sortByBar = (data: Array<FooBar>) => {
  return data.sort((a, b) => {
    if (a.foo < b.foo) return -1;
    if (a.foo > b.foo) return 1;
    else return 0;
  });
};

export const genericSortSimple = <T>(data: Array<T>, key: keyof T) => {
  return data.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    else return 0;
  });
};
