let num = 20;
let count = 0;

while (true) {
  for (let i = 1; i < 21; i++) {
    if (num % i !== 0) break;
    count++;
  }
  if (count === 20) break;
  num++;
  count = 0;
}

console.log(num);
