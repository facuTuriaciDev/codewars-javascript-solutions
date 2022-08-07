/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes:
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
  let auxWord;
  let differentCharacter;
  word = word.toLowerCase();
  word, auxWord = word.split("");

  for (var i = 0; i < word.length; i++) {
    differentCharacter = false;
    
    for (var j = 0; j < word.length; j++) {
      if(i !== j && word[i] === word[j])
        differentCharacter = true;
    }
    
    auxWord[i] = differentCharacter ? ')' : '(';
    
  }
  
  return auxWord.join('');
}