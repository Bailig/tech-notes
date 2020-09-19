# O(n^2)

O of n squared or O of n to the power of 2 -> quadratic time

example

```javascript
function logAllPairs(array) {
  array.forEach((item1) => {
    array.forEach((item2) => {
      console.log(item1, item2);
    });
  });
}

logAllPairs([1, 2, 3, 4]);
// O(n * n) -> O(n^2)
```
