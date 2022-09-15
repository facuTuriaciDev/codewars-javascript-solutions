/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
*/

function abbrevName(name) {
  return name.toUpperCase().split(' ')[0].substring(0, 1) + '.' + name.toUpperCase().split(' ')[1].substring(0, 1);
}