const fs = require('fs')
const rawData = fs.readFileSync(__dirname + '/data.txt', {encoding: 'utf-8'});
const data = rawData
  .trim()
  .split(/\n/)
  .map(bit => bit.split(''))



  //1) get an array with all the same positioned bits
  //2) get all ones in one array and all zeros in another
  //3) compare the two arrays
  //4) add the most common bit to gamma array - add least common bit to epsilon array
  //5) recalculate byte to decimal number by 0b[byte]
  //6) multiply gamma by epsilon

  let bitsArray = []
  let zeros = []
  let ones = []
  let mostCommon = []
  let leastCommon = []

  //1)
  function createBitsArray(index, array){  
    let tempArray = []
    if (index == array[0].length){
      return
    }
    for(x=0; x < array.length; x++){
      let number = array[x][index]
      tempArray.push(number)
    }
    bitsArray.push(tempArray)
    index +=1
  createBitsArray(index, array)
}

//2)
function sortNumbers(){
  for(x=0; x < bitsArray.length; x++){
    ones.push(bitsArray[x].filter(isOne => isOne === '1' ))
    zeros.push(bitsArray[x].filter(isOne => isOne === '0' ))
  }  
}
//3+4)
function getCommons(){
  if( ones.length == zeros.length){  
    for(x = 0; x < ones.length; x++){
      if(zeros[x].length > ones[x].length){
        mostCommon.push(0)
        leastCommon.push(1)
      } else {
        mostCommon.push(1)
        leastCommon.push(0)
      }
    }
  } else {
    return "error: array are not equally long"
  }
}
//5)
function getDecimal(bin){
  const reducer = (previous, currentValue) => previous * 2 + currentValue
  const decimal = bin.reduce(reducer)
  return decimal
}

createBitsArray(0, data)
sortNumbers()
getCommons()

const gamma = getDecimal(mostCommon)
const epsilon = getDecimal(leastCommon)

//6)
const result = gamma * epsilon

console.log("The power consumption of the submarine is " + result)