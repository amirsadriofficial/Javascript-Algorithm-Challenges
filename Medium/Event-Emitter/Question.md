2694. **Event Emitter**

Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.<br>

Your EventEmitter class should have the following two methods:<br>

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.<br>
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.<br>
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.<br>
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.<br>
 

Example 1:<br>
Input: <br>
actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], <br>
values = [[], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]<br>
Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]<br>
Explanation: <br>
const emitter = new EventEmitter();<br>
emitter.emit("firstEvent"); // [], no callback are subscribed yet<br>
emitter.subscribe("firstEvent", function cb1() { return 5; });<br>
emitter.subscribe("firstEvent", function cb2() { return 6; });<br>
emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2<br>

Example 2:<br>
Input: <br>
actions = ["EventEmitter", "subscribe", "emit", "emit"], <br>
values = [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]<br>
Output: [[],["subscribed"],["emitted",["1,2,3"]],["emitted",["3,4,6"]]]<br>
Explanation: Note that the emit method should be able to accept an OPTIONAL array of arguments.<br>
const emitter = new EventEmitter();<br>
emitter.subscribe("firstEvent, function cb1(...args) { return args.join(','); });<br>
emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]<br>
emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]<br>

Example 3:<br>
Input: <br>
actions = ["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"], <br>
values = [[], ["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]<br>
Output: [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[]]]<br>
Explanation:<br>
const emitter = new EventEmitter();<br>
const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));<br>
emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]<br>
sub.unsubscribe(); // undefined<br>
emitter.emit("firstEvent", [4, 5, 6]); // [], there are no subscriptions<br>

Example 4:<br>
Input: <br>
actions = ["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"], <br>
values = [[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]]<br>
Output: [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[7]]]<br>
Explanation:<br>
const emitter = new EventEmitter();<br>
const sub1 = emitter.subscribe("firstEvent", x => x + 1);<br>
const sub2 = emitter.subscribe("firstEvent", x => x + 2);<br>
sub1.unsubscribe(); // undefined<br>
emitter.emit("firstEvent", [5]); // [7]<br>

Constraints:<br>
1 <= actions.length <= 10<br>
values.length === actions.length<br>
All test cases are valid, e.g. you don't need to handle scenarios when unsubscribing from a non-existing subscription.<br>
There are only 4 different actions: EventEmitter, emit, subscribe, and unsubscribe.<br>
The EventEmitter action doesn't take any arguments.<br>
The emit action takes between either 1 or 2 arguments. The first argument is the name of the event we want to emit, and the 2nd argument is passed to the callback functions.<br>
The subscribe action takes 2 arguments, where the first one is the event name and the second is the callback function.<br>
The unsubscribe action takes one argument, which is the 0-indexed order of the subscription made before.<br>
