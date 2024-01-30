2703. **Return Length of Arguments Passed**

Write a function argumentsLength that returns the count of arguments passed to it.<br>
 

Example 1:<br>
Input: args = [5]<br>
Output: 1<br>
Explanation:<br>
argumentsLength(5); // 1<br>
One value was passed to the function so it should return 1.<br>

Example 2:<br>
Input: args = [{}, null, "3"]<br>
Output: 3<br>
Explanation: <br>
argumentsLength({}, null, "3"); // 3<br>
Three values were passed to the function so it should return 3.<br>

Constraints:<br>
args is a valid JSON array<br>
0 <= args.length <= 100
