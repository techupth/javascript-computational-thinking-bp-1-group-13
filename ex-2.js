function countVowels(words) {
  let count = 0
  let toLowerCase = words.toLowerCase()
  let vowels = ["a","e","i","o","u"]
  for(let i of toLowerCase){
    if(vowels.includes(i)){
      count += 1
    }
    }
   return count
  }


console.log(countVowels("Hello World")); // Output: 3

console.log(countVowels("TechUp")); // Output: 2
