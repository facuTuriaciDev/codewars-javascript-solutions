/*
Given a string, swap the case for each of the letters.

Examples
""           -->   ""
"CodeWars"   -->   "cODEwARS"
"abc"        -->   "ABC"
"ABC"        -->   "abc"
"123235"     -->   "123235"

https://www.codewars.com/kata/5590961e6620c0825000008f
*/

const swap = str => str.split('').map(c => c = c.includes(c.toUpperCase()) ? c.toLowerCase() : c.toUpperCase()).join('');