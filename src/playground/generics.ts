interface IFooBar {
  foo: string;
  bar: number;
}

const fooBar: Array<IFooBar> = [
  { foo: "Coffee", bar: 83 },
  { foo: "Whisky", bar: 46 },
  { foo: "Milk", bar: 23 },
];

const sortByFoo = (data: Array<IFooBar>) => {
  return data.sort((a, b) => {
    if (a["foo"] > b["foo"]) {
      return 1;
    }
    if (a["foo"] < b["foo"]) {
      return -1;
    }
    return 0;
  });
};

const sortByBar = (data: Array<IFooBar>) => {
  return data.sort((a, b) => {
    if (a["bar"] > b["bar"]) {
      return 1;
    }
    if (a["bar"] < b["bar"]) {
      return -1;
    }
    return 0;
  });
};

const genericSort = <T>(data: Array<T>, key: keyof T) => {
  return data.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  });
};

export const sortedByBar = sortByBar(fooBar);
export const sortedByFoo = sortByFoo(fooBar);

export const sortedByBarGen = genericSort(fooBar, "foo");
