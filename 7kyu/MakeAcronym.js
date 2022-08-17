/*
Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW

https://www.codewars.com/kata/57a60bad72292d3e93000a5a
*/

const toAcronym = inp => inp.toUpperCase().split(' ').map(e => e[0]).join('');