"use strict";
a = 'this is'
{ a = "something else" }
console.log(a)

///////////////////////////////////////

const arr = ['t', 'a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.length)
for (let i = 0; i < arr.length; i++) {
	console.log(i)
}

/////////////////////////////////////////
// Solution of  https://leetcode.com/problems/two-sum/

const nums = [2, 5, 5, 11]
let target = 10;
const twoSum = function (nums, target) {

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i!=j) {
				if (nums[i] + nums[j] == target) {
					console.log(i, j)
					return;
				}
			}
		}
	}
}
let a = twoSum(nums, target)
console.log(a)
