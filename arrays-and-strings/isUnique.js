// Given a string, determine if all characters are unique.

const isUnique = string => {
  const totals = new Set();

  for (let char of string) {
    if (totals.has(char)) return false;
    totals.add(char)
  }
  return true;
}

console.log(isUnique('abc')); // => true
console.log(isUnique('aba')); // => false