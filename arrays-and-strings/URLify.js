// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given
// the "true" length of the string.

const URLify = string => {
  let newStr = '';
  for (let char of string) {
    if (char === ' ') newStr += '%20';
    else newStr += char;
  }
  return newStr;
}

console.log(URLify('Dallas Dave, country music star')) // => 'Dallas%20Dave,%20country%20music%20star'