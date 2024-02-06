2693. **Call Function with Custom Context**

Enhance all functions to have the callPolyfill method. The method accepts an object obj as it's first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).<br>

For example if you had the function:<br>

function tax(price, taxRate) {<br>
  const totalCost = price * (1 + taxRate);<br>
  console.log(`The cost of ${this.item} is ${totalCost}`);<br>
}<br>
Calling this function like tax(10, 0.1) will log "The cost of undefined is 11". This is because the this context was not defined.<br>

However, calling the function like tax.callPolyfill({item: "salad"}, 10, 0.1) will log "The cost of salad is 11". The this context was appropriately set, and the function logged an appropriate output.<br>

Please solve this without using the built-in Function.call method.<br>

 

Example 1:<br>
Input:<br>
fn = function add(b) {<br>
  return this.a + b;<br>
}<br>
args = [{"a": 5}, 7]<br>
Output: 12<br>
Explanation:<br>
fn.callPolyfill({"a": 5}, 7); // 12<br>
callPolyfill sets the "this" context to {"a": 5}. 7 is passed as an argument.<br>

Example 2:<br>
Input: <br>
fn = function tax(price, taxRate) { <br>
 return `The cost of the ${this.item} is ${price * taxRate}`; <br>
}<br>
args = [{"item": "burger"}, 10, 1.1]<br>
Output: "The cost of the burger is 11"<br>
Explanation: callPolyfill sets the "this" context to {"item": "burger"}. 10 and 1.1 are passed as additional arguments.<br>

Constraints:<br>
typeof args[0] == 'object' and args[0] != null<br>
1 <= args.length <= 100<br>
2 <= JSON.stringify(args[0]).length <= 105
