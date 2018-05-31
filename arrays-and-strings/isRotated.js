// Assume you have a method 'isSubstring' which checks if one word is a substring of another.
// Given two strings, s1 and s2 write code to check if s2 is a rotation of s1 using only one call
// to 'isSubstring'.

const isRotated = (s1, s2) => {
  s1 = s1 + s1;
  return s1.includes(s2)
}


console.log(isRotated('waterbottle', 'erbottlewat')) // => true
console.log(isRotated('ari', 'dani')) // => // false