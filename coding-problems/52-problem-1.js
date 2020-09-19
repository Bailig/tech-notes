// given 2 arrays, create a function that let's a user know whether or not these two arrays contain any common item

const array1 = ["a", "b", "y", "x"];
const array2 = ["z", "y", "x"];
const array3 = ["h", "j", "k"];

// 1. easiest
// time complexity: O(a * b)
// space complexity: O(1)
function hasCommonItem(array1 = [], array2 = []) {
  for (let i = 0; i < array1.length; i++) {
    const item1 = array1[i];
    for (let j = 0; j < array2.length; j++) {
      const item2 = array2[j];
      if (item1 === item2) return true;
    }
  }
  return false;
}

// 2. has better time complexity
// time complexity: O(a + b)
// space complexity: O(n)
function arrayToMap(array) {
  return array.reduce((memo, item) => {
    return { ...memo, [item]: true };
  }, {});
}
function hasCommonItem2(array1 = [], array2 = []) {
  const array2Map = arrayToMap(array2);
  return array1.some((item) => !!array2Map[item]);
}

// 3. more readable, but has the same time complexity with the #1
// time complexity: O(a * b)
// space complexity: O(1)
function hasCommonItem3(array1 = [], array2 = []) {
  return array1.some((item) => array2.includes(item));
}

// #1 is normally a bad solution
// #2 is generally good if the purpose is not to memory
// #3 has good readability. it's good with smaller dataset.
