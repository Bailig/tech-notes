# Heap

Heap is complete binary tree structure.

Complete binary tree's every level is full except the last level. If the last level is not full, the nodes must be as pushed to the left as possible.

There are two variations of the heap, Min Heap and Max Heap.

## Max Heap

For a node in a max heap, all of it's children must be smaller than it.

- insertion: insert to the end and then sifting up. O(log n)
- deletion: remove the root (largest node), and insert the last node to root, and then swap down. O(log n)

## Min Heap

Min heap is the reverse of max heap. For a node in a min heap, all of it's children must be greater than it.

## Priority Queue

Priority queue is the same as Max Heap.
