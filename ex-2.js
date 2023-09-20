function countVowels(words) {
  let wordsLowerCase = words.toLowerCase();
  let count = 0;
  let filter = ["a","e","i","o","u"]
  // Start coding here
  for(let letters of wordsLowerCase){
    for(let i of filter){
      if(letters === i ){
        count = count + 1
      }
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("TechUp")); // Output: 2

