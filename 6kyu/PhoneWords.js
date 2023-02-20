/*

Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:

For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

· 0 is a space in the string.
· 1 is used to separate letters with the same number.
· always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
· you cannot return digits.
· Given a empty string, return empty string.
· Return a lowercase string.

Examples:
"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "

https://www.codewars.com/kata/635b8fa500fba2bef9189473
*/
let phoneNumbers = {
  '2': 'a',
  '22': 'b',
  '222': 'c',
  '3': 'd',
  '33': 'e',
  '333': 'f',
  '4': 'g',
  '44': 'h',
  '444': 'i',
  '5': 'j',
  '55': 'k',
  '555': 'l',
  '6': 'm',
  '66': 'n',
  '666': 'o',
  '7': 'p',
  '77': 'q',
  '777': 'r',
  '7777': 's',
  '8': 't',
  '88': 'u',
  '888': 'v',
  '9': 'w',
  '99': 'x',
  '999': 'y',
  '9999': 'z',
  '*': '+',
  '0': ' ',
  'up': '#'
}

function phoneWords(stringOfNums) {
  let stringResult = [];

  function textFormater() {
    let lastNum = null;
    let lastNumRep = 0;

    for (let i = 0; i < stringOfNums.length; i++) {
      if (stringOfNums[i] === lastNum) {
        if ((lastNumRep > 1 && stringOfNums[i] != 7 && stringOfNums[i] != 9) 
            || (stringOfNums[i] == 0) 
            || ((stringOfNums[i] == 7 || stringOfNums[i] == 9) && lastNumRep > 2)) {
          lastNum = stringOfNums[i];
          stringResult.push(lastNum);
          lastNumRep = 0;
        } else {
          stringResult[stringResult.length - 1] += stringOfNums[i];
          lastNumRep++;
        } 
      } else {
        lastNum = stringOfNums[i];
        stringResult.push(lastNum);
        lastNumRep = 0;
      }
    }

    stringResult = stringResult
      .map(e => phoneNumbers[Number(e)]).join('');
  }

  textFormater();

  return stringResult;
}