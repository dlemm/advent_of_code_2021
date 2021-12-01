import {data} from '../Task_01/data.js';

const newData = []
const increasedDataPoints = [];

for(let x = 0; x < data.length; x++){
  let sumOne = data[x] + data[x+1] + data[x+2];
  newData.push(sumOne);
}

for(let y = 0; y < newData.length; y++){
  if(newData[y] < newData[y+1]){
    increasedDataPoints.push(newData[y]);
  }
}

console.log(increasedDataPoints.length);