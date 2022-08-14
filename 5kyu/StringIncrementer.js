/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.


Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

https://www.codewars.com/kata/54a91a4883a7de5d7800009c
*/

function incrementString(str) {
  let digits = str.match(/\d+/g);
  let word = str.match(/\D+/g);

  if (digits !== null) {
    digits = digits.toString();
    let digitsIncludesZero = digits.includes('0');
    let l = digits.toString().length;
    let a = Number(++digits);
    let countZero = l - a.toString().length < 0 ? 0 : l - a.toString().length;


    if (word !== null) {
      result = word + '0'.repeat(countZero) + a.toString();

    } else {
      if (digitsIncludesZero) {
        result = '0'.repeat(countZero) + a.toString();
      } else {
        result = a.toString();
      }
    }

  }

  if (digits === null) {
    result = word + 1;
  }

  if (digits === null && word === null) {
    result = '1';
  }

  return result;
}