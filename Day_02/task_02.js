const fs = require('fs')
const rawData = fs.readFileSync(__dirname + '/data.txt', {encoding: 'utf-8'});
const data = rawData
  .trim()
  .split(/\n/)

let horizontalPosition = 0;
let verticalPosition = 0;
let aim = 0;

//get the numbers and add them to the position
function getDirectionDigit(array){
  const regex = /\d+/g;
  for(let i = 0; i < array.length; i++){    
    let digit = array[i].match(regex)
    if(array[i].includes('forward')){
      horizontalPosition += parseInt(digit);
      verticalPosition += aim * parseInt(digit);
    } else if (array[i].includes('up')){  
      aim -= parseInt(digit);
    } else if (array[i].includes('down')){
      aim += parseInt(digit);
    }
  }
}

getDirectionDigit(data);

const solution = verticalPosition * horizontalPosition;
console.log(`${solution} is what I get if I multiply my final horizontal position by my final depth`)