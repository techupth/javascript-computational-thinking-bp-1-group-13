let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

function addNumber(numbers, amount) {
  for(let i in numbers){
    numbers[i] = numbers[i] + amount
  }
  return numbers
}

console.log(addNumber(numbers, 10)) // Output: [20, 30, 40]
console.log(addNumber(anotherNumbers, 2)); // Output: [4, 6, 8]
