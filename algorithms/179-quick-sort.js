// time complexity O(n log n)
function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return array;
  const pivot = array[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    const element = array[i];
    if (element < pivot) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, partitionIndex, right);

  quickSort(array, left, partitionIndex - 1);
  quickSort(array, partitionIndex + 1, right);
  return array;
}

function swap(array, index1, index2) {
  const tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
}

console.log(quickSort([5, 3, 6, 2, 3, 4]));
