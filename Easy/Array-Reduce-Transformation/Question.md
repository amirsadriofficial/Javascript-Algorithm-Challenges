2626. **Array Reduce Transformation**

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.<br>

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.<br>

If the length of the array is 0, the function should return init.<br>

Please solve it without using the built-in Array.reduce method.<br>

 

Example 1:<br>
Input: <br>
nums = [1,2,3,4]<br>
fn = function sum(accum, curr) { return accum + curr; }<br>
init = 0<br>
Output: 10<br>
Explanation:<br>
initially, the value is init=0.<br>
(0) + nums[0] = 1<br>
(1) + nums[1] = 3<br>
(3) + nums[2] = 6<br>
(6) + nums[3] = 10<br>
The final answer is 10.<br>

Example 2:<br>
Input: <br>
nums = [1,2,3,4]<br>
fn = function sum(accum, curr) { return accum + curr * curr; }<br>
init = 100<br>
Output: 130<br>
Explanation:<br>
initially, the value is init=100.<br>
(100) + nums[0] * nums[0] = 101<br>
(101) + nums[1] * nums[1] = 105<br>
(105) + nums[2] * nums[2] = 114<br>
(114) + nums[3] * nums[3] = 130<br>
The final answer is 130.<br>

Example 3:<br>
Input: <br>
nums = []<br>
fn = function sum(accum, curr) { return 0; }<br>
init = 25<br>
Output: 25<br>
Explanation: For empty arrays, the answer is always init.<br>

Constraints: <br>
0 <= nums.length <= 1000<br>
0 <= nums[i] <= 1000<br>
0 <= init <= 1000