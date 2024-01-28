2677. **Chunk Array**

Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.<br>

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.<br>

Please solve it without using lodash's _.chunk function.<br>

 

Example 1:<br>
Input: arr = [1,2,3,4,5], size = 1<br>
Output: [[1],[2],[3],[4],[5]]<br>
Explanation: The arr has been split into subarrays each with 1 element.<br>

Example 2:<br>
Input: arr = [1,9,6,3,2], size = 3<br>
Output: [[1,9,6],[3,2]]<br>
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.<br>

Example 3:<br>
Input: arr = [8,5,3,2,6], size = 6<br>
Output: [[8,5,3,2,6]]<br>
Explanation: Size is greater than arr.length thus all elements are in the first subarray.<br>

Example 4:<br>
Input: arr = [], size = 1<br>
Output: []<br>
Explanation: There are no elements to be chunked so an empty array is returned.<br>

Constraints:<br>
arr is a valid JSON array<br>
2 <= JSON.stringify(arr).length <= 105<br>
1 <= size <= arr.length + 1
