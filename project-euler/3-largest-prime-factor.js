let largestPrime = 0;
let num = 600851475143;
let num1 = 2;

while (num / num1 !== 1) {
  const num2 = num / num1;
  if (String(num2).includes(".")) {
    num1++;
  } else {
    largestPrime = Math.max(largestPrime, num1);
    num1 = 2;
    num = num2;
  }
}
largestPrime = Math.max(largestPrime, num1);
console.log(largestPrime);
