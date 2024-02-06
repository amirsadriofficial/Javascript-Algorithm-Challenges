2715. **Timeout Cancellation**

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.<br>

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.<br>

setTimeout(cancelFn, cancelTimeMs)<br>
Initially, the execution of the function fn should be delayed by t milliseconds.<br>

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.<br>

 

Example 1:<br>
Input: fn = (x) => x * 5, args = [2], t = 20<br>
Output: [{"time": 20, "returned": 10}]<br>
Explanation: <br>
const cancelTimeMs = 50;<br>
const cancelFn = cancellable((x) => x * 5, [2], 20);<br>
setTimeout(cancelFn, cancelTimeMs);<br>
The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.<br>

Example 2:<br>
Input: fn = (x) => x**2, args = [2], t = 100<br>
Output: []<br>
Explanation: <br>
const cancelTimeMs = 50;<br>
const cancelFn = cancellable((x) => x**2, [2], 100);<br>
setTimeout(cancelFn, cancelTimeMs);<br>
The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.<br>

Example 3:<br>
Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30<br>
Output: [{"time": 30, "returned": 8}]<br>
Explanation: <br>
const cancelTimeMs = 100;<br>
const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);<br>
setTimeout(cancelFn, cancelTimeMs);<br>
The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.<br>

Constraints:<br>
fn is a function<br>
args is a valid JSON array<br>
1 <= args.length <= 10<br>
20 <= t <= 1000<br>
10 <= cancelTimeMs <= 1000
