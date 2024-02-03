2627. **Debounce**

Given a function fn and a time in milliseconds t, return a debounced version of that function.<br>

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.<br>

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.<br>

The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.<br>

Please solve it without using lodash's _.debounce() function.<br>

 

Example 1:<br>
Input: <br>
t = 50<br>
calls = [<br>
  {"t": 50, inputs: [1]},<br>
  {"t": 75, inputs: [2]}<br>
]<br>
Output: [{"t": 125, inputs: [2]}]<br>
Explanation:<br>
let start = Date.now();<br>
function log(...inputs) { <br>
  console.log([Date.now() - start, inputs ])<br>
}<br>
const dlog = debounce(log, 50);<br>
setTimeout(() => dlog(1), 50);<br>
setTimeout(() => dlog(2), 75);<br>
The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms<br>
The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).<br>

Example 2:<br>
Input: <br>
t = 20<br>
calls = [<br>
  {"t": 50, inputs: [1]},<br>
  {"t": 100, inputs: [2]}<br>
]<br>
Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]<br>
Explanation:<br>
The 1st call is delayed until 70ms. The inputs were (1).<br>
The 2nd call is delayed until 120ms. The inputs were (2).<br>

Example 3:<br>
Input: <br>
t = 150<br>
calls = [<br>
  {"t": 50, inputs: [1, 2]},<br>
  {"t": 300, inputs: [3, 4]},<br>
  {"t": 300, inputs: [5, 6]}<br>
]<br>
Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]<br>
Explanation:<br>
The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).<br>
The 2nd call is cancelled by the 3rd call<br>
The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).<br>
 

Constraints:<br>
0 <= t <= 1000<br>
1 <= calls.length <= 10<br>
0 <= calls[i].t <= 1000<br>
0 <= calls[i].inputs.length <= 10
