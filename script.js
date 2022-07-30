const number1 = 6;
const number2 = 2;
//Adds
function Add(num1, num2) {
  return num1 + num2;
}

//subtract
function Sub(num1, num2) {
  return num1 - num2;
}

//Multiply
function Multiply(num1, num2) {
  return num1 * num2;
}

//divide
function divide(num1, num2) {
  return num1 / num2;
}
console.log("Add:  " + Add(number1, number2));
console.log("Subtract:  " + Sub(number1, number2));
console.log("Multiply:  " + Multiply(number1, number2));
console.log("Divide:  " + divide(number1, number2));

const concatStrings = function(str1, str2) {
  return str1.concat(" ", str2);
}
console.log("String concatination  :" + concatStrings("Hello", "world"));

const pi = 3.14;

var area = (r, height) => {
  return (2 * pi * Math.pow(r, 2) + 2 * r * height * pi);
}

console.log("The area = " + area(4, 5));
