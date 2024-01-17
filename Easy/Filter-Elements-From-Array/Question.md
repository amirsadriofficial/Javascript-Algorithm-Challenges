2634. **Filter Elements from Array**

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.<br>

The fn function takes one or two arguments:
- arr[i] - number from the arr<br>
- i - index of arr[i]<br>

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.<br>



Example 1:<br>
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }<br>
Output: [20,30]<br>
Explanation:<br>
const newArray = filter(arr, fn); // [20, 30]<br>
The function filters out values that are not greater than 10<br>

Example 2:<br>
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }<br>
Output: [1]<br>
Explanation:<br>
fn can also accept the index of each element<br>
In this case, the function removes elements not at index 0<br>

Example 3:<br>
Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }<br>
Output: [-2,0,1,2]<br>
Explanation:<br>
Falsey values such as 0 should be filtered out<br>

Constraints:<br>
0 <= arr.length <= 1000<br>
-109 <= arr[i] <= 109