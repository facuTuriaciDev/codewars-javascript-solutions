/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
· Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
· In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
· Beware: r must be without duplicates.
*/

function inArray(arr1, arr2) {

  let arr = [];

  arr1.map((x) => {
    arr2.map((y) => {
      if (y.includes(x) && !arr.includes(x)) arr.push(x);
    })
  });

  return arr.sort();
}