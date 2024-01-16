2620. **Counter**

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:<br>
Input: <br>
n = 10 <br>
["call","call","call"]<br>
Output: [10,11,12]<br>
Explanation: <br>
counter() = 10 // The first time counter() is called, it returns n.<br>
counter() = 11 // Returns 1 more than the previous time.<br>
counter() = 12 // Returns 1 more than the previous time.<br>

Example 2:<br>
Input: <br>
n = -2<br>
["call","call","call","call","call"]<br>
Output: [-2,-1,0,1,2]<br>
Explanation: counter() initially returns -2. Then increases after each sebsequent call.<br>
 
Constraints:<br>
-1000 <= n <= 1000<br>
0 <= calls.length <= 1000<br>
calls[i] === "call"
