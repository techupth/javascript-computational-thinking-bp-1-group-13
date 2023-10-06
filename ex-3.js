const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let mostPrice = 0;
  let arrayNumber = 0 ;
  for (let i in products){
    if(products[i].price > mostPrice){
      mostPrice = products[i].price
      arrayNumber = i
    }
  }
  return products[arrayNumber];
}

console.log(getMostExpensiveProduct(products)); // Output: { name: "Laptop", price: 1000 }
