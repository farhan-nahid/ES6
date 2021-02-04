// function doubleIt(num) {
//   return num * 2;
// }

// const doubleIt = function myFun(num) {
//   return num * 2;
// };

const doubleIt = (num) => num * 2; //ES6 arrow function single parameter
const add = (x, y) => x + y; //ES6 arrow function more then one parameter
const giveNumber = () => 10; //ES6 arrow function without parameter
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

const result = add(50, 70);
const result2 = giveNumber();
const result3 = doMath(12, 8);
console.log(result);
console.log(result2);
console.log(result3);
