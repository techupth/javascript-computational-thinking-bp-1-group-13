function countVowels(words) {
  let wordsLowerCase = words.toLowerCase();
  let count = 0;
  let filter = ["a","e","i","o","u"]

  for (let letter of wordsLowerCase) {
    if(filter.includes(letter)){
      count += 1
    }
  }

  return count
}

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("TechUp")); // Output: 2

