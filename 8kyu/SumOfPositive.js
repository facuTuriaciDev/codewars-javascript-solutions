/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

https://www.codewars.com/kata/5715eaedb436cf5606000381
*/
function positiveSum(arr) {
  arr = arr.filter(e => e > 0);
  return arr = arr.length > 0 ? arr.reduce((initValue, accValue) => initValue + accValue) : 0;
}