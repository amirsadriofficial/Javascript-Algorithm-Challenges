2667. **Create Hello World Function**

Write a function createHelloWorld. It should return a new function that always returns "Hello World".<br>
 

Example 1:<br>
Input: args = []<br>
Output: "Hello World"<br>
Explanation:<br>
const f = createHelloWorld();<br>
f(); // "Hello World"<br>
The function returned by createHelloWorld should always return "Hello World".<br>

Example 2:<br>
Input: args = [{},null,42]<br>
Output: "Hello World"<br>
Explanation:<br>
const f = createHelloWorld();<br>
f({}, null, 42); // "Hello World"<br>
Any arguments could be passed to the function but it should still always return "Hello World".<br>
 

Constraints:<br>
0 <= args.length <= 10
