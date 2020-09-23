const array1 = [1, 2, 3, 6, 8];
const array2 = [3, 4, 6, 6, 7, 9, 40, 50, 51, 54];

/**
 * efficient
 * time complexity O(a + b)
 * space complexity O(a + b)
 * @param {number[]} array1
 * @param {number[]} array2
 */
function mergeSortedArrays(array1, array2) {
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  const mergedArray = [];
  let index1 = 0;
  let index2 = 0;

  while (array1.length > index1 || array2.length > index2) {
    const item1 = array1[index1];
    const item2 = array2[index2];
    if (item1 === undefined) {
      mergedArray.push(item2);
      index2++;
      continue;
    }
    if (item2 === undefined) {
      mergedArray.push(item1);
      index1++;
      continue;
    }

    if (item1 < item2) {
      mergedArray.push(item1);
      index1++;
    } else if (item2 < item1) {
      mergedArray.push(item2);
      index2++;
    } else {
      mergedArray.push.apply(mergedArray, [item1, item2]);
      index1++;
      index2++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays(array1, array2));

/**
 * readable
 * @param {number[]} array1
 * @param {number[]} array2
 */
function mergeSortedArrays2(array1, array2) {
  return array1.concat(array2).sort((a, b) => a - b);
}

console.log(mergeSortedArrays2(array1, array2));
