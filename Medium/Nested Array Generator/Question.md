2649. **Nested Array Generator**

Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.<br>

A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.<br>

inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.<br>

 

Example 1:<br>
Input: arr = [[[6]],[1,3],[]]<br>
Output: [6,1,3]<br>
Explanation:<br>
const generator = inorderTraversal(arr);<br>
generator.next().value; // 6<br>
generator.next().value; // 1<br>
generator.next().value; // 3<br>
generator.next().done; // true<br>

Example 2:<br>
Input: arr = []<br>
Output: []<br>
Explanation: There are no integers so the generator doesn't yield anything.<br>

Constraints:<br>
0 <= arr.flat().length <= 105<br>
0 <= arr.flat()[i] <= 105<br>
maxNestingDepth <= 105
