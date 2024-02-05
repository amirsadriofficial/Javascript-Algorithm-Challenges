29. **Divide Two Integers**

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.<br>

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.<br>

Return the quotient after dividing dividend by divisor.<br>

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.<br>

 

Example 1:<br>
Input: dividend = 10, divisor = 3<br>
Output: 3<br>
Explanation: 10/3 = 3.33333.. which is truncated to 3.<br>

Example 2:<br>
Input: dividend = 7, divisor = -3<br>
Output: -2<br>
Explanation: 7/-3 = -2.33333.. which is truncated to -2.<br>

Constraints:<br>
-231 <= dividend, divisor <= 231 - 1<br>
divisor != 0
