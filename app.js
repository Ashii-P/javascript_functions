// function sayHello() {
//   console.log("Hello world!");
// }
// sayHello();
// sayHello();

function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}
sayHelloTo("Aishah");
sayHelloTo("Sam");
sayHelloTo("Frankie");
sayHello("Tim");

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}
greet("Good morning", "Sam");
greet("Hola Senior", "Frankie");
greet("Hi", "Aishah");

function add(a, b) {
  return a + b;
}
const result = add(10, 19);
console.log("The result is", result);
const anotherResult = add(12, 21.2);
console.log("Another result is", anotherResult);

function multiply(a, b) {
  return a * b;
}
const resultOne = multiply(10, 12);
console.log("The result is...", resultOne);

function subtract(a, b) {
  return a - b;
}
const subtractResult = subtract(32, 43);
console.log("The results are", subtractResult);

function divide(a, b) {
  return a / b;
}
const divideResult = divide(99, 21);
console.log("The answer is", divideResult);

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}
const resultTwo = calculate(3, 4, "*");
console.log(resultTwo);

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

const resultThree = calculator(21, 23, "+");
console.log("The Final Results are", resultThree);

//JS: Function Scope Workshop:

const myName = "Aishah";
function sayHello() {
  console.log("Hello " + myName + "!");
}
sayHello();
console.log(myName);

function sayHola() {
  const myName = "Aishah";
  console.log("Hello " + myName + "!");
}
sayHola();
console.log(myName);
