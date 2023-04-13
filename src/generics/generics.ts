interface IFooBar {
  foo: string;
  bar: string;
}

const fooBarArr: Array<IFooBar> = [
  { foo: 'Luva', bar: 'Gar' },
  { foo: 'Soltr', bar: 'Madriar' },
  { foo: 'EInus Paulion', bar: 'Psico' },
];

const sortFoo = (items: Array<IFooBar>) => {
  return items.sort((a, b) => {
    if (a.foo > b.foo) {
      return 1;
    } else if (a.foo < b.foo) {
      return -1;
    } else {
      return 0;
    }
  });
};

const sortBar = (items: Array<IFooBar>) => {
  return items.sort((a, b) => {
    if (a.bar > b.bar) {
      return 1;
    } else if (a.bar < b.bar) {
      return -1;
    } else {
      return 0;
    }
  });
};

const sortALl = <T extends IFooBar>(data: Array<T>, key: keyof T) => {
  return data.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    } else if (a.bar < b.bar) {
      return -1;
    } else {
      return 0;
    }
  });
};
export const resultFoo2 = sortALl(fooBarArr, 'bar');
export const resultBar = sortBar(fooBarArr);
export const resultFoo = sortFoo(fooBarArr);
