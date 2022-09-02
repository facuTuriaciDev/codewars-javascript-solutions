/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

  · i increments the value (initially 0)
  · d decrements the value
  · s squares the value
  · o outputs the value into the return array
  Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

https://www.codewars.com/kata/51e0007c1f9378fa810002a9
*/

// Return the output array, and ignore all non-op characters
function parse(data) {
  let firstParam = 0;
  let arr = [];

  data.split('').map((e) => {
    switch (e) {
      case 'i': firstParam++; break;
      case 'd': firstParam--; break;
      case 's': firstParam *= firstParam; break;
      case 'o': arr.push(firstParam);
    }
  });

  return arr;
}