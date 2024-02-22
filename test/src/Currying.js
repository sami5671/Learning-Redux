const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};

const level = add(5);
const level2 = add(10);

const result = level2(2)(3);

console.log(result);
