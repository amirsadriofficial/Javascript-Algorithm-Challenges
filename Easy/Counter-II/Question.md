2665. **Counter II**

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.<br>

The three functions are:<br>
increment() increases the current value by 1 and then returns it.<br>
decrement() reduces the current value by 1 and then returns it.<br>
reset() sets the current value to init and then returns it.<br>
 

Example 1:<br>
Input: init = 5, calls = ["increment","reset","decrement"]<br>
Output: [6,5,4]<br>
Explanation:<br>
const counter = createCounter(5);<br>
counter.increment(); // 6<br>
counter.reset(); // 5<br>
counter.decrement(); // 4<br>

Example 2:<br>
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]<br>
Output: [1,2,1,0,0]<br>
Explanation:<br>
const counter = createCounter(0);<br>
counter.increment(); // 1<br>
counter.increment(); // 2<br>
counter.decrement(); // 1<br>
counter.reset(); // 0<br>
counter.reset(); // 0<br>
 

Constraints:<br>
-1000 <= init <= 1000<br>
0 <= calls.length <= 1000<br>
calls[i] is one of "increment", "decrement" and "reset"
