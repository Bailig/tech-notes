// merge sort is a divide and conquer algorithm

// time complexity O(n log n)
// space complexity O(n)
function mergeSort(array) {
  if (array.length <= 1) return array;

  const leftHalf = array.slice(0, array.length / 2);
  const rightHalf = array.slice(array.length / 2, Infinity);
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  const result = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < sortedLeftHalf.length || index2 < sortedRightHalf.length) {
    const first = sortedLeftHalf[index1];
    const last = sortedRightHalf[index2];

    if (first === undefined) {
      result.push.apply(result, sortedRightHalf.slice(index2, Infinity));
      break;
    }
    if (last === undefined) {
      result.push.apply(result, sortedLeftHalf.slice(index1, Infinity));
      break;
    }
    if (first === last) {
      result.push(first);
      result.push(last);
      index1++;
      index2++;
    } else if (first < last) {
      result.push(first);
      index1++;
    } else if (first > last) {
      result.push(last);
      index2++;
    }
  }
  return result;
}

console.log(mergeSort([5, 3, 6, 2, 3, 4]));
