// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string 'aabcccccaaa' would become
// 'a2b1c5a3'. If the "compressed" string would not become smaller than the
// original string, your method should return the original string. You can 
// assume the string has only uppercase and lowercase letters.

const compressString = string => {
  let newStr = string[0];
  let repeats = 1;

  for (let i = 1; i < string.length; i++) {
    const char = string[i];
    const prevChar = string[i - 1];
    if (char === prevChar) {
      repeats++;
      if (i === string.length - 1) newStr += repeats;
    } else {
      newStr += repeats + char;
      repeats = 1;
    }
  }
  return newStr.length < string.length ? newStr : string;
}

console.log(compressString('aabcccccaaa')); // => 'a2b1c5a3
console.log(compressString('aaahgieeoooooouuuuu')); // => 'a3h1g1i1e2o6u5'
console.log(compressString('abc')) // => 'abc'