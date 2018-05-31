// Given a string, write a function to check if it is a permuation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.

const palindromePerm = string => {
  const charTotals = {};

  for (let char of string) {
    if (charTotals[char]) charTotals[char]++;
    else charTotals[char] = 1;
  }

  let charsWithOddTotal = 0;

  for (let char in charTotals) {
    if (charTotals[char] % 2 === 1 && char !== ' ') charsWithOddTotal++;
    if (charsWithOddTotal > 1) return false;
  }

  return true;
}

console.log(palindromePerm('tact coa')) // => true
console.log(palindromePerm('ecarcar')) // => true
console.log(palindromePerm('notpalidnrome')) // => false