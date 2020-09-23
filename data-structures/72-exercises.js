// 1.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * efficient
 * time complexity O(n)
 * space complexity O(n)
 * @param {number[]} numbers
 * @param {number} target
 */
function findIndexesOfTargetSum(numbers, target) {
  const numberIndexMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (numberIndexMap[number] !== undefined) {
      return [numberIndexMap[number], i];
    }
    numberIndexMap[target - number] = i;
  }
}

console.log(findIndexesOfTargetSum([3, 2, 4], 6));

// 2.
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 *
 * @param {number[]} numbers
 */
function largestSumSubArray(numbers) {
  if (numbers.length === 0) throw new Error("Numbers should not be empty");

  let largestSum;
  let subarrayLength = 1;
  let startIndex = 0;

  while (startIndex + subarrayLength <= numbers.length) {
    if (startIndex + subarrayLength === numbers.length) {
      startIndex = 0;
      subarrayLength++;
      continue;
    }

    let number = 0;
    for (let i = 0; i < subarrayLength; i++) {
      number = number + numbers[i + startIndex];
    }
    if (largestSum === undefined) {
      largestSum = number;
      startIndex++;
      continue;
    }
    if (largestSum > number) {
      startIndex++;
      continue;
    }
    largestSum = number;
    startIndex++;
  }

  return largestSum;
}

console.log(largestSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
