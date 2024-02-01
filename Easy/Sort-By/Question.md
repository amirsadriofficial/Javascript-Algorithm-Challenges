2724. **Sort By**

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.<br>

You may assume that fn will never duplicate numbers for a given array.<br>

 

Example 1:<br>
Input: arr = [5, 4, 1, 2, 3], fn = (x) => x<br>
Output: [1, 2, 3, 4, 5]<br>
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.<br>

Example 2:<br>
Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x<br>
Output: [{"x": -1}, {"x": 0}, {"x": 1}]<br>
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.<br>

Example 3:<br>
Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]<br>
Output: [[10, 1], [5, 2], [3, 4]]<br>
Explanation: arr is sorted in ascending order by number at index=1. <br>

Constraints:<br>
arr is a valid JSON array<br>
fn is a function that returns a number<br>
1 <= arr.length <= 5 * 105
