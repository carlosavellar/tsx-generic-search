interface IFooBar {
  foo: string;
  bar: string;
}

export const FooBar: Array<IFooBar> = [
  { foo: 'foo', bar: 'bar' },
  { foo: 'Joo', bar: 'Car' },
  { foo: 'Roo', bar: 'Gar' },
];

export const sortFoo = (data: Array<IFooBar>) => {
  return data.sort((a, b) => {
    if (a.foo > b.foo) {
      return 1;
    } else if (a.foo < b.foo) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const barList = (data: Array<IFooBar>) => {
  debugger;
  return data.sort((a, b) => {
    if (a.bar > b.bar) {
      return 1;
    } else if (a.bar < b.bar) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const sortAll = <T extends IFooBar>(data: Array<T>, key: keyof T) => {
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

class Animal {
  countLegs: number;
  constructor(count: number) {
    this.countLegs = count;
  }
}

class Cat extends Animal {
  constructor() {
    super(4);
  }
}
class Human extends Animal {
  constructor() {
    super(2);
  }
}

class Bacteria {
  constructor() {}
}

const printLegs = <T extends Animal>(legs: T) => {
  console.log(legs.countLegs);
};

const human = new Human();

printLegs(human);