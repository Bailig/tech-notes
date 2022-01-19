let largest = 0;
let num1 = 999;
let num2 = 999;

while (num1 > 0) {
  while (num2 > 0) {
    const num3 = num1 * num2;
    if (num3 < largest) break;

    const reversed = String(num3).split("").reverse().join("");
    if (String(num3) === reversed) {
      largest = num3;
    }
    num2--;
  }

  num2 = 999;
  if (num1 * num2 <= largest) break;
  num1--;
}
console.log(largest);
