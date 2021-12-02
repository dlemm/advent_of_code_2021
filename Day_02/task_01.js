const fs = require('fs')
const rawData = fs.readFileSync(__dirname + '/data.txt', {encoding: 'utf-8'});
const data = rawData
  .trim()
  .split(/\n/)

let horizontalPosition = 0
let verticalPosition = 0

//Sort the input
const forward = data.filter(direction => direction.includes('forward'))
const up = data.filter(direction => direction.includes('up'))
const down = data.filter(direction => direction.includes('down'))

//get the numbers and add them to the position
function getDirectionDigit(array, direction){
  const regex = /\d+/g;
  for(let i = 0; i < array.length; i++){
    const number = array[i].match(regex)
    if(direction === 'forward'){
      horizontalPosition += parseInt(number)
    } else if (direction === 'down'){
      verticalPosition += parseInt(number)
    } else if (direction === 'up'){
      verticalPosition -= parseInt(number)
    }
  }
}


getDirectionDigit(forward, 'forward');
getDirectionDigit(up, 'up');
getDirectionDigit(down, 'down');

const solution = horizontalPosition * verticalPosition;

console.log(`${solution} is what I get if I multiply my final horizontal position by my final depth`)
