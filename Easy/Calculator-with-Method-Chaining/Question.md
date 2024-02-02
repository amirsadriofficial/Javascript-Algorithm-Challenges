2726. **Calculator with Method Chaining**

Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.<br>

Your Calculator class should have the following methods:<br>

add - This method adds the given number value to the result and returns the updated Calculator.<br>
subtract - This method subtracts the given number value from the result and returns the updated Calculator.<br>
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.<br>
divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.<br>
power - This method raises the result to the power of the given number value and returns the updated Calculator.<br>
getResult - This method returns the result.<br>
Solutions within 10-5 of the actual result are considered correct.<br>

 

Example 1:<br>
Input:<br>
actions = ["Calculator", "add", "subtract", "getResult"],<br>
values = [10, 5, 7]<br>
Output: 8<br>
Explanation: <br>
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8<br>

Example 2:<br>
Input: <br>
actions = ["Calculator", "multiply", "power", "getResult"], <br>
values = [2, 5, 2]<br>
Output: 100<br>
Explanation: <br>
new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100<br>

Example 3:<br>
Input: <br>
actions = ["Calculator", "divide", "getResult"], <br>
values = [20, 0]<br>
Output: "Division by zero is not allowed"<br>
Explanation: <br>
new Calculator(20).divide(0).getResult() // 20 / 0 <br>
The error should be thrown because we cannot divide by zero.<br>

Constraints:<br>
actions is a valid JSON array of strings<br>
values is a valid JSON array of numbers<br>
2 <= actions.length <= 2 * 104<br>
1 <= values.length <= 2 * 104 - 1<br>
actions[i] is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"<br>
First action is always "Calculator"<br>
Last action is always "getResult"<br>
