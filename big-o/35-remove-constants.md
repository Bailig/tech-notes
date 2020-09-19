# Rule 2 Remove Constants

example

```javascript
function doRandomStuff(array) {
  console.log(array[0]);

  for (let i = 0; i < 100; i++) {
    console.log("hello");
  }

  for (let i = 0; i < array.length / 2; i++) {
    console.log(array[i]);
  }
}

doRandomStuff([1, 2, 3, 4]);

// O(1 + 100 + n/2) -> O(n)
```

example 2

```javascript
function doRandomStuff(array) {
  array.forEach((item) => {
    console.log(item);
  });
  array.forEach((item) => {
    console.log(item);
  });
}

doRandomStuff([1, 2, 3, 4]);

// O(2n) -> O(n)
```

above operations are all linear so they are all O(n) after the constants are removed
