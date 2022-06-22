# Divide and Conquer

1. multi-branched recursion
1. breaks a problem into multiple smaller but same sub-problems
1. combines the solutions of sub-problems into the solution for the original problem

[Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

binary search is good for sorted array

[Binary Search](https://leetcode.com/problems/binary-search/)

a problem that uses binary search

Find the Start and End Number of Continuous Ranges

given an array of integers sorted in ascending order, return the starting and ending index of a given target value in array

```javascript
/**
 * the idea is use binary search to look for the target until you cannot find the target, then the previous target you found is the start/end.
 * time: O(log(n))
 * space O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRange = function (nums, target) {
  const mid = search(nums, target);
  if (mid === -1) return [-1, -1];

  let start = mid;
  let end = mid;
  let previousIndex;

  while (start !== -1) {
    previousIndex = start;
    start = search(nums, target, 0, start - 1);
  }
  start = previousIndex;
  while (end !== -1) {
    previousIndex = end;
    end = search(nums, target, end + 1, nums.length - 1);
  }
  end = previousIndex;
  return [start, end];
};

function search(nums, target, left = 0, right = nums.length - 1) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
```
