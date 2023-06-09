interface FooBar {
  foo: string;
  bar: string;
}

const fooBar: Array<FooBar> = [
  { foo: "hfoo", bar: "4bar" },
  { foo: "afoo", bar: "2bar" },
  { foo: "wfoo", bar: "7bar" },
];

const sortByFoo = (data: Array<FooBar>) => {
  return data.sort((a, b) => {
    if (a.foo > b.foo) {
      return 1;
    } else if (a.foo < b.foo) {
      return -1;
    }
    return 0;
  });
};

export const sortedByFoo = sortByFoo(fooBar);
