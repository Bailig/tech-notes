// time complexity O(n log n)

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left >= right) return array;
  const partitionIndex = positionItem2(array, left, right);
  quickSort(array, left, partitionIndex - 1);
  quickSort(array, partitionIndex + 1, right);
  return array;
};

function positionItem(array, left, right) {
  const item = array[left];
  let pivotIndex = left;
  let reverse = true;
  let index = right;

  while (index !== pivotIndex) {
    if (reverse) {
      if (array[index] < item) {
        swap(array, index, pivotIndex);
        const tmp = pivotIndex;
        pivotIndex = index;
        index = tmp + 1;
        reverse = false;
      } else {
        index--;
      }
    } else {
      if (array[index] > item) {
        swap(array, index, pivotIndex);
        const tmp = pivotIndex;
        pivotIndex = index;
        index = tmp - 1;
        reverse = true;
      } else {
        index++;
      }
    }
  }
  return pivotIndex;
}

function positionItem2(array, left, right) {
  const pivot = array[right];
  let pivotIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivot) {
      swap(array, pivotIndex, i);
      pivotIndex++;
    }
  }
  swap(array, right, pivotIndex);
  return pivotIndex;
}

function swap(array, index1, index2) {
  const tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
}

console.log(quickSort([5, 3, 6, 2, 3, 9]));
