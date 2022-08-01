/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') {
      str[i] = '';
      str[i + 1] = str[i + 1].toUpperCase();
    }
  }
  str = str.join('')
  return str;
}