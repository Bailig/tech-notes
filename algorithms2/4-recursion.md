# Recursion

normal recursion. space complexity is O(n) caused by the call stacks. It's because the execution context is needed for returning the final result. In this case, the required context data is x

```javascript
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
```

tail recursion. space complexity is O(1) because the function is directly returning another function call, which means the execution context of the outer function is not needed anymore so should get popped. This depends on the engine.

```javascript
function tailFactorial(x, total) {
  if (x === 0) return total;
  return tailFactorial(x - 1, total * x);
}
```
