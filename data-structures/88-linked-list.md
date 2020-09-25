# Linked List

a linked list consists of nodes where each node contains a data field and a pointer to the next node in the list. visual representation of linked list: https://visualgo.net/en/list

the elements are not stored at contiguous memory locations so traversing throw a linked list is slower than iterating an array

- prepend O(1)
- append O(1)
- lookup O(n)
- insert O(n)
- delete O(n)

pros

- the fast insertion once we have the reference of the node
- fast deletion once we have the reference of the node
- ordered
- flexible size

cons

- slow lookup
- more memory

the primary reason to choose a linked list over an array is simplicity and ability to grow and shrink as needed
