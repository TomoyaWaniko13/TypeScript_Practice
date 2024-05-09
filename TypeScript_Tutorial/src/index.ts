let userName: string;
userName = 'neko-san';

let userID: string | number = 'abc1';
userID = 123;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: 'Max',
  age: 10,
  isAdmin: true,
  id: 1012913,
};

let hobbies: Array<String>;
hobbies = ['Sports', 'Cooking', 'Reading'];

function add(a: number, b: number): number {
  return a + b;
}

const calculate = (a: number, b: number, calcFn: (a: number, b: number) => number) => {
  calcFn(a, b);
};

calculate(1, 2, add);
