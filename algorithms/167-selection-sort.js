// O(n^2)
function selectionSort(array) {
  if (array.length <= 1) return array;

  for (let j = 0; j < array.length; j++) {
    let minIndex = j;
    for (let i = j; i < array.length; i++) {
      const element = array[i];
      if (element < array[minIndex]) {
        minIndex = i;
      }
    }
    const tmp = array[j];
    array[j] = array[minIndex];
    array[minIndex] = tmp;
  }
  return array;
}

console.log(selectionSort([5, 3, 6, 2, 3, 4]));
