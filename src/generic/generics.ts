interface FooBar {
  foo: string;
  bar: Date;
  age: number;
}

export const fooBar: Array<FooBar> = [
  {
    foo: "Cill",
    bar: new Date(2010, 4, 3),
    age: 12,
  },
  {
    foo: "Daniel San",
    bar: new Date(2005, 1, 5),
    age: 32,
  },
  {
    foo: "Asadora Ribeiro",
    bar: new Date(2004, 2, 2),
    age: 16,
  },
];

export const sortByBar = (bar: Array<FooBar>) => {
  return bar.sort((a: FooBar, b: FooBar) => {
    if (a["bar"] > b["bar"]) {
      return 1;
    } else if (a["bar"] < b["bar"]) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const sortByAge = (age: Array<FooBar>) => {
  return age.sort((a: FooBar, b: FooBar) => {
    if (a["age"] > b["age"]) {
      return 1;
    } else if (a["age"] < b["age"]) {
      return -1;
    } else {
      return 0;
    }
  });
};
export const sortByFoo = (age: Array<FooBar>) => {
  return age.sort((a: FooBar, b: FooBar) => {
    if (a["foo"] > b["foo"]) {
      return 1;
    } else if (a["foo"] < b["foo"]) {
      return -1;
    } else {
      return 0;
    }
  });
};
const genericSort = <T>(data: Array<T>, key: keyof T) => {
  return data.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    } else if (a[key] < b[key]) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const sortedGenFoo = genericSort<FooBar>(fooBar, "foo");
