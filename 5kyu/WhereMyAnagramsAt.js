/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false


Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

https://www.codewars.com/kata/523a86aa4230ebb5420001e1
*/

function anagrams(word, wordsArr) {
  let wordsResultArr = [];

  let wordCharCode = word.split('').map(e => e.charCodeAt(0)).reduce((a, b) => { return a + b });

  let wordsArrCharCode = wordsArr.map(txt => txt.split('').map(e => e.charCodeAt(0)));

  wordsArrCharCode = wordsArrCharCode.map(num => num.reduce((a, b) => { return a + b }));

  wordsArrCharCode.map((e, index) => { if (e === wordCharCode) wordsResultArr.push(wordsArr[index]) });

  return wordsResultArr;
}