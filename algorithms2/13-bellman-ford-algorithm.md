# Bellman-ford algorithm

Can work with negative weights, but doesn't work when there is a negative cycle.

Bellman-ford algorithm depends on dynamic programming.

The basic idea is to calculate all the possible path, from every nodes to every other nodes, and pick the shortest/longest. While calculating all paths, memoize the shortest/longest path to reduce the number of computation.

## Braking Down the Implementation

Memoize the lowest costing path from a source node to every other nodes. We need to explore all paths from the source node to a target node, while exploring, We wanna memoize is the lowest cost up until each node, and then try to think every node as a new starting point with the shortest path experienced so far.

This could be achieved by traversing through all the edges and updating the cost memo.
To make sure all paths are checked, we need to perform the check n-1 time (n is number of nodes). Because n-1 is the worst possible case, and the worst possible case is we need to traverse through all edges(n-1) to find perform all checks.

## Detect negative cycle

After n-1 iteration, go one more, and if memoized costs changed, there's a negative cycle.

Problems:

- [Network Delay Time](https://leetcode.com/problems/network-delay-time/) // space: O(n); time: O(n \* e))
