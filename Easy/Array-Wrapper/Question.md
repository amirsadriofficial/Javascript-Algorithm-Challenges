2695. **Array Wrapper**

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:<br>

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.<br>
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].<br>
 

Example 1:<br>
Input: nums = [[1,2],[3,4]], operation = "Add"<br>
Output: 10<br>
Explanation:<br>
const obj1 = new ArrayWrapper([1,2]);<br>
const obj2 = new ArrayWrapper([3,4]);<br>
obj1 + obj2; // 10<br>

Example 2:<br>
Input: nums = [[23,98,42,70]], operation = "String"<br>
Output: "[23,98,42,70]"<br>
Explanation:<br>
const obj = new ArrayWrapper([23,98,42,70]);<br>
String(obj); // "[23,98,42,70]"<br>

Example 3:<br>
Input: nums = [[],[]], operation = "Add"<br>
Output: 0<br>
Explanation:<br>
const obj1 = new ArrayWrapper([]);<br>
const obj2 = new ArrayWrapper([]);<br>
obj1 + obj2; // 0<br>

Constraints:<br>
0 <= nums.length <= 1000<br>
0 <= nums[i] <= 1000<br>
Note: nums is the array passed to the constructor<br>
