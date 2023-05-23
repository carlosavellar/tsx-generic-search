interface IFooBar {
  foo: string;
  bar: string;
}

const fooBar: Array<IFooBar> = [
  { foo: "3foo", bar: "Aar" },
  { foo: "8foo", bar: "Dar" },
  { foo: "2foo", bar: "Har" },
];

const sortByFoo = (data: Array<IFooBar>) => {
  const result = () =>
    data.sort((a, b) => {
      if (a.foo > b.foo) {
        return 1;
      } else if (a.foo < b.foo) {
        return -1;
      } else {
        return 0;
      }
    });
};

export const sortedByFoo = sortByFoo(fooBar);
