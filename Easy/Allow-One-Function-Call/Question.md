2666. **Allow One Function Call**

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.<br>

The first time the returned function is called, it should return the same result as fn.<br>
Every subsequent time it is called, it should return undefined.<br>
 

Example 1:<br>
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]<br>
Output: [{"calls":1,"value":6}]<br>
Explanation:<br>
const onceFn = once(fn);<br>
onceFn(1, 2, 3); // 6<br>
onceFn(2, 3, 6); // undefined, fn was not called<br>

Example 2:<br>
Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]<br>
Output: [{"calls":1,"value":140}]<br>
Explanation:<br>
const onceFn = once(fn);<br>
onceFn(5, 7, 4); // 140<br>
onceFn(2, 3, 6); // undefined, fn was not called<br>
onceFn(4, 6, 8); // undefined, fn was not called<br>

Constraints:<br>
calls is a valid JSON array<br>
1 <= calls.length <= 10<br>
1 <= calls[i].length <= 100<br>
2 <= JSON.stringify(calls).length <= 1000<br>
