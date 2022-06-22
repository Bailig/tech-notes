# 2D Array

1. Breadth first search
   - [Number of Islands](https://leetcode.com/problems/number-of-islands/)
   - [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
   - [Walls and Gates](https://leetcode.com/problems/walls-and-gates/)

```javascript
/**
 * Walls and Gates
 * @param {number[][]} grid
 */
function fillSepts(grid) {
  if (grid.length === 0 || grid[0].length === 0) return grid;
  const gates = getGates(grid);
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const queue = [gates];
  let layerCount = 0;
  while (queue.length > 0) {
    const layer = queue.shift();
    layerCount++;
    const newLayer = [];
    while (layer.length > 0) {
      const [x, y] = layer.shift();

      for (let i = 0; i < directions.length; i++) {
        const d = directions[i];
        const newX = d[0] + x;
        const newY = d[1] + y;
        if (grid[newY] !== undefined && grid[newY][newX] === Infinity) {
          grid[newY][newX] = layerCount;
          newLayer.push([newX, newY]);
        }
      }
    }
    if (newLayer.length > 0) {
      queue.push(newLayer);
    }
  }
}

function getGates(grid) {
  const gates = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const element = grid[y][x];
      if (element === 0) {
        gates.push([x, y]);
      }
    }
  }
  return gates;
}

const grid = [
  [Infinity, -1, 0, Infinity],
  [Infinity, Infinity, Infinity, -1],
  [Infinity, -1, Infinity, -1],
  [0, -1, Infinity, Infinity],
];

fillSepts(grid);
console.log(grid);
```
