// find first recurring character

/**
 * time complexity O(n)
 * space complexity O(n)
 * @param {string[]} chars
 */
function findFirstRecurring(chars) {
  const charSet = new Set();
  for (const char of chars) {
    if (charSet.has(char)) return char;
    charSet.add(char);
  }
}

console.log(findFirstRecurring([1, 2, 1, 2, 3]));
console.log(findFirstRecurring([2, 2, 1, 2, 3]));
console.log(findFirstRecurring([2, 3, 1, 4, 3]));
