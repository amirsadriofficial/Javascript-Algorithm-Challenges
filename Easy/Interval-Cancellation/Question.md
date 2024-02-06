2725. **Interval Cancellation**

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.<br>

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.<br>

setTimeout(cancelFn, cancelTimeMs)<br>
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.<br>

Example 1:<br>
Input: fn = (x) => x _ 2, args = [4], t = 35<br>
Output:<br>
[<br>
{"time": 0, "returned": 8},<br>
{"time": 35, "returned": 8},<br>
{"time": 70, "returned": 8},<br>
{"time": 105, "returned": 8},<br>
{"time": 140, "returned": 8},<br>
{"time": 175, "returned": 8}<br>
]<br>
Explanation:<br>
const cancelTimeMs = 190;<br>
const cancelFn = cancellable((x) => x _ 2, [4], 35);<br>
setTimeout(cancelFn, cancelTimeMs);<br>
Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.<br>
1st fn call is at 0ms. fn(4) returns 8.<br>
2nd fn call is at 35ms. fn(4) returns 8.<br>
3rd fn call is at 70ms. fn(4) returns 8.<br>
4th fn call is at 105ms. fn(4) returns 8.<br>
5th fn call is at 140ms. fn(4) returns 8.<br>
6th fn call is at 175ms. fn(4) returns 8.<br>
Cancelled at 190ms<br>

Example 2:<br>
Input: fn = (x1, x2) => (x1 _ x2), args = [2, 5], t = 30<br>
Output:<br>
[<br>
{"time": 0, "returned": 10},<br>
{"time": 30, "returned": 10},<br>
{"time": 60, "returned": 10},<br>
{"time": 90, "returned": 10},<br>
{"time": 120, "returned": 10},<br>
{"time": 150, "returned": 10}<br>
]<br>
Explanation:<br>
const cancelTimeMs = 165;<br>
const cancelFn = cancellable((x1, x2) => (x1 _ x2), [2, 5], 30)<br>
setTimeout(cancelFn, cancelTimeMs)<br>
Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.<br>
1st fn call is at 0ms<br>
2nd fn call is at 30ms<br>
3rd fn call is at 60ms<br>
4th fn call is at 90ms<br>
5th fn call is at 120ms<br>
6th fn call is at 150ms<br>
Cancelled at 165ms<br>

Example 3:<br>
Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50<br>
Output:<br>
[<br>
{"time": 0, "returned": 9},<br>
{"time": 50, "returned": 9},<br>
{"time": 100, "returned": 9},<br>
{"time": 150, "returned": 9}<br>
]<br>
Explanation:<br>
const cancelTimeMs = 180;<br>
const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)<br>
setTimeout(cancelFn, cancelTimeMs)<br>
Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled.<br>
1st fn call is at 0ms<br>
2nd fn call is at 50ms<br>
3rd fn call is at 100ms<br>
4th fn call is at 150ms<br>
Cancelled at 180ms<br>

Constraints:<br>
fn is a function<br>
args is a valid JSON array<br>
1 <= args.length <= 10<br>
30 <= t <= 100<br>
10 <= cancelTimeMs <= 500
