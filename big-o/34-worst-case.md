# Rule 1 Worst Case

when calculating big o, always think about the worst case

for example,

```javascript
const greetings = ["hi", "hello", "hi"];

function findHiIndex(greetings) {
  for (let i = 0; i < greetings.length; i++) {
    const greeting = greetings[i];
    if (greeting === "hi") {
      return i;
    }
  }
}

findHiIndex(greetings); // O(n)
// the worst case is O(n)
// even though the first item is hi in greetings
```
