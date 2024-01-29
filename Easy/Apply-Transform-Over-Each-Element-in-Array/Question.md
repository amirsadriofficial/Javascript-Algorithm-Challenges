2635. **Apply Transform Over Each Element in Array**

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.<br>

The returned array should be created such that returnedArray[i] = fn(arr[i], i).<br>

Please solve it without the built-in Array.map method.<br>

 

Example 1:<br>
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }<br>
Output: [2,3,4]<br>
Explanation:<br>
const newArray = map(arr, plusone); // [2,3,4]<br>
The function increases each value in the array by one.<br>

Example 2:<br>
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }<br>
Output: [1,3,5]<br>
Explanation: The function increases each value by the index it resides in.<br>

Example 3:<br>
Input: arr = [10,20,30], fn = function constant() { return 42; }<br>
Output: [42,42,42]<br>
Explanation: The function always returns 42.<br>
 

Constraints:<br>
0 <= arr.length <= 1000<br>
-109 <= arr[i] <= 109<br>
fn returns a number
