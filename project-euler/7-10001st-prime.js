let nth = 1;
let num = 2;

while (nth <= 10001) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    nth++;
  }
  num++;
}

console.log(num - 1);
