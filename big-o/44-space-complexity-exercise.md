# Space Complexity Exercise

```javascript
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logItems([1, 2, 3, 4]); // O(1)

function addNewToItems(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(`new ${array[i]}`);
  }
  return newArray;
}

console.log(addNewToItems([1, 2, 3, 4])); // O(n)
```
