let sum1 = 0;
let sum2 = 0;

for (let i = 1; i < 101; i++) {
  sum1 += i * i;
  sum2 += i;
}

const result = sum2 * sum2 - sum1;
console.log(result);
