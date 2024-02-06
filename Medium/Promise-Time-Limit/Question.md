2637. **Promise Time Limit**

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.<br>

The time limited function should follow these rules:<br>

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".<br>
 

Example 1:<br>
Input: <br>
fn = async (n) => { <br>
  await new Promise(res => setTimeout(res, 100)); <br>
  return n * n; <br>
}<br>
inputs = [5]<br>
t = 50<br>
Output: {"rejected":"Time Limit Exceeded","time":50}<br>
Explanation:<br>
const limited = timeLimit(fn, t)<br>
const start = performance.now()<br>
let result;<br>
try {<br>
   const res = await limited(...inputs)<br>
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};<br>
} catch (err) {<br>
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};<br>
}<br>
console.log(result) // Output<br>
The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.<br>

Example 2:<br>
Input: <br>
fn = async (n) => { <br>
  await new Promise(res => setTimeout(res, 100)); <br>
  return n * n; <br>
}<br>
inputs = [5]<br>
t = 150<br>
Output: {"resolved":25,"time":100}<br>
Explanation:<br>
The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.<br>

Example 3:<br>
Input: <br>
fn = async (a, b) => { <br>
  await new Promise(res => setTimeout(res, 120)); <br>
  return a + b; <br>
}<br>
inputs = [5,10]<br>
t = 150<br>
Output: {"resolved":15,"time":120}<br>
Explanation:<br>
​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.<br>

Example 4:<br>
Input: <br>
fn = async () => { <br>
  throw "Error";<br>
}<br>
inputs = []<br>
t = 1000<br>
Output: {"rejected":"Error","time":0}<br>
Explanation:<br>
The function immediately throws an error.<br>

Constraints:<br>
0 <= inputs.length <= 10<br>
0 <= t <= 1000<br>
fn returns a promise
