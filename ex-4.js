// Start coding here

// let add = (a, b) => {
//   return a + b;
// };

// // ---------------------------

// let subtract = (a, b) => {
//   return a - b;
// };

// // ---------------------------

// let multiply = (a, b) => {
//   return a * b;
// };

// // ---------------------------

// let divide = (a, b) => {
//   return a / b;
// };
// // ---------------------------

let calculator = {
  add: (a, b) => {
    const result = a + b;
    return result;
  },
  subtract: (a, b) => {
    const result = a - b;
    return result;
  },
  multiply: (a, b) => {
    const result = a * b;
    return result;
  },
  divide: (a, b) => {
    const result = a / b;
    return result;
  },
};

console.log(calculator.add(1, 1)); // Output
console.log(calculator.subtract(100, 50)); //
console.log(calculator.multiply(10, 20)); //
console.log(calculator.divide(10, 5)); // : 2
