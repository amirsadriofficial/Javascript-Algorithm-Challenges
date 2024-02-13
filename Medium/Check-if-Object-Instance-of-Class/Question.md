2618. **Check if Object Instance of Class**

Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.<br>

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.<br>

 

Example 1:<br>
Input: func = () => checkIfInstanceOf(new Date(), Date)<br>
Output: true<br>
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.<br>

Example 2:<br>
Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }<br>
Output: true<br>
Explanation:<br>
class Animal {};<br>
class Dog extends Animal {};<br>
checkIfInstanceOf(new Dog(), Animal); // true<br>
Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.<br>

Example 3:<br>
Input: func = () => checkIfInstanceOf(Date, Date)<br>
Output: false<br>
Explanation: A date constructor cannot logically be an instance of itself.<br>

Example 4:<br>
Input: func = () => checkIfInstanceOf(5, Number)<br>
Output: true<br>
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".
