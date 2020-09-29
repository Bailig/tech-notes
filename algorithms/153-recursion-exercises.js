// 1. factorial

// O(n)
function recursiveFactorial(number) {
  if (number === 2) return 2;
  return recursiveFactorial(number - 1) * number;
}

console.log(recursiveFactorial(5));

// O(n)
function factorial(number) {
  if (number <= 2) return number;
  let number_ = 1;
  for (let i = 2; i <= number; i++) {
    number_ = number_ * i;
  }
  return number_;
}

console.log(factorial(5));

// 2. fibonacci
// O(2^n)
function recursiveFib(index) {
  if (index <= 1) return index;
  return recursiveFib(index - 1) + recursiveFib(index - 2);
}

console.log(recursiveFib(6));

// O(n)
function recursiveFibWithMemo(index, memo = { 0: 0, 1: 1 }) {
  if (typeof memo[index] === "number") return memo[index];
  const result =
    recursiveFibWithMemo(index - 1, memo) +
    recursiveFibWithMemo(index - 2, memo);
  memo[index] = result;
  return result;
}

console.log(recursiveFibWithMemo(6));

// O(n)
function fib(index) {
  if (index <= 1) return index;
  let number1 = 0;
  let number2 = 1;
  let result = number1 + number2;
  for (let i = 3; i <= index; i++) {
    number1 = number2;
    number2 = result;
    result = number1 + number2;
  }
  return result;
}

console.log(fib(6));

// 3. reverse string
// O(n)
function recursiveReverseString(string) {
  if (string.length === 1) return string;
  const midIndex = string.length / 2;
  const firstPart = string.slice(0, midIndex);
  const lastPart = string.slice(midIndex, Infinity);
  return recursiveReverseString(lastPart) + recursiveReverseString(firstPart);
}

console.log(recursiveReverseString("string"));

// O(n)
function reverseString(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(string.length - 1 - i);
    result += char;
  }
  return result;
}
console.log(reverseString("string"));
