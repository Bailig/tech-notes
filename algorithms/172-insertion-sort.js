// O(n^2)
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < array[0]) {
      array.splice(i, 1);
      array.unshift(element);
      continue;
    }
    for (let j = 0; j < i - 1; j++) {
      if (
        array[j] === element ||
        (array[j] < element && array[j + 1] > element)
      ) {
        array.splice(i, 1);
        array.splice(j + 1, 0, element);
        break;
      }
    }
  }
  return array;
}

console.log(insertionSort([5, 3, 6, 2, 3, 4]));
