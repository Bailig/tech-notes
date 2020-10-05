// normal function
function addOne(number) {
  return number + 1;
}
console.log(addOne(2));

// memoized in a global variable
const cache = {};
function addOne1(number) {
  if (number in cache) {
    return cache[number];
  }
  cache[number] = number + 1;
  return cache[number];
}
console.log(addOne1(2));

// memoized in a HOF
function createAddOne() {
  const cache = {};
  return function (number) {
    if (number in cache) {
      return cache[number];
    }
    cache[number] = number + 1;
    return cache[number];
  };
}
const addOne2 = createAddOne();
console.log(addOne2(2));

// fib memo with HOF
function createFib() {
  const memo = { 0: 0, 1: 1 };
  return function (index) {
    if (index in memo) return memo[index];
    const result = fib(index - 1, memo) + fib(index - 2, memo);
    memo[index] = result;
    return result;
  };
}
const fib = createFib();
console.log(fib(6));

// fib memo with a parameter
function fib2(index, memo = { 0: 0, 1: 1 }) {
  if (index in memo) return memo[index];
  const result = fib(index - 1, memo) + fib(index - 2, memo);
  memo[index] = result;
  return result;
}
console.log(fib2(6));
