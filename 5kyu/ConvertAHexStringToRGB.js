/*
When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. 
Implement a function that meets these requirements:

· Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
· Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

Example
"#FF9933" --> {r: 255, g: 153, b: 51}

https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
*/

function hexStringToRGB(hexString) {
  let hex = hexString.replace('#', '').match(/.{1,2}/g);

  let map = {};

  let rgb = 'rgb';

  hex = hex.map((e, i) => {
    { map[rgb[i]] = parseInt(e, 16) }
  });

  return map;
}