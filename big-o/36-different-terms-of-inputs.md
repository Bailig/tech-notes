# Different Terms of Inputs

example

```javascript
function doRandomStuff(array, array2) {
  array.forEach((item1) => {
    console.log(item1);
  });
  array2.forEach((item2) => {
    console.log(item2);
  });
}

doRandomStuff([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]);

// O(n + m)
```
