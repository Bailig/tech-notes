function getPrimeSum(num) {
  let primeSum = 0;

  for (let i = 2; i < num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeSum += i;
    }
  }
  return primeSum;
}

function getPrimeSum2(num) {
  const numArr = [0, 0];

  // O(n)
  for (let i = 2; i < num; i++) {
    numArr.push(i);
  }

  // O(n)?
  for (let i = 2; i < num; i++) {
    if (num[i] === 0) continue;

    // O(n/2)
    for (let j = 2 * i; j < num; j += i) {
      numArr[j] = 0;
    }
  }

  let sum = 0;
  numArr.forEach((n) => {
    sum += n;
  });
  return sum;
}

// console.log(getPrimeSum(2000000));
console.log(getPrimeSum2(2000000));
// console.log(getPrimeSum2(10));
