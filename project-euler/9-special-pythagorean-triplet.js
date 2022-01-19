let result;
for (let a = 0; a < 1000 / 3; a++) {
  for (let b = 0; b < 1000 / 2; b++) {
    const c = 1000 - a - b;
    if (a * a + b * b === c * c) {
      result = a * b * c;
      break;
    }
  }
  if (result !== undefined) {
    break;
  }
}

console.log(result);
