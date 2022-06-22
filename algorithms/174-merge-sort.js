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

function mergeSort2(array, left = 0, right = array.length - 1) {
  if (left >= right) return array;
  const mid = Math.floor((left + right) / 2);

  console.log(array, "dividing left", left, mid);
  mergeSort2(array, left, mid);

  console.log(array, "dividing right", mid + 1, right);
  mergeSort2(array, mid + 1, right);

  console.log(array, "merging", left, mid, mid + 1, right);
  // merge sorted array
  const result = [];
  let i = left;
  let j = mid + 1;
  while (i <= mid && j <= right) {
    console.log({ result });
    const first = array[i];
    const second = array[j];
    console.log({ first, second });
    if (first === second) {
      result.push(first);
      result.push(second);
      i++;
      j++;
    } else if (first < second) {
      result.push(first);
      i++;
    } else if (first > second) {
      result.push(second);
      j++;
    }
  }

  while (i <= mid) {
    result.push(array[i]);
    i++;
  }
  while (j <= right) {
    result.push(array[j]);
    j++;
  }

  console.log(array, "putting back", left, right);
  // put result back to original array
  for (let i = left; i < right + 1; i++) {
    array[i] = result[i - left];
  }
  return array;
}

console.log(mergeSort2([5, 3, 6, 2, 3, 4]));
