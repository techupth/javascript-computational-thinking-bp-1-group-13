const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];
let highPrice = 0
function getMostExpensiveProduct(products) {
  for(let key in products){
  console.log(products[key].price)
  if(products[key].price > highPrice){
     return highPrice = products[key]
     }
   }
}

console.log(getMostExpensiveProduct(products)); // Output: { name: "Laptop", price: 1000 }
