let sum = 2;
let prev1 = 1;
let prev2 = 2;
let i = 3;
let number = 0;

while (number <= 4000000) {
  number = prev1 + prev2;
  if (number % 2 === 0) {
    sum += number;
  }

  prev1 = prev2;
  prev2 = number;
  i++;
}

console.log(sum);
