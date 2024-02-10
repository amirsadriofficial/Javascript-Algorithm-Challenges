2625. **Flatten Deeply Nested Array**

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.<br>

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.<br>

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.<br>

Please solve it without the built-in Array.flat method.<br>

 

Example 1:<br>
Input<br>
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]<br>
n = 0<br>
Output<br>
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]<br>
Explanation<br>
Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened. <br>

Example 2:<br>
Input<br>
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]<br>
n = 1<br>
Output<br>
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]<br>
Explanation<br>
The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.<br>

Example 3:<br>
Input<br>
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]<br>
n = 2<br>
Output<br>
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]<br>
Explanation<br>
The maximum depth of any subarray is 1. Thus, all of them are flattened.<br>

Constraints:<br>
0 <= count of numbers in arr <= 105<br>
0 <= count of subarrays in arr <= 105<br>
maxDepth <= 1000<br>
-1000 <= each number <= 1000<br>
0 <= n <= 1000
