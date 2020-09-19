# Rule 4 Drop Non Dominant Terms

example

```javascript
function logItemsAndPairs(array) {
  array.forEach((item) => {
    console.log(item);
  });
  array.forEach((item1) => {
    array.forEach((item2) => {
      console.log(item1, item2);
    });
  });
}

logItemsAndPairs([1, 2, 3, 4]);
// O(n + n^2) -> O(n^2)
// here we drop the first n because n^2 is more important than n
```

example

O(n^2 + 3n + 1000 + n/2) becomes O(n^2)
