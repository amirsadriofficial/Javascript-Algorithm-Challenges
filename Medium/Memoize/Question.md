2623. **Memoize**

Given a function fn, return a memoized version of that function.<br>

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.<br>

You can assume there are 3 possible input functions: sum, fib, and factorial.<br>

sum accepts two integers a and b and returns a + b.<br>
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.<br>
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.<br>
 

Example 1:<br>
Input:<br>
fnName = "sum"<br>
actions = ["call","call","getCallCount","call","getCallCount"]<br>
values = [[2,2],[2,2],[],[1,2],[]]<br>
Output: [4,4,1,3,2]<br>
Explanation:<br>
const sum = (a, b) => a + b;<br>
const memoizedSum = memoize(sum);<br>
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.<br>
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.<br>
// "getCallCount" - total call count: 1<br>
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.<br>
// "getCallCount" - total call count: 2<br>

Example 2:<br>
Input:<br>
fnName = "factorial"<br>
actions = ["call","call","call","getCallCount","call","getCallCount"]<br>
values = [[2],[3],[2],[],[3],[]]<br>
Output: [2,6,2,2,6,2]<br>
Explanation:<br>
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));<br>
const memoFactorial = memoize(factorial);<br>
memoFactorial(2); // "call" - returns 2.<br>
memoFactorial(3); // "call" - returns 6.<br>
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.<br>
// "getCallCount" - total call count: 2<br>
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.<br>
// "getCallCount" - total call count: 2<br>

Example 3:<br>
Input:<br>
fnName = "fib"<br>
actions = ["call","getCallCount"]<br>
values = [[5],[]]<br>
Output: [8,1]<br>
Explanation:<br>
fib(5) = 8 // "call"<br>
// "getCallCount" - total call count: 1<br>

Constraints:<br>
0 <= a, b <= 105<br>
1 <= n <= 10<br>
0 <= actions.length <= 105<br>
actions.length === values.length<br>
actions[i] is one of "call" and "getCallCount"<br>
fnName is one of "sum", "factorial" and "fib"
