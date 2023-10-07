function getLetterFrequency(words) {
  let wordsLowerCase = words.toLowerCase();
  console.log(wordsLowerCase)
  let ojectOutput = {};
  let count = 0 ;

  for (let i of wordsLowerCase){
    count += 1
    console.log(i)
    if(ojectOutput.hasOwnProperty(i) === true){
      ojectOutput[i] = ojectOutput[i] + 1;
      count = 0
    }
    else{
      ojectOutput[i] = count;
      count = 0
      console.log(ojectOutput[i])
    }
  }
  return ojectOutput
}



const str = "Techupeth";

console.log(getLetterFrequency(str));

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
