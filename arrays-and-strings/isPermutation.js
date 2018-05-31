// Given two strings, write a method to decide if one is a permutation of the other. Case sensitive.

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const str1CharTotals = {};
  const str2CharTotals = {};

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i].toLowerCase();
    let char2 = str2[i].toLowerCase();
    if (str1CharTotals[char1]) str1CharTotals[char1]++;
    else str1CharTotals[char1] = 1;
    if (str2CharTotals[char2]) str2CharTotals[char2]++;
    else str2CharTotals[char2] = 1;
  }

  for (let char in str1CharTotals) {
    if (str2CharTotals[char] !== str1CharTotals[char]) return false;
  }
  return true;
}

console.log(isPermutation('Abc', 'cab')); // => true
console.log(isPermutation('cats', 'cat')); // => false
console.log(isPermutation('arijoseph', 'ninechars')) // => false