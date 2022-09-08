/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

https://www.codewars.com/kata/55ecd718f46fba02e5000029
*/

function between(a, b) {
  let res = [];

  for (var i = a; i < b + 1; i++) {
    res.push(i);
  }

  return res;
}