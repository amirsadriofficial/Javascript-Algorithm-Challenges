2648. **Generate Fibonacci Sequence**

Write a generator function that returns a generator object which yields the fibonacci sequence.<br>

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.<br>

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.<br>

 

Example 1:<br>
Input: callCount = 5<br>
Output: [0,1,1,2,3]<br>
Explanation:<br>
const gen = fibGenerator();<br>
gen.next().value; // 0<br>
gen.next().value; // 1<br>
gen.next().value; // 1<br>
gen.next().value; // 2<br>
gen.next().value; // 3<br>

Example 2:<br>
Input: callCount = 0<br>
Output: []<br>
Explanation: gen.next() is never called so nothing is outputted<br>

Constraints:<br>
0 <= callCount <= 50
