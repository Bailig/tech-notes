// O(n^2)
function bubbleSort(array) {
  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      const element1 = array[i];
      const element2 = array[i + 1];
      if (element1 < element2) continue;
      array[i] = element2;
      array[i + 1] = element1;
    }
  }
  return array;
}

console.log(bubbleSort([5, 3, 6, 2, 3, 4]));
