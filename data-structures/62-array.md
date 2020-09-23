# Array

- lookup O(1)
- push O(1)
- insert O(n)
- delete O(n)

```javascript
const a = [1, 2, 3];

a[1]); // O(1)
a.push(4); // O(1)
a.pop(); // O(1)
a.unshift(0); // O(n)
a.splice(2, 0, 9); // O(n)
a.splice(2, 1); // O(n)
```
