2629. **Function Composition**

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.<br>

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).<br>

The function composition of an empty list of functions is the identity function f(x) = x.<br>

You may assume each function in the array accepts one integer as input and returns one integer as output.<br>

 

Example 1:<br>
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4<br>
Output: 65<br>
Explanation:<br>
Evaluating from right to left ...<br>
Starting with x = 4.<br>
2 * (4) = 8<br>
(8) * (8) = 64<br>
(64) + 1 = 65<br>

Example 2:<br>
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1<br>
Output: 1000<br>
Explanation:<br>
Evaluating from right to left ...<br>
10 * (1) = 10<br>
10 * (10) = 100<br>
10 * (100) = 1000<br>

Example 3:<br>
Input: functions = [], x = 42<br>
Output: 42<br>
Explanation:<br>
The composition of zero functions is the identity function<br>

Constraints:<br>
-1000 <= x <= 1000<br>
0 <= functions.length <= 1000<br>
all functions accept and return a single integer
