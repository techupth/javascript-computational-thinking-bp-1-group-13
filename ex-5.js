function getLetterFrequency(words) {
  // Start coding here
  let wordsLowerCase = words.toLowerCase();
  let ojectOutput = {};
  let count = 0 ;

  for (let i in wordsLowerCase){
    count += 1
    if(ojectOutput.hasOwnProperty(wordsLowerCase[i]) === true){
      count += 1
      ojectOutput[wordsLowerCase[i]] = count;
      count = 0
    }
    else{
      ojectOutput[wordsLowerCase[i]] = count;
      count = 0
    }
  }
  return ojectOutput
}

const str = "Techupth";

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
