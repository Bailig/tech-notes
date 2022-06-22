# Dijkstra's algorithm

Helps finding what is the shortest/longest distance to every other node.

The Graph need to be

- directed
- weighted
- weight is positive

to solve graph with negative weight use Bellman-ford algorithm.

Dijkstra's algorithm has an array of infinity values to represent the distance to the node, represented by the index. The values start as infinity because we don't know if we don't know the distance yet.

Sudo code explains how Dijkstra's algorithm finds shortest distance

```javascript
const distances = [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity];
const locked = [false, false, false, false, false, false];
const graph = [
  [
    [1, 4],
    [2, 2],
  ],
  [[3, 1]],
  [
    [3, 6],
    [4, 5],
  ],
  [[5, 4]],
  [[5, 10]],
];

// start from 0
distances[0] = 0;
// put distances to next nodes
distances[1] = 4;
distances[2] = 2;
// pick the shortest path to any node
// 2 < 4
// lock the 0 node
locked[0] = true;
// the shortest path to next not locked node is to node 2

// keep going from node 2
// node 2 goes to node 3 and 4, so add the previous distance to it
distances[3] = 2 + 6;
distances[4] = 2 + 5;
// pick the shortest path to any node
// 4 < 2 + 6 < 2 + 5
// lock node 2
locked[2] = true;
// the shortest distance to next not locked node is to node 1, the distance is 4 (the nodes could be saved in a priority queue compared by the distances)

// keep going from node 1
// 4 + 1 < 2 + 6
// so the new shortest distance to node 3 is 4 + 1
distances[3] = 4 + 1;
// lock node 1
locked[1] = true;
// find the shortest distance to next not locked node and keep going

// ...

// eventually the shortest distance to the node you want is gonna be in the distances array
```

Problems:

- [Network Delay Time](https://leetcode.com/problems/network-delay-time/) // space: O(e + n); time: O(e \* log(n))
