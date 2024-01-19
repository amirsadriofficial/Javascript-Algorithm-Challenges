/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
*/

var reduce = function(nums, fn, init) {
    if(nums.length > 0){
      let sum = init;
      for (let i=0; i<nums.length; i++){
        sum = fn(sum, nums[i])
      }
      return sum;
    }
    return init;
};

// Example
const nums = [1,2,3,4]
console.log(reduce(nums, function sum(accum, curr) { return accum + curr * curr; }, 100));
